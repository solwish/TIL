
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.makit --------------------------------------------------------------------------


// ---- sap.makit.Axis --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Axis.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getShowPrimaryLine showPrimaryLine} : boolean (default: true)</li>
 * <li>{@link #getShowGrid showGrid} : boolean (default: false)</li>
 * <li>{@link #getThickness thickness} : float (default: 1)</li>
 * <li>{@link #getColor color} : string (default: 'gray')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Base element for the Axis object for the Chart.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Axis = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.Axis with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Axis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>color</code>.
 * Color of the primary line. Accept the following format:
 * standard name format: gray, red, black, etc
 * hex format: #ff00ff
 * rgb format: rgb(256, 0, 256)
 * </p><p>
 * Default value is <code>gray</code>
 * @return {string} the value of property <code>color</code>
 * @public
 * 
 */
sap.makit.Axis.prototype.getColor = function() { return ""; };

/**
 * 
 * Getter for property <code>showGrid</code>.
 * Indicates whether to show grid of the Axis in the chart area
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showGrid</code>
 * @public
 * 
 */
sap.makit.Axis.prototype.getShowGrid = function() { return false; };

/**
 * 
 * Getter for property <code>showLabel</code>.
 * Indicates whether to show label of the Axis by the primary line
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLabel</code>
 * @public
 * 
 */
sap.makit.Axis.prototype.getShowLabel = function() { return false; };

/**
 * 
 * Getter for property <code>showPrimaryLine</code>.
 * Indicates whether to show the primary line of the Axis on the chart area
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showPrimaryLine</code>
 * @public
 * 
 */
sap.makit.Axis.prototype.getShowPrimaryLine = function() { return false; };

/**
 * 
 * Getter for property <code>thickness</code>.
 * The line thickness of the primary line
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>thickness</code>
 * @public
 * 
 */
sap.makit.Axis.prototype.getThickness = function() { return 0.0; };

/**
 * 
 * Setter for property <code>color</code>.
 * </p><p>
 * Default value is <code>gray</code> 
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.makit.Axis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Axis.prototype.setColor = function(sColor) { return new sap.makit.Axis(); };

/**
 * 
 * Setter for property <code>showGrid</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowGrid  new value for property <code>showGrid</code>
 * @return {sap.makit.Axis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Axis.prototype.setShowGrid = function(bShowGrid) { return new sap.makit.Axis(); };

/**
 * 
 * Setter for property <code>showLabel</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLabel  new value for property <code>showLabel</code>
 * @return {sap.makit.Axis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Axis.prototype.setShowLabel = function(bShowLabel) { return new sap.makit.Axis(); };

/**
 * 
 * Setter for property <code>showPrimaryLine</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowPrimaryLine  new value for property <code>showPrimaryLine</code>
 * @return {sap.makit.Axis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Axis.prototype.setShowPrimaryLine = function(bShowPrimaryLine) { return new sap.makit.Axis(); };

/**
 * 
 * Setter for property <code>thickness</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fThickness  new value for property <code>thickness</code>
 * @return {sap.makit.Axis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Axis.prototype.setThickness = function(fThickness) { return new sap.makit.Axis(); };


// ---- sap.makit.Category --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Category.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumn column} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents the Category data region of the Chart.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Category = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.Category with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Category.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>column</code>.
 * Specify the name of the column to be mapped to the Category Axis's value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>column</code>
 * @public
 * 
 */
sap.makit.Category.prototype.getColumn = function() { return ""; };

/**
 * 
 * Getter for property <code>displayName</code>.
 * The text label representing this Category(on value bubble or table's header)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>displayName</code>
 * @public
 * 
 */
sap.makit.Category.prototype.getDisplayName = function() { return ""; };

/**
 * 
 * Getter for property <code>format</code>.
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>format</code>
 * @public
 * 
 */
sap.makit.Category.prototype.getFormat = function() { return ""; };

/**
 * 
 * Setter for property <code>column</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sColumn  new value for property <code>column</code>
 * @return {sap.makit.Category} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Category.prototype.setColumn = function(sColumn) { return new sap.makit.Category(); };

/**
 * 
 * Setter for property <code>displayName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDisplayName  new value for property <code>displayName</code>
 * @return {sap.makit.Category} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Category.prototype.setDisplayName = function(sDisplayName) { return new sap.makit.Category(); };

/**
 * 
 * Setter for property <code>format</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFormat  new value for property <code>format</code>
 * @return {sap.makit.Category} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Category.prototype.setFormat = function(sFormat) { return new sap.makit.Category(); };


// ---- sap.makit.CategoryAxis --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CategoryAxis.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSortOrder sortOrder} : sap.makit.SortOrder (default: sap.makit.SortOrder.None)</li>
 * <li>{@link #getDisplayLastLabel displayLastLabel} : boolean (default: false)</li>
 * <li>{@link #getDisplayAll displayAll} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.makit.Axis#constructor sap.makit.Axis}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains the properties of the Category's Axis.
 * @extends sap.makit.Axis
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.CategoryAxis = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.CategoryAxis with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.CategoryAxis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>displayAll</code>.
 * Specify whether to display all the category values when there are multiple category data regions.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>displayAll</code>
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.getDisplayAll = function() { return false; };

/**
 * 
 * Getter for property <code>displayLastLabel</code>.
 * Whether to always display the last label on the axis regardless of the automatic resize
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displayLastLabel</code>
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.getDisplayLastLabel = function() { return false; };

/**
 * 
 * Getter for property <code>sortOrder</code>.
 * Sort order of the chart
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.makit.SortOrder} the value of property <code>sortOrder</code>
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.getSortOrder = function() { return new sap.makit.SortOrder(); };

/**
 * 
 * Setter for property <code>displayAll</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDisplayAll  new value for property <code>displayAll</code>
 * @return {sap.makit.CategoryAxis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.setDisplayAll = function(bDisplayAll) { return new sap.makit.CategoryAxis(); };

/**
 * 
 * Setter for property <code>displayLastLabel</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisplayLastLabel  new value for property <code>displayLastLabel</code>
 * @return {sap.makit.CategoryAxis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.setDisplayLastLabel = function(bDisplayLastLabel) { return new sap.makit.CategoryAxis(); };

/**
 * 
 * Setter for property <code>sortOrder</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.makit.SortOrder} oSortOrder  new value for property <code>sortOrder</code>
 * @return {sap.makit.CategoryAxis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CategoryAxis.prototype.setSortOrder = function(oSortOrder) { return new sap.makit.CategoryAxis(); };


// ---- sap.makit.Chart --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Chart.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getType type} : sap.makit.ChartType (default: sap.makit.ChartType.Column)</li>
 * <li>{@link #getShowRangeSelector showRangeSelector} : boolean (default: true)</li>
 * <li>{@link #getShowTableView showTableView} : boolean (default: false)</li>
 * <li>{@link #getLegendPosition legendPosition} : sap.makit.LegendPosition</li>
 * <li>{@link #getLineThickness lineThickness} : float (default: 1)</li>
 * <li>{@link #getShowTableValue showTableValue} : boolean (default: true)</li>
 * <li>{@link #getMaxSliceCount maxSliceCount} : int (default: 12)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getShowTotalValue showTotalValue} : boolean (default: false)</li>
 * <li>{@link #getNumberOfVisibleCategories numberOfVisibleCategories} : int</li>
 * <li>{@link #getRangeSelectorStartPosition rangeSelectorStartPosition} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.makit.Row[]</li>
 * <li>{@link #getColumns columns} : sap.makit.Column[]</li>
 * <li>{@link #getSeries series} : sap.makit.Series</li>
 * <li>{@link #getValues values} : sap.makit.Value[]</li>
 * <li>{@link #getCategoryRegions categoryRegions} : sap.makit.Category[]</li>
 * <li>{@link #getCategory category} : sap.makit.Category</li>
 * <li>{@link #getCategoryAxis categoryAxis} : sap.makit.CategoryAxis</li>
 * <li>{@link #getValueAxis valueAxis} : sap.makit.ValueAxis</li>
 * <li>{@link #getValueBubble valueBubble} : sap.makit.ValueBubble</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.makit.Chart#event:doubletap doubletap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.Chart#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.Chart#event:longpress longpress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Chart control.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Chart = function(sId,mSettings) {};
/**
 * 
 * Double tap event on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.makit.Chart.prototype.doubletap = function(oControlEvent) { return null; };

/**
 * 
 * Long press event on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.makit.Chart.prototype.longpress = function(oControlEvent) { return null; };

/**
 * 
 * Single tap event on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.makit.Chart.prototype.tap = function(oControlEvent) { return null; };

/**
 * 
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 * @param {sap.makit.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.addColumn = function(oColumn) { return new sap.makit.Chart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'doubletap' event of this <code>sap.makit.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.Chart</code>.<br/> itself. 
 * </p><p>
 * Double tap event on the chart
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code>.<br/> itself.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.attachDoubletap = function(oData,fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'longpress' event of this <code>sap.makit.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.Chart</code>.<br/> itself. 
 * </p><p>
 * Long press event on the chart
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code>.<br/> itself.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.attachLongpress = function(oData,fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.makit.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.Chart</code>.<br/> itself. 
 * </p><p>
 * Single tap event on the chart
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.Chart</code>.<br/> itself.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * 
 * Binder for aggregation <code>columns</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.bindColumns = function(sPath,oTemplate,oSorter,aFilters) { return new sap.makit.Chart(); };

/**
 * 
 * Binder for aggregation <code>rows</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.bindRows = function(sPath,oTemplate,oSorter,aFilters) { return new sap.makit.Chart(); };

/**
 * 
 * Destroys the categoryAxis in the aggregation 
 * named <code>categoryAxis</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroyCategoryAxis = function() { return new sap.makit.Chart(); };

/**
 * 
 * Destroys all the categoryRegions in the aggregation 
 * named <code>categoryRegions</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroyCategoryRegions = function() { return new sap.makit.Chart(); };

/**
 * 
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroyColumns = function() { return new sap.makit.Chart(); };

/**
 * 
 * Destroys the series in the aggregation 
 * named <code>series</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroySeries = function() { return new sap.makit.Chart(); };

/**
 * 
 * Destroys the valueAxis in the aggregation 
 * named <code>valueAxis</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroyValueAxis = function() { return new sap.makit.Chart(); };

/**
 * 
 * Destroys the valueBubble in the aggregation 
 * named <code>valueBubble</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroyValueBubble = function() { return new sap.makit.Chart(); };

/**
 * 
 * Destroys all the values in the aggregation 
 * named <code>values</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.destroyValues = function() { return new sap.makit.Chart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'doubletap' event of this <code>sap.makit.Chart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.detachDoubletap = function(fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'longpress' event of this <code>sap.makit.Chart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.detachLongpress = function(fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.makit.Chart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.detachTap = function(fnFunction,oListener) { return new sap.makit.Chart(); };

/**
 * 
 * Creates a new subclass of class sap.makit.Chart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Chart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event doubletap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.makit.Chart.prototype.fireDoubletap = function(mArguments) { return new sap.makit.Chart(); };

/**
 * 
 * Fire event longpress to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.makit.Chart.prototype.fireLongpress = function(mArguments) { return new sap.makit.Chart(); };

/**
 * 
 * Fire event tap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.makit.Chart.prototype.fireTap = function(mArguments) { return new sap.makit.Chart(); };

/**
 * 
 * Getter for aggregation <code>categoryAxis</code>.<br/>
 * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
 * @return {sap.makit.CategoryAxis}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getCategoryAxis = function() { return new sap.makit.CategoryAxis(); };

/**
 * 
 * Getter for aggregation <code>categoryRegions</code>.<br/>
 * Data region property of the chart's Categories
 * @return {sap.makit.Category[]}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getCategoryRegions = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>columns</code>.<br/>
 * The data column map of the chart.
 * @return {sap.makit.Column[]}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getColumns = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the Chart
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>legendPosition</code>.
 * Legend position all chart types except Bar chart.
 * Default position for Pie/Donut chart is Left. All other chart's default position is None. Note: the default legend position is set when the chart type is set first time, subsequent change to the chart type will keep using initial legend position unless it is changed explicitly by user.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.makit.LegendPosition} the value of property <code>legendPosition</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getLegendPosition = function() { return new sap.makit.LegendPosition(); };

/**
 * 
 * Getter for property <code>lineThickness</code>.
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>lineThickness</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getLineThickness = function() { return 0.0; };

/**
 * 
 * Getter for property <code>maxSliceCount</code>.
 * Set the maximum number of slices in a Pie/Donut chart. If exceeding the specified value, the rest will be categorised into a single slice. Only applies to Pie/Donut.
 * </p><p>
 * Default value is <code>12</code>
 * @return {int} the value of property <code>maxSliceCount</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getMaxSliceCount = function() { return 0; };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.Chart.prototype.getNumberOfCategories = function() { return null; };

/**
 * 
 * Getter for property <code>numberOfVisibleCategories</code>.
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>numberOfVisibleCategories</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getNumberOfVisibleCategories = function() { return 0; };

/**
 * 
 * Getter for property <code>primaryColorPalette</code>.
 * Allow a chart’s color palette to be modified without affecting the other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>primaryColorPalette</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getPrimaryColorPalette = function() { return null; };

/**
 * 
 * Getter for property <code>rangeSelectorStartPosition</code>.
 * Specify the range selector start position, default value is 0.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>rangeSelectorStartPosition</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getRangeSelectorStartPosition = function() { return 0; };

/**
 * 
 * Getter for aggregation <code>rows</code>.<br/>
 * The data rows of the chart. User should bind these to their data source
 * @return {sap.makit.Row[]}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getRows = function() { return new Array(); };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.Chart.prototype.getSelectedCategory = function() { return null; };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.Chart.prototype.getSelectedCategoryGroup = function() { return null; };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.Chart.prototype.getSelectedSeries = function() { return null; };

/**
 * 
 * Getter for aggregation <code>series</code>.<br/>
 * Data region property of the chart's Series
 * @return {sap.makit.Series}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getSeries = function() { return new sap.makit.Series(); };

/**
 * 
 * Getter for property <code>showRangeSelector</code>.
 * Specify whether the range selector should be visible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showRangeSelector</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowRangeSelector = function() { return false; };

/**
 * 
 * Getter for property <code>showTableValue</code>.
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTableValue</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowTableValue = function() { return false; };

/**
 * 
 * Getter for property <code>showTableView</code>.
 * Toggle to display table view
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showTableView</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowTableView = function() { return false; };

/**
 * 
 * Getter for property <code>showTotalValue</code>.
 * Specify whether to show the sum of the value for Waterfall/Waterfall Bar chart. Only applies to Waterfall/WaterfallBar chart.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showTotalValue</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getShowTotalValue = function() { return false; };

/**
 * 
 * Getter for property <code>type</code>.
 * Chart type
 * </p><p>
 * Default value is <code>Column</code>
 * @return {sap.makit.ChartType} the value of property <code>type</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getType = function() { return new sap.makit.ChartType(); };

/**
 * 
 * Getter for aggregation <code>valueAxis</code>.<br/>
 * Value Axis property of the Chart. Accept only an instance of ValueAxis element.
 * @return {sap.makit.ValueAxis}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getValueAxis = function() { return new sap.makit.ValueAxis(); };

/**
 * 
 * Getter for aggregation <code>valueBubble</code>.<br/>
 * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
 * @return {sap.makit.ValueBubble}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getValueBubble = function() { return new sap.makit.ValueBubble(); };

/**
 * 
 * Getter for aggregation <code>values</code>.<br/>
 * Data region property of the chart's Values
 * @return {sap.makit.Value[]}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.getValues = function() { return new Array(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the Chart
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.makit.Chart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.makit.Category</code> in the aggregation named <code>categoryRegions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Category}
 *            oCategoryRegion the categoryRegion whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.indexOfCategoryRegion = function(oCategoryRegion) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.makit.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.makit.Value</code> in the aggregation named <code>values</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Value}
 *            oValue the value whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.indexOfValue = function(oValue) { return 0; };

/**
 * 
 * Inserts a column into the aggregation named <code>columns</code>.
 * @param {sap.makit.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.insertColumn = function(oColumn,iIndex) { return new sap.makit.Chart(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Column[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.removeAllColumns = function() { return new Array(); };

/**
 * 
 * Removes an column from the aggregation named <code>columns</code>.
 * @param {int | string | sap.makit.Column} vColumn the column to remove or its index or id
 * @return {sap.makit.Column} the removed column or null
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.removeColumn = function(vColumn) { return new sap.makit.Column(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setHeight = function(sHeight) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>legendPosition</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.makit.LegendPosition} oLegendPosition  new value for property <code>legendPosition</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setLegendPosition = function(oLegendPosition) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>lineThickness</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fLineThickness  new value for property <code>lineThickness</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setLineThickness = function(fLineThickness) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>maxSliceCount</code>.
 * </p><p>
 * Default value is <code>12</code> 
 * @param {int} iMaxSliceCount  new value for property <code>maxSliceCount</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setMaxSliceCount = function(iMaxSliceCount) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>numberOfVisibleCategories</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iNumberOfVisibleCategories  new value for property <code>numberOfVisibleCategories</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setNumberOfVisibleCategories = function(iNumberOfVisibleCategories) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>rangeSelectorStartPosition</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iRangeSelectorStartPosition  new value for property <code>rangeSelectorStartPosition</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setRangeSelectorStartPosition = function(iRangeSelectorStartPosition) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>showRangeSelector</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowRangeSelector  new value for property <code>showRangeSelector</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowRangeSelector = function(bShowRangeSelector) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>showTableValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTableValue  new value for property <code>showTableValue</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowTableValue = function(bShowTableValue) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>showTableView</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowTableView  new value for property <code>showTableView</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowTableView = function(bShowTableView) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>showTotalValue</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowTotalValue  new value for property <code>showTotalValue</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setShowTotalValue = function(bShowTotalValue) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Column</code> 
 * @param {sap.makit.ChartType} oType  new value for property <code>type</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setType = function(oType) { return new sap.makit.Chart(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Chart.prototype.setWidth = function(sWidth) { return new sap.makit.Chart(); };

/**
 * 
 * Unbinder for aggregation <code>columns</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.unbindColumns = function() { return new sap.makit.Chart(); };

/**
 * 
 * Unbinder for aggregation <code>rows</code>.
 * @return {sap.makit.Chart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.Chart.prototype.unbindRows = function() { return new sap.makit.Chart(); };


// ---- sap.makit.ChartType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.ChartType.toString = function() { return ""; };

// ---- sap.makit.Column --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Column.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValue value} : any</li>
 * <li>{@link #getType type} : string (default: 'string')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The data column of the Chart's data table
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Column = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.Column with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>name</code>.
 * The name representing the Column
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.makit.Column.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * The data type of the Column:
 * number
 * string
 * datetime
 * </p><p>
 * Default value is <code>string</code>
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.makit.Column.prototype.getType = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * The value mapped to this Column (User should map this using data binding)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>value</code>
 * @public
 * 
 */
sap.makit.Column.prototype.getValue = function() { return null; };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.makit.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Column.prototype.setName = function(sName) { return new sap.makit.Column(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>string</code> 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.makit.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Column.prototype.setType = function(sType) { return new sap.makit.Column(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oValue  new value for property <code>value</code>
 * @return {sap.makit.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Column.prototype.setValue = function(oValue) { return new sap.makit.Column(); };


// ---- sap.makit.CombinationChart --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CombinationChart.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getShowRangeSelector showRangeSelector} : boolean (default: true)</li>
 * <li>{@link #getLegendPosition legendPosition} : sap.makit.LegendPosition (default: sap.makit.LegendPosition.Left)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getSecondaryColorPalette secondaryColorPalette} : any</li>
 * <li>{@link #getShowTableValue showTableValue} : boolean (default: true)</li>
 * <li>{@link #getNumberOfVisibleCategories numberOfVisibleCategories} : int</li>
 * <li>{@link #getRangeSelectorStartPosition rangeSelectorStartPosition} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCategoryRegions categoryRegions} : sap.makit.Category[]</li>
 * <li>{@link #getLayers layers} : sap.makit.Layer[]</li>
 * <li>{@link #getCategoryAxis categoryAxis} : sap.makit.CategoryAxis</li>
 * <li>{@link #getPrimaryValueAxis primaryValueAxis} : sap.makit.ValueAxis</li>
 * <li>{@link #getSecondaryValueAxis secondaryValueAxis} : sap.makit.ValueAxis</li>
 * <li>{@link #getValueBubble valueBubble} : sap.makit.ValueBubble</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.makit.CombinationChart#event:doubletap doubletap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.CombinationChart#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.makit.CombinationChart#event:longpress longpress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The CombinationChart control.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.12
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.CombinationChart = function(sId,mSettings) {};
/**
 * 
 * Double tap event on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.makit.CombinationChart.prototype.doubletap = function(oControlEvent) { return null; };

/**
 * 
 * Long press event on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.makit.CombinationChart.prototype.longpress = function(oControlEvent) { return null; };

/**
 * 
 * Single tap event on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.makit.CombinationChart.prototype.tap = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'doubletap' event of this <code>sap.makit.CombinationChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.CombinationChart</code>.<br/> itself. 
 * </p><p>
 * Double tap event on the chart
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code>.<br/> itself.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.attachDoubletap = function(oData,fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'longpress' event of this <code>sap.makit.CombinationChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.CombinationChart</code>.<br/> itself. 
 * </p><p>
 * Long press event on the chart
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code>.<br/> itself.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.attachLongpress = function(oData,fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.makit.CombinationChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.makit.CombinationChart</code>.<br/> itself. 
 * </p><p>
 * Single tap event on the chart
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.makit.CombinationChart</code>.<br/> itself.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Destroys the categoryAxis in the aggregation 
 * named <code>categoryAxis</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.destroyCategoryAxis = function() { return new sap.makit.CombinationChart(); };

/**
 * 
 * Destroys all the categoryRegions in the aggregation 
 * named <code>categoryRegions</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.destroyCategoryRegions = function() { return new sap.makit.CombinationChart(); };

/**
 * 
 * Destroys all the layers in the aggregation 
 * named <code>layers</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.destroyLayers = function() { return new sap.makit.CombinationChart(); };

/**
 * 
 * Destroys the primaryValueAxis in the aggregation 
 * named <code>primaryValueAxis</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.destroyPrimaryValueAxis = function() { return new sap.makit.CombinationChart(); };

/**
 * 
 * Destroys the secondaryValueAxis in the aggregation 
 * named <code>secondaryValueAxis</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.destroySecondaryValueAxis = function() { return new sap.makit.CombinationChart(); };

/**
 * 
 * Destroys the valueBubble in the aggregation 
 * named <code>valueBubble</code>.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.destroyValueBubble = function() { return new sap.makit.CombinationChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'doubletap' event of this <code>sap.makit.CombinationChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.detachDoubletap = function(fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'longpress' event of this <code>sap.makit.CombinationChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.detachLongpress = function(fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.makit.CombinationChart</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.detachTap = function(fnFunction,oListener) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Creates a new subclass of class sap.makit.CombinationChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.CombinationChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event doubletap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.makit.CombinationChart.prototype.fireDoubletap = function(mArguments) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Fire event longpress to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.makit.CombinationChart.prototype.fireLongpress = function(mArguments) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Fire event tap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.makit.CombinationChart.prototype.fireTap = function(mArguments) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Getter for aggregation <code>categoryAxis</code>.<br/>
 * Category Axis property of the Chart. Accepts only an instance of CategoryAxis element.
 * @return {sap.makit.CategoryAxis}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.getCategoryAxis = function() { return new sap.makit.CategoryAxis(); };

/**
 * 
 * Getter for aggregation <code>categoryRegions</code>.<br/>
 * Data region property of the chart's Categories
 * @return {sap.makit.Category[]}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.getCategoryRegions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the Chart
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for aggregation <code>layers</code>.<br/>
 * The collection of charts
 * @return {sap.makit.Layer[]}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.getLayers = function() { return new Array(); };

/**
 * 
 * Getter for property <code>legendPosition</code>.
 * Legend position for Pie /Donut chart only.
 * </p><p>
 * Default value is <code>Left</code>
 * @return {sap.makit.LegendPosition} the value of property <code>legendPosition</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getLegendPosition = function() { return new sap.makit.LegendPosition(); };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.CombinationChart.prototype.getNumberOfCategories = function() { return null; };

/**
 * 
 * Getter for property <code>numberOfVisibleCategories</code>.
 * The number of categories that will be visible on the chart at any time. The minimum value is 2. If not set, the number of visible categories will be automatically adjusted depending on the screen size
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>numberOfVisibleCategories</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getNumberOfVisibleCategories = function() { return 0; };

/**
 * 
 * Getter for property <code>primaryColorPalette</code>.
 * Allow a combination chart’s primary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>primaryColorPalette</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getPrimaryColorPalette = function() { return null; };

/**
 * 
 * Getter for aggregation <code>primaryValueAxis</code>.<br/>
 * Property of the Combination Chart's primary Value Axis. Accept only an instance of ValueAxis element.
 * @return {sap.makit.ValueAxis}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.getPrimaryValueAxis = function() { return new sap.makit.ValueAxis(); };

/**
 * 
 * Getter for property <code>rangeSelectorStartPosition</code>.
 * Specify the range selector start position, default value is 0.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>rangeSelectorStartPosition</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getRangeSelectorStartPosition = function() { return 0; };

/**
 * 
 * Getter for property <code>secondaryColorPalette</code>.
 * Allow a combination chart’s secondary axis color palette to be modified without affecting other charts' color palette. If not set, the chart will use the default color palette defined in the theme.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>secondaryColorPalette</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getSecondaryColorPalette = function() { return null; };

/**
 * 
 * Getter for aggregation <code>secondaryValueAxis</code>.<br/>
 * Property of the Combination Chart's secondary Value Axis. Accept only an instance of ValueAxis element.
 * @return {sap.makit.ValueAxis}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.getSecondaryValueAxis = function() { return new sap.makit.ValueAxis(); };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.CombinationChart.prototype.getSelectedCategory = function() { return null; };

/**
 * 
 * See the generated JSDoc for the documentation of this public function
 * @public
 */
sap.makit.CombinationChart.prototype.getSelectedCategoryGroup = function() { return null; };

/**
 * 
 * Getter for property <code>showRangeSelector</code>.
 * Specify whether the range selector should be visible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showRangeSelector</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getShowRangeSelector = function() { return false; };

/**
 * 
 * Getter for property <code>showTableValue</code>.
 * Toggle to display the table value on a Bar chart. Only applies to Bar chart.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showTableValue</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getShowTableValue = function() { return false; };

/**
 * 
 * Getter for aggregation <code>valueBubble</code>.<br/>
 * Value Bubble property of the Chart. Accept only an instance of ValueBubble element.
 * @return {sap.makit.ValueBubble}
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.getValueBubble = function() { return new sap.makit.ValueBubble(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the Chart
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.makit.Category</code> in the aggregation named <code>categoryRegions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Category}
 *            oCategoryRegion the categoryRegion whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.indexOfCategoryRegion = function(oCategoryRegion) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.makit.Layer</code> in the aggregation named <code>layers</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Layer}
 *            oLayer the layer whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * 
 */
sap.makit.CombinationChart.prototype.indexOfLayer = function(oLayer) { return 0; };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setHeight = function(sHeight) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>legendPosition</code>.
 * </p><p>
 * Default value is <code>Left</code> 
 * @param {sap.makit.LegendPosition} oLegendPosition  new value for property <code>legendPosition</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setLegendPosition = function(oLegendPosition) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>numberOfVisibleCategories</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iNumberOfVisibleCategories  new value for property <code>numberOfVisibleCategories</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setNumberOfVisibleCategories = function(iNumberOfVisibleCategories) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>primaryColorPalette</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oPrimaryColorPalette  new value for property <code>primaryColorPalette</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setPrimaryColorPalette = function(oPrimaryColorPalette) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>rangeSelectorStartPosition</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iRangeSelectorStartPosition  new value for property <code>rangeSelectorStartPosition</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setRangeSelectorStartPosition = function(iRangeSelectorStartPosition) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>secondaryColorPalette</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oSecondaryColorPalette  new value for property <code>secondaryColorPalette</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setSecondaryColorPalette = function(oSecondaryColorPalette) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>showRangeSelector</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowRangeSelector  new value for property <code>showRangeSelector</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setShowRangeSelector = function(bShowRangeSelector) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>showTableValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowTableValue  new value for property <code>showTableValue</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setShowTableValue = function(bShowTableValue) { return new sap.makit.CombinationChart(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.makit.CombinationChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.CombinationChart.prototype.setWidth = function(sWidth) { return new sap.makit.CombinationChart(); };


// ---- sap.makit.Layer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Layer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : sap.makit.ChartType (default: sap.makit.ChartType.Column)</li>
 * <li>{@link #getLineThickness lineThickness} : float (default: 1)</li>
 * <li>{@link #getPrimaryColorPalette primaryColorPalette} : any</li>
 * <li>{@link #getDrawOnSecondaryAxis drawOnSecondaryAxis} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.makit.Row[]</li>
 * <li>{@link #getColumns columns} : sap.makit.Column[]</li>
 * <li>{@link #getSeries series} : sap.makit.Series</li>
 * <li>{@link #getValues values} : sap.makit.Value[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Layer represent a chart in the CombinationChart
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.12
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Layer = function(sId,mSettings) {};
/**
 * 
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 * @param {sap.makit.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.addColumn = function(oColumn) { return new sap.makit.Layer(); };

/**
 * 
 * Binder for aggregation <code>columns</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.bindColumns = function(sPath,oTemplate,oSorter,aFilters) { return new sap.makit.Layer(); };

/**
 * 
 * Binder for aggregation <code>rows</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.bindRows = function(sPath,oTemplate,oSorter,aFilters) { return new sap.makit.Layer(); };

/**
 * 
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.destroyColumns = function() { return new sap.makit.Layer(); };

/**
 * 
 * Destroys the series in the aggregation 
 * named <code>series</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.destroySeries = function() { return new sap.makit.Layer(); };

/**
 * 
 * Destroys all the values in the aggregation 
 * named <code>values</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.destroyValues = function() { return new sap.makit.Layer(); };

/**
 * 
 * Creates a new subclass of class sap.makit.Layer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Layer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>columns</code>.<br/>
 * The data column map of the chart.
 * @return {sap.makit.Column[]}
 * @public
 * 
 */
sap.makit.Layer.prototype.getColumns = function() { return new Array(); };

/**
 * 
 * Getter for property <code>drawOnSecondaryAxis</code>.
 * Specifiy whether this layer should be drawn on the secondary axis.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>drawOnSecondaryAxis</code>
 * @public
 * 
 */
sap.makit.Layer.prototype.getDrawOnSecondaryAxis = function() { return false; };

/**
 * 
 * Getter for property <code>lineThickness</code>.
 * Specify the line thickness of the line graph. Only applies to Line chart type.
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>lineThickness</code>
 * @public
 * 
 */
sap.makit.Layer.prototype.getLineThickness = function() { return 0.0; };

/**
 * 
 * Getter for property <code>primaryColorPalette</code>.
 * Allow a layer’s primary axis color palette to be modified without affecting other charts in the same screen. If not set, the chart will use the default color palette defined in the theme. This property will take precedence over other CombinationChart's color palette properties.
 * Accept an array of color in string format or hex format. e.g.
 * 0xff0000
 * "red"
 * "rgb(255,0,0)"
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>primaryColorPalette</code>
 * @public
 * 
 */
sap.makit.Layer.prototype.getPrimaryColorPalette = function() { return null; };

/**
 * 
 * Getter for aggregation <code>rows</code>.<br/>
 * The data rows of the chart. User should bind these to their data source
 * @return {sap.makit.Row[]}
 * @public
 * 
 */
sap.makit.Layer.prototype.getRows = function() { return new Array(); };

/**
 * 
 * Get the value of the currently highlighted series
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Layer.prototype.getSelectedSeries = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>series</code>.<br/>
 * Data region property of the chart's Series
 * @return {sap.makit.Series}
 * @public
 * 
 */
sap.makit.Layer.prototype.getSeries = function() { return new sap.makit.Series(); };

/**
 * 
 * Getter for property <code>type</code>.
 * Chart type
 * </p><p>
 * Default value is <code>Column</code>
 * @return {sap.makit.ChartType} the value of property <code>type</code>
 * @public
 * 
 */
sap.makit.Layer.prototype.getType = function() { return new sap.makit.ChartType(); };

/**
 * 
 * Getter for aggregation <code>values</code>.<br/>
 * Data region property of the chart's Values
 * @return {sap.makit.Value[]}
 * @public
 * 
 */
sap.makit.Layer.prototype.getValues = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.makit.Layer.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.makit.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.makit.Layer.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.makit.Value</code> in the aggregation named <code>values</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Value}
 *            oValue the value whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.makit.Layer.prototype.indexOfValue = function(oValue) { return 0; };

/**
 * 
 * Inserts a column into the aggregation named <code>columns</code>.
 * @param {sap.makit.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.insertColumn = function(oColumn,iIndex) { return new sap.makit.Layer(); };

/**
 * 
 * Inserts a value into the aggregation named <code>values</code>.
 * @param {sap.makit.Value}
 *          oValue the value to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the value should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the value is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the value is inserted at 
 *             the last position        
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.insertValue = function(oValue,iIndex) { return new sap.makit.Layer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Column[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.makit.Layer.prototype.removeAllColumns = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>values</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Value[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.makit.Layer.prototype.removeAllValues = function() { return new Array(); };

/**
 * 
 * Removes an column from the aggregation named <code>columns</code>.
 * @param {int | string | sap.makit.Column} vColumn the column to remove or its index or id
 * @return {sap.makit.Column} the removed column or null
 * @public
 * 
 */
sap.makit.Layer.prototype.removeColumn = function(vColumn) { return new sap.makit.Column(); };

/**
 * 
 * Removes an value from the aggregation named <code>values</code>.
 * @param {int | string | sap.makit.Value} vValue the value to remove or its index or id
 * @return {sap.makit.Value} the removed value or null
 * @public
 * 
 */
sap.makit.Layer.prototype.removeValue = function(vValue) { return new sap.makit.Value(); };

/**
 * 
 * Setter for property <code>drawOnSecondaryAxis</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDrawOnSecondaryAxis  new value for property <code>drawOnSecondaryAxis</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.setDrawOnSecondaryAxis = function(bDrawOnSecondaryAxis) { return new sap.makit.Layer(); };

/**
 * 
 * Setter for property <code>lineThickness</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fLineThickness  new value for property <code>lineThickness</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.setLineThickness = function(fLineThickness) { return new sap.makit.Layer(); };

/**
 * 
 * Setter for property <code>primaryColorPalette</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oPrimaryColorPalette  new value for property <code>primaryColorPalette</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.setPrimaryColorPalette = function(oPrimaryColorPalette) { return new sap.makit.Layer(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Column</code> 
 * @param {sap.makit.ChartType} oType  new value for property <code>type</code>
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.setType = function(oType) { return new sap.makit.Layer(); };

/**
 * 
 * Unbinder for aggregation <code>columns</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.unbindColumns = function() { return new sap.makit.Layer(); };

/**
 * 
 * Unbinder for aggregation <code>rows</code>.
 * @return {sap.makit.Layer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Layer.prototype.unbindRows = function() { return new sap.makit.Layer(); };


// ---- sap.makit.LegendPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.LegendPosition.toString = function() { return ""; };

// ---- sap.makit.MakitLib --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new MakitLib.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Wrapper for MAKit Chart Library. Only to be used used internally.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.12
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.MakitLib = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.MakitLib with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.MakitLib.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.makit.Row --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Row.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} : sap.makit.Column[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The data row of the Chart's data table
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Row = function(sId,mSettings) {};
/**
 * 
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 * @param {sap.makit.Column}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.makit.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Row.prototype.addCell = function(oCell) { return new sap.makit.Row(); };

/**
 * 
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.makit.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Row.prototype.destroyCells = function() { return new sap.makit.Row(); };

/**
 * 
 * Creates a new subclass of class sap.makit.Row with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Row.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>cells</code>.<br/>
 * Representing the cells of the row. User should not add individual cells. The cells will be added automatically via Column mapping.
 * @return {sap.makit.Column[]}
 * @public
 * 
 */
sap.makit.Row.prototype.getCells = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.makit.Column</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.makit.Column}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.makit.Row.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * 
 * Inserts a cell into the aggregation named <code>cells</code>.
 * @param {sap.makit.Column}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.makit.Row} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Row.prototype.insertCell = function(oCell,iIndex) { return new sap.makit.Row(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.makit.Column[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.makit.Row.prototype.removeAllCells = function() { return new Array(); };

/**
 * 
 * Removes an cell from the aggregation named <code>cells</code>.
 * @param {int | string | sap.makit.Column} vCell the cell to remove or its index or id
 * @return {sap.makit.Column} the removed cell or null
 * @public
 * 
 */
sap.makit.Row.prototype.removeCell = function(vCell) { return new sap.makit.Column(); };


// ---- sap.makit.Series --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Series.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColumn column} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents the Series data region of the Chart.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Series = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.Series with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Series.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>column</code>.
 * The name of the column that will be mapped to the chart's Series value
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>column</code>
 * @public
 * 
 */
sap.makit.Series.prototype.getColumn = function() { return ""; };

/**
 * 
 * Getter for property <code>displayName</code>.
 * The displayed name of the Series
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>displayName</code>
 * @public
 * 
 */
sap.makit.Series.prototype.getDisplayName = function() { return ""; };

/**
 * 
 * Getter for property <code>format</code>.
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>format</code>
 * @public
 * 
 */
sap.makit.Series.prototype.getFormat = function() { return ""; };

/**
 * 
 * Setter for property <code>column</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sColumn  new value for property <code>column</code>
 * @return {sap.makit.Series} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Series.prototype.setColumn = function(sColumn) { return new sap.makit.Series(); };

/**
 * 
 * Setter for property <code>displayName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDisplayName  new value for property <code>displayName</code>
 * @return {sap.makit.Series} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Series.prototype.setDisplayName = function(sDisplayName) { return new sap.makit.Series(); };

/**
 * 
 * Setter for property <code>format</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFormat  new value for property <code>format</code>
 * @return {sap.makit.Series} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Series.prototype.setFormat = function(sFormat) { return new sap.makit.Series(); };


// ---- sap.makit.SortOrder --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.SortOrder.toString = function() { return ""; };

// ---- sap.makit.Value --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Value.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getExpression expression} : string</li>
 * <li>{@link #getDisplayName displayName} : string</li>
 * <li>{@link #getFormat format} : string</li>
 * <li>{@link #getLocale locale} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents the Value data region of the Chart.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.Value = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.Value with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.Value.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>displayName</code>.
 * The text label representing this Value (on value bubble or table's header)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>displayName</code>
 * @public
 * 
 */
sap.makit.Value.prototype.getDisplayName = function() { return ""; };

/**
 * 
 * Getter for property <code>expression</code>.
 * The user should map the column on this property. The expression allows more advanced column mapping. Instead of just specifying the column name (e.g. revenueValue), the user can use SAP expression language e.g. Assuming the user has a revenueValue column and an operatingCost column, the user can specify the following expression:
 * "revenueValue - operatingCost"
 * the resulting value displayed in the chart will be the arithmatic operation result on these two columns.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>expression</code>
 * @public
 * 
 */
sap.makit.Value.prototype.getExpression = function() { return ""; };

/**
 * 
 * Getter for property <code>format</code>.
 * Number formatting for the value. Accepted values:
 * number
 * currency
 * percent
 * roundedN - where N represents number of decimal places e.g. rounded4
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>format</code>
 * @public
 * 
 */
sap.makit.Value.prototype.getFormat = function() { return ""; };

/**
 * 
 * Getter for property <code>locale</code>.
 * Comma separated locales for specifiying values in different locale. The locale will be mapped in the same order as the series data.
 * e.g. zh-CH, en-US, de-DE
 * The first zh-CH will be applied to the value of the first series, en-US will be applied to the second series.
 * Currently will only work with 'currency' format.
 * Supported locales:
 * en, zh, de, fr, es, ru, ja, pt and their more specific variations such as en-CA, es-AR, zh-HK, etc.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>locale</code>
 * @public
 * 
 */
sap.makit.Value.prototype.getLocale = function() { return ""; };

/**
 * 
 * Setter for property <code>displayName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDisplayName  new value for property <code>displayName</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Value.prototype.setDisplayName = function(sDisplayName) { return new sap.makit.Value(); };

/**
 * 
 * Setter for property <code>expression</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sExpression  new value for property <code>expression</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Value.prototype.setExpression = function(sExpression) { return new sap.makit.Value(); };

/**
 * 
 * Setter for property <code>format</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFormat  new value for property <code>format</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Value.prototype.setFormat = function(sFormat) { return new sap.makit.Value(); };

/**
 * 
 * Setter for property <code>locale</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLocale  new value for property <code>locale</code>
 * @return {sap.makit.Value} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.Value.prototype.setLocale = function(sLocale) { return new sap.makit.Value(); };


// ---- sap.makit.ValueAxis --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ValueAxis.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMin min} : string</li>
 * <li>{@link #getMax max} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.makit.Axis#constructor sap.makit.Axis}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains the properties of the Value's Axis.
 * @extends sap.makit.Axis
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.ValueAxis = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.ValueAxis with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.ValueAxis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>max</code>.
 * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major tick value depending on the value's range)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>max</code>
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.getMax = function() { return ""; };

/**
 * 
 * Getter for property <code>min</code>.
 * Highest displayed value on the Value Axis (this value will be automatically adjusted to nearest major tick value depending on the value's range). Set to empty string to switch back to automatic calculation.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>min</code>
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.getMin = function() { return ""; };

/**
 * 
 * Setter for property <code>max</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sMax  new value for property <code>max</code>
 * @return {sap.makit.ValueAxis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.setMax = function(sMax) { return new sap.makit.ValueAxis(); };

/**
 * 
 * Setter for property <code>min</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sMin  new value for property <code>min</code>
 * @return {sap.makit.ValueAxis} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueAxis.prototype.setMin = function(sMin) { return new sap.makit.ValueAxis(); };


// ---- sap.makit.ValueBubble --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ValueBubble.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowCategoryText showCategoryText} : boolean (default: true)</li>
 * <li>{@link #getShowCategoryDisplayName showCategoryDisplayName} : boolean (default: true)</li>
 * <li>{@link #getShowValueDisplayName showValueDisplayName} : boolean (default: true)</li>
 * <li>{@link #getShowValueOnPieChart showValueOnPieChart} : boolean (default: false)</li>
 * <li>{@link #getShowLegendLabel showLegendLabel} : boolean (default: true)</li>
 * <li>{@link #getShowNullValue showNullValue} : boolean (default: true)</li>
 * <li>{@link #getPosition position} : sap.makit.ValueBubblePosition (default: sap.makit.ValueBubblePosition.Top)</li>
 * <li>{@link #getStyle style} : sap.makit.ValueBubbleStyle (default: sap.makit.ValueBubbleStyle.Top)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The properties of the Chart's Value Bubble.
 * @extends sap.ui.core.Element
 * @version 1.48.4
 * @constructor
 * @public
 * @since 1.8
 * @deprecated Since version 1.38. 
 * MAKIT charts have been replaced with sap.viz and vizFrame in 1.38. This control will not be supported anymore from 1.38.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.makit.ValueBubble = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.makit.ValueBubble with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.makit.ValueBubble.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>position</code>.
 * The position of the Value Bubble (Pie or Donut chart only)
 * </p><p>
 * Default value is <code>Top</code>
 * @return {sap.makit.ValueBubblePosition} the value of property <code>position</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getPosition = function() { return new sap.makit.ValueBubblePosition(); };

/**
 * 
 * Getter for property <code>showCategoryDisplayName</code>.
 * Whether to display category's display name on the Value Bubble
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCategoryDisplayName</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowCategoryDisplayName = function() { return false; };

/**
 * 
 * Getter for property <code>showCategoryText</code>.
 * Whether to display category's text on the Value Bubble
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCategoryText</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowCategoryText = function() { return false; };

/**
 * 
 * Getter for property <code>showLegendLabel</code>.
 * Whether to display legend's label (Pie or Donut chart only)
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLegendLabel</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowLegendLabel = function() { return false; };

/**
 * 
 * Getter for property <code>showNullValue</code>.
 * Whether to render null item on the Value Bubble
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showNullValue</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowNullValue = function() { return false; };

/**
 * 
 * Getter for property <code>showValueDisplayName</code>.
 * Whether to display value's display name on the Value Bubble
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValueDisplayName</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowValueDisplayName = function() { return false; };

/**
 * 
 * Getter for property <code>showValueOnPieChart</code>.
 * Whether to display value on Pie or Donut chart
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showValueOnPieChart</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getShowValueOnPieChart = function() { return false; };

/**
 * 
 * Getter for property <code>style</code>.
 * Value Bubble positioning style (All the chart types except: Pie/Donut/HBar chart)
 * </p><p>
 * Default value is <code>Top</code>
 * @return {sap.makit.ValueBubbleStyle} the value of property <code>style</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getStyle = function() { return new sap.makit.ValueBubbleStyle(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Whether the Value Bubble is visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for property <code>position</code>.
 * </p><p>
 * Default value is <code>Top</code> 
 * @param {sap.makit.ValueBubblePosition} oPosition  new value for property <code>position</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setPosition = function(oPosition) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>showCategoryDisplayName</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowCategoryDisplayName  new value for property <code>showCategoryDisplayName</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowCategoryDisplayName = function(bShowCategoryDisplayName) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>showCategoryText</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowCategoryText  new value for property <code>showCategoryText</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowCategoryText = function(bShowCategoryText) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>showLegendLabel</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLegendLabel  new value for property <code>showLegendLabel</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowLegendLabel = function(bShowLegendLabel) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>showNullValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowNullValue  new value for property <code>showNullValue</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowNullValue = function(bShowNullValue) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>showValueDisplayName</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowValueDisplayName  new value for property <code>showValueDisplayName</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowValueDisplayName = function(bShowValueDisplayName) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>showValueOnPieChart</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowValueOnPieChart  new value for property <code>showValueOnPieChart</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setShowValueOnPieChart = function(bShowValueOnPieChart) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>style</code>.
 * </p><p>
 * Default value is <code>Top</code> 
 * @param {sap.makit.ValueBubbleStyle} oStyle  new value for property <code>style</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setStyle = function(oStyle) { return new sap.makit.ValueBubble(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.makit.ValueBubble} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.makit.ValueBubble.prototype.setVisible = function(bVisible) { return new sap.makit.ValueBubble(); };


// ---- sap.makit.ValueBubblePosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.ValueBubblePosition.toString = function() { return ""; };

// ---- sap.makit.ValueBubbleStyle --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.makit.ValueBubbleStyle.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.makit.ChartType --------------------------------------------------------------------------

/**
 * 
 * Horizontal table bar chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.Bar = null;

/**
 * 
 * Bubble chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.Bubble = null;

/**
 * 
 * Column chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.Column = null;

/**
 * 
 * Donut chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.Donut = null;

/**
 * 
 * 100% stacked column chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.HundredPercentStackedColumn = null;

/**
 * 
 * Line chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.Line = null;

/**
 * 
 * Pie chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.Pie = null;

/**
 * 
 * Stacked column chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.StackedColumn = null;

/**
 * 
 * Waterfall Bar chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.WaterfallBar = null;

/**
 * 
 * Waterfall Column chart
 * @public
 * @memberOf sap.makit.ChartType
 */
sap.makit.ChartType.WaterfallColumn = null;


// ---- sap.makit.LegendPosition --------------------------------------------------------------------------

/**
 * 
 * Legend location is on the bottom of the chart
 * @public
 * @memberOf sap.makit.LegendPosition
 */
sap.makit.LegendPosition.Bottom = null;

/**
 * 
 * Legend location is on the left of the chart
 * @public
 * @memberOf sap.makit.LegendPosition
 */
sap.makit.LegendPosition.Left = null;

/**
 * 
 * Hide the legend
 * @public
 * @memberOf sap.makit.LegendPosition
 */
sap.makit.LegendPosition.None = null;

/**
 * 
 * Legend location is on the right of the chart
 * @public
 * @memberOf sap.makit.LegendPosition
 */
sap.makit.LegendPosition.Right = null;

/**
 * 
 * Legend location is on the top of the chart
 * @public
 * @memberOf sap.makit.LegendPosition
 */
sap.makit.LegendPosition.Top = null;


// ---- sap.makit.SortOrder --------------------------------------------------------------------------

/**
 * 
 * Ascending sort
 * @public
 * @memberOf sap.makit.SortOrder
 */
sap.makit.SortOrder.Ascending = null;

/**
 * 
 * Descending sort
 * @public
 * @memberOf sap.makit.SortOrder
 */
sap.makit.SortOrder.Descending = null;

/**
 * 
 * No sorting
 * @public
 * @memberOf sap.makit.SortOrder
 */
sap.makit.SortOrder.None = null;

/**
 * 
 * Partially sort
 * @public
 * @memberOf sap.makit.SortOrder
 */
sap.makit.SortOrder.Partial = null;


// ---- sap.makit.ValueBubblePosition --------------------------------------------------------------------------

/**
 * 
 * Value Bubble position set to beside the chart
 * @public
 * @memberOf sap.makit.ValueBubblePosition
 */
sap.makit.ValueBubblePosition.Side = null;

/**
 * 
 * Value Bubble position set to above the chart
 * @public
 * @memberOf sap.makit.ValueBubblePosition
 */
sap.makit.ValueBubblePosition.Top = null;


// ---- sap.makit.ValueBubbleStyle --------------------------------------------------------------------------

/**
 * 
 * The Value Bubble floats on the touch point, chart's size will not change.
 * @public
 * @memberOf sap.makit.ValueBubbleStyle
 */
sap.makit.ValueBubbleStyle.Float = null;

/**
 * 
 * The Value Bubble floats and snaps above of the chart, chart's size will not change.
 * @public
 * @memberOf sap.makit.ValueBubbleStyle
 */
sap.makit.ValueBubbleStyle.FloatTop = null;

/**
 * 
 * The Value Bubble snaps above of the chart, the chart height will adjust accordingly.
 * @public
 * @memberOf sap.makit.ValueBubbleStyle
 */
sap.makit.ValueBubbleStyle.Top = null;

