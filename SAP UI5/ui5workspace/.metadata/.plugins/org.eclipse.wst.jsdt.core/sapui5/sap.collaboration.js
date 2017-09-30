
// ---- sap.collaboration --------------------------------------------------------------------------


// ---- sap.collaboration.AppType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.AppType.toString = function() { return ""; };

// ---- sap.collaboration.components.feed.Component --------------------------------------------------------------------------

/**
 * Constructor for the Feed Component.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers.
 * 
 * The supported settings are:
 * <ul>
 * 	<li>Properties
 * 		<ul>
 * 			<li>{@link #getAxisOrientation axisOrientation} : sap.suite.ui.commons.TimelineAxisOrientation (default: sap.suite.ui.commons.TimelineAxisOrientation.Vertical) </li>
 * 			<li>{@link #getFeedSources feedSources} : map|string[]</li>
 * 			<li>{@link #getEnableScroll enableScroll} : boolean (default: true)</li>
 * 		</ul>
 * 	</li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new component, generated automatically if no id is given 
 * @param {map} [mSettings] initial settings for the new component. See the documentation of the component's properties for the structure of the expected data.
 * 
 * @class 
 * The Feed Component is an SAPUI5 component that allows you to display SAP Jam feeds. 
 * It includes the option to add new posts and reply to entries and view other users' social profiles from SAP Jam.
 * @extends sap.ui.core.UIComponent
 * @version ${version}
 * @since 1.30
 * 
 * @constructor
 * @public
 * 
 * 
 */
sap.collaboration.components.feed.Component = function(sId,mSettings) {};
/**
 * The method to create the Content (UI Control Tree) of the Component. 
 * @protected
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.createContent = function() {  };

/**
 * Cleans up the component instance before destruction.
 * @protected
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.exit = function() {  };

/**
 * Getter for property <code>axisOrientation</code>.
 * 
 * Default value is <code>Vertical</code>
 * 
 * @return {sap.suite.ui.commons.TimelineAxisOrientation} the value of property <code>axisOrientation</code>
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.prototype.getAxisOrientation = function() { return new sap.suite.ui.commons.TimelineAxisOrientation(); };

/**
 * Getter for property <code>enableScroll</code>.
 * 
 * @return {boolean} the value of property <code>enableScroll</code>
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.prototype.getEnableScroll = function() { return false; };

/**
 * Getter for property <code>feedSources</code>.
 * 
 * @return {map|string[]} the value of property <code>feedSources</code>
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.prototype.getFeedSources = function() { return null; };

/**
 * Returns the selected Group.
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * @return {map} a map containing information about the selected Group (e.g. Id, Name, etc...)
 * 
 */
sap.collaboration.components.feed.Component.getSelectedGroup = function() { return null; };

/**
 * Initializes the Component instance after creation. 
 * @protected
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.init = function() {  };

/**
 * Function is called when the rendering of the Component Container is completed. 
 * @protected
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.onAfterRendering = function() {  };

/**
 * Function is called when the rendering of the Component Container is started.
 * @protected
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.onBeforeRendering = function() {  };

/**
 * Setter for property <code>axisOrientation</code>.
 * 
 * Default value is <code>Vertical</code> 
 * 
 * @param {sap.suite.ui.commons.TimelineAxisOrientation} oAxisOrientation  new value for property <code>axisOrientation</code>
 * @return {sap.collaboration.components.feed.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.prototype.setAxisOrientation = function(oAxisOrientation) { return new sap.collaboration.components.feed.Component(); };

/**
 * Set the axis orientation for the Timeline.
 * @override
 * @public
 * @param {sap.suite.ui.commons.TimelineAxisOrientation} axisOrientation
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.setAxisOrientation = function(axisOrientation) {  };

/**
 * Setter for property <code>enableScroll</code>.
 * 
 * Sets the property enableScroll on the Timeline.
 * 
 * Setting this property to false will remove the scrollbar on the Timeline.<br>
 * 
 * Default value is <code>true</code>
 * 
 * @param {boolean} bEnableScroll new value for property <code>enableScroll</code>
 * @return {sap.collaboration.components.feed.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.prototype.setEnableScroll = function(bEnableScroll) { return new sap.collaboration.components.feed.Component(); };

/**
 * Sets the enableScroll property for the Timeline.
 * @override
 * @public
 * @param {boolean} enableScroll
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.setEnableScroll = function(enableScroll) {  };

/**
 * Setter for property <code>feedSources</code>.
 * 
 * The feedSources is either an array of strings (SAP Jam Group IDs) or a map in the following structure:<br>
 * { mode : sap.collaboration.FeedType, data : any }<br>
 * Based on the mode, the data is either required or not.
 * 
 * @param {map|string[]} oFeedSources  new value for property <code>feedSources</code>
 * @public
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.prototype.setFeedSources = function(oFeedSources) {  };

/**
 * Sets the sources for the feed.
 * Array of strings representing the Jam group IDs (e.g. ["groupid1", "groupid2"]).
 * @override 
 * @public
 * @param {object} feedSources
 * @memberOf sap.collaboration.components.feed.Component
 * 
 */
sap.collaboration.components.feed.Component.setFeedSources = function(feedSources) {  };

/**
 * Sets all the properties passed in oSettings.
 * @public
 * @param {map} settings - key/value map for settings
 * @memberOf sap.collaboration.components.feed.Component 
 * 
 */
sap.collaboration.components.feed.Component.setSettings = function(settings) {  };


// ---- sap.collaboration.components.fiori.feed.Component --------------------------------------------------------------------------

/**
 * Constructor for the Feed Component.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getODataServiceUrl oDataServiceUrl} : sap.ui.core.URI (default: /sap/opu/odata/sap/SM_INTEGRATION_SRV)</li>
 * <li>{@link #getFeedType feedType} : string</li>
 * <li>{@link #getGroupIds groupIds} : string</li>
 * <li>{@link #getObject object} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the Feed Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
 * @param {sap.collaboration.FeedType} feedType The type of feed to be displayed.
 * @param {string} [groupIds] A comma separated list of group IDs.
 * @param {object} [object] A JSON object passed to the Feed component. 
 * It is required when the value of <tt>feedType</tt> is <tt>sap.collaboration.FeedType.object</tt> or <tt>sap.collaboration.FeedType.objectGroup</tt>.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * 		<ul>
 * 			<li><strong><tt>id</tt></strong>: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData URL containing the relative path to the object in the back-end.</li>
 * 			<li><strong><tt>type</tt></strong>: The type of the Business Object. It needs to be the OData meta data URL to the corresponding Entity Collection.</li>
 * 			<li><strong><tt>name?</tt></strong> (optional): The description of the Business Object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
 * 			<li><strong><tt>ui_url?</tt></strong> (optional): The URL to navigate to the same Business Object in the application.</li>
 * 		</ul>
 * 
 * @class Feed Component<br>
 * 
 * A Feed Component is a ui5 component that applications can use to render a <tt>sap.m.App</tt> that embeds the JAM Feed Widget.<br>
 * The Component class extends the base UI5 UIComponent class.<br>
 * This class defines the Reusable UI5 Component structure, i.e properties, aggregations and events, if any, and creates the UI5 controls to be displayed.
 * @public
 * @deprecated Since version 1.26.0.
 * Please use sap.collaboration.components.fiori.feed.dialog.Component instead.
 * 
 */
