
// ---- sap.ui.generic.app --------------------------------------------------------------------------


// ---- sap.ui.generic.app.ApplicationController --------------------------------------------------------------------------

/**
 * Constructor for application controller.
 * 
 * 
 * @param {sap.ui.model.odata.v2.ODataModel} oModel The OData model currently used
 * @param {sap.ui.core.mvc.View} oView The current view
 * 
 * @throws {Error} If no model is handed over as input parameter
 * 
 * @class Application Controller.
 * @version 1.48.4
 * 
 * @public
 * @experimental Since 1.32.0
 * @since 1.32.0
 * 
 */
sap.ui.generic.app.ApplicationController = function(oModel,oView) {};
/**
 * Frees all resources claimed during the life-time of this instance.
 * 
 * @experimental Since 1.32.0
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.destroy = function() {  };

/**
 * executes annotated side effect for properties/navigation properties or navigation entities. If no properties
 * or entities are passed the unspecified side effect is executed which reads either the annotated targets of the
 * unspecified side effect or in case of no available annotation a complete model refresh
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @param {array} aSourceProperties An array of properties of the given context or properties in a 1:1 association
 * for those side effects shall be executed
 * @param {array} aSourceEntities An array of entities (navigation properties) for those side effects shall be
 * executed
 * @returns {Promise} A <code>Promise</code> for asynchronous execution of the action
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.executeSideEffects = function(oContext,aSourceProperties,aSourceEntities) { return null; };

/**
 * Creates a new subclass of class sap.ui.generic.app.ApplicationController with name <code>sClassName</code>
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
sap.ui.generic.app.ApplicationController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.generic.app.ApplicationController.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.ApplicationController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Creates a context for an action call (OData function import)
 * 
 * @param {string} sFunctionName
 * @param {object} oEntityContext The given binding context of the object on which the action is called
 * @param {map} mParameters Parameters to control the behavior of the request
 * 
 * @returns {Promise}
 * 
 * @since 1.38
 * @experimental
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.getNewActionContext = function(sFunctionName,oEntityContext,mParameters) { return null; };

/**
 * Returns the current transaction controller instance.
 * 
 * @returns {sap.ui.generic.app.transaction.TransactionController} The transaction controller instance
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.getTransactionController = function() { return new sap.ui.generic.app.transaction.TransactionController(); };

/**
 * Invokes an action for every provided context where the properties are taken as input from.
 * The changes are submitted directly to the back-end.
 * 
 * @param {string} sFunctionName The name of the function or action
 * @param {array} aContext The given binding contexts
 * @param {map} mParameters Parameters to control the behavior of the request
 * @returns {Promise} A <code>Promise</code> for asynchronous execution of the action
 * @throws {Error} Throws an error if the OData function import does not exist or the action input parameters are invalid
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.invokeActions = function(sFunctionName,aContext,mParameters) { return null; };

/**
 * Notifies the application controller of a change of a property. Please note that the method is not meant for
 * productive use currently. It is experimental.
 * 
 * @param {string} sPath The path to the changed property
 * @param {object} oContext The binding context in which the change occured
 * @returns {Promise} A <code>Promise</code> for asynchronous execution of the action
 * @experimental Since 1.32.0
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.propertyChanged = function(sPath,oContext) { return null; };

/**
 * Registers a change for the given group id.
 * 
 * @param {string} sGroupId The group id where changes were done
 * @experimental Since 1.32.0
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.registerGroupChange = function(sGroupId) {  };

/**
 * Registers the given view with the Application Controller.
 * 
 * @param {sap.ui.core.mvc.View} oView The view to be registered
 * @experimental Since 1.32.0
 * @public
 * 
 */
sap.ui.generic.app.ApplicationController.prototype.registerView = function(oView) {  };


// ---- sap.ui.generic.app.navigation.service.NavError --------------------------------------------------------------------------

/**
 * 
 * @class
 * An object that provides error handling information during runtime.
 * @extends sap.ui.base.Object
 * @constructor
 * @public
 * @param {string} sErrorCode The code for an internal error of a consumer that allows you to track the source locations
 * 
 */
sap.ui.generic.app.navigation.service.NavError = function(sErrorCode) {};
/**
 * Creates a new subclass of class sap.ui.generic.app.navigation.service.NavError with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.NavError.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the error code with which the instance has been created.
 * @public
 * @returns {string} The error code of the error
 * 
 * 
 */
sap.ui.generic.app.navigation.service.NavError.prototype.getErrorCode = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.generic.app.navigation.service.NavError.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.NavError.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.generic.app.navigation.service.NavigationHandler --------------------------------------------------------------------------

