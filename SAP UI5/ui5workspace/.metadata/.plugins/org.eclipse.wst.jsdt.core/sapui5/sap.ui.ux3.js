
// ---- sap.ui.ux3 --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.toString = function() { return ""; };

// ---- sap.ui.ux3.ActionBar --------------------------------------------------------------------------

/**
 * Constructor for a new ActionBar.
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
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: Default)</li>
 * <li>{@link #getFlagState flagState} : boolean</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean</li>
 * <li>{@link #getUpdateState updateState} : boolean</li>
 * <li>{@link #getThingIconURI thingIconURI} : sap.ui.core.URI</li>
 * <li>{@link #getAlwaysShowMoreMenu alwaysShowMoreMenu} : boolean (default: true)</li>
 * <li>{@link #getShowUpdate showUpdate} : boolean (default: true)</li>
 * <li>{@link #getShowFollow showFollow} : boolean (default: true)</li>
 * <li>{@link #getShowFlag showFlag} : boolean (default: true)</li>
 * <li>{@link #getShowFavorite showFavorite} : boolean (default: true)</li>
 * <li>{@link #getShowOpen showOpen} : boolean (default: true)</li>
 * <li>{@link #getDividerWidth dividerWidth} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBusinessActions businessActions} : sap.ui.ux3.ThingAction[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A special toolbar with predefined social actions which can be shown as needed. These are: Create an update (Feed), Follow, Mark for Follow Up, Mark as Favorite and Open Thing.
 * 
 * In addition business actions (ThingAction instances) can be added which are either displayed as MenuItems of the 'More' menu button or as individual tool bar buttons.
 * 
 * When using this control, please be aware that it fulfills rather specific requirements: it has been designed for and is used within composite controls QuickView and ThingInspector.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.Toolbar</code> or <code>sap.m.OverflowToolbar</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ActionBar = function(sId,mSettings) {};
/**
 * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only)
 * ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default
 * ‘Mark for follow up’ button: id: flag, newState: true/false
 * ‘Favorite’ button: id: favorite, newState: true/false
 * ‘Open Thing Inspector’ button id: open
 * Business Actions: id: the ThingAction id
 * 
 * For ‘Update’, please refer to event ‘feedSubmit’
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @param {string} oControlEvent.getParameters.newState New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.actionSelected = function(oControlEvent) {  };

/**
 * Fired when a new feed entry is submitted.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.feedSubmit = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ActionBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ActionBar</code> itself.
 * 
 * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only)
 * ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default
 * ‘Mark for follow up’ button: id: flag, newState: true/false
 * ‘Favorite’ button: id: favorite, newState: true/false
 * ‘Open Thing Inspector’ button id: open
 * Business Actions: id: the ThingAction id
 * 
 * For ‘Update’, please refer to event ‘feedSubmit’
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ActionBar</code> itself
 * 
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.attachActionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ActionBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ActionBar</code> itself.
 * 
 * Fired when a new feed entry is submitted.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ActionBar</code> itself
 * 
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * Closes all popups which might be opened as ActionBar children
 * These are the more- and follow menu and the feeder popup
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ActionBar.prototype.closePopups = function() { return null; };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ActionBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.detachActionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ActionBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.ActionBar(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ActionBar with name <code>sClassName</code>
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
sap.ui.ux3.ActionBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} [mParameters.action] Selected ThingAction
 * @param {string} [mParameters.newState] New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * 
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ActionBar.prototype.fireActionSelected = function(mParameters) { return new sap.ui.ux3.ActionBar(); };

/**
 * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.text] Feed text
 * 
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ActionBar.prototype.fireFeedSubmit = function(mParameters) { return new sap.ui.ux3.ActionBar(); };

/**
 * Gets current value of property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
 * 
 * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>alwaysShowMoreMenu</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getAlwaysShowMoreMenu = function() { return false; };

/**
 * Gets content of aggregation {@link #getBusinessActions businessActions}.
 * 
 * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
 * 
 * @returns {sap.ui.ux3.ThingAction[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getBusinessActions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDividerWidth dividerWidth}.
 * 
 * The minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>dividerWidth</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getDividerWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getFavoriteState favoriteState}.
 * 
 * Indicates whether “Favorite” is active
 * 
 * @returns {boolean} Value of property <code>favoriteState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getFavoriteState = function() { return false; };

/**
 * Gets current value of property {@link #getFlagState flagState}.
 * 
 * Indicates whether “Mark for Follow Up” is active
 * 
 * @returns {boolean} Value of property <code>flagState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getFlagState = function() { return false; };

/**
 * Gets current value of property {@link #getFollowState followState}.
 * 
 * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of
 * - FollowActionState.Default
 * - FollowActionState.Follow
 * - FollowActionState.Hold
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.ux3.FollowActionState} Value of property <code>followState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getFollowState = function() { return new sap.ui.ux3.FollowActionState(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ActionBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ActionBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowFavorite showFavorite}.
 * 
 * Indicates whether social action “Favorite” is shown, default is ‘true’
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFavorite</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowFavorite = function() { return false; };

/**
 * Gets current value of property {@link #getShowFlag showFlag}.
 * 
 * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFlag</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowFlag = function() { return false; };

/**
 * Gets current value of property {@link #getShowFollow showFollow}.
 * 
 * Indicates whether social action “Follow” is shown, default is ‘true’
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFollow</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowFollow = function() { return false; };

/**
 * Gets current value of property {@link #getShowOpen showOpen}.
 * 
 * Indicates whether social action “Open” is shown, default is ‘true’
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showOpen</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowOpen = function() { return false; };

/**
 * Gets current value of property {@link #getShowUpdate showUpdate}.
 * 
 * Indicates whether social action “Update” is shown, default is ‘true’
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showUpdate</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getShowUpdate = function() { return false; };

/**
 * Gets current value of property {@link #getThingIconURI thingIconURI}.
 * 
 * The thing icon uri. Icon will be displayed in Feeder
 * 
 * @returns {sap.ui.core.URI} Value of property <code>thingIconURI</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getThingIconURI = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getUpdateState updateState}.
 * 
 * Indicates whether “Update” is active
 * 
 * @returns {boolean} Value of property <code>updateState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.getUpdateState = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation {@link #getBusinessActions businessActions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingAction}
 *           oBusinessAction The businessAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.indexOfBusinessAction = function(oBusinessAction) { return 0; };

/**
 * Checks whether the control is still valid (is in the DOM). ActionBar
 * instance is rendered if and only if 'isActive' returns 'true'. This
 * check is called implicitely by the rendere, MUST not be removed.
 * 
 * @return {boolean} True if the control is still in the active DOM
 * @protected
 * 
 */
sap.ui.ux3.ActionBar.prototype.isActive = function() { return false; };

/**
 * Sets a new value for property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
 * 
 * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAlwaysShowMoreMenu New value for property <code>alwaysShowMoreMenu</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setAlwaysShowMoreMenu = function(bAlwaysShowMoreMenu) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getDividerWidth dividerWidth}.
 * 
 * The minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sDividerWidth New value for property <code>dividerWidth</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setDividerWidth = function(sDividerWidth) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getFavoriteState favoriteState}.
 * 
 * Indicates whether “Favorite” is active
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bFavoriteState New value for property <code>favoriteState</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setFavoriteState = function(bFavoriteState) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getFlagState flagState}.
 * 
 * Indicates whether “Mark for Follow Up” is active
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bFlagState New value for property <code>flagState</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setFlagState = function(bFlagState) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getFollowState followState}.
 * 
 * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of
 * - FollowActionState.Default
 * - FollowActionState.Follow
 * - FollowActionState.Hold
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default</code>.
 * @param {sap.ui.ux3.FollowActionState} sFollowState New value for property <code>followState</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setFollowState = function(sFollowState) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getShowFavorite showFavorite}.
 * 
 * Indicates whether social action “Favorite” is shown, default is ‘true’
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFavorite New value for property <code>showFavorite</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setShowFavorite = function(bShowFavorite) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getShowFlag showFlag}.
 * 
 * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFlag New value for property <code>showFlag</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setShowFlag = function(bShowFlag) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getShowFollow showFollow}.
 * 
 * Indicates whether social action “Follow” is shown, default is ‘true’
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFollow New value for property <code>showFollow</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setShowFollow = function(bShowFollow) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getShowOpen showOpen}.
 * 
 * Indicates whether social action “Open” is shown, default is ‘true’
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowOpen New value for property <code>showOpen</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setShowOpen = function(bShowOpen) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getShowUpdate showUpdate}.
 * 
 * Indicates whether social action “Update” is shown, default is ‘true’
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowUpdate New value for property <code>showUpdate</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setShowUpdate = function(bShowUpdate) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getThingIconURI thingIconURI}.
 * 
 * The thing icon uri. Icon will be displayed in Feeder
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sThingIconURI New value for property <code>thingIconURI</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setThingIconURI = function(sThingIconURI) { return new sap.ui.ux3.ActionBar(); };

/**
 * Sets a new value for property {@link #getUpdateState updateState}.
 * 
 * Indicates whether “Update” is active
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bUpdateState New value for property <code>updateState</code>
 * @returns {sap.ui.ux3.ActionBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ActionBar.prototype.setUpdateState = function(bUpdateState) { return new sap.ui.ux3.ActionBar(); };


// ---- sap.ui.ux3.ActionBarSocialActions --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ActionBarSocialActions.toString = function() { return ""; };

// ---- sap.ui.ux3.Collection --------------------------------------------------------------------------

/**
 * Constructor for a new Collection.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getMultiSelection multiSelection} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItems selectedItems} : (sap.ui.core.ID | sap.ui.core.Item)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:propertyChanged propertyChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Collection
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.9.0
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Collection = function(sId,mSettings) {};
/**
 * Fires if a property has changed, and the collection inspector needs to do something after that
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.propertyChanged = function(oControlEvent) {  };

/**
 * Fired when ever the selected items changer
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.addItem = function(oItem) { return new sap.ui.ux3.Collection(); };

/**
 * 
 * @param {string | sap.ui.core.Item} vSelectedItem
 *    Id of a selectedItem which becomes an additional target of this <code>selectedItems</code> association.
 *    Alternatively, a selectedItem instance may be given.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.addSelectedItem = function(vSelectedItem) { return new sap.ui.ux3.Collection(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:propertyChanged propertyChanged} event of this <code>sap.ui.ux3.Collection</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Collection</code> itself.
 * 
 * Fires if a property has changed, and the collection inspector needs to do something after that
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code> itself
 * 
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.attachPropertyChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.Collection</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Collection</code> itself.
 * 
 * Fired when ever the selected items changer
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code> itself
 * 
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.destroyItems = function() { return new sap.ui.ux3.Collection(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:propertyChanged propertyChanged} event of this <code>sap.ui.ux3.Collection</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.detachPropertyChanged = function(fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.Collection</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.ux3.Collection(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Collection with name <code>sClassName</code>
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
sap.ui.ux3.Collection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:propertyChanged propertyChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Collection.prototype.firePropertyChanged = function(mParameters) { return new sap.ui.ux3.Collection(); };

/**
 * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Collection.prototype.fireSelectionChanged = function(mParameters) { return new sap.ui.ux3.Collection(); };

/**
 * Gets current value of property {@link #getEditable editable}.
 * 
 * If a collection is editable an edit button will be displayed below the list of items
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getEditable = function() { return false; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * Items in the collection
 * 
 * @returns {sap.ui.core.Item[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.Collection.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Collection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMultiSelection multiSelection}.
 * 
 * Allow multi selection of items in collection
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>multiSelection</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getMultiSelection = function() { return false; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getSelectedItems selectedItems}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getSelectedItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Name for the collection
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.core.Item}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.Collection(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Item[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeAllItems = function() { return new Array(); };

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeAllSelectedItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.core.Item} vItem The item to remove or its index or id
 * @returns {sap.ui.core.Item} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * @param {int | string | sap.ui.core.Item} vSelectedItem the selectedItem to remove or its index or id
 * @return {string} the id of the removed selectedItem or null
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.removeSelectedItem = function(vSelectedItem) { return ""; };

/**
 * Sets a new value for property {@link #getEditable editable}.
 * 
 * If a collection is editable an edit button will be displayed below the list of items
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.setEditable = function(bEditable) { return new sap.ui.ux3.Collection(); };

/**
 * Sets a new value for property {@link #getMultiSelection multiSelection}.
 * 
 * Allow multi selection of items in collection
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMultiSelection New value for property <code>multiSelection</code>
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.setMultiSelection = function(bMultiSelection) { return new sap.ui.ux3.Collection(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Name for the collection
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.Collection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Collection.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.Collection(); };


// ---- sap.ui.ux3.CollectionInspector --------------------------------------------------------------------------

/**
 * Constructor for a new CollectionInspector.
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
 * <li>{@link #getSidebarVisible sidebarVisible} : boolean (default: true)</li>
 * <li>{@link #getFitParent fitParent} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCollections collections} : sap.ui.ux3.Collection[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedCollection selectedCollection} : (sap.ui.core.ID | sap.ui.ux3.Collection)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:collectionSelected collectionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:itemSelectionChanged itemSelectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:editCollection editCollection} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * CollectionInspector
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.9.0
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.CollectionInspector = function(sId,mSettings) {};
/**
 * Event is fired if user selects a collection
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.collectionSelected = function(oControlEvent) {  };

/**
 * Fires when the edit button is clicked
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.editCollection = function(oControlEvent) {  };

/**
 * Fires when an item in a collection is selected
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.itemSelectionChanged = function(oControlEvent) {  };

/**
 * Adds some collection <code>oCollection</code>
 * to the aggregation named <code>collections</code>.
 * 
 * @param {sap.ui.ux3.Collection}
 *            oCollection the collection to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.addCollection = function(oCollection) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Adds some content <code>oContent</code>
 * to the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.addContent = function(oContent) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:collectionSelected collectionSelected} event of this <code>sap.ui.ux3.CollectionInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.CollectionInspector</code> itself.
 * 
 * Event is fired if user selects a collection
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code> itself
 * 
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.attachCollectionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:editCollection editCollection} event of this <code>sap.ui.ux3.CollectionInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.CollectionInspector</code> itself.
 * 
 * Fires when the edit button is clicked
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code> itself
 * 
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.attachEditCollection = function(oData,fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:itemSelectionChanged itemSelectionChanged} event of this <code>sap.ui.ux3.CollectionInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.CollectionInspector</code> itself.
 * 
 * Fires when an item in a collection is selected
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code> itself
 * 
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.attachItemSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Closes the siedebar
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.closeSidebar = function() {  };

/**
 * Destroys the collection aggregation
 * @return {sap.ui.ux3.CollectionInspector} this to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.destroyCollections = function() { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Destroys all the content in the aggregation
 * named <code>content</code>.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.destroyContent = function() { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:collectionSelected collectionSelected} event of this <code>sap.ui.ux3.CollectionInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.detachCollectionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:editCollection editCollection} event of this <code>sap.ui.ux3.CollectionInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.detachEditCollection = function(fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:itemSelectionChanged itemSelectionChanged} event of this <code>sap.ui.ux3.CollectionInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.detachItemSelectionChanged = function(fnFunction,oListener) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Creates a new subclass of class sap.ui.ux3.CollectionInspector with name <code>sClassName</code>
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
sap.ui.ux3.CollectionInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:collectionSelected collectionSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.fireCollectionSelected = function(mParameters) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Fires event {@link #event:editCollection editCollection} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.fireEditCollection = function(mParameters) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Fires event {@link #event:itemSelectionChanged itemSelectionChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.fireItemSelectionChanged = function(mParameters) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Gets content of aggregation {@link #getCollections collections}.
 * 
 * Collections which are displayed in the COllectionInspector
 * 
 * @returns {sap.ui.ux3.Collection[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getCollections = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * All controls that are currently displayed
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getContent = function() { return new Array(); };

/**
 * Return the edit button
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getEditButton = function() {  };

/**
 * Gets current value of property {@link #getFitParent fitParent}.
 * 
 * If set to true, control will fit parents content area
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>fitParent</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getFitParent = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.ux3.CollectionInspector.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.CollectionInspector.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * ID of the element which is the current target of the association {@link #getSelectedCollection selectedCollection}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getSelectedCollection = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getSidebarVisible sidebarVisible}.
 * 
 * Defines if the list of collection items is visible on the left
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>sidebarVisible</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.getSidebarVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.ux3.Collection</code> in the aggregation {@link #getCollections collections}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.Collection}
 *           oCollection The collection whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.indexOfCollection = function(oCollection) { return 0; };

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
sap.ui.ux3.CollectionInspector.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a collection into the aggregation named <code>collections</code>.
 * 
 * @param {sap.ui.ux3.Collection}
 *          oCollection the collection to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the collection should be inserted at; for
 *             a negative value of <code>iIndex</code>, the collection is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the collection is inserted at
 *             the last position
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.insertCollection = function(oCollection,iIndex) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the content is inserted at
 *             the last position
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Opens the sidebar
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.openSidebar = function() {  };

/**
 * Removes all the controls in the aggregation named <code>collections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.Collection[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeAllCollections = function() { return new Array(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a collection from the aggregation named <code>collections</code>.
 * 
 * @param {int | string | sap.ui.ux3.Collection} vCollection the collection to remove or its index or id
 * @return {sap.ui.ux3.Collection} the removed collection or null
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeCollection = function(vCollection) { return new sap.ui.ux3.Collection(); };

/**
 * Removes a content from the aggregation named <code>content</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getFitParent fitParent}.
 * 
 * If set to true, control will fit parents content area
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFitParent New value for property <code>fitParent</code>
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.setFitParent = function(bFitParent) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Sets the associated {@link #getSelectedCollection selectedCollection}.
 * @param {sap.ui.core.ID | sap.ui.ux3.Collection} oSelectedCollection ID of an element which becomes the new target of this selectedCollection association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.setSelectedCollection = function(oSelectedCollection) { return new sap.ui.ux3.CollectionInspector(); };

/**
 * Sets a new value for property {@link #getSidebarVisible sidebarVisible}.
 * 
 * Defines if the list of collection items is visible on the left
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSidebarVisible New value for property <code>sidebarVisible</code>
 * @returns {sap.ui.ux3.CollectionInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.CollectionInspector.prototype.setSidebarVisible = function(bSidebarVisible) { return new sap.ui.ux3.CollectionInspector(); };


// ---- sap.ui.ux3.DataSet --------------------------------------------------------------------------

/**
 * Constructor for a new DataSet.
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
 * <li>{@link #getShowToolbar showToolbar} : boolean (default: true)</li>
 * <li>{@link #getShowFilter showFilter} : boolean (default: true)</li>
 * <li>{@link #getShowSearchField showSearchField} : boolean (default: true)</li>
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.ux3.DataSetItem[]</li>
 * <li>{@link #getViews views} : sap.ui.ux3.DataSetView[]</li>
 * <li>{@link #getFilter filter} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedView selectedView} : (sap.ui.core.ID | sap.ui.ux3.DataSetView)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * DataSet
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSet = function(sId,mSettings) {};
/**
 * Event which is fired when the user triggers a search
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.search = function(oControlEvent) {  };

/**
 * selection Changed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.oldLeadSelectedIndex Old lead selected index
 * @param {int} oControlEvent.getParameters.newLeadSelectedIndex New lead selected index
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Rerendering of the FilterArea
 * 
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype._rerenderFilter = function() {  };

/**
 * Rerendering of the Toolbar
 * 
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype._rerenderToolbar = function() {  };

/**
 * Adds some filter to the aggregation {@link #getFilter filter}.
 * @param {sap.ui.core.Control}
 *            oFilter the filter to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.addFilter = function(oFilter) { return new sap.ui.ux3.DataSet(); };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.addItem = function(oItem) { return new sap.ui.ux3.DataSet(); };

/**
 * add a toolbarItem to the toolbar
 * 
 * @param {sap.ui.commons.ToolbarItem} oOToolbarItem
 *         ToolbarItem
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSet.prototype.addToolbarItem = function(oOToolbarItem) { return null; };

/**
 * Adds some view to the aggregation {@link #getViews views}.
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.addView = function(oView) { return new sap.ui.ux3.DataSet(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.DataSet</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.DataSet</code> itself.
 * 
 * Event which is fired when the user triggers a search
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code> itself
 * 
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.DataSet</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.DataSet</code> itself.
 * 
 * selection Changed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSet</code> itself
 * 
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * Binds aggregation {@link #getItems items} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.bindItems = function(oBindingInfo) { return new sap.ui.ux3.DataSet(); };

/**
 *  clears dataset from all previous selections
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.clearSelection = function() {  };

/**
 * Creates a view switch button
 * 
 * @param {object} oView View
 * @param {int} iIndex Index of view
 * @return {object} viewSwitch instance
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.createViewSwitch = function(oView,iIndex) { return new Object(); };

/**
 * Destroys all the filter in the aggregation {@link #getFilter filter}.
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.destroyFilter = function() { return new sap.ui.ux3.DataSet(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.destroyItems = function() { return new sap.ui.ux3.DataSet(); };

/**
 * Destroys all the views in the aggregation {@link #getViews views}.
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.destroyViews = function() { return new sap.ui.ux3.DataSet(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.DataSet</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.ui.ux3.DataSet</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.ux3.DataSet(); };

/**
 * Creates a new subclass of class sap.ui.ux3.DataSet with name <code>sClassName</code>
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
sap.ui.ux3.DataSet.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.query] The search query
 * 
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.fireSearch = function(mParameters) { return new sap.ui.ux3.DataSet(); };

/**
 * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.oldLeadSelectedIndex] Old lead selected index
 * @param {int} [mParameters.newLeadSelectedIndex] New lead selected index
 * 
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.fireSelectionChanged = function(mParameters) { return new sap.ui.ux3.DataSet(); };

/**
 * Gets content of aggregation {@link #getFilter filter}.
 * 
 * Filter control (e.g. a FacetFilter) for the DataSet
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getFilter = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * Aggregation of DataSetItems
 * 
 * @returns {sap.ui.ux3.DataSetItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getItems = function() { return new Array(); };

/**
 * Returns the LeadSelection index
 * 
 * @param {string} sItemId Id of the selected DataSetItem
 * @return {int} selected index
 * @protected
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSet.prototype.getLeadSelection = function(sItemId) { return 0; };

/**
 * Returns a metadata object for class sap.ui.ux3.DataSet.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.DataSet.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMultiSelect multiSelect}.
 * 
 * Selection mode of the DataSet
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>multiSelect</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getMultiSelect = function() { return false; };

/**
 *  use this function to retrieve the lead selected index
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getSelectedIndex = function() {  };

/**
 *  use this function to retrieve all selected indices if multiple select is enabled
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getSelectedIndices = function() {  };

/**
 * Returns id of selected Item from given index
 * 
 * @param {int} iIndex index of selection
 * @return {string} id of selected item
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.getSelectedItemId = function(iIndex) { return ""; };

/**
 * ID of the element which is the current target of the association {@link #getSelectedView selectedView}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getSelectedView = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getShowFilter showFilter}.
 * 
 * show filter
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFilter</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getShowFilter = function() { return false; };

/**
 * Gets current value of property {@link #getShowSearchField showSearchField}.
 * 
 * Show/hide SearchField in Toolbar
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSearchField</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getShowSearchField = function() { return false; };

/**
 * Gets current value of property {@link #getShowToolbar showToolbar}.
 * 
 * show Toolbar
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showToolbar</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getShowToolbar = function() { return false; };

/**
 * Gets content of aggregation {@link #getViews views}.
 * 
 * views
 * 
 * @returns {sap.ui.ux3.DataSetView[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getViews = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFilter filter}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oFilter The filter whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.indexOfFilter = function(oFilter) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.DataSetItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.DataSetItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.DataSetView</code> in the aggregation {@link #getViews views}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.DataSetView}
 *           oView The view whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.indexOfView = function(oView) { return 0; };

/**
 * Inserts a filter into the aggregation {@link #getFilter filter}.
 * 
 * @param {sap.ui.core.Control}
 *            oFilter the filter to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filter should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filter is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filter is inserted at
 *              the last position
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.insertFilter = function(oFilter,iIndex) { return new sap.ui.ux3.DataSet(); };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.DataSet(); };

/**
 * Inserts a view into the aggregation {@link #getViews views}.
 * 
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the view should be inserted at; for
 *              a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the view is inserted at
 *              the last position
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.insertView = function(oView,iIndex) { return new sap.ui.ux3.DataSet(); };

/**
 * Returns true if iIndex is selected
 * 
 * @param {int} iIndex index of selection
 * @return {boolean} index selected true/false
 * @protected
 * 
 */
