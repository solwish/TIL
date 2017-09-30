
// ---- sap.ndc --------------------------------------------------------------------------


// ---- sap.ndc.BarcodeScanner --------------------------------------------------------------------------

/**
 * Closes the bar code input dialog. It can be used to close the dialog before the user presses the OK or the Cancel button
 * (e.g. in the fnLiveUpdate callback function of the {@link sap.ndc.BarcodeScanner.scan} method.)
 * 
 * @public
 * @static
 * 
 * @memberof sap.ndc.BarcodeScanner
 */
sap.ndc.BarcodeScanner.closeScanDialog = function() {  };

/**
 * Returns the status model of the BarcodeScanner. It is a JSON model which contains a single boolean property
 * '<code>available</code>' indicating whether or not the bar code scanner feature is available. It can be used
 * to bind to the <code>visible</code> property of UI controls which have to be hidden in case the feature is unavailable.
 * 
 * @returns {sap.ui.model.json.JSONModel} A JSON model containing the 'available' property
 * @public
 * @static
 * 
 * @memberof sap.ndc.BarcodeScanner
 */
sap.ndc.BarcodeScanner.getStatusModel = function() { return new sap.ui.model.json.JSONModel(); };

/**
 * Starts the bar code scanning process either showing the live input from the camera or displaying a dialog
 * to enter the value directly if the bar code scanning feature is not available.
 * 
 * <pre>
 * sap.ndc.BarcodeScanner.scan(fnSuccess, fnFail, fnLiveUpdate)
 * </pre>
 * 
 * The bar code scanning is done asynchronously. When it is triggered, this function returns without waiting for
 * the scanning process to finish. The applications have to provide callback functions to react to the events of
 * a successful scanning, an error during scanning, and the live input on the dialog.
 * 
 * <code>fnSuccess</code> is passed an object with text, format and cancelled properties. Text is the text representation
 * of the bar code data, format is the type of the bar code detected, and cancelled is whether or not the user cancelled
 * the scan. <code>fnError</code> is given the error, <code>fnLiveUpdate</code> is passed the new value entered in the
 * dialog's input field. An example:
 * 
 * <pre>
 * sap.ndc.BarcodeScanner.scan(
 *    function (mResult) {
 *       alert("We got a bar code\n" + 
 *             "Result: " + mResult.text + "\n" +
 *             "Format: " + mResult.format + "\n" +
 *             "Cancelled: " + mResult.cancelled);
 *    },
 *    function (Error) {
 *       alert("Scanning failed: " + Error);
 *    },
 *    function (mParams) {
 *       alert("Value entered: " + mParams.newValue);
 *    }
 * );
 * </pre>
 * 
 * @param {function} [fnSuccess] Function to be called when the scanning is done or cancelled
 * @param {function} [fnFail] Function to be called when the scanning is failed
 * @param {function} [fnLiveUpdate] Function to be called when value of the dialog's input is changed
 * 
 * @public
 * @static
 * 
 * @memberof sap.ndc.BarcodeScanner
 */
sap.ndc.BarcodeScanner.scan = function(fnSuccess,fnFail,fnLiveUpdate) {  };


// ---- sap.ndc.BarcodeScannerButton --------------------------------------------------------------------------

/**
 * Constructor for a new BarcodeScannerButton.
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
 * <li>{@link #getProvideFallback provideFallback} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:scanSuccess scanSuccess} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:scanFail scanFail} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:inputLiveUpdate inputLiveUpdate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A button control (displaying a bar code icon) to start the bar code scanning process. If the native scanning feature is
 * not available, the button is either hidden or it provides a fallback by opening a dialog with an input field where the bar code can
 * be entered manually.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ndc.BarcodeScannerButton = function(sId,mSettings) {};
/**
 * Event is fired when the text in the dialog's input field is changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new value of the input field.
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.inputLiveUpdate = function(oControlEvent) {  };

/**
 * Event is fired when the native scanning process is failed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.scanFail = function(oControlEvent) {  };

/**
 * Event is fired when the scanning is finished or cancelled
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The the text representation of the bar code data.
 * @param {string} oControlEvent.getParameters.format The type of the bar code detected.
 * @param {boolean} oControlEvent.getParameters.cancelled Indicates whether or not the user cancelled the scan.
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.scanSuccess = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:inputLiveUpdate inputLiveUpdate} event of this <code>sap.ndc.BarcodeScannerButton</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ndc.BarcodeScannerButton</code> itself.
 * 
 * Event is fired when the text in the dialog's input field is changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ndc.BarcodeScannerButton</code> itself
 * 
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.attachInputLiveUpdate = function(oData,fnFunction,oListener) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:scanFail scanFail} event of this <code>sap.ndc.BarcodeScannerButton</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ndc.BarcodeScannerButton</code> itself.
 * 
 * Event is fired when the native scanning process is failed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ndc.BarcodeScannerButton</code> itself
 * 
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.attachScanFail = function(oData,fnFunction,oListener) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:scanSuccess scanSuccess} event of this <code>sap.ndc.BarcodeScannerButton</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ndc.BarcodeScannerButton</code> itself.
 * 
 * Event is fired when the scanning is finished or cancelled
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ndc.BarcodeScannerButton</code> itself
 * 
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.attachScanSuccess = function(oData,fnFunction,oListener) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:inputLiveUpdate inputLiveUpdate} event of this <code>sap.ndc.BarcodeScannerButton</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.detachInputLiveUpdate = function(fnFunction,oListener) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:scanFail scanFail} event of this <code>sap.ndc.BarcodeScannerButton</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.detachScanFail = function(fnFunction,oListener) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:scanSuccess scanSuccess} event of this <code>sap.ndc.BarcodeScannerButton</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.detachScanSuccess = function(fnFunction,oListener) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Creates a new subclass of class sap.ndc.BarcodeScannerButton with name <code>sClassName</code>
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
sap.ndc.BarcodeScannerButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:inputLiveUpdate inputLiveUpdate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.newValue] The new value of the input field.
 * 
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.fireInputLiveUpdate = function(mParameters) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Fires event {@link #event:scanFail scanFail} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.fireScanFail = function(mParameters) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Fires event {@link #event:scanSuccess scanSuccess} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.text] The the text representation of the bar code data.
 * @param {string} [mParameters.format] The type of the bar code detected.
 * @param {boolean} [mParameters.cancelled] Indicates whether or not the user cancelled the scan.
 * 
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.fireScanSuccess = function(mParameters) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Returns a metadata object for class sap.ndc.BarcodeScannerButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ndc.BarcodeScannerButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getProvideFallback provideFallback}.
 * 
 * If set to true, the button remains visible if the scanner is not available and triggers a dialog to enter bar code.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>provideFallback</code>
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.getProvideFallback = function() { return false; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * The invisible bar code scanner button is not rendered regardless of the availability of the native scan feature.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Defines the width of the scanner button.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getProvideFallback provideFallback}.
 * 
 * If set to true, the button remains visible if the scanner is not available and triggers a dialog to enter bar code.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bProvideFallback New value for property <code>provideFallback</code>
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.setProvideFallback = function(bProvideFallback) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * The invisible bar code scanner button is not rendered regardless of the availability of the native scan feature.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.setVisible = function(bVisible) { return new sap.ndc.BarcodeScannerButton(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Defines the width of the scanner button.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ndc.BarcodeScannerButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ndc.BarcodeScannerButton.prototype.setWidth = function(sWidth) { return new sap.ndc.BarcodeScannerButton(); };

// ---- static fields of namespaces ---------------------------------------------------------------------