/**
 * 
 * @class
 * Creates a new NavigationHandler class by providing the required environment.
 * 
 * <b>Note:</b> This class requires that the UShell Navigation Service API CrossApplicationNavigation is available and initialized.
 * @extends sap.ui.base.Object
 * @constructor
 * @public
 * @param {object} oController UI5 controller that contains a router and a component; typically the main controller of your application,
 * for example, a subclass of the sap.ca.scfld.md.controller.BaseFullscreenController if scaffolding is used
 * @param {string} [sParamHandlingMode=SelVarWins] Mode to be used to handle conflicts when merging URL parameters and the SelectionVariant class, see {@link sap.ui.generic.app.navigation.service.ParamHandlingMode}
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th align="left">Error code</th><th align="left">Description</th></tr>
 * <tr><td>NavigationHandler.INVALID_INPUT</td><td>Indicates that the input parameter is invalid</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler = function(oController,sParamHandlingMode) {};
/**
 * Creates a new subclass of class sap.ui.generic.app.navigation.service.NavigationHandler with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.generic.app.navigation.service.NavigationHandler.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the application specific technical parameters. Technical parameters will not be added to the selection variant passed to the application.
 * As a default the following values are considered as technical parameters:
 * <ul>
 * <li><code>sap-system</code></li>
 * <li><code>sap-ushell-defaultedParameterNames</code></li>
 * <li><code>"hcpApplicationId"</code></li>
 * </ul>
 * @returns {array} Containing the technical parameters.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.getTechnicalParameters = function() { return null; };

/**
 *  Combines the given parameters and selection variant into a new selection variant containing properties from both, with the parameters
 * overriding existing properties in the selection variant. The new selection variant does not contain any parameters. All parameters are merged into select options.
 * The output of this function, converted to a JSON string, can be used for the {@link #.navigate NavigationHandler.navigate} method.
 * @param {object} mSemanticAttributes Object containing key/value pairs
 * @param {string} sSelectionVariant The selection variant in string format as provided by the SmartFilterBar control
 * @param {int} [iSuppressionBehavior=sap.ui.generic.app.navigation.service.SuppressionBehavior.standard] Indicates whether semantic attributes with special values
 * (see {@link sap.ui.generic.app.navigation.service.SuppressionBehavior suppression behavior}) must be suppressed before they are combined with the selection variant;
 * several {@link sap.ui.generic.app.navigation.service.SuppressionBehavior suppression behaviors} can be combined with the bitwise OR operator (|)
 * @returns {object} Instance of {@link sap.ui.generic.app.navigation.service.SelectionVariant}
 * @public
 * @example
 * <code>
 * var mSemanticAttributes = { "Customer" : "C0001" };
 * var sSelectionVariant = oSmartFilterBar.getDataSuiteFormat();
 * var oNavigationHandler = new sap.ui.generic.app.navigation.service.NavigationHandler(oController);
 * var sNavigationSelectionVariant = oNavigationHandler.mixAttributesAndSelectionVariant(mSemanticAttributes, sSelectionVariant).toJSONString();
 * // Optionally, you can specify one or several suppression behaviors. Several suppression behaviors are combined with the bitwise OR operator, e.g.
 * // var iSuppressionBehavior = sap.ui.generic.app.navigation.service.SuppressionBehavior.raiseErrorOnNull | sap.ui.generic.app.navigation.service.SuppressionBehavior.raiseErrorOnUndefined;
 * // var sNavigationSelectionVariant = oNavigationHandler.mixAttributesAndSelectionVariant(mSemanticAttributes, sSelectionVariant, iSuppressionBehavior).toJSONString();
 * 
 * oNavigationHandler.navigate("SalesOrder", "create", sNavigationSelectionVariant);
 * </code>
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.mixAttributesAndSelectionVariant = function(mSemanticAttributes,sSelectionVariant,iSuppressionBehavior) { return new Object(); };

/**
 * Triggers a cross-app navigation after saving the inner and the cross-app states.
 * @param {string} sSemanticObject Name of the semantic object of the target app
 * @param {string} sActionName Name of the action of the target app
 * @param {object | string } [vNavigationParameters] Navigation parameters as an object with key/value pairs or as a stringified JSON object
 * @param {object} [oInnerAppData] Object for storing current state of the app
 * @param {string} [oInnerAppData.selectionVariant] Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
 * @param {string} [oInnerAppData.tableVariantId] ID of the SmartTable variant
 * @param {object} [oInnerAppData.customData] Object that can be used to store arbitrary data
 * @param {object} [mInnerAppData.presentationVariant] Object containing the current ui state of the app
 * @param {function} [fnOnError] Callback that is called if an error occurs during navigation <br>
 * <b>Parameters:</b>
 * <table>
 * <tr><td align="center">{object}</td><td><b>oError</b></td><td>Error object (instance of {@link sap.ui.generic.app.navigation.service.NavError}) that describes
 * which kind of error occurred</td>
 * <tr><td align="center">{string}</td><td><b>oError.errorCode</b></td><td>Code to identify the error</td>
 * <tr><td align="center">{string}</td><td><b>oError.type</b></td><td>Severity of the error (info/warning/error)</td>
 * <tr><td align="center">{array}</td><td><b>oError.params</b></td><td>An array of objects (typically strings) that describe additional value parameters
 * required for generating the message</td>
 * </table>
 * @public
 * @example
 * <code>
 * var oNavigationHandler = new sap.ui.generic.app.navigation.service.NavigationHandler(oController);
 * var sSemanticObject = "SalesOrder";
 * var sActionName = "create";
 * 
 * //simple parameters as Object
 * var vNavigationParameters = {
 * 		CompanyCode : "0001",
 * 		Customer : "C0001"
 * };
 * 
 * //or as selection variant
 * var oSelectionVariant = new sap.ui.generic.app.navigation.service.SelectionVariant();
 * oSelectionVariant.addSelectOption("CompanyCode", "I", "EQ", "0001");
 * oSelectionVariant.addSelectOption("Customer", "I", "EQ", "C0001");
 * vNavigationParameters = oSelectionVariant.toJSONString();
 * 
 * //or directly from SmartFilterBar
 * vNavigationParameters = oSmartFilterBar.getDataSuiteFormat();
 * 
 * //app state for back navigation
 * var oInnerAppData = {
 * 		selectionVariant : oSmartFilterBar.getDataSuiteFormat(),
 * 		tableVariantId : oSmartTable.getCurrentVariantId(),
 * 		customData : oMyCustomData
 * };
 * 
 * // callback function in case of errors
 * var fnOnError = function(oError){
 * 		var oi18n = oController.getView().getModel("i18n").getResourceBundle();
 * 		oError.setUIText({oi18n : oi18n, sTextKey : "OUTBOUND_NAV_ERROR"});
 * 		oError.showMessageBox();
 * };
 * 
 * oNavigationHandler.navigate(sSemanticObject, sActionName, vNavigationParameters, oInnerAppData, fnOnError);
 * </code>
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.navigate = function(sSemanticObject,sActionName,vNavigationParameters,oInnerAppData,fnOnError) {  };

/**
 * Parses the incoming URL and returns a Promise. If this method detects a back navigation, the inner app state is returned
 * in the resolved Promise. Otherwise startup parameters will be merged into the app state provided by cross app navigation, and a combined
 * app state will be returned. The conflict resolution can be influenced with sParamHandlingMode defined in the constructor.
 * @returns {object} A Promise object to monitor when all the actions of the function have been executed. If the execution is successful, the extracted app state,
 * the startup parameters, and the type of navigation are returned, see also the example above. The app state is an object that contains
 * the following information:
 * <ul>
 * <li><code>oAppData.oSelectionVariant</code>: An instance of {@link sap.ui.generic.app.navigation.service.SelectionVariant} containing only
 * parameters/select options that are related to navigation</li>
 * <li><code>oAppData.selectionVariant</code>: The navigation-related selection variant as a JSON-formatted string</li>
 * <li><code>oAppData.oDefaultedSelectionVariant</code>: An instance of {@link sap.ui.generic.app.navigation.service.SelectionVariant} containing
 * only the parameters/select options that are set by user default data</li>
 * <li><code>oAppData.bNavSelVarHasDefaultsOnly</code>: A Boolean flag that indicates whether only defaulted parameters and
 * no navigation parameters are present (<b>Note:</b> If no navigation parameters are available, bNavSelVarHasDefaultsOnly
 * is<code>true</code>, even also no defaulted parameters may be available)</li>
 * </ul>
 * If the navigation-related selection variant is empty, it is replaced by a copy of the defaulted selection variant.<br>
 * The navigation type is an enumeration type of type {@link sap.ui.generic.app.navigation.service.NavType} (possible values are initial,
 * URLParams, xAppState, and iAppState).<br>
 * <b>Note:</b> If the navigation type is {@link sap.ui.generic.app.navigation.service.NavType.iAppState} oAppData has two additional properties
 * <ul>
 * <li><code>oAppData.tableVariantId</code></li>
 * <li><code>oAppData.customData</code></li>
 * </ul>
 * which return the inner app data as stored in {@link #.navigate navigate} or {@link #.storeInnerAppState storeInnerAppState}.
 * <code>oAppData.oDefaultedSelectionVariant</code> is an empty selection variant and <code>oAppData.bNavSelVarHasDefaultsOnly</code>
 * is <code>false</code> in this case.<br>
 * <b>Note:</b> If the navigation type is {@link sap.ui.generic.app.navigation.service.NavType.initial} oAppData is an empty object!<br>
 * If an error occurs, an error object of type {@link sap.ui.generic.app.navigation.service.NavError}, URL parameters (if available) and the type of
 * navigation are returned.
 * @public
 * @example
 * <code>
 * var oNavigationHandler = new sap.ui.generic.app.navigation.service.NavigationHandler(oController);
 * var oParseNavigationPromise = oNavigationHandler.parseNavigation();
 * 
 * oParseNavigationPromise.done(function(oAppData, oStartupParameters, sNavType){
 * 		oSmartFilterBar.setDataSuiteFormat(oAppData.selectionVariant);
 * 		// oAppData.oSelectionVariant can be used to manipulate the selection variant
 * 		// oAppData.oDefaultedSelectionVariant contains the parameters which are set by user defaults
 * 		// oAppData.bNavSelVarHasDefaultsOnly indicates whether only defaulted parameters and no navigation parameters are present
 * });
 * oParseNavigationPromise.fail(function(oError, oURLParameters, sNavType){
 * 		// if e.g. the xapp state could not be loaded, nevertheless there may be URL parameters available
 * 		//some error handling
 * });
 * </code>
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.parseNavigation = function() { return new Object(); };

/**
 * Processes navigation-related tasks related to beforePopoverOpens event handling for the SmartLink control and returns a Promise object.
 * In particular, the following tasks are performed before the SmartLink popover can be opened:
 * <ul>
 * 	<li>If <code>mInnerAppData</code> is provided, this inner app state is saved for back navigation at a later time.</li>
 * 	<li>The table event parameters (semantic attributes) and the selection variant data are combined by calling the
 * 			method {@link #.mixAttributesAndSelectionVariant mixAttributesAndSelectionVariant}.</li>
 * 	<li>The combined data is saved as the cross app state to be handed over to the target app, and the corresponding sap-xapp-state key is set in the URL.</li>
 * 	<li>All single selections ("including equal") of the combined selection data are passed to the SmartLink popover as semantic attributes.</li>
 * 	<li>The method <code>oTableEventParameters.open()</code> is called. Note that this does not really open the popover, but the SmartLink control proceeds
 * 			with firing the event <code>navigationTargetsObtained</code>.</li>
 * </ul>
 * @param {object} oTableEventParameters The parameters made available by the SmartTable control when the SmartLink control has been clicked, an instance of a PopOver object
 * @param {string} sSelectionVariant Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
 * @param {object} [mInnerAppData] Object containing the current state of the app. If provided, opening the Popover is deferred until the inner app data is saved in a consistent way.
 * @param {string} [mInnerAppData.selectionVariant] Stringified JSON object as returned, for example, from getDataSuiteFormat() of the the SmartFilterBar control; if provided, the selection
 * is merged into the semantic attributes
 * @param {string} [mInnerAppData.tableVariantId] ID of the SmartTable variant
 * @param {object} [mInnerAppData.customData] Object that can be used to store additional app-specific data
 * @param {object} [mInnerAppData.presentationVariant] Object containing the current ui state of the app
 * @returns {object} A Promise object to monitor when all actions of the function have been executed; if the execution is successful, the modified oTableEventParameters is returned;
 * if an error occurs, an error object of type {@link sap.ui.generic.app.navigation.service.NavError} is returned
 * @public
 * @example
 * <code>
 * //event handler for the smart link event "beforePopoverOpens"
 * 	onBeforePopoverOpens: function(oEvent) {
 * 		var oTableEventParameters = oEvent.getParameters();
 * 
 * 		var mInnerAppData = {
 * 			selectionVariant : oSmartFilterBar.getDataSuiteFormat(),
 * 			tableVariantId : oSmartTable.getCurrentVariantId(),
 * 			customData : oMyCustomData
 * 		};
 * 
 * 		var oSelectionVariant = new sap.ui.generic.app.navigation.service.SelectionVariant();
 * 		oSelectionVariant.addSelectOption("CompanyCode", "I", "EQ", "0001");
 * 		oSelectionVariant.addSelectOption("Customer", "I", "EQ", "C0001");
 * 		var sSelectionVariant= oSelectionVariant.toJSONString();
 * 
 * 		var oNavigationHandler = new sap.ui.generic.app.navigation.service.NavigationHandler(oController);
 * 		var oSmartLinkPromise = oNavigationHandler.processBeforeSmartLinkPopoverOpens(oTableEventParameters, sSelectionVariant, mInnerAppData);
 * 
 * 		oSmartLinkPromise.done(function(oTableEventParameters){
 * 			// here you can add coding that should run after all app states are saved and the semantic attributes are set
 * 		});
 * 
 * 		oSmartLinkPromise.fail(function(oError){
 * 		//some error handling
 * 		});
 * };
 * </code>
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.processBeforeSmartLinkPopoverOpens = function(oTableEventParameters,sSelectionVariant,mInnerAppData) { return new Object(); };

/**
 * Changes the URL according to the current sAppStateKey.
 * As an reaction route change event will be triggered.
 * @param {string} sAppStateKey the new app state key.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.replaceHash = function(sAppStateKey) {  };

/**
 * Sets the application specific technical parameters. Technical parameters will not be added to the selection variant passed to the application.
 * As a default the following values are considered as technical parameters:
 * <ul>
 * <li><code>sap-system</code></li>
 * <li><code>sap-ushell-defaultedParameterNames</code></li>
 * <li><code>"hcpApplicationId"</code></li>
 * </ul>
 * @param {array} aTechnicalParameters list of parameter names to be considered as technical parameters. <code>null</code> or <code>undefined</code> may be used to reset the complete list.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.setTechnicalParameters = function(aTechnicalParameters) {  };

/**
 * Changes the URL according to the current app state and stores the app state for later retrieval.
 * @param {object} mInnerAppData Object containing the current state of the app
 * @param {string} mInnerAppData.selectionVariant Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
 * @param {string} [mInnerAppData.tableVariantId] ID of the SmartTable variant
 * @param {object} [mInnerAppData.customData] Object that can be used to store additional app-specific data
 * @param {object} [mInnerAppData.presentationVariant] Object containing the current ui state of the app
 * @param {boolean} [bImmediateHashReplace=true] If set to false, the inner app hash will not be replaced until storing is successful;
 * do not set to false if you cannot react to the resolution of the Promise, for example, when calling the beforeLinkPressed event
 * @returns {object} A Promise object to monitor when all the actions of the function have been executed; if the execution is successful, the app state key is returned;
 * if an error occurs, an object of type {@link sap.ui.generic.app.navigation.service.NavError} is returned
 * @public
 * @example
 * <code>
 * var oNavigationHandler = new sap.ui.generic.app.navigation.service.NavigationHandler(oController);
 * var mInnerAppData = {
 * 		selectionVariant : oSmartFilterBar.getDataSuiteFormat(),
 * 		tableVariantId : oSmartTable.getCurrentVariantId(),
 * 		customData : oMyCustomData
 * };
 * 
 * var oStoreInnerAppStatePromise = oNavigationHandler.storeInnerAppState(mInnerAppData);
 * 
 * oStoreInnerAppStatePromise.done(function(sAppStateKey){
 * 	//your inner app state is saved now, sAppStateKey was added to URL
 * 	//perform actions that must run after save
 * });
 * 
 * oStoreInnerAppStatePromise.fail(function(oError){
 * 		//some error handling
 * });
 * </code>
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.storeInnerAppState = function(mInnerAppData,bImmediateHashReplace) { return new Object(); };

/**
 * Changes the URL according to the current app state and stores the app state for later retrieval.
 * 
 * @param {object} mInnerAppData Object containing the current state of the app
 * @param {string} mInnerAppData.selectionVariant Stringified JSON object as returned, for example, from getDataSuiteFormat() of the SmartFilterBar control
 * @param {string} [mInnerAppData.tableVariantId] ID of the SmartTable variant
 * @param {object} [mInnerAppData.customData] Object that can be used to store additional app-specific data
 * @param {object} [mInnerAppData.presentationVariant] Object containing the current ui state of the app
 * @param {boolean} [bImmediateHashReplace=false] If set to false, the inner app hash will not be replaced until storing is successful;
 * do not set to false if you cannot react to the resolution of the Promise, for example, when calling the beforeLinkPressed event.
 * <b>Note:</b>If not provided it will be treated as set to false.
 * <b>Note:</b>If set to true, the calling instance has to ensure that a follow-on call to <code>replaceHash</code> will take place!
 * 
 * @returns {Object} An object containing the appStateId and a promise object to monitor when all the actions of the function have been executed; Please note that the appStateKey may be undefined or empty.
 * if an error occurs, an object of type {@link sap.ui.generic.app.navigation.service.NavError} is returned
 * 
 * @example
 * <code>
 * var oNavigationHandler = new sap.ui.generic.app.navigation.service.NavigationHandler(oController);
 * var mInnerAppData = {
 * 		selectionVariant : oSmartFilterBar.getDataSuiteFormat(),
 * 		tableVariantId : oSmartTable.getCurrentVariantId(),
 * 		customData : oMyCustomData
 * };
 * 
 * var oStoreInnerAppState = storeInnerAppStateWithNonDelayedReturn(mInnerAppData);
 * var sAppStateKey = oStoreInnerAppState.appStateKey;
 * if (!sAppStateKey) {
 *    // no appStateKey obtained...
 * };
 * var oStoreInnerAppStatePromise = oStoreInnerAppState.promise;
 * 
 * oStoreInnerAppStatePromise.done(function(sAppStateKey){
 * 	//your inner app state is saved now, sAppStateKey was added to URL
 * 	//perform actions that must run after save
 * });
 * 
 * oStoreInnerAppStatePromise.fail(function(oError){
 * 		//some error handling
 * });
 * </code>
 * 
 *  @public
 * 
 */
