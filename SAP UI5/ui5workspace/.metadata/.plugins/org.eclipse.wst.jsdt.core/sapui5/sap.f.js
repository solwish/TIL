
// ---- sap.f --------------------------------------------------------------------------


// ---- sap.f.Avatar --------------------------------------------------------------------------

/**
 * Constructor for a new <code>Avatar</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getInitials initials} : string</li>
 * <li>{@link #getDisplayShape displayShape} : sap.f.AvatarShape (default: Circle)</li>
 * <li>{@link #getDisplaySize displaySize} : sap.f.AvatarSize (default: S)</li>
 * <li>{@link #getCustomDisplaySize customDisplaySize} : sap.ui.core.CSSSize (default: 3rem)</li>
 * <li>{@link #getCustomFontSize customFontSize} : sap.ui.core.CSSSize (default: 1.125rem)</li>
 * <li>{@link #getImageFitType imageFitType} : sap.f.AvatarImageFitType (default: Cover)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDetailBox detailBox} : sap.m.LightBox</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * An image-like control that has different display options for representing images, initials,
 * and icons.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>Avatar</code> control allows the usage of different content, shapes, and sizes
 * depending on the use case.
 * 
 * The content types that can be displayed are either images, icons, or initials. The shape
 * can be circular or square. There are several predefined sizes, as well as an option to
 * set a custom size.
 * 
 * <h3>Usage</h3>
 * 
 * Up to two Latin letters can be displayed as initials in an <code>Avatar</code>. If there
 * are more than two letters, or if there's a non-Latin character present, a default image
 * placeholder will be created.
 * 
 * There are two options for how the displayed image can fit inside the
 * available area:
 * <ul>
 * <li>Cover - the image is scaled to cover all of the available area</li>
 * <li>Contain - the image is scaled as large as possible while both
 * its height and width fit inside the avalable area</li>
 * </ul>
 * <b>Note:</b> To set a custom size for the <code>Avatar</code>, you have to choose the <code>Custom</code>
 * value for the <code>displaySize</code> property. Then, you have to set both the
 * <code>customDisplaySize</code> and <code>customFontSize</code> properties.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.Avatar = function(sId,mSettings) {};
/**
 * Fired when the user selects the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.f.Avatar.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.Avatar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.Avatar</code> itself.
 * 
 * Fired when the user selects the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.Avatar</code> itself
 * 
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.Avatar.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.f.Avatar(); };

/**
 * Binds aggregation {@link #getDetailBox detailBox} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.bindDetailBox = function(oBindingInfo) { return new sap.f.Avatar(); };

/**
 * Destroys the detailBox in the aggregation {@link #getDetailBox detailBox}.
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.destroyDetailBox = function() { return new sap.f.Avatar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.Avatar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.detachPress = function(fnFunction,oListener) { return new sap.f.Avatar(); };

/**
 * Creates a new subclass of class sap.f.Avatar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.Avatar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.Avatar.prototype.firePress = function(mParameters) { return new sap.f.Avatar(); };

/**
 * @see sap.ui.core.Control#getAccessibilityInfo
 * @protected
 * 
 */
sap.f.Avatar.prototype.getAccessibilityInfo = function() {  };

/**
 * Gets current value of property {@link #getCustomDisplaySize customDisplaySize}.
 * 
 * Specifies custom display size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * Default value is <code>3rem</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>customDisplaySize</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getCustomDisplaySize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getCustomFontSize customFontSize}.
 * 
 * Specifies custom font size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * Default value is <code>1.125rem</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>customFontSize</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getCustomFontSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation {@link #getDetailBox detailBox}.
 * 
 * A <code>sap.m.LightBox</code> instance, that will be opened automatically when the user interacts with the <code>Avatar</code>.
 * 
 * The <code>press</code> event will still be fired.
 * 
 * @returns {sap.m.LightBox}
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getDetailBox = function() { return new sap.m.LightBox(); };

/**
 * Gets current value of property {@link #getDisplayShape displayShape}.
 * 
 * Defines the shape of the <code>Avatar</code>.
 * 
 * Default value is <code>Circle</code>.
 * @returns {sap.f.AvatarShape} Value of property <code>displayShape</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getDisplayShape = function() { return new sap.f.AvatarShape(); };

/**
 * Gets current value of property {@link #getDisplaySize displaySize}.
 * 
 * Sets a predefined display size of the <code>Avatar</code>.
 * 
 * Default value is <code>S</code>.
 * @returns {sap.f.AvatarSize} Value of property <code>displaySize</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getDisplaySize = function() { return new sap.f.AvatarSize(); };

/**
 * Gets current value of property {@link #getImageFitType imageFitType}.
 * 
 * Specifies how an image would fit in the <code>Avatar</code>.
 * 
 * Default value is <code>Cover</code>.
 * @returns {sap.f.AvatarImageFitType} Value of property <code>imageFitType</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getImageFitType = function() { return new sap.f.AvatarImageFitType(); };

/**
 * Gets current value of property {@link #getInitials initials}.
 * 
 * Defines the displayed initials.
 * 
 * @returns {string} Value of property <code>initials</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getInitials = function() { return ""; };

/**
 * Returns a metadata object for class sap.f.Avatar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.Avatar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSrc src}.
 * 
 * Determines the path to the desired image or icon.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>src</code>
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.getSrc = function() { return new sap.ui.core.URI(); };

/**
 * Sets a new value for property {@link #getCustomDisplaySize customDisplaySize}.
 * 
 * Specifies custom display size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3rem</code>.
 * @param {sap.ui.core.CSSSize} sCustomDisplaySize New value for property <code>customDisplaySize</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setCustomDisplaySize = function(sCustomDisplaySize) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getCustomFontSize customFontSize}.
 * 
 * Specifies custom font size of the <code>Avatar</code>.
 * 
 * <b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.125rem</code>.
 * @param {sap.ui.core.CSSSize} sCustomFontSize New value for property <code>customFontSize</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setCustomFontSize = function(sCustomFontSize) { return new sap.f.Avatar(); };

/**
 * Sets the <code>detailBox</code> aggregation.
 * @param {sap.m.LightBox|undefined} oLightBox - Instance of the LightBox control or undefined
 * @returns {object} <code>this</code> for chaining
 * @since 1.48
 * @override
 * @public
 * 
 */
sap.f.Avatar.prototype.setDetailBox = function(oLightBox) { return new Object(); };

