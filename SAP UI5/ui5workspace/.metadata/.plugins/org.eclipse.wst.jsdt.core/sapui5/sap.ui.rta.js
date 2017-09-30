
// ---- sap.ui.rta --------------------------------------------------------------------------


// ---- sap.ui.rta.RuntimeAuthoring --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.rta.RuntimeAuthoring class.
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
 * <li>{@link #getCustomFieldUrl customFieldUrl} : string</li>
 * <li>{@link #getShowCreateCustomField showCreateCustomField} : boolean</li>
 * <li>{@link #getShowToolbars showToolbars} : boolean (default: true)</li>
 * <li>{@link #getTriggeredFromDialog triggeredFromDialog} : boolean (default: false)</li>
 * <li>{@link #getShowSettingsDialog showSettingsDialog} : boolean (default: true)</li>
 * <li>{@link #getShowWindowUnloadDialog showWindowUnloadDialog} : boolean (default: true)</li>
 * <li>{@link #getCommandStack commandStack} : any</li>
 * <li>{@link #getPlugins plugins} : any (default: {})</li>
 * <li>{@link #getFlexSettings flexSettings} : object</li>
 * <li>{@link #getMode mode} : string (default: adaptation)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getRootControl rootControl} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:start start} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:stop stop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:failed failed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:selectionChange selectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:undoRedoStackModified undoRedoStackModified} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * 
 * @class The runtime authoring allows to adapt the fields of a running application.
 * @extends sap.ui.base.ManagedObject
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.30
 * @experimental This class is experimental and provides only limited functionality. Also the API might be changed in future.
 * 
 */
sap.ui.rta.RuntimeAuthoring = function() {};
/**
 * Fired when the runtime authoring failed to start
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.failed = function(oControlEvent) {  };

/**
 * Event fired when a DesignTime selection is changed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.dt.Overlay[]} oControlEvent.getParameters.selection 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.selectionChange = function(oControlEvent) {  };

/**
 * Fired when the runtime authoring is started
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.editablePluginsCount 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.start = function(oControlEvent) {  };

/**
 * Fired when the runtime authoring is stopped
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.stop = function(oControlEvent) {  };

/**
 * Fired when the undo/redo stack has changed, undo/redo buttons can be updated
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.undoRedoStackModified = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:failed failed} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.rta.RuntimeAuthoring</code> itself.
 * 
 * Fired when the runtime authoring failed to start
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.rta.RuntimeAuthoring</code> itself
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.attachFailed = function(oData,fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChange selectionChange} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.rta.RuntimeAuthoring</code> itself.
 * 
 * Event fired when a DesignTime selection is changed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.rta.RuntimeAuthoring</code> itself
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.attachSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:start start} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.rta.RuntimeAuthoring</code> itself.
 * 
 * Fired when the runtime authoring is started
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.rta.RuntimeAuthoring</code> itself
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.attachStart = function(oData,fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:stop stop} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.rta.RuntimeAuthoring</code> itself.
 * 
 * Fired when the runtime authoring is stopped
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.rta.RuntimeAuthoring</code> itself
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.attachStop = function(oData,fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:undoRedoStackModified undoRedoStackModified} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.rta.RuntimeAuthoring</code> itself.
 * 
 * Fired when the undo/redo stack has changed, undo/redo buttons can be updated
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.rta.RuntimeAuthoring</code> itself
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.attachUndoRedoStackModified = function(oData,fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:failed failed} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.detachFailed = function(fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChange selectionChange} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.detachSelectionChange = function(fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:start start} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.detachStart = function(fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:stop stop} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.detachStop = function(fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:undoRedoStackModified undoRedoStackModified} event of this <code>sap.ui.rta.RuntimeAuthoring</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.detachUndoRedoStackModified = function(fnFunction,oListener) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Disable restart of RTA
 * the RTA FLP plugin whould handle the restart
 * 
 * @public
 * @static
 * 
 */
sap.ui.rta.RuntimeAuthoring.disableRestart = function() {  };

/**
 * Enable restart of RTA
 * the RTA FLP plugin would handle the restart
 * 
 * @public
 * @static
 * 
 */
sap.ui.rta.RuntimeAuthoring.enableRestart = function() {  };

/**
 * Exit Runtime Authoring - destroy all controls and plugins
 * 
 * @protected
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.rta.RuntimeAuthoring with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.rta.RuntimeAuthoring.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:failed failed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.fireFailed = function(mParameters) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.dt.Overlay[]} [mParameters.selection] 
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.fireSelectionChange = function(mParameters) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Fires event {@link #event:start start} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.editablePluginsCount] 
 * 
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.fireStart = function(mParameters) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Fires event {@link #event:stop stop} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.fireStop = function(mParameters) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Fires event {@link #event:undoRedoStackModified undoRedoStackModified} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.fireUndoRedoStackModified = function(mParameters) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Gets current value of property {@link #getCustomFieldUrl customFieldUrl}.
 * 
 * The URL which is called when the custom field dialog is opened
 * 
 * @returns {string} Value of property <code>customFieldUrl</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getCustomFieldUrl = function() { return ""; };

/**
 * Returns (and creates) the default plugins of RuntimeAuthoring
 * 
 * These are AdditionalElements, ContextMenu, CreateContainer, CutPaste,
 * DragDrop, Remove, Rename, Selection, Settings, TabHandling
 * 
 * Method uses a local cache to hold the default plugins: Then on multiple access
 * always the same instances get returned.
 * 
 * @public
 * @return {map} Map with plugins
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getDefaultPlugins = function() { return null; };

/**
 * Gets current value of property {@link #getFlexSettings flexSettings}.
 * 
 * Map with flex-related settings
 * 
 * @returns {object} Value of property <code>flexSettings</code>
 * 
 * @experimental 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getFlexSettings = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ui.rta.RuntimeAuthoring.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.rta.RuntimeAuthoring.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMode mode}.
 * 
 * Defines view state of the RTA. Possible values: adaptation, navigation
 * 
 * Default value is <code>adaptation</code>.
 * @returns {string} Value of property <code>mode</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getMode = function() { return ""; };

/**
 * Gets current value of property {@link #getPlugins plugins}.
 * 
 * Map indicating plugins in to be loaded or in use by RuntimeAuthoring and DesignTime
 * 
 * Default value is <code>{}</code>.
 * @returns {any} Value of property <code>plugins</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getPlugins = function() { return null; };

/**
 * ID of the element which is the current target of the association {@link #getRootControl rootControl}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getRootControl = function() { return new sap.ui.core.ID(); };

/**
 * Returns a selection from the DesignTime
 * @return {sap.ui.dt.Overlay[]} selected overlays
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getSelection = function() { return new Array(); };

/**
 * Gets current value of property {@link #getShowCreateCustomField showCreateCustomField}.
 * 
 * Whether the create custom field button should be shown
 * 
 * @returns {boolean} Value of property <code>showCreateCustomField</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getShowCreateCustomField = function() { return false; };

/**
 * Gets current value of property {@link #getShowSettingsDialog showSettingsDialog}.
 * 
 * Temporary property : whether to show a dialog for changing control's properties#
 * should be removed after DTA will fully switch to a property panel
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSettingsDialog</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getShowSettingsDialog = function() { return false; };

/**
 * Gets current value of property {@link #getShowToolbars showToolbars}.
 * 
 * Whether the create custom field button should be shown
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showToolbars</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getShowToolbars = function() { return false; };

/**
 * Gets current value of property {@link #getShowWindowUnloadDialog showWindowUnloadDialog}.
 * 
 * Whether the window unload dialog should be shown
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showWindowUnloadDialog</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getShowWindowUnloadDialog = function() { return false; };

/**
 * Gets current value of property {@link #getTriggeredFromDialog triggeredFromDialog}.
 * 
 * Whether rta is triggered from a dialog button
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>triggeredFromDialog</code>
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.getTriggeredFromDialog = function() { return false; };

/**
 * Check if restart of RTA is needed
 * the RTA FLP plugin will check this
 * and restart RTA if needed
 * 
 * @public
 * @static
 * @returns {Boolean} if restart is needed
 * 
 */
sap.ui.rta.RuntimeAuthoring.needsRestart = function() { return null; };

/**
 * Sets a new value for property {@link #getCustomFieldUrl customFieldUrl}.
 * 
 * The URL which is called when the custom field dialog is opened
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sCustomFieldUrl New value for property <code>customFieldUrl</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setCustomFieldUrl = function(sCustomFieldUrl) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets a new value for property {@link #getPlugins plugins}.
 * 
 * Map indicating plugins in to be loaded or in use by RuntimeAuthoring and DesignTime
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>{}</code>.
 * @param {any} oPlugins New value for property <code>plugins</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setPlugins = function(oPlugins) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets the associated {@link #getRootControl rootControl}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oRootControl ID of an element which becomes the new target of this rootControl association; alternatively, an element instance may be given
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setRootControl = function(oRootControl) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets a new value for property {@link #getShowCreateCustomField showCreateCustomField}.
 * 
 * Whether the create custom field button should be shown
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bShowCreateCustomField New value for property <code>showCreateCustomField</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setShowCreateCustomField = function(bShowCreateCustomField) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets a new value for property {@link #getShowSettingsDialog showSettingsDialog}.
 * 
 * Temporary property : whether to show a dialog for changing control's properties#
 * should be removed after DTA will fully switch to a property panel
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSettingsDialog New value for property <code>showSettingsDialog</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setShowSettingsDialog = function(bShowSettingsDialog) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets a new value for property {@link #getShowToolbars showToolbars}.
 * 
 * Whether the create custom field button should be shown
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowToolbars New value for property <code>showToolbars</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setShowToolbars = function(bShowToolbars) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets a new value for property {@link #getShowWindowUnloadDialog showWindowUnloadDialog}.
 * 
 * Whether the window unload dialog should be shown
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowWindowUnloadDialog New value for property <code>showWindowUnloadDialog</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setShowWindowUnloadDialog = function(bShowWindowUnloadDialog) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Sets a new value for property {@link #getTriggeredFromDialog triggeredFromDialog}.
 * 
 * Whether rta is triggered from a dialog button
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bTriggeredFromDialog New value for property <code>triggeredFromDialog</code>
 * @returns {sap.ui.rta.RuntimeAuthoring} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.setTriggeredFromDialog = function(bTriggeredFromDialog) { return new sap.ui.rta.RuntimeAuthoring(); };

/**
 * Start Runtime Authoring
 * 
 * @public
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.start = function() {  };

/**
 * stop Runtime Authoring
 * 
 * @public
 * @param {boolean} bDontSaveChanges - stop RTA with or w/o saving changes
 * @param {boolean} bSkipCheckPersChanges - stop RTA with or w/o checking for personalized changes
 * @returns {Promise} promise with no parameters
 * 
 */
sap.ui.rta.RuntimeAuthoring.prototype.stop = function(bDontSaveChanges,bSkipCheckPersChanges) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------