sap.ui.generic.app.navigation.service.NavigationHandler.storeInnerAppStateWithImmediateReturn = function(mInnerAppData,bImmediateHashReplace) { return null; };


// ---- sap.ui.generic.app.navigation.service.NavType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.generic.app.navigation.service.NavType.toString = function() { return ""; };

// ---- sap.ui.generic.app.navigation.service.ParamHandlingMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.generic.app.navigation.service.ParamHandlingMode.toString = function() { return ""; };

// ---- sap.ui.generic.app.navigation.service.PresentationVariant --------------------------------------------------------------------------

/**
 * 
 * @class
 * Creates a new instance of a PresentationVariant class. If no parameter is passed, 
 * an new empty instance is created whose ID has been set to <code>""</code>.
 * Passing a JSON-serialized string complying to the Selection Variant Specification will parse it,
 * and the newly created instance will contain the same information. 
 * @extends sap.ui.base.Object
 * @constructor
 * @public
 * @param {string|object} [vPresentationVariant] If of type <code>string</code>, the selection variant is JSON-formatted;
 * if of type <code>object</code>, the object represents a selection variant
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>PresentationVariant.INVALID_INPUT_TYPE</td><td>Indicates that the data format of the selection variant provided is inconsistent</td></tr>
 * <tr><td>PresentationVariant.UNABLE_TO_PARSE_INPUT</td><td>Indicates that the provided string is not a JSON-formatted string</td></tr>
 * <tr><td>PresentationVariant.INPUT_DOES_NOT_CONTAIN_SELECTIONVARIANT_ID</td><td>Indicates that the PresentationVariantID cannot be retrieved</td></tr>
 * <tr><td>PresentationVariant.PARAMETER_WITHOUT_VALUE</td><td>Indicates that there was an attempt to specify a parameter, but without providing any value (not even an empty value)</td></tr>
 * <tr><td>PresentationVariant.SELECT_OPTION_WITHOUT_PROPERTY_NAME</td><td>Indicates that a selection option has been defined, but the Ranges definition is missing</td></tr>
 * <tr><td>PresentationVariant.SELECT_OPTION_RANGES_NOT_ARRAY</td><td>Indicates that the Ranges definition is not an array</td></tr>
 * </table>
 * These exceptions can only be thrown if the parameter <code>vPresentationVariant</code> has been provided. 
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant = function(vPresentationVariant) {};
/**
 * Creates a new subclass of class sap.ui.generic.app.navigation.service.PresentationVariant with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the chart visualization property. 
 * 
 * @returns {map} mProperties to be used for the chart visualization. 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getChartVisualization = function() { return null; };

/**
 * Gets the current context URL intended for the query.
 * @returns {string} The current context URL for the query
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getContextUrl = function() { return ""; };

/**
 * Returns the identification of the selection variant.
 * @returns {string} The identification of the selection variant as made available during construction
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getID = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.generic.app.navigation.service.PresentationVariant.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the more trivial properties. Basically all properties with the exception of the Visualization.
 * @returns {map} The current properties. 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getProperties = function() { return null; };

/**
 * Gets the table visualization property. 
 * 
 * @returns {map} mProperties to be used for the table visualization. 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getTableVisualization = function() { return null; };

/**
 * Returns the current text / description of this selection variant.
 * @returns {string} the current description of this selection variant.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.getText = function() { return ""; };

/**
 * Returns <code>true</code> if the presentation variant does not contain any properties.
 * nor ranges.
 * @return {boolean} If set to <code>true</code> there are no current properties set; <code>false</code> otherwise.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.isEmpty = function() { return false; };

/**
 * Sets the chart visualization property. 
 * 
 * @param {map} mProperties to be used for the chart visualization. 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.setChartVisualization = function(mProperties) {  };

/**
 * Sets the context URL.
 * @param {string} sURL The URL of the context
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>PresentationVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.setContextUrl = function(sURL) {  };

/**
 * Sets the identification of the selection variant.
 * @param {string} sId The new identification of the selection variant 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.setID = function(sId) {  };

/**
 * Sets the more trivial properties. Basically all properties with the exception of the Visualization.
 * 
 * @param {map} mProperties properties to be used. 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.setProperties = function(mProperties) {  };

/**
 * Sets the table visualization property. 
 * 
 * @param {map} mProperties to be used for the table visualization. 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.setTableVisualization = function(mProperties) {  };

/**
 * Sets the text / description of the selection variant.
 * @param {string} sNewText The new description to be used
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>PresentationVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.setText = function(sNewText) {  };

/**
 * Returns the external representation of the selection variant as JSON object.
 * @return {object} The external representation of this instance as a JSON object
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.toJSONObject = function() { return new Object(); };

/**
 * Serializes this instance into a JSON-formatted string.
 * @return {string} The JSON-formatted representation of this instance in stringified format
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.PresentationVariant.toJSONString = function() { return ""; };


// ---- sap.ui.generic.app.navigation.service.SelectionVariant --------------------------------------------------------------------------

/**
 * 
 * @class
 * Creates a new instance of a SelectionVariant class. If no parameter is passed, 
 * an new empty instance is created whose ID has been set to <code>""</code>.
 * Passing a JSON-serialized string complying to the Selection Variant Specification will parse it,
 * and the newly created instance will contain the same information. 
 * @extends sap.ui.base.Object
 * @constructor
 * @public
 * @param {string|object} [vSelectionVariant] If of type <code>string</code>, the selection variant is JSON-formatted;
 * if of type <code>object</code>, the object represents a selection variant
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that the data format of the selection variant provided is inconsistent</td></tr>
 * <tr><td>SelectionVariant.UNABLE_TO_PARSE_INPUT</td><td>Indicates that the provided string is not a JSON-formatted string</td></tr>
 * <tr><td>SelectionVariant.INPUT_DOES_NOT_CONTAIN_SELECTIONVARIANT_ID</td><td>Indicates that the SelectionVariantID cannot be retrieved</td></tr>
 * <tr><td>SelectionVariant.PARAMETER_WITHOUT_VALUE</td><td>Indicates that there was an attempt to specify a parameter, but without providing any value (not even an empty value)</td></tr>
 * <tr><td>SelectionVariant.SELECT_OPTION_WITHOUT_PROPERTY_NAME</td><td>Indicates that a selection option has been defined, but the Ranges definition is missing</td></tr>
 * <tr><td>SelectionVariant.SELECT_OPTION_RANGES_NOT_ARRAY</td><td>Indicates that the Ranges definition is not an array</td></tr>
 * </table>
 * These exceptions can only be thrown if the parameter <code>vSelectionVariant</code> has been provided. 
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant = function(vSelectionVariant) {};
/**
 * Sets the value of a parameter called <code>sName</code> to the new value <code>sValue</code>.
 * If the parameter has already been set before, its value is overwritten.
 * @param {string} sName The name of the parameter to be set; the <code>null</code> value is not allowed 
 * @param {string} sValue The value of the parameter to be set
 * @returns {object} This instance to allow method chaining
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.PARAMETER_WITHOUT_NAME</td><td>Indicates that the name of the parameter has not been specified</td></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type or the value is set to <code>null</code></td></tr>
 * <tr><td>SelectionVariant.PARAMETER_SELOPT_COLLISION</td><td>Indicates that another SelectOption with the same name as the parameter already exists</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.addParameter = function(sName,sValue) { return new Object(); };

/**
 * Adds a new range to the list of select options for a given parameter.
 * @param {string} sPropertyName The name of the property for which the selection range is added
 * @param {string} sSign The sign of the range (<b>I</b>nclude or <b>E</b>xclude)
 * @param {string} sOption The option of the range (<b>EQ</b> for "equals", <b>NE</b> for "not equals",
 * <b>LE</b> for "less or equals", <b>GE</b> for "greater or equals", <b>LT</b> for "less than" (and not equals),
 * <b>GT</b> for "greater than" (and not equals), <b>BT</b> for "between", or <b>CP</b> for "contains pattern"
 * (ABAP-styled pattern matching with the asterisk as wildcard)
 * @param {string} sLow The single value or the lower boundary of the interval; the <code>null</code> value is not allowed 
 * @param {string} [sHigh] Set only if sOption is <b>BT</b>: the upper boundary of the interval;
 * must be <code>undefined</code> or <code>null</code> in all other cases
 * @return {object} This instance to allow method chaining.
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_SIGN</td><td>Indicates that the sign is an invalid expression</td></tr>
 * <tr><td>SelectionVariant.INVALID_OPTION</td><td>Indicates that the option is an invalid expression</td></tr>
 * <tr><td>SelectionVariant.HIGH_PROVIDED_THOUGH_NOT_ALLOWED</td><td>Indicates that the upper boundary has been specified, even though the option is not 'BT'</td></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type or the value is set to <code>null</code></td></tr>
 * <tr><td>SelectionVariant.INVALID_PROPERTY_NAME</td><td>Indicates that the property name is invalid, for example, it has not been specified</td></tr>
 * <tr><td>SelectionVariant.PARAMETER_SELOPT_COLLISION</td><td>Indicates that another parameter with the same name as the property name already exists</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.addSelectOption = function(sPropertyName,sSign,sOption,sLow,sHigh) { return new Object(); };

/**
 * Creates a new subclass of class sap.ui.generic.app.navigation.service.SelectionVariant with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the current context URL intended for the filters.
 * @returns {string} The current context URL for the filters
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getFilterContextUrl = function() { return ""; };

/**
 * Returns the identification of the selection variant.
 * @returns {string} The identification of the selection variant as made available during construction
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getID = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.generic.app.navigation.service.SelectionVariant.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the value of the parameter called <code>sName</code> if it has been set.
 * If the parameter has never been set or has been removed, <code>undefined</code> is returned.
 * @param {string} sName The name of the parameter to be returned
 * @returns {string} The value of parameter <code>sName</code>; returning the value <code>null</code> not possible 
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getParameter = function(sName) { return ""; };

/**
 * Gets the current context URL intended for the parameters.
 * @returns {string} The current context URL for the parameters
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getParameterContextUrl = function() { return ""; };

/**
 * Returns the set of parameter names available in this selection variant
 * @returns {array} the list of parameter names which are valid
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getParameterNames = function() { return null; };

/**
 * Returns the names of the parameter and select option properties available for this instance.
 * @returns {array} The list of parameter and select option property names available for this instance
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getPropertyNames = function() { return null; };

/**
 * Returns the set of select options/ranges available for a given property name.
 * @param {string} sPropertyName The name of the property for which the set of select options/ranges is returned
 * @returns {array} If <code>sPropertyName</code> is an invalid name of a property or no range exists, <code>undefined</code>
 * is returned; otherwise, an immutable array of ranges is returned. Each entry of the array is an object with the 
 * following properties:
 * <ul>
 * <li><code>Sign</code>: The sign of the range</li>
 * <li><code>Option</code>: The option of the range</li>
 * <li><code>Low</code>: The low value of the range; returning value <code>null</code> is not possible</li>
 * <li><code>High</code>: The high value of the range; if this value is not necessary, <code>null</code> is used</li>
 * </ul>
 * For further information about the meaning of the attributes, refer to method <code>addSelectOption</code>.
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * <tr><td>SelectionVariant.INVALID_PROPERTY_NAME</td><td>Indicates that the property name is invalid, for example, it has not been specified</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getSelectOption = function(sPropertyName) { return null; };

/**
 * Returns the names of the properties available for this instance.
 * @returns {array} The list of property names available for this instance
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getSelectOptionsPropertyNames = function() { return null; };

/**
 * Returns the current text / description of this selection variant.
 * @returns {string} the current description of this selection variant.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getText = function() { return ""; };

/**
 * First tries to retrieve the set of select options/ranges available for <code>sName</code> as property name. If successful, 
 * this array of selections is being returned. If it fails, an attempt to find a parameter, whose name is <code>sName</code>, is
 * made. If the latter succeeds, the single value is converted to fit into an array of selections to make it 
 * type compatible with ranges. This array is then returned. <br />
 * If neither a select option nor a parameter could be found, <code>undefined</code> is returned.
 * @param {string} sName The name of the attribute for which the value is retrieved
 * @returns {array} The ranges in the select options for the specified property or a range-converted representation of a parameter is returned.
 * If both lookups fail, <code>undefined</code> is returned. <br />
 * The returned ranges have the format:
 * <ul>
 * <li><code>Sign</code>: The sign of the range</li>
 * <li><code>Option</code>: The option of the range</li>
 * <li><code>Low</code>: The low value of the range; returning the value <code>null</code> is not possible</li>
 * <li><code>High</code>: The high value of the range; if this value is not necessary, <code>null</code> (but does exist)</li>
 * </ul>
 * For further information on the meaning of the attributes, refer to method {@link #.addSelectOption addSelectOption}.
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * <tr><td>SelectionVariant.INVALID_PROPERTY_NAME</td><td>Indicates that the property name is invalid, for example, it has not been specified</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.getValue = function(sName) { return null; };

/**
 * Returns <code>true</code> if the selection variant does neither contain parameters
 * nor ranges.
 * @return {boolean} If set to <code>true</code>  there are no parameters and no select options available in
 * the selection variant; <code>false</code> otherwise.
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.isEmpty = function() { return false; };

/**
 * Adds a set of select options to the list of select options for a given parameter.
 * @param {string} sPropertyName The name of the property for which the set of select options is added
 * @param {array} aSelectOptions Set of select options to be added
 * @return {object} This instance to allow method chaining
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.massAddSelectOption = function(sPropertyName,aSelectOptions) { return new Object(); };

/**
 * Removes a parameter called <code>sName</code> from the selection variant.
 * @param {string} sName The name of the parameter to be removed
 * @returns {object} This instance to allow method chaining
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.PARAMETER_WITHOUT_NAME</td><td>Indicates that name of the parameter has not been specified</td></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.removeParameter = function(sName) { return new Object(); };

/**
 * Removes a select option called <code>sName</code> from the selection variant.
 * @param {string} sName The name of the select option to be removed
 * @returns {object} This instance to allow method chaining.
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.SELOPT_WITHOUT_NAME</td><td>Indicates that name of the select option has not been specified</td></tr>
 * <tr><td>SelectionVariant.SELOPT_WRONG_TYPE</td><td>Indicates that the name of the parameter <code>sName</code> has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.removeSelectOption = function(sName) { return new Object(); };

/**
 * Renames a parameter called <code>sNameOld</code> to <code>sNameNew</code>. If a parameter or a select option with
 * the name <code>sNameNew</code> already exist, an error is thrown. If a parameter with the name <code>sNameOld</code>
 * does not exist, nothing is changed.
 * @param {string} sNameOld The current name of the parameter to be renamed
 * @param {string} sNameNew The new name of the parameter
 * @returns {object} This instance to allow method chaining
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.PARAMETER_WITHOUT_NAME</td><td>Indicates that the name of a parameter has not been specified</td></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * <tr><td>SelectionVariant.PARAMETER_SELOPT_COLLISION</td><td>Indicates that another select option with the same new name already exists</td></tr>
 * <tr><td>SelectionVariant.PARAMETER_COLLISION</td><td>Indicates that another parameter with the same new name already exists</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.renameParameter = function(sNameOld,sNameNew) { return new Object(); };

/**
 * Renames a select option called <code>sNameOld</code> to <code>sNameNew</code>. If a select option or a parameter
 * with the name <code>sNameNew</code> already exist, an error is thrown. If a select option with the name <code>sNameOld</code>
 * does not exist, nothing is changed.
 * @param {string} sNameOld The current name of the select option property to be renamed
 * @param {string} sNameNew The new name of the select option property
 * @returns {object} This instance to allow method chaining
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.SELOPT_WITHOUT_NAME</td><td>Indicates that the name of a select option has not been specified</td></tr>
 * <tr><td>SelectionVariant.SELOPT_WRONG_TYPE</td><td>Indicates that a select option has an invalid type</td></tr>
 * <tr><td>SelectionVariant.PARAMETER_SELOPT_COLLISION</td><td>Indicates that another parameter with the same new name already exists</td></tr>
 * <tr><td>SelectionVariant.SELOPT_COLLISION</td><td>Indicates that another select option with the same new name already exists</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.renameSelectOption = function(sNameOld,sNameNew) { return new Object(); };

/**
 * Sets the context URL intended for the filters.
 * @param {string} sURL The URL of the filters
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.setFilterContextUrl = function(sURL) {  };

/**
 * Sets the identification of the selection variant.
 * @param {string} sId The new identification of the selection variant 
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.setID = function(sId) {  };

/**
 * Sets the context URL intended for the parameters.
 * @param {string} sURL The URL of the parameter context
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.setParameterContextUrl = function(sURL) {  };

/**
 * Sets the text / description of the selection variant.
 * @param {string} sNewText The new description to be used
 * @public
 * @throws An instance of {@link sap.ui.generic.app.navigation.service.NavError} in case of input errors. Valid error codes are:
 * <table>
 * <tr><th>Error code</th><th>Description</th></tr>
 * <tr><td>SelectionVariant.INVALID_INPUT_TYPE</td><td>Indicates that an input parameter has an invalid type</td></tr>
 * </table>
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.setText = function(sNewText) {  };

/**
 * Returns the external representation of the selection variant as JSON object.
 * @return {object} The external representation of this instance as a JSON object
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.toJSONObject = function() { return new Object(); };

/**
 * Serializes this instance into a JSON-formatted string.
 * @return {string} The JSON-formatted representation of this instance in stringified format
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SelectionVariant.toJSONString = function() { return ""; };


// ---- sap.ui.generic.app.navigation.service.SuppressionBehavior --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.generic.app.navigation.service.SuppressionBehavior.toString = function() { return ""; };

// ---- sap.ui.generic.app.transaction.DraftContext --------------------------------------------------------------------------

/**
 * Constructor for meta-model access class.
 * 
 * @public
 * @class The class provides access to information on draft handling that is available in the
 *        OData service's metadata as it interprets draft-specific annotations.
 * @version 1.48.4
 * @since 1.30.0
 * @param {sap.ui.model.odata.ODataModel} oModel The OData model currently used
 * @throws {Error} If no model is handed over as input parameter
 * 
 */