/**
 * Sets a new value for property {@link #getDisplayShape displayShape}.
 * 
 * Defines the shape of the <code>Avatar</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Circle</code>.
 * @param {sap.f.AvatarShape} sDisplayShape New value for property <code>displayShape</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setDisplayShape = function(sDisplayShape) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getDisplaySize displaySize}.
 * 
 * Sets a predefined display size of the <code>Avatar</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>S</code>.
 * @param {sap.f.AvatarSize} sDisplaySize New value for property <code>displaySize</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setDisplaySize = function(sDisplaySize) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getImageFitType imageFitType}.
 * 
 * Specifies how an image would fit in the <code>Avatar</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Cover</code>.
 * @param {sap.f.AvatarImageFitType} sImageFitType New value for property <code>imageFitType</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setImageFitType = function(sImageFitType) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getInitials initials}.
 * 
 * Defines the displayed initials.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sInitials New value for property <code>initials</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setInitials = function(sInitials) { return new sap.f.Avatar(); };

/**
 * Sets a new value for property {@link #getSrc src}.
 * 
 * Determines the path to the desired image or icon.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sSrc New value for property <code>src</code>
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.setSrc = function(sSrc) { return new sap.f.Avatar(); };

/**
 * Unbinds aggregation {@link #getDetailBox detailBox} from model data.
 * @returns {sap.f.Avatar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.f.Avatar.prototype.unbindDetailBox = function() { return new sap.f.Avatar(); };


// ---- sap.f.AvatarImageFitType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarImageFitType.toString = function() { return ""; };

// ---- sap.f.AvatarShape --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarShape.toString = function() { return ""; };

// ---- sap.f.AvatarSize --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarSize.toString = function() { return ""; };

// ---- sap.f.AvatarType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.AvatarType.toString = function() { return ""; };

// ---- sap.f.DynamicPage --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPage</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll} : boolean (default: false)</li>
 * <li>{@link #getHeaderExpanded headerExpanded} : boolean (default: true)</li>
 * <li>{@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick} : boolean (default: true)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: false)</li>
 * <li>{@link #getFitContent fitContent} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.f.DynamicPageTitle</li>
 * <li>{@link #getHeader header} : sap.f.DynamicPageHeader</li>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.m.IBar</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A layout control, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.
 * 
 * <h3>Overview</h3>
 * 
 * The control consist of several components:
 * 
 * <ul><li>{@link sap.f.DynamicPageTitle DynamicPageTitle} - consists of a heading
 * on the left side, content in the middle, and actions on the right. The displayed
 * content changes based on the current mode of the {@link sap.f.DynamicPageHeader
 * DynamicPageHeader}.</li>
 * <li>{@link sap.f.DynamicPageHeader DynamicPageHeader} - a generic container, which
 * can contain a single layout control and does not care about the content alignment
 * and responsiveness. The header works in two modes - expanded and snapped and its
 * behavior can be adjusted with the help of different properties.</li>
 * <li>Content area - a generic container, which can have a single UI5 layout control
 * and does not care about the content alignment and responsiveness.</li>
 * <li>Footer - positioned at the bottom with a small offset and used for additional
 * actions, the footer floats above the content. It can be any {@link sap.m.IBar}
 * control.</li></ul>
 * 
 * <h3>Usage</h3>
 * 
 * Use the <code>DynamicPage</code> if you need to have a title, that is always visible
 * and a header, that has configurable Expanding/Snapping functionality.
 * If you don't need the Expanding/Snapping functionality it is better to use the
 * {@link sap.m.Page} as a lighter control.
 * 
 * <ul><b>Notes:</b>
 * <li>If you're displaying a {@link sap.m.FlexBox} with non-adaptive content
 * (doesn't stretch to fill the available space), it is recommended to set the
 * <code>fitContainer</code> property of the {@link sap.m.FlexBox FlexBox} to
 * <code>false</code>.</li>
 * <li>If you are displaying a {@link sap.ui.table.Table}, keep in mind that it is
 * non-adaptive and may cause unpredicted behavior for the <code>DynamicPage</code>
 * on smaller screen sizes, such as mobile.</li>
 * <li>Snapping of the {@link sap.f.DynamicPageTitle DynamicPageTitle} is not supported in the following case:
 * When the <code>DynamicPage</code> has a scroll bar, the control usually scrolls to the snapping point - the point,
 * where the {@link sap.f.DynamicPageHeader DynamicPageHeader} is scrolled out completely.
 * However, when there is a scroll bar, but not enough content to reach the snapping point,
 * the snapping is not possible using scrolling.</li></ul>
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The responsive behavior of the <code>DynamicPage</code> depends on the behavior of
 * the content that is displayed.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPage = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyContent = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the footer in the aggregation {@link #getFooter footer}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyFooter = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the header in the aggregation {@link #getHeader header}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyHeader = function() { return new sap.f.DynamicPage(); };

/**
 * Destroys the title in the aggregation {@link #getTitle title}.
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.destroyTitle = function() { return new sap.f.DynamicPage(); };

/**
 * Creates a new subclass of class sap.f.DynamicPage with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.DynamicPage.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * <code>DynamicPage</code> content.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getFitContent fitContent}.
 * 
 * Optimizes <code>DynamicPage</code> responsiveness on small screens and behavior
 * when expanding/collapsing the <code>DynamicPageHeader</code>.
 * 
 * <b>Note:</b> It is recommended to use this property when displaying content
 * of adaptive controls that stretch to fill the available space,
 * such as {@link sap.ui.table.Table} and  {@link sap.ui.table.AnalyticalTable}.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>fitContent</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getFitContent = function() { return false; };

/**
 * Gets content of aggregation {@link #getFooter footer}.
 * 
 * <code>DynamicPage</code> floating footer.
 * 
 * @returns {sap.m.IBar}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getFooter = function() { return new sap.m.IBar(); };

/**
 * Gets content of aggregation {@link #getHeader header}.
 * 
 * <code>DynamicPage</code> header.
 * 
 * @returns {sap.f.DynamicPageHeader}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getHeader = function() { return new sap.f.DynamicPageHeader(); };

/**
 * Gets current value of property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerExpanded</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getHeaderExpanded = function() { return false; };

/**
 * Returns a metadata object for class sap.f.DynamicPage.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPage.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>preserveHeaderStateOnScroll</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getPreserveHeaderStateOnScroll = function() { return false; };

/**
 * Gets current value of property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFooter</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getShowFooter = function() { return false; };

/**
 * Gets content of aggregation {@link #getTitle title}.
 * 
 * <code>DynamicPage</code> title.
 * 
 * @returns {sap.f.DynamicPageTitle}
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getTitle = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the the user can switch between the expanded/collapsed states of the
 * <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code>. If set to
 * <code>false</code>, the <code>DynamicPageTitle</code> is not clickable and the application
 * must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toggleHeaderOnTitleClick</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.getToggleHeaderOnTitleClick = function() { return false; };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setContent = function(oContent) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getFitContent fitContent}.
 * 
 * Optimizes <code>DynamicPage</code> responsiveness on small screens and behavior
 * when expanding/collapsing the <code>DynamicPageHeader</code>.
 * 
 * <b>Note:</b> It is recommended to use this property when displaying content
 * of adaptive controls that stretch to fill the available space,
 * such as {@link sap.ui.table.Table} and  {@link sap.ui.table.AnalyticalTable}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFitContent New value for property <code>fitContent</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setFitContent = function(bFitContent) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getFooter footer}.
 * @param {sap.m.IBar} oFooter The footer to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setFooter = function(oFooter) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getHeader header}.
 * @param {sap.f.DynamicPageHeader} oHeader The header to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setHeader = function(oHeader) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderExpanded New value for property <code>headerExpanded</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setHeaderExpanded = function(bHeaderExpanded) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the control`s title and header
 * are with height larger than the given threshold.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPreserveHeaderStateOnScroll New value for property <code>preserveHeaderStateOnScroll</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setPreserveHeaderStateOnScroll = function(bPreserveHeaderStateOnScroll) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFooter New value for property <code>showFooter</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setShowFooter = function(bShowFooter) { return new sap.f.DynamicPage(); };

/**
 * Sets the aggregated {@link #getTitle title}.
 * @param {sap.f.DynamicPageTitle} oTitle The title to set
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setTitle = function(oTitle) { return new sap.f.DynamicPage(); };

/**
 * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the the user can switch between the expanded/collapsed states of the
 * <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code>. If set to
 * <code>false</code>, the <code>DynamicPageTitle</code> is not clickable and the application
 * must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToggleHeaderOnTitleClick New value for property <code>toggleHeaderOnTitleClick</code>
 * @returns {sap.f.DynamicPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPage.prototype.setToggleHeaderOnTitleClick = function(bToggleHeaderOnTitleClick) { return new sap.f.DynamicPage(); };


// ---- sap.f.DynamicPageHeader --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPageHeader</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPinnable pinnable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Header of the {@link sap.f.DynamicPage}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>DynamicPageHeader</code> control is part of the {@link sap.f.DynamicPage} family
 * and is used to serve as header of the {@link sap.f.DynamicPage DynamicPage}.
 * 
 * <h3>Usage</h3>
 * 
 * The <code>DynamicPageHeader</code> can hold any layout control and has  two states - expanded
 * and collapsed (snapped). The switching between these states happens when:
 * 
 * <ul><li>the user scrolls below its bottom margin</li>
 * <li>the user clicks on the {@link sap.f.DynamicPageTitle DynamicPageTitle}</li>
 * <li>through the {@link sap.f.DynamicPage DynamicPage} property <code>headerExpanded</code></li></ul>
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The responsive behavior of the <code>DynamicPageHeader</code> depends on the behavior of the
 * content that is displayed.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageHeader = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.addContent = function(oContent) { return new sap.f.DynamicPageHeader(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.destroyContent = function() { return new sap.f.DynamicPageHeader(); };

/**
 * Creates a new subclass of class sap.f.DynamicPageHeader with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.DynamicPageHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content of the header.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPinnable pinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>pinnable</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.getPinnable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.insertContent = function(oContent,iIndex) { return new sap.f.DynamicPageHeader(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getPinnable pinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPinnable New value for property <code>pinnable</code>
 * @returns {sap.f.DynamicPageHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageHeader.prototype.setPinnable = function(bPinnable) { return new sap.f.DynamicPageHeader(); };


// ---- sap.f.DynamicPageTitle --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DynamicPageTitle</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeading heading} : sap.ui.core.Control</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li>
 * <li>{@link #getSnappedContent snappedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getExpandedContent expandedContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Title of the {@link sap.f.DynamicPage}.
 * 
 * <h3>Overview</h3>
 * 
 * The <code>DynamicPageTitle</code> control is part of the {@link sap.f.DynamicPage}
 * family and is used to serve as title of the {@link sap.f.DynamicPage DynamicPage}.
 * 
 * <h3>Usage</h3>
 * 
 * The <code>DynamicPageTitle</code> can hold any control and displays the most important
 * information regarding the object that will always remain visible while scrolling.
 * 
 * <b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s
 * recommended to use controls, suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
 * 
 * If the <code>toggleHeaderOnTitleClick</code> property of the {@link sap.f.DynamicPage DynamicPage}
 * is set to <code>true</code>, the user can switch between the expanded/collapsed states of the
 * {@link sap.f.DynamicPageHeader DynamicPageHeader} by clicking on the <code>DynamicPageTitle</code>.
 * If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable and the app must
 * provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The responsive behavior of the <code>DynamicPageTitle</code> depends on the behavior of the
 * content that is displayed.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.42
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.DynamicPageTitle = function(sId,mSettings) {};
/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.core.Control}
 *            oAction the action to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addAction = function(oAction) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some expandedContent to the aggregation {@link #getExpandedContent expandedContent}.
 * @param {sap.ui.core.Control}
 *            oExpandedContent the expandedContent to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addExpandedContent = function(oExpandedContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Adds some snappedContent to the aggregation {@link #getSnappedContent snappedContent}.
 * @param {sap.ui.core.Control}
 *            oSnappedContent the snappedContent to add; if empty, nothing is inserted
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.addSnappedContent = function(oSnappedContent) { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyActions = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the expandedContent in the aggregation {@link #getExpandedContent expandedContent}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyExpandedContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys the heading in the aggregation {@link #getHeading heading}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroyHeading = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Destroys all the snappedContent in the aggregation {@link #getSnappedContent snappedContent}.
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.destroySnappedContent = function() { return new sap.f.DynamicPageTitle(); };

/**
 * Creates a new subclass of class sap.f.DynamicPageTitle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.DynamicPageTitle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * The <code>DynamicPageTitle</code> actions.
 * <br><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls,
 * suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getExpandedContent expandedContent}.
 * 
 * The content that is displayed in the <code>DynamicPageTitle</code> in expanded state.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getExpandedContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getHeading heading}.
 * 
 * The title or any other UI5 control that serves as a heading for the object.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getHeading = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.f.DynamicPageTitle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.DynamicPageTitle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getSnappedContent snappedContent}.
 * 
 * The content that is displayed in the <code>DynamicPageTitle</code> in collapsed (snapped) state.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.getSnappedContent = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getExpandedContent expandedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oExpandedContent The expandedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfExpandedContent = function(oExpandedContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getSnappedContent snappedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSnappedContent The snappedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.indexOfSnappedContent = function(oSnappedContent) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.core.Control}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertAction = function(oAction,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a expandedContent into the aggregation {@link #getExpandedContent expandedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oExpandedContent the expandedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the expandedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the expandedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the expandedContent is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertExpandedContent = function(oExpandedContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Inserts a snappedContent into the aggregation {@link #getSnappedContent snappedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oSnappedContent the snappedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the snappedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the snappedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the snappedContent is inserted at
 *              the last position
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.insertSnappedContent = function(oSnappedContent,iIndex) { return new sap.f.DynamicPageTitle(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.core.Control} vAction The action to remove or its index or id
 * @returns {sap.ui.core.Control} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAction = function(vAction) { return new sap.ui.core.Control(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getExpandedContent expandedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllExpandedContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSnappedContent snappedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeAllSnappedContent = function() { return new Array(); };

/**
 * Removes a expandedContent from the aggregation {@link #getExpandedContent expandedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vExpandedContent The expandedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed expandedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeExpandedContent = function(vExpandedContent) { return new sap.ui.core.Control(); };

/**
 * Removes a snappedContent from the aggregation {@link #getSnappedContent snappedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vSnappedContent The snappedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed snappedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.removeSnappedContent = function(vSnappedContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated {@link #getHeading heading}.
 * @param {sap.ui.core.Control} oHeading The heading to set
 * @returns {sap.f.DynamicPageTitle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.DynamicPageTitle.prototype.setHeading = function(oHeading) { return new sap.f.DynamicPageTitle(); };


// ---- sap.f.FlexibleColumnLayout --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLayout layout} : sap.f.LayoutType (default: OneColumn)</li>
 * <li>{@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn} : string (default: slide)</li>
 * <li>{@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn} : string (default: slide)</li>
 * <li>{@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn} : string (default: slide)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBeginColumnPages beginColumnPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getMidColumnPages midColumnPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getEndColumnPages endColumnPages} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialBeginColumnPage initialBeginColumnPage} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * <li>{@link #getInitialMidColumnPage initialMidColumnPage} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * <li>{@link #getInitialEndColumnPage initialEndColumnPage} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:stateChange stateChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beginColumnNavigate beginColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:midColumnNavigate midColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterMidColumnNavigate afterMidColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:endColumnNavigate endColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterEndColumnNavigate afterEndColumnNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Implements the master-detail-detail paradigm by displaying up to three pages in separate columns.
 * 
 * <h3>Overview</h3>
 * 
 * The control is logically similar to {@link sap.m.SplitContainer} with the difference that it capable of handling
 * three columns (referred to as <code>Begin</code>, <code>Mid</code> and <code>End</code>) rather than two
 * (<code>Master</code>, <code>Detail</code>). The width of the three columns is variable.
 * 
 * There are several possible layouts that can be changed either with the control's API, or by the user with the help of layout arrows.
 * 
 * Internally the control makes use of three instances of {@link sap.m.NavContainer}, thus forming the three columns.
 * 
 * <h3>Usage</h3>
 * 
 * Use this control for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
 * The control is flexible in a sense that the application can focus the user's attention on one particular column by making it larger or even fullscreen.
 * 
 * The columns are accessible with the <code>beginColumnPages</code>, <code>midColumnPages</code> and <code>endColumnPages</code> aggregations.
 * 
 * The relative sizes and the visibility of the three columns are determined based on the value of the {@link sap.f.LayoutType layout} property.
 * 
 * Changes to the layout due to user interaction are communicated to the app with the <code>stateChange</code> event.
 * 
 * <ul><b>Notes:</b>
 * <li>To easily implement the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app,
 * you can use the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class.</li>
 * <li>To facilitate the navigation and view loading, you can use the {@link sap.f.routing.Router} </li></ul>
 * 
 * <h3>Responsive Behavior</h3>
 * 
 * The control automatically displays the maximum possible number of columns based on the device size and current <code>layout</code>.
 * The app does not need to take into consideration the current device/screen size, but only to add content to the
 * columns and change the value of the <code>layout</code> property.
 * 
 * For detailed information, see {@link sap.f.LayoutType LayoutType} enumeration.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout = function(sId,mSettings) {};
/**
 * Fires when navigation between two pages in the <code>Begin</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which had been displayed before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which is now displayed after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which is now displayed after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether was a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this was a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.afterBeginColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>End</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which had been displayed before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which is now displayed after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which is now displayed after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether was a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this was a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.afterEndColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>Mid</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which had been displayed before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which is now displayed after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which is now displayed after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether was a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this was a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.afterMidColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which was displayed before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which will be displayed after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this is a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.beginColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which was displayed before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which will be displayed after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this is a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.endColumnNavigate = function(oControlEvent) {  };

/**
 * Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page, which was displayed before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page, which will be displayed after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} oControlEvent.getParameters.isBack Determines whether this is a back navigation, triggered by back().
 * @param {boolean} oControlEvent.getParameters.isBackToTop Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} oControlEvent.getParameters.isBackToPage Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} oControlEvent.getParameters.direction Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.midColumnNavigate = function(oControlEvent) {  };

/**
 * Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once.
 * <br/></br>
 * <ul>The interactions that may lead to a state change are:
 *  <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li>
 *  <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul>
 * <br/><br/>
 * <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.f.LayoutType} oControlEvent.getParameters.layout The value of the <code>layout</code> property
 * @param {int} oControlEvent.getParameters.maxColumnsCount The maximum number of columns that can be displayed at once based on the available screen size and control settings.
 * 
 * <ul>Possible values are:
 * <li>3 for browser size of 1280px or more</li>
 * <li>2 for browser size between 960px and 1280px</li>
 * <li>1 for browser size less than 960px</li></ul>
 * @param {boolean} oControlEvent.getParameters.isNavigationArrow Indicates whether the layout changed as a result of the user clicking a layout arrow
 * @param {boolean} oControlEvent.getParameters.isResize Indicates whether the maximum number of columns that can be displayed at once changed
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.stateChange = function(oControlEvent) {  };

/**
 * Adds some beginColumnPage to the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * @param {sap.ui.core.Control}
 *            oBeginColumnPage the beginColumnPage to add; if empty, nothing is inserted
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.addBeginColumnPage = function(oBeginColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Adds some endColumnPage to the aggregation {@link #getEndColumnPages endColumnPages}.
 * @param {sap.ui.core.Control}
 *            oEndColumnPage the endColumnPage to add; if empty, nothing is inserted
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.addEndColumnPage = function(oEndColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Adds some midColumnPage to the aggregation {@link #getMidColumnPages midColumnPages}.
 * @param {sap.ui.core.Control}
 *            oMidColumnPage the midColumnPage to add; if empty, nothing is inserted
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.addMidColumnPage = function(oMidColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Begin</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachAfterBeginColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterEndColumnNavigate afterEndColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>End</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachAfterEndColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterMidColumnNavigate afterMidColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Mid</code> column has completed.
 * 
 * NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachAfterMidColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:beginColumnNavigate beginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachBeginColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:endColumnNavigate endColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachEndColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:midColumnNavigate midColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachMidColumnNavigate = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:stateChange stateChange} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.
 * 
 * Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once.
 * <br/></br>
 * <ul>The interactions that may lead to a state change are:
 *  <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li>
 *  <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul>
 * <br/><br/>
 * <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.attachStateChange = function(oData,fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates back to a page in the <code>FlexibleColumnLayout</code>.
 * Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.
 * 
 * Calling this navigation method, first triggers the (cancelable) navigate event on the SplitContainer,
 * then the beforeHide pseudo event on the source page, beforeFirstShow (if applicable),
 * and beforeShow on the target page. Later, after the transition has completed,
 * the afterShow pseudo event is triggered on the target page and afterHide - on the page, which has been left.
 * The given backData object is available in the beforeFirstShow, beforeShow, and afterShow event objects as data
 * property. The original "data" object from the "to" navigation is also available in these event objects.
 * 
 * @param {string} sPageId
 *         The screen to which is being navigated to. The ID or the control itself can be given.
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation.
 *         The event on the target page will contain this data object as backData property. (the original data from the to() navigation will still be available as data property).
 * 
 *         In scenarios, where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.f.FlexibleColumnLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToPage = function(sPageId,oBackData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates back to the initial/top level of Begin column (this is the element aggregated as "initialPage", or the first added element).
 * NOTE: If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToTopBeginColumn = function(oBackData,oTransitionParameter) { return new sap.ui.core.Control(); };

/**
 * Navigates back to the initial/top level of End column (this is the element aggregated as "initialPage", or the first added element).
 * NOTE: If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToTopEndColumn = function(oBackData,oTransitionParameter) { return new sap.ui.core.Control(); };

/**
 * Navigates back to the initial/top level of Mid column (this is the element aggregated as "initialPage", or the first added element).
 * NOTE: If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * @param {object} oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 *         In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 *         For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 *         When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 *         The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 *         In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.backToTopMidColumn = function(oBackData,oTransitionParameter) { return new sap.ui.core.Control(); };

/**
 * Destroys all the beginColumnPages in the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.destroyBeginColumnPages = function() { return new sap.f.FlexibleColumnLayout(); };

/**
 * Destroys all the endColumnPages in the aggregation {@link #getEndColumnPages endColumnPages}.
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.destroyEndColumnPages = function() { return new sap.f.FlexibleColumnLayout(); };

/**
 * Destroys all the midColumnPages in the aggregation {@link #getMidColumnPages midColumnPages}.
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.destroyMidColumnPages = function() { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachAfterBeginColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterEndColumnNavigate afterEndColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachAfterEndColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterMidColumnNavigate afterMidColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachAfterMidColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:beginColumnNavigate beginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachBeginColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:endColumnNavigate endColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachEndColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:midColumnNavigate midColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachMidColumnNavigate = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:stateChange stateChange} event of this <code>sap.f.FlexibleColumnLayout</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.detachStateChange = function(fnFunction,oListener) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Creates a new subclass of class sap.f.FlexibleColumnLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.FlexibleColumnLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which had been displayed before navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which is now displayed after navigation.
 * @param {string} [mParameters.toId] The ID of the page, which is now displayed after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether was a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this was a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireAfterBeginColumnNavigate = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Fires event {@link #event:afterEndColumnNavigate afterEndColumnNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which had been displayed before navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which is now displayed after navigation.
 * @param {string} [mParameters.toId] The ID of the page, which is now displayed after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether was a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this was a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireAfterEndColumnNavigate = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Fires event {@link #event:afterMidColumnNavigate afterMidColumnNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which had been displayed before navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which had been displayed before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which is now displayed after navigation.
 * @param {string} [mParameters.toId] The ID of the page, which is now displayed after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to)
 * has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether was a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this was a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this was a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireAfterMidColumnNavigate = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Fires event {@link #event:beginColumnNavigate beginColumnNavigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which was displayed before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which will be displayed after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} [mParameters.firstTime] Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this is a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireBeginColumnNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:endColumnNavigate endColumnNavigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which was displayed before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which will be displayed after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} [mParameters.firstTime] Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this is a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireEndColumnNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:midColumnNavigate midColumnNavigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page, which was displayed before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page, which was displayed before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page, which will be displayed after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page, which will be displayed after the current navigation.
 * @param {boolean} [mParameters.firstTime] Determines whether the "to" page (more precisely: a control with the ID of the page,
 * which is currently being navigated to) has not been displayed/navigated to before.
 * @param {boolean} [mParameters.isTo] Determines whether this is a forward navigation, triggered by to().
 * @param {boolean} [mParameters.isBack] Determines whether this is a back navigation, triggered by back().
 * @param {boolean} [mParameters.isBackToTop] Determines whether this is a navigation to the root page, triggered by backToTop().
 * @param {boolean} [mParameters.isBackToPage] Determines whether this was a navigation to a specific page, triggered by backToPage().
 * @param {string} [mParameters.direction] Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireMidColumnNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:stateChange stateChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.f.LayoutType} [mParameters.layout] The value of the <code>layout</code> property
 * @param {int} [mParameters.maxColumnsCount] The maximum number of columns that can be displayed at once based on the available screen size and control settings.
 * 
 * <ul>Possible values are:
 * <li>3 for browser size of 1280px or more</li>
 * <li>2 for browser size between 960px and 1280px</li>
 * <li>1 for browser size less than 960px</li></ul>
 * @param {boolean} [mParameters.isNavigationArrow] Indicates whether the layout changed as a result of the user clicking a layout arrow
 * @param {boolean} [mParameters.isResize] Indicates whether the maximum number of columns that can be displayed at once changed
 * 
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.FlexibleColumnLayout.prototype.fireStateChange = function(mParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Gets content of aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Begin</code> column.
 * 
 * These should be any control with page semantics.
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getBeginColumnPages = function() { return new Array(); };

/**
 * Returns the currently displayed Begin column page.
 * 
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getCurrentBeginColumnPage = function() { return new sap.ui.core.Control(); };

/**
 * Returns the currently displayed End column page.
 * 
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getCurrentEndColumnPage = function() { return new sap.ui.core.Control(); };

/**
 * Returns the currently displayed Mid column page.
 * 
 * @type sap.ui.core.Control
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getCurrentMidColumnPage = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * Default value is <code>slide</code>.
 * @returns {string} Value of property <code>defaultTransitionNameBeginColumn</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getDefaultTransitionNameBeginColumn = function() { return ""; };

/**
 * Gets current value of property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * Default value is <code>slide</code>.
 * @returns {string} Value of property <code>defaultTransitionNameEndColumn</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getDefaultTransitionNameEndColumn = function() { return ""; };

/**
 * Gets current value of property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * Default value is <code>slide</code>.
 * @returns {string} Value of property <code>defaultTransitionNameMidColumn</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getDefaultTransitionNameMidColumn = function() { return ""; };

/**
 * Gets content of aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>End</code> column.
 * 
 * These should be any control with page semantics.
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getEndColumnPages = function() { return new Array(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialBeginColumnPage initialBeginColumnPage}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getInitialBeginColumnPage = function() { return new sap.ui.core.ID(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialEndColumnPage initialEndColumnPage}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getInitialEndColumnPage = function() { return new sap.ui.core.ID(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialMidColumnPage initialMidColumnPage}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getInitialMidColumnPage = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getLayout layout}.
 * 
 * Determines the layout of the control - number of visible columns and their relative sizes
 * 
 * Default value is <code>OneColumn</code>.
 * @returns {sap.f.LayoutType} Value of property <code>layout</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getLayout = function() { return new sap.f.LayoutType(); };

/**
 * Returns the maximum number of columns that can be displayed at once based on the control width
 * @returns {number}
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getMaxColumnsCount = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.f.FlexibleColumnLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.FlexibleColumnLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Mid</code> column.
 * 
 * These should be any control with page semantics.
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.getMidColumnPages = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oBeginColumnPage The beginColumnPage whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.indexOfBeginColumnPage = function(oBeginColumnPage) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getEndColumnPages endColumnPages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oEndColumnPage The endColumnPage whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.indexOfEndColumnPage = function(oEndColumnPage) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMidColumnPages midColumnPages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMidColumnPage The midColumnPage whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.indexOfMidColumnPage = function(oMidColumnPage) { return 0; };

/**
 * Inserts a beginColumnPage into the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * @param {sap.ui.core.Control}
 *            oBeginColumnPage the beginColumnPage to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the beginColumnPage should be inserted at; for
 *              a negative value of <code>iIndex</code>, the beginColumnPage is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the beginColumnPage is inserted at
 *              the last position
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.insertBeginColumnPage = function(oBeginColumnPage,iIndex) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Inserts a endColumnPage into the aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * @param {sap.ui.core.Control}
 *            oEndColumnPage the endColumnPage to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the endColumnPage should be inserted at; for
 *              a negative value of <code>iIndex</code>, the endColumnPage is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the endColumnPage is inserted at
 *              the last position
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.insertEndColumnPage = function(oEndColumnPage,iIndex) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Inserts a midColumnPage into the aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * @param {sap.ui.core.Control}
 *            oMidColumnPage the midColumnPage to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the midColumnPage should be inserted at; for
 *              a negative value of <code>iIndex</code>, the midColumnPage is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the midColumnPage is inserted at
 *              the last position
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.insertMidColumnPage = function(oMidColumnPage,iIndex) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Removes all the controls from the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeAllBeginColumnPages = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeAllEndColumnPages = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeAllMidColumnPages = function() { return new Array(); };

/**
 * Removes a beginColumnPage from the aggregation {@link #getBeginColumnPages beginColumnPages}.
 * 
 * @param {int | string | sap.ui.core.Control} vBeginColumnPage The beginColumnPage to remove or its index or id
 * @returns {sap.ui.core.Control} The removed beginColumnPage or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeBeginColumnPage = function(vBeginColumnPage) { return new sap.ui.core.Control(); };

/**
 * Removes a endColumnPage from the aggregation {@link #getEndColumnPages endColumnPages}.
 * 
 * @param {int | string | sap.ui.core.Control} vEndColumnPage The endColumnPage to remove or its index or id
 * @returns {sap.ui.core.Control} The removed endColumnPage or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeEndColumnPage = function(vEndColumnPage) { return new sap.ui.core.Control(); };

/**
 * Removes a midColumnPage from the aggregation {@link #getMidColumnPages midColumnPages}.
 * 
 * @param {int | string | sap.ui.core.Control} vMidColumnPage The midColumnPage to remove or its index or id
 * @returns {sap.ui.core.Control} The removed midColumnPage or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.removeMidColumnPage = function(vMidColumnPage) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>slide</code>.
 * @param {string} sDefaultTransitionNameBeginColumn New value for property <code>defaultTransitionNameBeginColumn</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setDefaultTransitionNameBeginColumn = function(sDefaultTransitionNameBeginColumn) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>slide</code>.
 * @param {string} sDefaultTransitionNameEndColumn New value for property <code>defaultTransitionNameEndColumn</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setDefaultTransitionNameEndColumn = function(sDefaultTransitionNameEndColumn) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.
 * 
 * Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the
 * transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>show</code>, and the names of any registered custom transitions.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>slide</code>.
 * @param {string} sDefaultTransitionNameMidColumn New value for property <code>defaultTransitionNameMidColumn</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setDefaultTransitionNameMidColumn = function(sDefaultTransitionNameMidColumn) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets the associated {@link #getInitialBeginColumnPage initialBeginColumnPage}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialBeginColumnPage ID of an element which becomes the new target of this initialBeginColumnPage association; alternatively, an element instance may be given
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setInitialBeginColumnPage = function(oInitialBeginColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets the associated {@link #getInitialEndColumnPage initialEndColumnPage}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialEndColumnPage ID of an element which becomes the new target of this initialEndColumnPage association; alternatively, an element instance may be given
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setInitialEndColumnPage = function(oInitialEndColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets the associated {@link #getInitialMidColumnPage initialMidColumnPage}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialMidColumnPage ID of an element which becomes the new target of this initialMidColumnPage association; alternatively, an element instance may be given
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setInitialMidColumnPage = function(oInitialMidColumnPage) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Sets a new value for property {@link #getLayout layout}.
 * 
 * Determines the layout of the control - number of visible columns and their relative sizes
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>OneColumn</code>.
 * @param {sap.f.LayoutType} sLayout New value for property <code>layout</code>
 * @returns {sap.f.FlexibleColumnLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.FlexibleColumnLayout.prototype.setLayout = function(sLayout) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to the given page inside the FlexibleColumnLayout.
 * Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.
 * 
 * @param {string} sPageId
 *         The screen to which we are navigating to. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the "data" parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: It depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.f.FlexibleColumnLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.to = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to a given Begin column page.
 * 
 * @param {string} sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.f.FlexibleColumnLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.toBeginColumnPage = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to a given End column page.
 * 
 * @param {string} sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.f.FlexibleColumnLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.toEndColumnPage = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };

/**
 * Navigates to a given Mid column page.
 * 
 * @param {string} sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right).
 *         Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 *         None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} oData
 *         This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.
 * 
 *         Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 *         When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.
 * 
 *         For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").
 * 
 *         NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 *         The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.f.FlexibleColumnLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.FlexibleColumnLayout.prototype.toMidColumnPage = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.f.FlexibleColumnLayout(); };


// ---- sap.f.FlexibleColumnLayoutSemanticHelper --------------------------------------------------------------------------

/**
 * Constructor for an sap.f.FlexibleColumnLayoutSemanticHelper.
 * 
 * @class
 * Helper class, facilitating the implementation of the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app.
 * 
 * <b>Note:</b> Using this class is not mandatory in order to build an app with <code>sap.f.FlexibleColumnLayout</code>, but exists for convenience only.
 * 
 * <ul>The usage of <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> revolves around two main methods:
 * <li><code>getCurrentUIState</code>Suggests which action buttons to show in each <code>sap.f.FlexibleColumnLayout</code> column,
 * based on the current control state (number and visibility of columns, layout, etc..)</li>
 * <li><code>getNextUIState</code>Suggests which <code>layout</code> to use when navigating to another view level (e.g. from one view to two views).</li></ul>
 * 
 * Sample usage of the class:
 * 
 * <pre>
 * <code>
 *  var helper = sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(myFlexibleColumnLayout);
 *  helper.getCurrentUIState();
 *  helper.getNextUIState(2);
 *  helper.getNextUIState(0);
 * </code>
 * </pre>
 * 
 * Calling <code>getCurrentUIState()</code> will return information which action buttons (Close, FullScreen, ExitFullScreen)
 * must be currently shown in which column, according to UX guidelines, as well as to what layout clicking them should lead.
 * 
 * Calling <code>getNextUIState(2)</code> will return information about the expected layout and action buttons if the
 * application should display three views (master-detail-detail), based on the current state.
 * 
 * Similarly, calling <code>getNextUIState(0)</code> will return information about the expected layout and action buttons
 * if the application should display the initial view only (master), based on the current state.
 * 
 * For more information, see {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState} and {@link sap.f.FlexibleColumnLayoutSemanticHelper#getNextUIState}
 * 
 * @version 1.48.4
 * @param {sap.f.FlexibleColumnLayout} oFlexibleColumnLayout The <code>sap.f.FlexibleColumnLayout</code> object whose state will be manipulated
 * @param {object} oSettings Determines the rules that will be used by the helper
 * @param {sap.f.LayoutType} oSettings.defaultTwoColumnLayoutType Determines what two-column layout type will be suggested by default: <code>sap.f.LayoutType.TwoColumnsBeginExpanded</code> (default) or <code>sap.f.LayoutType.TwoColumnsMidExpanded</code>
 * @param {sap.f.LayoutType} oSettings.defaultThreeColumnLayoutType Determines what three-column layout type will be suggested by default: <code>sap.f.LayoutType.ThreeColumnsMidExpanded</code> (default) or <code>sap.f.LayoutType.ThreeColumnsEndExpanded</code>
 * @param {string} oSettings.mode Determines the suggested layout types: <code>Normal</code> (3-column layouts), <code>MasterDetail</code> (2-column layouts for the first two pages, all other pages will open in fullscreen), and <code>SingleColumn</code> (one page at a time only)
 * @public
 * @since 1.46.0
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper = function(oFlexibleColumnLayout,oSettings) {};
/**
 *  Returns an object, describing the current state of the control and the expected action buttons for each column.
 * 
 *  <ul>The returned object has the following structure:
 * 	<li>layout - the value of the <code>layout</code> property</li>
 * 	<li>maxColumnsCount - the maximum number of columns that can be displayed at once based on the control width. See {@link sap.f.FlexibleColumnLayout#getMaxColumnsCount}</li>
 * 	<li>columnsSizes -  an object with fields <code>beginColumn, midColumn, endColumn</code>, representing the relative percentage sizes of the three columns as integers</li>
 * 	<li>columnsVisibility -  an object with fields <code>beginColumn, midColumn, endColumn</code>, representing the visibility of the three columns</li>
 * 	<li>isFullScreen - <code>true</code> if only one column is visible at the moment, <code>false</code> otherwise
 * 	<b>Note:</b> This may be due to small screen size (phone) or due to a layout, for which a single column takes up the whole width</li>
 * 	<li>isLogicallyFullScreen - <code>true</code> if the current <code>layout</code> is one of the following: <code>sap.f.LayoutType.OneColumn, sap.f.LayoutType.MidColumnFullScreen, sap.f.LayoutType.EndColumnFullScreen</code>, <code>false</code> otherwise
 * 	<b>Note:</b> While <code>isFullScreen</code> can be <code>true</code> for any layout, due to small screen size, <code>isLogicallyFullScreen</code> will only be <code>true</code> for the layout values, listed above.</li>
 * 	<li>actionButtonsInfo - an object with fields <code>midColumn, endColumn</code>, each containing an object, telling whether action buttons should be shown in the <code>mid</code> and <code>end</code> columns, and what value of the <code>layout</code> property should be set upon clicking these buttons.
 * 	Each of these objects has the following fields: <code>closeColumn, fullScreen, exitFullScreen</code>. If <code>null</code>, then the respective action button should not be shown, otherwise provides the value of <code>layout</code> property for the action button.</li></ul>
 * 
 * 	Example value:
 * 
 *  <pre>
 *  <code>
 *  {
 * 	   "layout":"ThreeColumnsMidExpanded",
 * 	   "maxColumnsCount":3,
 * 	   "columnsSizes":{
 * 		  "beginColumn":25,
 * 		  "midColumn":50,
 * 		  "endColumn":25
 * 	   },
 * 	   "columnsVisibility":{
 * 		  "beginColumn":true,
 * 		  "midColumn":true,
 * 		  "endColumn":true
 * 	   },
 * 	   "isFullScreen":false,
 * 	   "isLogicallyFullScreen":false,
 * 	   "actionButtonsInfo":{
 * 		  "midColumn":{
 * 			 "fullScreen":null,
 * 			 "exitFullScreen":null,
 * 			 "closeColumn":null
 * 		  },
 * 		  "endColumn":{
 * 			 "fullScreen":"EndColumnFullScreen",
 * 			 "exitFullScreen":null,
 * 			 "closeColumn":"TwoColumnsBeginExpanded"
 * 		  }
 * 	   }
 * 	}
 *  </code>
 *  </pre>
 * @public
 * @returns {{layout: string, maxColumnsCount: number, columnsSizes: {beginColumn, midColumn, endColumn}, columnsVisibility: {beginColumn, midColumn, endColumn}, isFullScreen, isLogicallyFullScreen, actionButtonsInfo: {midColumn, endColumn}}}
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.prototype.getCurrentUIState = function() { return null; };

/**
 * Returns the default layout types for the different numbers of columns.
 * 
 * <ul>The returned object has the following fields:
 * <li>defaultLayoutType - the layout that will be suggested by default when only 1 column needs to be shown</li>
 * <li>defaultTwoColumnLayoutType - the layout that will be suggested by default when 2 columns have to be shown side by side</li>
 * <li>defaultThreeColumnLayoutType - the layout that will be suggested by default when 3 columns have to be shown side by side</li></ul>
 * 
 * @public
 * @returns {{defaultLayoutType: string, defaultTwoColumnLayoutType: string, defaultThreeColumnLayoutType: string}}
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.prototype.getDefaultLayouts = function() { return null; };

/**
 * Returns an instance of the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class for a given <code>sap.f.FlexibleColumnLayout</code> object.
 * 
 * @param {sap.f.FlexibleColumnLayout} oFlexibleColumnLayout The <code>sap.f.FlexibleColumnLayout</code> object to get a semantic helper instance for
 * @param {object} [oSettings] An optional settings object to be used when creating the instance.
 * <b>Note:</b> will be considered only for the first <code>getInstanceFor</code> call for the given <code>sap.f.FlexibleColumnLayout</code> object.
 * 
 * @public
 * @static
 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper}
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor = function(oFlexibleColumnLayout,oSettings) { return new sap.f.FlexibleColumnLayoutSemanticHelper(); };

/**
 * Returns an object, describing the state that the control will have after navigating to a different view level.
 * 
 * About the format of return value, see: {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState}
 * 
 * @param iLevel - the view level that should be represented. 0 means initial (master only), 1 - master-detail,
 * 2 - master-detail-detail, 3 and above - subsequent views
 * 
 * @public
 * @returns {{layout: string, maxColumnsCount: number, columnsSizes: {beginColumn, midColumn, endColumn}, columnsVisibility: {beginColumn, midColumn, endColumn}, isFullScreen, isLogicallyFullScreen, actionButtonsInfo: {midColumn, endColumn}}}
 * 
 */