sap.collaboration.components.fiori.feed.Component = function(oDataServiceUrl,feedType,groupIds,object) {};
/**
 * Creates a new subclass of class sap.collaboration.components.fiori.feed.Component with name <code>sClassName</code>
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
sap.collaboration.components.fiori.feed.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getFeedType feedType}.
 * 
 * @returns {string} Value of property <code>feedType</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.getFeedType = function() { return ""; };

/**
 * Gets current value of property {@link #getGroupIds groupIds}.
 * 
 * @returns {string} Value of property <code>groupIds</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.getGroupIds = function() { return ""; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.collaboration.components.fiori.feed.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.feed.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getObject object}.
 * 
 * @returns {object} Value of property <code>object</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.getObject = function() { return new Object(); };

/**
 * Gets current value of property {@link #getODataServiceUrl oDataServiceUrl}.
 * 
 * Default value is <code>/sap/opu/odata/sap/SM_INTEGRATION_SRV</code>.
 * @returns {sap.ui.core.URI} Value of property <code>oDataServiceUrl</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.getODataServiceUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getFeedType feedType}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFeedType New value for property <code>feedType</code>
 * @returns {sap.collaboration.components.fiori.feed.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.setFeedType = function(sFeedType) { return new sap.collaboration.components.fiori.feed.Component(); };

/**
 * Sets a new value for property {@link #getGroupIds groupIds}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sGroupIds New value for property <code>groupIds</code>
 * @returns {sap.collaboration.components.fiori.feed.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.setGroupIds = function(sGroupIds) { return new sap.collaboration.components.fiori.feed.Component(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.collaboration.components.fiori.feed.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.setHeight = function(sHeight) { return new sap.collaboration.components.fiori.feed.Component(); };

/**
 * Sets a new value for property {@link #getObject object}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oObject New value for property <code>object</code>
 * @returns {sap.collaboration.components.fiori.feed.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.setObject = function(oObject) { return new sap.collaboration.components.fiori.feed.Component(); };

/**
 * Sets a new value for property {@link #getODataServiceUrl oDataServiceUrl}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>/sap/opu/odata/sap/SM_INTEGRATION_SRV</code>.
 * @param {sap.ui.core.URI} sODataServiceUrl New value for property <code>oDataServiceUrl</code>
 * @returns {sap.collaboration.components.fiori.feed.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.setODataServiceUrl = function(sODataServiceUrl) { return new sap.collaboration.components.fiori.feed.Component(); };

/**
 * Contract for passing the settings to the Component.
 * @public
 * @param {object} oSettings A JSON object containing the following attributes:
 * 		<ul>
 * 			<li><tt>{sap.ui.core.URI} oDataServiceUrl</tt>: The URL of the OData Service needed for the Feed Component.</li>
 * 			<li><tt>{sap.collaboration.FeedType} feedType</tt>: The type of feed to be displayed.</li>
 * 			<li><tt>{string} [groupIds?]</tt>: A comma separated list of Group IDs.</li>
 * 			<li><tt>{object} object</tt>: The representation of a Business Object.</li>
 * 		</ul>
 * 
 */
sap.collaboration.components.fiori.feed.Component.setSettings = function(oSettings) {  };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.collaboration.components.fiori.feed.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.Component.prototype.setWidth = function(sWidth) { return new sap.collaboration.components.fiori.feed.Component(); };


// ---- sap.collaboration.components.fiori.feed.dialog.Component --------------------------------------------------------------------------

