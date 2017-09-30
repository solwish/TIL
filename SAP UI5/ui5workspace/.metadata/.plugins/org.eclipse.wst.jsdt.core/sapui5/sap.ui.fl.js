
// ---- sap.ui.fl.transport.TransportDialog --------------------------------------------------------------------------

/**
 * Constructor for a new transport/TransportDialog.
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
 * <li>{@link #getPkg pkg} : string</li>
 * <li>{@link #getTransports transports} : any</li>
 * <li>{@link #getLrepObject lrepObject} : any</li>
 * <li>{@link #getHidePackage hidePackage} : boolean</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.
 * @extends sap.m.Dialog
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.fl.transport.TransportDialog = function(sId,mSettings) {};
/**
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.cancel = function(oControlEvent) {  };

/**
 * This event will be fired when the user clicks the OK button on the dialog.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.ok = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:cancel cancel} event of this <code>sap.ui.fl.transport.TransportDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.fl.transport.TransportDialog</code> itself.
 * 
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.fl.transport.TransportDialog</code> itself
 * 
 * @returns {sap.ui.fl.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.fl.transport.TransportDialog(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:ok ok} event of this <code>sap.ui.fl.transport.TransportDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.fl.transport.TransportDialog</code> itself.
 * 
 * This event will be fired when the user clicks the OK button on the dialog.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.fl.transport.TransportDialog</code> itself
 * 
 * @returns {sap.ui.fl.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.fl.transport.TransportDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:cancel cancel} event of this <code>sap.ui.fl.transport.TransportDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.fl.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.fl.transport.TransportDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:ok ok} event of this <code>sap.ui.fl.transport.TransportDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.fl.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.fl.transport.TransportDialog(); };

/**
 * Creates a new subclass of class sap.ui.fl.transport.TransportDialog with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.fl.transport.TransportDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:cancel cancel} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.fl.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.fireCancel = function(mParameters) { return new sap.ui.fl.transport.TransportDialog(); };

/**
 * Fires event {@link #event:ok ok} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ui.fl.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.fireOk = function(mParameters) { return new sap.ui.fl.transport.TransportDialog(); };

/**
 * Gets current value of property {@link #getHidePackage hidePackage}.
 * 
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * 
 * @returns {boolean} Value of property <code>hidePackage</code>
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.getHidePackage = function() { return false; };

/**
 * Gets current value of property {@link #getLrepObject lrepObject}.
 * 
 * The LREP object for which as transport request has to be selected
 * 
 * @returns {any} Value of property <code>lrepObject</code>
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.getLrepObject = function() { return null; };

/**
 * Returns a metadata object for class sap.ui.fl.transport.TransportDialog.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.fl.transport.TransportDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPkg pkg}.
 * 
 * An ABAP package that can be used as default for the ABAP package selection.
 * 
 * @returns {string} Value of property <code>pkg</code>
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.getPkg = function() { return ""; };

/**
 * Gets current value of property {@link #getTransports transports}.
 * 
 * The set of ABAP transport requests that can be selected by a user.
 * 
 * @returns {any} Value of property <code>transports</code>
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.getTransports = function() { return null; };

/**
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * @param {boolean}
 *            bHide if set to <code>true</code>, the package selection is hidden.
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.setHidePackage = function(bHide) {  };

/**
 * The LREP object for which as transport request has to be selected.
 * The property can only be set once and afterwards it cannot be changed.
 * @param {object}
 *            oObject an LREP object for which as transport request has to be selected. The object has the attributes name, namespace and type.
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.setLrepObject = function(oObject) {  };

/**
 * An ABAP package that can be used as default for the ABAP package selection.
 * The property can only be set once and afterwards it cannot be changed.
 * @param {string}
 *            sPackage an ABAP package that can be used as default for the ABAP package selection.
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.setPkg = function(sPackage) {  };

/**
 * The set of ABAP transport requests that can be selected by a user.
 * @param {array}
 *            aSelection the set of ABAP transport requests that can be selected by a user.
 * 
 * @public
 * 
 */
sap.ui.fl.transport.TransportDialog.prototype.setTransports = function(aSelection) {  };


// ---- sap.ui.fl.transport.TransportSelection --------------------------------------------------------------------------

/**
 * @public
 * @constructor
 * @version 1.48.4
 * @since 1.38.0
 * Helper object to select an ABAP transport for an LREP object. This is not a generic utility to select a transport request, but part
 *        of the SmartVariant control.
 * @param jQuery.sap.global} jQuery a reference to the jQuery implementation.
 * @param {sap.ui.fl.Utils} Utils a reference to the flexibility utilities implementation.
 * @param {sap.ui.fl.transport.Transports} Transports a reference to the transport service implementation.
 * @param {sap.ui.fl.transport.TransportDialog} TransportDialog a reference to the transport dialog implementation.
 * @param {sap.ui.fl.registry.Settings} FlexSettings a reference to the settings implementation
 * @returns {sap.ui.fl.transport.TransportSelection} a new instance of <code>sap.ui.fl.transport.TransportSelection</code>.
 * 
 */
sap.ui.fl.transport.TransportSelection = function(Utils,Transports,TransportDialog,FlexSettings) {};
/**
 * Opens the transport selection dialog
 * 
 * @param {sap.ui.fl.Change} [oChange] - the change for which the transport information should be retrieved
 * @param {object} oControl
 * @returns {Promise} promise that resolves
 * @public
 * 
 */
sap.ui.fl.transport.TransportSelection.prototype.openTransportSelection = function(oChange,oControl) { return null; };

/**
 * Selects a transport request for a given LREP object.
 * First checks if the Adaptation Transport Organizer (ATO) is enabled
 * If ATO is enabled and the layered repository object is in the CUSTOMER layer, the request 'ATO_NOTIFICATION' has to be used.
 * This request triggers in the back end that the change is added to an ATO collection.
 * If ATO is not enabled or LREP object not in CUSTOMER layer:
 * If the LREP object is already assigned to an open transport request or the LREP object is
 * assigned to a local ABAP package, no dialog to select a transport is started. Instead the success callback is invoked directly. The transport
 * dialog is shown if a package or a transport request has still to be selected, so if more than one transport request is available for the
 * current user and the LREP object is not locked in an open transport request.
 * 
 * @param {object} oObjectInfo the LREP object, which has the attributes name, name space, type, layer and package.
 * @param {function} fOkay call-back to be invoked when a transport request has successfully been selected.
 * @param {function} fError call-back to be invoked when an error occurred during selection of a transport request.
 * @param {boolean} bCompactMode flag indicating whether the transport dialog should be opened in compact mode.
 * @param {object} oControl Control instance
 * @public
 * 
 */
sap.ui.fl.transport.TransportSelection.prototype.selectTransport = function(oObjectInfo,fOkay,fError,bCompactMode,oControl) {  };

/**
 * Sets the transports for all changes.
 * 
 * @param {array} aChanges array of {sap.ui.fl.Change}
 * @param {object} oControl object of the root control for the transport
 * @returns {Promise} promise that resolves without parameters
 * @public
 * 
 */
sap.ui.fl.transport.TransportSelection.prototype.setTransports = function(aChanges,oControl) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------