sap.f.FlexibleColumnLayoutSemanticHelper.prototype.getNextUIState = function(iLevel) { return null; };


// ---- sap.f.LayoutType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.f.LayoutType.toString = function() { return ""; };

// ---- sap.f.routing.Router --------------------------------------------------------------------------

/**
 * Instantiates a <code>sap.f.routing.Router</code>.
 * 
 * @class
 * See {@link sap.ui.core.routing.Router} for the constructor arguments.
 * 
 * The <code>sap.f.routing.Router</code> is intended to be used with {@link sap.f.FlexibleColumnLayout} as a root control.
 * 
 * The difference to the {@link sap.ui.core.routing.Router} are the properties viewLevel, transition and transitionParameters you can specify in every Route or Target created by this router.
 * 
 * Additionally, the <code>layout</code> property can be specified in every Route, in which case it will be applied to the root control.
 * 
 * @extends sap.ui.core.routing.Router
 * 
 * @param {object|object[]} [oRoutes] may contain many Route configurations as {@link sap.ui.core.routing.Route#constructor}.
 * @param {string|string[]} [oConfig.bypassed.target] One or multiple names of targets that will be displayed, if no route of the router is matched.
 * 
 * @param {sap.ui.core.UIComponent} [oOwner] the Component of all the views that will be created by this Router,
 * will get forwarded to the {@link sap.ui.core.routing.Views#constructor}.
 * If you are using the componentMetadata to define your routes you should skip this parameter.
 * 
 * @param {object} [oTargetsConfig]
 * the target configuration, see {@link sap.f.routing.Targets#constructor} documentation (the options object).
 * 
 * @public
 * @since 1.46
 * 
 */
