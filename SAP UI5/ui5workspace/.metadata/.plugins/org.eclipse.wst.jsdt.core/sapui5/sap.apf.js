
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.apf --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.apf.toString = function() { return ""; };

// ---- sap.apf.Api --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Official API for Analysis Path Framework (APF)<br>
 * <p>
 * The APF API provides a consuming application access to the functionality of the APF. It is assumed that the consuming application extends type {@link sap.apf.base.Component}.
 * The API reference is returned by method {@link sap.apf.base.Component#getApi}.
 * <br>
 * Objects and types returned by methods of APF API or passed in parameters of APF API method also belong to the API.
 * These objects and types are documented in their respective sections of this documentation.
 * All methods, objects or types that are not explicitly documented as public are strictly internal and may be changed without prior notice.
 * This also includes all methods, objects or types being classified as experimental.<br>
 * Furthermore there is no need to instantiate required entities directly by applying the JavaScript 'new'-operator on their respective constructors.
 * Instead they should be created by consumers using a create method available on API-level, such as e.g. {@link sap.apf.Api#createMessageObject} for {@link sap.apf.core.MessageObject} or {@link sap.apf.Api#createFilter} for {@link sap.apf.utils.Filter}.
 * </p>
 * @param {sap.apf.Component|sap.apf.base.Component} oComponent - A reference to the calling Component.js. The reference provides access to parameters and context.
 * @param {Object} [inject] - injected constructors and functions for testing only.
 * @param {Object} [manifests] - manifests of the component and the base component itself
 */
sap.apf.Api = function(oComponent,inject,manifests) {};
/**
 * 
 * @public
 * @experimental NOT FOR PRODUCTION USE
 * ription The handling of the window.onerror by the message handler is
 *              either switched on or off. Per default the handling is deactivated.
 * @param {boolean} bHandling Boolean true switches the winow.onerror handling on
 * @returns undefined
 */
sap.apf.Api.prototype.activateOnErrorHandling = function(bHandling) { return null; };

/**
 * 
 * @public
 * @experimental NOT FOR PRODUCTION USE
 * @deprecated since Version 1.23.1. Remains in api in order to maintain downward compatibility to 3 Wave 5 apps.
 * ription Adds an element to the footer area.
 * @param {object} oControl any valid UI5 control.
 */
sap.apf.Api.prototype.addMasterFooterContent = function(oControl) { return null; };

/**
 * 
 * @public
 * @param {sap.apf.utils.Filter} filter
 * ription  Adds a filter to the path.
 * Subsequent changes need to be done by the update method providing the identifier.
 * Limitation: Only a single filter term or a disjunction/conjunction of single terms over a single property is supported. 
 * Limitation: Only the operators EQ, LE (less equal than) and GE (greater equal than) are supported.
 * @returns  {number} ID to be provided for later updates of the same filter via method updatePathFilter.
 */
sap.apf.Api.prototype.addPathFilter = function(filter) { return 0.0; };

/**
 * 
 * @public
 * ription Creates an empty filter object.
 * Its methods can be used to create a logical filter expression.
 * @returns {sap.apf.utils.Filter}
 */
sap.apf.Api.prototype.createFilter = function() { return new sap.apf.utils.Filter(); };

/**
 * 
 * @public
 * ription Creates a message object, which is the mandatory parameter for API method putMessage.
 *              So first create the message object and afterwards call putMessage with the message object as argument.
 * @param {object} oConfig Configuration object for the message object.
 * @param {string} oConfig.code The message is classified by its code. The code identifies an entry in the message configuration.
 * @param {array} [oConfig.aParameters] Additional parameters for the message. The parameters are filled into the message text,
 *                                      when the message will be processed by the text resource handler.
 * @param {object} [oConfig.oCallingObject] Reference of the calling object. This can be used later to visualize on the user interface, where the message occurred.
 * @param {string} [oConfig.rawText] Raw text for non translated messages.
 * @returns {sap.apf.core.MessageObject}
 */
sap.apf.Api.prototype.createMessageObject = function(oConfig) { return new sap.apf.core.MessageObject(); };

/**
 * 
 * @public
 * ription helps to call customer defined custom formatter function(fnCallback).
 * @param {function} fnCallback custom format function need to be called.
 */
sap.apf.Api.prototype.customFormat = function(fnCallback) { return null; };

/**
 * 
 * @public
 * @param {number|string} id - Identifier of the path filter fragment as it was returned by addPathFilter method.
 * ription Gets a path filter fragment for the given identifier by fully replacing the existing one.
 * @returns {sap.apf.utils.Filter} filter for id
 */
sap.apf.Api.prototype.getPathFilter = function(id) { return new sap.apf.utils.Filter(); };

/**
 * 
 * @public
 * ription Retrieves a text and applies HTML encoding
 * @param {object} oLabel || {string} Label object or text key
 * @param {string[]} aParameters Array with parameters to replace place holders in text.
 * @returns {string}
 */
sap.apf.Api.prototype.getTextHtmlEncoded = function(oLabel,aParameters) { return ""; };

/**
 * 
 * @public
 * ription Retrieves a text without application of HTML encoding
 * @param {object} oLabel || {string} Label object or text key
 * @param {string[]} aParameters Array with parameters to replace place holders in text.
 * @returns {string}
 */
sap.apf.Api.prototype.getTextNotHtmlEncoded = function(oLabel,aParameters) { return ""; };

/**
 * 
 * @public
 * @experimental NOT FOR PRODUCTION USE
 * @deprecated since Version 1.23.1.
 * ription Loads a new  application configuration in JSON format. When called many times, the file is loaded only the first time.
 * @param {string} sFilePath The absolute path of an application configuration file. Host and port will be added in front of this path.
 */
sap.apf.Api.prototype.loadApplicationConfig = function(sFilePath) { return null; };

/**
 * 
 * @public
 * ription A message is passed to the APF message handler for further processing.
 *              All message specific settings (e.g. message code or severity) need to be passed within an APF message object instance.
 * @param {sap.apf.core.MessageObject} oMessage The message object shall be created by method {@link sap.apf.Api#createMessageObject}.
 * @returns undefined
 */
sap.apf.Api.prototype.putMessage = function(oMessage) { return null; };

/**
 * 
 * @public
 * @experimental NOT FOR PRODUCTION USE
 * ription Calls the sap.apf.core.instance#updatePath (also see {@link sap.apf.core.Path#update}) with proper callback for UI.
 *                It also refreshes the steps either from the active step or
 *                all the steps depending on the boolean value passed.
 * @param {boolean} bRefreshAllSteps
 */
sap.apf.Api.prototype.selectionChanged = function(bRefreshAllSteps) { return null; };

/**
 * 
 * @public
 * ription Register the function callback to be executed after APF start-up and content has been created.
 * 				Callback is called with APF API instance as parameter and 'this' set to the Component instance.
 * @param {function} fnCallback that will be executed after APF start-up and content has been created.
 */
sap.apf.Api.prototype.setCallbackAfterApfStartup = function(fnCallback) { return null; };

/**
 * 
 * @public
 * ription Register the function callback to be executed before APF start-up.
 * 				Callback is called with APF API instance as parameter and 'this' set to the Component instance.
 * @param {function} fnCallback that will be executed before APF start-up.
 */
sap.apf.Api.prototype.setCallbackBeforeApfStartup = function(fnCallback) { return null; };

/**
 * 
 * @public
 * @experimental NOT FOR PRODUCTION USE
 * ription Register the function callback to be executed on the given event type.
 *                fnCallback will be executed under a context and will be passed with arguments depending on the event type.
 * @param {sap.apf.core.constants.eventTypes} sEventType is the type of event for registering the fnCallback for that particular event type
 *                    printTriggered - Registers a callback for initial page print, this callback returns
 *                                     2d array
 *                    contextChanged : Registers a callback for context change, which will set the context of the application
 * @param {function} fnCallback that will be executed depending on the event type.
 * @returns {boolean} true or false based on success or failure of registering the listener.
 */
sap.apf.Api.prototype.setEventCallback = function(sEventType,fnCallback) { return false; };

/**
 * 
 * ription true, when no fatal error occurred during startup phase. Startup phase includes the initialization + startupApf 
 * @public
 * @returns {boolean} success of startup
 */
sap.apf.Api.prototype.startupSucceeded = function() { return false; };

/**
 * 
 * @public
 * @param {number|string} id Identifier of the path filter as it was returned by addPathFilter method.
 * When using an ID of type string the caller must ensure that it is unique.
 * @param {sap.apf.utils.Filter} filter
 * ription Updates a filter of the path.
 * Limitation: Only a single filter term or a disjunction/conjunction of single terms over a single property is supported. 
 * Limitation: Only the operators EQ, LE (less equal than) and GE (greater equal than) are supported.
 */
sap.apf.Api.prototype.updatePathFilter = function(id,filter) { return null; };


// ---- sap.apf.base --------------------------------------------------------------------------


// ---- sap.apf.base.Component --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Base Component for all APF based applications.
 * @extends sap.ui.core.UIComponent
 * @since SAP UI5 1.30.0.
 */
sap.apf.base.Component = function() {};
/**
 * 
 * @public
 * ription Creates the content of the component. A component that extends this component shall call this method.
 * @returns {sap.ui.core.Control} the content
 */
sap.apf.base.Component.prototype.createContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * @public
 * ription Cleanup the Component instance. The component that extends this component should call this method.
 * 
 */
sap.apf.base.Component.prototype.exit = function() { return null; };

/**
 * 
 * @public
 * ription Returns the instance of the APF API.
 * @returns {sap.apf.Api}
 */
sap.apf.base.Component.prototype.getApi = function() { return new sap.apf.Api(); };

/**
 * 
 * @public
 * @experimental NOT FOR PRODUCTION USE
 * @since 1.38.4
 * ription This function is optional and can be implemented in any extending Component.js.
 * Its return value is an object containing injected constructors, functions, references and exits.
 * The injected sub entities are all optional and will be used by the APF logic when defined.
 * Exits are used to change predefined enhancement points.
 * Instances, functions and constructors are used for test isolation.
 * Probe is used in tests to access internal APF references.
 * @returns {object} Object containing optional injects and exits
 * @returns {object.exits} Exit functions
 * @returns {object.exits.binding.afterGetFilter} Exit function to be used for altering the filter returned by binding.getFilter()
 * @returns {object.exits.path.beforeAddingToCumulatedFilter} Exit function to be used for altering the filter of a step during path update before adding to cumulative filter
 * @returns {object.instances} Instances to be injected for testing purposes
 * @returns {object.functions} Functions to be injected for testing purposes
 * @returns {object.constructors} Constructors to be injected for testing purposes
 * @returns {object.probe} Probe constructor to get internal APF references for testing purposes
 */
sap.apf.base.Component.prototype.getInjections = function() { return new object, object.exits, object.exits.binding.afterGetFilter, object.exits.path.beforeAddingToCumulatedFilter, object.instances, object.functions, object.constructors, object.probe(); };


// ---- sap.apf.Component --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Base Component for all APF based applications.
 * @extends sap.ui.core.UIComponent
 * @deprecated since SAP UI 1.30. This ./Component.js was used for any application build with UI5 Version < 1.30.
 * 		Use the new ./base/Component.js instead for any application build with UI5 Version >= 1.30
 */
sap.apf.Component = function() {};
/**
 * 
 * @public
 * ription Creates the content of the component. A component, that extends this component should call this method.
 * @returns {sap.ui.core.Control} the content
 */
sap.apf.Component.prototype.createContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * @public
 * ription Cleanup  the Component instance . The component, that extends this component should call this method.
 * 
 */
sap.apf.Component.prototype.exit = function() { return null; };

/**
 * 
 * @public
 * ription Returns the instance of the APF API.
 * @returns {sap.apf.Api}
 */
sap.apf.Component.prototype.getApi = function() { return new sap.apf.Api(); };

/**
 * 
 * @public
 * ription Initialize the Component instance after creation. The component, that extends this component should call this method.
 * 
 */
sap.apf.Component.prototype.init = function() { return null; };


// ---- sap.apf.core --------------------------------------------------------------------------


// ---- sap.apf.core.MessageObject --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class The message object represents the APF specific message object for detailed evaluation. The message object shall be created by method {@link sap.apf.Api#createMessageObject}.
 * @param {object} oConfig 
 */
sap.apf.core.MessageObject = function(oConfig) {};
/**
 * 
 * @public
 * ription Returns the calling object
 * @returns {object}
 */
sap.apf.core.MessageObject.prototype.getCallingObject = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns the message code.
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getCode = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the version of jQuery
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getJQueryVersion = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the message text.
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getMessage = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the parameter which were passed over
 * @returns {array}
 */
sap.apf.core.MessageObject.prototype.getParameters = function() { return null; };

/**
 * 
 * @public
 * ription Gets the previous message object. 
 * @returns {sap.apf.core.MessageObject} || undefined
 */
sap.apf.core.MessageObject.prototype.getPrevious = function() { return new sap.apf.core.MessageObject(); };

/**
 * 
 * @public
 * ription Returns raw text. 
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getRawText = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the version of SAP UI5
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getSapUi5Version = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the severity.
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getSeverity = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the stack of the error object to get the line number and source file
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getStack = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the time stamp of the message object in seconds after 1970
 * @returns {number}
 */
sap.apf.core.MessageObject.prototype.getTimestamp = function() { return 0.0; };

/**
 * 
 * @public
 * ription Returns the time stamp of the message object as a date
 * @returns {date}
 */
sap.apf.core.MessageObject.prototype.getTimestampAsdateObject = function() { return null; };

/**
 * 
 * @public
 * ription Returns true, if a raw text is set. 
 * @returns {boolean}
 */
sap.apf.core.MessageObject.prototype.hasRawText = function() { return false; };

/**
 * 
 * @public
 * ription Sets the code, that classifies the message.
 * @param {string} code 
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setCode = function(code) { return null; };

/**
 * 
 * @public
 * ription Sets the message text.
 * @param {string} sTextMessage 
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setMessage = function(sTextMessage) { return null; };

/**
 * 
 * @public
 * ription Sets the previous message object. One can add a message object to this message object, that describes a previous message. 
 * The message in the previous message object will also be displayed in the log (as previous entry). 
 * @param {sap.apf.core.MessageObject} oPreviousMessageObject 
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setPrevious = function(oPreviousMessageObject) { return null; };

/**
 * 
 * @public
 * ription Sets the severity , which classifies the message.
 * @param {string} severity Only for to build in error messages. Allowed values are defined in {@link sap.apf.constants.severity}.
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setSeverity = function(severity) { return null; };


// ---- sap.apf.core.ReadRequest --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Facade for sap.apf.core.Request for getting data via the OData protocol. This corresponds to a normal HTTP GET method. Creation is done via APF API.
 * @param {object} oInject Injection object.
 * @param {object} oInject.instances.coreApi Instance of core API.
 * @param {object} oInject.instances.messageHandler The APF Message handler.
 * @param {object} oRequest The object represents an OData GET request.
 * @param {string} sService Service defined by the analytical content configuration.
 * @param {string} sEntityType Entity type defined by the analytical content configuration.
 * @returns {sap.apf.core.ReadRequest}
 */
sap.apf.core.ReadRequest = function(oInject,oRequest,sService,sEntityType) {};
/**
 * 
 * @public
 * ription Returns {sap.apf.core.MetadataFacade} which provides convenience methods for accessing metadata
 * (only for the service document, which is assigned to this read request instance).
 * @param {string} sService Service defined by the request configuration.
 * @returns {sap.apf.core.MetadataFacade}
 */
sap.apf.core.ReadRequest.prototype.getMetadataFacade = function(sService) { return new sap.apf.core.MetadataFacade(); };

/**
 * 
 * @public
 * ription Executes an OData request.
 * @param [{sap.apf.utils.Filter}] oFilter
 * @param {function} fnCallback  The first argument of the callback function is the received data (as Array). The second argument is {sap.apf.core.EntityTypeMetadata}. The third argument is {sap.apf.core.MessageObject}. 
 * @param {Object} oRequestOptions - An optional object containing additional query string options
 * Format: { orderby : [{ property : <property_name>, order : <asc|desc>}], top : <integer>, skip : <integer> }  
 * @returns undefined
 */
sap.apf.core.ReadRequest.prototype.send = function(fnCallback,oRequestOptions) { return null; };


// ---- sap.apf.core.ReadRequestByRequiredFilter --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Facade for sap.apf.core.Request for getting data via the OData protocol. This corresponds to a normal HTTP GET method. Creation is done via APF API.
 * In addition to the handed over filter argument in method send(), the required filters and parameter entity set key properties of the configured entity type are applied, which are determined from path filter. 
 * @param {object} oInject Injection object.
 * @param {object} oInject.instances.coreApi Instance of core API.
 * @param {object} oInject.instances.oMessageHandler The APF Message handler.
 * @param {object} oRequest The object represents an OData GET request.
 * @param {string} sService Service defined by the analytical content configuration.
 * @param {string} sEntityType Entity type defined by the analytical content configuration.
 * @returns {sap.apf.core.ReadRequestByRequiredFilter}
 */
sap.apf.core.ReadRequestByRequiredFilter = function(oInject,oRequest,sService,sEntityType) {};
/**
 * 
 * @public
 * ription Returns {sap.apf.core.MetadataFacade} which provides convenience methods for accessing metadata
 * (only for the service document, which is assigned to this read request instance).
 * @param {string} sService Service defined by the request configuration.
 * @returns {sap.apf.core.MetadataFacade}
 */
sap.apf.core.ReadRequestByRequiredFilter.prototype.getMetadataFacade = function(sService) { return new sap.apf.core.MetadataFacade(); };

/**
 * 
 * @public
 * ription Executes an OData request.
 * @param [{sap.apf.utils.Filter}] oFilter
 * @param {function} fnCallback The first argument of the callback function is the received data (as Array). The second argument is {sap.apf.core.EntityTypeMetadata}. The third argument is {sap.apf.core.MessageObject}. 
 * @param {Object} oRequestOptions An optional object containing additional query string options
 * Format: { orderby : [{ property : <property_name>, order : <asc|desc>}], top : <integer>, skip : <integer> }  
 * @returns undefined
 */
sap.apf.core.ReadRequestByRequiredFilter.prototype.send = function(fnCallback,oRequestOptions) { return null; };


// ---- sap.apf.core.utils --------------------------------------------------------------------------


// ---- sap.apf.modeler --------------------------------------------------------------------------


// ---- sap.apf.modeler.core --------------------------------------------------------------------------


// ---- sap.apf.modeler.ui --------------------------------------------------------------------------


// ---- sap.apf.modeler.ui.controller --------------------------------------------------------------------------


// ---- sap.apf.modeler.ui.utils --------------------------------------------------------------------------


// ---- sap.apf.ui --------------------------------------------------------------------------


// ---- sap.apf.ui.representations --------------------------------------------------------------------------


// ---- sap.apf.ui.representations.representationInterface --------------------------------------------------------------------------

/**
 * 
 * @public
 * @experimental The complete interface is subject to ongoing work and not yet stable (as of Version 1.24.0).
 * @class This is not a runtime class, but it describes the interface that a representation (chart) has to implement for to interact with the APF.
 * @param {sap.apf.ui.representations.RepresentationInterfaceProxy} dependencies - specific interface proxy for communication between the representation and APF.<br>
 * @param {object} configuration - Configuration object that allows to define representation specific configuration values.<br>
 * Fixed interface property names:
 * <ul><li><b>alternateRepresentationTypeId</b>: A reference to a representation type in analytical configuration
 * <li><b>alternateRepresentationType</b>: A property dynamically added to the parameter object by APF core based on reference in alternateRepresentationTypeId and containing
 * configuration values of the representation type ID referenced by alternateRepresentationTypeId.
 * </ul>
 */
sap.apf.ui.representations.representationInterface = function(dependencies,configuration) {};
/**
 * 
 * @public
 * ription Called on representation by binding when a representation type is set.
 * Intention is to trigger transfer of selections that might exist on a representation (source) that is replaced by the "new" representation (target) to be set.
 * Therefore the target representation receives a reference pointing to the source representation.
 * In order to check whether selection transfer is possible the target representation initiates a negotiation process with the source representations (3-way-handshake).
 * If a common method can be determined between target and source representation the selection will be exchanged.
 * @param {object} oSourceRepresentation Source representation implementing the representationInterface.
 */
sap.apf.ui.representations.representationInterface.prototype.adoptSelection = function(oSourceRepresentation) { return null; };

/**
 * 
 * @public
 * ription This method uses the serialization information from serialized data and sets the selection to representation based on mode and selection string returned.
 * @param {object} oSerializationInformation
 */
sap.apf.ui.representations.representationInterface.prototype.deserialize = function(oSerializationInformation) { return null; };

/**
 * 
 * @public
 * ription Returns the alternate representation of current step (i.e. list representation for the charts)
 * @returns {object} oAlternateRepresentation
 */
sap.apf.ui.representations.representationInterface.prototype.getAlternateRepresentation = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns data for representation type
 * @returns {array} aDataResponse
 */
sap.apf.ui.representations.representationInterface.prototype.getData = function() { return null; };

/**
 * 
 * @public
 * ription This method has to be implemented so that binding can determine which method has to be used for the filter retrieval from a representations.
 * @returns {sap.apf.constants.filterMethodTypes} The filter method type the representation supports
 */
sap.apf.ui.representations.representationInterface.prototype.getFilterMethodType = function() { return new sap.apf.constants.filterMethodTypes(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be shown on main representation area.
 * @returns {object} oUiObject The UI object that has to be shown in main representation area. Example: Line chart instance for a line chart representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getMainContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns meta data for representation type
 * @returns {sap.apf.core.EntityTypeMetadata} metadata
 */
sap.apf.ui.representations.representationInterface.prototype.getMetaData = function() { return new sap.apf.core.EntityTypeMetadata(); };

/**
 * 
 * @public
 * ription The method returns the constructor arguments which will be used to create toggle representation.
 * @returns {object} oParameters
 */
sap.apf.ui.representations.representationInterface.prototype.getParameter = function() { return new Object(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be printed.
 * @returns {object} oUiObject The UI object that has to be printed. Example: Line chart instance for a line chart representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getPrintContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription Additionally to parameters being set in the request configuration and filter values that are derived from the path logic,
 * a request can be enriched with additional options such as <b>$top</b>, <b>$skip</b> and <b>$orderby</b>.<p>
 * Dependent on the actual options a representation may require for a request, an object containing the correspondent properties may be returned by this method.
 * <br>In case no additional options are required an empty object should be returned.<p>
 * </p><p>
 * The supported optional properties of the return object are:
 * <ul><li><b>paging</b>: An object containing optional properties<ul><li><b>top</b> for OData system query option $top <br>A numeric value is expected<li><b>skip</b> for query string option $skip<br> A numeric value is expected
 * <li><b>inlineCount</b> for OData system query option $inlineCount<br>A boolean value 'true' is expected if inline count is requested</ul>
 * <li><b>orderby</b> for OData system query option $orderby: Values could be of type<ul>
 *    <li><b>string</b> that holds a property name (in this case the default sort order 'ascending' is applied)
 *  <li><b>object</b> with properties:<ul>
 *    <li>'property' A string containing the property name is expected.
 *    <li>'descending' A boolean value 'true' is expected, if descending sort order is required for the property. If omitted default sort order 'ascending' is applied.
 *  </ul>
 *  <li><b>array</b> holding objects with properties 'property' and 'descending' as described above.</ul>
 * @returns {object}
 * Example:
 * <pre class="javascript">
 * { paging : {
 * 		top : 10,
 * 		skip : 30,
 * 		inlineCount : true
 *  },
 *  orderby : [ 
 * 		{ property : "nameProperty1",
 * 		}, {
 * 		property : "nameProperty2",
 * 		descending : true
 * 		}
 *  ]
 * }
 * </pre>
 * See also <a href="http://www.odata.org/documentation/odata-version-2-0/uri-conventions/">http://www.odata.org/documentation/odata-version-2-0/uri-conventions/</a>
 */
sap.apf.ui.representations.representationInterface.prototype.getRequestOptions = function() { return new Object(); };

/**
 * 
 * @public
 * ription This is the basic method with which the step can detect data selected in the chart.
 * @returns {number[]} An array with indices is returned.<br>E.g. if the first and the third line of the array aDataResponse have been selected,
 * then aIndices = [0, 2]. Counting of indices start from 0.
 * If all data has been selected, and aDataResponse.length == 4, then the array [0,1,2,3] is returned. In general [ 0 .. aDataResponse.length - 1]
 * If no data has been selected at all, then [] is returned.
 * In case of an empty selection, the value undefined has to be returned. An empty selection may occur, when selections in the previous step has been changed,
 * so that the visual selection on the chart is now empty (empty rectangle).
 */
sap.apf.ui.representations.representationInterface.prototype.getSelectionAsArray = function() { return new Array(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be shown on thumbnail area.
 * @returns {object} oUiObject The UI object that has to be shown in thumbnail area. Example: Line chart instance for a line chart representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getThumbnailContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be shown as tooltip for a thumbnail.
 * It will be shown inside a tooltip Popup when the thumbnail content overflows the thumbnail container area with a gradient effect to indicate that it is overflowing.
 * @returns {object} oUiObject The UI object that has to be shown as tooltip for a thumbnail. Example: Detailed content of a form representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getTooltipContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription This method holds the logic to remove all selection from the chart. It also updates the step.
 */
sap.apf.ui.representations.representationInterface.prototype.removeAllSelection = function() { return null; };

/**
 * 
 * @public
 * ription This method returns the selection for serialization. This is required for the Persisting selection of current representation.
 * It includes selection mode and selections.
 * @returns {object} oSerializationInformation
 */
sap.apf.ui.representations.representationInterface.prototype.serialize = function() { return new Object(); };

/**
 * 
 * @public
 * ription The binding sets the data (received from the request) that has to be visualized. The array aDataResponse is shared between all representations
 * of a step and the binding. When lines are moved, deleted or changed, you modify the visualization of the original data! When displaying the data, one can determine which record
 * is selected by aSelectedIndices.
 * @param {sap.apf.core.Metadata} oMetadata oMetadata holds meta information about the received data.
 * @param {array} aDataResponse Data response from the request.
 */
sap.apf.ui.representations.representationInterface.prototype.setData = function(oMetadata,aDataResponse) { return null; };

/**
 * 
 * @public
 * ription Called during path update for treetable representation. As treetable has its own data model, the request handling is done on representation side. 
 * @param {object} controlObject Contains filters and parameters for treetable request handling
 * @param {sap.ui.model.odata.v2} oModel OData model for the service of treetable
 * @param {function} callbackAfterRequest Function to be called after request processing
 * @param {sap.apf.core.EntityTypeMetadata} entityTypeMetadata Convenience functions for metadata handling
 */
sap.apf.ui.representations.representationInterface.prototype.updateTreetable = function(controlObject,oModel,callbackAfterRequest,entityTypeMetadata) { return null; };


// ---- sap.apf.ui.representations.RepresentationInterfaceProxy --------------------------------------------------------------------------

/**
 * 
 * @public
 * @experimental The complete interface is subject to ongoing work and not yet stable (as of Version 1.24.0).
 * @class The interface proxy passed to a representation which provides access to required APF methods. This constructor is used by apf.api.
 * It can be also used to build unit tests that need an interface proxy between APF and representations.
 * @param {sap.apf.core.Instance} oCoreApi
 * @param {sap.apf.ui.Instance} oUiApi
 */
sap.apf.ui.representations.RepresentationInterfaceProxy = function(oCoreApi,oUiApi) {};
/**
 * 
 * @public
 * ription see {@link sap.apf.Api#createFilter}
 */
sap.apf.ui.representations.RepresentationInterfaceProxy.prototype.createFilter = function() { return null; };

/**
 * 
 * @public
 * ription see {@link sap.apf.Api#createMessageObject}
 */
sap.apf.ui.representations.RepresentationInterfaceProxy.prototype.createMessageObject = function() { return null; };

/**
 * 
 * @public
 * ription get exits registered on oInject
 */
sap.apf.ui.representations.RepresentationInterfaceProxy.prototype.getExits = function() { return null; };

/**
 * 
 * @public
 * ription see {@link sap.apf.Api#getTextNotHtmlEncoded}
 */
sap.apf.ui.representations.RepresentationInterfaceProxy.prototype.getTextNotHtmlEncoded = function() { return null; };

/**
 * 
 * @public
 * ription returns the oUiAPi
 */
sap.apf.ui.representations.RepresentationInterfaceProxy.prototype.getUiApi = function() { return null; };

/**
 * 
 * @public
 * ription see {@link sap.apf.Api#putMessage}
 */
sap.apf.ui.representations.RepresentationInterfaceProxy.prototype.putMessage = function() { return null; };


// ---- sap.apf.ui.reuse --------------------------------------------------------------------------


// ---- sap.apf.ui.reuse.controller --------------------------------------------------------------------------


// ---- sap.apf.ui.reuse.fragment --------------------------------------------------------------------------


// ---- sap.apf.ui.reuse.view --------------------------------------------------------------------------


// ---- sap.apf.ui.utils --------------------------------------------------------------------------


// ---- sap.apf.utils --------------------------------------------------------------------------


// ---- sap.apf.utils.Filter --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Filter object
 * ription It is designed to be used for supplying context information for
 *              the application. In addition, it can be used for exchanging
 *              filter values between the path and the facet filters. This function object supports the top down
 *              construction of filter expressions.
 * @param {sap.apf.core.MessageHandler} oMessageHandler
 * @returns {sap.apf.utils.Filter}
 */
sap.apf.utils.Filter = function(oMessageHandler) {};
/**
 * 
 * @public
 * ription Creates a filter from json format, that comes from selection variant. Apf creates this filter format with
 * method sap.apf.core.utils.Filter#mapToSapUI5FilterExpression. See there for description of the format.
 * @returns {sap.apf.utils.Filter} 
 */
sap.apf.utils.Filter.prototype.createFilterFromSapUi5FilterJSON = function() { return new sap.apf.utils.Filter(); };

/**
 * 
 * @public
 * ription Returns filter object or expression for a given ID, if exists.
 * @param {string} sId - ID of the object to be returned.
 * @returns {(sap.apf.utils.FilterAnd|sap.apf.utils.FilterOr|sap.apf.utils.FilterExpression|undefined)}
 */
sap.apf.utils.Filter.prototype.getById = function(sId) { return new (sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Returns the logical operations and the boolean expressions of a Filter
 *              object as nested arrays for the logical operations and single level objects
 *              for the boolean expressions.
 *              Depending on the nesting level of the arrays the logical operators
 *              for the terms in the arrays alternates between AND and OR.
 *              The array on the highest level has the logical operator AND.
 *              It corresponds to the TopAnd filter term.
 *              Terms in general can be composed of the logical operation AND (see the FilterAnd object)
 *              or OR (see the FilterOr object) or be a boolean expression (see the FilterExpression object).
 *              AND and OR terms are returned as arrays; boolean expressions are returned as objects.
 * @returns {object[]} Array of AND terms, OR terms and expressions.
 */
sap.apf.utils.Filter.prototype.getExpressions = function() { return new Array(); };

/**
 * 
 * @public
 * ription Convenience function to get the OData operators which are
 *              defined in {sap.apf.core.constants.FilterOperators}.
 * @returns {sap.apf.core.constants.FilterOperators} 
 */
sap.apf.utils.Filter.prototype.getOperators = function() { return new sap.apf.core.constants.FilterOperators(); };

/**
 * 
 * @public
 * ription Returns the top 'AND' object of the filter.
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.Filter.prototype.getTopAnd = function() { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Build the intersection of the this filter object with the supplied filter(s). The method does not change the "this"-instance.
 * @param args {(...sap.apf.utils.Filter|sap.apf.utils.Filter[])} Single filter object {@link sap.apf.utils.Filter}, a comma separated parameter list of filter objects, or an array of filter objects
 * @returns {sap.apf.utils.Filter} new filter object {@link sap.apf.utils.Filter} for the intersected filters
 */
sap.apf.utils.Filter.prototype.intersectWith = function(args) { return new sap.apf.utils.Filter(); };

/**
 * 
 * @public
 * ription Updates an expression.
 * @param {string} sId ID of expression to be updated
 * @param {object} oExpression Expression object containing the updated properties
 * @param {string} oExpression.id Updated expression ID
 * @param {string} oExpression.name Updated expression name
 * @param {string} oExpression.operator Updated expression operator of type  {sap.apf.core.constants.FilterOperators}
 * @param {string|number} oExpression.value Updated expression low value
 * @param {string|number }oExpression.high Updated expression high value
 * @returns undefined
 */
sap.apf.utils.Filter.prototype.updateExpression = function(sId,oExpression) { return null; };

/**
 * 
 * @public
 * ription Updates a value of an expression object.
 * @param {string} sId ID of the expression object to be updated
 * @param {string} value The new low value for the expression (optional)
 * @param {string} high The new high value for the expression (optional)
 * @returns undefined
 */
sap.apf.utils.Filter.prototype.updateValue = function(sId,value,high) { return null; };


// ---- sap.apf.utils.FilterAnd --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class FilterAnd
 * @param {sap.apf.core.MessageHandler} oMessageHandler
 * @param {string} sId Identifier for the object
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.FilterAnd = function(oMessageHandler,sId) {};
/**
 * 
 * @public
 * ription Adds an expression object to this filter.
 * @param {object} oExpression Expression object
 * @param oExpression.id Expression ID
 * @param oExpression.name Expression name
 * @param oExpression.operator Expression operator of type  {sap.apf.core.constants.FilterOperators}
 * @param oExpression.value Expression value
 * @returns {sap.apf.utils.FilterAnd} this to allow method chaining
 */
sap.apf.utils.FilterAnd.prototype.addExpression = function(oExpression) { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Adds an object of type {sap.apf.utils.FilterOr}.
 * @param {string} sId Identifier for the object to be added.
 * @returns {sap.apf.utils.FilterOr}
 */
sap.apf.utils.FilterAnd.prototype.addOr = function(sId) { return new sap.apf.utils.FilterOr(); };

/**
 * 
 * @public
 * ription Returns ID of this filter object.
 * @returns {string}
 */
sap.apf.utils.FilterAnd.prototype.getId = function() { return ""; };


// ---- sap.apf.utils.FilterExpression --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Filter expression
 * @param {sap.apf.core.MessageHandler} oMessageHandler
 * @param {object} oExpression Expression object
 * @param oExpression.id Expression ID
 * @param oExpression.name Expression name
 * @param oExpression.operator Expression operator of type  {sap.apf.core.constants.FilterOperators}
 * @param oExpression.value Expression value
 * @param oExpression.high Expression high value
 * @returns {sap.apf.utils.FilterExpression}
 */
sap.apf.utils.FilterExpression = function(oMessageHandler,oExpression) {};

// ---- sap.apf.utils.FilterOr --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class FilterOr
 * @param {sap.apf.core.MessageHandler} oMessageHandler
 * @param {string} sId Identifier for the object
 * @param {sap.apf.utils.FilterAnd} oAnd Parent object
 * @returns {sap.apf.utils.FilterOr}
 */
sap.apf.utils.FilterOr = function(oMessageHandler,sId,oAnd) {};
/**
 * 
 * @public
 * ription Adds an object of type {@link sap.apf.utils.FilterAnd}.
 * @param {string} sId Identifier for the object to be added.
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.FilterOr.prototype.addAnd = function(sId) { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Adds an expression object to this filter.
 * @param {object} oExpression Expression object
 * @param oExpression.id Expression ID
 * @param oExpression.name Expression name
 * @param oExpression.operator Expression operator of type  {sap.apf.core.constants.FilterOperators}
 * @param oExpression.value Expression value
 * @returns {sap.apf.utils.FilterOr} this to allow method chaining
 */
sap.apf.utils.FilterOr.prototype.addExpression = function(oExpression) { return new sap.apf.utils.FilterOr(); };

/**
 * 
 * @public
 * ription Retrieves an ID of the term.
 * @returns {string} ID of the term.
 */
sap.apf.utils.FilterOr.prototype.getId = function() { return ""; };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.apf --------------------------------------------------------------------------

/**
 * 
 * @public
 * @deprecated since Version 1.23.1. Use sap.apf.core.constants instead.
 * ription Constants to be used by APF consumers.
 * @type {Object}
 * @memberOf sap.apf
 */
sap.apf.constants = null;

