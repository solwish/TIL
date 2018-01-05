/*
 * HS Mega Menu - jQuery Plugin
 * @version: 1.0.0 (Sun, 26 Feb 2017)
 * @requires: jQuery v1.6 or later
 * @author: HtmlStream
 * @event-namespace: .HSMegaMenu
 * @browser-support: IE9+
 * @license: 
 *
 * Copyright 2017 HtmlStream
 *
 */

;(function($){
	'use strict';


	/**
	 * Creates a mega menu.
	 * 
	 * @constructor 
	 * @param {HTMLElement|jQuery} element - The element to create the mega menu for.
	 * @param {Object} options - The options
	 */
	function MegaMenu(element, options) {

		var self = this;

		/**
		 * Current element.
		 *
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Current options set by the caller including defaults.
		 *
		 * @public 
		 */
		this.options = $.extend(true, {}, MegaMenu.defaults, options);


		/**
		 * Collection of menu elements.
		 *
		 * @private 
		 */
		this._items = $();


		Object.defineProperties( this, {

			/**
			 * Contains composed selector of menu items.
			 * 
			 * @public
			 */
			itemsSelector: {
				get: function() {
					return self.options.classMap.hasSubMenu + ',' +
								 self.options.classMap.hasMegaMenu;
				}
			},

			/**
			 * Contains chain of active items.
			 * 
			 * @private 
			 */
			_tempChain: {
				value: null,
				writable: true
			},

			/**
			 * Contains current behavior state.
			 * 
			 * @public
			 */
			state: {
				value: null,
				writable: true
			}

		});

		this.initialize();

	};


	/**
	 * Default options of the mega menu.
	 *
	 * @public 
	 */
	MegaMenu.defaults = {
		event: 'hover',
		direction: 'horizontal',
		breakpoint: 991,
		animationIn: false,
		animationOut: false,

		rtl: false,
		hideTimeOut: 300,

		// For 'vertical' direction only
		sideBarRatio: 1/4,
		pageContainer: $('body'),

		classMap: {
			initialized: '.hs-menu-initialized',
			mobileState: '.hs-mobile-state',

			subMenu: '.hs-sub-menu',
			hasSubMenu: '.hs-has-sub-menu',
			hasSubMenuActive: '.hs-sub-menu-opened',

			megaMenu: '.hs-mega-menu',
			hasMegaMenu: '.hs-has-mega-menu',
			hasMegaMenuActive: '.hs-mega-menu-opened'
		},

		mobileSpeed: 400,
		mobileEasing: 'linear',

		beforeOpen: function(){},
		beforeClose: function(){},
		afterOpen: function(){},
		afterClose: function(){}
	};


	/**
	 * Initialization of the plugin.
	 *
	 * @protected
	 */
	MegaMenu.prototype.initialize = function() {

		var self = this,
				$w = $(window);

		if( this.options.rtl ) this.$element.addClass('hs-rtl');

		this.$element
				.addClass(this.options.classMap.initialized.slice(1))
				.addClass('hs-menu-' + this.options.direction);



		// Independent events
		$w.on('resize.HSMegaMenu', function(e){

			if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

			self.resizeTimeOutId = setTimeout( function(){

				if($w.width() <= self.options.breakpoint && self.state == 'desktop') self.initMobileBehavior();
				else if( $w.width() > self.options.breakpoint && self.state == 'mobile' ) self.initDesktopBehavior();

				self.refresh();

			}, 50 );

		});

		$(document)
			.on('click.HSMegaMenu', function(e){

				var $parents = $(e.target).parents(self.itemsSelector);
				self.closeAll( $parents.add($(e.target)) );

			})
			.on('keyup.HSMegaMenu', function(e){
				if( e.keyCode && e.keyCode == 27 ) self.closeAll();
			});

		if($w.width() <= this.options.breakpoint) this.initMobileBehavior();
		else if( $w.width() > this.options.breakpoint) this.initDesktopBehavior();

		this.smartPositions();

		return this;

	};

	MegaMenu.prototype.smartPositions = function() {

		var self = this,
				$submenus = this.$element.find( this.options.classMap.subMenu );

		$submenus.each(function(i, el) {

			MenuItem.smartPosition( $(el), self.options );

		});

	};

	/**
	 * Binding events to menu elements.
	 * 
	 * @protected
	 */
	MegaMenu.prototype.bindEvents = function() {

		var self = this,
				selector;

		// Hover case
		if(this.options.event === 'hover' && !_isTouch()) {
			this.$element
				.on(
					'mouseenter.HSMegaMenu',
					this.options.classMap.hasMegaMenu + ':not([data-event="click"]),' +
					this.options.classMap.hasSubMenu + ':not([data-event="click"])',
					function(e) {

						var $this = $(this),
								$chain = $this.parents( self.itemsSelector);

						// Lazy initialization
						if( !$this.data('HSMenuItem') ) {
							self.initMenuItem( $this, self.getType( $this ) );
						}

						$chain = $chain.add($this);

						self.closeAll( $chain );

						$chain.each(function(i, el){

							var HSMenuItem = $(el).data('HSMenuItem');

							if(HSMenuItem.hideTimeOutId) clearTimeout(HSMenuItem.hideTimeOutId);
							HSMenuItem.show();

						});

						self._items = self._items.not( $chain );
						self._tempChain = $chain;

						e.preventDefault();
						e.stopPropagation();
					}
				)
				.on(
					'mouseleave.HSMegaMenu',
					this.options.classMap.hasMegaMenu + ':not([data-event="click"]),' +
					this.options.classMap.hasSubMenu + ':not([data-event="click"])',
					function(e) {

						var $this = $(this),
								HSMenuItem = $this.data('HSMenuItem'),
								$chain = $(e.relatedTarget).parents( self.itemsSelector );

						HSMenuItem.hideTimeOutId = setTimeout( function(){
							self.closeAll( $chain );
						}, self.options.hideTimeOut );

						self._items = self._items.add( self._tempChain );
						self._tempChain = null;

						e.preventDefault();
						e.stopPropagation();
					}
				)
				.on(
					'click.HSMegaMenu',
					this.options.classMap.hasMegaMenu + '[data-event="click"] > a, ' +
					this.options.classMap.hasSubMenu + '[data-event="click"] > a',
					function(e) {

						var $this = $(this).parent('[data-event="click"]'),
								HSMenuItem;

						// Lazy initialization
						if(!$this.data('HSMenuItem')) {
							self.initMenuItem( $this, self.getType( $this ) );
						}


						self.closeAll( $this.add( 
							$this.parents(self.itemsSelector) 
						) );

						HSMenuItem = $this
							.data('HSMenuItem');

						if(HSMenuItem.isOpened) {
							HSMenuItem.hide();
						}
						else{
							HSMenuItem.show();
						}
							

						e.preventDefault();
						e.stopPropagation();

					}
				);
		}
		// Click case
		else {

			this.$element
				.on(
					'click.HSMegaMenu',
					(_isTouch() ?
								 this.options.classMap.hasMegaMenu + ' > a, ' + 
								 this.options.classMap.hasSubMenu + ' > a' :
								 this.options.classMap.hasMegaMenu + ':not([data-event="hover"]) > a,' +
								 this.options.classMap.hasSubMenu + ':not([data-event="hover"]) > a'),
					function(e) {

						var $this = $(this).parent(),
								HSMenuItem,
								$parents = $this.parents(self.itemsSelector);

						// Lazy initialization
						if(!$this.data('HSMenuItem')) {
							self.initMenuItem( $this, self.getType( $this ) );
						}

						self.closeAll( $this.add(
							$this.parents( self.itemsSelector )
						) );

						HSMenuItem = $this
							.addClass('hs-event-prevented')
							.data('HSMenuItem');

						if(HSMenuItem.isOpened) {
							HSMenuItem.hide();
						}
						else{
							HSMenuItem.show();
						}

						e.preventDefault();
						e.stopPropagation();
					}
				);

				if(!_isTouch()) {
					this.$element
						.on(
							'mouseenter.HSMegaMenu',
							this.options.classMap.hasMegaMenu + '[data-event="hover"],' +
							this.options.classMap.hasSubMenu + '[data-event="hover"]',
							function(e) {

								var $this = $(this),
										$parents = $this.parents( self.itemsSelector);

								// Lazy initialization
								if( !$this.data('HSMenuItem') ) {
									self.initMenuItem( $this, self.getType( $this ) );
								}

								self.closeAll( $this.add($parents) );

								$parents.add($this).each(function(i, el){

									var HSMenuItem = $(el).data('HSMenuItem');

									if(HSMenuItem.hideTimeOutId) clearTimeout(HSMenuItem.hideTimeOutId);
									HSMenuItem.show();

								});

								e.preventDefault();
								e.stopPropagation();
							}
						)
						.on(
							'mouseleave.HSMegaMenu',
							this.options.classMap.hasMegaMenu + '[data-event="hover"],' +
							this.options.classMap.hasSubMenu + '[data-event="hover"]',
							function(e) {

								var $this = $(this),
										HSMenuItem = $this.data('HSMenuItem');

								HSMenuItem.hideTimeOutId = setTimeout( function(){

									self.closeAll(
										$(e.relatedTarget).parents(self.itemsSelector)
									);

								}, self.options.hideTimeOut );

								e.preventDefault();
								e.stopPropagation();
							}
						)
				}
		}

	};

	/**
	 * Initialization of certain menu item.
	 *
	 * @protected 
	 */
	MegaMenu.prototype.initMenuItem = function(element, type) {

		var self = this,
				Item = new MenuItem(
					element,
					element.children(
						self.options.classMap[type === 'mega-menu' ? 'megaMenu' : 'subMenu']
					),
					$.extend(true, {type: type}, self.options, element.data()),
					self.$element
				);

		element.data( 'HSMenuItem', Item );
		this._items = this._items.add( element );

	};

	/**
	 * Destroys of desktop behavior, then makes initialization of mobile behavior.
	 * 
	 * @protected 
	 */
	MegaMenu.prototype.initMobileBehavior = function() {

		var self = this;

		this.state = 'mobile';

		this.$element
				.off('.HSMegaMenu')
				.addClass( this.options.classMap.mobileState.slice(1) )
				.on('click.HSMegaMenu', self.options.classMap.hasSubMenu + ' > a, ' + self.options.classMap.hasMegaMenu + ' > a', function(e){

					var $this = $(this).parent(),
							MenuItemInstance;

					// Lazy initialization
					if( !$this.data('HSMenuItem') ) {
						self.initMenuItem( $this, self.getType( $this ) );
					}

					self.closeAll( $this.parents( self.itemsSelector ).add($this) );

					MenuItemInstance = $this
							 .data('HSMenuItem');

					console.log(MenuItemInstance.isOpened);

					if(MenuItemInstance.isOpened) {
						MenuItemInstance.mobileHide();
					}
					else {
						MenuItemInstance.mobileShow();
					}

					e.preventDefault();
					e.stopPropagation();

				})
				.find( this.itemsSelector )
				.not(
					this.options.classMap.hasSubMenuActive  + ',' + 
					this.options.classMap.hasMegaMenuActive
				)
				.children(
					this.options.classMap.subMenu + ',' +
					this.options.classMap.megaMenu
				)
				.hide();

	};

	/**
	 * Destroys of mobile behavior, then makes initialization of desktop behavior.
	 * 
	 * @protected
	 */
	MegaMenu.prototype.initDesktopBehavior = function() {

		this.state = 'desktop';

		this.$element
				.removeClass(this.options.classMap.mobileState.slice(1))
				.off('.HSMegaMenu')
				.find( this.itemsSelector )
				.not(
					this.options.classMap.hasSubMenuActive  + ',' + 
					this.options.classMap.hasMegaMenuActive
				)
				.children(
					this.options.classMap.subMenu + ',' +
					this.options.classMap.megaMenu
				)
				.hide();

		this.bindEvents();

	};

	/**
	 * Hides all of opened submenus/megamenus.
	 *
	 * @param {jQuery} except - collection of elements, which shouldn't be closed.
	 * @return {jQuery}
	 * @public
	 */
	MegaMenu.prototype.closeAll = function(except) {

		var self = this;

		return this._items.not(except && except.length ? except : $()).each(function(i, el){

			$(el)
				.removeClass('hs-event-prevented')
				.data('HSMenuItem')[self.state == 'mobile' ? 'mobileHide' : 'hide']();

		});

	};

	/**
	 * Returns type of sub menu based on specified menu item.
	 * 
	 * @param {jQuery} item
	 * @return {String|null}
	 * @public
	 */
	MegaMenu.prototype.getType = function( item ) {

		if(!item || !item.length) return null;

		return item.hasClass(this.options.classMap.hasSubMenu.slice(1)) ? 'sub-menu' : 
					 (item.hasClass(this.options.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null);

	};

	/**
	 * Returns current menu state.
	 *
	 * @return {String}
	 * @public
	 */
	MegaMenu.prototype.getState = function() {
		return this.state;
	};

	/**
	 * Updates bounds of all menu items.
	 * 
	 * @return {jQuery}
	 * @public
	 */
	MegaMenu.prototype.refresh = function() {

		return this._items.add( this._tempChain ).each(function(i, el){
			$(el).data('HSMenuItem')._updateMenuBounds();
		});

	};


	/**
	 * Creates a mega-menu element.
	 * 
	 * @param {jQuery} element 
	 * @param {jQuery} menu
	 * @param {Object} options
	 * @param {jQuery} container
	 * @constructor 
	 */
	function MenuItem(element, menu, options, container) {

		var self = this;

		/**
		 * Current menu item element.
		 * 
		 * @public
		 */
		this.$element = element;

		/**
		 * Current mega menu element.
		 * 
		 * @public
		 */
		this.menu = menu;

		/**
		 * Item options.
		 * 
		 * @public
		 */
		this.options = options;


		/**
		 * MegaMenu container.
		 * 
		 * @public 
		 */
		this.$container = container;

		Object.defineProperties(this, {

			/**
			 * Contains css class of menu item element.
			 *
			 * @public 
			 */
			itemClass: {
				get: function() {
					return self.options.type === 'mega-menu' ? 
								 self.options.classMap.hasMegaMenu : 
								 self.options.classMap.hasSubMenu;
				}
			},

			/**
			 * Contains css active-class of menu item element.
			 *
			 * @public 
			 */
			activeItemClass: {
				get: function() {
					return self.options.type === 'mega-menu' ? 
								 self.options.classMap.hasMegaMenuActive :
								 self.options.classMap.hasSubMenuActive;
				}
			},

			/**
			 * Contains css class of menu element.
			 *
			 * @public 
			 */
			menuClass: {
				get: function() {
					return self.options.type === 'mega-menu' ? 
								 self.options.classMap.megaMenu :
								 self.options.classMap.subMenu;
				}
			},

			isOpened: {
				get: function() {
					return this.$element.hasClass(this.activeItemClass.slice(1));
				}
			}

		});


		this.menu.addClass('animated').on('click.HSMegaMenu', function(e){
			self._updateMenuBounds();
		});

		if( this.$element.data('max-width') ) this.menu.css('max-width', this.$element.data('max-width') );
		if( this.$element.data('position') ) this.menu.addClass( 'hs-position-' + this.$element.data('position') );


		if( this.options.animationOut ) {

			this.menu.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {

				if(self.menu.hasClass(self.options.animationOut)) {
					self.$element.removeClass(self.activeItemClass.slice(1));
					self.options.afterClose.call(self, self.$element, self.menu);
				}

				if(self.menu.hasClass(self.options.animationIn)) {
					self.options.afterOpen.call(self, self.$element, self.menu);
				}

				e.stopPropagation();
				e.preventDefault();
			});
		}
		
	}

	/**
	 * Shows the mega-menu item.
	 * 
	 * @public 
	 * @return {MenuItem}
	 */
	MenuItem.prototype.show = function() {
		if( !this.menu.length ) return this;

		this.$element.addClass(this.activeItemClass.slice(1));

		if(this.options.direction == 'horizontal') this.smartPosition( this.menu, this.options );
		
		this._updateMenuBounds();

		if(this.options.animationOut) {
			this.menu.removeClass(this.options.animationOut);
		}
		else {
			this.options.afterOpen.call(this, this.$element, this.menu);
		}

		if(this.options.animationIn) this.menu.addClass(this.options.animationIn);

		return this;
	}

	/**
	 * Hides the mega-menu item.
	 * 
	 * @public 
	 * @return {MenuItem}
	 */
	MenuItem.prototype.hide = function() {

		var self = this;

		if( !this.menu.length ) return this;

		if(!this.options.animationOut) {
			this.$element.removeClass(this.activeItemClass.slice(1));
		}

		if(this.options.animationIn) this.menu.removeClass(this.options.animationIn);
		if(this.options.animationOut) {
			this.menu
					.addClass(this.options.animationOut);
		}
		else{
			this.options.afterClose.call(this, this.$element, this.menu);
		}

		return this;
	}

	/**
	 * Shows the mega-menu item.
	 * 
	 * @public
	 * @return {MenuItem}
	 */
	MenuItem.prototype.mobileShow = function() {
		var self = this;

		if( !this.menu.length ) return this;



		this.menu
				.removeClass( this.options.animationIn )
				.removeClass( this.options.animationOut )
				.stop()
				.slideDown({
					duration: self.options.mobileSpeed,
					easing: self.options.mobileEasing,
					complete: function() {
						self.options.afterOpen.call(self, self.$element, self.menu);
					}
				});

		this.$element.addClass(this.activeItemClass.slice(1));

		return this;
	};

	/**
	 * Hides the mega-menu item.
	 * 
	 * @public
	 * @return {MenuItem}
	 */
	MenuItem.prototype.mobileHide = function() {
		var self = this;

		if( !this.menu.length ) return this;
		
		this.menu.stop().slideUp({
			duration: self.options.mobileSpeed,
			easing: self.options.mobileEasing,
			complete: function() {
				self.options.afterClose.call(self, self.$element, self.menu);
			}
		});

		this.$element.removeClass(this.activeItemClass.slice(1));

		return this;
	};

	/**
	 * Check, if element is in viewport.
	 * 
	 * @param {jQuery} element
	 * @param {Object} options
	 * @public
	 */
	MenuItem.prototype.smartPosition = function( element, options ) {

		MenuItem.smartPosition(element, options);

	};

	/**
	 * Check, if element is in viewport.
	 * 
	 * @param {jQuery} element
	 * @param {Object} options
	 * @static
	 * @public
	 */
	MenuItem.smartPosition = function( element, options ) {
		if(!element && !element.length) return;

		var $w = $(window);

		element.removeClass('hs-reversed');

		if(!options.rtl) {

			if( element.offset().left + element.outerWidth() > $w.width() ) {
				element.addClass('hs-reversed');
			}

		}
		else {

			if(element.offset().left < 0) {
				element.addClass('hs-reversed');
			}

		}
	};

	/**
	 * Updates bounds of current opened menu.
	 *
	 * @private
	 */
	MenuItem.prototype._updateMenuBounds = function() {

		var width = 'auto';

		if( this.options.direction == 'vertical' && this.options.type == 'mega-menu' ) {

			if( this.$container && this.$container.data('HSMegaMenu').getState() == 'desktop' ) {
				if( !this.options.pageContainer.length ) this.options.pageContainer = $('body');
				width = this.options.pageContainer.outerWidth() * (1 - this.options.sideBarRatio);
			}
			else {
				width = 'auto';
			}


			this.menu.css({
				'width': width,
				'height': 'auto'
			});

			if( this.menu.outerHeight() > this.$container.outerHeight() ) {
				return;
			}

			this.menu.css('height', '100%');
		}

	};

	/**
	 * The jQuery plugin for the MegaMenu.
	 *
	 * @public
	 */
	$.fn.HSMegaMenu = function(options) {

		return this.each(function(i, el) {

			var $this = $(this);

			if(!$this.data('HSMegaMenu')) {
				$this.data('HSMegaMenu', new MegaMenu($this, options));
			}

		});

	};

	/**
	 * Helper function for detect touch events in the environment.
	 * 
	 * @return {Boolean}
	 * @private 
	 */
	function _isTouch() {
		return ('ontouchstart' in window);
	}

})(jQuery);
/**
 * HSCore -
 *
 * @author HtmlStream
 * @version 1.0
 */