sap.f.routing.Router = function(oRoutes,oOwner,oTargetsConfig) {};
/**
 * Creates a new subclass of class sap.f.routing.Router with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.routing.Router.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.routing.Router.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.routing.Router.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.routing.Router.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the TargetHandler instance.
 * 
 * @return {sap.f.routing.TargetHandler} the TargetHandler instance
 * @public
 * 
 */
sap.f.routing.Router.prototype.getTargetHandler = function() { return new sap.f.routing.TargetHandler(); };


// ---- sap.f.routing.TargetHandler --------------------------------------------------------------------------

/**
 * Instantiates a TargetHandler, a class used for closing dialogs and showing transitions in NavContainers when targets are displayed.<br/>
 * <b>You should not create an own instance of this class.</b> It will be created when using {@link sap.f.routing.Router} or {@link sap.f.routing.Targets}.
 * You may use the {@link #setCloseDialogs} function to specify if dialogs should be closed on displaying other views.
 * 
 * 
 * @class
 * @param {boolean} closeDialogs - the default is true - will close all open dialogs before navigating, if set to true. If set to false it will just navigate without closing dialogs.
 * @public
 * @since 1.46
 * 
 */
sap.f.routing.TargetHandler = function(closeDialogs) {};
/**
 * Creates a new subclass of class sap.f.routing.TargetHandler with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.routing.TargetHandler.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets if a navigation should close dialogs
 * 
 * @public
 * @returns {boolean} a flag indication if dialogs will be closed
 * 
 */
sap.f.routing.TargetHandler.prototype.getCloseDialogs = function() { return false; };

/**
 * Returns a metadata object for class sap.f.routing.TargetHandler.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.routing.TargetHandler.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets if a navigation should close dialogs
 * 
 * @param {boolean} bCloseDialogs close dialogs if true
 * @public
 * @returns {sap.f.routing.TargetHandler} for chaining
 * 
 */
sap.f.routing.TargetHandler.prototype.setCloseDialogs = function(bCloseDialogs) { return new sap.f.routing.TargetHandler(); };


// ---- sap.f.routing.Targets --------------------------------------------------------------------------

