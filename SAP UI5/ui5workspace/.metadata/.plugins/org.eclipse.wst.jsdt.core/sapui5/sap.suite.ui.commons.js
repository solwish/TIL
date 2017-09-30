
// ---- sap.suite.ui.commons --------------------------------------------------------------------------


// ---- sap.suite.ui.commons.BulletChart --------------------------------------------------------------------------

/**
 * Constructor for a new BulletChart.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Chart that displays an actual value as a horizontal bar in semantic color on the top of the background bar, the numeric value, the scaling factor, along with the thresholds, and a target value as vertical bars.
 * @extends sap.suite.ui.microchart.BulletMicroChart
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.BulletMicroChart.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.BulletChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.BulletChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.BulletMicroChart.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BulletChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.BulletChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BulletChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.BulletChartData --------------------------------------------------------------------------

/**
 * Constructor for a new BulletChartData.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Thresholds data holder.
 * @extends sap.suite.ui.microchart.BulletMicroChartData
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.BulletMicroChartData.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.BulletChartData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.BulletChartData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.BulletMicroChartData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BulletChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.BulletChartData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BulletChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.BulletChartMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.BulletChartMode.toString = function() { return ""; };

// ---- sap.suite.ui.commons.BusinessCard --------------------------------------------------------------------------

/**
 * Constructor for a new BusinessCard.
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
 * <li>{@link #getIconPath iconPath} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getImageTooltip imageTooltip} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * <li>{@link #getFirstTitle firstTitle} : sap.ui.core.Control</li>
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
 * This control allows you to display business card information including an image, first title (either URL link or text), second title, and multiple text lines.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Standard Fiori technology should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.BusinessCard = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.destroyContent = function() { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Destroys the firstTitle in the aggregation {@link #getFirstTitle firstTitle}.
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.destroyFirstTitle = function() { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.BusinessCard with name <code>sClassName</code>
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
sap.suite.ui.commons.BusinessCard.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content of the BusinessCard body must be provided by the application developer.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getFirstTitle firstTitle}.
 * 
 * Any control that can display a title. Content of this control appears at the first position in BusinessCard. Recomended controls: sap.ui.commons.Label and sap.ui.commons.Link.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getFirstTitle = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getIconPath iconPath}.
 * 
 * A path to the BusinessCard icon.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconPath</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getIconPath = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getImageTooltip imageTooltip}.
 * 
 * A tooltip that is set for an image.
 * 
 * @returns {string} Value of property <code>imageTooltip</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getImageTooltip = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.BusinessCard.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.BusinessCard.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSecondTitle secondTitle}.
 * 
 * A short text line that describes this BusinessCard.
 * 
 * @returns {string} Value of property <code>secondTitle</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getSecondTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Title of the BusinessCard that describes its type.
 * 
 * @returns {string} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getType = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the BusinessCard. Alternatively, CSS size can be set in %, px, or em.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Sets the aggregated {@link #getFirstTitle firstTitle}.
 * @param {sap.ui.core.Control} oFirstTitle The firstTitle to set
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setFirstTitle = function(oFirstTitle) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Sets a new value for property {@link #getIconPath iconPath}.
 * 
 * A path to the BusinessCard icon.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconPath New value for property <code>iconPath</code>
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setIconPath = function(sIconPath) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Sets a new value for property {@link #getImageTooltip imageTooltip}.
 * 
 * A tooltip that is set for an image.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sImageTooltip New value for property <code>imageTooltip</code>
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setImageTooltip = function(sImageTooltip) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Sets a new value for property {@link #getSecondTitle secondTitle}.
 * 
 * A short text line that describes this BusinessCard.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSecondTitle New value for property <code>secondTitle</code>
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setSecondTitle = function(sSecondTitle) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Title of the BusinessCard that describes its type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setType = function(sType) { return new sap.suite.ui.commons.BusinessCard(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the BusinessCard. Alternatively, CSS size can be set in %, px, or em.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.commons.BusinessCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.BusinessCard.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.BusinessCard(); };


// ---- sap.suite.ui.commons.ChartContainer --------------------------------------------------------------------------

/**
 * Constructor for a new ChartContainer.
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
 * <li>{@link #getShowPersonalization showPersonalization} : boolean (default: false)</li>
 * <li>{@link #getShowFullScreen showFullScreen} : boolean (default: false)</li>
 * <li>{@link #getFullScreen fullScreen} : boolean (default: false)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string (default: )</li>
 * <li>{@link #getSelectorGroupLabel selectorGroupLabel} : string</li>
 * <li>{@link #getAutoAdjustHeight autoAdjustHeight} : boolean (default: false)</li>
 * <li>{@link #getShowZoom showZoom} : boolean (default: true)</li>
 * <li>{@link #getShowLegendButton showLegendButton} : boolean (default: true)</li>
 * <li>{@link #getShowSelectionDetails showSelectionDetails} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDimensionSelectors dimensionSelectors} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.suite.ui.commons.ChartContainerContent[] (default)</li>
 * <li>{@link #getToolbar toolbar} : sap.m.OverflowToolbar</li>
 * <li>{@link #getCustomIcons customIcons} : sap.ui.core.Icon[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:personalizationPress personalizationPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contentChange contentChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customZoomInPress customZoomInPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customZoomOutPress customZoomOutPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Provides a toolbar with generic functions for tables and charts based on the VizFrame control like zoom, display in fullscreen mode, toggle the legend, switch between chart types, and changes of the chart dimension. The controls of the content aggregation are positioned below the toolbar. Additional functions can be added to the toolbar with the customIcons aggregation.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ChartContainer = function(sId,mSettings) {};
/**
 * Event fired when a user changes the displayed content.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.selectedItemId Id of the selected item.
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.contentChange = function(oControlEvent) {  };

/**
 * Custom event for zoom in.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.customZoomInPress = function(oControlEvent) {  };

/**
 * Custom event for zoom out.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.customZoomOutPress = function(oControlEvent) {  };

/**
 * Event fired when a user clicks on the personalization icon.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.personalizationPress = function(oControlEvent) {  };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.addContent = function(oContent) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Adds some customIcon to the aggregation {@link #getCustomIcons customIcons}.
 * @param {sap.ui.core.Icon}
 *            oCustomIcon the customIcon to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.addCustomIcon = function(oCustomIcon) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Adds some dimensionSelector to the aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * @param {sap.ui.core.Control}
 *            oDimensionSelector the dimensionSelector to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.addDimensionSelector = function(oDimensionSelector) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:contentChange contentChange} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ChartContainer</code> itself.
 * 
 * Event fired when a user changes the displayed content.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code> itself
 * 
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.attachContentChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customZoomInPress customZoomInPress} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ChartContainer</code> itself.
 * 
 * Custom event for zoom in.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code> itself
 * 
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.attachCustomZoomInPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customZoomOutPress customZoomOutPress} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ChartContainer</code> itself.
 * 
 * Custom event for zoom out.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code> itself
 * 
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.attachCustomZoomOutPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:personalizationPress personalizationPress} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ChartContainer</code> itself.
 * 
 * Event fired when a user clicks on the personalization icon.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code> itself
 * 
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.attachPersonalizationPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.destroyContent = function() { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Destroys all the customIcons in the aggregation {@link #getCustomIcons customIcons}.
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.destroyCustomIcons = function() { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Destroys all the dimensionSelectors in the aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.destroyDimensionSelectors = function() { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.destroyToolbar = function() { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:contentChange contentChange} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.detachContentChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customZoomInPress customZoomInPress} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.detachCustomZoomInPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customZoomOutPress customZoomOutPress} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.detachCustomZoomOutPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:personalizationPress personalizationPress} event of this <code>sap.suite.ui.commons.ChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.detachPersonalizationPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainer with name <code>sClassName</code>
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
sap.suite.ui.commons.ChartContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:contentChange contentChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.selectedItemId] Id of the selected item.
 * 
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.fireContentChange = function(mParameters) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Fires event {@link #event:customZoomInPress customZoomInPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.fireCustomZoomInPress = function(mParameters) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Fires event {@link #event:customZoomOutPress customZoomOutPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.fireCustomZoomOutPress = function(mParameters) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Fires event {@link #event:personalizationPress personalizationPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.firePersonalizationPress = function(mParameters) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Gets current value of property {@link #getAutoAdjustHeight autoAdjustHeight}.
 * 
 * Determine whether to stretch the chart height to the maximum possible height of ChartContainer's parent container. As a prerequisite, the parent container needs to have a fixed value height or be able to determine height from its parent.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>autoAdjustHeight</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getAutoAdjustHeight = function() { return false; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * ChartToolBar Content aggregation. Only sap.viz.ui5.controls.VizFrame, sap.m.Table and sap.ui.table.Table can be embedded.
 * If not specified explicitly, the rendering order of the charts is determined by the sequence of contents provided by the application via this aggregation. This means, per default the first chart of the aggregation will be rendered within the container.
 * 
 * @returns {sap.suite.ui.commons.ChartContainerContent[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getCustomIcons customIcons}.
 * 
 * This aggregation contains the custom icons that should be displayed additionally on the toolbar.
 * It is not guaranteed that the same instance of the sap.ui.core.Icon control will be used within the toolbar,
 * but the toolbar will contain a sap.m.OverflowToolbarButton with an icon property equal to the src property
 * of the sap.ui.core.Icon provided in the aggregation.
 * If a press event is triggered by the icon displayed on the toolbar, then the press handler of
 * the original sap.ui.core.Icon control is used. The instance of the control, that has triggered the press event,
 * can be accessed using the "controlReference" parameter of the event object.
 * 
 * @returns {sap.ui.core.Icon[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getCustomIcons = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * 
 * Dimension Selects.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getDimensionSelectors = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFullScreen fullScreen}.
 * 
 * Display the chart and the toolbar in full screen or normal mode.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>fullScreen</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getFullScreen = function() { return false; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ChartContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the current instance of the delegate to other controls.
 * 
 * @protected
 * @returns {sap.ui.core.delegate.ScrollEnablement} The current instance of the delegate
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getScrollDelegate = function() { return new sap.ui.core.delegate.ScrollEnablement(); };

/**
 * Returns the currently selected content control.
 * 
 * @public
 * @returns  {sap.ui.core.Control} The currently selected content
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getSelectedContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getSelectorGroupLabel selectorGroupLabel}.
 * 
 * Custom Label for Selectors Group.
 * 
 * @returns {string} Value of property <code>selectorGroupLabel</code>
 * 
 * @deprecated Since version 1.32.0.
 * Obsolete property as sap.m.Toolbar is replaced by sap.m.OverflowToolbar.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getSelectorGroupLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getShowFullScreen showFullScreen}.
 * 
 * Set to true to display the full screen icon. Set to false to hide it.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showFullScreen</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowFullScreen = function() { return false; };

/**
 * Gets current value of property {@link #getShowLegend showLegend}.
 * 
 * Set to true to display the charts' legends. Set to false to hide them. See also showLegendButton.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLegend</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowLegend = function() { return false; };

/**
 * Gets current value of property {@link #getShowLegendButton showLegendButton}.
 * 
 * Set to true or false to display or hide a button for controlling the visbility of the chart's legend. Please be aware that setting this property to true indirectly is setting showLegend to false. If you need to hide the button but to show the legend, you need to set showLegend at a later point in time (onBeforeRendering). The execution order of the combined properties is not guaranteed by the control.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLegendButton</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowLegendButton = function() { return false; };

/**
 * Gets current value of property {@link #getShowPersonalization showPersonalization}.
 * 
 * Set to true to display the personalization icon. Set to false to hide it.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showPersonalization</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowPersonalization = function() { return false; };

/**
 * Gets current value of property {@link #getShowSelectionDetails showSelectionDetails}.
 * 
 * Set to true to display the 'Details' button that opens on press a popup with details about the selected data from the VizFrame based chart.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showSelectionDetails</code>
 * @since 1.48.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowSelectionDetails = function() { return false; };

/**
 * Gets current value of property {@link #getShowZoom showZoom}.
 * 
 * Set to true to display zoom icons. Set to false to hide them.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showZoom</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getShowZoom = function() { return false; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * String shown if there are no dimensions to display.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getTitle = function() { return ""; };

/**
 * Gets content of aggregation {@link #getToolbar toolbar}.
 * 
 * Overflow ToolBar. If an external toolbar is used, it will be integrated with the embedded toolbar via a placeholder.
 * This placeholder is mandatory, and it needs to be of type 'sap.suite.ui.commons.ChartContainerToolbarPlaceholder'.
 * 
 * @returns {sap.m.OverflowToolbar}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.getToolbar = function() { return new sap.m.OverflowToolbar(); };

/**
 * Checks for the provided <code>sap.suite.ui.commons.ChartContainerContent</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Icon</code> in the aggregation {@link #getCustomIcons customIcons}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Icon}
 *           oCustomIcon The customIcon whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.indexOfCustomIcon = function(oCustomIcon) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oDimensionSelector The dimensionSelector whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.indexOfDimensionSelector = function(oDimensionSelector) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Inserts a customIcon into the aggregation {@link #getCustomIcons customIcons}.
 * 
 * @param {sap.ui.core.Icon}
 *            oCustomIcon the customIcon to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the customIcon should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customIcon is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customIcon is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.insertCustomIcon = function(oCustomIcon,iIndex) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Inserts a dimensionSelector into the aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * 
 * @param {sap.ui.core.Control}
 *            oDimensionSelector the dimensionSelector to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dimensionSelector should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dimensionSelector is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dimensionSelector is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.insertDimensionSelector = function(oDimensionSelector,iIndex) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.ChartContainerContent[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomIcons customIcons}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Icon[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeAllCustomIcons = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeAllDimensionSelectors = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.suite.ui.commons.ChartContainerContent} vContent The content to remove or its index or id
 * @returns {sap.suite.ui.commons.ChartContainerContent} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeContent = function(vContent) { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * Removes a customIcon from the aggregation {@link #getCustomIcons customIcons}.
 * 
 * @param {int | string | sap.ui.core.Icon} vCustomIcon The customIcon to remove or its index or id
 * @returns {sap.ui.core.Icon} The removed customIcon or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeCustomIcon = function(vCustomIcon) { return new sap.ui.core.Icon(); };

/**
 * Removes a dimensionSelector from the aggregation {@link #getDimensionSelectors dimensionSelectors}.
 * 
 * @param {int | string | sap.ui.core.Control} vDimensionSelector The dimensionSelector to remove or its index or id
 * @returns {sap.ui.core.Control} The removed dimensionSelector or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.removeDimensionSelector = function(vDimensionSelector) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getAutoAdjustHeight autoAdjustHeight}.
 * 
 * Determine whether to stretch the chart height to the maximum possible height of ChartContainer's parent container. As a prerequisite, the parent container needs to have a fixed value height or be able to determine height from its parent.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAutoAdjustHeight New value for property <code>autoAdjustHeight</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setAutoAdjustHeight = function(bAutoAdjustHeight) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getFullScreen fullScreen}.
 * 
 * Display the chart and the toolbar in full screen or normal mode.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFullScreen New value for property <code>fullScreen</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setFullScreen = function(bFullScreen) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getShowFullScreen showFullScreen}.
 * 
 * Set to true to display the full screen icon. Set to false to hide it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowFullScreen New value for property <code>showFullScreen</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowFullScreen = function(bShowFullScreen) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getShowLegend showLegend}.
 * 
 * Set to true to display the charts' legends. Set to false to hide them. See also showLegendButton.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLegend New value for property <code>showLegend</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowLegend = function(bShowLegend) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getShowLegendButton showLegendButton}.
 * 
 * Set to true or false to display or hide a button for controlling the visbility of the chart's legend. Please be aware that setting this property to true indirectly is setting showLegend to false. If you need to hide the button but to show the legend, you need to set showLegend at a later point in time (onBeforeRendering). The execution order of the combined properties is not guaranteed by the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLegendButton New value for property <code>showLegendButton</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowLegendButton = function(bShowLegendButton) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getShowPersonalization showPersonalization}.
 * 
 * Set to true to display the personalization icon. Set to false to hide it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowPersonalization New value for property <code>showPersonalization</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowPersonalization = function(bShowPersonalization) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getShowSelectionDetails showSelectionDetails}.
 * 
 * Set to true to display the 'Details' button that opens on press a popup with details about the selected data from the VizFrame based chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowSelectionDetails New value for property <code>showSelectionDetails</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.48.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowSelectionDetails = function(bShowSelectionDetails) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getShowZoom showZoom}.
 * 
 * Set to true to display zoom icons. Set to false to hide them.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowZoom New value for property <code>showZoom</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setShowZoom = function(bShowZoom) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * String shown if there are no dimensions to display.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Sets the aggregated {@link #getToolbar toolbar}.
 * @param {sap.m.OverflowToolbar} oToolbar The toolbar to set
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.setToolbar = function(oToolbar) { return new sap.suite.ui.commons.ChartContainer(); };

/**
 * Switches the currently viewed content (triggers re-rendering).
 * 
 * @public
 * @param {sap.ui.core.Control} chart The new content (Chart or Table) to be displayed
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.switchChart = function(chart) {  };

/**
 * Updates ChartContainer and re-renders all its contents.
 * 
 * @public
 * @returns {sap.suite.ui.commons.ChartContainer} Reference to this in order to allow method chaining
 * 
 */
sap.suite.ui.commons.ChartContainer.prototype.updateChartContainer = function() { return new sap.suite.ui.commons.ChartContainer(); };


// ---- sap.suite.ui.commons.ChartContainerContent --------------------------------------------------------------------------

/**
 * Constructor for a new ChartContainerContent.
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
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
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
 * Content aggregation for ChartContainer.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ChartContainerContent = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.ChartContainerContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.destroyContent = function() { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainerContent with name <code>sClassName</code>
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
sap.suite.ui.commons.ChartContainerContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Chart or Table as content of the ChartToolBar. Supported Types: sap.viz.ui5.controls.VizFrame, sap.m.Table, sap.ui.table.Table
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon of the Chart.
 * 
 * @returns {string} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getIcon = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ChartContainerContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartContainerContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for the Selection Details facade.
 * 
 * @returns {sap.m.SelectionDetailsFacade} The reduced Selection Details facade for outer framework usages.
 * @since 1.48
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getSelectionDetails = function() { return new sap.m.SelectionDetailsFacade(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title of the Chart/Table
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.getTitle = function() { return ""; };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.ChartContainerContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Icon of the Chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sIcon New value for property <code>icon</code>
 * @returns {sap.suite.ui.commons.ChartContainerContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.ChartContainerContent(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title of the Chart/Table
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.ChartContainerContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartContainerContent.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ChartContainerContent(); };


// ---- sap.suite.ui.commons.ChartContainerToolbarPlaceholder --------------------------------------------------------------------------

/**
 * Constructor for a new ChartContainerToolbarPlaceholder.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Provides a placeholder for the embedded chart container toolbar.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ChartContainerToolbarPlaceholder = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainerToolbarPlaceholder with name <code>sClassName</code>
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
sap.suite.ui.commons.ChartContainerToolbarPlaceholder.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ChartContainerToolbarPlaceholder.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartContainerToolbarPlaceholder.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.ChartTile --------------------------------------------------------------------------

/**
 * Constructor for a new ChartTile.
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
 * <li>{@link #getUnit unit} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control is the implementation of the InfoTile to show a comparison or bullet chart.
 * @extends sap.suite.ui.commons.InfoTile
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ChartTile = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartTile with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.commons.InfoTile.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ChartTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ChartTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getUnit unit}.
 * 
 * The percent sign, the currency symbol, or the unit of measure.
 * 
 * @returns {string} Value of property <code>unit</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartTile.prototype.getUnit = function() { return ""; };

/**
 * Sets a new value for property {@link #getUnit unit}.
 * 
 * The percent sign, the currency symbol, or the unit of measure.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sUnit New value for property <code>unit</code>
 * @returns {sap.suite.ui.commons.ChartTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ChartTile.prototype.setUnit = function(sUnit) { return new sap.suite.ui.commons.ChartTile(); };


// ---- sap.suite.ui.commons.ColumnData --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnData.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Column data holder.
 * @extends sap.suite.ui.microchart.ColumnMicroChartData
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.ColumnMicroChartData.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ColumnData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ColumnData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.ColumnMicroChartData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ColumnData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnData.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.ColumnMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChart.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This control shows a column chart.
 * @extends sap.suite.ui.microchart.ColumnMicroChart
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.ColumnMicroChart.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ColumnMicroChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ColumnMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.ColumnMicroChart.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ColumnMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.ColumnMicroChartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChartLabel.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This element contains data for a label in ColumnMicroChart control.
 * @extends sap.suite.ui.microchart.ColumnMicroChartLabel
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.ColumnMicroChartLabel.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ColumnMicroChartLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ColumnMicroChartLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.ColumnMicroChartLabel.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnMicroChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ColumnMicroChartLabel.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ColumnMicroChartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.CommonBackground --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.CommonBackground.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ComparisonChart --------------------------------------------------------------------------

/**
 * Constructor for a new ComparisonChart.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This control shows a comparison chart.
 * @extends sap.suite.ui.microchart.ComparisonMicroChart
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.ComparisonMicroChart.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ComparisonChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ComparisonChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.ComparisonMicroChart.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ComparisonChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ComparisonChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ComparisonChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.ComparisonChartView --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ComparisonChartView.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ComparisonData --------------------------------------------------------------------------

/**
 * Constructor for a new ComparisonData.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Comparison tile value holder.
 * @extends sap.suite.ui.microchart.ComparisonMicroChartData
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.ComparisonMicroChartData.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ComparisonData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ComparisonData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.ComparisonMicroChartData.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ComparisonData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ComparisonData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ComparisonData.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.DateRangeScroller --------------------------------------------------------------------------

/**
 * Constructor for a new DateRangeScroller.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The DateRangeScroller provides a method to scroll through a series of time periods, each of which is represented by a starting date and an ending date, known as the date range. The user may scroll to the previous or next date range. Several predefined ranges are supported such as day, week, work week, month, and year.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated. Not Fiori.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.DateRangeScroller = function(sId,mSettings) {};
/**
 * This event is fired whenever the date range is changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {any} oControlEvent.getParameters.dateRange Object containing startDate and endDate Date properties signifying the start and ending dates of the currently selected range.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.change = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.DateRangeScroller} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.DateRangeScroller} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:change change} event of this <code>sap.suite.ui.commons.DateRangeScroller</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.DateRangeScroller</code> itself.
 * 
 * This event is fired whenever the date range is changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeScroller</code> itself
 * 
 * @returns {sap.suite.ui.commons.DateRangeScroller} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Decrement the date range by a time period increment according to the the date range type and fire the dateChange event.
 * 
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.decrementDateRange = function() { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:change change} event of this <code>sap.suite.ui.commons.DateRangeScroller</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.DateRangeScroller} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.detachChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeScroller with name <code>sClassName</code>
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
sap.suite.ui.commons.DateRangeScroller.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:change change} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {any} [mParameters.dateRange] Object containing startDate and endDate Date properties signifying the start and ending dates of the currently selected range.
 * 
 * @returns {sap.suite.ui.commons.DateRangeScroller} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.fireChange = function(mParameters) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Returns an object containing startDate and endDate set to the current start and end Date objects.
 * 
 * @returns The date range containing start and end Date.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.getDateRange = function() {  };

/**
 * Returns a metadata object for class sap.suite.ui.commons.DateRangeScroller.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeScroller.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Increment the date range by a time period increment according to the the date range type and fire the dateChange event.
 * 
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.incrementDateRange = function() { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaDescribedBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.ID(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Setter for dateFormat which is used for formating the dates If passed object is null or is of incorrect type, control's default formatting will be used.
 * 
 * @param {sap.ui.core.format.DateFormat} oDateFormat
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateFormat = function(oDateFormat) {  };

/**
 * Set a custom date range beginning with the specified start date that increments/decrements <code>iDuration</code> days at a time.
 * 
 * @param dInitialDate The initial date for the custom range.
 * @param [iDuration=current custom duration] The number of days in the custom range, including the start date.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeCustom = function(dInitialDate,iDuration) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Set a date range equal to a single day, starting with the given initial date.
 * 
 * @param {Date} dInitialDate The initial date.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeDay = function(dInitialDate) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Set a date range that increments/decrements one calendar month at a time. The month date range begins on the first day of the month (beginning of the day) and ends on the
 * last day of the month (end of the day).
 * 
 * @param {Date} dInitialDate Any date that falls within the desired month.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeMonth = function(dInitialDate) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Set a date range that steps one week at a time. The starting date is set according to the first day of the week (default is Monday) and the initial date. For example, if the
 * first day of the week is set to Tuesday and the initial date is Wednesday, January 9, 2013, then the starting date will be Tuesday, January 8, 2013.
 * 
 * The last day of the range is calculated by adding (duration - 1) days to the starting date.
 * @param {Date} dInitialDate Any date that falls on the desired week. Start/end dates will be adjusted according to the first day of the week.
 * @param {Object} [oSettings]
 * @param [oSettings.duration=7] The number of days in the range with a minimum of 1 and maximum of 7.
 * @param [oSettings.iFirstDayOfWeek=1] The starting day for the range. Valid values are 0-6, with 0=Sunday and 6=Saturday.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeWeek = function(dInitialDate,oSettings) { return new sap.suite.ui.commons.DateRangeScroller(); };

/**
 * Set a date range that increments/decrements one calendar year at a time. The year date range begins on the first day of the year (beginning of the day) and ends on the last
 * day of the year (end of the day).
 * 
 * @param {Date} dInitialDate Any date that falls within the desired year.
 * @returns {sap.suite.ui.commons.DateRangeScroller} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeYear = function(dInitialDate) { return new sap.suite.ui.commons.DateRangeScroller(); };


// ---- sap.suite.ui.commons.DateRangeSlider --------------------------------------------------------------------------

/**
 * Constructor for a new DateRangeSlider.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getShowBubbles showBubbles} : boolean (default: true)</li>
 * <li>{@link #getSmallStepWidth smallStepWidth} : float</li>
 * <li>{@link #getTotalUnits totalUnits} : int</li>
 * <li>{@link #getStepLabels stepLabels} : boolean (default: false)</li>
 * <li>{@link #getLabels labels} : string[]</li>
 * <li>{@link #getMin min} : object</li>
 * <li>{@link #getMax max} : object</li>
 * <li>{@link #getValue value} : object</li>
 * <li>{@link #getValue2 value2} : object</li>
 * <li>{@link #getPinGrip pinGrip} : boolean (default: false)</li>
 * <li>{@link #getPinGrip2 pinGrip2} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The Date Range Slider provides the user with a Range Slider control that is optimized for use with Dates.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated. Not Fiori.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.DateRangeSlider = function(sId,mSettings) {};
/**
 * This event is fired when user changes completes the selection of a new date using a grip. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.change = function(oControlEvent) {  };

/**
 * This live event is fired as the user slides a grip with the mouse. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.liveChange = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:change change} event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.DateRangeSlider</code> itself.
 * 
 * This event is fired when user changes completes the selection of a new date using a grip. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSlider</code> itself
 * 
 * @returns {sap.suite.ui.commons.DateRangeSlider} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:liveChange liveChange} event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.DateRangeSlider</code> itself.
 * 
 * This live event is fired as the user slides a grip with the mouse. It contains the Date object value of each grip such that the left grip value is held by the value property and the right grip value is held by the value2 property.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSlider</code> itself
 * 
 * @returns {sap.suite.ui.commons.DateRangeSlider} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:change change} event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.DateRangeSlider} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.detachChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:liveChange liveChange} event of this <code>sap.suite.ui.commons.DateRangeSlider</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.DateRangeSlider} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeSlider with name <code>sClassName</code>
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
sap.suite.ui.commons.DateRangeSlider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:change change} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.DateRangeSlider} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.fireChange = function(mParameters) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Fires event {@link #event:liveChange liveChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.DateRangeSlider} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.fireLiveChange = function(mParameters) { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Gets current value of property {@link #getEditable editable}.
 * 
 * This property switches the enabled state of the control. Using the date range slider interactively requires this property to be true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * This property switches the enabled state of the control. Disabled fields have different colors, and can not be focused.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getLabels labels}.
 * 
 * Labels to be displayed instead of dates.
 * 
 * @returns {string[]} Value of property <code>labels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getLabels = function() { return new Array(); };

/**
 * Gets current value of property {@link #getMax max}.
 * 
 * Maximum date for the slider.
 * 
 * @returns {object} Value of property <code>max</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getMax = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.DateRangeSlider.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeSlider.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMin min}.
 * 
 * Minimum date for the slider.
 * 
 * @returns {object} Value of property <code>min</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getMin = function() { return new Object(); };

/**
 * Gets current value of property {@link #getPinGrip pinGrip}.
 * 
 * Pin the left grip so that user cannot move it with the keyboard or mouse.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>pinGrip</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getPinGrip = function() { return false; };

/**
 * Gets current value of property {@link #getPinGrip2 pinGrip2}.
 * 
 * Pin the right grip so that user cannot move it with the keyboard or mouse.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>pinGrip2</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getPinGrip2 = function() { return false; };

/**
 * Gets current value of property {@link #getShowBubbles showBubbles}.
 * 
 * Property to show or hide bubbles. Default is true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showBubbles</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getShowBubbles = function() { return false; };

/**
 * Gets current value of property {@link #getSmallStepWidth smallStepWidth}.
 * 
 * The grips of the control can only be moved in steps of this width.
 * 
 * @returns {float} Value of property <code>smallStepWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getSmallStepWidth = function() { return 0.0; };

/**
 * Gets current value of property {@link #getStepLabels stepLabels}.
 * 
 * Display a date label above each tick.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>stepLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getStepLabels = function() { return false; };

/**
 * Gets current value of property {@link #getTotalUnits totalUnits}.
 * 
 * Number of units between ticks.
 * 
 * @returns {int} Value of property <code>totalUnits</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getTotalUnits = function() { return 0; };

/**
 * Get value property for the control.
 * 
 * @returns Date - date representing position of the grip
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getValue = function() {  };

/**
 * Get value2 property for the control.
 * 
 * @returns Date - date representing position of the grip2
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getValue2 = function() {  };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * This property switches the visible state of the control. Invisible date range slider are not rendered.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the horizontal date range slider.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for dateFormat which is used to format the dates for Labels, bubble texts, and tool tips. If passed object is null or is of incorrect type,
 * _oDateRangeSliderInternal's default formatting will be used.
 * 
 * @param {sap.ui.core.format.DateFormat} oDateFormat
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setDateFormat = function(oDateFormat) {  };

/**
 * Set Date Range Slider Granularity to Day
 * 
 * @returns {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setDayGranularity = function() { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Set editable property for the DateRangeSlider
 * 
 * @param {boolean} bEditable
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setEditable = function(bEditable) {  };

/**
 * Set enabled property for the DateRangeSlider
 * @param {boolean} bEnabled
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setEnabled = function(bEnabled) {  };

/**
 * Set labels property for the DateRangeSlider
 * 
 * @param {string[]} aLabels
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setLabels = function(aLabels) {  };

/**
 * Set max property for the DateRangeSlider. This sets the maximum date for the slider.
 * 
 * @param {Date} dMax
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setMax = function(dMax) {  };

/**
 * Set min property for the DateRangeSlider. This sets the minimum date for the slider.
 * 
 * @param {Date} dMin
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setMin = function(dMin) {  };

/**
 * Set Date Range Slider Granularity to Month
 * 
 * @returns {sap.suite.ui.commons.DateRangeSlider} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setMonthGranularity = function() { return new sap.suite.ui.commons.DateRangeSlider(); };

/**
 * Set pinGrip property for the DateRangeSlider
 * 
 * @param {boolean} bPinGrip
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip = function(bPinGrip) {  };

/**
 * Set pinGrip2 property for the DateRangeSlider
 * 
 * @param {boolean} bPinGrip2
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip2 = function(bPinGrip2) {  };

/**
 * Set showBubbles property for the DateRangeSlider
 * 
 * @param {boolean} bShowBubbles
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setShowBubbles = function(bShowBubbles) {  };

/**
 * Set smallStepWidth property for the DateRangeSlider
 * 
 * @param {float} fSmallStepWidth
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setSmallStepWidth = function(fSmallStepWidth) {  };

/**
 * Set stepLabels property for the DateRangeSlider
 * 
 * @param {boolean} bStepLabels
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setStepLabels = function(bStepLabels) {  };

/**
 * Set totalUnits property for the DateRangeSlider
 * 
 * @param {int} iTotalUnits
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setTotalUnits = function(iTotalUnits) {  };

/**
 * Set value property for the DateRangeSlider. This sets the value date for the slider.
 * 
 * @param {Date} dValue
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setValue = function(dValue) {  };

/**
 * Set value2 property for the DateRangeSlider. This sets the value2 date for the slider.
 * 
 * @param {Date} dValue2
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setValue2 = function(dValue2) {  };

/**
 * Set visible property for the DateRangeSlider
 * 
 * @param {boolean} bVisible
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setVisible = function(bVisible) {  };

/**
 * Set width property for the DateRangeSlider
 * 
 * @param {sap.ui.core.CSSSize} tWidth
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSlider.prototype.setWidth = function(tWidth) {  };


// ---- sap.suite.ui.commons.DateRangeSliderInternal --------------------------------------------------------------------------

/**
 * Constructor for a new DateRangeSliderInternal.
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
 * <li>{@link #getShowBubbles showBubbles} : boolean (default: true)</li>
 * <li>{@link #getPinGrip pinGrip} : boolean (default: false)</li>
 * <li>{@link #getPinGrip2 pinGrip2} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.RangeSlider#constructor sap.ui.commons.RangeSlider}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The Date Range Slider provides the user with a Range Slider control that is optimized for use with Dates.
 * @extends sap.ui.commons.RangeSlider
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated. Not Fiori.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal = function(sId,mSettings) {};
/**
 * This event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.change = function(oControlEvent) {  };

/**
 * This live event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.liveChange = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:change change} event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code> itself.
 * 
 * This event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code> itself
 * 
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:liveChange liveChange} event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code> itself.
 * 
 * This live event is fired when user changes the positions of the grips of the control. It contains value as Date object and value2 as Date object which are based on the positions of two grips.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DateRangeSliderInternal</code> itself
 * 
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:change change} event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.detachChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:liveChange liveChange} event of this <code>sap.suite.ui.commons.DateRangeSliderInternal</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.DateRangeSliderInternal with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.RangeSlider.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:change change} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.fireChange = function(mParameters) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Fires event {@link #event:liveChange liveChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.fireLiveChange = function(mParameters) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.DateRangeSliderInternal.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPinGrip pinGrip}.
 * 
 * Property to pin Grip (left grip) of the slider so that user cannot move it with key or mouse clicks.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>pinGrip</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.getPinGrip = function() { return false; };

/**
 * Gets current value of property {@link #getPinGrip2 pinGrip2}.
 * 
 * Property to pin Grip2 (right grip) of the slider so that user cannot move it with key or mouse clicks.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>pinGrip2</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.getPinGrip2 = function() { return false; };

/**
 * Gets current value of property {@link #getShowBubbles showBubbles}.
 * 
 * Property to show or hide bubbles. Default is true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showBubbles</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.getShowBubbles = function() { return false; };

/**
 * Sets a new value for property {@link #getPinGrip pinGrip}.
 * 
 * Property to pin Grip (left grip) of the slider so that user cannot move it with key or mouse clicks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPinGrip New value for property <code>pinGrip</code>
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.setPinGrip = function(bPinGrip) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Sets a new value for property {@link #getPinGrip2 pinGrip2}.
 * 
 * Property to pin Grip2 (right grip) of the slider so that user cannot move it with key or mouse clicks.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPinGrip2 New value for property <code>pinGrip2</code>
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.setPinGrip2 = function(bPinGrip2) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };

/**
 * Sets a new value for property {@link #getShowBubbles showBubbles}.
 * 
 * Property to show or hide bubbles. Default is true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowBubbles New value for property <code>showBubbles</code>
 * @returns {sap.suite.ui.commons.DateRangeSliderInternal} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.DateRangeSliderInternal.prototype.setShowBubbles = function(bShowBubbles) { return new sap.suite.ui.commons.DateRangeSliderInternal(); };


// ---- sap.suite.ui.commons.DeltaMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new DeltaMicroChart.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class This control displays a delta of two values as a chart.
 * @extends sap.suite.ui.microchart.DeltaMicroChart
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34. Deprecated. sap.suite.ui.microchart.DeltaMicroChart should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.DeltaMicroChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.DeltaMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.DeltaMicroChart.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DeltaMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.DeltaMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DeltaMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.DeviationIndicator --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.DeviationIndicator.toString = function() { return ""; };

// ---- sap.suite.ui.commons.DynamicContainer --------------------------------------------------------------------------

/**
 * Constructor for a new DynamicContainer.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The control that displays multiple GenericTile controls as changing slides.
 * @extends sap.m.SlideTile
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34. Deprecated. Moved to openui5.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.DynamicContainer = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.DynamicContainer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.SlideTile.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DynamicContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.DynamicContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.DynamicContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.FacetOverview --------------------------------------------------------------------------

/**
 * Constructor for a new FacetOverview.
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
 * <li>{@link #getQuantity quantity} : int (default: -1)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 10rem)</li>
 * <li>{@link #getRowSpan rowSpan} : int (default: 1)</li>
 * <li>{@link #getHeightType heightType} : sap.suite.ui.commons.FacetOverviewHeight (default: None)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:heightChange heightChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This control is used in UnifiedThingInspector to display the preview of the facet content.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.FacetOverview = function(sId,mSettings) {};
/**
 * This event is fired when a new value to the heightType or height property is set.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.heightChange = function(oControlEvent) {  };

/**
 * The event is fired when the user chooses the control. Provides an event with parameter id, the ID of the chosen control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The control ID.
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:heightChange heightChange} event of this <code>sap.suite.ui.commons.FacetOverview</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.FacetOverview</code> itself.
 * 
 * This event is fired when a new value to the heightType or height property is set.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FacetOverview</code> itself
 * 
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.attachHeightChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.FacetOverview</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.FacetOverview</code> itself.
 * 
 * The event is fired when the user chooses the control. Provides an event with parameter id, the ID of the chosen control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FacetOverview</code> itself
 * 
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.destroyContent = function() { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:heightChange heightChange} event of this <code>sap.suite.ui.commons.FacetOverview</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.detachHeightChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.FacetOverview</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.FacetOverview with name <code>sClassName</code>
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
sap.suite.ui.commons.FacetOverview.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:heightChange heightChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.fireHeightChange = function(mParameters) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] The control ID.
 * 
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content that appears in the left part of the control.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Defines the height of the control only if the heightType prperty is set to None. Must be set in rems for the correct work in the UnifiedThingInspector.
 * 
 * Default value is <code>10rem</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @deprecated Since version 1.17.1.
 * This property was replaced by heightType property.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getHeightType heightType}.
 * 
 * Indicates the height of the control in the predifened values. If set to None, then the height is defined by the depricated height property.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.suite.ui.commons.FacetOverviewHeight} Value of property <code>heightType</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getHeightType = function() { return new sap.suite.ui.commons.FacetOverviewHeight(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.FacetOverview.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FacetOverview.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getQuantity quantity}.
 * 
 * Displays a label with the number of items in the right part of the control.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>quantity</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getQuantity = function() { return 0; };

/**
 * Gets current value of property {@link #getRowSpan rowSpan}.
 * 
 * Defines the number of rows that the control represents in an external layout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>rowSpan</code>
 * 
 * @deprecated Since version 1.17.1.
 * It is not used any more for the laoyut calculations in UnifiedThingInspector.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getRowSpan = function() { return 0; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * This property is shown in the upper left part of control.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Defines the width of the control. By default, the value is empty and the control inhertis the size from its content.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Defines the height of the control only if the heightType prperty is set to None. Must be set in rems for the correct work in the UnifiedThingInspector.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10rem</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.17.1.
 * This property was replaced by heightType property.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Sets a new value for property {@link #getHeightType heightType}.
 * 
 * Indicates the height of the control in the predifened values. If set to None, then the height is defined by the depricated height property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.suite.ui.commons.FacetOverviewHeight} sHeightType New value for property <code>heightType</code>
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setHeightType = function(sHeightType) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Sets a new value for property {@link #getQuantity quantity}.
 * 
 * Displays a label with the number of items in the right part of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iQuantity New value for property <code>quantity</code>
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setQuantity = function(iQuantity) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Sets a new value for property {@link #getRowSpan rowSpan}.
 * 
 * Defines the number of rows that the control represents in an external layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iRowSpan New value for property <code>rowSpan</code>
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.17.1.
 * It is not used any more for the laoyut calculations in UnifiedThingInspector.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setRowSpan = function(iRowSpan) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * This property is shown in the upper left part of control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Defines the width of the control. By default, the value is empty and the control inhertis the size from its content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.commons.FacetOverview} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverview.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.FacetOverview(); };


// ---- sap.suite.ui.commons.FacetOverviewHeight --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.FacetOverviewHeight.toString = function() { return ""; };

// ---- sap.suite.ui.commons.FeedItem --------------------------------------------------------------------------

/**
 * Constructor for a new FeedItem.
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
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getPublicationDate publicationDate} : object</li>
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
 * This element represents a news feed item.
 * @extends sap.ui.core.Element
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Generic Tile should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.FeedItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.FeedItem with name <code>sClassName</code>
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
sap.suite.ui.commons.FeedItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getImage image}.
 * 
 * The background image for the feed item.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>image</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getImage = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getLink link}.
 * 
 * The target location of the feed item.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>link</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getLink = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.FeedItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPublicationDate publicationDate}.
 * 
 * The date the feed was published.
 * 
 * @returns {object} Value of property <code>publicationDate</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getPublicationDate = function() { return new Object(); };

/**
 * Gets current value of property {@link #getSource source}.
 * 
 * The source of the feed item.
 * 
 * @returns {string} Value of property <code>source</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getSource = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the feed item.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.getTitle = function() { return ""; };

/**
 * validate the url first and then set the image property
 * 
 * @param oImage{object}
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setImage = function(oImage) {  };

/**
 * validate the url first and then set the link property
 * 
 * @param sLink {string}
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setLink = function(sLink) {  };

/**
 * Sets a new value for property {@link #getPublicationDate publicationDate}.
 * 
 * The date the feed was published.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oPublicationDate New value for property <code>publicationDate</code>
 * @returns {sap.suite.ui.commons.FeedItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setPublicationDate = function(oPublicationDate) { return new sap.suite.ui.commons.FeedItem(); };

/**
 * Sets a new value for property {@link #getSource source}.
 * 
 * The source of the feed item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSource New value for property <code>source</code>
 * @returns {sap.suite.ui.commons.FeedItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setSource = function(sSource) { return new sap.suite.ui.commons.FeedItem(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of the feed item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.FeedItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItem.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.FeedItem(); };


// ---- sap.suite.ui.commons.FeedItemHeader --------------------------------------------------------------------------

/**
 * Constructor for a new FeedItemHeader.
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
 * <li>{@link #getImage image} : sap.ui.core.URI</li>
 * <li>{@link #getLink link} : sap.ui.core.URI</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getPublicationDate publicationDate} : object</li>
 * <li>{@link #getDescription description} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control displays feed item header information.
 * @extends sap.m.ListItemBase
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.FeedItemHeader = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.FeedItemHeader with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedItemHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * The description of the feed item.
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getImage image}.
 * 
 * The image associated with the feed item.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>image</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getImage = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getLink link}.
 * 
 * The target location of the feed item.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>link</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getLink = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.FeedItemHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedItemHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPublicationDate publicationDate}.
 * 
 * The date the feed item was published.
 * 
 * @returns {object} Value of property <code>publicationDate</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getPublicationDate = function() { return new Object(); };

/**
 * Gets current value of property {@link #getSource source}.
 * 
 * The source of the feed item.
 * 
 * @returns {string} Value of property <code>source</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getSource = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the feed item.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.getTitle = function() { return ""; };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * The description of the feed item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.suite.ui.commons.FeedItemHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.FeedItemHeader(); };

/**
 * Sets the specified image URI if it is valid, otherwise an error messsage is logged.
 * 
 * @param sImageUri {String}
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setImage = function(sImageUri) {  };

/**
 * Sets the specified link URL if it is valid, otherwise an error messsage is logged.
 * 
 * @param sLinkUri {String}
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setLink = function(sLinkUri) {  };

/**
 * Sets a new value for property {@link #getPublicationDate publicationDate}.
 * 
 * The date the feed item was published.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oPublicationDate New value for property <code>publicationDate</code>
 * @returns {sap.suite.ui.commons.FeedItemHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setPublicationDate = function(oPublicationDate) { return new sap.suite.ui.commons.FeedItemHeader(); };

/**
 * Sets a new value for property {@link #getSource source}.
 * 
 * The source of the feed item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSource New value for property <code>source</code>
 * @returns {sap.suite.ui.commons.FeedItemHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setSource = function(sSource) { return new sap.suite.ui.commons.FeedItemHeader(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of the feed item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.FeedItemHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedItemHeader.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.FeedItemHeader(); };


// ---- sap.suite.ui.commons.FeedTile --------------------------------------------------------------------------

/**
 * Constructor for a new FeedTile.
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
 * <li>{@link #getDisplayDuration displayDuration} : int (default: 5)</li>
 * <li>{@link #getDisplayArticleImage displayArticleImage} : boolean (default: true)</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getDefaultImages defaultImages} : sap.ui.core.URI[]</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.suite.ui.commons.FeedItem[]</li>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control displays news feeds.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.FeedTile = function(sId,mSettings) {};
/**
 * The event fired when the user clicks on the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.press = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.suite.ui.commons.FeedItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.addItem = function(oItem) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.FeedTile</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.FeedTile</code> itself.
 * 
 * The event fired when the user clicks on the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FeedTile</code> itself
 * 
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.destroyItems = function() { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.FeedTile</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.FeedTile with name <code>sClassName</code>
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
sap.suite.ui.commons.FeedTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Gets current value of property {@link #getDefaultImages defaultImages}.
 * 
 * A list of default images that is cycled by the control when no image is available for a feed item or when no feed items exist. After a random image is displayed first time, control cycles through this list of images.
 * 
 * @returns {sap.ui.core.URI[]} Value of property <code>defaultImages</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getDefaultImages = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDisplayArticleImage displayArticleImage}.
 * 
 * To display article Image or not. If it is true, the article Image will be displayed based on precedence. If it is false, the default image will be displayed.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>displayArticleImage</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getDisplayArticleImage = function() { return false; };

/**
 * Gets current value of property {@link #getDisplayDuration displayDuration}.
 * 
 * The length of time in seconds the control displays each feed item. Default value is 5 seconds.
 * 
 * Default value is <code>5</code>.
 * @returns {int} Value of property <code>displayDuration</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getDisplayDuration = function() { return 0; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The feed items the control cycles through.
 * 
 * @returns {sap.suite.ui.commons.FeedItem[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.FeedTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.FeedTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSource source}.
 * 
 * The source of the feed item.
 * 
 * @returns {string} Value of property <code>source</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.getSource = function() { return ""; };

/**
 * Checks for the provided <code>sap.suite.ui.commons.FeedItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.FeedItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.suite.ui.commons.FeedItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.FeedItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.suite.ui.commons.FeedItem} vItem The item to remove or its index or id
 * @returns {sap.suite.ui.commons.FeedItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.removeItem = function(vItem) { return new sap.suite.ui.commons.FeedItem(); };

/**
 * Validate the array of URI first and then set the defaultImages property
 * 
 * @param oDefaultImages {object[]}
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.setDefaultImages = function(oDefaultImages) {  };

/**
 * Sets a new value for property {@link #getDisplayArticleImage displayArticleImage}.
 * 
 * To display article Image or not. If it is true, the article Image will be displayed based on precedence. If it is false, the default image will be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDisplayArticleImage New value for property <code>displayArticleImage</code>
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.setDisplayArticleImage = function(bDisplayArticleImage) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Set displayDuration property for the control
 * 
 * @param {int} iDisplayDuration
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.setDisplayDuration = function(iDisplayDuration) {  };

/**
 * Sets a new value for property {@link #getSource source}.
 * 
 * The source of the feed item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSource New value for property <code>source</code>
 * @returns {sap.suite.ui.commons.FeedTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.setSource = function(sSource) { return new sap.suite.ui.commons.FeedTile(); };

/**
 * Set a new model of feed items, such as when a feed aggregator has collected the latest feed items. This model is staged (not immediately set on the control) to avoid
 * re-rendering before the currently displayed article is faded out. Therefore a smooth transition between the display of feed items is always maintained.
 * 
 * @param oModel Model of new feed items.
 * @public
 * 
 */