/**
 * Constructor for the Feed Dialog Component.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 575px)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 605px)</li>
 * <li>{@link #getFeedType feedType} : string (default: sap.collaboration.FeedType.object)</li>
 * <li>{@link #getGroupIds groupIds} : string</li>
 * <li>{@link #getObject object} : object</li>
 * <li>{@link #getBusinessObject businessObject} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.UIComponent#constructor sap.ui.core.UIComponent}
 * can be used as well.
 * 
 * @since version 1.16
 * @constructor
 * @param {object} businessObject A JSON object passed to the Feed Dialog Component.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * <ul>
 * 	<li><tt>{string} appContext</tt>: The application context.  Example: "CRM", "CB", "SD", etc.</li>
 * 	<li><tt>{string} odataServicePath</tt>: The path to the OData Service and the Service name.  Example: "/sap/opu/odata/sap/APPLICATION_SRV".</li>
 * 	<li><tt>{string} collection</tt>: The name of the OData Collection. Example: "Account", "Opportunity", etc.</li>
 * 	<li><tt>{string} key</tt>: The key to identify a particular instance of the Business Object. It can be a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.</li>
 * 	<li><tt>{string} name</tt>: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123", "Account 123", etc.</li>
 * 	<li><tt>{string} ui_url</tt>: The URL to navigate to the same business object in the application.</li>
 * </ul>
 * @param {sap.ui.core.URI} [oDataServiceUrl] <b>[DEPRECATED]</b> The OData service URL needed for the Feed Dialog Component, the default value is <tt>"/sap/opu/odata/sap/SM_INTEGRATION_SRV".</tt>
 * @param {sap.collaboration.FeedType} [feedType] <b>[DEPRECATED]</b> The type of feed to be displayed.
 * @param {string} [groupIds] <b>[DEPRECATED]</b> A comma separated list of group IDs.
 * @param {object} [object] <b>[DEPRECATED]</b> A JSON object passed to the Feed Dialog Component. Use <b><tt>businessObject</tt></b> instead.
 * This object represents business related information, such as a sales order, an opportunity, etc. It contains the following properties:
 * 		<ul>
 * 			<li><tt>id</tt>: The Business Object ID to be posted in the SAP Jam Feed. It needs to be an OData URL containing the relative path to the object in the back-end.</li>
 * 			<li><tt>type</tt>: the type of the business object. It can be any text or it can be the OData meta data URL to the object Entity Type.</li>
 * 			<li><tt>name</tt> (optional): the description of the business object to be displayed in SAP Jam, i.e. "SO 57746", "Opportunity 123", etc.</li>
 * 			<li><tt>ui_url</tt> (optional): the URL to navigate to the same business object in the application.</li>
 * 		</ul>
 * Note: The object is passed by reference, which means that the attributes will be modified in the original object, for example, when the URLs contained in the id and type attributes are mapped (via OData call).
 * 
 * @class Feed Dialog Component
 * 
 * A Feed Dialog Component is a ui5 component that applications can use to render the feed widget view in a dialog 
 * in order to discuss information in SAP JAM by adding and replying to feed posts related to a specific Business Object.
 * 
 * @deprecated Since version 1.34.0. For new integrations and existing implementations running on release 1.32 or later, use the Group Feed component (sap.collaboration.components.feed.Component), Business Object mode(sap.collaboration.FeedType.BusinessObjectGroups). Note that the Group Feed component does not display the full public feed for the object in SAP Jam (object wall), but rather is restricted to the feed for the object within a specific group (group object wall).
 * @extends sap.ui.core.UIComponent
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component = function(businessObject,oDataServiceUrl,feedType,groupIds,object) {};
/**
 * Creates a new subclass of class sap.collaboration.components.fiori.feed.dialog.Component with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.UIComponent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBusinessObject businessObject}.
 * 
 * @returns {object} Value of property <code>businessObject</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.getBusinessObject = function() { return new Object(); };

/**
 * Gets current value of property {@link #getFeedType feedType}.
 * 
 * Default value is <code>sap.collaboration.FeedType.object</code>.
 * @returns {string} Value of property <code>feedType</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.getFeedType = function() { return ""; };

/**
 * Gets current value of property {@link #getGroupIds groupIds}.
 * 
 * @returns {string} Value of property <code>groupIds</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.getGroupIds = function() { return ""; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Default value is <code>605px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.collaboration.components.fiori.feed.dialog.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getObject object}.
 * 
 * @returns {object} Value of property <code>object</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.getObject = function() { return new Object(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Default value is <code>575px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Open the Feed Dialog.
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.open = function() {  };

/**
 * Sets a new value for property {@link #getBusinessObject businessObject}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oBusinessObject New value for property <code>businessObject</code>
 * @returns {sap.collaboration.components.fiori.feed.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setBusinessObject = function(oBusinessObject) { return new sap.collaboration.components.fiori.feed.dialog.Component(); };

/**
 * Sets a new value for property {@link #getFeedType feedType}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.collaboration.FeedType.object</code>.
 * @param {string} sFeedType New value for property <code>feedType</code>
 * @returns {sap.collaboration.components.fiori.feed.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setFeedType = function(sFeedType) { return new sap.collaboration.components.fiori.feed.dialog.Component(); };

/**
 * Sets a new value for property {@link #getGroupIds groupIds}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sGroupIds New value for property <code>groupIds</code>
 * @returns {sap.collaboration.components.fiori.feed.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setGroupIds = function(sGroupIds) { return new sap.collaboration.components.fiori.feed.dialog.Component(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>605px</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.collaboration.components.fiori.feed.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setHeight = function(sHeight) { return new sap.collaboration.components.fiori.feed.dialog.Component(); };

/**
 * Sets a new value for property {@link #getObject object}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oObject New value for property <code>object</code>
 * @returns {sap.collaboration.components.fiori.feed.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setObject = function(oObject) { return new sap.collaboration.components.fiori.feed.dialog.Component(); };

/**
 * Contract for passing the settings to the Component.
 * @public
 * @param {object} oSettings A JSON object containing the following attributes:
 * 		<ul>
 * 			<li><tt>{object} businessObject</tt>: the representation of a business object.</li>
 * 			<li><tt>{sap.collaboration.FeedType} <b>[DEPRECATED]</b> feedType</tt>: the type of feed to be displayed.</li>
 * 			<li><tt>{string} <b>[DEPRECATED]</b> [groupIds?]</tt>: a comma separated list of group IDs.</li>
 * 			<li><tt>{object} <b>[DEPRECATED]</b> object</tt>: the representation of a business object. Use <tt>businessObject</tt> instead</li>
 * 		</ul>
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.setSettings = function(oSettings) {  };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>575px</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.collaboration.components.fiori.feed.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.feed.dialog.Component.prototype.setWidth = function(sWidth) { return new sap.collaboration.components.fiori.feed.dialog.Component(); };


// ---- sap.collaboration.components.fiori.notification.Component --------------------------------------------------------------------------

/**
 * Constructor for the notification component
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
 * <li>{@link #getODataServiceUrl oDataServiceUrl} : sap.ui.core.URI (default: /sap/opu/odata/sap/SM_INTEGRATION_SRV)</li>
 * <li>{@link #getNumberOfNotifications numberOfNotifications} : int (default: 10)</li>
 * <li>{@link #getTransitionInterval transitionInterval} : int (default: 10)</li>
 * <li>{@link #getRefreshInterval refreshInterval} : int (default: 300)</li>
 * <li>{@link #getNotificationsTargetUrl notificationsTargetUrl} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @since version 1.18
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the notification component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
 * @param {sap.ui.core.int} [numberOfNotifications] This is the maximum number of notifications to be displayed. The default value is 10.
 * @param {sap.ui.core.int} [transitionInterval] This is the amount of time in seconds a notification is displayed before the next notification is displayed. The default value is 10.
 * @param {sap.ui.core.int} [refreshInterval] This is the amount of time in seconds before calling the backend to update the notifications. The default value is 300.
 * @param {sap.ui.core.URI} notificationsTargetUrl When a user clicks on the component, a new browser tab will open at this URL.
 * 
 * @class Notification Component
 * 
 * A Notification Component is a ui5 component that displays a SAP Jam member's latest notifications.
 * 
 * This component refreshes itself when the number of seconds specified in the <tt>refreshInterval</tt> parameter elapses.
 * When refreshing, the backend is called to obtain the latest notifications.
 * @public
 * @deprecated Since version 1.26.0.
 * There is no replacement for this control. The Fiori Launchpad now provides its own implementation
 * for this control. This control was never meant to be used directly by third parties.  
 * 
 */