/**
 * Provides a convenient way for placing views into the correct containers of your application.
 * The sap.f extension of Targets also handles the triggering of page navigation when the target control is a {@link sap.f.FlexibleColumnLayout}.
 * Other controls are also allowed, but the extra parameters viewLevel, transition and transitionParameters are ignored and it will behave like {@link sap.ui.core.routing.Targets}.
 * When a target is displayed, dialogs will be closed. To change this use {@link #getTargetHandler} and {@link sap.f.routing.TargetHandler#setCloseDialogs}.
 * 
 * 
 * @class
 * @extends sap.ui.core.routing.Targets
 * @param {object} oOptions
 * @param {sap.ui.core.routing.Views} oOptions.views the views instance will create the views of all the targets defined, so if 2 targets have the same viewName, the same instance of the view will be displayed.
 * @param {object} [oOptions.config] this config allows all the values oOptions.targets.anyName allows, these will be the default values for properties used in the target.<br/>
 * For example if you are only using xmlViews in your app you can specify viewType="XML" so you don't have to repeat this in every target.<br/>
 * If a target specifies viewType="JS", the JS will be stronger than the XML here is an example.
 * 
 * <pre>
 * <code>
 * {
 *     config: {
 *         viewType : "XML"
 *     }
 *     targets : {
 *         xmlTarget : {
 *             ...
 *         },
 *         jsTarget : {
 *             viewType : "JS"
 *             ...
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * Then the effective config that will be used looks like this:
 * <pre>
 * <code>
 * {
 *     xmlTarget : {
 *         // coming from the defaults
 *         viewType : "XML"
 *         ...
 *     },
 *     jsTarget : {
 *        // XML is overwritten by the "JS" of the targets property
 *        viewType : "JS"
 *       ...
 *     }
 * }
 * </code>
 * </pre>
 * 
 * @param {string} [oOptions.config.rootView]
 * The id of the rootView - This should be the id of the view that contains the control with the controlId
 * since the control will be retrieved by calling the {@link sap.ui.core.mvc.View#byId} function of the rootView.
 * If you are using a component and add the routing.targets <b>do not set this parameter</b>,
 * since the component will set the rootView to the view created by the {@link sap.ui.core.UIComponent#createContent} function.
 * If you specify the "parent" property of a target, the control will not be searched in the root view but in the view Created by the parent (see parent documentation).
 * @param {boolean} [oOptions.config.async=false] Whether the views which are created through this Targets are loaded asyncly. This option can be set only when the Targets
 * is used standalone without the involvement of a Router. Otherwise the async option is inherited from the Router.
 * @param {object} oOptions.targets One or multiple targets in a map.
 * @param {object} oOptions.targets.anyName a new target, the key severs as a name. An example:
 * <pre>
 * <code>
 * {
 *     targets: {
 *         welcome: {
 *             viewName: "Welcome",
 *             viewType: "XML",
 *             ....
 *             // Other target parameters
 *         },
 *         goodbye: {
 *             viewName: "Bye",
 *             viewType: "JS",
 *             ....
 *             // Other target parameters
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * 
 * This will create two targets named 'welcome' and 'goodbye' you can display both of them or one of them using the {@link #display} function.
 * 
 * @param {string} oOptions.targets.anyName.viewName The name of a view that will be created.
 * To place the view into a Control use the controlAggregation and controlId. Views will only be created once per viewName.
 * <pre>
 * <code>
 * {
 *     targets: {
 *         // If display("masterWelcome") is called, the master view will be placed in the 'MasterPages' of a control with the id splitContainter
 *         masterWelcome: {
 *             viewName: "Welcome",
 *             controlId: "splitContainer",
 *             controlAggregation: "masterPages"
 *         },
 *         // If display("detailWelcome") is called after the masterWelcome, the view will be removed from the master pages and added to the detail pages, since the same instance is used. Also the controls inside of the view will have the same state.
 *         detailWelcome: {
 *             // same view here, that's why the same instance is used
 *             viewName: "Welcome",
 *             controlId: "splitContainer",
 *             controlAggregation: "detailPages"
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * 
 * If you want to have a second instance of the welcome view you can use the following:
 * 
 * 
 * 
 * <pre>
 * <code>
 * // Some code you execute before you display the taget named 'detailWelcome':
 * var oView = sap.ui.view(({ viewName : "Welcome", type : sap.ui.core.mvc.ViewType.XML});
 * oTargets.getViews().setView("WelcomeWithAlias", oView)
 * 
 * {
 *     targets: {
 *         // If display("masterWelcome") is called, the master viewName will be placed in the 'MasterPages' of a control with the id splitContainter
 *         masterWelcome: {
 *             viewName: "Welcome",
 *             controlId: "splitContainer",
 *             controlAggregation: "masterPages"
 *         },
 *         // If display("detailWelcome") is called after the masterWelcome, a second instance with an own controller instance will be added in the detail pages.
 *         detailWelcome: {
 *             // same viewName here, that's why the same instance is used
 *             viewName: "WelcomeWithAlias",
 *             controlId: "splitContainer",
 *             controlAggregation: "detailPages"
 *         }
 *     }
 * }
 * </code>
 * </pre>
 * 
 * 
 * @param {string} [oOptions.targets.anyName.viewType]
 * The type of the view that is going to be created. These are the supported types: {@link sap.ui.core.mvc.ViewType}.
 * You always have to provide a viewType except if you are using {@link sap.ui.core.routing.Views#setView}.
 * @param {string} [oOptions.targets.anyName.viewPath]
 * A prefix that will be prepended in front of the viewName.<br/>
 * <b>Example:</b> viewName is set to "myView" and viewPath is set to "myApp" - the created viewName will be "myApp.myView".
 * @param {string} [oOptions.targets.anyName.viewId] The id of the created view.
 * This is will be prefixed with the id of the component set to the views instance provided in oOptions.views. For details see {@link sap.ui.core.routing.Views#getView}.
 * @param {string} [oOptions.targets.anyName.targetParent]
 * The id of the parent of the controlId - This should be the id of the view that contains your controlId,
 * since the target control will be retrieved by calling the {@link sap.ui.core.mvc.View#byId} function of the targetParent. By default,
 * this will be the view created by a component, so you do not have to provide this parameter.
 * If you are using children, the view created by the parent of the child is taken.
 * You only need to specify this, if you are not using a Targets instance created by a component
 * and you should give the id of root view of your application to this property.
 * @param {string} [oOptions.targets.anyName.controlId] The id of the control where you want to place the view created by this target.
 * The view of the target will be put into this container Control, using the controlAggregation property. You have to specify both properties or the target will not be able to place itself.
 * An example for containers are {@link sap.ui.ux3.Shell} with the aggregation 'content' or a {@link sap.m.NavContainer} with the aggregation 'pages'.
 * 
 * @param {string} [oOptions.targets.anyName.controlAggregation] The name of an aggregation of the controlId, that contains views.
 * Eg: a {@link sap.m.NavContainer} has an aggregation 'pages', another Example is the {@link sap.ui.ux3.Shell} it has 'content'.
 * @param {boolean} [oOptions.targets.anyName.clearControlAggregation] Defines a boolean that can be passed to specify if the aggregation should be cleared
 * - all items will be removed - before adding the View to it.
 * When using a {@link sap.ui.ux3.Shell} this should be true. For a {@link sap.m.NavContainer} it should be false. When you use the {@link sap.f.routing.Router} the default will be false.
 * @param {string} [oOptions.targets.anyName.parent] A reference to another target, using the name of the target.
 * If you display a target that has a parent, the parent will also be displayed.
 * Also the control you specify with the controlId parameter, will be searched inside of the view of the parent not in the rootView, provided in the config.
 * The control will be searched using the byId function of a view. When it is not found, the global id is checked.
 * <br/>
 * The main usecase for the parent property is placing a view inside a smaller container of a view, which is also created by targets.
 * This is useful for lazy loading views, only if the user really navigates to this part of your application.
 * <br/>
 * <b>Example:</b>
 * Our aim is to lazy load a tab of an IconTabBar (a control that displays a view initially and when a user clicks on it the view changes).
 * It's a perfect candidate to lazy load something inside of it.
 * <br/>
 * <b>Example app structure:</b><br/>
 * We have a rootView that is returned by the createContent function of our UIComponent. This view contains an sap.m.App control with the id 'myApp'
 * <pre>
 * <code>
 * &lt;View xmlns="sap.m"&gt;
 *     &lt;App id="myApp"/&gt;
 * &lt;/View&gt;
 * </code>
 * </pre>
 * an xml view called 'Detail'
 * <pre>
 * <code>
 * &lt;View xmlns="sap.m"&gt;
 *     &lt;IconTabBar&gt;
 *         &lt;items&gt;
 *             &lt;IconTabFilter&gt;
 *                 &lt;!-- content of our first tab --&gt;
 *             &lt;IconTabFilter&gt;
 *             &lt;IconTabFilter id="mySecondTab"&gt;
 *                 &lt;!-- nothing here, since we will lazy load this one with a target --&gt;
 *             &lt;IconTabFilter&gt;
 *         &lt;/items&gt;
 *     &lt;/IconTabBar&gt;
 * &lt;/View&gt;
 * </code>
 * </pre>
 * and a view called 'SecondTabContent', this one contains our content we want to have lazy loaded.
 * Now we need to create our Targets instance with a config matching our app:
 * <pre>
 * <code>
 *     new Targets({
 *         //Creates our views except for root, we created this one before - when using a component you
 *         views: new Views(),
 *         config: {
 *             // all of our views have that type
 *             viewType: 'XML',
 *             // a reference to the app control in the rootView created by our UIComponent
 *             controlId: 'myApp',
 *             // An app has a pages aggregation where the views need to be put into
 *             controlAggregation: 'pages'
 *         },
 *         targets: {
 *             detail: {
 *                 viewName: 'Detail'
 *             },
 *             secondTabContent: {
 *                 // A reference to the detail target defined above
 *                 parent: 'detail',
 *                 // A reference to the second Tab container in the Detail view. Here the target does not look in the rootView, it looks in the Parent view (Detail).
 *                 controlId: 'mySecondTab',
 *                 // An IconTabFilter has an aggregation called content so we need to overwrite the pages set in the config as default.
 *                 controlAggregation: 'content',
 *                 // A view containing the content
 *                 viewName: 'SecondTabContent'
 *             }
 *         }
 *     });
 * </code>
 * </pre>
 * 
 * Now if we call <code> oTargets.display("secondTabContent") </code>, 2 views will be created: Detail and SecondTabContent.
 * The 'Detail' view will be put into the pages aggregation of the App. And afterwards the 'SecondTabContent' view will be put into the content Aggregation of the second IconTabFilter.
 * So a parent will always be created before the target referencing it.
 * 
 * 
 * @param {int} [oOptions.targets.anyName.viewLevel]
 * If you are having an application that has a logical order of views (eg: a create account process, first provide user data, then review and confirm them).
 * You always want to always show a backwards transition if a navigation from the confirm to the userData page takes place.
 * Therefore you may use the viewLevel. The viewLevel has to be an integer. The user data page should have a lower number than the confirm page.
 * These levels should represent the user process of your application and they do not have to match the container structure of your Targets.
 * If the user navigates between views with the same viewLevel, a forward transition is taken. If you pass a direction into the display function, the viewLevel will be ignored.<br/>
 * <b>Example:</b></br>
 * <pre>
 * <code>
 *     {
 *         targets: {
 *             startPage: {
 *                 viewLevel: 0
 *                 // more properties
 *             },
 *             userData: {
 *                 viewLevel: 1
 *                 // more properties
 *             },
 *             confirmRegistration: {
 *                 viewLevel: 2
 *                 // more properties
 *             },
 *             settings: {
 *                 //no view level here
 *             }
 *         }
 *     }
 * </code>
 * </pre>
 * 
 * Currently the 'userData' target is displayed.
 * <ul>
 *     <li>
 *         If we navigate to 'startPage' the navContainer will show a backwards navigation, since the viewLevel is lower.
 *     </li>
 *     <li>
 *         If we navigate to 'userData' the navContainer will show a forwards navigation, since the viewLevel is higher.
 *     </li>
 *     <li>
 *         If we navigate to 'settings' the navContainer will show a forwards navigation, since the viewLevel is not defined and cannot be compared.
 *     </li>
 * </ul>
 * 
 * @param {string} [oOptions.targets.anyName.transition] define which transition of the {@link sap.m.NavContainer} will be applied when navigating. If it is not defined, the nav container will take its default transition.
 * @param {string} [oOptions.targets.anyName.transitionParameters] define the transitionParameters of the {@link sap.m.NavContainer}
 * 
 * @since 1.46
 * @public
 * 
 */
sap.f.routing.Targets = function(oOptions) {};
/**
 * Creates a new subclass of class sap.f.routing.Targets with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.routing.Targets.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.routing.Targets.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.routing.Targets.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.routing.Targets.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the TargetHandler instance.
 * 
 * @return {sap.f.routing.TargetHandler} the TargetHandler instance
 * @public
 * 
 */
sap.f.routing.Targets.prototype.getTargetHandler = function() { return new sap.f.routing.TargetHandler(); };