sap.ui.generic.app.transaction.DraftContext = function(oModel) {};
/**
 * Checks whether an OData property is annotated with UpdateOnChange. The method is used in context of a validation success event.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @param {string} sProperty The name of the property
 * @return {boolean} <code>true</code>, if the property is annotated with UpdateOnChange, <code>false</code> otherwise
 * @throws {Error} If no entity set is handed over as input parameter
 * @public
 * @deprecated Since 1.32.0
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.checkUpdateOnChange = function(sEntitySet,sProperty) { return false; };

/**
 * Frees all resources claimed during the life-time of this instance.
 * 
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.destroy = function() {  };

/**
 * Creates a new subclass of class sap.ui.generic.app.transaction.DraftContext with name <code>sClassName</code>
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
sap.ui.generic.app.transaction.DraftContext.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.generic.app.transaction.DraftContext.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.transaction.DraftContext.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the name of the function import to be used.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @param {string} sDraftFunctionImport The draft function import
 * @returns {string} The name of the function import to be used
 * @throws {Error} If no context is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.getODataDraftFunctionImportName = function(oContext,sDraftFunctionImport) { return ""; };

/**
 * Returns the semantic keys for a given entity set.
 * 
 * @param {string} sEntitySet The given entity set
 * @returns {array} The semantic keys
 * @throws {Error} If no entity set is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.getSemanticKey = function(sEntitySet) { return null; };

/**
 * Checks whether an entity set is draft-enabled. The entity set name is derived from the given binding context
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {boolean} <code>true</code>, if a given entity set is draft-enabled, <code>false</code> otherwise
 * @throws {Error} If no context is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasDraft = function(oContext) { return false; };

/**
 * Checks whether administrative data for a given draft is available.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @returns {boolean} <code>true</code>, if administrative data is available, <code>false</code> otherwise 
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasDraftAdministrativeData = function(sEntitySet) { return false; };

/**
 * Checks whether an entity set has a draft preparation action. The entity set name is derived from the given binding context.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {boolean} <code>true</code>, if a given entity set has a draft preparation action, <code>false</code> otherwise
 * @throws {Error} If no context is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasDraftPreparationAction = function(oContext) { return false; };

/**
 * Checks whether an entity set is draft root. The entity set name is derived from the given binding context.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {boolean} <code>true</code>, if a given entity set is draft root, <code>false</code> otherwise
 * @throws {Error} If no context is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasDraftRoot = function(oContext) { return false; };

/**
 * Checks whether an entity set has a draft validation function. The entity set name is derived from the given binding context.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {boolean} <code>true</code>, if a given entity set has a draft validation function, <code>false</code> otherwise
 * @throws {Error} If no context is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasDraftValidationFunction = function(oContext) { return false; };

/**
 * Checks if the parameter "PreserveChanges" is supported by the edit function.
 * If the edit action is triggered with the parameter set to <code>true</code> the
 * ABAP application infrastructure will respond with HTTP response code 409 if unsaved 
 * changes (from another user) exist.
 * 
 * @returns {boolean} <code>true</code>, if "PreserveChanges" is supported
 * 
 * @throws {Error} If no context is handed over as input parameter
 * 
 * @since 1.38
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasPreserveChanges = function() { return false; };

/**
 * Checks whether a sibling entity for a given entity set is available.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @returns {boolean} <code>true</code>, if sibling entity is available, <code>false</code> otherwise 
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.hasSiblingEntity = function(sEntitySet) { return false; };

/**
 * Checks whether a given entity set is draft-enabled.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @returns {boolean} <code>true</code>, if a given entity set is draft-enabled, <code>false</code> otherwise
 * @throws {Error} If no entity set is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.isDraftEnabled = function(sEntitySet) { return false; };

/**
 * Checks whether a given entity set is a draft root.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @returns {boolean} <code>true</code>, if a given entity set is draft root, <code>false</code> otherwise
 * @throws {Error} If no entity set is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.isDraftRoot = function(sEntitySet) { return false; };

/**
 * Checks whether a given key is a semantic key.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @param {object} oKeys The given key
 * @returns {boolean} <code>true</code>, if a given key is a semantic key, <code>false</code> otherwise
 * @throws {Error} If no entity set is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.isSemanticKey = function(sEntitySet,oKeys) { return false; };

/**
 * Checks whether a given key is a technical key.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @param {object} oKeys The given key
 * @returns {boolean} <code>true</code>, if a given key is a technical key, <code>false</code> otherwise
 * @throws {Error} If no entity set is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftContext.prototype.isTechnicalKey = function(sEntitySet,oKeys) { return false; };


// ---- sap.ui.generic.app.transaction.DraftController --------------------------------------------------------------------------

/**
 * Constructor for a new draft controller instance.
 * 
 * 
 * @public
 * @class Gives access to runtime draft handling for applications. Assuming state-less communication, each single data modification request (or
 *        change set in an OData $batch request) is a "mini-transaction", which saves data to the database. The class implements the transactional
 *        interaction patterns specified for OData services that support draft documents and provides methods for draft-specific actions, for
 *        example validate, prepare, activate.
 * 
 *        Additionally, it handles transactional request processing, ensures concurrency control and correct
 *        ETag handling. It provides access to the simple interaction patterns of runtime handling for drafts according to the draft
 *        specification. These can be combined as required by client applications. Additionally, error handling is provided to notify client
 *        implementations of error situations. The event <code>fatalError</code> is thrown, if fatal errors occur during execution of OData
 *        requests.
 * @version 1.48.4
 * @since 1.30.0
 * @param {sap.ui.model.odata.ODataModel} oModel The OData model currently used
 * @param {sap.ui.generic.app.util.Queue} oQueue Optional HTTP request queue
 * @throws {Error} Throws an error if no model is handed over as input parameter
 * 
 */