sap.collaboration.components.fiori.notification.Component = function(oDataServiceUrl,numberOfNotifications,transitionInterval,refreshInterval,notificationsTargetUrl) {};
/**
 * Creates a new subclass of class sap.collaboration.components.fiori.notification.Component with name <code>sClassName</code>
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
sap.collaboration.components.fiori.notification.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.collaboration.components.fiori.notification.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.notification.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNotificationsTargetUrl notificationsTargetUrl}.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>notificationsTargetUrl</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.getNotificationsTargetUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getNumberOfNotifications numberOfNotifications}.
 * 
 * Default value is <code>10</code>.
 * @returns {int} Value of property <code>numberOfNotifications</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.getNumberOfNotifications = function() { return 0; };

/**
 * Gets current value of property {@link #getODataServiceUrl oDataServiceUrl}.
 * 
 * Default value is <code>/sap/opu/odata/sap/SM_INTEGRATION_SRV</code>.
 * @returns {sap.ui.core.URI} Value of property <code>oDataServiceUrl</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.getODataServiceUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getRefreshInterval refreshInterval}.
 * 
 * Default value is <code>300</code>.
 * @returns {int} Value of property <code>refreshInterval</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.getRefreshInterval = function() { return 0; };

/**
 * Gets current value of property {@link #getTransitionInterval transitionInterval}.
 * 
 * Default value is <code>10</code>.
 * @returns {int} Value of property <code>transitionInterval</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.getTransitionInterval = function() { return 0; };

/**
 * Sets a new value for property {@link #getNotificationsTargetUrl notificationsTargetUrl}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sNotificationsTargetUrl New value for property <code>notificationsTargetUrl</code>
 * @returns {sap.collaboration.components.fiori.notification.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.setNotificationsTargetUrl = function(sNotificationsTargetUrl) { return new sap.collaboration.components.fiori.notification.Component(); };

/**
 * Sets a new value for property {@link #getNumberOfNotifications numberOfNotifications}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iNumberOfNotifications New value for property <code>numberOfNotifications</code>
 * @returns {sap.collaboration.components.fiori.notification.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.setNumberOfNotifications = function(iNumberOfNotifications) { return new sap.collaboration.components.fiori.notification.Component(); };

/**
 * Sets a new value for property {@link #getODataServiceUrl oDataServiceUrl}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>/sap/opu/odata/sap/SM_INTEGRATION_SRV</code>.
 * @param {sap.ui.core.URI} sODataServiceUrl New value for property <code>oDataServiceUrl</code>
 * @returns {sap.collaboration.components.fiori.notification.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.setODataServiceUrl = function(sODataServiceUrl) { return new sap.collaboration.components.fiori.notification.Component(); };

/**
 * Sets a new value for property {@link #getRefreshInterval refreshInterval}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>300</code>.
 * @param {int} iRefreshInterval New value for property <code>refreshInterval</code>
 * @returns {sap.collaboration.components.fiori.notification.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.setRefreshInterval = function(iRefreshInterval) { return new sap.collaboration.components.fiori.notification.Component(); };

/**
 * Sets a new value for property {@link #getTransitionInterval transitionInterval}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iTransitionInterval New value for property <code>transitionInterval</code>
 * @returns {sap.collaboration.components.fiori.notification.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.notification.Component.prototype.setTransitionInterval = function(iTransitionInterval) { return new sap.collaboration.components.fiori.notification.Component(); };


// ---- sap.collaboration.components.fiori.sharing.attachment.Attachment --------------------------------------------------------------------------

/**
 * <p>This constructor must be called in the following way:</p> 
 * <p>new Attachment("name", "mimeType", "url")</p>
 * <p>name, mimeType, and url are only place holders and can be any string.</p>
 * 
 * @since version 1.20
 * @constructor
 * @param {string} name: The file's name.
 * @param {string} mimeType: The file's mime type.
 * @param {string} url: A url that points to the file.
 * 
 * @class Attachment
 * 
 * Attachment objects represent files.
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.attachment.Attachment = function(name:,mimeType:,url:) {};
/**
 * Creates a new subclass of class sap.collaboration.components.fiori.sharing.attachment.Attachment with name <code>sClassName</code>
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
sap.collaboration.components.fiori.sharing.attachment.Attachment.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.collaboration.components.fiori.sharing.attachment.Attachment.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.sharing.attachment.Attachment.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.collaboration.components.fiori.sharing.Component --------------------------------------------------------------------------

/**
 * Constructor for the share component
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getODataServiceUrl oDataServiceUrl} : sap.ui.core.URI (default: /sap/opu/odata/sap/SM_INTEGRATION_V2_SRV)</li>
 * <li>{@link #getCollaborationHostODataServiceUrl collaborationHostODataServiceUrl} : sap.ui.core.URI (default: /sap/bc/ui2/smi/rest_tunnel/Jam/api/v1/OData)</li>
 * <li>{@link #getTunnelServiceUrl tunnelServiceUrl} : sap.ui.core.URI (default: /sap/bc/z_sail_httproxy/Jam/api/v1/OData)</li>
 * <li>{@link #getObject object} : object</li>
 * <li>{@link #getAttachments attachments} : object</li>
 * <li>{@link #getExternalObject externalObject} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] The OData service URL needed for the share component, the default value is "/sap/opu/odata/sap/SM_INTEGRATION_SRV"
 * @param {object} [object] A JSON object passed to the share component. This object contains the following properties:
 * 		<ul>
 *  			<li>id (optional): is the object Id to be shared in SAP Jam, i.e a URL that navigates back to the same object in the application</li>
 *  			<li>display (optional): is a UI5 control to be displayed in the component UI</li>
 * 			<li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
 * 		</ul>
 * @param {object} [externalObject]  A Business Object such as an Opportunity, Sales Order, Account, etc. from the back-end that will be shared as a Featured External Object in a Group in Jam.
 * <code>
 * <ul>
 * 	<li>{string} appContext: The application context. Example: "CRM", "SD", etc.</li>
 * 	<li>{string} odataServicePath: The relative path to the OData Service.  Example: "/sap/opu/odata/sap/ODATA_SRV"</li>
 * 	<li>{string} collection: The name of the OData Collection. Example: "Account", "Opportunity", etc.</li>
 * 	<li>{string} key: The key to identify a particular instance of the Business Object. It can be a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.</li>
 * 	<li>{string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123", "Account 123", etc.</li>
 * </ul>
 * </code>
 * These attributes are not enforced by the UI (missing or incorrect values are not validated), but they are required to make the integration work.
 * These attributes also should be mapped in the Back-end System and Jam in order to make the External Object work.
 * <br><b>Note:</b> the externalObject is dependent on object.id, therefore, the object.id must also be passed to the Share Component. See the parameter "object" for more information.
 * @param {object} [attachments] When you want to provide the user with the option to share file attachments, then the following properties need to be specified:
 * <ul>
 *   <li>attachmentsArray: An array of {@link sap.collaboration.components.fiori.sharing.attachment.Attachment} objects. This array offers users a list of files they can attach.</li>
 * </ul>
 * 
 * @class Share Component
 * 
 * A Share Component is a ui5 component that applications 
 * can use to share information to SAP Jam
 * @public
 * @deprecated Since version 1.26.0.
 * Please use sap.collaboration.components.fiori.sharing.dialog.Component instead.
 * 
 */