sap.suite.ui.commons.FeedTile.prototype.stageModel = function(oModel) {  };


// ---- sap.suite.ui.commons.FrameType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.FrameType.toString = function() { return ""; };

// ---- sap.suite.ui.commons.GenericTile --------------------------------------------------------------------------

/**
 * Constructor for a new GenericTile.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class The tile control that displays the title, description, and customizable main area.
 * @extends sap.m.GenericTile
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34. Deprecated. Moved to openui5.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.GenericTile = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.GenericTile with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.GenericTile.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.GenericTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.GenericTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.GenericTile.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.GenericTile2X2 --------------------------------------------------------------------------

/**
 * Constructor for a new GenericTile2X2.
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
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getSubheader subheader} : string</li>
 * <li>{@link #getFailedText failedText} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: Auto)</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getHeaderImage headerImage} : sap.ui.core.URI</li>
 * <li>{@link #getFrameType frameType} : sap.suite.ui.commons.FrameType (default: OneByOne)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: Loaded)</li>
 * <li>{@link #getImageDescription imageDescription} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTileContent tileContent} : sap.suite.ui.commons.TileContent2X2[]</li>
 * <li>{@link #getIcon icon} : sap.ui.core.Control</li>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The tile control that displays the title, description, and customizable main area.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.GenericTile2X2 = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the tile.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.press = function(oControlEvent) {  };

/**
 * Adds some tileContent to the aggregation {@link #getTileContent tileContent}.
 * @param {sap.suite.ui.commons.TileContent2X2}
 *            oTileContent the tileContent to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.addTileContent = function(oTileContent) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.GenericTile2X2</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.GenericTile2X2</code> itself.
 * 
 * The event is fired when the user chooses the tile.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.GenericTile2X2</code> itself
 * 
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Destroys the icon in the aggregation {@link #getIcon icon}.
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.destroyIcon = function() { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Destroys all the tileContent in the aggregation {@link #getTileContent tileContent}.
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.destroyTileContent = function() { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.GenericTile2X2</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.GenericTile2X2 with name <code>sClassName</code>
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
sap.suite.ui.commons.GenericTile2X2.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Gets current value of property {@link #getBackgroundImage backgroundImage}.
 * 
 * The URI of the background image.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>backgroundImage</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getBackgroundImage = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getFailedText failedText}.
 * 
 * The message that appears when the control is in the Failed state.
 * 
 * @returns {string} Value of property <code>failedText</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getFailedText = function() { return ""; };

/**
 * Gets current value of property {@link #getFrameType frameType}.
 * 
 * The frame type: 1x1 or 2x1.
 * 
 * Default value is <code>OneByOne</code>.
 * @returns {sap.suite.ui.commons.FrameType} Value of property <code>frameType</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getFrameType = function() { return new sap.suite.ui.commons.FrameType(); };

/**
 * Gets current value of property {@link #getHeader header}.
 * 
 * The header of the tile.
 * 
 * @returns {string} Value of property <code>header</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getHeader = function() { return ""; };

/**
 * Gets current value of property {@link #getHeaderImage headerImage}.
 * 
 * The image to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>headerImage</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getHeaderImage = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getIcon icon}.
 * 
 * An icon or image to be displayed in the control.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getIcon = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getImageDescription imageDescription}.
 * 
 * Description of a header image that is used in the tooltip.
 * 
 * @returns {string} Value of property <code>imageDescription</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getImageDescription = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.GenericTile2X2.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.GenericTile2X2.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the tile. If not set, then the default size is applied based on the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.suite.ui.commons.InfoTileSize} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * The load status.
 * 
 * Default value is <code>Loaded</code>.
 * @returns {sap.suite.ui.commons.LoadState} Value of property <code>state</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * Gets current value of property {@link #getSubheader subheader}.
 * 
 * The subheader of the tile.
 * 
 * @returns {string} Value of property <code>subheader</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getSubheader = function() { return ""; };

/**
 * Gets content of aggregation {@link #getTileContent tileContent}.
 * 
 * The switchable view that depends on the tile type.
 * 
 * @returns {sap.suite.ui.commons.TileContent2X2[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.getTileContent = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.suite.ui.commons.TileContent2X2</code> in the aggregation {@link #getTileContent tileContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TileContent2X2}
 *           oTileContent The tileContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.indexOfTileContent = function(oTileContent) { return 0; };

/**
 * Inserts a tileContent into the aggregation {@link #getTileContent tileContent}.
 * 
 * @param {sap.suite.ui.commons.TileContent2X2}
 *            oTileContent the tileContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the tileContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the tileContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the tileContent is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.insertTileContent = function(oTileContent,iIndex) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Removes all the controls from the aggregation {@link #getTileContent tileContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.TileContent2X2[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.removeAllTileContent = function() { return new Array(); };

/**
 * Removes a tileContent from the aggregation {@link #getTileContent tileContent}.
 * 
 * @param {int | string | sap.suite.ui.commons.TileContent2X2} vTileContent The tileContent to remove or its index or id
 * @returns {sap.suite.ui.commons.TileContent2X2} The removed tileContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.removeTileContent = function(vTileContent) { return new sap.suite.ui.commons.TileContent2X2(); };

/**
 * Sets a new value for property {@link #getBackgroundImage backgroundImage}.
 * 
 * The URI of the background image.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sBackgroundImage New value for property <code>backgroundImage</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setBackgroundImage = function(sBackgroundImage) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getFailedText failedText}.
 * 
 * The message that appears when the control is in the Failed state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFailedText New value for property <code>failedText</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setFailedText = function(sFailedText) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getFrameType frameType}.
 * 
 * The frame type: 1x1 or 2x1.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>OneByOne</code>.
 * @param {sap.suite.ui.commons.FrameType} sFrameType New value for property <code>frameType</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setFrameType = function(sFrameType) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getHeader header}.
 * 
 * The header of the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sHeader New value for property <code>header</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setHeader = function(sHeader) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getHeaderImage headerImage}.
 * 
 * The image to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sHeaderImage New value for property <code>headerImage</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setHeaderImage = function(sHeaderImage) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets the aggregated {@link #getIcon icon}.
 * @param {sap.ui.core.Control} oIcon The icon to set
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setIcon = function(oIcon) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getImageDescription imageDescription}.
 * 
 * Description of a header image that is used in the tooltip.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sImageDescription New value for property <code>imageDescription</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setImageDescription = function(sImageDescription) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the tile. If not set, then the default size is applied based on the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.suite.ui.commons.InfoTileSize} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setSize = function(sSize) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * The load status.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Loaded</code>.
 * @param {sap.suite.ui.commons.LoadState} sState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setState = function(sState) { return new sap.suite.ui.commons.GenericTile2X2(); };

/**
 * Sets a new value for property {@link #getSubheader subheader}.
 * 
 * The subheader of the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSubheader New value for property <code>subheader</code>
 * @returns {sap.suite.ui.commons.GenericTile2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.GenericTile2X2.prototype.setSubheader = function(sSubheader) { return new sap.suite.ui.commons.GenericTile2X2(); };


// ---- sap.suite.ui.commons.HarveyBallMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new HarveyBallMicroChart.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This chart shows the part comparative to total.
 * @extends sap.suite.ui.microchart.HarveyBallMicroChart
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.HarveyBallMicroChart.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.HarveyBallMicroChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.HarveyBallMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.HarveyBallMicroChart.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HarveyBallMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.HarveyBallMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HarveyBallMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.HarveyBallMicroChartItem --------------------------------------------------------------------------

/**
 * Constructor for a new HarveyBallMicroChartItem.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The configuration of the slice on the pie chart.
 * @extends sap.suite.ui.microchart.HarveyBallMicroChartItem
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.HarveyBallMicroChartItem.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.HarveyBallMicroChartItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.HarveyBallMicroChartItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.HarveyBallMicroChartItem.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HarveyBallMicroChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.HarveyBallMicroChartItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HarveyBallMicroChartItem.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.HeaderCell --------------------------------------------------------------------------

/**
 * Constructor for a new HeaderCell.
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
 * <li>{@link #getHeigth heigth} : sap.ui.core.CSSSize (default: 100px)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 106px)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getWest west} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getNorth north} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getEast east} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getSouth south} : sap.suite.ui.commons.HeaderCellItem</li>
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
 * This control contains 4 cells (West, North, East, South). It can display one or more controls in different layouts. Each aggregation must contain only one instance of HeaderCellItem.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.44.0.
 * HeaderCell control is no longer used. Please use other container controls instead (like sap.m.VBox or sap.m.HBox).
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.HeaderCell = function(sId,mSettings) {};
/**
 * Destroys the east in the aggregation {@link #getEast east}.
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroyEast = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Destroys the north in the aggregation {@link #getNorth north}.
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroyNorth = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Destroys the south in the aggregation {@link #getSouth south}.
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroySouth = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Destroys the west in the aggregation {@link #getWest west}.
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.destroyWest = function() { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.HeaderCell with name <code>sClassName</code>
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
sap.suite.ui.commons.HeaderCell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getEast east}.
 * 
 * Object that contains control to render in east area of the HeaderCell.
 * 
 * @returns {sap.suite.ui.commons.HeaderCellItem}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getEast = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of the HeaderCell control.
 * 
 * Default value is <code>106px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getHeigth heigth}.
 * 
 * Height of the HeaderCell control.
 * 
 * Default value is <code>100px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>heigth</code>
 * 
 * @deprecated Since version 1.20.2.
 * Wrong property name
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getHeigth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.HeaderCell.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HeaderCell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getNorth north}.
 * 
 * Object that contains control to render in north area of the HeaderCell.
 * 
 * @returns {sap.suite.ui.commons.HeaderCellItem}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getNorth = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * Gets content of aggregation {@link #getSouth south}.
 * 
 * Object that contains control to render in south area of the HeaderCell.
 * 
 * @returns {sap.suite.ui.commons.HeaderCellItem}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getSouth = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * Gets content of aggregation {@link #getWest west}.
 * 
 * Object that contains control to render in west area of the HeaderCell.
 * 
 * @returns {sap.suite.ui.commons.HeaderCellItem}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.getWest = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * Sets the aggregated {@link #getEast east}.
 * @param {sap.suite.ui.commons.HeaderCellItem} oEast The east to set
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setEast = function(oEast) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of the HeaderCell control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>106px</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Sets a new value for property {@link #getHeigth heigth}.
 * 
 * Height of the HeaderCell control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100px</code>.
 * @param {sap.ui.core.CSSSize} sHeigth New value for property <code>heigth</code>
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.20.2.
 * Wrong property name
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setHeigth = function(sHeigth) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Sets the aggregated {@link #getNorth north}.
 * @param {sap.suite.ui.commons.HeaderCellItem} oNorth The north to set
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setNorth = function(oNorth) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Sets the aggregated {@link #getSouth south}.
 * @param {sap.suite.ui.commons.HeaderCellItem} oSouth The south to set
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setSouth = function(oSouth) { return new sap.suite.ui.commons.HeaderCell(); };

/**
 * Sets the aggregated {@link #getWest west}.
 * @param {sap.suite.ui.commons.HeaderCellItem} oWest The west to set
 * @returns {sap.suite.ui.commons.HeaderCell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCell.prototype.setWest = function(oWest) { return new sap.suite.ui.commons.HeaderCell(); };


// ---- sap.suite.ui.commons.HeaderCellItem --------------------------------------------------------------------------

/**
 * Constructor for a new HeaderCellItem.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
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
 * Object that contains instance of control and information about height. It should be used inside sap.suite.ui.commons.HeaderCell
 * @extends sap.ui.core.Element
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.44.0.
 * The HeaderCellItem was deprecated because of the deprecation of HeaderCell. Please see HeaderCell for replacement advice.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.HeaderCellItem = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.HeaderCellItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.destroyContent = function() { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.HeaderCellItem with name <code>sClassName</code>
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
sap.suite.ui.commons.HeaderCellItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Instance of UI5 Control that is used as content.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of area to occupy by control.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.HeaderCellItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HeaderCellItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.HeaderCellItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.HeaderCellItem(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of area to occupy by control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.HeaderCellItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderCellItem.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.HeaderCellItem(); };


// ---- sap.suite.ui.commons.HeaderContainer --------------------------------------------------------------------------

/**
 * Constructor for a new HeaderContainer.
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
 * <li>{@link #getScrollStep scrollStep} : int (default: 300)</li>
 * <li>{@link #getScrollTime scrollTime} : int (default: 500)</li>
 * <li>{@link #getShowDividers showDividers} : boolean (default: true)</li>
 * <li>{@link #getView view} : sap.suite.ui.commons.HeaderContainerView (default: Horizontal)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign (default: Transparent)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li>
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
 * The container that provides a horizontal layout. It provides a horizontal scroll on the tablet and phone. On the desktop, it provides scroll left and scroll right buttons. This control supports keyboard navigation. You can use left and right arrow keys to navigate through the inner content. The Home key puts focus on the first control and the End key puts focus on the last control. Use Enter or Space to choose the control.
 * @extends sap.ui.core.Control
 * @implements sap.m.ObjectHeaderContainer
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.44.
 * This control is deprecated in this library since 1.44 and moved to sap.m library that is also part of openUI5.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.HeaderContainer = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.addItem = function(oItem) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.destroyItems = function() { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.HeaderContainer with name <code>sClassName</code>
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
sap.suite.ui.commons.HeaderContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the content. The visualization of the different options depends on the used theme.
 * 
 * Default value is <code>Transparent</code>.
 * @returns {sap.m.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.38
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getBackgroundDesign = function() { return new sap.m.BackgroundDesign(); };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * Items to add to HeaderContainer.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.HeaderContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.HeaderContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getScrollStep scrollStep}.
 * 
 * Number of pixels to scroll when the user chooses Next or Previous buttons. Relevant only for desktop.
 * 
 * Default value is <code>300</code>.
 * @returns {int} Value of property <code>scrollStep</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getScrollStep = function() { return 0; };

/**
 * Gets current value of property {@link #getScrollTime scrollTime}.
 * 
 * Scroll animation time in milliseconds.
 * 
 * Default value is <code>500</code>.
 * @returns {int} Value of property <code>scrollTime</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getScrollTime = function() { return 0; };

/**
 * Gets current value of property {@link #getShowDividers showDividers}.
 * 
 * If set to true, shows dividers between scrollable items.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showDividers</code>
 * @since 1.25
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getShowDividers = function() { return false; };

/**
 * Gets current value of property {@link #getView view}.
 * 
 * The view of the HeaderContainer. There are two view modes: horizontal and vertical. In horizontal mode the content controls are displayed next to each other, in vertical mode the content controls are displayed on top of each other.
 * 
 * Default value is <code>Horizontal</code>.
 * @returns {sap.suite.ui.commons.HeaderContainerView} Value of property <code>view</code>
 * @since 1.25
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.getView = function() { return new sap.suite.ui.commons.HeaderContainerView(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.core.Control}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.core.Control} vItem The item to remove or its index or id
 * @returns {sap.ui.core.Control} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
 * 
 * Specifies the background color of the content. The visualization of the different options depends on the used theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Transparent</code>.
 * @param {sap.m.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Sets a new value for property {@link #getScrollStep scrollStep}.
 * 
 * Number of pixels to scroll when the user chooses Next or Previous buttons. Relevant only for desktop.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>300</code>.
 * @param {int} iScrollStep New value for property <code>scrollStep</code>
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setScrollStep = function(iScrollStep) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Sets a new value for property {@link #getScrollTime scrollTime}.
 * 
 * Scroll animation time in milliseconds.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>500</code>.
 * @param {int} iScrollTime New value for property <code>scrollTime</code>
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setScrollTime = function(iScrollTime) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Sets a new value for property {@link #getShowDividers showDividers}.
 * 
 * If set to true, shows dividers between scrollable items.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowDividers New value for property <code>showDividers</code>
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.25
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setShowDividers = function(bShowDividers) { return new sap.suite.ui.commons.HeaderContainer(); };

/**
 * Sets a new value for property {@link #getView view}.
 * 
 * The view of the HeaderContainer. There are two view modes: horizontal and vertical. In horizontal mode the content controls are displayed next to each other, in vertical mode the content controls are displayed on top of each other.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Horizontal</code>.
 * @param {sap.suite.ui.commons.HeaderContainerView} sView New value for property <code>view</code>
 * @returns {sap.suite.ui.commons.HeaderContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.25
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainer.prototype.setView = function(sView) { return new sap.suite.ui.commons.HeaderContainer(); };


// ---- sap.suite.ui.commons.HeaderContainerView --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.HeaderContainerView.toString = function() { return ""; };

// ---- sap.suite.ui.commons.InfoTile --------------------------------------------------------------------------

/**
 * Constructor for a new InfoTile.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getFooter footer} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: Auto)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: Loading)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The tile control that displays the title, description, footer, and customizable main area.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.InfoTile = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the tile.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.InfoTile</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.InfoTile</code> itself.
 * 
 * The event is fired when the user chooses the tile.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.InfoTile</code> itself
 * 
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.destroyContent = function() { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.InfoTile</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.InfoTile with name <code>sClassName</code>
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
sap.suite.ui.commons.InfoTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The switchable view that depends on the tile type.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * Shows the description of the selected tile.
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getFooter footer}.
 * 
 * The footer text of the tile.
 * 
 * @returns {string} Value of property <code>footer</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getFooter = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.InfoTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.InfoTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.suite.ui.commons.InfoTileSize} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * Indicates the load status.
 * 
 * Default value is <code>Loading</code>.
 * @returns {sap.suite.ui.commons.LoadState} Value of property <code>state</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the tile.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.getTitle = function() { return ""; };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * Shows the description of the selected tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Sets a new value for property {@link #getFooter footer}.
 * 
 * The footer text of the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFooter New value for property <code>footer</code>
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setFooter = function(sFooter) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.suite.ui.commons.InfoTileSize} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setSize = function(sSize) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * Indicates the load status.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Loading</code>.
 * @param {sap.suite.ui.commons.LoadState} sState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setState = function(sState) { return new sap.suite.ui.commons.InfoTile(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.InfoTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.InfoTile.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.InfoTile(); };


// ---- sap.suite.ui.commons.InfoTileSize --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.InfoTileSize.toString = function() { return ""; };

// ---- sap.suite.ui.commons.InfoTileTextColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.InfoTileTextColor.toString = function() { return ""; };

// ---- sap.suite.ui.commons.InfoTileValueColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.InfoTileValueColor.toString = function() { return ""; };

// ---- sap.suite.ui.commons.JamContent --------------------------------------------------------------------------

/**
 * Constructor for a new JamContent.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This control displays the jam content text, subheader, and numeric value in a tile.
 * @extends sap.m.FeedContent
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.m.FeedContent.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.JamContent = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.JamContent with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.FeedContent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.JamContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.JamContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.JamContent.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.KpiTile --------------------------------------------------------------------------

/**
 * Constructor for a new KpiTile.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getDoubleFontSize doubleFontSize} : boolean (default: true)</li>
 * <li>{@link #getValueUnit valueUnit} : string</li>
 * <li>{@link #getValueScale valueScale} : string</li>
 * <li>{@link #getValueStatus valueStatus} : sap.suite.ui.commons.ValueStatus (default: Neutral)</li>
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
 * This control is used in UnifiedThingInspector to display object-related KPIs in a factsheet.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Numeric content or any other standard Fiori control should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.KpiTile = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.KpiTile with name <code>sClassName</code>
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
sap.suite.ui.commons.KpiTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * The Description field.
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getDoubleFontSize doubleFontSize}.
 * 
 * If true, the value text will have 2 rem, if false - 1 rem.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>doubleFontSize</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getDoubleFontSize = function() { return false; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.KpiTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.KpiTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The Value field.
 * 
 * @returns {string} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValue = function() { return ""; };

/**
 * Gets current value of property {@link #getValueScale valueScale}.
 * 
 * The scale of a value.
 * 
 * @returns {string} Value of property <code>valueScale</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValueScale = function() { return ""; };

/**
 * Gets current value of property {@link #getValueStatus valueStatus}.
 * 
 * The status color of the value. Depending on the status the tile is displayed in different colors.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.suite.ui.commons.ValueStatus} Value of property <code>valueStatus</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValueStatus = function() { return new sap.suite.ui.commons.ValueStatus(); };

/**
 * Gets current value of property {@link #getValueUnit valueUnit}.
 * 
 * The percent sign, currency symbol, or unit for a value.
 * 
 * @returns {string} Value of property <code>valueUnit</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.getValueUnit = function() { return ""; };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * The Description field.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.suite.ui.commons.KpiTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * Sets a new value for property {@link #getDoubleFontSize doubleFontSize}.
 * 
 * If true, the value text will have 2 rem, if false - 1 rem.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDoubleFontSize New value for property <code>doubleFontSize</code>
 * @returns {sap.suite.ui.commons.KpiTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setDoubleFontSize = function(bDoubleFontSize) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The Value field.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.suite.ui.commons.KpiTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * Sets a new value for property {@link #getValueScale valueScale}.
 * 
 * The scale of a value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValueScale New value for property <code>valueScale</code>
 * @returns {sap.suite.ui.commons.KpiTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValueScale = function(sValueScale) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * Sets a new value for property {@link #getValueStatus valueStatus}.
 * 
 * The status color of the value. Depending on the status the tile is displayed in different colors.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.suite.ui.commons.ValueStatus} sValueStatus New value for property <code>valueStatus</code>
 * @returns {sap.suite.ui.commons.KpiTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValueStatus = function(sValueStatus) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * Sets a new value for property {@link #getValueUnit valueUnit}.
 * 
 * The percent sign, currency symbol, or unit for a value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValueUnit New value for property <code>valueUnit</code>
 * @returns {sap.suite.ui.commons.KpiTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.KpiTile.prototype.setValueUnit = function(sValueUnit) { return new sap.suite.ui.commons.KpiTile(); };


// ---- sap.suite.ui.commons.LaunchTile --------------------------------------------------------------------------

/**
 * Constructor for a new LaunchTile.
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
 * <li>{@link #getLink link} : sap.ui.core.URI</li>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control launches a URL.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * Deprecated.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.LaunchTile = function(sId,mSettings) {};
/**
 * The event fired when the user clicks on the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.LaunchTile</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.LaunchTile</code> itself.
 * 
 * The event fired when the user clicks on the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.LaunchTile</code> itself
 * 
 * @returns {sap.suite.ui.commons.LaunchTile} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.LaunchTile</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.LaunchTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.LaunchTile with name <code>sClassName</code>
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
sap.suite.ui.commons.LaunchTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.LaunchTile} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon associated with the launch destination.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getLink link}.
 * 
 * The launch destination.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>link</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.getLink = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.LaunchTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.LaunchTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Descriptive title of the launch destination.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.getTitle = function() { return ""; };

/**
 * Sets a new value for property {@link #getLink link}.
 * 
 * The launch destination.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sLink New value for property <code>link</code>
 * @returns {sap.suite.ui.commons.LaunchTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.setLink = function(sLink) { return new sap.suite.ui.commons.LaunchTile(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Descriptive title of the launch destination.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.LaunchTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LaunchTile.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.LaunchTile(); };


// ---- sap.suite.ui.commons.LinkActionSheet --------------------------------------------------------------------------

/**
 * Constructor for a new LinkActionSheet.
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
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:itemPress itemPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ActionSheet#constructor sap.m.ActionSheet}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control contains one or more sap.m.Button controls or sap.ui.commons.Link controls. The LinkActionSheet control is closed if the user chooses one of the buttons or links. It looks similar to sap.m.Dialog in iPhone and Android, and to sap.m.Popover in iPad.
 * @extends sap.m.ActionSheet
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.LinkActionSheet = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses any item.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.item The object that initiated the event.
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.itemPress = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.LinkActionSheet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.addItem = function(oItem) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:itemPress itemPress} event of this <code>sap.suite.ui.commons.LinkActionSheet</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.LinkActionSheet</code> itself.
 * 
 * The event is fired when the user chooses any item.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.LinkActionSheet</code> itself
 * 
 * @returns {sap.suite.ui.commons.LinkActionSheet} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.attachItemPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.suite.ui.commons.LinkActionSheet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.destroyItems = function() { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:itemPress itemPress} event of this <code>sap.suite.ui.commons.LinkActionSheet</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.LinkActionSheet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.detachItemPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.LinkActionSheet with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ActionSheet.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.LinkActionSheet.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:itemPress itemPress} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.item] The object that initiated the event.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.fireItemPress = function(mParameters) { return false; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * These buttons or links are added to the content area in the LinkActionSheet control. If the user chooses a button or a link, the LinkActionSheet is closed before the event listener is called.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.LinkActionSheet.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.LinkActionSheet.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.ui.core.Control}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.LinkActionSheet} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.commons.LinkActionSheet(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ui.core.Control} vItem The item to remove or its index or id
 * @returns {sap.ui.core.Control} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.LinkActionSheet.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };


// ---- sap.suite.ui.commons.LoadState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.LoadState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.MicroAreaChart --------------------------------------------------------------------------

/**
 * Constructor for a new MicroAreaChart.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This control displays the history of values as a line mini chart or an area mini chart.
 * @extends sap.suite.ui.microchart.AreaMicroChart
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.AreaMicroChart.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.MicroAreaChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.AreaMicroChart.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.MicroAreaChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.MicroAreaChartItem --------------------------------------------------------------------------

/**
 * Constructor for a new MicroAreaChartItem.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The configuration of the graphic element on the chart.
 * @extends sap.suite.ui.microchart.AreaMicroChartItem
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.AreaMicroChartItem.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.AreaMicroChartItem.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.MicroAreaChartItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartItem.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.MicroAreaChartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new MicroAreaChartLabel.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This element contains data for a label in MicroAreaChart control.
 * @extends sap.suite.ui.microchart.AreaMicroChartLabel
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.AreaMicroChartLabel.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.AreaMicroChartLabel.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.MicroAreaChartLabel.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.MicroAreaChartPoint --------------------------------------------------------------------------

/**
 * Constructor for a new MicroAreaChartPoint.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This control contains data for the point.
 * @extends sap.suite.ui.microchart.AreaMicroChartPoint
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.suite.ui.microchart.AreaMicroChartPoint.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartPoint with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.AreaMicroChartPoint.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.MicroAreaChartPoint.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MicroAreaChartPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.MicroAreaChartView --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.MicroAreaChartView.toString = function() { return ""; };

// ---- sap.suite.ui.commons.MonitoringContent --------------------------------------------------------------------------

/**
 * Constructor for a new MonitoringContent.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getIconSrc iconSrc} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: Auto)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.LoadState (default: Loaded)</li>
 * <li>{@link #getAnimateTextChange animateTextChange} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.Icon</li>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control is used in a tile or any other place to display numeric values and an icon.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.NumericContent.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.MonitoringContent = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the monitoring content.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.MonitoringContent</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.MonitoringContent</code> itself.
 * 
 * The event is fired when the user chooses the monitoring content.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.MonitoringContent</code> itself
 * 
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Destroys the icon in the aggregation {@link #getIcon icon}.
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.destroyIcon = function() { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.MonitoringContent</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.MonitoringContent with name <code>sClassName</code>
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
sap.suite.ui.commons.MonitoringContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Gets current value of property {@link #getAnimateTextChange animateTextChange}.
 * 
 * If set to true, changing of the value is animated.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>animateTextChange</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getAnimateTextChange = function() { return false; };

/**
 * Gets content of aggregation {@link #getIcon icon}.
 * 
 * The icon that is displayed in the content.
 * 
 * @returns {sap.ui.core.Icon}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getIcon = function() { return new sap.ui.core.Icon(); };

/**
 * Gets current value of property {@link #getIconSrc iconSrc}.
 * 
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 * 
 * @returns {string} Value of property <code>iconSrc</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getIconSrc = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.MonitoringContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MonitoringContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.suite.ui.commons.InfoTileSize} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * Indicates the load status.
 * 
 * Default value is <code>Loaded</code>.
 * @returns {sap.suite.ui.commons.LoadState} Value of property <code>state</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getState = function() { return new sap.suite.ui.commons.LoadState(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * @returns {string} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.getValue = function() { return ""; };

/**
 * Sets a new value for property {@link #getAnimateTextChange animateTextChange}.
 * 
 * If set to true, changing of the value is animated.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAnimateTextChange New value for property <code>animateTextChange</code>
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setAnimateTextChange = function(bAnimateTextChange) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Sets the aggregated {@link #getIcon icon}.
 * @param {sap.ui.core.Icon} oIcon The icon to set
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setIcon = function(oIcon) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Sets a new value for property {@link #getIconSrc iconSrc}.
 * 
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sIconSrc New value for property <code>iconSrc</code>
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setIconSrc = function(sIconSrc) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.suite.ui.commons.InfoTileSize} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setSize = function(sSize) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * Indicates the load status.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Loaded</code>.
 * @param {sap.suite.ui.commons.LoadState} sState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setState = function(sState) { return new sap.suite.ui.commons.MonitoringContent(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.suite.ui.commons.MonitoringContent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringContent.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.MonitoringContent(); };


// ---- sap.suite.ui.commons.MonitoringTile --------------------------------------------------------------------------

/**
 * Constructor for a new MonitoringTile.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getIconSrc iconSrc} : string</li>
 * <li>{@link #getFooterColor footerColor} : sap.suite.ui.commons.InfoTileTextColor (default: Positive)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control is the implementation of the InfoTile to show a numeric value and an icon.
 * @extends sap.suite.ui.commons.InfoTile
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.MonitoringTile = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.MonitoringTile with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.commons.InfoTile.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MonitoringTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getFooterColor footerColor}.
 * 
 * The color of the tile footer text.
 * 
 * Default value is <code>Positive</code>.
 * @returns {sap.suite.ui.commons.InfoTileTextColor} Value of property <code>footerColor</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.getFooterColor = function() { return new sap.suite.ui.commons.InfoTileTextColor(); };

/**
 * Gets current value of property {@link #getIconSrc iconSrc}.
 * 
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 * 
 * @returns {string} Value of property <code>iconSrc</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.getIconSrc = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.MonitoringTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.MonitoringTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * @returns {string} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.getValue = function() { return ""; };

/**
 * Sets a new value for property {@link #getFooterColor footerColor}.
 * 
 * The color of the tile footer text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Positive</code>.
 * @param {sap.suite.ui.commons.InfoTileTextColor} sFooterColor New value for property <code>footerColor</code>
 * @returns {sap.suite.ui.commons.MonitoringTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.setFooterColor = function(sFooterColor) { return new sap.suite.ui.commons.MonitoringTile(); };

/**
 * Sets a new value for property {@link #getIconSrc iconSrc}.
 * 
 * This property is set by the return value of sap.ui.core.IconPool.getIconURI that is called with an icon name parameter and optional collection parameter. The collection parameter is required when the application extended icons are used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sIconSrc New value for property <code>iconSrc</code>
 * @returns {sap.suite.ui.commons.MonitoringTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.setIconSrc = function(sIconSrc) { return new sap.suite.ui.commons.MonitoringTile(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.suite.ui.commons.MonitoringTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.MonitoringTile.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.MonitoringTile(); };


// ---- sap.suite.ui.commons.NewsContent --------------------------------------------------------------------------

/**
 * Constructor for a new NewsContent.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * This control displays the news content text and subheader in a tile.
 * @extends sap.m.NewsContent
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.m.NewsContent.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.NewsContent = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.NewsContent with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.NewsContent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NewsContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.NewsContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NewsContent.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.NoteTaker --------------------------------------------------------------------------

/**
 * Constructor for a new NoteTaker.
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
 * <li>{@link #getVisibleNotes visibleNotes} : int (default: 2)</li>
 * <li>{@link #getCardViewAllTrigger cardViewAllTrigger} : int (default: 1800)</li>
 * <li>{@link #getFilterCriteria filterCriteria} : object</li>
 * <li>{@link #getAttachmentUploadUrl attachmentUploadUrl} : string</li>
 * <li>{@link #getAttachmentName attachmentName} : string (default: attachment)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCards cards} : sap.suite.ui.commons.NoteTakerCard[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:addCard addCard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:deleteCard deleteCard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:editCard editCard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentSelect attachmentSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentUploadComplete attachmentUploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentDelete attachmentDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentClick attachmentClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This control allows you to create and store your notes for further reference.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Standard Fiori technology should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.NoteTaker = function(sId,mSettings) {};
/**
 * The event is fired when a new card is added if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to add an element to the model.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the note to be added.
 * @param {string} oControlEvent.getParameters.body The text of the note to be added.
 * @param {object} oControlEvent.getParameters.timestamp The timestamp of the note to be added.
 * @param {int} oControlEvent.getParameters.viewAllTrigger The View All link appears in the Note Taker card when length of a body text exceeds the specified value.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for a new card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for a new card.
 * @param {string} oControlEvent.getParameters.attachmentFilename Stores the name of the file attached to the card.
 * @param {string} oControlEvent.getParameters.uid The unique ID if available.
 * @param {string} oControlEvent.getParameters.attachmentUrl Stores the URL of the file attached to the card.
 * @param {sap.suite.ui.commons.NoteTakerCard} oControlEvent.getParameters.card A newly created card if no data binding is available. If data binding is available, this parameter is empty.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.addCard = function(oControlEvent) {  };

/**
 * The event is fired when a user presses the attachment link.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @param {string} oControlEvent.getParameters.isCardAttachment If true, a user chooses the attachment in the Note card. If false, a user chooses the attachment in the Feeder card.
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentClick = function(oControlEvent) {  };

/**
 * The event is fired, when user deletes the attached file.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentDelete = function(oControlEvent) {  };

/**
 * The event is fired when the value of attached file has been changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentSelect = function(oControlEvent) {  };

/**
 * Fire event uploadComplete to attached listeners.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.response The response message of the String type that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @param {string} oControlEvent.getParameters.uid The unique ID of the card.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachmentUploadComplete = function(oControlEvent) {  };

/**
 * The event is fired when a new card is deleted if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to delete the element from the model.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the card to be deleted.
 * @param {string} oControlEvent.getParameters.body The text of the card to be deleted.
 * @param {string} oControlEvent.getParameters.timestamp The timestamp of the card to be deleted.
 * @param {string} oControlEvent.getParameters.uid The unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the deleted card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the deleted card.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.deleteCard = function(oControlEvent) {  };

/**
 * The event is fired when a new card has been edited.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the edited card.
 * @param {string} oControlEvent.getParameters.body A new text of the edited card.
 * @param {string} oControlEvent.getParameters.timestamp A new timestamp of the edited card.
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the edited card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the edited card.
 * @param {object} oControlEvent.getParameters.tags Updated array of the String type tags applied to the card during editing.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.editCard = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:addCard addCard} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * The event is fired when a new card is added if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to add an element to the model.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAddCard = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentClick attachmentClick} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * The event is fired when a user presses the attachment link.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentClick = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentDelete attachmentDelete} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * The event is fired, when user deletes the attached file.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentDelete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentSelect attachmentSelect} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * The event is fired when the value of attached file has been changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentSelect = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentUploadComplete attachmentUploadComplete} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * Fire event uploadComplete to attached listeners.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachAttachmentUploadComplete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:deleteCard deleteCard} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * The event is fired when a new card is deleted if no data binding is available.
 * If data binding is available, the event is fired to notify a developer to delete the element from the model.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachDeleteCard = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:editCard editCard} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTaker</code> itself.
 * 
 * The event is fired when a new card has been edited.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTaker</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.attachEditCard = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:addCard addCard} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAddCard = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentClick attachmentClick} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentClick = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentDelete attachmentDelete} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentDelete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentSelect attachmentSelect} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentSelect = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentUploadComplete attachmentUploadComplete} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachAttachmentUploadComplete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:deleteCard deleteCard} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachDeleteCard = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:editCard editCard} event of this <code>sap.suite.ui.commons.NoteTaker</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.detachEditCard = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.NoteTaker with name <code>sClassName</code>
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
sap.suite.ui.commons.NoteTaker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:addCard addCard} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.title] The title of the note to be added.
 * @param {string} [mParameters.body] The text of the note to be added.
 * @param {object} [mParameters.timestamp] The timestamp of the note to be added.
 * @param {int} [mParameters.viewAllTrigger] The View All link appears in the Note Taker card when length of a body text exceeds the specified value.
 * @param {boolean} [mParameters.thumbUp] Indicates positive information for a new card.
 * @param {boolean} [mParameters.thumbDown] Indicates negative information for a new card.
 * @param {string} [mParameters.attachmentFilename] Stores the name of the file attached to the card.
 * @param {string} [mParameters.uid] The unique ID if available.
 * @param {string} [mParameters.attachmentUrl] Stores the URL of the file attached to the card.
 * @param {sap.suite.ui.commons.NoteTakerCard} [mParameters.card] A newly created card if no data binding is available. If data binding is available, this parameter is empty.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAddCard = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Fires event {@link #event:attachmentClick attachmentClick} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.uid] The unique ID of the card.
 * @param {string} [mParameters.isCardAttachment] If true, a user chooses the attachment in the Note card. If false, a user chooses the attachment in the Feeder card.
 * @param {string} [mParameters.filename] A name of the attached file.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentClick = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Fires event {@link #event:attachmentDelete attachmentDelete} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.filename] A name of the attached file.
 * @param {string} [mParameters.uid] The unique ID of the card.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentDelete = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Fires event {@link #event:attachmentSelect attachmentSelect} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.filename] A name of the attached file.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentSelect = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Fires event {@link #event:attachmentUploadComplete attachmentUploadComplete} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.response] The response message of the String type that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @param {string} [mParameters.uid] The unique ID of the card.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireAttachmentUploadComplete = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Fires event {@link #event:deleteCard deleteCard} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.title] The title of the card to be deleted.
 * @param {string} [mParameters.body] The text of the card to be deleted.
 * @param {string} [mParameters.timestamp] The timestamp of the card to be deleted.
 * @param {string} [mParameters.uid] The unique ID that was set by an application developer.
 * @param {boolean} [mParameters.thumbUp] Indicates positive information for the deleted card.
 * @param {boolean} [mParameters.thumbDown] Indicates negative information for the deleted card.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireDeleteCard = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Fires event {@link #event:editCard editCard} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.title] The title of the edited card.
 * @param {string} [mParameters.body] A new text of the edited card.
 * @param {string} [mParameters.timestamp] A new timestamp of the edited card.
 * @param {string} [mParameters.uid] A unique ID that was set by an application developer.
 * @param {boolean} [mParameters.thumbUp] Indicates positive information for the edited card.
 * @param {boolean} [mParameters.thumbDown] Indicates negative information for the edited card.
 * @param {object} [mParameters.tags] Updated array of the String type tags applied to the card during editing.
 * 
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.fireEditCard = function(mParameters) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Gets current value of property {@link #getAttachmentName attachmentName}.
 * 
 * The attachment property name for identification on the server side after sending data to the server.
 * 
 * Default value is <code>attachment</code>.
 * @returns {string} Value of property <code>attachmentName</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getAttachmentName = function() { return ""; };

/**
 * Gets current value of property {@link #getAttachmentUploadUrl attachmentUploadUrl}.
 * 
 * Defines a path on the server where the attached files are uploaded.
 * 
 * @returns {string} Value of property <code>attachmentUploadUrl</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getAttachmentUploadUrl = function() { return ""; };

/**
 * Gets current value of property {@link #getCardViewAllTrigger cardViewAllTrigger}.
 * 
 * The View All link appears in the Note Taker card when length of a card body text exceeds the specified value. The updated value of this property is not applied to the existing cards.
 * 
 * Default value is <code>1800</code>.
 * @returns {int} Value of property <code>cardViewAllTrigger</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getCardViewAllTrigger = function() { return 0; };

/**
 * Gets current value of property {@link #getFilterCriteria filterCriteria}.
 * 
 * A composite object containing criteria for filtering cards in the Note Taker.
 * 
 * @returns {object} Value of property <code>filterCriteria</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getFilterCriteria = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.NoteTaker.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NoteTaker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisibleNotes visibleNotes}.
 * 
 * Number of notes to display.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>visibleNotes</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.getVisibleNotes = function() { return 0; };

/**
 * Sets a new value for property {@link #getAttachmentName attachmentName}.
 * 
 * The attachment property name for identification on the server side after sending data to the server.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>attachment</code>.
 * @param {string} sAttachmentName New value for property <code>attachmentName</code>
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setAttachmentName = function(sAttachmentName) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Sets a new value for property {@link #getAttachmentUploadUrl attachmentUploadUrl}.
 * 
 * Defines a path on the server where the attached files are uploaded.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAttachmentUploadUrl New value for property <code>attachmentUploadUrl</code>
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setAttachmentUploadUrl = function(sAttachmentUploadUrl) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Sets a new value for property {@link #getCardViewAllTrigger cardViewAllTrigger}.
 * 
 * The View All link appears in the Note Taker card when length of a card body text exceeds the specified value. The updated value of this property is not applied to the existing cards.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1800</code>.
 * @param {int} iCardViewAllTrigger New value for property <code>cardViewAllTrigger</code>
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setCardViewAllTrigger = function(iCardViewAllTrigger) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Sets a new value for property {@link #getFilterCriteria filterCriteria}.
 * 
 * A composite object containing criteria for filtering cards in the Note Taker.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oFilterCriteria New value for property <code>filterCriteria</code>
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setFilterCriteria = function(oFilterCriteria) { return new sap.suite.ui.commons.NoteTaker(); };

/**
 * Sets a new value for property {@link #getVisibleNotes visibleNotes}.
 * 
 * Number of notes to display.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iVisibleNotes New value for property <code>visibleNotes</code>
 * @returns {sap.suite.ui.commons.NoteTaker} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTaker.prototype.setVisibleNotes = function(iVisibleNotes) { return new sap.suite.ui.commons.NoteTaker(); };


// ---- sap.suite.ui.commons.NoteTakerCard --------------------------------------------------------------------------

/**
 * Constructor for a new NoteTakerCard.
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
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getBody body} : string</li>
 * <li>{@link #getTimestamp timestamp} : object (default: new Date())</li>
 * <li>{@link #getTags tags} : object (default: [])</li>
 * <li>{@link #getViewAllTrigger viewAllTrigger} : int (default: 1800)</li>
 * <li>{@link #getUid uid} : string</li>
 * <li>{@link #getIsFiltered isFiltered} : boolean (default: false)</li>
 * <li>{@link #getThumbUp thumbUp} : boolean</li>
 * <li>{@link #getThumbDown thumbDown} : boolean</li>
 * <li>{@link #getAllTags allTags} : object (default: [])</li>
 * <li>{@link #getAttachmentFilename attachmentFilename} : string</li>
 * <li>{@link #getAttachmentUrl attachmentUrl} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:editNote editNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:deleteNote deleteNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentClick attachmentClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This control allows you to store Note Taker card header and body text.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Standard Fiori technology should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.NoteTakerCard = function(sId,mSettings) {};
/**
 * The event is fired when a user chooses the attachment download link.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {string} oControlEvent.getParameters.url The address of the file attached to the card.
 * @param {string} oControlEvent.getParameters.filename The name of the file attached to the card.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachmentClick = function(oControlEvent) {  };

/**
 * The event is fired when a card needs to be deleted. This event is needed for the Note Taker control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.cardId The HTML ID of a card that needs to be deleted.
 * @param {string} oControlEvent.getParameters.title The title of the card to be deleted.
 * @param {string} oControlEvent.getParameters.body The text of the card to be deleted.
 * @param {string} oControlEvent.getParameters.timestamp The timestamp of the card to be deleted.
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the deleted card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the deleted card.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.deleteNote = function(oControlEvent) {  };

/**
 * The event is fired when a user chooses the Edit button in the note card.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of edited card.
 * @param {string} oControlEvent.getParameters.body A new text of the edited card.
 * @param {string} oControlEvent.getParameters.timestamp A new timestamp of the edited card.
 * @param {string} oControlEvent.getParameters.uid A unique ID that was set by an application developer.
 * @param {boolean} oControlEvent.getParameters.thumbUp Indicates positive information for the edited card.
 * @param {boolean} oControlEvent.getParameters.thumbDown Indicates negative information for the edited card.
 * @param {object} oControlEvent.getParameters.tags Updated array of the String type tags applied to the card during editing.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.editNote = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentClick attachmentClick} event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerCard</code> itself.
 * 
 * The event is fired when a user chooses the attachment download link.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachAttachmentClick = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:deleteNote deleteNote} event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerCard</code> itself.
 * 
 * The event is fired when a card needs to be deleted. This event is needed for the Note Taker control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachDeleteNote = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:editNote editNote} event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerCard</code> itself.
 * 
 * The event is fired when a user chooses the Edit button in the note card.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerCard</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.attachEditNote = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentClick attachmentClick} event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.detachAttachmentClick = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:deleteNote deleteNote} event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.detachDeleteNote = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:editNote editNote} event of this <code>sap.suite.ui.commons.NoteTakerCard</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.detachEditNote = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.NoteTakerCard with name <code>sClassName</code>
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
sap.suite.ui.commons.NoteTakerCard.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:attachmentClick attachmentClick} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.uid] A unique ID that was set by an application developer.
 * @param {string} [mParameters.url] The address of the file attached to the card.
 * @param {string} [mParameters.filename] The name of the file attached to the card.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.fireAttachmentClick = function(mParameters) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Fires event {@link #event:deleteNote deleteNote} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.cardId] The HTML ID of a card that needs to be deleted.
 * @param {string} [mParameters.title] The title of the card to be deleted.
 * @param {string} [mParameters.body] The text of the card to be deleted.
 * @param {string} [mParameters.timestamp] The timestamp of the card to be deleted.
 * @param {string} [mParameters.uid] A unique ID that was set by an application developer.
 * @param {boolean} [mParameters.thumbUp] Indicates positive information for the deleted card.
 * @param {boolean} [mParameters.thumbDown] Indicates negative information for the deleted card.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.fireDeleteNote = function(mParameters) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Fires event {@link #event:editNote editNote} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.title] The title of edited card.
 * @param {string} [mParameters.body] A new text of the edited card.
 * @param {string} [mParameters.timestamp] A new timestamp of the edited card.
 * @param {string} [mParameters.uid] A unique ID that was set by an application developer.
 * @param {boolean} [mParameters.thumbUp] Indicates positive information for the edited card.
 * @param {boolean} [mParameters.thumbDown] Indicates negative information for the edited card.
 * @param {object} [mParameters.tags] Updated array of the String type tags applied to the card during editing.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.fireEditNote = function(mParameters) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Gets current value of property {@link #getAllTags allTags}.
 * 
 * Contains an array of the String type tags available for selection during the card update.
 * 
 * Default value is <code>[]</code>.
 * @returns {object} Value of property <code>allTags</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getAllTags = function() { return new Object(); };

/**
 * Gets current value of property {@link #getAttachmentFilename attachmentFilename}.
 * 
 * Stores the name of the file attached to the card.
 * 
 * @returns {string} Value of property <code>attachmentFilename</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getAttachmentFilename = function() { return ""; };

/**
 * Gets current value of property {@link #getAttachmentUrl attachmentUrl}.
 * 
 * Stores the address of the file attached to the card.
 * 
 * @returns {string} Value of property <code>attachmentUrl</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getAttachmentUrl = function() { return ""; };

/**
 * Gets current value of property {@link #getBody body}.
 * 
 * Stores the Note Taker card body text.
 * 
 * @returns {string} Value of property <code>body</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getBody = function() { return ""; };

/**
 * Gets current value of property {@link #getHeader header}.
 * 
 * Stores the Note Taker card header.
 * 
 * @returns {string} Value of property <code>header</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getHeader = function() { return ""; };

/**
 * Gets current value of property {@link #getIsFiltered isFiltered}.
 * 
 * Shows whether the note card is hidden by the applied filter.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isFiltered</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getIsFiltered = function() { return false; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.NoteTakerCard.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NoteTakerCard.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTags tags}.
 * 
 * Contains an array of the String type tags applied to the current card.
 * 
 * Default value is <code>[]</code>.
 * @returns {object} Value of property <code>tags</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getTags = function() { return new Object(); };

/**
 * Gets current value of property {@link #getThumbDown thumbDown}.
 * 
 * Indicates negative information for the card.
 * 
 * @returns {boolean} Value of property <code>thumbDown</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getThumbDown = function() { return false; };

/**
 * Gets current value of property {@link #getThumbUp thumbUp}.
 * 
 * Indicates positive information for the card.
 * 
 * @returns {boolean} Value of property <code>thumbUp</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getThumbUp = function() { return false; };

/**
 * Gets current value of property {@link #getTimestamp timestamp}.
 * 
 * Stores a timestamp of the Note Taker card.
 * 
 * Default value is <code>new Date()</code>.
 * @returns {object} Value of property <code>timestamp</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getTimestamp = function() { return new Object(); };

/**
 * Gets current value of property {@link #getUid uid}.
 * 
 * The card ID. This property should be set by an application developer.
 * 
 * @returns {string} Value of property <code>uid</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getUid = function() { return ""; };

/**
 * Gets current value of property {@link #getViewAllTrigger viewAllTrigger}.
 * 
 * The View All link appears in the Note Taker card if a body text length exceeds the specified value.
 * 
 * Default value is <code>1800</code>.
 * @returns {int} Value of property <code>viewAllTrigger</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.getViewAllTrigger = function() { return 0; };

/**
 * Sets a new value for property {@link #getAllTags allTags}.
 * 
 * Contains an array of the String type tags available for selection during the card update.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object} oAllTags New value for property <code>allTags</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setAllTags = function(oAllTags) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getAttachmentFilename attachmentFilename}.
 * 
 * Stores the name of the file attached to the card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAttachmentFilename New value for property <code>attachmentFilename</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setAttachmentFilename = function(sAttachmentFilename) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getAttachmentUrl attachmentUrl}.
 * 
 * Stores the address of the file attached to the card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAttachmentUrl New value for property <code>attachmentUrl</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setAttachmentUrl = function(sAttachmentUrl) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getBody body}.
 * 
 * Stores the Note Taker card body text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sBody New value for property <code>body</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setBody = function(sBody) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getHeader header}.
 * 
 * Stores the Note Taker card header.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sHeader New value for property <code>header</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setHeader = function(sHeader) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getIsFiltered isFiltered}.
 * 
 * Shows whether the note card is hidden by the applied filter.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsFiltered New value for property <code>isFiltered</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setIsFiltered = function(bIsFiltered) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getTags tags}.
 * 
 * Contains an array of the String type tags applied to the current card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object} oTags New value for property <code>tags</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setTags = function(oTags) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getThumbDown thumbDown}.
 * 
 * Indicates negative information for the card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bThumbDown New value for property <code>thumbDown</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setThumbDown = function(bThumbDown) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getThumbUp thumbUp}.
 * 
 * Indicates positive information for the card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bThumbUp New value for property <code>thumbUp</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setThumbUp = function(bThumbUp) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getTimestamp timestamp}.
 * 
 * Stores a timestamp of the Note Taker card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>new Date()</code>.
 * @param {object} oTimestamp New value for property <code>timestamp</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setTimestamp = function(oTimestamp) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getUid uid}.
 * 
 * The card ID. This property should be set by an application developer.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sUid New value for property <code>uid</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setUid = function(sUid) { return new sap.suite.ui.commons.NoteTakerCard(); };

/**
 * Sets a new value for property {@link #getViewAllTrigger viewAllTrigger}.
 * 
 * The View All link appears in the Note Taker card if a body text length exceeds the specified value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1800</code>.
 * @param {int} iViewAllTrigger New value for property <code>viewAllTrigger</code>
 * @returns {sap.suite.ui.commons.NoteTakerCard} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerCard.prototype.setViewAllTrigger = function(iViewAllTrigger) { return new sap.suite.ui.commons.NoteTakerCard(); };


// ---- sap.suite.ui.commons.NoteTakerFeeder --------------------------------------------------------------------------

/**
 * Constructor for a new NoteTakerFeeder.
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
 * <li>{@link #getBody body} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getTags tags} : object (default: [])</li>
 * <li>{@link #getThumbUp thumbUp} : boolean</li>
 * <li>{@link #getThumbDown thumbDown} : boolean</li>
 * <li>{@link #getAttachmentUploadUrl attachmentUploadUrl} : string</li>
 * <li>{@link #getAttachmentName attachmentName} : string (default: attachment)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:addNote addNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentSelect attachmentSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentUploadComplete attachmentUploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentDelete attachmentDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:attachmentClick attachmentClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This control allows you to enter a quick note and N note cards.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Standard Fiori technology should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder = function(sId,mSettings) {};
/**
 * The event is fired when a user chooses the Add button in the control.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.title The title of the note to be added.
 * @param {string} oControlEvent.getParameters.body The text of the note to be added.
 * @param {object} oControlEvent.getParameters.timestamp The timestamp of the note to be added.
 * @param {boolean} oControlEvent.getParameters.thumbUp If set to true, a new card should be marked as positive one.
 * @param {boolean} oControlEvent.getParameters.thumbDown If set to true, a new card should be marked as negative one.
 * @param {string} oControlEvent.getParameters.attachmentFilename Stores the attachment file name for a new card.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.addNote = function(oControlEvent) {  };

/**
 * The event is fired when a user presses the attachment link.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentClick = function(oControlEvent) {  };

/**
 * The event is fired when a user presses the Delete button in the Feeder card.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentDelete = function(oControlEvent) {  };

/**
 * The event is fired when the value of attached file has been changed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.filename A name of the attached file.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentSelect = function(oControlEvent) {  };

/**
 * The event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.response The response message that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachmentUploadComplete = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:addNote addNote} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself.
 * 
 * The event is fired when a user chooses the Add button in the control.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAddNote = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentClick attachmentClick} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself.
 * 
 * The event is fired when a user presses the attachment link.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentClick = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentDelete attachmentDelete} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself.
 * 
 * The event is fired when a user presses the Delete button in the Feeder card.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentDelete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentSelect attachmentSelect} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself.
 * 
 * The event is fired when the value of attached file has been changed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentSelect = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:attachmentUploadComplete attachmentUploadComplete} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself.
 * 
 * The event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.NoteTakerFeeder</code> itself
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.attachAttachmentUploadComplete = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:addNote addNote} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAddNote = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentClick attachmentClick} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentClick = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentDelete attachmentDelete} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentDelete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentSelect attachmentSelect} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentSelect = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:attachmentUploadComplete attachmentUploadComplete} event of this <code>sap.suite.ui.commons.NoteTakerFeeder</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.detachAttachmentUploadComplete = function(fnFunction,oListener) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.NoteTakerFeeder with name <code>sClassName</code>
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
sap.suite.ui.commons.NoteTakerFeeder.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:addNote addNote} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.title] The title of the note to be added.
 * @param {string} [mParameters.body] The text of the note to be added.
 * @param {object} [mParameters.timestamp] The timestamp of the note to be added.
 * @param {boolean} [mParameters.thumbUp] If set to true, a new card should be marked as positive one.
 * @param {boolean} [mParameters.thumbDown] If set to true, a new card should be marked as negative one.
 * @param {string} [mParameters.attachmentFilename] Stores the attachment file name for a new card.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAddNote = function(mParameters) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Fires event {@link #event:attachmentClick attachmentClick} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.filename] A name of the attached file.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentClick = function(mParameters) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Fires event {@link #event:attachmentDelete attachmentDelete} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.filename] A name of the attached file.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentDelete = function(mParameters) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Fires event {@link #event:attachmentSelect attachmentSelect} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.filename] A name of the attached file.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentSelect = function(mParameters) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Fires event {@link #event:attachmentUploadComplete attachmentUploadComplete} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.response] The response message that comes from the server. On the server side this response has to be put within the "body" tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * 
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.fireAttachmentUploadComplete = function(mParameters) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Gets current value of property {@link #getAttachmentName attachmentName}.
 * 
 * The attachment property name for identification on the server side after sending data to the server.
 * 
 * Default value is <code>attachment</code>.
 * @returns {string} Value of property <code>attachmentName</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getAttachmentName = function() { return ""; };

/**
 * Gets current value of property {@link #getAttachmentUploadUrl attachmentUploadUrl}.
 * 
 * Sets the upload attachment URL for a new card.
 * 
 * @returns {string} Value of property <code>attachmentUploadUrl</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getAttachmentUploadUrl = function() { return ""; };

/**
 * Gets current value of property {@link #getBody body}.
 * 
 * The text inside the note card.
 * 
 * @returns {string} Value of property <code>body</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getBody = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.NoteTakerFeeder.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTags tags}.
 * 
 * The list of tags selected for addition to a new note card.
 * 
 * Default value is <code>[]</code>.
 * @returns {object} Value of property <code>tags</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getTags = function() { return new Object(); };

/**
 * Gets current value of property {@link #getThumbDown thumbDown}.
 * 
 * Sets negative indication for a new note.
 * 
 * @returns {boolean} Value of property <code>thumbDown</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getThumbDown = function() { return false; };

/**
 * Gets current value of property {@link #getThumbUp thumbUp}.
 * 
 * Sets positive indication for a new note.
 * 
 * @returns {boolean} Value of property <code>thumbUp</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getThumbUp = function() { return false; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * This text is the header of a new note.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.getTitle = function() { return ""; };

/**
 * Sets a new value for property {@link #getAttachmentName attachmentName}.
 * 
 * The attachment property name for identification on the server side after sending data to the server.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>attachment</code>.
 * @param {string} sAttachmentName New value for property <code>attachmentName</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setAttachmentName = function(sAttachmentName) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Sets a new value for property {@link #getAttachmentUploadUrl attachmentUploadUrl}.
 * 
 * Sets the upload attachment URL for a new card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAttachmentUploadUrl New value for property <code>attachmentUploadUrl</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setAttachmentUploadUrl = function(sAttachmentUploadUrl) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Sets a new value for property {@link #getBody body}.
 * 
 * The text inside the note card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sBody New value for property <code>body</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setBody = function(sBody) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Sets a new value for property {@link #getTags tags}.
 * 
 * The list of tags selected for addition to a new note card.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object} oTags New value for property <code>tags</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setTags = function(oTags) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Sets a new value for property {@link #getThumbDown thumbDown}.
 * 
 * Sets negative indication for a new note.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bThumbDown New value for property <code>thumbDown</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setThumbDown = function(bThumbDown) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Sets a new value for property {@link #getThumbUp thumbUp}.
 * 
 * Sets positive indication for a new note.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bThumbUp New value for property <code>thumbUp</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setThumbUp = function(bThumbUp) { return new sap.suite.ui.commons.NoteTakerFeeder(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * This text is the header of a new note.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.NoteTakerFeeder} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NoteTakerFeeder.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.NoteTakerFeeder(); };


// ---- sap.suite.ui.commons.NumericTile --------------------------------------------------------------------------

/**
 * Constructor for a new NumericTile.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getUnit unit} : string</li>
 * <li>{@link #getValueColor valueColor} : sap.suite.ui.commons.InfoTileValueColor</li>
 * <li>{@link #getIndicator indicator} : sap.suite.ui.commons.DeviationIndicator (default: None)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.suite.ui.commons.InfoTile#constructor sap.suite.ui.commons.InfoTile}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control is the implementation of the InfoTile to show a numeric value.
 * @extends sap.suite.ui.commons.InfoTile
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.25.
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.NumericTile = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.NumericTile with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.commons.InfoTile.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NumericTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getIndicator indicator}.
 * 
 * The indicator arrow that shows value deviation.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.suite.ui.commons.DeviationIndicator} Value of property <code>indicator</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getIndicator = function() { return new sap.suite.ui.commons.DeviationIndicator(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.NumericTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.NumericTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getScale scale}.
 * 
 * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units.
 * 
 * @returns {string} Value of property <code>scale</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getScale = function() { return ""; };

/**
 * Gets current value of property {@link #getUnit unit}.
 * 
 * The percent sign, the currency symbol, or the unit of measure.
 * 
 * @returns {string} Value of property <code>unit</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getUnit = function() { return ""; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * @returns {string} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getValue = function() { return ""; };

/**
 * Gets current value of property {@link #getValueColor valueColor}.
 * 
 * The semantic color of the value.
 * 
 * @returns {sap.suite.ui.commons.InfoTileValueColor} Value of property <code>valueColor</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.getValueColor = function() { return new sap.suite.ui.commons.InfoTileValueColor(); };

/**
 * Sets a new value for property {@link #getIndicator indicator}.
 * 
 * The indicator arrow that shows value deviation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.suite.ui.commons.DeviationIndicator} sIndicator New value for property <code>indicator</code>
 * @returns {sap.suite.ui.commons.NumericTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setIndicator = function(sIndicator) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * Sets a new value for property {@link #getScale scale}.
 * 
 * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.suite.ui.commons.NumericTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setScale = function(sScale) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * Sets a new value for property {@link #getUnit unit}.
 * 
 * The percent sign, the currency symbol, or the unit of measure.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sUnit New value for property <code>unit</code>
 * @returns {sap.suite.ui.commons.NumericTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setUnit = function(sUnit) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.suite.ui.commons.NumericTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setValue = function(sValue) { return new sap.suite.ui.commons.NumericTile(); };

/**
 * Sets a new value for property {@link #getValueColor valueColor}.
 * 
 * The semantic color of the value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.suite.ui.commons.InfoTileValueColor} sValueColor New value for property <code>valueColor</code>
 * @returns {sap.suite.ui.commons.NumericTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.NumericTile.prototype.setValueColor = function(sValueColor) { return new sap.suite.ui.commons.NumericTile(); };


// ---- sap.suite.ui.commons.PictureZoomIn --------------------------------------------------------------------------

/**
 * Constructor for a new PictureZoomIn.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getImageSrc imageSrc} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBusyIndicator busyIndicator} : sap.ui.core.Control</li>
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
 * Shows picture in fullscreen.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated. Not Fiori.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.PictureZoomIn = function(sId,mSettings) {};
/**
 * Destroys the busyIndicator in the aggregation {@link #getBusyIndicator busyIndicator}.
 * @returns {sap.suite.ui.commons.PictureZoomIn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.destroyBusyIndicator = function() { return new sap.suite.ui.commons.PictureZoomIn(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.PictureZoomIn with name <code>sClassName</code>
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
sap.suite.ui.commons.PictureZoomIn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getBusyIndicator busyIndicator}.
 * 
 * Custom busy indicator.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.getBusyIndicator = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * Description is shown under image.
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getImageSrc imageSrc}.
 * 
 * Source for image.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>imageSrc</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.getImageSrc = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.PictureZoomIn.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.PictureZoomIn.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets the aggregated {@link #getBusyIndicator busyIndicator}.
 * @param {sap.ui.core.Control} oBusyIndicator The busyIndicator to set
 * @returns {sap.suite.ui.commons.PictureZoomIn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.setBusyIndicator = function(oBusyIndicator) { return new sap.suite.ui.commons.PictureZoomIn(); };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * Description is shown under image.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.suite.ui.commons.PictureZoomIn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.PictureZoomIn(); };

/**
 * Sets a new value for property {@link #getImageSrc imageSrc}.
 * 
 * Source for image.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sImageSrc New value for property <code>imageSrc</code>
 * @returns {sap.suite.ui.commons.PictureZoomIn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.PictureZoomIn.prototype.setImageSrc = function(sImageSrc) { return new sap.suite.ui.commons.PictureZoomIn(); };


// ---- sap.suite.ui.commons.ProcessFlow --------------------------------------------------------------------------

/**
 * Constructor for a new ProcessFlow.
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
 * <li>{@link #getFoldedCorners foldedCorners} : boolean (default: false)</li>
 * <li>{@link #getScrollable scrollable} : boolean (default: true)</li>
 * <li>{@link #getWheelZoomable wheelZoomable} : boolean (default: true)</li>
 * <li>{@link #getShowLabels showLabels} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.suite.ui.commons.ProcessFlowNode[]</li>
 * <li>{@link #getLanes lanes} : sap.suite.ui.commons.ProcessFlowLaneHeader[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:nodeTitlePress nodeTitlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:nodePress nodePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:labelPress labelPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:headerPress headerPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:onError onError} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Complex control that enables you to display documents or other items in their flow.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ProcessFlow = function(sId,mSettings) {};
/**
 * This event is fired when the header column is clicked. This event is available only in header mode, i.e. when no nodes are defined.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow lane header object.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.headerPress = function(oControlEvent) {  };

/**
 * This event is fired when a process flow connection label was clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the label information.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.labelPress = function(oControlEvent) {  };

/**
 * This event is fired when a process flow node was clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow node object.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.nodePress = function(oControlEvent) {  };

/**
 * This event is fired when a process flow node title was
 * clicked. The user can access the clicked process flow node control object which is the only argument of the event handler.
 * @event
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use nodePress event instead ( click on the node)
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This object represents the wrapped process flow node object.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.nodeTitlePress = function(oControlEvent) {  };

/**
 * This event is fired when an issue occurs with the process flow calculation. In most cases, there is an issue with the data. The console contains the detailed error description with the errors.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent This parameters contains the localized string with error message.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.onError = function(oControlEvent) {  };

/**
 * Adds some lane to the aggregation {@link #getLanes lanes}.
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *            oLane the lane to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.addLane = function(oLane) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Function applies the changes to the display state based on the requirements.
 * If any node is in the highlighted state all others are set to the dimmed state.
 * 
 * @public
 * @deprecation Since 1.38.0
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.applyNodeDisplayState = function() {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:headerPress headerPress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlow</code> itself.
 * 
 * This event is fired when the header column is clicked. This event is available only in header mode, i.e. when no nodes are defined.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachHeaderPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:labelPress labelPress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlow</code> itself.
 * 
 * This event is fired when a process flow connection label was clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachLabelPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:nodePress nodePress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlow</code> itself.
 * 
 * This event is fired when a process flow node was clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachNodePress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:nodeTitlePress nodeTitlePress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlow</code> itself.
 * 
 * This event is fired when a process flow node title was
 * clicked. The user can access the clicked process flow node control object which is the only argument of the event handler.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use nodePress event instead ( click on the node)
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachNodeTitlePress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:onError onError} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlow</code> itself.
 * 
 * This event is fired when an issue occurs with the process flow calculation. In most cases, there is an issue with the data. The console contains the detailed error description with the errors.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlow</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.attachOnError = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Destroys all the lanes in the aggregation {@link #getLanes lanes}.
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.destroyLanes = function() { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Destroys all the nodes in the aggregation {@link #getNodes nodes}.
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.destroyNodes = function() { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:headerPress headerPress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachHeaderPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:labelPress labelPress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachLabelPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:nodePress nodePress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachNodePress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:nodeTitlePress nodeTitlePress} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use nodePress event instead ( click on the node)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachNodeTitlePress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:onError onError} event of this <code>sap.suite.ui.commons.ProcessFlow</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.detachOnError = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlow with name <code>sClassName</code>
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
sap.suite.ui.commons.ProcessFlow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:headerPress headerPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] This object represents the wrapped process flow lane header object.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireHeaderPress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Fires event {@link #event:labelPress labelPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] This object represents the label information.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireLabelPress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Fires event {@link #event:nodePress nodePress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] This object represents the wrapped process flow node object.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireNodePress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Fires event {@link #event:nodeTitlePress nodeTitlePress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] This object represents the wrapped process flow node object.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use nodePress event instead ( click on the node)
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireNodeTitlePress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Fires event {@link #event:onError onError} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] This parameters contains the localized string with error message.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.fireOnError = function(mParameters) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Function returns the nodeId of the node which is focused.
 * 
 * @public
 * @returns {string} The id of focused node
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getFocusedNode = function() { return ""; };

/**
 * Gets current value of property {@link #getFoldedCorners foldedCorners}.
 * 
 * This property defines the folded corners for the single node control. The following values exist:
 * - true: means folded corner
 * - false/null/undefined: means normal corner
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>foldedCorners</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getFoldedCorners = function() { return false; };

/**
 * Returns a lane from the aggregation named 'lanes' by comparing the laneId property of lane.
 * 
 * @public
 * @since 1.46.0
 * @param {string} sLaneId ID of the lane to return
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} the requested lane or null
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getLane = function(sLaneId) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Gets content of aggregation {@link #getLanes lanes}.
 * 
 * This is a header of the table for the process flow control.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getLanes = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ProcessFlow.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a node from the aggregation named 'nodes' by comparing the nodeId property of node.
 * 
 * @public
 * @since 1.46.0
 * @param {string} sNodeId ID of node to return
 * @returns {sap.suite.ui.commons.ProcessFlowNode} the requested node or null
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getNode = function(sNodeId) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Gets content of aggregation {@link #getNodes nodes}.
 * 
 * This is the aggregation of nodes in the process flow control.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowNode[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getNodes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getScrollable scrollable}.
 * 
 * By default, the control body is embedded into a scroll container of fixed size, so the user
 * can put the control into a fixed size layout.
 * When the control body (the graph) gets larger, the container cuts the overflowing parts of the graph and the cut parts can be displayed by scrolling the control body.
 * When the control body fits into the container limits, obviously no scrolling is possible (and makes sense).
 * 
 * The scrolling feature can be turned off by setting this property value to false,
 * so the width/height of the whole control will change as the flow graph gets smaller/larger.
 * In this case the control body could not be scrolled, as the control body size matches the control container size.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>scrollable</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getScrollable = function() { return false; };

/**
 * Gets current value of property {@link #getShowLabels showLabels}.
 * 
 * Defines if the connection labels are shown or not.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getShowLabels = function() { return false; };

/**
 * Gets current value of property {@link #getWheelZoomable wheelZoomable}.
 * 
 * Defines if semantic zooming by mouse wheel events on desktop browsers is enabled.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>wheelZoomable</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getWheelZoomable = function() { return false; };

/**
 * Function returns current zoom level.
 * 
 * @public
 * @returns {string} The zoomLevel
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.getZoomLevel = function() { return ""; };

/**
 * Checks for the provided <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code> in the aggregation {@link #getLanes lanes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *           oLane The lane whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.indexOfLane = function(oLane) { return 0; };

/**
 * Checks for the provided <code>sap.suite.ui.commons.ProcessFlowNode</code> in the aggregation {@link #getNodes nodes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *           oNode The node whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * Inserts a lane into the aggregation {@link #getLanes lanes}.
 * 
 * @param {sap.suite.ui.commons.ProcessFlowLaneHeader}
 *            oLane the lane to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the lane should be inserted at; for
 *              a negative value of <code>iIndex</code>, the lane is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the lane is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.insertLane = function(oLane,iIndex) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Inserts a node into the aggregation {@link #getNodes nodes}.
 * 
 * @param {sap.suite.ui.commons.ProcessFlowNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.insertNode = function(oNode,iIndex) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Function checks consistency of the node array. It checks,
 * if all child elements defined for the nodes are also presented as the nodes themselves
 * 
 * @public
 * @param elements Map of node IDs to NodeElements. Expectation is to have at least 1 element there. No check for empty array.
 * @returns {boolean} Value, where true means no activity, false means set the focus on top left root node
 * @throws array of error messages produced during the consistency check
 * @deprecation Since 1.38.0
 * 
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation#checkInputNodeConsistency = function(elements) { return false; };

/**
 * Creates the matrix where the nodes are already positioned correctly.
 * 
 * @public
 * @param currentElement actually processed element
 * @param elements map of all the available elements
 * @param matrix the updated virtual matrix
 * @returns The updated virtual matrix
 * @deprecation Since 1.38.0
 * 
 */