// ---- sap.f.semantic.AddAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>AddAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>addAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.AddAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.AddAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.AddAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.AddAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.AddAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.CloseAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>CloseAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>closeAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.CloseAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.CloseAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.CloseAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.CloseAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.CloseAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.CopyAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>CopyAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>copyAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.CopyAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.CopyAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.CopyAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.CopyAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.CopyAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.DeleteAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DeleteAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>deleteAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.DeleteAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.DeleteAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.DeleteAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.DeleteAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.DeleteAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.DiscussInJamAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>DiscussInJamAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>discussInJamAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.DiscussInJamAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.DiscussInJamAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.DiscussInJamAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.DiscussInJamAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.DiscussInJamAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.ExitFullScreenAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ExitFullScreenAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>exitFullScreenAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.ExitFullScreenAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.ExitFullScreenAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.ExitFullScreenAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.ExitFullScreenAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.ExitFullScreenAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FavoriteAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FavoriteAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>favoriteAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FavoriteAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FavoriteAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FavoriteAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FavoriteAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FavoriteAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FlagAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FlagAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>flagAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FlagAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FlagAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FlagAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FlagAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FlagAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FooterMainAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FooterMainAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>footerMainAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FooterMainAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FooterMainAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FooterMainAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FooterMainAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FooterMainAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.FullScreenAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>FullScreenAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>fullScreenAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.FullScreenAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.FullScreenAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.FullScreenAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.FullScreenAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.FullScreenAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.MainAction --------------------------------------------------------------------------