sap.ui.ux3.DataSet.prototype.isSelectedIndex = function(iIndex) { return false; };

/**
 * Removes all the controls from the aggregation {@link #getFilter filter}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeAllFilter = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.DataSetItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getViews views}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.DataSetView[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeAllViews = function() { return new Array(); };

/**
 * Removes a filter from the aggregation {@link #getFilter filter}.
 * 
 * @param {int | string | sap.ui.core.Control} vFilter The filter to remove or its index or id
 * @returns {sap.ui.core.Control} The removed filter or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeFilter = function(vFilter) { return new sap.ui.core.Control(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.ux3.DataSetItem} vItem The item to remove or its index or id
 * @returns {sap.ui.ux3.DataSetItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeItem = function(vItem) { return new sap.ui.ux3.DataSetItem(); };

/**
 * remove a toolbarItem to the toolbar
 * 
 * @param {sap.ui.commons.ToolbarItem} oOToolbarItem
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSet.prototype.removeToolbarItem = function(oOToolbarItem) { return null; };

/**
 * Removes a view from the aggregation {@link #getViews views}.
 * 
 * @param {int | string | sap.ui.ux3.DataSetView} vView The view to remove or its index or id
 * @returns {sap.ui.ux3.DataSetView} The removed view or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.removeView = function(vView) { return new sap.ui.ux3.DataSetView(); };

/**
 * Set the LeadSelection index
 * 
 * @param {int} iIIndex set LeadSelection index
 * @type void
 * @protected
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSet.prototype.setLeadSelection = function(iIIndex) { return null; };

/**
 * setter for multi selection mode
 * @param {boolean}
 *            bMode true for multi mode, false for single mode
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setMultiSelect = function(bMode) {  };

/**
 * Sets the associated {@link #getSelectedView selectedView}.
 * @param {sap.ui.core.ID | sap.ui.ux3.DataSetView} oSelectedView ID of an element which becomes the new target of this selectedView association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setSelectedView = function(oSelectedView) { return new sap.ui.ux3.DataSet(); };

/**
 * Sets a new value for property {@link #getShowFilter showFilter}.
 * 
 * show filter
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFilter New value for property <code>showFilter</code>
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setShowFilter = function(bShowFilter) { return new sap.ui.ux3.DataSet(); };

/**
 * Sets a new value for property {@link #getShowSearchField showSearchField}.
 * 
 * Show/hide SearchField in Toolbar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSearchField New value for property <code>showSearchField</code>
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setShowSearchField = function(bShowSearchField) { return new sap.ui.ux3.DataSet(); };

/**
 * Sets a new value for property {@link #getShowToolbar showToolbar}.
 * 
 * show Toolbar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowToolbar New value for property <code>showToolbar</code>
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.setShowToolbar = function(bShowToolbar) { return new sap.ui.ux3.DataSet(); };

/**
 * Unbinds aggregation {@link #getItems items} from model data.
 * @returns {sap.ui.ux3.DataSet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.unbindItems = function() { return new sap.ui.ux3.DataSet(); };


// ---- sap.ui.ux3.DataSetItem --------------------------------------------------------------------------

/**
 * Constructor for a new DataSetItem.
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
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string (default: Title)</li>
 * <li>{@link #getCheckable checkable} : boolean (default: true)</li>
 * <li>{@link #getSubtitle subtitle} : string (default: Subtitle)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * DataSet Item
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSetItem = function(sId,mSettings) {};
/**
 * Event Fired when Datset item is selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId Id of the selected Datset item
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.selected = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selected selected} event of this <code>sap.ui.ux3.DataSetItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.DataSetItem</code> itself.
 * 
 * Event Fired when Datset item is selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSetItem</code> itself
 * 
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.attachSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.DataSetItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selected selected} event of this <code>sap.ui.ux3.DataSetItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.detachSelected = function(fnFunction,oListener) { return new sap.ui.ux3.DataSetItem(); };

/**
 * Creates a new subclass of class sap.ui.ux3.DataSetItem with name <code>sClassName</code>
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
sap.ui.ux3.DataSetItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:selected selected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.itemId] Id of the selected Datset item
 * 
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.DataSetItem.prototype.fireSelected = function(mParameters) { return new sap.ui.ux3.DataSetItem(); };

/**
 * Gets current value of property {@link #getCheckable checkable}.
 * 
 * checkable
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>checkable</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getCheckable = function() { return false; };

/**
 * Gets current value of property {@link #getIconSrc iconSrc}.
 * 
 * image
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconSrc</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getIconSrc = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.ux3.DataSetItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.DataSetItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSubtitle subtitle}.
 * 
 * subtitle
 * 
 * Default value is <code>Subtitle</code>.
 * @returns {string} Value of property <code>subtitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * title
 * 
 * Default value is <code>Title</code>.
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getTitle = function() { return ""; };

/**
 * Sets a new value for property {@link #getCheckable checkable}.
 * 
 * checkable
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bCheckable New value for property <code>checkable</code>
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setCheckable = function(bCheckable) { return new sap.ui.ux3.DataSetItem(); };

/**
 * Sets a new value for property {@link #getIconSrc iconSrc}.
 * 
 * image
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconSrc New value for property <code>iconSrc</code>
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setIconSrc = function(sIconSrc) { return new sap.ui.ux3.DataSetItem(); };

/**
 * Sets a new value for property {@link #getSubtitle subtitle}.
 * 
 * subtitle
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Subtitle</code>.
 * @param {string} sSubtitle New value for property <code>subtitle</code>
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setSubtitle = function(sSubtitle) { return new sap.ui.ux3.DataSetItem(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Title</code>.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.DataSetItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.DataSetItem(); };


// ---- sap.ui.ux3.DataSetSimpleView --------------------------------------------------------------------------

/**
 * Constructor for a new DataSetSimpleView.
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
 * <li>{@link #getFloating floating} : boolean (default: true)</li>
 * <li>{@link #getName name} : string (default: Name of this View)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getResponsive responsive} : boolean (default: false)</li>
 * <li>{@link #getItemMinWidth itemMinWidth} : int (default: 0)</li>
 * <li>{@link #getInitialItemCount initialItemCount} : int (default: 0)</li>
 * <li>{@link #getReloadItemCount reloadItemCount} : int (default: 0)</li>
 * <li>{@link #getScrollArea scrollArea} : any</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * DataSetSimpleView provides a simple view example for DataSet usage.
 * @extends sap.ui.core.Control
 * @implements sap.ui.ux3.DataSetView
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.DataSetSimpleView = function(sId,mSettings) {};
/**
 * Destroys the template in the aggregation {@link #getTemplate template}.
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.destroyTemplate = function() { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * View finalization: Called when leaving the view
 * 
 * @param {sap.ui.ux3.DataSetItem[]} aItems
 * @protected
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.exitView = function(aItems) {  };

/**
 * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name <code>sClassName</code>
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
sap.ui.ux3.DataSetSimpleView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getFloating floating}.
 * 
 * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>floating</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getFloating = function() { return false; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon source for this view
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIconHovered iconHovered}.
 * 
 * icon: hovered state
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconHovered</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIconSelected iconSelected}.
 * 
 * icon: selected state
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconSelected</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getInitialItemCount initialItemCount}.
 * 
 * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>initialItemCount</code>
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getInitialItemCount = function() { return 0; };

/**
 * Gets current value of property {@link #getItemMinWidth itemMinWidth}.
 * 
 * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>itemMinWidth</code>
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getItemMinWidth = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.ux3.DataSetSimpleView.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.DataSetSimpleView.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getName name}.
 * 
 * Name of the View
 * 
 * Default value is <code>Name of this View</code>.
 * @returns {string} Value of property <code>name</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getName = function() { return ""; };

/**
 * Gets current value of property {@link #getReloadItemCount reloadItemCount}.
 * 
 * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>reloadItemCount</code>
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getReloadItemCount = function() { return 0; };

/**
 * Gets current value of property {@link #getResponsive responsive}.
 * 
 * When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>responsive</code>
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getResponsive = function() { return false; };

/**
 * Gets current value of property {@link #getScrollArea scrollArea}.
 * 
 * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
 * 
 * @returns {any} Value of property <code>scrollArea</code>
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getScrollArea = function() { return null; };

/**
 * Gets content of aggregation {@link #getTemplate template}.
 * 
 * template
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

/**
 * Eventhandler for the selection of an Item
 * 
 * @param {sap.ui.base.Event} oEvent SelectionChanged event
 * @protected
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.handleSelection = function(oEvent) {  };

/**
 * View Initialization: Called when selecting the view
 * 
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.initView = function(aItems) {  };

/**
 * Check if Item <code>oItem</code> is selected
 * 
 * @param {sap.ui.ux3.DataSetItem} oItem DataSetItem instance
 * @protected
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.isItemSelected = function(oItem) {  };

/**
 * Sets a new value for property {@link #getFloating floating}.
 * 
 * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFloating New value for property <code>floating</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setFloating = function(bFloating) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setHeight = function(sHeight) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Icon source for this view
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getIconHovered iconHovered}.
 * 
 * icon: hovered state
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconHovered New value for property <code>iconHovered</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIconHovered = function(sIconHovered) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getIconSelected iconSelected}.
 * 
 * icon: selected state
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconSelected New value for property <code>iconSelected</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getInitialItemCount initialItemCount}.
 * 
 * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iInitialItemCount New value for property <code>initialItemCount</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setInitialItemCount = function(iInitialItemCount) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getItemMinWidth itemMinWidth}.
 * 
 * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iItemMinWidth New value for property <code>itemMinWidth</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setItemMinWidth = function(iItemMinWidth) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * Name of the View
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Name of this View</code>.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setName = function(sName) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getReloadItemCount reloadItemCount}.
 * 
 * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iReloadItemCount New value for property <code>reloadItemCount</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.0
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setReloadItemCount = function(iReloadItemCount) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * Sets a new value for property {@link #getResponsive responsive}.
 * 
 * When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bResponsive New value for property <code>responsive</code>
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setResponsive = function(bResponsive) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * @param {any[]} aScrollArea
 * @param {boolean} bSupress
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setScrollArea = function(aScrollArea,bSupress) {  };

/**
 * Sets the aggregated {@link #getTemplate template}.
 * @param {sap.ui.core.Control} oTemplate The template to set
 * @returns {sap.ui.ux3.DataSetSimpleView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.setTemplate = function(oTemplate) { return new sap.ui.ux3.DataSetSimpleView(); };

/**
 * View update: Called when pagination adds items
 * 
 * @param {sap.ui.ux3.DataSetItem[]} aDiff Array of DataSetItems added to the parent DataSet
 * @protected
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.updateView = function(aDiff) {  };


// ---- sap.ui.ux3.DataSetView --------------------------------------------------------------------------


// ---- sap.ui.ux3.Exact --------------------------------------------------------------------------

/**
 * Constructor for a new Exact.
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
 * <li>{@link #getResultText resultText} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSettingsMenu settingsMenu} : sap.ui.commons.Menu</li>
 * <li>{@link #getAttributes attributes} : sap.ui.ux3.ExactAttribute[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:refineSearch refineSearch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A comprehensive UI design approach with graphical and functional elements for searching data, exploring data, and acting on the data
 * ("Explore and Act (Exact) Pattern").
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @experimental Since version 1.2.
 * API is not yet finished and might change completely
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Exact = function(sId,mSettings) {};
/**
 * Event which is fired when an attribute is selected or unselected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.changedAttribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allSelectedAttributes Array of all selected ExcatAttribute.
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.refineSearch = function(oControlEvent) {  };

/**
 * Event is fired when the search button is clicked
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field.
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.search = function(oControlEvent) {  };

/**
 * Adds some attribute to the aggregation {@link #getAttributes attributes}.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.addAttribute = function(oAttribute) { return new sap.ui.ux3.Exact(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:refineSearch refineSearch} event of this <code>sap.ui.ux3.Exact</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Exact</code> itself.
 * 
 * Event which is fired when an attribute is selected or unselected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code> itself
 * 
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.attachRefineSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.Exact</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Exact</code> itself.
 * 
 * Event is fired when the search button is clicked
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code> itself
 * 
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.destroyAttributes = function() { return new sap.ui.ux3.Exact(); };

/**
 * Destroys the settingsMenu in the aggregation {@link #getSettingsMenu settingsMenu}.
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.destroySettingsMenu = function() { return new sap.ui.ux3.Exact(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:refineSearch refineSearch} event of this <code>sap.ui.ux3.Exact</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.detachRefineSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.Exact</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Exact(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Exact with name <code>sClassName</code>
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
sap.ui.ux3.Exact.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:refineSearch refineSearch} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.query] The query string which was entered in the search field
 * @param {sap.ui.ux3.ExactAttribute} [mParameters.changedAttribute] The attribute which was selected or unselected recently
 * @param {object} [mParameters.allSelectedAttributes] Array of all selected ExcatAttribute.
 * 
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Exact.prototype.fireRefineSearch = function(mParameters) { return new sap.ui.ux3.Exact(); };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.query] The query string which was entered in the search field.
 * 
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Exact.prototype.fireSearch = function(mParameters) { return new sap.ui.ux3.Exact(); };

/**
 * Gets content of aggregation {@link #getAttributes attributes}.
 * 
 * The attributes which shall be available to refine the search
 * 
 * @returns {sap.ui.ux3.ExactAttribute[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getAttributes = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.Exact.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Exact.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the ExactArea representing the result section. Arbitrary content can be added here.
 * 
 * @type sap.ui.ux3.ExactArea
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Exact.prototype.getResultArea = function() { return new sap.ui.ux3.ExactArea(); };

/**
 * Gets current value of property {@link #getResultText resultText}.
 * 
 * A title text which is displayed above the result section
 * 
 * @returns {string} Value of property <code>resultText</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getResultText = function() { return ""; };

/**
 * Returns the SearchField control which is used by the Exact control.
 * 
 * @type sap.ui.commons.SearchField
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Exact.prototype.getSearchField = function() { return new sap.ui.commons.SearchField(); };

/**
 * Gets content of aggregation {@link #getSettingsMenu settingsMenu}.
 * 
 * Defines the 'Settings' button in the browse section tool bar
 * 
 * @returns {sap.ui.commons.Menu}
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getSettingsMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation {@link #getAttributes attributes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ExactAttribute}
 *           oAttribute The attribute whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
 * 
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the attribute should be inserted at; for
 *              a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the attribute is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.ux3.Exact(); };

/**
 * Removes all the controls from the aggregation {@link #getAttributes attributes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ExactAttribute[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * Removes a attribute from the aggregation {@link #getAttributes attributes}.
 * 
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute The attribute to remove or its index or id
 * @returns {sap.ui.ux3.ExactAttribute} The removed attribute or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.removeAttribute = function(vAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Sets a new value for property {@link #getResultText resultText}.
 * 
 * A title text which is displayed above the result section
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sResultText New value for property <code>resultText</code>
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.setResultText = function(sResultText) { return new sap.ui.ux3.Exact(); };

/**
 * Sets the aggregated {@link #getSettingsMenu settingsMenu}.
 * @param {sap.ui.commons.Menu} oSettingsMenu The settingsMenu to set
 * @returns {sap.ui.ux3.Exact} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.setSettingsMenu = function(oSettingsMenu) { return new sap.ui.ux3.Exact(); };


// ---- sap.ui.ux3.ExactArea --------------------------------------------------------------------------

/**
 * Constructor for a new ExactArea.
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
 * <li>{@link #getToolbarVisible toolbarVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getToolbarItems toolbarItems} : sap.ui.commons.ToolbarItem[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Consists of two sections: A tool bar and a content area where arbitrary controls can be added.
 * The ExactArea is intended to be used for the Exact design approach but alternatively also in a stand alone version.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @experimental Since version 1.6.
 * API is not yet finished and might change completely
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ExactArea = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.addContent = function(oContent) { return new sap.ui.ux3.ExactArea(); };

/**
 * Adds some toolbarItem to the aggregation {@link #getToolbarItems toolbarItems}.
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.addToolbarItem = function(oToolbarItem) { return new sap.ui.ux3.ExactArea(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.destroyContent = function() { return new sap.ui.ux3.ExactArea(); };

/**
 * Destroys all the toolbarItems in the aggregation {@link #getToolbarItems toolbarItems}.
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.destroyToolbarItems = function() { return new sap.ui.ux3.ExactArea(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ExactArea with name <code>sClassName</code>
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
sap.ui.ux3.ExactArea.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Arbitrary child controls of the content area
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ExactArea.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ExactArea.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getToolbarItems toolbarItems}.
 * 
 * Tool bar items which shall be shown in the tool bar.
 * 
 * @returns {sap.ui.commons.ToolbarItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getToolbarItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getToolbarVisible toolbarVisible}.
 * 
 * Specifies whether the tool bar shall be visible
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>toolbarVisible</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getToolbarVisible = function() { return false; };

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
sap.ui.ux3.ExactArea.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation {@link #getToolbarItems toolbarItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.ToolbarItem}
 *           oToolbarItem The toolbarItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.indexOfToolbarItem = function(oToolbarItem) { return 0; };

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
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.ExactArea(); };

/**
 * Inserts a toolbarItem into the aggregation {@link #getToolbarItems toolbarItems}.
 * 
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the toolbarItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the toolbarItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the toolbarItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.insertToolbarItem = function(oToolbarItem,iIndex) { return new sap.ui.ux3.ExactArea(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getToolbarItems toolbarItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.commons.ToolbarItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeAllToolbarItems = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes a toolbarItem from the aggregation {@link #getToolbarItems toolbarItems}.
 * 
 * @param {int | string | sap.ui.commons.ToolbarItem} vToolbarItem The toolbarItem to remove or its index or id
 * @returns {sap.ui.commons.ToolbarItem} The removed toolbarItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.removeToolbarItem = function(vToolbarItem) { return new sap.ui.commons.ToolbarItem(); };

/**
 * Sets a new value for property {@link #getToolbarVisible toolbarVisible}.
 * 
 * Specifies whether the tool bar shall be visible
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bToolbarVisible New value for property <code>toolbarVisible</code>
 * @returns {sap.ui.ux3.ExactArea} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.setToolbarVisible = function(bToolbarVisible) { return new sap.ui.ux3.ExactArea(); };


// ---- sap.ui.ux3.ExactAttribute --------------------------------------------------------------------------

/**
 * Constructor for a new ExactAttribute.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getSelected selected} : boolean</li>
 * <li>{@link #getWidth width} : int (default: 168)</li>
 * <li>{@link #getListOrder listOrder} : sap.ui.ux3.ExactOrder (default: Select)</li>
 * <li>{@link #getShowSubAttributesIndicator showSubAttributesIndicator} : boolean (default: true)</li>
 * <li>{@link #getAdditionalData additionalData} : object</li>
 * <li>{@link #getSupplyActive supplyActive} : boolean (default: true)</li>
 * <li>{@link #getAutoActivateSupply autoActivateSupply} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.ui.ux3.ExactAttribute[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:supplyAttributes supplyAttributes} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * An element for defining attributes and sub-attributes used within the Exact pattern.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ExactAttribute = function(sId,mSettings) {};
/**
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The ExactAttribute
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.supplyAttributes = function(oControlEvent) {  };

/**
 * Adds some attribute to the aggregation {@link #getAttributes attributes}.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.addAttribute = function(oAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:supplyAttributes supplyAttributes} event of this <code>sap.ui.ux3.ExactAttribute</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ExactAttribute</code> itself.
 * 
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactAttribute</code> itself
 * 
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.attachSupplyAttributes = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.destroyAttributes = function() { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:supplyAttributes supplyAttributes} event of this <code>sap.ui.ux3.ExactAttribute</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.detachSupplyAttributes = function(fnFunction,oListener) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ExactAttribute with name <code>sClassName</code>
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
sap.ui.ux3.ExactAttribute.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:supplyAttributes supplyAttributes} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.ux3.ExactAttribute} [mParameters.attribute] The ExactAttribute
 * 
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.fireSupplyAttributes = function(mParameters) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Gets current value of property {@link #getAdditionalData additionalData}.
 * 
 * An example for additional data are database keys
 * 
 * @returns {object} Value of property <code>additionalData</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAdditionalData = function() { return new Object(); };

/**
 * Gets content of aggregation {@link #getAttributes attributes}.
 * 
 * Values (sub attributes) of this attribute
 * 
 * @returns {sap.ui.ux3.ExactAttribute[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAttributes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getAutoActivateSupply autoActivateSupply}.
 * 
 * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically
 * set to true on every unselect.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>autoActivateSupply</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAutoActivateSupply = function() { return false; };

/**
 * Gets current value of property {@link #getListOrder listOrder}.
 * 
 * The order how the sublists of this attribute should be displayed.
 * 
 * Default value is <code>Select</code>.
 * @returns {sap.ui.ux3.ExactOrder} Value of property <code>listOrder</code>
 * @since 1.7.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getListOrder = function() { return new sap.ui.ux3.ExactOrder(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ExactAttribute.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ExactAttribute.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSelected selected}.
 * 
 * Specifies whether the attribute shall be selected
 * 
 * @returns {boolean} Value of property <code>selected</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
 * 
 * Specifies whether the attribute shall have sub values for visual purposes.
 * The indicator which is a little arrow beside an attribute in the list is computed automatically
 * (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute).
 * In the case that a supply function is attached, and the supplyActive attribute has value 'true',
 * then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is
 * considered then and has to be maintained. If the back-end does not support count-calls, for example,
 * showSubAttributesIndicator should be set to true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSubAttributesIndicator</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator = function() { return false; };

/**
 * See attribute showSubAttributesIndicator
 * 
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed = function() { return null; };

/**
 * Gets current value of property {@link #getSupplyActive supplyActive}.
 * 
 * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false.
 * The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>supplyActive</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getSupplyActive = function() { return false; };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * The attribute name
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
 * 
 * Default value is <code>168</code>.
 * @returns {int} Value of property <code>width</code>
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getWidth = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation {@link #getAttributes attributes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ExactAttribute}
 *           oAttribute The attribute whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
 * 
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the attribute should be inserted at; for
 *              a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the attribute is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Removes all the controls from the aggregation {@link #getAttributes attributes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ExactAttribute[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * Removes a attribute from the aggregation {@link #getAttributes attributes}.
 * 
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute The attribute to remove or its index or id
 * @returns {sap.ui.ux3.ExactAttribute} The removed attribute or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.removeAttribute = function(vAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If the corresponding list is not yet visible the call is buffered until the list is available.
 * 
 * @param {sap.ui.ux3.ExactAttribute} oOAttribute
 *         The direct child attribute
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.scrollTo = function(oOAttribute) { return null; };

/**
 * Sets a new value for property {@link #getAdditionalData additionalData}.
 * 
 * An example for additional data are database keys
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oAdditionalData New value for property <code>additionalData</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setAdditionalData = function(oAdditionalData) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Sets a new value for property {@link #getAutoActivateSupply autoActivateSupply}.
 * 
 * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically
 * set to true on every unselect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAutoActivateSupply New value for property <code>autoActivateSupply</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setAutoActivateSupply = function(bAutoActivateSupply) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Sets a new value for property {@link #getListOrder listOrder}.
 * 
 * The order how the sublists of this attribute should be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Select</code>.
 * @param {sap.ui.ux3.ExactOrder} sListOrder New value for property <code>listOrder</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * @since 1.7.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setListOrder = function(sListOrder) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * @param {string} sPropertyName
 * @param {object} oValue
 * @param {boolean} bSuppressRerendering
 * @see sap.ui.base.ManagedObject.prototype.setProperty
 * @protected
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setProperty = function(sPropertyName,oValue,bSuppressRerendering) {  };

/**
 * Sets a new value for property {@link #getSelected selected}.
 * 
 * Specifies whether the attribute shall be selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setSelected = function(bSelected) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Sets a new value for property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
 * 
 * Specifies whether the attribute shall have sub values for visual purposes.
 * The indicator which is a little arrow beside an attribute in the list is computed automatically
 * (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute).
 * In the case that a supply function is attached, and the supplyActive attribute has value 'true',
 * then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is
 * considered then and has to be maintained. If the back-end does not support count-calls, for example,
 * showSubAttributesIndicator should be set to true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSubAttributesIndicator New value for property <code>showSubAttributesIndicator</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setShowSubAttributesIndicator = function(bShowSubAttributesIndicator) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Sets a new value for property {@link #getSupplyActive supplyActive}.
 * 
 * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false.
 * The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSupplyActive New value for property <code>supplyActive</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setSupplyActive = function(bSupplyActive) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * The attribute name
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setText = function(sText) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * @param {string|sap.ui.core.TooltipBase} oTooltip
 * @see sap.ui.core.Element.prototype.setTooltip
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setTooltip = function(oTooltip) {  };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>168</code>.
 * @param {int} iWidth New value for property <code>width</code>
 * @returns {sap.ui.ux3.ExactAttribute} Reference to <code>this</code> in order to allow method chaining
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.setWidth = function(iWidth) { return new sap.ui.ux3.ExactAttribute(); };


// ---- sap.ui.ux3.ExactBrowser --------------------------------------------------------------------------

/**
 * Constructor for a new ExactBrowser.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getHeaderTitle headerTitle} : string</li>
 * <li>{@link #getTopListOrder topListOrder} : sap.ui.ux3.ExactOrder (default: Select)</li>
 * <li>{@link #getEnableListClose enableListClose} : boolean (default: false)</li>
 * <li>{@link #getListHeight listHeight} : int (default: 290)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * <li>{@link #getShowTopList showTopList} : boolean (default: true)</li>
 * <li>{@link #getEnableReset enableReset} : boolean (default: true)</li>
 * <li>{@link #getEnableSave enableSave} : boolean (default: false)</li>
 * <li>{@link #getTopListWidth topListWidth} : int (default: 168)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.ui.ux3.ExactAttribute[] (default)</li>
 * <li>{@link #getOptionsMenu optionsMenu} : sap.ui.commons.Menu</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getFollowUpControl followUpControl} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:attributeSelected attributeSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility when large data amounts shall be displayed
 * in the form of structured data sets with a high or low interdependency level. From lists - which can be nested according to the defined attributes - the user can choose
 * entries and thereby trigger the display of further information, depending on the chosen entry/entries (multiple selection supported).
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ExactBrowser = function(sId,mSettings) {};
/**
 * Event is fired when an attribute is selected or unselected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allAttributes Array of all selected ExactAttributes
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.attributeSelected = function(oControlEvent) {  };

/**
 * Event is fired when an attribute is selected or unselected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.save = function(oControlEvent) {  };

/**
 * Adds some attribute to the aggregation {@link #getAttributes attributes}.
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.addAttribute = function(oAttribute) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attributeSelected attributeSelected} event of this <code>sap.ui.ux3.ExactBrowser</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ExactBrowser</code> itself.
 * 
 * Event is fired when an attribute is selected or unselected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code> itself
 * 
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.attachAttributeSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:save save} event of this <code>sap.ui.ux3.ExactBrowser</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ExactBrowser</code> itself.
 * 
 * Event is fired when an attribute is selected or unselected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code> itself
 * 
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.attachSave = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.destroyAttributes = function() { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Destroys the optionsMenu in the aggregation {@link #getOptionsMenu optionsMenu}.
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.destroyOptionsMenu = function() { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attributeSelected attributeSelected} event of this <code>sap.ui.ux3.ExactBrowser</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.detachAttributeSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:save save} event of this <code>sap.ui.ux3.ExactBrowser</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.detachSave = function(fnFunction,oListener) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ExactBrowser with name <code>sClassName</code>
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
sap.ui.ux3.ExactBrowser.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:attributeSelected attributeSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.ux3.ExactAttribute} [mParameters.attribute] The attribute which was selected or unselected recently
 * @param {object} [mParameters.allAttributes] Array of all selected ExactAttributes
 * 
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.fireAttributeSelected = function(mParameters) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Fires event {@link #event:save save} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.fireSave = function(mParameters) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Gets content of aggregation {@link #getAttributes attributes}.
 * 
 * The attributes which shall be available.
 * 
 * @returns {sap.ui.ux3.ExactAttribute[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getAttributes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEnableListClose enableListClose}.
 * 
 * Enables the close icons of the displayed lists.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableListClose</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableListClose = function() { return false; };

/**
 * Gets current value of property {@link #getEnableReset enableReset}.
 * 
 * Whether the reset functionality should be available in the header area.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableReset</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableReset = function() { return false; };

/**
 * Gets current value of property {@link #getEnableSave enableSave}.
 * 
 * Whether the save button should be available in the header area.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableSave</code>
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableSave = function() { return false; };

/**
 * ID of the element which is the current target of the association {@link #getFollowUpControl followUpControl}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getFollowUpControl = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getHeaderTitle headerTitle}.
 * 
 * Title text in the header of the Exact Browser.
 * 
 * @returns {string} Value of property <code>headerTitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getHeaderTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getListHeight listHeight}.
 * 
 * The height of the list area in px.
 * 
 * Default value is <code>290</code>.
 * @returns {int} Value of property <code>listHeight</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getListHeight = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.ux3.ExactBrowser.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ExactBrowser.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getOptionsMenu optionsMenu}.
 * 
 * Menu with options. The menu can not used when the property showTopList is set to false.
 * 
 * @returns {sap.ui.commons.Menu}
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getOptionsMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * Gets current value of property {@link #getShowHeader showHeader}.
 * 
 * Whether the header area of the ExactBrowser should be shown.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showHeader</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getShowHeader = function() { return false; };

/**
 * Gets current value of property {@link #getShowTopList showTopList}.
 * 
 * Whether the top list of the ExactBrowser should be shown. When the property is set to false the
 * application must ensure to select top level attributes appropriately.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTopList</code>
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getShowTopList = function() { return false; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTopListOrder topListOrder}.
 * 
 * The order how the sublists of the top level list should be displayed.
 * 
 * Default value is <code>Select</code>.
 * @returns {sap.ui.ux3.ExactOrder} Value of property <code>topListOrder</code>
 * @since 1.7.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTopListOrder = function() { return new sap.ui.ux3.ExactOrder(); };

/**
 * Gets current value of property {@link #getTopListWidth topListWidth}.
 * 
 * Specifies the width of the top list in pixels. The value must be between 70 and 500.
 * 
 * Default value is <code>168</code>.
 * @returns {int} Value of property <code>topListWidth</code>
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTopListWidth = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation {@link #getAttributes attributes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ExactAttribute}
 *           oAttribute The attribute whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
 * 
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the attribute should be inserted at; for
 *              a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the attribute is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Removes all the controls from the aggregation {@link #getAttributes attributes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ExactAttribute[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * Removes a attribute from the aggregation {@link #getAttributes attributes}.
 * 
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute The attribute to remove or its index or id
 * @returns {sap.ui.ux3.ExactAttribute} The removed attribute or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.removeAttribute = function(vAttribute) { return new sap.ui.ux3.ExactAttribute(); };

/**
 * Deselects all currently selected attributes and closes all attribute lists.
 * 
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.reset = function() { return null; };

/**
 * Sets a new value for property {@link #getEnableListClose enableListClose}.
 * 
 * Enables the close icons of the displayed lists.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableListClose New value for property <code>enableListClose</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableListClose = function(bEnableListClose) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getEnableReset enableReset}.
 * 
 * Whether the reset functionality should be available in the header area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableReset New value for property <code>enableReset</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableReset = function(bEnableReset) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getEnableSave enableSave}.
 * 
 * Whether the save button should be available in the header area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableSave New value for property <code>enableSave</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.2
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableSave = function(bEnableSave) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets the associated {@link #getFollowUpControl followUpControl}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oFollowUpControl ID of an element which becomes the new target of this followUpControl association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setFollowUpControl = function(oFollowUpControl) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getHeaderTitle headerTitle}.
 * 
 * Title text in the header of the Exact Browser.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sHeaderTitle New value for property <code>headerTitle</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setHeaderTitle = function(sHeaderTitle) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getListHeight listHeight}.
 * 
 * The height of the list area in px.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>290</code>.
 * @param {int} iListHeight New value for property <code>listHeight</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setListHeight = function(iListHeight) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets the aggregated {@link #getOptionsMenu optionsMenu}.
 * @param {sap.ui.commons.Menu} oOptionsMenu The optionsMenu to set
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setOptionsMenu = function(oOptionsMenu) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getShowHeader showHeader}.
 * 
 * Whether the header area of the ExactBrowser should be shown.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowHeader New value for property <code>showHeader</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getShowTopList showTopList}.
 * 
 * Whether the top list of the ExactBrowser should be shown. When the property is set to false the
 * application must ensure to select top level attributes appropriately.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTopList New value for property <code>showTopList</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setShowTopList = function(bShowTopList) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getTopListOrder topListOrder}.
 * 
 * The order how the sublists of the top level list should be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Select</code>.
 * @param {sap.ui.ux3.ExactOrder} sTopListOrder New value for property <code>topListOrder</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @since 1.7.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setTopListOrder = function(sTopListOrder) { return new sap.ui.ux3.ExactBrowser(); };

/**
 * Sets a new value for property {@link #getTopListWidth topListWidth}.
 * 
 * Specifies the width of the top list in pixels. The value must be between 70 and 500.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>168</code>.
 * @param {int} iTopListWidth New value for property <code>topListWidth</code>
 * @returns {sap.ui.ux3.ExactBrowser} Reference to <code>this</code> in order to allow method chaining
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.setTopListWidth = function(iTopListWidth) { return new sap.ui.ux3.ExactBrowser(); };


// ---- sap.ui.ux3.ExactOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ExactOrder.toString = function() { return ""; };

// ---- sap.ui.ux3.FacetFilter --------------------------------------------------------------------------

/**
 * Constructor for a new FacetFilter.
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
 * <li>{@link #getVisibleItemCountMode visibleItemCountMode} : sap.ui.ux3.VisibleItemCountMode (default: Fixed)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLists lists} : sap.ui.ux3.FacetFilterList[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * FacetFilter Control.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.FacetFilter</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.FacetFilter = function(sId,mSettings) {};
/**
 * Adds some list to the aggregation {@link #getLists lists}.
 * @param {sap.ui.ux3.FacetFilterList}
 *            oList the list to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.FacetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.addList = function(oList) { return new sap.ui.ux3.FacetFilter(); };

/**
 * Destroys all the lists in the aggregation {@link #getLists lists}.
 * @returns {sap.ui.ux3.FacetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.destroyLists = function() { return new sap.ui.ux3.FacetFilter(); };

/**
 * Creates a new subclass of class sap.ui.ux3.FacetFilter with name <code>sClassName</code>
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
sap.ui.ux3.FacetFilter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getLists lists}.
 * 
 * Facet Filter list represents the list of the filter values and the title of this list.
 * 
 * @returns {sap.ui.ux3.FacetFilterList[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.getLists = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.FacetFilter.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.FacetFilter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisibleItemCountMode visibleItemCountMode}.
 * 
 * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
 * 
 * Default value is <code>Fixed</code>.
 * @returns {sap.ui.ux3.VisibleItemCountMode} Value of property <code>visibleItemCountMode</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.getVisibleItemCountMode = function() { return new sap.ui.ux3.VisibleItemCountMode(); };

/**
 * Checks for the provided <code>sap.ui.ux3.FacetFilterList</code> in the aggregation {@link #getLists lists}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.FacetFilterList}
 *           oList The list whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.indexOfList = function(oList) { return 0; };

/**
 * Inserts a list into the aggregation {@link #getLists lists}.
 * 
 * @param {sap.ui.ux3.FacetFilterList}
 *            oList the list to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the list should be inserted at; for
 *              a negative value of <code>iIndex</code>, the list is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the list is inserted at
 *              the last position
 * @returns {sap.ui.ux3.FacetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.insertList = function(oList,iIndex) { return new sap.ui.ux3.FacetFilter(); };

/**
 * Removes all the controls from the aggregation {@link #getLists lists}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.FacetFilterList[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.removeAllLists = function() { return new Array(); };

/**
 * Removes a list from the aggregation {@link #getLists lists}.
 * 
 * @param {int | string | sap.ui.ux3.FacetFilterList} vList The list to remove or its index or id
 * @returns {sap.ui.ux3.FacetFilterList} The removed list or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.removeList = function(vList) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Sets a new value for property {@link #getVisibleItemCountMode visibleItemCountMode}.
 * 
 * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Fixed</code>.
 * @param {sap.ui.ux3.VisibleItemCountMode} sVisibleItemCountMode New value for property <code>visibleItemCountMode</code>
 * @returns {sap.ui.ux3.FacetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilter.prototype.setVisibleItemCountMode = function(sVisibleItemCountMode) { return new sap.ui.ux3.FacetFilter(); };


// ---- sap.ui.ux3.FacetFilterList --------------------------------------------------------------------------

/**
 * Constructor for a new FacetFilterList.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: true)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getSelectedKeys selectedKeys} : string[]</li>
 * <li>{@link #getShowCounter showCounter} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.ListItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * List to be used with the FacetFilter control. The control is not intended to be used stand alone.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.FacetFilter</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.FacetFilterList = function(sId,mSettings) {};
/**
 * On Select event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of the FacetFilterList taht fires the event.
 * @param {int[]} oControlEvent.getParameters.selectedIndices Array of selected Indices.
 * @param {sap.ui.core.ListItem[]} oControlEvent.getParameters.selectedItems Array of selected Items.
 * @param {boolean} oControlEvent.getParameters.all If it is true, then Item All is selected. That means all items in the list are selected - no filter is set.
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.select = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.core.ListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.addItem = function(oItem) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.ux3.FacetFilterList</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FacetFilterList</code> itself.
 * 
 * On Select event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FacetFilterList</code> itself
 * 
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.destroyItems = function() { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.ux3.FacetFilterList</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Creates a new subclass of class sap.ui.ux3.FacetFilterList with name <code>sClassName</code>
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
sap.ui.ux3.FacetFilterList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:select select} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of the FacetFilterList taht fires the event.
 * @param {int[]} [mParameters.selectedIndices] Array of selected Indices.
 * @param {sap.ui.core.ListItem[]} [mParameters.selectedItems] Array of selected Items.
 * @param {boolean} [mParameters.all] If it is true, then Item All is selected. That means all items in the list are selected - no filter is set.
 * 
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.fireSelect = function(mParameters) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
 * 
 * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>displaySecondaryValues</code>
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getDisplaySecondaryValues = function() { return false; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The filter values that are presented as a list.
 * 
 * @returns {sap.ui.core.ListItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.FacetFilterList.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.FacetFilterList.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMultiSelect multiSelect}.
 * 
 * Specifies whether multiple or single selection is used.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>multiSelect</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getMultiSelect = function() { return false; };

/**
 * Gets current value of property {@link #getSelectedKeys selectedKeys}.
 * 
 * Array of type string containing the selected keys.
 * 
 * @returns {string[]} Value of property <code>selectedKeys</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getSelectedKeys = function() { return new Array(); };

/**
 * Gets current value of property {@link #getShowCounter showCounter}.
 * 
 * Specifies whether the counter for all entries is shown.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showCounter</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getShowCounter = function() { return false; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of this list.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.ListItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.core.ListItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.ListItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.core.ListItem} vItem The item to remove or its index or id
 * @returns {sap.ui.core.ListItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.removeItem = function(vItem) { return new sap.ui.core.ListItem(); };

/**
 * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
 * 
 * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisplaySecondaryValues New value for property <code>displaySecondaryValues</code>
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Sets a new value for property {@link #getMultiSelect multiSelect}.
 * 
 * Specifies whether multiple or single selection is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bMultiSelect New value for property <code>multiSelect</code>
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setMultiSelect = function(bMultiSelect) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Sets a new value for property {@link #getSelectedKeys selectedKeys}.
 * 
 * Array of type string containing the selected keys.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string[]} sSelectedKeys New value for property <code>selectedKeys</code>
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setSelectedKeys = function(sSelectedKeys) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Sets a new value for property {@link #getShowCounter showCounter}.
 * 
 * Specifies whether the counter for all entries is shown.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowCounter New value for property <code>showCounter</code>
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setShowCounter = function(bShowCounter) { return new sap.ui.ux3.FacetFilterList(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of this list.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.FacetFilterList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FacetFilterList.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.FacetFilterList(); };


// ---- sap.ui.ux3.Feed --------------------------------------------------------------------------

/**
 * Constructor for a new Feed.
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
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getLive live} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterItems filterItems} : sap.ui.core.ListItem[]</li>
 * <li>{@link #getChunks chunks} : sap.ui.ux3.FeedChunk[]</li>
 * <li>{@link #getToolsMenuItems toolsMenuItems} : sap.ui.commons.MenuItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chunkAdded chunkAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:toolsItemSelected toolsItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:toggleLive toggleLive} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A container control representing a full feed page, including feeder and updates.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @experimental Since version 1.2.
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * @deprecated Since version 1.38. Instead, use <b>any</b> <code>sap.ui.layout</code> container control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Feed = function(sId,mSettings) {};
/**
 * Event is fired when a new chunk is added
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.chunk New chunk
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.chunkAdded = function(oControlEvent) {  };

/**
 * Event is fired when the filter is changed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new/changed value of the filter
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.filterChange = function(oControlEvent) {  };

/**
 * Event is fired when the search function on SearchField is triggered
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.search = function(oControlEvent) {  };

/**
 * Event is fired when the live mode has changed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.live Current live indicator
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.toggleLive = function(oControlEvent) {  };

/**
 * Event is fired when an item from the tools MenuButton was selected
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The Id of the selected item
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.toolsItemSelected = function(oControlEvent) {  };

/**
 * Adds some chunk to the aggregation {@link #getChunks chunks}.
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.addChunk = function(oChunk) { return new sap.ui.ux3.Feed(); };

/**
 * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.addFilterItem = function(oFilterItem) { return new sap.ui.ux3.Feed(); };

/**
 * Adds some toolsMenuItem to the aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.addToolsMenuItem = function(oToolsMenuItem) { return new sap.ui.ux3.Feed(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chunkAdded chunkAdded} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.
 * 
 * Event is fired when a new chunk is added
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachChunkAdded = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:filterChange filterChange} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.
 * 
 * Event is fired when the filter is changed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachFilterChange = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.
 * 
 * Event is fired when the search function on SearchField is triggered
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toggleLive toggleLive} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.
 * 
 * Event is fired when the live mode has changed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachToggleLive = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toolsItemSelected toolsItemSelected} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Feed</code> itself.
 * 
 * Event is fired when an item from the tools MenuButton was selected
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code> itself
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.attachToolsItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Binds aggregation {@link #getChunks chunks} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.bindChunks = function(oBindingInfo) { return new sap.ui.ux3.Feed(); };

/**
 * Binds aggregation {@link #getFilterItems filterItems} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.bindFilterItems = function(oBindingInfo) { return new sap.ui.ux3.Feed(); };

/**
 * Binds aggregation {@link #getToolsMenuItems toolsMenuItems} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.bindToolsMenuItems = function(oBindingInfo) { return new sap.ui.ux3.Feed(); };

/**
 * Destroys all the chunks in the aggregation {@link #getChunks chunks}.
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.destroyChunks = function() { return new sap.ui.ux3.Feed(); };

/**
 * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.destroyFilterItems = function() { return new sap.ui.ux3.Feed(); };

/**
 * Destroys all the toolsMenuItems in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.destroyToolsMenuItems = function() { return new sap.ui.ux3.Feed(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chunkAdded chunkAdded} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachChunkAdded = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:filterChange filterChange} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachFilterChange = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toggleLive toggleLive} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachToggleLive = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toolsItemSelected toolsItemSelected} event of this <code>sap.ui.ux3.Feed</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.detachToolsItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Feed(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Feed with name <code>sClassName</code>
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
sap.ui.ux3.Feed.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:chunkAdded chunkAdded} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.ux3.FeedChunk} [mParameters.chunk] New chunk
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireChunkAdded = function(mParameters) { return new sap.ui.ux3.Feed(); };

/**
 * Fires event {@link #event:filterChange filterChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.newValue] The new/changed value of the filter
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireFilterChange = function(mParameters) { return new sap.ui.ux3.Feed(); };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.query] The search query
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireSearch = function(mParameters) { return new sap.ui.ux3.Feed(); };

/**
 * Fires event {@link #event:toggleLive toggleLive} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.live] Current live indicator
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireToggleLive = function(mParameters) { return new sap.ui.ux3.Feed(); };

/**
 * Fires event {@link #event:toolsItemSelected toolsItemSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.itemId] The Id of the selected item
 * @param {sap.ui.unified.MenuItemBase} [mParameters.item] The selected item
 * 
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feed.prototype.fireToolsItemSelected = function(mParameters) { return new sap.ui.ux3.Feed(); };

/**
 * Gets content of aggregation {@link #getChunks chunks}.
 * 
 * The chunks
 * 
 * @returns {sap.ui.ux3.FeedChunk[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getChunks = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFeederSender feederSender}.
 * 
 * The sender of the feeder
 * 
 * @returns {string} Value of property <code>feederSender</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFeederSender = function() { return ""; };

/**
 * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
 * 
 * The path to the thumbnail image used for the feeder
 * 
 * @returns {sap.ui.core.URI} Value of property <code>feederThumbnailSrc</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFeederThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getFilterItems filterItems}.
 * 
 * Items of the filter
 * 
 * @returns {sap.ui.core.ListItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFilterItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getLive live}.
 * 
 * Specifies whether the feed shall be in live mode
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>live</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getLive = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.ux3.Feed.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Feed.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title text of the Feed. If no text is entered "FEED" is displayed.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getTitle = function() { return ""; };

/**
 * Gets content of aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * 
 * MenuItems to open when the tool button is clicked by the user
 * 
 * @returns {sap.ui.commons.MenuItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getToolsMenuItems = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation {@link #getChunks chunks}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.FeedChunk}
 *           oChunk The chunk whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.indexOfChunk = function(oChunk) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation {@link #getFilterItems filterItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.ListItem}
 *           oFilterItem The filterItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.indexOfFilterItem = function(oFilterItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.MenuItem}
 *           oToolsMenuItem The toolsMenuItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.indexOfToolsMenuItem = function(oToolsMenuItem) { return 0; };

/**
 * Inserts a chunk into the aggregation {@link #getChunks chunks}.
 * 
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the chunk should be inserted at; for
 *              a negative value of <code>iIndex</code>, the chunk is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the chunk is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.insertChunk = function(oChunk,iIndex) { return new sap.ui.ux3.Feed(); };

/**
 * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
 * 
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filterItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filterItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.insertFilterItem = function(oFilterItem,iIndex) { return new sap.ui.ux3.Feed(); };

/**
 * Inserts a toolsMenuItem into the aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * 
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the toolsMenuItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the toolsMenuItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the toolsMenuItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.insertToolsMenuItem = function(oToolsMenuItem,iIndex) { return new sap.ui.ux3.Feed(); };

/**
 * Removes all the controls from the aggregation {@link #getChunks chunks}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.FeedChunk[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeAllChunks = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFilterItems filterItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.ListItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeAllFilterItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.commons.MenuItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeAllToolsMenuItems = function() { return new Array(); };

/**
 * Removes a chunk from the aggregation {@link #getChunks chunks}.
 * 
 * @param {int | string | sap.ui.ux3.FeedChunk} vChunk The chunk to remove or its index or id
 * @returns {sap.ui.ux3.FeedChunk} The removed chunk or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeChunk = function(vChunk) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
 * 
 * @param {int | string | sap.ui.core.ListItem} vFilterItem The filterItem to remove or its index or id
 * @returns {sap.ui.core.ListItem} The removed filterItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeFilterItem = function(vFilterItem) { return new sap.ui.core.ListItem(); };

/**
 * Removes a toolsMenuItem from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
 * 
 * @param {int | string | sap.ui.commons.MenuItem} vToolsMenuItem The toolsMenuItem to remove or its index or id
 * @returns {sap.ui.commons.MenuItem} The removed toolsMenuItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.removeToolsMenuItem = function(vToolsMenuItem) { return new sap.ui.commons.MenuItem(); };

/**
 * Sets a new value for property {@link #getFeederSender feederSender}.
 * 
 * The sender of the feeder
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFeederSender New value for property <code>feederSender</code>
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setFeederSender = function(sFeederSender) { return new sap.ui.ux3.Feed(); };

/**
 * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
 * 
 * The path to the thumbnail image used for the feeder
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sFeederThumbnailSrc New value for property <code>feederThumbnailSrc</code>
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) { return new sap.ui.ux3.Feed(); };

/**
 * Sets a new value for property {@link #getLive live}.
 * 
 * Specifies whether the feed shall be in live mode
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLive New value for property <code>live</code>
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setLive = function(bLive) { return new sap.ui.ux3.Feed(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title text of the Feed. If no text is entered "FEED" is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.Feed(); };

/**
 * Unbinds aggregation {@link #getChunks chunks} from model data.
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.unbindChunks = function() { return new sap.ui.ux3.Feed(); };

/**
 * Unbinds aggregation {@link #getFilterItems filterItems} from model data.
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.unbindFilterItems = function() { return new sap.ui.ux3.Feed(); };

/**
 * Unbinds aggregation {@link #getToolsMenuItems toolsMenuItems} from model data.
 * @returns {sap.ui.ux3.Feed} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.unbindToolsMenuItems = function() { return new sap.ui.ux3.Feed(); };


// ---- sap.ui.ux3.FeedChunk --------------------------------------------------------------------------

/**
 * Constructor for a new FeedChunk.
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
 * <li>{@link #getThumbnailSrc thumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getSender sender} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getDeletionAllowed deletionAllowed} : boolean (default: false)</li>
 * <li>{@link #getCommentChunk commentChunk} : boolean (default: false)</li>
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getFlagged flagged} : boolean (default: false)</li>
 * <li>{@link #getFavorite favorite} : boolean</li>
 * <li>{@link #getShared shared} : boolean (default: false)</li>
 * <li>{@link #getEnableFlag enableFlag} : boolean (default: true)</li>
 * <li>{@link #getEnableShare enableShare} : boolean (default: true)</li>
 * <li>{@link #getEnableComment enableComment} : boolean (default: true)</li>
 * <li>{@link #getEnableInspect enableInspect} : boolean (default: true)</li>
 * <li>{@link #getEnableFavorite enableFavorite} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getComments comments} : sap.ui.ux3.FeedChunk[]</li>
 * <li>{@link #getActionMenuItems actionMenuItems} : sap.ui.commons.MenuItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:deleted deleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:commentAdded commentAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:toggleFlagged toggleFlagged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:senderClicked senderClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:referenceClicked referenceClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:toggleFavorite toggleFavorite} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:inspect inspect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:toggleShared toggleShared} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:actionItemSelected actionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The unit that is embedded - single-wise or in a multiple way - into a Feed control.
 * The control provides a set of properties for text, sender information, time stamp,
 * comments, and functions such as flagging the entry to be favorite, shared, or flagged.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @experimental Since version 1.2.
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.FeedListItem</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.FeedChunk = function(sId,mSettings) {};
/**
 * Event is fired when an item from the action menu button was selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The Id of the selected item
 * @param {sap.ui.unified.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.actionItemSelected = function(oControlEvent) {  };

/**
 * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.comment New comment chunk
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.commentAdded = function(oControlEvent) {  };

/**
 * Event is fired when the deletion button is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.deleted = function(oControlEvent) {  };

/**
 * Event is fired when the inspect button was pressed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.inspect = function(oControlEvent) {  };

/**
 * Click on a @-reference
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Text of the @-reference
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.referenceClicked = function(oControlEvent) {  };

/**
 * Event is fired when the thumbnail or the name of the sender is clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.senderClicked = function(oControlEvent) {  };

/**
 * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.favorite Current favorite state
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.toggleFavorite = function(oControlEvent) {  };

/**
 * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.flagged Current flagged state
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.toggleFlagged = function(oControlEvent) {  };

/**
 * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.shareed Current shared state
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.toggleShared = function(oControlEvent) {  };

/**
 * Adds some actionMenuItem to the aggregation {@link #getActionMenuItems actionMenuItems}.
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.addActionMenuItem = function(oActionMenuItem) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Adds some comment to the aggregation {@link #getComments comments}.
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.addComment = function(oComment) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:actionItemSelected actionItemSelected} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is fired when an item from the action menu button was selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachActionItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:commentAdded commentAdded} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachCommentAdded = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:deleted deleted} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is fired when the deletion button is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachDeleted = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:inspect inspect} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is fired when the inspect button was pressed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachInspect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:referenceClicked referenceClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Click on a @-reference
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachReferenceClicked = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:senderClicked senderClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is fired when the thumbnail or the name of the sender is clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachSenderClicked = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toggleFavorite toggleFavorite} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleFavorite = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toggleFlagged toggleFlagged} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleFlagged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:toggleShared toggleShared} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.FeedChunk</code> itself.
 * 
 * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code> itself
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleShared = function(oData,fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Binds aggregation {@link #getActionMenuItems actionMenuItems} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.bindActionMenuItems = function(oBindingInfo) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Binds aggregation {@link #getComments comments} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.bindComments = function(oBindingInfo) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Destroys all the actionMenuItems in the aggregation {@link #getActionMenuItems actionMenuItems}.
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.destroyActionMenuItems = function() { return new sap.ui.ux3.FeedChunk(); };

/**
 * Destroys all the comments in the aggregation {@link #getComments comments}.
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.destroyComments = function() { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:actionItemSelected actionItemSelected} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachActionItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:commentAdded commentAdded} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachCommentAdded = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:deleted deleted} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachDeleted = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:inspect inspect} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachInspect = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:referenceClicked referenceClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachReferenceClicked = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:senderClicked senderClicked} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachSenderClicked = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toggleFavorite toggleFavorite} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleFavorite = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toggleFlagged toggleFlagged} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleFlagged = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:toggleShared toggleShared} event of this <code>sap.ui.ux3.FeedChunk</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleShared = function(fnFunction,oListener) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Creates a new subclass of class sap.ui.ux3.FeedChunk with name <code>sClassName</code>
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
sap.ui.ux3.FeedChunk.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:actionItemSelected actionItemSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.itemId] The Id of the selected item
 * @param {sap.ui.unified.MenuItemBase} [mParameters.item] The selected item
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireActionItemSelected = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:commentAdded commentAdded} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.ux3.FeedChunk} [mParameters.comment] New comment chunk
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireCommentAdded = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:deleted deleted} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireDeleted = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:inspect inspect} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireInspect = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:referenceClicked referenceClicked} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.text] Text of the @-reference
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireReferenceClicked = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:senderClicked senderClicked} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireSenderClicked = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:toggleFavorite toggleFavorite} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.favorite] Current favorite state
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleFavorite = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:toggleFlagged toggleFlagged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.flagged] Current flagged state
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleFlagged = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Fires event {@link #event:toggleShared toggleShared} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.shareed] Current shared state
 * 
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleShared = function(mParameters) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Gets content of aggregation {@link #getActionMenuItems actionMenuItems}.
 * 
 * MenuItems to open when there is a click on the action menu button
 * 
 * @returns {sap.ui.commons.MenuItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getActionMenuItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getCommentChunk commentChunk}.
 * 
 * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments,
 * furthermore it must be assigned to a FeedChunk.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>commentChunk</code>
 * 
 * @deprecated Since version 1.4.0.
 * Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment.
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getCommentChunk = function() { return false; };

/**
 * Gets content of aggregation {@link #getComments comments}.
 * 
 * Comments on this chunk
 * 
 * @returns {sap.ui.ux3.FeedChunk[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getComments = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDeletionAllowed deletionAllowed}.
 * 
 * Flag if the deletion of the chunk shall be allowed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>deletionAllowed</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getDeletionAllowed = function() { return false; };

/**
 * Gets current value of property {@link #getEnableComment enableComment}.
 * 
 * If true the comment action is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableComment</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableComment = function() { return false; };

/**
 * Gets current value of property {@link #getEnableFavorite enableFavorite}.
 * 
 * If true the favorite action is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableFavorite</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableFavorite = function() { return false; };

/**
 * Gets current value of property {@link #getEnableFlag enableFlag}.
 * 
 * If true the flag action is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableFlag</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableFlag = function() { return false; };

/**
 * Gets current value of property {@link #getEnableInspect enableInspect}.
 * 
 * If true the inspect action is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableInspect</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableInspect = function() { return false; };

/**
 * Gets current value of property {@link #getEnableShare enableShare}.
 * 
 * If true the share action is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableShare</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getEnableShare = function() { return false; };

/**
 * Gets current value of property {@link #getFavorite favorite}.
 * 
 * Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.
 * 
 * @returns {boolean} Value of property <code>favorite</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFavorite = function() { return false; };

/**
 * Gets current value of property {@link #getFeederSender feederSender}.
 * 
 * Sender for the comment feeder
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 * 
 * @returns {string} Value of property <code>feederSender</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFeederSender = function() { return ""; };

/**
 * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
 * 
 * URL to the thumbnail image for the comment feeder.
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>feederThumbnailSrc</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFeederThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getFlagged flagged}.
 * 
 * Defines whether the entry is flagged. This property is not supported for comment chunks.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>flagged</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFlagged = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.ux3.FeedChunk.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.FeedChunk.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSender sender}.
 * 
 * Sender of the chunk
 * 
 * @returns {string} Value of property <code>sender</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getSender = function() { return ""; };

/**
 * Gets current value of property {@link #getShared shared}.
 * 
 * Defines whether the entry shall be shared. This property is not supported for comment chunks.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>shared</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getShared = function() { return false; };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * The FeedChunk text. @References are supported.
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
 * 
 * URL to the thumbnail image.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>thumbnailSrc</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getTimestamp timestamp}.
 * 
 * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
 * 
 * @returns {string} Value of property <code>timestamp</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getTimestamp = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation {@link #getActionMenuItems actionMenuItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.MenuItem}
 *           oActionMenuItem The actionMenuItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.indexOfActionMenuItem = function(oActionMenuItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation {@link #getComments comments}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.FeedChunk}
 *           oComment The comment whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.indexOfComment = function(oComment) { return 0; };

/**
 * Inserts a actionMenuItem into the aggregation {@link #getActionMenuItems actionMenuItems}.
 * 
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the actionMenuItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the actionMenuItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the actionMenuItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.insertActionMenuItem = function(oActionMenuItem,iIndex) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Inserts a comment into the aggregation {@link #getComments comments}.
 * 
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the comment should be inserted at; for
 *              a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the comment is inserted at
 *              the last position
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.insertComment = function(oComment,iIndex) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Removes a actionMenuItem from the aggregation {@link #getActionMenuItems actionMenuItems}.
 * 
 * @param {int | string | sap.ui.commons.MenuItem} vActionMenuItem The actionMenuItem to remove or its index or id
 * @returns {sap.ui.commons.MenuItem} The removed actionMenuItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeActionMenuItem = function(vActionMenuItem) { return new sap.ui.commons.MenuItem(); };

/**
 * Removes all the controls from the aggregation {@link #getActionMenuItems actionMenuItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.commons.MenuItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeAllActionMenuItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getComments comments}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.FeedChunk[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeAllComments = function() { return new Array(); };

/**
 * Removes a comment from the aggregation {@link #getComments comments}.
 * 
 * @param {int | string | sap.ui.ux3.FeedChunk} vComment The comment to remove or its index or id
 * @returns {sap.ui.ux3.FeedChunk} The removed comment or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.removeComment = function(vComment) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getCommentChunk commentChunk}.
 * 
 * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments,
 * furthermore it must be assigned to a FeedChunk.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bCommentChunk New value for property <code>commentChunk</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.4.0.
 * Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment.
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setCommentChunk = function(bCommentChunk) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getDeletionAllowed deletionAllowed}.
 * 
 * Flag if the deletion of the chunk shall be allowed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDeletionAllowed New value for property <code>deletionAllowed</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setDeletionAllowed = function(bDeletionAllowed) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getEnableComment enableComment}.
 * 
 * If true the comment action is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableComment New value for property <code>enableComment</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableComment = function(bEnableComment) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getEnableFavorite enableFavorite}.
 * 
 * If true the favorite action is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableFavorite New value for property <code>enableFavorite</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableFavorite = function(bEnableFavorite) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getEnableFlag enableFlag}.
 * 
 * If true the flag action is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableFlag New value for property <code>enableFlag</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableFlag = function(bEnableFlag) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getEnableInspect enableInspect}.
 * 
 * If true the inspect action is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableInspect New value for property <code>enableInspect</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableInspect = function(bEnableInspect) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getEnableShare enableShare}.
 * 
 * If true the share action is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableShare New value for property <code>enableShare</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setEnableShare = function(bEnableShare) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getFavorite favorite}.
 * 
 * Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bFavorite New value for property <code>favorite</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFavorite = function(bFavorite) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getFeederSender feederSender}.
 * 
 * Sender for the comment feeder
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFeederSender New value for property <code>feederSender</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFeederSender = function(sFeederSender) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
 * 
 * URL to the thumbnail image for the comment feeder.
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sFeederThumbnailSrc New value for property <code>feederThumbnailSrc</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getFlagged flagged}.
 * 
 * Defines whether the entry is flagged. This property is not supported for comment chunks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFlagged New value for property <code>flagged</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setFlagged = function(bFlagged) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getSender sender}.
 * 
 * Sender of the chunk
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSender New value for property <code>sender</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setSender = function(sSender) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getShared shared}.
 * 
 * Defines whether the entry shall be shared. This property is not supported for comment chunks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShared New value for property <code>shared</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setShared = function(bShared) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * The FeedChunk text. @References are supported.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setText = function(sText) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
 * 
 * URL to the thumbnail image.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sThumbnailSrc New value for property <code>thumbnailSrc</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setThumbnailSrc = function(sThumbnailSrc) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Sets a new value for property {@link #getTimestamp timestamp}.
 * 
 * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTimestamp New value for property <code>timestamp</code>
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.setTimestamp = function(sTimestamp) { return new sap.ui.ux3.FeedChunk(); };

/**
 * Unbinds aggregation {@link #getActionMenuItems actionMenuItems} from model data.
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.unbindActionMenuItems = function() { return new sap.ui.ux3.FeedChunk(); };

/**
 * Unbinds aggregation {@link #getComments comments} from model data.
 * @returns {sap.ui.ux3.FeedChunk} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.unbindComments = function() { return new sap.ui.ux3.FeedChunk(); };


// ---- sap.ui.ux3.Feeder --------------------------------------------------------------------------

/**
 * Constructor for a new Feeder.
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
 * <li>{@link #getThumbnailSrc thumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.ui.ux3.FeederType (default: Large)</li>
 * <li>{@link #getPlaceholderText placeholderText} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This feed control flavor represents a lean common feed, or a comment feed, with a text commit function.
 * The control can be used stand alone or in a multiple way, and generally would be integrated directly into a UIArea.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @experimental Since version 1.2.
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.FeedInput</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Feeder = function(sId,mSettings) {};
/**
 * Event is fired when the entered text is submitted
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The text that is submitted
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.submit = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:submit submit} event of this <code>sap.ui.ux3.Feeder</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Feeder</code> itself.
 * 
 * Event is fired when the entered text is submitted
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feeder</code> itself
 * 
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Feeder(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:submit submit} event of this <code>sap.ui.ux3.Feeder</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.Feeder(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Feeder with name <code>sClassName</code>
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
sap.ui.ux3.Feeder.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:submit submit} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.text] The text that is submitted
 * 
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Feeder.prototype.fireSubmit = function(mParameters) { return new sap.ui.ux3.Feeder(); };

/**
 * Returns a metadata object for class sap.ui.ux3.Feeder.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Feeder.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPlaceholderText placeholderText}.
 * 
 * This property could be used for costum placeholder. If it is not set, the default text is used.
 * 
 * @returns {string} Value of property <code>placeholderText</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getPlaceholderText = function() { return ""; };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * The text for the Feeder. @References are supported.
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
 * 
 * URL to the thumb nail image
 * This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>thumbnailSrc</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getThumbnailSrc = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Type and size of the Feeder
 * 
 * Default value is <code>Large</code>.
 * @returns {sap.ui.ux3.FeederType} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getType = function() { return new sap.ui.ux3.FeederType(); };

/**
 * Sets a new value for property {@link #getPlaceholderText placeholderText}.
 * 
 * This property could be used for costum placeholder. If it is not set, the default text is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPlaceholderText New value for property <code>placeholderText</code>
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setPlaceholderText = function(sPlaceholderText) { return new sap.ui.ux3.Feeder(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * The text for the Feeder. @References are supported.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setText = function(sText) { return new sap.ui.ux3.Feeder(); };

/**
 * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
 * 
 * URL to the thumb nail image
 * This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sThumbnailSrc New value for property <code>thumbnailSrc</code>
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setThumbnailSrc = function(sThumbnailSrc) { return new sap.ui.ux3.Feeder(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Type and size of the Feeder
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Large</code>.
 * @param {sap.ui.ux3.FeederType} sType New value for property <code>type</code>
 * @returns {sap.ui.ux3.Feeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.setType = function(sType) { return new sap.ui.ux3.Feeder(); };


// ---- sap.ui.ux3.FeederType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.FeederType.toString = function() { return ""; };

// ---- sap.ui.ux3.FollowActionState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.FollowActionState.toString = function() { return ""; };

// ---- sap.ui.ux3.NavigationBar --------------------------------------------------------------------------

/**
 * Constructor for a new NavigationBar.
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
 * <li>{@link #getToplevelVariant toplevelVariant} : boolean (default: false)</li>
 * <li>{@link #getOverflowItemsToUpperCase overflowItemsToUpperCase} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.ux3.NavigationItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : (sap.ui.core.ID | sap.ui.ux3.NavigationItem)</li>
 * <li>{@link #getAssociatedItems associatedItems} : (sap.ui.core.ID | sap.ui.ux3.NavigationItem)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Provides enhanced navigation capabilities and is the parent control of NavigationItem. It is displayed in the form of a horizontal line
 * with switching markers depending on the currently selected item. The size of an item which is currently chosen by the user is enlarged. In the case
 * that a large number of items are defined for the bar, this is made transparent to the user by showing symbols for scrolling options (forwards and backwards)
 * to see the next or previous items.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.IconTabBar</code>, <code>sap.m.TabContainer</code> or <code>sap.uxap.ObjectPageLayout</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.NavigationBar = function(sId,mSettings) {};
/**
 * Event is fired when an item is selected by the user
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.itemId The ID of the newly selected NavigationItem.
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The newly selected NavigationItem.
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.select = function(oControlEvent) {  };

/**
 * Adds some associatedItem into the association {@link #getAssociatedItems associatedItems}.
 * 
 * @param {sap.ui.core.ID | sap.ui.ux3.NavigationItem} vAssociatedItem the associatedItems to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.addAssociatedItem = function(vAssociatedItem) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.ux3.NavigationItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.addItem = function(oItem) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.ux3.NavigationBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.NavigationBar</code> itself.
 * 
 * Event is fired when an item is selected by the user
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NavigationBar</code> itself
 * 
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.destroyItems = function() { return new sap.ui.ux3.NavigationBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.ux3.NavigationBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Creates a new subclass of class sap.ui.ux3.NavigationBar with name <code>sClassName</code>
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
sap.ui.ux3.NavigationBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:select select} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.itemId] The ID of the newly selected NavigationItem.
 * @param {sap.ui.ux3.NavigationItem} [mParameters.item] The newly selected NavigationItem.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.NavigationBar.prototype.fireSelect = function(mParameters) { return false; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAssociatedItems associatedItems}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getAssociatedItems = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems association can be used.
 * The NavigationBar follows the approach to use the items aggregation. If this aggregation is empty, associatedItems is used.
 * 
 * @returns {sap.ui.ux3.NavigationItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.NavigationBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.NavigationBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
 * 
 * Sets the appearance of the menu items in the overflow menu to uppercase
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>overflowItemsToUpperCase</code>
 * @since 1.36
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getOverflowItemsToUpperCase = function() { return false; };

/**
 * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getSelectedItem = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getToplevelVariant toplevelVariant}.
 * 
 * Defines whether the navigation bar shall have top-level appearance
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>toplevelVariant</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.getToplevelVariant = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.ux3.NavigationItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if the aggregation is empty, in the associatedItems association.
 * 
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.NavigationBar.prototype.isSelectedItemValid = function() { return false; };

/**
 * Removes all the controls in the association named {@link #getAssociatedItems associatedItems}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeAllAssociatedItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.NavigationItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an associatedItem from the association named {@link #getAssociatedItems associatedItems}.
 * @param {int | sap.ui.core.ID | sap.ui.ux3.NavigationItem} vAssociatedItem The associatedItem to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed associatedItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeAssociatedItem = function(vAssociatedItem) { return new sap.ui.core.ID(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.ux3.NavigationItem} vItem The item to remove or its index or id
 * @returns {sap.ui.ux3.NavigationItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.removeItem = function(vItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Replaces the currently associated items with the ones in the given array
 * 
 * @param {sap.ui.ux3.NavigationItem[]} aItems
 *         The items to associate
 * @type sap.ui.ux3.NavigationBar
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setAssociatedItems = function(aItems) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Sets a new value for property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
 * 
 * Sets the appearance of the menu items in the overflow menu to uppercase
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bOverflowItemsToUpperCase New value for property <code>overflowItemsToUpperCase</code>
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setOverflowItemsToUpperCase = function(bOverflowItemsToUpperCase) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Sets the associated {@link #getSelectedItem selectedItem}.
 * @param {sap.ui.core.ID | sap.ui.ux3.NavigationItem} oSelectedItem ID of an element which becomes the new target of this selectedItem association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setSelectedItem = function(oSelectedItem) { return new sap.ui.ux3.NavigationBar(); };

/**
 * Sets a new value for property {@link #getToplevelVariant toplevelVariant}.
 * 
 * Defines whether the navigation bar shall have top-level appearance
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bToplevelVariant New value for property <code>toplevelVariant</code>
 * @returns {sap.ui.ux3.NavigationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationBar.prototype.setToplevelVariant = function(bToplevelVariant) { return new sap.ui.ux3.NavigationBar(); };


// ---- sap.ui.ux3.NavigationItem --------------------------------------------------------------------------

/**
 * Constructor for a new NavigationItem.
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
 * <li>{@link #getHref href} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubItems subItems} : sap.ui.ux3.NavigationItem[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Is the item to be used within the NavigationBar
 * @extends sap.ui.core.Item
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.IconTabBar</code>, <code>sap.m.TabContainer</code> or <code>sap.uxap.ObjectPageLayout</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.NavigationItem = function(sId,mSettings) {};
/**
 * Adds some subItem to the aggregation {@link #getSubItems subItems}.
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.NavigationItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.addSubItem = function(oSubItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Destroys all the subItems in the aggregation {@link #getSubItems subItems}.
 * @returns {sap.ui.ux3.NavigationItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.destroySubItems = function() { return new sap.ui.ux3.NavigationItem(); };

/**
 * Creates a new subclass of class sap.ui.ux3.NavigationItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.ux3.NavigationItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getHref href}.
 * 
 * Defines the link target URL. This property is optional and should only be set when required!
 * The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application's responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).
 * 
 * @returns {sap.ui.core.URI} Value of property <code>href</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.getHref = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.ux3.NavigationItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.NavigationItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getSubItems subItems}.
 * 
 * Any NavigationItems on the next hierarchy level connected to this NavigationItem
 * 
 * @returns {sap.ui.ux3.NavigationItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.getSubItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getSubItems subItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *           oSubItem The subItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.indexOfSubItem = function(oSubItem) { return 0; };

/**
 * Inserts a subItem into the aggregation {@link #getSubItems subItems}.
 * 
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the subItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the subItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the subItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.NavigationItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.insertSubItem = function(oSubItem,iIndex) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Removes all the controls from the aggregation {@link #getSubItems subItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.NavigationItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.removeAllSubItems = function() { return new Array(); };

/**
 * Removes a subItem from the aggregation {@link #getSubItems subItems}.
 * 
 * @param {int | string | sap.ui.ux3.NavigationItem} vSubItem The subItem to remove or its index or id
 * @returns {sap.ui.ux3.NavigationItem} The removed subItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.removeSubItem = function(vSubItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Sets a new value for property {@link #getHref href}.
 * 
 * Defines the link target URL. This property is optional and should only be set when required!
 * The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application's responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sHref New value for property <code>href</code>
 * @returns {sap.ui.ux3.NavigationItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.setHref = function(sHref) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.ux3.NavigationItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.NavigationItem.prototype.setVisible = function(bVisible) { return new sap.ui.ux3.NavigationItem(); };


// ---- sap.ui.ux3.NotificationBar --------------------------------------------------------------------------

/**
 * Constructor for a new NotificationBar.
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
 * <li>{@link #getVisibleStatus visibleStatus} : sap.ui.ux3.NotificationBarStatus (default: Default)</li>
 * <li>{@link #getResizeEnabled resizeEnabled} : boolean (default: true)</li>
 * <li>{@link #getAlwaysShowToggler alwaysShowToggler} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMessageNotifier messageNotifier} : sap.ui.core.Element</li>
 * <li>{@link #getNotifiers notifiers} : sap.ui.core.Element[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:display display} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A NotificationBar is a "toolbar" that can be added to a page to show messages and notifications from the application.
 * Its position, height and width is inherited from the element that the notification bar is added to.
 * The NotificationBar uses position: fixed; to always stay at the bottom of the screen. This CSS may sometimes cause
 * issues when nested deeply inside other controls. To have a proper behavior of the NotificationBar use it as high
 * in the control hierarchy as possible.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.7.0
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.MessagePopover</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.NotificationBar = function(sId,mSettings) {};
/**
 * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.show Indicates if the bar wants to be shown or hidden
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.display = function(oControlEvent) {  };

/**
 * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event.
 * @event
 * @since 1.12.2
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.ux3.NotificationBarStatus} oControlEvent.getParameters.status The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file.
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.resize = function(oControlEvent) {  };

/**
 * Adds some notifier to the aggregation {@link #getNotifiers notifiers}.
 * @param {sap.ui.core.Element}
 *            oNotifier the notifier to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.addNotifier = function(oNotifier) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:display display} event of this <code>sap.ui.ux3.NotificationBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.NotificationBar</code> itself.
 * 
 * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code> itself
 * 
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.attachDisplay = function(oData,fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:resize resize} event of this <code>sap.ui.ux3.NotificationBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.NotificationBar</code> itself.
 * 
 * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code> itself
 * 
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.ui.ux3.NotificationBar.prototype.attachResize = function(oData,fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Destroys the messageNotifier in the aggregation {@link #getMessageNotifier messageNotifier}.
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.destroyMessageNotifier = function() { return new sap.ui.ux3.NotificationBar(); };

/**
 * Destroys all the notifiers in the aggregation {@link #getNotifiers notifiers}.
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.destroyNotifiers = function() { return new sap.ui.ux3.NotificationBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:display display} event of this <code>sap.ui.ux3.NotificationBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.detachDisplay = function(fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:resize resize} event of this <code>sap.ui.ux3.NotificationBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.2
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.detachResize = function(fnFunction,oListener) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Creates a new subclass of class sap.ui.ux3.NotificationBar with name <code>sClassName</code>
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
sap.ui.ux3.NotificationBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:display display} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.show] Indicates if the bar wants to be shown or hidden
 * 
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.NotificationBar.prototype.fireDisplay = function(mParameters) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Fires event {@link #event:resize resize} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.ux3.NotificationBarStatus} [mParameters.status] The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file.
 * 
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.12.2
 * 
 */
