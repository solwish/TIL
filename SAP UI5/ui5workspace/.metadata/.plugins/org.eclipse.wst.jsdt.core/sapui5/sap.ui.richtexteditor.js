
// ---- sap.ui.richtexteditor --------------------------------------------------------------------------


// ---- sap.ui.richtexteditor.EditorType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.richtexteditor.EditorType.toString = function() { return ""; };

// ---- sap.ui.richtexteditor.IToolbar --------------------------------------------------------------------------


// ---- sap.ui.richtexteditor.RichTextEditor --------------------------------------------------------------------------

/**
 * Constructor for a new RichTextEditor.
 * 
 * The RichTextEditor uses a third party component, which might in some cases not be
 * completely compatible with the way UI5's (re-)rendering mechanism works. If you keep hidden
 * instances of the control (instances which are not visible in the DOM), you might run into
 * problems with some browser versions. In this case please make sure you destroy the
 * RichTextEditor instance instead of hiding it and create a new one when you show it again.
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
 * <li>{@link #getValue value} : string (default: )</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: Inherit)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditorType editorType} : string (default: TinyMCE)</li>
 * <li>{@link #getEditorLocation editorLocation} : string (default: js/tiny_mce/tiny_mce_src.js)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getShowGroupFontStyle showGroupFontStyle} : boolean (default: true)</li>
 * <li>{@link #getShowGroupTextAlign showGroupTextAlign} : boolean (default: true)</li>
 * <li>{@link #getShowGroupStructure showGroupStructure} : boolean (default: true)</li>
 * <li>{@link #getShowGroupFont showGroupFont} : boolean (default: false)</li>
 * <li>{@link #getShowGroupClipboard showGroupClipboard} : boolean (default: true)</li>
 * <li>{@link #getShowGroupInsert showGroupInsert} : boolean (default: false)</li>
 * <li>{@link #getShowGroupLink showGroupLink} : boolean (default: false)</li>
 * <li>{@link #getShowGroupUndo showGroupUndo} : boolean (default: false)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li>
 * <li>{@link #getSanitizeValue sanitizeValue} : boolean (default: true)</li>
 * <li>{@link #getPlugins plugins} : object[] (default: [])</li>
 * <li>{@link #getUseLegacyTheme useLegacyTheme} : boolean (default: true)</li>
 * <li>{@link #getButtonGroups buttonGroups} : object[] (default: [])</li>
 * <li>{@link #getCustomToolbar customToolbar} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomButtons customButtons} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:ready ready} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:readyRecurring readyRecurring} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeEditorInit beforeEditorInit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * 
 * <p>
 * The RichTextEditor-Control is used to enter formatted text.
 * </p>
 * 
 * <p>
 * The <code>RichTextEditor<code> uses a third party component, which might in some cases not be
 * completely compatible with the way UI5's (re-)rendering mechanism works. <strong>If you keep hidden
 * instances of the control (instances which are not visible in the DOM), you might run into
 * problems with some browser versions.<strong> In this case please make sure you destroy the
 * <code>RichTextEditor<code> instance instead of hiding it and create a new one when you show it again.
 * </p>
 * 
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @disclaimer Since version 1.6.0.
 * The RichTextEditor of SAPUI5 contains a third party component TinyMCE provided by Moxiecode Systems AB. The SAP license agreement covers the development of applications with RichTextEditor of SAPUI5 (as of May 2014).
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.richtexteditor.RichTextEditor = function(sId,mSettings) {};
/**
 * This event is fired right before the TinyMCE instance is created and can be used to change the settings object that will be given to TinyMCE. The parameter "configuration" is the javascript oject that will be given to TinyMCE upon first instantiation. The configuration parameter contains a map that can be changed in the case of TinyMCE.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.beforeEditorInit = function(oControlEvent) {  };

/**
 * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter key is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new control value.
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.change = function(oControlEvent) {  };

/**
 * Fired when the used editor is loaded and ready (its HTML is also created).
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.ready = function(oControlEvent) {  };

/**
 * Analogous to the ready event, the event is fired when the used editor is loaded and ready. But the event is fired after every time the control is ready to use and not only once like the ready event.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.readyRecurring = function(oControlEvent) {  };

/**
 * Adds a button group to the editor.
 * 
 * @param {map|string} [mGroup] Name/ID of a single button or map containing the group information
 * @param {string[]}   [mGroup.buttons] Array of name/IDs of the buttons in the group
 * @param {string}     [mGroup.name] Name/ID of the group.
 * @param {boolean}    [mGroup.visible=true] (optional) The priority of the button group. Lower priorities are added first.
 * @param {int}        [mGroup.row=0] (optional) Row number in which the button should be
 * @param {int}        [mGroup.priority=10] (optional) The priority of the button group. Lower priorities are added first.
 * @public
 * @returns {object} Control instance (for method chaining)
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.addButtonGroup = function(mGroup) { return new Object(); };

/**
 * Adds some customButton to the aggregation {@link #getCustomButtons customButtons}.
 * @param {sap.ui.core.Control}
 *            oCustomButton the customButton to add; if empty, nothing is inserted
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.addCustomButton = function(oCustomButton) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Allows to add plugins (that must already be installed on the server) to the
 * RichtextEditor.
 * 
 * @param {map|string} [mPlugin] A map with the property name containing the plugin IDs/name or an object with the property "name".
 * @public
 * @returns {object} Control instance (for method chaining)
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.addPlugin = function(mPlugin) { return new Object(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:beforeEditorInit beforeEditorInit} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself.
 * 
 * This event is fired right before the TinyMCE instance is created and can be used to change the settings object that will be given to TinyMCE. The parameter "configuration" is the javascript oject that will be given to TinyMCE upon first instantiation. The configuration parameter contains a map that can be changed in the case of TinyMCE.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself
 * 
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.attachBeforeEditorInit = function(oData,fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:change change} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself.
 * 
 * Event is fired when the text in the field has changed AND the focus leaves the editor or when the Enter key is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself
 * 
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:ready ready} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself.
 * 
 * Fired when the used editor is loaded and ready (its HTML is also created).
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself
 * 
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.attachReady = function(oData,fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:readyRecurring readyRecurring} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself.
 * 
 * Analogous to the ready event, the event is fired when the used editor is loaded and ready. But the event is fired after every time the control is ready to use and not only once like the ready event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.richtexteditor.RichTextEditor</code> itself
 * 
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.attachReadyRecurring = function(oData,fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Destroys all the customButtons in the aggregation {@link #getCustomButtons customButtons}.
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.destroyCustomButtons = function() { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:beforeEditorInit beforeEditorInit} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.detachBeforeEditorInit = function(fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:change change} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:ready ready} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.detachReady = function(fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:readyRecurring readyRecurring} event of this <code>sap.ui.richtexteditor.RichTextEditor</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.detachReadyRecurring = function(fnFunction,oListener) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Creates a new subclass of class sap.ui.richtexteditor.RichTextEditor with name <code>sClassName</code>
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
sap.ui.richtexteditor.RichTextEditor.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:beforeEditorInit beforeEditorInit} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.fireBeforeEditorInit = function(mParameters) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Fires event {@link #event:change change} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.newValue] The new control value.
 * 
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.fireChange = function(mParameters) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Fires event {@link #event:ready ready} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.fireReady = function(mParameters) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Fires event {@link #event:readyRecurring readyRecurring} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.fireReadyRecurring = function(mParameters) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Gets current value of property {@link #getButtonGroups buttonGroups}.
 * 
 * An array of button configurations. These configurations contain the names of buttons as array in the property "buttons" and the name of the group in "name", they can also contain the "row" where the buttons should be placed, a "priority" and whether the buttons are "visible". See method addButtonGroup() for more details on the structure of the objects in this array.
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>buttonGroups</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getButtonGroups = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getCustomButtons customButtons}.
 * 
 * Custom buttons are meant to extend the RichTextEditor's custom toolbar.
 * Though type is set to sap.ui.Control, only sap.m.Button is allowed.
 * <b>Note:</b> customButtons are available only when the customToolbar is enabled and all the requirements are fulfilled.
 * 
 * @returns {sap.ui.core.Control[]}
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getCustomButtons = function() { return new Array(); };

/**
 * Gets current value of property {@link #getCustomToolbar customToolbar}.
 * 
 * Determines whether a Fiori Toolbar is used instead of the TinyMCE default toolbar one. It is applied only when the EditorType is TinyMCE4 and sap.m library is loaded.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>customToolbar</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getCustomToolbar = function() { return false; };

/**
 * Gets current value of property {@link #getEditable editable}.
 * 
 * Determines whether the editor content can be modified by the user. When set to "false" there might not be any editor toolbar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property {@link #getEditorLocation editorLocation}.
 * 
 * Relative or absolute URL where the editor is available. Must be on the same server.
 * Any attempts to set this property after the first rendering will not have any effect.
 * 
 * Default value is <code>js/tiny_mce/tiny_mce_src.js</code>.
 * @returns {string} Value of property <code>editorLocation</code>
 * 
 * @deprecated Since version 1.25.0.
 * The editorLocation is set implicitly when choosing the editorType.
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getEditorLocation = function() { return ""; };

/**
 * Gets current value of property {@link #getEditorType editorType}.
 * 
 * The editor implementation to use.
 * Valid values are the ones found under sap.ui.richtexteditor.EditorType and any other editor identifier that may be introduced by other groups (hence this is not an enumeration).
 * Any attempts to set this property after the first rendering will not have any effect.
 * 
 * Default value is <code>TinyMCE</code>.
 * @returns {string} Value of property <code>editorType</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getEditorType = function() { return ""; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of RichTextEditor control in CSS units.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.richtexteditor.RichTextEditor.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.richtexteditor.RichTextEditor.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the current editor's instance.
 * CAUTION: using the native editor introduces a dependency to that editor and breaks the wrapping character of the RichTextEditor control, so it should only be done in justified cases.
 * 
 * @returns {object} The native editor object (here: The TinyMCE editor instance)
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getNativeApi = function() { return new Object(); };

/**
 * Gets current value of property {@link #getPlugins plugins}.
 * 
 * An array of plugin configuration objects with the obligatory property "name".
 * Each object has to contain a property "name" which then contains the plugin name/ID.
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>plugins</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getPlugins = function() { return new Array(); };

/**
 * Gets current value of property {@link #getRequired required}.
 * 
 * Determines whether a value is required.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>required</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getRequired = function() { return false; };

/**
 * Gets current value of property {@link #getSanitizeValue sanitizeValue}.
 * 
 * Determines whether to run the HTML sanitizer once the value (HTML markup) is applied or not. To configure allowed URLs please use the whitelist API via <code>jQuery.sap.addUrlWhitelist</code>
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>sanitizeValue</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getSanitizeValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupClipboard showGroupClipboard}.
 * 
 * Determines whether the toolbar button group containing commands like Cut, Copy and Paste is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showGroupClipboard</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupClipboard = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupFont showGroupFont}.
 * 
 * Determines whether the toolbar button group containing commands like Font, Font Size and Colors is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showGroupFont</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupFont = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupFontStyle showGroupFontStyle}.
 * 
 * Determines whether the toolbar button group containing commands like Bold, Italic, Underline and Strikethrough is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showGroupFontStyle</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupFontStyle = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupInsert showGroupInsert}.
 * 
 * Determines whether the toolbar button group containing commands like Insert Image and Insert Smiley is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showGroupInsert</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupInsert = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupLink showGroupLink}.
 * 
 * Determines whether the toolbar button group containing commands like Create Link and Remove Link is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showGroupLink</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupLink = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupStructure showGroupStructure}.
 * 
 * Determines whether the toolbar button group containing commands like Bullets and Indentation is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showGroupStructure</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupStructure = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupTextAlign showGroupTextAlign}.
 * 
 * Determines whether the toolbar button group containing text alignment commands is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showGroupTextAlign</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupTextAlign = function() { return false; };

/**
 * Gets current value of property {@link #getShowGroupUndo showGroupUndo}.
 * 
 * Determines whether the toolbar button group containing commands like Undo and Redo is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showGroupUndo</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getShowGroupUndo = function() { return false; };

/**
 * Gets current value of property {@link #getTextDirection textDirection}.
 * 
 * The text direction
 * 
 * Default value is <code>Inherit</code>.
 * @returns {sap.ui.core.TextDirection} Value of property <code>textDirection</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * Gets current value of property {@link #getUseLegacyTheme useLegacyTheme}.
 * 
 * Determines whether or not to use the legacy theme for the toolbar buttons. If this is set to false, the default theme for the editor will be used (which might change slightly with every update). The legacy theme has the disadvantage that not all functionality has its own icon, so using non default buttons might lead to invisible buttons with the legacy theme - use the default editor theme in this case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useLegacyTheme</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getUseLegacyTheme = function() { return false; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * An HTML string representing the editor content. Because this is HTML, the value cannot be generically escaped to prevent cross-site scripting, so the application is responsible for doing so.
 * Overwriting this property would also reset editor's Undo manager and buttons "Undo"/"Redo" would be set to their initial state.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getValue = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of RichTextEditor control in CSS units.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getWrapping wrapping}.
 * 
 * Determines whether the text in the editor is wrapped. This does not affect the editor's value, only the representation in the control.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>wrapping</code>
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.getWrapping = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getCustomButtons customButtons}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCustomButton The customButton whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.indexOfCustomButton = function(oCustomButton) { return 0; };

/**
 * Inserts a customButton into the aggregation {@link #getCustomButtons customButtons}.
 * 
 * @param {sap.ui.core.Control}
 *            oCustomButton the customButton to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the customButton should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customButton is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customButton is inserted at
 *              the last position
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.insertCustomButton = function(oCustomButton,iIndex) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomButtons customButtons}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.removeAllCustomButtons = function() { return new Array(); };

/**
 * Removes a customButton from the aggregation {@link #getCustomButtons customButtons}.
 * 
 * @param {int | string | sap.ui.core.Control} vCustomButton The customButton to remove or its index or id
 * @returns {sap.ui.core.Control} The removed customButton or <code>null</code>
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.removeCustomButton = function(vCustomButton) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getButtonGroups buttonGroups}.
 * 
 * An array of button configurations. These configurations contain the names of buttons as array in the property "buttons" and the name of the group in "name", they can also contain the "row" where the buttons should be placed, a "priority" and whether the buttons are "visible". See method addButtonGroup() for more details on the structure of the objects in this array.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sButtonGroups New value for property <code>buttonGroups</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setButtonGroups = function(sButtonGroups) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getCustomToolbar customToolbar}.
 * 
 * Determines whether a Fiori Toolbar is used instead of the TinyMCE default toolbar one. It is applied only when the EditorType is TinyMCE4 and sap.m library is loaded.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bCustomToolbar New value for property <code>customToolbar</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setCustomToolbar = function(bCustomToolbar) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getEditable editable}.
 * 
 * Determines whether the editor content can be modified by the user. When set to "false" there might not be any editor toolbar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setEditable = function(bEditable) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getEditorLocation editorLocation}.
 * 
 * Relative or absolute URL where the editor is available. Must be on the same server.
 * Any attempts to set this property after the first rendering will not have any effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>js/tiny_mce/tiny_mce_src.js</code>.
 * @param {string} sEditorLocation New value for property <code>editorLocation</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.25.0.
 * The editorLocation is set implicitly when choosing the editorType.
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setEditorLocation = function(sEditorLocation) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Switches the editor type and sets the default settings for the editor.
 * All plugins and button groups should be set after this has been invoked
 * 
 * @param {string} [sEditorType] Which editor type to be used (currently only TinyMCE 3 and 4)
 * @returns {object} Control instance (for method chaining)
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setEditorType = function(sEditorType) { return new Object(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of RichTextEditor control in CSS units.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setHeight = function(sHeight) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getPlugins plugins}.
 * 
 * An array of plugin configuration objects with the obligatory property "name".
 * Each object has to contain a property "name" which then contains the plugin name/ID.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sPlugins New value for property <code>plugins</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setPlugins = function(sPlugins) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getRequired required}.
 * 
 * Determines whether a value is required.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bRequired New value for property <code>required</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setRequired = function(bRequired) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getSanitizeValue sanitizeValue}.
 * 
 * Determines whether to run the HTML sanitizer once the value (HTML markup) is applied or not. To configure allowed URLs please use the whitelist API via <code>jQuery.sap.addUrlWhitelist</code>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSanitizeValue New value for property <code>sanitizeValue</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setSanitizeValue = function(bSanitizeValue) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupClipboard showGroupClipboard}.
 * 
 * Determines whether the toolbar button group containing commands like Cut, Copy and Paste is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowGroupClipboard New value for property <code>showGroupClipboard</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupClipboard = function(bShowGroupClipboard) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupFont showGroupFont}.
 * 
 * Determines whether the toolbar button group containing commands like Font, Font Size and Colors is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowGroupFont New value for property <code>showGroupFont</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupFont = function(bShowGroupFont) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupFontStyle showGroupFontStyle}.
 * 
 * Determines whether the toolbar button group containing commands like Bold, Italic, Underline and Strikethrough is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowGroupFontStyle New value for property <code>showGroupFontStyle</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupFontStyle = function(bShowGroupFontStyle) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupInsert showGroupInsert}.
 * 
 * Determines whether the toolbar button group containing commands like Insert Image and Insert Smiley is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowGroupInsert New value for property <code>showGroupInsert</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupInsert = function(bShowGroupInsert) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupLink showGroupLink}.
 * 
 * Determines whether the toolbar button group containing commands like Create Link and Remove Link is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowGroupLink New value for property <code>showGroupLink</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupLink = function(bShowGroupLink) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupStructure showGroupStructure}.
 * 
 * Determines whether the toolbar button group containing commands like Bullets and Indentation is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowGroupStructure New value for property <code>showGroupStructure</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupStructure = function(bShowGroupStructure) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupTextAlign showGroupTextAlign}.
 * 
 * Determines whether the toolbar button group containing text alignment commands is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowGroupTextAlign New value for property <code>showGroupTextAlign</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupTextAlign = function(bShowGroupTextAlign) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getShowGroupUndo showGroupUndo}.
 * 
 * Determines whether the toolbar button group containing commands like Undo and Redo is available. Changing this after the initial rendering will result in some visible redrawing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowGroupUndo New value for property <code>showGroupUndo</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setShowGroupUndo = function(bShowGroupUndo) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getTextDirection textDirection}.
 * 
 * The text direction
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Inherit</code>.
 * @param {sap.ui.core.TextDirection} sTextDirection New value for property <code>textDirection</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setTextDirection = function(sTextDirection) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Allows to opt out of the legacy theme that is applied to keep the old button look. In case
 * butons are used that are not in the legacy theme, this can be disabled in order to show
 * the button correctly.
 * 
 * @param {boolean} [bUseLegacyTheme] Whether to use the legacy button theme
 * @public
 * @returns {object} Control instance (for method chaining)
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setUseLegacyTheme = function(bUseLegacyTheme) { return new Object(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * An HTML string representing the editor content. Because this is HTML, the value cannot be generically escaped to prevent cross-site scripting, so the application is responsible for doing so.
 * Overwriting this property would also reset editor's Undo manager and buttons "Undo"/"Redo" would be set to their initial state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setValue = function(sValue) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of RichTextEditor control in CSS units.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setWidth = function(sWidth) { return new sap.ui.richtexteditor.RichTextEditor(); };

/**
 * Sets a new value for property {@link #getWrapping wrapping}.
 * 
 * Determines whether the text in the editor is wrapped. This does not affect the editor's value, only the representation in the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bWrapping New value for property <code>wrapping</code>
 * @returns {sap.ui.richtexteditor.RichTextEditor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.richtexteditor.RichTextEditor.prototype.setWrapping = function(bWrapping) { return new sap.ui.richtexteditor.RichTextEditor(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.richtexteditor.EditorType --------------------------------------------------------------------------

/**
 * Uses TinyMCE version 3 as editor (default)
 * @public
 * 
 */
sap.ui.richtexteditor.EditorType.TinyMCE = "";

/**
 * Uses TinyMCE version 4 as editor
 * @public
 * 
 */
sap.ui.richtexteditor.EditorType.TinyMCE4 = "";