/**
 * Constructor for a new MainAction.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link <code>sap.f.semantic.SemanticButton</code>#constructor <code>sap.f.semantic.SemanticButton</code>}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * Serves as a base class for the {@link sap.f.semantic.TitleMainAction} and {@link sap.f.semantic.FooterMainAction} controls.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.MainAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.MainAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.MainAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.MainAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.MainAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Defines <code>MainAction</code> text
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.f.semantic.MainAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Defines <code>MainAction</code> text
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.f.semantic.MainAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.MainAction.prototype.setText = function(sText) { return new sap.f.semantic.MainAction(); };


// ---- sap.f.semantic.MessagesIndicator --------------------------------------------------------------------------

/**
 * Constructor for a new <code>MessagesIndicator</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>messagesIndicator</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.MessagesIndicator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.MessagesIndicator with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.MessagesIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.MessagesIndicator.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.MessagesIndicator.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.NegativeAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>NegativeAction</code>.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link <code>sap.f.semantic.SemanticButton</code>#constructor <code>sap.f.semantic.SemanticButton</code>}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>negativeAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.NegativeAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.NegativeAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.NegativeAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.NegativeAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.NegativeAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Defines <code>NegativeAction</code> text.
 * <b>Note:</b> the default text is "Reject"
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.f.semantic.NegativeAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Defines <code>NegativeAction</code> text.
 * <b>Note:</b> the default text is "Reject"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.f.semantic.NegativeAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.NegativeAction.prototype.setText = function(sText) { return new sap.f.semantic.NegativeAction(); };


// ---- sap.f.semantic.PositiveAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>PositiveAction</code>.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link <code>sap.f.semantic.SemanticButton</code>#constructor <code>sap.f.semantic.SemanticButton</code>}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>positiveAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its footer.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.PositiveAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.PositiveAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.PositiveAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.PositiveAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.PositiveAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Defines <code>PositiveAction</code> text.
 * <b>Note:</b> the default text is "Accept"
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.f.semantic.PositiveAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Defines <code>PositiveAction</code> text.
 * <b>Note:</b> the default text is "Accept"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.f.semantic.PositiveAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.PositiveAction.prototype.setText = function(sText) { return new sap.f.semantic.PositiveAction(); };


// ---- sap.f.semantic.PrintAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>PrintAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>printAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.PrintAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.PrintAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.PrintAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.PrintAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.PrintAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.SemanticButton --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticButton</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link <code>sap.f.semantic.SemanticControl</code>#constructor <code>sap.f.semantic.SemanticControl</code>}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A base class for the available semantic actions, such as {@link sap.f.semantic.AddAction AddAction},
 * {@link sap.f.semantic.CloseAction CloseAction}, etc.
 * 
 * @extends <code>sap.f.semantic.SemanticControl</code>
 * @abstract
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticButton = function(sId,mSettings) {};
/**
 * Fired when the user selects the <code>SemanticButton</code>.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.semantic.SemanticButton</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.f.semantic.SemanticButton</code> itself.
 * 
 * Fired when the user selects the <code>SemanticButton</code>.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.f.semantic.SemanticButton</code> itself
 * 
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.f.semantic.SemanticButton(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.semantic.SemanticButton</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.detachPress = function(fnFunction,oListener) { return new sap.f.semantic.SemanticButton(); };

/**
 * Creates a new subclass of class sap.f.semantic.SemanticButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticControl</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.f.semantic.SemanticButton.prototype.firePress = function(mParameters) { return new sap.f.semantic.SemanticButton(); };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * Determines whether the <code>SemanticButton</code> is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getEnabled enabled}.
 * 
 * Determines whether the <code>SemanticButton</code> is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.f.semantic.SemanticButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticButton.prototype.setEnabled = function(bEnabled) { return new sap.f.semantic.SemanticButton(); };


// ---- sap.f.semantic.SemanticControl --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticControl</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The base class for the {@link sap.f.semantic.SemanticButton}.
 * 
 * @extends sap.ui.core.Element
 * @abstract
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticControl = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SemanticControl with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticControl.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticControl.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticControl.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Determines whether the <code>SemanticControl</code> is visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticControl.prototype.getVisible = function() { return false; };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Determines whether the <code>SemanticControl</code> is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.f.semantic.SemanticControl} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticControl.prototype.setVisible = function(bVisible) { return new sap.f.semantic.SemanticControl(); };


// ---- sap.f.semantic.SemanticPage --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticPage</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeaderExpanded headerExpanded} : boolean (default: true)</li>
 * <li>{@link #getHeaderPinnable headerPinnable} : boolean (default: true)</li>
 * <li>{@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll} : boolean (default: false)</li>
 * <li>{@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick} : boolean (default: true)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitleHeading titleHeading} : sap.ui.core.Control</li>
 * <li>{@link #getTitleSnappedContent titleSnappedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitleExpandedContent titleExpandedContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getTitleMainAction titleMainAction} : sap.f.semantic.TitleMainAction</li>
 * <li>{@link #getAddAction addAction} : sap.f.semantic.AddAction</li>
 * <li>{@link #getDeleteAction deleteAction} : sap.f.semantic.DeleteAction</li>
 * <li>{@link #getCopyAction copyAction} : sap.f.semantic.CopyAction</li>
 * <li>{@link #getFlagAction flagAction} : sap.f.semantic.FlagAction</li>
 * <li>{@link #getFavoriteAction favoriteAction} : sap.f.semantic.FavoriteAction</li>
 * <li>{@link #getFullScreenAction fullScreenAction} : sap.f.semantic.FullScreenAction</li>
 * <li>{@link #getExitFullScreenAction exitFullScreenAction} : sap.f.semantic.ExitFullScreenAction</li>
 * <li>{@link #getCloseAction closeAction} : sap.f.semantic.CloseAction</li>
 * <li>{@link #getTitleCustomTextActions titleCustomTextActions} : sap.m.Button[]</li>
 * <li>{@link #getTitleCustomIconActions titleCustomIconActions} : sap.m.OverflowToolbarButton[]</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control (default)</li>
 * <li>{@link #getFooterMainAction footerMainAction} : sap.f.semantic.FooterMainAction</li>
 * <li>{@link #getMessagesIndicator messagesIndicator} : sap.f.semantic.MessagesIndicator</li>
 * <li>{@link #getDraftIndicator draftIndicator} : sap.m.DraftIndicator</li>
 * <li>{@link #getPositiveAction positiveAction} : sap.f.semantic.PositiveAction</li>
 * <li>{@link #getNegativeAction negativeAction} : sap.f.semantic.NegativeAction</li>
 * <li>{@link #getFooterCustomActions footerCustomActions} : sap.m.Button[]</li>
 * <li>{@link #getDiscussInJamAction discussInJamAction} : sap.f.semantic.DiscussInJamAction</li>
 * <li>{@link #getSaveAsTileAction saveAsTileAction} : sap.m.Button</li>
 * <li>{@link #getShareInJamAction shareInJamAction} : sap.f.semantic.ShareInJamAction</li>
 * <li>{@link #getSendMessageAction sendMessageAction} : sap.f.semantic.SendMessageAction</li>
 * <li>{@link #getSendEmailAction sendEmailAction} : sap.f.semantic.SendEmailAction</li>
 * <li>{@link #getPrintAction printAction} : sap.f.semantic.PrintAction</li>
 * <li>{@link #getCustomShareActions customShareActions} : sap.m.Button[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * An enhanced {@link sap.f.DynamicPage}, that contains controls with semantic-specific meaning.
 * 
 * <h3>Overview</h3>
 * 
 * Content specified in the <code>sap.f.semantic.SemanticPage</code> aggregations is automatically
 * positioned in dedicated sections of the title or the footer of the page, depending on
 * the control's semantics.
 * 
 * The actions in the <code>SemanticPage</code> title are grouped to text actions or icon actions.
 * When an aggregation is set, the actions appear in the following predefined order (from left to right):
 * 
 * <ul>Text actions:
 * <li>The main semantic text action - <code>titleMainAction</code></li>
 * <li>Any custom text actions - <code>titleCustomTextActions</code></li>
 * <li>The semantic text actions - <code>addAction</code>, <code>deleteAction</code>, and <code>copyAction</code></li></ul>
 * 
 * <ul>Icon actions:
 * <li>Any custom icon actions - <code>titleCustomIconActions</code></li>
 * <li>The simple semantic icon actions - <code>favoriteAction</code> and <code>flagAction</code></li>
 * <li>The share menu semantic icon actions as a drop-down list with the following order:
 * 	<ul><li><code>sendEmailAction</code></li>
 * 	<li><code>discussInJamAction</code></li>
 * 	<li><code>shareInJamAction</code></li>
 * 	<li><code>sendMessageAction</code></li>
 * 	<li><code>printAction</code></li>
 * 	<li>Any <code>customShareActions</code></li></ul></li>
 * <li>The navigation semantic actions - <code>fullScreenAction</code>, <code>exitFullScreenAction</code>,
 * and <code>closeAction</li></code></ul>
 * 
 * The actions in the <code>SemanticPage</code> footer are positioned either on its left or right area and have the following predefined order:
 * 
 * <ul>Footer left area:
 * <li>The semantic text action - <code>messagesIndicator</code></li>
 * <li>The semantic label - <code>draftIndicator</code></li></ul>
 * 
 * <ul>Footer right area:
 * <li>The main semantic text action - <code>footerMainAction</code></li>
 * <li>The semantic text actions - <code>positiveAction</code> and <code>negativeAction</code></li>
 * <li>Any custom text actions - <code>footerCustomActions</code></li></ul>
 * 
 * <h3>Usage</h3>
 * 
 * Using the <code>SemanticPage</code> facilitates the implementation of the SAP Fiori 2.0 design guidelines.
 * 
 * <h3>Responsive behavior</h3>
 * 
 * The responsive behavior of the <code>SemanticPage</code> depends on the behavior of the content that is displayed.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticPage = function(sId,mSettings) {};
/**
 * Adds some customShareAction to the aggregation {@link #getCustomShareActions customShareActions}.
 * @param {sap.m.Button}
 *            oCustomShareAction the customShareAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addCustomShareAction = function(oCustomShareAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some footerCustomAction to the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * @param {sap.m.Button}
 *            oFooterCustomAction the footerCustomAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addFooterCustomAction = function(oFooterCustomAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addHeaderContent = function(oHeaderContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleCustomIconAction to the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * @param {sap.m.OverflowToolbarButton}
 *            oTitleCustomIconAction the titleCustomIconAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleCustomIconAction = function(oTitleCustomIconAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleCustomTextAction to the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * @param {sap.m.Button}
 *            oTitleCustomTextAction the titleCustomTextAction to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleCustomTextAction = function(oTitleCustomTextAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleExpandedContent to the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * @param {sap.ui.core.Control}
 *            oTitleExpandedContent the titleExpandedContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleExpandedContent = function(oTitleExpandedContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Adds some titleSnappedContent to the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * @param {sap.ui.core.Control}
 *            oTitleSnappedContent the titleSnappedContent to add; if empty, nothing is inserted
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.addTitleSnappedContent = function(oTitleSnappedContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the addAction in the aggregation {@link #getAddAction addAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyAddAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the closeAction in the aggregation {@link #getCloseAction closeAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyCloseAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the copyAction in the aggregation {@link #getCopyAction copyAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyCopyAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the customShareActions in the aggregation {@link #getCustomShareActions customShareActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyCustomShareActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the deleteAction in the aggregation {@link #getDeleteAction deleteAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyDeleteAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the discussInJamAction in the aggregation {@link #getDiscussInJamAction discussInJamAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyDiscussInJamAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the draftIndicator in the aggregation {@link #getDraftIndicator draftIndicator}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyDraftIndicator = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the exitFullScreenAction in the aggregation {@link #getExitFullScreenAction exitFullScreenAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyExitFullScreenAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the favoriteAction in the aggregation {@link #getFavoriteAction favoriteAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFavoriteAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the flagAction in the aggregation {@link #getFlagAction flagAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFlagAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the footerCustomActions in the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFooterCustomActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the footerMainAction in the aggregation {@link #getFooterMainAction footerMainAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFooterMainAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the fullScreenAction in the aggregation {@link #getFullScreenAction fullScreenAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyFullScreenAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyHeaderContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the messagesIndicator in the aggregation {@link #getMessagesIndicator messagesIndicator}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyMessagesIndicator = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the negativeAction in the aggregation {@link #getNegativeAction negativeAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyNegativeAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the positiveAction in the aggregation {@link #getPositiveAction positiveAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyPositiveAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the printAction in the aggregation {@link #getPrintAction printAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyPrintAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the saveAsTileAction in the aggregation {@link #getSaveAsTileAction saveAsTileAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroySaveAsTileAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the sendEmailAction in the aggregation {@link #getSendEmailAction sendEmailAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroySendEmailAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the sendMessageAction in the aggregation {@link #getSendMessageAction sendMessageAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroySendMessageAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the shareInJamAction in the aggregation {@link #getShareInJamAction shareInJamAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyShareInJamAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleCustomIconActions in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleCustomIconActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleCustomTextActions in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleCustomTextActions = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleExpandedContent in the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleExpandedContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleHeading in the aggregation {@link #getTitleHeading titleHeading}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleHeading = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys the titleMainAction in the aggregation {@link #getTitleMainAction titleMainAction}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleMainAction = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Destroys all the titleSnappedContent in the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.destroyTitleSnappedContent = function() { return new sap.f.semantic.SemanticPage(); };

/**
 * Creates a new subclass of class sap.f.semantic.SemanticPage with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticPage.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getAddAction addAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.AddAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getAddAction = function() { return new sap.f.semantic.AddAction(); };

/**
 * Gets content of aggregation {@link #getCloseAction closeAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.CloseAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getCloseAction = function() { return new sap.f.semantic.CloseAction(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The <code>SemanticPage</code> content.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getCopyAction copyAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.CopyAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getCopyAction = function() { return new sap.f.semantic.CopyAction(); };

/**
 * Gets content of aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * The <code>customShareActions</code> are placed in the <code>ShareMenu</code> area of the
 * <code>SemanticPage</code> title, right after the the semantic actions.
 * 
 * @returns {sap.m.Button[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getCustomShareActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getDeleteAction deleteAction}.
 * 
 * A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.DeleteAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getDeleteAction = function() { return new sap.f.semantic.DeleteAction(); };

/**
 * Gets content of aggregation {@link #getDiscussInJamAction discussInJamAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.DiscussInJamAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getDiscussInJamAction = function() { return new sap.f.semantic.DiscussInJamAction(); };

/**
 * Gets content of aggregation {@link #getDraftIndicator draftIndicator}.
 * 
 * A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code>
 * footer as a second action.
 * 
 * @returns {sap.m.DraftIndicator}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getDraftIndicator = function() { return new sap.m.DraftIndicator(); };

/**
 * Gets content of aggregation {@link #getExitFullScreenAction exitFullScreenAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.ExitFullScreenAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getExitFullScreenAction = function() { return new sap.f.semantic.ExitFullScreenAction(); };

/**
 * Gets content of aggregation {@link #getFavoriteAction favoriteAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.FavoriteAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFavoriteAction = function() { return new sap.f.semantic.FavoriteAction(); };

/**
 * Gets content of aggregation {@link #getFlagAction flagAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.FlagAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFlagAction = function() { return new sap.f.semantic.FlagAction(); };

/**
 * Gets content of aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * The <code>footerCustomActions</code> are placed in the <code>FooterRight</code> area of the
 * <code>SemanticPage</code> footer, right after the semantic footer actions.
 * 
 * @returns {sap.m.Button[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFooterCustomActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFooterMainAction footerMainAction}.
 * 
 * A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code>
 * footer with default text value set to <code>Save</code>.
 * 
 * @returns {sap.f.semantic.FooterMainAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFooterMainAction = function() { return new sap.f.semantic.FooterMainAction(); };

/**
 * Gets content of aggregation {@link #getFullScreenAction fullScreenAction}.
 * 
 * A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.FullScreenAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getFullScreenAction = function() { return new sap.f.semantic.FullScreenAction(); };

/**
 * Gets content of aggregation {@link #getHeaderContent headerContent}.
 * 
 * The header content.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getHeaderContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> Please be aware, that initially collapsed header state is not supported,
 * so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerExpanded</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getHeaderExpanded = function() { return false; };

/**
 * Gets current value of property {@link #getHeaderPinnable headerPinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>headerPinnable</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getHeaderPinnable = function() { return false; };

/**
 * Gets content of aggregation {@link #getMessagesIndicator messagesIndicator}.
 * 
 * A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code>
 * footer as a first action.
 * 
 * @returns {sap.f.semantic.MessagesIndicator}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getMessagesIndicator = function() { return new sap.f.semantic.MessagesIndicator(); };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticPage.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticPage.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNegativeAction negativeAction}.
 * 
 * A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code>
 * footer with default text value set to <code>Reject</code>.
 * 
 * @returns {sap.f.semantic.NegativeAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getNegativeAction = function() { return new sap.f.semantic.NegativeAction(); };

/**
 * Gets content of aggregation {@link #getPositiveAction positiveAction}.
 * 
 * A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code>
 * footer with default text value set to <code>Accept</code>.
 * 
 * @returns {sap.f.semantic.PositiveAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getPositiveAction = function() { return new sap.f.semantic.PositiveAction(); };

/**
 * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * 
 * For example, if the user expands the header by clicking on the title
 * and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the title and the header
 * are with height larger than a given threshold.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>preserveHeaderStateOnScroll</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getPreserveHeaderStateOnScroll = function() { return false; };

/**
 * Gets content of aggregation {@link #getPrintAction printAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.PrintAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getPrintAction = function() { return new sap.f.semantic.PrintAction(); };

/**
 * Gets content of aggregation {@link #getSaveAsTileAction saveAsTileAction}.
 * 
 * A button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.m.Button}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getSaveAsTileAction = function() { return new sap.m.Button(); };

/**
 * Gets content of aggregation {@link #getSendEmailAction sendEmailAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.SendEmailAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getSendEmailAction = function() { return new sap.f.semantic.SendEmailAction(); };

/**
 * Gets content of aggregation {@link #getSendMessageAction sendMessageAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.SendMessageAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getSendMessageAction = function() { return new sap.f.semantic.SendMessageAction(); };

/**
 * Gets content of aggregation {@link #getShareInJamAction shareInJamAction}.
 * 
 * A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.
 * 
 * @returns {sap.f.semantic.ShareInJamAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getShareInJamAction = function() { return new sap.f.semantic.ShareInJamAction(); };

/**
 * Gets current value of property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFooter</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getShowFooter = function() { return false; };

/**
 * Gets content of aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * The <code>titleCustomIconActions</code> are placed in the <code>IconActions</code> area of the
 * <code>SemanticPage</code> title, right before the semantic icon action.
 * 
 * @returns {sap.m.OverflowToolbarButton[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleCustomIconActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * The <code>titleCustomTextActions</code> are placed in the <code>TextActions</code> area of the
 * <code>SemanticPage</code> title, right before the semantic text action.
 * 
 * @returns {sap.m.Button[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleCustomTextActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * The content,displayed in the title, when the header is in expanded state.
 * 
 * <b>Note:</b> The controls will be placed in the title`s middle area.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleExpandedContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getTitleHeading titleHeading}.
 * 
 * The <code>SemanticPage</code> heading.
 * 
 * A typical usage is the <code>sap.m.Title</code> or any other UI5 control,
 * that serves as a heading for an object.
 * 
 * <b>Note:</b> The control will be placed in the title`s leftmost area.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleHeading = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getTitleMainAction titleMainAction}.
 * 
 * A semantic-specific button which is placed in the <code>SemanticPage</code> title as first action.
 * 
 * @returns {sap.f.semantic.TitleMainAction}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleMainAction = function() { return new sap.f.semantic.TitleMainAction(); };

/**
 * Gets content of aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * The content, displayed in the title, when the header is in collapsed state.
 * 
 * <b>Note:</b> The controls will be placed in the title`s middle area.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getTitleSnappedContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the the user can switch between the expanded/collapsed states of the
 * header by clicking on the title.
 * 
 * If set to <code>false</code>, the title is not clickable and the application
 * must provide other means for expanding/collapsing the header, if necessary.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toggleHeaderOnTitleClick</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.getToggleHeaderOnTitleClick = function() { return false; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getCustomShareActions customShareActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oCustomShareAction The customShareAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfCustomShareAction = function(oCustomShareAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oFooterCustomAction The footerCustomAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfFooterCustomAction = function(oFooterCustomAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getHeaderContent headerContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oHeaderContent The headerContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * Checks for the provided <code>sap.m.OverflowToolbarButton</code> in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.OverflowToolbarButton}
 *           oTitleCustomIconAction The titleCustomIconAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleCustomIconAction = function(oTitleCustomIconAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oTitleCustomTextAction The titleCustomTextAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleCustomTextAction = function(oTitleCustomTextAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oTitleExpandedContent The titleExpandedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleExpandedContent = function(oTitleExpandedContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oTitleSnappedContent The titleSnappedContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.indexOfTitleSnappedContent = function(oTitleSnappedContent) { return 0; };

/**
 * Inserts a customShareAction into the aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * @param {sap.m.Button}
 *            oCustomShareAction the customShareAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the customShareAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customShareAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customShareAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertCustomShareAction = function(oCustomShareAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a footerCustomAction into the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * @param {sap.m.Button}
 *            oFooterCustomAction the footerCustomAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the footerCustomAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the footerCustomAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the footerCustomAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertFooterCustomAction = function(oFooterCustomAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleCustomIconAction into the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * @param {sap.m.OverflowToolbarButton}
 *            oTitleCustomIconAction the titleCustomIconAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the titleCustomIconAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleCustomIconAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleCustomIconAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleCustomIconAction = function(oTitleCustomIconAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleCustomTextAction into the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * @param {sap.m.Button}
 *            oTitleCustomTextAction the titleCustomTextAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the titleCustomTextAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleCustomTextAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleCustomTextAction is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleCustomTextAction = function(oTitleCustomTextAction,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleExpandedContent into the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oTitleExpandedContent the titleExpandedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the titleExpandedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleExpandedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleExpandedContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleExpandedContent = function(oTitleExpandedContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Inserts a titleSnappedContent into the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oTitleSnappedContent the titleSnappedContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the titleSnappedContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the titleSnappedContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the titleSnappedContent is inserted at
 *              the last position
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.insertTitleSnappedContent = function(oTitleSnappedContent,iIndex) { return new sap.f.semantic.SemanticPage(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllCustomShareActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllFooterCustomActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.OverflowToolbarButton[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleCustomIconActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleCustomTextActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleExpandedContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeAllTitleSnappedContent = function() { return new Array(); };

/**
 * Removes a customShareAction from the aggregation {@link #getCustomShareActions customShareActions}.
 * 
 * @param {int | string | sap.m.Button} vCustomShareAction The customShareAction to remove or its index or id
 * @returns {sap.m.Button} The removed customShareAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeCustomShareAction = function(vCustomShareAction) { return new sap.m.Button(); };

/**
 * Removes a footerCustomAction from the aggregation {@link #getFooterCustomActions footerCustomActions}.
 * 
 * @param {int | string | sap.m.Button} vFooterCustomAction The footerCustomAction to remove or its index or id
 * @returns {sap.m.Button} The removed footerCustomAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeFooterCustomAction = function(vFooterCustomAction) { return new sap.m.Button(); };

/**
 * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vHeaderContent The headerContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed headerContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.core.Control(); };

/**
 * Removes a titleCustomIconAction from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.
 * 
 * @param {int | string | sap.m.OverflowToolbarButton} vTitleCustomIconAction The titleCustomIconAction to remove or its index or id
 * @returns {sap.m.OverflowToolbarButton} The removed titleCustomIconAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleCustomIconAction = function(vTitleCustomIconAction) { return new sap.m.OverflowToolbarButton(); };

/**
 * Removes a titleCustomTextAction from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.
 * 
 * @param {int | string | sap.m.Button} vTitleCustomTextAction The titleCustomTextAction to remove or its index or id
 * @returns {sap.m.Button} The removed titleCustomTextAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleCustomTextAction = function(vTitleCustomTextAction) { return new sap.m.Button(); };

/**
 * Removes a titleExpandedContent from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vTitleExpandedContent The titleExpandedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed titleExpandedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleExpandedContent = function(vTitleExpandedContent) { return new sap.ui.core.Control(); };

/**
 * Removes a titleSnappedContent from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vTitleSnappedContent The titleSnappedContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed titleSnappedContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.removeTitleSnappedContent = function(vTitleSnappedContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated {@link #getAddAction addAction}.
 * @param {sap.f.semantic.AddAction} oAddAction The addAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setAddAction = function(oAddAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getCloseAction closeAction}.
 * @param {sap.f.semantic.CloseAction} oCloseAction The closeAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setCloseAction = function(oCloseAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setContent = function(oContent) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getCopyAction copyAction}.
 * @param {sap.f.semantic.CopyAction} oCopyAction The copyAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setCopyAction = function(oCopyAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getDeleteAction deleteAction}.
 * @param {sap.f.semantic.DeleteAction} oDeleteAction The deleteAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setDeleteAction = function(oDeleteAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getDiscussInJamAction discussInJamAction}.
 * @param {sap.f.semantic.DiscussInJamAction} oDiscussInJamAction The discussInJamAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setDiscussInJamAction = function(oDiscussInJamAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getDraftIndicator draftIndicator}.
 * @param {sap.m.DraftIndicator} oDraftIndicator The draftIndicator to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setDraftIndicator = function(oDraftIndicator) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getExitFullScreenAction exitFullScreenAction}.
 * @param {sap.f.semantic.ExitFullScreenAction} oExitFullScreenAction The exitFullScreenAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setExitFullScreenAction = function(oExitFullScreenAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFavoriteAction favoriteAction}.
 * @param {sap.f.semantic.FavoriteAction} oFavoriteAction The favoriteAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFavoriteAction = function(oFavoriteAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFlagAction flagAction}.
 * @param {sap.f.semantic.FlagAction} oFlagAction The flagAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFlagAction = function(oFlagAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFooterMainAction footerMainAction}.
 * @param {sap.f.semantic.FooterMainAction} oFooterMainAction The footerMainAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFooterMainAction = function(oFooterMainAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getFullScreenAction fullScreenAction}.
 * @param {sap.f.semantic.FullScreenAction} oFullScreenAction The fullScreenAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setFullScreenAction = function(oFullScreenAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getHeaderExpanded headerExpanded}.
 * 
 * Determines whether the header is expanded.
 * 
 * The header can be also expanded/collapsed by user interaction,
 * which requires the property to be internally mutated by the control to reflect the changed state.
 * 
 * <b>Note:</b> Please be aware, that initially collapsed header state is not supported,
 * so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderExpanded New value for property <code>headerExpanded</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setHeaderExpanded = function(bHeaderExpanded) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getHeaderPinnable headerPinnable}.
 * 
 * Determines whether the header is pinnable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHeaderPinnable New value for property <code>headerPinnable</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setHeaderPinnable = function(bHeaderPinnable) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getMessagesIndicator messagesIndicator}.
 * @param {sap.f.semantic.MessagesIndicator} oMessagesIndicator The messagesIndicator to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setMessagesIndicator = function(oMessagesIndicator) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getNegativeAction negativeAction}.
 * @param {sap.f.semantic.NegativeAction} oNegativeAction The negativeAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setNegativeAction = function(oNegativeAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getPositiveAction positiveAction}.
 * @param {sap.f.semantic.PositiveAction} oPositiveAction The positiveAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setPositiveAction = function(oPositiveAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
 * 
 * Preserves the current header state when scrolling.
 * 
 * For example, if the user expands the header by clicking on the title
 * and then scrolls down the page, the header will remain expanded.
 * 
 * <b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example,
 * when the control is rendered on tablet or mobile and the title and the header
 * are with height larger than a given threshold.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPreserveHeaderStateOnScroll New value for property <code>preserveHeaderStateOnScroll</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setPreserveHeaderStateOnScroll = function(bPreserveHeaderStateOnScroll) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getPrintAction printAction}.
 * @param {sap.f.semantic.PrintAction} oPrintAction The printAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setPrintAction = function(oPrintAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getSaveAsTileAction saveAsTileAction}.
 * @param {sap.m.Button} oSaveAsTileAction The saveAsTileAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setSaveAsTileAction = function(oSaveAsTileAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getSendEmailAction sendEmailAction}.
 * @param {sap.f.semantic.SendEmailAction} oSendEmailAction The sendEmailAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setSendEmailAction = function(oSendEmailAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getSendMessageAction sendMessageAction}.
 * @param {sap.f.semantic.SendMessageAction} oSendMessageAction The sendMessageAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setSendMessageAction = function(oSendMessageAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getShareInJamAction shareInJamAction}.
 * @param {sap.f.semantic.ShareInJamAction} oShareInJamAction The shareInJamAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setShareInJamAction = function(oShareInJamAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getShowFooter showFooter}.
 * 
 * Determines whether the footer is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFooter New value for property <code>showFooter</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setShowFooter = function(bShowFooter) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleHeading titleHeading}.
 * @param {sap.ui.core.Control} oTitleHeading The titleHeading to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleHeading = function(oTitleHeading) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets the aggregated {@link #getTitleMainAction titleMainAction}.
 * @param {sap.f.semantic.TitleMainAction} oTitleMainAction The titleMainAction to set
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setTitleMainAction = function(oTitleMainAction) { return new sap.f.semantic.SemanticPage(); };

/**
 * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
 * 
 * Determines whether the the user can switch between the expanded/collapsed states of the
 * header by clicking on the title.
 * 
 * If set to <code>false</code>, the title is not clickable and the application
 * must provide other means for expanding/collapsing the header, if necessary.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToggleHeaderOnTitleClick New value for property <code>toggleHeaderOnTitleClick</code>
 * @returns {sap.f.semantic.SemanticPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticPage.prototype.setToggleHeaderOnTitleClick = function(bToggleHeaderOnTitleClick) { return new sap.f.semantic.SemanticPage(); };


// ---- sap.f.semantic.SemanticToggleButton --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SemanticToggleButton</code>.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPressed pressed} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link <code>sap.f.semantic.SemanticButton</code>#constructor <code>sap.f.semantic.SemanticButton</code>}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A base class for the {@link sap.f.semantic.FavoriteAction} and {@link sap.f.semantic.FlagAction}.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @abstract
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SemanticToggleButton = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SemanticToggleButton with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticToggleButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SemanticToggleButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SemanticToggleButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPressed pressed}.
 * 
 * Defines the <code>SemanticToggleButton</code> pressed state.
 * 
 * The property is set to <code>true</code> when the control is toggled (default is <code>false</code>).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>pressed</code>
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticToggleButton.prototype.getPressed = function() { return false; };

/**
 * Sets a new value for property {@link #getPressed pressed}.
 * 
 * Defines the <code>SemanticToggleButton</code> pressed state.
 * 
 * The property is set to <code>true</code> when the control is toggled (default is <code>false</code>).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPressed New value for property <code>pressed</code>
 * @returns {sap.f.semantic.SemanticToggleButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.f.semantic.SemanticToggleButton.prototype.setPressed = function(bPressed) { return new sap.f.semantic.SemanticToggleButton(); };


// ---- sap.f.semantic.SendEmailAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SendEmailAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>sendEmailAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SendEmailAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SendEmailAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SendEmailAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SendEmailAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SendEmailAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.SendMessageAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>SendMessageAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>sendMessageAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.SendMessageAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.SendMessageAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.SendMessageAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.SendMessageAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.SendMessageAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.ShareInJamAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>ShareInJamAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>shareInJamAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.ShareInJamAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.ShareInJamAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.ShareInJamAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.ShareInJamAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.ShareInJamAction.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.f.semantic.TitleMainAction --------------------------------------------------------------------------

/**
 * Constructor for a new <code>TitleMainAction</code>.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Custom initial settings for the new control
 * 
 * @class
 * A semantic-specific button, eligible for the <code>titleMainAction</code> aggregation of the
 * {@link sap.f.semantic.SemanticPage} to be placed in its title.
 * 
 * @extends <code>sap.f.semantic.SemanticButton</code>
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.46.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.f.semantic.TitleMainAction = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.f.semantic.TitleMainAction with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link <code>sap.f.semantic.SemanticButton</code>.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.f.semantic.TitleMainAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.f.semantic.TitleMainAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.f.semantic.TitleMainAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.f.AvatarImageFitType --------------------------------------------------------------------------

/**
 * The image is scaled to the largest size so that both its width and height can fit in the control area.
 * @public
 * 
 */