sap.ui.generic.app.transaction.DraftController = function(oModel,oQueue) {};
/**
 * Submits changes to the back-end and activates a draft entity in the back-end.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.activateDraftEntity = function(oContext) { return null; };

/**
 * Creates an edit draft in the back-end. Additionally, possible changes that have been collected on the client are sent to the back-end.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @param {boolean} [bPreserveChanges] Set to <code>true</code> to avoid the creation of a new draft when unsaved changes exist in the back-end
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.createEditDraftEntity = function(oContext,bPreserveChanges) { return null; };

/**
 * Creates a new edit draft on the client and sends it to the back-end. Additionally, possible changes that have been collected on the client are
 * sent to the back-end.
 * 
 * @param {string} sEntitySet The name of the entity set
 * @param {string} sPath Path identifying the new entity instance
 * @returns {Promise} A <code>Promise</code> for asynchronous execution of the request
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.createNewDraftEntity = function(sEntitySet,sPath) { return null; };

/**
 * Frees all resources claimed during the life-time of this instance.
 * 
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.destroy = function() {  };

/**
 * Creates a new subclass of class sap.ui.generic.app.transaction.DraftController with name <code>sClassName</code>
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
sap.ui.generic.app.transaction.DraftController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the current draft context instance. If no instance exists, it is created lazily.
 * 
 * @returns {sap.ui.generic.app.transaction.DraftContext} The current draft context instance
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.getDraftContext = function() { return new sap.ui.generic.app.transaction.DraftContext(); };

/**
 * Retrieves a possibly existing draft entity for the given active entity using the binding context of the active entity from the back-end.
 * 
 * @param {sap.ui.model.Context} oContext The binding context of the active entity
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @throws {Error} Throws an error if no context is handed over as input parameter
 * @public
 * @since 1.32.0
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.getDraftForActiveEntity = function(oContext) { return null; };

/**
 * Returns a metadata object for class sap.ui.generic.app.transaction.DraftController.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.transaction.DraftController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks whether an entity has an active entity associated.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {boolean} <code>true</code>, if an active entity exists, <code>false</code> otherwise
 * @public
 * @since 1.32.0
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.hasActiveEntity = function(oContext) { return false; };

/**
 * Checks whether an entity set is active. The entity set name is derived from the given binding context
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {boolean} <code>true</code>, if a given entity set is active, <code>false</code> otherwise
 * @throws {Error} Throws an error if no context is handed over as input parameter
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.isActiveEntity = function(oContext) { return false; };

/**
 * Submits changes to the back-end and prepares an existing draft entity in the back-end for later activation by invoking the preparation action.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.prepareDraftEntity = function(oContext) { return null; };

/**
 * Submits changes to the back-end and prepares a draft entity in the back-end for later activation by invoking the preparation action.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @param {map} mParameters Parameters to control the behavior of the request
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.saveAndPrepareDraftEntity = function(oContext,mParameters) { return null; };

/**
 * Submits changes to the back-end and prepares an existing draft entity in the back-end for later activation by invoking the validation action.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.DraftController.prototype.validateDraftEntity = function(oContext) { return null; };


// ---- sap.ui.generic.app.transaction.TransactionController --------------------------------------------------------------------------

/**
 * Constructor for a new transaction controller instance.
 * 
 * 
 * @public
 * @class Assuming state-less communication, each single data modification request (or change set in an OData $batch request) is a
 *        "mini-transaction", which saves data to the database. The class allows you to submit changes, invoke actions, OData CRUD operations in general,
 *        and trigger client-side validations. It ensures concurrency control and correct ETag handling.
 * 
 *        The class gives access to runtime draft handling for applications. Additionally error handling capabilities are provided to notify client 
 *        implementations of error situations. The event <code>fatalError</code> is thrown, if fatal errors occur during execution of OData requests.
 * @version 1.48.4
 * @since 1.30.0
 * @param {sap.ui.model.odata.ODataModel} oModel The OData model currently used
 * @param {sap.ui.generic.app.util.Queue} oQueue Optional HTTP request queue
 * @param {map} mParams Optional configuration parameters
 * @param {boolean} mParams.noBatchGroups Suppresses creation of batch groups
 * @throws {Error} Throws an error if no model is handed over as input parameter
 * 
 */