sap.ui.ux3.NotificationBar.prototype.fireResize = function(mParameters) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Gets current value of property {@link #getAlwaysShowToggler alwaysShowToggler}.
 * 
 * This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>alwaysShowToggler</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getAlwaysShowToggler = function() { return false; };

/**
 * Gets content of aggregation {@link #getMessageNotifier messageNotifier}.
 * 
 * Notifier that shows messages
 * 
 * @returns {sap.ui.core.Element}
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getMessageNotifier = function() { return new sap.ui.core.Element(); };

/**
 * Returns a metadata object for class sap.ui.ux3.NotificationBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.NotificationBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNotifiers notifiers}.
 * 
 * Notifiers that monitor something within the application and display the corresponding notifications.
 * 
 * @returns {sap.ui.core.Element[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getNotifiers = function() { return new Array(); };

/**
 * Gets current value of property {@link #getResizeEnabled resizeEnabled}.
 * 
 * This property enables the bar to be resized by the user.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>resizeEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getResizeEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getVisibleStatus visibleStatus}.
 * 
 * This property displays the bar corresponding to given status
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.ux3.NotificationBarStatus} Value of property <code>visibleStatus</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.getVisibleStatus = function() { return new sap.ui.ux3.NotificationBarStatus(); };

/**
 * This method checks if the NotificationBar has any items (notifications or messages) to show and returns true if there are any items to show. So the application should decide if the bar should be displayed.
 * 
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.NotificationBar.prototype.hasItems = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getNotifiers notifiers}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *           oNotifier The notifier whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.indexOfNotifier = function(oNotifier) { return 0; };

/**
 * Inserts a notifier into the aggregation {@link #getNotifiers notifiers}.
 * 
 * @param {sap.ui.core.Element}
 *            oNotifier the notifier to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the notifier should be inserted at; for
 *              a negative value of <code>iIndex</code>, the notifier is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the notifier is inserted at
 *              the last position
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.insertNotifier = function(oNotifier,iIndex) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Removes all the controls from the aggregation {@link #getNotifiers notifiers}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Element[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.removeAllNotifiers = function() { return new Array(); };

/**
 * Removes a notifier from the aggregation {@link #getNotifiers notifiers}.
 * 
 * @param {int | string | sap.ui.core.Element} vNotifier The notifier to remove or its index or id
 * @returns {sap.ui.core.Element} The removed notifier or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.removeNotifier = function(vNotifier) { return new sap.ui.core.Element(); };

/**
 * @param {boolean}
 *            bAlwaysShow if the toggler should be visible all the time
 *            set this parameter to <b>true</b>
 * @public
 * @since 1.22.11
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setAlwaysShowToggler = function(bAlwaysShow) {  };

/**
 * Sets the aggregated {@link #getMessageNotifier messageNotifier}.
 * @param {sap.ui.core.Element} oMessageNotifier The messageNotifier to set
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setMessageNotifier = function(oMessageNotifier) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Sets a new value for property {@link #getResizeEnabled resizeEnabled}.
 * 
 * This property enables the bar to be resized by the user.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResizeEnabled New value for property <code>resizeEnabled</code>
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setResizeEnabled = function(bResizeEnabled) { return new sap.ui.ux3.NotificationBar(); };

/**
 * Sets a new value for property {@link #getVisibleStatus visibleStatus}.
 * 
 * This property displays the bar corresponding to given status
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default</code>.
 * @param {sap.ui.ux3.NotificationBarStatus} sVisibleStatus New value for property <code>visibleStatus</code>
 * @returns {sap.ui.ux3.NotificationBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.NotificationBar.prototype.setVisibleStatus = function(sVisibleStatus) { return new sap.ui.ux3.NotificationBar(); };


// ---- sap.ui.ux3.NotificationBarStatus --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.NotificationBarStatus.toString = function() { return ""; };

// ---- sap.ui.ux3.Notifier --------------------------------------------------------------------------

/**
 * Constructor for a new Notifier.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMessages messages} : sap.ui.core.Message[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:messageSelected messageSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This element can be docked to a notification bar to show notification items
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Notifier = function(sId,mSettings) {};
/**
 * Event is fired when a message of the notifiers was selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Message} oControlEvent.getParameters.message The message that was selected
 * @param {sap.ui.ux3.Notifier} oControlEvent.getParameters.notifier The notifier that contains the selected message
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.messageSelected = function(oControlEvent) {  };

/**
 * Adds some message to the aggregation {@link #getMessages messages}.
 * @param {sap.ui.core.Message}
 *            oMessage the message to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.addMessage = function(oMessage) { return new sap.ui.ux3.Notifier(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:messageSelected messageSelected} event of this <code>sap.ui.ux3.Notifier</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Notifier</code> itself.
 * 
 * Event is fired when a message of the notifiers was selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Notifier</code> itself
 * 
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.attachMessageSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Notifier(); };

/**
 * Destroys all the messages in the aggregation {@link #getMessages messages}.
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.destroyMessages = function() { return new sap.ui.ux3.Notifier(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:messageSelected messageSelected} event of this <code>sap.ui.ux3.Notifier</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.detachMessageSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Notifier(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Notifier with name <code>sClassName</code>
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
sap.ui.ux3.Notifier.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:messageSelected messageSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Message} [mParameters.message] The message that was selected
 * @param {sap.ui.ux3.Notifier} [mParameters.notifier] The notifier that contains the selected message
 * 
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Notifier.prototype.fireMessageSelected = function(mParameters) { return new sap.ui.ux3.Notifier(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon of the control that should be displayed within the corresponding bar
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getMessages messages}.
 * 
 * Messages of this notifier.
 * 
 * @returns {sap.ui.core.Message[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.getMessages = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.Notifier.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Notifier.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Defines the title that should be displayed within the opening popup
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.getTitle = function() { return ""; };

/**
 * This method checks if the notifier has any items.
 * 
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Notifier.prototype.hasItems = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Message</code> in the aggregation {@link #getMessages messages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Message}
 *           oMessage The message whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.indexOfMessage = function(oMessage) { return 0; };

/**
 * Inserts a message into the aggregation {@link #getMessages messages}.
 * 
 * @param {sap.ui.core.Message}
 *            oMessage the message to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the message should be inserted at; for
 *              a negative value of <code>iIndex</code>, the message is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the message is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.insertMessage = function(oMessage,iIndex) { return new sap.ui.ux3.Notifier(); };

/**
 * Removes all the controls from the aggregation {@link #getMessages messages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Message[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.removeAllMessages = function() { return new Array(); };

/**
 * Removes a message from the aggregation {@link #getMessages messages}.
 * 
 * @param {int | string | sap.ui.core.Message} vMessage The message to remove or its index or id
 * @returns {sap.ui.core.Message} The removed message or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.removeMessage = function(vMessage) { return new sap.ui.core.Message(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Icon of the control that should be displayed within the corresponding bar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.Notifier(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Defines the title that should be displayed within the opening popup
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.Notifier} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Notifier.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.Notifier(); };


// ---- sap.ui.ux3.Overlay --------------------------------------------------------------------------

/**
 * Constructor for a new Overlay.
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
 * <li>{@link #getOpenButtonVisible openButtonVisible} : boolean (default: true)</li>
 * <li>{@link #getCloseButtonVisible closeButtonVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:openNew openNew} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Overlay Control
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Overlay = function(sId,mSettings) {};
/**
 * Event is fired when the Overlay starts closing.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the Overlay instance.
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.close = function(oControlEvent) {  };

/**
 * Event is fired when the Overlay is closed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the Overlay instance.
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.closed = function(oControlEvent) {  };

/**
 * Event is fired when the Overlay is opened.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the Overlay instance
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.open = function(oControlEvent) {  };

/**
 * Event is fired when the 'Open' button of the Overlay is clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the Overlay instance.
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.openNew = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:close close} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.
 * 
 * Event is fired when the Overlay starts closing.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself
 * 
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:closed closed} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.
 * 
 * Event is fired when the Overlay is closed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself
 * 
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachClosed = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:open open} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.
 * 
 * Event is fired when the Overlay is opened.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself
 * 
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachOpen = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:openNew openNew} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Overlay</code> itself.
 * 
 * Event is fired when the 'Open' button of the Overlay is clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code> itself
 * 
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.attachOpenNew = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Closes the Overlay.
 * 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Overlay.prototype.close = function() {  };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:close close} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:closed closed} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachClosed = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:open open} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachOpen = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:openNew openNew} event of this <code>sap.ui.ux3.Overlay</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.detachOpenNew = function(fnFunction,oListener) { return new sap.ui.ux3.Overlay(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Overlay with name <code>sClassName</code>
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
sap.ui.ux3.Overlay.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:close close} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The ID of the Overlay instance.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireClose = function(mParameters) { return false; };

/**
 * Fires event {@link #event:closed closed} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The ID of the Overlay instance.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireClosed = function(mParameters) { return false; };

/**
 * Fires event {@link #event:open open} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The ID of the Overlay instance
 * 
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireOpen = function(mParameters) { return new sap.ui.ux3.Overlay(); };

/**
 * Fires event {@link #event:openNew openNew} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The ID of the Overlay instance.
 * 
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Overlay.prototype.fireOpenNew = function(mParameters) { return new sap.ui.ux3.Overlay(); };

/**
 * Gets current value of property {@link #getCloseButtonVisible closeButtonVisible}.
 * 
 * Defines whether the 'Close' button shall be visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>closeButtonVisible</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.getCloseButtonVisible = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.ux3.Overlay.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Overlay.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOpenButtonVisible openButtonVisible}.
 * 
 * Defines whether the 'Open' button shall be visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>openButtonVisible</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.getOpenButtonVisible = function() { return false; };

/**
 * Checks whether Overlay is open.
 * 
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Overlay.prototype.isOpen = function() { return false; };

/**
 * Opens the Overlay.
 * 
 * @param {string} initialFocusId ID of the control that gets focused when the overlay is openend
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Overlay.prototype.open = function(initialFocusId) {  };

/**
 * Sets a new value for property {@link #getCloseButtonVisible closeButtonVisible}.
 * 
 * Defines whether the 'Close' button shall be visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bCloseButtonVisible New value for property <code>closeButtonVisible</code>
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.setCloseButtonVisible = function(bCloseButtonVisible) { return new sap.ui.ux3.Overlay(); };

/**
 * Sets a new value for property {@link #getOpenButtonVisible openButtonVisible}.
 * 
 * Defines whether the 'Open' button shall be visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bOpenButtonVisible New value for property <code>openButtonVisible</code>
 * @returns {sap.ui.ux3.Overlay} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.setOpenButtonVisible = function(bOpenButtonVisible) { return new sap.ui.ux3.Overlay(); };


// ---- sap.ui.ux3.OverlayContainer --------------------------------------------------------------------------

/**
 * Constructor for a new OverlayContainer.
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
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Is to be embedded into the Overlay control as content container
 * @extends sap.ui.ux3.Overlay
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.OverlayContainer = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.OverlayContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.addContent = function(oContent) { return new sap.ui.ux3.OverlayContainer(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.OverlayContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.destroyContent = function() { return new sap.ui.ux3.OverlayContainer(); };

/**
 * Creates a new subclass of class sap.ui.ux3.OverlayContainer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.ux3.OverlayContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Aggregation for content
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.OverlayContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.OverlayContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

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
sap.ui.ux3.OverlayContainer.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @returns {sap.ui.ux3.OverlayContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.OverlayContainer(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };


// ---- sap.ui.ux3.OverlayDialog --------------------------------------------------------------------------

/**
 * Constructor for a new OverlayDialog.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: auto)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given.
 * @param {object} [mSettings] Initial settings for the new control.
 * 
 * @class
 * Dialog implementation based on the Overlay. If used in a Shell it leaves the Tool-Palette, Pane-Bar and Header-Items accessible.
 * @extends sap.ui.ux3.Overlay
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.OverlayDialog = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.OverlayDialog} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.addContent = function(oContent) { return new sap.ui.ux3.OverlayDialog(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.OverlayDialog} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.destroyContent = function() { return new sap.ui.ux3.OverlayDialog(); };

/**
 * Creates a new subclass of class sap.ui.ux3.OverlayDialog with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.ux3.OverlayDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Content for the OverlayDialog.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Determines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay height.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.ux3.OverlayDialog.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.OverlayDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Determines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay width.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

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
sap.ui.ux3.OverlayDialog.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @returns {sap.ui.ux3.OverlayDialog} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.OverlayDialog(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * The height for the OverlayDialog.
 * 
 * @param {sap.ui.core.CSSSize} sHeight
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.setHeight = function(sHeight) {  };

/**
 * This Method is not supported for the OverlayDialog.
 * 
 * @param {boolean} bVisible
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.setOpenButtonVisible = function(bVisible) {  };

/**
 * The width for the OverlayDialog.
 * 
 * @param {sap.ui.core.CSSSize} sWidth
 * @public
 * 
 */
sap.ui.ux3.OverlayDialog.prototype.setWidth = function(sWidth) {  };


// ---- sap.ui.ux3.QuickView --------------------------------------------------------------------------

/**
 * Constructor for a new QuickView.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getFirstTitleHref firstTitleHref} : string</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getShowActionBar showActionBar} : boolean (default: true)</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getOpenActionEnabled openActionEnabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Element[]</li>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.CalloutBase#constructor sap.ui.commons.CalloutBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * QuickView is a small popup with a short overview of a Thing.
 * QuickView is shown when a user holds the mouse pointer over a related screen element.
 * @extends sap.ui.commons.CalloutBase
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.QuickView</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.QuickView = function(sId,mSettings) {};
/**
 * Action is selected in Action Bar
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @param {string} oControlEvent.getParameters.newState New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.actionSelected = function(oControlEvent) {  };

/**
 * Fired when a new feed entry is submitted.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.feedSubmit = function(oControlEvent) {  };

/**
 * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.href URI of the Thing Inspector application.
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.navigate = function(oControlEvent) {  };

/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.addAction = function(oAction) { return new sap.ui.ux3.QuickView(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Element}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.addContent = function(oContent) { return new sap.ui.ux3.QuickView(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.QuickView</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.QuickView</code> itself.
 * 
 * Action is selected in Action Bar
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code> itself
 * 
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.attachActionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.QuickView</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.QuickView</code> itself.
 * 
 * Fired when a new feed entry is submitted.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code> itself
 * 
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:navigate navigate} event of this <code>sap.ui.ux3.QuickView</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.QuickView</code> itself.
 * 
 * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code> itself
 * 
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.destroyActionBar = function() { return new sap.ui.ux3.QuickView(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.destroyActions = function() { return new sap.ui.ux3.QuickView(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.destroyContent = function() { return new sap.ui.ux3.QuickView(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.QuickView</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.detachActionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.QuickView</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:navigate navigate} event of this <code>sap.ui.ux3.QuickView</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.ui.ux3.QuickView(); };

/**
 * Creates a new subclass of class sap.ui.ux3.QuickView with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.CalloutBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.ux3.QuickView.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} [mParameters.action] Selected ThingAction
 * @param {string} [mParameters.newState] New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * 
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.QuickView.prototype.fireActionSelected = function(mParameters) { return new sap.ui.ux3.QuickView(); };

/**
 * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.text] Feed text
 * 
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.QuickView.prototype.fireFeedSubmit = function(mParameters) { return new sap.ui.ux3.QuickView(); };

/**
 * Fires event {@link #event:navigate navigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.href] URI of the Thing Inspector application.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.QuickView.prototype.fireNavigate = function(mParameters) { return false; };

/**
 * Gets content of aggregation {@link #getActionBar actionBar}.
 * 
 * ActionBar. If no actionBar is set a default ActionBar will be created.
 * In any case, ActionBar is displayed only when the showActionBar property is set to true.
 * 
 * @returns {sap.ui.ux3.ActionBar}
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getActionBar = function() { return new sap.ui.ux3.ActionBar(); };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * Actions of a Thing
 * 
 * @returns {sap.ui.ux3.ThingAction[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Body content of the QuickView
 * 
 * @returns {sap.ui.core.Element[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
 * 
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>favoriteActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFavoriteActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getFavoriteState favoriteState}.
 * 
 * State Of favorite Action
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>favoriteState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFavoriteState = function() { return false; };

/**
 * Gets current value of property {@link #getFirstTitle firstTitle}.
 * 
 * Thing name shown in the header of the QuickView
 * 
 * @returns {string} Value of property <code>firstTitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFirstTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getFirstTitleHref firstTitleHref}.
 * 
 * URI to Thing Inspector
 * 
 * @returns {string} Value of property <code>firstTitleHref</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFirstTitleHref = function() { return ""; };

/**
 * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
 * 
 * Flag action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>flagActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFlagActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getFlagState flagState}.
 * 
 * State of Flag Action
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>flagState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFlagState = function() { return false; };

/**
 * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
 * 
 * Follow action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>followActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFollowActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getFollowState followState}.
 * 
 * Follow State of a Thing
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.ux3.FollowActionState} Value of property <code>followState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getFollowState = function() { return new sap.ui.ux3.FollowActionState(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.ux3.QuickView.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.QuickView.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOpenActionEnabled openActionEnabled}.
 * 
 * Open Thing action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>openActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getOpenActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getSecondTitle secondTitle}.
 * 
 * Optional short text shown under the firstTitle
 * 
 * @returns {string} Value of property <code>secondTitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getSecondTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getShowActionBar showActionBar}.
 * 
 * Show Action Bar
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showActionBar</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getShowActionBar = function() { return false; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.
 * 
 * @returns {string} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getType = function() { return ""; };

/**
 * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
 * 
 * Update action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>updateActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getUpdateActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingAction}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.ux3.QuickView(); };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.core.Element}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.QuickView(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.ux3.ThingAction} vAction The action to remove or its index or id
 * @returns {sap.ui.ux3.ThingAction} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeAction = function(vAction) { return new sap.ui.ux3.ThingAction(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingAction[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Element[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Element} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Element} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.removeContent = function(vContent) { return new sap.ui.core.Element(); };

/**
 * Sets the aggregated {@link #getActionBar actionBar}.
 * @param {sap.ui.ux3.ActionBar} oActionBar The actionBar to set
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setActionBar = function(oActionBar) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
 * 
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFavoriteActionEnabled New value for property <code>favoriteActionEnabled</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFavoriteActionEnabled = function(bFavoriteActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFavoriteState favoriteState}.
 * 
 * State Of favorite Action
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFavoriteState New value for property <code>favoriteState</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFavoriteState = function(bFavoriteState) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFirstTitle firstTitle}.
 * 
 * Thing name shown in the header of the QuickView
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFirstTitle New value for property <code>firstTitle</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFirstTitle = function(sFirstTitle) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFirstTitleHref firstTitleHref}.
 * 
 * URI to Thing Inspector
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFirstTitleHref New value for property <code>firstTitleHref</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFirstTitleHref = function(sFirstTitleHref) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
 * 
 * Flag action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFlagActionEnabled New value for property <code>flagActionEnabled</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFlagActionEnabled = function(bFlagActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFlagState flagState}.
 * 
 * State of Flag Action
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFlagState New value for property <code>flagState</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFlagState = function(bFlagState) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
 * 
 * Follow action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFollowActionEnabled New value for property <code>followActionEnabled</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFollowActionEnabled = function(bFollowActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getFollowState followState}.
 * 
 * Follow State of a Thing
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default</code>.
 * @param {sap.ui.ux3.FollowActionState} sFollowState New value for property <code>followState</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setFollowState = function(sFollowState) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getOpenActionEnabled openActionEnabled}.
 * 
 * Open Thing action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bOpenActionEnabled New value for property <code>openActionEnabled</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setOpenActionEnabled = function(bOpenActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getSecondTitle secondTitle}.
 * 
 * Optional short text shown under the firstTitle
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSecondTitle New value for property <code>secondTitle</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setSecondTitle = function(sSecondTitle) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getShowActionBar showActionBar}.
 * 
 * Show Action Bar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowActionBar New value for property <code>showActionBar</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setShowActionBar = function(bShowActionBar) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setType = function(sType) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
 * 
 * Update action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUpdateActionEnabled New value for property <code>updateActionEnabled</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setUpdateActionEnabled = function(bUpdateActionEnabled) { return new sap.ui.ux3.QuickView(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.ux3.QuickView} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.QuickView.prototype.setWidth = function(sWidth) { return new sap.ui.ux3.QuickView(); };


// ---- sap.ui.ux3.Shell --------------------------------------------------------------------------

/**
 * Constructor for a new Shell.
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
 * <li>{@link #getAppTitle appTitle} : string</li>
 * <li>{@link #getAppIcon appIcon} : sap.ui.core.URI</li>
 * <li>{@link #getAppIconTooltip appIconTooltip} : string</li>
 * <li>{@link #getShowLogoutButton showLogoutButton} : boolean (default: true)</li>
 * <li>{@link #getLogoutButtonTooltip logoutButtonTooltip} : string</li>
 * <li>{@link #getShowSearchTool showSearchTool} : boolean (default: true)</li>
 * <li>{@link #getShowInspectorTool showInspectorTool} : boolean (default: false)</li>
 * <li>{@link #getShowFeederTool showFeederTool} : boolean (default: true)</li>
 * <li>{@link #getShowTools showTools} : boolean (default: true)</li>
 * <li>{@link #getShowPane showPane} : boolean (default: true)</li>
 * <li>{@link #getHeaderType headerType} : sap.ui.ux3.ShellHeaderType (default: Standard)</li>
 * <li>{@link #getDesignType designType} : sap.ui.ux3.ShellDesignType (default: Standard)</li>
 * <li>{@link #getPaneWidth paneWidth} : int (default: 250)</li>
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getFullHeightContent fullHeightContent} : boolean (default: false)</li>
 * <li>{@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getWorksetItems worksetItems} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getPaneBarItems paneBarItems} : sap.ui.core.Item[]</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getToolPopups toolPopups} : sap.ui.ux3.ToolPopup[]</li>
 * <li>{@link #getHeaderItems headerItems} : sap.ui.core.Control[]</li>
 * <li>{@link #getNotificationBar notificationBar} : sap.ui.ux3.NotificationBar</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedWorksetItem selectedWorksetItem} : (sap.ui.core.ID | sap.ui.ux3.NavigationItem)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:worksetItemSelected worksetItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:paneBarItemSelected paneBarItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:logout logout} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:paneClosed paneClosed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The Ux3 GoldReflection Shell, which is an application frame with navigation capabilities.
 * It is supposed to be added to a direct child of the BODY tag of a page and there should be no other parts of the page consuming space outside the Shell.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell = function(sId,mSettings) {};
/**
 * Fired when a new feed entry is submitted.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.feedSubmit = function(oControlEvent) {  };

/**
 * Fired when the user clicks the "Log-off" button
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.logout = function(oControlEvent) {  };

/**
 * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the selected PaneBarItem.
 * @param {sap.ui.core.Item} oControlEvent.getParameters.item The selected Item
 * @param {string} oControlEvent.getParameters.key The key of the selected Item (or null if there is no key)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.paneBarItemSelected = function(oControlEvent) {  };

/**
 * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before.
 * @event
 * @since 1.12.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The id of the PaneBarItem to which the closed pane belonged.
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.paneClosed = function(oControlEvent) {  };

/**
 * Fired when search has been triggered.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.search = function(oControlEvent) {  };

/**
 * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given.
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key The key of the selected NavigationItem (or null if there is no key)
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.worksetItemSelected = function(oControlEvent) {  };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addContent = function(oContent) { return new sap.ui.ux3.Shell(); };

/**
 * Adds some headerItem to the aggregation {@link #getHeaderItems headerItems}.
 * @param {sap.ui.core.Control}
 *            oHeaderItem the headerItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addHeaderItem = function(oHeaderItem) { return new sap.ui.ux3.Shell(); };

/**
 * Adds some paneBarItem to the aggregation {@link #getPaneBarItems paneBarItems}.
 * @param {sap.ui.core.Item}
 *            oPaneBarItem the paneBarItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addPaneBarItem = function(oPaneBarItem) { return new sap.ui.ux3.Shell(); };

/**
 * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addPaneContent = function(oPaneContent) { return new sap.ui.ux3.Shell(); };

/**
 * Adds some toolPopup to the aggregation {@link #getToolPopups toolPopups}.
 * @param {sap.ui.ux3.ToolPopup}
 *            oToolPopup the toolPopup to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addToolPopup = function(oToolPopup) { return new sap.ui.ux3.Shell(); };

/**
 * Adds some worksetItem to the aggregation {@link #getWorksetItems worksetItems}.
 * @param {sap.ui.ux3.NavigationItem}
 *            oWorksetItem the worksetItem to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.addWorksetItem = function(oWorksetItem) { return new sap.ui.ux3.Shell(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.
 * 
 * Fired when a new feed entry is submitted.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:logout logout} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.
 * 
 * Fired when the user clicks the "Log-off" button
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachLogout = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:paneBarItemSelected paneBarItemSelected} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.
 * 
 * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachPaneBarItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:paneClosed paneClosed} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.
 * 
 * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.attachPaneClosed = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.
 * 
 * Fired when search has been triggered.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:worksetItemSelected worksetItemSelected} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.Shell</code> itself.
 * 
 * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Shell</code> itself
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.attachWorksetItemSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Closes the side Pane (if open).
 * 
 * Returns 'this' to allow method chaining.
 * 
 * @type sap.ui.ux3.Shell
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.closePane = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyContent = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys all the headerItems in the aggregation {@link #getHeaderItems headerItems}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyHeaderItems = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys the notificationBar in the aggregation {@link #getNotificationBar notificationBar}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyNotificationBar = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys all the paneBarItems in the aggregation {@link #getPaneBarItems paneBarItems}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyPaneBarItems = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyPaneContent = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys all the toolPopups in the aggregation {@link #getToolPopups toolPopups}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyToolPopups = function() { return new sap.ui.ux3.Shell(); };

/**
 * Destroys all the worksetItems in the aggregation {@link #getWorksetItems worksetItems}.
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.destroyWorksetItems = function() { return new sap.ui.ux3.Shell(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:logout logout} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachLogout = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:paneBarItemSelected paneBarItemSelected} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachPaneBarItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:paneClosed paneClosed} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachPaneClosed = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:worksetItemSelected worksetItemSelected} event of this <code>sap.ui.ux3.Shell</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.detachWorksetItemSelected = function(fnFunction,oListener) { return new sap.ui.ux3.Shell(); };

/**
 * Creates a new subclass of class sap.ui.ux3.Shell with name <code>sClassName</code>
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
sap.ui.ux3.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireFeedSubmit = function(mParameters) { return new sap.ui.ux3.Shell(); };

/**
 * Fires event {@link #event:logout logout} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireLogout = function(mParameters) { return new sap.ui.ux3.Shell(); };

/**
 * Fires event {@link #event:paneBarItemSelected paneBarItemSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The ID of the selected PaneBarItem.
 * @param {sap.ui.core.Item} [mParameters.item] The selected Item
 * @param {string} [mParameters.key] The key of the selected Item (or null if there is no key)
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.firePaneBarItemSelected = function(mParameters) { return new sap.ui.ux3.Shell(); };

/**
 * Fires event {@link #event:paneClosed paneClosed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The id of the PaneBarItem to which the closed pane belonged.
 * 
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.12.0
 * 
 */
sap.ui.ux3.Shell.prototype.firePaneClosed = function(mParameters) { return new sap.ui.ux3.Shell(); };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireSearch = function(mParameters) { return new sap.ui.ux3.Shell(); };

/**
 * Fires event {@link #event:worksetItemSelected worksetItemSelected} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given.
 * @param {sap.ui.ux3.NavigationItem} [mParameters.item] The selected NavigationItem
 * @param {string} [mParameters.key] The key of the selected NavigationItem (or null if there is no key)
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.fireWorksetItemSelected = function(mParameters) { return false; };

/**
 * Gets current value of property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
 * 
 * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>allowOverlayHeaderAccess</code>
 * @since 1.14.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAllowOverlayHeaderAccess = function() { return false; };

/**
 * Gets current value of property {@link #getAppIcon appIcon}.
 * 
 * The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>appIcon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getAppIconTooltip appIconTooltip}.
 * 
 * The tooltip of the application icon in the header
 * 
 * @returns {string} Value of property <code>appIconTooltip</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppIconTooltip = function() { return ""; };

/**
 * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
 * 
 * Whether the Shell content area should have a theme-dependent padding or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>applyContentPadding</code>
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getApplyContentPadding = function() { return false; };

/**
 * Gets current value of property {@link #getAppTitle appTitle}.
 * 
 * The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * 
 * @returns {string} Value of property <code>appTitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppTitle = function() { return ""; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDesignType designType}.
 * 
 * Defines which design type is to be used.
 * 
 * Default value is <code>Standard</code>.
 * @returns {sap.ui.ux3.ShellDesignType} Value of property <code>designType</code>
 * @since 1.12.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getDesignType = function() { return new sap.ui.ux3.ShellDesignType(); };

/**
 * Gets current value of property {@link #getFullHeightContent fullHeightContent}.
 * 
 * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space.
 * However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>fullHeightContent</code>
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getFullHeightContent = function() { return false; };

/**
 * Gets content of aggregation {@link #getHeaderItems headerItems}.
 * 
 * Controls to appear in the header next to the logout button. It is recommended to only use controls of type Button, MenuButton and TextView.
 * The respective UI guidelines need to be enforced on a higher level.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getHeaderItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderType headerType}.
 * 
 * Defines which header type to be used. Depending on the header type some other functionality might be obsolete.
 * 
 * Default value is <code>Standard</code>.
 * @returns {sap.ui.ux3.ShellHeaderType} Value of property <code>headerType</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getHeaderType = function() { return new sap.ui.ux3.ShellHeaderType(); };

/**
 * Gets current value of property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
 * 
 * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.
 * 
 * @returns {string} Value of property <code>logoutButtonTooltip</code>
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getLogoutButtonTooltip = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.ux3.Shell.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.Shell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNotificationBar notificationBar}.
 * 
 * The NotificationBar which should be integrated into the Shell.
 * 
 * @returns {sap.ui.ux3.NotificationBar}
 * @since 1.7.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getNotificationBar = function() { return new sap.ui.ux3.NotificationBar(); };

/**
 * Gets content of aggregation {@link #getPaneBarItems paneBarItems}.
 * 
 * The items to appear in the PaneBar.
 * 
 * @returns {sap.ui.core.Item[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneBarItems = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getPaneContent paneContent}.
 * 
 * The content to appear in the pane area.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getPaneWidth paneWidth}.
 * 
 * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).
 * 
 * Default value is <code>250</code>.
 * @returns {int} Value of property <code>paneWidth</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneWidth = function() { return 0; };

/**
 * Returns the SearchField control which is used in the Search Tool.
 * 
 * @type sap.ui.commons.SearchField
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.getSearchField = function() { return new sap.ui.commons.SearchField(); };

/**
 * ID of the element which is the current target of the association {@link #getSelectedWorksetItem selectedWorksetItem}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getSelectedWorksetItem = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getShowFeederTool showFeederTool}.
 * 
 * Whether the "Feeder" tool should be displayed or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFeederTool</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowFeederTool = function() { return false; };

/**
 * Gets current value of property {@link #getShowInspectorTool showInspectorTool}.
 * 
 * Whether the "Inspector" tool should be displayed or not.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showInspectorTool</code>
 * 
 * @deprecated Since version 1.7.2.
 * According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup.
 * Instead trigger it from the respective elements in the Shell content.
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowInspectorTool = function() { return false; };

/**
 * Gets current value of property {@link #getShowLogoutButton showLogoutButton}.
 * 
 * Whether the Logoff button in the header should be displayed or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLogoutButton</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowLogoutButton = function() { return false; };

/**
 * Gets current value of property {@link #getShowPane showPane}.
 * 
 * Whether the pane bar should be displayed at all or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showPane</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowPane = function() { return false; };

/**
 * Gets current value of property {@link #getShowSearchTool showSearchTool}.
 * 
 * Whether the "Global Search" tool should be displayed or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSearchTool</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowSearchTool = function() { return false; };

/**
 * Gets current value of property {@link #getShowTools showTools}.
 * 
 * Whether the tool area should be displayed at all or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTools</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowTools = function() { return false; };

/**
 * Gets content of aggregation {@link #getToolPopups toolPopups}.
 * 
 * The items which appear in the ToolPalette and are opened as popup when clicked.
 * 
 * @returns {sap.ui.ux3.ToolPopup[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getToolPopups = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getWorksetItems worksetItems}.
 * 
 * The workset items.
 * 
 * @returns {sap.ui.ux3.NavigationItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getWorksetItems = function() { return new Array(); };

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
sap.ui.ux3.Shell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getHeaderItems headerItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oHeaderItem The headerItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfHeaderItem = function(oHeaderItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation {@link #getPaneBarItems paneBarItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *           oPaneBarItem The paneBarItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfPaneBarItem = function(oPaneBarItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getPaneContent paneContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oPaneContent The paneContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfPaneContent = function(oPaneContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ToolPopup</code> in the aggregation {@link #getToolPopups toolPopups}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ToolPopup}
 *           oToolPopup The toolPopup whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfToolPopup = function(oToolPopup) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getWorksetItems worksetItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *           oWorksetItem The worksetItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.indexOfWorksetItem = function(oWorksetItem) { return 0; };

/**
 * Experimental method! Do not use!
 * 
 * Makes Shell personalization available and injects the given personalization settings. This should be called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise it may override the user's new settings.
 * 
 * @param {object} oSettings
 *         Personalization settings object
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.initializePersonalization = function(oSettings) { return null; };

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
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * Inserts a headerItem into the aggregation {@link #getHeaderItems headerItems}.
 * 
 * @param {sap.ui.core.Control}
 *            oHeaderItem the headerItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertHeaderItem = function(oHeaderItem,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * Inserts a paneBarItem into the aggregation {@link #getPaneBarItems paneBarItems}.
 * 
 * @param {sap.ui.core.Item}
 *            oPaneBarItem the paneBarItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the paneBarItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the paneBarItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the paneBarItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertPaneBarItem = function(oPaneBarItem,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the paneContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the paneContent is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertPaneContent = function(oPaneContent,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * Inserts a toolPopup into the aggregation {@link #getToolPopups toolPopups}.
 * 
 * @param {sap.ui.ux3.ToolPopup}
 *            oToolPopup the toolPopup to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the toolPopup should be inserted at; for
 *              a negative value of <code>iIndex</code>, the toolPopup is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the toolPopup is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertToolPopup = function(oToolPopup,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * Inserts a worksetItem into the aggregation {@link #getWorksetItems worksetItems}.
 * 
 * @param {sap.ui.ux3.NavigationItem}
 *            oWorksetItem the worksetItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the worksetItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the worksetItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the worksetItem is inserted at
 *              the last position
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.insertWorksetItem = function(oWorksetItem,iIndex) { return new sap.ui.ux3.Shell(); };

/**
 * Returns 'true' if the side Pane is currently open.
 * 
 * @type boolean
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.isPaneOpen = function() { return false; };

/**
 * Opens the side Pane.
 * 
 * A valid ID of a paneBarItem must be given, so this item can be marked as selected. A "paneBarItemSelected" event is then fired as if the opening was triggered by the user by a click on the respective PaneBarItem.
 * This method can be called (with different IDs) even when the Pane is already open. It has then the same effect as if the user switches between PaneBarItems.
 * 
 * Returns 'this' to allow method chaining.
 * 
 * @param {string} sPaneBarItemId
 *         The ID of the PaneBarItem which should be marked as selected.
 * @type sap.ui.ux3.Shell
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.openPane = function(sPaneBarItemId) { return new sap.ui.ux3.Shell(); };

/**
 * Experimental method! Do not use!
 * 
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.openPersonalizationDialog = function() { return null; };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getHeaderItems headerItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllHeaderItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getPaneBarItems paneBarItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Item[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllPaneBarItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllPaneContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getToolPopups toolPopups}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ToolPopup[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllToolPopups = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getWorksetItems worksetItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.NavigationItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeAllWorksetItems = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes a headerItem from the aggregation {@link #getHeaderItems headerItems}.
 * 
 * @param {int | string | sap.ui.core.Control} vHeaderItem The headerItem to remove or its index or id
 * @returns {sap.ui.core.Control} The removed headerItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeHeaderItem = function(vHeaderItem) { return new sap.ui.core.Control(); };

/**
 * Removes a paneBarItem from the aggregation {@link #getPaneBarItems paneBarItems}.
 * 
 * @param {int | string | sap.ui.core.Item} vPaneBarItem The paneBarItem to remove or its index or id
 * @returns {sap.ui.core.Item} The removed paneBarItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removePaneBarItem = function(vPaneBarItem) { return new sap.ui.core.Item(); };

/**
 * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vPaneContent The paneContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed paneContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removePaneContent = function(vPaneContent) { return new sap.ui.core.Control(); };

/**
 * Removes a toolPopup from the aggregation {@link #getToolPopups toolPopups}.
 * 
 * @param {int | string | sap.ui.ux3.ToolPopup} vToolPopup The toolPopup to remove or its index or id
 * @returns {sap.ui.ux3.ToolPopup} The removed toolPopup or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeToolPopup = function(vToolPopup) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Removes a worksetItem from the aggregation {@link #getWorksetItems worksetItems}.
 * 
 * @param {int | string | sap.ui.ux3.NavigationItem} vWorksetItem The worksetItem to remove or its index or id
 * @returns {sap.ui.ux3.NavigationItem} The removed worksetItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.removeWorksetItem = function(vWorksetItem) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Sets a new value for property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
 * 
 * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAllowOverlayHeaderAccess New value for property <code>allowOverlayHeaderAccess</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.14.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAllowOverlayHeaderAccess = function(bAllowOverlayHeaderAccess) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getAppIcon appIcon}.
 * 
 * The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sAppIcon New value for property <code>appIcon</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAppIcon = function(sAppIcon) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getAppIconTooltip appIconTooltip}.
 * 
 * The tooltip of the application icon in the header
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAppIconTooltip New value for property <code>appIconTooltip</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAppIconTooltip = function(sAppIconTooltip) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
 * 
 * Whether the Shell content area should have a theme-dependent padding or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bApplyContentPadding New value for property <code>applyContentPadding</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setApplyContentPadding = function(bApplyContentPadding) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getAppTitle appTitle}.
 * 
 * The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAppTitle New value for property <code>appTitle</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setAppTitle = function(sAppTitle) { return new sap.ui.ux3.Shell(); };

/**
 * Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the content area (not the complete Shell).
 * This method may be more convenient than a series of calls to "removeContent" and "addContent", which each lead to a re-rendering of the content area (but again not of the complete Shell).
 * 
 * By default the old content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
 * 
 * @param {sap.ui.core.Control} oContent
 *         The new Content. In this method it must be exactly one control (-tree). Use addContent() to add more control (-trees) to the main content area of the Shell.
 * @param {boolean} bDestroyOldContent
 *         If set, the controls previously contained in the Shell will be destroyed, to avoid memory leaks.
 * @type sap.ui.core.Control[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.setContent = function(oContent,bDestroyOldContent) { return new Array(); };

/**
 * Sets a new value for property {@link #getDesignType designType}.
 * 
 * Defines which design type is to be used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Standard</code>.
 * @param {sap.ui.ux3.ShellDesignType} sDesignType New value for property <code>designType</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.12.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setDesignType = function(sDesignType) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getFullHeightContent fullHeightContent}.
 * 
 * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space.
 * However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFullHeightContent New value for property <code>fullHeightContent</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setFullHeightContent = function(bFullHeightContent) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getHeaderType headerType}.
 * 
 * Defines which header type to be used. Depending on the header type some other functionality might be obsolete.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Standard</code>.
 * @param {sap.ui.ux3.ShellHeaderType} sHeaderType New value for property <code>headerType</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setHeaderType = function(sHeaderType) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
 * 
 * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLogoutButtonTooltip New value for property <code>logoutButtonTooltip</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * @since 1.9.0
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setLogoutButtonTooltip = function(sLogoutButtonTooltip) { return new sap.ui.ux3.Shell(); };

/**
 * Moves the complete Shell away from the right window border by the given number of pixels (left border in RTL case).
 * 
 * So there is space for a sidebar or so outside the Shell. The CSS class 'sapUiUx3ShellOuterSideBar' provides the basic position
 * capabilities for the sidebar DOM element.
 * 
 * This feature is not public. The usage is only granted to special groups on request.
 * 
 * @param {int} px how many pixels of free space should be next to the Shell (between 0 and 600)
 * @param {function} [complete] optional callback function to call after the animation
 * @param {string} [outerId] optional id of the content representing the outside sidebar. If specified the width of the content is animated.
 * @since 1.7.0
 * 
 * @protected
 * 
 */
sap.ui.ux3.Shell.prototype.setOffsetRight = function(px,complete,outerId) {  };

/**
 * Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only re-render the pane content (and not the shell) which is faster and smoother than any other way of changing the "paneContent" aggregation.
 * 
 * By default, the old pane content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
 * 
 * @param {sap.ui.core.Control} oContent
 *         The new Pane content. In this method it must be exactly one control (-tree). This could likely be a layout or a specific ux3 Pane control. Use addPaneContent() to add more control (-trees) to the Pane.
 * @param {boolean} bDestroyOldContent
 *         If set, the controls previously contained in the pane will be destroyed, to avoid memory leaks.
 * @type sap.ui.core.Control[]
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.Shell.prototype.setPaneContent = function(oContent,bDestroyOldContent) { return new Array(); };

/**
 * Sets a new value for property {@link #getPaneWidth paneWidth}.
 * 
 * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>250</code>.
 * @param {int} iPaneWidth New value for property <code>paneWidth</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setPaneWidth = function(iPaneWidth) { return new sap.ui.ux3.Shell(); };

/**
 * Sets the associated {@link #getSelectedWorksetItem selectedWorksetItem}.
 * @param {sap.ui.core.ID | sap.ui.ux3.NavigationItem} oSelectedWorksetItem ID of an element which becomes the new target of this selectedWorksetItem association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setSelectedWorksetItem = function(oSelectedWorksetItem) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getShowFeederTool showFeederTool}.
 * 
 * Whether the "Feeder" tool should be displayed or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFeederTool New value for property <code>showFeederTool</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowFeederTool = function(bShowFeederTool) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getShowInspectorTool showInspectorTool}.
 * 
 * Whether the "Inspector" tool should be displayed or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowInspectorTool New value for property <code>showInspectorTool</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.7.2.
 * According to the current Ux designs, the ThingInspector should NOT be opened like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup.
 * Instead trigger it from the respective elements in the Shell content.
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowInspectorTool = function(bShowInspectorTool) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getShowLogoutButton showLogoutButton}.
 * 
 * Whether the Logoff button in the header should be displayed or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLogoutButton New value for property <code>showLogoutButton</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowLogoutButton = function(bShowLogoutButton) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getShowPane showPane}.
 * 
 * Whether the pane bar should be displayed at all or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowPane New value for property <code>showPane</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowPane = function(bShowPane) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getShowSearchTool showSearchTool}.
 * 
 * Whether the "Global Search" tool should be displayed or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSearchTool New value for property <code>showSearchTool</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowSearchTool = function(bShowSearchTool) { return new sap.ui.ux3.Shell(); };

/**
 * Sets a new value for property {@link #getShowTools showTools}.
 * 
 * Whether the tool area should be displayed at all or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTools New value for property <code>showTools</code>
 * @returns {sap.ui.ux3.Shell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.setShowTools = function(bShowTools) { return new sap.ui.ux3.Shell(); };


// ---- sap.ui.ux3.ShellDesignType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ShellDesignType.toString = function() { return ""; };

// ---- sap.ui.ux3.ShellHeaderType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ShellHeaderType.toString = function() { return ""; };

// ---- sap.ui.ux3.ThingAction --------------------------------------------------------------------------

/**
 * Constructor for a new ThingAction.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Thing Action for Swatch, QuickView, Thinginspector
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ThingAction = function(sId,mSettings) {};
/**
 * Event will be fired when the action was triggered.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected action
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected Thing Action
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.select = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.ux3.ThingAction</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ThingAction</code> itself.
 * 
 * Event will be fired when the action was triggered.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingAction</code> itself
 * 
 * @returns {sap.ui.ux3.ThingAction} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingAction(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.ux3.ThingAction</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ThingAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.ux3.ThingAction(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ThingAction with name <code>sClassName</code>
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
sap.ui.ux3.ThingAction.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:select select} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of selected action
 * @param {sap.ui.ux3.ThingAction} [mParameters.action] Selected Thing Action
 * 
 * @returns {sap.ui.ux3.ThingAction} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ThingAction.prototype.fireSelect = function(mParameters) { return new sap.ui.ux3.ThingAction(); };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * action enabled (true/false)
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.ux3.ThingAction.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ThingAction.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * text of action
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getEnabled enabled}.
 * 
 * action enabled (true/false)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.ux3.ThingAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.setEnabled = function(bEnabled) { return new sap.ui.ux3.ThingAction(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * text of action
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.ux3.ThingAction} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.setText = function(sText) { return new sap.ui.ux3.ThingAction(); };


// ---- sap.ui.ux3.ThingGroup --------------------------------------------------------------------------

/**
 * Constructor for a new ThingGroup.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getColspan colspan} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingGroup[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Thing Group Area
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ThingGroup = function(sId,mSettings) {};
/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.addAction = function(oAction) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.addContent = function(oContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.destroyActions = function() { return new sap.ui.ux3.ThingGroup(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.destroyContent = function() { return new sap.ui.ux3.ThingGroup(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ThingGroup with name <code>sClassName</code>
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
sap.ui.ux3.ThingGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * Actions of the groups content
 * 
 * @returns {sap.ui.ux3.ThingGroup[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getActions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getColspan colspan}.
 * 
 * If Group is used in a column layout the groups spans the all columns if set to true.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>colspan</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getColspan = function() { return false; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Content of Group
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ThingGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ThingGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title of Group
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.indexOfAction = function(oAction) { return 0; };

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
sap.ui.ux3.ThingGroup.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.ux3.ThingGroup(); };

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
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.ux3.ThingGroup} vAction The action to remove or its index or id
 * @returns {sap.ui.ux3.ThingGroup} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeAction = function(vAction) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingGroup[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getColspan colspan}.
 * 
 * If Group is used in a column layout the groups spans the all columns if set to true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bColspan New value for property <code>colspan</code>
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.setColspan = function(bColspan) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title of Group
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.ThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ThingGroup(); };


// ---- sap.ui.ux3.ThingInspector --------------------------------------------------------------------------

/**
 * Constructor for a new ThingInspector.
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
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getHeaderType headerType} : sap.ui.ux3.ThingViewerHeaderType (default: Standard)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : (sap.ui.core.ID | sap.ui.ux3.NavigationItem)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Thing Inspector
 * @extends sap.ui.ux3.Overlay
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ThingInspector = function(sId,mSettings) {};
/**
 * Further thing related Action selected
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.actionSelected = function(oControlEvent) {  };

/**
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.facetSelected = function(oControlEvent) {  };

/**
 * Fired when a new feed entry is submitted.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.feedSubmit = function(oControlEvent) {  };

/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addAction = function(oAction) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Adds some facet to the aggregation {@link #getFacets facets}.
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addFacet = function(oFacet) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addFacetContent = function(oFacetContent) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.addHeaderContent = function(oHeaderContent) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ThingInspector</code> itself.
 * 
 * Further thing related Action selected
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code> itself
 * 
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.attachActionSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ThingInspector</code> itself.
 * 
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code> itself
 * 
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.attachFacetSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ThingInspector</code> itself.
 * 
 * Fired when a new feed entry is submitted.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code> itself
 * 
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.attachFeedSubmit = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyActionBar = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyActions = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyFacetContent = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * Destroys all the facets in the aggregation {@link #getFacets facets}.
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyFacets = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.destroyHeaderContent = function() { return new sap.ui.ux3.ThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:actionSelected actionSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.detachActionSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.detachFacetSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:feedSubmit feedSubmit} event of this <code>sap.ui.ux3.ThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.detachFeedSubmit = function(fnFunction,oListener) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ThingInspector with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.ux3.ThingInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} [mParameters.action] Selected ThingAction
 * 
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ThingInspector.prototype.fireActionSelected = function(mParameters) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} [mParameters.item] The selected NavigationItem
 * @param {string} [mParameters.key] Key of selected NavigationItem
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.ThingInspector.prototype.fireFacetSelected = function(mParameters) { return false; };

/**
 * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.text] Feed text
 * 
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ThingInspector.prototype.fireFeedSubmit = function(mParameters) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Gets content of aggregation {@link #getActionBar actionBar}.
 * 
 * ActionBar. If no actionBar is set a default ActionBar will be created.
 * 
 * @returns {sap.ui.ux3.ActionBar}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getActionBar = function() { return new sap.ui.ux3.ActionBar(); };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * Actions of a Thing
 * 
 * @returns {sap.ui.ux3.ThingAction[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getActions = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFacetContent facetContent}.
 * 
 * ThingGroups for content of the selected facet
 * 
 * @returns {sap.ui.ux3.ThingGroup[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFacetContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFacets facets}.
 * 
 * Thing Inspector facets
 * 
 * @returns {sap.ui.ux3.NavigationItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFacets = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
 * 
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>favoriteActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFavoriteActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getFavoriteState favoriteState}.
 * 
 * State Of favorite Action
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>favoriteState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFavoriteState = function() { return false; };

/**
 * Gets current value of property {@link #getFirstTitle firstTitle}.
 * 
 * First Line of the Thing Inspector Title
 * 
 * @returns {string} Value of property <code>firstTitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFirstTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
 * 
 * Flag action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>flagActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFlagActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getFlagState flagState}.
 * 
 * State of Flag Action
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>flagState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFlagState = function() { return false; };

/**
 * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
 * 
 * Follow action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>followActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFollowActionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getFollowState followState}.
 * 
 * Follow State of a Thing
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.ux3.FollowActionState} Value of property <code>followState</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFollowState = function() { return new sap.ui.ux3.FollowActionState(); };

/**
 * Gets content of aggregation {@link #getHeaderContent headerContent}.
 * 
 * ThingGroups for the header content
 * 
 * @returns {sap.ui.ux3.ThingGroup[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getHeaderContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderType headerType}.
 * 
 * Defines which header type should be used.
 * 
 * Default value is <code>Standard</code>.
 * @returns {sap.ui.ux3.ThingViewerHeaderType} Value of property <code>headerType</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getHeaderType = function() { return new sap.ui.ux3.ThingViewerHeaderType(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Thing Icon Url
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ThingInspector.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ThingInspector.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSecondTitle secondTitle}.
 * 
 * Second Line of the Thing Inspector Title
 * 
 * @returns {string} Value of property <code>secondTitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getSecondTitle = function() { return ""; };

/**
 * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getSelectedFacet = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Thing type
 * 
 * @returns {string} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getType = function() { return ""; };

/**
 * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
 * 
 * Update action enabled/disabled. If disabled the action will be invisible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>updateActionEnabled</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getUpdateActionEnabled = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingAction}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getFacets facets}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *           oFacet The facet whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfFacet = function(oFacet) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getFacetContent facetContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *           oFacetContent The facetContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfFacetContent = function(oFacetContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getHeaderContent headerContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *           oHeaderContent The headerContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Inserts a facet into the aggregation {@link #getFacets facets}.
 * 
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the facet should be inserted at; for
 *              a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the facet is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertFacet = function(oFacet,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
 * 
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the facetContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the facetContent is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertFacetContent = function(oFacetContent,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerContent is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Opens this instance of ThingIspector
 * 
 * @param {string} [initialFocusId]
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.open = function(initialFocusId) {  };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.ui.ux3.ThingAction} vAction The action to remove or its index or id
 * @returns {sap.ui.ux3.ThingAction} The removed action or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAction = function(vAction) { return new sap.ui.ux3.ThingAction(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingAction[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingGroup[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllFacetContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFacets facets}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.NavigationItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllFacets = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingGroup[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * Removes a facet from the aggregation {@link #getFacets facets}.
 * 
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet The facet to remove or its index or id
 * @returns {sap.ui.ux3.NavigationItem} The removed facet or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeFacet = function(vFacet) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
 * 
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent The facetContent to remove or its index or id
 * @returns {sap.ui.ux3.ThingGroup} The removed facetContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeFacetContent = function(vFacetContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent The headerContent to remove or its index or id
 * @returns {sap.ui.ux3.ThingGroup} The removed headerContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Sets the aggregated {@link #getActionBar actionBar}.
 * @param {sap.ui.ux3.ActionBar} oActionBar The actionBar to set
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setActionBar = function(oActionBar) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
 * 
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFavoriteActionEnabled New value for property <code>favoriteActionEnabled</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFavoriteActionEnabled = function(bFavoriteActionEnabled) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFavoriteState favoriteState}.
 * 
 * State Of favorite Action
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFavoriteState New value for property <code>favoriteState</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFavoriteState = function(bFavoriteState) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFirstTitle firstTitle}.
 * 
 * First Line of the Thing Inspector Title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFirstTitle New value for property <code>firstTitle</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFirstTitle = function(sFirstTitle) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
 * 
 * Flag action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFlagActionEnabled New value for property <code>flagActionEnabled</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFlagActionEnabled = function(bFlagActionEnabled) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFlagState flagState}.
 * 
 * State of Flag Action
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFlagState New value for property <code>flagState</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFlagState = function(bFlagState) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
 * 
 * Follow action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFollowActionEnabled New value for property <code>followActionEnabled</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFollowActionEnabled = function(bFollowActionEnabled) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getFollowState followState}.
 * 
 * Follow State of a Thing
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default</code>.
 * @param {sap.ui.ux3.FollowActionState} sFollowState New value for property <code>followState</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setFollowState = function(sFollowState) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getHeaderType headerType}.
 * 
 * Defines which header type should be used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Standard</code>.
 * @param {sap.ui.ux3.ThingViewerHeaderType} sHeaderType New value for property <code>headerType</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setHeaderType = function(sHeaderType) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Thing Icon Url
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getSecondTitle secondTitle}.
 * 
 * Second Line of the Thing Inspector Title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSecondTitle New value for property <code>secondTitle</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setSecondTitle = function(sSecondTitle) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets the associated {@link #getSelectedFacet selectedFacet}.
 * @param {sap.ui.core.ID | sap.ui.ux3.NavigationItem} oSelectedFacet ID of an element which becomes the new target of this selectedFacet association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setSelectedFacet = function(oSelectedFacet) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Thing type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setType = function(sType) { return new sap.ui.ux3.ThingInspector(); };

/**
 * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
 * 
 * Update action enabled/disabled. If disabled the action will be invisible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUpdateActionEnabled New value for property <code>updateActionEnabled</code>
 * @returns {sap.ui.ux3.ThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.setUpdateActionEnabled = function(bUpdateActionEnabled) { return new sap.ui.ux3.ThingInspector(); };


// ---- sap.ui.ux3.ThingViewer --------------------------------------------------------------------------

/**
 * Constructor for a new ThingViewer.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeaderType headerType} : sap.ui.ux3.ThingViewerHeaderType (default: Standard)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : (sap.ui.core.ID | sap.ui.ux3.NavigationItem)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * ThingViewer: Same as ThingInspector but decoupled from the Overlay and the ActionBar.
 * The control can be added to a Parent container that has a defined width. The ThingViewer fill the whole container. If the parent container has no width defined the control will not work properly.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ThingViewer = function(sId,mSettings) {};
/**
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.facetSelected = function(oControlEvent) {  };

/**
 * Adds some facet to the aggregation {@link #getFacets facets}.
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.addFacet = function(oFacet) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.addFacetContent = function(oFacetContent) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.addHeaderContent = function(oHeaderContent) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingViewer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ThingViewer</code> itself.
 * 
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingViewer</code> itself
 * 
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.attachFacetSelected = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyActionBar = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyFacetContent = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * Destroys all the facets in the aggregation {@link #getFacets facets}.
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyFacets = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.destroyHeaderContent = function() { return new sap.ui.ux3.ThingViewer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:facetSelected facetSelected} event of this <code>sap.ui.ux3.ThingViewer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.detachFacetSelected = function(fnFunction,oListener) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ThingViewer with name <code>sClassName</code>
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
sap.ui.ux3.ThingViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} [mParameters.item] The selected NavigationItem
 * @param {string} [mParameters.key] Key of selected NavigationItem
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.ThingViewer.prototype.fireFacetSelected = function(mParameters) { return false; };

/**
 * Gets content of aggregation {@link #getActionBar actionBar}.
 * 
 * An ActionBar can be given
 * 
 * @returns {sap.ui.ux3.ActionBar}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getActionBar = function() { return new sap.ui.ux3.ActionBar(); };

/**
 * Gets content of aggregation {@link #getFacetContent facetContent}.
 * 
 * ThingGroups for content of the selected facet
 * 
 * @returns {sap.ui.ux3.ThingGroup[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getFacetContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFacets facets}.
 * 
 * Thing Inspector facets
 * 
 * @returns {sap.ui.ux3.NavigationItem[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getFacets = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getHeaderContent headerContent}.
 * 
 * ThingGroups for the header content
 * 
 * @returns {sap.ui.ux3.ThingGroup[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getHeaderContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeaderType headerType}.
 * 
 * Defines which header type should be used.
 * 
 * Default value is <code>Standard</code>.
 * @returns {sap.ui.ux3.ThingViewerHeaderType} Value of property <code>headerType</code>
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getHeaderType = function() { return new sap.ui.ux3.ThingViewerHeaderType(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of the ThingViewer
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Thing Icon Url
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ThingViewer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ThingViewer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getSelectedFacet = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getSubtitle subtitle}.
 * 
 * Subtitle of the Thing Inspector
 * 
 * @returns {string} Value of property <code>subtitle</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title of the Thing Inspector
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Thing type
 * 
 * @returns {string} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getType = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the ThingViewer
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation {@link #getFacets facets}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.NavigationItem}
 *           oFacet The facet whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.indexOfFacet = function(oFacet) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getFacetContent facetContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *           oFacetContent The facetContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.indexOfFacetContent = function(oFacetContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation {@link #getHeaderContent headerContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingGroup}
 *           oHeaderContent The headerContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * Inserts a facet into the aggregation {@link #getFacets facets}.
 * 
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the facet should be inserted at; for
 *              a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the facet is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.insertFacet = function(oFacet,iIndex) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
 * 
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the facetContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the facetContent is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.insertFacetContent = function(oFacetContent,iIndex) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the headerContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the headerContent is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingGroup[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeAllFacetContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFacets facets}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.NavigationItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeAllFacets = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingGroup[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * Removes a facet from the aggregation {@link #getFacets facets}.
 * 
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet The facet to remove or its index or id
 * @returns {sap.ui.ux3.NavigationItem} The removed facet or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeFacet = function(vFacet) { return new sap.ui.ux3.NavigationItem(); };

/**
 * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
 * 
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent The facetContent to remove or its index or id
 * @returns {sap.ui.ux3.ThingGroup} The removed facetContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeFacetContent = function(vFacetContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
 * 
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent The headerContent to remove or its index or id
 * @returns {sap.ui.ux3.ThingGroup} The removed headerContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.ux3.ThingGroup(); };

/**
 * Sets the aggregated {@link #getActionBar actionBar}.
 * @param {sap.ui.ux3.ActionBar} oActionBar The actionBar to set
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setActionBar = function(oActionBar) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getHeaderType headerType}.
 * 
 * Defines which header type should be used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Standard</code>.
 * @param {sap.ui.ux3.ThingViewerHeaderType} sHeaderType New value for property <code>headerType</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setHeaderType = function(sHeaderType) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of the ThingViewer
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setHeight = function(sHeight) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Thing Icon Url
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setIcon = function(sIcon) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets the associated {@link #getSelectedFacet selectedFacet}.
 * @param {sap.ui.core.ID | sap.ui.ux3.NavigationItem} oSelectedFacet ID of an element which becomes the new target of this selectedFacet association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setSelectedFacet = function(oSelectedFacet) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getSubtitle subtitle}.
 * 
 * Subtitle of the Thing Inspector
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSubtitle New value for property <code>subtitle</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setSubtitle = function(sSubtitle) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title of the Thing Inspector
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Thing type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setType = function(sType) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the ThingViewer
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.ux3.ThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ThingViewer.prototype.setWidth = function(sWidth) { return new sap.ui.ux3.ThingViewer(); };


// ---- sap.ui.ux3.ThingViewerHeaderType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.ThingViewerHeaderType.toString = function() { return ""; };

// ---- sap.ui.ux3.ToolPopup --------------------------------------------------------------------------

/**
 * Constructor for a new ToolPopup.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHover iconHover} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getInverted inverted} : boolean (default: true)</li>
 * <li>{@link #getAutoClose autoClose} : boolean (default: false)</li>
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getOpenDuration openDuration} : int (default: 400)</li>
 * <li>{@link #getCloseDuration closeDuration} : int (default: 400)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialFocus initialFocus} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * <li>{@link #getOpener opener} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * <li>{@link #getDefaultButton defaultButton} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:enter enter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:iconChanged iconChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:opened opened} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A popup which the user can open from the Shell's tool pane. Generally, the starting point would be an icon.
 * For this pop up, buttons can be defined with any text; therefore, it has the same purpose
 * and similar look like any common dialog box.
 * A ToolPopup can have any content. Depending on the application type and design, the structure
 * of the texts and input fields can be for example form-like.
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.38. Instead, use the <code>sap.m.Popup</code> control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ToolPopup = function(sId,mSettings) {};
/**
 * Event is fired when the popup closes because the user pressed Escape or the ToolPopup
 * Button in the Shell. This is called before the closing animation.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.close = function(oControlEvent) {  };

/**
 * This event is fired after the ToolPopup has finished its closing animation.
 * It is called for EVERY close, regardless of whether the user has triggered the
 * close or whether the ToolPopup was closed via API call.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.closed = function(oControlEvent) {  };

/**
 * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originalEvent The onsapenter event, received by the pop up
 * @param {sap.ui.core.Control} oControlEvent.getParameters.originalSrcControl The control that was focused when the user pressed the Enter key (may be null)
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.enter = function(oControlEvent) {  };

/**
 * Event is fired when one of the icon properties is modified (Note: The icon is not
 * rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.iconChanged = function(oControlEvent) {  };

/**
 * Event is fired when the popup opens
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.open = function(oControlEvent) {  };

/**
 * Event is being fired after the ToolPopup has been opened.
 * @event
 * @since 1.19.0
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.opened = function(oControlEvent) {  };

/**
 * Adds some button to the aggregation {@link #getButtons buttons}.
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.addButton = function(oButton) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.addContent = function(oContent) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Adds an ID to the Popup that should be focusable as well when using <code>autoclose</code>.
 * Chaining is only possible if a valid type (string) is given.
 * 
 * @param {string} [sID] ID of the corresponding element that should be focusable as well
 * @since 1.19.0
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ToolPopup.prototype.addFocusableArea = function(sID) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:close close} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.
 * 
 * Event is fired when the popup closes because the user pressed Escape or the ToolPopup
 * Button in the Shell. This is called before the closing animation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:closed closed} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.
 * 
 * This event is fired after the ToolPopup has finished its closing animation.
 * It is called for EVERY close, regardless of whether the user has triggered the
 * close or whether the ToolPopup was closed via API call.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachClosed = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:enter enter} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.
 * 
 * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachEnter = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:iconChanged iconChanged} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.
 * 
 * Event is fired when one of the icon properties is modified (Note: The icon is not
 * rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachIconChanged = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:open open} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.
 * 
 * Event is fired when the popup opens
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachOpen = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:opened opened} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.ux3.ToolPopup</code> itself.
 * 
 * Event is being fired after the ToolPopup has been opened.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code> itself
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.19.0
 * 
 */
sap.ui.ux3.ToolPopup.prototype.attachOpened = function(oData,fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Closes the pop up.
 * Can be called by the Shell when the pop up's button is clicked again; or by the application
 * when the interaction in the pop up has been completed or canceled.
 * 
 * @param {boolean} bPreventRestoreFocus
 *         If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened.
 *         This makes sense when the ToolPopup is closed programmatically from a different area of the application
 *         (outside the ToolPopup) and the focus should not move aways from that place.
 * @returns {sap.ui.ux3.ToolPopup}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ToolPopup.prototype.close = function(bPreventRestoreFocus) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.destroyButtons = function() { return new sap.ui.ux3.ToolPopup(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.destroyContent = function() { return new sap.ui.ux3.ToolPopup(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:close close} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachClose = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:closed closed} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachClosed = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:enter enter} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachEnter = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:iconChanged iconChanged} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachIconChanged = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:open open} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachOpen = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:opened opened} event of this <code>sap.ui.ux3.ToolPopup</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.19.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.detachOpened = function(fnFunction,oListener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Creates a new subclass of class sap.ui.ux3.ToolPopup with name <code>sClassName</code>
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
sap.ui.ux3.ToolPopup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:close close} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireClose = function(mParameters) { return false; };