sap.f.AvatarImageFitType.Contain = "";

/**
 * The image is scaled to be large enough so that the control area is completely covered.
 * @public
 * 
 */
sap.f.AvatarImageFitType.Cover = "";


// ---- sap.f.AvatarShape --------------------------------------------------------------------------

/**
 * Circular shape.
 * @public
 * 
 */
sap.f.AvatarShape.Circle = "";

/**
 * Square shape.
 * @public
 * 
 */
sap.f.AvatarShape.Square = "";


// ---- sap.f.AvatarSize --------------------------------------------------------------------------

/**
 * Custom size
 * @public
 * 
 */
sap.f.AvatarSize.Custom = "";

/**
 * Control size - 5rem
 * Font size - 2rem
 * @public
 * 
 */
sap.f.AvatarSize.L = "";

/**
 * Control size - 4rem
 * Font size - 1.625rem
 * @public
 * 
 */
sap.f.AvatarSize.M = "";

/**
 * Control size - 3rem
 * Font size - 1.125rem
 * @public
 * 
 */
sap.f.AvatarSize.S = "";

/**
 * Control size - 7rem
 * Font size - 2.75rem
 * @public
 * 
 */
sap.f.AvatarSize.XL = "";

/**
 * Control size - 2rem
 * Font size - 0.75rem
 * @public
 * 
 */
sap.f.AvatarSize.XS = "";


// ---- sap.f.AvatarType --------------------------------------------------------------------------

/**
 * The displayed content is an icon.
 * @public
 * 
 */
sap.f.AvatarType.Icon = "";

/**
 * The displayed content is an image.
 * @public
 * 
 */
sap.f.AvatarType.Image = "";

/**
 * The displayed content is initials.
 * @public
 * 
 */
sap.f.AvatarType.Initials = "";


// ---- sap.f.LayoutType --------------------------------------------------------------------------

/**
 * Desktop: -/-/100  only the End column is displayed
 * Tablet:  -/-/100  only the End column is displayed
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display a detail-detail page only, when the user should focus entirely on it.
 * 
 * @public
 * 
 */
sap.f.LayoutType.EndColumnFullScreen = "";

/**
 * Desktop: -/100/-  only the Mid column is displayed
 * Tablet:  -/100/-  only the Mid column is displayed
 * Phone:   -/100/-  only the Mid column is displayed
 * 
 * Use to display a detail page only, when the user should focus entirely on it.
 * 
 * @public
 * 
 */
sap.f.LayoutType.MidColumnFullScreen = "";

/**
 * Desktop: 100/-/-  only the Begin column is displayed
 * Tablet:  100/-/-  only the Begin column is displayed
 * Phone:   100/-/-  only the Begin column is displayed
 * 
 * Use to start with a master page.
 * 
 * @public
 * 
 */
sap.f.LayoutType.OneColumn = "";

/**
 * Desktop: 67/33/0  Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows
 * Tablet:  67/33/0  Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display the master and detail pages when the user should focus on the master.
 * The detail-detail is still loaded and easily accessible with layout arrows.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsBeginExpandedEndHidden = "";

/**
 * Desktop: 25/25/50 Begin, Mid and End (expanded) columns are displayed
 * Tablet:  0/33/67  Mid and End (expanded) columns are displayed, Begin is accessible by layout arrows
 * Phone:   -/-/100  (only the End column is displayed)
 * 
 * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail-detail.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsEndExpanded = "";

/**
 * Desktop: 25/50/25 Begin, Mid (expanded) and End columns are displayed
 * Tablet:  0/67/33  Mid (expanded) and End columns are displayed, Begin is accessible by a layout arrow
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsMidExpanded = "";

/**
 * Desktop: 33/67/0  Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow
 * Tablet:  33/67/0  Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow
 * Phone:   -/-/100  only the End column is displayed
 * 
 * Use to display the master and detail pages when the user should focus on the detail.
 * The detail-detail is still loaded and easily accessible with a layout arrow.
 * 
 * @public
 * 
 */
sap.f.LayoutType.ThreeColumnsMidExpandedEndHidden = "";

/**
 * Desktop: 67/33/-  Begin (expanded) and Mid columns are displayed
 * Tablet:  67/33/-  Begin (expanded) and Mid columns are displayed
 * Phone:   -/100/-  only the Mid column is displayed
 * 
 * Use to display both a master and a detail page when the user should focus on the master page.
 * 
 * @public
 * 
 */
sap.f.LayoutType.TwoColumnsBeginExpanded = "";

/**
 * Desktop: 33/67/-  Begin and Mid (expanded) columns are displayed
 * Tablet:  33/67/-  Begin and Mid (expanded) columns are displayed
 * Phone:   -/100/-  only the Mid column is displayed
 * 
 * Use to display both a master and a detail page when the user should focus on the detail page.
 * 
 * @public
 * 
 */
sap.f.LayoutType.TwoColumnsMidExpanded = "";