sap.ui.generic.app.transaction.TransactionController = function(oModel,oQueue,mParams) {};
/**
 * Submits changes to the backend system and deletes a group of entities in the backend system.
 * These entities can be both draft or active entities.
 * 
 * @param {array} aEntities Binding contexts or paths (strings) which identify the entities
 * @param {map} mParameters Parameters that control the behavior of the request
 * @returns {Promise} A <code>Promise</code> that receives an array with the responses of the delete requests.
 *          The <code>Promise</code> resolves when at least one request was successful and rejects when all 
 *          delete requests have been rejected/aborted.
 * 
 * @since 1.38
 * @experimental
 * @public
 * 
 */
sap.ui.generic.app.transaction.TransactionController.prototype.deleteEntities = function(aEntities,mParameters) { return null; };

/**
 * Submits changes to the backend system and deletes an entity in the backend system.
 * This entity can be either a draft or an active entity.
 * 
 * @param {sap.ui.model.Context | string} vEntity Binding context or path of the entity
 * @param {map} mParameters Parameters that control the behavior of the request
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.TransactionController.prototype.deleteEntity = function(vEntity,mParameters) { return null; };

/**
 * Frees all resources claimed during the life-time of this instance.
 * 
 * @public
 * 
 */
sap.ui.generic.app.transaction.TransactionController.prototype.destroy = function() {  };