/**
 * Fires event {@link #event:closed closed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireClosed = function(mParameters) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Fires event {@link #event:enter enter} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originalEvent] The onsapenter event, received by the pop up
 * @param {sap.ui.core.Control} [mParameters.originalSrcControl] The control that was focused when the user pressed the Enter key (may be null)
 * 
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireEnter = function(mParameters) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Fires event {@link #event:iconChanged iconChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireIconChanged = function(mParameters) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Fires event {@link #event:open open} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireOpen = function(mParameters) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Fires event {@link #event:opened opened} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.19.0
 * 
 */
sap.ui.ux3.ToolPopup.prototype.fireOpened = function(mParameters) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Gets current value of property {@link #getAutoClose autoClose}.
 * 
 * Determines whether the ToolPopup will auto close when it loses focus.
 * If the user e.g. clicks outside of the ToolPopup it will be closed.
 * Please don't use "modal" and "autoclose" at the same time.
 * In this case a warning will be prompted to the console and "autoclose" won't be used.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>autoClose</code>
 * @since 1.13.2
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getAutoClose = function() { return false; };

/**
 * Gets content of aggregation {@link #getButtons buttons}.
 * 
 * Defines the buttons to appear in the popup
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getButtons = function() { return new Array(); };

/**
 * Gets current value of property {@link #getCloseDuration closeDuration}.
 * 
 * Time in milliseconds for the close animation.
 * 
 * Default value is <code>400</code>.
 * @returns {int} Value of property <code>closeDuration</code>
 * @since 1.19.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getCloseDuration = function() { return 0; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Defines the content of the popup
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getContent = function() { return new Array(); };

/**
 * ID of the element which is the current target of the association {@link #getDefaultButton defaultButton}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * @since 1.20.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getDefaultButton = function() { return new sap.ui.core.ID(); };

/**
 * Indicates whether the ToolPopup is currently enabled or not.
 * 
 * Applications can't control the enabled state via a property. A ToolPopup is implicitly
 * enabled depending on its <code>openState</code>. Descendant controls that honor the
 * enabled state of their ancestors will appear disabled after the ToolPopup is closed.
 * 
 * Since 1.13.1. Whether a dialog is regarded as "enabled" during the state transitions
 * (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase
 * and disabled during the CLOSING phase. The only potential change would be to treat the
 * OPENING phase as disabled as well. Applications should be prepared to receive events from
 * "enabled" controls after they called open() on the dialog until close() is called on it.
 * If the mentioned potential change should happen, the dialog will become enabled only
 * after the transition to OPEN. Events from "enabled" children then can still only arrive
 * between open() and close(), so applications that obey the previous rule should continue
 * to work. Only end users or code that explicitly triggers pseudo user events would notice
 * a difference. <br>
 * A second aspect that might change is the visual behavior of the content: during the CLOSING
 * phase it 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws
 * for content that becomes hidden soon. Should this show to be confusing for end users, it might
 * be changed.
 * 
 * @since 1.13.1
 * @returns {boolean}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * This property is relevant for Shell use:
 * The URL to the icon displayed in the tool area which is used to open the ToolPopup.
 * The recommended size is 32x32px, including some transparent border. Therefore,
 * the content will cover about 20x20px.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIconHover iconHover}.
 * 
 * This property is relevant for Shell use:
 * The URL to the icon in hover state, displayed in the tool area which is used to open the popup.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconHover</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIconHover = function() { return new sap.ui.core.URI(); };

/**
 * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getInitialFocus = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getInverted inverted}.
 * 
 * Specifies whether the ToolPopup has a dark or bright background. If set to true
 * the background and borders will be dark. If false they will be bright.
 * This property only has an effect for the GoldReflection-theme.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>inverted</code>
 * @since 1.11.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getInverted = function() { return false; };

/**
 * Gets current value of property {@link #getMaxHeight maxHeight}.
 * 
 * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content
 * is higher than the ToolPopup, the content will be scrollable.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>maxHeight</code>
 * @since 1.13.2
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getMaxHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getMaxWidth maxWidth}.
 * 
 * Forces a maximum width of the ToolPopup in pixels.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>maxWidth</code>
 * @since 1.15.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getMaxWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.ux3.ToolPopup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.ux3.ToolPopup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getModal modal}.
 * 
 * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
 * Changing this property while the ToolPopup is open will not have any effect.
 * Please don't use "modal" and "autoclose" at the same time. In this case a warning will
 * be prompted to the console and "autoclose" won't be used.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>modal</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getModal = function() { return false; };

/**
 * Gets current value of property {@link #getOpenDuration openDuration}.
 * 
 * Time in milliseconds for the open animation.
 * 
 * Default value is <code>400</code>.
 * @returns {int} Value of property <code>openDuration</code>
 * @since 1.19.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getOpenDuration = function() { return 0; };

/**
 * ID of the element which is the current target of the association {@link #getOpener opener}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getOpener = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Determines the title displayed in the pop up window
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getButtons buttons}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oButton The button whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.indexOfButton = function(oButton) { return 0; };

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
sap.ui.ux3.ToolPopup.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a button into the aggregation {@link #getButtons buttons}.
 * 
 * @param {sap.ui.core.Control}
 *            oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the button should be inserted at; for
 *              a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the button is inserted at
 *              the last position
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.insertButton = function(oButton,iIndex) { return new sap.ui.ux3.ToolPopup(); };

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
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Indicates whether the pop up is currently open
 * 
 * @returns {boolean}
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.isOpen = function() { return false; };

/**
 * Opens the ToolPopup.
 * It is checked which control wants to open the ToolPopup. The Shell was previously
 * set as parent so the corresponding parent element is used to set the correct position of the ToolPopup.
 * If another control (i.e. a button) opens the ToolPopup, the control must be previously
 * set as <code>opener</code> via <code>setOpener</code> to the ToolPopup.
 * Corresponding to this opener the position of the ToolPopup will be set.
 * It's also possible to set the position above, below or left from the opener.
 * This can be done via the possible parameters <code>my</code> and <code>at</code>.
 * These parameters refers to work the same way as they do of sap.ui.core.Popup.open.
 * 
 * @param {sap.ui.core.Popup.Dock} [my=sap.ui.core.Popup.Dock.CenterCenter] The ToolPopup's content
 * reference position for docking
 * @param {sap.ui.core.Popup.Dock} [at=sap.ui.core.Popup.Dock.CenterCenter] The "of" element's
 * reference point for docking to
 * @returns {sap.ui.ux3.ToolPopup}
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.open = function(my,at) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Removes all the controls from the aggregation {@link #getButtons buttons}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeAllButtons = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a button from the aggregation {@link #getButtons buttons}.
 * 
 * @param {int | string | sap.ui.core.Control} vButton The button to remove or its index or id
 * @returns {sap.ui.core.Control} The removed button or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeButton = function(vButton) { return new sap.ui.core.Control(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.core.Control} vContent The content to remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Removes an ID to the Popup that should be focusable as well when using <code>autoclose</code>.
 * Chaining is only possible if a valid type (string) is given.
 * 
 * @param {string} [sID] ID of the corresponding element
 * @since 1.19.0
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ToolPopup.prototype.removeFocusableArea = function(sID) {  };

/**
 * Sets a new value for property {@link #getAutoClose autoClose}.
 * 
 * Determines whether the ToolPopup will auto close when it loses focus.
 * If the user e.g. clicks outside of the ToolPopup it will be closed.
 * Please don't use "modal" and "autoclose" at the same time.
 * In this case a warning will be prompted to the console and "autoclose" won't be used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAutoClose New value for property <code>autoClose</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.2
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setAutoClose = function(bAutoClose) { return new sap.ui.ux3.ToolPopup(); };

/**
 * This is just a forward to the Popup's function (sap.ui.core.Popup.setAutoCloseAreas)
 * with the same functionality.
 * 
 * @param {Element[]} aAutoCloseAreas
 * @public
 * @since 1.19.0
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setAutoCloseAreas = function(aAutoCloseAreas) {  };

/**
 * Sets a new value for property {@link #getCloseDuration closeDuration}.
 * 
 * Time in milliseconds for the close animation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>400</code>.
 * @param {int} iCloseDuration New value for property <code>closeDuration</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.19.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setCloseDuration = function(iCloseDuration) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets the associated {@link #getDefaultButton defaultButton}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oDefaultButton ID of an element which becomes the new target of this defaultButton association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.20.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setDefaultButton = function(oDefaultButton) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets the associated {@link #getInitialFocus initialFocus}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialFocus ID of an element which becomes the new target of this initialFocus association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setInitialFocus = function(oInitialFocus) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets a new value for property {@link #getInverted inverted}.
 * 
 * Specifies whether the ToolPopup has a dark or bright background. If set to true
 * the background and borders will be dark. If false they will be bright.
 * This property only has an effect for the GoldReflection-theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bInverted New value for property <code>inverted</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.11.1
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setInverted = function(bInverted) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets a new value for property {@link #getMaxHeight maxHeight}.
 * 
 * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content
 * is higher than the ToolPopup, the content will be scrollable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sMaxHeight New value for property <code>maxHeight</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.13.2
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setMaxHeight = function(sMaxHeight) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets a new value for property {@link #getModal modal}.
 * 
 * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
 * Changing this property while the ToolPopup is open will not have any effect.
 * Please don't use "modal" and "autoclose" at the same time. In this case a warning will
 * be prompted to the console and "autoclose" won't be used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bModal New value for property <code>modal</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setModal = function(bModal) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets a new value for property {@link #getOpenDuration openDuration}.
 * 
 * Time in milliseconds for the open animation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>400</code>.
 * @param {int} iOpenDuration New value for property <code>openDuration</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * @since 1.19.0
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setOpenDuration = function(iOpenDuration) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets the associated {@link #getOpener opener}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oOpener ID of an element which becomes the new target of this opener association; alternatively, an element instance may be given
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setOpener = function(oOpener) { return new sap.ui.ux3.ToolPopup(); };

/**
 * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
 * 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setPosition = function() {  };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Determines the title displayed in the pop up window
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.ux3.ToolPopup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.setTitle = function(sTitle) { return new sap.ui.ux3.ToolPopup(); };


// ---- sap.ui.ux3.VisibleItemCountMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.ux3.VisibleItemCountMode.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.ux3 --------------------------------------------------------------------------

/**
 * Experimental implementation of visual Ux3 Shell personalization / branding.
 * 
 * DO NOT USE PRODUCTIVELY!!!
 * 
 * 
 * Being completely non-generic as of now, this is supposed to facilitate discussions with Ux
 * about the personalization capabilities. Once that concept is more final, we can go for a cleaner implementation,
 * considering the number of configurable properties etc.
 * 
 * 
 * @param oShell
 * @public
 * @experimental Since 1.0. The Shell-features Personalization, Color Picker and “Inspect”-Tool are only experimental work and might change or disappear in future versions.
 * @deprecated Since 1.36. This class was never released for productive use and will never be.
 * 
 * @memberof sap.ui.ux3
 */
sap.ui.ux3.ShellPersonalization = undefined;


// ---- sap.ui.ux3.ActionBarSocialActions --------------------------------------------------------------------------

/**
 * Standards action 'Mark as Favorite'
 * @public
 * 
 */
sap.ui.ux3.ActionBarSocialActions.Favorite = "";

/**
 * Standard action 'Mark for Follow up'
 * @public
 * 
 */
sap.ui.ux3.ActionBarSocialActions.Flag = "";

/**
 * Standard action 'Follow/Unfollow'
 * @public
 * 
 */
sap.ui.ux3.ActionBarSocialActions.Follow = "";

/**
 * Standard action 'Open Thing Inspector'
 * @public
 * 
 */
sap.ui.ux3.ActionBarSocialActions.Open = "";

/**
 * Standard action 'Create an update' (Feed)
 * @public
 * 
 */
sap.ui.ux3.ActionBarSocialActions.Update = "";


// ---- sap.ui.ux3.ExactOrder --------------------------------------------------------------------------

/**
 * The order of the sub lists is defined by order of the defined sub attributes.
 * @public
 * 
 */
sap.ui.ux3.ExactOrder.Fixed = "";

/**
 * The order of the sub lists is defined by the selection order of the user.
 * @public
 * 
 */
sap.ui.ux3.ExactOrder.Select = "";


// ---- sap.ui.ux3.FeederType --------------------------------------------------------------------------

/**
 * comment feeder (small)
 * @public
 * 
 */
sap.ui.ux3.FeederType.Comment = "";

/**
 * large Feeder
 * @public
 * 
 */
sap.ui.ux3.FeederType.Large = "";

/**
 * medium feeder
 * @public
 * 
 */
sap.ui.ux3.FeederType.Medium = "";


// ---- sap.ui.ux3.FollowActionState --------------------------------------------------------------------------

/**
 * default state
 * @public
 * 
 */
sap.ui.ux3.FollowActionState.Default = "";

/**
 * follow state
 * @public
 * 
 */
sap.ui.ux3.FollowActionState.Follow = "";

/**
 * hold state
 * @public
 * 
 */
sap.ui.ux3.FollowActionState.Hold = "";


// ---- sap.ui.ux3.NotificationBarStatus --------------------------------------------------------------------------

/**
 * Default height for the bar
 * @public
 * 
 */
sap.ui.ux3.NotificationBarStatus.Default = "";

/**
 * Bar should be maximized
 * @public
 * 
 */
sap.ui.ux3.NotificationBarStatus.Max = "";

/**
 * Bar should be minimized
 * @public
 * 
 */
sap.ui.ux3.NotificationBarStatus.Min = "";

/**
 * Bar should not be visible
 * @public
 * 
 */
sap.ui.ux3.NotificationBarStatus.None = "";


// ---- sap.ui.ux3.ShellDesignType --------------------------------------------------------------------------

/**
 * 
 * An even lighter design. It borrows most of its properties from the Light
 * design and just changes a few details like the header colors in order to
 * have a blue design within gold reflection.
 * 
 * @public
 * 
 */
sap.ui.ux3.ShellDesignType.Crystal = "";

/**
 * 
 * A lighter design. Should be used in combination with the Standard header
 * type.
 * 
 * @public
 * 
 */
sap.ui.ux3.ShellDesignType.Light = "";

/**
 * The standard Shell design (dark).
 * @public
 * 
 */
sap.ui.ux3.ShellDesignType.Standard = "";


// ---- sap.ui.ux3.ShellHeaderType --------------------------------------------------------------------------

/**
 * Only the branding area is visible. Top-level navigation bar, header items, title and icon are not shown.
 * @public
 * 
 */
sap.ui.ux3.ShellHeaderType.BrandOnly = "";

/**
 * Like the Standard Area but without top-level navigation bar.
 * @public
 * 
 */
sap.ui.ux3.ShellHeaderType.NoNavigation = "";

/**
 * Like the Standard Area but with a leaner top-level navigation bar.
 * @public
 * 
 */
sap.ui.ux3.ShellHeaderType.SlimNavigation = "";

/**
 * The standard Shell header.
 * @public
 * 
 */
sap.ui.ux3.ShellHeaderType.Standard = "";


// ---- sap.ui.ux3.ThingViewerHeaderType --------------------------------------------------------------------------

/**
 * The header content is displayed horizontally above the facet content
 * @public
 * 
 */
sap.ui.ux3.ThingViewerHeaderType.Horizontal = "";

/**
 * The standard ThingViewer header.
 * @public
 * 
 */
sap.ui.ux3.ThingViewerHeaderType.Standard = "";


// ---- sap.ui.ux3.VisibleItemCountMode --------------------------------------------------------------------------

/**
 * The FacetFilter automatically fills the height of the surrounding container. The visibleItemCount property is automatically changed accordingly.
 * @public
 * 
 */
sap.ui.ux3.VisibleItemCountMode.Auto = "";

/**
 * The FacetFilter always has as many items in the FacetFilterList as defined in the visibleItemCount property.
 * @public
 * 
 */
sap.ui.ux3.VisibleItemCountMode.Fixed = "";