sap.suite.ui.commons.ProcessFlow.InternalMatrixCalculation#processCurrentElement = function(currentElement,elements,matrix) {  };

/**
 * Optimizes the layout and updates the model. To be used carefully because of its possible side effects on the performance.
 * 
 * @public
 * @param {boolean} isOptimized True if the layout should be optimized; false if the layout should be brought to the initial state.
 * @returns {sap.suite.ui.commons.ProcessFlow} this to allow method chaining
 * @since 1.44
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.optimizeLayout = function(isOptimized) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Removes all the controls from the aggregation {@link #getLanes lanes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeAllLanes = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getNodes nodes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.ProcessFlowNode[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeAllNodes = function() { return new Array(); };

/**
 * Removes a lane from the aggregation {@link #getLanes lanes}.
 * 
 * @param {int | string | sap.suite.ui.commons.ProcessFlowLaneHeader} vLane The lane to remove or its index or id
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} The removed lane or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeLane = function(vLane) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Removes a node from the aggregation {@link #getNodes nodes}.
 * 
 * @param {int | string | sap.suite.ui.commons.ProcessFlowNode} vNode The node to remove or its index or id
 * @returns {sap.suite.ui.commons.ProcessFlowNode} The removed node or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.removeNode = function(vNode) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets the focus to the given Label
 * 
 * @public
 * @param {sap.suite.ui.commons.ProcessFlowConnectionlabel} Label to focus
 * @since 1.32
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setFocusToLabel = function(Label) {  };

/**
 * Sets a new value for property {@link #getFoldedCorners foldedCorners}.
 * 
 * This property defines the folded corners for the single node control. The following values exist:
 * - true: means folded corner
 * - false/null/undefined: means normal corner
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFoldedCorners New value for property <code>foldedCorners</code>
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setFoldedCorners = function(bFoldedCorners) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Sets a new value for property {@link #getScrollable scrollable}.
 * 
 * By default, the control body is embedded into a scroll container of fixed size, so the user
 * can put the control into a fixed size layout.
 * When the control body (the graph) gets larger, the container cuts the overflowing parts of the graph and the cut parts can be displayed by scrolling the control body.
 * When the control body fits into the container limits, obviously no scrolling is possible (and makes sense).
 * 
 * The scrolling feature can be turned off by setting this property value to false,
 * so the width/height of the whole control will change as the flow graph gets smaller/larger.
 * In this case the control body could not be scrolled, as the control body size matches the control container size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bScrollable New value for property <code>scrollable</code>
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setScrollable = function(bScrollable) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Sets the path between source and target node to selected status and rerenders the control. If parameters are null, sets all nodes to normal status.
 * 
 * @public
 * @param {string} sourceNodeId of the path or null
 * @param {string} targetNodeId of the path or null
 * @since 1.32
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setSelectedPath = function(sourceNodeId,targetNodeId) {  };

/**
 * Overwrites setShowLabels of ProcessFlow control to apply additional functionality.
 * 
 * @public
 * @param {boolean} value New value for showLabels
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setShowLabels = function(value) {  };

/**
 * Sets a new value for property {@link #getWheelZoomable wheelZoomable}.
 * 
 * Defines if semantic zooming by mouse wheel events on desktop browsers is enabled.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bWheelZoomable New value for property <code>wheelZoomable</code>
 * @returns {sap.suite.ui.commons.ProcessFlow} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setWheelZoomable = function(bWheelZoomable) { return new sap.suite.ui.commons.ProcessFlow(); };

/**
 * Function sets the zoom level.
 * 
 * @public
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} zoomLevel The new zoom level.
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.setZoomLevel = function(zoomLevel) {  };

/**
 * Updates the model and rerenders the control.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.updateModel = function() {  };

/**
 * Updates the nodes and rerenders the control.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.updateNodesOnly = function() {  };

/**
 * Function sets new zoom level with higher level of details. Having max details it stays as it is.
 * 
 * @public
 * @returns {string} The updated zoomLevel
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.zoomIn = function() { return ""; };

/**
 * Function sets new zoom level with smaller level of details. Having the least detail view it stays as it is.
 * 
 * @public
 * @returns {string} The updated zoomLevel
 * 
 */