/**
 * Prepares an entity for editing. If the entity is active and draft enabled, a new draft document is created. If not, the control is
 * automatically returned to the caller of the method by returning a resolved promise.
 * 
 * @param {sap.ui.model.Context} oContext The given binding context
 * @param {boolean} [bPreserveChanges] Set to <code>true</code> to avoid the creation of a new draft when unsaved changes exist in the back-end
 * @returns {Promise} A <code>Promise</code> for asynchronous execution
 * @public
 * 
 */
sap.ui.generic.app.transaction.TransactionController.prototype.editEntity = function(oContext,bPreserveChanges) { return null; };

/**
 * Creates a new subclass of class sap.ui.generic.app.transaction.TransactionController with name <code>sClassName</code>
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
sap.ui.generic.app.transaction.TransactionController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the current draft controller instance.
 * 
 * @returns {sap.ui.generic.app.transaction.DraftController} The draft controller instance
 * @public
 * 
 */
sap.ui.generic.app.transaction.TransactionController.prototype.getDraftController = function() { return new sap.ui.generic.app.transaction.DraftController(); };

/**
 * Returns a metadata object for class sap.ui.generic.app.transaction.TransactionController.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.generic.app.transaction.TransactionController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Resets changes that have been tracked by the current instance of <code>sap.ui.model.odata.v2.ODatatModel</code>. These changes have been
 * created by invoking the <code>setProperty</code> method of <code>sap.ui.model.odata.v2.ODatatModel</code>.
 * 
 * @param{array} aKeys Optional array of keys that have to be reset. If no array is passed all changes will be reset.
 * @public
 * 
 */