;
(function ($) {

  'use strict';

  $.HSCore = {

    /**
     *
     *
     * @param
     *
     * @return
     */
    init: function () {

      $(document).ready(function (e) {
        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Set Background Image Dynamically
        if ($('[data-bg-img-src]').length) $.HSCore.helpers.bgImage($('[data-bg-img-src]'));

        // Extends jQuery
        $.HSCore.helpers.extendjQuery();

        // Detect Internet Explorer (IE)
        $.HSCore.helpers.detectIE();

        // Bootstrap Navigation Options
        $.HSCore.helpers.bootstrapNavOptions.init();

      });

      $(window).on('load', function (e) {

      });

    },

    /**
     *
     *
     * @var
     */
    components: {},

    /**
     *
     *
     * @var
     */
    helpers: {

        Math: {

          getRandomValueFromRange: function(startPoint, endPoint, fixed) {

            var fixedInner = fixed ? fixed : false;

            Math.random();

            return fixedInner ? (Math.random() * (endPoint - startPoint) + startPoint) : (Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint);

          }

      },

      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function (collection) {

        if (!collection || !collection.length) return;

        return collection.each(function (i, el) {

          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');

        });

      },

      /**
       * Extends basic jQuery functionality
       *
       * @return undefined
       */
      extendjQuery: function () {

        $.fn.extend({

          /**
           * Runs specified function after loading of all images.
           *
           * @return Deferred
           */
          imagesLoaded: function () {

            var $imgs = this.find('img[src!=""]');

            if (!$imgs.length) {
              return $.Deferred().resolve().promise();
            }

            var dfds = [];

            $imgs.each(function () {
              var dfd = $.Deferred();
              dfds.push(dfd);
              var img = new Image();
              img.onload = function () {
                dfd.resolve();
              };
              img.onerror = function () {
                dfd.resolve();
              };
              img.src = this.src;
            });

            return $.when.apply($, dfds);

          }

        });

      },


      /**
       * Detect Internet Explorer (IE)
       *
       * @return version of IE or false, if browser is not Internet Explorer
       */

      detectIE: function() {

          var ua = window.navigator.userAgent;

          var trident = ua.indexOf('Trident/');
          if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
              document.querySelector('body').className += ' IE';
          }

          var edge = ua.indexOf('Edge/');
          if (edge > 0) {
             // IE 12 (aka Edge) => return version number
             var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
              document.querySelector('body').className += ' IE';
          }

          // other browser
          return false;

      },


      /**
       * Bootstrap navigation options
       *
       */
      bootstrapNavOptions: {
        init: function () {
          this.mobileHideOnScroll();
        },

        mobileHideOnScroll: function () {
          var $collection = $('.navbar');
          if (!$collection.length) return;

          var $w = $(window),
            breakpointsMap = {
              'sm': 576,
              'md': 768,
              'lg': 992,
              'xl': 1200
            };

          $('body').on('click.HSMobileHideOnScroll', '.navbar-toggler', function (e) {
            var $navbar = $(this).closest('.navbar');

            if ($navbar.length) {
              $navbar.data('mobile-menu-scroll-position', $w.scrollTop());
            }
            e.preventDefault();
          });

          $w.on('scroll.HSMobileHideOnScroll', function (e) {
            $collection.each(function (i, el) {
              var $this = $(el), $toggler, $nav, offset, $hamburgers, breakpoint;
              if ($this.hasClass('navbar-expand-xl')) breakpoint = breakpointsMap['xl'];
              else if ($this.hasClass('navbar-expand-lg')) breakpoint = breakpointsMap['lg'];
              else if ($this.hasClass('navbar-expand-md')) breakpoint = breakpointsMap['md'];
              else if ($this.hasClass('navbar-expand-xs')) breakpoint = breakpointsMap['xs'];

              if ($w.width() > breakpoint) return;

              $toggler = $this.find('.navbar-toggler');
              $nav = $this.find('.navbar-collapse');

              if (!$nav.data('mobile-scroll-hide')) return;

              if ($nav.length) {
                offset = $this.data('mobile-menu-scroll-position');

                if (Math.abs($w.scrollTop() - offset) > 40 && $nav.hasClass('show')) {
                  $toggler.trigger('click');
                  $hamburgers = $toggler.find('.is-active');
                  if ($hamburgers.length) {
                    $hamburgers.removeClass('is-active');
                  }
                }
              }
            });
          });
        }
      }

    },

    /**
     *
     *
     * @var
     */
    settings: {
      rtl: false
    }

  };

  $.HSCore.init();

})(jQuery);
/**
 * Header Component.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */

;(function ($) {
  'use strict';

  $.HSCore.components.HSHeader = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      headerFixMoment: 0,
      headerFixEffect: 'slide',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      }
    },

    /**
     * Initializtion of header.
     *
     * @param jQuery element
     *
     * @return jQuery
     */
    init: function( element ) {

      if( !element || element.length !== 1 || element.data('HSHeader')) return;

      var self = this;

      this.element = element;
      this.config = $.extend(true, {}, this._baseConfig, element.data());

      this.observers = this._detectObservers();
      this.fixMediaDifference( this.element );
      this.element.data('HSHeader', new HSHeader(this.element, this.config, this.observers ) );

      $(window)
        .on('scroll.uHeader', function(e){

          element
            .data('HSHeader')
            .notify();

        })
        .on('resize.uHeader', function(e){

          if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

          self.resizeTimeOutId = setTimeout( function(){

            element
              .data('HSHeader')
              .checkViewport()
              .update();

          }, 100 );

        })
        .trigger('scroll.uHeader');

      return this.element;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    _detectObservers: function() {

      if(!this.element || !this.element.length) return;

      var observers = {
        'xs': [],
        'sm': [],
        'md': [],
        'lg': [],
        'xl': []
      };

      /* ------------------------ xs -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element') ) {
          observers['xs'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top') ) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section') ) {

            observers['xs'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating') ) {

          observers['xs'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable') ) {
          observers['xs'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom') ) {

          if(this.element.hasClass('u-header--change-appearance')) {
            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top') || this.element.hasClass('u-header--static')) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom') || this.element.hasClass('u-header--abs-top-2nd-screen') ) {

          observers['xs'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ sm -------------------------*/

        // Sticky top

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--sm') ) {
          observers['sm'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        if( this.element.hasClass('u-header--sticky-top--sm') ) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--sm') ) {

            observers['sm'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--sm') ) {

          observers['sm'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--sm') ) {
          observers['sm'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--sm') ) {

          if(this.element.hasClass('u-header--change-appearance--sm')) {
            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--sm') || this.element.hasClass('u-header--static--sm')) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--sm') || this.element.hasClass('u-header--abs-top-2nd-screen--sm') ) {

          observers['sm'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ md -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--md') ) {
          observers['md'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--md') ) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--md') ) {

            observers['md'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--md') ) {

          observers['md'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--md') ) {
          observers['md'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--md') ) {

          if(this.element.hasClass('u-header--change-appearance--md')) {
            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--md') || this.element.hasClass('u-header--static--md')) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--md') || this.element.hasClass('u-header--abs-top-2nd-screen--md') ) {

          observers['md'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      /* ------------------------ lg -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--lg') ) {
          observers['lg'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--lg') ) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--lg') ) {

            observers['lg'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--lg') ) {

          observers['lg'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--lg') ) {
          observers['lg'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--lg') ) {

          if(this.element.hasClass('u-header--change-appearance--lg')) {
            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--lg') || this.element.hasClass('u-header--static--lg')) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--lg') || this.element.hasClass('u-header--abs-top-2nd-screen--lg') ) {

          observers['lg'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ xl -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--xl') ) {
          observers['xl'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--xl') ) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--xl') ) {

            observers['xl'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--xl') ) {

          observers['xl'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        // Sticky bottom

        if( this.element.hasClass('u-header--invulnerable--xl') ) {
          observers['xl'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--xl') ) {

          if(this.element.hasClass('u-header--change-appearance--xl')) {
            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--xl') || this.element.hasClass('u-header--static--xl')) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--xl') || this.element.hasClass('u-header--abs-top-2nd-screen--xl') ) {

          observers['xl'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      return observers;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    fixMediaDifference: function(element) {

      if(!element || !element.length || !element.filter('[class*="u-header--side"]').length) return;

      var toggleable;

      if(element.hasClass('u-header--side-left--xl') || element.hasClass('u-header--side-right--xl')) {

        toggleable = element.find('.navbar-expand-xl');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-xl')
            .addClass('navbar-expand-lg');
        }

      }
      else if(element.hasClass('u-header--side-left--lg') || element.hasClass('u-header--side-right--lg')) {

        toggleable = element.find('.navbar-expand-lg');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-lg')
            .addClass('navbar-expand-md');
        }

      }
      else if(element.hasClass('u-header--side-left--md') || element.hasClass('u-header--side-right--md')) {

        toggleable = element.find('.navbar-expand-md');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-md')
            .addClass('navbar-expand-sm');
        }

      }
      else if(element.hasClass('u-header--side-left--sm') || element.hasClass('u-header--side-right--sm')) {

        toggleable = element.find('.navbar-expand-sm');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-sm')
            .addClass('navbar-expand');
        }

      }

    }

  }

  /**
   * HSHeader constructor function.
   *
   * @param jQuery element
   * @param Object config
   * @param Object observers
   *
   * @return undefined
   */
  function HSHeader( element, config, observers ) {

    if( !element || !element.length ) return;

    this.element = element;
    this.config = config;

    this.observers = observers && $.isPlainObject( observers ) ? observers : {};

    this.viewport = 'xs';
    this.checkViewport();

  }

  /**
   *
   *
   * @return Object
   */
  HSHeader.prototype.checkViewport = function() {

    var $w = $(window);

    if( $w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length ){
      this.prevViewport = this.viewport;
      this.viewport = 'sm';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'md';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'lg';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'xl';
      return this;
    }


    if(this.prevViewport) this.prevViewport = this.viewport;
    this.viewport = 'xs';


    return this;

  }

  /**
   * Notifies all observers.
   *
   * @return Object
   */
  HSHeader.prototype.notify = function(){

    if( this.prevViewport ) {
      this.observers[this.prevViewport].forEach(function(observer){
        observer.destroy();
      });
      this.prevViewport = null;
    }

    this.observers[this.viewport].forEach(function(observer){
      observer.check();
    });

    return this;

  }

  /**
   * Reinit all header's observers.
   *
   * @return Object
   */
  HSHeader.prototype.update = function() {

    // if( this.prevViewport ) {
    //   this.observers[this.prevViewport].forEach(function(observer){
    //     observer.destroy();
    //   });
    //   this.prevViewport = null;
    // }

    for(var viewport in this.observers) {

      this.observers[viewport].forEach(function(observer){
        observer.destroy();
      });

    }

    this.prevViewport = null;

    this.observers[this.viewport].forEach(function(observer){
      observer.reinit();
    });

    return this;

  }

  /**
   * Abstract constructor function for each observer.
   *
   * @param jQuery element
   *
   * @return Boolean|undefined
   */
  function HSAbstractObserver(element) {
    if( !element || !element.length ) return;

    this.element = element;
    this.defaultState = true;

    this.reinit = function() {

      this
        .destroy()
        .init()
        .check();
    }

    return true;
  }

  /**
   * Header's observer which is responsible for 'sticky' behavior.
   *
   * @param jQuery element
   */
  function HSHeaderStickObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.init = function() {
    this.defaultState = true;
    this.offset = this.element.offset().top;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if(docScrolled < this.offset && !this.defaultState){
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.changeState = function() {

    this.element.addClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.toDefaultState = function() {

    this.element.removeClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }


  /**
   * Header's observer which is responsible for 'show/hide' behavior which is depended on scroll direction.
   *
   * @param jQuery element
   */
  function HSHeaderMomentShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.init = function() {
    this.direction = 'down';
    this.delta = 0;
    this.defaultState = true;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') != 0 ? this.element.data('header-fix-moment') : 5;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.checkDirection = function() {

    if( $(window).scrollTop() > this.delta ) {
      this.direction = 'down';
    }
    else {
      this.direction = 'up';
    }

    this.delta = $(window).scrollTop();

    return this;

  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.toDefaultState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.changeState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.check = function() {

    var docScrolled = $(window).scrollTop();
    this.checkDirection();


    if( docScrolled >= this.offset && this.defaultState && this.direction == 'down' ) {
      this.changeState();
    }
    else if ( !this.defaultState && this.direction == 'up') {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.init = function() {
    if(!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.defaultState = true;
    this.transitionDuration = parseFloat( getComputedStyle( this.element.get(0) )['transition-duration'], 10 ) * 1000;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') > this.element.outerHeight() ? this.element.data('header-fix-moment') : this.element.outerHeight() + 100;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.destroy = function() {
    if( !this.defaultState && $(window).scrollTop() > this.offset ) return this;

    this.element.removeClass('u-header--untransitioned');
    this._removeCap();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._insertCap = function() {

    this.element.addClass('js-header-fix-moment u-header--untransitioned');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', this.element.outerHeight() );

    }

    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      default :
        this.element.addClass('u-header--invisible')
    }

    this.capInserted = true;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._removeCap = function() {

    var self = this;

    this.element.removeClass('js-header-fix-moment');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', 0 );

    }

    if(this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

    this.removeCapTimeOutId = setTimeout(function() {
      self.element.removeClass('u-header--moved-up u-header--faded u-header--invisible');
    }, 10);

    this.capInserted = false;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.check = function() {

    var $w = $(window);

    if( $w.scrollTop() > this.element.outerHeight() && !this.capInserted ) {
      this._insertCap();
    }
    else if($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {
      this._removeCap();
    }

    if( $w.scrollTop() > this.offset && this.defaultState)  {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }



  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.changeState = function() {

    this.element.removeClass('u-header--untransitioned');

    if( this.animationTimeoutId ) clearTimeout( this.animationTimeoutId );

    switch( this.effect ) {
      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.toDefaultState = function() {

    var self = this;

    this.animationTimeoutId = setTimeout(function(){
      self.element.addClass('u-header--untransitioned');
    }, this.transitionDuration );


    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;
      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeLogoObserver( element, config ) {

    if( !HSAbstractObserver.call( this, element ) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }
    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 0;
    }
    if(this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.imgs = this.element.find('.u-header__logo-img');
    this.defaultState = true;

    this.mainLogo = this.imgs.filter('.u-header__logo-img--main');
    this.additionalLogo = this.imgs.not('.u-header__logo-img--main');

    if( !this.imgs.length ) return this;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.check = function() {

    var $w = $(window);

    if( !this.imgs.length ) return this;

    if( $w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.changeState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.removeClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.addClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.toDefaultState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.addClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.removeClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHideSectionObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderHideSectionObserver.prototype.init = function() {

    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.section = this.element.find('.u-header__section--hidden');
    this.defaultState = true;

    this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.destroy = function() {

    if( this.section.length ) {

      this.element.css({
        'margin-top': 0
      });

    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.check = function() {

    if(!this.section.length) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.changeState = function() {

    var self = this;

    this.element.stop().animate({
      'margin-top': self.sectionHeight * -1 - 1 // last '-1' is a small fix
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.toDefaultState = function() {

    this.element.stop().animate({
      'margin-top': 0
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeAppearanceObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }

    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    }

    if( this.hasFixedClass ) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.sections = this.element.find('[data-header-fix-moment-classes]');

    this.defaultState = true;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.check = function() {

    if( !this.sections.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.changeState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.addClass( classes + ' js-header-change-moment');
      $this.removeClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.toDefaultState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.removeClass( classes + ' js-header-change-moment' );
      $this.addClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHasHiddenElement(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      animated: true
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.init = function() {
    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.elements = this.element.find('.u-header--hidden-element');
    this.defaultState = true;
    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.check = function() {

    if( !this.elements.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.changeState = function() {

    if(this.config.animated) {
      this.elements.stop().slideUp();
    }
    else {
      this.elements.hide();
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.toDefaultState = function() {

    if(this.config.animated) {
      this.elements.stop().slideDown();
    }
    else {
      this.elements.show();
    }

    this.defaultState = !this.defaultState;
    return this;

  }





  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderFloatingObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this.config, config) : {};
    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.init = function() {

    this.offset = this.element.offset().top;
    this.sections = this.element.find('.u-header__section');

    this.defaultState = true;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.changeState = function() {

    this.element
        .addClass('js-header-fix-moment')
        .addClass( this.element.data('header-fix-moment-classes') )
        .removeClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.addClass( $section.data('header-fix-moment-classes') )
                .removeClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.toDefaultState = function() {

    this.element
        .removeClass('js-header-fix-moment')
        .removeClass( this.element.data('header-fix-moment-classes') )
        .addClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.removeClass( $section.data('header-fix-moment-classes') )
                .addClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderWithoutBehaviorObserver( element ) { if( !HSAbstractObserver.call(this, element) ) return; }

  HSHeaderWithoutBehaviorObserver.prototype.check = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.init = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.destroy = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.changeState = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.toDefaultState = function() {
    return this;
  }


})(jQuery);
/**
 * Hamburgers plugin helper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires hamburgers.min.css
 *
 */

;(function($){
	'use strict';

	$.HSCore.helpers.HSHamburgers = {

		/**
		 * Initialize 'hamburgers' plugin.
		 * 
		 * @param String selector
		 *
		 * @return undefined;
		 */
		init: function(selector) {

			if( !selector || !$(selector).length ) return;

		  var hamburgers = $(selector),
		  		timeoutid;

		  hamburgers.each(function(i, el){

		  	var $this = $(this);

		  	if($this.closest('button').length) {
		  		$this.closest('button').get(0).addEventListener('click', function(e){

		  			var $self = $(this),
		  					$hamburger = $self.find(selector);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$hamburger.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}
		  	else {
		  		$this.get(0).addEventListener('click', function(e){

		  			var $self = $(this);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$self.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}

		  });

		}
		

	};

})(jQuery);
/**
 * Tabs wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */

;(function ($) {
  'use strict';

  $.HSCore.components.HSTabs = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Tabs wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initTabs();

      return this.pageCollection;

    },

    initTabs: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var windW = $(window).width(),
          //Tabs
          $tabs = $(el),
          $tabsItem = $tabs.find('.nav-item'),
          tabsType = $tabs.data('tabs-mobile-type'), //[slide-up-down], [accordion], [hide-extra-items]
          controlClasses = $tabs.data('btn-classes'),
          context = $tabs.parent(),

          //Tabs Content
          $tabsContent = $('#' + $tabs.data('target')),
          $tabsContentItem = $tabsContent.find('.tab-pane');

        if (windW < 767) {
          $('body').on('click', function () {
            if (tabsType) {
              $tabs.slideUp(200);
            } else {
              $tabs.find('.nav-inner').slideUp(200);
            }
          });
        } else {
          $('body').off('click');
        }

        if (windW > 767 && tabsType) {
          $tabs.removeAttr('style');
          $tabsContentItem.removeAttr('style');
          context.off('click', '.js-tabs-mobile-control');
          context.off('click', '[role="tab"]');
          if (tabsType == 'accordion') {
            $tabsContent.find('.js-tabs-mobile-control').remove();
          } else {
            context.find('.js-tabs-mobile-control').remove();
          }
          return;
        }

        if (windW < 768 && tabsType == 'accordion') {
          $self.accordionEffect($tabsContent, $tabsItem, $tabsContentItem, controlClasses);
        } else if (windW < 768 && tabsType == 'slide-up-down') {
          $self.slideUpDownEffect(context, $tabs, controlClasses);
        }

        //Actions
        collection = collection.add($tabs);
      });
    },

    slideUpDownEffect: function (context, menu, btnClasses) {
      if (context.find('.js-tabs-mobile-control').length) return;

      //Create control
      var activeItemHTML = menu.find('.active').html();

      $(menu).before('<a class="js-tabs-mobile-control ' + btnClasses + '" href="#">' + activeItemHTML + '</a>');

      /*----- CLICK -----*/
      context.on('click', '.js-tabs-mobile-control', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $(menu).slideToggle(200);
      });

      context.on('click', '[role="tab"]', function (e) {
        e.preventDefault();

        var thisHTML = $(this).html(),
          $targetControl = $(this).closest('ul').prev('.js-tabs-mobile-control');

        $targetControl.html(thisHTML);
        $(menu).slideUp(200);
      });
    },

    accordionEffect: function (context, menuItem, menu, btnClasses) {
      if (context.find('.js-tabs-mobile-control').length) return;

      //Create control
      $(menu).before('<a class="js-tabs-mobile-control ' + btnClasses + '" href="#"></a>');

      menuItem.each(function () {
        var thisIndex = $(this).index(),
          thisHTML = $(this).find('[role="tab"]').html();

        if ($(this).find('[role="tab"]').hasClass('active')) {
          $(menu[thisIndex]).prev().addClass('active');
        }

        $(menu[thisIndex]).prev().html(thisHTML);
      });

      /*----- CLICK -----*/
      context.on('click', '.js-tabs-mobile-control', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) return;

        var contextID = context.attr('id');

        context.find('.js-tabs-mobile-control').removeClass('active');

        $('[data-target="' + contextID + '"]').find('.nav-link').removeClass('active');
        var $target = $(this).next(),
          targetID = $target.attr('id');

        if ($target.hasClass('fade')) {
          $(this).addClass('active');
          $('[href="#' + targetID + '"]').addClass('active');

          $(menu)
            .slideUp(200);
          $target
            .slideDown(200, function () {
              context.find('[role="tabpanel"]').removeClass('show active');
              $target.addClass('show active');
            });
        } else {
          $(this).addClass('active');
          $(menu).slideUp(200);
          $target.slideDown(200);
        }
      });
    }
  }

})(jQuery);
/**
 * Sticky blocks wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */

;(function ($) {
  'use strict';

  $.HSCore.components.HSStickyBlock = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Sticky blocks wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initStickyBlock();

      return this.pageCollection;
    },

    initStickyBlock: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection,
        windW = $(window).width();

      this.collection.each(function (i, el) {
        //Variables
        var $stickyBlock = $(el),
          isResponsive = Boolean($stickyBlock.data('responsive')),
          stickyBlockClasses = $stickyBlock.attr('class').replace($self.config.itemSelector.substring(1), ''),
          stickyBlockH = $stickyBlock.outerHeight(),
          stickyBlockW = $stickyBlock.outerWidth(),
          stickyBlockParentW = $stickyBlock.parent().width(),
          stickyBlockOffsetTop = $stickyBlock.offset().top,
          stickyBlockOffsetLeft = $stickyBlock.offset().left,
          startPoint = $.isNumeric($stickyBlock.data('start-point')) ? $stickyBlock.data('start-point') : $($stickyBlock.data('start-point')).offset().top,
          endPoint = $.isNumeric($stickyBlock.data('end-point')) ? $stickyBlock.data('end-point') : $($stickyBlock.data('end-point')).offset().top,
          hasStickyHeader = $stickyBlock.data('has-sticky-header');

        //Break function if there are no target element
        if (!$stickyBlock.length) return;

        $self.resolutionCheck($stickyBlock);

        if ($stickyBlock.hasClass('g-sticky-block--sm') && windW <= 576) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else if ($stickyBlock.hasClass('g-sticky-block--md') && windW <= 768) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else if ($stickyBlock.hasClass('g-sticky-block--lg') && windW <= 992) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else if ($stickyBlock.hasClass('g-sticky-block--xl') && windW <= 1200) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else {
          $stickyBlock.removeClass('die-sticky');
        }

        $(window).on('resize', function () {
          var windW = $(window).width();

          if ($stickyBlock.hasClass('g-sticky-block--sm') && windW <= 576) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else if ($stickyBlock.hasClass('g-sticky-block--md') && windW <= 768) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else if ($stickyBlock.hasClass('g-sticky-block--lg') && windW <= 992) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else if ($stickyBlock.hasClass('g-sticky-block--xl') && windW <= 1200) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else {
            $stickyBlock
              .removeClass('die-sticky')
              .css({
                'top': '',
                'left': ''
              });
          }

          if (isResponsive == true) {
            setTimeout(function () {
              var offsetTop = $(this).scrollTop(),
                headerH = $('header').outerHeight();
              stickyBlockH = $stickyBlock.outerHeight(),
                stickyBlockParentW = $stickyBlock.parent().width(),
                stickyBlockOffsetTop = $stickyBlock.parent().offset().top,
                stickyBlockOffsetLeft = $stickyBlock.parent().offset().left + parseInt($stickyBlock.parent().css('padding-left')),
                startPoint = $.isNumeric($stickyBlock.data('start-point')) ? $stickyBlock.data('start-point') : $($stickyBlock.data('start-point')).offset().top,
                endPoint = $.isNumeric($stickyBlock.data('end-point')) ? $stickyBlock.data('end-point') : $($stickyBlock.data('end-point')).offset().top;

              if (hasStickyHeader === true) {
                $stickyBlock
                  .not('.die-sticky')
                  .css({
                    'top': offsetTop + headerH >= (endPoint - stickyBlockH) ? endPoint - stickyBlockH - stickyBlockOffsetTop : headerH,
                    'left': stickyBlockOffsetLeft,
                    'width': stickyBlockParentW
                  });

                // if (offsetTop + headerH <= (endPoint - stickyBlockH)) {
                //   $stickyBlock
                //     .not('.die-sticky')
                //     .addClass('g-pos-fix g-m-reset');
                // }
              } else {
                $stickyBlock
                  .not('.die-sticky')
                  .css({
                    'top': offsetTop >= (endPoint - stickyBlockH) ? endPoint - stickyBlockH - stickyBlockOffsetTop : 0,
                    'left': stickyBlockOffsetLeft,
                    'width': stickyBlockParentW
                  });

                // if (offsetTop <= (endPoint - stickyBlockH)) {
                //   $stickyBlock
                //     .not('.die-sticky')
                //     .addClass('g-pos-fix g-m-reset');
                // }
              }
            }, 400);
          }
        });

        if (isResponsive == false) {
          //Add "shadow" element
          var offsetTop = $(this).scrollTop();

          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: target element height]
           * [4: target element width]
           * [5: target element index]
           * [6: target element classes (exclude init class)]
           * [7: start point]
           * [8: end point]
           */
          $self.addShadow($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, i, stickyBlockClasses, startPoint, endPoint, hasStickyHeader);

          //Add sticky state
          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: target element height]
           * [4: target element width]
           * [5: target offset left]
           * [6: start point]
           * [7: end point]
           */
          $self.addSticky($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
        } else {
          //Add responsive sticky state
          var offsetTop = $(this).scrollTop();

          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: parent element height]
           * [4: parent element width]
           * [5: target offset left]
           * [6: start point]
           * [7: end point]
           */
          $self.addSticky($stickyBlock, offsetTop, 'auto', stickyBlockParentW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
        }

        $(window).on('scroll', function () {
          var offsetTop = $(this).scrollTop();

          if (isResponsive == false) {
            //Add "shadow" element
            /* Args:
             * [1: target element]
             * [2: window offset top]
             * [3: target element height]
             * [4: target element width]
             * [5: target element index]
             * [6: target element classes (exclude init class)]
             * [7: start point]
             * [8: end point]
             */
            $self.addShadow($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, i, stickyBlockClasses, startPoint, endPoint, hasStickyHeader);

            //Add sticky state
            /* Args:
             * [1: target element]
             * [2: window offset top]
             * [3: target element height]
             * [4: target element width]
             * [5: target offset left]
             * [6: start point]
             * [7: end point]
             */
            $self.addSticky($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
          } else {
            //Add responsive sticky state
            /* Args:
             * [1: target element]
             * [2: window offset top]
             * [3: parent element height]
             * [4: parent element width]
             * [5: target offset left]
             * [6: start point]
             * [7: end point]
             */
            $self.addSticky($stickyBlock, offsetTop, 'auto', stickyBlockParentW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
          }

          //Remove sticky state
          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: start point]
           */
          $self.removeSticky($stickyBlock, offsetTop, startPoint, hasStickyHeader);

          if (endPoint) {
            //Add absolute state
            /* Args:
             * [1: target element]
             * [2: target element height]
             * [3: target element index]
             * [4: target offset top]
             * [5: window offset top]
             * [6: end point]
             */

            $self.addAbsolute($stickyBlock, stickyBlockH, i, stickyBlockOffsetTop, offsetTop, endPoint, hasStickyHeader);
          }
        });

        $(window).trigger('scroll');

        //Add object to collection
        collection = collection.add($stickyBlock);
      });
    },

    addSticky: function (target, offsetTop, targetH, targetW, offsetLeft, startPoint, endPoint, hasStickyHeader) {
      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH >= startPoint && offsetTop + headerH < endPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-rel')
            .css({
              'top': '',
              'left': '',
              'width': '',
              'height': ''
            })
            .addClass('g-pos-fix g-m-reset')
            .css({
              'top': headerH,
              'left': offsetLeft,
              'width': targetW,
              'height': targetH
            });
        }
      } else {
        if (offsetTop >= startPoint && offsetTop < endPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-rel')
            .css({
              'top': '',
              'left': '',
              'width': '',
              'height': ''
            })
            .addClass('g-pos-fix g-m-reset')
            .css({
              'top': 0,
              'left': offsetLeft,
              'width': targetW,
              'height': targetH
            });
        }
      }
    },

    removeSticky: function (target, offsetTop, startPoint, hasStickyHeader) {
      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH <= startPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .css({
              'left': ''
            });
        }
      } else {
        if (offsetTop <= startPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .css({
              'left': ''
            });
        }
      }
    },

    addAbsolute: function (target, targetH, targetI, targetOffsetTop, offsetTop, endPoint, hasStickyHeader) {
      if (target.hasClass('g-pos-rel')) return;

      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH >= endPoint - targetH) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .addClass('g-pos-rel')
            .css({
              'top': endPoint - targetH - targetOffsetTop,
              'left': ''
            });
        }
      } else {
        if (offsetTop >= endPoint - targetH) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .addClass('g-pos-rel')
            .css({
              'top': endPoint - targetH - targetOffsetTop,
              'left': ''
            });
        }
      }
    },

    addShadow: function (target, offsetTop, targetH, targetW, targetI, targetClasses, startPoint, endPoint, hasStickyHeader) {
      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH > startPoint && offsetTop + headerH < (endPoint - targetH)) {
          if ($('#shadow' + targetI).length) return;

          //Add shadow block
          target
            .not('.die-sticky')
            .before('<div id="shadow' + targetI + '" class="' + targetClasses + '" style="height: ' + targetH + 'px; width: ' + targetW + 'px"></div>');
        } else {
          if (!$('#shadow' + targetI).length) return;

          //Remove shadow block
          $('#shadow' + targetI).remove();
        }
      } else {
        if (offsetTop > startPoint && offsetTop < (endPoint - targetH)) {
          if ($('#shadow' + targetI).length) return;

          //Add shadow block
          target
            .not('.die-sticky')
            .before('<div id="shadow' + targetI + '" class="' + targetClasses + '" style="height: ' + targetH + 'px; width: ' + targetW + 'px"></div>');
        } else {
          if (!$('#shadow' + targetI).length) return;

          //Remove shadow block
          $('#shadow' + targetI).remove();
        }
      }
    },

    resolutionCheck: function (target) {
      target
        .removeClass('g-pos-fix g-m-reset')
        .css({
          'top': '',
          'left': '',
          'width': '',
          'height': ''
        });
    }
  }
})(jQuery);
/**
 * Go To wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */

;(function ($) {
  'use strict';
  $.HSCore.components.HSGoTo = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Go To wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initGoTo();

      return this.pageCollection;
    },

    initGoTo: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          $target = $this.data('target'),
          type = $this.data('type'),
          showEffect = $this.data('show-effect'),
          hideEffect = $this.data('hide-effect'),
          position = JSON.parse(el.getAttribute('data-position')),
          compensation = $($this.data('compensation')).outerHeight(),
          offsetTop = $this.data('offset-top');

        $this.addClass('animated').css({
          'display': 'inline-block',
          'position': type,
          'opacity': 0
        });

        if (type == 'fixed' || type == 'absolute') {
          // setTimeout(function () {
          //   $this.hide();
          // }, 400);

          $this.css(position);
        }

        $this.on('click', function (e) {
          e.preventDefault();

          $('html, body').stop().animate({
            'scrollTop': $target ? $($target).offset().top - compensation : 0
          }, 800);
        });

        if (!$this.data('offset-top') && !$this.hasClass('js-animation-was-fired')) {
          if ($this.offset().top <= $(window).height()) {
            $this.show();

            setTimeout(function() {
              $this.addClass('js-animation-was-fired ' + showEffect).css({
                'opacity': ''
              });
            });
          }
        }

        $(window).on('scroll', function () {
          if ($this.data('offset-top')) {
            if ($(window).scrollTop() >= offsetTop && !$this.hasClass('js-animation-was-fired')) {
              $this.show();

              setTimeout(function() {
                $this.addClass('js-animation-was-fired ' + showEffect).css({
                  'opacity': ''
                });
              });
            } else if ($(window).scrollTop() <= offsetTop && $this.hasClass('js-animation-was-fired')) {
              $this.removeClass('js-animation-was-fired ' + showEffect);

              setTimeout(function() {
                $this.addClass(hideEffect).css({
                  'opacity': 0
                });
              }, 100);

              setTimeout(function() {
                $this.removeClass(hideEffect).hide();
              }, 400);
            }
          } else {
            var thisOffsetTop = $this.offset().top;

            if (!$this.hasClass('js-animation-was-fired')) {
              if ($(window).scrollTop() >= thisOffsetTop - $(window).height()) {
                $this.show();

                setTimeout(function() {
                  $this.addClass('js-animation-was-fired ' + showEffect).css({
                    'opacity': ''
                  });
                });
              }
            }
          }
        });

        $(window).trigger('scroll');

        //Actions
        collection = collection.add($this);
      });
    }
  };
})(jQuery);