sap.suite.ui.commons.ProcessFlow.prototype.zoomOut = function() { return ""; };


// ---- sap.suite.ui.commons.ProcessFlowConnection --------------------------------------------------------------------------

/**
 * Constructor for a new ProcessFlowConnection.
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
 * <li>{@link #getDrawData drawData} : object[]</li>
 * <li>{@link #getZoomLevel zoomLevel} : sap.suite.ui.commons.ProcessFlowZoomLevel (default: Two)</li>
 * <li>{@link #getType type} : sap.suite.ui.commons.ProcessFlowConnectionType (default: Normal)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.ProcessFlowConnectionState (default: Regular)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
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
 * This control is used inside the ProcessFlow control to connect process flow node A with process flow node B in respect to the style(x) chosen by the application.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowConnection with name <code>sClassName</code>
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
sap.suite.ui.commons.ProcessFlowConnection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDrawData drawData}.
 * 
 * This is an array of the following attributes for one element:
 * 1. flowLine (string) - A connection definition where the line should be drawn. A string which defines a course of a flow line. A flow line is a connection between nodes in a process flow control. The string can contain the following characters:
 * - "r" for right,
 * - "t" for top,
 * - "l" for left,
 * - "b" for bottom.
 * 2. targetNodeState (ProcessFlowNodeState) - A copy of the target node status. If the target node is created, the line is solid.
 * If the target node is planned, the line is dashed.
 * 3. displayState (ProcessFlowDisplayState) - Display state of the node. This property defines if the node is displayed regularly, highlighted, or dimmed in combination with a selected visual style of the control.
 * 4. hasArrow (boolean) - Indicates if the line has an arrow on the right end.
 * 
 * @returns {object[]} Value of property <code>drawData</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.getDrawData = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ProcessFlowConnection.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * State of the connection.
 * 
 * Default value is <code>Regular</code>.
 * @returns {sap.suite.ui.commons.ProcessFlowConnectionState} Value of property <code>state</code>
 * 
 * @deprecated Since version 1.32.
 * State is deprecated because of no usages. There will be no replacement.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.getState = function() { return new sap.suite.ui.commons.ProcessFlowConnectionState(); };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Type of the connection.
 * 
 * Default value is <code>Normal</code>.
 * @returns {sap.suite.ui.commons.ProcessFlowConnectionType} Value of property <code>type</code>
 * 
 * @deprecated Since version 1.32.
 * Type is deprecated because of no usages. There will be no replacement.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.getType = function() { return new sap.suite.ui.commons.ProcessFlowConnectionType(); };

/**
 * Gets current value of property {@link #getZoomLevel zoomLevel}.
 * 
 * This is a current zoom level for the connection. The point of connection to the node is derived from zoom level.
 * 
 * Default value is <code>Two</code>.
 * @returns {sap.suite.ui.commons.ProcessFlowZoomLevel} Value of property <code>zoomLevel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.getZoomLevel = function() { return new sap.suite.ui.commons.ProcessFlowZoomLevel(); };

/**
 * Sets a new value for property {@link #getDrawData drawData}.
 * 
 * This is an array of the following attributes for one element:
 * 1. flowLine (string) - A connection definition where the line should be drawn. A string which defines a course of a flow line. A flow line is a connection between nodes in a process flow control. The string can contain the following characters:
 * - "r" for right,
 * - "t" for top,
 * - "l" for left,
 * - "b" for bottom.
 * 2. targetNodeState (ProcessFlowNodeState) - A copy of the target node status. If the target node is created, the line is solid.
 * If the target node is planned, the line is dashed.
 * 3. displayState (ProcessFlowDisplayState) - Display state of the node. This property defines if the node is displayed regularly, highlighted, or dimmed in combination with a selected visual style of the control.
 * 4. hasArrow (boolean) - Indicates if the line has an arrow on the right end.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object[]} sDrawData New value for property <code>drawData</code>
 * @returns {sap.suite.ui.commons.ProcessFlowConnection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.setDrawData = function(sDrawData) { return new sap.suite.ui.commons.ProcessFlowConnection(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * State of the connection.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Regular</code>.
 * @param {sap.suite.ui.commons.ProcessFlowConnectionState} sState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.ProcessFlowConnection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.32.
 * State is deprecated because of no usages. There will be no replacement.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.setState = function(sState) { return new sap.suite.ui.commons.ProcessFlowConnection(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Type of the connection.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Normal</code>.
 * @param {sap.suite.ui.commons.ProcessFlowConnectionType} sType New value for property <code>type</code>
 * @returns {sap.suite.ui.commons.ProcessFlowConnection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.32.
 * Type is deprecated because of no usages. There will be no replacement.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.setType = function(sType) { return new sap.suite.ui.commons.ProcessFlowConnection(); };

/**
 * Sets a new value for property {@link #getZoomLevel zoomLevel}.
 * 
 * This is a current zoom level for the connection. The point of connection to the node is derived from zoom level.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Two</code>.
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} sZoomLevel New value for property <code>zoomLevel</code>
 * @returns {sap.suite.ui.commons.ProcessFlowConnection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.setZoomLevel = function(sZoomLevel) { return new sap.suite.ui.commons.ProcessFlowConnection(); };


// ---- sap.suite.ui.commons.ProcessFlowConnectionLabel --------------------------------------------------------------------------

/**
 * Constructor for a new ProcessFlowConnectionLabel.
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
 * <li>{@link #getPriority priority} : int (default: 0)</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.ProcessFlowConnectionLabelState (default: Neutral)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Button#constructor sap.m.Button}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control is used inside the ProcessFlow control providing information on connections. Using this control, you need to take care of the lifetime handling instance as instances of this control are not destroyed automatically.
 * @extends sap.m.Button
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowConnectionLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Button.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ProcessFlowConnectionLabel.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPriority priority}.
 * 
 * Priority is used to define which label is visible if the state of multiple labels is equal. Assuming there are multiple labels with equal state (e.g. Negative state appears twice), the priority decides which one needs to be selected.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>priority</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel.prototype.getPriority = function() { return 0; };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * Specifies the state of the connection label. If multiple labels are available for one connection, the label will be selected by state based on the following order: Neutral -> Positive -> Critical -> Negative.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.suite.ui.commons.ProcessFlowConnectionLabelState} Value of property <code>state</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel.prototype.getState = function() { return new sap.suite.ui.commons.ProcessFlowConnectionLabelState(); };

/**
 * Sets a new value for property {@link #getPriority priority}.
 * 
 * Priority is used to define which label is visible if the state of multiple labels is equal. Assuming there are multiple labels with equal state (e.g. Negative state appears twice), the priority decides which one needs to be selected.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iPriority New value for property <code>priority</code>
 * @returns {sap.suite.ui.commons.ProcessFlowConnectionLabel} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel.prototype.setPriority = function(iPriority) { return new sap.suite.ui.commons.ProcessFlowConnectionLabel(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * Specifies the state of the connection label. If multiple labels are available for one connection, the label will be selected by state based on the following order: Neutral -> Positive -> Critical -> Negative.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.suite.ui.commons.ProcessFlowConnectionLabelState} sState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.ProcessFlowConnectionLabel} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabel.prototype.setState = function(sState) { return new sap.suite.ui.commons.ProcessFlowConnectionLabel(); };


// ---- sap.suite.ui.commons.ProcessFlowConnectionLabelState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowConnectionLabelState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowConnectionState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowConnectionState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowConnectionType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowConnectionType.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowDisplayState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowDisplayState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowLaneHeader --------------------------------------------------------------------------

/**
 * Constructor for a new ProcessFlowLaneHeader.
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
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI</li>
 * <li>{@link #getPosition position} : int</li>
 * <li>{@link #getLaneId laneId} : string</li>
 * <li>{@link #getState state} : object</li>
 * <li>{@link #getZoomLevel zoomLevel} : sap.suite.ui.commons.ProcessFlowZoomLevel</li>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control gives you an overview of documents or items used in a process flow. The process flow is represented by donut chart sections that are colored according to the status of documents. This control can be used in two different ways. If you use it standalone, an event is triggered and can be caught to display the node map. If you use it with nodes or documents, it gives you an overview of the documents or items used in the process flow, which is represented by the donut chart sections.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader = function(sId,mSettings) {};
/**
 * This event is fired when the header is clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent tbd
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code> itself.
 * 
 * This event is fired when the header is clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowLaneHeader with name <code>sClassName</code>
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
sap.suite.ui.commons.ProcessFlowLaneHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] tbd
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Gets current value of property {@link #getIconSrc iconSrc}.
 * 
 * Icon to be displayed in the middle of the control.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconSrc</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getIconSrc = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getLaneId laneId}.
 * 
 * Internal identification of the header.
 * 
 * @returns {string} Value of property <code>laneId</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getLaneId = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ProcessFlowLaneHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Overrides the getter method for property position. It returns the position that was changed due to the artificial merged lanes.
 * Otherwise it returns the position set as a property.
 * 
 * @public
 * @returns {int} Lane position
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getPosition = function() { return 0; };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * Array of the ProcessFlowLaneState. The user can explicitly set an array with the two properties state and value of the state, for example [state:sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 20]. Possible states are states are positive, negative, neutral, and planned.
 * 
 * @returns {object} Value of property <code>state</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getState = function() { return new Object(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Text information that is displayed in the control.
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getZoomLevel zoomLevel}.
 * 
 * Current zoom level for the lane header.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowZoomLevel} Value of property <code>zoomLevel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getZoomLevel = function() { return new sap.suite.ui.commons.ProcessFlowZoomLevel(); };

/**
 * Sets a new value for property {@link #getIconSrc iconSrc}.
 * 
 * Icon to be displayed in the middle of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconSrc New value for property <code>iconSrc</code>
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setIconSrc = function(sIconSrc) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Sets a new value for property {@link #getLaneId laneId}.
 * 
 * Internal identification of the header.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLaneId New value for property <code>laneId</code>
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setLaneId = function(sLaneId) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Sets a new value for property {@link #getPosition position}.
 * 
 * Position of the lane in the process flow control. Numbering of the position has to be sequential and needs to start from 0.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iPosition New value for property <code>position</code>
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setPosition = function(iPosition) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * Array of the ProcessFlowLaneState. The user can explicitly set an array with the two properties state and value of the state, for example [state:sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 20]. Possible states are states are positive, negative, neutral, and planned.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setState = function(oState) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Text information that is displayed in the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setText = function(sText) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };

/**
 * Sets a new value for property {@link #getZoomLevel zoomLevel}.
 * 
 * Current zoom level for the lane header.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} sZoomLevel New value for property <code>zoomLevel</code>
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.setZoomLevel = function(sZoomLevel) { return new sap.suite.ui.commons.ProcessFlowLaneHeader(); };


// ---- sap.suite.ui.commons.ProcessFlowLaneState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowLaneState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowNode --------------------------------------------------------------------------

/**
 * Constructor for a new ProcessFlowNode.
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
 * <li>{@link #getIsTitleClickable isTitleClickable} : boolean (default: false)</li>
 * <li>{@link #getLaneId laneId} : string</li>
 * <li>{@link #getNodeId nodeId} : string</li>
 * <li>{@link #getState state} : sap.suite.ui.commons.ProcessFlowNodeState (default: Neutral)</li>
 * <li>{@link #getType type} : sap.suite.ui.commons.ProcessFlowNodeType (default: Single)</li>
 * <li>{@link #getChildren children} : any[]</li>
 * <li>{@link #getTitleAbbreviation titleAbbreviation} : string</li>
 * <li>{@link #getStateText stateText} : string</li>
 * <li>{@link #getTexts texts} : string[]</li>
 * <li>{@link #getHighlighted highlighted} : boolean (default: false)</li>
 * <li>{@link #getFocused focused} : boolean (default: false)</li>
 * <li>{@link #getTag tag} : object</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getParents parents} : (sap.ui.core.ID | sap.suite.ui.commons.ProcessFlowNode)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:titlePress titlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This control enables you to see documents (or other items) in respect to their statuses – positive, negative, neutral, planned, planned negative. In addition to the node title (which can be optionally a hyperlink) also two other text fields are provided and can be filled. The process flow nodes consider all styles depending on the status they are in. The user can update or change the content of the node. The content of the node can be also filtered according to updated data and specific parameters set. This means that also the node’s style is affected.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ProcessFlowNode = function(sId,mSettings) {};
/**
 * This event is fired when the user clicks on the node. However, this event is not fired if the titlePress event has been fired.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent The node identification.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.press = function(oControlEvent) {  };

/**
 * This event handler is executed when the user clicks the node title. This event is fired only when the title is clickable (isTitleClickable equals true).
 * @event
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use Press event instead ( click on the node)
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent The node identification.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.titlePress = function(oControlEvent) {  };

/**
 * Adds some parent into the association {@link #getParents parents}.
 * 
 * @param {sap.ui.core.ID | sap.suite.ui.commons.ProcessFlowNode} vParent the parents to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.addParent = function(vParent) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlowNode</code> itself.
 * 
 * This event is fired when the user clicks on the node. However, this event is not fired if the titlePress event has been fired.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowNode</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:titlePress titlePress} event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ProcessFlowNode</code> itself.
 * 
 * This event handler is executed when the user clicks the node title. This event is fired only when the title is clickable (isTitleClickable equals true).
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowNode</code> itself
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use Press event instead ( click on the node)
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.attachTitlePress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:titlePress titlePress} event of this <code>sap.suite.ui.commons.ProcessFlowNode</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use Press event instead ( click on the node)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.detachTitlePress = function(fnFunction,oListener) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowNode with name <code>sClassName</code>
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
sap.suite.ui.commons.ProcessFlowNode.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] The node identification.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.firePress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Fires event {@link #event:titlePress titlePress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.oEvent] The node identification.
 * 
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 * @deprecated Since version 1.26.
 * Should not be used any longer, use Press event instead ( click on the node)
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.fireTitlePress = function(mParameters) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Gets current value of property {@link #getChildren children}.
 * 
 * Defines an array of children of the node.
 * 
 * @returns {any[]} Value of property <code>children</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getChildren = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFocused focused}.
 * 
 * The parameter defines if the node should be displayed in focus state.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>focused</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getFocused = function() { return false; };

/**
 * Gets current value of property {@link #getHighlighted highlighted}.
 * 
 * The parameter defines if the node should be displayed in highlighted state.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>highlighted</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getHighlighted = function() { return false; };

/**
 * Gets current value of property {@link #getIsTitleClickable isTitleClickable}.
 * 
 * Specifies if the node title is clickable.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isTitleClickable</code>
 * 
 * @deprecated Since version 1.26.
 * According to the new requirement there should be only one click event for each node (click on the whole node – see Press event) that is why titlePress event should not be used any longer. Hence isTitleClickable should not be used either.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getIsTitleClickable = function() { return false; };

/**
 * Overwrites the getter method for property laneId. It returns the artificially merged laneId, if the node is in such a lane.
 * Otherwise it returns the laneId set in the model.
 * 
 * @public
 * 
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getLaneId = function() {  };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ProcessFlowNode.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNodeId nodeId}.
 * 
 * Node identifier.
 * 
 * @returns {string} Value of property <code>nodeId</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getNodeId = function() { return ""; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getParents parents}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getParents = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelected selected}.
 * 
 * The parameter defines if the node should be displayed in selected state.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>selected</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property {@link #getState state}.
 * 
 * State of the node.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.suite.ui.commons.ProcessFlowNodeState} Value of property <code>state</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getState = function() { return new sap.suite.ui.commons.ProcessFlowNodeState(); };

/**
 * Gets current value of property {@link #getStateText stateText}.
 * 
 * Description of the state, for example "Status OK".
 * 
 * @returns {string} Value of property <code>stateText</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getStateText = function() { return ""; };

/**
 * Gets current value of property {@link #getTag tag}.
 * 
 * The user-defined object which is returned back to the user by a node click event.
 * 
 * @returns {object} Value of property <code>tag</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTag = function() { return new Object(); };

/**
 * Gets current value of property {@link #getTexts texts}.
 * 
 * The property contains the additional texts on the node. The expected type is array of strings. One array must not contain more than two strings. Additional strings in the array will be ignored.
 * 
 * @returns {string[]} Value of property <code>texts</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTexts = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The node title.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitleAbbreviation titleAbbreviation}.
 * 
 * Title abbreviation is used in zoom level 'Three'.
 * 
 * @returns {string} Value of property <code>titleAbbreviation</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getTitleAbbreviation = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Type of the node.
 * 
 * Default value is <code>Single</code>.
 * @returns {sap.suite.ui.commons.ProcessFlowNodeType} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.getType = function() { return new sap.suite.ui.commons.ProcessFlowNodeType(); };

/**
 * Removes all the controls in the association named {@link #getParents parents}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.removeAllParents = function() { return new Array(); };

/**
 * Removes an parent from the association named {@link #getParents parents}.
 * @param {int | sap.ui.core.ID | sap.suite.ui.commons.ProcessFlowNode} vParent The parent to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed parent or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.removeParent = function(vParent) { return new sap.ui.core.ID(); };

/**
 * Sets a new value for property {@link #getChildren children}.
 * 
 * Defines an array of children of the node.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any[]} sChildren New value for property <code>children</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setChildren = function(sChildren) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getFocused focused}.
 * 
 * The parameter defines if the node should be displayed in focus state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFocused New value for property <code>focused</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setFocused = function(bFocused) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getHighlighted highlighted}.
 * 
 * The parameter defines if the node should be displayed in highlighted state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHighlighted New value for property <code>highlighted</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setHighlighted = function(bHighlighted) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getIsTitleClickable isTitleClickable}.
 * 
 * Specifies if the node title is clickable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsTitleClickable New value for property <code>isTitleClickable</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.26.
 * According to the new requirement there should be only one click event for each node (click on the whole node – see Press event) that is why titlePress event should not be used any longer. Hence isTitleClickable should not be used either.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setIsTitleClickable = function(bIsTitleClickable) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getLaneId laneId}.
 * 
 * Specifies the assignment of the node to the respective lane.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLaneId New value for property <code>laneId</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setLaneId = function(sLaneId) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getNodeId nodeId}.
 * 
 * Node identifier.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sNodeId New value for property <code>nodeId</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setNodeId = function(sNodeId) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getSelected selected}.
 * 
 * The parameter defines if the node should be displayed in selected state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setSelected = function(bSelected) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getState state}.
 * 
 * State of the node.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.suite.ui.commons.ProcessFlowNodeState} sState New value for property <code>state</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setState = function(sState) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getStateText stateText}.
 * 
 * Description of the state, for example "Status OK".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStateText New value for property <code>stateText</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setStateText = function(sStateText) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * The user-defined object which is returned back to the user by a node click event.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oTag New value for property <code>tag</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTag = function(oTag) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getTexts texts}.
 * 
 * The property contains the additional texts on the node. The expected type is array of strings. One array must not contain more than two strings. Additional strings in the array will be ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string[]} sTexts New value for property <code>texts</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTexts = function(sTexts) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The node title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getTitleAbbreviation titleAbbreviation}.
 * 
 * Title abbreviation is used in zoom level 'Three'.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitleAbbreviation New value for property <code>titleAbbreviation</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setTitleAbbreviation = function(sTitleAbbreviation) { return new sap.suite.ui.commons.ProcessFlowNode(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Type of the node.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Single</code>.
 * @param {sap.suite.ui.commons.ProcessFlowNodeType} sType New value for property <code>type</code>
 * @returns {sap.suite.ui.commons.ProcessFlowNode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNode.prototype.setType = function(sType) { return new sap.suite.ui.commons.ProcessFlowNode(); };


// ---- sap.suite.ui.commons.ProcessFlowNodeState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowNodeState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowNodeType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowNodeType.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ProcessFlowZoomLevel --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ProcessFlowZoomLevel.toString = function() { return ""; };

// ---- sap.suite.ui.commons.RepeaterViewConfiguration --------------------------------------------------------------------------

/**
 * Constructor for a new RepeaterViewConfiguration.
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
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getPath path} : string</li>
 * <li>{@link #getItemMinWidth itemMinWidth} : int (default: -1)</li>
 * <li>{@link #getNumberOfTiles numberOfTiles} : int (default: -1)</li>
 * <li>{@link #getResponsive responsive} : any (default: false)</li>
 * <li>{@link #getExternal external} : boolean (default: false)</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getItemHeight itemHeight} : int</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * <li>{@link #getExternalRepresentation externalRepresentation} : sap.ui.core.Control</li>
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
 * A configuration control defining how the content of the sap.suite.ui.commons.ViewRepeater control is displayed and what data is bound.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Standard Fiori technology should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration = function(sId,mSettings) {};
/**
 * Destroys the externalRepresentation in the aggregation {@link #getExternalRepresentation externalRepresentation}.
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.destroyExternalRepresentation = function() { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Destroys the template in the aggregation {@link #getTemplate template}.
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.destroyTemplate = function() { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.RepeaterViewConfiguration with name <code>sClassName</code>
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
sap.suite.ui.commons.RepeaterViewConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getExternal external}.
 * 
 * Indicates if the external representation of this view is rendered instead of the row repeater's own content.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>external</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getExternal = function() { return false; };

/**
 * Gets content of aggregation {@link #getExternalRepresentation externalRepresentation}.
 * 
 * The control to be rendered instead of sap.suite.ui.commons.ViewRepeater's own content. Only used if the "external" property is set to true. This allows you to create custom views, for example, Table views. The sap.suite.ui.commons.ViewRepeater control will share its model with this control if the control does not have its own model.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getExternalRepresentation = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIconHovered iconHovered}.
 * 
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is hovered.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconHovered</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIconSelected iconSelected}.
 * 
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is selected.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>iconSelected</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getItemHeight itemHeight}.
 * 
 * The height of the tile in this view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 * 
 * @returns {int} Value of property <code>itemHeight</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getItemHeight = function() { return 0; };

/**
 * Gets current value of property {@link #getItemMinWidth itemMinWidth}.
 * 
 * The minimal width of the tile in this view. Only applicable if "responsive" property is set to true.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>itemMinWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getItemMinWidth = function() { return 0; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.RepeaterViewConfiguration.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNumberOfTiles numberOfTiles}.
 * 
 * The number of tiles/rows that will be shown on a single page in this view.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>numberOfTiles</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getNumberOfTiles = function() { return 0; };

/**
 * Gets current value of property {@link #getPath path}.
 * 
 * A path used for rows/titles data binding.
 * 
 * @returns {string} Value of property <code>path</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getPath = function() { return ""; };

/**
 * Gets current value of property {@link #getResponsive responsive}.
 * 
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 * 
 * Default value is <code>false</code>.
 * @returns {any} Value of property <code>responsive</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getResponsive = function() { return null; };

/**
 * Gets content of aggregation {@link #getTemplate template}.
 * 
 * The control used as a template while displaying rows/tiles in this view. It should not have fixed width wider than defined by the "itemMinWidth" property, otherwise some content may appear cropped.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getTemplate = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the view to be displayed in sap.suite.ui.commons.ViewRepeater view selector. If neither this nor "icon" property are defined, the default title "View ##" will be shown, where ## is an index number of the view in View Repeater starting from 1.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.getTitle = function() { return ""; };

/**
 * Sets a new value for property {@link #getExternal external}.
 * 
 * Indicates if the external representation of this view is rendered instead of the row repeater's own content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExternal New value for property <code>external</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setExternal = function(bExternal) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets the aggregated {@link #getExternalRepresentation externalRepresentation}.
 * @param {sap.ui.core.Control} oExternalRepresentation The externalRepresentation to set
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setExternalRepresentation = function(oExternalRepresentation) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getIconHovered iconHovered}.
 * 
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is hovered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconHovered New value for property <code>iconHovered</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setIconHovered = function(sIconHovered) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getIconSelected iconSelected}.
 * 
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is selected.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIconSelected New value for property <code>iconSelected</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setIconSelected = function(sIconSelected) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getItemHeight itemHeight}.
 * 
 * The height of the tile in this view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iItemHeight New value for property <code>itemHeight</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setItemHeight = function(iItemHeight) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getItemMinWidth itemMinWidth}.
 * 
 * The minimal width of the tile in this view. Only applicable if "responsive" property is set to true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iItemMinWidth New value for property <code>itemMinWidth</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setItemMinWidth = function(iItemMinWidth) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getNumberOfTiles numberOfTiles}.
 * 
 * The number of tiles/rows that will be shown on a single page in this view.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iNumberOfTiles New value for property <code>numberOfTiles</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setNumberOfTiles = function(iNumberOfTiles) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getPath path}.
 * 
 * A path used for rows/titles data binding.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPath New value for property <code>path</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setPath = function(sPath) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getResponsive responsive}.
 * 
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {any} oResponsive New value for property <code>responsive</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setResponsive = function(oResponsive) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets the aggregated {@link #getTemplate template}.
 * @param {sap.ui.core.Control} oTemplate The template to set
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setTemplate = function(oTemplate) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of the view to be displayed in sap.suite.ui.commons.ViewRepeater view selector. If neither this nor "icon" property are defined, the default title "View ##" will be shown, where ## is an index number of the view in View Repeater starting from 1.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.RepeaterViewConfiguration.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };


// ---- sap.suite.ui.commons.SelectionState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.SelectionState.toString = function() { return ""; };

// ---- sap.suite.ui.commons.SplitButton --------------------------------------------------------------------------

/**
 * Constructor for a new SplitButton.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getLite lite} : boolean (default: false)</li>
 * <li>{@link #getStyle style} : sap.ui.commons.ButtonStyle (default: Default)</li>
 * <li>{@link #getStyled styled} : boolean (default: true)</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getText text} : string (default: )</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenu menu} : sap.ui.commons.Menu</li>
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
 * The Split Button Control is a composite control that consists of a default-action Button and a Menu Button control.
 * The default-action button control represents a simple push button. It is used for initiating actions, such as save or print. It can contain some text, an icon, or both; the order of the two can be configured. The action initiated by this button is considered to be the default action for the control, and it must be one of the selections defined in the Menu Button menu.
 * The Menu Button control is a button that opens a menu upon user's click. MenuButton is a composition of the Menu control and the Button control and thus inheriting all features. When a menu item is selected by the user, MenuButton throws an event called itemSelected. The event transfers the itemId of the selected item. As an alternative, the button press event can be used which has a similar behavior.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated. Not Fiori.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.SplitButton = function(sId,mSettings) {};
/**
 * Destroy the menu.
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.destroyMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.SplitButton with name <code>sClassName</code>
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
sap.suite.ui.commons.SplitButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon to be displayed as graphical element within the action button.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIconFirst iconFirst}.
 * 
 * If set to true (default), the display sequence is 1. icon 2. control text .
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>iconFirst</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getIconFirst = function() { return false; };

/**
 * Gets current value of property {@link #getLite lite}.
 * 
 * The split button is rendered as lite split button.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>lite</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getLite = function() { return false; };

/**
 * Return the menu.
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getMenu = function() { return new sap.ui.commons.Menu(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.SplitButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.SplitButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getStyle style}.
 * 
 * Style of the control (e.g. emphasized, accept)
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.commons.ButtonStyle} Value of property <code>style</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getStyle = function() { return new sap.ui.commons.ButtonStyle(); };

/**
 * Gets current value of property {@link #getStyled styled}.
 * 
 * Indicatied if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>styled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getStyled = function() { return false; };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Text to be displayed for the action button.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Invisible split buttons are not rendered
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.getVisible = function() { return false; };

/**
 * set enabled property for the control
 * 
 * @param bEnabled
 *                {boolean}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setEnabled = function(bEnabled) {  };

/**
 * set icon (image) to be displayed in action button
 * 
 * @param sIcon
 *                {sap.ui.core.URI}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setIcon = function(sIcon) {  };

/**
 * set if the icon for the action button be displayed before or after text
 * 
 * @param bIconFirst
 *                {boolean}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setIconFirst = function(bIconFirst) {  };

/**
 * set lite property for the control
 * 
 * @param bLite
 *                {boolean}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setLite = function(bLite) {  };

/**
 * Set the menu to the button and set menu item for the action button. The menu item for action button must exist in the menu. If it doesn't exist the first menu item is set by
 * default.
 * 
 * @param {sap.ui.commons.Menu} oMenu
 * @param {sap.ui.commons.MenuItem} oMenuItem
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setMenu = function(oMenu,oMenuItem) { return new sap.suite.ui.commons.SplitButton(); };

/**
 * set style for the control
 * 
 * @param oStyle
 *                {sap.ui.commons.ButtonStyle}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setStyle = function(oStyle) {  };

/**
 * set if the control is styled or not
 * 
 * @param bStyled
 *                {boolean}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setStyled = function(bStyled) {  };

/**
 * set text for the action button
 * 
 * @param sText
 *                {string}
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setText = function(sText) {  };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Invisible split buttons are not rendered
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.suite.ui.commons.SplitButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.SplitButton.prototype.setVisible = function(bVisible) { return new sap.suite.ui.commons.SplitButton(); };


// ---- sap.suite.ui.commons.TargetFilter --------------------------------------------------------------------------

/**
 * Constructor for a new TargetFilter.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getColumns columns} : sap.suite.ui.commons.TargetFilterColumn[]</li>
 * <li>{@link #getMeasureColumn measureColumn} : sap.suite.ui.commons.TargetFilterMeasureColumn</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedColumns selectedColumns} : (sap.ui.core.ID | sap.suite.ui.commons.TargetFilterColumn)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The analytical filter control. The control works only with the OData model connected to the analytical OData service (for example, HANA XS Analytical view exposed as an OData service).
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TargetFilter = function(sId,mSettings) {};
/**
 * This event is fired if the user changes a selected filter set to the filter set used for the last search.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.cancel = function(oControlEvent) {  };

/**
 * This event is fired if the user changes a selected filter set.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.filterChange = function(oControlEvent) {  };

/**
 * This event is fired if the user chooses the Show Selected link.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.search = function(oControlEvent) {  };

/**
 * Adds some column to the aggregation {@link #getColumns columns}.
 * @param {sap.suite.ui.commons.TargetFilterColumn}
 *            oColumn the column to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.addColumn = function(oColumn) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Adds some selectedColumn into the association {@link #getSelectedColumns selectedColumns}.
 * 
 * @param {sap.ui.core.ID | sap.suite.ui.commons.TargetFilterColumn} vSelectedColumn the selectedColumns to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.addSelectedColumn = function(vSelectedColumn) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:cancel cancel} event of this <code>sap.suite.ui.commons.TargetFilter</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TargetFilter</code> itself.
 * 
 * This event is fired if the user changes a selected filter set to the filter set used for the last search.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TargetFilter</code> itself
 * 
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:filterChange filterChange} event of this <code>sap.suite.ui.commons.TargetFilter</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TargetFilter</code> itself.
 * 
 * This event is fired if the user changes a selected filter set.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TargetFilter</code> itself
 * 
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.attachFilterChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.suite.ui.commons.TargetFilter</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TargetFilter</code> itself.
 * 
 * This event is fired if the user chooses the Show Selected link.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TargetFilter</code> itself
 * 
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Destroys all the columns in the aggregation {@link #getColumns columns}.
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.destroyColumns = function() { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Destroys the measureColumn in the aggregation {@link #getMeasureColumn measureColumn}.
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.destroyMeasureColumn = function() { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:cancel cancel} event of this <code>sap.suite.ui.commons.TargetFilter</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.detachCancel = function(fnFunction,oListener) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:filterChange filterChange} event of this <code>sap.suite.ui.commons.TargetFilter</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.detachFilterChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.suite.ui.commons.TargetFilter</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.detachSearch = function(fnFunction,oListener) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.TargetFilter with name <code>sClassName</code>
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
sap.suite.ui.commons.TargetFilter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:cancel cancel} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.fireCancel = function(mParameters) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Fires event {@link #event:filterChange filterChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.fireFilterChange = function(mParameters) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.fireSearch = function(mParameters) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Gets content of aggregation {@link #getColumns columns}.
 * 
 * The list of the columns.
 * 
 * @returns {sap.suite.ui.commons.TargetFilterColumn[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.getColumns = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEntitySet entitySet}.
 * 
 * The name of the entity set from OData service metadata. The filtering applies to this entity set.
 * 
 * @returns {string} Value of property <code>entitySet</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.getEntitySet = function() { return ""; };

/**
 * Returns a selected filter set.
 * 
 * @type any
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.getFilters = function() { return null; };

/**
 * Gets content of aggregation {@link #getMeasureColumn measureColumn}.
 * 
 * The measure column.
 * 
 * @returns {sap.suite.ui.commons.TargetFilterMeasureColumn}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.getMeasureColumn = function() { return new sap.suite.ui.commons.TargetFilterMeasureColumn(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TargetFilter.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TargetFilter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the binding parameters for the controls that use this control.
 * 
 * @type any
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.getParameters = function() { return null; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getSelectedColumns selectedColumns}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.getSelectedColumns = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.suite.ui.commons.TargetFilterColumn</code> in the aggregation {@link #getColumns columns}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TargetFilterColumn}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Inserts a column into the aggregation {@link #getColumns columns}.
 * 
 * @param {sap.suite.ui.commons.TargetFilterColumn}
 *            oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.insertColumn = function(oColumn,iIndex) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Removes all the controls from the aggregation {@link #getColumns columns}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.TargetFilterColumn[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes all the controls in the association named {@link #getSelectedColumns selectedColumns}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.removeAllSelectedColumns = function() { return new Array(); };

/**
 * Removes a column from the aggregation {@link #getColumns columns}.
 * 
 * @param {int | string | sap.suite.ui.commons.TargetFilterColumn} vColumn The column to remove or its index or id
 * @returns {sap.suite.ui.commons.TargetFilterColumn} The removed column or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.removeColumn = function(vColumn) { return new sap.suite.ui.commons.TargetFilterColumn(); };

/**
 * Removes an selectedColumn from the association named {@link #getSelectedColumns selectedColumns}.
 * @param {int | sap.ui.core.ID | sap.suite.ui.commons.TargetFilterColumn} vSelectedColumn The selectedColumn to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed selectedColumn or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.removeSelectedColumn = function(vSelectedColumn) { return new sap.ui.core.ID(); };

/**
 * Triggers filtering in the controls that use this control. Returns this control for the method chaining.
 * 
 * @type sap.suite.ui.commons.TargetFilter
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.search = function() { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Sets a new value for property {@link #getEntitySet entitySet}.
 * 
 * The name of the entity set from OData service metadata. The filtering applies to this entity set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sEntitySet New value for property <code>entitySet</code>
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.setEntitySet = function(sEntitySet) { return new sap.suite.ui.commons.TargetFilter(); };

/**
 * Sets the aggregated {@link #getMeasureColumn measureColumn}.
 * @param {sap.suite.ui.commons.TargetFilterMeasureColumn} oMeasureColumn The measureColumn to set
 * @returns {sap.suite.ui.commons.TargetFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilter.prototype.setMeasureColumn = function(oMeasureColumn) { return new sap.suite.ui.commons.TargetFilter(); };


// ---- sap.suite.ui.commons.TargetFilterColumn --------------------------------------------------------------------------

/**
 * Constructor for a new TargetFilterColumn.
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
 * <li>{@link #getPath path} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getLength length} : int (default: 10)</li>
 * <li>{@link #getType type} : any</li>
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
 * The configuration element for the column in the TargetFilter control.
 * @extends sap.ui.core.Element
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TargetFilterColumn = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.TargetFilterColumn with name <code>sClassName</code>
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
sap.suite.ui.commons.TargetFilterColumn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getLength length}.
 * 
 * The number of the retrieved entries for the cloud of the links in the quadrant. The quadrant can display fewer links than retrieved.
 * The font size of the links in the quadrant depends on the measure number. The font size of the links is relative in the retrieved group.
 * 
 * Default value is <code>10</code>.
 * @returns {int} Value of property <code>length</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.getLength = function() { return 0; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TargetFilterColumn.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPath path}.
 * 
 * The binding path.
 * 
 * @returns {string} Value of property <code>path</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.getPath = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The column title.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * The type of the displayed data. The type of the property must be sap.ui.model.SimpleType or its descendants. By default, sap.ui.model.type.String.
 * This property is used for formatting the displayed values. If sap.ui.model.type.String, the filter operator in the Search field of the column selection dialog is 'Contains'.
 * In other cases, the filter operator is 'EQ'.
 * 
 * @returns {any} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.getType = function() { return null; };

/**
 * Sets a new value for property {@link #getLength length}.
 * 
 * The number of the retrieved entries for the cloud of the links in the quadrant. The quadrant can display fewer links than retrieved.
 * The font size of the links in the quadrant depends on the measure number. The font size of the links is relative in the retrieved group.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iLength New value for property <code>length</code>
 * @returns {sap.suite.ui.commons.TargetFilterColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.setLength = function(iLength) { return new sap.suite.ui.commons.TargetFilterColumn(); };

/**
 * Sets a new value for property {@link #getPath path}.
 * 
 * The binding path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPath New value for property <code>path</code>
 * @returns {sap.suite.ui.commons.TargetFilterColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.setPath = function(sPath) { return new sap.suite.ui.commons.TargetFilterColumn(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The column title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.TargetFilterColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.TargetFilterColumn(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * The type of the displayed data. The type of the property must be sap.ui.model.SimpleType or its descendants. By default, sap.ui.model.type.String.
 * This property is used for formatting the displayed values. If sap.ui.model.type.String, the filter operator in the Search field of the column selection dialog is 'Contains'.
 * In other cases, the filter operator is 'EQ'.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oType New value for property <code>type</code>
 * @returns {sap.suite.ui.commons.TargetFilterColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterColumn.prototype.setType = function(oType) { return new sap.suite.ui.commons.TargetFilterColumn(); };


// ---- sap.suite.ui.commons.TargetFilterMeasureColumn --------------------------------------------------------------------------

/**
 * Constructor for a new TargetFilterMeasureColumn.
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
 * <li>{@link #getPath path} : string</li>
 * <li>{@link #getType type} : any</li>
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
 * The configuration element for the measure column in the TargetFilter control.
 * @extends sap.ui.core.Element
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TargetFilterMeasureColumn = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.TargetFilterMeasureColumn with name <code>sClassName</code>
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
sap.suite.ui.commons.TargetFilterMeasureColumn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TargetFilterMeasureColumn.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TargetFilterMeasureColumn.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPath path}.
 * 
 * The binding path.
 * 
 * @returns {string} Value of property <code>path</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterMeasureColumn.prototype.getPath = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * This property is used for formatting the displayed values. The type of the property must be sap.ui.model.SimpleType or its descendants. By default, sap.ui.model.type.Integer with enabled grouping.
 * 
 * @returns {any} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterMeasureColumn.prototype.getType = function() { return null; };

/**
 * Sets a new value for property {@link #getPath path}.
 * 
 * The binding path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPath New value for property <code>path</code>
 * @returns {sap.suite.ui.commons.TargetFilterMeasureColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterMeasureColumn.prototype.setPath = function(sPath) { return new sap.suite.ui.commons.TargetFilterMeasureColumn(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * This property is used for formatting the displayed values. The type of the property must be sap.ui.model.SimpleType or its descendants. By default, sap.ui.model.type.Integer with enabled grouping.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oType New value for property <code>type</code>
 * @returns {sap.suite.ui.commons.TargetFilterMeasureColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TargetFilterMeasureColumn.prototype.setType = function(oType) { return new sap.suite.ui.commons.TargetFilterMeasureColumn(); };


// ---- sap.suite.ui.commons.ThingCollection --------------------------------------------------------------------------

/**
 * Constructor for a new ThingCollection.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMinHeight minHeight} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.ux3.ThingViewer[]</li>
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
 * This control contains a collection of the sap.ui.ux3.ThingViewer controls or descendants of sap.ui.ux3.ThingViewer. It allows you to navigate through them as well as delete them from the collection.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ThingCollection = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.ui.ux3.ThingViewer}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.addContent = function(oContent) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * Destroys all the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.destroyContent = function() { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ThingCollection with name <code>sClassName</code>
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
sap.suite.ui.commons.ThingCollection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * Contains a collection of sap.ui.ux3.ThingViewer controls or descendants of sap.ui.ux3.ThingViewer.
 * 
 * @returns {sap.ui.ux3.ThingViewer[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the control.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ThingCollection.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThingCollection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinHeight minHeight}.
 * 
 * The minimal height of the control.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>minHeight</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getMinHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getMinWidth minWidth}.
 * 
 * The minimal width of the control.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>minWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getMinWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the control.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.ux3.ThingViewer</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.ux3.ThingViewer}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.ui.ux3.ThingViewer}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.insertContent = function(oContent,iIndex) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.ux3.ThingViewer[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.ui.ux3.ThingViewer} vContent The content to remove or its index or id
 * @returns {sap.ui.ux3.ThingViewer} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.removeContent = function(vContent) { return new sap.ui.ux3.ThingViewer(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * Sets a new value for property {@link #getMinHeight minHeight}.
 * 
 * The minimal height of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sMinHeight New value for property <code>minHeight</code>
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setMinHeight = function(sMinHeight) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * Sets a new value for property {@link #getMinWidth minWidth}.
 * 
 * The minimal width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sMinWidth New value for property <code>minWidth</code>
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setMinWidth = function(sMinWidth) { return new sap.suite.ui.commons.ThingCollection(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.commons.ThingCollection} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThingCollection.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.ThingCollection(); };


// ---- sap.suite.ui.commons.ThingGroupDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ThingGroupDesign.toString = function() { return ""; };

// ---- sap.suite.ui.commons.ThreePanelThingInspector --------------------------------------------------------------------------

/**
 * Constructor for a new ThreePanelThingInspector.
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
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getSidebarWidth sidebarWidth} : sap.ui.core.CSSSize (default: 224px)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenuContent menuContent} : sap.ui.commons.Link[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.ThingInspector#constructor sap.ui.ux3.ThingInspector}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control extends the sap.ui.ux3.ThingInspector control. It displays the sap.suite.ui.commons.ThreePanelThingViewer control in the sap.ui.ux3.Overlay control.
 * @extends sap.ui.ux3.ThingInspector
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector = function(sId,mSettings) {};
/**
 * Adds some menuContent to the aggregation {@link #getMenuContent menuContent}.
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ThreePanelThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.addMenuContent = function(oMenuContent) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * Destroys all the menuContent in the aggregation {@link #getMenuContent menuContent}.
 * @returns {sap.suite.ui.commons.ThreePanelThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.destroyMenuContent = function() { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ThreePanelThingInspector with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.ThingInspector.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getLogo logo}.
 * 
 * A URL of the source of the ThingViewer's key visual image.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>logo</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getLogo = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getMenuContent menuContent}.
 * 
 * The items of the ThingViewer's Action Menu.
 * 
 * @returns {sap.ui.commons.Link[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getMenuContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ThreePanelThingInspector.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowHeader showHeader}.
 * 
 * Shows or hides a middle panel of the ThingViewer named Header that contains general information.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showHeader</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getShowHeader = function() { return false; };

/**
 * Gets current value of property {@link #getSidebarWidth sidebarWidth}.
 * 
 * The width of the ThingViewer's navigation panel.
 * 
 * Default value is <code>224px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>sidebarWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getSidebarWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.Link</code> in the aggregation {@link #getMenuContent menuContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Link}
 *           oMenuContent The menuContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.indexOfMenuContent = function(oMenuContent) { return 0; };

/**
 * Inserts a menuContent into the aggregation {@link #getMenuContent menuContent}.
 * 
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the menuContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the menuContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the menuContent is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ThreePanelThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.insertMenuContent = function(oMenuContent,iIndex) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * Removes all the controls from the aggregation {@link #getMenuContent menuContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.commons.Link[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeAllMenuContent = function() { return new Array(); };

/**
 * Removes a menuContent from the aggregation {@link #getMenuContent menuContent}.
 * 
 * @param {int | string | sap.ui.commons.Link} vMenuContent The menuContent to remove or its index or id
 * @returns {sap.ui.commons.Link} The removed menuContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeMenuContent = function(vMenuContent) { return new sap.ui.commons.Link(); };

/**
 * Sets a new value for property {@link #getLogo logo}.
 * 
 * A URL of the source of the ThingViewer's key visual image.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sLogo New value for property <code>logo</code>
 * @returns {sap.suite.ui.commons.ThreePanelThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setLogo = function(sLogo) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * Sets a new value for property {@link #getShowHeader showHeader}.
 * 
 * Shows or hides a middle panel of the ThingViewer named Header that contains general information.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowHeader New value for property <code>showHeader</code>
 * @returns {sap.suite.ui.commons.ThreePanelThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setShowHeader = function(bShowHeader) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };

/**
 * Sets a new value for property {@link #getSidebarWidth sidebarWidth}.
 * 
 * The width of the ThingViewer's navigation panel.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>224px</code>.
 * @param {sap.ui.core.CSSSize} sSidebarWidth New value for property <code>sidebarWidth</code>
 * @returns {sap.suite.ui.commons.ThreePanelThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setSidebarWidth = function(sSidebarWidth) { return new sap.suite.ui.commons.ThreePanelThingInspector(); };


// ---- sap.suite.ui.commons.ThreePanelThingViewer --------------------------------------------------------------------------

/**
 * Constructor for a new ThreePanelThingViewer.
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
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getShowHeader showHeader} : boolean</li>
 * <li>{@link #getSidebarWidth sidebarWidth} : sap.ui.core.CSSSize (default: 244px)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenuContent menuContent} : sap.ui.commons.Link[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.ThingViewer#constructor sap.ui.ux3.ThingViewer}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control extends the sap.ui.ux3.ThingViewer control. The first panel can display a thing icon, a title, the Action Menu button, up to two rows of text descriptions (the first is wrapped, the second is truncated), vertical navigation bar (sap.suite.ui.commons.VerticalNavigationBar), and an image aka key visual. The second panel displays the header area as a vertical panel containing ThingGroup objects. The third panel is a main content area designed to display ThingGroup objects.
 * @extends sap.ui.ux3.ThingViewer
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer = function(sId,mSettings) {};
/**
 * Adds some menuContent to the aggregation {@link #getMenuContent menuContent}.
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ThreePanelThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.addMenuContent = function(oMenuContent) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * Destroys all the menuContent in the aggregation {@link #getMenuContent menuContent}.
 * @returns {sap.suite.ui.commons.ThreePanelThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.destroyMenuContent = function() { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ThreePanelThingViewer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.ThingViewer.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getLogo logo}.
 * 
 * A URL of the source of an image known as key visual. This can be a company logo or other essential graphics.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>logo</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getLogo = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getMenuContent menuContent}.
 * 
 * This aggregation allows you to add sap.ui.commons.Link items to the Action Menu. The menu appears as a popup when a user chooses a button in the top title section of the navigation panel.
 * 
 * @returns {sap.ui.commons.Link[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getMenuContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ThreePanelThingViewer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowHeader showHeader}.
 * 
 * Shows or hides a middle panel named Header that contains general information.
 * 
 * @returns {boolean} Value of property <code>showHeader</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getShowHeader = function() { return false; };

/**
 * Gets current value of property {@link #getSidebarWidth sidebarWidth}.
 * 
 * The width of the first panel that contains thing's title, icon, key visual and navigation bar. The default value is "244px".
 * 
 * Default value is <code>244px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>sidebarWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.getSidebarWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.commons.Link</code> in the aggregation {@link #getMenuContent menuContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.commons.Link}
 *           oMenuContent The menuContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.indexOfMenuContent = function(oMenuContent) { return 0; };

/**
 * Inserts a menuContent into the aggregation {@link #getMenuContent menuContent}.
 * 
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the menuContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the menuContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the menuContent is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ThreePanelThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.insertMenuContent = function(oMenuContent,iIndex) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * Removes all the controls from the aggregation {@link #getMenuContent menuContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.commons.Link[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.removeAllMenuContent = function() { return new Array(); };

/**
 * Removes a menuContent from the aggregation {@link #getMenuContent menuContent}.
 * 
 * @param {int | string | sap.ui.commons.Link} vMenuContent The menuContent to remove or its index or id
 * @returns {sap.ui.commons.Link} The removed menuContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.removeMenuContent = function(vMenuContent) { return new sap.ui.commons.Link(); };

/**
 * Sets a new value for property {@link #getLogo logo}.
 * 
 * A URL of the source of an image known as key visual. This can be a company logo or other essential graphics.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sLogo New value for property <code>logo</code>
 * @returns {sap.suite.ui.commons.ThreePanelThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.setLogo = function(sLogo) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * Sets a new value for property {@link #getShowHeader showHeader}.
 * 
 * Shows or hides a middle panel named Header that contains general information.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bShowHeader New value for property <code>showHeader</code>
 * @returns {sap.suite.ui.commons.ThreePanelThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.setShowHeader = function(bShowHeader) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };

/**
 * Sets a new value for property {@link #getSidebarWidth sidebarWidth}.
 * 
 * The width of the first panel that contains thing's title, icon, key visual and navigation bar. The default value is "244px".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>244px</code>.
 * @param {sap.ui.core.CSSSize} sSidebarWidth New value for property <code>sidebarWidth</code>
 * @returns {sap.suite.ui.commons.ThreePanelThingViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.setSidebarWidth = function(sSidebarWidth) { return new sap.suite.ui.commons.ThreePanelThingViewer(); };


// ---- sap.suite.ui.commons.TileContent --------------------------------------------------------------------------

/**
 * Constructor for a new TileContent.
 * 
 * 
 * @param {string} [sId] ID for the new control, automatically generated if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class This control serves a universal container for different types of content and footer.
 * @extends sap.m.TileContent
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34, this control is a mere wrapper for sap.m.TileContent.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TileContent = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.TileContent with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.TileContent.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TileContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TileContent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TileContent.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.TileContent2X2 --------------------------------------------------------------------------

/**
 * Constructor for a new TileContent2X2.
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
 * <li>{@link #getFooter footer} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: Auto)</li>
 * <li>{@link #getUnit unit} : string</li>
 * <li>{@link #getDisabled disabled} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
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
 * This control serves a universal container for different types of content and footer.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.
 * Deprecated.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TileContent2X2 = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.TileContent2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.destroyContent = function() { return new sap.suite.ui.commons.TileContent2X2(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.TileContent2X2 with name <code>sClassName</code>
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
sap.suite.ui.commons.TileContent2X2.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The switchable view that depends on the tile type.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDisabled disabled}.
 * 
 * Disables control if true.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>disabled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.getDisabled = function() { return false; };

/**
 * Gets current value of property {@link #getFooter footer}.
 * 
 * The footer text of the tile.
 * 
 * @returns {string} Value of property <code>footer</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.getFooter = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TileContent2X2.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TileContent2X2.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.suite.ui.commons.InfoTileSize} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.getSize = function() { return new sap.suite.ui.commons.InfoTileSize(); };

/**
 * Gets current value of property {@link #getUnit unit}.
 * 
 * The percent sign, the currency symbol, or the unit of measure.
 * 
 * @returns {string} Value of property <code>unit</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.getUnit = function() { return ""; };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.TileContent2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.TileContent2X2(); };

/**
 * Sets a new value for property {@link #getDisabled disabled}.
 * 
 * Disables control if true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisabled New value for property <code>disabled</code>
 * @returns {sap.suite.ui.commons.TileContent2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.setDisabled = function(bDisabled) { return new sap.suite.ui.commons.TileContent2X2(); };

/**
 * Sets a new value for property {@link #getFooter footer}.
 * 
 * The footer text of the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFooter New value for property <code>footer</code>
 * @returns {sap.suite.ui.commons.TileContent2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.setFooter = function(sFooter) { return new sap.suite.ui.commons.TileContent2X2(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * Updates the size of the tile. If not set then the default size is applied based on the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.suite.ui.commons.InfoTileSize} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.commons.TileContent2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.setSize = function(sSize) { return new sap.suite.ui.commons.TileContent2X2(); };

/**
 * Sets a new value for property {@link #getUnit unit}.
 * 
 * The percent sign, the currency symbol, or the unit of measure.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sUnit New value for property <code>unit</code>
 * @returns {sap.suite.ui.commons.TileContent2X2} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TileContent2X2.prototype.setUnit = function(sUnit) { return new sap.suite.ui.commons.TileContent2X2(); };


// ---- sap.suite.ui.commons.Timeline --------------------------------------------------------------------------

/**
 * Constructor for a new Timeline.
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
 * <li>{@link #getAlignment alignment} : sap.suite.ui.commons.TimelineAlignment (default: Right)</li>
 * <li>{@link #getAxisOrientation axisOrientation} : sap.suite.ui.commons.TimelineAxisOrientation (default: Vertical)</li>
 * <li>{@link #getData data} : object</li>
 * <li>{@link #getEnableAllInFilterItem enableAllInFilterItem} : boolean (default: true)</li>
 * <li>{@link #getEnableBackendFilter enableBackendFilter} : boolean (default: true)</li>
 * <li>{@link #getEnableBusyIndicator enableBusyIndicator} : boolean (default: true)</li>
 * <li>{@link #getEnableDoubleSided enableDoubleSided} : boolean (default: false)</li>
 * <li>{@link #getEnableModelFilter enableModelFilter} : boolean (default: true)</li>
 * <li>{@link #getEnableScroll enableScroll} : boolean (default: true)</li>
 * <li>{@link #getEnableSocial enableSocial} : boolean (default: false)</li>
 * <li>{@link #getFilterTitle filterTitle} : string</li>
 * <li>{@link #getForceGrowing forceGrowing} : boolean (default: false)</li>
 * <li>{@link #getGroup group} : boolean (default: false)</li>
 * <li>{@link #getGroupBy groupBy} : string</li>
 * <li>{@link #getGroupByType groupByType} : sap.suite.ui.commons.TimelineGroupType (default: None)</li>
 * <li>{@link #getGrowing growing} : boolean (default: true)</li>
 * <li>{@link #getGrowingThreshold growingThreshold} : int (default: 5)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: )</li>
 * <li>{@link #getLazyLoading lazyLoading} : boolean (default: false)</li>
 * <li>{@link #getNoDataText noDataText} : string</li>
 * <li>{@link #getScrollingFadeout scrollingFadeout} : sap.suite.ui.commons.TimelineScrollingFadeout (default: None)</li>
 * <li>{@link #getShowFilterBar showFilterBar} : boolean (default: true)</li>
 * <li>{@link #getShowHeaderBar showHeaderBar} : boolean (default: true)</li>
 * <li>{@link #getShowIcons showIcons} : boolean (default: true)</li>
 * <li>{@link #getShowItemFilter showItemFilter} : boolean (default: true)</li>
 * <li>{@link #getShowSearch showSearch} : boolean (default: true)</li>
 * <li>{@link #getShowSort showSort} : boolean (default: true)</li>
 * <li>{@link #getShowSuggestion showSuggestion} : boolean (default: true)</li>
 * <li>{@link #getShowTimeFilter showTimeFilter} : boolean (default: true)</li>
 * <li>{@link #getSort sort} : boolean (default: true)</li>
 * <li>{@link #getSortOldestFirst sortOldestFirst} : boolean (default: false)</li>
 * <li>{@link #getTextHeight textHeight} : string (default: )</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.suite.ui.commons.TimelineItem[] (default)</li>
 * <li>{@link #getCustomFilter customFilter} : sap.ui.core.Control</li>
 * <li>{@link #getFilterList filterList} : sap.suite.ui.commons.TimelineFilterListItem[]</li>
 * <li>{@link #getSuggestionItems suggestionItems} : sap.m.StandardListItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:addPost addPost} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customMessageClosed customMessageClosed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filterOpen filterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filterSelectionChange filterSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:grow grow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:itemFiltering itemFiltering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:suggestionItemSelected suggestionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The timeline control shows entries (such as objects, events, or posts) in chronological order.
 * <br>A common use case is to provide information about changes to an object, or events related to an
 * object.
 * These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
 * <br>There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
 * while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP
 * Jam.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.Timeline = function(sId,mSettings) {};
/**
 * This event is fired when a new post is added.
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * @event
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value Post message text.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.addPost = function(oControlEvent) {  };

/**
 * This event is fired when the user clicks the Close button on a message strip.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.customMessageClosed = function(oControlEvent) {  };

/**
 * This event is fired when the user clicks the filter icon in the timeline toolbar and opens the filter.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.filterOpen = function(oControlEvent) {  };

/**
 * This event is fired when filtering is applied to timeline posts or when a search term is entered into the search field. This event can be fired only if the enableModelFilter property is set to <code>true</code>.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.commons.TimelineFilterType} oControlEvent.getParameters.type Type of filter that has changed, can be an item filter or a time range filter.
 * @param {string} oControlEvent.getParameters.searchTerm Search term entered into the search field.
 * @param {string} oControlEvent.getParameters.selectedItem The first criteria selected in the filter criteria list (required for backward compatibility).
 * @param {object} oControlEvent.getParameters.selectedItems An array with all selected filter criteria.
 * @param {object} oControlEvent.getParameters.timeKeys An object specifying the start date (<code>from</code>) and the end date (<code>to</code>) of the time range.
 * @param {boolean} oControlEvent.getParameters.clear Is set to <code>true</code> when this event is fired by clearing the filter.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.filterSelectionChange = function(oControlEvent) {  };

/**
 * This event is fired when the "More" button is clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.grow = function(oControlEvent) {  };

/**
 * This event is fired for every timeline post when data filtering is being applied. It indicates whether this post is included in the filtering and why. Can be used only when the enableModelFilter property is set to <code>false</code>.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.commons.TimelineItem} oControlEvent.getParameters.item Timeline post that is currently being filtered.
 * @param {object} oControlEvent.getParameters.reasons Reasons why the post is being filtered. Empty if the post is not being filtered. There are three properties available in the object: <code>Search</code>, <code>Time</code>, and <code>Data</code>. You can call preventDefault to the event object to prevent the result.
 * @param {object} oControlEvent.getParameters.dataKeys Array with keys used for data filtering.
 * @param {object} oControlEvent.getParameters.timeKeys An object specifying the start date (<code>from</code>) and the end date (<code>to</code>) of the time range.
 * @param {string} oControlEvent.getParameters.searchTerm The text string that has been typed into the search field.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.itemFiltering = function(oControlEvent) {  };

/**
 * This event is fired when a timeline post is selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.commons.TimelineItem} oControlEvent.getParameters.selectedItem The timeline post that is selected.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.select = function(oControlEvent) {  };

/**
 * This event is fired when the user enters text into the search field, in cases when the showSuggestion property is set to <code>true</code>. Changing the suggestionItems aggregation will show the suggestions inside a popup.
 * @event
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.suggestValue The text string that has been typed into the search field.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.suggest = function(oControlEvent) {  };

/**
 * This event is fired when a suggested post is selected in the suggestions popup list. This event is only fired when the showSuggestion property is set to <code>true</code> and there is at least one post in the suggestions popup list. See also the suggestionItems aggregation.
 * @event
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The item selected in the suggestions popup.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.suggestionItemSelected = function(oControlEvent) {  };

/**
 * Adds some content to the aggregation {@link #getContent content}.
 * @param {sap.suite.ui.commons.TimelineItem}
 *            oContent the content to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.addContent = function(oContent) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Adds some filterList to the aggregation {@link #getFilterList filterList}.
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *            oFilterList the filterList to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.addFilterList = function(oFilterList) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Adds some suggestionItem to the aggregation {@link #getSuggestionItems suggestionItems}.
 * @param {sap.m.StandardListItem}
 *            oSuggestionItem the suggestionItem to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.addSuggestionItem = function(oSuggestionItem) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Refreshes the UI.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.adjustUI = function() {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:addPost addPost} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when a new post is added.
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachAddPost = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customMessageClosed customMessageClosed} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when the user clicks the Close button on a message strip.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachCustomMessageClosed = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:filterOpen filterOpen} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when the user clicks the filter icon in the timeline toolbar and opens the filter.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachFilterOpen = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:filterSelectionChange filterSelectionChange} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when filtering is applied to timeline posts or when a search term is entered into the search field. This event can be fired only if the enableModelFilter property is set to <code>true</code>.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachFilterSelectionChange = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:grow grow} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when the "More" button is clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachGrow = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:itemFiltering itemFiltering} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired for every timeline post when data filtering is being applied. It indicates whether this post is included in the filtering and why. Can be used only when the enableModelFilter property is set to <code>false</code>.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachItemFiltering = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when a timeline post is selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:suggest suggest} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when the user enters text into the search field, in cases when the showSuggestion property is set to <code>true</code>. Changing the suggestionItems aggregation will show the suggestions inside a popup.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachSuggest = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:suggestionItemSelected suggestionItemSelected} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.Timeline</code> itself.
 * 
 * This event is fired when a suggested post is selected in the suggestions popup list. This event is only fired when the showSuggestion property is set to <code>true</code> and there is at least one post in the suggestions popup list. See also the suggestionItems aggregation.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.Timeline</code> itself
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 */
sap.suite.ui.commons.Timeline.prototype.attachSuggestionItemSelected = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Destroys the customFilter in the aggregation {@link #getCustomFilter customFilter}.
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.destroyCustomFilter = function() { return new sap.suite.ui.commons.Timeline(); };

/**
 * Destroys all the filterList in the aggregation {@link #getFilterList filterList}.
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.destroyFilterList = function() { return new sap.suite.ui.commons.Timeline(); };

/**
 * Destroys all the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.destroySuggestionItems = function() { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:addPost addPost} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachAddPost = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customMessageClosed customMessageClosed} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachCustomMessageClosed = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:filterOpen filterOpen} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachFilterOpen = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:filterSelectionChange filterSelectionChange} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachFilterSelectionChange = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:grow grow} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachGrow = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:itemFiltering itemFiltering} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachItemFiltering = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachSelect = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:suggest suggest} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachSuggest = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:suggestionItemSelected suggestionItemSelected} event of this <code>sap.suite.ui.commons.Timeline</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.detachSuggestionItemSelected = function(fnFunction,oListener) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Cleans up the element instance before destruction
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.suite.ui.commons.Timeline with name <code>sClassName</code>
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
sap.suite.ui.commons.Timeline.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:addPost addPost} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.value] Post message text.
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireAddPost = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:customMessageClosed customMessageClosed} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireCustomMessageClosed = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:filterOpen filterOpen} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireFilterOpen = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:filterSelectionChange filterSelectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.suite.ui.commons.TimelineFilterType} [mParameters.type] Type of filter that has changed, can be an item filter or a time range filter.
 * @param {string} [mParameters.searchTerm] Search term entered into the search field.
 * @param {string} [mParameters.selectedItem] The first criteria selected in the filter criteria list (required for backward compatibility).
 * @param {object} [mParameters.selectedItems] An array with all selected filter criteria.
 * @param {object} [mParameters.timeKeys] An object specifying the start date (<code>from</code>) and the end date (<code>to</code>) of the time range.
 * @param {boolean} [mParameters.clear] Is set to <code>true</code> when this event is fired by clearing the filter.
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireFilterSelectionChange = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:grow grow} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireGrow = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:itemFiltering itemFiltering} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.suite.ui.commons.TimelineItem} [mParameters.item] Timeline post that is currently being filtered.
 * @param {object} [mParameters.reasons] Reasons why the post is being filtered. Empty if the post is not being filtered. There are three properties available in the object: <code>Search</code>, <code>Time</code>, and <code>Data</code>. You can call preventDefault to the event object to prevent the result.
 * @param {object} [mParameters.dataKeys] Array with keys used for data filtering.
 * @param {object} [mParameters.timeKeys] An object specifying the start date (<code>from</code>) and the end date (<code>to</code>) of the time range.
 * @param {string} [mParameters.searchTerm] The text string that has been typed into the search field.
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireItemFiltering = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:select select} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.suite.ui.commons.TimelineItem} [mParameters.selectedItem] The timeline post that is selected.
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireSelect = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:suggest suggest} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.suggestValue] The text string that has been typed into the search field.
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireSuggest = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Fires event {@link #event:suggestionItemSelected suggestionItemSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Item} [mParameters.selectedItem] The item selected in the suggestions popup.
 * 
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 */
sap.suite.ui.commons.Timeline.prototype.fireSuggestionItemSelected = function(mParameters) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Gets current value of property {@link #getAlignment alignment}.
 * 
 * Defines the alignment of timeline posts relative to the timeline axis. This option can be used for single-sided timelines only. If the axisOrientation property is set to <code> Horizontal</code>, the <code>Right</code> value is interpreted as bottom alignment and the <code>Left</code> value as top alignment.
 * 
 * Default value is <code>Right</code>.
 * @returns {sap.suite.ui.commons.TimelineAlignment} Value of property <code>alignment</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getAlignment = function() { return new sap.suite.ui.commons.TimelineAlignment(); };

/**
 * Gets current value of property {@link #getAxisOrientation axisOrientation}.
 * 
 * Defines the orientation of the timeline. Can be set to <code>Vertical</code> or <code>Horizontal</code>.
 * 
 * Default value is <code>Vertical</code>.
 * @returns {sap.suite.ui.commons.TimelineAxisOrientation} Value of property <code>axisOrientation</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getAxisOrientation = function() { return new sap.suite.ui.commons.TimelineAxisOrientation(); };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * List of timeline posts.
 * 
 * @returns {sap.suite.ui.commons.TimelineItem[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getContent = function() { return new Array(); };

/**
 * Returns the keys of the currently applied filter criteria as an array of objects, containing
 * filter criteria keys (<code>key</code>) and values (<code>text</code>).
 * @returns {Array}
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getCurrentFilter = function() { return null; };

/**
 * Gets content of aggregation {@link #getCustomFilter customFilter}.
 * 
 * A custom filter to be used instead of the default item filter. This control must have an <code>openBy</code> function that is used by the timeline to open the control.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getCustomFilter = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getData data}.
 * 
 * Data for the Timeline control.
 * 
 * @returns {object} Value of property <code>data</code>
 * 
 * @deprecated Since version 1.46.0.
 * As of version 1.46, this property was replaced by JSONModel context binding.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getData = function() { return new Object(); };

/**
 * Gets current value of property {@link #getEnableAllInFilterItem enableAllInFilterItem}.
 * 
 * Enables to add 'All' at the beginning of the filter list.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableAllInFilterItem</code>
 * 
 * @deprecated Since version 1.46.0.
 * The filter list now includes a Select All check box, so the All radio button is
 * no longer required. This property is ignored.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableAllInFilterItem = function() { return false; };

/**
 * Gets current value of property {@link #getEnableBackendFilter enableBackendFilter}.
 * 
 * Enables fetching data from backend instead of deriving filter values from the frontend values (displayed list).
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getEnableModelFilter}.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableBackendFilter</code>
 * 
 * @deprecated Since version 1.46.0.
 * Use the enableModelFilter property instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableBackendFilter = function() { return false; };

/**
 * Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.
 * 
 * When this property is set to <code>true</code>, the timeline displays a busy indicator when loading data. This busy indicator blocks the interaction with the items until the data loading is complete. It is strongly recommended to use this option. Loading data without a busy indicator may confuse the users.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableBusyIndicator</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableBusyIndicator = function() { return false; };

/**
 * Gets current value of property {@link #getEnableDoubleSided enableDoubleSided}.
 * 
 * If set to <code>true</code>, timeline posts are displayed on both sides of the timeline axis.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableDoubleSided</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableDoubleSided = function() { return false; };

/**
 * Gets current value of property {@link #getEnableModelFilter enableModelFilter}.
 * 
 * Enables filtering directly on the binding level.
 * If set to <code>true</code>, all filters are translated into the filters in the model binding. When the OData model is used, the filtering is performed on the backend side. This option is strongly recommended.
 * If set to <code>false</code>, all entries from the model need to be fetched before they can be filtered on the frontend side. Please be aware that the <code>growingThreshold</code> property determines how many entries can be rendered. Timeline requests all entries from the model before it performs the filtering. Some models may have internal limits for the number of entries that can be used in bindings. Such limits can be set using {@link sap.ui.model.Model#setSizeLimit}.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableModelFilter</code>
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableModelFilter = function() { return false; };

/**
 * Gets current value of property {@link #getEnableScroll enableScroll}.
 * 
 * If set to <code>true</code>, the Timeline control has its own scroll bar, with the scrolling taking place within the Timeline control itself. Scrolling is required if you want to enable the lazyLoading property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableScroll</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableScroll = function() { return false; };

/**
 * Gets current value of property {@link #getEnableSocial enableSocial}.
 * 
 * Adds a <i>Reply</i> link to the posts on a social timeline that allows users to reply to posts. When a user adds a reply, an event is fired. This event should be handled by external code.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableSocial</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getEnableSocial = function() { return false; };

/**
 * Gets content of aggregation {@link #getFilterList filterList}.
 * 
 * Custom filter criteria for the items filter.
 * 
 * @returns {sap.suite.ui.commons.TimelineFilterListItem[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getFilterList = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFilterTitle filterTitle}.
 * 
 * Title for the data filter. When a filter is applied, this title is displayed in the message strip along with the filter name.
 * 
 * @returns {string} Value of property <code>filterTitle</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getFilterTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getForceGrowing forceGrowing}.
 * 
 * If set to <code>true</code>, the <i>Show More</i> button is displayed when the user scrolls along the timeline axis.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>forceGrowing</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getForceGrowing = function() { return false; };

/**
 * Gets current value of property {@link #getGroup group}.
 * 
 * Groups the timeline posts by year.
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getGroupByType}.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>group</code>
 * 
 * @deprecated Since version 1.46.0.
 * Use the groupByType property instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGroup = function() { return false; };

/**
 * Gets current value of property {@link #getGroupBy groupBy}.
 * 
 * Groups the timeline posts by a field. Only fields that contain date values are supported.
 * 
 * @returns {string} Value of property <code>groupBy</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGroupBy = function() { return ""; };

/**
 * Gets current value of property {@link #getGroupByType groupByType}.
 * 
 * Groups the timeline posts by a time period, including year, quarter, month, week, and day. If set to <code>None</code>, no grouping is applied.
 * If you specify a custom grouping function using the {@link sap.suite.ui.commons.Timeline#setCustomGrouping} method, this function overrides the groupByType property settings.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.suite.ui.commons.TimelineGroupType} Value of property <code>groupByType</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGroupByType = function() { return new sap.suite.ui.commons.TimelineGroupType(); };

/**
 * Returns all group items.
 * @returns {sap.ui.core.Control[]} Timeline groups
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGroups = function() { return new Array(); };

/**
 * Gets current value of property {@link #getGrowing growing}.
 * 
 * If set to <code>true</code>, the timeline displays a limited number of posts with a button to show more. The displayed posts limit can be set using the growingThreshold property.
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getGrowingThreshold}.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>growing</code>
 * 
 * @deprecated Since version 1.46.0.
 * Use the growingThreshold property instead, setting it to 0 to disable growing.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGrowing = function() { return false; };

/**
 * Gets current value of property {@link #getGrowingThreshold growingThreshold}.
 * 
 * Number of posts requested from the server at a time. Each time when the timeline needs to load more posts, it will request exactly this amount. The number of posts displayed in the timeline is increased by this number. If set to <code>0</code>, all posts are fetched and displayed on the initial load.
 * 
 * Default value is <code>5</code>.
 * @returns {int} Value of property <code>growingThreshold</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getGrowingThreshold = function() { return 0; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Sets the height of the Timeline.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getLazyLoading lazyLoading}.
 * 
 * Enables the Lazy Loading feature that automatically loads more posts as the user scrolls along the timeline axis. This feature works only when the enableScroll property is set to <code>true</code>. See also {@link sap.suite.ui.commons.Timeline#getEnableScroll}.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>lazyLoading</code>
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getLazyLoading = function() { return false; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.Timeline.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.Timeline.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNoDataText noDataText}.
 * 
 * This text is displayed when the control has no data. The default value is loaded from the component resource bundle.
 * 
 * @returns {string} Value of property <code>noDataText</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getNoDataText = function() { return ""; };

/**
 * Gets current value of property {@link #getScrollingFadeout scrollingFadeout}.
 * 
 * If set to <code>Area</code>, the timeline fades into the visible area margin.
 * If set to <code>AreaWithButtons</code>, the timeline fades into the visible area margin and scroll buttons are displayed.
 * If set to <code>None</code>, the fading effect is not applied.
 * This feature works only when the enableScroll property is set to <code>true</code>. See also {@link sap.suite.ui.commons.Timeline#getEnableScroll}.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.suite.ui.commons.TimelineScrollingFadeout} Value of property <code>scrollingFadeout</code>
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getScrollingFadeout = function() { return new sap.suite.ui.commons.TimelineScrollingFadeout(); };

/**
 * Gets current value of property {@link #getShowFilterBar showFilterBar}.
 * 
 * Sets the visibility of the filter in the timeline toolbar.<br>
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getShowHeaderBar}.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFilterBar</code>
 * 
 * @deprecated Since version 1.46.0.
 * Use the showHeaderBar property instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowFilterBar = function() { return false; };

/**
 * Gets current value of property {@link #getShowHeaderBar showHeaderBar}.
 * 
 * Shows the timeline toolbar with search and filter options.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showHeaderBar</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowHeaderBar = function() { return false; };

/**
 * Gets current value of property {@link #getShowIcons showIcons}.
 * 
 * Shows an icon on the timeline axis as an anchor for each entry node. If set to <code>false</code>, all icons are replaced by dots.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showIcons</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowIcons = function() { return false; };

/**
 * Gets current value of property {@link #getShowItemFilter showItemFilter}.
 * 
 * Show item filter in filter area.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showItemFilter</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowItemFilter = function() { return false; };

/**
 * Gets current value of property {@link #getShowSearch showSearch}.
 * 
 * Sets the search field visibility on the timeline toolbar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSearch</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowSearch = function() { return false; };

/**
 * Gets current value of property {@link #getShowSort showSort}.
 * 
 * Show sort icon in the header bar. For displaying this icon, sorting have to be allowed.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSort</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowSort = function() { return false; };

/**
 * Gets current value of property {@link #getShowSuggestion showSuggestion}.
 * 
 * If set to <code>true</code>, a suggest event is fired when the user enters text into the search field. Changing the suggestionItems aggregation in the suggest event listener will display suggestions inside a popup.
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSuggestion</code>
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowSuggestion = function() { return false; };

/**
 * Gets current value of property {@link #getShowTimeFilter showTimeFilter}.
 * 
 * Shows the time range filter in the filter menu.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTimeFilter</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getShowTimeFilter = function() { return false; };

/**
 * Gets current value of property {@link #getSort sort}.
 * 
 * Indicates whether the data should be sorted. If set to <code>false</code> the data model's default sorting is applied.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>sort</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getSort = function() { return false; };

/**
 * Gets current value of property {@link #getSortOldestFirst sortOldestFirst}.
 * 
 * Whether the oldest item will be displayed first.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>sortOldestFirst</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getSortOldestFirst = function() { return false; };

/**
 * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * Items for suggestions.
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @returns {sap.m.StandardListItem[]}
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getSuggestionItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTextHeight textHeight}.
 * 
 * Height of the timeline posts. It can be set to either of the following types of values:
 * <ul>
 * <li> Automatic &ndash; If set to <code>automatic</code>, the optimal post height is calculated automatically to fit the timeline height specified by the height parameter. This option works only in horizontal timelines and only when the timeline height is defined. In vertical timelines, this setting is ignored. </li>
 * <li> Number &ndash; If set to a number, a corresponding number of text lines is displayed in every post.</li>
 * <li> Pixels &ndash; If set to a number followed by <code>px</code>, such as <code>50px</code>, the closest number in lines is calculated and applied to the timeline posts, so that the post height corresponds to the specified number of pixels and the text lines are not cut off in the middle of a line.</li>
 * <li> Any other valid {@link sap.ui.core.CSSSize CSSSize} value that is inserted into the text wrapper without being changed. </li>
 * </ul>
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>textHeight</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getTextHeight = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Sets the width of the Timeline.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.commons.TimelineItem</code> in the aggregation {@link #getContent content}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TimelineItem}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Checks for the provided <code>sap.suite.ui.commons.TimelineFilterListItem</code> in the aggregation {@link #getFilterList filterList}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *           oFilterList The filterList whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.indexOfFilterList = function(oFilterList) { return 0; };

/**
 * Checks for the provided <code>sap.m.StandardListItem</code> in the aggregation {@link #getSuggestionItems suggestionItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.StandardListItem}
 *           oSuggestionItem The suggestionItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.indexOfSuggestionItem = function(oSuggestionItem) { return 0; };

/**
 * Inserts a content into the aggregation {@link #getContent content}.
 * 
 * @param {sap.suite.ui.commons.TimelineItem}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.insertContent = function(oContent,iIndex) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Inserts a filterList into the aggregation {@link #getFilterList filterList}.
 * 
 * @param {sap.suite.ui.commons.TimelineFilterListItem}
 *            oFilterList the filterList to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filterList should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filterList is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filterList is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.insertFilterList = function(oFilterList,iIndex) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Inserts a suggestionItem into the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * @param {sap.m.StandardListItem}
 *            oSuggestionItem the suggestionItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the suggestionItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the suggestionItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the suggestionItem is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.insertSuggestionItem = function(oSuggestionItem,iIndex) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Removes all the controls from the aggregation {@link #getContent content}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.TimelineItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFilterList filterList}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.TimelineFilterListItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeAllFilterList = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.StandardListItem[]} An array of the removed elements (might be empty)
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeAllSuggestionItems = function() { return new Array(); };

/**
 * Removes a content from the aggregation {@link #getContent content}.
 * 
 * @param {int | string | sap.suite.ui.commons.TimelineItem} vContent The content to remove or its index or id
 * @returns {sap.suite.ui.commons.TimelineItem} The removed content or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeContent = function(vContent) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Removes a filterList from the aggregation {@link #getFilterList filterList}.
 * 
 * @param {int | string | sap.suite.ui.commons.TimelineFilterListItem} vFilterList The filterList to remove or its index or id
 * @returns {sap.suite.ui.commons.TimelineFilterListItem} The removed filterList or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeFilterList = function(vFilterList) { return new sap.suite.ui.commons.TimelineFilterListItem(); };

/**
 * Removes a suggestionItem from the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * @param {int | string | sap.m.StandardListItem} vSuggestionItem The suggestionItem to remove or its index or id
 * @returns {sap.m.StandardListItem} The removed suggestionItem or <code>null</code>
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.removeSuggestionItem = function(vSuggestionItem) { return new sap.m.StandardListItem(); };

/**
 * Sets a new value for property {@link #getAlignment alignment}.
 * 
 * Defines the alignment of timeline posts relative to the timeline axis. This option can be used for single-sided timelines only. If the axisOrientation property is set to <code> Horizontal</code>, the <code>Right</code> value is interpreted as bottom alignment and the <code>Left</code> value as top alignment.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Right</code>.
 * @param {sap.suite.ui.commons.TimelineAlignment} sAlignment New value for property <code>alignment</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setAlignment = function(sAlignment) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getAxisOrientation axisOrientation}.
 * 
 * Defines the orientation of the timeline. Can be set to <code>Vertical</code> or <code>Horizontal</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Vertical</code>.
 * @param {sap.suite.ui.commons.TimelineAxisOrientation} sAxisOrientation New value for property <code>axisOrientation</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setAxisOrientation = function(sAxisOrientation) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets filter criteria keys.
 * @param {string[]} aSelectedItemKeys Filter criteria keys to select. Can be also used as a single value.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCurrentFilter = function(aSelectedItemKeys) {  };

/**
 * Sets values for the search field.
 * @param {String} sSearchTerm Search term value.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCurrentSearch = function(sSearchTerm) {  };

/**
 * Sets values for the time range filter.
 * @param {object} [mArguments] Time filter arguments
 * @param {Date} [mArguments.from] Start date of the time range filter.
 * @param {Date} [mArguments.to] End date of the time range filter.
 * @param {sap.suite.ui.commons.TimelineGroupType} [mArguments.type] The step of the time range filter scale. Can be set to day, month, quarter, or year.
 * Week is currently not supported.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCurrentTimeFilter = function(mArguments) {  };

/**
 * Sets the aggregated {@link #getCustomFilter customFilter}.
 * @param {sap.ui.core.Control} oCustomFilter The customFilter to set
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCustomFilter = function(oCustomFilter) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a custom message for the filter message strip. This message is appended to the default
 * filter text.
 * @param {string} sMessage Message to append.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCustomFilterMessage = function(sMessage) {  };

/**
 * Sets custom grouping function. This function must have one parameter that is a date object. This date object
 * is used for grouping timeline posts. The function should return an object that has three properties:
 * <ul>
 * <li>
 * <code>key</code> &ndash; The key of the related group.
 * </li>
 * <li>
 * <code>title</code> &ndash;  The title of the related group.
 * </li>
 * <li>
 * <code>date</code> &ndash; The same value as the one entered in the input parameter.
 * </li>
 * </ul>
 * 
 * @param {function} fnGroupBy Grouping function.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCustomGrouping = function(fnGroupBy) {  };

/**
 * Sets a custom message that is displayed below the timeline's header.
 * @param {String} sMsg Message text.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCustomMessage = function(sMsg) {  };

/**
 * Adds a custom filter in addition to the default filters: items filter, time range filter, and search.
 * @param {string} sFilterId A unique filter ID that the caller can use to manipulate the filter after it has been
 * created, for example, to remove it.
 * @param {sap.ui.model.Filter} oFilter Filter object.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setCustomModelFilter = function(sFilterId,oFilter) {  };

/**
 * Sets a new value for property {@link #getData data}.
 * 
 * Data for the Timeline control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oData New value for property <code>data</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * As of version 1.46, this property was replaced by JSONModel context binding.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setData = function(oData) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableAllInFilterItem enableAllInFilterItem}.
 * 
 * Enables to add 'All' at the beginning of the filter list.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableAllInFilterItem New value for property <code>enableAllInFilterItem</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * The filter list now includes a Select All check box, so the All radio button is
 * no longer required. This property is ignored.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableAllInFilterItem = function(bEnableAllInFilterItem) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableBackendFilter enableBackendFilter}.
 * 
 * Enables fetching data from backend instead of deriving filter values from the frontend values (displayed list).
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getEnableModelFilter}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableBackendFilter New value for property <code>enableBackendFilter</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the enableModelFilter property instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableBackendFilter = function(bEnableBackendFilter) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.
 * 
 * When this property is set to <code>true</code>, the timeline displays a busy indicator when loading data. This busy indicator blocks the interaction with the items until the data loading is complete. It is strongly recommended to use this option. Loading data without a busy indicator may confuse the users.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableBusyIndicator New value for property <code>enableBusyIndicator</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableBusyIndicator = function(bEnableBusyIndicator) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableDoubleSided enableDoubleSided}.
 * 
 * If set to <code>true</code>, timeline posts are displayed on both sides of the timeline axis.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableDoubleSided New value for property <code>enableDoubleSided</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableDoubleSided = function(bEnableDoubleSided) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableModelFilter enableModelFilter}.
 * 
 * Enables filtering directly on the binding level.
 * If set to <code>true</code>, all filters are translated into the filters in the model binding. When the OData model is used, the filtering is performed on the backend side. This option is strongly recommended.
 * If set to <code>false</code>, all entries from the model need to be fetched before they can be filtered on the frontend side. Please be aware that the <code>growingThreshold</code> property determines how many entries can be rendered. Timeline requests all entries from the model before it performs the filtering. Some models may have internal limits for the number of entries that can be used in bindings. Such limits can be set using {@link sap.ui.model.Model#setSizeLimit}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableModelFilter New value for property <code>enableModelFilter</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableModelFilter = function(bEnableModelFilter) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableScroll enableScroll}.
 * 
 * If set to <code>true</code>, the Timeline control has its own scroll bar, with the scrolling taking place within the Timeline control itself. Scrolling is required if you want to enable the lazyLoading property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableScroll New value for property <code>enableScroll</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableScroll = function(bEnableScroll) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getEnableSocial enableSocial}.
 * 
 * Adds a <i>Reply</i> link to the posts on a social timeline that allows users to reply to posts. When a user adds a reply, an event is fired. This event should be handled by external code.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableSocial New value for property <code>enableSocial</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setEnableSocial = function(bEnableSocial) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getFilterTitle filterTitle}.
 * 
 * Title for the data filter. When a filter is applied, this title is displayed in the message strip along with the filter name.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilterTitle New value for property <code>filterTitle</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setFilterTitle = function(sFilterTitle) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getForceGrowing forceGrowing}.
 * 
 * If set to <code>true</code>, the <i>Show More</i> button is displayed when the user scrolls along the timeline axis.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bForceGrowing New value for property <code>forceGrowing</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setForceGrowing = function(bForceGrowing) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getGroup group}.
 * 
 * Groups the timeline posts by year.
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getGroupByType}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bGroup New value for property <code>group</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the groupByType property instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGroup = function(bGroup) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getGroupBy groupBy}.
 * 
 * Groups the timeline posts by a field. Only fields that contain date values are supported.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sGroupBy New value for property <code>groupBy</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGroupBy = function(sGroupBy) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getGroupByType groupByType}.
 * 
 * Groups the timeline posts by a time period, including year, quarter, month, week, and day. If set to <code>None</code>, no grouping is applied.
 * If you specify a custom grouping function using the {@link sap.suite.ui.commons.Timeline#setCustomGrouping} method, this function overrides the groupByType property settings.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.suite.ui.commons.TimelineGroupType} sGroupByType New value for property <code>groupByType</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGroupByType = function(sGroupByType) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getGrowing growing}.
 * 
 * If set to <code>true</code>, the timeline displays a limited number of posts with a button to show more. The displayed posts limit can be set using the growingThreshold property.
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getGrowingThreshold}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bGrowing New value for property <code>growing</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the growingThreshold property instead, setting it to 0 to disable growing.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGrowing = function(bGrowing) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getGrowingThreshold growingThreshold}.
 * 
 * Number of posts requested from the server at a time. Each time when the timeline needs to load more posts, it will request exactly this amount. The number of posts displayed in the timeline is increased by this number. If set to <code>0</code>, all posts are fetched and displayed on the initial load.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {int} iGrowingThreshold New value for property <code>growingThreshold</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setGrowingThreshold = function(iGrowingThreshold) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Sets the height of the Timeline.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getLazyLoading lazyLoading}.
 * 
 * Enables the Lazy Loading feature that automatically loads more posts as the user scrolls along the timeline axis. This feature works only when the enableScroll property is set to <code>true</code>. See also {@link sap.suite.ui.commons.Timeline#getEnableScroll}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLazyLoading New value for property <code>lazyLoading</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setLazyLoading = function(bLazyLoading) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Replaces one of the default filters: items filter, time range filter, or search.
 * @param {object} mArguments The object containing settings
 * @param {sap.suite.ui.commons.TimelineFilterType} mArguments.type Type of the filter to replace.
 * @param {sap.ui.model.Filter} mArguments.filter Filter object to specify the filter criteria.
 * @param {boolean} mArguments.refresh If set to <code>true</code> (default), filters are automatically recreated,
 * and the content is updated.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setModelFilter = function(mArguments) {  };

/**
 * Sets the message displayed in the filter message strip. This message overwrites the default filter message.
 * @param {sap.suite.ui.commons.TimelineFilterType} sType Filter type. Supports only items filter (<code>Data</code>)
 * and time range filter (<code>Time</code>).
 * @param {string} sMessage The message that should replace the default message.
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setModelFilterMessage = function(sType,sMessage) {  };

/**
 * Sets a new value for property {@link #getNoDataText noDataText}.
 * 
 * This text is displayed when the control has no data. The default value is loaded from the component resource bundle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sNoDataText New value for property <code>noDataText</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setNoDataText = function(sNoDataText) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getScrollingFadeout scrollingFadeout}.
 * 
 * If set to <code>Area</code>, the timeline fades into the visible area margin.
 * If set to <code>AreaWithButtons</code>, the timeline fades into the visible area margin and scroll buttons are displayed.
 * If set to <code>None</code>, the fading effect is not applied.
 * This feature works only when the enableScroll property is set to <code>true</code>. See also {@link sap.suite.ui.commons.Timeline#getEnableScroll}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.suite.ui.commons.TimelineScrollingFadeout} sScrollingFadeout New value for property <code>scrollingFadeout</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.46.0
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setScrollingFadeout = function(sScrollingFadeout) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowFilterBar showFilterBar}.
 * 
 * Sets the visibility of the filter in the timeline toolbar.<br>
 * As of version 1.46, replaced by {@link sap.suite.ui.commons.Timeline#getShowHeaderBar}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFilterBar New value for property <code>showFilterBar</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the showHeaderBar property instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowFilterBar = function(bShowFilterBar) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowHeaderBar showHeaderBar}.
 * 
 * Shows the timeline toolbar with search and filter options.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowHeaderBar New value for property <code>showHeaderBar</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowHeaderBar = function(bShowHeaderBar) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowIcons showIcons}.
 * 
 * Shows an icon on the timeline axis as an anchor for each entry node. If set to <code>false</code>, all icons are replaced by dots.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowIcons New value for property <code>showIcons</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowIcons = function(bShowIcons) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowItemFilter showItemFilter}.
 * 
 * Show item filter in filter area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowItemFilter New value for property <code>showItemFilter</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowItemFilter = function(bShowItemFilter) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowSearch showSearch}.
 * 
 * Sets the search field visibility on the timeline toolbar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSearch New value for property <code>showSearch</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowSearch = function(bShowSearch) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowSort showSort}.
 * 
 * Show sort icon in the header bar. For displaying this icon, sorting have to be allowed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSort New value for property <code>showSort</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowSort = function(bShowSort) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowSuggestion showSuggestion}.
 * 
 * If set to <code>true</code>, a suggest event is fired when the user enters text into the search field. Changing the suggestionItems aggregation in the suggest event listener will display suggestions inside a popup.
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSuggestion New value for property <code>showSuggestion</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowSuggestion = function(bShowSuggestion) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getShowTimeFilter showTimeFilter}.
 * 
 * Shows the time range filter in the filter menu.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTimeFilter New value for property <code>showTimeFilter</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setShowTimeFilter = function(bShowTimeFilter) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getSort sort}.
 * 
 * Indicates whether the data should be sorted. If set to <code>false</code> the data model's default sorting is applied.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSort New value for property <code>sort</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setSort = function(bSort) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getSortOldestFirst sortOldestFirst}.
 * 
 * Whether the oldest item will be displayed first.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSortOldestFirst New value for property <code>sortOldestFirst</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setSortOldestFirst = function(bSortOldestFirst) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getTextHeight textHeight}.
 * 
 * Height of the timeline posts. It can be set to either of the following types of values:
 * <ul>
 * <li> Automatic &ndash; If set to <code>automatic</code>, the optimal post height is calculated automatically to fit the timeline height specified by the height parameter. This option works only in horizontal timelines and only when the timeline height is defined. In vertical timelines, this setting is ignored. </li>
 * <li> Number &ndash; If set to a number, a corresponding number of text lines is displayed in every post.</li>
 * <li> Pixels &ndash; If set to a number followed by <code>px</code>, such as <code>50px</code>, the closest number in lines is calculated and applied to the timeline posts, so that the post height corresponds to the specified number of pixels and the text lines are not cut off in the middle of a line.</li>
 * <li> Any other valid {@link sap.ui.core.CSSSize CSSSize} value that is inserted into the text wrapper without being changed. </li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sTextHeight New value for property <code>textHeight</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setTextHeight = function(sTextHeight) { return new sap.suite.ui.commons.Timeline(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Sets the width of the Timeline.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.commons.Timeline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.Timeline.prototype.setWidth = function(sWidth) { return new sap.suite.ui.commons.Timeline(); };


// ---- sap.suite.ui.commons.TimelineAlignment --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineAlignment.toString = function() { return ""; };

// ---- sap.suite.ui.commons.TimelineAxisOrientation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineAxisOrientation.toString = function() { return ""; };

// ---- sap.suite.ui.commons.TimelineFilterListItem --------------------------------------------------------------------------

/**
 * Constructor for a new TimelineFilterListItem.
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
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getText text} : string</li>
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
 * Provides a filter criteria list for the items filter in the Timeline control.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.TimelineFilterListItem with name <code>sClassName</code>
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
sap.suite.ui.commons.TimelineFilterListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * A key for a filter criterion. Each filter criterion must have a unique key.
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TimelineFilterListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * A textual label for the filter criterion. This text is displayed in the filter criteria list in the UI.
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * A key for a filter criterion. Each filter criterion must have a unique key.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.suite.ui.commons.TimelineFilterListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.setKey = function(sKey) { return new sap.suite.ui.commons.TimelineFilterListItem(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * A textual label for the filter criterion. This text is displayed in the filter criteria list in the UI.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.suite.ui.commons.TimelineFilterListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterListItem.prototype.setText = function(sText) { return new sap.suite.ui.commons.TimelineFilterListItem(); };


// ---- sap.suite.ui.commons.TimelineFilterType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineFilterType.toString = function() { return ""; };

// ---- sap.suite.ui.commons.TimelineGroupType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineGroupType.toString = function() { return ""; };

// ---- sap.suite.ui.commons.TimelineItem --------------------------------------------------------------------------

/**
 * Constructor for a new TimelineItem.
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
 * <li>{@link #getDateTime dateTime} : any</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getIconTooltip iconTooltip} : string</li>
 * <li>{@link #getMaxCharacters maxCharacters} : int</li>
 * <li>{@link #getReplyCount replyCount} : int</li>
 * <li>{@link #getStatus status} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getUserName userName} : string</li>
 * <li>{@link #getUserNameClickable userNameClickable} : boolean (default: false)</li>
 * <li>{@link #getUserPicture userPicture} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomAction customAction} : sap.ui.core.CustomData[]</li>
 * <li>{@link #getCustomReply customReply} : sap.ui.core.Control</li>
 * <li>{@link #getEmbeddedControl embeddedControl} : sap.ui.core.Control (default)</li>
 * <li>{@link #getReplyList replyList} : sap.m.List</li>
 * <li>{@link #getSuggestionItems suggestionItems} : sap.m.StandardListItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:userNameClicked userNameClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:replyPost replyPost} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:replyListOpen replyListOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customActionClicked customActionClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:suggestionItemSelected suggestionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * An entry posted on the timeline.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.TimelineItem = function(sId,mSettings) {};
/**
 * Fired when custom action link is clicked.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value Value of the custom action.
 * @param {string} oControlEvent.getParameters.key Key of the custom action.
 * @param {sap.m.Link} oControlEvent.getParameters.linkObj Link on which the user clicked.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.customActionClicked = function(oControlEvent) {  };

/**
 * This event is fired when the Reply link is clicked to open the reply dialog.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.replyListOpen = function(oControlEvent) {  };

/**
 * This event is fired when the Reply button is clicked in the links section of a timeline post.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value Content of the reply to the post.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.replyPost = function(oControlEvent) {  };

/**
 * This event is fired when the user types text into the search field and showSuggestion
 * is set to true. Changing the suggestItems aggregation will show the suggestions inside a popup.<br>
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * @event
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.suggestValue The current value that has been typed into the search field.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.suggest = function(oControlEvent) {  };

/**
 * This event is fired when a suggested post is selected in the search suggestions popup. This event
 * is fired only when the showSuggestion propery is set to <code>true</code> and there are
 * suggested posts shown in the suggestions popup.<br>
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * @event
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The post selected in the suggestions popup.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.suggestionItemSelected = function(oControlEvent) {  };

/**
 * This event is fired when a user name is clicked in the post's header section.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.uiElement A clickable UI element representing the user name.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.userNameClicked = function(oControlEvent) {  };

/**
 * Adds some customAction to the aggregation {@link #getCustomAction customAction}.
 * @param {sap.ui.core.CustomData}
 *            oCustomAction the customAction to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.addCustomAction = function(oCustomAction) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Adds some suggestionItem to the aggregation {@link #getSuggestionItems suggestionItems}.
 * @param {sap.m.StandardListItem}
 *            oSuggestionItem the suggestionItem to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.addSuggestionItem = function(oSuggestionItem) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customActionClicked customActionClicked} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TimelineItem</code> itself.
 * 
 * Fired when custom action link is clicked.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code> itself
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachCustomActionClicked = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:replyListOpen replyListOpen} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TimelineItem</code> itself.
 * 
 * This event is fired when the Reply link is clicked to open the reply dialog.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code> itself
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachReplyListOpen = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:replyPost replyPost} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TimelineItem</code> itself.
 * 
 * This event is fired when the Reply button is clicked in the links section of a timeline post.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code> itself
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachReplyPost = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:suggest suggest} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TimelineItem</code> itself.
 * 
 * This event is fired when the user types text into the search field and showSuggestion
 * is set to true. Changing the suggestItems aggregation will show the suggestions inside a popup.<br>
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code> itself
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachSuggest = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:suggestionItemSelected suggestionItemSelected} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TimelineItem</code> itself.
 * 
 * This event is fired when a suggested post is selected in the search suggestions popup. This event
 * is fired only when the showSuggestion propery is set to <code>true</code> and there are
 * suggested posts shown in the suggestions popup.<br>
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code> itself
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachSuggestionItemSelected = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:userNameClicked userNameClicked} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.TimelineItem</code> itself.
 * 
 * This event is fired when a user name is clicked in the post's header section.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code> itself
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.attachUserNameClicked = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Destroys all the customAction in the aggregation {@link #getCustomAction customAction}.
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.destroyCustomAction = function() { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Destroys the customReply in the aggregation {@link #getCustomReply customReply}.
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.destroyCustomReply = function() { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Destroys the embeddedControl in the aggregation {@link #getEmbeddedControl embeddedControl}.
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.destroyEmbeddedControl = function() { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Destroys the replyList in the aggregation {@link #getReplyList replyList}.
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.destroyReplyList = function() { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Destroys all the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.destroySuggestionItems = function() { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customActionClicked customActionClicked} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachCustomActionClicked = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:replyListOpen replyListOpen} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachReplyListOpen = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:replyPost replyPost} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachReplyPost = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:suggest suggest} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachSuggest = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:suggestionItemSelected suggestionItemSelected} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachSuggestionItemSelected = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:userNameClicked userNameClicked} event of this <code>sap.suite.ui.commons.TimelineItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.detachUserNameClicked = function(fnFunction,oListener) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.TimelineItem with name <code>sClassName</code>
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
sap.suite.ui.commons.TimelineItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:customActionClicked customActionClicked} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.value] Value of the custom action.
 * @param {string} [mParameters.key] Key of the custom action.
 * @param {sap.m.Link} [mParameters.linkObj] Link on which the user clicked.
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireCustomActionClicked = function(mParameters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Fires event {@link #event:replyListOpen replyListOpen} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireReplyListOpen = function(mParameters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Fires event {@link #event:replyPost replyPost} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.value] Content of the reply to the post.
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireReplyPost = function(mParameters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Fires event {@link #event:suggest suggest} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.suggestValue] The current value that has been typed into the search field.
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireSuggest = function(mParameters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Fires event {@link #event:suggestionItemSelected suggestionItemSelected} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Item} [mParameters.selectedItem] The post selected in the suggestions popup.
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.1
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireSuggestionItemSelected = function(mParameters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Fires event {@link #event:userNameClicked userNameClicked} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.uiElement] A clickable UI element representing the user name.
 * 
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.fireUserNameClicked = function(mParameters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Gets content of aggregation {@link #getCustomAction customAction}.
 * 
 * Custom actions displayed as links in the links section of the post. The key must be unique
 * for each link. Values are used as labels for the link. When a user clicks the link, a customActionClicked
 * event is fired.
 * 
 * @returns {sap.ui.core.CustomData[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getCustomAction = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getCustomReply customReply}.
 * 
 * A UI5 control that acts as a custom reply dialog. It is used instead of the default reply dialog
 * that is displayed when the user clicks the Reply link. Supports UI5 controls that have an openBy method,
 * for example, the Popup control.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getCustomReply = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDateTime dateTime}.
 * 
 * Date and time value of the timeline post. This value must be in one of the following formats:
 * <ul>
 * <li> A valid instance of the <code>Date</code> object. </li>
 * <li> An integer representing Unix time (also known as POSIX or Epoch time) in milliseconds. </li>
 * <li> A string with an integer representing Unix time in milliseconds. </li>
 * <li> A string that contains <code>Date([number])</code>, where <code>[number]</code>
 * represents Unix time in milliseconds. </li>
 * </ul>
 * If this property has any other format, the timeline will try to parse it using <code>Date.parse</code>.
 * It is not recommended to use this functionality, as different web browsers implement this function differently,
 * which may lead to unpredictable behavior.
 * 
 * @returns {any} Value of property <code>dateTime</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getDateTime = function() { return null; };

/**
 * Gets content of aggregation {@link #getEmbeddedControl embeddedControl}.
 * 
 * A UI5 control that is displayed as a timeline post's content instead of the default content (text).
 * Examples of such a control include the Panel control and the List control.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getEmbeddedControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getFilterValue filterValue}.
 * 
 * Text for the items filter name. This text will be used as the name of the items filter in the
 * filter popover.
 * 
 * @returns {string} Value of property <code>filterValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getFilterValue = function() { return ""; };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon on the timeline axis that corresponds to the point in time when the entry was posted.
 * Posts can be displayed in chronological or reverse chronological order.
 * 
 * @returns {string} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getIcon = function() { return ""; };

/**
 * Gets current value of property {@link #getIconTooltip iconTooltip}.
 * 
 * Tooltip for an icon displayed on the timeline axis.
 * 
 * @returns {string} Value of property <code>iconTooltip</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getIconTooltip = function() { return ""; };

/**
 * Gets current value of property {@link #getMaxCharacters maxCharacters}.
 * 
 * The expand and collapse feature is set by default and uses 300 characters on mobile devices
 * and 500 characters on desktop computers as limits. Based on these values, the text of the timeline post
 * is collapsed once it reaches these character limits. In this case, only the specified number of characters
 * is displayed. By clicking the More link, the entire text can be displayed. Clicking Less collapses the text.
 * The application can set the value according to its needs.
 * 
 * @returns {int} Value of property <code>maxCharacters</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getMaxCharacters = function() { return 0; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TimelineItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TimelineItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getReplyCount replyCount}.
 * 
 * Number of replies to a timeline post.
 * 
 * @returns {int} Value of property <code>replyCount</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getReplyCount = function() { return 0; };

/**
 * Gets content of aggregation {@link #getReplyList replyList}.
 * 
 * A list of replies related to the post.
 * 
 * @returns {sap.m.List}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getReplyList = function() { return new sap.m.List(); };

/**
 * Gets current value of property {@link #getStatus status}.
 * 
 * Indicates the post status. The status affects the post's icon color. Supported values:
 * <ul>
 * <li> <code>Information</code> </li>
 * <li> <code>Success</code> </li>
 * <li> <code>Warning</code> </li>
 * <li> <code>Error</code> </li>
 * </ul>
 * 
 * @returns {string} Value of property <code>status</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getStatus = function() { return ""; };

/**
 * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * Suggested posts.<br>
 * As of version 1.46, replaced by {@link sap.collaboration.components.feed.Component}.
 * 
 * @returns {sap.m.StandardListItem[]}
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getSuggestionItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Text shown inside the timeline post.
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Text shown in the post title right after the user name.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getUserName userName}.
 * 
 * User name shown in the post title.
 * 
 * @returns {string} Value of property <code>userName</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getUserName = function() { return ""; };

/**
 * Gets current value of property {@link #getUserNameClickable userNameClickable}.
 * 
 * Makes the user name clickable. Clicking the name fires a userNameClicked event.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>userNameClickable</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getUserNameClickable = function() { return false; };

/**
 * Gets current value of property {@link #getUserPicture userPicture}.
 * 
 * Picture shown next to the user name.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>userPicture</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.getUserPicture = function() { return new sap.ui.core.URI(); };

/**
 * Checks for the provided <code>sap.ui.core.CustomData</code> in the aggregation {@link #getCustomAction customAction}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.CustomData}
 *           oCustomAction The customAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.indexOfCustomAction = function(oCustomAction) { return 0; };

/**
 * Checks for the provided <code>sap.m.StandardListItem</code> in the aggregation {@link #getSuggestionItems suggestionItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.StandardListItem}
 *           oSuggestionItem The suggestionItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.indexOfSuggestionItem = function(oSuggestionItem) { return 0; };

/**
 * Inserts a customAction into the aggregation {@link #getCustomAction customAction}.
 * 
 * @param {sap.ui.core.CustomData}
 *            oCustomAction the customAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the customAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customAction is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.insertCustomAction = function(oCustomAction,iIndex) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Inserts a suggestionItem into the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * @param {sap.m.StandardListItem}
 *            oSuggestionItem the suggestionItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the suggestionItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the suggestionItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the suggestionItem is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.insertSuggestionItem = function(oSuggestionItem,iIndex) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomAction customAction}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.CustomData[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.removeAllCustomAction = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.StandardListItem[]} An array of the removed elements (might be empty)
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.removeAllSuggestionItems = function() { return new Array(); };

/**
 * Removes a customAction from the aggregation {@link #getCustomAction customAction}.
 * 
 * @param {int | string | sap.ui.core.CustomData} vCustomAction The customAction to remove or its index or id
 * @returns {sap.ui.core.CustomData} The removed customAction or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.removeCustomAction = function(vCustomAction) { return new sap.ui.core.CustomData(); };

/**
 * Removes a suggestionItem from the aggregation {@link #getSuggestionItems suggestionItems}.
 * 
 * @param {int | string | sap.m.StandardListItem} vSuggestionItem The suggestionItem to remove or its index or id
 * @returns {sap.m.StandardListItem} The removed suggestionItem or <code>null</code>
 * 
 * @deprecated Since version 1.46.0.
 * Use the Group Feed Component instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.removeSuggestionItem = function(vSuggestionItem) { return new sap.m.StandardListItem(); };

/**
 * Sets the aggregated {@link #getCustomReply customReply}.
 * @param {sap.ui.core.Control} oCustomReply The customReply to set
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setCustomReply = function(oCustomReply) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getDateTime dateTime}.
 * 
 * Date and time value of the timeline post. This value must be in one of the following formats:
 * <ul>
 * <li> A valid instance of the <code>Date</code> object. </li>
 * <li> An integer representing Unix time (also known as POSIX or Epoch time) in milliseconds. </li>
 * <li> A string with an integer representing Unix time in milliseconds. </li>
 * <li> A string that contains <code>Date([number])</code>, where <code>[number]</code>
 * represents Unix time in milliseconds. </li>
 * </ul>
 * If this property has any other format, the timeline will try to parse it using <code>Date.parse</code>.
 * It is not recommended to use this functionality, as different web browsers implement this function differently,
 * which may lead to unpredictable behavior.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oDateTime New value for property <code>dateTime</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setDateTime = function(oDateTime) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets the aggregated {@link #getEmbeddedControl embeddedControl}.
 * @param {sap.ui.core.Control} oEmbeddedControl The embeddedControl to set
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setEmbeddedControl = function(oEmbeddedControl) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getFilterValue filterValue}.
 * 
 * Text for the items filter name. This text will be used as the name of the items filter in the
 * filter popover.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilterValue New value for property <code>filterValue</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setFilterValue = function(sFilterValue) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Icon on the timeline axis that corresponds to the point in time when the entry was posted.
 * Posts can be displayed in chronological or reverse chronological order.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sIcon New value for property <code>icon</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getIconTooltip iconTooltip}.
 * 
 * Tooltip for an icon displayed on the timeline axis.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sIconTooltip New value for property <code>iconTooltip</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setIconTooltip = function(sIconTooltip) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getMaxCharacters maxCharacters}.
 * 
 * The expand and collapse feature is set by default and uses 300 characters on mobile devices
 * and 500 characters on desktop computers as limits. Based on these values, the text of the timeline post
 * is collapsed once it reaches these character limits. In this case, only the specified number of characters
 * is displayed. By clicking the More link, the entire text can be displayed. Clicking Less collapses the text.
 * The application can set the value according to its needs.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iMaxCharacters New value for property <code>maxCharacters</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setMaxCharacters = function(iMaxCharacters) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getReplyCount replyCount}.
 * 
 * Number of replies to a timeline post.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iReplyCount New value for property <code>replyCount</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setReplyCount = function(iReplyCount) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets the aggregated {@link #getReplyList replyList}.
 * @param {sap.m.List} oReplyList The replyList to set
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setReplyList = function(oReplyList) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getStatus status}.
 * 
 * Indicates the post status. The status affects the post's icon color. Supported values:
 * <ul>
 * <li> <code>Information</code> </li>
 * <li> <code>Success</code> </li>
 * <li> <code>Warning</code> </li>
 * <li> <code>Error</code> </li>
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStatus New value for property <code>status</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setStatus = function(sStatus) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Text shown inside the timeline post.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setText = function(sText) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Text shown in the post title right after the user name.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getUserName userName}.
 * 
 * User name shown in the post title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sUserName New value for property <code>userName</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setUserName = function(sUserName) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getUserNameClickable userNameClickable}.
 * 
 * Makes the user name clickable. Clicking the name fires a userNameClicked event.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUserNameClickable New value for property <code>userNameClickable</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setUserNameClickable = function(bUserNameClickable) { return new sap.suite.ui.commons.TimelineItem(); };

/**
 * Sets a new value for property {@link #getUserPicture userPicture}.
 * 
 * Picture shown next to the user name.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sUserPicture New value for property <code>userPicture</code>
 * @returns {sap.suite.ui.commons.TimelineItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.TimelineItem.prototype.setUserPicture = function(sUserPicture) { return new sap.suite.ui.commons.TimelineItem(); };


// ---- sap.suite.ui.commons.TimelineNavigator --------------------------------------------------------------------------

/**
 * Creates an instance of TimelineNavigator.
 * 
 * @class TimelineNavigator An extension of ItemNavigator for Timeline.
 * 
 * @extends sap.ui.core.delegate.ItemNavigation
 * 
 * @param {Element} oDomRef The root DOM reference that includes all items
 * @param {Element[]} aItemDomRefs Array of DOM references representing the items for the navigation
 * @param {boolean} [bNotInTabChain=false] Whether the selected element should be in the tab chain or not
 * @param {Element[]} aRows 2D array of navigation items to navigate in. If not defined navigation will fallback to aItemDomRefs.
 * 
 * @constructor
 * @public
 * 
 */
sap.suite.ui.commons.TimelineNavigator = function(oDomRef,aItemDomRefs,bNotInTabChain,aRows) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.TimelineNavigator with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.delegate.ItemNavigation.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TimelineNavigator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.TimelineNavigator.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.TimelineNavigator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets the item DOM references as an array for the items
 * 
 * @param {Element[]} aItemDomRefs Array of DOM references representing the items
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.TimelineNavigator.prototype.setItemDomRefs = function(aItemDomRefs) { return new sap.ui.core.delegate.ItemNavigation(); };

/**
 * Update references to navigation objects.
 * @param {Element} oDomRef The root DOM reference that includes all items
 * @param {Element[]} aItemDomRefs Array of DOM references representing the items for the navigation
 * @param {Element[]} aRows 2D array of navigation items to navigate in. If not defined navigation will fallback to aItemDomRefs.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineNavigator.prototype.updateReferences = function(oDomRef,aItemDomRefs,aRows) {  };


// ---- sap.suite.ui.commons.TimelineScrollingFadeout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.TimelineScrollingFadeout.toString = function() { return ""; };

// ---- sap.suite.ui.commons.UnifiedThingGroup --------------------------------------------------------------------------

/**
 * Constructor for a new UnifiedThingGroup.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getDesign design} : sap.suite.ui.commons.ThingGroupDesign (default: ZeroIndent)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
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
 * This control is used in UnifiedThingInspector to display the facet header information.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation {@link #getContent content}.
 * @returns {sap.suite.ui.commons.UnifiedThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.destroyContent = function() { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.UnifiedThingGroup with name <code>sClassName</code>
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
sap.suite.ui.commons.UnifiedThingGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getContent content}.
 * 
 * The content of the group.
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * The description of the group.
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getDesign design}.
 * 
 * Defines how the control is rendered.
 * 
 * Default value is <code>ZeroIndent</code>.
 * @returns {sap.suite.ui.commons.ThingGroupDesign} Value of property <code>design</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getDesign = function() { return new sap.suite.ui.commons.ThingGroupDesign(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.UnifiedThingGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the group.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.getTitle = function() { return ""; };

/**
 * Sets the aggregated {@link #getContent content}.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.suite.ui.commons.UnifiedThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setContent = function(oContent) { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * The description of the group.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.suite.ui.commons.UnifiedThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * Sets a new value for property {@link #getDesign design}.
 * 
 * Defines how the control is rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>ZeroIndent</code>.
 * @param {sap.suite.ui.commons.ThingGroupDesign} sDesign New value for property <code>design</code>
 * @returns {sap.suite.ui.commons.UnifiedThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setDesign = function(sDesign) { return new sap.suite.ui.commons.UnifiedThingGroup(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of the group.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.UnifiedThingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingGroup.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.UnifiedThingGroup(); };


// ---- sap.suite.ui.commons.UnifiedThingInspector --------------------------------------------------------------------------

/**
 * Constructor for a new UnifiedThingInspector.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTransactionsVisible transactionsVisible} : boolean (default: false)</li>
 * <li>{@link #getActionsVisible actionsVisible} : boolean (default: false)</li>
 * <li>{@link #getDestroyPageOnBack destroyPageOnBack} : boolean (default: true)</li>
 * <li>{@link #getConfigurationVisible configurationVisible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFacets facets} : sap.suite.ui.commons.FacetOverview[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getKpis kpis} : sap.suite.ui.commons.KpiTile[]</li>
 * <li>{@link #getTransactions transactions} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.m.Button[]</li>
 * <li>{@link #getPages pages} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:backAction backAction} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:transactionsButtonPress transactionsButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:actionsButtonPress actionsButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:configurationButtonPress configurationButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterNavigate afterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This control provides an ability to display a thing (for example, object factsheet) on the desktop, tablet, and phone devices in a Fiori style.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Object page should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the Actions button.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.actionsButtonPress = function(oControlEvent) {  };

/**
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page that had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page that had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page that is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page that is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page that has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.afterNavigate = function(oControlEvent) {  };

/**
 * The event is fired when the user chooses the Back button.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.backAction = function(oControlEvent) {  };

/**
 * The event is fired when the user chooses the Configuration button.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.configurationButtonPress = function(oControlEvent) {  };

/**
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page that was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page that was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page that will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page that will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page that is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigate = function(oControlEvent) {  };

/**
 * The event is fired when the user chooses the Transactions button.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.transactionsButtonPress = function(oControlEvent) {  };

/**
 * Adds some action to the aggregation {@link #getActions actions}.
 * @param {sap.m.Button}
 *            oAction the action to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addAction = function(oAction) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Adds some facet to the aggregation {@link #getFacets facets}.
 * @param {sap.suite.ui.commons.FacetOverview}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addFacet = function(oFacet) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
 * @param {sap.ui.core.Control}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addFacetContent = function(oFacetContent) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Adds some kpi to the aggregation {@link #getKpis kpis}.
 * @param {sap.suite.ui.commons.KpiTile}
 *            oKpi the kpi to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addKpi = function(oKpi) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Adds some page to the aggregation {@link #getPages pages}.
 * @param {sap.ui.core.Control}
 *            oPage the page to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addPage = function(oPage) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Adds some transaction to the aggregation {@link #getTransactions transactions}.
 * @param {sap.ui.core.Control}
 *            oTransaction the transaction to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.addTransaction = function(oTransaction) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:actionsButtonPress actionsButtonPress} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself.
 * 
 * The event is fired when the user chooses the Actions button.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachActionsButtonPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterNavigate afterNavigate} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself.
 * 
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachAfterNavigate = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:backAction backAction} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself.
 * 
 * The event is fired when the user chooses the Back button.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachBackAction = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:configurationButtonPress configurationButtonPress} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself.
 * 
 * The event is fired when the user chooses the Configuration button.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachConfigurationButtonPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:navigate navigate} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself.
 * 
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:transactionsButtonPress transactionsButtonPress} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself.
 * 
 * The event is fired when the user chooses the Transactions button.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code> itself
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.attachTransactionsButtonPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Destroys all the actions in the aggregation {@link #getActions actions}.
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyActions = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyFacetContent = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Destroys all the facets in the aggregation {@link #getFacets facets}.
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyFacets = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Destroys all the kpis in the aggregation {@link #getKpis kpis}.
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyKpis = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Destroys all the pages in the aggregation {@link #getPages pages}.
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyPages = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Destroys all the transactions in the aggregation {@link #getTransactions transactions}.
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyTransactions = function() { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:actionsButtonPress actionsButtonPress} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachActionsButtonPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterNavigate afterNavigate} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachAfterNavigate = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:backAction backAction} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachBackAction = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:configurationButtonPress configurationButtonPress} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachConfigurationButtonPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:navigate navigate} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:transactionsButtonPress transactionsButtonPress} event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.detachTransactionsButtonPress = function(fnFunction,oListener) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.UnifiedThingInspector with name <code>sClassName</code>
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
sap.suite.ui.commons.UnifiedThingInspector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:actionsButtonPress actionsButtonPress} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.caller] The object that initiated the event.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireActionsButtonPress = function(mParameters) { return false; };

/**
 * Fires event {@link #event:afterNavigate afterNavigate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page that had been shown before navigation.
 * @param {string} [mParameters.fromId] The ID of the page that had been shown before navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page that is now shown after navigation.
 * @param {string} [mParameters.toId] The ID of the page that is now shown after navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page that has been navigated to) had not been shown/navigated to before.
 * @param {boolean} [mParameters.isTo] Whether was a forward navigation, triggered by "to()".
 * @param {boolean} [mParameters.isBack] Whether this was a back navigation, triggered by "back()".
 * @param {boolean} [mParameters.isBackToTop] Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} [mParameters.isBackToPage] Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} [mParameters.direction] How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireAfterNavigate = function(mParameters) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Fires event {@link #event:backAction backAction} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireBackAction = function(mParameters) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Fires event {@link #event:configurationButtonPress configurationButtonPress} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.caller] The object that initiated the event.
 * 
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireConfigurationButtonPress = function(mParameters) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Fires event {@link #event:navigate navigate} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Control} [mParameters.from] The page that was shown before the current navigation.
 * @param {string} [mParameters.fromId] The ID of the page that was shown before the current navigation.
 * @param {sap.ui.core.Control} [mParameters.to] The page that will be shown after the current navigation.
 * @param {string} [mParameters.toId] The ID of the page that will be shown after the current navigation.
 * @param {boolean} [mParameters.firstTime] Whether the "to" page (more precisely: a control with the ID of the page that is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} [mParameters.isTo] Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} [mParameters.isBack] Whether this is a back navigation, triggered by "back()".
 * @param {boolean} [mParameters.isBackToTop] Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} [mParameters.isBackToPage] Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} [mParameters.direction] How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireNavigate = function(mParameters) { return false; };

/**
 * Fires event {@link #event:transactionsButtonPress transactionsButtonPress} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.caller] The object that initiated the event.
 * 
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.fireTransactionsButtonPress = function(mParameters) { return false; };

/**
 * Gets content of aggregation {@link #getActions actions}.
 * 
 * Action sheet controls.
 * 
 * @returns {sap.m.Button[]}
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getActions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getActionsVisible actionsVisible}.
 * 
 * If set to true, the Actions button appears.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>actionsVisible</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getActionsVisible = function() { return false; };

/**
 * Gets current value of property {@link #getConfigurationVisible configurationVisible}.
 * 
 * If set to true, the Configuration button appears.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>configurationVisible</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getConfigurationVisible = function() { return false; };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * The description of the thing.
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getDestroyPageOnBack destroyPageOnBack}.
 * 
 * If set to true, destroys a page when the user chooses the Back button to leave this page.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>destroyPageOnBack</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getDestroyPageOnBack = function() { return false; };

/**
 * Gets content of aggregation {@link #getFacetContent facetContent}.
 * 
 * The content that appears on the detail page of the UnifiedThingInspector.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getFacetContent = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFacets facets}.
 * 
 * The list of the sap.suite.ui.commons.FacetOverview objects.
 * 
 * @returns {sap.suite.ui.commons.FacetOverview[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getFacets = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the control.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * The icon to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getKpis kpis}.
 * 
 * A set of the KPI tiles to be shown in the header. Currently only 3 tiles from the list are displayed on the desktop and tablet. On the phone, all tiles are displayed in a swipeable container.
 * 
 * @returns {sap.suite.ui.commons.KpiTile[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getKpis = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.commons.UnifiedThingInspector.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getName name}.
 * 
 * The name of the thing.
 * 
 * @returns {string} Value of property <code>name</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getName = function() { return ""; };

/**
 * Gets content of aggregation {@link #getPages pages}.
 * 
 * Contains pages except for Master and Detail.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getPages = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The title of the thing.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getTitle = function() { return ""; };

/**
 * Gets content of aggregation {@link #getTransactions transactions}.
 * 
 * Menu items for transaction popup.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getTransactions = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTransactionsVisible transactionsVisible}.
 * 
 * If set to true, the Transaction button appears.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>transactionsVisible</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.getTransactionsVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getActions actions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *           oAction The action whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * Checks for the provided <code>sap.suite.ui.commons.FacetOverview</code> in the aggregation {@link #getFacets facets}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.FacetOverview}
 *           oFacet The facet whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfFacet = function(oFacet) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFacetContent facetContent}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oFacetContent The facetContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfFacetContent = function(oFacetContent) { return 0; };

/**
 * Checks for the provided <code>sap.suite.ui.commons.KpiTile</code> in the aggregation {@link #getKpis kpis}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.KpiTile}
 *           oKpi The kpi whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfKpi = function(oKpi) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getPages pages}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oPage The page whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfPage = function(oPage) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTransactions transactions}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oTransaction The transaction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfTransaction = function(oTransaction) { return 0; };

/**
 * Inserts a action into the aggregation {@link #getActions actions}.
 * 
 * @param {sap.m.Button}
 *            oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the action should be inserted at; for
 *              a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the action is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertAction = function(oAction,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Inserts a facet into the aggregation {@link #getFacets facets}.
 * 
 * @param {sap.suite.ui.commons.FacetOverview}
 *            oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the facet should be inserted at; for
 *              a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the facet is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertFacet = function(oFacet,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
 * 
 * @param {sap.ui.core.Control}
 *            oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the facetContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the facetContent is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertFacetContent = function(oFacetContent,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Inserts a kpi into the aggregation {@link #getKpis kpis}.
 * 
 * @param {sap.suite.ui.commons.KpiTile}
 *            oKpi the kpi to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the kpi should be inserted at; for
 *              a negative value of <code>iIndex</code>, the kpi is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the kpi is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertKpi = function(oKpi,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Inserts a page into the aggregation {@link #getPages pages}.
 * 
 * @param {sap.ui.core.Control}
 *            oPage the page to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the page should be inserted at; for
 *              a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the page is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertPage = function(oPage,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Inserts a transaction into the aggregation {@link #getTransactions transactions}.
 * 
 * @param {sap.ui.core.Control}
 *            oTransaction the transaction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the transaction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the transaction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the transaction is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.insertTransaction = function(oTransaction,iIndex) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Removes a action from the aggregation {@link #getActions actions}.
 * 
 * @param {int | string | sap.m.Button} vAction The action to remove or its index or id
 * @returns {sap.m.Button} The removed action or <code>null</code>
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAction = function(vAction) { return new sap.m.Button(); };

/**
 * Removes all the controls from the aggregation {@link #getActions actions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Button[]} An array of the removed elements (might be empty)
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllActions = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllFacetContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getFacets facets}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.FacetOverview[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllFacets = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getKpis kpis}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.KpiTile[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllKpis = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getPages pages}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllPages = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getTransactions transactions}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllTransactions = function() { return new Array(); };

/**
 * Removes a facet from the aggregation {@link #getFacets facets}.
 * 
 * @param {int | string | sap.suite.ui.commons.FacetOverview} vFacet The facet to remove or its index or id
 * @returns {sap.suite.ui.commons.FacetOverview} The removed facet or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeFacet = function(vFacet) { return new sap.suite.ui.commons.FacetOverview(); };

/**
 * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
 * 
 * @param {int | string | sap.ui.core.Control} vFacetContent The facetContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed facetContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeFacetContent = function(vFacetContent) { return new sap.ui.core.Control(); };

/**
 * Removes a kpi from the aggregation {@link #getKpis kpis}.
 * 
 * @param {int | string | sap.suite.ui.commons.KpiTile} vKpi The kpi to remove or its index or id
 * @returns {sap.suite.ui.commons.KpiTile} The removed kpi or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeKpi = function(vKpi) { return new sap.suite.ui.commons.KpiTile(); };

/**
 * Removes a page from the aggregation {@link #getPages pages}.
 * 
 * @param {int | string | sap.ui.core.Control} vPage The page to remove or its index or id
 * @returns {sap.ui.core.Control} The removed page or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removePage = function(vPage) { return new sap.ui.core.Control(); };

/**
 * Removes a transaction from the aggregation {@link #getTransactions transactions}.
 * 
 * @param {int | string | sap.ui.core.Control} vTransaction The transaction to remove or its index or id
 * @returns {sap.ui.core.Control} The removed transaction or <code>null</code>
 * 
 * @deprecated Since version 1.18.2.
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.removeTransaction = function(vTransaction) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getActionsVisible actionsVisible}.
 * 
 * If set to true, the Actions button appears.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bActionsVisible New value for property <code>actionsVisible</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setActionsVisible = function(bActionsVisible) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getConfigurationVisible configurationVisible}.
 * 
 * If set to true, the Configuration button appears.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bConfigurationVisible New value for property <code>configurationVisible</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setConfigurationVisible = function(bConfigurationVisible) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * The description of the thing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setDescription = function(sDescription) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getDestroyPageOnBack destroyPageOnBack}.
 * 
 * If set to true, destroys a page when the user chooses the Back button to leave this page.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDestroyPageOnBack New value for property <code>destroyPageOnBack</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setDestroyPageOnBack = function(bDestroyPageOnBack) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * The icon to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setIcon = function(sIcon) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * The name of the thing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setName = function(sName) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The title of the thing.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setTitle = function(sTitle) { return new sap.suite.ui.commons.UnifiedThingInspector(); };

/**
 * Sets a new value for property {@link #getTransactionsVisible transactionsVisible}.
 * 
 * If set to true, the Transaction button appears.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bTransactionsVisible New value for property <code>transactionsVisible</code>
 * @returns {sap.suite.ui.commons.UnifiedThingInspector} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.UnifiedThingInspector.prototype.setTransactionsVisible = function(bTransactionsVisible) { return new sap.suite.ui.commons.UnifiedThingInspector(); };


// ---- sap.suite.ui.commons.util.HtmlElement --------------------------------------------------------------------------

/**
 * Creates a HtmlElement which resembles one HTML tag.
 * 
 * 
 * @class HtmlElement A model class for holding information about one HTML tag.
 * 
 * @extends sap.ui.base.Object
 * 
 * @param {string} sName Tag name (eg. div, ul etc.).
 * 
 * @constructor
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement = function(sName) {};
/**
 * Adds a child to the element. A child can be either text, another HtmlElement or a Control. Children will e rendered
 * as a content of this element.
 * @param {string|sap.suite.ui.commons.util.HtmlElement|sap.ui.core.Control} oChild Child to add.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.addChild = function(oChild) {  };

/**
 * Adds a string child and escapes it using encodeHTML.
 * @param {string} sText Text to add.
 * @param {boolean} bConvertLineBreakToBr If true, \n will be converted to <br>.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.addChildEscaped = function(sText,bConvertLineBreakToBr) {  };

/**
 * Adds a class.
 * @param {string} sClass - CSS class to add.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.addClass = function(sClass) {  };

/**
 * Adds all html relevant data from UI5 control. It sets ID, adds all custom data and adds custom style classes.
 * This function should be called on the element which resembles the rendered control. It's usually the top element.
 * @param {sap.ui.core.Control} oControl Control to load data from. Usually the control which resembles this element.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.addControlData = function(oControl) {  };

/**
 * Adds a HTML style (eg. "color:red").
 * @param {string} sName Name of the style (eg. margin, color).
 * @param {string|number} oValue Value of the style.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.addStyle = function(sName,oValue) {  };

/**
 * Creates a new subclass of class sap.suite.ui.commons.util.HtmlElement with name <code>sClassName</code>
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
sap.suite.ui.commons.util.HtmlElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.util.HtmlElement.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.util.HtmlElement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a renderer for this tag.
 * @returns {sap.suite.ui.commons.util.HtmlElementRenderer} The newly created renderer instance
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.getRenderer = function() { return new sap.suite.ui.commons.util.HtmlElementRenderer(); };

/**
 * Sets an attribute.
 * @param {string} sKey Attribute name.
 * @param {string|number|boolean} oValue Value of an attribute.
 * @param {boolean} [bEscape="false"] Tells if the value should be escaped using encodeHTML.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.setAttribute = function(sKey,oValue,bEscape) {  };

/**
 * Sets id attribute.
 * @param {string} sId Id to set.
 * @param {boolean} [bAddSapUi="false"] If true, data-sap-ui will be set to the Id as well.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElement.prototype.setId = function(sId,bAddSapUi) {  };


// ---- sap.suite.ui.commons.util.HtmlElementRenderer --------------------------------------------------------------------------

/**
 * Creates a renderer for HtmlElement.
 * 
 * 
 * @class HtmlElementRenderer A renderer for HtmlElement.
 * 
 * @extends sap.ui.base.Object
 * 
 * @param {sap.suite.ui.commons.util.HtmlElement} oHtmlElement Html element to render.
 * 
 * @constructor
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElementRenderer = function(oHtmlElement) {};
/**
 * Renders all attributes of parent tag.
 * @param {sap.ui.core.RenderManager} oRm RenderManager used for outputting content.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElementRenderer.prototype._renderAttributes = function(oRm) {  };

/**
 * Renders children of given node.
 * @param {sap.ui.core.RenderManager} oRm RenderManager used for outputting content.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElementRenderer.prototype._renderChildren = function(oRm) {  };

/**
 * Creates a new subclass of class sap.suite.ui.commons.util.HtmlElementRenderer with name <code>sClassName</code>
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
sap.suite.ui.commons.util.HtmlElementRenderer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.util.HtmlElementRenderer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.util.HtmlElementRenderer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Renders HtmlElement to given render manager.
 * @param {sap.ui.core.RenderManager} oRm RenderManager used for outputting content.
 * @protected
 * 
 */
sap.suite.ui.commons.util.HtmlElementRenderer.prototype.render = function(oRm) {  };


// ---- sap.suite.ui.commons.util.ManagedObjectRegister --------------------------------------------------------------------------

/**
 * Creates an object registry for storing references to managed objects.
 * 
 * 
 * @class A registry which keeps a set of managed objects and allows you to lazy load them and destroy them at once.
 * A lot of controls keep those object as private properties and destroies them one by one.
 * Instead you can just use:
 * <pre><code>
 * this._objectRegister = new ManagedObjectRegister();
 * this._objectRegister.register("Button", function() {
 *  return new Button(...);
 * });
 * 
 * this._objectRegister.getButton()...
 * 
 * this._objectRegister.destroyAll();
 * </code></pre>
 * 
 * @extends sap.ui.base.Object
 * 
 * @constructor
 * @protected
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister = function() {};
/**
 * Destroys all objects in the registry and removes it's definition.
 * @protected
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister.prototype.destroyAll = function() {  };

/**
 * Destroys an object and removes it from the registry.
 * @param {string} sKey Key of the object.
 * @protected
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister.prototype.destroyObject = function(sKey) {  };

/**
 * Creates a new subclass of class sap.suite.ui.commons.util.ManagedObjectRegister with name <code>sClassName</code>
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
sap.suite.ui.commons.util.ManagedObjectRegister.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.util.ManagedObjectRegister.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a stored object. If called without parameters it will return object registered with key "Object".
 * @param {string} [sKey="Object"] Key of the object.
 * @returns {sap.ui.base.ManagedObject} An object from the register. If the object doesn't exist it will get created by it's factory function.
 * @protected
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister.prototype.getObject = function(sKey) { return new sap.ui.base.ManagedObject(); };

/**
 * Returns true if there is the object registered and created. If there is not triggered factory function, returns false.
 * @param {string} [sKey="Object"] Key of the object.
 * @returns {boolean} True for existing object
 * @protected
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister.prototype.isObjectInitialized = function(sKey) { return false; };

/**
 * Registers an object. Registry will automatically create a getter for the object.
 * @param {string} sKey Key of the object. Should start with capital letter.
 * @param {function|sap.ui.base.ManagedObject} oFactoryFunction A managed object to register or a factory function which can build the object.
 * Factory function can be used for lazy loading of the object. Register will pass sKey to the function, so it can be shared for more objects.
 * @protected
 * 
 */
sap.suite.ui.commons.util.ManagedObjectRegister.prototype.register = function(sKey,oFactoryFunction) {  };


// ---- sap.suite.ui.commons.ValueStatus --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.commons.ValueStatus.toString = function() { return ""; };

// ---- sap.suite.ui.commons.VerticalNavigationBar --------------------------------------------------------------------------

/**
 * Constructor for a new VerticalNavigationBar.
 * 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control extends the sap.ui.ux3.NavigationBar and
 * allows you to display navigation items vertically. The navigation list
 * can contain sap.ui.ux3.NavigationItem or
 * sap.suite.ui.commons.CountingNavigationItem controls.
 * @extends sap.ui.ux3.NavigationBar
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. sap.uxap.ObjectPageLayout should be used instead.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.VerticalNavigationBar = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.commons.VerticalNavigationBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.ux3.NavigationBar.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.VerticalNavigationBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.VerticalNavigationBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.VerticalNavigationBar.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.suite.ui.commons.ViewRepeater --------------------------------------------------------------------------

/**
 * Constructor for a new ViewRepeater.
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
 * <li>{@link #getItemMinWidth itemMinWidth} : int</li>
 * <li>{@link #getResponsive responsive} : boolean (default: false)</li>
 * <li>{@link #getDefaultViewIndex defaultViewIndex} : int (default: 0)</li>
 * <li>{@link #getShowSearchField showSearchField} : boolean (default: true)</li>
 * <li>{@link #getShowViews showViews} : boolean (default: true)</li>
 * <li>{@link #getExternal external} : boolean (default: false)</li>
 * <li>{@link #getItemHeight itemHeight} : int</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getViews views} : sap.suite.ui.commons.RepeaterViewConfiguration[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getExternalRepresentation externalRepresentation} : (sap.ui.core.ID | sap.ui.core.Control)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:changeView changeView} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.RowRepeater#constructor sap.ui.commons.RowRepeater}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control extends the sap.ui.commons.RowRepeater control providing an ability to change data representation by switching between a number of views. The data can be displayed not only in rows but also in tiles that are adjusted to fill the entire horizontal space in a row.
 * @extends sap.ui.commons.RowRepeater
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.32.
 * Deprecated. Standard Fiori technology should be used.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.commons.ViewRepeater = function(sId,mSettings) {};
/**
 * This event is fired when a user switches between views.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.oldViewIndex Contains an index of the previous view in the Views aggregation.
 * @param {int} oControlEvent.getParameters.newViewIndex Contains an index of the new view in the Views aggregation.
 * @param {string} oControlEvent.getParameters.filterId Contains an ID of the filter in the Filters aggregation.
 * @param {string} oControlEvent.getParameters.sorterId Contains an ID of the sorter in the Sorters aggregation.
 * @param {int} oControlEvent.getParameters.page Contains a page number.
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.changeView = function(oControlEvent) {  };

/**
 * This event is fired when the user performs a search.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query.
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.search = function(oControlEvent) {  };

/**
 * Adds some view to the aggregation {@link #getViews views}.
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *            oView the view to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.addView = function(oView) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:changeView changeView} event of this <code>sap.suite.ui.commons.ViewRepeater</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ViewRepeater</code> itself.
 * 
 * This event is fired when a user switches between views.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ViewRepeater</code> itself
 * 
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.attachChangeView = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:search search} event of this <code>sap.suite.ui.commons.ViewRepeater</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.commons.ViewRepeater</code> itself.
 * 
 * This event is fired when the user performs a search.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ViewRepeater</code> itself
 * 
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Destroys all the views in the aggregation {@link #getViews views}.
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.destroyViews = function() { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:changeView changeView} event of this <code>sap.suite.ui.commons.ViewRepeater</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.detachChangeView = function(fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:search search} event of this <code>sap.suite.ui.commons.ViewRepeater</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.detachSearch = function(fnFunction,oListener) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Creates a new subclass of class sap.suite.ui.commons.ViewRepeater with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.commons.RowRepeater.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ViewRepeater.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:changeView changeView} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.oldViewIndex] Contains an index of the previous view in the Views aggregation.
 * @param {int} [mParameters.newViewIndex] Contains an index of the new view in the Views aggregation.
 * @param {string} [mParameters.filterId] Contains an ID of the filter in the Filters aggregation.
 * @param {string} [mParameters.sorterId] Contains an ID of the sorter in the Sorters aggregation.
 * @param {int} [mParameters.page] Contains a page number.
 * 
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.fireChangeView = function(mParameters) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Fires event {@link #event:search search} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.query] The search query.
 * 
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.fireSearch = function(mParameters) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Gets current value of property {@link #getDefaultViewIndex defaultViewIndex}.
 * 
 * The index of the default view starting from 0. The view is selected on the initial rendering of the control. If the index is greater than the total quantity of the views, the last view is selected.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>defaultViewIndex</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getDefaultViewIndex = function() { return 0; };

/**
 * Gets current value of property {@link #getExternal external}.
 * 
 * Indicates if the external representation of the current view is rendered.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>external</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getExternal = function() { return false; };

/**
 * ID of the element which is the current target of the association {@link #getExternalRepresentation externalRepresentation}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getExternalRepresentation = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the control. Only applicable if the responsive property is set to true.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getItemHeight itemHeight}.
 * 
 * The height of the tile in the current view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 * 
 * @returns {int} Value of property <code>itemHeight</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getItemHeight = function() { return 0; };

/**
 * Gets current value of property {@link #getItemMinWidth itemMinWidth}.
 * 
 * The minimal width of the tile for the current view. Only applicable if "responsive" property is set to true.
 * 
 * @returns {int} Value of property <code>itemMinWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getItemMinWidth = function() { return 0; };

/**
 * Returns a metadata object for class sap.suite.ui.commons.ViewRepeater.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.commons.ViewRepeater.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getResponsive responsive}.
 * 
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>responsive</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getResponsive = function() { return false; };

/**
 * Gets current value of property {@link #getShowSearchField showSearchField}.
 * 
 * Indicates if the search field panel is shown.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSearchField</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getShowSearchField = function() { return false; };

/**
 * Gets current value of property {@link #getShowViews showViews}.
 * 
 * Indicates if the view selector panel is shown.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showViews</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getShowViews = function() { return false; };

/**
 * Gets content of aggregation {@link #getViews views}.
 * 
 * The list of views for the data representation.
 * 
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration[]}
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.getViews = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.suite.ui.commons.RepeaterViewConfiguration</code> in the aggregation {@link #getViews views}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *           oView The view whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.indexOfView = function(oView) { return 0; };

/**
 * Inserts a view into the aggregation {@link #getViews views}.
 * 
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *            oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the view should be inserted at; for
 *              a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the view is inserted at
 *              the last position
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.insertView = function(oView,iIndex) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Removes all the controls from the aggregation {@link #getViews views}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.removeAllViews = function() { return new Array(); };

/**
 * Removes a view from the aggregation {@link #getViews views}.
 * 
 * @param {int | string | sap.suite.ui.commons.RepeaterViewConfiguration} vView The view to remove or its index or id
 * @returns {sap.suite.ui.commons.RepeaterViewConfiguration} The removed view or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.removeView = function(vView) { return new sap.suite.ui.commons.RepeaterViewConfiguration(); };

/**
 * Sets a new value for property {@link #getDefaultViewIndex defaultViewIndex}.
 * 
 * The index of the default view starting from 0. The view is selected on the initial rendering of the control. If the index is greater than the total quantity of the views, the last view is selected.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iDefaultViewIndex New value for property <code>defaultViewIndex</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setDefaultViewIndex = function(iDefaultViewIndex) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getExternal external}.
 * 
 * Indicates if the external representation of the current view is rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExternal New value for property <code>external</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setExternal = function(bExternal) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets the associated {@link #getExternalRepresentation externalRepresentation}.
 * @param {sap.ui.core.ID | sap.ui.core.Control} oExternalRepresentation ID of an element which becomes the new target of this externalRepresentation association; alternatively, an element instance may be given
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setExternalRepresentation = function(oExternalRepresentation) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the control. Only applicable if the responsive property is set to true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setHeight = function(sHeight) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getItemHeight itemHeight}.
 * 
 * The height of the tile in the current view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iItemHeight New value for property <code>itemHeight</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setItemHeight = function(iItemHeight) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getItemMinWidth itemMinWidth}.
 * 
 * The minimal width of the tile for the current view. Only applicable if "responsive" property is set to true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iItemMinWidth New value for property <code>itemMinWidth</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setItemMinWidth = function(iItemMinWidth) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getResponsive responsive}.
 * 
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bResponsive New value for property <code>responsive</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setResponsive = function(bResponsive) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getShowSearchField showSearchField}.
 * 
 * Indicates if the search field panel is shown.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSearchField New value for property <code>showSearchField</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setShowSearchField = function(bShowSearchField) { return new sap.suite.ui.commons.ViewRepeater(); };

/**
 * Sets a new value for property {@link #getShowViews showViews}.
 * 
 * Indicates if the view selector panel is shown.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowViews New value for property <code>showViews</code>
 * @returns {sap.suite.ui.commons.ViewRepeater} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.commons.ViewRepeater.prototype.setShowViews = function(bShowViews) { return new sap.suite.ui.commons.ViewRepeater(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.suite.ui.commons.BulletChartMode --------------------------------------------------------------------------

/**
 * Displays the Actual value.
 * @public
 * 
 */
sap.suite.ui.commons.BulletChartMode.Actual = "";

/**
 * Displays delta between the Actual and Threshold values.
 * @public
 * 
 */
sap.suite.ui.commons.BulletChartMode.Delta = "";


// ---- sap.suite.ui.commons.CommonBackground --------------------------------------------------------------------------

/**
 * Dark background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.Dark = "";

/**
 * The darkest background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.Darkest = "";

/**
 * Extra dark background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.ExtraDark = "";

/**
 * Extra light background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.ExtraLight = "";

/**
 * Light background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.Light = "";

/**
 * The lightest background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.Lightest = "";

/**
 * Medium background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.Medium = "";

/**
 * Medium light background color.
 * @public
 * 
 */
sap.suite.ui.commons.CommonBackground.MediumLight = "";


// ---- sap.suite.ui.commons.ComparisonChartView --------------------------------------------------------------------------

/**
 * Titles and values are displayed above the bars.
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChartView.Normal = "";

/**
 * Titles and values are displayed in the same line with the bars.
 * @public
 * 
 */
sap.suite.ui.commons.ComparisonChartView.Wide = "";


// ---- sap.suite.ui.commons.DeviationIndicator --------------------------------------------------------------------------

/**
 * The actual value is less than the target value.
 * @public
 * 
 */
sap.suite.ui.commons.DeviationIndicator.Down = "";

/**
 * No value.
 * @public
 * 
 */
sap.suite.ui.commons.DeviationIndicator.None = "";

/**
 * The actual value is more than the target value.
 * @public
 * 
 */
sap.suite.ui.commons.DeviationIndicator.Up = "";


// ---- sap.suite.ui.commons.FacetOverviewHeight --------------------------------------------------------------------------

/**
 * Content based height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.Auto = "";

/**
 * Large height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.L = "";

/**
 * Medium height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.M = "";

/**
 * No value. The height of the control is defined by depricated height property.
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.None = "";

/**
 * Small height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.S = "";

/**
 * Extra Large height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.XL = "";

/**
 * Extra small height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.XS = "";

/**
 * Extra extra large height
 * @public
 * 
 */
sap.suite.ui.commons.FacetOverviewHeight.XXL = "";


// ---- sap.suite.ui.commons.FrameType --------------------------------------------------------------------------

/**
 * The Auto frame type that adjusts the size of the control to the content.
 * @public
 * 
 */
sap.suite.ui.commons.FrameType.Auto = "";

/**
 * The 1x1 frame type.
 * @public
 * 
 */
sap.suite.ui.commons.FrameType.OneByOne = "";

/**
 * The 2x1 frame type.
 * @public
 * 
 */
sap.suite.ui.commons.FrameType.TwoByOne = "";

/**
 * The 2/3 frame type.
 * @public
 * 
 */
sap.suite.ui.commons.FrameType.TwoThirds = "";


// ---- sap.suite.ui.commons.HeaderContainerView --------------------------------------------------------------------------

/**
 * The horizontal orientation of the control.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainerView.Horizontal = "";

/**
 * The vertical orientation of the control.
 * 
 * @public
 * 
 */
sap.suite.ui.commons.HeaderContainerView.Vertical = "";


// ---- sap.suite.ui.commons.InfoTileSize --------------------------------------------------------------------------

/**
 * The size of the tile depends on the device it is running on. It is large on desktop, medium on tablet and small on phone.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileSize.Auto = "";

/**
 * Large size.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileSize.L = "";

/**
 * Medium size.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileSize.M = "";

/**
 * Small size.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileSize.S = "";

/**
 * Extra small size.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileSize.XS = "";


// ---- sap.suite.ui.commons.InfoTileTextColor --------------------------------------------------------------------------

/**
 * Critical InfoTile text color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileTextColor.Critical = "";

/**
 * Negative InfoTile text color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileTextColor.Negative = "";

/**
 * Positive InfoTile text color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileTextColor.Positive = "";


// ---- sap.suite.ui.commons.InfoTileValueColor --------------------------------------------------------------------------

/**
 * Critical InfoTile value color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileValueColor.Critical = "";

/**
 * Error InfoTile value color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileValueColor.Error = "";

/**
 * Good InfoTile value color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileValueColor.Good = "";

/**
 * Neutral InfoTile value color.
 * @public
 * 
 */
sap.suite.ui.commons.InfoTileValueColor.Neutral = "";


// ---- sap.suite.ui.commons.LoadState --------------------------------------------------------------------------

/**
 * LoadableView disabled to load the control.
 * @public
 * 
 */
sap.suite.ui.commons.LoadState.Disabled = "";

/**
 * LoadableView failed to load the control.
 * @public
 * 
 */
sap.suite.ui.commons.LoadState.Failed = "";

/**
 * LoadableView has loaded the control.
 * @public
 * 
 */
sap.suite.ui.commons.LoadState.Loaded = "";

/**
 * LoadableView is loading the control.
 * @public
 * 
 */
sap.suite.ui.commons.LoadState.Loading = "";


// ---- sap.suite.ui.commons.MicroAreaChartView --------------------------------------------------------------------------

/**
 * The view with labels on the top and bottom.
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartView.Normal = "";

/**
 * The view with labels on the left and right.
 * @public
 * 
 */
sap.suite.ui.commons.MicroAreaChartView.Wide = "";


// ---- sap.suite.ui.commons.ProcessFlowConnectionLabelState --------------------------------------------------------------------------

/**
 * Critical connection label.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabelState.Critical = "";

/**
 * Negative connection label.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabelState.Negative = "";

/**
 * Neutral connection label.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabelState.Neutral = "";

/**
 * Positive connection label.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionLabelState.Positive = "";


// ---- sap.suite.ui.commons.ProcessFlowConnectionState --------------------------------------------------------------------------

/**
 * Dimmed connection.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionState.Dimmed = "";

/**
 * Highlighted connection.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionState.Highlighted = "";

/**
 * Regular connection.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionState.Regular = "";

/**
 * Selected connection.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionState.Selected = "";


// ---- sap.suite.ui.commons.ProcessFlowConnectionType --------------------------------------------------------------------------

/**
 * Normal connection.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionType.Normal = "";

/**
 * Planned connection.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowConnectionType.Planned = "";


// ---- sap.suite.ui.commons.ProcessFlowDisplayState --------------------------------------------------------------------------

/**
 * The control is in the dimmed state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed = "";

/**
 * The control is in the combination of dimmed and focused display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused = "";

/**
 * The control is in highlighted display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted = "";

/**
 * The control is in the combination of highlighted and focused display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused = "";

/**
 * The control is in the regular display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Regular = "";

/**
 * The control is in the combination of regular and focused display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused = "";

/**
 * The control is in the selected display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.Selected = "";

/**
 * The control is in the combination of selected and focused display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.SelectedFocused = "";

/**
 * The control is in the combination of selected and highlighted display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.SelectedHighlighted = "";

/**
 * The control is in the combination of selected, highlighted and focused display state
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowDisplayState.SelectedHighlightedFocused = "";


// ---- sap.suite.ui.commons.ProcessFlowLaneState --------------------------------------------------------------------------

/**
 * The 'state' property is associated with the given value. Possible states are: positive, negative, neutral, and planned.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneState.state = "";

/**
 * In the 'state' array, the total amount of values needs to be 100%.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowLaneState.value = "";


// ---- sap.suite.ui.commons.ProcessFlowNodeState --------------------------------------------------------------------------

/**
 * Critical status for a created document: with this document, a critical issue occurred, for example, the business process can be interrupted.
 * @public
 * @since 1.42.0
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeState.Critical = "";

/**
 * Negative status for a created document: with this document, an issue occurred.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeState.Negative = "";

/**
 * Neutral status for a created document: the document is in progress.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeState.Neutral = "";

/**
 * Planned status for a document: the document is planned to be started.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeState.Planned = "";

/**
 * Planned, but negative status for a document: the planned document has an issue but has not yet been started.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative = "";

/**
 * Positive status for a created document: the document is done, finished, solved.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeState.Positive = "";


// ---- sap.suite.ui.commons.ProcessFlowNodeType --------------------------------------------------------------------------

/**
 * Aggregated node - several nodes are illustrated as a stack of nodes in the same path and in one column.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeType.Aggregated = "";

/**
 * Single node - one node is illustrated in a column.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowNodeType.Single = "";


// ---- sap.suite.ui.commons.ProcessFlowZoomLevel --------------------------------------------------------------------------

/**
 * Zoom level for least details - only icon is displayed.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.Four = "";

/**
 * The full details with normal font size.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.One = "";

/**
 * The details are the icon, title text and no additional texts.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.Three = "";

/**
 * The full detail view of the node but with smaller font size.
 * @public
 * 
 */
sap.suite.ui.commons.ProcessFlowZoomLevel.Two = "";


// ---- sap.suite.ui.commons.SelectionState --------------------------------------------------------------------------

/**
 * Not Selected
 * @public
 * 
 */
sap.suite.ui.commons.SelectionState.NotSelected = "";

/**
 * Selected
 * @public
 * 
 */
sap.suite.ui.commons.SelectionState.Selected = "";

/**
 * Semantic
 * @public
 * 
 */
sap.suite.ui.commons.SelectionState.Semantic = "";


// ---- sap.suite.ui.commons.ThingGroupDesign --------------------------------------------------------------------------

/**
 * In this design there is indentation between header and content of the group.
 * @public
 * 
 */
sap.suite.ui.commons.ThingGroupDesign.TopIndent = "";

/**
 * In this design there is no indentation between header and content of the group.
 * @public
 * 
 */
sap.suite.ui.commons.ThingGroupDesign.ZeroIndent = "";


// ---- sap.suite.ui.commons.TimelineAlignment --------------------------------------------------------------------------

/**
 * Entries are displayed below the timeline axis.<br>
 * In a vertical timeline, entries are displayed to the right of the timeline axis. Synonym for Right.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineAlignment.Bottom = "";

/**
 * Entries are displayed to the left of the timeline axis.<br>
 * In a horizontal timeline, entries are displayed above the timeline axis. Synonym for Top.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineAlignment.Left = "";

/**
 * Entries are displayed to the right of the timeline axis.<br>
 * In a horizontal timeline, entries are displayed below the timeline axis. Synonym for Bottom.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineAlignment.Right = "";

/**
 * Entries are displayed above the timeline axis.<br>
 * In a vertical timeline, entries are displayed to the left of the timeline axis. Synonym for Left.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineAlignment.Top = "";


// ---- sap.suite.ui.commons.TimelineAxisOrientation --------------------------------------------------------------------------

/**
 * Horizontal timeline.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineAxisOrientation.Horizontal = "";

/**
 * Vertical timeline.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineAxisOrientation.Vertical = "";


// ---- sap.suite.ui.commons.TimelineFilterType --------------------------------------------------------------------------

/**
 * Items filter based on data, defined by the {@link sap.suite.ui.commons.TimelineItem#getFilterValue filterValue}
 * property or by a custom value.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterType.Data = "";

/**
 * Search results filter.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterType.Search = "";

/**
 * Time range filter, defined by the start date (<code>from</code>) and end date
 * (<code>to</code>) of the time range.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineFilterType.Time = "";


// ---- sap.suite.ui.commons.TimelineGroupType --------------------------------------------------------------------------

/**
 * Data is grouped by day.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineGroupType.Day = "";

/**
 * Data is grouped by month.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineGroupType.Month = "";

/**
 * No grouping is used.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineGroupType.None = "";

/**
 * Data is grouped by quarter.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineGroupType.Quarter = "";

/**
 * Data is grouped by week.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineGroupType.Week = "";

/**
 * Data is grouped by year.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineGroupType.Year = "";


// ---- sap.suite.ui.commons.TimelineScrollingFadeout --------------------------------------------------------------------------

/**
 * Timeline fades into the lower and upper margins of the visible area,
 * but no scroll buttons are displayed.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineScrollingFadeout.Area = "";

/**
 * Timeline fades into the lower and upper margins of the visible area,
 * and scroll buttons are displayed.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineScrollingFadeout.AreaWithButtons = "";

/**
 * Timeline does not fade out.
 * @public
 * 
 */
sap.suite.ui.commons.TimelineScrollingFadeout.None = "";


// ---- sap.suite.ui.commons.ValueStatus --------------------------------------------------------------------------

/**
 * Bad value.
 * @public
 * 
 */
sap.suite.ui.commons.ValueStatus.Bad = "";

/**
 * Critical value.
 * @public
 * 
 */
sap.suite.ui.commons.ValueStatus.Critical = "";

/**
 * Good value.
 * @public
 * 
 */
sap.suite.ui.commons.ValueStatus.Good = "";

/**
 * Positive value.
 * @public
 * 
 */
sap.suite.ui.commons.ValueStatus.Neutral = "";