sap.ui.generic.app.transaction.TransactionController.prototype.resetChanges = function() {  };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.generic.app.navigation.service.NavType --------------------------------------------------------------------------

/**
 * Back navigation with sap-iapp-state parameter
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavType.iAppState = "";

/**
 * Initial startup without any navigation or default parameters
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavType.initial = "";

/**
 * Basic cross-app navigation with URL parameters only (without sap-xapp-state) or initial start with default parameters
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavType.URLParams = "";

/**
 * Cross-app navigation with sap-xapp-state parameter (and URL parameters), defaulted parameters may be added
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.NavType.xAppState = "";


// ---- sap.ui.generic.app.navigation.service.ParamHandlingMode --------------------------------------------------------------------------

/**
 * The conflict resolution adds URL parameters to the SelectionVariant
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.ParamHandlingMode.InsertInSelOpt = undefined;

/**
 * The conflict resolution favors the SelectionVariant over URL parameters
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.ParamHandlingMode.SelVarWins = undefined;

/**
 * The conflict resolution favors the URL parameters over the SelectionVariant. Caution: In case of cross-app navigation
 * a navigation parameter value from the source app is overwritten by a default, if a default is maintained in the launchpad
 * designer for this parameter in the target app!
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.ParamHandlingMode.URLParamWins = undefined;


// ---- sap.ui.generic.app.navigation.service.SuppressionBehavior --------------------------------------------------------------------------

/**
 * Semantic attributes with an empty string are ignored, the remaining attributes are mixed in to the selection variant.
 * Warning! Consider the impact on Boolean variable values!
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SuppressionBehavior.ignoreEmptyString = undefined;

/**
 * Semantic attributes with a <code>null</code> value lead to an {@link sap.fin.central.lib.error.Error error} of type NavigationHandler.INVALID_INPUT
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SuppressionBehavior.raiseErrorOnNull = undefined;

/**
 * Semantic attributes with an <code>undefined</code> value lead to an {@link sap.fin.central.lib.error.Error error} of type NavigationHandler.INVALID_INPUT
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SuppressionBehavior.raiseErrorOnUndefined = undefined;

/**
 * Standard suppression behavior: semantic attributes with a <code>null</code> or an <code>undefined</code> value are ignored,
 * the remaining attributes are mixed in to the selection variant
 * @public
 * 
 */
sap.ui.generic.app.navigation.service.SuppressionBehavior.standard = undefined;