sap.collaboration.components.fiori.sharing.Component = function(oDataServiceUrl,object,externalObject,attachments) {};
/**
 * Creates a new subclass of class sap.collaboration.components.fiori.sharing.Component with name <code>sClassName</code>
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
sap.collaboration.components.fiori.sharing.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAttachments attachments}.
 * 
 * @returns {object} Value of property <code>attachments</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getAttachments = function() { return new Object(); };

/**
 * Gets current value of property {@link #getCollaborationHostODataServiceUrl collaborationHostODataServiceUrl}.
 * 
 * Default value is <code>/sap/bc/ui2/smi/rest_tunnel/Jam/api/v1/OData</code>.
 * @returns {sap.ui.core.URI} Value of property <code>collaborationHostODataServiceUrl</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getCollaborationHostODataServiceUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getExternalObject externalObject}.
 * 
 * @returns {object} Value of property <code>externalObject</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getExternalObject = function() { return new Object(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.collaboration.components.fiori.sharing.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.sharing.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getObject object}.
 * 
 * @returns {object} Value of property <code>object</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getObject = function() { return new Object(); };

/**
 * Gets current value of property {@link #getODataServiceUrl oDataServiceUrl}.
 * 
 * Default value is <code>/sap/opu/odata/sap/SM_INTEGRATION_V2_SRV</code>.
 * @returns {sap.ui.core.URI} Value of property <code>oDataServiceUrl</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getODataServiceUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getTunnelServiceUrl tunnelServiceUrl}.
 * 
 * Default value is <code>/sap/bc/z_sail_httproxy/Jam/api/v1/OData</code>.
 * @returns {sap.ui.core.URI} Value of property <code>tunnelServiceUrl</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getTunnelServiceUrl = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getAttachments attachments}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oAttachments New value for property <code>attachments</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setAttachments = function(oAttachments) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Sets a new value for property {@link #getCollaborationHostODataServiceUrl collaborationHostODataServiceUrl}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>/sap/bc/ui2/smi/rest_tunnel/Jam/api/v1/OData</code>.
 * @param {sap.ui.core.URI} sCollaborationHostODataServiceUrl New value for property <code>collaborationHostODataServiceUrl</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setCollaborationHostODataServiceUrl = function(sCollaborationHostODataServiceUrl) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Sets a new value for property {@link #getExternalObject externalObject}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oExternalObject New value for property <code>externalObject</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setExternalObject = function(oExternalObject) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setHeight = function(sHeight) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Sets a new value for property {@link #getObject object}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oObject New value for property <code>object</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setObject = function(oObject) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Sets a new value for property {@link #getODataServiceUrl oDataServiceUrl}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>/sap/opu/odata/sap/SM_INTEGRATION_V2_SRV</code>.
 * @param {sap.ui.core.URI} sODataServiceUrl New value for property <code>oDataServiceUrl</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setODataServiceUrl = function(sODataServiceUrl) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Setter for the Component settings.
 * @param {object} oSettings A JSON object used to set the component settings, this object should contains the same 
 * properties used in the constructor. 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.setSettings = function(oSettings) {  };

/**
 * Sets a new value for property {@link #getTunnelServiceUrl tunnelServiceUrl}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>/sap/bc/z_sail_httproxy/Jam/api/v1/OData</code>.
 * @param {sap.ui.core.URI} sTunnelServiceUrl New value for property <code>tunnelServiceUrl</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setTunnelServiceUrl = function(sTunnelServiceUrl) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.collaboration.components.fiori.sharing.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.prototype.setWidth = function(sWidth) { return new sap.collaboration.components.fiori.sharing.Component(); };

/**
 * Shares the data to Jam group
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.Component.shareToJam = function() {  };


// ---- sap.collaboration.components.fiori.sharing.dialog.Component --------------------------------------------------------------------------

/**
 * Constructor for the share dialog component
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
 * <li>{@link #getAttachments attachments} : object</li>
 * <li>{@link #getObject object} : object</li>
 * <li>{@link #getExternalObject externalObject} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.UIComponent#constructor sap.ui.core.UIComponent}
 * can be used as well.
 * 
 * @since version 1.16
 * @constructor
 * @param {sap.ui.core.URI} [oDataServiceUrl] DEPRECATED The OData service URL will no longer be taken into account.
 * @param {object} [object] A JSON object passed to the share component. This object contains the following properties:
 *        <ul>
 *        <li>id (optional): is the object Id to be shared in SAP Jam, i.e a URL( or a callback function that returns a URL) that navigates back to the same object in the application</li>
 *        <li>display (optional): is a UI5 control to be displayed in the component UI <br>
 *        <b>Note:</b> The preferred object to pass in the display parameter is <code>sap.m.ObjectListItem</code>. Using other type of objects
 *        (for example: <code>ap.ui.commons.TextView</code>) may result in problems in the rendering of the content which needs to be corrected by
 *        the application owners.</li>
 *        <li>share (optional): is a note that will be displayed in the component UI and shared to SAP Jam too</li>
 *        </ul>
 * @param {object} [externalObject] A Business Object such as an Opportunity, Sales Order, Account, etc. from the back-end that will be shared as a
 *        Featured External Object in a Group in Jam. <code>
 * <ul>
 * 	<li>{string} appContext: The application context. Example: "CRM", "SD", etc.</li>
 * 	<li>{string} odataServicePath: The relative path to the OData Service.  Example: "/sap/opu/odata/sap/ODATA_SRV"</li>
 * 	<li>{string} collection: The name of the OData Collection. Example: "Account", "Opportunity", etc.</li>
 * 	<li>{string} key: The key to identify a particular instance of the Business Object. It can be a simple ID or a compound key. Example: "123", "ObjectID='123'", "ObjectID='123',ObjectType='BUS000123'", etc.</li>
 * 	<li>{string} name: The short name of the Business Object. Example: "Sales Order 123", "Opportunity 123", "Account 123", etc.</li>
 * </ul>
 * </code> These attributes are not enforced by the UI (missing or incorrect values are not validated), but they are required to make the
 *        integration work. These attributes also should be mapped in the Back-end System and Jam in order to make the External Object work. <br>
 *        <b>Note:</b> the externalObject is dependent on object.id, therefore, the object.id must also be passed to the Share Component. See the
 *        parameter "object" for more information.
 * @param {object} [attachments] When you want to provide the user with the option to share file attachments, then the following properties need to be
 *        specified:
 *        <ul>
 *        <li>attachmentsArray: An array of {@link sap.collaboration.components.fiori.sharing.attachment.Attachment} objects. This array offers users
 *        a list of files they can attach.</li>
 *        </ul>
 * @class The Share Dialog component is an SAPUI5 component that you can use to create a dialog in your application to enable you to enter or edit information shared to SAP Jam. 
 * @extends sap.ui.core.UIComponent
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component = function(oDataServiceUrl,object,externalObject,attachments) {};
/**
 * Creates a new subclass of class sap.collaboration.components.fiori.sharing.dialog.Component with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.UIComponent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAttachments attachments}.
 * 
 * @returns {object} Value of property <code>attachments</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.getAttachments = function() { return new Object(); };

/**
 * Gets current value of property {@link #getExternalObject externalObject}.
 * 
 * @returns {object} Value of property <code>externalObject</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.getExternalObject = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.collaboration.components.fiori.sharing.dialog.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getObject object}.
 * 
 * @returns {object} Value of property <code>object</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.getObject = function() { return new Object(); };

/**
 * Opens the share component dialog
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.open = function() {  };

/**
 * Sets a new value for property {@link #getAttachments attachments}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oAttachments New value for property <code>attachments</code>
 * @returns {sap.collaboration.components.fiori.sharing.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.setAttachments = function(oAttachments) { return new sap.collaboration.components.fiori.sharing.dialog.Component(); };

/**
 * Sets a new value for property {@link #getExternalObject externalObject}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oExternalObject New value for property <code>externalObject</code>
 * @returns {sap.collaboration.components.fiori.sharing.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.setExternalObject = function(oExternalObject) { return new sap.collaboration.components.fiori.sharing.dialog.Component(); };

/**
 * Sets a new value for property {@link #getObject object}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oObject New value for property <code>object</code>
 * @returns {sap.collaboration.components.fiori.sharing.dialog.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.prototype.setObject = function(oObject) { return new sap.collaboration.components.fiori.sharing.dialog.Component(); };

/**
 * Setter for the Component settings.
 * 
 * @param {object} oSettings A JSON object used to set the component settings, this object should contains the same properties used in the
 *        constructor.
 * @public
 * 
 */
