
// ---- sap.gantt --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.toString = function() { return ""; };

// ---- sap.gantt.AdhocLine --------------------------------------------------------------------------

/**
 * Creates and initializes a new AdhocLine class.
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
 * <li>{@link #getStroke stroke} : sap.gantt.ValueSVGPaintServer</li>
 * <li>{@link #getStrokeWidth strokeWidth} : float (default: 1)</li>
 * <li>{@link #getStrokeDasharray strokeDasharray} : string</li>
 * <li>{@link #getStrokeOpacity strokeOpacity} : float (default: 1)</li>
 * <li>{@link #getTimeStamp timeStamp} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * The AdhocLine class contains properties to draw an additional vertical line at specific
 * time points in the chart area. You can use this line to mark milestones, such as the
 * start of a project start, and special events, such as holidays.
 * 
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.AdhocLine = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.AdhocLine with name <code>sClassName</code>
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
sap.gantt.AdhocLine.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * Description of the time stamp
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.getDescription = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.AdhocLine.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.AdhocLine.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getStroke stroke}.
 * 
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * You can provide the stroke attribute with HTML colors and the URL reference to the paint server.
 * Paint server definitions usually come from paint servers rendered by {@link sap.gantt.GanttChartContainer},
 * {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * 
 * @returns {sap.gantt.ValueSVGPaintServer} Value of property <code>stroke</code>
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.getStroke = function() { return new sap.gantt.ValueSVGPaintServer(); };

/**
 * Gets current value of property {@link #getStrokeDasharray strokeDasharray}.
 * 
 * Standard SVG 'stroke-dasharray' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-dasharray'}.
 * 
 * @returns {string} Value of property <code>strokeDasharray</code>
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.getStrokeDasharray = function() { return ""; };

/**
 * Gets current value of property {@link #getStrokeOpacity strokeOpacity}.
 * 
 * Standard SVG 'stroke-opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG11/painting.html#StrokeOpacityProperty SVG 1.1 specification for 'stroke-opacity'}.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>strokeOpacity</code>
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.getStrokeOpacity = function() { return 0.0; };

/**
 * Gets current value of property {@link #getStrokeWidth strokeWidth}.
 * 
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>strokeWidth</code>
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.getStrokeWidth = function() { return 0.0; };

/**
 * Gets current value of property {@link #getTimeStamp timeStamp}.
 * 
 * Time stamp of the adhoc line
 * 
 * @returns {string} Value of property <code>timeStamp</code>
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.getTimeStamp = function() { return ""; };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * Description of the time stamp
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.gantt.AdhocLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.setDescription = function(sDescription) { return new sap.gantt.AdhocLine(); };

/**
 * Sets a new value for property {@link #getStroke stroke}.
 * 
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * You can provide the stroke attribute with HTML colors and the URL reference to the paint server.
 * Paint server definitions usually come from paint servers rendered by {@link sap.gantt.GanttChartContainer},
 * {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.ValueSVGPaintServer} sStroke New value for property <code>stroke</code>
 * @returns {sap.gantt.AdhocLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.setStroke = function(sStroke) { return new sap.gantt.AdhocLine(); };

/**
 * Sets a new value for property {@link #getStrokeDasharray strokeDasharray}.
 * 
 * Standard SVG 'stroke-dasharray' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-dasharray'}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStrokeDasharray New value for property <code>strokeDasharray</code>
 * @returns {sap.gantt.AdhocLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.setStrokeDasharray = function(sStrokeDasharray) { return new sap.gantt.AdhocLine(); };

/**
 * Sets a new value for property {@link #getStrokeOpacity strokeOpacity}.
 * 
 * Standard SVG 'stroke-opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG11/painting.html#StrokeOpacityProperty SVG 1.1 specification for 'stroke-opacity'}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fStrokeOpacity New value for property <code>strokeOpacity</code>
 * @returns {sap.gantt.AdhocLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.setStrokeOpacity = function(fStrokeOpacity) { return new sap.gantt.AdhocLine(); };

/**
 * Sets a new value for property {@link #getStrokeWidth strokeWidth}.
 * 
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fStrokeWidth New value for property <code>strokeWidth</code>
 * @returns {sap.gantt.AdhocLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.setStrokeWidth = function(fStrokeWidth) { return new sap.gantt.AdhocLine(); };

/**
 * Sets a new value for property {@link #getTimeStamp timeStamp}.
 * 
 * Time stamp of the adhoc line
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTimeStamp New value for property <code>timeStamp</code>
 * @returns {sap.gantt.AdhocLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.AdhocLine.prototype.setTimeStamp = function(sTimeStamp) { return new sap.gantt.AdhocLine(); };


// ---- sap.gantt.AdhocLineLayer --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.AdhocLineLayer.toString = function() { return ""; };

// ---- sap.gantt.axistime.AxisTimeStrategyBase --------------------------------------------------------------------------

/**
 * Creates and initializes a new AxisTimeStrategy.
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
 * <li>{@link #getTotalHorizon totalHorizon} : object (default: sap.gantt.config.DEFAULT_PLAN_HORIZON)</li>
 * <li>{@link #getVisibleHorizon visibleHorizon} : object (default: sap.gantt.config.DEFAULT_INIT_HORIZON)</li>
 * <li>{@link #getTimeLineOptions timeLineOptions} : object</li>
 * <li>{@link #getTimeLineOption timeLineOption} : object</li>
 * <li>{@link #getCoarsestTimeLineOption coarsestTimeLineOption} : object</li>
 * <li>{@link #getFinestTimeLineOption finestTimeLineOption} : object</li>
 * <li>{@link #getZoomLevels zoomLevels} : int (default: 10)</li>
 * <li>{@link #getZoomLevel zoomLevel} : int (default: 0)</li>
 * <li>{@link #getCalendarType calendarType} : string (default: sap.ui.core.CalendarType.Gregorian)</li>
 * <li>{@link #getLocale locale} : object</li>
 * <li>{@link #getMouseWheelZoomType mouseWheelZoomType} : sap.gantt.MouseWheelZoomType (default: FineGranular)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.ManagedObject#constructor sap.ui.core.ManagedObject}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new AxisTimeStrategy, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new AxisTimeStrategy
 * 
 * @class 
 * Base class for all zoom strategies. This base class defines basic properties and aggregations.
 * 
 * <p>This base class defines:
 * <ul>
 * 		<li>Basic properties and aggregations.</li>
 * </ul>
 * This class controls the zoom strategies and zoom rate in Gantt Chart.
 * sap.gantt provides three basic implementations of <code>AxisTimeStrategy</code>:
 * <ul>
 * 		<li><code>sap.gantt.axistime.ProportionZoomStrategy</code> - A zoom strategy that provides the proportional change ability. Proportional change 
 * ensures that Gantt Chart dynamically adjusts the zoom rate to be the best fit 
 * for rendering shapes in the chart area. This strategy cannot be used by the Select control.</li>
 * 		<li><code>sap.gantt.axistime.FullScreenStrategy</code> - A zoom strategy that sets the value of <code>totalHorizon</code> to the value of <code>visibleHorizon</code>. 
 * When this strategy is implemented, <code>visibleHorizon</code> is fixed. Because of this, when you scroll the splitter to expand or shrink the chart area, 
 * the value of <code>visibleHorizon</code> remains intact, which makes shapes look larger or smaller accordingly.
 * Moreover, the horizontal scroll bar never appears and the zoom control is deactivated.</li>
 * 		<li><code>sap.gantt.axistime.StepwiseZoomStrategy</code> - A zoom strategy that provides the stepwise change ability to control the zoom level of Gantt Chart, 
 *         which is often used by the Select zoom control.</li>
 * </ul>
 * </p>
 * 
 * @extends sap.ui.core.ManagedObject
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase = function(sId,mSettings) {};
/**
 * Calculates the middle date of the given two dates.
 * @param {date} dStart the start date
 * @param {date} dEnd the end date
 * @returns {date} the middle date
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.calMiddleDate = function(dStart,dEnd) { return null; };

/**
 * Calculate new visible horizon according to specified zoom center and zoom delta
 * @param {number} nTimeSpanDelta the delta of visible horizon time range in MS unit
 * @param {Date} [oAnchorTime] optional the time where the zoom center located, if not provided, take the center of current visible horizon as the zoom center
 * @return {object} a new visible horizon
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.calVisibleHorizonByDelta = function(nTimeSpanDelta,oAnchorTime) { return new Object(); };

/**
 * Calculate new visible horizon according to specified zoom center and zoom rate
 * @param {number} nZoomRate the rate for new visible horizon
 * @param {Date} [oAnchorTime] optional the time where the zoom center located, if not provided, take the center of current visible horizon as the zoom center
 * @return {object} a new visible horizon
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.calVisibleHorizonByRate = function(nZoomRate,oAnchorTime) { return new Object(); };

/**
 * @protected
 * @returns {boolean} whether this._oZoom.base is generated
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.calZoomBase = function() { return false; };

/**
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.calZoomScale = function() {  };

/**
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.calZoomScaleByDate = function() {  };

/**
 * Creates an AixsTime instance to be used in Gantt Chart.
 * If you build your own AxisTimeStrategy, you may need to implement this method and return your own AxisTime.
 * 
 * @param {sap.gantt.config.Locale} oLocale Locale configuration passed from GanttChart
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.createAxisTime = function(oLocale) {  };

/**
 * Creates a new subclass of class sap.gantt.axistime.AxisTimeStrategyBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.ManagedObject.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getCalendarType calendarType}.
 * 
 * Configures the calendar type for the Gantt Chart time label.
 * We recommend that you set the type of this argument to <code>sap.ui.core.CalendarType</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.ui.core.CalendarType.Gregorian</code>.
 * @returns {string} Value of property <code>calendarType</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getCalendarType = function() { return ""; };

/**
 * Gets current value of property {@link #getCoarsestTimeLineOption coarsestTimeLineOption}.
 * 
 * Coarsest time line option of AxisTimeStrategy
 * 
 * @returns {object} Value of property <code>coarsestTimeLineOption</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getCoarsestTimeLineOption = function() { return new Object(); };

/**
 * Gets current value of property {@link #getFinestTimeLineOption finestTimeLineOption}.
 * 
 * Finest time line option of AxisTimeStrategy
 * 
 * @returns {object} Value of property <code>finestTimeLineOption</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getFinestTimeLineOption = function() { return new Object(); };

/**
 * Gets current value of property {@link #getLocale locale}.
 * 
 * Configures the locale of the Gantt Chart time label.
 * We recommend that you set the type of this argument to <code>sap.ui.core.Locale</code>.
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>locale</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getLocale = function() { return new Object(); };

/**
 * Gets the time label formatter for Gantt Chart to draw the lower row in the timeline.
 * 
 * @return {sap.ui.core.format.DateFormat} Date formatter
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getLowerRowFormatter = function() { return new sap.ui.core.format.DateFormat(); };

/**
 * Returns a metadata object for class sap.gantt.axistime.AxisTimeStrategyBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMouseWheelZoomType mouseWheelZoomType}.
 * 
 * Specifies the mouse wheel zooming type, which determines the zoom granularity
 * 
 * Default value is <code>FineGranular</code>.
 * @returns {sap.gantt.MouseWheelZoomType} Value of property <code>mouseWheelZoomType</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getMouseWheelZoomType = function() { return new sap.gantt.MouseWheelZoomType(); };

/**
 * Gets current value of property {@link #getTimeLineOption timeLineOption}.
 * 
 * Current time line option of AxisTimeStrategy
 * 
 * @returns {object} Value of property <code>timeLineOption</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getTimeLineOption = function() { return new Object(); };

/**
 * Gets current value of property {@link #getTimeLineOptions timeLineOptions}.
 * 
 * Defines granularity levels, labelling formats, and range of the time line. 
 * <ul>
 * <li>granularity level: time span between two neighboring vertical lines. Examples: 12 hours.</li>
 * <li>labelling format: time formats for the upper row and lower row in the time line. These two rows do not have to share the same format. </li>
 * <li>range: defines a certain length in pixel. Gantt Chart loops the granularity levels from the beginning and chooses the first granularity 
 * level with the time span that consumes more than the defined length.</li>
 * For example, if the current range is 90, Gantt Chart loops the granularity levels from the default initial granularity level 5min. If the 6hour 
 * granularity level consumes 50 pixels, 12hour consumes 100 pixels, and 1Day consumes 200 pixels, the 12hour granularity level is selected as the 
 * current granularity level as it's the first level with the time span that consumes more than 90 pixels.
 * </ul>
 *  
 * The granularity level is a JSON object with the granularity as the key and some internal information such as formatting. 
 * 
 * Take the <code>"12hour"</code> granularity level for example.
 * 	<ul>
 * 		<li><code>"12hour":</code> - Granularity level ID.
 * 			<ul>
 * 				<li>
 * 					<code>"innerInterval"</code> - Time interval between neighboring vertical lines is 12 hours. 
 * 					<ul> 
 * 						<li><code>"unit": sap.gantt.config.TimeUnit.hour</code> - Time unit is hour.</li>
 * 						<li><code>"span": 12</code> - Span is 12.</li>
 * 						<li><code>"range": 90</code> - This granularity level is selected as the current level if 12 hours is the first time span that 
 *                                 consumes more than 90 pixels to be displayed in the chart area.</li>
 * 					</ul>
 * 				</li>
 * 				<li>
 * 					<code>largeInterval</code> - Time interval of the upper row in the timeline is 1 day. Formatted in the locale language with the format string. 
 *                                               This zoom level implements an interval larger than the interval in the default zoom level.
 * 					<ul>
 * 						<li><code>"unit": sap.gantt.config.TimeUnit.day</code> - </li>
 * 						<li><code>"span": 1</code> - Time span is 1.</li>
 * 						<li><code>"format": "cccc dd.M.yyyy"</code> - Formats the string in CLDR date/time symbols.</li>
 * 					</ul>
 * 				</li>
 * 				<li>
 * 					<code>smallInterval</code> - Time interval of the lower row in the timeline is 12 hours. Formatted in the locale language with the format string. 
 *                                               This zoom level implements an interval the same as the that of the default zoom level.
 * 					<ul>
 * 						<li><code>"unit": sap.gantt.config.TimeUnit.hour</code> - Time unit is hour.</li>
 * 						<li><code>"span": 12</code> - Time span is 12.</li>
 * 						<li><code>"format": "HH:mm"</code> - Formats the string in CLDR date/time symbols.</li>
 * 					</ul>
 * 				</li>
 * 			</ul>
 * 		</li>
 * 	</ul>
 * 
 * The current granularity setting provides the following values in the default time line option:<br/>
 * <code>5min</code>, <code>10min</code>, <code>15min</code>, <code>30min</code>,<br/>
 * <code>1hour</code>, <code>2hour</code>, <code>4hour</code>, <code>6hour</code>, <code>12hour</code>,<br/>
 * <code>1day</code>, <code>2day</code>, <code>4day</code>,<br/>
 * <code>1week</code>, <code>2week</code>,<br/>
 * <code>1month</code>, <code>2month</code>, <code>4month</code>, <code>6month</code>,<br/>
 * <code>1year</code>, <code>2year</code>, <code>5year</code>.
 * We recommend that you use the default time line option object instead of creating one by yourself. Because the default time line option object has been precisely calculated and it fits most use cases.
 * If the default time line option is not the best-fit, you can select a time line option from the range (coarsestTimeLineOption, 5 years to finestTimeLineOption, 5 minutes) listed above.
 * Note that creating a new time line option object is a complex process. Moreover, the extra effort may not serve significant purposes and is likely to cause text overlay in the Gantt Chart header.
 * 
 * @returns {object} Value of property <code>timeLineOptions</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getTimeLineOptions = function() { return new Object(); };

/**
 * Gets current value of property {@link #getTotalHorizon totalHorizon}.
 * 
 * Entire time span Gantt Chart can display in the chart area
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_PLAN_HORIZON</code>.
 * @returns {object} Value of property <code>totalHorizon</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getTotalHorizon = function() { return new Object(); };

/**
 * Gets the time label formatter for Gantt Chart to draw the top row in the timeline.
 * 
 * @return {sap.ui.core.format.DateFormat} Date formatter
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getUpperRowFormatter = function() { return new sap.ui.core.format.DateFormat(); };

/**
 * Gets current value of property {@link #getVisibleHorizon visibleHorizon}.
 * 
 * Time span Gantt Chart currently displays in the chart area
 * Specifies the start and end points of the time span that is visible in the chart area. <code>visibleHorizon</code> is less
 * than or equal to <code>totalHorizon</code>.
 * You can configure the time horizon using one of the following patterns:
 * <ul>
 * 		<li>[startTime, null]: Jump to the position where the start time is on the left edge of the screen without changing the zoom rate. When you 
 * use this pattern, Gantt Chart calculates the endTime according to the current zoom rate.</li>
 * 		<li>[null, endTime]: Jump to the position where the end time is on the right edge of the screen without changing the zoom rate.
 *  When you use this pattern, Gantt Chart calculates the startTime accoridng to the current zoom rate.</li>
 * 		<li>[startTime, endTime]: Every strategy has their own implementation to control misc.AxisTime.</li>
 * </ul>
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_INIT_HORIZON</code>.
 * @returns {object} Value of property <code>visibleHorizon</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getVisibleHorizon = function() { return new Object(); };

/**
 * Gets current value of property {@link #getZoomLevel zoomLevel}.
 * 
 * Current zoom level of your Gantt chart with 0 representing the initial zoom level. The value of this property must be lower than that of totalZoomLevels.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>zoomLevel</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getZoomLevel = function() { return 0; };

/**
 * Gets current value of property {@link #getZoomLevels zoomLevels}.
 * 
 * Total number of zoom levels on your zoom control. For example, the step count of Slider control and the item count of Select control.
 * 
 * Default value is <code>10</code>.
 * @returns {int} Value of property <code>zoomLevels</code>
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.getZoomLevels = function() { return 0; };

/**
 * Sets a new value for property {@link #getCalendarType calendarType}.
 * 
 * Configures the calendar type for the Gantt Chart time label.
 * We recommend that you set the type of this argument to <code>sap.ui.core.CalendarType</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.ui.core.CalendarType.Gregorian</code>.
 * @param {string} sCalendarType New value for property <code>calendarType</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setCalendarType = function(sCalendarType) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getCoarsestTimeLineOption coarsestTimeLineOption}.
 * 
 * Coarsest time line option of AxisTimeStrategy
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oCoarsestTimeLineOption New value for property <code>coarsestTimeLineOption</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setCoarsestTimeLineOption = function(oCoarsestTimeLineOption) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getFinestTimeLineOption finestTimeLineOption}.
 * 
 * Finest time line option of AxisTimeStrategy
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oFinestTimeLineOption New value for property <code>finestTimeLineOption</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setFinestTimeLineOption = function(oFinestTimeLineOption) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getLocale locale}.
 * 
 * Configures the locale of the Gantt Chart time label.
 * We recommend that you set the type of this argument to <code>sap.ui.core.Locale</code>.
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oLocale New value for property <code>locale</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setLocale = function(oLocale) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getMouseWheelZoomType mouseWheelZoomType}.
 * 
 * Specifies the mouse wheel zooming type, which determines the zoom granularity
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>FineGranular</code>.
 * @param {sap.gantt.MouseWheelZoomType} sMouseWheelZoomType New value for property <code>mouseWheelZoomType</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setMouseWheelZoomType = function(sMouseWheelZoomType) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getTimeLineOption timeLineOption}.
 * 
 * Current time line option of AxisTimeStrategy
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oTimeLineOption New value for property <code>timeLineOption</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setTimeLineOption = function(oTimeLineOption) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getTimeLineOptions timeLineOptions}.
 * 
 * Defines granularity levels, labelling formats, and range of the time line. 
 * <ul>
 * <li>granularity level: time span between two neighboring vertical lines. Examples: 12 hours.</li>
 * <li>labelling format: time formats for the upper row and lower row in the time line. These two rows do not have to share the same format. </li>
 * <li>range: defines a certain length in pixel. Gantt Chart loops the granularity levels from the beginning and chooses the first granularity 
 * level with the time span that consumes more than the defined length.</li>
 * For example, if the current range is 90, Gantt Chart loops the granularity levels from the default initial granularity level 5min. If the 6hour 
 * granularity level consumes 50 pixels, 12hour consumes 100 pixels, and 1Day consumes 200 pixels, the 12hour granularity level is selected as the 
 * current granularity level as it's the first level with the time span that consumes more than 90 pixels.
 * </ul>
 *  
 * The granularity level is a JSON object with the granularity as the key and some internal information such as formatting. 
 * 
 * Take the <code>"12hour"</code> granularity level for example.
 * 	<ul>
 * 		<li><code>"12hour":</code> - Granularity level ID.
 * 			<ul>
 * 				<li>
 * 					<code>"innerInterval"</code> - Time interval between neighboring vertical lines is 12 hours. 
 * 					<ul> 
 * 						<li><code>"unit": sap.gantt.config.TimeUnit.hour</code> - Time unit is hour.</li>
 * 						<li><code>"span": 12</code> - Span is 12.</li>
 * 						<li><code>"range": 90</code> - This granularity level is selected as the current level if 12 hours is the first time span that 
 *                                 consumes more than 90 pixels to be displayed in the chart area.</li>
 * 					</ul>
 * 				</li>
 * 				<li>
 * 					<code>largeInterval</code> - Time interval of the upper row in the timeline is 1 day. Formatted in the locale language with the format string. 
 *                                               This zoom level implements an interval larger than the interval in the default zoom level.
 * 					<ul>
 * 						<li><code>"unit": sap.gantt.config.TimeUnit.day</code> - </li>
 * 						<li><code>"span": 1</code> - Time span is 1.</li>
 * 						<li><code>"format": "cccc dd.M.yyyy"</code> - Formats the string in CLDR date/time symbols.</li>
 * 					</ul>
 * 				</li>
 * 				<li>
 * 					<code>smallInterval</code> - Time interval of the lower row in the timeline is 12 hours. Formatted in the locale language with the format string. 
 *                                               This zoom level implements an interval the same as the that of the default zoom level.
 * 					<ul>
 * 						<li><code>"unit": sap.gantt.config.TimeUnit.hour</code> - Time unit is hour.</li>
 * 						<li><code>"span": 12</code> - Time span is 12.</li>
 * 						<li><code>"format": "HH:mm"</code> - Formats the string in CLDR date/time symbols.</li>
 * 					</ul>
 * 				</li>
 * 			</ul>
 * 		</li>
 * 	</ul>
 * 
 * The current granularity setting provides the following values in the default time line option:<br/>
 * <code>5min</code>, <code>10min</code>, <code>15min</code>, <code>30min</code>,<br/>
 * <code>1hour</code>, <code>2hour</code>, <code>4hour</code>, <code>6hour</code>, <code>12hour</code>,<br/>
 * <code>1day</code>, <code>2day</code>, <code>4day</code>,<br/>
 * <code>1week</code>, <code>2week</code>,<br/>
 * <code>1month</code>, <code>2month</code>, <code>4month</code>, <code>6month</code>,<br/>
 * <code>1year</code>, <code>2year</code>, <code>5year</code>.
 * We recommend that you use the default time line option object instead of creating one by yourself. Because the default time line option object has been precisely calculated and it fits most use cases.
 * If the default time line option is not the best-fit, you can select a time line option from the range (coarsestTimeLineOption, 5 years to finestTimeLineOption, 5 minutes) listed above.
 * Note that creating a new time line option object is a complex process. Moreover, the extra effort may not serve significant purposes and is likely to cause text overlay in the Gantt Chart header.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oTimeLineOptions New value for property <code>timeLineOptions</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setTimeLineOptions = function(oTimeLineOptions) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getTotalHorizon totalHorizon}.
 * 
 * Entire time span Gantt Chart can display in the chart area
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_PLAN_HORIZON</code>.
 * @param {object} oTotalHorizon New value for property <code>totalHorizon</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setTotalHorizon = function(oTotalHorizon) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getVisibleHorizon visibleHorizon}.
 * 
 * Time span Gantt Chart currently displays in the chart area
 * Specifies the start and end points of the time span that is visible in the chart area. <code>visibleHorizon</code> is less
 * than or equal to <code>totalHorizon</code>.
 * You can configure the time horizon using one of the following patterns:
 * <ul>
 * 		<li>[startTime, null]: Jump to the position where the start time is on the left edge of the screen without changing the zoom rate. When you 
 * use this pattern, Gantt Chart calculates the endTime according to the current zoom rate.</li>
 * 		<li>[null, endTime]: Jump to the position where the end time is on the right edge of the screen without changing the zoom rate.
 *  When you use this pattern, Gantt Chart calculates the startTime accoridng to the current zoom rate.</li>
 * 		<li>[startTime, endTime]: Every strategy has their own implementation to control misc.AxisTime.</li>
 * </ul>
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_INIT_HORIZON</code>.
 * @param {object} oVisibleHorizon New value for property <code>visibleHorizon</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setVisibleHorizon = function(oVisibleHorizon) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getZoomLevel zoomLevel}.
 * 
 * Current zoom level of your Gantt chart with 0 representing the initial zoom level. The value of this property must be lower than that of totalZoomLevels.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iZoomLevel New value for property <code>zoomLevel</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setZoomLevel = function(iZoomLevel) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Sets a new value for property {@link #getZoomLevels zoomLevels}.
 * 
 * Total number of zoom levels on your zoom control. For example, the step count of Slider control and the item count of Select control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iZoomLevels New value for property <code>zoomLevels</code>
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.setZoomLevels = function(iZoomLevels) { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * In the shape drawing process, Gantt Chart calls this function to get the latest information about Stop and AxisTime. 
 * Moreover, when you run this function, AxisTimeStrategy updates the GanttChart status such as the zoom rate of AxisTime.
 * 
 * @param {int} nClientWidth Width of the visible area in Gantt Chart
 * @return {object} The status plain object about AxisTimeStrategy. The return contains two properties <code>zoomLevelChanged</code> and <code>axisTimeChanged</code>.
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.syncContext = function(nClientWidth) { return new Object(); };

/**
 * This is the delegate function of the zoom control event, such as the zoom in or zoom out event.
 * You must implement your zoom level change logic.
 * @param {object} oStopInfo Zoom stop information, which contains the parameters <code>key</code> and <code>text</code>.
 * @public
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.updateStopInfo = function(oStopInfo) {  };

/**
 * Calculate and set new visible horizon for fine granular mouse wheel zoom
 * @param {Date} oTimeAtZoomCenter the time where mouse pointer located during the zooming
 * @param {boolean} bZoomIn true if zoom in, false if zoom out
 * @param {number} iZoomFactor the scroll range of each mouse wheel scrolling / 100, serves as a coefficient when calculating zoom delta
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.updateVisibleHorizonOnFineGranularMouseWheelZoom = function(oTimeAtZoomCenter,bZoomIn,iZoomFactor) {  };

/**
 * update visible horizon for mouse wheel zoom according to configured zoom type
 * @param {Date} oTimeAtZoomCenter the time where mouse pointer located during the zooming
 * @param {number} iScrollDelta the range of each mouse wheel scrolling
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.updateVisibleHorizonOnMouseWheelZoom = function(oTimeAtZoomCenter,iScrollDelta) {  };

/**
 * Calculate and set new visible horizon for step-wise mouse wheel zoom
 * @param {Date} oTimeAtZoomCenter the time where mouse pointer located during the zooming
 * @param {boolean} bZoomIn true if zoom in, false if zoom out
 * @param {number} iZoomFactor the scroll range of each mouse wheel scrolling / 100, serves as a coefficient when calculating zoom delta
 * @protected
 * 
 */
sap.gantt.axistime.AxisTimeStrategyBase.prototype.updateVisibleHorizonOnStepWiseMouseWheelZoom = function(oTimeAtZoomCenter,bZoomIn,iZoomFactor) {  };


// ---- sap.gantt.axistime.FullScreenStrategy --------------------------------------------------------------------------

/**
 * Creates and initializes a FullScreenStrategy.
 * 
 * @param {string} [sId] ID for the new AxisTimeStrategy, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new AxisTimeStrategy
 * 
 * @class
 * FullScreenStrategy
 * 
 * <p>
 * A zoom strategy that sets the value of <code>totalHorizon</code> to the value of <code>visibleHorizon</code>.
 * When this strategy is implemented, <code>visibleHorizon</code> is fixed. Because of this, when you scroll the
 * splitter to expand or shrink the chart area, the value of <code>visibleHorizon</code> remains intact, which makes
 * shapes look larger or smaller accordingly. Moreover, the horizontal scroll bar never appears and the zoom control
 * is deactivated.
 * </p>
 * 
 * @extends sap.gantt.axistime.AxisTimeStrategyBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.axistime.FullScreenStrategy = function(sId,mSettings) {};

// ---- sap.gantt.axistime.ProportionZoomStrategy --------------------------------------------------------------------------

/**
 * Creates and initializes a ProportionZoomStrategy.
 * 
 * @param {string} [sId] ID for the new AxisTimeStrategy, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new AxisTimeStrategy
 * 
 * @class
 * ProportionZoomStrategy
 * 
 * <p>
 * A zoom strategy that provides the proportional change ability. Proportional change
 * ensures that Gantt Chart dynamically adjusts the zoom rate to be the best fit
 * for rendering shapes in the chart area. This strategy cannot be used by the Select control.
 * </p>
 * 
 * @extends sap.gantt.axistime.AxisTimeStrategyBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.axistime.ProportionZoomStrategy = function(sId,mSettings) {};

// ---- sap.gantt.axistime.StepwiseZoomStrategy --------------------------------------------------------------------------

/**
 * Constructor for a new StepwiseZoomStrategy.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The class allows you to define a zoom strategy whose time line options are stepwise, i.e. the width of each time line option
 * is pre-defined and won't be changed during zooming.
 * @extends sap.gantt.axistime.AxisTimeStrategyBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.axistime.StepwiseZoomStrategy with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.axistime.AxisTimeStrategyBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.axistime.StepwiseZoomStrategy.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Don't use this method to set coarsestTimeLineOption because its value is determined by timeLineOptions.
 * The last entry of timeLineOptions is coarsestTimeLineOption.
 * 
 * @param {object} oTimeLineOption coarsest time line option of StepwiseZoomStrategy
 * @public
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.setCoarsestTimeLineOption = function(oTimeLineOption) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };

/**
 * Don't use this method to set finestTimeLineOption because its value is determined by timeLineOptions.
 * The first entry of timeLineOptions is finestTimeLineOption.
 * 
 * @param {object} oTimeLineOption finest time line option of StepwiseZoomStrategy
 * @public
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.setFinestTimeLineOption = function(oTimeLineOption) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };

/**
 * Sets the time line options of StepwiseZoomStrategy.
 * 
 * @param {object} oTimeLineOptions time line options of StepwiseZoomStrategy
 * @public
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.setTimeLineOptions = function(oTimeLineOptions) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };

/**
 * Sets the total horizon of StepwiseZoomStrategy. The time range and view range of this.getAxisTime() will also be updated, the rate will remain unchanged.
 * 
 * @param {object} oTotalHorizon total horizon of StepwiseZoomStrategy
 * @public
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.setTotalHorizon = function(oTotalHorizon) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };

/**
 * Sets the visible horizon of StepwiseZoomStrategy.
 * 
 * @param {object} oVisibleHorizon visible horizon of StepwiseZoomStrategy
 * @public
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.setVisibleHorizon = function(oVisibleHorizon) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };

/**
 * Don't use this method to set zoomLevels because its value is determined by timeLineOptions.
 * The account of entities in timeLineOptions is zoomLevels.
 * 
 * @param {int} iZoomLevels zoom levels of StepwiseZoomStrategy
 * @public
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.setZoomLevels = function(iZoomLevels) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };

/**
 * This method does below things:
 * 1. Sets time line option according to the stop info object.
 * 2. Sets zoom level according to the stop info object. The setter of zoom level does some additional things.
 * 
 * @param {object} oStopInfo Zoom stop information, which contains the parameters <code>key</code> and <code>text</code>.
 * @protected
 * @returns {sap.gantt.axistime.StepwiseZoomStrategy} for chaining
 * 
 */
sap.gantt.axistime.StepwiseZoomStrategy.prototype.updateStopInfo = function(oStopInfo) { return new sap.gantt.axistime.StepwiseZoomStrategy(); };


// ---- sap.gantt.config --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.config.toString = function() { return ""; };

// ---- sap.gantt.config.ChartScheme --------------------------------------------------------------------------

/**
 * Creates and initializes a new ChartScheme class
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getRowSpan rowSpan} : int (default: 1)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getModeKey modeKey} : string (default: sap.gantt.config.DEFAULT_MODE_KEY)</li>
 * <li>{@link #getHaveBackground haveBackground} : boolean (default: false)</li>
 * <li>{@link #getBackgroundClass backgroundClass} : string</li>
 * <li>{@link #getShapeKeys shapeKeys} : string[] (default: [])</li>
 * <li>{@link #getRowIndexName rowIndexName} : string (default: rowIndex)</li>
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
 * The ChartScheme control is one of the settings of {@link sap.gantt.GanttChart}. 
 * <p>A Gantt chart uses this setting to decide the mode of Gantt chart and the shapes to display in the Gantt chart.
 * A Gantt chart contains one or more Chart schemes. By switching between these schemes, the Gantt chart can display different shapes.
 * </p>
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ChartScheme = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ChartScheme with name <code>sClassName</code>
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
sap.gantt.config.ChartScheme.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundClass backgroundClass}.
 * 
 * Decides the background color of the row in the chart scheme
 * 
 * @returns {string} Value of property <code>backgroundClass</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getBackgroundClass = function() { return ""; };

/**
 * Gets current value of property {@link #getHaveBackground haveBackground}.
 * 
 * Decides whether the shape has a background
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>haveBackground</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getHaveBackground = function() { return false; };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * URL of the icon of the Chart scheme
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique key of the Chart scheme
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.ChartScheme.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ChartScheme.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getModeKey modeKey}.
 * 
 * Key of {@link sap.gantt.config.Mode}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @returns {string} Value of property <code>modeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getModeKey = function() { return ""; };

/**
 * Gets current value of property {@link #getName name}.
 * 
 * Description of the Chart scheme
 * 
 * @returns {string} Value of property <code>name</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getName = function() { return ""; };

/**
 * Gets current value of property {@link #getRowIndexName rowIndexName}.
 * 
 * Decides which attribute serves as the purpose of "rowIndex" if it has multiple rows
 * 
 * Default value is <code>rowIndex</code>.
 * @returns {string} Value of property <code>rowIndexName</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getRowIndexName = function() { return ""; };

/**
 * Gets current value of property {@link #getRowSpan rowSpan}.
 * 
 * Decides the row height of {@link sap.gantt.GanttChartBase}
 * For example, if rowSpan is 2, the row height of the Gantt chart equals twice of the row height of the tree table
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>rowSpan</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getRowSpan = function() { return 0; };

/**
 * Gets current value of property {@link #getShapeKeys shapeKeys}.
 * 
 * Array of the key of {@link sap.gantt.config.Shape}
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>shapeKeys</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.getShapeKeys = function() { return new Array(); };

/**
 * Sets a new value for property {@link #getBackgroundClass backgroundClass}.
 * 
 * Decides the background color of the row in the chart scheme
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sBackgroundClass New value for property <code>backgroundClass</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setBackgroundClass = function(sBackgroundClass) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getHaveBackground haveBackground}.
 * 
 * Decides whether the shape has a background
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHaveBackground New value for property <code>haveBackground</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setHaveBackground = function(bHaveBackground) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * URL of the icon of the Chart scheme
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setIcon = function(sIcon) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique key of the Chart scheme
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setKey = function(sKey) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getModeKey modeKey}.
 * 
 * Key of {@link sap.gantt.config.Mode}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @param {string} sModeKey New value for property <code>modeKey</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setModeKey = function(sModeKey) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * Description of the Chart scheme
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setName = function(sName) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getRowIndexName rowIndexName}.
 * 
 * Decides which attribute serves as the purpose of "rowIndex" if it has multiple rows
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>rowIndex</code>.
 * @param {string} sRowIndexName New value for property <code>rowIndexName</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setRowIndexName = function(sRowIndexName) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getRowSpan rowSpan}.
 * 
 * Decides the row height of {@link sap.gantt.GanttChartBase}
 * For example, if rowSpan is 2, the row height of the Gantt chart equals twice of the row height of the tree table
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iRowSpan New value for property <code>rowSpan</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setRowSpan = function(iRowSpan) { return new sap.gantt.config.ChartScheme(); };

/**
 * Sets a new value for property {@link #getShapeKeys shapeKeys}.
 * 
 * Array of the key of {@link sap.gantt.config.Shape}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sShapeKeys New value for property <code>shapeKeys</code>
 * @returns {sap.gantt.config.ChartScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ChartScheme.prototype.setShapeKeys = function(sShapeKeys) { return new sap.gantt.config.ChartScheme(); };


// ---- sap.gantt.config.ColumnAttribute --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnAttribute
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
 * <li>{@link #getObjectTypeKey objectTypeKey} : string</li>
 * <li>{@link #getAttribute attribute} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the column attribute which is used in the hierarchy column
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ColumnAttribute = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ColumnAttribute with name <code>sClassName</code>
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
sap.gantt.config.ColumnAttribute.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAttribute attribute}.
 * 
 * Attribute name of the column
 * 
 * @returns {string} Value of property <code>attribute</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ColumnAttribute.prototype.getAttribute = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.ColumnAttribute.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ColumnAttribute.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getObjectTypeKey objectTypeKey}.
 * 
 * Key of {@link sap.gantt.config.ObjectType}
 * 
 * @returns {string} Value of property <code>objectTypeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ColumnAttribute.prototype.getObjectTypeKey = function() { return ""; };

/**
 * Sets a new value for property {@link #getAttribute attribute}.
 * 
 * Attribute name of the column
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAttribute New value for property <code>attribute</code>
 * @returns {sap.gantt.config.ColumnAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ColumnAttribute.prototype.setAttribute = function(sAttribute) { return new sap.gantt.config.ColumnAttribute(); };

/**
 * Sets a new value for property {@link #getObjectTypeKey objectTypeKey}.
 * 
 * Key of {@link sap.gantt.config.ObjectType}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sObjectTypeKey New value for property <code>objectTypeKey</code>
 * @returns {sap.gantt.config.ColumnAttribute} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ColumnAttribute.prototype.setObjectTypeKey = function(sObjectTypeKey) { return new sap.gantt.config.ColumnAttribute(); };


// ---- sap.gantt.config.ContainerLayout --------------------------------------------------------------------------

/**
 * Creates and initializes a new container layout
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
 * <li>{@link #getKey key} : string (default: sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY)</li>
 * <li>{@link #getText text} : string (default: sap.ui.getCore().getLibraryResourceBundle("sap.gantt").getText("XLST_SINGLE_LAYOUT"))</li>
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation (default: Vertical)</li>
 * <li>{@link #getActiveModeKey activeModeKey} : string (default: sap.gantt.config.DEFAULT_MODE_KEY)</li>
 * <li>{@link #getToolbarSchemeKey toolbarSchemeKey} : string (default: sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY)</li>
 * <li>{@link #getSelectionPanelSize selectionPanelSize} : sap.ui.core.CSSSize (default: 30%)</li>
 * <li>{@link #getGanttChartLayouts ganttChartLayouts} : object[] (default: [])</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the container layout. The container layout determines the layout of a Gantt chart container such as the CSS size, orientation, toolbar, and tree table size. 
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ContainerLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ContainerLayout with name <code>sClassName</code>
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
sap.gantt.config.ContainerLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getActiveModeKey activeModeKey}.
 * 
 * Active mode key. See {@link sap.gantt.config.Mode}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @returns {string} Value of property <code>activeModeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getActiveModeKey = function() { return ""; };

/**
 * Gets current value of property {@link #getGanttChartLayouts ganttChartLayouts}.
 * 
 * Array of the Gantt chart layout. See {@link sap.gantt.config.GanttChartLayout}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.GanttChartLayout[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>ganttChartLayouts</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getGanttChartLayouts = function() { return new Array(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique key of the container layout
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY</code>.
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.ContainerLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ContainerLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOrientation orientation}.
 * 
 * Orientation of the Gantt chart container. See {@link sap.ui.core.Oritentation}
 * 
 * Default value is <code>Vertical</code>.
 * @returns {sap.ui.core.Orientation} Value of property <code>orientation</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Gets current value of property {@link #getSelectionPanelSize selectionPanelSize}.
 * 
 * CSS size of the selection panel. See {@link sap.ui.core.CSSSize}
 * 
 * Default value is <code>30%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>selectionPanelSize</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getSelectionPanelSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Default value is <code>sap.ui.getCore().getLibraryResourceBundle("sap.gantt").getText("XLST_SINGLE_LAYOUT")</code>.
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getToolbarSchemeKey toolbarSchemeKey}.
 * 
 * Toolbar scheme key. See {@link sap.gantt.config.ToolbarScheme}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY</code>.
 * @returns {string} Value of property <code>toolbarSchemeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.getToolbarSchemeKey = function() { return ""; };

/**
 * Sets a new value for property {@link #getActiveModeKey activeModeKey}.
 * 
 * Active mode key. See {@link sap.gantt.config.Mode}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @param {string} sActiveModeKey New value for property <code>activeModeKey</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setActiveModeKey = function(sActiveModeKey) { return new sap.gantt.config.ContainerLayout(); };

/**
 * Sets a new value for property {@link #getGanttChartLayouts ganttChartLayouts}.
 * 
 * Array of the Gantt chart layout. See {@link sap.gantt.config.GanttChartLayout}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.GanttChartLayout[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sGanttChartLayouts New value for property <code>ganttChartLayouts</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setGanttChartLayouts = function(sGanttChartLayouts) { return new sap.gantt.config.ContainerLayout(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique key of the container layout
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY</code>.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setKey = function(sKey) { return new sap.gantt.config.ContainerLayout(); };

/**
 * Sets a new value for property {@link #getOrientation orientation}.
 * 
 * Orientation of the Gantt chart container. See {@link sap.ui.core.Oritentation}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Vertical</code>.
 * @param {sap.ui.core.Orientation} sOrientation New value for property <code>orientation</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setOrientation = function(sOrientation) { return new sap.gantt.config.ContainerLayout(); };

/**
 * Sets a new value for property {@link #getSelectionPanelSize selectionPanelSize}.
 * 
 * CSS size of the selection panel. See {@link sap.ui.core.CSSSize}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>30%</code>.
 * @param {sap.ui.core.CSSSize} sSelectionPanelSize New value for property <code>selectionPanelSize</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setSelectionPanelSize = function(sSelectionPanelSize) { return new sap.gantt.config.ContainerLayout(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.ui.getCore().getLibraryResourceBundle("sap.gantt").getText("XLST_SINGLE_LAYOUT")</code>.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setText = function(sText) { return new sap.gantt.config.ContainerLayout(); };

/**
 * Sets a new value for property {@link #getToolbarSchemeKey toolbarSchemeKey}.
 * 
 * Toolbar scheme key. See {@link sap.gantt.config.ToolbarScheme}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY</code>.
 * @param {string} sToolbarSchemeKey New value for property <code>toolbarSchemeKey</code>
 * @returns {sap.gantt.config.ContainerLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ContainerLayout.prototype.setToolbarSchemeKey = function(sToolbarSchemeKey) { return new sap.gantt.config.ContainerLayout(); };


// ---- sap.gantt.config.ExpandChart --------------------------------------------------------------------------

/**
 * Creates and initializes a new expand chart
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
 * <li>{@link #getIsExpand isExpand} : boolean</li>
 * <li>{@link #getChartSchemeKeys chartSchemeKeys} : string[] (default: [])</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the expand chart which is used by {@link sap.gantt.config.ExpandChartGroup}.
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ExpandChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ExpandChart with name <code>sClassName</code>
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
sap.gantt.config.ExpandChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getChartSchemeKeys chartSchemeKeys}.
 * 
 * Array of key of {@link sap.gantt.config.ChartScheme}
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>chartSchemeKeys</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChart.prototype.getChartSchemeKeys = function() { return new Array(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * URL of the icon of the expand chart
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChart.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIsExpand isExpand}.
 * 
 * Specifies whether the action is to expand or to collapse a row in the chart.
 * 
 * @returns {boolean} Value of property <code>isExpand</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChart.prototype.getIsExpand = function() { return false; };

/**
 * Returns a metadata object for class sap.gantt.config.ExpandChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ExpandChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getChartSchemeKeys chartSchemeKeys}.
 * 
 * Array of key of {@link sap.gantt.config.ChartScheme}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sChartSchemeKeys New value for property <code>chartSchemeKeys</code>
 * @returns {sap.gantt.config.ExpandChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChart.prototype.setChartSchemeKeys = function(sChartSchemeKeys) { return new sap.gantt.config.ExpandChart(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * URL of the icon of the expand chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.gantt.config.ExpandChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChart.prototype.setIcon = function(sIcon) { return new sap.gantt.config.ExpandChart(); };

/**
 * Sets a new value for property {@link #getIsExpand isExpand}.
 * 
 * Specifies whether the action is to expand or to collapse a row in the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bIsExpand New value for property <code>isExpand</code>
 * @returns {sap.gantt.config.ExpandChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChart.prototype.setIsExpand = function(bIsExpand) { return new sap.gantt.config.ExpandChart(); };


// ---- sap.gantt.config.ExpandChartGroup --------------------------------------------------------------------------

/**
 * Creates and initializes a new expand chart group
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
 * <li>{@link #getExpandCharts expandCharts} : object[] (default: [])</li>
 * <li>{@link #getEnableRichType enableRichType} : boolean</li>
 * <li>{@link #getShowArrowText showArrowText} : boolean</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.config.ToolbarGroup#constructor sap.gantt.config.ToolbarGroup}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines a toolbar group for the expand chart-related toolbar items. These expand chart-related toolbar items are displayed in the Gantt chart toolbar.
 * @extends sap.gantt.config.ToolbarGroup
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ExpandChartGroup with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.config.ToolbarGroup.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.config.ExpandChartGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getEnableRichType enableRichType}.
 * 
 * When this property is enabled, expand button is in emphasized button type, and collapse button
 * is in default button type.
 * 
 * @returns {boolean} Value of property <code>enableRichType</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup.prototype.getEnableRichType = function() { return false; };

/**
 * Gets current value of property {@link #getExpandCharts expandCharts}.
 * 
 * Array of {@link sap.gantt.config.ExpandChart}
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>expandCharts</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup.prototype.getExpandCharts = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.gantt.config.ExpandChartGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ExpandChartGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowArrowText showArrowText}.
 * 
 * When this property is enabled, text arrow is shown beside icon indicating expand/collapse function
 * 
 * @returns {boolean} Value of property <code>showArrowText</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup.prototype.getShowArrowText = function() { return false; };

/**
 * Sets a new value for property {@link #getEnableRichType enableRichType}.
 * 
 * When this property is enabled, expand button is in emphasized button type, and collapse button
 * is in default button type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bEnableRichType New value for property <code>enableRichType</code>
 * @returns {sap.gantt.config.ExpandChartGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup.prototype.setEnableRichType = function(bEnableRichType) { return new sap.gantt.config.ExpandChartGroup(); };

/**
 * Sets a new value for property {@link #getExpandCharts expandCharts}.
 * 
 * Array of {@link sap.gantt.config.ExpandChart}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sExpandCharts New value for property <code>expandCharts</code>
 * @returns {sap.gantt.config.ExpandChartGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup.prototype.setExpandCharts = function(sExpandCharts) { return new sap.gantt.config.ExpandChartGroup(); };

/**
 * Sets a new value for property {@link #getShowArrowText showArrowText}.
 * 
 * When this property is enabled, text arrow is shown beside icon indicating expand/collapse function
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bShowArrowText New value for property <code>showArrowText</code>
 * @returns {sap.gantt.config.ExpandChartGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ExpandChartGroup.prototype.setShowArrowText = function(bShowArrowText) { return new sap.gantt.config.ExpandChartGroup(); };


// ---- sap.gantt.config.GanttChartLayout --------------------------------------------------------------------------

/**
 * Creates and initializes a new Gantt chart layout
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
 * <li>{@link #getGanttChartSize ganttChartSize} : sap.ui.core.CSSSize</li>
 * <li>{@link #getActiveModeKey activeModeKey} : string (default: sap.gantt.config.DEFAULT_MODE_KEY)</li>
 * <li>{@link #getHierarchyKey hierarchyKey} : string (default: sap.gantt.config.DEFAULT_HIERARCHY_KEY)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the Gantt chart layout. This includes but is not limited to the CSS size, mode, and hierarchy of the Gantt chart.
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.GanttChartLayout with name <code>sClassName</code>
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
sap.gantt.config.GanttChartLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getActiveModeKey activeModeKey}.
 * 
 * Key of the mode. See {@link sap.gantt.config.Mode}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @returns {string} Value of property <code>activeModeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout.prototype.getActiveModeKey = function() { return ""; };

/**
 * Gets current value of property {@link #getGanttChartSize ganttChartSize}.
 * 
 * CSS Size of the Gantt chart. See {@link sap.ui.core.CSSSize}
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>ganttChartSize</code>
 * 
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout.prototype.getGanttChartSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getHierarchyKey hierarchyKey}.
 * 
 * Key of the hierarchy. See {@link sap.gantt.config.Hierarchy}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code>.
 * @returns {string} Value of property <code>hierarchyKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout.prototype.getHierarchyKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.GanttChartLayout.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.GanttChartLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getActiveModeKey activeModeKey}.
 * 
 * Key of the mode. See {@link sap.gantt.config.Mode}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @param {string} sActiveModeKey New value for property <code>activeModeKey</code>
 * @returns {sap.gantt.config.GanttChartLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout.prototype.setActiveModeKey = function(sActiveModeKey) { return new sap.gantt.config.GanttChartLayout(); };

/**
 * Sets a new value for property {@link #getGanttChartSize ganttChartSize}.
 * 
 * CSS Size of the Gantt chart. See {@link sap.ui.core.CSSSize}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sGanttChartSize New value for property <code>ganttChartSize</code>
 * @returns {sap.gantt.config.GanttChartLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout.prototype.setGanttChartSize = function(sGanttChartSize) { return new sap.gantt.config.GanttChartLayout(); };

/**
 * Sets a new value for property {@link #getHierarchyKey hierarchyKey}.
 * 
 * Key of the hierarchy. See {@link sap.gantt.config.Hierarchy}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code>.
 * @param {string} sHierarchyKey New value for property <code>hierarchyKey</code>
 * @returns {sap.gantt.config.GanttChartLayout} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.GanttChartLayout.prototype.setHierarchyKey = function(sHierarchyKey) { return new sap.gantt.config.GanttChartLayout(); };


// ---- sap.gantt.config.Hierarchy --------------------------------------------------------------------------

/**
 * Creates and initializes a new hierarchy
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
 * <li>{@link #getKey key} : string (default: sap.gantt.config.DEFAULT_HIERARCHY_KEY)</li>
 * <li>{@link #getText text} : string (default: Default Hierarchy)</li>
 * <li>{@link #getActiveModeKey activeModeKey} : string (default: sap.gantt.config.DEFAULT_MODE_KEY)</li>
 * <li>{@link #getToolbarSchemeKey toolbarSchemeKey} : string (default: sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME_KEY)</li>
 * <li>{@link #getColumns columns} : object[]</li>
 * <li>{@link #getExpandedLevels expandedLevels} : string[][]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the hierarchy in the Gantt chart. The hierarchy is used for building the tree table in {@link sap.gantt.GanttChartWithTable}.
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.Hierarchy = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.Hierarchy with name <code>sClassName</code>
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
sap.gantt.config.Hierarchy.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getActiveModeKey activeModeKey}.
 * 
 * Key of {@link sap.gantt.config.Mode}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @returns {string} Value of property <code>activeModeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.getActiveModeKey = function() { return ""; };

/**
 * Gets current value of property {@link #getColumns columns}.
 * 
 * Columns of the hierarchy. Array of {@link sap.gantt.config.HierarchyColumn}
 * 
 * @returns {object[]} Value of property <code>columns</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.getColumns = function() { return new Array(); };

/**
 * Gets current value of property {@link #getExpandedLevels expandedLevels}.
 * 
 * expandedLevels determines how the tree table is initially expanded.
 * This property is a two-dimensional array containing object types of row data. Only rows with data of 
 * the specified object types are expanded. Each child array represents a specific level in the hierarchy 
 * with the first child array representing the first level and so forth. For example, if 
 * this property is set to [["02", "03"], ["05"]], rows containing data of object types 02 or 03 in the 
 * first level and rows containing data of object type 05 in the second level are expanded.
 * 
 * @returns {string[][]} Value of property <code>expandedLevels</code>
 * 
 * @deprecated This feature may cause severe performance issue! Since TreeTable doesn't have API to 
 * expand specific multiple rows in one call, GanttChart expand the tree tale to level calculated from 
 * the configuration, then loop all data in the model, collapse the node which does not full-fill the 
 * configuration one by one. This feature is application specific and should be handled by application.
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.getExpandedLevels = function() { return new Array(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique key of the hierarchy
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code>.
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.Hierarchy.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.Hierarchy.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Description of the hierarchy
 * 
 * Default value is <code>Default Hierarchy</code>.
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getToolbarSchemeKey toolbarSchemeKey}.
 * 
 * Key of {@link sap.gantt.config.ToolbarScheme}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME_KEY</code>.
 * @returns {string} Value of property <code>toolbarSchemeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.getToolbarSchemeKey = function() { return ""; };

/**
 * Sets a new value for property {@link #getActiveModeKey activeModeKey}.
 * 
 * Key of {@link sap.gantt.config.Mode}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @param {string} sActiveModeKey New value for property <code>activeModeKey</code>
 * @returns {sap.gantt.config.Hierarchy} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.setActiveModeKey = function(sActiveModeKey) { return new sap.gantt.config.Hierarchy(); };

/**
 * Sets a new value for property {@link #getColumns columns}.
 * 
 * Columns of the hierarchy. Array of {@link sap.gantt.config.HierarchyColumn}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object[]} sColumns New value for property <code>columns</code>
 * @returns {sap.gantt.config.Hierarchy} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.setColumns = function(sColumns) { return new sap.gantt.config.Hierarchy(); };

/**
 * Sets a new value for property {@link #getExpandedLevels expandedLevels}.
 * 
 * expandedLevels determines how the tree table is initially expanded.
 * This property is a two-dimensional array containing object types of row data. Only rows with data of 
 * the specified object types are expanded. Each child array represents a specific level in the hierarchy 
 * with the first child array representing the first level and so forth. For example, if 
 * this property is set to [["02", "03"], ["05"]], rows containing data of object types 02 or 03 in the 
 * first level and rows containing data of object type 05 in the second level are expanded.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string[][]} sExpandedLevels New value for property <code>expandedLevels</code>
 * @returns {sap.gantt.config.Hierarchy} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated This feature may cause severe performance issue! Since TreeTable doesn't have API to 
 * expand specific multiple rows in one call, GanttChart expand the tree tale to level calculated from 
 * the configuration, then loop all data in the model, collapse the node which does not full-fill the 
 * configuration one by one. This feature is application specific and should be handled by application.
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.setExpandedLevels = function(sExpandedLevels) { return new sap.gantt.config.Hierarchy(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique key of the hierarchy
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code>.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.Hierarchy} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.setKey = function(sKey) { return new sap.gantt.config.Hierarchy(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Description of the hierarchy
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default Hierarchy</code>.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.gantt.config.Hierarchy} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.setText = function(sText) { return new sap.gantt.config.Hierarchy(); };

/**
 * Sets a new value for property {@link #getToolbarSchemeKey toolbarSchemeKey}.
 * 
 * Key of {@link sap.gantt.config.ToolbarScheme}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME_KEY</code>.
 * @param {string} sToolbarSchemeKey New value for property <code>toolbarSchemeKey</code>
 * @returns {sap.gantt.config.Hierarchy} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Hierarchy.prototype.setToolbarSchemeKey = function(sToolbarSchemeKey) { return new sap.gantt.config.Hierarchy(); };


// ---- sap.gantt.config.HierarchyColumn --------------------------------------------------------------------------

/**
 * Creates and initializes a new hierarchy column
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getContentType contentType} : string</li>
 * <li>{@link #getSortAttribute sortAttribute} : string</li>
 * <li>{@link #getFilterAttribute filterAttribute} : string</li>
 * <li>{@link #getAttribute attribute} : string</li>
 * <li>{@link #getAttributes attributes} : object[] (default: [])</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the column attribute which is used in the hierarchy column
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.HierarchyColumn with name <code>sClassName</code>
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
sap.gantt.config.HierarchyColumn.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAttribute attribute}.
 * 
 * Attribute
 * 
 * @returns {string} Value of property <code>attribute</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getAttribute = function() { return ""; };

/**
 * Gets current value of property {@link #getAttributes attributes}.
 * 
 * Attributes. Array of {@link sap.gantt.config.ColumnAttribute}
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>attributes</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getAttributes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getContentType contentType}.
 * 
 * Content type of the column
 * 
 * @returns {string} Value of property <code>contentType</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getContentType = function() { return ""; };

/**
 * Gets current value of property {@link #getFilterAttribute filterAttribute}.
 * 
 * Specifies the attribute by which the tree table filter items in the column
 * 
 * @returns {string} Value of property <code>filterAttribute</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getFilterAttribute = function() { return ""; };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique key of the hierarchy column
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.HierarchyColumn.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.HierarchyColumn.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSortAttribute sortAttribute}.
 * 
 * Specifies the attribute by which the tree table sorts items in the column
 * 
 * @returns {string} Value of property <code>sortAttribute</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getSortAttribute = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title is used as the title of the column header in the tree table
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Column Width
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getAttribute attribute}.
 * 
 * Attribute
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAttribute New value for property <code>attribute</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setAttribute = function(sAttribute) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getAttributes attributes}.
 * 
 * Attributes. Array of {@link sap.gantt.config.ColumnAttribute}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sAttributes New value for property <code>attributes</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setAttributes = function(sAttributes) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getContentType contentType}.
 * 
 * Content type of the column
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sContentType New value for property <code>contentType</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setContentType = function(sContentType) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getFilterAttribute filterAttribute}.
 * 
 * Specifies the attribute by which the tree table filter items in the column
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilterAttribute New value for property <code>filterAttribute</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setFilterAttribute = function(sFilterAttribute) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique key of the hierarchy column
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setKey = function(sKey) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getSortAttribute sortAttribute}.
 * 
 * Specifies the attribute by which the tree table sorts items in the column
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSortAttribute New value for property <code>sortAttribute</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setSortAttribute = function(sSortAttribute) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title is used as the title of the column header in the tree table
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setTitle = function(sTitle) { return new sap.gantt.config.HierarchyColumn(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Column Width
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.gantt.config.HierarchyColumn} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.HierarchyColumn.prototype.setWidth = function(sWidth) { return new sap.gantt.config.HierarchyColumn(); };


// ---- sap.gantt.config.LayoutGroup --------------------------------------------------------------------------

/**
 * Creates and initializes a new layout group
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
 * <li>{@link #getEnableRichStyle enableRichStyle} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.config.ToolbarGroup#constructor sap.gantt.config.ToolbarGroup}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * You can specify the Gantt chart layout-related toolbar items in the Gantt chart toolbar 
 * @extends sap.gantt.config.ToolbarGroup
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.LayoutGroup = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.LayoutGroup with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.config.ToolbarGroup.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.config.LayoutGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getEnableRichStyle enableRichStyle}.
 * 
 * Determines the button type. See {@link sap.m.ButtonType}
 * true stands for {@link sap.m.ButtonType.Emphasized}
 * false stands for {@link sap.m.ButtonType.Default}
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableRichStyle</code>
 * 
 * @public
 * 
 */
sap.gantt.config.LayoutGroup.prototype.getEnableRichStyle = function() { return false; };

/**
 * Returns a metadata object for class sap.gantt.config.LayoutGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.LayoutGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getEnableRichStyle enableRichStyle}.
 * 
 * Determines the button type. See {@link sap.m.ButtonType}
 * true stands for {@link sap.m.ButtonType.Emphasized}
 * false stands for {@link sap.m.ButtonType.Default}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableRichStyle New value for property <code>enableRichStyle</code>
 * @returns {sap.gantt.config.LayoutGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.LayoutGroup.prototype.setEnableRichStyle = function(bEnableRichStyle) { return new sap.gantt.config.LayoutGroup(); };


// ---- sap.gantt.config.Locale --------------------------------------------------------------------------

/**
 * Creates and initializes a new Locale
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
 * <li>{@link #getTimeZone timeZone} : string (default: UTC)</li>
 * <li>{@link #getUtcdiff utcdiff} : string (default: 000000)</li>
 * <li>{@link #getUtcsign utcsign} : string (default: +)</li>
 * <li>{@link #getDstHorizons dstHorizons} : object[] (default: [])</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The locale control is used for converting the UTC date time to your local date time
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.Locale = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.Locale with name <code>sClassName</code>
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
sap.gantt.config.Locale.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDstHorizons dstHorizons}.
 * 
 * Day-light saving time periods. Array of {@link sap.gantt.config.TimeHorizon}
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>dstHorizons</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.getDstHorizons = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.gantt.config.Locale.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.Locale.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTimeZone timeZone}.
 * 
 * User time zone
 * 
 * Default value is <code>UTC</code>.
 * @returns {string} Value of property <code>timeZone</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.getTimeZone = function() { return ""; };

/**
 * Gets current value of property {@link #getUtcdiff utcdiff}.
 * 
 * Gap value to the UTC time in the format hhmmss
 * 
 * Default value is <code>000000</code>.
 * @returns {string} Value of property <code>utcdiff</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.getUtcdiff = function() { return ""; };

/**
 * Gets current value of property {@link #getUtcsign utcsign}.
 * 
 * Sign of the gap to the UTC time. Two valid values: "+" or "-".
 * 
 * Default value is <code>+</code>.
 * @returns {string} Value of property <code>utcsign</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.getUtcsign = function() { return ""; };

/**
 * Sets a new value for property {@link #getDstHorizons dstHorizons}.
 * 
 * Day-light saving time periods. Array of {@link sap.gantt.config.TimeHorizon}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sDstHorizons New value for property <code>dstHorizons</code>
 * @returns {sap.gantt.config.Locale} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.setDstHorizons = function(sDstHorizons) { return new sap.gantt.config.Locale(); };

/**
 * Sets a new value for property {@link #getTimeZone timeZone}.
 * 
 * User time zone
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>UTC</code>.
 * @param {string} sTimeZone New value for property <code>timeZone</code>
 * @returns {sap.gantt.config.Locale} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.setTimeZone = function(sTimeZone) { return new sap.gantt.config.Locale(); };

/**
 * Sets a new value for property {@link #getUtcdiff utcdiff}.
 * 
 * Gap value to the UTC time in the format hhmmss
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>000000</code>.
 * @param {string} sUtcdiff New value for property <code>utcdiff</code>
 * @returns {sap.gantt.config.Locale} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.setUtcdiff = function(sUtcdiff) { return new sap.gantt.config.Locale(); };

/**
 * Sets a new value for property {@link #getUtcsign utcsign}.
 * 
 * Sign of the gap to the UTC time. Two valid values: "+" or "-".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>+</code>.
 * @param {string} sUtcsign New value for property <code>utcsign</code>
 * @returns {sap.gantt.config.Locale} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Locale.prototype.setUtcsign = function(sUtcsign) { return new sap.gantt.config.Locale(); };


// ---- sap.gantt.config.Mode --------------------------------------------------------------------------

/**
 * Creates and initializes a new mode
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The Mode control specifies the mode which is used in GanttChart and Shape.
 * Mode enables GanttChart to show the same objects in different views.
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.Mode = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.Mode with name <code>sClassName</code>
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
sap.gantt.config.Mode.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getActiveIcon activeIcon}.
 * 
 * URL of the active icon of the mode
 * 
 * @returns {sap.ui.core.URI} Value of property <code>activeIcon</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.getActiveIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * URL of the icon of the mode
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique key of the mode
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.Mode.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.Mode.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * Description of the mode
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property {@link #getActiveIcon activeIcon}.
 * 
 * URL of the active icon of the mode
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sActiveIcon New value for property <code>activeIcon</code>
 * @returns {sap.gantt.config.Mode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.setActiveIcon = function(sActiveIcon) { return new sap.gantt.config.Mode(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * URL of the icon of the mode
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.gantt.config.Mode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.setIcon = function(sIcon) { return new sap.gantt.config.Mode(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique key of the mode
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.Mode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.setKey = function(sKey) { return new sap.gantt.config.Mode(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * Description of the mode
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.gantt.config.Mode} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Mode.prototype.setText = function(sText) { return new sap.gantt.config.Mode(); };


// ---- sap.gantt.config.ModeGroup --------------------------------------------------------------------------

/**
 * Creates and initializes a new mode group
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
 * <li>{@link #getModeKeys modeKeys} : string[] (default: [])</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.config.ToolbarGroup#constructor sap.gantt.config.ToolbarGroup}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The ModeGroup control specifies the mode-related buttons in the Gantt chart toolbar
 * 
 * @extends sap.gantt.config.ToolbarGroup
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ModeGroup = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ModeGroup with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.config.ToolbarGroup.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.config.ModeGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.config.ModeGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ModeGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getModeKeys modeKeys}.
 * 
 * Array of key of {@link sap.gantt.config.Mode}
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>modeKeys</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ModeGroup.prototype.getModeKeys = function() { return new Array(); };

/**
 * Sets a new value for property {@link #getModeKeys modeKeys}.
 * 
 * Array of key of {@link sap.gantt.config.Mode}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sModeKeys New value for property <code>modeKeys</code>
 * @returns {sap.gantt.config.ModeGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ModeGroup.prototype.setModeKeys = function(sModeKeys) { return new sap.gantt.config.ModeGroup(); };


// ---- sap.gantt.config.ObjectType --------------------------------------------------------------------------

/**
 * Creates and initializes a new object type
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getMainChartSchemeKey mainChartSchemeKey} : string (default: sap.gantt.config.DEFAULT_MAIN_CHART_SCHEME_KEY)</li>
 * <li>{@link #getExpandedChartSchemeKeys expandedChartSchemeKeys} : string[] (default: [])</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Define the ObjectType which is used in GanttChart
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ObjectType = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ObjectType with name <code>sClassName</code>
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
sap.gantt.config.ObjectType.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDescription description}.
 * 
 * Description of the object type
 * 
 * @returns {string} Value of property <code>description</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.getDescription = function() { return ""; };

/**
 * Gets current value of property {@link #getExpandedChartSchemeKeys expandedChartSchemeKeys}.
 * 
 * Specifies the expanded chart scheme in which the the object type can be shown
 * Array of keys of {@link sap.gantt.config.ChartScheme}
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>expandedChartSchemeKeys</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.getExpandedChartSchemeKeys = function() { return new Array(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique Key of the object type
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property {@link #getMainChartSchemeKey mainChartSchemeKey}.
 * 
 * Specifies the chart scheme in which the the object type can be shown
 * Key of {@link sap.gantt.config.ChartScheme}
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MAIN_CHART_SCHEME_KEY</code>.
 * @returns {string} Value of property <code>mainChartSchemeKey</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.getMainChartSchemeKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.ObjectType.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ObjectType.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getDescription description}.
 * 
 * Description of the object type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDescription New value for property <code>description</code>
 * @returns {sap.gantt.config.ObjectType} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.setDescription = function(sDescription) { return new sap.gantt.config.ObjectType(); };

/**
 * Sets a new value for property {@link #getExpandedChartSchemeKeys expandedChartSchemeKeys}.
 * 
 * Specifies the expanded chart scheme in which the the object type can be shown
 * Array of keys of {@link sap.gantt.config.ChartScheme}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sExpandedChartSchemeKeys New value for property <code>expandedChartSchemeKeys</code>
 * @returns {sap.gantt.config.ObjectType} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.setExpandedChartSchemeKeys = function(sExpandedChartSchemeKeys) { return new sap.gantt.config.ObjectType(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique Key of the object type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.ObjectType} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.setKey = function(sKey) { return new sap.gantt.config.ObjectType(); };

/**
 * Sets a new value for property {@link #getMainChartSchemeKey mainChartSchemeKey}.
 * 
 * Specifies the chart scheme in which the the object type can be shown
 * Key of {@link sap.gantt.config.ChartScheme}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MAIN_CHART_SCHEME_KEY</code>.
 * @param {string} sMainChartSchemeKey New value for property <code>mainChartSchemeKey</code>
 * @returns {sap.gantt.config.ObjectType} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ObjectType.prototype.setMainChartSchemeKey = function(sMainChartSchemeKey) { return new sap.gantt.config.ObjectType(); };


// ---- sap.gantt.config.SettingGroup --------------------------------------------------------------------------

/**
 * Creates and initializes a new setting group.
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
 * <li>{@link #getItems items} : object[] (default: sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.config.ToolbarGroup#constructor sap.gantt.config.ToolbarGroup}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The SettingGroup control allows you to specify the number of setting items to display in the Setting window.
 * @extends sap.gantt.config.ToolbarGroup
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.SettingGroup = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.SettingGroup with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.config.ToolbarGroup.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.config.SettingGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getItems items}.
 * 
 * Association to the setting item. See {@link sap.gantt.config.SettingItem}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.SettingItem[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS</code>.
 * @returns {object[]} Value of property <code>items</code>
 * 
 * @public
 * 
 */
sap.gantt.config.SettingGroup.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.gantt.config.SettingGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.SettingGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getItems items}.
 * 
 * Association to the setting item. See {@link sap.gantt.config.SettingItem}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.SettingItem[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS</code>.
 * @param {object[]} sItems New value for property <code>items</code>
 * @returns {sap.gantt.config.SettingGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.SettingGroup.prototype.setItems = function(sItems) { return new sap.gantt.config.SettingGroup(); };


// ---- sap.gantt.config.SettingItem --------------------------------------------------------------------------

/**
 * Creates and initializes a new setting item.
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
 * <li>{@link #getChecked checked} : boolean (default: false)</li>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getDisplayText displayText} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The SettingItem control allows you to create a setting item in the toolbar, which is presented as a checkbox with a label.
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.SettingItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.SettingItem with name <code>sClassName</code>
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
sap.gantt.config.SettingItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getChecked checked}.
 * 
 * Indicates whether the checkbox is selected or not
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>checked</code>
 * 
 * @public
 * 
 */
sap.gantt.config.SettingItem.prototype.getChecked = function() { return false; };

/**
 * Gets current value of property {@link #getDisplayText displayText}.
 * 
 * Aria label of the checkbox
 * 
 * @returns {string} Value of property <code>displayText</code>
 * 
 * @public
 * 
 */
sap.gantt.config.SettingItem.prototype.getDisplayText = function() { return ""; };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Identifier of an event when the checkbox is toggled
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.SettingItem.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.SettingItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.SettingItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getChecked checked}.
 * 
 * Indicates whether the checkbox is selected or not
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bChecked New value for property <code>checked</code>
 * @returns {sap.gantt.config.SettingItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.SettingItem.prototype.setChecked = function(bChecked) { return new sap.gantt.config.SettingItem(); };

/**
 * Sets a new value for property {@link #getDisplayText displayText}.
 * 
 * Aria label of the checkbox
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayText New value for property <code>displayText</code>
 * @returns {sap.gantt.config.SettingItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.SettingItem.prototype.setDisplayText = function(sDisplayText) { return new sap.gantt.config.SettingItem(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Identifier of an event when the checkbox is toggled
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.SettingItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.SettingItem.prototype.setKey = function(sKey) { return new sap.gantt.config.SettingItem(); };


// ---- sap.gantt.config.Shape --------------------------------------------------------------------------

/**
 * Creates and initializes a shape configuration.
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
 * <li>{@link #getShapeClassName shapeClassName} : string</li>
 * <li>{@link #getShapeDataName shapeDataName} : string</li>
 * <li>{@link #getModeKeys modeKeys} : string[] (default: [])</li>
 * <li>{@link #getLevel level} : string</li>
 * <li>{@link #getShapeProperties shapeProperties} : object (default: sap.gantt.config.DEFAULT_EMPTY_OBJECT)</li>
 * <li>{@link #getGroupAggregation groupAggregation} : object[]</li>
 * <li>{@link #getClippathAggregation clippathAggregation} : object[]</li>
 * <li>{@link #getSelectedClassName selectedClassName} : string</li>
 * <li>{@link #getSwitchOfCheckBox switchOfCheckBox} : string (default: noShow)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given 
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Configuration object for Shape.
 * 
 * <p>
 * This configuration specifies the Shape class used to represent specific data and how the Shape class is constructed.
 * Some properties of Shape can be directly configured by setting property <code>shapeProperties</code>.
 * 
 * A Shape class may come from the shape library provided in namespace <code>sap.gantt.shape</code> or from any extended shape you've created.
 * Shape classes are instantiated according to the structure described in this configuration class inside <code>sap.gantt.Gantt</code>.
 * The aggregation structure is described by properties <code>groupAggregation</code>, <code>clippathAggregation</code>, and <code>selectedClassName</code>.
 * 
 * The root shape is called 'top shape'. Some properties are only top shape relevant such as <code>key</code>, <code>level</code>, and <code>selectedClassName</code>.
 * </p>
 * 
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.Shape = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.Shape with name <code>sClassName</code>
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
sap.gantt.config.Shape.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getClippathAggregation clippathAggregation}.
 * 
 * Aggregation path classes for sap.gantt.shape.Clippath class.
 * This aggregation is only valid for shape classes with tag='clippath'. 
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Shape[]</code>. Otherwise some properties you set may not function properly.
 * 
 * @returns {object[]} Value of property <code>clippathAggregation</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getClippathAggregation = function() { return new Array(); };

/**
 * Gets current value of property {@link #getGroupAggregation groupAggregation}.
 * 
 * Aggregation shapes for sap.gantt.shape.Group class.
 * This aggregation is only valid for shape classes with tag='g'.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Shape[]</code>. Otherwise some properties you set may not function properly.
 * 
 * @returns {object[]} Value of property <code>groupAggregation</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getGroupAggregation = function() { return new Array(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Primary key of the shape configuration. This property can be referenced from other configuration object, such as
 * <code>sap.gantt.config.ChartScheme</code>. This property is only relevant to top Shape configuration.
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property {@link #getLevel level}.
 * 
 * Level of shapes. Shapes closer to the top shape have a smaller value in level. This property is only relevant to top shape configuration
 * (non aggregated shape configuration).
 * 
 * @returns {string} Value of property <code>level</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getLevel = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.Shape.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.Shape.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getModeKeys modeKeys}.
 * 
 * Specifies the key of modes in which the shape is drawn. If you leave this property empty, the shape is drawn in all modes.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>modeKeys</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getModeKeys = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelectedClassName selectedClassName}.
 * 
 * Aggregation class for drawing selection of this shape. If nothing is assigned to this property, <code>sap.gantt.Gantt</code>
 * instantiates the default selected shape class.
 * 
 * @returns {string} Value of property <code>selectedClassName</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getSelectedClassName = function() { return ""; };

/**
 * Gets current value of property {@link #getShapeClassName shapeClassName}.
 * 
 * Specifies the shape class to be used for data representation. Both shapes from <code>sap.gantt.shape</code> and extended
 * shapes can be used here.
 * 
 * @returns {string} Value of property <code>shapeClassName</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getShapeClassName = function() { return ""; };

/**
 * Gets current value of property {@link #getShapeDataName shapeDataName}.
 * 
 * Specifies the name of the data name to be represented. This is for the top shape only.
 * 
 * @returns {string} Value of property <code>shapeDataName</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getShapeDataName = function() { return ""; };

/**
 * Gets current value of property {@link #getShapeProperties shapeProperties}.
 * 
 * Pre-configured values for Shape. The values specified in this object have a higher priority than values coded in the Shape class.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_EMPTY_OBJECT</code>.
 * @returns {object} Value of property <code>shapeProperties</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getShapeProperties = function() { return new Object(); };

/**
 * Get a pre-configured property from <code>shapeProperties</code>.
 * 
 * <p>This method together with method <code>hasShapeProperty</code> is frequently used in <code>sap.gantt.shape</code> classes 
 * to make sure the principle of 'configuration first' is applied.
 * .</p>
 * 
 * @public
 * @param {string} sPropertyName - Name of the shape property.
 * @returns {string} - Pre-configured value.
 * 
 */
sap.gantt.config.Shape.prototype.getShapeProperty = function(sPropertyName) { return ""; };

/**
 * Gets current value of property {@link #getSwitchOfCheckBox switchOfCheckBox}.
 * 
 * Switch of shape's checkbox value in list legend, its value can be "noShow", "checked" and "unchecked".
 * 
 * Default value is <code>noShow</code>.
 * @returns {string} Value of property <code>switchOfCheckBox</code>
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.getSwitchOfCheckBox = function() { return ""; };

/**
 * Checks if a property is pre-configured in <code>shapeProperties</code>.
 * 
 * <p>This method together with method <code>getShapeProperty()</code> is frequently used in <code>sap.gantt.shape</code> classes 
 * to make sure the principle of 'configuration first' is applied.
 * .</p>
 * 
 * @public
 * @param {string} sPropertyName - Name of the shape property.
 * @returns {boolean} - Whether the property is pre-configured.
 * 
 */
sap.gantt.config.Shape.prototype.hasShapeProperty = function(sPropertyName) { return false; };

/**
 * Sets a new value for property {@link #getClippathAggregation clippathAggregation}.
 * 
 * Aggregation path classes for sap.gantt.shape.Clippath class.
 * This aggregation is only valid for shape classes with tag='clippath'. 
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Shape[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object[]} sClippathAggregation New value for property <code>clippathAggregation</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setClippathAggregation = function(sClippathAggregation) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getGroupAggregation groupAggregation}.
 * 
 * Aggregation shapes for sap.gantt.shape.Group class.
 * This aggregation is only valid for shape classes with tag='g'.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Shape[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object[]} sGroupAggregation New value for property <code>groupAggregation</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setGroupAggregation = function(sGroupAggregation) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Primary key of the shape configuration. This property can be referenced from other configuration object, such as
 * <code>sap.gantt.config.ChartScheme</code>. This property is only relevant to top Shape configuration.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setKey = function(sKey) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getLevel level}.
 * 
 * Level of shapes. Shapes closer to the top shape have a smaller value in level. This property is only relevant to top shape configuration
 * (non aggregated shape configuration).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLevel New value for property <code>level</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setLevel = function(sLevel) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getModeKeys modeKeys}.
 * 
 * Specifies the key of modes in which the shape is drawn. If you leave this property empty, the shape is drawn in all modes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sModeKeys New value for property <code>modeKeys</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setModeKeys = function(sModeKeys) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getSelectedClassName selectedClassName}.
 * 
 * Aggregation class for drawing selection of this shape. If nothing is assigned to this property, <code>sap.gantt.Gantt</code>
 * instantiates the default selected shape class.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSelectedClassName New value for property <code>selectedClassName</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setSelectedClassName = function(sSelectedClassName) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getShapeClassName shapeClassName}.
 * 
 * Specifies the shape class to be used for data representation. Both shapes from <code>sap.gantt.shape</code> and extended
 * shapes can be used here.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sShapeClassName New value for property <code>shapeClassName</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setShapeClassName = function(sShapeClassName) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getShapeDataName shapeDataName}.
 * 
 * Specifies the name of the data name to be represented. This is for the top shape only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sShapeDataName New value for property <code>shapeDataName</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setShapeDataName = function(sShapeDataName) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getShapeProperties shapeProperties}.
 * 
 * Pre-configured values for Shape. The values specified in this object have a higher priority than values coded in the Shape class.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_EMPTY_OBJECT</code>.
 * @param {object} oShapeProperties New value for property <code>shapeProperties</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setShapeProperties = function(oShapeProperties) { return new sap.gantt.config.Shape(); };

/**
 * Sets a new value for property {@link #getSwitchOfCheckBox switchOfCheckBox}.
 * 
 * Switch of shape's checkbox value in list legend, its value can be "noShow", "checked" and "unchecked".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>noShow</code>.
 * @param {string} sSwitchOfCheckBox New value for property <code>switchOfCheckBox</code>
 * @returns {sap.gantt.config.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.Shape.prototype.setSwitchOfCheckBox = function(sSwitchOfCheckBox) { return new sap.gantt.config.Shape(); };


// ---- sap.gantt.config.TimeAxis --------------------------------------------------------------------------

/**
 * Creates and initializes a new time axis
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
 * <li>{@link #getPlanHorizon planHorizon} : object (default: sap.gantt.config.DEFAULT_PLAN_HORIZON)</li>
 * <li>{@link #getInitHorizon initHorizon} : object (default: sap.gantt.config.DEFAULT_INIT_HORIZON)</li>
 * <li>{@link #getZoomStrategy zoomStrategy} : object (default: sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY)</li>
 * <li>{@link #getGranularity granularity} : string (default: 4day)</li>
 * <li>{@link #getFinestGranularity finestGranularity} : string (default: 5min)</li>
 * <li>{@link #getCoarsestGranularity coarsestGranularity} : string (default: 1month)</li>
 * <li>{@link #getRate rate} : float (default: 1)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the time axis of a Gantt chart
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * @deprecated As of version 1.44, replaced by sap.gantt.axistime.AxisTimeStrategy
 * 
 */
sap.gantt.config.TimeAxis = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.TimeAxis with name <code>sClassName</code>
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
sap.gantt.config.TimeAxis.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getCoarsestGranularity coarsestGranularity}.
 * 
 * Granularity when the GanttChart is zoomed out to the minimum
 * 
 * Default value is <code>1month</code>.
 * @returns {string} Value of property <code>coarsestGranularity</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getCoarsestGranularity = function() { return ""; };

/**
 * Gets current value of property {@link #getFinestGranularity finestGranularity}.
 * 
 * Granularity when the Gantt chart is zoomed in to the maximum
 * 
 * Default value is <code>5min</code>.
 * @returns {string} Value of property <code>finestGranularity</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getFinestGranularity = function() { return ""; };

/**
 * Gets current value of property {@link #getGranularity granularity}.
 * 
 * Initial granularity of the time axis
 * 
 * Default value is <code>4day</code>.
 * @returns {string} Value of property <code>granularity</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getGranularity = function() { return ""; };

/**
 * Gets current value of property {@link #getInitHorizon initHorizon}.
 * 
 * Time horizon which is displayed after the Gantt chart is initialized
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_INIT_HORIZON</code>.
 * @returns {object} Value of property <code>initHorizon</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getInitHorizon = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.gantt.config.TimeAxis.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.TimeAxis.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPlanHorizon planHorizon}.
 * 
 * Whole time horizon of the Gantt chart
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_PLAN_HORIZON</code>.
 * @returns {object} Value of property <code>planHorizon</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getPlanHorizon = function() { return new Object(); };

/**
 * Gets current value of property {@link #getRate rate}.
 * 
 * Zoom rate of the Gantt chart
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>rate</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getRate = function() { return 0.0; };

/**
 * Gets current value of property {@link #getZoomStrategy zoomStrategy}.
 * 
 * Zoom strategy of the Gantt chart
 * See {@link sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY} as example
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY</code>.
 * @returns {object} Value of property <code>zoomStrategy</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.getZoomStrategy = function() { return new Object(); };

/**
 * Sets a new value for property {@link #getCoarsestGranularity coarsestGranularity}.
 * 
 * Granularity when the GanttChart is zoomed out to the minimum
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1month</code>.
 * @param {string} sCoarsestGranularity New value for property <code>coarsestGranularity</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setCoarsestGranularity = function(sCoarsestGranularity) { return new sap.gantt.config.TimeAxis(); };

/**
 * Sets a new value for property {@link #getFinestGranularity finestGranularity}.
 * 
 * Granularity when the Gantt chart is zoomed in to the maximum
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5min</code>.
 * @param {string} sFinestGranularity New value for property <code>finestGranularity</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setFinestGranularity = function(sFinestGranularity) { return new sap.gantt.config.TimeAxis(); };

/**
 * Sets a new value for property {@link #getGranularity granularity}.
 * 
 * Initial granularity of the time axis
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4day</code>.
 * @param {string} sGranularity New value for property <code>granularity</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setGranularity = function(sGranularity) { return new sap.gantt.config.TimeAxis(); };

/**
 * Sets a new value for property {@link #getInitHorizon initHorizon}.
 * 
 * Time horizon which is displayed after the Gantt chart is initialized
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_INIT_HORIZON</code>.
 * @param {object} oInitHorizon New value for property <code>initHorizon</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setInitHorizon = function(oInitHorizon) { return new sap.gantt.config.TimeAxis(); };

/**
 * Sets a new value for property {@link #getPlanHorizon planHorizon}.
 * 
 * Whole time horizon of the Gantt chart
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeHorizon</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_PLAN_HORIZON</code>.
 * @param {object} oPlanHorizon New value for property <code>planHorizon</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setPlanHorizon = function(oPlanHorizon) { return new sap.gantt.config.TimeAxis(); };

/**
 * Sets a new value for property {@link #getRate rate}.
 * 
 * Zoom rate of the Gantt chart
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fRate New value for property <code>rate</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setRate = function(fRate) { return new sap.gantt.config.TimeAxis(); };

/**
 * Sets a new value for property {@link #getZoomStrategy zoomStrategy}.
 * 
 * Zoom strategy of the Gantt chart
 * See {@link sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY} as example
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY</code>.
 * @param {object} oZoomStrategy New value for property <code>zoomStrategy</code>
 * @returns {sap.gantt.config.TimeAxis} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeAxis.prototype.setZoomStrategy = function(oZoomStrategy) { return new sap.gantt.config.TimeAxis(); };


// ---- sap.gantt.config.TimeHorizon --------------------------------------------------------------------------

/**
 * Creates and initializes a new Time horizon
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
 * <li>{@link #getStartTime startTime} : string (default: undefined)</li>
 * <li>{@link #getEndTime endTime} : string (default: undefined)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] =Initial settings for the new control
 * 
 * @class
 * Defines the Time horizon
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.TimeHorizon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.TimeHorizon with name <code>sClassName</code>
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
sap.gantt.config.TimeHorizon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getEndTime endTime}.
 * 
 * End time of the time horizon in this format: YYYYMMDDHHMMSS. If the type of endTime is object, the value is converted to string.
 * 
 * Default value is <code>undefined</code>.
 * @returns {string} Value of property <code>endTime</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeHorizon.prototype.getEndTime = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.config.TimeHorizon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.TimeHorizon.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getStartTime startTime}.
 * 
 * Start time of the time horizon in this format: YYYYMMDDHHMMSS. If the type of startTime is object, the value is converted to string.
 * 
 * Default value is <code>undefined</code>.
 * @returns {string} Value of property <code>startTime</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeHorizon.prototype.getStartTime = function() { return ""; };

/**
 * Sets a new value for property {@link #getEndTime endTime}.
 * 
 * End time of the time horizon in this format: YYYYMMDDHHMMSS. If the type of endTime is object, the value is converted to string.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sEndTime New value for property <code>endTime</code>
 * @returns {sap.gantt.config.TimeHorizon} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeHorizon.prototype.setEndTime = function(sEndTime) { return new sap.gantt.config.TimeHorizon(); };

/**
 * Sets a new value for property {@link #getStartTime startTime}.
 * 
 * Start time of the time horizon in this format: YYYYMMDDHHMMSS. If the type of startTime is object, the value is converted to string.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>undefined</code>.
 * @param {string} sStartTime New value for property <code>startTime</code>
 * @returns {sap.gantt.config.TimeHorizon} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeHorizon.prototype.setStartTime = function(sStartTime) { return new sap.gantt.config.TimeHorizon(); };


// ---- sap.gantt.config.TimeUnit --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.config.TimeUnit.toString = function() { return ""; };

// ---- sap.gantt.config.TimeZoomGroup --------------------------------------------------------------------------

/**
 * Creates and initializes a new time zoom group
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
 * <li>{@link #getShowZoomSlider showZoomSlider} : boolean (default: true)</li>
 * <li>{@link #getShowZoomButtons showZoomButtons} : boolean (default: true)</li>
 * <li>{@link #getZoomControlType zoomControlType} : sap.gantt.config.ZoomControlType (default: SliderWithButtons)</li>
 * <li>{@link #getStepCountOfSlider stepCountOfSlider} : int (default: 10)</li>
 * <li>{@link #getInfoOfSelectItems infoOfSelectItems} : object[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.config.ToolbarGroup#constructor sap.gantt.config.ToolbarGroup}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * You can define time zooming related toolbar items in the Gantt chart toolbar. 
 * @extends sap.gantt.config.ToolbarGroup
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.TimeZoomGroup with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.config.ToolbarGroup.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.config.TimeZoomGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getInfoOfSelectItems infoOfSelectItems}.
 * 
 * Array of plain objects which has "key" and "text" properties, or array of sap.ui.core.Item used to configure the items in the Select control 
 * when the zoom control type is sap.gantt.config.ZoomControlType.Select.
 * 
 * @returns {object[]} Value of property <code>infoOfSelectItems</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.getInfoOfSelectItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.gantt.config.TimeZoomGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.TimeZoomGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowZoomButtons showZoomButtons}.
 * 
 * Enables zoom in and zoom out buttons for the time zooming function.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showZoomButtons</code>
 * 
 * @deprecated As of version 1.44, replaced by zoomControlType
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.getShowZoomButtons = function() { return false; };

/**
 * Gets current value of property {@link #getShowZoomSlider showZoomSlider}.
 * 
 * Enables the Slider control for the time zooming function.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showZoomSlider</code>
 * 
 * @deprecated As of version 1.44, replaced by zoomControlType
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.getShowZoomSlider = function() { return false; };

/**
 * Gets current value of property {@link #getStepCountOfSlider stepCountOfSlider}.
 * 
 * Sets the step when the zoom control type is sap.gantt.config.ZoomControlType.SliderWithButtons or sap.gantt.config.ZoomControlType.SliderOnly.
 * 
 * Default value is <code>10</code>.
 * @returns {int} Value of property <code>stepCountOfSlider</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.getStepCountOfSlider = function() { return 0; };

/**
 * Gets current value of property {@link #getZoomControlType zoomControlType}.
 * 
 * Defines the control type to set the zoom rate.
 * 
 * Default value is <code>SliderWithButtons</code>.
 * @returns {sap.gantt.config.ZoomControlType} Value of property <code>zoomControlType</code>
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.getZoomControlType = function() { return new sap.gantt.config.ZoomControlType(); };

/**
 * Sets a new value for property {@link #getInfoOfSelectItems infoOfSelectItems}.
 * 
 * Array of plain objects which has "key" and "text" properties, or array of sap.ui.core.Item used to configure the items in the Select control 
 * when the zoom control type is sap.gantt.config.ZoomControlType.Select.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object[]} sInfoOfSelectItems New value for property <code>infoOfSelectItems</code>
 * @returns {sap.gantt.config.TimeZoomGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.setInfoOfSelectItems = function(sInfoOfSelectItems) { return new sap.gantt.config.TimeZoomGroup(); };

/**
 * Sets a new value for property {@link #getShowZoomButtons showZoomButtons}.
 * 
 * Enables zoom in and zoom out buttons for the time zooming function.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowZoomButtons New value for property <code>showZoomButtons</code>
 * @returns {sap.gantt.config.TimeZoomGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44, replaced by zoomControlType
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.setShowZoomButtons = function(bShowZoomButtons) { return new sap.gantt.config.TimeZoomGroup(); };

/**
 * Sets a new value for property {@link #getShowZoomSlider showZoomSlider}.
 * 
 * Enables the Slider control for the time zooming function.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowZoomSlider New value for property <code>showZoomSlider</code>
 * @returns {sap.gantt.config.TimeZoomGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44, replaced by zoomControlType
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.setShowZoomSlider = function(bShowZoomSlider) { return new sap.gantt.config.TimeZoomGroup(); };

/**
 * Sets a new value for property {@link #getStepCountOfSlider stepCountOfSlider}.
 * 
 * Sets the step when the zoom control type is sap.gantt.config.ZoomControlType.SliderWithButtons or sap.gantt.config.ZoomControlType.SliderOnly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iStepCountOfSlider New value for property <code>stepCountOfSlider</code>
 * @returns {sap.gantt.config.TimeZoomGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.setStepCountOfSlider = function(iStepCountOfSlider) { return new sap.gantt.config.TimeZoomGroup(); };

/**
 * Sets a new value for property {@link #getZoomControlType zoomControlType}.
 * 
 * Defines the control type to set the zoom rate.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>SliderWithButtons</code>.
 * @param {sap.gantt.config.ZoomControlType} sZoomControlType New value for property <code>zoomControlType</code>
 * @returns {sap.gantt.config.TimeZoomGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.TimeZoomGroup.prototype.setZoomControlType = function(sZoomControlType) { return new sap.gantt.config.TimeZoomGroup(); };


// ---- sap.gantt.config.ToolbarGroup --------------------------------------------------------------------------

/**
 * Creates and initializes a new toolbar group
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
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getOverflowPriority overflowPriority} : sap.m.OverflowToolbarPriority (default: Low)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the toolbar group. Toolbar groups enables you to categorize related toolbar items. For example, you can 
 * put all settings-related toolbar items in the Setting group.
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ToolbarGroup = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ToolbarGroup with name <code>sClassName</code>
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
sap.gantt.config.ToolbarGroup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.config.ToolbarGroup.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ToolbarGroup.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOverflowPriority overflowPriority}.
 * 
 * Overflow priority. See {@link sap.m.OverflowToolbarPriority}
 * 
 * Default value is <code>Low</code>.
 * @returns {sap.m.OverflowToolbarPriority} Value of property <code>overflowPriority</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarGroup.prototype.getOverflowPriority = function() { return new sap.m.OverflowToolbarPriority(); };

/**
 * Gets current value of property {@link #getPosition position}.
 * 
 * Specifies the position of the toolbar group. Note that all toolbar groups must be put into the Gantt chart toolbar.
 * 
 * @returns {string} Value of property <code>position</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarGroup.prototype.getPosition = function() { return ""; };

/**
 * Sets a new value for property {@link #getOverflowPriority overflowPriority}.
 * 
 * Overflow priority. See {@link sap.m.OverflowToolbarPriority}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Low</code>.
 * @param {sap.m.OverflowToolbarPriority} sOverflowPriority New value for property <code>overflowPriority</code>
 * @returns {sap.gantt.config.ToolbarGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarGroup.prototype.setOverflowPriority = function(sOverflowPriority) { return new sap.gantt.config.ToolbarGroup(); };

/**
 * Sets a new value for property {@link #getPosition position}.
 * 
 * Specifies the position of the toolbar group. Note that all toolbar groups must be put into the Gantt chart toolbar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.gantt.config.ToolbarGroup} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarGroup.prototype.setPosition = function(sPosition) { return new sap.gantt.config.ToolbarGroup(); };


// ---- sap.gantt.config.ToolbarScheme --------------------------------------------------------------------------

/**
 * Creates and initializes a new toolbar scheme
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
 * <li>{@link #getSourceSelect sourceSelect} : object</li>
 * <li>{@link #getLayout layout} : object</li>
 * <li>{@link #getCustomToolbarItems customToolbarItems} : object</li>
 * <li>{@link #getExpandChart expandChart} : object</li>
 * <li>{@link #getExpandTree expandTree} : object</li>
 * <li>{@link #getTimeZoom timeZoom} : object</li>
 * <li>{@link #getLegend legend} : object</li>
 * <li>{@link #getSettings settings} : object</li>
 * <li>{@link #getMode mode} : object</li>
 * <li>{@link #getToolbarDesign toolbarDesign} : string (default: sap.m.ToolbarDesign.Auto)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Defines the Toolbar scheme
 * @extends sap.ui.core.Element
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.config.ToolbarScheme with name <code>sClassName</code>
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
sap.gantt.config.ToolbarScheme.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * Toolbar group for custom toolbar items
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>customToolbarItems</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getCustomToolbarItems = function() { return new Object(); };

/**
 * Gets current value of property {@link #getExpandChart expandChart}.
 * 
 * Toolbar group for expanding a chart
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ExpandChartGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>expandChart</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getExpandChart = function() { return new Object(); };

/**
 * Gets current value of property {@link #getExpandTree expandTree}.
 * 
 * Toolbar group for expanding nodes of a tree table
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>expandTree</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getExpandTree = function() { return new Object(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Unique key of the toolbar scheme
 * 
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property {@link #getLayout layout}.
 * 
 * Toolbar group for the Gantt chart layout
 * We recommend that you set the type of this argument to <code>sap.gantt.config.LayoutGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>layout</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getLayout = function() { return new Object(); };

/**
 * Gets current value of property {@link #getLegend legend}.
 * 
 * Toolbar group for legend
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>legend</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getLegend = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.gantt.config.ToolbarScheme.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.config.ToolbarScheme.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMode mode}.
 * 
 * See {@link sap.gantt.config.ModeGroup}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ModeGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>mode</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getMode = function() { return new Object(); };

/**
 * Gets current value of property {@link #getSettings settings}.
 * 
 * See {@link sap.gantt.config.SettingGroup}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.SettingGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>settings</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getSettings = function() { return new Object(); };

/**
 * Gets current value of property {@link #getSourceSelect sourceSelect}.
 * 
 * Toolbar group for selecting a source
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>sourceSelect</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getSourceSelect = function() { return new Object(); };

/**
 * Gets current value of property {@link #getTimeZoom timeZoom}.
 * 
 * Toolbar group for the time zoom
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>timeZoom</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getTimeZoom = function() { return new Object(); };

/**
 * Gets current value of property {@link #getToolbarDesign toolbarDesign}.
 * 
 * Toolbar design. See {@link sap.m.ToolbarDesign}
 * 
 * Default value is <code>sap.m.ToolbarDesign.Auto</code>.
 * @returns {string} Value of property <code>toolbarDesign</code>
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.getToolbarDesign = function() { return ""; };

/**
 * Sets a new value for property {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * Toolbar group for custom toolbar items
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oCustomToolbarItems New value for property <code>customToolbarItems</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setCustomToolbarItems = function(oCustomToolbarItems) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getExpandChart expandChart}.
 * 
 * Toolbar group for expanding a chart
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ExpandChartGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oExpandChart New value for property <code>expandChart</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setExpandChart = function(oExpandChart) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getExpandTree expandTree}.
 * 
 * Toolbar group for expanding nodes of a tree table
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oExpandTree New value for property <code>expandTree</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setExpandTree = function(oExpandTree) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Unique key of the toolbar scheme
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setKey = function(sKey) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getLayout layout}.
 * 
 * Toolbar group for the Gantt chart layout
 * We recommend that you set the type of this argument to <code>sap.gantt.config.LayoutGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oLayout New value for property <code>layout</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setLayout = function(oLayout) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getLegend legend}.
 * 
 * Toolbar group for legend
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oLegend New value for property <code>legend</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setLegend = function(oLegend) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getMode mode}.
 * 
 * See {@link sap.gantt.config.ModeGroup}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ModeGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oMode New value for property <code>mode</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setMode = function(oMode) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getSettings settings}.
 * 
 * See {@link sap.gantt.config.SettingGroup}
 * We recommend that you set the type of this argument to <code>sap.gantt.config.SettingGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oSettings New value for property <code>settings</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setSettings = function(oSettings) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getSourceSelect sourceSelect}.
 * 
 * Toolbar group for selecting a source
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oSourceSelect New value for property <code>sourceSelect</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setSourceSelect = function(oSourceSelect) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getTimeZoom timeZoom}.
 * 
 * Toolbar group for the time zoom
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarGroup</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oTimeZoom New value for property <code>timeZoom</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setTimeZoom = function(oTimeZoom) { return new sap.gantt.config.ToolbarScheme(); };

/**
 * Sets a new value for property {@link #getToolbarDesign toolbarDesign}.
 * 
 * Toolbar design. See {@link sap.m.ToolbarDesign}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.m.ToolbarDesign.Auto</code>.
 * @param {string} sToolbarDesign New value for property <code>toolbarDesign</code>
 * @returns {sap.gantt.config.ToolbarScheme} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.config.ToolbarScheme.prototype.setToolbarDesign = function(sToolbarDesign) { return new sap.gantt.config.ToolbarScheme(); };


// ---- sap.gantt.config.ZoomControlType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.config.ZoomControlType.toString = function() { return ""; };

// ---- sap.gantt.control.Cell --------------------------------------------------------------------------

/**
 * Creates and initializes a new Cell class.
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
 * <li>{@link #getCellCallback cellCallback} : object</li>
 * <li>{@link #getColumnConfig columnConfig} : object</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Cell acts as an abstract class. You can use this class to define a placeholder for your application 
 * to provide the specific implementation. Applications can fill the cell content by using cellCallback
 * which returns instances such as Icon, Text, or Text input.
 * 
 * You can also use this class to define column specific properties that are applied when rendering a list.
 * @extends sap.ui.core.Control
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.control.Cell = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.control.Cell with name <code>sClassName</code>
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
sap.gantt.control.Cell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Provide accessibility support for control Cell
 * 
 * @return {object} Current accessibility state of the control.
 * @see {sap.ui.core.Control#getAccessibilityInfo}
 * @protected
 * 
 */
sap.gantt.control.Cell.prototype.getAccessibilityInfo = function() { return new Object(); };

/**
 * Gets current value of property {@link #getCellCallback cellCallback}.
 * 
 * Cell callback function that returns the specific control instance which is rendered in a table.
 * 
 * @returns {object} Value of property <code>cellCallback</code>
 * 
 * @public
 * 
 */
sap.gantt.control.Cell.prototype.getCellCallback = function() { return new Object(); };

/**
 * Gets current value of property {@link #getColumnConfig columnConfig}.
 * 
 * Column configuration object.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.HierarchyColumn</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>columnConfig</code>
 * 
 * @public
 * 
 */
sap.gantt.control.Cell.prototype.getColumnConfig = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.gantt.control.Cell.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.control.Cell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getCellCallback cellCallback}.
 * 
 * Cell callback function that returns the specific control instance which is rendered in a table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oCellCallback New value for property <code>cellCallback</code>
 * @returns {sap.gantt.control.Cell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.control.Cell.prototype.setCellCallback = function(oCellCallback) { return new sap.gantt.control.Cell(); };

/**
 * Sets a new value for property {@link #getColumnConfig columnConfig}.
 * 
 * Column configuration object.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.HierarchyColumn</code>. 
 * Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oColumnConfig New value for property <code>columnConfig</code>
 * @returns {sap.gantt.control.Cell} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.control.Cell.prototype.setColumnConfig = function(oColumnConfig) { return new sap.gantt.control.Cell(); };


// ---- sap.gantt.control.ToolbarType --------------------------------------------------------------------------


// ---- sap.gantt.def.cal.Calendar --------------------------------------------------------------------------

/**
 * Creates and initializes a calendar defined and embedded in a 'defs' tag for later reuse.
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
 * <li>{@link #getKey key} : string (default: calendar)</li>
 * <li>{@link #getBackgroundColor backgroundColor} : sap.gantt.ValueSVGPaintServer (default: #e5e5e5)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTimeIntervals timeIntervals} : sap.gantt.def.cal.TimeInterval[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * A calendar that contains a list of time interval definitions.
 * 
 * <p>
 * A pattern definition is generated per calendar key.
 * </p>
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.cal.Calendar = function(sId,mSettings) {};
/**
 * Adds some timeInterval to the aggregation {@link #getTimeIntervals timeIntervals}.
 * @param {sap.gantt.def.cal.TimeInterval}
 *            oTimeInterval the timeInterval to add; if empty, nothing is inserted
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.addTimeInterval = function(oTimeInterval) { return new sap.gantt.def.cal.Calendar(); };

/**
 * Binds aggregation {@link #getTimeIntervals timeIntervals} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.bindTimeIntervals = function(oBindingInfo) { return new sap.gantt.def.cal.Calendar(); };

/**
 * Destroys all the timeIntervals in the aggregation {@link #getTimeIntervals timeIntervals}.
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.destroyTimeIntervals = function() { return new sap.gantt.def.cal.Calendar(); };

/**
 * Creates a new subclass of class sap.gantt.def.cal.Calendar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.DefBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.cal.Calendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundColor backgroundColor}.
 * 
 * Background color of time intervals.
 * 
 * Default value is <code>#e5e5e5</code>.
 * @returns {sap.gantt.ValueSVGPaintServer} Value of property <code>backgroundColor</code>
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.getBackgroundColor = function() { return new sap.gantt.ValueSVGPaintServer(); };

/**
 * Gets current value of property {@link #getKey key}.
 * 
 * Key of the calendar. Note that this value is used to generate the referencing string of the calendar pattern.
 * 
 * Default value is <code>calendar</code>.
 * @returns {string} Value of property <code>key</code>
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.getKey = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.def.cal.Calendar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.cal.Calendar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getTimeIntervals timeIntervals}.
 * 
 * Time intervals that should be painted with the value of <code>backgroundColor</code>.
 * 
 * @returns {sap.gantt.def.cal.TimeInterval[]}
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.getTimeIntervals = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.gantt.def.cal.TimeInterval</code> in the aggregation {@link #getTimeIntervals timeIntervals}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.gantt.def.cal.TimeInterval}
 *           oTimeInterval The timeInterval whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.indexOfTimeInterval = function(oTimeInterval) { return 0; };

/**
 * Inserts a timeInterval into the aggregation {@link #getTimeIntervals timeIntervals}.
 * 
 * @param {sap.gantt.def.cal.TimeInterval}
 *            oTimeInterval the timeInterval to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the timeInterval should be inserted at; for
 *              a negative value of <code>iIndex</code>, the timeInterval is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the timeInterval is inserted at
 *              the last position
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.insertTimeInterval = function(oTimeInterval,iIndex) { return new sap.gantt.def.cal.Calendar(); };

/**
 * Removes all the controls from the aggregation {@link #getTimeIntervals timeIntervals}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.gantt.def.cal.TimeInterval[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.removeAllTimeIntervals = function() { return new Array(); };

/**
 * Removes a timeInterval from the aggregation {@link #getTimeIntervals timeIntervals}.
 * 
 * @param {int | string | sap.gantt.def.cal.TimeInterval} vTimeInterval The timeInterval to remove or its index or id
 * @returns {sap.gantt.def.cal.TimeInterval} The removed timeInterval or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.removeTimeInterval = function(vTimeInterval) { return new sap.gantt.def.cal.TimeInterval(); };

/**
 * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
 * 
 * Background color of time intervals.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>#e5e5e5</code>.
 * @param {sap.gantt.ValueSVGPaintServer} sBackgroundColor New value for property <code>backgroundColor</code>
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.gantt.def.cal.Calendar(); };

/**
 * Sets a new value for property {@link #getKey key}.
 * 
 * Key of the calendar. Note that this value is used to generate the referencing string of the calendar pattern.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>calendar</code>.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.setKey = function(sKey) { return new sap.gantt.def.cal.Calendar(); };

/**
 * Unbinds aggregation {@link #getTimeIntervals timeIntervals} from model data.
 * @returns {sap.gantt.def.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.Calendar.prototype.unbindTimeIntervals = function() { return new sap.gantt.def.cal.Calendar(); };


// ---- sap.gantt.def.cal.CalendarDefs --------------------------------------------------------------------------

/**
 * Specific 'def' elements for the calendar.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Calendar pattern definition. This class generates the 'defs' tag from the 'defs' aggregation.
 *  
 * <p>
 * Calendar (for non-working hours) is a widely used graphic element in a Gantt chart. Calendar is considered to be highly reusable between different rows of  
 * resources. A default implementation of patterns is provided. After calendars are rendered from def tags, shape <code>sap.gantt.shape.cal.Calendar</code> can be
 * used to consume the calendar pattern definition.
 * 
 * This class is extended to provide a specific logic for generating referencing strings for calendar patterns.
 * </p>
 * 
 * @extends sap.gantt.def.SvgDefs
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.cal.CalendarDefs = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.cal.CalendarDefs with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.SvgDefs.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.cal.CalendarDefs.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.def.cal.CalendarDefs.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.cal.CalendarDefs.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.def.cal.TimeInterval --------------------------------------------------------------------------

/**
 * Creates and initializes a time interval inside the calendar.
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
 * <li>{@link #getStartTime startTime} : string</li>
 * <li>{@link #getEndTime endTime} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new element, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new element
 * 
 * @class 
 * A time interval pattern.
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.cal.TimeInterval = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.cal.TimeInterval with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.DefBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.cal.TimeInterval.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getEndTime endTime}.
 * 
 * End time of timeHorizon. Format: YYYYMMDDHHMMSS. If the type of startTime is object, the value is converted to string.
 * 
 * @returns {string} Value of property <code>endTime</code>
 * 
 * @public
 * 
 */
sap.gantt.def.cal.TimeInterval.prototype.getEndTime = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.def.cal.TimeInterval.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.cal.TimeInterval.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getStartTime startTime}.
 * 
 * Start Time of timeHorizon. Format: YYYYMMDDHHMMSS. If the type of startTime is object, the value is converted to string.
 * 
 * @returns {string} Value of property <code>startTime</code>
 * 
 * @public
 * 
 */
sap.gantt.def.cal.TimeInterval.prototype.getStartTime = function() { return ""; };

/**
 * Sets a new value for property {@link #getEndTime endTime}.
 * 
 * End time of timeHorizon. Format: YYYYMMDDHHMMSS. If the type of startTime is object, the value is converted to string.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sEndTime New value for property <code>endTime</code>
 * @returns {sap.gantt.def.cal.TimeInterval} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.TimeInterval.prototype.setEndTime = function(sEndTime) { return new sap.gantt.def.cal.TimeInterval(); };

/**
 * Sets a new value for property {@link #getStartTime startTime}.
 * 
 * Start Time of timeHorizon. Format: YYYYMMDDHHMMSS. If the type of startTime is object, the value is converted to string.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStartTime New value for property <code>startTime</code>
 * @returns {sap.gantt.def.cal.TimeInterval} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.cal.TimeInterval.prototype.setStartTime = function(sStartTime) { return new sap.gantt.def.cal.TimeInterval(); };


// ---- sap.gantt.def.DefBase --------------------------------------------------------------------------

/**
 * Creates and initializes a new SVG graphic object for reuse.
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
 * <li>{@link #getDefString defString} : string</li>
 * <li>{@link #getRefString refString} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Base class for all SVG definitions.
 * 
 * <p>
 * SVG uses the 'defs' tag to represent graphic objects that can be reused at a later time.
 * See {@link http://www.w3.org/TR/SVG/struct.html#DefsElement 'defs' in SVG}.
 * Currently <code>sap.gantt</code> provides defs including the following definition tags:
 * 'pattern', 'gradient', and 'filter'. Applications can also extend this base class to support more functionality.
 * </p>
 * 
 * @extends sap.ui.core.Element
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.DefBase = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.DefBase with name <code>sClassName</code>
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
sap.gantt.def.DefBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Provides a referencing ID. The default implementation is to use control ID as the referencing ID.
 * 
 * @see sap.ui.table.Table.getSelectedIndex
 * 
 * @return {string} Referencing ID.
 * @public
 * 
 */
sap.gantt.def.DefBase.prototype.generateRefId = function() { return ""; };

/**
 * Gets current value of property {@link #getDefString defString}.
 * 
 * Definition string. Subclasses can implement their own getters of this property to override the one in this class.
 * 
 * @returns {string} Value of property <code>defString</code>
 * 
 * @public
 * 
 */
sap.gantt.def.DefBase.prototype.getDefString = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.def.DefBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.DefBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getRefString refString}.
 * 
 * Referencing string. The default implementation is the referencing ID wrapped by 'url(#)'.
 * 
 * @returns {string} Value of property <code>refString</code>
 * 
 * @public
 * 
 */
sap.gantt.def.DefBase.prototype.getRefString = function() { return ""; };

/**
 * Sets a new value for property {@link #getDefString defString}.
 * 
 * Definition string. Subclasses can implement their own getters of this property to override the one in this class.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDefString New value for property <code>defString</code>
 * @returns {sap.gantt.def.DefBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.DefBase.prototype.setDefString = function(sDefString) { return new sap.gantt.def.DefBase(); };

/**
 * Sets a new value for property {@link #getRefString refString}.
 * 
 * Referencing string. The default implementation is the referencing ID wrapped by 'url(#)'.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sRefString New value for property <code>refString</code>
 * @returns {sap.gantt.def.DefBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.DefBase.prototype.setRefString = function(sRefString) { return new sap.gantt.def.DefBase(); };


// ---- sap.gantt.def.filter.ColorMatrixValue --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.def.filter.ColorMatrixValue.toString = function() { return ""; };

// ---- sap.gantt.def.filter.MorphologyFilter --------------------------------------------------------------------------

/**
 * Creates and initializes a morphology filter defined for later reuse.
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
 * <li>{@link #getOperator operator} : string (default: sap.gantt.def.filter.MorphologyOperator.Dilate)</li>
 * <li>{@link #getRadius radius} : string (default: 2,1)</li>
 * <li>{@link #getColorMatrix colorMatrix} : string (default: sap.gantt.def.filter.ColorMatrixValue.AllToWhite)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * This filter is a combination of several filters. The main one is morphology.
 * 
 * <p>
 * The purpose of this filter is to generate a white outline of a target shape when the target is overlapping with other shapes. In general this filter is recommended to be used only on 'text' and
 * 'image' whose outline is very hard to determine. For regular SVG tags like 'rect', 'circle' etc, use the 'stroke' attribute instead if possible. This is because filters in general have worse performance.<br/>
 * See {@link http://www.w3.org/TR/SVG/filters.html Filter Effects in SVG 1.1 specification} for detail.<br/>
 * Tags used in this filter are:
 * <ul>
 * 	<li>'femorphology': Use operator 'dilate' to make a fatter shape of the source shape. See {@link http://www.w3.org/TR/SVG/filters.html#feMorphologyElement Tag 'femorphology' in SVG 1.1 specification} for detail.</li>
 * 	<li>'feColorMatrix': Fills fatter shape. The default matrix turns every color into white. See {@link http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement Tag 'feColorMatrix' in SVG 1.1 specification} for detail.</li>
 * 	<li>'feMerge': Merges the source shape into the fatter shape to produce an outline effect on the target shape. See {@link http://www.w3.org/TR/SVG/filters.html#feMergeElement Tag 'feMerge' in SVG 1.1 specification} for detail.</li>
 * </ul>
 * Effect of this filter is: <br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><filter id="fm1"><feMorphology in="SourceAlpha" result="morphed" operator="dilate" radius="2,1"></feMorphology><feColorMatrix in="morphed" result="recolored" type="matrix" values="-1 0 0 0 1, 0 -1 0 0 1, 0 0 -1 0 1, 0 0 0 1 0"></feColorMatrix><feMerge><feMergeNode in="recolored"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>
 * 	<filter id="fm2"><feMorphology in="SourceAlpha" result="morphed" operator="dilate" radius="2,1"></feMorphology><feColorMatrix in="morphed" result="recolored" type="matrix" values="-1 0 0 0 0, 0 -1 0 0 0, 0 0 -1 0 0, 0 0 0 1 0"></feColorMatrix><feMerge><feMergeNode in="recolored"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>
 * 	<rect x="1" y="1" width="298" height="150" fill="#222"/>
 * 	<rect x="1" y="150" width="298" height="68" fill="#ddd"/>
 * 	<path d="M 80,50 c 0,-50 80,-50 80,0 c 0,50 80,50 80,0" filter="url(#fm1)" stroke="#9E1F63" stroke-width="2" fill="none"/>
 * 	<text x="20" y="130" filter="url(#fm1)" font-size="30" fill="#1C75BC">Can you see me?</text>
 * 	<text x="25" y="195" filter="url(#fm2)" font-size="30" fill="#ddd">How about now?</text>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.filter.MorphologyFilter with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.DefBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.filter.MorphologyFilter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColorMatrix colorMatrix}.
 * 
 * Attribute of SVG tag 'feColorMatrix'. See {@link http://www.w3.org/TR/SVG/filters.html#feColorMatrixValuesAttribute 'value' attribute} for detail.
 * Predefined values are in {@link sap.gantt.def.filter.ColorMatrixValue}. Advanced users can provide a customized matrix in string.
 * 
 * Default value is <code>sap.gantt.def.filter.ColorMatrixValue.AllToWhite</code>.
 * @returns {string} Value of property <code>colorMatrix</code>
 * 
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter.prototype.getColorMatrix = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.def.filter.MorphologyFilter.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.filter.MorphologyFilter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOperator operator}.
 * 
 * Atrribute of SVG tag 'feMorphology'. See {@link http://www.w3.org/TR/SVG/filters.html#feMorphologyOperatorAttribute 'operator' attribute} for detail.
 * Possible values are in {@link sap.gantt.def.filter.MorphologyOperator}.
 * 
 * Default value is <code>sap.gantt.def.filter.MorphologyOperator.Dilate</code>.
 * @returns {string} Value of property <code>operator</code>
 * 
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter.prototype.getOperator = function() { return ""; };

/**
 * Gets current value of property {@link #getRadius radius}.
 * 
 * Attribute of SVG tag 'feMorphology'. See {@link http://www.w3.org/TR/SVG/filters.html#feMorphologyRadiusAttribute 'radius' attribute} for detail.
 * 
 * Default value is <code>2,1</code>.
 * @returns {string} Value of property <code>radius</code>
 * 
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter.prototype.getRadius = function() { return ""; };

/**
 * Sets a new value for property {@link #getColorMatrix colorMatrix}.
 * 
 * Attribute of SVG tag 'feColorMatrix'. See {@link http://www.w3.org/TR/SVG/filters.html#feColorMatrixValuesAttribute 'value' attribute} for detail.
 * Predefined values are in {@link sap.gantt.def.filter.ColorMatrixValue}. Advanced users can provide a customized matrix in string.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.def.filter.ColorMatrixValue.AllToWhite</code>.
 * @param {string} sColorMatrix New value for property <code>colorMatrix</code>
 * @returns {sap.gantt.def.filter.MorphologyFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter.prototype.setColorMatrix = function(sColorMatrix) { return new sap.gantt.def.filter.MorphologyFilter(); };

/**
 * Sets a new value for property {@link #getOperator operator}.
 * 
 * Atrribute of SVG tag 'feMorphology'. See {@link http://www.w3.org/TR/SVG/filters.html#feMorphologyOperatorAttribute 'operator' attribute} for detail.
 * Possible values are in {@link sap.gantt.def.filter.MorphologyOperator}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.def.filter.MorphologyOperator.Dilate</code>.
 * @param {string} sOperator New value for property <code>operator</code>
 * @returns {sap.gantt.def.filter.MorphologyFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter.prototype.setOperator = function(sOperator) { return new sap.gantt.def.filter.MorphologyFilter(); };

/**
 * Sets a new value for property {@link #getRadius radius}.
 * 
 * Attribute of SVG tag 'feMorphology'. See {@link http://www.w3.org/TR/SVG/filters.html#feMorphologyRadiusAttribute 'radius' attribute} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2,1</code>.
 * @param {string} sRadius New value for property <code>radius</code>
 * @returns {sap.gantt.def.filter.MorphologyFilter} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.filter.MorphologyFilter.prototype.setRadius = function(sRadius) { return new sap.gantt.def.filter.MorphologyFilter(); };


// ---- sap.gantt.def.filter.MorphologyOperator --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.def.filter.MorphologyOperator.toString = function() { return ""; };

// ---- sap.gantt.def.gradient.LinearGradient --------------------------------------------------------------------------

/**
 * Creates and initializes a linear gradient defined for later reuse.
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
 * <li>{@link #getX1 x1} : string (default: 0)</li>
 * <li>{@link #getY1 y1} : string (default: 0)</li>
 * <li>{@link #getX2 x2} : string (default: 100)</li>
 * <li>{@link #getY2 y2} : string (default: 15)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getStops stops} : sap.gantt.def.gradient.Stop[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Linear gradient defined by SVG tag 'linearGradient'. 
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradients Linear Gradient in SVG 1.1 specification} for detail.<br/>
 * {@link http://www.w3.org/TR/SVG/images/pservers/lingrad01.svg Linear gradient sample in SVG specification 1.1}:<br/>
 * <svg width="8cm" height="4cm" viewBox="0 0 800 400" version="1.1" xmlns="http://www.w3.org/2000/svg">
 * <g><defs><linearGradient id="MyGradient"><stop offset="5%" stop-color="#F60" /><stop offset="95%" stop-color="#FF6" /></linearGradient></defs>
 * <rect fill="none" stroke="blue" x="1" y="1" width="798" height="398"/>
 * <rect fill="url(#MyGradient)" stroke="black" stroke-width="5" x="100" y="100" width="600" height="200"/></g>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient = function(sId,mSettings) {};
/**
 * Adds some stop to the aggregation {@link #getStops stops}.
 * @param {sap.gantt.def.gradient.Stop}
 *            oStop the stop to add; if empty, nothing is inserted
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.addStop = function(oStop) { return new sap.gantt.def.gradient.LinearGradient(); };

/**
 * Destroys all the stops in the aggregation {@link #getStops stops}.
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.destroyStops = function() { return new sap.gantt.def.gradient.LinearGradient(); };

/**
 * Creates a new subclass of class sap.gantt.def.gradient.LinearGradient with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.DefBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.gradient.LinearGradient.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.def.gradient.LinearGradient.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.gradient.LinearGradient.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getStops stops}.
 * 
 * 'stop' elements in the 'linearGradient' element. See {@link http://www.w3.org/TR/SVG/pservers.html#GradientStops 'stop' element in SVG 1.1 specification} for detail.
 * 
 * @returns {sap.gantt.def.gradient.Stop[]}
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.getStops = function() { return new Array(); };

/**
 * Gets current value of property {@link #getX1 x1}.
 * 
 * Attribute 'x1' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementX1Attribute 'x1' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>x1</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.getX1 = function() { return ""; };

/**
 * Gets current value of property {@link #getX2 x2}.
 * 
 * Attribute 'x2' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementX2Attribute 'x2' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * Default value is <code>100</code>.
 * @returns {string} Value of property <code>x2</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.getX2 = function() { return ""; };

/**
 * Gets current value of property {@link #getY1 y1}.
 * 
 * Attribute 'y1' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementY1Attribute 'y1' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>y1</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.getY1 = function() { return ""; };

/**
 * Gets current value of property {@link #getY2 y2}.
 * 
 * Attribute 'y2' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementY2Attribute 'y2' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * Default value is <code>15</code>.
 * @returns {string} Value of property <code>y2</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.getY2 = function() { return ""; };

/**
 * Checks for the provided <code>sap.gantt.def.gradient.Stop</code> in the aggregation {@link #getStops stops}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.gantt.def.gradient.Stop}
 *           oStop The stop whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.indexOfStop = function(oStop) { return 0; };

/**
 * Inserts a stop into the aggregation {@link #getStops stops}.
 * 
 * @param {sap.gantt.def.gradient.Stop}
 *            oStop the stop to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the stop should be inserted at; for
 *              a negative value of <code>iIndex</code>, the stop is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the stop is inserted at
 *              the last position
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.insertStop = function(oStop,iIndex) { return new sap.gantt.def.gradient.LinearGradient(); };

/**
 * Removes all the controls from the aggregation {@link #getStops stops}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.gantt.def.gradient.Stop[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.removeAllStops = function() { return new Array(); };

/**
 * Removes a stop from the aggregation {@link #getStops stops}.
 * 
 * @param {int | string | sap.gantt.def.gradient.Stop} vStop The stop to remove or its index or id
 * @returns {sap.gantt.def.gradient.Stop} The removed stop or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.removeStop = function(vStop) { return new sap.gantt.def.gradient.Stop(); };

/**
 * Sets a new value for property {@link #getX1 x1}.
 * 
 * Attribute 'x1' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementX1Attribute 'x1' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sX1 New value for property <code>x1</code>
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.setX1 = function(sX1) { return new sap.gantt.def.gradient.LinearGradient(); };

/**
 * Sets a new value for property {@link #getX2 x2}.
 * 
 * Attribute 'x2' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementX2Attribute 'x2' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100</code>.
 * @param {string} sX2 New value for property <code>x2</code>
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.setX2 = function(sX2) { return new sap.gantt.def.gradient.LinearGradient(); };

/**
 * Sets a new value for property {@link #getY1 y1}.
 * 
 * Attribute 'y1' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementY1Attribute 'y1' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sY1 New value for property <code>y1</code>
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.setY1 = function(sY1) { return new sap.gantt.def.gradient.LinearGradient(); };

/**
 * Sets a new value for property {@link #getY2 y2}.
 * 
 * Attribute 'y2' of SVG tag 'linearGradient'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#LinearGradientElementY2Attribute 'y2' attribute of 'linearGradient' element in SVG 1.1 specification} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>15</code>.
 * @param {string} sY2 New value for property <code>y2</code>
 * @returns {sap.gantt.def.gradient.LinearGradient} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.LinearGradient.prototype.setY2 = function(sY2) { return new sap.gantt.def.gradient.LinearGradient(); };


// ---- sap.gantt.def.gradient.RadicalGradient --------------------------------------------------------------------------

/**
 * Creates and initializes a radial gradient defined for later reuse.
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
 * <li>{@link #getCx cx} : float (default: 400)</li>
 * <li>{@link #getCy cy} : float (default: 200)</li>
 * <li>{@link #getR r} : float (default: 300)</li>
 * <li>{@link #getFx fx} : float (default: 400)</li>
 * <li>{@link #getFy fy} : float (default: 200)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getStops stops} : sap.gantt.def.gradient.Stop[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Radial gradient defined by SVG tag 'radialGradient'. 
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/pservers.html#RadialGradients Radical Gradient in SVG 1.1 specification} for detail.<br/>
 * {@link http://www.w3.org/TR/SVG/images/pservers/radgrad01.svg Radical gradient sample in SVG specification 1.1}:<br/>
 * <svg width="8cm" height="4cm" viewBox="0 0 800 400" version="1.1" xmlns="http://www.w3.org/2000/svg">
 * <g><defs><radialGradient id="MyGradient" gradientUnits="userSpaceOnUse" cx="400" cy="200" r="300" fx="400" fy="200">
 * <stop offset="0%" stop-color="red" /><stop offset="50%" stop-color="blue" /><stop offset="100%" stop-color="red" /></radialGradient></defs>
 * <rect fill="none" stroke="blue" x="1" y="1" width="798" height="398"/>
 * <rect fill="url(#MyGradient)" stroke="black" stroke-width="5" x="100" y="100" width="600" height="200"/></g>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.gradient.RadicalGradient = function(sId,mSettings) {};

// ---- sap.gantt.def.gradient.Stop --------------------------------------------------------------------------

/**
 * Creates and initializes a gradient stop defined for later reuse.
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
 * <li>{@link #getOffSet offSet} : string (default: 5%)</li>
 * <li>{@link #getStopColor stopColor} : sap.gantt.ValueSVGPaintServer (default: #FFFFFF)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Gradient stop defined by SVG tag 'stop'. 
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/pservers.html#StopElement 'stop' element in SVG 1.1 specification} for detail.
 * </p>
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.gradient.Stop = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.gradient.Stop with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.DefBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.gradient.Stop.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.def.gradient.Stop.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.gradient.Stop.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getOffSet offSet}.
 * 
 * Attribute 'offset' of SVG tag 'stop'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#StopElementOffsetAttribute 'offset' attribute of 'stop' element in SVG 1.1 specification} for detail.
 * 
 * Default value is <code>5%</code>.
 * @returns {string} Value of property <code>offSet</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.Stop.prototype.getOffSet = function() { return ""; };

/**
 * Gets current value of property {@link #getStopColor stopColor}.
 * 
 * Property 'stop-color' of SVG tag 'stop'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#StopColorProperty 'stop-color' property of 'stop' element in SVG 1.1 specification} for detail.
 * 
 * Default value is <code>#FFFFFF</code>.
 * @returns {sap.gantt.ValueSVGPaintServer} Value of property <code>stopColor</code>
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.Stop.prototype.getStopColor = function() { return new sap.gantt.ValueSVGPaintServer(); };

/**
 * Sets a new value for property {@link #getOffSet offSet}.
 * 
 * Attribute 'offset' of SVG tag 'stop'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#StopElementOffsetAttribute 'offset' attribute of 'stop' element in SVG 1.1 specification} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5%</code>.
 * @param {string} sOffSet New value for property <code>offSet</code>
 * @returns {sap.gantt.def.gradient.Stop} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.Stop.prototype.setOffSet = function(sOffSet) { return new sap.gantt.def.gradient.Stop(); };

/**
 * Sets a new value for property {@link #getStopColor stopColor}.
 * 
 * Property 'stop-color' of SVG tag 'stop'. See 
 * {@link http://www.w3.org/TR/SVG/pservers.html#StopColorProperty 'stop-color' property of 'stop' element in SVG 1.1 specification} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>#FFFFFF</code>.
 * @param {sap.gantt.ValueSVGPaintServer} sStopColor New value for property <code>stopColor</code>
 * @returns {sap.gantt.def.gradient.Stop} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.gradient.Stop.prototype.setStopColor = function(sStopColor) { return new sap.gantt.def.gradient.Stop(); };


// ---- sap.gantt.def.pattern.BackSlashPattern --------------------------------------------------------------------------

/**
 * Creates and initializes a backslash pattern defined for later reuse.
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
 * <li>{@link #getStroke stroke} : sap.gantt.ValueSVGPaintServer</li>
 * <li>{@link #getStrokeWidth strokeWidth} : int (default: 2)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.pattern.PatternBase#constructor sap.gantt.def.pattern.PatternBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Backslash pattern defined by a path. The stroke color and stroke width of the path can be modified with properties.
 * 
 * <p>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="p3" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#e2e2e2"></rect><path d="M -1 3 l 2 2 M 0 0 l 4 4 M 3 -1 l 2,2" stroke="#9E1F63" stroke-width="1"></path></pattern>
 * 	<pattern class="pattern" id="p4" patternUnits="userSpaceOnUse" x="0" y="0" width="8" height="8"><rect x="0" width="8" height="8" fill="#fff"></rect><path d="M -2 6 l 4 4 M 0 0 l 8 8 M 6 -2 l 4,4" stroke="#6d6d6d" stroke-width="2"></path></pattern>
 * 	<pattern class="pattern" id="p5" patternUnits="userSpaceOnUse" x="120" y="85" width="100" height="100"><rect x="0" width="100" height="100" fill="#e2e2e2"></rect><path d="M -25 75 l 50 50 M 0 0 l 100 100 M 75 -25 l 50,50" stroke="#1C75BC" stroke-width="30"></path></pattern></defs>
 * 	<rect fill="url(#p3)" x="60" y="20" width="80" height="20" />
 * 	<circle fill="url(#p4)" cx="180" cy="25" r="10" /> <circle fill="url(#p4)" cx="200" cy="30" r="15" />
 * 	<text x="150" y="75" class="timeText">Tile Detail:</text>
 * 	<rect fill="url(#p5)" x="120" y="85" width="100" height="100" />
 * 	<path d="M 120 85 h 100 v 100 h -100 z" class="dashside" />
 * 	<path d="M 220 85 h 20 m 0 100 h -20 v 20 m -100 0 v -20 m 7 -10 h -20 m 0 -45 h 20 m -7 -25 l -20 -20 m 21 -19 l 20 20" class="dashassist" />
 * 	<path d="M 240 85 v 100" class="arrowline" />
 * 	<path d="M 120 205 h 100" class="arrowline" />
 * 	<path d="M 125 70 l -20 20" class="arrowline" />
 * 	<text x="235" y="175" class="propertyText" transform="rotate(-90, 235 175)">tileHeight</text>
 * 	<text x="130" y="200" class="propertyText">tileWidth</text>
 * 	<text x="20" y="125" class="propertyText">background</text>
 * 	<text x="50" y="145" class="propertyText">Color</text>
 * 	<text x="15" y="180" class="propertyText">strokeColor</text>
 * 	<text x="25" y="75" class="propertyText">strokeWidth</text>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.def.pattern.PatternBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.pattern.BackSlashPattern with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.pattern.PatternBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.def.pattern.BackSlashPattern.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPath path}.
 * 
 * Value of the d attribute in Path element. The value is affected by property <code>tileWidth</code> and <code>tileHeight</code>.
 * If this value is changed by coding, the effect is not guaranteed.
 * 
 * @returns {string} Value of property <code>path</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.prototype.getPath = function() { return ""; };

/**
 * Gets current value of property {@link #getStroke stroke}.
 * 
 * Stroke color of the path element.
 * 
 * @returns {sap.gantt.ValueSVGPaintServer} Value of property <code>stroke</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.prototype.getStroke = function() { return new sap.gantt.ValueSVGPaintServer(); };

/**
 * Gets current value of property {@link #getStrokeWidth strokeWidth}.
 * 
 * Stroke width of the path element.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>strokeWidth</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.prototype.getStrokeWidth = function() { return 0; };

/**
 * Sets a new value for property {@link #getPath path}.
 * 
 * Value of the d attribute in Path element. The value is affected by property <code>tileWidth</code> and <code>tileHeight</code>.
 * If this value is changed by coding, the effect is not guaranteed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPath New value for property <code>path</code>
 * @returns {sap.gantt.def.pattern.BackSlashPattern} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.prototype.setPath = function(sPath) { return new sap.gantt.def.pattern.BackSlashPattern(); };

/**
 * Sets a new value for property {@link #getStroke stroke}.
 * 
 * Stroke color of the path element.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.ValueSVGPaintServer} sStroke New value for property <code>stroke</code>
 * @returns {sap.gantt.def.pattern.BackSlashPattern} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.prototype.setStroke = function(sStroke) { return new sap.gantt.def.pattern.BackSlashPattern(); };

/**
 * Sets a new value for property {@link #getStrokeWidth strokeWidth}.
 * 
 * Stroke width of the path element.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iStrokeWidth New value for property <code>strokeWidth</code>
 * @returns {sap.gantt.def.pattern.BackSlashPattern} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.BackSlashPattern.prototype.setStrokeWidth = function(iStrokeWidth) { return new sap.gantt.def.pattern.BackSlashPattern(); };


// ---- sap.gantt.def.pattern.PatternBase --------------------------------------------------------------------------

/**
 * Creates and initializes a new SVG pattern defined for later reuse.
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
 * <li>{@link #getTileWidth tileWidth} : int (default: 8)</li>
 * <li>{@link #getTileHeight tileHeight} : int (default: 8)</li>
 * <li>{@link #getBackgroundColor backgroundColor} : sap.gantt.ValueSVGPaintServer (default: #fff)</li>
 * <li>{@link #getBackgroundFillOpacity backgroundFillOpacity} : float (default: 1)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.DefBase#constructor sap.gantt.def.DefBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Base class for SVG pattern definitions.
 * 
 * <p>
 * Pattern is a built-in paint server in SVG. It provides tile-based patterns to the SVG 'fill' or 'stroke' attributes.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#Patterns 'pattern' element in SVG}.<br>
 * See {@link http://www.w3.org/TR/SVG/images/pservers/pattern01.svg Pattern sample fro SVG specificiation 1.1}<br/>
 * <svg width="8cm" height="4cm" viewBox="0 0 800 400" version="1.1" xmlns="http://www.w3.org/2000/svg">
 * <defs> <pattern id="TrianglePattern" patternUnits="userSpaceOnUse"  x="0" y="0" width="100" height="100" viewBox="0 0 10 10" >
 * <path d="M 0 0 L 7 0 L 3.5 7 z" fill="red" stroke="blue" /></pattern></defs>
 * <rect fill="none" stroke="blue" x="1" y="1" width="798" height="398"/>
 * <ellipse fill="url(#TrianglePattern)" stroke="black" stroke-width="5" cx="400" cy="200" rx="350" ry="150" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.def.DefBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.pattern.PatternBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.DefBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.pattern.PatternBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBackgroundColor backgroundColor}.
 * 
 * Background color of the pattern.
 * Technically a rectangle with the color is added in the beginning of the pattern definition.
 * 
 * Default value is <code>#fff</code>.
 * @returns {sap.gantt.ValueSVGPaintServer} Value of property <code>backgroundColor</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.getBackgroundColor = function() { return new sap.gantt.ValueSVGPaintServer(); };

/**
 * Gets current value of property {@link #getBackgroundFillOpacity backgroundFillOpacity}.
 * 
 * Fill opacity of background color.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>backgroundFillOpacity</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.getBackgroundFillOpacity = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.def.pattern.PatternBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.pattern.PatternBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTileHeight tileHeight}.
 * 
 * Height of the pattern tile.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementHeightAttribute 'height' attribute of 'pattern' element} for detail.
 * 
 * Default value is <code>8</code>.
 * @returns {int} Value of property <code>tileHeight</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.getTileHeight = function() { return 0; };

/**
 * Gets current value of property {@link #getTileWidth tileWidth}.
 * 
 * Width of the pattern tile.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementWidthAttribute 'width' attribute of 'pattern' element} for detail.
 * 
 * Default value is <code>8</code>.
 * @returns {int} Value of property <code>tileWidth</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.getTileWidth = function() { return 0; };

/**
 * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
 * 
 * Background color of the pattern.
 * Technically a rectangle with the color is added in the beginning of the pattern definition.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>#fff</code>.
 * @param {sap.gantt.ValueSVGPaintServer} sBackgroundColor New value for property <code>backgroundColor</code>
 * @returns {sap.gantt.def.pattern.PatternBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.gantt.def.pattern.PatternBase(); };

/**
 * Sets a new value for property {@link #getBackgroundFillOpacity backgroundFillOpacity}.
 * 
 * Fill opacity of background color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fBackgroundFillOpacity New value for property <code>backgroundFillOpacity</code>
 * @returns {sap.gantt.def.pattern.PatternBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.setBackgroundFillOpacity = function(fBackgroundFillOpacity) { return new sap.gantt.def.pattern.PatternBase(); };

/**
 * Sets a new value for property {@link #getTileHeight tileHeight}.
 * 
 * Height of the pattern tile.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementHeightAttribute 'height' attribute of 'pattern' element} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>8</code>.
 * @param {int} iTileHeight New value for property <code>tileHeight</code>
 * @returns {sap.gantt.def.pattern.PatternBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.setTileHeight = function(iTileHeight) { return new sap.gantt.def.pattern.PatternBase(); };

/**
 * Sets a new value for property {@link #getTileWidth tileWidth}.
 * 
 * Width of the pattern tile.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementWidthAttribute 'width' attribute of 'pattern' element} for detail.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>8</code>.
 * @param {int} iTileWidth New value for property <code>tileWidth</code>
 * @returns {sap.gantt.def.pattern.PatternBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.PatternBase.prototype.setTileWidth = function(iTileWidth) { return new sap.gantt.def.pattern.PatternBase(); };


// ---- sap.gantt.def.pattern.SlashPattern --------------------------------------------------------------------------

/**
 * Creates and initializes a slash pattern defined for later reuse.
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
 * <li>{@link #getStroke stroke} : sap.gantt.ValueSVGPaintServer</li>
 * <li>{@link #getStrokeWidth strokeWidth} : int (default: 2)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.def.pattern.PatternBase#constructor sap.gantt.def.pattern.PatternBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class 
 * Slash pattern defined by a path. Stroke color and stroke width of the path can be changed by corresponding properties.
 * 
 * <p>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="p1" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#e2e2e2"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="1"></path></pattern>
 * 	<pattern class="pattern" id="p2" patternUnits="userSpaceOnUse" x="0" y="0" width="8" height="8"><rect x="0" width="8" height="8" fill="#fff"></rect><path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4 " stroke="#6d6d6d" stroke-width="2"></path></pattern>
 * 	<pattern class="pattern" id="p3" patternUnits="userSpaceOnUse" x="70" y="85" width="100" height="100"><rect x="0" width="100" height="100" fill="#e2e2e2"></rect><path d="M-25,25 l50,-50 M0,100 l100,-100 M75,125 l50,-50" stroke="#1C75BC" stroke-width="30"></path></pattern></defs>
 * 	<rect fill="url(#p1)" x="60" y="20" width="80" height="20" />
 * 	<circle fill="url(#p2)" cx="180" cy="25" r="10" /> <circle fill="url(#p2)" cx="200" cy="30" r="15" />
 * 	<text x="50" y="75" class="timeText">Tile Detail:</text>
 * 	<rect fill="url(#p3)" x="70" y="85" width="100" height="100" />
 * 	<path d="M 70 85 h 100 v 100 h -100 z" class="dashside" />
 * 	<path d="M 70 85 h -20 m 0 100 h 20 v 20 m 100 0 v -20 m -7 -10 h 20 m 0 -45 h -20 m 7 -25 l 20 -20 m -21 -19 l -20 20" class="dashassist" />
 * 	<path d="M 50 85 v 100" class="arrowline" />
 * 	<path d="M 70 205 h 100" class="arrowline" />
 * 	<path d="M 165 70 l 20 20" class="arrowline" />
 * 	<text x="65" y="175" class="propertyText" transform="rotate(-90, 65 175)">tileHeight</text>
 * 	<text x="80" y="200" class="propertyText">tileWidth</text>
 * 	<text x="185" y="125" class="propertyText">background</text>
 * 	<text x="185" y="145" class="propertyText">Color</text>
 * 	<text x="185" y="180" class="propertyText">strokeColor</text>
 * 	<text x="180" y="75" class="propertyText">strokeWidth</text>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.def.pattern.PatternBase
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.def.pattern.SlashPattern with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.def.pattern.PatternBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.def.pattern.SlashPattern.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.def.pattern.SlashPattern.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.def.pattern.SlashPattern.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPath path}.
 * 
 * Value of d attribute in Path element. The value is influenced by property <code>tileWidth</code> and <code>tileHeight</code>.
 * If this value is changed by coding, the logic cannot be guaranteed.
 * 
 * @returns {string} Value of property <code>path</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern.prototype.getPath = function() { return ""; };

/**
 * Gets current value of property {@link #getStroke stroke}.
 * 
 * Stroke color of the path element.
 * 
 * @returns {sap.gantt.ValueSVGPaintServer} Value of property <code>stroke</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern.prototype.getStroke = function() { return new sap.gantt.ValueSVGPaintServer(); };

/**
 * Gets current value of property {@link #getStrokeWidth strokeWidth}.
 * 
 * Stroke width of the path element.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>strokeWidth</code>
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern.prototype.getStrokeWidth = function() { return 0; };

/**
 * Sets a new value for property {@link #getPath path}.
 * 
 * Value of d attribute in Path element. The value is influenced by property <code>tileWidth</code> and <code>tileHeight</code>.
 * If this value is changed by coding, the logic cannot be guaranteed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPath New value for property <code>path</code>
 * @returns {sap.gantt.def.pattern.SlashPattern} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern.prototype.setPath = function(sPath) { return new sap.gantt.def.pattern.SlashPattern(); };

/**
 * Sets a new value for property {@link #getStroke stroke}.
 * 
 * Stroke color of the path element.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.ValueSVGPaintServer} sStroke New value for property <code>stroke</code>
 * @returns {sap.gantt.def.pattern.SlashPattern} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern.prototype.setStroke = function(sStroke) { return new sap.gantt.def.pattern.SlashPattern(); };

/**
 * Sets a new value for property {@link #getStrokeWidth strokeWidth}.
 * 
 * Stroke width of the path element.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iStrokeWidth New value for property <code>strokeWidth</code>
 * @returns {sap.gantt.def.pattern.SlashPattern} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.def.pattern.SlashPattern.prototype.setStrokeWidth = function(iStrokeWidth) { return new sap.gantt.def.pattern.SlashPattern(); };


// ---- sap.gantt.def.SvgDef --------------------------------------------------------------------------

/**
 * SVG definition tag class.
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
 * <li>{@link #getDefs defs} : sap.gantt.def.DefBase[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * The class handles the container tag "defs" for all reusable SVG graphic definitions. It provides 
 * interfaces for SVG definition strings and referencing strings. The parent class is responsible for 
 * rendering the definition strings.
 * 
 * <p>
 * SVG uses the 'defs' tag to represent graphic objects that are defined for reuse at a later time.
 * See {@link http://www.w3.org/TR/SVG/struct.html#DefsElement 'defs' in SVG}.
 * Currently <code>sap.gantt</code> provides defs including the following definition tags:
 * 'pattern', 'gradient', and 'filter'. Applications can also extend this base class to support more functionality.
 * </p>
 * 
 * @extends sap.ui.base.ManagedObject
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.def.SvgDef = function(sId,mSettings) {};
/**
 * Definition string of the SVG 'defs' tag.
 * 
 * @returns {string} - Definition string to be rendered by caller.
 * @public
 * 
 */
sap.gantt.def.SvgDef.prototype.getDefString = function() { return ""; };


// ---- sap.gantt.GanttChart --------------------------------------------------------------------------

/**
 * Creates and initializes a new Gantt Chart.
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
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.GanttChartBase#constructor sap.gantt.GanttChartBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no id is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Gantt Chart control.
 * 
 * <p>The Gantt chart has a horizontal axis at the top that represents time and a vertical axis that represents rows.
 * </p>
 * 
 * @extends sap.gantt.GanttChartBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.GanttChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.GanttChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.GanttChartBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.GanttChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.GanttChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.GanttChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Set AxixTimeStrategy aggregation.
 * 
 * @public
 * 
 * @param {object} oAxisTimeStrategy an instance of AxisTime Zoom Strategy
 * @return {object} GanttChart instance for chaining
 * 
 */
sap.gantt.GanttChart.prototype.setAxisTimeStrategy = function(oAxisTimeStrategy) { return new Object(); };

/**
 * Sets the first visible row in the Gantt Chart Control.
 * 
 * @see sap.ui.table.Table.setFirstVisibleRow
 * 
 * @param {int} iRowIndex The row index to be set as the first visible row
 * @return {sap.gantt.GanttChart} A reference to the GanttChart control, which can be used for chaining
 * @public
 * 
 */
sap.gantt.GanttChart.prototype.setFirstVisibleRow = function(iRowIndex) { return new sap.gantt.GanttChart(); };


// ---- sap.gantt.GanttChartBase --------------------------------------------------------------------------

/**
 * Creates and initializes a new Gantt chart.
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
 * <li>{@link #getEnableCursorLine enableCursorLine} : boolean (default: true)</li>
 * <li>{@link #getEnableNowLine enableNowLine} : boolean (default: true)</li>
 * <li>{@link #getEnableVerticalLine enableVerticalLine} : boolean (default: true)</li>
 * <li>{@link #getEnableAdhocLine enableAdhocLine} : boolean (default: true)</li>
 * <li>{@link #getTimeZoomRate timeZoomRate} : float (default: 1)</li>
 * <li>{@link #getMode mode} : string (default: sap.gantt.config.DEFAULT_MODE_KEY)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.gantt.SelectionMode (default: MultiWithKeyboard)</li>
 * <li>{@link #getSelectionPanelSize selectionPanelSize} : sap.ui.core.CSSSize (default: 30%)</li>
 * <li>{@link #getHierarchyKey hierarchyKey} : string (default: sap.gantt.config.DEFAULT_HIERARCHY_KEY)</li>
 * <li>{@link #getBaseRowHeight baseRowHeight} : int</li>
 * <li>{@link #getSvgDefs svgDefs} : object</li>
 * <li>{@link #getTimeAxis timeAxis} : object (default: sap.gantt.config.DEFAULT_TIME_AXIS)</li>
 * <li>{@link #getModes modes} : object[] (default: sap.gantt.config.DEFAULT_MODES)</li>
 * <li>{@link #getToolbarSchemes toolbarSchemes} : object[] (default: sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEMES)</li>
 * <li>{@link #getHierarchies hierarchies} : object[] (default: sap.gantt.config.DEFAULT_HIERARCHYS)</li>
 * <li>{@link #getObjectTypes objectTypes} : object[] (default: sap.gantt.config.DEFAULT_OBJECT_TYPES)</li>
 * <li>{@link #getChartSchemes chartSchemes} : object[] (default: sap.gantt.config.DEFAULT_CHART_SCHEMES)</li>
 * <li>{@link #getLocale locale} : object (default: sap.gantt.config.DEFAULT_LOCALE_CET)</li>
 * <li>{@link #getShapeDataNames shapeDataNames} : sap.gantt.GenericArray (default: [])</li>
 * <li>{@link #getShapes shapes} : object[] (default: [])</li>
 * <li>{@link #getAdhocLineLayer adhocLineLayer} : string (default: sap.gantt.AdhocLineLayer.Top)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} : sap.ui.core.Control[]</li>
 * <li>{@link #getRelationships relationships} : sap.ui.core.Control[]</li>
 * <li>{@link #getCalendarDef calendarDef} : sap.gantt.def.cal.CalendarDefs</li>
 * <li>{@link #getAxisTimeStrategy axisTimeStrategy} : sap.gantt.axistime.AxisTimeStrategyBase</li>
 * <li>{@link #getAdhocLines adhocLines} : sap.gantt.AdhocLine[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ganttChartSwitchRequested ganttChartSwitchRequested} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:splitterResize splitterResize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:horizontalScroll horizontalScroll} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:verticalScroll verticalScroll} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chartMouseOver chartMouseOver} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chartClick chartClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chartDoubleClick chartDoubleClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chartRightClick chartRightClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chartDragEnter chartDragEnter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:chartDragLeave chartDragLeave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:rowSelectionChange rowSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:relationshipSelectionChange relationshipSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:shapeSelectionChange shapeSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:shapeDragEnd shapeDragEnd} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:treeTableToggleEvent treeTableToggleEvent} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no id is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Base class for all Gantt charts.
 * 
 * <p>This base class defines:
 * <ul>
 * 		<li>Basic properties and aggregations.</li>
 * 		<li>Metadata required integrate with GanttChartContainer.</li>
 * </ul>
 * sap.gantt provides two basic implementations of <code>GanttChartBase</code>:
 * <ul>
 * 		<li><code>sap.gantt.GanttChart</code> - A chart area that contains rows along the vertical axis and a time scale along the horizontal axis.</li>
 * 		<li><code>sap.gantt.GanttChartWithTable</code> - A tree table and a chart area separated by a splitter with rows synchronized.</li>
 * </ul>
 * </p>
 * 
 * <p>A number of <code>get</code> and <code>select</code> functions in this class use the row ID, row UI ID (UID), shape ID, or shape UID as the input to identify the objects to 
 * select or retrieve.
 * 
 * A row UID comprises the following parts:
 * <ul>
 * 		<li>Row ID: Identifier of a specific row. In most cases, this ID is specified in your data model, for example: 0001. The system generates a 
 * random ID for a row if you do not specify the row ID.</li>
 * 		<li>Row path: Represents the ID hierarchy in a tree structure. For example, if a tree has a three-level hierarchy, the row path 
 * follows this pattern: Level_1_row_id|level_2_row_id|level_3_row_id</li>
 * 		<li>Scheme: Chart scheme which is configured in shape configuration. The scheme controls what kind of shapes are shown in a row.</li>
 * </ul>
 * Row UID pattern: PATH:row_id|SCHEME:chart_scheme_key[index]
 * 
 * A shape UID comprises the following parts:
 * <ul>
 * 		<li>Row UID: UID of the row where the shape is located.</li>
 * 		<li>Shape data name: Key of the shape in the data model. For example: DATA:activity_greedy</li>
 * 		<li>Shape ID: Identifier of a specific shape. In most cases, this ID is specified in your data model. The system generates a 
 * random ID for a shape if you do not specify the shape ID.</li>
 * </ul>
 * Row UID pattern: PATH:row_id|SCHEME:chart_scheme_key[index]|DATA:shape_data_name[shape_id]
 * 
 * Note that you do not need to specify the UID for a shape or row. Gantt  Chart automatically forms the UIDs for shapes or rows.
 * </p>
 * 
 * @extends sap.ui.core.Control
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.GanttChartBase = function(sId,mSettings) {};
/**
 * Event fired when the chart is clicked
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.objectInfo Row object information of the current mouse point.
 * @param {object} oControlEvent.getParameters.leadingRowInfo Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} oControlEvent.getParameters.timestamp Timestamp of the current mouse point.
 * @param {string} oControlEvent.getParameters.svgId ID of SVG.
 * @param {int[]} oControlEvent.getParameters.svgCoordinate [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} oControlEvent.getParameters.effectingMode Effective mode. It can be the current Gantt Chart mode or the mode derived from the chart scheme mode.
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.chartClick = function(oControlEvent) {  };

/**
 * Event fired when the chart is double-clicked
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.objectInfo Row object information of the current mouse point.
 * @param {object} oControlEvent.getParameters.leadingRowInfo Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} oControlEvent.getParameters.timestamp Timestamp of the current mouse point.
 * @param {string} oControlEvent.getParameters.svgId ID of SVG.
 * @param {int[]} oControlEvent.getParameters.svgCoordinate [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} oControlEvent.getParameters.effectingMode Effective mode. It can be the current Gantt Chart mode or the mode derived from the chart scheme mode.
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.chartDoubleClick = function(oControlEvent) {  };

/**
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originEvent 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.chartDragEnter = function(oControlEvent) {  };

/**
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originEvent 
 * @param {object} oControlEvent.getParameters.draggingSource 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.chartDragLeave = function(oControlEvent) {  };

/**
 * Event is fired when a mouse-hover occurs in the graphic part.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.objectInfo Row object information of the current mouse point.
 * @param {object} oControlEvent.getParameters.leadingRowInfo Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} oControlEvent.getParameters.timestamp Timestamp of the current mouse point.
 * @param {string} oControlEvent.getParameters.svgId ID of SVG.
 * @param {int[]} oControlEvent.getParameters.svgCoordinate [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} oControlEvent.getParameters.effectingMode Effective mode. It can be the current Gantt Chart mode or the mode derived from the chart scheme mode.
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.chartMouseOver = function(oControlEvent) {  };

/**
 * Event fired when the chart is right-clicked
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.objectInfo Row object information of the current mouse point.
 * @param {object} oControlEvent.getParameters.leadingRowInfo Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} oControlEvent.getParameters.timestamp Timestamp of the current mouse point.
 * @param {string} oControlEvent.getParameters.svgId ID of SVG.
 * @param {int[]} oControlEvent.getParameters.svgCoordinate [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} oControlEvent.getParameters.effectingMode Effective mode. It can be the current Gantt Chart mode or a mode derived from the chart scheme mode.
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.chartRightClick = function(oControlEvent) {  };

/**
 * Event fired when the hierarchy key has changed in the Gantt chart toolbar.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.hierarchyKey Target hierarchy key.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.ganttChartSwitchRequested = function(oControlEvent) {  };

/**
 * Horizontal (time axis) scroll.
 * 
 * If the horizontal scroll bar exists and synchronization is needed with other Gantt charts in the container, use this event.
 * @event
 * 
 * @deprecated As of version 1.44
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.scrollSteps Scroll steps.
 * @param {string} oControlEvent.getParameters.startTime The start time of Gantt Chart visible area when the event fired
 * @param {string} oControlEvent.getParameters.endTime The end time of Gantt Chart visible area when the event fired
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.horizontalScroll = function(oControlEvent) {  };

/**
 * Event fired when the selection status of relationships changes.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.relationshipSelectionChange = function(oControlEvent) {  };

/**
 * Event fired when the selection status of rows changes.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.rowSelectionChange = function(oControlEvent) {  };

/**
 * Event fired when a drag-and-drop occurs on one or more selected shapes.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @param {object[]} oControlEvent.getParameters.sourceShapeData List of source shape data.
 * @param {string} oControlEvent.getParameters.sourceSvgId Source SVG ID.
 * @param {object[]} oControlEvent.getParameters.targetData List of target shape data. Sorted by shape level.
 * @param {string} oControlEvent.getParameters.targetSvgId Target SVG ID.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.shapeDragEnd = function(oControlEvent) {  };

/**
 * Event fired when the selection status of shapes changes.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.originEvent Original JQuery event object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.shapeSelectionChange = function(oControlEvent) {  };

/**
 * Splitter (if exists) resized.
 * 
 * If a splitter exists and synchronization is needed with other Gantt charts in the container, use this event. 
 * You can listen for this event and obtain <code>zoomInfo</code>.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id ID of the source control.
 * @param {int[]} oControlEvent.getParameters.oldSizes Old size in the form of [height, width].
 * @param {int[]} oControlEvent.getParameters.newSizes New size in the form of [height, width].
 * @param {object} oControlEvent.getParameters.zoomInfo Zoom information.
 * 
 * This object contains all related information for the listener to get the current zoom level of the time axis.
 * Usually <code>zoomInfo</code> contains the following information:
 * <ul>
 * 	<li><code>"base"</code> - Base for zooming calculation.
 * 		<ul>
 * 			<li><code>"sGranularity"</code>: "4day", - Zoom level that is used to calculate the zoom base; it is taken from timeAxis.granularity.</li>
 * 			<li><code>"fScale"</code>: 3840000 - Base scale determined by zoomStrategy level and now().</li>
 * 		</ul>
 * 	</li>
 * 	<li><code>"determinedByConfig"</code> - Zoom level calculated by configuration <code>timeAxis</code>.
 * 		<ul>
 * 			<li><code>"fRate"</code>: 1, - Zoom rate determined by configuration timeAxis.granularity.</li>
 * 			<li><code>"fMaxRate"</code>: 384, - Maximum zoom rate determined by configuration timeAxis.finestGranularity.</li>
 * 			<li><code>"fMinRate"</code>: 0.02197802197802198 - Minimum zoom rate determined by configuration timeAxis.coarsestGranularity.</li>
 * 		</ul>
 * 	</li>
 * 	<li><code>"determinedByChartWidth"</code> - Zoom level calculated by the SVG width.
 * 		<ul>
 * 			<li><code>"fMinRate"</code>: 0.0279009617614573, - Minimum zoom rate determined by the chart width and configuration timeAxis.planHorizon.</li>
 * 			<li><code>"fSuitableRate"</code>: 0.5078804440909039 - Suitable zoom rate determined by the chart width and configuration timeAxis.initHorizon.</li>
 * 		</ul>					 
 * 	</li>
 * 	<li><code>iChartWidth</code>: 417 - Chart width in pixel.</li>
 * </ul>
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.splitterResize = function(oControlEvent) {  };

/**
 * Event fired when toggle node of the tree table.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex The index of the expanded/collapsed row.
 * @param {object} oControlEvent.getParameters.rowContext The binding context of the selected row.
 * @param {boolean} oControlEvent.getParameters.expanded flag whether the node has been expanded or collapsed.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.treeTableToggleEvent = function(oControlEvent) {  };

/**
 * Vertical (row axis) scroll.
 * 
 * If the vertical scroll bar exists and synchronization is needed with other Gantt charts in the container, use this event.
 * @event
 * 
 * @deprecated As of version 1.44
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.scrollSteps Scroll steps.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.verticalScroll = function(oControlEvent) {  };

/**
 * Adds some adhocLine to the aggregation {@link #getAdhocLines adhocLines}.
 * @param {sap.gantt.AdhocLine}
 *            oAdhocLine the adhocLine to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.addAdhocLine = function(oAdhocLine) { return new sap.gantt.GanttChartBase(); };

/**
 * Adds some relationship to the aggregation {@link #getRelationships relationships}.
 * @param {sap.ui.core.Control}
 *            oRelationship the relationship to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.addRelationship = function(oRelationship) { return new sap.gantt.GanttChartBase(); };

/**
 * Adds some row to the aggregation {@link #getRows rows}.
 * @param {sap.ui.core.Control}
 *            oRow the row to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.addRow = function(oRow) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chartClick chartClick} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the chart is clicked
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachChartClick = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chartDoubleClick chartDoubleClick} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the chart is double-clicked
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachChartDoubleClick = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chartDragEnter chartDragEnter} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachChartDragEnter = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chartDragLeave chartDragLeave} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachChartDragLeave = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chartMouseOver chartMouseOver} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event is fired when a mouse-hover occurs in the graphic part.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachChartMouseOver = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:chartRightClick chartRightClick} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the chart is right-clicked
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachChartRightClick = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:ganttChartSwitchRequested ganttChartSwitchRequested} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the hierarchy key has changed in the Gantt chart toolbar.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachGanttChartSwitchRequested = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:horizontalScroll horizontalScroll} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Horizontal (time axis) scroll.
 * 
 * If the horizontal scroll bar exists and synchronization is needed with other Gantt charts in the container, use this event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 * @deprecated As of version 1.44
 * 
 */
sap.gantt.GanttChartBase.prototype.attachHorizontalScroll = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:relationshipSelectionChange relationshipSelectionChange} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the selection status of relationships changes.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachRelationshipSelectionChange = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:rowSelectionChange rowSelectionChange} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the selection status of rows changes.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachRowSelectionChange = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:shapeDragEnd shapeDragEnd} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when a drag-and-drop occurs on one or more selected shapes.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachShapeDragEnd = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:shapeSelectionChange shapeSelectionChange} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when the selection status of shapes changes.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachShapeSelectionChange = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:splitterResize splitterResize} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Splitter (if exists) resized.
 * 
 * If a splitter exists and synchronization is needed with other Gantt charts in the container, use this event. 
 * You can listen for this event and obtain <code>zoomInfo</code>.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachSplitterResize = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:treeTableToggleEvent treeTableToggleEvent} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Event fired when toggle node of the tree table.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.attachTreeTableToggleEvent = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:verticalScroll verticalScroll} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartBase</code> itself.
 * 
 * Vertical (row axis) scroll.
 * 
 * If the vertical scroll bar exists and synchronization is needed with other Gantt charts in the container, use this event.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartBase</code> itself
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 * @deprecated As of version 1.44
 * 
 */
sap.gantt.GanttChartBase.prototype.attachVerticalScroll = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Binds aggregation {@link #getAdhocLines adhocLines} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.bindAdhocLines = function(oBindingInfo) { return new sap.gantt.GanttChartBase(); };

/**
 * Binds aggregation {@link #getAxisTimeStrategy axisTimeStrategy} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.bindAxisTimeStrategy = function(oBindingInfo) { return new sap.gantt.GanttChartBase(); };

/**
 * Binds aggregation {@link #getCalendarDef calendarDef} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.bindCalendarDef = function(oBindingInfo) { return new sap.gantt.GanttChartBase(); };

/**
 * Binds aggregation {@link #getRelationships relationships} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.bindRelationships = function(oBindingInfo) { return new sap.gantt.GanttChartBase(); };

/**
 * Binds aggregation {@link #getRows rows} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.bindRows = function(oBindingInfo) { return new sap.gantt.GanttChartBase(); };

/**
 * Deselects a group of relationships specified by the aId array.
 * 
 * @param {array} [aId] List of IDs of the relationships to deselect
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.deselectRelationships = function(aId) { return new sap.gantt.GanttChartBase(); };

/**
 * Deselects a group of rows specified by the aId array.
 * 
 * @param {array} [aId] List of the rows that you want to deselect
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.deselectRows = function(aId) { return new sap.gantt.GanttChartBase(); };

/**
 * Deselects a group of shapes specified by the aId array.
 * 
 * @param {array} [aId] List of IDs of the shapes to deselect
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.deselectShapes = function(aId) { return new sap.gantt.GanttChartBase(); };

/**
 * Destroys all the adhocLines in the aggregation {@link #getAdhocLines adhocLines}.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.destroyAdhocLines = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Destroys the axisTimeStrategy in the aggregation {@link #getAxisTimeStrategy axisTimeStrategy}.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.destroyAxisTimeStrategy = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Destroys the calendarDef in the aggregation {@link #getCalendarDef calendarDef}.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.destroyCalendarDef = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Destroys all the relationships in the aggregation {@link #getRelationships relationships}.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.destroyRelationships = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Destroys all the rows in the aggregation {@link #getRows rows}.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.destroyRows = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chartClick chartClick} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachChartClick = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chartDoubleClick chartDoubleClick} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachChartDoubleClick = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chartDragEnter chartDragEnter} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachChartDragEnter = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chartDragLeave chartDragLeave} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachChartDragLeave = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chartMouseOver chartMouseOver} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachChartMouseOver = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:chartRightClick chartRightClick} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachChartRightClick = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:ganttChartSwitchRequested ganttChartSwitchRequested} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachGanttChartSwitchRequested = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:horizontalScroll horizontalScroll} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachHorizontalScroll = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:relationshipSelectionChange relationshipSelectionChange} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachRelationshipSelectionChange = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:rowSelectionChange rowSelectionChange} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachRowSelectionChange = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:shapeDragEnd shapeDragEnd} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachShapeDragEnd = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:shapeSelectionChange shapeSelectionChange} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachShapeSelectionChange = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:splitterResize splitterResize} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachSplitterResize = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:treeTableToggleEvent treeTableToggleEvent} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachTreeTableToggleEvent = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:verticalScroll verticalScroll} event of this <code>sap.gantt.GanttChartBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.detachVerticalScroll = function(fnFunction,oListener) { return new sap.gantt.GanttChartBase(); };

/**
 * Expands the Gantt chart to the given level.
 * 
 * @see sap.ui.table.TreeTable.expandToLevel
 * 
 * @param {int} iLevel
 *         Level to be expanded to
 * @return {sap.gantt.GanttChartBase} Reference to the GanttChart control, which can be used for chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.expandToLevel = function(iLevel) { return new sap.gantt.GanttChartBase(); };

/**
 * Creates a new subclass of class sap.gantt.GanttChartBase with name <code>sClassName</code>
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
sap.gantt.GanttChartBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:chartClick chartClick} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.objectInfo] Row object information of the current mouse point.
 * @param {object} [mParameters.leadingRowInfo] Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} [mParameters.timestamp] Timestamp of the current mouse point.
 * @param {string} [mParameters.svgId] ID of SVG.
 * @param {int[]} [mParameters.svgCoordinate] [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} [mParameters.effectingMode] Effective mode. It can be the current Gantt Chart mode or the mode derived from the chart scheme mode.
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireChartClick = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:chartDoubleClick chartDoubleClick} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.objectInfo] Row object information of the current mouse point.
 * @param {object} [mParameters.leadingRowInfo] Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} [mParameters.timestamp] Timestamp of the current mouse point.
 * @param {string} [mParameters.svgId] ID of SVG.
 * @param {int[]} [mParameters.svgCoordinate] [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} [mParameters.effectingMode] Effective mode. It can be the current Gantt Chart mode or the mode derived from the chart scheme mode.
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireChartDoubleClick = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:chartDragEnter chartDragEnter} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originEvent] 
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireChartDragEnter = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:chartDragLeave chartDragLeave} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originEvent] 
 * @param {object} [mParameters.draggingSource] 
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireChartDragLeave = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:chartMouseOver chartMouseOver} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.objectInfo] Row object information of the current mouse point.
 * @param {object} [mParameters.leadingRowInfo] Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} [mParameters.timestamp] Timestamp of the current mouse point.
 * @param {string} [mParameters.svgId] ID of SVG.
 * @param {int[]} [mParameters.svgCoordinate] [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} [mParameters.effectingMode] Effective mode. It can be the current Gantt Chart mode or the mode derived from the chart scheme mode.
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireChartMouseOver = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:chartRightClick chartRightClick} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.objectInfo] Row object information of the current mouse point.
 * @param {object} [mParameters.leadingRowInfo] Leading row object information. null when it is the main row at current mouse point; main row information if it is one of multiple expanded rows.
 * @param {string} [mParameters.timestamp] Timestamp of the current mouse point.
 * @param {string} [mParameters.svgId] ID of SVG.
 * @param {int[]} [mParameters.svgCoordinate] [x, y] Coordinate of the current mouse point in the SVG coordinate system.
 * @param {string} [mParameters.effectingMode] Effective mode. It can be the current Gantt Chart mode or a mode derived from the chart scheme mode.
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireChartRightClick = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:ganttChartSwitchRequested ganttChartSwitchRequested} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.hierarchyKey] Target hierarchy key.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireGanttChartSwitchRequested = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:horizontalScroll horizontalScroll} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.scrollSteps] Scroll steps.
 * @param {string} [mParameters.startTime] The start time of Gantt Chart visible area when the event fired
 * @param {string} [mParameters.endTime] The end time of Gantt Chart visible area when the event fired
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 * @deprecated As of version 1.44
 * 
 */
sap.gantt.GanttChartBase.prototype.fireHorizontalScroll = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:relationshipSelectionChange relationshipSelectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireRelationshipSelectionChange = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireRowSelectionChange = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:shapeDragEnd shapeDragEnd} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * @param {object[]} [mParameters.sourceShapeData] List of source shape data.
 * @param {string} [mParameters.sourceSvgId] Source SVG ID.
 * @param {object[]} [mParameters.targetData] List of target shape data. Sorted by shape level.
 * @param {string} [mParameters.targetSvgId] Target SVG ID.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireShapeDragEnd = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:shapeSelectionChange shapeSelectionChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.originEvent] Original JQuery event object.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireShapeSelectionChange = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:splitterResize splitterResize} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] ID of the source control.
 * @param {int[]} [mParameters.oldSizes] Old size in the form of [height, width].
 * @param {int[]} [mParameters.newSizes] New size in the form of [height, width].
 * @param {object} [mParameters.zoomInfo] Zoom information.
 * 
 * This object contains all related information for the listener to get the current zoom level of the time axis.
 * Usually <code>zoomInfo</code> contains the following information:
 * <ul>
 * 	<li><code>"base"</code> - Base for zooming calculation.
 * 		<ul>
 * 			<li><code>"sGranularity"</code>: "4day", - Zoom level that is used to calculate the zoom base; it is taken from timeAxis.granularity.</li>
 * 			<li><code>"fScale"</code>: 3840000 - Base scale determined by zoomStrategy level and now().</li>
 * 		</ul>
 * 	</li>
 * 	<li><code>"determinedByConfig"</code> - Zoom level calculated by configuration <code>timeAxis</code>.
 * 		<ul>
 * 			<li><code>"fRate"</code>: 1, - Zoom rate determined by configuration timeAxis.granularity.</li>
 * 			<li><code>"fMaxRate"</code>: 384, - Maximum zoom rate determined by configuration timeAxis.finestGranularity.</li>
 * 			<li><code>"fMinRate"</code>: 0.02197802197802198 - Minimum zoom rate determined by configuration timeAxis.coarsestGranularity.</li>
 * 		</ul>
 * 	</li>
 * 	<li><code>"determinedByChartWidth"</code> - Zoom level calculated by the SVG width.
 * 		<ul>
 * 			<li><code>"fMinRate"</code>: 0.0279009617614573, - Minimum zoom rate determined by the chart width and configuration timeAxis.planHorizon.</li>
 * 			<li><code>"fSuitableRate"</code>: 0.5078804440909039 - Suitable zoom rate determined by the chart width and configuration timeAxis.initHorizon.</li>
 * 		</ul>					 
 * 	</li>
 * 	<li><code>iChartWidth</code>: 417 - Chart width in pixel.</li>
 * </ul>
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireSplitterResize = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:treeTableToggleEvent treeTableToggleEvent} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.rowIndex] The index of the expanded/collapsed row.
 * @param {object} [mParameters.rowContext] The binding context of the selected row.
 * @param {boolean} [mParameters.expanded] flag whether the node has been expanded or collapsed.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.fireTreeTableToggleEvent = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Fires event {@link #event:verticalScroll verticalScroll} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.scrollSteps] Scroll steps.
 * 
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 * @deprecated As of version 1.44
 * 
 */
sap.gantt.GanttChartBase.prototype.fireVerticalScroll = function(mParameters) { return new sap.gantt.GanttChartBase(); };

/**
 * Gets current value of property {@link #getAdhocLineLayer adhocLineLayer}.
 * 
 * Specifies on which layer adhoc lines reside. By default, adhoc lines are on top of all other shapes and patterns.
 * 
 * Default value is <code>sap.gantt.AdhocLineLayer.Top</code>.
 * @returns {string} Value of property <code>adhocLineLayer</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getAdhocLineLayer = function() { return ""; };

/**
 * Gets content of aggregation {@link #getAdhocLines adhocLines}.
 * 
 * The aggregation is used to store configuration of adhoc lines, adhoc lines represent milestones and events in axis time.
 * 
 * @returns {sap.gantt.AdhocLine[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getAdhocLines = function() { return new Array(); };

/**
 * Gets the selected rows, shapes, and relationships.
 * 
 * @return {object} The returned object contains row data for all selected rows, shape data for all selected shapes, and relationship 
 * data for all selected relationships.
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getAllSelections = function() { return new Object(); };

/**
 * Provides the Ordinal Axis that is used to draw the SVG graphic.
 * 
 * This method is intended to allow access to the ordinal axis. Do not change the ordinal axis.
 * All subclasses must provide implementations.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Returns the axis ordinal instance.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getAxisOrdinal = function() { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Provides the Time Axis that is used to draw the SVG graphic.
 * 
 * This method is intended to allow access to the time axis. Do not change the time axis.
 * All subclasses must provide implementations.
 * 
 * @return {sap.gantt.misc.AxisTime} Returns the axis time instance.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getAxisTime = function() { return new sap.gantt.misc.AxisTime(); };

/**
 * Gets content of aggregation {@link #getAxisTimeStrategy axisTimeStrategy}.
 * 
 * This aggregation controls the zoom strategies and zoom rate in Gantt Chart.
 * 
 * @returns {sap.gantt.axistime.AxisTimeStrategyBase}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getAxisTimeStrategy = function() { return new sap.gantt.axistime.AxisTimeStrategyBase(); };

/**
 * Gets current value of property {@link #getBaseRowHeight baseRowHeight}.
 * 
 * @returns {int} Value of property <code>baseRowHeight</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getBaseRowHeight = function() { return 0; };

/**
 * Gets content of aggregation {@link #getCalendarDef calendarDef}.
 * 
 * Paint servers consumed by special shape <code>sap.gantt.shape.cal.Calendar</code>.
 * 
 * This aggregation is designed to improve performance of calendar shapes. Rows usually share a similar definition with calendar shapes.
 * It is possible to define a Calendar paint server to draw only one rectangle for each row. Notes for classes extended from
 * <code>sap.gantt.def.cal.CalendarDef</code>: Different from property <code>paintServerDefs</code>, paint servers defined here must
 * implement method <code>getDefNode()</code> instead of method <code>getDefString()</code>.
 * 
 * @returns {sap.gantt.def.cal.CalendarDefs}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getCalendarDef = function() { return new sap.gantt.def.cal.CalendarDefs(); };

/**
 * Gets current value of property {@link #getChartSchemes chartSchemes}.
 * 
 * Configuration of chart schemes.
 * 
 * List of available chart schemes. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ChartScheme[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CHART_SCHEMES</code>.
 * @returns {object[]} Value of property <code>chartSchemes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getChartSchemes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEnableAdhocLine enableAdhocLine}.
 * 
 * Switch to show and hide adhoc lines representing milestones and events along the time axis
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableAdhocLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getEnableAdhocLine = function() { return false; };

/**
 * Gets current value of property {@link #getEnableCursorLine enableCursorLine}.
 * 
 * Switch to show and hide the cursor line that follows the cursor.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableCursorLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getEnableCursorLine = function() { return false; };

/**
 * Gets current value of property {@link #getEnableNowLine enableNowLine}.
 * 
 * Switch to show and hide the present time indicator
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableNowLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getEnableNowLine = function() { return false; };

/**
 * Gets current value of property {@link #getEnableVerticalLine enableVerticalLine}.
 * 
 * Switch to show and hide vertical lines representing intervals along the time axis
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableVerticalLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getEnableVerticalLine = function() { return false; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of the control.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getHierarchies hierarchies}.
 * 
 * Configuration of hierarchies.
 * 
 * List of available hierarchies. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Hierarchy[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHYS</code>.
 * @returns {object[]} Value of property <code>hierarchies</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getHierarchies = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHierarchyKey hierarchyKey}.
 * 
 * Current hierarchy key referencing from configuration property <code>hierarchies</code>.
 * 
 * If <code>source select group</code> is enabled in the Gantt chart toolbar, the current hierarchy name referenced from <code>hierarchies</code>
 * by this property is shown.
 * For applications that do not require this function, this property can be ignored and a default value is used.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code>.
 * @returns {string} Value of property <code>hierarchyKey</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getHierarchyKey = function() { return ""; };

/**
 * Gets current value of property {@link #getLocale locale}.
 * 
 * Configuration of locale settings.
 * 
 * Most locale settings can be configured in sap.ui.configuration objects. Only the time zone and day-light-saving time option
 * are provided by locale settings.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Locale</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_LOCALE_CET</code>.
 * @returns {object} Value of property <code>locale</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getLocale = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.gantt.GanttChartBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.GanttChartBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMode mode}.
 * 
 * Current mode of the Gantt chart.
 * 
 * If no value is provided, GanttChart uses a default mode key.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @returns {string} Value of property <code>mode</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getMode = function() { return ""; };

/**
 * Gets current value of property {@link #getModes modes}.
 * 
 * Configuration of available modes.
 * 
 * List of available modes. To apply modes to toolbar and shapes, further configuration is needed. If not provided, a default
 * configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Mode[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODES</code>.
 * @returns {object[]} Value of property <code>modes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getModes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getObjectTypes objectTypes}.
 * 
 * Configuration of object types.
 * 
 * List of available object types. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ObjectType[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_OBJECT_TYPES</code>.
 * @returns {object[]} Value of property <code>objectTypes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getObjectTypes = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getRelationships relationships}.
 * 
 * Relationships of shapes carried by rows.
 * 
 * Similar to rows, this aggregation does not request templates either. Relationships are a special shape with a category of 
 * <code>"crossRowShape"</code>. How relationships are drawn is also specified in configuration property <code>shapes</code>.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getRelationships = function() { return new Array(); };

/**
 * Gets a row object by the corresponding shape UID.
 * 
 * @param {string} [sShapeUid] Shape UID
 * @return {object} Row object
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getRowByShapeUid = function(sShapeUid) { return new Object(); };

/**
 * Gets content of aggregation {@link #getRows rows}.
 * 
 * Rows of <code>sap.gantt.GanttChartBase</code>
 * 
 * This aggregation is delegated to <code>sap.gantt.table.TreeTable</code>. Rows are provide a base for
 * shapes with a category of <code>"InRowShape"</code>. The configuration in property <code>shapes</code>
 * determines how the shapes are drawn.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getRows = function() { return new Array(); };

/**
 * Gets all the selected relationships.
 * 
 * @return {array} selected relationships
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getSelectedRelationships = function() { return null; };

/**
 * Selects shape data or row data by UI ID (UID).
 * 
 * UID is generated by Gantt Chart to identify the appearance of shape data and row data. You can retrieve UIDs by certain events.
 * The current implementation only supports shape selection by UID.
 * 
 * @param {aUid} Array of the UIDs of the UI elements to be selected
 * @public
 * Gets the selected rows.
 * 
 * @return {array} Row data of the selected rows
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getSelectedRows = function(Array) { return null; };

/**
 * Gets the shape data of the selected shapes.
 * 
 * @return {array} Selected shapes. The returned structure is shown as below.
 * {
 *     "shapeDataName1": [oShapeData1, oShapeData2, ...]
 *     "shapeDataName2": [oShapeData3, oShapeData3, ...]
 *     ...
 * }
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getSelectedShapes = function() { return null; };

/**
 * Gets current value of property {@link #getSelectionMode selectionMode}.
 * 
 * Selection mode for GanttChart
 * 
 * This property controls whether multiToggle or multi-selection mode is enabled for the tree table and
 * for shapes. It may also affect the visual appearance, such as whether check boxes are available for selection.
 * From version 1.40 to upper versions, multi is replaced by multiToggle selection mode in tree table
 * 
 * Default value is <code>MultiWithKeyboard</code>.
 * @returns {sap.gantt.SelectionMode} Value of property <code>selectionMode</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getSelectionMode = function() { return new sap.gantt.SelectionMode(); };

/**
 * Gets current value of property {@link #getSelectionPanelSize selectionPanelSize}.
 * 
 * If the implementation contains a selection panel, this is the initial width.
 * 
 * In the current library, <code>sap.gantt.GanttChart</code> does not have a selection panel. 
 * <code>sap.gantt.GanttChart</code> has a selection panel implemented by <code>sap.ui.table.TreeTable</code>.
 * 
 * Default value is <code>30%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>selectionPanelSize</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getSelectionPanelSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getShapeDataNames shapeDataNames}.
 * 
 * Configuration of shape data names and the attribute in raw data that serves as 'id'.
 * 
 * This property value should be an array, either an array of string, each string represents one available shape data name, or an array of object, each object specifies the shape data name
 * and data attribute that will serves as 'id'.
 * This configuration must be provided if SVG graphics are needed.
 * 
 * Default value is <code>[]</code>.
 * @returns {sap.gantt.GenericArray} Value of property <code>shapeDataNames</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getShapeDataNames = function() { return new sap.gantt.GenericArray(); };

/**
 * Gets current value of property {@link #getShapes shapes}.
 * 
 * Configuration of shape data against shape classes.
 * 
 * List of available shapes. The shapes configured in this list are initialized inside <code>sap.gantt.GanttChartBase</code>.
 * Note that for JSON data binding, this configuration supports deep structured data structures. For ODATA binding, only one level is supported.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Shape[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>[]</code>.
 * @returns {object[]} Value of property <code>shapes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getShapes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSvgDefs svgDefs}.
 * 
 * SVG reusable element definitions.
 * 
 * If this property is provided, the paint server definition of the SVG is rendered. Method <code>getDefString()</code> should be
 * implemented by all paint server classes that are passed in in this property.
 * We recommend that you set the type of this argument to <code>sap.gantt.def.SvgDefs</code>. Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>svgDefs</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getSvgDefs = function() { return new Object(); };

/**
 * Gets current value of property {@link #getTimeAxis timeAxis}.
 * 
 * Configuration of the time axis.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_TIME_AXIS</code>.
 * @returns {object} Value of property <code>timeAxis</code>
 * 
 * @deprecated As of version 1.44, replaced by aggregation 'axisTimeStrategy'.
 * Planning horizon, initial horizon, and zoom level can be configured with this property. If not provided, a default
 * configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeAxis</code>. Otherwise some properties you set may not function properly.
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getTimeAxis = function() { return new Object(); };

/**
 * Gets current value of property {@link #getTimeZoomRate timeZoomRate}.
 * 
 * Zoom level in float.
 * 
 * This property allows application developers to control the zoom level. 
 * When GanttChart is embedded in <code>sap.gantt.GanttChartContainer</code>, you do not have to manage this property.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>timeZoomRate</code>
 * 
 * @deprecated As of version 1.44, please use sap.gantt.axistime.AxisTimeStrategy to change the zoom rate
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getTimeZoomRate = function() { return 0.0; };

/**
 * Gets current value of property {@link #getToolbarSchemes toolbarSchemes}.
 * 
 * Configuration of toolbar schemes.
 * 
 * List of available toolbar schemes. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarScheme[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEMES</code>.
 * @returns {object[]} Value of property <code>toolbarSchemes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getToolbarSchemes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the control.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Default event handler for the internal event expandChartChange from global TOOLBAR.
 * 
 * @param {boolean} bExpanded expand or collapse the selected row
 * @param {array} aChartSchemes bound chart scheme
 * @param {array} aSelectedIndices user selected row indices
 * 
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.handleExpandChartChange = function(bExpanded,aChartSchemes,aSelectedIndices) {  };

/**
 * Checks for the provided <code>sap.gantt.AdhocLine</code> in the aggregation {@link #getAdhocLines adhocLines}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.gantt.AdhocLine}
 *           oAdhocLine The adhocLine whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.indexOfAdhocLine = function(oAdhocLine) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getRelationships relationships}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oRelationship The relationship whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.indexOfRelationship = function(oRelationship) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getRows rows}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oRow The row whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.indexOfRow = function(oRow) { return 0; };

/**
 * Initializes the GanttChart instance after creation.
 * 
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.init = function() {  };

/**
 * Inserts a adhocLine into the aggregation {@link #getAdhocLines adhocLines}.
 * 
 * @param {sap.gantt.AdhocLine}
 *            oAdhocLine the adhocLine to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the adhocLine should be inserted at; for
 *              a negative value of <code>iIndex</code>, the adhocLine is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the adhocLine is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.insertAdhocLine = function(oAdhocLine,iIndex) { return new sap.gantt.GanttChartBase(); };

/**
 * Inserts a relationship into the aggregation {@link #getRelationships relationships}.
 * 
 * @param {sap.ui.core.Control}
 *            oRelationship the relationship to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the relationship should be inserted at; for
 *              a negative value of <code>iIndex</code>, the relationship is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the relationship is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.insertRelationship = function(oRelationship,iIndex) { return new sap.gantt.GanttChartBase(); };

/**
 * Inserts a row into the aggregation {@link #getRows rows}.
 * 
 * @param {sap.ui.core.Control}
 *            oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the row should be inserted at; for
 *              a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the row is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.insertRow = function(oRow,iIndex) { return new sap.gantt.GanttChartBase(); };

/**
 * Jumps to a given time.
 * 
 * This method sets the position of the visible area to a certain timestamp. It can be used to implement the function of
 * Jump To First, Jump To Last, and Jump To Current.
 * 
 * A Redraw of SVG is triggered.
 * 
 * @param {timestamp} vDate Accepted value is a 14-digit timestamp or a Date object.
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.jumpToPosition = function(vDate) {  };

/**
 * Notifies that the data source has changed.
 * 
 * @protected
 * 
 */
sap.gantt.GanttChartBase.prototype.notifySourceChange = function() {  };

/**
 * Removes a adhocLine from the aggregation {@link #getAdhocLines adhocLines}.
 * 
 * @param {int | string | sap.gantt.AdhocLine} vAdhocLine The adhocLine to remove or its index or id
 * @returns {sap.gantt.AdhocLine} The removed adhocLine or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.removeAdhocLine = function(vAdhocLine) { return new sap.gantt.AdhocLine(); };

/**
 * Removes all the controls from the aggregation {@link #getAdhocLines adhocLines}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.gantt.AdhocLine[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.removeAllAdhocLines = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getRelationships relationships}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.removeAllRelationships = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getRows rows}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.removeAllRows = function() { return new Array(); };

/**
 * Removes a relationship from the aggregation {@link #getRelationships relationships}.
 * 
 * @param {int | string | sap.ui.core.Control} vRelationship The relationship to remove or its index or id
 * @returns {sap.ui.core.Control} The removed relationship or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.removeRelationship = function(vRelationship) { return new sap.ui.core.Control(); };

/**
 * Removes a row from the aggregation {@link #getRows rows}.
 * 
 * @param {int | string | sap.ui.core.Control} vRow The row to remove or its index or id
 * @returns {sap.ui.core.Control} The removed row or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.removeRow = function(vRow) { return new sap.ui.core.Control(); };

/**
 * Selects a group of relationships specified by the aId array. Alternatively, this function 
 * deselects all selected relationships if aId is a null list and bExclusive is true.
 * 
 * @param {array} [aId] List of IDs of the relationships to select
 * @param {boolean} [bExclusive] Whether or not to deselect all selected shapes when aId is null
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.selectRelationships = function(aId,bExclusive) { return new sap.gantt.GanttChartBase(); };

/**
 * Selects a group of rows specified by the aId array.
 * 
 * @param {array} [aId] List of IDs of the rows to select
 * @param {boolean} [bExclusive] Whether or not to deselect all selected rows when aId is null
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.selectRows = function(aId,bExclusive) { return new sap.gantt.GanttChartBase(); };

/**
 * Selects rows and all shapes contained in those rows specified by an array of row IDs. Alternatively, this function 
 * deselects all selected rows and shapes in those rows if the row ID array is null and bExclusive is true.
 * 
 * @param {array} [aRowId] List of IDs of the rows to select
 * @param {boolean} [bExclusive] Whether or not to deselect all selected rows and shapes when aRowId is null
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.selectRowsAndShapes = function(aRowId,bExclusive) { return new sap.gantt.GanttChartBase(); };

/**
 * Selects a group of shapes specified by the aId array. Alternatively, this function 
 * deselects all selected shapes when aId is a null list and bExclusive is true.
 * 
 * @param {array} [aId] List of the IDs of the shapes to select
 * @param {boolean} [bExclusive] Whether or not to deselect all selected shapes when aId is null
 * @return {sap.gantt.GanttChartBase} Gantt Chart instance
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.selectShapes = function(aId,bExclusive) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getAdhocLineLayer adhocLineLayer}.
 * 
 * Specifies on which layer adhoc lines reside. By default, adhoc lines are on top of all other shapes and patterns.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.AdhocLineLayer.Top</code>.
 * @param {string} sAdhocLineLayer New value for property <code>adhocLineLayer</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setAdhocLineLayer = function(sAdhocLineLayer) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets the aggregated {@link #getAxisTimeStrategy axisTimeStrategy}.
 * @param {sap.gantt.axistime.AxisTimeStrategyBase} oAxisTimeStrategy The axisTimeStrategy to set
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setAxisTimeStrategy = function(oAxisTimeStrategy) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getBaseRowHeight baseRowHeight}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iBaseRowHeight New value for property <code>baseRowHeight</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setBaseRowHeight = function(iBaseRowHeight) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets the aggregated {@link #getCalendarDef calendarDef}.
 * @param {sap.gantt.def.cal.CalendarDefs} oCalendarDef The calendarDef to set
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setCalendarDef = function(oCalendarDef) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getChartSchemes chartSchemes}.
 * 
 * Configuration of chart schemes.
 * 
 * List of available chart schemes. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ChartScheme[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CHART_SCHEMES</code>.
 * @param {object[]} sChartSchemes New value for property <code>chartSchemes</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setChartSchemes = function(sChartSchemes) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getEnableAdhocLine enableAdhocLine}.
 * 
 * Switch to show and hide adhoc lines representing milestones and events along the time axis
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableAdhocLine New value for property <code>enableAdhocLine</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setEnableAdhocLine = function(bEnableAdhocLine) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getEnableCursorLine enableCursorLine}.
 * 
 * Switch to show and hide the cursor line that follows the cursor.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableCursorLine New value for property <code>enableCursorLine</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setEnableCursorLine = function(bEnableCursorLine) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getEnableNowLine enableNowLine}.
 * 
 * Switch to show and hide the present time indicator
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableNowLine New value for property <code>enableNowLine</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setEnableNowLine = function(bEnableNowLine) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getEnableVerticalLine enableVerticalLine}.
 * 
 * Switch to show and hide vertical lines representing intervals along the time axis
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableVerticalLine New value for property <code>enableVerticalLine</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setEnableVerticalLine = function(bEnableVerticalLine) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setHeight = function(sHeight) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getHierarchies hierarchies}.
 * 
 * Configuration of hierarchies.
 * 
 * List of available hierarchies. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Hierarchy[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHYS</code>.
 * @param {object[]} sHierarchies New value for property <code>hierarchies</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setHierarchies = function(sHierarchies) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getHierarchyKey hierarchyKey}.
 * 
 * Current hierarchy key referencing from configuration property <code>hierarchies</code>.
 * 
 * If <code>source select group</code> is enabled in the Gantt chart toolbar, the current hierarchy name referenced from <code>hierarchies</code>
 * by this property is shown.
 * For applications that do not require this function, this property can be ignored and a default value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code>.
 * @param {string} sHierarchyKey New value for property <code>hierarchyKey</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setHierarchyKey = function(sHierarchyKey) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getLocale locale}.
 * 
 * Configuration of locale settings.
 * 
 * Most locale settings can be configured in sap.ui.configuration objects. Only the time zone and day-light-saving time option
 * are provided by locale settings.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Locale</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_LOCALE_CET</code>.
 * @param {object} oLocale New value for property <code>locale</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setLocale = function(oLocale) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getMode mode}.
 * 
 * Current mode of the Gantt chart.
 * 
 * If no value is provided, GanttChart uses a default mode key.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODE_KEY</code>.
 * @param {string} sMode New value for property <code>mode</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setMode = function(sMode) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getModes modes}.
 * 
 * Configuration of available modes.
 * 
 * List of available modes. To apply modes to toolbar and shapes, further configuration is needed. If not provided, a default
 * configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Mode[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODES</code>.
 * @param {object[]} sModes New value for property <code>modes</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setModes = function(sModes) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getObjectTypes objectTypes}.
 * 
 * Configuration of object types.
 * 
 * List of available object types. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ObjectType[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_OBJECT_TYPES</code>.
 * @param {object[]} sObjectTypes New value for property <code>objectTypes</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setObjectTypes = function(sObjectTypes) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getSelectionMode selectionMode}.
 * 
 * Selection mode for GanttChart
 * 
 * This property controls whether multiToggle or multi-selection mode is enabled for the tree table and
 * for shapes. It may also affect the visual appearance, such as whether check boxes are available for selection.
 * From version 1.40 to upper versions, multi is replaced by multiToggle selection mode in tree table
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>MultiWithKeyboard</code>.
 * @param {sap.gantt.SelectionMode} sSelectionMode New value for property <code>selectionMode</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setSelectionMode = function(sSelectionMode) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getSelectionPanelSize selectionPanelSize}.
 * 
 * If the implementation contains a selection panel, this is the initial width.
 * 
 * In the current library, <code>sap.gantt.GanttChart</code> does not have a selection panel. 
 * <code>sap.gantt.GanttChart</code> has a selection panel implemented by <code>sap.ui.table.TreeTable</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>30%</code>.
 * @param {sap.ui.core.CSSSize} sSelectionPanelSize New value for property <code>selectionPanelSize</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setSelectionPanelSize = function(sSelectionPanelSize) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getShapeDataNames shapeDataNames}.
 * 
 * Configuration of shape data names and the attribute in raw data that serves as 'id'.
 * 
 * This property value should be an array, either an array of string, each string represents one available shape data name, or an array of object, each object specifies the shape data name
 * and data attribute that will serves as 'id'.
 * This configuration must be provided if SVG graphics are needed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {sap.gantt.GenericArray} sShapeDataNames New value for property <code>shapeDataNames</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setShapeDataNames = function(sShapeDataNames) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getShapes shapes}.
 * 
 * Configuration of shape data against shape classes.
 * 
 * List of available shapes. The shapes configured in this list are initialized inside <code>sap.gantt.GanttChartBase</code>.
 * Note that for JSON data binding, this configuration supports deep structured data structures. For ODATA binding, only one level is supported.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Shape[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {object[]} sShapes New value for property <code>shapes</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setShapes = function(sShapes) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getSvgDefs svgDefs}.
 * 
 * SVG reusable element definitions.
 * 
 * If this property is provided, the paint server definition of the SVG is rendered. Method <code>getDefString()</code> should be
 * implemented by all paint server classes that are passed in in this property.
 * We recommend that you set the type of this argument to <code>sap.gantt.def.SvgDefs</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oSvgDefs New value for property <code>svgDefs</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setSvgDefs = function(oSvgDefs) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getTimeAxis timeAxis}.
 * 
 * Configuration of the time axis.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_TIME_AXIS</code>.
 * @param {object} oTimeAxis New value for property <code>timeAxis</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44, replaced by aggregation 'axisTimeStrategy'.
 * Planning horizon, initial horizon, and zoom level can be configured with this property. If not provided, a default
 * configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.TimeAxis</code>. Otherwise some properties you set may not function properly.
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setTimeAxis = function(oTimeAxis) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getTimeZoomRate timeZoomRate}.
 * 
 * Zoom level in float.
 * 
 * This property allows application developers to control the zoom level. 
 * When GanttChart is embedded in <code>sap.gantt.GanttChartContainer</code>, you do not have to manage this property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fTimeZoomRate New value for property <code>timeZoomRate</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44, please use sap.gantt.axistime.AxisTimeStrategy to change the zoom rate
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setTimeZoomRate = function(fTimeZoomRate) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getToolbarSchemes toolbarSchemes}.
 * 
 * Configuration of toolbar schemes.
 * 
 * List of available toolbar schemes. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarScheme[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEMES</code>.
 * @param {object[]} sToolbarSchemes New value for property <code>toolbarSchemes</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setToolbarSchemes = function(sToolbarSchemes) { return new sap.gantt.GanttChartBase(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.setWidth = function(sWidth) { return new sap.gantt.GanttChartBase(); };

/**
 * Unbinds aggregation {@link #getAdhocLines adhocLines} from model data.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.unbindAdhocLines = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Unbinds aggregation {@link #getAxisTimeStrategy axisTimeStrategy} from model data.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.unbindAxisTimeStrategy = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Unbinds aggregation {@link #getCalendarDef calendarDef} from model data.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.unbindCalendarDef = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Unbinds aggregation {@link #getRelationships relationships} from model data.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.unbindRelationships = function() { return new sap.gantt.GanttChartBase(); };

/**
 * Unbinds aggregation {@link #getRows rows} from model data.
 * @returns {sap.gantt.GanttChartBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartBase.prototype.unbindRows = function() { return new sap.gantt.GanttChartBase(); };


// ---- sap.gantt.GanttChartContainer --------------------------------------------------------------------------

/**
 * Creates and initializes a new Gantt chart container.
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
 * <li>{@link #getEnableTimeScrollSync enableTimeScrollSync} : boolean (default: true)</li>
 * <li>{@link #getEnableCursorLine enableCursorLine} : boolean (default: true)</li>
 * <li>{@link #getEnableNowLine enableNowLine} : boolean (default: true)</li>
 * <li>{@link #getEnableVerticalLine enableVerticalLine} : boolean (default: true)</li>
 * <li>{@link #getEnableAdhocLine enableAdhocLine} : boolean (default: true)</li>
 * <li>{@link #getSvgDefs svgDefs} : object</li>
 * <li>{@link #getModes modes} : object[] (default: sap.gantt.config.DEFAULT_MODES)</li>
 * <li>{@link #getToolbarSchemes toolbarSchemes} : object[] (default: sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEMES)</li>
 * <li>{@link #getHierarchies hierarchies} : object[] (default: sap.gantt.config.DEFAULT_HIERARCHYS)</li>
 * <li>{@link #getContainerLayouts containerLayouts} : object[] (default: sap.gantt.config.DEFAULT_CONTAINER_LAYOUTS)</li>
 * <li>{@link #getContainerLayoutKey containerLayoutKey} : string (default: sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY)</li>
 * <li>{@link #getSliderStep sliderStep} : int</li>
 * <li>{@link #getMaxNumOfGanttCharts maxNumOfGanttCharts} : int (default: 3)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLegendContainer legendContainer} : sap.gantt.legend.LegendContainer</li>
 * <li>{@link #getCustomToolbarItems customToolbarItems} : sap.ui.core.Control[]</li>
 * <li>{@link #getGanttCharts ganttCharts} : sap.gantt.GanttChartBase[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ganttChartChangeRequested ganttChartChangeRequested} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:customSettingChange customSettingChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:treeTableToggleEvent treeTableToggleEvent} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A container that holds one or more <code>GanttChartBase</code> instances.
 * 
 * <p> This class has several built-in several controls to support <code>GanttChartBase</code> instances:
 *  <ul>
 * 		<li>A toolbar above all Gantt Charts. Many built-in controls can be enabled or disabled using configuration property <code>toolbarScheme</code>. Built-in functions include:
 * 			<ul>
 * 				<li>ComboBox for container selection</li>
 * 				<li>Buttons for Add View, Delete View, and Switch Splitter Orientation</li>
 * 				<li>Expand/Collapse groups for expandable charts</li>
 * 				<li>A zooming slider</li>
 * 				<li>A legend button</li>
 * 				<li>A Settings button</li>
 * 			</ul>
 * 			If nothing is added to the toolbar, the toolbar is hidden automatically. For more information about the functions and configuration, 
 * 			see the API documentation of <code>sap.gantt.config.ToolbarScheme.</code>
 * 		</li>
 * 		<li>A Splitter containing aggregation <code>ganttCharts</code></li>
 *  </ul>
 * </p>
 * 
 * @extend sap.ui.core.Control
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer = function(sId,mSettings) {};
/**
 * Event fired when the custom settings are changed.
 * 
 * The Custom settings are application-injected settings that can be configured in the Settings dialog box. This event allows the application to handle these settings.
 * Only check boxes are supported.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id ID of the custom setting
 * @param {boolean} oControlEvent.getParameters.value The value of the custom setting
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.customSettingChange = function(oControlEvent) {  };

/**
 * Event fired when any change occurs in the toolbar that requests the application to change aggregation <code>ganttCharts</code>. 
 * 
 * <p>Possible triggers are:
 * <ul>
 * 	<li>The source selection group changes in the container toolbar.</li>
 * 	<li>The layout group button is clicked in the container toolbar.</li>
 * 	<li>The source selection group changes in the Gantt chart toolbar.</li>
 * </ul>
 * </p>
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.action Action that caused the change.
 * 
 * <p>Possible action values are:
 * <ul>
 * 	<li><code>'switchGanttChart'</code>: The source selection group of one Gantt chart toolbar is changed.</li>
 * 	<li><code>'addGanttChart'</code>: The Add Gantt chart dropdown menu is selected.</li>
 *  <li><code>'lessGanttChart'</code>: The Less Gantt chart dropdown menu is selected.</li>
 *  <li><code>'switchContainerLayout'</code>: The source selection group of the Container toolbar is changed.</li>
 * </ul>
 * </p>
 * @param {int} oControlEvent.getParameters.ganttChartIndex Provided for actions <code>'switchGanttChart'</code> and <code>'lessGanttChart'</code>.
 * @param {string} oControlEvent.getParameters.hierarchyKey Provided for actions <code>'switchGanttChart'</code>, <code>'addGanttChart'</code> and <code>'lessGanttChart'</code>.
 * @param {string} oControlEvent.getParameters.oldHierarchyKey Provided for action <code>'switchGanttChart'</code>.
 * @param {string} oControlEvent.getParameters.containerLayoutKey Provided for action <code>'switchContainerLayout'</code>.
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.ganttChartChangeRequested = function(oControlEvent) {  };

/**
 * Event fired when toggle node of the tree table.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.rowIndex The index of the expanded/collapsed row.
 * @param {object} oControlEvent.getParameters.rowContext The binding context of the selected row.
 * @param {boolean} oControlEvent.getParameters.expanded flag whether the node has been expanded or collapsed.
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.treeTableToggleEvent = function(oControlEvent) {  };

/**
 * Adds some customToolbarItem to the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * @param {sap.ui.core.Control}
 *            oCustomToolbarItem the customToolbarItem to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.addCustomToolbarItem = function(oCustomToolbarItem) { return new sap.gantt.GanttChartContainer(); };

/**
 * Adds some ganttChart to the aggregation {@link #getGanttCharts ganttCharts}.
 * @param {sap.gantt.GanttChartBase}
 *            oGanttChart the ganttChart to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.addGanttChart = function(oGanttChart) { return new sap.gantt.GanttChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:customSettingChange customSettingChange} event of this <code>sap.gantt.GanttChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartContainer</code> itself.
 * 
 * Event fired when the custom settings are changed.
 * 
 * The Custom settings are application-injected settings that can be configured in the Settings dialog box. This event allows the application to handle these settings.
 * Only check boxes are supported.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartContainer</code> itself
 * 
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.attachCustomSettingChange = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:ganttChartChangeRequested ganttChartChangeRequested} event of this <code>sap.gantt.GanttChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartContainer</code> itself.
 * 
 * Event fired when any change occurs in the toolbar that requests the application to change aggregation <code>ganttCharts</code>. 
 * 
 * <p>Possible triggers are:
 * <ul>
 * 	<li>The source selection group changes in the container toolbar.</li>
 * 	<li>The layout group button is clicked in the container toolbar.</li>
 * 	<li>The source selection group changes in the Gantt chart toolbar.</li>
 * </ul>
 * </p>
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartContainer</code> itself
 * 
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.attachGanttChartChangeRequested = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:treeTableToggleEvent treeTableToggleEvent} event of this <code>sap.gantt.GanttChartContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.GanttChartContainer</code> itself.
 * 
 * Event fired when toggle node of the tree table.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.GanttChartContainer</code> itself
 * 
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.attachTreeTableToggleEvent = function(oData,fnFunction,oListener) { return new sap.gantt.GanttChartContainer(); };

/**
 * Binds aggregation {@link #getCustomToolbarItems customToolbarItems} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.bindCustomToolbarItems = function(oBindingInfo) { return new sap.gantt.GanttChartContainer(); };

/**
 * Binds aggregation {@link #getGanttCharts ganttCharts} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.bindGanttCharts = function(oBindingInfo) { return new sap.gantt.GanttChartContainer(); };

/**
 * Deselects relationships and returns a success code.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the relationships that you want to deselect
 * @param {array} [aIds] List of the relationships that you want to deselect
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.deselectRelationships = function(iGanttChartIndex,aIds) { return false; };

/**
 * Deselects rows and returns a success code.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the rows that you want to deselect
 * @param {array} [aIds] List of the rows that you want to deselect
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.deselectRows = function(iGanttChartIndex,aIds) { return false; };

/**
 * Deselects in-row shapes and returns a success code.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the shapes that you want to deselect
 * @param {array} [aIds] List of the shapes that you want to deselect
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.deselectShapes = function(iGanttChartIndex,aIds) { return false; };

/**
 * Destroys all the customToolbarItems in the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.destroyCustomToolbarItems = function() { return new sap.gantt.GanttChartContainer(); };

/**
 * Destroys all the ganttCharts in the aggregation {@link #getGanttCharts ganttCharts}.
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.destroyGanttCharts = function() { return new sap.gantt.GanttChartContainer(); };

/**
 * Destroys the legendContainer in the aggregation {@link #getLegendContainer legendContainer}.
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.destroyLegendContainer = function() { return new sap.gantt.GanttChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:customSettingChange customSettingChange} event of this <code>sap.gantt.GanttChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.detachCustomSettingChange = function(fnFunction,oListener) { return new sap.gantt.GanttChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:ganttChartChangeRequested ganttChartChangeRequested} event of this <code>sap.gantt.GanttChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.detachGanttChartChangeRequested = function(fnFunction,oListener) { return new sap.gantt.GanttChartContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:treeTableToggleEvent treeTableToggleEvent} event of this <code>sap.gantt.GanttChartContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.detachTreeTableToggleEvent = function(fnFunction,oListener) { return new sap.gantt.GanttChartContainer(); };

/**
 * Creates a new subclass of class sap.gantt.GanttChartContainer with name <code>sClassName</code>
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
sap.gantt.GanttChartContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:customSettingChange customSettingChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.id] ID of the custom setting
 * @param {boolean} [mParameters.value] The value of the custom setting
 * 
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartContainer.prototype.fireCustomSettingChange = function(mParameters) { return new sap.gantt.GanttChartContainer(); };

/**
 * Fires event {@link #event:ganttChartChangeRequested ganttChartChangeRequested} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.action] Action that caused the change.
 * 
 * <p>Possible action values are:
 * <ul>
 * 	<li><code>'switchGanttChart'</code>: The source selection group of one Gantt chart toolbar is changed.</li>
 * 	<li><code>'addGanttChart'</code>: The Add Gantt chart dropdown menu is selected.</li>
 *  <li><code>'lessGanttChart'</code>: The Less Gantt chart dropdown menu is selected.</li>
 *  <li><code>'switchContainerLayout'</code>: The source selection group of the Container toolbar is changed.</li>
 * </ul>
 * </p>
 * @param {int} [mParameters.ganttChartIndex] Provided for actions <code>'switchGanttChart'</code> and <code>'lessGanttChart'</code>.
 * @param {string} [mParameters.hierarchyKey] Provided for actions <code>'switchGanttChart'</code>, <code>'addGanttChart'</code> and <code>'lessGanttChart'</code>.
 * @param {string} [mParameters.oldHierarchyKey] Provided for action <code>'switchGanttChart'</code>.
 * @param {string} [mParameters.containerLayoutKey] Provided for action <code>'switchContainerLayout'</code>.
 * 
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartContainer.prototype.fireGanttChartChangeRequested = function(mParameters) { return new sap.gantt.GanttChartContainer(); };

/**
 * Fires event {@link #event:treeTableToggleEvent treeTableToggleEvent} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {int} [mParameters.rowIndex] The index of the expanded/collapsed row.
 * @param {object} [mParameters.rowContext] The binding context of the selected row.
 * @param {boolean} [mParameters.expanded] flag whether the node has been expanded or collapsed.
 * 
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.GanttChartContainer.prototype.fireTreeTableToggleEvent = function(mParameters) { return new sap.gantt.GanttChartContainer(); };

/**
 * Gets all selected rows and shapes, including relationships.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing that you want to get
 * @return {object} The returned object contains "rows" for all selected rows, "shapes" for all selected shapes, and "relationships" for all selected relationships
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.getAllSelections = function(iGanttChartIndex) { return new Object(); };

/**
 * Gets current value of property {@link #getContainerLayoutKey containerLayoutKey}.
 * 
 * Current container layout key.
 * 
 * This is a key configured in configuration property <code>containerLayouts</code>.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY</code>.
 * @returns {string} Value of property <code>containerLayoutKey</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getContainerLayoutKey = function() { return ""; };

/**
 * Gets current value of property {@link #getContainerLayouts containerLayouts}.
 * 
 * Configuration of container layouts.
 * 
 * This configuration affects the data source selection ComboBox in the Container Toolbar. When the selection
 * changes, the <code>ganttChartChangeRequested</code> event that is triggered includes the corresponding layout key.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ContainerLayout[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_LAYOUTS</code>.
 * @returns {object[]} Value of property <code>containerLayouts</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getContainerLayouts = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * Controls to be placed in the container toolbar.
 * 
 * <p>This aggregation is used only when the custom toolbar item group is configured to be shown in the container toolbar.
 * Different from the built-in buttons that are configured to be shown or hidden, these controls are free controls created 
 * by the application, but are only placed in the container toolbar by <code>sap.gantt.GanttChartContainer</code>.</p>
 * 
 * <p>If the source selection group is enabled and you want your application to use a container layout pre-configured 
 * for a specific source, you can implement your custom toolbar items in the event handler of event <code>ganttChartChangeRequested</code>.</p>
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getCustomToolbarItems = function() { return new Array(); };

/**
 * Gets current value of property {@link #getEnableAdhocLine enableAdhocLine}.
 * 
 * Switch to enable and disable adhoc lines representing milestones and events along the time axis.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableAdhocLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getEnableAdhocLine = function() { return false; };

/**
 * Gets current value of property {@link #getEnableCursorLine enableCursorLine}.
 * 
 * Switch to enable and disable the cursor line that follows the cursor.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableCursorLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getEnableCursorLine = function() { return false; };

/**
 * Gets current value of property {@link #getEnableNowLine enableNowLine}.
 * 
 * Switch to enable and disable the present time indicator.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableNowLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getEnableNowLine = function() { return false; };

/**
 * Gets current value of property {@link #getEnableTimeScrollSync enableTimeScrollSync}.
 * 
 * Switch to enable and disable scroll synchronization by time on instances of aggregation <code>ganttCharts</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableTimeScrollSync</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getEnableTimeScrollSync = function() { return false; };

/**
 * Gets current value of property {@link #getEnableVerticalLine enableVerticalLine}.
 * 
 * Switch to enable and disable vertical lines representing intervals along the time axis.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableVerticalLine</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getEnableVerticalLine = function() { return false; };

/**
 * Gets content of aggregation {@link #getGanttCharts ganttCharts}.
 * 
 * Gantt chart instances.
 * 
 * <p>If the source selection group is enabled and you want your application to use a container layout pre-configured 
 * for a specific source, you can implement your custom toolbar items in the event handler of event <code>ganttChartChangeRequested</code>.</p>
 * <p>Provide a Gantt chart in compliance with the container layout setting.
 * GanttChartContainer is designed to support Gantt chart layouts that include multiple views.</p>
 * 
 * @returns {sap.gantt.GanttChartBase[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getGanttCharts = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getHierarchies hierarchies}.
 * 
 * List of available hierarchies. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Hierarchy[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHYS</code>.
 * @returns {object[]} Value of property <code>hierarchies</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getHierarchies = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getLegendContainer legendContainer}.
 * 
 * Legend shown when the legend button is clicked.
 * 
 * This aggregation is used only when the Legend button is configured to be shown in the container toolbar.
 * 
 * @returns {sap.gantt.legend.LegendContainer}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getLegendContainer = function() { return new sap.gantt.legend.LegendContainer(); };

/**
 * Gets current value of property {@link #getMaxNumOfGanttCharts maxNumOfGanttCharts}.
 * 
 * Define the maximum number of Gantt charts to be displayed on the same screen. 
 * When this number is reached, the "Add Gantt Chart" button is grayed out.
 * 
 * Default value is <code>3</code>.
 * @returns {int} Value of property <code>maxNumOfGanttCharts</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getMaxNumOfGanttCharts = function() { return 0; };

/**
 * Returns a metadata object for class sap.gantt.GanttChartContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.GanttChartContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getModes modes}.
 * 
 * List of available modes. To apply modes to the toolbar and shapes, further configuration is needed. (specifically, 
 * in property <code>toolbarSchemes</code>, and properties <code>toolbarSchemes</code> and <code>shapes</code> in 
 * the <code>GanttChartBase</code> class)If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Mode[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODES</code>.
 * @returns {object[]} Value of property <code>modes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getModes = function() { return new Array(); };

/**
 * Gets the selected relationships.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the selected relationships that you want to get
 * @return {array} Returns all selected relationships in the chart
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.getSelectedRelationships = function(iGanttChartIndex) { return null; };

/**
 * Gets the selected rows.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the selected rows that you want to get
 * @return {array} Returns all selected rows
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.getSelectedRows = function(iGanttChartIndex) { return null; };

/**
 * Gets the selected in-row shapes.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the selected shapes that you want to get
 * @return {array} Returns all selected shapes in the chart
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.getSelectedShapes = function(iGanttChartIndex) { return null; };

/**
 * Gets current value of property {@link #getSliderStep sliderStep}.
 * 
 * Define the amount of units to change the time zoom slider.
 * 
 * See {@link sap.m.Slider#setStep}
 * 
 * @returns {int} Value of property <code>sliderStep</code>
 * 
 * @deprecated As of version 1.44, please set the property 'stepCountOfSlider' in sap.gantt.config.TimeZoomGroup.
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getSliderStep = function() { return 0; };

/**
 * Gets current value of property {@link #getSvgDefs svgDefs}.
 * 
 * Definitions of paint servers used for advanced shape features around SVG fill, stroke, and filter attributes.
 * 
 * If this property is provided, the paint server definition of the SVG is rendered. Method <code>getDefString()</code> should be
 * implemented by all paint server classes that are passed in in this property. It is easier to assign a common paint server definition
 * in this class instead of in separate instances of <code>sap.gantt.GanttChartBase</code>. Then the definition is 
 * rendered only once.
 * We recommend that you set the type of this argument to <code>sap.gantt.def.SvgDefs</code>. Otherwise some properties you set may not function properly.
 * 
 * @returns {object} Value of property <code>svgDefs</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getSvgDefs = function() { return new Object(); };

/**
 * Returns the current effective toolbar scheme key.
 * 
 * @returns {string} - Toolbar scheme key.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.getToolbarSchemeKey = function() { return ""; };

/**
 * Gets current value of property {@link #getToolbarSchemes toolbarSchemes}.
 * 
 * List of available toolbar schemes. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarScheme[]</code>. Otherwise some properties you set may not function properly.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEMES</code>.
 * @returns {object[]} Value of property <code>toolbarSchemes</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getToolbarSchemes = function() { return new Array(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCustomToolbarItem The customToolbarItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.indexOfCustomToolbarItem = function(oCustomToolbarItem) { return 0; };

/**
 * Checks for the provided <code>sap.gantt.GanttChartBase</code> in the aggregation {@link #getGanttCharts ganttCharts}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.gantt.GanttChartBase}
 *           oGanttChart The ganttChart whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.indexOfGanttChart = function(oGanttChart) { return 0; };

/**
 * Inserts a customToolbarItem into the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * @param {sap.ui.core.Control}
 *            oCustomToolbarItem the customToolbarItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the customToolbarItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customToolbarItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customToolbarItem is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.insertCustomToolbarItem = function(oCustomToolbarItem,iIndex) { return new sap.gantt.GanttChartContainer(); };

/**
 * Inserts a ganttChart into the aggregation {@link #getGanttCharts ganttCharts}.
 * 
 * @param {sap.gantt.GanttChartBase}
 *            oGanttChart the ganttChart to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the ganttChart should be inserted at; for
 *              a negative value of <code>iIndex</code>, the ganttChart is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the ganttChart is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.insertGanttChart = function(oGanttChart,iIndex) { return new sap.gantt.GanttChartContainer(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.removeAllCustomToolbarItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getGanttCharts ganttCharts}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.gantt.GanttChartBase[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.removeAllGanttCharts = function() { return new Array(); };

/**
 * Removes a customToolbarItem from the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * @param {int | string | sap.ui.core.Control} vCustomToolbarItem The customToolbarItem to remove or its index or id
 * @returns {sap.ui.core.Control} The removed customToolbarItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.removeCustomToolbarItem = function(vCustomToolbarItem) { return new sap.ui.core.Control(); };

/**
 * Removes a ganttChart from the aggregation {@link #getGanttCharts ganttCharts}.
 * 
 * @param {int | string | sap.gantt.GanttChartBase} vGanttChart The ganttChart to remove or its index or id
 * @returns {sap.gantt.GanttChartBase} The removed ganttChart or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.removeGanttChart = function(vGanttChart) { return new sap.gantt.GanttChartBase(); };

/**
 * Selects relationships and returns a success code.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the relationships that you want to select
 * @param {array} [aIds] List of the relationships that you want to select
 * @param {boolean} [isExclusive] Whether all other selected relationships are to be deselected
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.selectRelationships = function(iGanttChartIndex,aIds,isExclusive) { return false; };

/**
 * Selects rows and returns a success code.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the rows that you want to select
 * @param {array} [aIds] List of the rows that you want to select
 * @param {boolean} [isExclusive] Whether all other selected rows are to be deselected
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.selectRows = function(iGanttChartIndex,aIds,isExclusive) { return false; };

/**
 * Selects rows and all shapes contained in these rows.
 * 
 * @param {int} [iGanttChartIndex] Index of the Gantt chart containing the rows and shapes that you want to select
 * @param {array} [aIds] Row UIDs
 * @param {boolean} [bIsExclusive] Whether reset all other selected rows and shapes are to be reset
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.selectRowsAndShapes = function(iGanttChartIndex,aIds,bIsExclusive) { return false; };

/**
 * Selects in-row shapes and returns a success code.
 * 
 * @param {int} [iGanttChart] Index of the Gantt chart containing the shapes that you want to select
 * @param {array} [aIds] L of the shape IDs that you want to select
 * @param {boolean} [isExclusive] Whether all other selected shapes are to be deselected
 * @returns {boolean} - If any selection change is applied, returns true.
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.selectShapes = function(iGanttChart,aIds,isExclusive) { return false; };

/**
 * Sets a new value for property {@link #getContainerLayoutKey containerLayoutKey}.
 * 
 * Current container layout key.
 * 
 * This is a key configured in configuration property <code>containerLayouts</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY</code>.
 * @param {string} sContainerLayoutKey New value for property <code>containerLayoutKey</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setContainerLayoutKey = function(sContainerLayoutKey) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getContainerLayouts containerLayouts}.
 * 
 * Configuration of container layouts.
 * 
 * This configuration affects the data source selection ComboBox in the Container Toolbar. When the selection
 * changes, the <code>ganttChartChangeRequested</code> event that is triggered includes the corresponding layout key.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ContainerLayout[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_LAYOUTS</code>.
 * @param {object[]} sContainerLayouts New value for property <code>containerLayouts</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setContainerLayouts = function(sContainerLayouts) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getEnableAdhocLine enableAdhocLine}.
 * 
 * Switch to enable and disable adhoc lines representing milestones and events along the time axis.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableAdhocLine New value for property <code>enableAdhocLine</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setEnableAdhocLine = function(bEnableAdhocLine) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getEnableCursorLine enableCursorLine}.
 * 
 * Switch to enable and disable the cursor line that follows the cursor.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableCursorLine New value for property <code>enableCursorLine</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setEnableCursorLine = function(bEnableCursorLine) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getEnableNowLine enableNowLine}.
 * 
 * Switch to enable and disable the present time indicator.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableNowLine New value for property <code>enableNowLine</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setEnableNowLine = function(bEnableNowLine) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getEnableTimeScrollSync enableTimeScrollSync}.
 * 
 * Switch to enable and disable scroll synchronization by time on instances of aggregation <code>ganttCharts</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableTimeScrollSync New value for property <code>enableTimeScrollSync</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setEnableTimeScrollSync = function(bEnableTimeScrollSync) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getEnableVerticalLine enableVerticalLine}.
 * 
 * Switch to enable and disable vertical lines representing intervals along the time axis.
 * 
 * When this value is set, it overrides the corresponding value on instances of aggregation <code>ganttCharts</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableVerticalLine New value for property <code>enableVerticalLine</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setEnableVerticalLine = function(bEnableVerticalLine) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setHeight = function(sHeight) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getHierarchies hierarchies}.
 * 
 * List of available hierarchies. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Hierarchy[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_HIERARCHYS</code>.
 * @param {object[]} sHierarchies New value for property <code>hierarchies</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setHierarchies = function(sHierarchies) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets the aggregated {@link #getLegendContainer legendContainer}.
 * @param {sap.gantt.legend.LegendContainer} oLegendContainer The legendContainer to set
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setLegendContainer = function(oLegendContainer) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getMaxNumOfGanttCharts maxNumOfGanttCharts}.
 * 
 * Define the maximum number of Gantt charts to be displayed on the same screen. 
 * When this number is reached, the "Add Gantt Chart" button is grayed out.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3</code>.
 * @param {int} iMaxNumOfGanttCharts New value for property <code>maxNumOfGanttCharts</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setMaxNumOfGanttCharts = function(iMaxNumOfGanttCharts) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getModes modes}.
 * 
 * List of available modes. To apply modes to the toolbar and shapes, further configuration is needed. (specifically, 
 * in property <code>toolbarSchemes</code>, and properties <code>toolbarSchemes</code> and <code>shapes</code> in 
 * the <code>GanttChartBase</code> class)If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.Mode[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_MODES</code>.
 * @param {object[]} sModes New value for property <code>modes</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setModes = function(sModes) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getSliderStep sliderStep}.
 * 
 * Define the amount of units to change the time zoom slider.
 * 
 * See {@link sap.m.Slider#setStep}
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSliderStep New value for property <code>sliderStep</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @deprecated As of version 1.44, please set the property 'stepCountOfSlider' in sap.gantt.config.TimeZoomGroup.
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setSliderStep = function(iSliderStep) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getSvgDefs svgDefs}.
 * 
 * Definitions of paint servers used for advanced shape features around SVG fill, stroke, and filter attributes.
 * 
 * If this property is provided, the paint server definition of the SVG is rendered. Method <code>getDefString()</code> should be
 * implemented by all paint server classes that are passed in in this property. It is easier to assign a common paint server definition
 * in this class instead of in separate instances of <code>sap.gantt.GanttChartBase</code>. Then the definition is 
 * rendered only once.
 * We recommend that you set the type of this argument to <code>sap.gantt.def.SvgDefs</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oSvgDefs New value for property <code>svgDefs</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setSvgDefs = function(oSvgDefs) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getToolbarSchemes toolbarSchemes}.
 * 
 * List of available toolbar schemes. If not provided, a default configuration is provided.
 * We recommend that you set the type of this argument to <code>sap.gantt.config.ToolbarScheme[]</code>. Otherwise some properties you set may not function properly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEMES</code>.
 * @param {object[]} sToolbarSchemes New value for property <code>toolbarSchemes</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setToolbarSchemes = function(sToolbarSchemes) { return new sap.gantt.GanttChartContainer(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.setWidth = function(sWidth) { return new sap.gantt.GanttChartContainer(); };

/**
 * Switches the splitter orientation.
 * 
 * @param {string} [vOrientation] Target orientation. If not provided, this method inverts the orientation.
 * @param {boolean} [bReadConfig] If this value is provided, it overrides the target orientation from the current configuration indicated by property <code>containerLayoutKey</code>.
 * @returns {object} - <code>this</code>
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.gantt.GanttChartContainer.prototype.switchOrientation = function(vOrientation,bReadConfig) { return new Object(); };

/**
 * Unbinds aggregation {@link #getCustomToolbarItems customToolbarItems} from model data.
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.unbindCustomToolbarItems = function() { return new sap.gantt.GanttChartContainer(); };

/**
 * Unbinds aggregation {@link #getGanttCharts ganttCharts} from model data.
 * @returns {sap.gantt.GanttChartContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartContainer.prototype.unbindGanttCharts = function() { return new sap.gantt.GanttChartContainer(); };


// ---- sap.gantt.GanttChartWithTable --------------------------------------------------------------------------

/**
 * Creates and initializes a new Gantt Chart with a TreeTable control on the left and a svg chart area on the right.
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
 * <li>{@link #getCellCallback cellCallback} : object</li>
 * <li>{@link #getFixedColumnCount fixedColumnCount} : int</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomToolbarItems customToolbarItems} : sap.ui.core.Control[]</li>
 * <li>{@link #getColumns columns} : sap.ui.table.Column[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.GanttChartBase#constructor sap.gantt.GanttChartBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Embed a <code>sap.ui.table.TreeTable</code> and a <code>sap.gantt.GanttChart</code> side-by-side.
 * 
 * <p>This class defines:
 * The TreeTable part provide a column view of data with sorting/filtering functions available. The svg chart part provide graphic Gantt chart
 * view of data. Both width can be adjusted by a splitter bar, and row scrolling are always synchronized.3
 * </p>
 * 
 * @extends sap.gantt.GanttChartBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.GanttChartWithTable = function(sId,mSettings) {};
/**
 * Adds some column to the aggregation {@link #getColumns columns}.
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.addColumn = function(oColumn) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Adds some customToolbarItem to the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * @param {sap.ui.core.Control}
 *            oCustomToolbarItem the customToolbarItem to add; if empty, nothing is inserted
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.addCustomToolbarItem = function(oCustomToolbarItem) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Triggers automatic resizing of a column to the widest content.(experimental!)
 * 
 * @see sap.ui.table.Table.autoResizeColumn
 * 
 * @param {int} iColId column id
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.autoResizeColumn = function(iColId) {  };

/**
 * Binds aggregation {@link #getCustomToolbarItems customToolbarItems} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.bindCustomToolbarItems = function(oBindingInfo) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Collapses the row for the given row index in the selection panel
 * 
 * @see sap.ui.table.Table.collapse
 * 
 * @param {int} iRowIndex
 *         index of the row to expand
 * @return {sap.gantt.GanttChartWithTable} A reference to the GanttChartWithTable control, which can be used for chaining
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.collapse = function(iRowIndex) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Destroys all the columns in the aggregation {@link #getColumns columns}.
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.destroyColumns = function() { return new sap.gantt.GanttChartWithTable(); };

/**
 * Destroys all the customToolbarItems in the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.destroyCustomToolbarItems = function() { return new sap.gantt.GanttChartWithTable(); };

/**
 * Expands the row for the given row index in the selection panel
 * 
 * @see sap.ui.table.Table.expand
 * 
 * @param {int} iRowIndex
 *         Index of the row to expand
 * @return {sap.gantt.GanttChartWithTable} A reference to the GanttChartWithTable control, which can be used for chaining
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.expand = function(iRowIndex) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Expands the selection panel to the given level
 * 
 * @see sap.ui.table.TreeTable.expandToLevel
 * 
 * @param {int} iLevel
 *         Level of the selection panel to expand
 * @return {sap.gantt.GanttChartWithTable} A reference to the GanttChartWithTable control, which can be used for chaining
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.expandToLevel = function(iLevel) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Creates a new subclass of class sap.gantt.GanttChartWithTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.GanttChartBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.GanttChartWithTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getCellCallback cellCallback}.
 * 
 * A customized cell callback function.
 * 
 * <p> This property is used in combination with configuration property <code>hierarchies</code>.
 * If aggregation <code>columns</code> is provided, property <code>hierarchies</code> and <code>cellCallback</code> is ignored.
 * Otherwise property <code>hierarchies</code> must provide column configurations that cellCallback can consume. And if cellCallback
 * is not provided, a default cellCallback adds <code>sap.m.Label</code> to fill cells.
 * </p>
 * 
 * @returns {object} Value of property <code>cellCallback</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getCellCallback = function() { return new Object(); };

/**
 * Gets content of aggregation {@link #getColumns columns}.
 * 
 * Aggregation delegated to <code>sap.ui.table.Table</code>.
 * 
 * <p>If this aggregation is provided, call back property <code>cellCallBack</code> and column configuration in property <code>hierarchies</code> will be ignored.</p>
 * 
 * @returns {sap.ui.table.Column[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getColumns = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * Controls to be place in Gantt chart toolbar.
 * 
 * <p>This aggregation is only used when custom toolbar item group is configured to be shown in Gantt chart toolbar.
 * Different from the build-in buttons which are configured to be shown or hidden, these are free controls created 
 * by application, only they are placed in container toolbar by <code>sap.gantt.GanttChartWithTable</code>.</p>
 * 
 * <p>A common recommendation is, if the source select group is enabled and application wants to pre-configure
 * container layouts, the chance to change custom toolbar items is in event handler to event <code>ganttChartSwitchRequested</code>.</p>
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getCustomToolbarItems = function() { return new Array(); };

/**
 * Gets the first visible row of the selection panel. 
 * 
 * @see sap.ui.table.Table.getFirstVisibleRow
 * 
 * @return {int} the first visible row index
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getFirstVisibleRow = function() { return 0; };

/**
 * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
 * 
 * Property propagated from <code>sap.ui.table.Table</code>.
 * 
 * @returns {int} Value of property <code>fixedColumnCount</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getFixedColumnCount = function() { return 0; };

/**
 * Returns a metadata object for class sap.gantt.GanttChartWithTable.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.GanttChartWithTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Retrieves the lead selection index. The lead selection index is, among other things, used to determine the
 * start and end of a selection range, when using Shift-Click to select multiple entries. 
 * 
 * @see sap.ui.table.Table.getSelectedIndex
 * 
 * @return {int[]} An array containing all selected indexes (ascending ordered integers)
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getSelectedIndex = function() { return new Array(); };

/**
 * Returns the effective toolbar scheme key.
 * 
 * @returns {string} - Toolbar scheme key.
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getToolbarSchemeKey = function() { return ""; };

/**
 * Gets the number of visible rows in the selection panel. 
 * 
 * @see sap.ui.table.Table.getVisibleRowCount
 * 
 * @return {int} The first visible row index
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.getVisibleRowCount = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation {@link #getColumns columns}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.table.Column}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oCustomToolbarItem The customToolbarItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.indexOfCustomToolbarItem = function(oCustomToolbarItem) { return 0; };

/**
 * Inserts a column into the aggregation {@link #getColumns columns}.
 * 
 * @param {sap.ui.table.Column}
 *            oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.insertColumn = function(oColumn,iIndex) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Inserts a customToolbarItem into the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * @param {sap.ui.core.Control}
 *            oCustomToolbarItem the customToolbarItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the customToolbarItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the customToolbarItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the customToolbarItem is inserted at
 *              the last position
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.insertCustomToolbarItem = function(oCustomToolbarItem,iIndex) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Scrolls the visible chart area to a certain time. 
 * 
 * <p>It can be used to implement the function of 'Jump To First', 'Jump To Last' and 'Jump To Current'.</p>
 * 
 * @param {Date} oDate The date object to which the user wants the visible area to scroll.
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.jumpToPosition = function(oDate) {  };

/**
 * Removes all the controls from the aggregation {@link #getColumns columns}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.table.Column[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.removeAllCustomToolbarItems = function() { return new Array(); };

/**
 * Removes a column from the aggregation {@link #getColumns columns}.
 * 
 * @param {int | string | sap.ui.table.Column} vColumn The column to remove or its index or id
 * @returns {sap.ui.table.Column} The removed column or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.removeColumn = function(vColumn) { return new sap.ui.table.Column(); };

/**
 * Removes a customToolbarItem from the aggregation {@link #getCustomToolbarItems customToolbarItems}.
 * 
 * @param {int | string | sap.ui.core.Control} vCustomToolbarItem The customToolbarItem to remove or its index or id
 * @returns {sap.ui.core.Control} The removed customToolbarItem or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.removeCustomToolbarItem = function(vCustomToolbarItem) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property {@link #getCellCallback cellCallback}.
 * 
 * A customized cell callback function.
 * 
 * <p> This property is used in combination with configuration property <code>hierarchies</code>.
 * If aggregation <code>columns</code> is provided, property <code>hierarchies</code> and <code>cellCallback</code> is ignored.
 * Otherwise property <code>hierarchies</code> must provide column configurations that cellCallback can consume. And if cellCallback
 * is not provided, a default cellCallback adds <code>sap.m.Label</code> to fill cells.
 * </p>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oCellCallback New value for property <code>cellCallback</code>
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.setCellCallback = function(oCellCallback) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Sets the first visible row in the selection panel.
 * 
 * @see sap.ui.table.Table.setFirstVisibleRow
 * 
 * @param {int} iRowIndex The row index to be set as the first visible row
 * @return {sap.gantt.GanttChartWithTable} A reference to the GanttChartWithTable control, which can be used for chaining
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.setFirstVisibleRow = function(iRowIndex) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
 * 
 * Property propagated from <code>sap.ui.table.Table</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iFixedColumnCount New value for property <code>fixedColumnCount</code>
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.setFixedColumnCount = function(iFixedColumnCount) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Selects a row in the selection panel.
 * 
 * @see sap.ui.table.Table.setSelectedIndex
 * 
 * @param {int} iRowIndex The row index to be selected (if any exists)
 * @return {sap.gantt.GanttChartWithTable} A reference to the GanttChartWithTable control, which can be used for chaining
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.setSelectedIndex = function(iRowIndex) { return new sap.gantt.GanttChartWithTable(); };

/**
 * Unbinds aggregation {@link #getCustomToolbarItems customToolbarItems} from model data.
 * @returns {sap.gantt.GanttChartWithTable} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.GanttChartWithTable.prototype.unbindCustomToolbarItems = function() { return new sap.gantt.GanttChartWithTable(); };


// ---- sap.gantt.legend --------------------------------------------------------------------------


// ---- sap.gantt.legend.DimensionLegend --------------------------------------------------------------------------

/**
 * Creates and initializes a new Dimension Legend class.
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
 * <li>{@link #getShape shape} : sap.gantt.config.Shape</li>
 * <li>{@link #getXDimension xDimension} : string</li>
 * <li>{@link #getYDimension yDimension} : string</li>
 * <li>{@link #getXDomain xDomain} : any[] (default: [])</li>
 * <li>{@link #getYDomain yDomain} : any[] (default: [])</li>
 * <li>{@link #getExclude exclude} : any[][] (default: [])</li>
 * <li>{@link #getLegendSpace legendSpace} : float (default: 8)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.legend.LegendBase#constructor sap.gantt.legend.LegendBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Dimension Legend provides a template for two-dimension legends. This template defines the representation (shape, 
 * pattern, and color) of individual legend items and their corresponding meanings in both dimensions.
 * 
 * Consider that you need to create a legend where legend items represent both the type and status of an object. 
 * In this case, you can configure xDimention to indicate object types and yDimension to indicate object statuses. 
 * Assume that valid object types are "Freight Order", "Freight Unit", and "Trailer Unit"; valid object statuses are
 * "Executed", "In Execution", "Fixed", "Planned", and “Unplanned”. You will have a three by four two-dimension legend 
 * containing twelve legend items. Each them represents an object in a specific type and a specific status. For 
 * example, a red square stands for executed freight orders.
 * 
 * @extends sap.gantt.legend.LegendBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.legend.DimensionLegend with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.legend.LegendBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.legend.DimensionLegend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getExclude exclude}.
 * 
 * Default value is <code>[]</code>.
 * @returns {any[][]} Value of property <code>exclude</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getExclude = function() { return new Array(); };

/**
 * Gets current value of property {@link #getLegendSpace legendSpace}.
 * 
 * Space between two legend items.
 * 
 * Default value is <code>8</code>.
 * @returns {float} Value of property <code>legendSpace</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getLegendSpace = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.legend.DimensionLegend.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.legend.DimensionLegend.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShape shape}.
 * 
 * A Shape instance that contains two sets of data, one for the 'x' dimension and the other for the 'y' dimension. 
 * The system determines the representation of a legend element according to its 'x' dimension and 'y' dimension 
 * values.
 * 
 * @returns {sap.gantt.config.Shape} Value of property <code>shape</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getShape = function() { return new sap.gantt.config.Shape(); };

/**
 * Gets current value of property {@link #getXDimension xDimension}.
 * 
 * Name of xDimension. Note that the Shape instance used in DimensionLegend must have a set of data matches 
 * this property's value. The data set contains entries specifying the representation of individual legend 
 * items.
 * 
 * @returns {string} Value of property <code>xDimension</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getXDimension = function() { return ""; };

/**
 * Gets current value of property {@link #getXDomain xDomain}.
 * 
 * Valid values of xDimension. Each of these values has a corresponding entry in the data set that matches 
 * xDimension in the Shape instance.
 * 
 * Default value is <code>[]</code>.
 * @returns {any[]} Value of property <code>xDomain</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getXDomain = function() { return new Array(); };

/**
 * Gets current value of property {@link #getYDimension yDimension}.
 * 
 * Name of yDimension. Note that the Shape instance used in DimensionLegend must have a set of data matches 
 * this property's value. The data set contains entries specifying the representation of individual legend 
 * items.
 * 
 * @returns {string} Value of property <code>yDimension</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getYDimension = function() { return ""; };

/**
 * Gets current value of property {@link #getYDomain yDomain}.
 * 
 * Valid values of yDimension. Each of these values has a corresponding entry in the data set that matches 
 * yDimension in the Shape instance.
 * 
 * Default value is <code>[]</code>.
 * @returns {any[]} Value of property <code>yDomain</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.getYDomain = function() { return new Array(); };

/**
 * Sets a new value for property {@link #getExclude exclude}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {any[][]} sExclude New value for property <code>exclude</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setExclude = function(sExclude) { return new sap.gantt.legend.DimensionLegend(); };

/**
 * Sets a new value for property {@link #getLegendSpace legendSpace}.
 * 
 * Space between two legend items.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>8</code>.
 * @param {float} fLegendSpace New value for property <code>legendSpace</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setLegendSpace = function(fLegendSpace) { return new sap.gantt.legend.DimensionLegend(); };

/**
 * Sets a new value for property {@link #getShape shape}.
 * 
 * A Shape instance that contains two sets of data, one for the 'x' dimension and the other for the 'y' dimension. 
 * The system determines the representation of a legend element according to its 'x' dimension and 'y' dimension 
 * values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.config.Shape} sShape New value for property <code>shape</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setShape = function(sShape) { return new sap.gantt.legend.DimensionLegend(); };

/**
 * Sets a new value for property {@link #getXDimension xDimension}.
 * 
 * Name of xDimension. Note that the Shape instance used in DimensionLegend must have a set of data matches 
 * this property's value. The data set contains entries specifying the representation of individual legend 
 * items.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sXDimension New value for property <code>xDimension</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setXDimension = function(sXDimension) { return new sap.gantt.legend.DimensionLegend(); };

/**
 * Sets a new value for property {@link #getXDomain xDomain}.
 * 
 * Valid values of xDimension. Each of these values has a corresponding entry in the data set that matches 
 * xDimension in the Shape instance.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {any[]} sXDomain New value for property <code>xDomain</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setXDomain = function(sXDomain) { return new sap.gantt.legend.DimensionLegend(); };

/**
 * Sets a new value for property {@link #getYDimension yDimension}.
 * 
 * Name of yDimension. Note that the Shape instance used in DimensionLegend must have a set of data matches 
 * this property's value. The data set contains entries specifying the representation of individual legend 
 * items.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sYDimension New value for property <code>yDimension</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setYDimension = function(sYDimension) { return new sap.gantt.legend.DimensionLegend(); };

/**
 * Sets a new value for property {@link #getYDomain yDomain}.
 * 
 * Valid values of yDimension. Each of these values has a corresponding entry in the data set that matches 
 * yDimension in the Shape instance.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {any[]} sYDomain New value for property <code>yDomain</code>
 * @returns {sap.gantt.legend.DimensionLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.DimensionLegend.prototype.setYDomain = function(sYDomain) { return new sap.gantt.legend.DimensionLegend(); };


// ---- sap.gantt.legend.LegendBase --------------------------------------------------------------------------

/**
 * Creates and initializes a new Legend class.
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
 * <li>{@link #getSvgDefs svgDefs} : sap.gantt.def.SvgDefs</li>
 * <li>{@link #getLegendWidth legendWidth} : float (default: 32)</li>
 * <li>{@link #getLegendHeight legendHeight} : float (default: 32)</li>
 * <li>{@link #getFontSize fontSize} : int (default: 16)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Base class for all legend template.
 * 
 * <p>This base class defines basic properties for legend templates.
 * sap.gantt provides two basic implementations of <code>LegendBase</code>:
 * <ul>
 * 		<li><code>sap.gantt.legend.ListLegend</code> - A list legend template defines the representation of a list of legend 
 * items and their corresponding meanings</li>
 * 		<li><code>sap.gantt.legend.DimensionLegend</code> - A dimension legend template defines the representation (shape, 
 * pattern, and color) of individual legend items and their corresponding meanings in both dimensions</li>
 * </ul>
 * </p>
 * 
 * @extends sap.ui.core.Control
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.legend.LegendBase = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.legend.LegendBase with name <code>sClassName</code>
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
sap.gantt.legend.LegendBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getFontSize fontSize}.
 * 
 * Font size of legend item texts.
 * 
 * Default value is <code>16</code>.
 * @returns {int} Value of property <code>fontSize</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getFontSize = function() { return 0; };

/**
 * Gets current value of property {@link #getLegendHeight legendHeight}.
 * 
 * Height of a legend item.
 * 
 * Default value is <code>32</code>.
 * @returns {float} Value of property <code>legendHeight</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getLegendHeight = function() { return 0.0; };

/**
 * Gets current value of property {@link #getLegendWidth legendWidth}.
 * 
 * Width of a legend item.
 * 
 * Default value is <code>32</code>.
 * @returns {float} Value of property <code>legendWidth</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getLegendWidth = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.legend.LegendBase.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.legend.LegendBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of the SAP UI size class.
 * 
 * @return {string} Value of the SAP UI size class.
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getSapUiSizeClass = function() { return ""; };

/**
 * Gets the legend item height according to the SAP UI size class.
 * 
 * @return {string} Value of the legend item height.
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getScaledLegendHeight = function() { return ""; };

/**
 * Gets the legend item width according to the SAP UI size class.
 * 
 * @return {string} Value of the legend item width.
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getScaledLegendWidth = function() { return ""; };

/**
 * Gets current value of property {@link #getSvgDefs svgDefs}.
 * 
 * SVG reusable element definitions.
 * 
 * If this property is provided, the paint server definition of SVG is rendered. Method <code>getDefString()</code> should be
 * implemented by all paint server classes that are passed to this property.
 * 
 * @returns {sap.gantt.def.SvgDefs} Value of property <code>svgDefs</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.getSvgDefs = function() { return new sap.gantt.def.SvgDefs(); };

/**
 * Sets a new value for property {@link #getFontSize fontSize}.
 * 
 * Font size of legend item texts.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>16</code>.
 * @param {int} iFontSize New value for property <code>fontSize</code>
 * @returns {sap.gantt.legend.LegendBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.setFontSize = function(iFontSize) { return new sap.gantt.legend.LegendBase(); };

/**
 * Sets a new value for property {@link #getLegendHeight legendHeight}.
 * 
 * Height of a legend item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>32</code>.
 * @param {float} fLegendHeight New value for property <code>legendHeight</code>
 * @returns {sap.gantt.legend.LegendBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.setLegendHeight = function(fLegendHeight) { return new sap.gantt.legend.LegendBase(); };

/**
 * Sets a new value for property {@link #getLegendWidth legendWidth}.
 * 
 * Width of a legend item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>32</code>.
 * @param {float} fLegendWidth New value for property <code>legendWidth</code>
 * @returns {sap.gantt.legend.LegendBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.setLegendWidth = function(fLegendWidth) { return new sap.gantt.legend.LegendBase(); };

/**
 * Sets a new value for property {@link #getSvgDefs svgDefs}.
 * 
 * SVG reusable element definitions.
 * 
 * If this property is provided, the paint server definition of SVG is rendered. Method <code>getDefString()</code> should be
 * implemented by all paint server classes that are passed to this property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.def.SvgDefs} sSvgDefs New value for property <code>svgDefs</code>
 * @returns {sap.gantt.legend.LegendBase} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendBase.prototype.setSvgDefs = function(sSvgDefs) { return new sap.gantt.legend.LegendBase(); };


// ---- sap.gantt.legend.LegendContainer --------------------------------------------------------------------------

/**
 * Creates and initializes a new legend container.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 200px)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 200px)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLegendSections legendSections} : sap.m.Page[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * The LegendContainer control uses the NavContainer control to handle hierarchical navigation between legend sections. The LegendContainer control
 * contains an initial navigation page. Both the initial navigation page legend sections are Page controls.
 * 
 * @extends sap.ui.core.Control
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.legend.LegendContainer = function(sId,mSettings) {};
/**
 * Adds some legendSection to the aggregation {@link #getLegendSections legendSections}.
 * @param {sap.m.Page}
 *            oLegendSection the legendSection to add; if empty, nothing is inserted
 * @returns {sap.gantt.legend.LegendContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.addLegendSection = function(oLegendSection) { return new sap.gantt.legend.LegendContainer(); };

/**
 * Destroys all the legendSections in the aggregation {@link #getLegendSections legendSections}.
 * @returns {sap.gantt.legend.LegendContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.destroyLegendSections = function() { return new sap.gantt.legend.LegendContainer(); };

/**
 * Creates a new subclass of class sap.gantt.legend.LegendContainer with name <code>sClassName</code>
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
sap.gantt.legend.LegendContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns the currently displayed legend section. If no legend section is added, this function returns the initial navigation page.
 * 
 * @return {sap.m.Page} Control instance of the legend section
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.getCurrentLegendSection = function() { return new sap.m.Page(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * Height of the legend navigation. When the height specified is smaller than a section content, a vertical scroll bar appears.
 * 
 * Default value is <code>200px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation {@link #getLegendSections legendSections}.
 * 
 * <p>This aggregation specifies the title of a legend section. When you add the legend section to a legend navigation container, 
 * you must specify a title for the legend section so that the section can be identified in the initial navigation list. Otherwise, 
 * your legend section is not reachable via GUI.
 * 
 * @returns {sap.m.Page[]}
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.getLegendSections = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.gantt.legend.LegendContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.legend.LegendContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the navigation items in the initial navigation list
 * 
 * @return {sap.m.StandardListItem} Control instance of the initial page
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.getNavigationItems = function() { return new sap.m.StandardListItem(); };

/**
 * Returns the control instance of List Control for the initial navigation page
 * 
 * @return {sap.m.Page} Control instance of the initial navigation page
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.getNavigationPage = function() { return new sap.m.Page(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Width of the legend navigation. When the width specified is smaller than a section content, a horizontal scroll bar appears.width of the legend navigation. When the width specified is smaller than a section content, a horizontal scroll bar appears.
 * 
 * Default value is <code>200px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.m.Page</code> in the aggregation {@link #getLegendSections legendSections}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Page}
 *           oLegendSection The legendSection whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.indexOfLegendSection = function(oLegendSection) { return 0; };

/**
 * Inserts a legendSection into the aggregation {@link #getLegendSections legendSections}.
 * 
 * @param {sap.m.Page}
 *            oLegendSection the legendSection to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the legendSection should be inserted at; for
 *              a negative value of <code>iIndex</code>, the legendSection is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the legendSection is inserted at
 *              the last position
 * @returns {sap.gantt.legend.LegendContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.insertLegendSection = function(oLegendSection,iIndex) { return new sap.gantt.legend.LegendContainer(); };

/**
 * Removes all the controls from the aggregation {@link #getLegendSections legendSections}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.m.Page[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.removeAllLegendSections = function() { return new Array(); };

/**
 * Removes a legendSection from the aggregation {@link #getLegendSections legendSections}.
 * 
 * @param {int | string | sap.m.Page} vLegendSection The legendSection to remove or its index or id
 * @returns {sap.m.Page} The removed legendSection or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.removeLegendSection = function(vLegendSection) { return new sap.m.Page(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * Height of the legend navigation. When the height specified is smaller than a section content, a vertical scroll bar appears.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>200px</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.gantt.legend.LegendContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.setHeight = function(sHeight) { return new sap.gantt.legend.LegendContainer(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Width of the legend navigation. When the width specified is smaller than a section content, a horizontal scroll bar appears.width of the legend navigation. When the width specified is smaller than a section content, a horizontal scroll bar appears.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>200px</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.gantt.legend.LegendContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.LegendContainer.prototype.setWidth = function(sWidth) { return new sap.gantt.legend.LegendContainer(); };


// ---- sap.gantt.legend.ListLegend --------------------------------------------------------------------------

/**
 * Creates and initializes a new List Legend class.
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
 * <li>{@link #getShapes shapes} : sap.gantt.config.Shape[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:checkBoxChange checkBoxChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.legend.LegendBase#constructor sap.gantt.legend.LegendBase}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * List Legend is a legend template that contains a list of shapes. You can use this class to define a list legend.
 * 
 * @extends sap.gantt.legend.LegendBase
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.legend.ListLegend = function(sId,mSettings) {};
/**
 * Event fired when the check box of a certain legend item is selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.legendType The shape that is checked or unchecked.
 * @param {boolean} oControlEvent.getParameters.value The value of the check box.
 * @public
 * 
 */
sap.gantt.legend.ListLegend.prototype.checkBoxChange = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:checkBoxChange checkBoxChange} event of this <code>sap.gantt.legend.ListLegend</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.gantt.legend.ListLegend</code> itself.
 * 
 * Event fired when the check box of a certain legend item is selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.gantt.legend.ListLegend</code> itself
 * 
 * @returns {sap.gantt.legend.ListLegend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.gantt.legend.ListLegend.prototype.attachCheckBoxChange = function(oData,fnFunction,oListener) { return new sap.gantt.legend.ListLegend(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:checkBoxChange checkBoxChange} event of this <code>sap.gantt.legend.ListLegend</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.gantt.legend.ListLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.ListLegend.prototype.detachCheckBoxChange = function(fnFunction,oListener) { return new sap.gantt.legend.ListLegend(); };

/**
 * Creates a new subclass of class sap.gantt.legend.ListLegend with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.legend.LegendBase.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.legend.ListLegend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:checkBoxChange checkBoxChange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.legendType] The shape that is checked or unchecked.
 * @param {boolean} [mParameters.value] The value of the check box.
 * 
 * @returns {sap.gantt.legend.ListLegend} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.gantt.legend.ListLegend.prototype.fireCheckBoxChange = function(mParameters) { return new sap.gantt.legend.ListLegend(); };

/**
 * Returns a metadata object for class sap.gantt.legend.ListLegend.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.legend.ListLegend.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShapes shapes}.
 * 
 * Shapes for legend items. These shapes are used in the Gantt chart.
 * 
 * @returns {sap.gantt.config.Shape[]} Value of property <code>shapes</code>
 * 
 * @public
 * 
 */
sap.gantt.legend.ListLegend.prototype.getShapes = function() { return new Array(); };

/**
 * Sets a new value for property {@link #getShapes shapes}.
 * 
 * Shapes for legend items. These shapes are used in the Gantt chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.config.Shape[]} sShapes New value for property <code>shapes</code>
 * @returns {sap.gantt.legend.ListLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.legend.ListLegend.prototype.setShapes = function(sShapes) { return new sap.gantt.legend.ListLegend(); };


// ---- sap.gantt.misc.AxisOrdinal --------------------------------------------------------------------------

/**
 * Creates and initializes an AxisOrdinal class.
 * @class The reusable functional class represents an instance of ordinal pattern coordinate mapping.
 * 
 * @param {array} aAlementArray Element array corresponding to an ordinal axis.
 * @param {array} aScaleArray Scale array where each item represents one or more smallest width units in one-to-one relationship with aAlementArray.
 * @param {number} nViewBandWidth Smallest width unit for elements.
 * @param {number} nViewRangeStart Start position of an axis in the viewport area.
 * @param {number} nViewRangeEnd End position of an axis in the viewport area. The parameter is ignored if viewBandWidth is set.
 * @param {number} nZoomRate Zoom rate of the viewport area.
 * @param {number} nZoomOrigin Zoom origin of the viewport area.
 * @param {number} nPadding Padding for each band.
 * 
 * @return Instance of an AxisOrdinal.
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal = function(aAlementArray,aScaleArray,nViewBandWidth,nViewRangeStart,nViewRangeEnd,nZoomRate,nZoomOrigin,nPadding) {};
/**
 * Clones a new AxisOrdinal from the current one.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to the newly created clone.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.clone = function() { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Transforms an element to a position in the coordinate system
 * 
 * @param {Object} element Element that exists in parameter elementArray of the constructor
 * 
 * @return Position in the coordinate system
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.elementToView = function(element) {  };

/**
 * Retrieves the value of elementArray.
 * 
 * @return {array} Value of elementArray.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.getElementArray = function() { return null; };

/**
 * Retrieves the value of scaleArray.
 * 
 * @return {array} Value of scaleArray.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.getScaleArray = function() { return null; };

/**
 * Retrieves the value of viewBandWidth.
 * 
 * @return {number} Value of viewBandWidth that indicates the smallest width unit for elements.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.getViewBandWidth = function() { return 0.0; };

/**
 * Retrieves the view range of the current viewport area.
 * 
 * @return {array} Value of the view range containing the start and end positions.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.getViewRange = function() { return null; };

/**
 * Retrieves the zoom origin.
 * 
 * @return {number} Zoom origin.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.getZoomOrigin = function() { return 0.0; };

/**
 * Retrieves the value of zoom rate.
 * 
 * @return {number} Value of zoom rate.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.getZoomRate = function() { return 0.0; };

/**
 * Sets a new value of elementArray with the corresponding scaleArray.
 * 
 * @param {array} elementArray New element array corresponding to an ordinal axis.
 * @param {array} scaleArray Corresponding scale array where each item represents one or more smallest width units in one-to-one relationship with elementArray.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.setElements = function(elementArray,scaleArray) { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Sets a new value of viewBandWidth.
 * 
 * @param {number} viewBandWidth Smallest width unit for elements.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.setViewBandWidth = function(viewBandWidth) { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Sets a new value of the end position of a view range.
 * 
 * @param {number} viewRangeEnd End position of axis in the viewport area. The parameter is ignored if viewBandWidth is set.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.setViewRangeEnd = function(viewRangeEnd) { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Sets a new value of the start position of a view range.
 * 
 * @param {number} viewRangeStart Start position of an axis in the viewport area.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.setViewRangeStart = function(viewRangeStart) { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Sets the zoom origin.
 * 
 * @param {number} zoomOrigin Zoom origin of the viewport area.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.setZoomOrigin = function(zoomOrigin) { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Sets a new value of zoom rate.
 * 
 * @param {number} zoomRate New zoom rate of the viewport area.
 * 
 * @return {sap.gantt.misc.AxisOrdinal} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.setZoomRate = function(zoomRate) { return new sap.gantt.misc.AxisOrdinal(); };

/**
 * Transforms a position in the coordinate system to a band index
 * 
 * @param {Number} value A position in the coordinate system
 * 
 * @return Index that describes which band the position is located in
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.viewToBandIndex = function(value) {  };

/**
 * Transforms a position in the coordinate system to an element
 * 
 * @param {Number} value Position in the coordinate system
 * 
 * @return Element that exists in parameter elementArray of the constructor
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.viewToElement = function(value) {  };

/**
 * Transforms a position in the coordinate system to an element index
 * 
 * @param {Number} value Position in the coordinate system
 * 
 * @return Index of the corresponding element that exists in parameter elementArray of the constructor
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.viewToElementIndex = function(value) {  };

/**
 * Transforms a position in the coordinate system to a row index
 * 
 * @param {Number} value Position in the coordinate system
 * @param {Number} iMaxIndex Max row index in the coordinate system
 * 
 * @return Index of the corresponding row
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisOrdinal.prototype.viewToRowIndex = function(value,iMaxIndex) {  };


// ---- sap.gantt.misc.AxisTimes --------------------------------------------------------------------------

/**
 * Creates and initializes an AxisTime class.
 * 
 * @class The reusable functional class represents an instance of time-value linear coordinate mapping.
 * 
 * @param {array} timeRange The array must contain two or more dates that represent some ranges of data.
 * @param {array} viewRange The array must contain two or more values, to match the cardinality of timeRange, representing some ranges of values.
 * @param {number} zoomRate Zoom rate of the viewport area.
 * @param {number} zoomOrigin Zoom origin of the viewport area.
 * @param {number} viewOffset Offset of the viewport area.
 * @param {object} locale Settings for language, time zone, and daylight saving.
 * @param {array} oZoomStrategy Specifies the strategy to zoom in/out.
 * 
 * @return Instance of AxisTime.
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.misc.AxisTimes = function(timeRange,viewRange,zoomRate,zoomOrigin,viewOffset,locale,oZoomStrategy) {};
/**
 * Clones a new AxisTimes from the current one.
 * 
 * @return {sap.gantt.misc.AxisTimes} Reference to the newly created clone.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.clone = function() { return new sap.gantt.misc.AxisTimes(); };

/**
 * Retrieves a key of the time interval level in array oZoomStrategy.
 * 
 * @return {string} Key of the time interval level in array oZoomStrategy.
 * @deprecated As of version 1.44, replaced by sap.gantt.axistime.AxisTimeStrategyBase.getZoomLevel
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getCurrentTickTimeIntervalKey = function() { return ""; };

/**
 * Retrieves an index of the time interval level in array oZoomStrategy.
 * 
 * @return {number} Index of the time interval level in array oZoomStrategy.
 * 
 * @public
 * @deprecated As of version 1.44, replaced by sap.gantt.axistime.AxisTimeStrategyBase.getZoomLevel
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getCurrentTickTimeIntervalLevel = function() { return 0.0; };

/**
 * Retrieves an object containing the information of current time, its position, and label.
 * 
 * @return {object} Reference to an object containing the information of current time, its position, and label.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getNowLabel = function() { return new Object(); };

/**
 * Retrieves an array of time ticks, each item containing date position and label, for the specified level within the given timeBoundary or viewBoundary.
 * 
 * @param {number} level Corresponding index in array oZoomStrategy.
 * @param {number} timeBoundary Time range within which time ticks are generated.
 * @param {number} viewBoundary View range within which time ticks are generated. Available only when timeBoundary isn't specified.
 * @return {object} Reference to an array of time ticks, each item containing date, position, and label.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getTickTimeIntervalLabel = function(level,timeBoundary,viewBoundary) { return new Object(); };

/**
 * Retrieves the value of timeRange.
 * 
 * @return {array} Value of timeRange.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getTimeRange = function() { return null; };

/**
 * Retrieves the value of viewOffset.
 * 
 * @return {number} Value of viewOffset.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getViewOffset = function() { return 0.0; };

/**
 * Retrieves the value of viewRange.
 * 
 * @return {array} Value of viewRange.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getViewRange = function() { return null; };

/**
 * Retrieves the value of zoomOrigin.
 * 
 * @return {number} Value of zoomOrigin.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getZoomOrigin = function() { return 0.0; };

/**
 * Retrieves the value of zoomRate.
 * 
 * @return {number} Value of zoomRate.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getZoomRate = function() { return 0.0; };

/**
 * Retrieves the value of oZoomStrategy.
 * 
 * @return {object} Value of oZoomStrategy.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.getZoomStrategy = function() { return new Object(); };

/**
 * Sets a new value of timeRange.
 * 
 * @param {array} timeRange New value of timeRange.
 * 
 * @return {sap.gantt.misc.AxisTimes} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.setTimeRange = function(timeRange) { return new sap.gantt.misc.AxisTimes(); };

/**
 * Sets a new value of viewOffset.
 * 
 * @param {number} viewOffset New value of viewOffset.
 * 
 * @return {sap.gantt.misc.AxisTimes} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.setViewOffset = function(viewOffset) { return new sap.gantt.misc.AxisTimes(); };

/**
 * Sets a new value of viewRange.
 * 
 * @param {array} viewRange New value of viewRange.
 * 
 * @return {sap.gantt.misc.AxisTimes} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.setViewRange = function(viewRange) { return new sap.gantt.misc.AxisTimes(); };

/**
 * Sets a new value of zoomOrigin.
 * 
 * @param {number} zoomOrigin New value of zoomOrigin.
 * 
 * @return {sap.gantt.misc.AxisTimes} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.setZoomOrigin = function(zoomOrigin) { return new sap.gantt.misc.AxisTimes(); };

/**
 * Sets a new value of zoomRate.
 * 
 * @param {number} zoomRate New value of zoomRate.
 * 
 * @return {sap.gantt.misc.AxisTimes} Reference to this in order to allow method chaining.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.setZoomRate = function(zoomRate) { return new sap.gantt.misc.AxisTimes(); };

/**
 * Given a date within the timeRange, this function returns the corresponding value within the viewRange.
 * 
 * @param {date} time Given date within the timeRange.
 * @param: TODO
 * @return {number} Value corresponding to the given date within the viewRange.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.timeToView = function(time) { return 0.0; };

/**
 * Returns the date within the timeRange for the corresponding value within the viewRange.
 * 
 * @param {number} value Given value within the viewRange.
 * 
 * @return {date} Date corresponding to the given value within the timeRange.
 * 
 * @public
 * 
 */
sap.gantt.misc.AxisTimes.prototype.viewToTime = function(value) { return null; };


// ---- sap.gantt.misc.Format --------------------------------------------------------------------------

/**
 * A dummy constructor for Format. Do not construct a Format object; instead, call static methods abapTimestampToDate, dateToAbapTimestamp, and abapTimestampToTimeLabel directly.
 * 
 * @class
 * The Format class provides static methods for formatting dates, times, and timestamps to be used in sap.gantt
 * 
 * @public
 * 
 */
sap.gantt.misc.Format = function() {};
/**
 * Converts an ABAP timestamp(eg:"20150909000000" ) into a Date instance.
 * 
 * @param {string} sTimestamp The ABAP timestamp to convert
 * @return {Date} The output date instance
 * @static
 * @public
 * 
 */
sap.gantt.misc.Format.abapTimestampToDate = function(sTimestamp) { return null; };

/**
 * Converts an ABAP timestamp into a time label to be used in Gantt.
 * 
 * @param {string} sTimestamp The ABAP timestamp to convert
 * @param {sap.gantt.config.Locale} oLocale The locale object has the time zone and DST info; this determines how the function converts the timestamp into a locale-specific time label
 * @return {string} The output time label
 * @static
 * @public
 * 
 */
sap.gantt.misc.Format.abapTimestampToTimeLabel = function(sTimestamp,oLocale) { return ""; };

/**
 * Converts a Date instance into an ABAP timestamp.
 * 
 * @param {Date} oDate The date instance to convert
 * @return {string} The output ABAP timestamp
 * @static
 * @public
 * 
 */
sap.gantt.misc.Format.dateToAbapTimestamp = function(oDate) { return ""; };


// ---- sap.gantt.MouseWheelZoomType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.MouseWheelZoomType.toString = function() { return ""; };

// ---- sap.gantt.shape --------------------------------------------------------------------------


// ---- sap.gantt.shape.cal.Calendar --------------------------------------------------------------------------

/**
 * Creates a Calendar shape which consumes pattern from Calendar in 'def' package.
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
 * <li>{@link #getIsBulk isBulk} : boolean (default: true)</li>
 * <li>{@link #getEnableSelection enableSelection} : boolean (default: false)</li>
 * <li>{@link #getCalendarName calendarName} : string (default: nwt)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.shape.Rectangle#constructor sap.gantt.shape.Rectangle}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Calendar shape.
 * 
 * <p>
 * The Calendar shape must be used in combination with Calendar def class {@link sap.gantt.def.cal.Calendar} which draws SVG 'defs' tag.
 * </p>
 * 
 * @extends sap.gantt.shape.Rectangle
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.cal.Calendar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Rectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.cal.Calendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>calendarName</code>.
 * 
 * <p>
 * Calendar key.
 * 
 * This property is used to generate referencing string to compose the <code>fill</code> property. This property is must provided.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>calendarName</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getCalendarName = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>enableSelection</code>.
 * 
 * General recommendation is don't configure or code against this property. Calendar is treated as a bulk shape filled with pattern occupying visible chart area.
 * Application should implement their own shape if a select able calendar is expected.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Gets current value of property <code>fill</code>.
 * 
 * General recommendation is don't configure or code against this property. Calendar is treated as a bulk shape filled with pattern occupying visible chart area.
 * Application should implement their own shape if a select able calendar is expected.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>height</code>.
 * 
 * General recommendation is don't configure or code against this property. Calendar is treated as a bulk shape filled with pattern occupying visible chart area.
 * Application should implement their own shape if a select able calendar is expected.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets current value of property <code>isBulk</code>.
 * 
 * General recommendation is don't configure or code against this property.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>isBulk</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getIsBulk = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.cal.Calendar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.cal.Calendar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * General recommendation is don't configure or code against this property. Calendar is treated as a bulk shape filled with pattern occupying visible chart area.
 * Application should implement their own shape if a select able calendar is expected.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets current value of property <code>x</code>.
 * 
 * General recommendation is don't configure or code against this property. Calendar is treated as a bulk shape filled with pattern occupying visible chart area.
 * Application should implement their own shape if a select able calendar is expected.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets current value of property <code>y</code>.
 * 
 * General recommendation is don't configure or code against this property. Calendar is treated as a bulk shape filled with pattern occupying visible chart area.
 * Application should implement their own shape if a select able calendar is expected.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.getY = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getCalendarName calendarName}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>nwt</code>.
 * @param {string} sCalendarName New value for property <code>calendarName</code>
 * @returns {sap.gantt.shape.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.setCalendarName = function(sCalendarName) { return new sap.gantt.shape.cal.Calendar(); };

/**
 * Sets a new value for property {@link #getEnableSelection enableSelection}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableSelection New value for property <code>enableSelection</code>
 * @returns {sap.gantt.shape.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.setEnableSelection = function(bEnableSelection) { return new sap.gantt.shape.cal.Calendar(); };

/**
 * Sets a new value for property {@link #getIsBulk isBulk}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsBulk New value for property <code>isBulk</code>
 * @returns {sap.gantt.shape.cal.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.cal.Calendar.prototype.setIsBulk = function(bIsBulk) { return new sap.gantt.shape.cal.Calendar(); };


// ---- sap.gantt.shape.Circle --------------------------------------------------------------------------

/**
 * Creates and initializes a new Circle class.
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
 * <li>{@link #getTag tag} : string (default: circle)</li>
 * <li>{@link #getCx cx} : float</li>
 * <li>{@link #getCy cy} : float</li>
 * <li>{@link #getR r} : float (default: 5)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Circle shape class using SVG tag 'circle'. This shape is usually used to represent points in time.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/shapes.html#CircleElement SVG specification 1.1 for 'circle' element} for
 * more information about the HTML tag.<br/><br/>
 * {@link http://www.w3.org/TR/SVG/images/shapes/circle01.svg Circle samples in SVG specification 1.1}:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2"/>
 * <circle cx="600" cy="200" r="100" fill="red" stroke="blue" stroke-width="10" />
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Circle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Circle with name <code>sClassName</code>
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
sap.gantt.shape.Circle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>cx</code>.
 * 
 * <p>
 * x coordinate of the center of the circle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#CircleElementCXAttribute SVG 1.1 specification for 'cx' attribute of 'circle'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using the <code>time</code> property 
 * as a base and makes some adjustments.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>cx</code>.
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.getCx = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the current value of property <code>cy</code>.
 * 
 * <p>
 * y coordinate of the center of the circle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#CircleElementCYAttribute SVG 1.1 specification for 'cy' attribute of 'circle'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using parameter <code>oRowInfo</code> as a base
 * and makes some adjustments to align the center of the row rectangle along the y axis. 
 * If you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>cy</code>.
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.getCy = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.Circle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Circle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>r</code>.
 * 
 * <p>
 * Radius of the circle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#CircleElementRAttribute SVG 1.1 specification for 'r' attribute of 'circle'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>r</code>.
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.getR = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getCx cx}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fCx New value for property <code>cx</code>
 * @returns {sap.gantt.shape.Circle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.setCx = function(fCx) { return new sap.gantt.shape.Circle(); };

/**
 * Sets a new value for property {@link #getCy cy}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fCy New value for property <code>cy</code>
 * @returns {sap.gantt.shape.Circle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.setCy = function(fCy) { return new sap.gantt.shape.Circle(); };

/**
 * Sets a new value for property {@link #getR r}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fR New value for property <code>r</code>
 * @returns {sap.gantt.shape.Circle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.setR = function(fR) { return new sap.gantt.shape.Circle(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>circle</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Circle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Circle.prototype.setTag = function(sTag) { return new sap.gantt.shape.Circle(); };


// ---- sap.gantt.shape.ClipPath --------------------------------------------------------------------------

/**
 * Creates and initializes a new Clippath class.
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
 * <li>{@link #getTag tag} : string (default: clippath)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPaths paths} : sap.gantt.shape.Path[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Clippath shape class using SVG container tag 'clippath'. It is usually used together with {@link sap.gantt.shape.Path} as aggregations, and
 * referenced by other shapes by URL.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/masking.html#EstablishingANewClippingPath SVG specification 1.1 for 'clippath' element} for
 * more information about the HTML tag.<br/><br/>
 * {@link http://www.w3.org/TR/SVG/images/shapes/circle01.svg Circle samples in SVG specification 1.1}:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * <marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * <style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * .arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="98" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<rect x="30" y="30" width="250" height="30" fill="#dddddd"/>
 * 	<rect x="30" y="30" width="250" height="30" fill="#9E1F63" style="stroke: none; clip-path: url(#clipPath4);"/>
 * 	<path d="M 90 70 l 10 -20 m 0 0 l 35 0 m 0 0 l 13 7 m 0 0 l 15 -14 m 0 0 l 15 27 m 0 0 l 20 -30 m 0 0 l 14 30" stroke="#1C75BC" stroke-width="2"/>
 * 	<clipPath id="clipPath4"><path d="M 90 70 l 10 -20 l 35 0 l 13 7 l 15 -14 l 15 27 l 20 -30 l 14 30"/></clipPath>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ClipPath = function(sId,mSettings) {};
/**
 * Adds some path to the aggregation {@link #getPaths paths}.
 * @param {sap.gantt.shape.Path}
 *            oPath the path to add; if empty, nothing is inserted
 * @returns {sap.gantt.shape.ClipPath} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.addPath = function(oPath) { return new sap.gantt.shape.ClipPath(); };

/**
 * Destroys all the paths in the aggregation {@link #getPaths paths}.
 * @returns {sap.gantt.shape.ClipPath} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.destroyPaths = function() { return new sap.gantt.shape.ClipPath(); };

/**
 * Creates a new subclass of class sap.gantt.shape.ClipPath with name <code>sClassName</code>
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
sap.gantt.shape.ClipPath.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.shape.ClipPath.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ClipPath.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getPaths paths}.
 * 
 * Paths defining the clipPath.
 * 
 * @returns {sap.gantt.shape.Path[]}
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.getPaths = function() { return new Array(); };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Checks for the provided <code>sap.gantt.shape.Path</code> in the aggregation {@link #getPaths paths}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.gantt.shape.Path}
 *           oPath The path whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.indexOfPath = function(oPath) { return 0; };

/**
 * Inserts a path into the aggregation {@link #getPaths paths}.
 * 
 * @param {sap.gantt.shape.Path}
 *            oPath the path to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the path should be inserted at; for
 *              a negative value of <code>iIndex</code>, the path is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the path is inserted at
 *              the last position
 * @returns {sap.gantt.shape.ClipPath} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.insertPath = function(oPath,iIndex) { return new sap.gantt.shape.ClipPath(); };

/**
 * Removes all the controls from the aggregation {@link #getPaths paths}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.gantt.shape.Path[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.removeAllPaths = function() { return new Array(); };

/**
 * Removes a path from the aggregation {@link #getPaths paths}.
 * 
 * @param {int | string | sap.gantt.shape.Path} vPath The path to remove or its index or id
 * @returns {sap.gantt.shape.Path} The removed path or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.removePath = function(vPath) { return new sap.gantt.shape.Path(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>clippath</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.ClipPath} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ClipPath.prototype.setTag = function(sTag) { return new sap.gantt.shape.ClipPath(); };


// ---- sap.gantt.shape.Definitions --------------------------------------------------------------------------

/**
 * Creates and initializes a new SVG graphic object according to shape data.
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
 * <li>{@link #getTag tag} : string (default: defs)</li>
 * <li>{@link #getChildTagName childTagName} : string</li>
 * <li>{@link #getContent content} : string (default: )</li>
 * <li>{@link #getReferenceId referenceId} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Base class for all SVG definitions. It is different from the svgDefs in <code>GanttChartBase</code>.
 * It is a container shape and related to shape data.
 * 
 * <p>
 * SVG uses the 'defs' tag to represent graphic objects that can be reused at a later time.
 * See {@link http://www.w3.org/TR/SVG/struct.html#DefsElement 'defs' in SVG}.
 * Currently <code>sap.gantt</code> provides defs like TextRepeat. Applications can also 
 * extend this base class to support more functionality.
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Definitions = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Definitions with name <code>sClassName</code>
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
sap.gantt.shape.Definitions.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of the <code>childTagName</code> property.
 * 
 * The 'defs' element is a container element for referenced elements. The content model for 'defs' is 
 * the same as that for the 'g' element; thus, any element that can be a child of a 'g' can also be a child 
 * of a 'defs'. The 'childTagName' is the name of any child element of 'defs'.See {@link http://www.w3.org/TR/SVG/struct.html#DefsElement SVG 1.1 specification for defs}.<br/>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>childTagName</code> property.
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.getChildTagName = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property {@link #getContent content}.
 * 
 * Definition string. Subclasses can implement their own getters of this property to override the one in this class.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>content</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.getContent = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.Definitions.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Definitions.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getReferenceId referenceId}.
 * 
 * Unique id for definition.
 * 
 * @returns {string} Value of property <code>referenceId</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.getReferenceId = function() { return ""; };

/**
 * Gets the value of the <code>tag</code> property.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>tag</code> property.
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getChildTagName childTagName}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sChildTagName New value for property <code>childTagName</code>
 * @returns {sap.gantt.shape.Definitions} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.setChildTagName = function(sChildTagName) { return new sap.gantt.shape.Definitions(); };

/**
 * Sets a new value for property {@link #getContent content}.
 * 
 * Definition string. Subclasses can implement their own getters of this property to override the one in this class.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sContent New value for property <code>content</code>
 * @returns {sap.gantt.shape.Definitions} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.setContent = function(sContent) { return new sap.gantt.shape.Definitions(); };

/**
 * Sets a new value for property {@link #getReferenceId referenceId}.
 * 
 * Unique id for definition.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sReferenceId New value for property <code>referenceId</code>
 * @returns {sap.gantt.shape.Definitions} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.setReferenceId = function(sReferenceId) { return new sap.gantt.shape.Definitions(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>defs</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Definitions} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Definitions.prototype.setTag = function(sTag) { return new sap.gantt.shape.Definitions(); };


// ---- sap.gantt.shape.ext.Chevron --------------------------------------------------------------------------

/**
 * Creates and initializes a new Chevron class.
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
 * <li>{@link #getIsClosed isClosed} : boolean (default: true)</li>
 * <li>{@link #getIsDuration isDuration} : boolean (default: true)</li>
 * <li>{@link #getHeadLength headLength} : float (default: 5)</li>
 * <li>{@link #getTailLength tailLength} : float (default: 5)</li>
 * <li>{@link #getHeight height} : float (default: 15)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Chevron shape class using SVG tag 'path'. It's usually used to represent a duration of time.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/paths.html#PathElement SVG specification 1.1 for 'path' element} for
 * detail information about the html tag.<br/><br/>
 * The following SVG image shows how the properties are designed:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<path d="M 60 50 h 150 l 70 50 l -70 50 h -150 l 40 -50 z" class="side" />
 * 	<path d="M 60 50 v 100" class="dashside" />
 * 	<circle cx="60" cy="100" class="center" />
 * 	<path d="M 60 50 h -20 m 0 100 h 20 v 20 m 40 0 v -70 m 180 0 v 70 m -70 0 v -20" class="dashassist" />
 * 	<path d="M 40 50 v 100" class="arrowline" />
 * 	<path d="M 60 170 h 40" class="arrowline" />
 * 	<path d="M 210 170 h 70" class="arrowline" />
 * 	<path d="M 60 50 v -20 m 150 0 v 20 m -130 50 h -20" class="texthyphon" />
 * 	<text x="45" y="25" class="timeText">time</text>
 * 	<text x="190" y="25" class="timeText">endTime</text>
 * 	<text x="105" y="95" class="timeText">rotation</text>
 * 	<text x="110" y="115" class="timeText">Center</text>
 * 	<text x="35" y="125" class="propertyText" transform="rotate(-90, 35, 125)">height</text>
 * 	<text x="60" y="190" class="propertyText">tailLength</text>
 * 	<text x="210" y="190" class="propertyText">headLength</text>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.Chevron with name <code>sClassName</code>
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
sap.gantt.shape.ext.Chevron.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of the path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for the 'd' attribute of 'path'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the value of d by using property <code>time</code>, <code>endTime</code>,
 * <code>tailLength</code>, <code>headLength</code>, and <code>height</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>headLength</code>.
 * 
 * <p>
 * Head length of a chevron shape.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>headLength</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.getHeadLength = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of a chevron shape.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>isClosed</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>isClosed</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.getIsClosed = function(oData,oRowInfo) { return false; };

/**
 * Gets the value of property <code>isDuration</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>isDuration</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.getIsDuration = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.Chevron.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.Chevron.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>tailLength</code>.
 * 
 * <p>
 * Tail length of a chevron shape.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>tailLength</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.getTailLength = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getHeadLength headLength}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fHeadLength New value for property <code>headLength</code>
 * @returns {sap.gantt.shape.ext.Chevron} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.setHeadLength = function(fHeadLength) { return new sap.gantt.shape.ext.Chevron(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>15</code>.
 * @param {float} fHeight New value for property <code>height</code>
 * @returns {sap.gantt.shape.ext.Chevron} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.setHeight = function(fHeight) { return new sap.gantt.shape.ext.Chevron(); };

/**
 * Sets a new value for property {@link #getIsClosed isClosed}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsClosed New value for property <code>isClosed</code>
 * @returns {sap.gantt.shape.ext.Chevron} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.setIsClosed = function(bIsClosed) { return new sap.gantt.shape.ext.Chevron(); };

/**
 * Sets a new value for property {@link #getIsDuration isDuration}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsDuration New value for property <code>isDuration</code>
 * @returns {sap.gantt.shape.ext.Chevron} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.setIsDuration = function(bIsDuration) { return new sap.gantt.shape.ext.Chevron(); };

/**
 * Sets a new value for property {@link #getTailLength tailLength}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fTailLength New value for property <code>tailLength</code>
 * @returns {sap.gantt.shape.ext.Chevron} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Chevron.prototype.setTailLength = function(fTailLength) { return new sap.gantt.shape.ext.Chevron(); };


// ---- sap.gantt.shape.ext.Cursor --------------------------------------------------------------------------

/**
 * Creates and initializes a new Cursor class.
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
 * <li>{@link #getIsClosed isClosed} : boolean (default: true)</li>
 * <li>{@link #getLength length} : float (default: 10)</li>
 * <li>{@link #getWidth width} : float (default: 5)</li>
 * <li>{@link #getPointHeight pointHeight} : float (default: 5)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Cursor shape class using SVG tag 'path'. It's usually treated as a transient shape.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/paths.html#PathElement SVG specification 1.1 for the 'path' element} for
 * detail information of the html tag.<br/><br/>
 * The following SVG image shows how the properties are designed:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<path d="M 100 50 v 80 l 70 40 l 70 -40 v -80 z" class="side" />
 * 	<path d="M 170 50 v 120" class="dashside" />
 * 	<circle cx="170" cy="110" class="center" />
 * 	<path d="M 240 50 v -20 m -140 0 v 20 h -20 m 20 80 h -20 m 0 40 h 90" class="dashassist" />
 * 	<path d="M 100 30 h 140" class="arrowline" />
 * 	<path d="M 80 50 v 80" class="arrowline" />
 * 	<path d="M 80 130 v 40" class="arrowline" />
 * 	<path d="M 190 110 h -20 m 0 60 v 20" class="texthyphon" />
 * 	<text x="155" y="205" class="timeText">time</text>
 * 	<text x="175" y="105" class="timeText">rotation</text>
 * 	<text x="180" y="125" class="timeText">Center</text>
 * 	<text x="150" y="45" class="propertyText">length</text>
 * 	<text x="35" y="100" class="propertyText">width</text>
 * 	<text x="35" y="145" class="propertyText">point</text>
 * 	<text x="25" y="165" class="propertyText">Height</text>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.Cursor with name <code>sClassName</code>
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
sap.gantt.shape.ext.Cursor.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of the path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the value of d by using properties <code>length</code>, 
 * <code>width</code>, and <code>pointHeight</code>.
 * The value of these properties can be retrieved using the corresponding getters (getLength, getWidth, and getPointHeight). 
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>isClosed</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>isClosed</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.getIsClosed = function(oData,oRowInfo) { return false; };

/**
 * Gets the value of property <code>length</code>.
 * 
 * <p>
 * Length of a cursor.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>length</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.getLength = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.Cursor.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.Cursor.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>pointHeight</code>.
 * 
 * <p>
 * Point height of a cursor.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>pointHeight</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.getPointHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>width</code>.
 * 
 * <p>
 * Width of a cursor.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getIsClosed isClosed}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsClosed New value for property <code>isClosed</code>
 * @returns {sap.gantt.shape.ext.Cursor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.setIsClosed = function(bIsClosed) { return new sap.gantt.shape.ext.Cursor(); };

/**
 * Sets a new value for property {@link #getLength length}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {float} fLength New value for property <code>length</code>
 * @returns {sap.gantt.shape.ext.Cursor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.setLength = function(fLength) { return new sap.gantt.shape.ext.Cursor(); };

/**
 * Sets a new value for property {@link #getPointHeight pointHeight}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fPointHeight New value for property <code>pointHeight</code>
 * @returns {sap.gantt.shape.ext.Cursor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.setPointHeight = function(fPointHeight) { return new sap.gantt.shape.ext.Cursor(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fWidth New value for property <code>width</code>
 * @returns {sap.gantt.shape.ext.Cursor} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Cursor.prototype.setWidth = function(fWidth) { return new sap.gantt.shape.ext.Cursor(); };


// ---- sap.gantt.shape.ext.Diamond --------------------------------------------------------------------------

/**
 * Creates and initializes a new Diamond class.
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
 * <li>{@link #getIsClosed isClosed} : boolean (default: true)</li>
 * <li>{@link #getVerticalDiagonal verticalDiagonal} : float (default: 12)</li>
 * <li>{@link #getHorizontalDiagonal horizontalDiagonal} : float (default: 12)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Diamond shape class using SVG tag 'path'. It's usually treated as transient shape.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/paths.html#PathElement SVG specification 1.1 for the 'path' element} for
 * detail information of the html tag.<br/><br/>
 * The following SVG image shows how the properties are designed:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<path d="M 40 120 l 100 -70 l 100 70 l -100 70 z" class="side" />
 * 	<path d="M 40 120 h 200 m -100 -70 v 140" class="dashside" />
 * 	<circle cx="140" cy="120" class="center" />
 * 	<path d="M 40 120 v 90 m 200 0 v -90 m -100 -70 h 120 m 0 140 h -120" class="dashassist" />
 * 	<path d="M 40 210 h 200" class="arrowline" />
 * 	<path d="M 260 50 v 140" class="arrowline" />
 * 	<path d="M 140 50 v -20 m 0 90 h 20" class="texthyphon" />
 * 	<text x="125" y="25" class="timeText">time</text>
 * 	<text x="155" y="115" class="timeText">rotation</text>
 * 	<text x="160" y="135" class="timeText">Center</text>
 * 	<text x="70" y="205" class="propertyText">horizontalDiagonal</text>
 * 	<text x="255" y="185" class="propertyText" transform="rotate(-90, 255, 185)">vertitalDiagonal</text>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.Diamond with name <code>sClassName</code>
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
sap.gantt.shape.ext.Diamond.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of the path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for the 'd' attribute of 'path'}.
 * 
 * You application should not configure this value. Instead, the getter calculates value of d by using properties <code>horizontalDiagonal</code> and <code>verticalDiagonal</code>.
 * The value of these properties can be retrieved using the corresponding getters (getHorizontalDiagonal and getVerticalDiagonal). 
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>horizontalDiagonal</code>.
 * 
 * <p>
 * Horizontal diagonal of a diamond shape.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>horizontalDiagonal</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.getHorizontalDiagonal = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>isClosed</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>isClosed</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.getIsClosed = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.Diamond.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.Diamond.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>verticalDiagonal</code>.
 * 
 * <p>
 * Vertical diagonal of a diamond shape.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>verticalDiagonal</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.getVerticalDiagonal = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getHorizontalDiagonal horizontalDiagonal}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {float} fHorizontalDiagonal New value for property <code>horizontalDiagonal</code>
 * @returns {sap.gantt.shape.ext.Diamond} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.setHorizontalDiagonal = function(fHorizontalDiagonal) { return new sap.gantt.shape.ext.Diamond(); };

/**
 * Sets a new value for property {@link #getIsClosed isClosed}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsClosed New value for property <code>isClosed</code>
 * @returns {sap.gantt.shape.ext.Diamond} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.setIsClosed = function(bIsClosed) { return new sap.gantt.shape.ext.Diamond(); };

/**
 * Sets a new value for property {@link #getVerticalDiagonal verticalDiagonal}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {float} fVerticalDiagonal New value for property <code>verticalDiagonal</code>
 * @returns {sap.gantt.shape.ext.Diamond} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Diamond.prototype.setVerticalDiagonal = function(fVerticalDiagonal) { return new sap.gantt.shape.ext.Diamond(); };


// ---- sap.gantt.shape.ext.Iconfont --------------------------------------------------------------------------

/**
 * Creates and initializes a new Iconfont class.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getCollectionName collectionName} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Iconfont shape class using SVG tag 'text'. This shape is usually used to display icons in Gantt chart.
 * 
 * @extend sap.gantt.shape.Text
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.Iconfont with name <code>sClassName</code>
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
sap.gantt.shape.ext.Iconfont.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>collectionName</code>.
 * 
 * <p>
 * The collectionName of iconfont as mentioned in property <code>text</code>
 * @param {object} oData Shape data.
 * @return {string} Value of property <code>collectionName</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont.prototype.getCollectionName = function(oData) { return ""; };

/**
 * Gets the value of property <code>fontFamily</code>.
 * 
 * <p>
 * Font family of Iconfont.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>fontFamily</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont.prototype.getFontFamily = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.Iconfont.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.Iconfont.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>name</code>.
 * 
 * <p>
 * The name of iconfont as mentioned in property <code>text</code>
 * @param {object} oData Shape data.
 * @return {string} Value of property <code>name</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont.prototype.getName = function(oData) { return ""; };

/**
 * Gets the value of property <code>text</code>.
 * 
 * <p>
 * The text string of iconfont is read via {@link sap.ui.IconPool.getIconInfo} passing Name and CollectionName as parameters.
 * To use the SAP openui5 predefined icons, don't set the property CollectionName.
 * To use the icons in other collections, you need register first. 
 * For example, after calling function sap.ushell.iconfonts.registerFiori2IconFont, then you can use the icon collection with names "BusinessSuiteInAppSymbols", "Fiori2"...
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>text</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont.prototype.getText = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getCollectionName collectionName}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sCollectionName New value for property <code>collectionName</code>
 * @returns {sap.gantt.shape.ext.Iconfont} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont.prototype.setCollectionName = function(sCollectionName) { return new sap.gantt.shape.ext.Iconfont(); };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.gantt.shape.ext.Iconfont} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Iconfont.prototype.setName = function(sName) { return new sap.gantt.shape.ext.Iconfont(); };


// ---- sap.gantt.shape.ext.Pentangle --------------------------------------------------------------------------

/**
 * Creates and initializes a new Pentangle class.
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
 * <li>{@link #getRadius radius} : float (default: 10)</li>
 * <li>{@link #getRadius2 radius2} : float (default: undefined)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Pentangle shape class using SVG tag 'polygon'. It's usually treated as a transient shape.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElement SVG specification 1.1 for the 'polygon' element} for
 * detail information of the html tag.<br/><br/>
 * Following SVG image shows how the properties are designed:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<path d="M 120 50 l 23.4 49 l52.3 7.8 l -37.9 38.2 l 9 53.8 l-46.8 -25.4 l -46.7 25.4 l 8.9 -53.8 l -37.8 -38.2 l 52.2 -7.8 z" class="side" />
 * 	<path d="M 120 50 v 125" class="dashside" />
 * 	<circle cx="120" cy="132" class="center" />
 * 	<path d="M 120 50 h 100 m 0 82 h -100 m 0 43 h 100" class="dashassist" />
 * 	<path d="M 220 50 v 82" class="arrowline" />
 * 	<path d="M 220 132 v 43" class="arrowline" />
 * 	<path d="M 120 50 v -20 m 0 102 h -20" class="texthyphon" />
 * 	<text x="105" y="25" class="timeText">time</text>
 * 	<text x="20" y="130" class="timeText">rotation</text>
 * 	<text x="25" y="150" class="timeText">Center</text>
 * 	<text x="225" y="95" class="propertyText">radius</text>
 * 	<text x="225" y="160" class="propertyText">radius2</text>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.Pentangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.Pentangle with name <code>sClassName</code>
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
sap.gantt.shape.ext.Pentangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.Pentangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.Pentangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * points attribute of the polygon element.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute SVG 1.1 specification for 'points' attribute of 'polygon'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the value of d by using properties <code>radius</code> and <code>radus2</code>.
 * The value of these properties can be retrieved using the corresponding getters (getRadius and getRadius2). 
 * If your application overwrites the value of d by configuration or code, accurate results cannot be guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Pentangle.prototype.getPoints = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>radius</code>.
 * 
 * <p>
 * Radius of a pentangle shape.
 * 
 * This property influences property <code>points</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>radius</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Pentangle.prototype.getRadius = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>radius2</code>.
 * 
 * <p>
 * The second radius of a pentangle shape. If this property is not provided, radius2 is set to a value making 
 * radius and radius2 fit the golden ratio.
 * 
 * This property influences property <code>points</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>radius2</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Pentangle.prototype.getRadius2 = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getRadius radius}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {float} fRadius New value for property <code>radius</code>
 * @returns {sap.gantt.shape.ext.Pentangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Pentangle.prototype.setRadius = function(fRadius) { return new sap.gantt.shape.ext.Pentangle(); };

/**
 * Sets a new value for property {@link #getRadius2 radius2}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>undefined</code>.
 * @param {float} fRadius2 New value for property <code>radius2</code>
 * @returns {sap.gantt.shape.ext.Pentangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Pentangle.prototype.setRadius2 = function(fRadius2) { return new sap.gantt.shape.ext.Pentangle(); };


// ---- sap.gantt.shape.ext.rls.Relationship --------------------------------------------------------------------------

/**
 * Creates and initializes a Relationship object
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
 * <li>{@link #getHtmlClass htmlClass} : string (default: relationshipLine)</li>
 * <li>{@link #getCategory category} : string (default: sap.gantt.shape.ShapeCategory.Relationship)</li>
 * <li>{@link #getIsClosed isClosed} : boolean (default: true)</li>
 * <li>{@link #getIsDuration isDuration} : boolean (default: false)</li>
 * <li>{@link #getStroke stroke} : string (default: #000000)</li>
 * <li>{@link #getFill fill} : string (default: #000000)</li>
 * <li>{@link #getType type} : sap.gantt.shape.ext.rls.RelationshipType (default: FinishToFinish)</li>
 * <li>{@link #getFromObjectPath fromObjectPath} : string</li>
 * <li>{@link #getFromShapeId fromShapeId} : string</li>
 * <li>{@link #getFromDataId fromDataId} : string</li>
 * <li>{@link #getToObjectPath toObjectPath} : string</li>
 * <li>{@link #getToShapeId toShapeId} : string</li>
 * <li>{@link #getToDataId toDataId} : string</li>
 * <li>{@link #getShowStart showStart} : boolean (default: false)</li>
 * <li>{@link #getShowEnd showEnd} : boolean (default: true)</li>
 * <li>{@link #getLShapeforTypeFS lShapeforTypeFS} : boolean (default: true)</li>
 * <li>{@link #getMinXLen minXLen} : float (default: 10)</li>
 * <li>{@link #getArrowSideLength arrowSideLength} : float (default: 5)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedShape selectedShape} : sap.gantt.shape.ext.rls.SelectedRelationship</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no is given
 * @param {object} [mSetting] Initial settings for the new control
 * 
 * @class 
 * Enables users to visualize the relationship between elements.
 * 
 * <p>Four types of relationships are supported and L-shaped lines are supported for the finish-to-start type.</p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship = function(sId,mSetting) {};
/**
 * Destroys the selectedShape in the aggregation {@link #getSelectedShape selectedShape}.
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.destroySelectedShape = function() { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Creates a new subclass of class sap.gantt.shape.ext.rls.Relationship with name <code>sClassName</code>
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
sap.gantt.shape.ext.rls.Relationship.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getArrowSideLength arrowSideLength}.
 * 
 * Size of the arrow
 * 
 * Default value is <code>5</code>.
 * @returns {float} Value of property <code>arrowSideLength</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getArrowSideLength = function() { return 0.0; };

/**
 * Gets current value of property {@link #getCategory category}.
 * 
 * Category name
 * 
 * Default value is <code>sap.gantt.shape.ShapeCategory.Relationship</code>.
 * @returns {string} Value of property <code>category</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getCategory = function() { return ""; };

/**
 * Gets current value of property {@link #getFill fill}.
 * 
 * Fill color of the relationship shape (the color of the arrow and the square at the ends)
 * 
 * Default value is <code>#000000</code>.
 * @returns {string} Value of property <code>fill</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getFill = function() { return ""; };

/**
 * Gets the data of the predecessor element
 * @returns {string} Data of predecessor
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getFromDataId = function(oData) { return ""; };

/**
 * Gets the path of predecessor object
 * @returns {string} Path of predecessor element
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getFromObjectPath = function(oData) { return ""; };

/**
 * Gets the shape ID of the predecessor element
 * @returns {string} Shape ID of the predecessor element
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getFromShapeId = function(oData) { return ""; };

/**
 * Gets the CSS class of the relationship shape
 * @returns {string} CSS class name of the relationship shape
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getHtmlClass = function(oData) { return ""; };

/**
 * Gets current value of property {@link #getIsClosed isClosed}.
 * 
 * Indicates whether the shape is a closed path
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>isClosed</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getIsClosed = function() { return false; };

/**
 * Gets current value of property {@link #getIsDuration isDuration}.
 * 
 * Indicates whether the width of the polygon represents the duration of time
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isDuration</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getIsDuration = function() { return false; };

/**
 * Gets the'L' shape switch
 * @returns {boolean} 'L' shape configuration (whether the system uses L-shaped lines to represent finish-start relationships)
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getLShapeforTypeFS = function(oData) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.rls.Relationship.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.rls.Relationship.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinXLen minXLen}.
 * 
 * Minimum length for relationship lines
 * 
 * Default value is <code>10</code>.
 * @returns {float} Value of property <code>minXLen</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getMinXLen = function() { return 0.0; };

/**
 * Gets content of aggregation {@link #getSelectedShape selectedShape}.
 * 
 * @returns {sap.gantt.shape.ext.rls.SelectedRelationship}
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getSelectedShape = function() { return new sap.gantt.shape.ext.rls.SelectedRelationship(); };

/**
 * Gets whether the end shape is visible
 * @returns {boolean} End shape configuration (whether the end shape is visible
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getShowEnd = function(oData) { return false; };

/**
 * Gets whether the start shape is visible 
 * @returns {boolean} Start shape configuration (whether the start shape is visible)
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getShowStart = function(oData) { return false; };

/**
 * Gets current value of property {@link #getStroke stroke}.
 * 
 * Line color of the relationship shape
 * 
 * Default value is <code>#000000</code>.
 * @returns {string} Value of property <code>stroke</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getStroke = function() { return ""; };

/**
 * Gets the data of the successor element
 * @returns {string} Data of the successor element
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getToDataId = function(oData) { return ""; };

/**
 * Gets the path of the successor element
 * @returns {string} Path of the successor element
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getToObjectPath = function(oData) { return ""; };

/**
 * Gets the shape ID of the successor element
 * @returns {string} Shape ID of the successor element
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getToShapeId = function(oData) { return ""; };

/**
 * Gets the relationship type 
 * @returns {number} The type number (from 0 to 3)
 * @param {object} oData Raw data object
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.getType = function(oData) { return 0.0; };

/**
 * Sets a new value for property {@link #getArrowSideLength arrowSideLength}.
 * 
 * Size of the arrow
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fArrowSideLength New value for property <code>arrowSideLength</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setArrowSideLength = function(fArrowSideLength) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getCategory category}.
 * 
 * Category name
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.shape.ShapeCategory.Relationship</code>.
 * @param {string} sCategory New value for property <code>category</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setCategory = function(sCategory) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getFill fill}.
 * 
 * Fill color of the relationship shape (the color of the arrow and the square at the ends)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>#000000</code>.
 * @param {string} sFill New value for property <code>fill</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setFill = function(sFill) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getFromDataId fromDataId}.
 * 
 * Data of predecessor element
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFromDataId New value for property <code>fromDataId</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setFromDataId = function(sFromDataId) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getFromObjectPath fromObjectPath}.
 * 
 * Path of predecessor element
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFromObjectPath New value for property <code>fromObjectPath</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setFromObjectPath = function(sFromObjectPath) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getFromShapeId fromShapeId}.
 * 
 * Shape of predecessor element
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFromShapeId New value for property <code>fromShapeId</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setFromShapeId = function(sFromShapeId) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getHtmlClass htmlClass}.
 * 
 * CSS class name of the relationship shape
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>relationshipLine</code>.
 * @param {string} sHtmlClass New value for property <code>htmlClass</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setHtmlClass = function(sHtmlClass) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getIsClosed isClosed}.
 * 
 * Indicates whether the shape is a closed path
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsClosed New value for property <code>isClosed</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setIsClosed = function(bIsClosed) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getIsDuration isDuration}.
 * 
 * Indicates whether the width of the polygon represents the duration of time
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsDuration New value for property <code>isDuration</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setIsDuration = function(bIsDuration) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getLShapeforTypeFS lShapeforTypeFS}.
 * 
 * Indicates whether an 'L' shape is used for the finish-to-start type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLShapeforTypeFS New value for property <code>lShapeforTypeFS</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setLShapeforTypeFS = function(bLShapeforTypeFS) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getMinXLen minXLen}.
 * 
 * Minimum length for relationship lines
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {float} fMinXLen New value for property <code>minXLen</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setMinXLen = function(fMinXLen) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets the aggregated {@link #getSelectedShape selectedShape}.
 * @param {sap.gantt.shape.ext.rls.SelectedRelationship} oSelectedShape The selectedShape to set
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setSelectedShape = function(oSelectedShape) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getShowEnd showEnd}.
 * 
 * Indicates whether the end point (arrow) of the relationship shape is visible
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowEnd New value for property <code>showEnd</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setShowEnd = function(bShowEnd) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getShowStart showStart}.
 * 
 * Indicates whether the start point (square) of the relationship shape is visible
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowStart New value for property <code>showStart</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setShowStart = function(bShowStart) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getStroke stroke}.
 * 
 * Line color of the relationship shape
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>#000000</code>.
 * @param {string} sStroke New value for property <code>stroke</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setStroke = function(sStroke) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getToDataId toDataId}.
 * 
 * Data of successor element
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sToDataId New value for property <code>toDataId</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setToDataId = function(sToDataId) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getToObjectPath toObjectPath}.
 * 
 * Path of successor element
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sToObjectPath New value for property <code>toObjectPath</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setToObjectPath = function(sToObjectPath) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getToShapeId toShapeId}.
 * 
 * Shape of successor element
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sToShapeId New value for property <code>toShapeId</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setToShapeId = function(sToShapeId) { return new sap.gantt.shape.ext.rls.Relationship(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Relationship type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>FinishToFinish</code>.
 * @param {sap.gantt.shape.ext.rls.RelationshipType} sType New value for property <code>type</code>
 * @returns {sap.gantt.shape.ext.rls.Relationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.Relationship.prototype.setType = function(sType) { return new sap.gantt.shape.ext.rls.Relationship(); };


// ---- sap.gantt.shape.ext.rls.RelationshipType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.shape.ext.rls.RelationshipType.toString = function() { return ""; };

// ---- sap.gantt.shape.ext.rls.SelectedRelationship --------------------------------------------------------------------------

/**
 * Creates and initializes a SelectedRelationship object
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
 * <li>{@link #getStroke stroke} : string</li>
 * <li>{@link #getStrokeWidth strokeWidth} : int</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.shape.ext.rls.Relationship#constructor sap.gantt.shape.ext.rls.Relationship}
 * can be used as well.
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * <p>
 *     Provides an implementation of shape for drawing relationships with red and wider lines when they are selected. 
 * </p>
 * 
 * 
 * @extends sap.gantt.shape.ext.rls.Relationship
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.rls.SelectedRelationship with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.rls.Relationship.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of <code>fill</code>.
 * 
 * <p> 
 * See {@link sap.gantt.shape.Shape#getFill} for a detailed description of <code>fill</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @return {string} Hard coded value: "red".
 * @public
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.prototype.getFill = function(oData) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.rls.SelectedRelationship.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of <code>stroke</code>.
 * 
 * <p>
 * See {@link sap.gantt.shape.Shape#getStroke} for a detailed description of <code>stroke</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @return {string} Hard coded value: "red".
 * @public
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.prototype.getStroke = function(oData) { return ""; };

/**
 * Gets the value of <code>strokeWidth</code>.
 * 
 * <p>
 * See {@link sap.gantt.shape.Shape#getStrokeWidth} for a detailed description of <code>strokeWidth</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @return {int} Hard coded value: 2.
 * @public
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.prototype.getStrokeWidth = function(oData) { return 0; };

/**
 * Sets a new value for property {@link #getStroke stroke}.
 * 
 * Line color of the relationship.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStroke New value for property <code>stroke</code>
 * @returns {sap.gantt.shape.ext.rls.SelectedRelationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.prototype.setStroke = function(sStroke) { return new sap.gantt.shape.ext.rls.SelectedRelationship(); };

/**
 * Sets a new value for property {@link #getStrokeWidth strokeWidth}.
 * 
 * Width of the relationship line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iStrokeWidth New value for property <code>strokeWidth</code>
 * @returns {sap.gantt.shape.ext.rls.SelectedRelationship} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.rls.SelectedRelationship.prototype.setStrokeWidth = function(iStrokeWidth) { return new sap.gantt.shape.ext.rls.SelectedRelationship(); };


// ---- sap.gantt.shape.ext.TextRepeat --------------------------------------------------------------------------

/**
 * Creates and initializes a repeatable text pattern defined for later reuse.
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
 * <li>{@link #getChildTagName childTagName} : string (default: pattern)</li>
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li>
 * <li>{@link #getWidth width} : float</li>
 * <li>{@link #getHeight height} : float (default: 15)</li>
 * <li>{@link #getDx dx} : string</li>
 * <li>{@link #getDy dy} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getFontSize fontSize} : int</li>
 * <li>{@link #getFontFamily fontFamily} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * A TextRepeat definition shape is used to define graphic objects which can be replicated
 * ("tiled") at fixed intervals in the x and y axes to cover the areas to be painted.
 * The text patterns are defined using a 'pattern' element and then referenced by the
 * 'fill' and 'stroke' properties on a given graphics element to indicate that the element
 * will be filled or stroked with the referenced pattern.
 * 
 * @extend sap.gantt.shape.Definitions
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.TextRepeat with name <code>sClassName</code>
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
sap.gantt.shape.ext.TextRepeat.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of the <code>childTagName</code> property.
 * 
 * <p>
 * Child element of 'defs' element. The default value is 'pattern'.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>childTagName</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getChildTagName = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of the <code>dx</code> property.
 * 
 * <p>
 * dx value of the start position of text pattern tiles.
 * See {@link http://www.w3.org/TR/SVG/text.html#TSpanElementDXAttribute SVG 1.1 specification for 'dx' attribute of 'text'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>dx</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getDx = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of the <code>dy</code> property.
 * 
 * <p>
 * dy value of the start position of text pattern tiles.
 * See {@link http://www.w3.org/TR/SVG/text.html#TSpanElementDYAttribute SVG 1.1 specification for 'dy' attribute of 'text'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>dy</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getDy = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of the <code>fontFamily</code> property.
 * 
 * <p>
 * Text font family.
 * See {@link http://www.w3.org/TR/SVG/text.html#FontSizeProperty SVG 1.1 specification for 'font-family' property of 'text'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>fontFamily</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getFontFamily = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of the <code>fontSize</code> property.
 * 
 * <p>
 * Text font size.
 * See {@link http://www.w3.org/TR/SVG/text.html#FontSizeProperty SVG 1.1 specification for 'font-size' property of 'text'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {int} Value of the <code>fontSize</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getFontSize = function(oData,oRowInfo) { return 0; };

/**
 * Gets the value of the <code>height</code> property.
 * 
 * <p>
 * Height of a reference rectangle.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementHeightAttribute SVG 1.1 specification for 'height' attribute of 'pattern'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {float} Value of the <code>height</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.TextRepeat.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.TextRepeat.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of the <code>text</code> property.
 * 
 * <p>
 * Text string.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>text</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getText = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of the <code>width</code> property.
 * 
 * <p>
 * Width of a reference rectangle.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementWidthAttribute SVG 1.1 specification for 'width' attribute of 'pattern'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {float} Value of the <code>width</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of the <code>x</code> property.
 * 
 * <p>
 * x coordinate of the text pattern tiles.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementXAttribute SVG 1.1 specification for 'x' attribute of 'pattern'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using property <code>time</code> as a base.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {float} Value of the <code>x</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of the <code>y</code> property.
 * 
 * <p>
 * y coordinate of the text pattern tiles.
 * See {@link http://www.w3.org/TR/SVG/pservers.html#PatternElementYAttribute SVG 1.1 specification for 'y' attribute of 'pattern'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {float} Value of the <code>y</code> property.
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.getY = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getChildTagName childTagName}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>pattern</code>.
 * @param {string} sChildTagName New value for property <code>childTagName</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setChildTagName = function(sChildTagName) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getDx dx}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDx New value for property <code>dx</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setDx = function(sDx) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getDy dy}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDy New value for property <code>dy</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setDy = function(sDy) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getFontFamily fontFamily}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFontFamily New value for property <code>fontFamily</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setFontFamily = function(sFontFamily) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getFontSize fontSize}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iFontSize New value for property <code>fontSize</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setFontSize = function(iFontSize) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>15</code>.
 * @param {float} fHeight New value for property <code>height</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setHeight = function(fHeight) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setText = function(sText) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fWidth New value for property <code>width</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setWidth = function(fWidth) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getX x}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setX = function(fX) { return new sap.gantt.shape.ext.TextRepeat(); };

/**
 * Sets a new value for property {@link #getY y}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.gantt.shape.ext.TextRepeat} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.TextRepeat.prototype.setY = function(fY) { return new sap.gantt.shape.ext.TextRepeat(); };


// ---- sap.gantt.shape.ext.Triangle --------------------------------------------------------------------------

/**
 * Creates and initializes a new Triangle class.
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
 * <li>{@link #getIsClosed isClosed} : boolean (default: true)</li>
 * <li>{@link #getBase base} : float (default: 10)</li>
 * <li>{@link #getHeight height} : float (default: 10)</li>
 * <li>{@link #getDistanceOfyAxisHeight distanceOfyAxisHeight} : float (default: 5)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Triangle shape class using SVG tag 'path'. It's usually treated as a transient shape.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/paths.html#PathElement SVG specification 1.1 for the 'path' element} for
 * detail information of the html tag.<br/><br/>
 * The following image shows how the properties are designed:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<path d="M 200 50 l -150 100 l 180 0 z" class="side" />
 * 	<path d="M 200 50 v 100" class="dashside" />
 * 	<circle cx="200" cy="100" class="center" />
 * 	<path d="M 200 50 h -170 m 0 100 h 20 v 40 m 180 0 v -40 m -30 0 v 20" class="dashassist" />
 * 	<path d="M 30 50 v 100" class="arrowline" />
 * 	<path d="M 50 170 h 150" class="arrowline" />
 * 	<path d="M 50 190 h 180" class="arrowline" />
 * 	<path d="M 200 50 v -20 m 0 70 h 20" class="texthyphon" />
 * 	<text x="185" y="25" class="timeText">time</text>
 * 	<text x="225" y="95" class="timeText">rotation</text>
 * 	<text x="230" y="114" class="timeText">Center</text>
 * 	<text x="35" y="100" class="propertyText">height</text>
 * 	<text x="55" y="165" class="propertyText">distanceOfyAxisHeight</text>
 * 	<text x="100" y="185" class="propertyText">base</text>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.Triangle with name <code>sClassName</code>
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
sap.gantt.shape.ext.Triangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>base</code>.
 * 
 * <p>
 * Base side of a triangle.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>base</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.getBase = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the value of d by using properties <code>time</code>, <code>base</code>, <code>height</code>, 
 * and <code>distanceOfyAxisHeight</code>. The value of these properties can be retrieved from the corresponding getters (getTime, getBase, getHeight, and getDistanceOfyAxisHeight).
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>distanceOfyAxisHeight</code>.
 * 
 * <p>
 * distanceOfyAxisHeight of a triangle, which refers to the distance between the left point to the altitude of the triangle.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>distanceOfyAxisHeight</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.getDistanceOfyAxisHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of a triangle.
 * 
 * This property influences property <code>d</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>isClosed</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>isClosed</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.getIsClosed = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.Triangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.Triangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getBase base}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {float} fBase New value for property <code>base</code>
 * @returns {sap.gantt.shape.ext.Triangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.setBase = function(fBase) { return new sap.gantt.shape.ext.Triangle(); };

/**
 * Sets a new value for property {@link #getDistanceOfyAxisHeight distanceOfyAxisHeight}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {float} fDistanceOfyAxisHeight New value for property <code>distanceOfyAxisHeight</code>
 * @returns {sap.gantt.shape.ext.Triangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.setDistanceOfyAxisHeight = function(fDistanceOfyAxisHeight) { return new sap.gantt.shape.ext.Triangle(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {float} fHeight New value for property <code>height</code>
 * @returns {sap.gantt.shape.ext.Triangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.setHeight = function(fHeight) { return new sap.gantt.shape.ext.Triangle(); };

/**
 * Sets a new value for property {@link #getIsClosed isClosed}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsClosed New value for property <code>isClosed</code>
 * @returns {sap.gantt.shape.ext.Triangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.ext.Triangle.prototype.setIsClosed = function(bIsClosed) { return new sap.gantt.shape.ext.Triangle(); };


// ---- sap.gantt.shape.ext.ubc.UbcBorderPath --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Bar Chart.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to represent a planned capacity line.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * 	<path d="M 10 65 h 280 v 90 h -280 z" class="dashside" />
 * 	<path d="M 10 90 h 40 v 55 h 80 v -65 h 40 v 40 h 40 v -20 h 40 v -20 h 40" class="side" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.Path
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcBorderPath with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Path.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of the path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * 'd' attribute has powerful usages. For more information, see {@link http://www.w3.org/TR/SVG/paths.html#PathDataBNF BNF grammar} for detail.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>enableSelection</code>.
 * 
 * <p>
 * This property determines whether a shape is enabled for a selection behavior. The default value for a Utilization Line Chart is false.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcBorderPath.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b>You can provide stroke with HTML colors and the URL reference to a paint server can be provided. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "blue".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * <p>The default value is 0.3.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcBorderPath.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to represent the background of an over capacity zone.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 65 h 280 v 90 h -280 z" class="dashside" />
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ubc.UbcPolygon
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ubc.UbcPolygon.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide fill with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}. The default value 
 * of 'fill' is the URL reference. 
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>points</code>.
 * 
 * <p>
 * points attribute of the polygon element.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute SVG 1.1 specification for the 'points' attribute of 'polygon'}.
 * The value of 'points' is calculated by the coordinates of four vertices of a visible area.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.prototype.getPoints = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> You can provide stroke with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#CAC7BA".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * <p>The default value is 0.3.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ubc.UbcPolygon --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Base class for <code> sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon</code>, <code> sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon</code>,
 * <code> sap.gantt.shape.ext.ubc.UbcShortagePolygon</code>, <code> sap.gantt.shape.ext.ubc.UbcUsedPolygon</code>.
 * 
 * <p>This base class defines a number of shared methods. 
 * </p>
 * 
 * @extends sap.gantt.shape.Polygon
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcPolygon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcPolygon with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Polygon.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcPolygon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>enableSelection</code>.
 * 
 * <p>
 * This property determines whether a shape is enabled for a selection behavior. The default value for a Utilization Line Chart is false.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcPolygon.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcPolygon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcPolygon.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to represent a shortage capacity area.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 65 h 280 v 90 h -280 z" class="dashside" />
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * 	<polygon points="10,155 10,90 50,90 50,155 130,155 130,80 170,80 170,155 250,155 250,80 290,80 290,155" fill="url(#pEx2)" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ubc.UbcPolygon
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ubc.UbcPolygon.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide the fill attribute with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#FF0000".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>points</code>.
 * 
 * <p>
 * points attribute of polygon element.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute SVG 1.1 specification for the 'points' attribute of 'polygon'}.
 * The value of 'points' is calculated by using the coordinates of all points for the shortage capacity area.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.prototype.getPoints = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> HTML color and url reference to paint server can be provided to stroke. Paint server definitions usually comes from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#CAC7BA".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * <p>The default value is 0.3.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ubc.UbcTooltipRectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to represent an invisible rectangle with tooltips. Note that a tooltip appears 
 * only when the title tag is specified on the rectangle.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 65 h 280 v 90 h -280 z" class="dashside" />
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * 	<path d="M 10 105 h 40 v 5 h 80 v -20 h 40 v -10 h 40 v 20 h 80" class="dashassist" />
 * 	<path d="M 10 90 h 40 v 55 h 80 v -65 h 40 v 40 h 40 v -20 h 40 v -20 h 40" class="side" />
 * 	<rect x="10" y="65" width="40" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>Capacity: 50&#10;Required Capacity: 65</title></rect>
 * 	<rect x="50" y="65" width="80" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>Capacity: 45&#10;Required Capacity: 10</title></rect>
 * 	<rect x="130" y="65" width="40" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>Capacity: 65&#10;Required Capacity: 75</title></rect>
 * 	<rect x="170" y="65" width="40" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>Capacity: 75&#10;Required Capacity: 35</title></rect>
 * 	<rect x="210" y="65" width="40" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>Capacity: 55&#10;Required Capacity: 55</title></rect>
 * 	<rect x="250" y="65" width="40" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>Capacity: 55&#10;Required Capacity: 75</title></rect>
 * 	</svg>
 * </p>
 * 
 * @extends sap.gantt.shape.Rectangle
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcTooltipRectangle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Rectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>enableSelection</code>.
 * 
 * <p>
 * This property determines whether a shape is enabled for a selection behavior. The default value for the Utilization Line Chart is false.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Gets the value of property <code>fillOpacity</code>.
 * 
 * <p>
 * Standard SVG 'fill-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillOpacityProperty SVG 1.1 specification for 'fill-opacity'}.
 * The value of fillOpacity for a rectangle with tooltips must be 0.
 * </p>
 * <p>The default value is 0.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>fillOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getFillOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of a rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementHeightAttribute SVG 1.1 specification for the 'height' attribute of 'rect'}.
 * </p>
 * <p>The default value is the height of the row minus 1px, which is the width of stroke.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcTooltipRectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>strokeOpacity</code>.
 * 
 * <p>
 * Standard SVG 'stroke-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeOpacityProperty SVG 1.1 specification for 'stroke-opacity'}.
 * The value of strokeOpacity for a rectangle with tooltips must be 0.
 * </p>
 * <p>The default value is 0.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getStrokeOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>title</code>.
 * 
 * A title is visualized as a tooltip in web browsers.
 * <b>Notes:</b> Use character entities to perform simple text tabbing and breaking. (Use "&#09;" for tab and "&#10;" for break.)
 * See {@link http://www.w3.org/TR/SVG/struct.html#TitleElement SVG 1.1 specification for 'title'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>title</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getTitle = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>width</code>.
 * 
 * <p>
 * Width of a rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementWidthAttribute SVG 1.1 specification for the 'width' attribute of 'rect'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the width by using property <code>start_date</code> and
 * property <code>end_date</code>. If your application overwrites the getter by configuration or code, accurate results cannot be guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x</code>.
 * 
 * <p>
 * x coordinate of the top-left point of a rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementXAttribute SVG 1.1 specification for the 'x' attribute of 'rect'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the value of x by using property <code>start_date</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y</code>.
 * 
 * <p>
 * y coordinate of the top-left point of a rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementYAttribute SVG 1.1 specification for the 'y' attribute of 'rect'}.
 * 
 * Your application should not configure this value. Instead, the getter calculates the value of y by using parameter <code>oRowInfo</code>.
 * </p>
 * <p>The default value is the y coordinate of the top-left point of the row.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcTooltipRectangle.prototype.getY = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to represent an unplanned capacity area.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 65 h 280 v 90 h -280 z" class="dashside" />
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * 	<polygon points="50,155 50,110 130,110 130,155 170,155 170,80 210,80 210,155" fill="#ffffff" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ubc.UbcPolygon
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ubc.UbcPolygon.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide the fill attribute with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#40d44c".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>points</code>.
 * 
 * <p>
 * points attribute of the polygon element.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute SVG 1.1 specification for the 'points' attribute of 'polygon'}.
 * The value of 'points' is calculated by using the coordinates of all points of the unplanned capacity area.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon.prototype.getPoints = function(oData,oRowInfo) { return ""; };


// ---- sap.gantt.shape.ext.ubc.UbcUsedPolygon --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to represent a healthy planned capacity area.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 65 h 280 v 90 h -280 z" class="dashside" />
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * 	<polygon points="10,105 50,105 50,145 130,145 130,90 170,90 170,120 210,120 210,100 290,100 290,155 10,155" fill="#efefef" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ubc.UbcPolygon
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcUsedPolygon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UbcUsedPolygon with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ubc.UbcPolygon.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcUsedPolygon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide the fill attribute with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#CAC7BA".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcUsedPolygon.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UbcUsedPolygon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UbcUsedPolygon.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>points</code>.
 * 
 * <p>
 * points attribute of polygon element.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute SVG 1.1 specification for 'points' attribute of 'polygon'}.
 * The value of 'points' is calculated by using the coordinates of all points for the healthy planned capacity area.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UbcUsedPolygon.prototype.getPoints = function(oData,oRowInfo) { return ""; };


// ---- sap.gantt.shape.ext.ubc.UtilizationBarChart --------------------------------------------------------------------------

/**
 * Creates and initializes a new Utilization Bar Chart (UBC) container class.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * UBC is a complex shape. This class is the outer container with tag='g'. All fragments are aggregated into this container.
 * You can remove a fragment from the container if your application does not need it. 
 * 
 * <p>The container has six aggregations: 
 * <ul>
 * 		<li>{@link sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon}(used to represent the OverCapacity Zone area),</li>
 * 		<li>{@link sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon}(used to represent the Unplanned Capacity area),</li>
 * 		<li>{@link sap.gantt.shape.ext.ubc.UbcShortageCapacityPolygon}(used to the draw Shortage area),</li>
 * 		<li>{@link sap.gantt.shape.ext.ubc.UbcUsedPolygon}(used to represent the HealthyPlanned Capacity area),</li>
 * 		<li>{@link sap.gantt.shape.ext.ubc.UbcBorderPath}(used to represent the planned capacity line),</li>
 * 		<li>{@link sap.gantt.shape.ext.ubc.UbcTooltipRectangle}(used to represent a rectangle with invisible tooltips for each period of capacity change).</li>
 * </ul>
 * </p>
 * 
 * <p>A super class <code> sap.gantt.shape.ext.ubc.UbcPolygon</code> is abstracted because the four polygons in this container (UbcOverCapacityZonePolygon, 
 * UbcUnderCapacityZonePolygon, UbcShortageCapacityPolygon, and UbcUsedPolygon) share similar logic.</p>
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * <rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUbc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx2" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#9E1F63" stroke-width="0.5"></path></pattern></defs>
 * 	<polygon points="10,65 290,65 290,155 10,155" fill="url(#pUbc)" />
 * 	<polygon points="50,155 50,110 130,110 130,155 170,155 170,80 210,80 210,155" fill="#ffffff" />
 * 	<polygon points="10,155 10,90 50,90 50,155 130,155 130,80 170,80 170,155 250,155 250,80 290,80 290,155" fill="url(#pEx2)" />
 * 	<polygon points="10,105 50,105 50,145 130,145 130,90 170,90 170,120 210,120 210,100 290,100 290,155 10,155" fill="#efefef" />
 * 	<path d="M 10 90 h 40 v 55 h 80 v -65 h 40 v 40 h 40 v -20 h 40 v -20 h 40" class="side" />
 * 	<rect x="10" y="65" width="40" height="90" opacity="0"><title>Capacity: 50&#10;Required Capacity: 65</title></rect>
 * 	<rect x="50" y="65" width="80" height="90" opacity="0"><title>Capacity: 45&#10;Required Capacity: 10</title></rect>
 * 	<rect x="130" y="65" width="40" height="90" opacity="0"><title>Capacity: 65&#10;Required Capacity: 75</title></rect>
 * 	<rect x="170" y="65" width="40" height="90" opacity="0"><title>Capacity: 75&#10;Required Capacity: 35</title></rect>
 * 	<rect x="210" y="65" width="40" height="90" opacity="0"><title>Capacity: 55&#10;Required Capacity: 55</title></rect>
 * 	<rect x="250" y="65" width="40" height="90" opacity="0"><title>Capacity: 55&#10;Required Capacity: 75</title></rect>
 * 	<path d="M 20 80 l 10 -30 m 120 0 l -10 30 m 140 10 l -10 -40 m -10 90 l -10 30 m -150 0 l -10 -30" class="dashassist" />
 * 	<text x="20" y="40" class="propertyText">OverCapacity</text>
 * 	<text x="40" y="60" class="propertyText">Zone</text>
 * 	<text x="140" y="40" class="propertyText">Planned</text>
 * 	<text x="160" y="60" class="propertyText">Capacity</text>
 * 	<text x="220" y="40" class="propertyText">Shortage</text>
 * 	<text x="180" y="190" class="propertyText">HealthyPlanned</text>
 * 	<text x="200" y="210" class="propertyText">Capacity</text>
 * 	<text x="60" y="190" class="propertyText">UnPlanned</text>
 * 	<text x="80" y="210" class="propertyText">Capacity</text>
 * </svg>
 * </p>
 * 
 * <p>An example of the structure of data to feed utilization bar chart: </br>
 * <code>
 * {	
 * 		bc_capacity: {
 * 			id: "capacity_0",
 * 			period: [
 * 				{
 * 					start_date: "20160123000000",
 * 					supply: "9",
 * 					demand: "7"
 * 				},{
 * 					start_date: "20160127093400",
 * 					supply: "8",
 * 					demand: "8"
 * 				}
 * 			]
 * 		},
 * 		bc_tooltip: [
 * 				{
 * 					start_date: "20160123000000",
 * 					supply: "9",
 * 					demand: "7",
 * 					end_date: "20160127093400"
 * 				},{
 * 					start_date: "20160127093400",
 * 					supply: "8",
 * 					demand: "8",
 * 					start_date: "20160203134520"
 * 				}
 * 		]
 * }
 * </code>
 * </p>
 * 
 * @extends sap.gantt.shape.Group
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UtilizationBarChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ubc.UtilizationBarChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Group.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UtilizationBarChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>enableSelection</code>.
 * 
 * <p>
 * This property determines whether a shape is enabled for selection behavior. The default value for the Utilization Line Chart is false.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ubc.UtilizationBarChart.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ubc.UtilizationBarChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ubc.UtilizationBarChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.ext.ulc.UlcBorderPath --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to draw dimension lines.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<path d="M 10 85 h 280 v -20 h -280 v 90 h 280 v -70" class="dashside" />
 * 	<path d="M 40 155 l 25 -90 h 50 l 20 30 h 100 l 40 60" class="side" />
 * 	<path d="M 40 155 l 25 -85 h 50 l 20 10 h 100 l 40 75" class="texthyphon" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.Path
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcBorderPath = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcBorderPath with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Path.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcBorderPath.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * 'd' attribute of the path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * The 'd' attribute has powerful usages. See {@link http://www.w3.org/TR/SVG/paths.html#PathDataBNF BNF grammar} for detail.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcBorderPath.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcBorderPath.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcBorderPath.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> You can provide stroke with HTML colors and URL references to paint servers. Paint server definitions usually comes from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcBorderPath.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * <p>The default value is 1.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcBorderPath.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ulc.UlcClipingPath --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to define path data inside {@link sap.gantt.shape.ext.ulc.UlcClipPath}.
 * 
 * @extends sap.gantt.shape.Path
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipingPath = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcClipingPath with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Path.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipingPath.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * 'd' attribute of path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * The 'd' attribute has powerful usages. See {@link http://www.w3.org/TR/SVG/paths.html#PathDataBNF BNF grammar} for detail.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipingPath.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcClipingPath.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipingPath.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.ext.ulc.UlcClipPath --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is a container of {@link sap.gantt.shape.ext.ulc.UlcClipingPath}.
 * 
 * @extends sap.gantt.shape.ClipPath
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipPath = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcClipPath with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ClipPath.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipPath.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>htmlClass</code>.
 * 
 * Customized HTML classes. To provide multiple classes, separate them using space. Note that each UlcClipPath must have a unique 
 * HTML class or a unique set of HTML classes. The 'clip-path' property of UlcOverClipRectangle and UlcUnderClipRectangle identifies HTML classes.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>htmlClass</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipPath.prototype.getHtmlClass = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcClipPath.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcClipPath.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.ext.ulc.UlcDimension --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is a container for {@link sap.gantt.shape.ext.ulc.UlcBorderPath}, {@link sap.gantt.shape.ext.ulc.UlcOverClipRectangle},
 * {@link sap.gantt.shape.ext.ulc.UlcUnderClipRectangle}, {@link sap.gantt.shape.ext.ulc.UlcClipPath}, {@link sap.gantt.shape.ext.ulc.UlcClipingPath}.
 * 
 * <p>For each dimension, it has two colors, one is OverCapacity and the other is UnderCapacity. When the <code>UlcClipPath</code> of a dimension and 
 * <code>UlcOverClipRectangle</code> overlap, which means the utilization rate is above 100%, the overlapped part will be colored by OverCapacity. 
 * The overlapped part of <code>UlcClipPath</code>  and <code>UlcUnderClipRectangle</code> is colored by UnderCapacity. 
 * </p>
 * 
 * <p><code>UlcClipingPath</code> is aggregated in <code>UlcClipPath</code>. <code>UlcClipingPath</code> and <code>UlcBorderPath</code> share the same 
 * value of property 'd'. <code>UlcBorderPath</code> is used to visualize the dimension line.
 * </p>
 * @extends sap.gantt.shape.Group
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcDimension = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcDimension with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Group.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcDimension.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcDimension.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcDimension.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.ext.ulc.UlcMiddleLine --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to draw a middle line, which indicates the position of 50%.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<path d="M 10 85 h 280 v -20 h -280 v 90 h 280 v -70" class="dashside" />
 * 	<path id="middleLine" d="M 10 120 h 280" class="dashassist" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.Line
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcMiddleLine with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Line.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcMiddleLine.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> You can provide the stroke with HTML colors and the URL reference to a paint server. Paint server definitions can be 
 * retrieved from paint servers rendered by {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, 
 * or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#CAC7BA".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeDasharray</code>.
 * 
 * <p>
 * Standard SVG 'stroke-dasharray' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-dasharray'}.
 * </p>
 * <p>The default value is "5,5".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>strokeDasharray</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getStrokeDasharray = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * <p>The default value is 1.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x1</code>.
 * 
 * <p>
 * x coordinate of the start of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementX1Attribute SVG 1.1 specification for 'x1' attribute of 'line'}.
 * 
 * Usually an application does not configure this value. Instead, the getter calculates the value of x1 by using 
 * the view boundary for the visible area in the Gantt Chart.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x1</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getX1 = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x2</code>.
 * 
 * <p>
 * x coordinate of the end of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementX2Attribute SVG 1.1 specification for 'x2' attribute of 'line'}.
 * 
 * Usually an application does not configure this value. Instead, the getter calculates the value of 'x2' by using the 
 * view boundary's terminal point, which is filtered by the visible area in a Gantt Chart.
 * 
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x2</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getX2 = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y1</code>.
 * 
 * <p>
 * y coordinate of the start of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementY1Attribute SVG 1.1 specification for 'y1' attribute of 'line'}.
 * 
 * At the top of each row, a certain amount of space (in the shape of a rectangular frame) is reserved for over capacity area. 
 * You can use 'maxVisibleRatio' in 'shapeConfig' to specify the amount of area to reserve. With the reserved area deducted 
 * from a row, the height of the middle line is set to 50% of the row height.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y1</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getY1 = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y2</code>.
 * 
 * <p>
 * y coordinate of the end of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementY2Attribute SVG 1.1 specification for 'y2' attribute of 'line'}.
 * 
 * y2 shares the same value with y1.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y2</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcMiddleLine.prototype.getY2 = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to draw the over capacity zone background.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUlc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#d16d6d" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 85 h 280 v -20 h -280 v 90 h 280 v -70" class="dashside" />
 * 	<rect id="overBg" x="10" y="65" width="280" height="20" fill="url(#pUlc)" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ulc.UlcRectangle
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ulc.UlcRectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide <code>fill</code> property with the HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}. The default value 
 * of 'fill' is a URL reference.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> HTML colors and url reference to paint server can be provided to stroke. Paint server definitions usually comes from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#CAC7BA".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * <p>The default value is 0.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ulc.UlcOverClipRectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to draw the over clipping rectangle.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUlc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#d16d6d" stroke-width="0.5"></path></pattern></defs>
 * 	<path d="M 10 85 h 280 v -20 h -280 v 90 h 280 v -70" class="dashside" />
 * 	<clippath id="cpSide"><path d="M 40 155 l 25 -90 h 50 l 20 30 h 100 l 40 60" /></clippath>
 * 	<clippath id="cpTexthyphon"><path d="M 40 155 l 25 -85 h 50 l 20 10 h 100 l 40 75" /></clippath>
 * 	<rect id="overSide"x="10" y="65" width="280" height="20" clip-path="url(#cpSide)" fill="url(#pEx)" stroke="none"/>
 * 	<rect id="overTexthyphon" x="10" y="65" width="280" height="20" clip-path="url(#cpTexthyphon)" fill="url(#pEx)" stroke="none"/>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ulc.UlcRectangle
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverClipRectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcOverClipRectangle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ulc.UlcRectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverClipRectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>clipPath</code>.
 * 
 * <p>
 * Standard SVG 'clippath' attribute.
 * See {@link http://www.w3.org/TR/SVG/masking.html#ClipPathProperty SVG 1.1 specification for 'clippath'}.
 * 
 *  The referred ID must be consistent with the HTML class generated by <code>UlcClipPath</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>clipPath</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverClipRectangle.prototype.getClipPath = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide the <code>fill</code> property with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#FF0000".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverClipRectangle.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcOverClipRectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcOverClipRectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.ext.ulc.UlcRectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * Base class for {@link sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle}, {@link sap.gantt.shape.ext.ulc.UlcOverClipRectangle},
 * {@link sap.gantt.shape.ext.ulc.UlcUnderClipRectangle}, {@link sap.gantt.shape.ext.ulc.UlcTooltipRectangle}.
 * 
 * <p>This base class defines a number of shared methods. 
 * </p>
 * 
 * @extends sap.gantt.shape.Rectangle
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcRectangle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Rectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementHeightAttribute SVG 1.1 specification for the 'height' attribute of 'rect'}.
 * The default value of height is calculated by the over capacity rectangle.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcRectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>width</code>.
 * 
 * <p>
 * Width of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementWidthAttribute SVG 1.1 specification for the 'width' attribute of 'rect'}.
 * 
 * Usually an application does not configure this value. Instead, the getter calculates the value of width by using the view boundary for the visible area in a Gantt Chart.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x</code>.
 * 
 * <p>
 * x coordinate of the rectangle left-top point.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementXAttribute SVG 1.1 specification for the 'x' attribute of 'rect'}.
 * 
 * Usually an application does not configure this value. Instead, the getter calculates the value of x by using the view boundary for the visible area in a Gantt Chart.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y</code>.
 * 
 * <p>
 * y coordinate of a rectangle left-top point.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementYAttribute SVG 1.1 specification for 'y' attribute of 'rect'}.
 * 
 * Usually application does not configure this value. Instead getter calculates the value of y using parameter <code>oRowInfo</code>.
 * </p>
 * <p>The default value is y coordinate of the top-left point of the row.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcRectangle.prototype.getY = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ulc.UlcTooltipRectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to create invisible rectangles with tooltips enabled by tag 'title'.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<path d="M 10 85 h 280 v -20 h -280 v 90 h 280 v -70" class="dashside" />
 * 	<path d="M 40 155 l 25 -90 h 50 l 20 30 h 100 l 40 60" class="dashassist" />
 * 	<path d="M 40 155 l 25 -85 h 50 l 20 10 h 100 l 40 75" class="dashassist" />
 * 	<rect x="40" y="65" width="25" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>dimention1: 0-150%&#10;dimention2: 0-110%</title></rect>
 * 	<rect x="65" y="65" width="50" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>dimention1: 150%&#10;dimention2: 110%</title></rect>
 * 	<rect x="115" y="65" width="20" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>dimention1: 150%-70%&#10;dimention2: 110%-105%</title></rect>
 * 	<rect x="135" y="65" width="100" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>dimention1: 70%&#10;dimention2: 105%</title></rect>
 * 	<rect x="235" y="65" width="40" height="90" fill="#cdcdcd" fill-opacity="0.5" stroke="#cdcdcd" stroke-width="0.5"><title>dimention1: 70%-0&#10;dimention2: 105%-0</title></rect>
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ulc.UlcRectangle
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcTooltipRectangle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ulc.UlcRectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>fillOpacity</code>.
 * 
 * <p>
 * Standard SVG 'fill-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillOpacityProperty SVG 1.1 specification for 'fill-opacity'}.
 * The value of fillOpacity for tooltip rectangles must be 0.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>fillOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.prototype.getFillOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementHeightAttribute SVG 1.1 specification for the 'height' attribute of 'rect'}.
 * </p>
 * <p>The default value is the height of the row.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcTooltipRectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>strokeOpacity</code>.
 * 
 * <p>
 * Standard SVG 'stroke-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeOpacityProperty SVG 1.1 specification for 'stroke-opacity'}.
 * The value of strokeOpacity for tooltip rectangles must be 0.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.prototype.getStrokeOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>title</code>.
 * 
 * Title is visualized as a tooltip by browsers.
 * <b>Notes:</b> Use character entities to perform simple text tabbing and breaking. (Use "&#09;" for tab and "&#10;" for break.)
 * See {@link http://www.w3.org/TR/SVG/struct.html#TitleElement SVG 1.1 specification for 'title'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>title</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.prototype.getTitle = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>width</code>.
 * 
 * <p>
 * Width of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementWidthAttribute SVG 1.1 specification for the 'width' attribute of 'rect'}.
 * 
 * Usually an application does not configure this value. Instead, the getter calculates value of width by using the <code>from</code> and
 * <code>to</code> properties.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x</code>.
 * 
 * <p>
 * x coordinate of the rectangle left-top point.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementXAttribute SVG 1.1 specification for 'x' attribute of 'rect'}.
 * 
 * Usually an application does not configure this value. Instead, the getter calculates the value of x by using property <code>from</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcTooltipRectangle.prototype.getX = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ulc.UlcUnderClipRectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a fragment of the Utilization Line Chart.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings of the new control
 * 
 * @class 
 * This shape is used to draw the under clipping rectangle.
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<path d="M 10 85 h 280 v -20 h -280 v 90 h 280 v -70" class="dashside" />
 * 	<clippath id="cpSide"><path d="M 40 155 l 25 -90 h 50 l 20 30 h 100 l 40 60" /></clippath>
 * 	<clippath id="cpTexthyphon"><path d="M 40 155 l 25 -85 h 50 l 20 10 h 100 l 40 75" /></clippath>
 * 	<rect id="underSide" x="10" y="85" width="280" height="70" clip-path="url(#cpSide)" fill="#858585" fill-opacity="0.5" />
 * 	<rect id="underTexthyphone" x="10" y="85" width="280" height="70" clip-path="url(#cpTexthyphon)" fill="#858585" fill-opacity="0.5" />
 * </svg>
 * </p>
 * 
 * @extends sap.gantt.shape.ext.ulc.UlcRectangle
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UlcUnderClipRectangle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.ext.ulc.UlcRectangle.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>clipPath</code>.
 * 
 * <p>
 * Standard SVG 'clippath' attribute.
 * See {@link http://www.w3.org/TR/SVG/masking.html#ClipPathProperty SVG 1.1 specification for 'clippath'}.
 * 
 *  The referred ID must be consistent with the html class generated by <code>UlcClipPath</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>clipPath</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.prototype.getClipPath = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> You can provide the <code>fill</code> property with HTML colors and the URL reference to a paint server. Paint server definitions can be retrieved from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * <p>The default value is "#F2F2F2".</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>fillOpacity</code>.
 * 
 * <p>
 * Standard SVG 'fill-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillOpacityProperty SVG 1.1 specification for 'fill-opacity'}.
 * </p>
 * <p>The default value is 0.3.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>fillOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.prototype.getFillOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementHeightAttribute SVG 1.1 specification for 'height' attribute of 'rect'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>strokeOpacity</code>.
 * 
 * <p>
 * Standard SVG 'stroke-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeOpacityProperty SVG 1.1 specification for 'stroke-opacity'}.
 * </p>
 * <p>The default value is 0.3.</p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>strokeOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.prototype.getStrokeOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y</code>.
 * 
 * <p>
 * y coordinate of the rectangle left-top point.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementYAttribute SVG 1.1 specification for 'y' attribute of 'rect'}.
 * 
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UlcUnderClipRectangle.prototype.getY = function(oData,oRowInfo) { return 0.0; };


// ---- sap.gantt.shape.ext.ulc.UtilizationLineChart --------------------------------------------------------------------------

/**
 * Creates and initializes a new Utilization Line Chart container class.
 * 
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * ULC is a complex shape. This class is the outer container with tag='g'. All fragments are aggregated into this container.
 * You can remove a fragment from the container if your application does not need it.
 * 
 * <p>The container has four aggregations: 
 * <ul>
 * 		<li>{@link sap.gantt.shape.ext.ulc.UlcMiddleLine}(used to draw a middle line, which indicates the position of 50% utilization rate),</li>
 * 		<li>{@link sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle}(used to draw over capacity Zone),</li>
 * 		<li>{@link sap.gantt.shape.ext.ulc.UlcDimension}(used to draw Dimensions, OverCapacityClipping, and UnderCapacityClipping),</li>
 * 		<li>{@link sap.gantt.shape.ext.ulc.UlcTooltipRectangle}(used to draw invisible tooltip rectangles for each period of capacity change).</li>
 * </ul>
 * </p>
 * 
 * <p>
 * Each dimension consists of <code>UlcOverClipRectangle</code>, <code>UlcUnderClipRectangle</code>, <code>UlcClipPath</code>, and <code>UlcBorderPath</code>.
 * <code>UlcClipingPath</code> is aggregated in <code>UlcClipPath</code>.
 * </p>
 * 
 * <p>A super class <code>sap.gantt.shape.ext.ulc.UlcRectangle</code> is abstracted because the other four rectangles(UlcOverCapacityZoneRectangle, 
 * UlcOverClipRectangle, UlcUnderClipRectangle, and UlcTooltipRectangle) share similar logic.
 * </p>
 * 
 * <p>
 * Graphic Effect is:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="8.8cm" viewBox="0 0 300 220" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * <rect x="1" y="1" width="298" height="218" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<defs><pattern class="pattern" id="pUlc" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#efefef"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#6d6d6d" stroke-width="0.5"></path></pattern>
 * 	<pattern class="pattern" id="pEx" patternUnits="userSpaceOnUse" x="0" y="0" width="4" height="4"><rect x="0" width="4" height="4" fill="#f2a5a5"></rect><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2 " stroke="#d16d6d" stroke-width="0.5"></path></pattern></defs>
 * 	<clippath id="cpSide"><path d="M 40 155 l 25 -90 h 50 l 20 30 h 100 l 40 60" /></clippath>
 * 	<clippath id="cpTexthyphon"><path d="M 40 155 l 25 -85 h 50 l 20 10 h 100 l 40 75" /></clippath>
 * 	<rect id="overBg" x="10" y="65" width="280" height="20" fill="url(#pUlc)" />
 * 	<rect id="overSide"x="10" y="65" width="280" height="20" clip-path="url(#cpSide)" fill="url(#pEx)" stroke="none"/>
 * 	<rect id="overTexthyphon" x="10" y="65" width="280" height="20" clip-path="url(#cpTexthyphon)" fill="url(#pEx)" stroke="none"/>
 * 	<rect id="underBg" x="10" y="85" width="280" height="70" fill="#efefef" />
 * 	<path id="middleLine" d="M 10 120 h 280" class="dashassist" />
 * 	<rect id="underSide" x="10" y="85" width="280" height="70" clip-path="url(#cpSide)" fill="#858585" fill-opacity="0.5" />
 * 	<rect id="underTexthyphone" x="10" y="85" width="280" height="70" clip-path="url(#cpTexthyphon)" fill="#858585" fill-opacity="0.5" />
 * 	<path d="M 40 155 l 25 -90 h 50 l 20 30 h 100 l 40 60" class="side" />
 * 	<path d="M 40 155 l 25 -85 h 50 l 20 10 h 100 l 40 75" class="texthyphon" />
 * 	<rect x="40" y="65" width="25" height="90" opacity="0"><title>dimention1: 0-150%&#10;dimention2: 0-110%</title></rect>
 * 	<rect x="65" y="65" width="50" height="90" opacity="0"><title>dimention1: 150%&#10;dimention2: 110%</title></rect>
 * 	<rect x="115" y="65" width="20" height="90" opacity="0"><title>dimention1: 150%-70%&#10;dimention2: 110%-105%</title></rect>
 * 	<rect x="135" y="65" width="100" height="90" opacity="0"><title>dimention1: 70%&#10;dimention2: 105%</title></rect>
 * 	<rect x="235" y="65" width="40" height="90" opacity="0"><title>dimention1: 70%-0&#10;dimention2: 105%-0</title></rect>
 * 	<path d="M 50 70 l 10 -20 m 120 0 l -70 30 m -90 70 l -5 20 m 60 -50 l 40 50 m 50 -30 l 10 55 m 30 -100 l 20 80 l 20 -75" class="dashassist" />
 * 	<text x="20" y="40" class="propertyText"> >100% Zone</text>
 * 	<text x="120" y="40" class="propertyText">OverCapacityClipping</text>
 * 	<text x="10" y="190" class="propertyText"> <100% Zone</text>
 * 	<text x="110" y="190" class="propertyText">50%</text>
 * 	<text x="130" y="210" class="propertyText">UnderCapacityClipping</text>
 * 	<text x="190" y="190" class="timeText">Dimensions</text>
 * </svg>
 * </p>
 * 
 *  <p>An example for the structure of data to feed balance chart: </br>
 * <code>
 * {	
 * 		order: [{
 * 			id: "ulc_0",
 * 			util: [
 * 				{
 * 					dimension: "util_volumn",
 * 					values:[
 * 						{
 * 							from: "20160123000000",
 * 							to: "20160123000000",
 * 							firstOne: true,
 * 							value: 0
 * 						},
 * 						{
 * 							from: "20160124071000",
 * 							to: "20160124071000",
 * 							value: 97.6
 * 						}, {
 * 							from: "20160124071000",
 * 							to: "20160127051300",
 * 							firstOne: true,
 * 							value: 97.6
 * 						},{
 * 							from: "20160127051300",
 * 							to: "20160127051300",
 * 							value: 97.6
 * 						},{
 * 							from: "20160128093312",
 * 							to: "20160128093312",
 * 							lastOne: true,
 * 							value: 0
 * 						}
 * 					]
 * 				},{
 * 					dimension: "util_mass",
 * 					values:[
 * 						{
 * 							from: "20160123000000",
 * 							to: "20160123000000",
 * 							firstOne: true,
 * 							value: 0
 * 						}
 * 						{
 * 							from: "20160124071000",
 * 							to: "20160124071000",
 * 							value: 114.5
 * 						}, {
 * 							from: "20160124071000",
 * 							to: "20160127051300",
 * 							value: 114.5
 * 						},{
 * 							from: "20160127051300",
 * 							to: "20160127051300",
 * 							value: 114.5
 * 						},{
 * 							from: "20160128093312",
 * 							to: "20160128093312",
 * 							lastOne: true,
 * 							value: 0
 * 						}
 * 					]
 * 				}
 * 			]
 * 		}],
 * 		tooltip: [
 * 			{
 * 					from: "20160123000000",
 * 					to: "20160124071000",
 * 					firstOne: true,
 * 					util_volumn: {
 * 						previous: 0,
 * 						next: 97.6
 * 					},
 * 					util_mass:{
 * 						previous: 0,
 * 						next: 114.5
 * 					}
 * 				},{
 * 					from: "20160124071000",
 * 					to: "20160127051300",
 * 					util_volumn: {
 * 						val: 97.6
 * 					},
 * 					util_mass:{ 
 * 						val: 114.5
 * 					}
 * 				},{
 * 					from: "20160127051300",
 * 					to: "20160128093312",
 * 					lastOne: true,
 * 					util_volumn: {
 * 						previous: 97.6,
 * 						next: 0
 * 					},
 * 					util_mass:{
 * 						previous: 114.5,
 * 						next: 0
 * 					}
 * 				}
 * 		]
 * }
 * </code>
 * </p>
 * 
 * @extends sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UtilizationLineChart = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.ext.ulc.UtilizationLineChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Shape.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UtilizationLineChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>enableSelection</code>.
 * 
 * <p>
 * This value controls whether a shape is enabled for selection behavior. The default value for Utilization Line Chart is false.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.ext.ulc.UtilizationLineChart.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.ext.ulc.UtilizationLineChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.ext.ulc.UtilizationLineChart.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.gantt.shape.Group --------------------------------------------------------------------------

/**
 * Creates and initializes a new Group class.
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
 * <li>{@link #getTag tag} : string (default: g)</li>
 * <li>{@link #getRLSAnchors RLSAnchors} : object</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getShapes shapes} : sap.gantt.shape.Shape[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Group shape class using SVG tag 'group'. It is a container shape. Any other shapes can be aggregated under a group.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/struct.html#Groups SVG specification 1.1 for 'group' element} for
 * more information about the HTML tag.<br/><br/>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Group = function(sId,mSettings) {};
/**
 * Adds some shape to the aggregation {@link #getShapes shapes}.
 * @param {sap.gantt.shape.Shape}
 *            oShape the shape to add; if empty, nothing is inserted
 * @returns {sap.gantt.shape.Group} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.addShape = function(oShape) { return new sap.gantt.shape.Group(); };

/**
 * Destroys all the shapes in the aggregation {@link #getShapes shapes}.
 * @returns {sap.gantt.shape.Group} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.destroyShapes = function() { return new sap.gantt.shape.Group(); };

/**
 * Creates a new subclass of class sap.gantt.shape.Group with name <code>sClassName</code>
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
sap.gantt.shape.Group.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Generate a referenceId according to shape data.
 * 
 * <p>
 * 'referenceId' is used to identify Definitions shapes. Aggregation shapes of a Group shape
 * can retrieve the 'referenceId' by their getParentReferenceId method and then consume the
 * corresponding Definition shape.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of the <code>referenceId</code> property.
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.genReferenceId = function(oData,oRowInfo) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.Group.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Group.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * To enable connections between in-row shapes, a custom Group class has to be implemented that extends <code>sap.gantt.shape.Group</code>.
 * Additionally, the <code>getRLSAnchors</code> method has to be implemented for the Relationship class to know the coordinates of the connection points.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowObjectInfo Information about the row and the row data.
 * @return {object} Coordinates of the "from" shape (start) and "to" shape (end)
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.getRLSAnchors = function(oData,oRowObjectInfo) { return new Object(); };

/**
 * Gets content of aggregation {@link #getShapes shapes}.
 * 
 * @returns {sap.gantt.shape.Shape[]}
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.getShapes = function() { return new Array(); };

/**
 * Gets the value of the <code>tag</code> property.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of the <code>tag</code> property.
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Checks for the provided <code>sap.gantt.shape.Shape</code> in the aggregation {@link #getShapes shapes}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.gantt.shape.Shape}
 *           oShape The shape whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.indexOfShape = function(oShape) { return 0; };

/**
 * Inserts a shape into the aggregation {@link #getShapes shapes}.
 * 
 * @param {sap.gantt.shape.Shape}
 *            oShape the shape to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the shape should be inserted at; for
 *              a negative value of <code>iIndex</code>, the shape is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the shape is inserted at
 *              the last position
 * @returns {sap.gantt.shape.Group} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.insertShape = function(oShape,iIndex) { return new sap.gantt.shape.Group(); };

/**
 * Removes all the controls from the aggregation {@link #getShapes shapes}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.gantt.shape.Shape[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.removeAllShapes = function() { return new Array(); };

/**
 * Removes a shape from the aggregation {@link #getShapes shapes}.
 * 
 * @param {int | string | sap.gantt.shape.Shape} vShape The shape to remove or its index or id
 * @returns {sap.gantt.shape.Shape} The removed shape or <code>null</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.removeShape = function(vShape) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getRLSAnchors RLSAnchors}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oRLSAnchors New value for property <code>RLSAnchors</code>
 * @returns {sap.gantt.shape.Group} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.setRLSAnchors = function(oRLSAnchors) { return new sap.gantt.shape.Group(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>g</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Group} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Group.prototype.setTag = function(sTag) { return new sap.gantt.shape.Group(); };


// ---- sap.gantt.shape.Image --------------------------------------------------------------------------

/**
 * Creates and initializes a new Image class.
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
 * <li>{@link #getTag tag} : string (default: image)</li>
 * <li>{@link #getImage image} : string</li>
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li>
 * <li>{@link #getWidth width} : float (default: 20)</li>
 * <li>{@link #getHeight height} : float (default: 20)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Image shape class using SVG tag 'image'. This shape is usually used to represent points in time.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/struct.html#ImageElement SVG specification 1.1 for 'image' element} for
 * more information about the HTML tag.<br/><br/>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Image = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Image with name <code>sClassName</code>
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
sap.gantt.shape.Image.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of the image.
 * See {@link http://www.w3.org/TR/SVG/struct.html#ImageElementHeightAttribute SVG 1.1 specification for 'height' attribute of 'image'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>image</code>.
 * 
 * <p>
 * IRI reference of the image.
 * See {@link http://www.w3.org/TR/SVG/struct.html#ImageElementHrefAttribute SVG 1.1 specification for 'xlink:href' attribute of 'image'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>image</code>.
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.getImage = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.Image.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Image.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b>  We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>width</code>.
 * 
 * <p>
 * Width of the image.
 * See {@link http://www.w3.org/TR/SVG/struct.html#ImageElementWidthAttribute SVG 1.1 specification for 'width' attribute of 'image'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the current value of property <code>x</code>.
 * 
 * <p>
 * x coordinate of the image rectangle.
 * See {@link http://www.w3.org/TR/SVG/struct.html#ImageElementXAttribute SVG 1.1 specification for 'x' attribute of 'image'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using property <code>time</code> as a base
 * and makes some adjustments.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the current value of property <code>y</code>.
 * 
 * <p>
 * y coordinate of the image rectangle.
 * See {@link http://www.w3.org/TR/SVG/struct.html#ImageElementYAttribute SVG 1.1 specification for 'y' attribute of 'image'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using parameter  <code>oRowInfo</code> as a base
 * and makes some adjustments to align the center of the row rectangle along the y axis. 
 * If you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.getY = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>20</code>.
 * @param {float} fHeight New value for property <code>height</code>
 * @returns {sap.gantt.shape.Image} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.setHeight = function(fHeight) { return new sap.gantt.shape.Image(); };

/**
 * Sets a new value for property {@link #getImage image}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sImage New value for property <code>image</code>
 * @returns {sap.gantt.shape.Image} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.setImage = function(sImage) { return new sap.gantt.shape.Image(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>image</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Image} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.setTag = function(sTag) { return new sap.gantt.shape.Image(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>20</code>.
 * @param {float} fWidth New value for property <code>width</code>
 * @returns {sap.gantt.shape.Image} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.setWidth = function(fWidth) { return new sap.gantt.shape.Image(); };

/**
 * Sets a new value for property {@link #getX x}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.gantt.shape.Image} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.setX = function(fX) { return new sap.gantt.shape.Image(); };

/**
 * Sets a new value for property {@link #getY y}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.gantt.shape.Image} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Image.prototype.setY = function(fY) { return new sap.gantt.shape.Image(); };


// ---- sap.gantt.shape.Line --------------------------------------------------------------------------

/**
 * Creates and initializes a new Line class.
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
 * <li>{@link #getTag tag} : string (default: line)</li>
 * <li>{@link #getIsDuration isDuration} : boolean (default: true)</li>
 * <li>{@link #getX1 x1} : float</li>
 * <li>{@link #getY1 y1} : float</li>
 * <li>{@link #getX2 x2} : float</li>
 * <li>{@link #getY2 y2} : float</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Line shape class using SVG tag 'line'. This shape is usually used to represent durations.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElement SVG specification 1.1 for 'line' element} for
 * more information about the HTML tag.<br/><br/>
 * {@link http://www.w3.org/TR/SVG/images/shapes/line01.svg Line samples in SVG specification 1.1}:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="4cm" viewBox="0 0 1200 400" version="1.1">
 * <rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2"/>
 * <g stroke="green">
 *   <line x1="100" y1="300" x2="300" y2="100" stroke-width="5"/>
 *   <line x1="300" y1="300" x2="500" y2="100" stroke-width="10"/>
 *   <line x1="500" y1="300" x2="700" y2="100" stroke-width="15"/>
 *   <line x1="700" y1="300" x2="900" y2="100" stroke-width="20"/>
 *   <line x1="900" y1="300" x2="1100" y2="100" stroke-width="25"/>
 * </g>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Line = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Line with name <code>sClassName</code>
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
sap.gantt.shape.Line.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>isDuration</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {boolean} Value of property <code>isDuration</code>.
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.getIsDuration = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.Line.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Line.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b>  We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>x1</code>.
 * 
 * <p>
 * x coordinate of the start of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementX1Attribute SVG 1.1 specification for 'x1' attribute of 'line'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using property <code>time</code> as a base
 * and makes some adjustments.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x1</code>.
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.getX1 = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x2</code>.
 * 
 * <p>
 * x coordinate of the end of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementX2Attribute SVG 1.1 specification for 'x2' attribute of 'line'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using property <code>endTime</code> as a base
 * and makes some adjustments.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x2</code>.
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.getX2 = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y1</code>.
 * 
 * <p>
 * y coordinate of the start of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementY1Attribute SVG 1.1 specification for 'y1' attribute of 'line'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using parameter <code>oRowInfo</code>,
 * and makes some adjustments to align the center of the row rectangle along the y axis. 
 * If you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y1</code>.
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.getY1 = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y2</code>.
 * 
 * <p>
 * y coordinate of the end of the line.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#LineElementY2Attribute SVG 1.1 specification for 'y2' attribute of 'line'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using parameter <code>oRowInfo</code> as a base
 * and makes some adjustments to align the center of the row rectangle along the y axis. 
 * f you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y2</code>.
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.getY2 = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getIsDuration isDuration}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsDuration New value for property <code>isDuration</code>
 * @returns {sap.gantt.shape.Line} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.setIsDuration = function(bIsDuration) { return new sap.gantt.shape.Line(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>line</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Line} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.setTag = function(sTag) { return new sap.gantt.shape.Line(); };

/**
 * Sets a new value for property {@link #getX1 x1}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX1 New value for property <code>x1</code>
 * @returns {sap.gantt.shape.Line} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.setX1 = function(fX1) { return new sap.gantt.shape.Line(); };

/**
 * Sets a new value for property {@link #getX2 x2}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX2 New value for property <code>x2</code>
 * @returns {sap.gantt.shape.Line} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.setX2 = function(fX2) { return new sap.gantt.shape.Line(); };

/**
 * Sets a new value for property {@link #getY1 y1}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY1 New value for property <code>y1</code>
 * @returns {sap.gantt.shape.Line} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.setY1 = function(fY1) { return new sap.gantt.shape.Line(); };

/**
 * Sets a new value for property {@link #getY2 y2}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY2 New value for property <code>y2</code>
 * @returns {sap.gantt.shape.Line} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Line.prototype.setY2 = function(fY2) { return new sap.gantt.shape.Line(); };


// ---- sap.gantt.shape.Path --------------------------------------------------------------------------

/**
 * Creates and initializes a new Path class.
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
 * <li>{@link #getTag tag} : string (default: path)</li>
 * <li>{@link #getIsClosed isClosed} : boolean (default: false)</li>
 * <li>{@link #getFill fill} : string (default: none)</li>
 * <li>{@link #getD d} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Path shape class using SVG tag 'path'.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/paths.html SVG specification 1.1 for 'path' element} for
 * more information about the HTML tag.<br/><br/>
 * 
 * {@link http://www.w3.org/TR/SVG/images/paths/triangle01.svg Sample of closed path in SVG specification 1.1}:<br/>
 * <svg width="4cm" height="4cm" viewBox="0 0 400 400"  xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <rect x="1" y="1" width="398" height="398" fill="none" stroke="blue" />
 * <path d="M 100 100 L 300 100 L 200 300 z"  fill="red" stroke="blue" stroke-width="3" />
 * </svg><br/>
 * 
 * {@link http://www.w3.org/TR/SVG/images/paths/cubic01.svg Sample of open curve path in SVG specification 1.1}: <br/>
 * <svg width="5cm" height="4cm" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <style>.Border { fill:none; stroke:blue; stroke-width:1 } .Connect { fill:none; stroke:#888888; stroke-width:2 }
 * .SamplePath { fill:none; stroke:red; stroke-width:5 } .EndPoint { fill:none; stroke:#888888; stroke-width:2 }
 * .CtlPoint { fill:#888888; stroke:none } .AutoCtlPoint { fill:none; stroke:blue; stroke-width:4 }
 * .Label { font-size:22; font-family:Verdana }</style>
 * <rect class="Border" x="1" y="1" width="498" height="398" />
 * <polyline class="Connect" points="100,200 100,100" />
 * <polyline class="Connect" points="250,100 250,200" />
 * <polyline class="Connect" points="250,200 250,300" />
 * <polyline class="Connect" points="400,300 400,200" />
 * <path class="SamplePath" d="M100,200 C100,100 250,100 250,200 S400,300 400,200" />
 * <circle class="EndPoint" cx="100" cy="200" r="10" />
 * <circle class="EndPoint" cx="250" cy="200" r="10" />
 * <circle class="EndPoint" cx="400" cy="200" r="10" />
 * <circle class="CtlPoint" cx="100" cy="100" r="10" />
 * <circle class="CtlPoint" cx="250" cy="100" r="10" />
 * <circle class="CtlPoint" cx="400" cy="300" r="10" />
 * <circle class="AutoCtlPoint" cx="250" cy="300" r="9" />
 * <text class="Label" x="25" y="70">M100,200 C100,100 250,100 250,200</text>
 * <text class="Label" x="325" y="350" style="text-anchor:middle">S400,300 400,200</text>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Path = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Path with name <code>sClassName</code>
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
sap.gantt.shape.Path.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * The 'd' attribute has very powerful grammar. See {@link http://www.w3.org/TR/SVG/paths.html#PathDataBNF BNF grammar} for more information.
 * Rich extension of paths is provided in namespace <code>sap.gantt.shape.ext</code>.<br/>
 * This shape provides a default implementation of the d attribute:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * <marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * <style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * .arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * <rect x="1" y="1" width="298" height="98" fill="none" stroke="blue" stroke-width="0.5"/>
 * <path d="M 80,50 c 0,-50 80,-50 80,0 c 0,50 80,50 80,0" class="side" />
 * <circle cx="80" cy="50" class="center" />
 * <circle cx="240" cy="50" class="center" />
 * <path d="M 80,70 v -20 m 160 0 v -20" class="texthyphon" />
 * <text x="65" y="85" class="timeText">time</text>
 * <text x="220" y="25" class="timeText">endTime</text>
 * </svg>
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property {@link #getFill fill}.
 * 
 * Default value is <code>none</code>.
 * @returns {string} Value of property <code>fill</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.getFill = function() { return ""; };

/**
 * Gets the value of property <code>isClosed</code>.
 * 
 * <p>
 * When this value is true, the 'fill' attribute is applied. Otherwise, the 'fill' attribute is none.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {boolean} Value of property <code>isClosed</code>.
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.getIsClosed = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.Path.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Path.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getD d}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sD New value for property <code>d</code>
 * @returns {sap.gantt.shape.Path} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.setD = function(sD) { return new sap.gantt.shape.Path(); };

/**
 * Sets a new value for property {@link #getFill fill}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>none</code>.
 * @param {string} sFill New value for property <code>fill</code>
 * @returns {sap.gantt.shape.Path} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.setFill = function(sFill) { return new sap.gantt.shape.Path(); };

/**
 * Sets a new value for property {@link #getIsClosed isClosed}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsClosed New value for property <code>isClosed</code>
 * @returns {sap.gantt.shape.Path} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.setIsClosed = function(bIsClosed) { return new sap.gantt.shape.Path(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>path</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Path} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Path.prototype.setTag = function(sTag) { return new sap.gantt.shape.Path(); };


// ---- sap.gantt.shape.Polygon --------------------------------------------------------------------------

/**
 * Creates and initializes a new Polygon class.
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
 * <li>{@link #getTag tag} : string (default: polygon)</li>
 * <li>{@link #getPoints points} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Polygon shape class using SVG tag 'polygon'.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElement SVG specification 1.1 for 'polygon' element} for
 * more information about the HTML tag.<br/><br/>
 * 
 * {@link http://www.w3.org/TR/SVG/images/shapes/polygon01.svg Sample of 'polygon' in SVG specification 1.1}:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2" />
 * <polygon fill="red" stroke="blue" stroke-width="10" points="350,75  379,161 469,161 397,215 423,301 350,250 277,301 303,215 231,161 321,161" />
 * <polygon fill="lime" stroke="blue" stroke-width="10" points="850,75  958,137.5 958,262.5 850,325 742,262.6 742,137.5" />
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Polygon = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Polygon with name <code>sClassName</code>
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
sap.gantt.shape.Polygon.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.gantt.shape.Polygon.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Polygon.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>points</code>.
 * 
 * <p>
 * Points attribute of the polygon element.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolygonElementPointsAttribute SVG 1.1 specification for 'points' attribute of 'polygon'}.
 * Rich extension of paths is provided in namespace <code>sap.gantt.shape.ext</code>.<br/>
 * This shape provides a default implementation of points:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="98" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<polygon points="115.4,30 150,10 184.6,30 184.6,70 150,90 115.4,70" class="side" />
 * 	<circle cx="150" cy="50" class="center" />
 * 	<path d="M 150,30 v 20 h 20" class="texthyphon" />
 * 	<text x="135" y="20" class="timeText">time</text>
 * 	<text x="190" y="50" class="timeText">rotation</text>
 * 	<text x="200" y="70" class="timeText">Center</text>
 * </svg>
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.Polygon.prototype.getPoints = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Polygon.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getPoints points}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPoints New value for property <code>points</code>
 * @returns {sap.gantt.shape.Polygon} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Polygon.prototype.setPoints = function(sPoints) { return new sap.gantt.shape.Polygon(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>polygon</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Polygon} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Polygon.prototype.setTag = function(sTag) { return new sap.gantt.shape.Polygon(); };


// ---- sap.gantt.shape.Polyline --------------------------------------------------------------------------

/**
 * Creates and initializes a new Polyline class.
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
 * <li>{@link #getTag tag} : string (default: polyline)</li>
 * <li>{@link #getFill fill} : string (default: none)</li>
 * <li>{@link #getPoints points} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Polyline shape class using SVG tag 'polyline'.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolylineElement SVG specification 1.1 for 'polyline' element} for
 * more information about the HTML tag.<br/><br/>
 * 
 * {@link http://www.w3.org/TR/SVG/images/shapes/polyline01.svg Sample of 'polyline' in SVG specification 1.1}:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2" />
 * <polyline fill="none" stroke="blue" stroke-width="10" points="50,375
 * 150,375 150,325 250,325 250,375 350,375 350,250 450,250 450,375 550,375 550,175 650,175 650,375
 * 750,375 750,100 850,100 850,375 950,375 950,25 1050,25 1050,375 1150,375" />
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Polyline = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Polyline with name <code>sClassName</code>
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
sap.gantt.shape.Polyline.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getFill fill}.
 * 
 * Default value is <code>none</code>.
 * @returns {string} Value of property <code>fill</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.Polyline.prototype.getFill = function() { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.Polyline.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Polyline.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>points</code>.
 * 
 * <p>
 * points attribute of the polygon shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#PolylineElementPointsAttribute SVG 1.1 specification for 'points' attribute of 'polyline'}.
 * This shape provides a default implementation of points:<br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * 	<defs><marker id="arrowend" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 0 l 10 5 l -10 5 l 4 -5 z" fill="#6d6d6d" /></marker>
 * 	<marker id="arrowstart" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="12" markerHeight="9" orient="auto"><path d="M 0 5 l 10 -5 l -4 5 l 4 5 z" fill="#6d6d6d" /></marker></defs>
 * 	<style>.side{stroke-width:2;stroke:#1C75BC;fill:none;} .dashside{stroke-width:1;stroke:#1C75BC;fill:none; stroke-dasharray:5,1;} .dashassist{stroke-width:1;stroke:#6d6d6d;fill:none; stroke-dasharray:5,1;}
 * 	.arrowline{stroke-width:1;stroke:#6d6d6d;fill:none;marker-end:url(#arrowend);marker-start:url(#arrowstart);} .center{r:3;fill:#6d6d6d;stroke:#9E1F63;} .texthyphon{stroke-width:1;stroke:#9E1F63;fill:none} .propertyText{stroke:#6d6d6d;} .timeText{stroke:#9E1F63;} </style>
 * 	<rect x="1" y="1" width="298" height="98" fill="none" stroke="blue" stroke-width="0.5"/>
 * 	<polyline points="120,50 140,50 150,30 154,74 160,50 180,50" class="side" />
 * 	<circle cx="120" cy="50" class="center" />
 * 	<path d="M 120,30 v 20 h -20" class="texthyphon" />
 * 	<text x="105" y="20" class="timeText">time</text>
 * 	<text x="25" y="50" class="timeText">rotation</text>
 * 	<text x="30" y="70" class="timeText">Center</text>
 * </svg>
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>points</code>.
 * @public
 * 
 */
sap.gantt.shape.Polyline.prototype.getPoints = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Polyline.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getFill fill}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>none</code>.
 * @param {string} sFill New value for property <code>fill</code>
 * @returns {sap.gantt.shape.Polyline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Polyline.prototype.setFill = function(sFill) { return new sap.gantt.shape.Polyline(); };

/**
 * Sets a new value for property {@link #getPoints points}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sPoints New value for property <code>points</code>
 * @returns {sap.gantt.shape.Polyline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Polyline.prototype.setPoints = function(sPoints) { return new sap.gantt.shape.Polyline(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>polyline</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Polyline} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Polyline.prototype.setTag = function(sTag) { return new sap.gantt.shape.Polyline(); };


// ---- sap.gantt.shape.Rectangle --------------------------------------------------------------------------

/**
 * Creates and initializes a new Rectangle class.
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
 * <li>{@link #getTag tag} : string (default: rect)</li>
 * <li>{@link #getIsDuration isDuration} : boolean (default: true)</li>
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li>
 * <li>{@link #getWidth width} : float</li>
 * <li>{@link #getHeight height} : float (default: 15)</li>
 * <li>{@link #getRx rx} : string (default: 0)</li>
 * <li>{@link #getRy ry} : string (default: 0)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID of the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Rectangle shape class using SVG tag 'rect'. This shape is usually used to represent durations.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElement SVG specification 1.1 for 'rect' element} for
 * more information about the HTML tag.<br/><br/>
 * {@link http://www.w3.org/TR/SVG/images/shapes/rect01.svg Rectangle sample in SVG specification 1.1}:<br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="4cm" viewBox="0 0 1200 400" version="1.1">
 * <rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2"/>
 * <rect x="400" y="100" width="400" height="200" fill="yellow" stroke="navy" stroke-width="10"/>
 * </svg><br/>
 * 
 * {@link http://www.w3.org/TR/SVG/images/shapes/rect02.svg Rectangle sample with rounded corner in SVG specification 1.1}: <br/>
 * <svg xmlns="http://www.w3.org/2000/svg" width="12cm" height="4cm" viewBox="0 0 1200 400" version="1.1">
 * 	<rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2"/>
 * 	<rect x="100" y="100" width="400" height="200" rx="50" fill="green"/>
 * 	<g transform="translate(700 210) rotate(-30)">
 * 		<rect x="0" y="0" width="400" height="200" rx="50" fill="none" stroke="purple" stroke-width="30"/>
 * 	</g>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Rectangle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Rectangle with name <code>sClassName</code>
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
sap.gantt.shape.Rectangle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * Height of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementHeightAttribute SVG 1.1 specification for 'height' attribute of 'rect'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getHeight = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>isDuration</code>.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {boolean} Value of property <code>isDuration</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getIsDuration = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.Rectangle.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Rectangle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>rx</code>.
 * 
 * <p>
 * Rx of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementRXAttribute SVG 1.1 specification for 'rx' attribute of 'rect'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>rx</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getRx = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>ry</code>.
 * 
 * <p>
 * Ry of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementRYAttribute SVG 1.1 specification for 'ry' attribute of 'rect'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>ry</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getRy = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> TWe do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>width</code>.
 * 
 * <p>
 * Width of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementWidthAttribute SVG 1.1 specification for 'width' attribute of 'rect'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using properties <code>time</code> and
 * <code>endTime</code>. If you override the default value calculated by the getter, proper rendering is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>width</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x</code>.
 * 
 * <p>
 * x coordinate of the top-left corner of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementXAttribute SVG 1.1 specification for 'x' attribute of 'rect'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using property <code>time</code> as a base.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y</code>.
 * 
 * <p>
 * y coordinate of the top-left corner of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/shapes.html#RectElementYAttribute SVG 1.1 specification for 'y' attribute of 'rect'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using parameter <code>oRowInfo</code> as a base
 * and uses property <code>height</code> as an offset to align the center of the row rectangle along the y axis. 
 * If you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.getY = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>15</code>.
 * @param {float} fHeight New value for property <code>height</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setHeight = function(fHeight) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getIsDuration isDuration}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bIsDuration New value for property <code>isDuration</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setIsDuration = function(bIsDuration) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getRx rx}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sRx New value for property <code>rx</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setRx = function(sRx) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getRy ry}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sRy New value for property <code>ry</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setRy = function(sRy) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>rect</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setTag = function(sTag) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fWidth New value for property <code>width</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setWidth = function(fWidth) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getX x}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setX = function(fX) { return new sap.gantt.shape.Rectangle(); };

/**
 * Sets a new value for property {@link #getY y}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.gantt.shape.Rectangle} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Rectangle.prototype.setY = function(fY) { return new sap.gantt.shape.Rectangle(); };


// ---- sap.gantt.shape.SelectedShape --------------------------------------------------------------------------

/**
 * Constructor for a new SelectedShape.
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
 * <li>{@link #getFill fill} : string (default: none)</li>
 * <li>{@link #getFillOpacity fillOpacity} : float (default: 0)</li>
 * <li>{@link #getStrokeOpacity strokeOpacity} : float (default: 0)</li>
 * <li>{@link #getHeight height} : int (default: 15)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.gantt.shape.Path#constructor sap.gantt.shape.Path}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * <p>
 *     Provides an implementation of selected shapes, allowing you to create a highlighting effect by drawing the selected shapes with red and thicker strokes. 
 * </p>
 * 
 * 
 * @extends sap.gantt.shape.Path
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.SelectedShape = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.SelectedShape with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.gantt.shape.Path.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.gantt.shape.SelectedShape.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>d</code>.
 * 
 * <p>
 * d attribute of the path element.
 * See {@link http://www.w3.org/TR/SVG/paths.html#DAttribute SVG 1.1 specification for 'd' attribute of 'path'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using properties <code>time</code>, <code>endTime</code>,
 * <code>tailLength</code>, <code>headLength</code>, and <code>height</code>.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>d</code> or null if the generated d is invalid according to the given data.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getD = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>enableDnD</code>.
 * 
 * <p>
 * This value determines whether the selectedShape of a shape is enabled for drag-and-drop.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {boolean} Value of property <code>enableDnD</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getEnableDnD = function(oData,oRowInfo) { return false; };

/**
 * Gets the value of property <code>enableSelection</code>.
 * 
 * <p>
 * This value determines whether the selectedShape of a shape is enabled for selection.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Gets current value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> HTML color and url reference to paint server can be provided to fill. Paint server definitions usually comes from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property {@link #getFillOpacity fillOpacity}.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>fillOpacity</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getFillOpacity = function() { return 0.0; };

/**
 * Gets the value of property <code>height</code>.
 * 
 * <p>
 * This value determines the height of the selectedShape.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @return {number} Value of property <code>height</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getHeight = function(oData) { return 0.0; };

/**
 * Gets current value of property <code>isDuration</code>.
 * 
 * <p>
 * When this flag is set to true, the shape is called 'duration shape'. And <code>time</code> stands for startTime, <code>endTime</code> stands for end time.
 * When this flag is set to be false, the shape is called 'transient shape'. And only <code>time</code> is used.
 * Usually these 3 properties are used to determine x position of one shape.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>isDuration</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getIsDuration = function(oData,oRowInfo) { return false; };

/**
 * Returns a metadata object for class sap.gantt.shape.SelectedShape.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.SelectedShape.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> An HTML color and URL reference to an SVG definition can be provided for strokes. SVG definitions usually come from SVG definitions rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable}, or {@link sap.gantt.GanttChart}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property {@link #getStrokeOpacity strokeOpacity}.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>strokeOpacity</code>
 * 
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getStrokeOpacity = function() { return 0.0; };

/**
 * Gets the value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>transform</code>.
 * 
 * <p>
 * Standard SVG 'transform' attribute.
 * See {@link http://www.w3.org/TR/SVG/coords.html#TransformAttribute SVG 1.1 specifica6tion for 'transform'}.
 * The implementation of getTransform() provides some logic to enable properties <code>rotationCenter</code> and <code>rotationAngle</code>. 
 * If you override the default value calculated by the getter, proper rotation is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>transform</code>.
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.getTransform = function(oData,oRowInfo) { return ""; };

/**
 * Sets a new value for property {@link #getFill fill}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>none</code>.
 * @param {string} sFill New value for property <code>fill</code>
 * @returns {sap.gantt.shape.SelectedShape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.setFill = function(sFill) { return new sap.gantt.shape.SelectedShape(); };

/**
 * Sets a new value for property {@link #getFillOpacity fillOpacity}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fFillOpacity New value for property <code>fillOpacity</code>
 * @returns {sap.gantt.shape.SelectedShape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.setFillOpacity = function(fFillOpacity) { return new sap.gantt.shape.SelectedShape(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>15</code>.
 * @param {int} iHeight New value for property <code>height</code>
 * @returns {sap.gantt.shape.SelectedShape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.setHeight = function(iHeight) { return new sap.gantt.shape.SelectedShape(); };

/**
 * Sets a new value for property {@link #getStrokeOpacity strokeOpacity}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fStrokeOpacity New value for property <code>strokeOpacity</code>
 * @returns {sap.gantt.shape.SelectedShape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.SelectedShape.prototype.setStrokeOpacity = function(fStrokeOpacity) { return new sap.gantt.shape.SelectedShape(); };


// ---- sap.gantt.shape.Shape --------------------------------------------------------------------------

/**
 * Creates and initializes a new Shape class.
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
 * <li>{@link #getTag tag} : string</li>
 * <li>{@link #getCategory category} : string (default: sap.gantt.shape.ShapeCategory.InRowShape)</li>
 * <li>{@link #getHtmlClass htmlClass} : string</li>
 * <li>{@link #getIsDuration isDuration} : boolean (default: false)</li>
 * <li>{@link #getTime time} : string</li>
 * <li>{@link #getEndTime endTime} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getAriaLabel ariaLabel} : string</li>
 * <li>{@link #getXBias xBias} : float (default: 0)</li>
 * <li>{@link #getYBias yBias} : float (default: 0)</li>
 * <li>{@link #getFill fill} : sap.gantt.ValueSVGPaintServer</li>
 * <li>{@link #getStrokeOpacity strokeOpacity} : float (default: 1)</li>
 * <li>{@link #getFillOpacity fillOpacity} : float (default: 1)</li>
 * <li>{@link #getStroke stroke} : sap.gantt.ValueSVGPaintServer</li>
 * <li>{@link #getStrokeWidth strokeWidth} : float (default: 0)</li>
 * <li>{@link #getStrokeDasharray strokeDasharray} : string</li>
 * <li>{@link #getClipPath clipPath} : string</li>
 * <li>{@link #getTransform transform} : string</li>
 * <li>{@link #getFilter filter} : string</li>
 * <li>{@link #getEnableDnD enableDnD} : boolean (default: false)</li>
 * <li>{@link #getEnableSelection enableSelection} : boolean (default: true)</li>
 * <li>{@link #getRowYCenter rowYCenter} : float (default: 7.5)</li>
 * <li>{@link #getRotationCenter rotationCenter} : float[]</li>
 * <li>{@link #getRotationAngle rotationAngle} : float</li>
 * <li>{@link #getIsBulk isBulk} : boolean (default: false)</li>
 * <li>{@link #getArrayAttribute arrayAttribute} : string</li>
 * <li>{@link #getTimeFilterAttribute timeFilterAttribute} : string</li>
 * <li>{@link #getEndTimeFilterAttribute endTimeFilterAttribute} : string</li>
 * <li>{@link #getLegend legend} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedShape selectedShape} : sap.gantt.shape.SelectedShape</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class 
 * Base class for all shape classes.
 * 
 * <p>
 * Shape class is designed to  describe how data should be visualized by an SVG tag. Most shape classes contain only properties and only one aggregation:
 * <ul>
 * 	<li>Some properties come from standard SVG attribute. Examples are <code>fill</code>, <code>stroke</code> etc.</li>
 * 	<li>Some properties designed to put Shape class into Gantt chart's coordinate system, especially the X axis called <code>sap.gantt.misc.AxisTime</code>. Examples are <code>time</code>, <code>endTime</code> etc.</li>
 * 	<li>Some properties are designed to provide some geometry attributes. Examples are <code>side</code>, <code>center</code> in some extend shapes.</li>
 * 	<li>Every shape has aggregation called selectedShape to provide a way to specify how selection of the shape should be designed.</li>
 * 	<li>Some container shapes like <code>g</code> and <code>clippath</code> has aggregation to aggregate other shapes in.</li>
 * </ul>
 * 
 * Because d3 is used underneath and d3 use array to do batch data-binding, therefore Shape classes are not designed in the way of SAPUI5 standard data-binding (one shape instance per data). 
 * Instead, each Shape instance stands for a particular way of visualize one data structure. And one Shape instance is used to draw a list of data by Drawers in Gantt chart. 
 * 
 * Because of this specialty, application cannot instantiate a shape class directly. Instead they can use configuration {@link sap.gantt.config.Shape} to describe which Shape class is used to draw
 * which data in what way. And pass this configuration to Gantt chart control by property <code>shapes</code>. Gantt chart control use these configurations to instatiate Shape instances and Drawers. Drawers
 * consumes Shape instances to draw real SVG shapes.
 * 
 * Each shape classes are designed to support 'configuration-first' principle. So called configure is the <code>shapeProperties</code> property of <code>sap.gantt.config.Shape</code>.
 * In this object property, application can provide following things:
 * <ul>
 * 	<li>A value. Example: <code>{tooltip: 'svg rocks'}.</code></li>
 * 	<li>An attribute from data. Example: <code>{time: {startTime}}</code></li>
 * 	<li>Formatted attribute from data. <code>{tooltip: "{time:Timestamp} the stock price falls to {price:Number}."}</code> The typed values are formatted by global legacy
 * 		number, date and time configurations by {@link sap.gantt.misc.Format}.</li>
 * </ul>
 * 
 * In many applications, simple configuration or even binding cannot meet business requriement. Therefore applications are allowed to extend shapes and provide their own getter methods
 * to effect all properties by data. For in row shapes, two parameters are injected to help application to do coding. All the shapes provided by Gantt chart follows 'configuration first'
 * principle by invoking method <code>_configFirst()</code>. Meaning if application provide value by sap.gantt.config.Shape, the configuration over-write code logic in getters.
 * 
 * <b>Note:</b> Setter methods are only used for set default values. Because a Shape instance stands for a way of drawing. The instance self does not hold any status (property values).
 * Meanwhile, all getter are injected with actual data and related informations to adapt to d3 paradigm. 
 * </p>
 * 
 * @extend sap.ui.core.Element
 * @abstract
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Shape = function(sId,mSettings) {};
/**
 * This method must be used to ensure 'configuration-first' principle for extended shapes.
 * 
 * @param {string} sAttrName Attribute name.
 * @param {object} oData Shape data.
 * @param {boolean} bScaleBySapUiSizeMode whether scale by size mode or not
 * @return {string} Resolved attribute.
 * @protected
 * 
 */
sap.gantt.shape.Shape.prototype._configFirst = function(sAttrName,oData,bScaleBySapUiSizeMode) { return ""; };

/**
 * Rotate Shape
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Shape Row Info.
 * @param {object} aRetVal Return Value.
 * @protected
 * 
 */
sap.gantt.shape.Shape.prototype._rotate = function(oData,oRowInfo,aRetVal) {  };

/**
 * Provide logic for rotation considering RTL.
 * 
 * @param {number} nAngle Rotation angle.
 * @return {number} Actual rotation angle.
 * @protected
 * 
 */
sap.gantt.shape.Shape.prototype._rtlRotation = function(nAngle) { return 0.0; };

/**
 * Translate Shape
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Shape Row Info.
 * @param {object} aRetVal Return Value.
 * @protected
 * 
 */
sap.gantt.shape.Shape.prototype._translate = function(oData,oRowInfo,aRetVal) {  };

/**
 * Destroys the selectedShape in the aggregation {@link #getSelectedShape selectedShape}.
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.destroySelectedShape = function() { return new sap.gantt.shape.Shape(); };

/**
 * Creates a new subclass of class sap.gantt.shape.Shape with name <code>sClassName</code>
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
sap.gantt.shape.Shape.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>ariaLabel</code>.
 * 
 * Arial Label enables screen readers.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>ariaLabel</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getAriaLabel = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>arrayAttribute</code>.
 * 
 * <p>
 * Specify which attribute is child array.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>arrayAttribute</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getArrayAttribute = function(oData,oRowInfo) { return ""; };

/**
 * Get the AxisTime of gantt chart instance
 * 
 * @return {object} the AxisTime instance
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getAxisTime = function() { return new Object(); };

/**
 * Gets current value of property <code>category</code>.
 * 
 * Values are in enum {@link sap.gantt.shape.ShapeCategory}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>category</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getCategory = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>clipPath</code>.
 * 
 * <p>
 * Standard SVG 'clippath' attribute.
 * See {@link http://www.w3.org/TR/SVG/masking.html#ClipPathProperty SVG 1.1 specification for 'clippath'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>clipPath</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getClipPath = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>enableDnD</code>.
 * 
 * <p>
 * This value controls whether a shape is enabled for drag-and-drop behavior.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>enableDnD</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getEnableDnD = function(oData,oRowInfo) { return false; };

/**
 * Gets current value of property <code>enableSelection</code>.
 * 
 * <p>
 * This value controls whether a shape is enabled for selection behavior.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>enableSelection</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getEnableSelection = function(oData,oRowInfo) { return false; };

/**
 * Gets current value of property <code>endTime</code>.
 * 
 * End timestamp for duration shape.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>endTime</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getEndTime = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>endTimeFilterAttribute</code>.
 * 
 * <p>
 * Specify which is end time attribute of items in child array.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>endTimeFilterAttribute</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getEndTimeFilterAttribute = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>fill</code>.
 * 
 * <p> 
 * Standard SVG 'fill' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillProperty SVG 1.1 specification for 'fill'}.
 * <b>Note:</b> HTML color and url reference to paint server can be provided to fill. Paint server definitions usually comes from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>fill</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getFill = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>fillOpacity</code>.
 * 
 * <p>
 * Standard SVG 'fill-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#FillOpacityProperty SVG 1.1 specification for 'fill-opacity'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>fillOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getFillOpacity = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets current value of property <code>filter</code>.
 * 
 * <p>
 * Standard SVG 'filter' attribute.
 * See {@link http://www.w3.org/TR/SVG/filters.html#FilterProperty SVG 1.1 specifica6tion for 'filter'}.
 * Usually value of filter is an url referenced from paint server definition rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>filter</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getFilter = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>htmlClass</code>.
 * 
 * Customized html classes. Multiple classes can be provided and seperated by space.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>htmlClass</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getHtmlClass = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>isBulk</code>.
 * 
 * <p>
 * Gantt chart do filtering of data by timestamp for performance sake. For simple shapes which has <code>time</code> or <code>endTime</code> provided, set this flag
 * to false. For shapes (path or polygon) which connect a list of data, set this value to false. And if filtering is required to next level data, provide <code>arrayAttribute</code>,
 * <code>timeFilterAttribute</code> and <code>endTimeFilterAttribute</code> in combination.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>isBulk</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getIsBulk = function(oData,oRowInfo) { return false; };

/**
 * Gets current value of property <code>isDuration</code>.
 * 
 * <p>
 * When this flag is set to true, the shape is called 'duration shape'. And <code>time</code> stands for startTime, <code>endTime</code> stands for end time.
 * When this flag is set to be false, the shape is called 'transient shape'. And only <code>time</code> is used.
 * Usually these 3 properties are used to determine x position of one shape.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {boolean} Value of property <code>isDuration</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getIsDuration = function(oData,oRowInfo) { return false; };

/**
 * Gets legend value of property <code>legend</code>.
 * 
 * <p>
 * Specifies the legend text of the shape.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @return {string} Value of property <code>legend</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getLegend = function(oData) { return ""; };

/**
 * Returns a metadata object for class sap.gantt.shape.Shape.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Shape.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Retrieves the parent shape's referenceId.
 * 
 * <p>
 * The referenceId, which is related to shape data, is generated by a Group shape.
 * Aggregation shapes can use this method to retrieve the referenceId.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of <code>referenceId</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getParentReferenceId = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>rotationAngle</code>.
 * 
 * <p>
 * This value is used in combination of property <code>rotationCenter</code>. By providing both shape can be rotated with any angle around rotation center.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>rotationAngle</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getRotationAngle = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets current value of property <code>rotationCenter</code>.
 * 
 * <p>
 * This value is used in combination of property <code>rotationAngle</code>. By providing both shape can be rotated with any angle around rotation center.
 * Default implementation is the coordinate at <code>time</code> in x coordinate, and <code>rowYCenter</code> in y coordinate.
 * If application over-write this property by configuration or code, the logic cannot be guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {array} Value of property <code>rotationCenter</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getRotationCenter = function(oData,oRowInfo) { return null; };

/**
 * Gets current value of property <code>rowYCenter</code>.
 * 
 * <p>
 * Default implementation is return the middle position of the row in y direction.
 * If application over-write this property by configuration or code, the logic cannot be guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {array} Value of property <code>rowYCenter</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getRowYCenter = function(oData,oRowInfo) { return null; };

/**
 * Gets content of aggregation {@link #getSelectedShape selectedShape}.
 * 
 * Selected Shape.
 * 
 * Selected shape specifies how to draw the selection high-light. Application can implement it by extending
 * <code>sap.gantt.shape.SelectedShape</code> and configure it in <code>sap.gantt.config.Shape</code>.
 * 
 * @returns {sap.gantt.shape.SelectedShape}
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getSelectedShape = function() { return new sap.gantt.shape.SelectedShape(); };

/**
 * This method is used to get view boundary for visible area in Gantt Chart. The view boundary is 
 * a range of x-coordinate for visible area.
 * 
 * @return {array} View boundary for visible area in Gantt Chart.
 * @protected
 * 
 */
sap.gantt.shape.Shape.prototype.getShapeViewBoundary = function() { return null; };

/**
 * Gets current value of property <code>stroke</code>.
 * 
 * <p>
 * Standard SVG 'stroke' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperty SVG 1.1 specification for 'stroke'}.
 * <b>Note:</b> HTML color and url reference to paint server can be provided to stroke. Paint server definitions usually comes from paint servers rendered by
 * {@link sap.gantt.GanttChartContainer}, {@link sap.gantt.GanttChartWithTable} or {@link sap.gantt.GanttChart}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>stroke</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getStroke = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>strokeDasharray</code>.
 * 
 * <p>
 * Standard SVG 'stroke-dasharray' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-dasharray'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>strokeDasharray</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getStrokeDasharray = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>strokeOpacity</code>.
 * 
 * <p>
 * Standard SVG 'stroke-Opacity' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeOpacityProperty SVG 1.1 specification for 'stroke-opacity'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @return {number} Value of property <code>strokeOpacity</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getStrokeOpacity = function(oData) { return 0.0; };

/**
 * Gets current value of property <code>strokeWidth</code>.
 * 
 * <p>
 * Standard SVG 'stroke-width' attribute.
 * See {@link http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty SVG 1.1 specification for 'stroke-width'}.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>strokeWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getStrokeWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Get the shape style string
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} shape styles
 * @protected
 * 
 */
sap.gantt.shape.Shape.prototype.getStyle = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> This value is not recommended to be over-written by configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>time</code>.
 * 
 * Timestamp for transient shape or start timestamp for duration shape.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>time</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getTime = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>timeFilterAttribute</code>.
 * 
 * <p>
 * Specify which is time attribute of items in child array.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>timeFilterAttribute</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getTimeFilterAttribute = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>title</code>.
 * 
 * Title is visualized as tooltip by browser.
 * <b>Notes:</b> Use character entity to do simple text tabbing and breaking. (Use "&#09;" for tab and "&#10;" for break.)
 * See {@link http://www.w3.org/TR/SVG/struct.html#TitleElement SVG 1.1 specification for 'title'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>title</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getTitle = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>transform</code>.
 * 
 * <p>
 * Standard SVG 'transform' attribute.
 * See {@link http://www.w3.org/TR/SVG/coords.html#TransformAttribute SVG 1.1 specifica6tion for 'transform'}.
 * Some logic in getTransform() is provided to enable property <code>rotationCenter</code> and <code>rotationAngle</code>. If application over-write this property by
 * configuration or coding, rotation behavior cannot be guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {string} Value of property <code>transform</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getTransform = function(oData,oRowInfo) { return ""; };

/**
 * Gets current value of property <code>xBias</code>.
 * 
 * <p>
 * Fine-tune x coordinate.
 * This value only works for category <code>inRowShape</code>.
 * Shape usually determines position in x coordinate by property <code>isDuration</code>, <code>time</code> and <code>endTime</code>.
 * Application can use this property to do some x coordinate adjustment in pixel.
 * The xBias will be automatically mirrored for RTL mode. It means if you set 10 to property xBias, in RTL mode, the value of the xBias will be -10.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>xBias</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getXBias = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets current value of property <code>yBias</code>.
 * 
 * <p>
 * Fine-tune y coordinate.
 * This value only works for category <code>inRowShape</code>.
 * Y coordinate is automatically determined by row. Application can use this property to do some y coordinate adjustment in pixel. 
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information of the row and row data.
 * @return {number} Value of property <code>yBias</code>.
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.getYBias = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getAriaLabel ariaLabel}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAriaLabel New value for property <code>ariaLabel</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setAriaLabel = function(sAriaLabel) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getArrayAttribute arrayAttribute}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sArrayAttribute New value for property <code>arrayAttribute</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setArrayAttribute = function(sArrayAttribute) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getCategory category}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>sap.gantt.shape.ShapeCategory.InRowShape</code>.
 * @param {string} sCategory New value for property <code>category</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setCategory = function(sCategory) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getClipPath clipPath}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sClipPath New value for property <code>clipPath</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setClipPath = function(sClipPath) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getEnableDnD enableDnD}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableDnD New value for property <code>enableDnD</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setEnableDnD = function(bEnableDnD) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getEnableSelection enableSelection}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableSelection New value for property <code>enableSelection</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setEnableSelection = function(bEnableSelection) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getEndTime endTime}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sEndTime New value for property <code>endTime</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setEndTime = function(sEndTime) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getEndTimeFilterAttribute endTimeFilterAttribute}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sEndTimeFilterAttribute New value for property <code>endTimeFilterAttribute</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setEndTimeFilterAttribute = function(sEndTimeFilterAttribute) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getFill fill}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.ValueSVGPaintServer} sFill New value for property <code>fill</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setFill = function(sFill) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getFillOpacity fillOpacity}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fFillOpacity New value for property <code>fillOpacity</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setFillOpacity = function(fFillOpacity) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getFilter filter}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFilter New value for property <code>filter</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setFilter = function(sFilter) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getHtmlClass htmlClass}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sHtmlClass New value for property <code>htmlClass</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setHtmlClass = function(sHtmlClass) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getIsBulk isBulk}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsBulk New value for property <code>isBulk</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setIsBulk = function(bIsBulk) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getIsDuration isDuration}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsDuration New value for property <code>isDuration</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setIsDuration = function(bIsDuration) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getLegend legend}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegend New value for property <code>legend</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setLegend = function(sLegend) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getRotationAngle rotationAngle}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fRotationAngle New value for property <code>rotationAngle</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setRotationAngle = function(fRotationAngle) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getRotationCenter rotationCenter}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float[]} sRotationCenter New value for property <code>rotationCenter</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setRotationCenter = function(sRotationCenter) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getRowYCenter rowYCenter}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>7.5</code>.
 * @param {float} fRowYCenter New value for property <code>rowYCenter</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setRowYCenter = function(fRowYCenter) { return new sap.gantt.shape.Shape(); };

/**
 * Sets the aggregated {@link #getSelectedShape selectedShape}.
 * @param {sap.gantt.shape.SelectedShape} oSelectedShape The selectedShape to set
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setSelectedShape = function(oSelectedShape) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getStroke stroke}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.gantt.ValueSVGPaintServer} sStroke New value for property <code>stroke</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setStroke = function(sStroke) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getStrokeDasharray strokeDasharray}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStrokeDasharray New value for property <code>strokeDasharray</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setStrokeDasharray = function(sStrokeDasharray) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getStrokeOpacity strokeOpacity}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fStrokeOpacity New value for property <code>strokeOpacity</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setStrokeOpacity = function(fStrokeOpacity) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getStrokeWidth strokeWidth}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fStrokeWidth New value for property <code>strokeWidth</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setStrokeWidth = function(fStrokeWidth) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setTag = function(sTag) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getTime time}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTime New value for property <code>time</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setTime = function(sTime) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getTimeFilterAttribute timeFilterAttribute}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTimeFilterAttribute New value for property <code>timeFilterAttribute</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setTimeFilterAttribute = function(sTimeFilterAttribute) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setTitle = function(sTitle) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getTransform transform}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTransform New value for property <code>transform</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setTransform = function(sTransform) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getXBias xBias}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fXBias New value for property <code>xBias</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setXBias = function(fXBias) { return new sap.gantt.shape.Shape(); };

/**
 * Sets a new value for property {@link #getYBias yBias}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fYBias New value for property <code>yBias</code>
 * @returns {sap.gantt.shape.Shape} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Shape.prototype.setYBias = function(fYBias) { return new sap.gantt.shape.Shape(); };


// ---- sap.gantt.shape.ShapeCategory --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.gantt.shape.ShapeCategory.toString = function() { return ""; };

// ---- sap.gantt.shape.Text --------------------------------------------------------------------------

/**
 * Creates and initializes a new Text class.
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
 * <li>{@link #getTag tag} : string (default: text)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li>
 * <li>{@link #getFontSize fontSize} : int (default: 10)</li>
 * <li>{@link #getTextAnchor textAnchor} : string (default: start)</li>
 * <li>{@link #getFontFamily fontFamily} : string</li>
 * <li>{@link #getWrapWidth wrapWidth} : float (default: -1)</li>
 * <li>{@link #getWrapDy wrapDy} : float (default: 20)</li>
 * <li>{@link #getTruncateWidth truncateWidth} : float (default: -1)</li>
 * <li>{@link #getEllipsisWidth ellipsisWidth} : float (default: 12)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class 
 * Text shape class using SVG tag 'text'. This shape is usually used to represent points in time.
 * 
 * <p>
 * See {@link http://www.w3.org/TR/SVG/text.html SVG specification 1.1 for 'text' element} for
 * more information about the HTML tag.<br/><br/>
 * {@link http://www.w3.org/TR/SVG/images/text/text01.svg Text sample in SVG specification 1.1}:<br/>
 * <svg width="10cm" height="3cm" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <rect x="1" y="1" width="998" height="298" fill="none" stroke="blue" stroke-width="2" />
 * <text x="250" y="150" font-family="Verdana" font-size="55" fill="blue" >Hello, out there</text>
 * </svg><br/>
 * 
 * {@link http://www.w3.org/TR/SVG/images/text/textdecoration01.svg Decorated text sample in SVG specification 1.1}: <br/>
 * <svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
 * <rect x="1" y="1" width="1198" height="398" fill="none" stroke="blue" stroke-width="2" />
 * <g font-size="60" fill="blue" stroke="red" stroke-width="1" >
 * <text x="100" y="75">Normal text</text>
 * <text x="100" y="165" text-decoration="line-through" >Text with line-through</text>
 * <text x="100" y="255" text-decoration="underline" >Underlined text</text>
 * <text x="100" y="345" text-decoration="underline" >
 * <tspan>One </tspan>
 * <tspan fill="yellow" stroke="purple" >word </tspan>
 * <tspan fill="yellow" stroke="black" >has </tspan>
 * <tspan fill="yellow" stroke="darkgreen" text-decoration="underline" >different </tspan>
 * <tspan fill="yellow" stroke="blue" >underlining</tspan>
 * </text>
 * </g>
 * </svg>
 * </p>
 * 
 * @extend sap.gantt.shape.Shape
 * @version 1.48.3
 * 
 * @constructor
 * @public
 * 
 */
sap.gantt.shape.Text = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.gantt.shape.Text with name <code>sClassName</code>
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
sap.gantt.shape.Text.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets the value of property <code>ellipsisWidth</code>.
 * 
 * <p>
 * Ellipsis width if truncate happens. Default value 12 indicates 12px length reserved for ellipsis. If the value is
 * -1, no ellipsis appears even truncate happens. If the value is bigger than -1, ellipsis will be 3 dots in length of this value.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>ellipsisWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getEllipsisWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>fontFamily</code>.
 * 
 * <p>
 * Text font family.
 * See {@link http://www.w3.org/TR/SVG/text.html#FontSizeProperty SVG 1.1 specification for 'font-family' property of 'text'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>fontFamily</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getFontFamily = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>fontSize</code>.
 * 
 * <p>
 * Text font size.
 * See {@link http://www.w3.org/TR/SVG/text.html#FontSizeProperty SVG 1.1 specification for 'font-size' property of 'text'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>fontSize</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getFontSize = function(oData,oRowInfo) { return 0.0; };

/**
 * Returns a metadata object for class sap.gantt.shape.Text.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.gantt.shape.Text.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of property <code>tag</code>.
 * 
 * SVG tag name of the shape.
 * See {@link http://www.w3.org/TR/SVG/shapes.html SVG 1.1 specification for shapes}.<br/>
 * <b>Note:</b> We do not recommend that you change this value using a configuration or coding.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>tag</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getTag = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>text</code>.
 * 
 * <p>
 * Text string.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>text</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getText = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>textAnchor</code>.
 * 
 * <p>
 * Text anchor. Possible values are 'start', 'middle', and 'end'.
 * See {@link http://www.w3.org/TR/SVG/text.html#TextAnchorProperty SVG 1.1 specification for 'text-anchor' property of 'text'}.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {string} Value of property <code>textAnchor</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getTextAnchor = function(oData,oRowInfo) { return ""; };

/**
 * Gets the value of property <code>truncateWidth</code>.
 * 
 * <p>
 * Truncating width. Default value -1 indicates truncating function is not activated. To enable truncating, give a truncate width here. If text length
 * exceeds truncate width, text is truncated.
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>truncateWidth</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getTruncateWidth = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>x</code>.
 * 
 * <p>
 * x coordinate of the bottom-left corner of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/text.html#TextElementXAttribute SVG 1.1 specification for 'x' attribute of 'text'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using property <code>time</code>.
 * If you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>x</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getX = function(oData,oRowInfo) { return 0.0; };

/**
 * Gets the value of property <code>y</code>.
 * 
 * <p>
 * y coordinate of the bottom-left corner of the rectangle.
 * See {@link http://www.w3.org/TR/SVG/text.html#TextElementYAttribute SVG 1.1 specification for 'y' attribute of 'text'}.
 * 
 * Usually applications do not set this value. This getter carries out the calculation using parameter <code>oRowInfo</code>
 * and property <code>height</code> to align the center of the row rectangle along the y axis. 
 * If you override the default value calculated by the getter, the alignment of the center is not guaranteed.
 * </p>
 * 
 * @param {object} oData Shape data.
 * @param {object} oRowInfo Information about the row and the row data.
 * @return {number} Value of property <code>y</code>.
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.getY = function(oData,oRowInfo) { return 0.0; };

/**
 * Sets a new value for property {@link #getEllipsisWidth ellipsisWidth}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {float} fEllipsisWidth New value for property <code>ellipsisWidth</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setEllipsisWidth = function(fEllipsisWidth) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getFontFamily fontFamily}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFontFamily New value for property <code>fontFamily</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setFontFamily = function(sFontFamily) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getFontSize fontSize}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10</code>.
 * @param {int} iFontSize New value for property <code>fontSize</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setFontSize = function(iFontSize) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getTag tag}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>text</code>.
 * @param {string} sTag New value for property <code>tag</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setTag = function(sTag) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setText = function(sText) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getTextAnchor textAnchor}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>start</code>.
 * @param {string} sTextAnchor New value for property <code>textAnchor</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setTextAnchor = function(sTextAnchor) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getTruncateWidth truncateWidth}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {float} fTruncateWidth New value for property <code>truncateWidth</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setTruncateWidth = function(fTruncateWidth) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getWrapDy wrapDy}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>20</code>.
 * @param {float} fWrapDy New value for property <code>wrapDy</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setWrapDy = function(fWrapDy) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getWrapWidth wrapWidth}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {float} fWrapWidth New value for property <code>wrapWidth</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setWrapWidth = function(fWrapWidth) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getX x}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setX = function(fX) { return new sap.gantt.shape.Text(); };

/**
 * Sets a new value for property {@link #getY y}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.gantt.shape.Text} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.gantt.shape.Text.prototype.setY = function(fY) { return new sap.gantt.shape.Text(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.gantt --------------------------------------------------------------------------

/**
 * A hybrid data type that can represent an array of string, or array of object.
 * The result value parsed by this data type are "string[]" or "object[]"
 * 
 * Examples of valid values in js:
 * 1. ["order", "activity"]
 * 2. [{name:"order", idName:"OrderNo"},{name:"activity"}]
 * 3. [{name:"order", idName:"OrderNo"},"activity"]
 * 
 * Examples of valid values in xml view:
 * 1. "order,activity"
 * 2. "order, activity"
 * 3. "[order,activity]"
 * 4. "[order, activity]"
 * 5. '[{"name":"order", "idName":"OrderNo"},{"name":"activity"}]'
 * 6. "[{'name':'order', 'idName':'OrderNo'},{'name':'activity'}]"
 * 
 * @public
 * 
 * @memberof sap.gantt
 */
sap.gantt.GenericArray = undefined;

/**
 * A string type that represents SVG fill color values.
 * 
 * Allowed values are {@link sap.ui.core.CSSColor} and {@link sap.m.ValueColor} and LESS parameter
 * 
 * The empty string and invalid less parameter fall back to default black color.
 * 
 * @public
 * 
 * @memberof sap.gantt
 */
sap.gantt.ValueSVGPaintServer = undefined;


// ---- sap.gantt.AdhocLineLayer --------------------------------------------------------------------------

/**
 * Adhoc lines are below all other shapes. If a calendar is shown in the chart area,
 * adhoc lines are on top of the calendar.
 * @public
 * 
 */
sap.gantt.AdhocLineLayer.Bottom = "";

/**
 * Adhoc lines are on top of all other shapes and patterns.
 * @public
 * 
 */
sap.gantt.AdhocLineLayer.Top = "";


// ---- sap.gantt.config --------------------------------------------------------------------------

/**
 * Defines the default configuration chart scheme.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_CHART_SCHEME_KEY</code></li>
 * 		<li>name - "Default"</li>
 * 		<li>rowSpan - 1</li>
 * 		<li>icon - null</li>
 * 		<li>modeKey - <code>sap.gantt.config.DEFAULT_MODE_KEY</code></li>
 * 		<li>shapeKeys - []</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CHART_SCHEME = new Object();

/**
 * Defines the default chart scheme key.
 * 
 * The Default Chart Scheme Key is used in the default chart scheme configuration.
 * @public 
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CHART_SCHEME_KEY = "";

/**
 * Defines the default list of chart schemes.
 * 
 * Default values is <code>sap.gantt.config.DEFAULT_CHART_SCHEME</code>
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CHART_SCHEMES = null;

/**
 * Defines the default configuration object for Dual Container layout.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_CONTAINER_DUAL_LAYOUT_KEY</code></li>
 * 		<li>text - "Dual Gantt Chart Layout"</li>
 * 		<li>toolbarSchemeKey - <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY</code></li>
 * 		<li>ganttChartLayouts - <code>[new sap.gantt.config.GanttChartLayout({
 * 			activeModeKey: sap.gantt.config.DEFAULT_MODE_KEY,
 * 			hierarchyKey: sap.gantt.config.DEFAULT_HIERARCHY_KEY
 * 		}), new sap.gantt.config.GanttChartLayout({
 * 			activeModeKey: sap.gantt.config.DEFAULT_MODE_KEY,
 * 			hierarchyKey: sap.gantt.config.DEFAULT_HIERARCHY_KEY
 * 		})]</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_DUAL_LAYOUT = new Object();

/**
 * Defines the default Gantt dual-view layout key.
 * 
 * The default Gantt dual-view layout key is used in the default Gantt dual layout configuration.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_DUAL_LAYOUT_KEY = "";

/**
 * Defines the default list of Container layouts.
 * 
 * Default values are a single-view layout and a dual-view layout.
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_LAYOUTS = null;

/**
 * Defines the default configuration object for the Single Container layout.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY</code></li>
 * 		<li>text - "Single Gantt Chart Layout"</li>
 * 		<li>toolbarSchemeKey - <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY</code></li>
 * 		<li>ganttChartLayouts - <code>[new sap.gantt.config.GanttChartLayout({
 * 			activeModeKey: sap.gantt.config.DEFAULT_MODE_KEY,
 * 				hierarchyKey: sap.gantt.config.DEFAULT_HIERARCHY_KEY
 * 		})]</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT = new Object();

/**
 * Defines the default Gantt single layout key.
 * 
 * The default Gantt single layout key is used in the default Gantt single layout configuration.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_SINGLE_LAYOUT_KEY = "";

/**
 * Defines the default configuration object for toolbar scheme on <code>sap.gantt.GanttChartContainer</code>.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY</code></li>
 * 		<li>customToolbarItems - <code>sap.gantt.config.ToolbarGroup({
 * 				position: "L1",
 * 				overflowPriority: sap.m.OverflowToolbarPriority.High
 * 			})</code></li>
 * 		<li>timeZoom - <code>sap.gantt.config.ToolbarGroup({
 * 				position: "R2",
 * 				overflowPriority: sap.m.OverflowToolbarPriority.NeverOverflow
 * 			})</code></li>
 * 		<li>settings - <code>sap.gantt.config.ToolbarGroup({
 * 				position: "R1",
 * 				overflowPriority: sap.m.OverflowToolbarPriority.low,
 * 				items: sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS
 * 			})</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME = new Object();

/**
 * Defines the default toolbar scheme key for GanttContainer.
 * 
 * The default GanttContainer toolbar scheme key is used in the default GanttContainer toolbar scheme configuration.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEME_KEY = "";

/**
 * Define default list of toolbar schemes for <code>sap.gantt.GanttChartContainer</code>.
 * 
 * The default values include an empty toolbar and a default Gantt Chart Container toolbar.
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_CONTAINER_TOOLBAR_SCHEMES = null;

/**
 * Defines the default empty JSON object.
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_EMPTY_OBJECT = new Object();

/**
 * Defines the default configuration object for the toolbar scheme on <code>sap.gantt.GanttChartWithTable</code>.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME_KEY</code></li>
 * 		<li>customToolbarItems - <code>sap.gantt.config.ToolbarGroup({
 * 				position: "L2",
 * 				overflowPriority: sap.m.OverflowToolbarPriority.High
 * 			})</code></li>
 * 		<li>expandTree - <code>sap.gantt.config.ToolbarGroup({
 * 				position: "L3",
 * 				overflowPriority: sap.m.OverflowToolbarPriority.Low
 * 			})</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME = new Object();

/**
 * Defines the default toolbar scheme key for GanttWithTable.
 * 
 * The default GanttWithTable toolbar scheme key is used in the default GanttWithTable toolbar scheme configuration.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME_KEY = "";

/**
 * Defines the default list of toolbar schemes for <code>sap.gantt.GanttChartBase</code>.
 * 
 * The default values include an empty toolbar and a default Gantt Chart toolbar.
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEMES = null;

/**
 * Defines the default configuration object for Hierarchy.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_HIERARCHY_KEY</code></li>
 * 		<li>text - "Default Hierarchy"</li>
 * 		<li>activeModeKey - <code>sap.gantt.config.DEFAULT_MODE_KEY</code></li>
 * 		<li>toolbarSchemeKey - <code>sap.gantt.config.DEFAULT_GANTTCHART_TOOLBAR_SCHEME_KEY</code></li>
 * 		<li>columns - null</li>
 * 		<li>expandedLevels - null</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_HIERARCHY = new Object();

/**
 * Defines the default hierarchy key.
 * 
 * The default hierarchy key is used in the default hierarchy configuration.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_HIERARCHY_KEY = "";

/**
 * Defines the default list of hierarchies.
 * 
 * The default value is <code>sap.gantt.config.DEFAULT_HIERARCHY</code>
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_HIERARCHYS = null;

/**
 * Defines the default configuration initHorizon.
 * 
 * <p>From one month ago, to one year from now.</p>
 * @public
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_INIT_HORIZON = undefined;

/**
 * Defines the default configuration object Locale.
 * 
 * Default values 
 * <ul>
 * 		<li>timeZoine - <code>"CET"</code></li>
 * 		<li>utcdiff - <code>"000000"</code></li>
 * 		<li>utcsign - <code>"+"</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_LOCALE_CET = new Object();

/**
 * Defines the default configuration mode.
 * 
 * Default values are:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_MODE_KEY</code></li>
 * 		<li>text - "Default"</li>
 * 		<li>icon - <code>"sap-icon://status-positive"</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_MODE = new Object();

/**
 * Defines the default mode key.
 * 
 * The default mode key is used in Gantt and the default mode configuration is used when no mode configuration is provided.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_MODE_KEY = "";

/**
 * Defines the default list of configuration modes.
 * 
 * Default value:  <code>sap.gantt.config.DEFAULT_MODE</code>.
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_MODES = null;

/**
 * Defines the default configuration object type.
 * 
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.DEFAULT_OBJECT_TYPE_KEY</code></li>
 * 		<li>description - "Default"</li>
 * 		<li>mainChartSchemeKey - <code>sap.gantt.config.DEFAULT_CHART_SCHEME_KEY</code></li>
 * 		<li>expandedChartSchemeKeys - []</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_OBJECT_TYPE = new Object();

/**
 * Defines the default object type key.
 * 
 * Default object type key is used in the default object type configuration.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_OBJECT_TYPE_KEY = "";

/**
 * Defines the default list of object types.
 * 
 * The default value is <code>sap.gantt.config.DEFAULT_OBJECT_TYPE</code>.
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_OBJECT_TYPES = null;

/**
 * Defines the default configuration planHorizon.
 * 
 * <p>From one year ago, to one year from now.</p>
 * @public
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_PLAN_HORIZON = undefined;

/**
 * Defines the default configuration for the time axis.
 * 
 * Default values are:
 * <ul>
 * 		<li>planHorizon - <code>sap.gantt.config.DEFAULT_PLAN_HORIZON</code></li>
 * 		<li>initHorizon - <code>sap.gantt.config.DEFAULT_INIT_HORIZON</code></li>
 * 		<li>zoomStrategy - <code>sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY</code></li>
 * 		<li>finestGranularity - "15min"</li>
 * 		<li>coarsestGranularity - "6month"</li>
 * 		<li>rate> - 1</li>
 * </ul>
 * @public
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_TIME_AXIS = undefined;

/**
 * Defines the default configuration object for setting groups in the toolbar.
 * 
 * Default values:
 * <ul>
 * 		<li><code>sap.gantt.config.SETTING_ITEM_ENABLE_NOW_LINE</code></li>
 * 		<li><code>sap.gantt.config.SETTING_ITEM_ENABLE_CURSOR_LINE</code></li>
 * 		<li><code>sap.gantt.config.SETTING_ITEM_ENABLE_VERTICAL_LINE</code></li>
 * 		<li><code>sap.gantt.config.SETTING_ITEM_ENABLE_TIME_SCROLL_SYNC</code></li>
 * </ul>
 * @public
 * @type {array}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS = null;

/**
 * Defines the default empty toolbar scheme.
 * 
 * This toolbar scheme has no built-in toolbar items. Only one toolbar group
 * <code>customToolbarItems</code> is configured to allow applications to place custom toolbar items.
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.EMPTY_TOOLBAR_SCHEME_KEY</code></li>
 * 		<li>customToolbarItems - <code>sap.gantt.config.ToolbarGroup({
 * 				position: "L1",
 * 				overflowPriority: sap.m.OverflowToolbarPriority.High
 * 			})</code></li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.EMPTY_TOOLBAR_SCHEME = new Object();

/**
 * Defines the default empty toolbar scheme key.
 * 
 * The default empty toolbar scheme key is used in the default empty toolbar scheme.
 * @public
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.EMPTY_TOOLBAR_SCHEME_KEY = "";

/**
 * Defines the default configuration object for enabling the adhoc line setting item.
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.SETTING_ITEM_ENABLE_ADHOC_LINE_KEY</code></li>
 * 		<li>checked - true</li>
 * 		<li>displayText - "Show Adhoc Lines"</li>
 * 		<li>tooltip - "Show Adhoc Lines"</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_ADHOC_LINE = new Object();

/**
 * Defines the default setting item key for the adhoc lines.
 * 
 * The default setting item key for adhoc lines is used in the default settings group configuration.
 * @public 
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_ADHOC_LINE_KEY = "";

/**
 * Defines the default configuration object for enabling the cursor line setting items.
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.SETTING_ITEM_ENABLE_CURSOR_LINE_KEY</code></li>
 * 		<li>checked - true</li>
 * 		<li>displayText - "Show Cursor Line"</li>
 * 		<li>tooltip - "Show a Vertical Line that Follows the Mouse Pointer"</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_CURSOR_LINE = new Object();

/**
 * Defines the default setting item key for the cursor line.
 * 
 * Default setting item key for the cursor line is used in the default settings group configuration.
 * @public 
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_CURSOR_LINE_KEY = "";

/**
 * Defines the default configuration object for enabling the present time indicator setting item.
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.SETTING_ITEM_ENABLE_NOW_LINE_KEY</code></li>
 * 		<li>checked - true</li>
 * 		<li>displayText - "Indicate Current Time"</li>
 * 		<li>tooltip - "Draw a Vertical Line to Indicate the Current Time"</li>
 * </ul>
 * @public
 * 	@type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_NOW_LINE = new Object();

/**
 * Defines the default setting item key for the present time indicator.
 * 
 * Default setting item key for the present time indicator is used in the default settings group configuration.
 * @public 
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_NOW_LINE_KEY = "";

/**
 * Defines the default configuration object for enabling the synchronized time scroll setting item.
 * Default values are:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.SETTING_ITEM_ENABLE_TIME_SCROLL_SYNC_KEY</code></li>
 * 		<li>checked - true</li>
 * 		<li>displayText - "Synchronize Time Scroll"</li>
 * 		<li>tooltip - "Synchronize Horizontal Scroll Bars in Chart"</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_TIME_SCROLL_SYNC = new Object();

/**
 * Defines the default setting item key for synchronized time scroll.
 * 
 * Default setting item key for synchronized time scroll is used in the default settings group configuration.
 * @public 
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_TIME_SCROLL_SYNC_KEY = "";

/**
 * Defines the default configuration object for enabling vertical line setting item.
 * Default values:
 * <ul>
 * 		<li>key - <code>sap.gantt.config.SETTING_ITEM_ENABLE_VERTICAL_LINE_KEY</code></li>
 * 		<li>checked - true</li>
 * 		<li>displayText - "Show Divider Lines"</li>
 * 		<li>tooltip - "Show Vertical Divider Lines between Time Periods"</li>
 * </ul>
 * @public
 * @type {object}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_VERTICAL_LINE = new Object();

/**
 * Defines the default setting item key for the vertical lines.
 * 
 * Default setting item key for vertical lines is used in the default settings group configuration.
 * @public 
 * @type {string}
 * 
 * @memberof sap.gantt.config
 */
sap.gantt.config.SETTING_ITEM_ENABLE_VERTICAL_LINE_KEY = "";


// ---- sap.gantt.config.TimeUnit --------------------------------------------------------------------------

/**
 * Time unit of day.
 * @public
 * 
 */
sap.gantt.config.TimeUnit.day = undefined;

/**
 * Time unit of hour.
 * @public
 * 
 */
sap.gantt.config.TimeUnit.hour = undefined;

/**
 * Time unit of minute.
 * @public
 * 
 */
sap.gantt.config.TimeUnit.minute = undefined;

/**
 * Time unit of month.
 * @public
 * 
 */
sap.gantt.config.TimeUnit.month = undefined;

/**
 * Time unit of week.
 * @public
 * 
 */
sap.gantt.config.TimeUnit.week = undefined;

/**
 * Time unit of year.
 * @public
 * 
 */
sap.gantt.config.TimeUnit.year = undefined;


// ---- sap.gantt.config.ZoomControlType --------------------------------------------------------------------------

/**
 * Uses the ButtonsOnly control to modify the time zoom rate.
 * The SliderOnly control only consists of zoom in and zoom out buttons. 
 * @public
 * 
 */
sap.gantt.config.ZoomControlType.ButtonsOnly = undefined;

/**
 * Display no zoom control
 * @public
 * 
 */
sap.gantt.config.ZoomControlType.None = undefined;

/**
 * Uses the Select control to modify the time zoom rate.
 * The Select control consists of a drop down list to select a suitable zoom rate.
 * @public
 * 
 */
sap.gantt.config.ZoomControlType.Select = undefined;

/**
 * Uses the SliderOnly control to modify the time zoom rate.
 * The SliderOnly control only consists of a slider.   
 * @public
 * 
 */
sap.gantt.config.ZoomControlType.SliderOnly = undefined;

/**
 * Uses the SliderWithButtons control to modify the time zoom rate.
 * The SliderWithButtons control consists of zoom in and zoom out magnifier buttons and a slider. 
 * @public
 * 
 */
sap.gantt.config.ZoomControlType.SliderWithButtons = undefined;


// ---- sap.gantt.def.filter.ColorMatrixValue --------------------------------------------------------------------------

/**
 * Turns every color to black.
 * @public
 * 
 * @memberof sap.gantt.def.filter.ColorMatrixValue
 */
sap.gantt.def.filter.ColorMatrixValue.AllToBlack = undefined;

/**
 * Turns every color to white.
 * @public
 * 
 * @memberof sap.gantt.def.filter.ColorMatrixValue
 */
sap.gantt.def.filter.ColorMatrixValue.AllToWhite = undefined;


// ---- sap.gantt.def.filter.MorphologyOperator --------------------------------------------------------------------------

/**
 * Fatter Morphology.
 * @public
 * 
 * @memberof sap.gantt.def.filter.MorphologyOperator
 */
sap.gantt.def.filter.MorphologyOperator.Dilate = undefined;

/**
 * Slimmer Morphology.
 * @public
 * 
 * @memberof sap.gantt.def.filter.MorphologyOperator
 */
sap.gantt.def.filter.MorphologyOperator.Erode = undefined;


// ---- sap.gantt.MouseWheelZoomType --------------------------------------------------------------------------

/**
 * The granularity is the unit time range of innerInterval under current zoom level
 * @public
 * 
 */
sap.gantt.MouseWheelZoomType.FineGranular = "";

/**
 * Do not support mouse wheel zooming
 * @public
 * 
 */
sap.gantt.MouseWheelZoomType.None = "";

/**
 * The granularity is a whole zoom level, just like the global zoom slider does
 * @public
 * 
 */
sap.gantt.MouseWheelZoomType.Stepwise = "";


// ---- sap.gantt.shape.ext.rls.RelationshipType --------------------------------------------------------------------------

/**
 * Finish to finish type.
 * @public
 * 
 * @memberof sap.gantt.shape.ext.rls.RelationshipType
 */
sap.gantt.shape.ext.rls.RelationshipType.FinishToFinish = undefined;

/**
 * Finish to start type.
 * @public
 * 
 * @memberof sap.gantt.shape.ext.rls.RelationshipType
 */
sap.gantt.shape.ext.rls.RelationshipType.FinishToStart = undefined;

/**
 * Start to finish type.
 * @public
 * 
 * @memberof sap.gantt.shape.ext.rls.RelationshipType
 */
sap.gantt.shape.ext.rls.RelationshipType.StartToFinish = undefined;

/**
 * Start to start type.
 * @public
 * 
 * @memberof sap.gantt.shape.ext.rls.RelationshipType
 */
sap.gantt.shape.ext.rls.RelationshipType.StartToStart = undefined;


// ---- sap.gantt.shape.ShapeCategory --------------------------------------------------------------------------

/**
 * Shapes attached to one row.
 * @public
 * 
 * @memberof sap.gantt.shape.ShapeCategory
 */
sap.gantt.shape.ShapeCategory.InRowShape = undefined;

/**
 * Relationship shapes connecting two in-row shape instances.
 * @public
 * 
 * @memberof sap.gantt.shape.ShapeCategory
 */
sap.gantt.shape.ShapeCategory.Relationship = undefined;