sap.collaboration.components.fiori.sharing.dialog.Component.setSettings = function(oSettings) {  };


// ---- sap.collaboration.components.socialprofile.Component --------------------------------------------------------------------------

/**
 * Constructor for the Social Profile Component.
 * 
 * !!! EXPERIMENTAL !!!
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers.
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * 
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPlacement placement} : sap.m.PlacementType (default: sap.m.PlacementType.Auto) </li>
 * <li>{@link #getMemberId memberId} : string </li>
 * <li>{@link #getMemberInfo memberInfo} : {object} </li>
 * <li>{@link #getOpeningControl openingControl} : {object} </li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 380px) </li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 300px) </li>
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class Social Profile Component
 * @extends sap.ui.core.UIComponent
 * 
 * The Social Profile Component is a SAPUI5 component that applications can use to display the
 * profile information for a specific user. The profile information is coming from SAP Jam. 
 * 
 * @since version 1.25
 * @constructor
 * @public
 * @experimental The API is not stable and the UI is not finalized. The implementation for this feature is subject to change.
 * 
 */
sap.collaboration.components.socialprofile.Component = function(sId,mSettings) {};
/**
 * Cleans up the component instance before destruction. [borrowed from sap.ui.core.Component]
 * @protected
 * @memberOf sap.collaboration.components.socialprofile.Component
 * 
 */
sap.collaboration.components.socialprofile.Component.exit = function() {  };

/**
 * Creates a new subclass of class sap.collaboration.components.socialprofile.Component with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.UIComponent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.collaboration.components.socialprofile.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>height</code>.
 * Gets the height of the Social Profile
 * 
 * Default value is <code>380px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>memberId</code>.
 * Gets the SAP Jam member id of the user
 * 
 * @return {string} the value of property <code>memberId</code>
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.getMemberId = function() { return ""; };

/**
 * Getter for property <code>memberInfo</code>.
 * Gets the SAP Jam member information
 * 
 * @return {object} member information <code>memberInfo</code>
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.getMemberInfo = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.collaboration.components.socialprofile.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.socialprofile.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>openingControl</code>.
 * Gets the opening control for the Social Profile
 * 
 * @return {object} the value of property <code>openingControl</code>
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.getOpeningControl = function() { return new Object(); };

/**
 * Getter for property <code>placement</code>.
 * Gets the placement of the Social Profile
 * 
 * Default value is <code>sap.m.PlacementType.Auto</code>
 * 
 * @return {sap.m.PlacementType} the value of property <code>placement</code>
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.getPlacement = function() { return new sap.m.PlacementType(); };

/**
 * Getter for property <code>width</code>.
 * Gets the width of the Social Profile
 * 
 * Default value is <code>300px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Initializes the Component instance after creation. [borrowed from sap.ui.core.UIComponent]
 * @protected
 * @memberOf sap.collaboration.components.socialprofile.Component
 * 
 */
sap.collaboration.components.socialprofile.Component.init = function() {  };

/**
 * Function is called when the rendering of the Component Container is completed. [borrowed from sap.ui.core.UIComponent]
 * @protected
 * @memberOf sap.collaboration.components.socialprofile.Component
 * 
 */
sap.collaboration.components.socialprofile.Component.onAfterRendering = function() {  };

/**
 * Function is called when the rendering of the Component Container is started. [borrowed from sap.ui.core.UIComponent]
 * @protected
 * @memberOf sap.collaboration.components.socialprofile.Component
 * 
 */
sap.collaboration.components.socialprofile.Component.onBeforeRendering = function() {  };

/**
 * Opens the social profile component
 * @public
 * @memberOf sap.collaboration.components.socialprofile.Component
 * 
 */
sap.collaboration.components.socialprofile.Component.open = function() {  };

/**
 * Setter for property <code>height</code>.
 * Sets the height of the Social Profile
 * 
 * Default value is <code>380px</code>
 *  
 * @param {string} sHeight  new value for property <code>height</code>
 * @return {sap.collaboration.components.socialprofile.Component} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.setHeight = function(sHeight) { return new sap.collaboration.components.socialprofile.Component(); };

/**
 * Setter for property <code>memberId</code>.
 * Sets the memberId of the user
 * 
 * @param {string} sMemberId  new value for property <code>memberId</code>
 * @return {sap.collaboration.components.socialprofile.Component} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.setMemberId = function(sMemberId) { return new sap.collaboration.components.socialprofile.Component(); };

/**
 * Setter for property <code>memberInfo</code>.
 * Sets the memberInformation of the user
 * 
 * @param {object} oMemberInfo  new value for property <code>memberInfo</code>
 * @return {sap.collaboration.components.socialprofile.Component} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.setMemberInfo = function(oMemberInfo) { return new sap.collaboration.components.socialprofile.Component(); };

/**
 * Setter for property <code>openingControl</code>.
 * Sets the opening control for the Social Profile
 * 
 * @param {object} oOpeningControl  new value for property <code>openingControl</code>
 * @return {sap.collaboration.components.socialprofile.Component} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.setOpeningControl = function(oOpeningControl) { return new sap.collaboration.components.socialprofile.Component(); };

/**
 * Setter for property <code>placement</code>.
 * Sets the placement of the Social Profile
 * 
 * Default value is <code>sap.m.PlacementType.Auto</code>
 * 
 * @param {sap.m.PlacementType} sPlacement  new value for property <code>placement</code>
 * @return {sap.collaboration.components.socialprofile.Component} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.setPlacement = function(sPlacement) { return new sap.collaboration.components.socialprofile.Component(); };

/**
 * Setter for the Component settings
 * @param {object} oSettings A JSON object used to set the component settings, this object should contains the same properties used in the constructor
 * @public
 * @memberOf sap.collaboration.components.socialprofile.Component
 * 
 */
sap.collaboration.components.socialprofile.Component.setSettings = function(oSettings) {  };

/**
 * Setter for property <code>width</code>.
 * Sets the width of the Social Profile
 * 
 * Default value is <code>300px</code>
 *  
 * @param {string} sWidth  new value for property <code>width</code>
 * @return {sap.collaboration.components.socialprofile.Component} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialprofile.Component.prototype.setWidth = function(sWidth) { return new sap.collaboration.components.socialprofile.Component(); };


// ---- sap.collaboration.components.socialtimeline.Component --------------------------------------------------------------------------

/**
 * Constructor for the Social Timeline Component.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * 
 * The supported settings are:
 * <ul>
 * 	<li>Properties
 * 		<ul>
 * 			<li>{@link #getEnableSocial enableSocial} : boolean (default: true) </li>
 * 			<li>{@link #getAlignment alignment} : sap.suite.ui.commons.TimelineAlignment (default: sap.suite.ui.commons.TimelineAlignment.Right)</li>
 * 			<li>{@link #getAxisOrientation axisOrientation} : sap.suite.ui.commons.TimelineAxisOrientation (default: sap.suite.ui.commons.TimelineAxisOrientation.Vertical)</li>
 * 			<li>{@link #getNoDataText noDataText} : string</li>
 * 			<li>{@link #getShowIcons showIcons} : boolean (default: true)</li>
 * 			<li>{@link #getVisible visible} : boolean (default: true)</li>
 * 			<li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * 			<li>{@link #getCustomFilter customFilter} : {object}</li>
 * 		</ul>
 * 	</li>
 * 	<li>Events
 * 		<ul>
 * 			<li>{@link sap.collaboration.components.socialtimeline.Component:customActionPress customActionPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * 		</ul>
 * 	</li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class 
 * Social Timeline
 * @extends sap.ui.core.UIComponent
 * @version 1.27.0-SNAPSHOT
 * 
 * @deprecated Since version 1.34.0. For new integrations and existing implementations running on release 1.32 or later, use the Group Feed component (sap.collaboration.components.feed.Component), Business Object mode(sap.collaboration.FeedType.BusinessObjectGroups).  Note that the Group Feed component does not display any updates related to the business object from the back-end system (system updates).
 * @constructor
 * @public
 * 
 * 
 */
sap.collaboration.components.socialtimeline.Component = function(sId,mSettings) {};
/**
 * Event fire when a custom action is clicked
 * @event
 * @param {object} oEventData
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.customActionPress = function(oEventData) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customActionPress customActionPress} event of this <code>sap.collaboration.components.socialtimeline.Component</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.collaboration.components.socialtimeline.Component</code> itself.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.collaboration.components.socialtimeline.Component</code> itself
 * 
 * @returns {sap.collaboration.components.socialtimeline.Component} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.attachCustomActionPress = function(oData,fnFunction,oListener) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * The method to create the Content (UI Control Tree) of the Component. 
 * @protected
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.createContent = function() {  };

/**
 * Delete a Timeline Entry.
 * This method should be called when a custom action requires a deletion of a Timeline entry and should only be called if an
 * a delete to the backend is performed successfully.
 * @public
 * @param {string} sId - the id of the timeline entry to delete
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.deleteTimelineEntry = function(sId) {  };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customActionPress customActionPress} event of this <code>sap.collaboration.components.socialtimeline.Component</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.collaboration.components.socialtimeline.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.detachCustomActionPress = function(fnFunction,oListener) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Cleans up the component instance before destruction.
 * @protected
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.exit = function() {  };

/**
 * Creates a new subclass of class sap.collaboration.components.socialtimeline.Component with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.UIComponent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.collaboration.components.socialtimeline.Component.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:customActionPress customActionPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.collaboration.components.socialtimeline.Component} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.fireCustomActionPress = function(mParameters) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Gets current value of property {@link #getAlignment alignment}.
 * 
 * Default value is <code>Right</code>.
 * @returns {sap.suite.ui.commons.TimelineAlignment} Value of property <code>alignment</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getAlignment = function() { return new sap.suite.ui.commons.TimelineAlignment(); };

/**
 * Getter for property <code>axisOrientation</code>.
 * Timeline axis orientation.
 * 
 * Default value is <code>Vertical</code>
 * 
 * @return {sap.suite.ui.commons.TimelineAxisOrientation} the value of property <code>axisOrientation</code>
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getAxisOrientation = function() { return new sap.suite.ui.commons.TimelineAxisOrientation(); };

/**
 * Getter for property <code>customFilter</code>.
 * 
 * Default value is <code>[]</code>. The customFilter is an array of objects, each object contains text and value.
 * Text is the name of the filter category and value is the filter value.
 * 
 * @return {array} the value of property <code>customFilter</code> 
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getCustomFilter = function() { return null; };

/**
 * Gets current value of property {@link #getEnableSocial enableSocial}.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableSocial</code>
 * 
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getEnableSocial = function() { return false; };

/**
 * Returns a metadata object for class sap.collaboration.components.socialtimeline.Component.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.collaboration.components.socialtimeline.Component.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>noDataText</code>.
 * This text is displayed when the control has no data.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>noDataText</code>
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getNoDataText = function() { return ""; };

/**
 * Getter for property <code>showIcons</code>.
 * Show icon on each Timeline item.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showIcons</code>
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getShowIcons = function() { return false; };

/**
 * Getter for property <code>visible</code>.
 * Set Timeline control visibility
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getVisible = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * Sets the width of the Timeline.
 * 
 * Default value is <code>100%</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Initializes the Component instance after creation. 
 * @protected
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.init = function() {  };

/**
 * Function is called when the rendering of the Component Container is completed. 
 * @protected
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.onAfterRendering = function() {  };

/**
 * Function is called when the rendering of the Component Container is started.
 * @protected
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.onBeforeRendering = function() {  };

/**
 * Sets a new value for property {@link #getAlignment alignment}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Right</code>.
 * @param {sap.suite.ui.commons.TimelineAlignment} sAlignment New value for property <code>alignment</code>
 * @returns {sap.collaboration.components.socialtimeline.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setAlignment = function(sAlignment) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Setter for property <code>axisOrientation</code>.
 * 
 * Default value is <code>Vertical</code> 
 * 
 * @param {sap.suite.ui.commons.TimelineAxisOrientation} oAxisOrientation  new value for property <code>axisOrientation</code>
 * @return {sap.collaboration.components.socialtimeline.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setAxisOrientation = function(oAxisOrientation) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Set the current business object for the social timeline to display.
 * Note: The function setBusinessObjectMap must be called once before calling setBusinessObject for the first time.
 * @public
 * @param {object} oObject - an object that contains the key and name for the business object
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.setBusinessObject = function(oObject) {  };

/**
 * Set the current business object for the social timeline to display.
 * Note: The function setBusinessObjectMap must be called once before calling setBusinessObjectKey for the first time.
 * @deprecated since 1.28.5. This method is deprecated, use method setBusinessObject instead.
 * @public
 * @param {string} sKey
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.setBusinessObjectKey = function(sKey) {  };

/**
 * Set the business object map. It is used to initialize the data needed to retrieve the timeline entries.
 * This function must be called once before calling setBusinessObjectKey for the first time.
 * @public
 * @param {object] businessObjectMap required - JSON object containing the following properties:
 * 	<ul>
 * 		<li>{sap.ui.model.odata.ODataModel} serviceModel required - OData model to retrieve timeline entries
 * 		<li>{string} servicePath: The relative path to the OData service for the business object (example: "/sap/opu/odata/sap/ODATA_SRV")		
 * 		<li>{string} collection: Entity collection name of the business object
 * 		<li>{string} applicationContext: The application context (example: "CRM", "SD", etc.)
 * 		<li>{function} customActionCallback: A callback function to determine which timeline entries should receive the custom action. The function should return an array of text/value objects.
 * 	<ul>
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.setBusinessObjectMap = function({object) {  };

/**
 * Sets a new value for property {@link #getCustomFilter customFilter}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object[]} sCustomFilter New value for property <code>customFilter</code>
 * @returns {sap.collaboration.components.socialtimeline.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setCustomFilter = function(sCustomFilter) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Sets a new value for property {@link #getEnableSocial enableSocial}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableSocial New value for property <code>enableSocial</code>
 * @returns {sap.collaboration.components.socialtimeline.Component} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setEnableSocial = function(bEnableSocial) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Setter for property <code>noDataText</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sNoDataText  new value for property <code>noDataText</code>
 * @return {sap.collaboration.components.socialtimeline.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setNoDataText = function(sNoDataText) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Set property of component 
 * @redefine 
 * @protected
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.setProperty = function() {  };

/**
 * Setter for the Component settings.
 * @public
 * @param {object} settings A JSON object used to set the component settings, this object should contains the same 
 * properties used in the constructor. 
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.setSettings = function(settings) {  };

/**
 * Setter for property <code>showIcons</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowIcons  new value for property <code>showIcons</code>
 * @return {sap.collaboration.components.socialtimeline.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setShowIcons = function(bShowIcons) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.collaboration.components.socialtimeline.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setVisible = function(bVisible) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code> 
 * 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.collaboration.components.socialtimeline.Component} <code>this</code> to allow method chaining
 * @public
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.prototype.setWidth = function(sWidth) { return new sap.collaboration.components.socialtimeline.Component(); };

/**
 * Update a Timeline Entry text.
 * This method should be called when a custom action requires a content update of a Timeline entry and should only be called if an
 * an update to the backend is performed successfully.
 * @public
 * @param {string} sText - the text that will be displayed in the content of the timeline entry
 * @param {string} sId - the id of the timeline entry to update
 * @memberOf sap.collaboration.components.socialtimeline.Component
 * 
 */
sap.collaboration.components.socialtimeline.Component.updateTimelineEntry = function(sText,sId) {  };


// ---- sap.collaboration.DisplayFeedType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.DisplayFeedType.toString = function() { return ""; };

// ---- sap.collaboration.FeedType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.collaboration.FeedType.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.collaboration.AppType --------------------------------------------------------------------------

/**
 * Fiori Split App
 * @public
 * 
 * @memberof sap.collaboration.AppType
 */
sap.collaboration.AppType.split = undefined;

/**
 * SAP Jam Feed Widget Wrapper
 * @public
 * 
 * @memberof sap.collaboration.AppType
 */
sap.collaboration.AppType.widget = undefined;


// ---- sap.collaboration.DisplayFeedType --------------------------------------------------------------------------

/**
 * The main feed for the Business Record Feed
 * @public
 * 
 * @memberof sap.collaboration.DisplayFeedType
 */
sap.collaboration.DisplayFeedType.BusinessRecordFeed = undefined;

/**
 * Group feeds where the business record is primary or featured
 * @public
 * 
 * @memberof sap.collaboration.DisplayFeedType
 */
sap.collaboration.DisplayFeedType.GroupFeedsWhereBusinessRecordIsLinked = undefined;


// ---- sap.collaboration.FeedType --------------------------------------------------------------------------

/**
 * The mode type that accepts the OData details of a business object. Users will be able to select groups where the business object is featured or primary.
 * @public
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.BusinessObjectGroups = undefined;

/**
 * Company feed type
 * @public
 * @deprecated Since version 1.30.0. 
 * The feed type was deprecated because the original feed dialog component does not use it anymore.
 * It also does not conform to naming conventions.
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.company = undefined;

/**
 * Follows feed type
 * @public
 * @deprecated Since version 1.30.0. 
 * The feed type was deprecated because the original feed dialog component does not use it anymore.
 * It also does not conform to naming conventions.
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.follows = undefined;

/**
 * Group feed type
 * @public
 * @deprecated Since version 1.30.0. 
 * The feed type was deprecated because the original feed dialog component does not use it anymore.
 * It also does not conform to naming conventions.
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.group = undefined;

/**
 * The mode type that accepts an array of group IDs. Users will be able to select these groups from a selector. The list will have the groups' names.
 * @public
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.GroupIds = undefined;

/**
 * Oject feed type
 * @public
 * @deprecated Since version 1.30.0. 
 * The feed type was deprecated because the original feed dialog component does not use it anymore.
 * It also does not conform to naming conventions.
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.object = undefined;

/**
 * Object group feed type
 * @public
 * @deprecated Since version 1.30.0. 
 * The feed type was deprecated because the original feed dialog component does not use it anymore.
 * It also does not conform to naming conventions.
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.objectGroup = undefined;

/**
 * Users of this mode type will be able to select from groups where they are members. This mode is used by the feed component. In the feed component, the list of groups displayed in the pop up will be the current user's personal groups.
 * @public
 * 
 * @memberof sap.collaboration.FeedType
 */
sap.collaboration.FeedType.UserGroups = undefined;

