
// ---- sap.me --------------------------------------------------------------------------


// ---- sap.me.Calendar --------------------------------------------------------------------------

/**
 * Constructor for a new Calendar.
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
 * <li>{@link #getHideNavControls hideNavControls} : boolean (default: false)</li>
 * <li>{@link #getHideMonthTitles hideMonthTitles} : boolean (default: false)</li>
 * <li>{@link #getMonthsPerRow monthsPerRow} : int (default: 1)</li>
 * <li>{@link #getDayWidth dayWidth} : int (default: 45)</li>
 * <li>{@link #getDayHeight dayHeight} : int (default: 50)</li>
 * <li>{@link #getWeeksPerRow weeksPerRow} : int (default: 1)</li>
 * <li>{@link #getSingleRow singleRow} : boolean</li>
 * <li>{@link #getMonthsToDisplay monthsToDisplay} : int (default: 1)</li>
 * <li>{@link #getCurrentDate currentDate} : string</li>
 * <li>{@link #getEnableMultiselection enableMultiselection} : boolean (default: false)</li>
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getDisabledWeekDays disabledWeekDays} : any</li>
 * <li>{@link #getDisabledDates disabledDates} : any</li>
 * <li>{@link #getSwipeToNavigate swipeToNavigate} : boolean (default: false)</li>
 * <li>{@link #getDesign design} : sap.me.CalendarDesign (default: Approval)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.me.CalendarSelectionMode (default: SINGLE)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getDays days} : any</li>
 * <li>{@link #getMonths months} : any</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:tapOnDate tapOnDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:changeCurrentDate changeCurrentDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:changeRange changeRange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * This is the Calendar control
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.26.0.
 * This control was experimental since 1.12. Please use the sap.ui.unified.Calendar instead!
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.Calendar = function(sId,mSettings) {};
/**
 * event fired when tap to next or previous button and currentDate is updated
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.currentDate new date
 * @public
 * 
 */
sap.me.Calendar.prototype.changeCurrentDate = function(oControlEvent) {  };

/**
 * when the range of selected dates changes
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.fromDate from date
 * @param {string} oControlEvent.getParameters.toDate to date
 * @public
 * 
 */
sap.me.Calendar.prototype.changeRange = function(oControlEvent) {  };

/**
 * event fired when a date is tapped
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.date date tapped
 * @param {boolean} oControlEvent.getParameters.didSelect if day was selected
 * @public
 * 
 */
sap.me.Calendar.prototype.tapOnDate = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:changeCurrentDate changeCurrentDate} event of this <code>sap.me.Calendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.Calendar</code> itself.
 * 
 * event fired when tap to next or previous button and currentDate is updated
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code> itself
 * 
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.attachChangeCurrentDate = function(oData,fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:changeRange changeRange} event of this <code>sap.me.Calendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.Calendar</code> itself.
 * 
 * when the range of selected dates changes
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code> itself
 * 
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.attachChangeRange = function(oData,fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:tapOnDate tapOnDate} event of this <code>sap.me.Calendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.Calendar</code> itself.
 * 
 * event fired when a date is tapped
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.Calendar</code> itself
 * 
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.Calendar.prototype.attachTapOnDate = function(oData,fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:changeCurrentDate changeCurrentDate} event of this <code>sap.me.Calendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.detachChangeCurrentDate = function(fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:changeRange changeRange} event of this <code>sap.me.Calendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.detachChangeRange = function(fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:tapOnDate tapOnDate} event of this <code>sap.me.Calendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.detachTapOnDate = function(fnFunction,oListener) { return new sap.me.Calendar(); };

/**
 * Creates a new subclass of class sap.me.Calendar with name <code>sClassName</code>
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
sap.me.Calendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:changeCurrentDate changeCurrentDate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.currentDate] new date
 * 
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.Calendar.prototype.fireChangeCurrentDate = function(mParameters) { return new sap.me.Calendar(); };

/**
 * Fires event {@link #event:changeRange changeRange} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.fromDate] from date
 * @param {string} [mParameters.toDate] to date
 * 
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.Calendar.prototype.fireChangeRange = function(mParameters) { return new sap.me.Calendar(); };

/**
 * Fires event {@link #event:tapOnDate tapOnDate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {string} [mParameters.date] date tapped
 * @param {boolean} [mParameters.didSelect] if day was selected
 * 
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.Calendar.prototype.fireTapOnDate = function(mParameters) { return new sap.me.Calendar(); };

/**
 * Gets current value of property {@link #getCurrentDate currentDate}.
 * 
 * the center date where the month/week will be built around
 * 
 * @returns {string} Value of property <code>currentDate</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getCurrentDate = function() { return ""; };

/**
 * Gets current value of property {@link #getDayHeight dayHeight}.
 * 
 * the height of a day
 * 
 * Default value is <code>50</code>.
 * @returns {int} Value of property <code>dayHeight</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getDayHeight = function() { return 0; };

/**
 * Gets current value of property {@link #getDays days}.
 * 
 * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 * 
 * @returns {any} Value of property <code>days</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getDays = function() { return null; };

/**
 * Gets current value of property {@link #getDayWidth dayWidth}.
 * 
 * the width of a day
 * 
 * Default value is <code>45</code>.
 * @returns {int} Value of property <code>dayWidth</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getDayWidth = function() { return 0; };

/**
 * Gets current value of property {@link #getDesign design}.
 * 
 * Indicates the design of the calendar (mainly colors)
 * 
 * Default value is <code>Approval</code>.
 * @returns {sap.me.CalendarDesign} Value of property <code>design</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getDesign = function() { return new sap.me.CalendarDesign(); };

/**
 * Gets current value of property {@link #getDisabledDates disabledDates}.
 * 
 * Array of specific dates (strings or Date objects) that will be disabled/non interactive
 * 
 * @returns {any} Value of property <code>disabledDates</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getDisabledDates = function() { return null; };

/**
 * Gets current value of property {@link #getDisabledWeekDays disabledWeekDays}.
 * 
 * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled for these week days.
 * 
 * @returns {any} Value of property <code>disabledWeekDays</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getDisabledWeekDays = function() { return null; };

/**
 * Gets current value of property {@link #getEnableMultiselection enableMultiselection}.
 * 
 * to enable multiselection feature
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableMultiselection</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getEnableMultiselection = function() { return false; };

/**
 * Gets current value of property {@link #getFirstDayOffset firstDayOffset}.
 * 
 * to offset the first day of the week (0 = sunday)
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>firstDayOffset</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getFirstDayOffset = function() { return 0; };

/**
 * Gets current value of property {@link #getHideMonthTitles hideMonthTitles}.
 * 
 * hides the area of month titles
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>hideMonthTitles</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getHideMonthTitles = function() { return false; };

/**
 * Gets current value of property {@link #getHideNavControls hideNavControls}.
 * 
 * hides the area of navigation controls
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>hideNavControls</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getHideNavControls = function() { return false; };

/**
 * Returns a metadata object for class sap.me.Calendar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.me.Calendar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMonths months}.
 * 
 * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 * 
 * @returns {any} Value of property <code>months</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getMonths = function() { return null; };

/**
 * Gets current value of property {@link #getMonthsPerRow monthsPerRow}.
 * 
 * months to display in a row. This sets the width of the whole control in order to contain the desired number of months per row
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>monthsPerRow</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getMonthsPerRow = function() { return 0; };

/**
 * Gets current value of property {@link #getMonthsToDisplay monthsToDisplay}.
 * 
 * number of months in a row.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>monthsToDisplay</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getMonthsToDisplay = function() { return 0; };

/**
 * returns an array of the currently selected dates (dates are strings formatted as Date.toDateString())
 * 
 * @type any
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.Calendar.prototype.getSelectedDates = function() { return null; };

/**
 * Gets current value of property {@link #getSelectionMode selectionMode}.
 * 
 * Indicates the design of the calendar (mainly colors)
 * 
 * Default value is <code>SINGLE</code>.
 * @returns {sap.me.CalendarSelectionMode} Value of property <code>selectionMode</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getSelectionMode = function() { return new sap.me.CalendarSelectionMode(); };

/**
 * Gets current value of property {@link #getSingleRow singleRow}.
 * 
 * boolean that sets the view to week mode or month mode
 * 
 * @returns {boolean} Value of property <code>singleRow</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getSingleRow = function() { return false; };

/**
 * Gets current value of property {@link #getSwipeToNavigate swipeToNavigate}.
 * 
 * When enabled, swipe gestures will navigate and not select
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>swipeToNavigate</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getSwipeToNavigate = function() { return false; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * visibility of the control
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property {@link #getWeeksPerRow weeksPerRow}.
 * 
 * weeks to display in a row
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>weeksPerRow</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getWeeksPerRow = function() { return 0; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the calendar
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Helper function to instantiate a Date from the string(s) provided
 * by the getCurrentDate, getSelectedDates methods.
 * <B>IMPORTANT:</B> The only valid values for the created Date are: year, month, day.
 * Disregard any other value: hours, minutes, seconds, milliseconds...
 * 
 * @param {String} strDate The date, produced by a former call to Date.toDateString.
 * @throws {Error} If the string provided does not match a toDateString produced string.
 * @public
 * @static
 * @return {Date} The Date, parsed from the input string.
 * 
 */
sap.me.Calendar.parseDate = function(strDate) { return null; };

/**
 * Sets the current date of the calendar.
 * @param {String} strDate The Date to set, the format being identical to a date string produced by "toDateString".
 * 
 * @return {sap.me.Calendar} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.me.Calendar.prototype.setCurrentDate = function(strDate) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getDayHeight dayHeight}.
 * 
 * the height of a day
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>50</code>.
 * @param {int} iDayHeight New value for property <code>dayHeight</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setDayHeight = function(iDayHeight) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getDays days}.
 * 
 * Array of day names, default value is sap.m.getLocaleData().getDays("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oDays New value for property <code>days</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setDays = function(oDays) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getDayWidth dayWidth}.
 * 
 * the width of a day
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>45</code>.
 * @param {int} iDayWidth New value for property <code>dayWidth</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setDayWidth = function(iDayWidth) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getDesign design}.
 * 
 * Indicates the design of the calendar (mainly colors)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Approval</code>.
 * @param {sap.me.CalendarDesign} sDesign New value for property <code>design</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setDesign = function(sDesign) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getDisabledDates disabledDates}.
 * 
 * Array of specific dates (strings or Date objects) that will be disabled/non interactive
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oDisabledDates New value for property <code>disabledDates</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setDisabledDates = function(oDisabledDates) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getDisabledWeekDays disabledWeekDays}.
 * 
 * Array of weekDays (as integers where 0=Sunday, 1=Monday etc) to be disabled. Interaction will be disabled for these week days.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oDisabledWeekDays New value for property <code>disabledWeekDays</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setDisabledWeekDays = function(oDisabledWeekDays) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getEnableMultiselection enableMultiselection}.
 * 
 * to enable multiselection feature
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableMultiselection New value for property <code>enableMultiselection</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setEnableMultiselection = function(bEnableMultiselection) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getFirstDayOffset firstDayOffset}.
 * 
 * to offset the first day of the week (0 = sunday)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFirstDayOffset New value for property <code>firstDayOffset</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setFirstDayOffset = function(iFirstDayOffset) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getHideMonthTitles hideMonthTitles}.
 * 
 * hides the area of month titles
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHideMonthTitles New value for property <code>hideMonthTitles</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setHideMonthTitles = function(bHideMonthTitles) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getHideNavControls hideNavControls}.
 * 
 * hides the area of navigation controls
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHideNavControls New value for property <code>hideNavControls</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setHideNavControls = function(bHideNavControls) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getMonths months}.
 * 
 * Array of month names, default value is sap.m.getLocaleData().getMonths("abbreviated")
 * Check sap.ui.core.LocaleData documentation for more info.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oMonths New value for property <code>months</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setMonths = function(oMonths) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getMonthsPerRow monthsPerRow}.
 * 
 * months to display in a row. This sets the width of the whole control in order to contain the desired number of months per row
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iMonthsPerRow New value for property <code>monthsPerRow</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setMonthsPerRow = function(iMonthsPerRow) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getMonthsToDisplay monthsToDisplay}.
 * 
 * number of months in a row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iMonthsToDisplay New value for property <code>monthsToDisplay</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setMonthsToDisplay = function(iMonthsToDisplay) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getSelectionMode selectionMode}.
 * 
 * Indicates the design of the calendar (mainly colors)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>SINGLE</code>.
 * @param {sap.me.CalendarSelectionMode} sSelectionMode New value for property <code>selectionMode</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setSelectionMode = function(sSelectionMode) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getSingleRow singleRow}.
 * 
 * boolean that sets the view to week mode or month mode
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bSingleRow New value for property <code>singleRow</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setSingleRow = function(bSingleRow) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getSwipeToNavigate swipeToNavigate}.
 * 
 * When enabled, swipe gestures will navigate and not select
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSwipeToNavigate New value for property <code>swipeToNavigate</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setSwipeToNavigate = function(bSwipeToNavigate) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * visibility of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setVisible = function(bVisible) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getWeeksPerRow weeksPerRow}.
 * 
 * weeks to display in a row
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iWeeksPerRow New value for property <code>weeksPerRow</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setWeeksPerRow = function(iWeeksPerRow) { return new sap.me.Calendar(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the calendar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.me.Calendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.Calendar.prototype.setWidth = function(sWidth) { return new sap.me.Calendar(); };

/**
 * it toggles the selection of the dates within the passed range to selected/unselected
 * 
 * @param {any} oDateStart
 *         starting date of the range. It can be Strings or Date objects.
 * @param {any} oDateEnd
 *         ending date of the range. It can be Strings or Date objects.
 * @param {boolean} bSelected
 *         selected/unselected. Optional, if omitted it inverts each date's current state
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.Calendar.prototype.toggleDatesRangeSelection = function(oDateStart,oDateEnd,bSelected) { return null; };

/**
 * it toggles the passed dates to selected/unselected
 * 
 * @param {any} aDates
 *         Array of the dates to be toggled. they can be Strings or Date objects.
 * @param {boolean} bSelected
 *         select/unselect. Optional, if omitted it inverts each date's current state
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.Calendar.prototype.toggleDatesSelection = function(aDates,bSelected) { return null; };

/**
 * Change the type of the given dates
 * 
 * @param {any} aDates
 *         An array of dates in string representation
 * @param {sap.me.CalendarEventType} sType
 *         The type of event
 * @param {boolean} bSelected
 *         Add/remove the type, if ommited it will toggle
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.Calendar.prototype.toggleDatesType = function(aDates,sType,bSelected) { return null; };

/**
 * unselect all the dates
 * 
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.Calendar.prototype.unselectAllDates = function() { return null; };


// ---- sap.me.CalendarDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.me.CalendarDesign.toString = function() { return ""; };

// ---- sap.me.CalendarEventType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.me.CalendarEventType.toString = function() { return ""; };

// ---- sap.me.CalendarLegend --------------------------------------------------------------------------

/**
 * Constructor for a new CalendarLegend.
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
 * <li>{@link #getLegendForType00 legendForType00} : string</li>
 * <li>{@link #getLegendForType01 legendForType01} : string</li>
 * <li>{@link #getLegendForType04 legendForType04} : string</li>
 * <li>{@link #getLegendForType06 legendForType06} : string</li>
 * <li>{@link #getLegendForType07 legendForType07} : string</li>
 * <li>{@link #getLegendForToday legendForToday} : string</li>
 * <li>{@link #getLegendForSelected legendForSelected} : string</li>
 * <li>{@link #getLegendForSelected00 legendForSelected00} : string</li>
 * <li>{@link #getLegendForNormal legendForNormal} : string</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getLegendWidth legendWidth} : sap.ui.core.CSSSize (default: 12.5rem)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.me.CalendarDesign (default: Approval)</li>
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
 * Legend for the calendar control
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.0.
 * This control was experimental since 1.12. Please use the sap.ui.unified.CalendarLegend instead!
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.CalendarLegend = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.me.CalendarLegend with name <code>sClassName</code>
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
sap.me.CalendarLegend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDesign design}.
 * 
 * design name for the legend
 * 
 * Default value is <code>Approval</code>.
 * @returns {sap.me.CalendarDesign} Value of property <code>design</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getDesign = function() { return new sap.me.CalendarDesign(); };

/**
 * Gets current value of property {@link #getExpandable expandable}.
 * 
 * Indicates if the legend can be collapsed and expanded
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expandable</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getExpandable = function() { return false; };

/**
 * Gets current value of property {@link #getExpanded expanded}.
 * 
 * Indicates if the legend is expanded or not
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getExpanded = function() { return false; };

/**
 * Gets current value of property {@link #getLegendForNormal legendForNormal}.
 * 
 * legend for normal
 * 
 * @returns {string} Value of property <code>legendForNormal</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForNormal = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForSelected legendForSelected}.
 * 
 * legend for selected
 * 
 * @returns {string} Value of property <code>legendForSelected</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForSelected = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForSelected00 legendForSelected00}.
 * 
 * legend for selected 00
 * 
 * @returns {string} Value of property <code>legendForSelected00</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForSelected00 = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForToday legendForToday}.
 * 
 * legend for today
 * 
 * @returns {string} Value of property <code>legendForToday</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForToday = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForType00 legendForType00}.
 * 
 * legend for type 00
 * 
 * @returns {string} Value of property <code>legendForType00</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType00 = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForType01 legendForType01}.
 * 
 * legend for type 01
 * 
 * @returns {string} Value of property <code>legendForType01</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType01 = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForType04 legendForType04}.
 * 
 * legend for type 04
 * 
 * @returns {string} Value of property <code>legendForType04</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType04 = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForType06 legendForType06}.
 * 
 * legend for type 06
 * 
 * @returns {string} Value of property <code>legendForType06</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType06 = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendForType07 legendForType07}.
 * 
 * legend for type 07
 * 
 * @returns {string} Value of property <code>legendForType07</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendForType07 = function() { return ""; };

/**
 * Gets current value of property {@link #getLegendWidth legendWidth}.
 * 
 * Indicates the legend items width
 * 
 * Default value is <code>12.5rem</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>legendWidth</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getLegendWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.me.CalendarLegend.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.me.CalendarLegend.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Indicates if the legend is visible
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Indicates the whole component width
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getDesign design}.
 * 
 * design name for the legend
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Approval</code>.
 * @param {sap.me.CalendarDesign} sDesign New value for property <code>design</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setDesign = function(sDesign) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getExpandable expandable}.
 * 
 * Indicates if the legend can be collapsed and expanded
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpandable New value for property <code>expandable</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setExpandable = function(bExpandable) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getExpanded expanded}.
 * 
 * Indicates if the legend is expanded or not
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setExpanded = function(bExpanded) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForNormal legendForNormal}.
 * 
 * legend for normal
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForNormal New value for property <code>legendForNormal</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForNormal = function(sLegendForNormal) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForSelected legendForSelected}.
 * 
 * legend for selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForSelected New value for property <code>legendForSelected</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForSelected = function(sLegendForSelected) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForSelected00 legendForSelected00}.
 * 
 * legend for selected 00
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForSelected00 New value for property <code>legendForSelected00</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForSelected00 = function(sLegendForSelected00) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForToday legendForToday}.
 * 
 * legend for today
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForToday New value for property <code>legendForToday</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForToday = function(sLegendForToday) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForType00 legendForType00}.
 * 
 * legend for type 00
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForType00 New value for property <code>legendForType00</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType00 = function(sLegendForType00) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForType01 legendForType01}.
 * 
 * legend for type 01
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForType01 New value for property <code>legendForType01</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType01 = function(sLegendForType01) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForType04 legendForType04}.
 * 
 * legend for type 04
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForType04 New value for property <code>legendForType04</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType04 = function(sLegendForType04) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForType06 legendForType06}.
 * 
 * legend for type 06
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForType06 New value for property <code>legendForType06</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType06 = function(sLegendForType06) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendForType07 legendForType07}.
 * 
 * legend for type 07
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLegendForType07 New value for property <code>legendForType07</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendForType07 = function(sLegendForType07) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getLegendWidth legendWidth}.
 * 
 * Indicates the legend items width
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12.5rem</code>.
 * @param {sap.ui.core.CSSSize} sLegendWidth New value for property <code>legendWidth</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setLegendWidth = function(sLegendWidth) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Indicates if the legend is visible
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setVisible = function(bVisible) { return new sap.me.CalendarLegend(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Indicates the whole component width
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.me.CalendarLegend} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.CalendarLegend.prototype.setWidth = function(sWidth) { return new sap.me.CalendarLegend(); };


// ---- sap.me.CalendarSelectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.me.CalendarSelectionMode.toString = function() { return ""; };

// ---- sap.me.OverlapCalendar --------------------------------------------------------------------------

/**
 * Constructor for a new OverlapCalendar.
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
 * <li>{@link #getStartDate startDate} : string</li>
 * <li>{@link #getWeeksPerRow weeksPerRow} : int (default: 2)</li>
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getShowOverlapIndicator showOverlapIndicator} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getSwipeToNavigate swipeToNavigate} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCalendarEvents calendarEvents} : sap.me.OverlapCalendarEvent[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:endOfData endOfData} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:changeDate changeDate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A calendar that allows to display events in a grid and show the overlapped events
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.0.
 * This control was experimental since 1.12. Please use the sap.m.PlanningCalendar instead!
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.OverlapCalendar = function(sId,mSettings) {};
/**
 * Triggered when the displayed dates change
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.firstDate The first date displayed in the calendar
 * @param {object} oControlEvent.getParameters.lastDate The last date that will be displayed
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.changeDate = function(oControlEvent) {  };

/**
 * Indicates that we have reach the last week with data
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.before Indicates if the data missing are before the start date or at the end
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.endOfData = function(oControlEvent) {  };

/**
 * Adds some calendarEvent to the aggregation {@link #getCalendarEvents calendarEvents}.
 * @param {sap.me.OverlapCalendarEvent}
 *            oCalendarEvent the calendarEvent to add; if empty, nothing is inserted
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.addCalendarEvent = function(oCalendarEvent) { return new sap.me.OverlapCalendar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:changeDate changeDate} event of this <code>sap.me.OverlapCalendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.OverlapCalendar</code> itself.
 * 
 * Triggered when the displayed dates change
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.OverlapCalendar</code> itself
 * 
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.attachChangeDate = function(oData,fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:endOfData endOfData} event of this <code>sap.me.OverlapCalendar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.OverlapCalendar</code> itself.
 * 
 * Indicates that we have reach the last week with data
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.OverlapCalendar</code> itself
 * 
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.attachEndOfData = function(oData,fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * Destroys all the calendarEvents in the aggregation {@link #getCalendarEvents calendarEvents}.
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.destroyCalendarEvents = function() { return new sap.me.OverlapCalendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:changeDate changeDate} event of this <code>sap.me.OverlapCalendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.detachChangeDate = function(fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:endOfData endOfData} event of this <code>sap.me.OverlapCalendar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.detachEndOfData = function(fnFunction,oListener) { return new sap.me.OverlapCalendar(); };

/**
 * Creates a new subclass of class sap.me.OverlapCalendar with name <code>sClassName</code>
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
sap.me.OverlapCalendar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:changeDate changeDate} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {object} [mParameters.firstDate] The first date displayed in the calendar
 * @param {object} [mParameters.lastDate] The last date that will be displayed
 * 
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.OverlapCalendar.prototype.fireChangeDate = function(mParameters) { return new sap.me.OverlapCalendar(); };

/**
 * Fires event {@link #event:endOfData endOfData} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {boolean} [mParameters.before] Indicates if the data missing are before the start date or at the end
 * 
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.OverlapCalendar.prototype.fireEndOfData = function(mParameters) { return new sap.me.OverlapCalendar(); };

/**
 * @public
 * @returns {sap.me.Calendar} The calendar object
 * 
 */
sap.me.OverlapCalendar.prototype.getCalendar = function() { return new sap.me.Calendar(); };

/**
 * Gets content of aggregation {@link #getCalendarEvents calendarEvents}.
 * 
 * The list of events to display in the calendar grid
 * 
 * @returns {sap.me.OverlapCalendarEvent[]}
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getCalendarEvents = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFirstDayOffset firstDayOffset}.
 * 
 * Indicate how to offset the first day in regards to a Sunday (by default)
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>firstDayOffset</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getFirstDayOffset = function() { return 0; };

/**
 * Returns a metadata object for class sap.me.OverlapCalendar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.me.OverlapCalendar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowOverlapIndicator showOverlapIndicator}.
 * 
 * Do we want to display the overlap indicator
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showOverlapIndicator</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getShowOverlapIndicator = function() { return false; };

/**
 * Gets current value of property {@link #getStartDate startDate}.
 * 
 * The first date to display for the calendar
 * 
 * @returns {string} Value of property <code>startDate</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getStartDate = function() { return ""; };

/**
 * Gets current value of property {@link #getSwipeToNavigate swipeToNavigate}.
 * 
 * Use swipe gesture to navigate
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>swipeToNavigate</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getSwipeToNavigate = function() { return false; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Indicates if we should render this component
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property {@link #getWeeksPerRow weeksPerRow}.
 * 
 * Number of weeks
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>weeksPerRow</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getWeeksPerRow = function() { return 0; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the calendar
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.me.OverlapCalendarEvent</code> in the aggregation {@link #getCalendarEvents calendarEvents}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.me.OverlapCalendarEvent}
 *           oCalendarEvent The calendarEvent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.indexOfCalendarEvent = function(oCalendarEvent) { return 0; };

/**
 * Inserts a calendarEvent into the aggregation {@link #getCalendarEvents calendarEvents}.
 * 
 * @param {sap.me.OverlapCalendarEvent}
 *            oCalendarEvent the calendarEvent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the calendarEvent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the calendarEvent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the calendarEvent is inserted at
 *              the last position
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.insertCalendarEvent = function(oCalendarEvent,iIndex) { return new sap.me.OverlapCalendar(); };

/**
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.onAfterRendering = function() {  };

/**
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.onBeforeRendering = function() {  };

/**
 * @param {event} oEvent
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.onswipeleft = function(oEvent) {  };

/**
 * @param {event} oEvent
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.onswiperight = function(oEvent) {  };

/**
 * Removes all the controls from the aggregation {@link #getCalendarEvents calendarEvents}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.me.OverlapCalendarEvent[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.removeAllCalendarEvents = function() { return new Array(); };

/**
 * Removes a calendarEvent from the aggregation {@link #getCalendarEvents calendarEvents}.
 * 
 * @param {int | string | sap.me.OverlapCalendarEvent} vCalendarEvent The calendarEvent to remove or its index or id
 * @returns {sap.me.OverlapCalendarEvent} The removed calendarEvent or <code>null</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.removeCalendarEvent = function(vCalendarEvent) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getFirstDayOffset firstDayOffset}.
 * 
 * Indicate how to offset the first day in regards to a Sunday (by default)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iFirstDayOffset New value for property <code>firstDayOffset</code>
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setFirstDayOffset = function(iFirstDayOffset) { return new sap.me.OverlapCalendar(); };

/**
 * Sets a new value for property {@link #getShowOverlapIndicator showOverlapIndicator}.
 * 
 * Do we want to display the overlap indicator
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowOverlapIndicator New value for property <code>showOverlapIndicator</code>
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setShowOverlapIndicator = function(bShowOverlapIndicator) { return new sap.me.OverlapCalendar(); };

/**
 * @param {string|Date} sDate The start date, expected toDateString.
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setStartDate = function(sDate) {  };

/**
 * @param {boolean} bSwipe
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setSwipeToNavigate = function(bSwipe) {  };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Indicates if we should render this component
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setVisible = function(bVisible) { return new sap.me.OverlapCalendar(); };

/**
 * @param {number} iWeeksPerRow The integer number of weeks per row
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setWeeksPerRow = function(iWeeksPerRow) {  };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the calendar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.me.OverlapCalendar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendar.prototype.setWidth = function(sWidth) { return new sap.me.OverlapCalendar(); };


// ---- sap.me.OverlapCalendarEvent --------------------------------------------------------------------------

/**
 * Constructor for a new OverlapCalendarEvent.
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
 * <li>{@link #getStartDay startDay} : string</li>
 * <li>{@link #getEndDay endDay} : string</li>
 * <li>{@link #getRelevant relevant} : boolean</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getTypeName typeName} : string</li>
 * <li>{@link #getHalfDay halfDay} : boolean (default: false)</li>
 * <li>{@link #getRow row} : int (default: -1)</li>
 * <li>{@link #getName name} : string</li>
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
 * Represent the data of an event for the overlap calendar
 * @extends sap.ui.core.Element
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.34.0.
 * This control was experimental since 1.12. Please use the sap.ui.unified.CalendarAppointment instead!
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.OverlapCalendarEvent = function(sId,mSettings) {};
/**
 * Binds property {@link #getEndDay endDay} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindEndDay = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getHalfDay halfDay} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindHalfDay = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getName name} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindName = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getRelevant relevant} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindRelevant = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getRow row} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindRow = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getStartDay startDay} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindStartDay = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getType type} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindType = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Binds property {@link #getTypeName typeName} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>
 * @param {object} oBindingInfo The binding information
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.bindTypeName = function(oBindingInfo) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Creates a new subclass of class sap.me.OverlapCalendarEvent with name <code>sClassName</code>
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
sap.me.OverlapCalendarEvent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getEndDay endDay}.
 * 
 * Last day of the event
 * 
 * @returns {string} Value of property <code>endDay</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getEndDay = function() { return ""; };

/**
 * Gets current value of property {@link #getHalfDay halfDay}.
 * 
 * Is this half a day
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>halfDay</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getHalfDay = function() { return false; };

/**
 * Returns a metadata object for class sap.me.OverlapCalendarEvent.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.me.OverlapCalendarEvent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getName name}.
 * 
 * Name of the row
 * 
 * @returns {string} Value of property <code>name</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getName = function() { return ""; };

/**
 * Gets current value of property {@link #getRelevant relevant}.
 * 
 * Indicates if this elements is relevant to be consider in the overlap
 * 
 * @returns {boolean} Value of property <code>relevant</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getRelevant = function() { return false; };

/**
 * Gets current value of property {@link #getRow row}.
 * 
 * Id of the row on which to place this event
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>row</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getRow = function() { return 0; };

/**
 * Gets current value of property {@link #getStartDay startDay}.
 * 
 * The first day of the event
 * 
 * @returns {string} Value of property <code>startDay</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getStartDay = function() { return ""; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Type of the event. Display in the second label (no overlap)
 * 
 * @returns {string} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getType = function() { return ""; };

/**
 * Gets current value of property {@link #getTypeName typeName}.
 * 
 * The CSS class to use
 * 
 * @returns {string} Value of property <code>typeName</code>
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.getTypeName = function() { return ""; };

/**
 * Sets a new value for property {@link #getEndDay endDay}.
 * 
 * Last day of the event
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sEndDay New value for property <code>endDay</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setEndDay = function(sEndDay) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getHalfDay halfDay}.
 * 
 * Is this half a day
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHalfDay New value for property <code>halfDay</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setHalfDay = function(bHalfDay) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getName name}.
 * 
 * Name of the row
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setName = function(sName) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getRelevant relevant}.
 * 
 * Indicates if this elements is relevant to be consider in the overlap
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bRelevant New value for property <code>relevant</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setRelevant = function(bRelevant) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getRow row}.
 * 
 * Id of the row on which to place this event
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iRow New value for property <code>row</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setRow = function(iRow) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getStartDay startDay}.
 * 
 * The first day of the event
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sStartDay New value for property <code>startDay</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setStartDay = function(sStartDay) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Type of the event. Display in the second label (no overlap)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setType = function(sType) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Sets a new value for property {@link #getTypeName typeName}.
 * 
 * The CSS class to use
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTypeName New value for property <code>typeName</code>
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.setTypeName = function(sTypeName) { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getEndDay endDay} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindEndDay = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getHalfDay halfDay} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindHalfDay = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getName name} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindName = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getRelevant relevant} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindRelevant = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getRow row} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindRow = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getStartDay startDay} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindStartDay = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getType type} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindType = function() { return new sap.me.OverlapCalendarEvent(); };

/**
 * Unbinds property {@link #getTypeName typeName} from model data.
 * @returns {sap.me.OverlapCalendarEvent} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.OverlapCalendarEvent.prototype.unbindTypeName = function() { return new sap.me.OverlapCalendarEvent(); };


// ---- sap.me.ProgressIndicator --------------------------------------------------------------------------

/**
 * Constructor for a new ProgressIndicator.
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
 * <li>{@link #getBarColor barColor} : sap.ui.core.BarColor (default: NEUTRAL)</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: 0%)</li>
 * <li>{@link #getPercentValue percentValue} : int (default: 0)</li>
 * <li>{@link #getShowValue showValue} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
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
 * Shows the progress of a process in a graphical way. The indicator can be displayed with or without numerical values.
 * The filling can be displayed in color only, or additionally with the percentage rate. The indicator status can be interactive.
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.14. 
 * This control is replaced by sap.m.ProgressIndicator
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.ProgressIndicator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.me.ProgressIndicator with name <code>sClassName</code>
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
sap.me.ProgressIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getBarColor barColor}.
 * 
 * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
 * 
 * Default value is <code>NEUTRAL</code>.
 * @returns {sap.ui.core.BarColor} Value of property <code>barColor</code>
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getBarColor = function() { return new sap.ui.core.BarColor(); };

/**
 * Gets current value of property {@link #getDisplayValue displayValue}.
 * 
 * The text value to be displayed in the bar.
 * 
 * Default value is <code>0%</code>.
 * @returns {string} Value of property <code>displayValue</code>
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getDisplayValue = function() { return ""; };

/**
 * Gets current value of property {@link #getEnabled enabled}.
 * 
 * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.me.ProgressIndicator.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.me.ProgressIndicator.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPercentValue percentValue}.
 * 
 * The numerical value for the displayed length of the progress bar.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>percentValue</code>
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getPercentValue = function() { return 0; };

/**
 * Gets current value of property {@link #getShowValue showValue}.
 * 
 * Specifies whether the current value shall be rendered inside the bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showValue</code>
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getShowValue = function() { return false; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Invisible controls are not rendered
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.getVisible = function() { return false; };

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
sap.me.ProgressIndicator.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getBarColor barColor}.
 * 
 * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>NEUTRAL</code>.
 * @param {sap.ui.core.BarColor} sBarColor New value for property <code>barColor</code>
 * @returns {sap.me.ProgressIndicator} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setBarColor = function(sBarColor) { return new sap.me.ProgressIndicator(); };

/**
 * Sets a new value for property {@link #getDisplayValue displayValue}.
 * 
 * The text value to be displayed in the bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0%</code>.
 * @param {string} sDisplayValue New value for property <code>displayValue</code>
 * @returns {sap.me.ProgressIndicator} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setDisplayValue = function(sDisplayValue) { return new sap.me.ProgressIndicator(); };

/**
 * Sets a new value for property {@link #getEnabled enabled}.
 * 
 * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.me.ProgressIndicator} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setEnabled = function(bEnabled) { return new sap.me.ProgressIndicator(); };

/**
 * Property setter for the PercentValue
 * A new rendering is not necessary, only the bar has to be moved.
 * 
 * @param iPercentValue
 * @return {sap.me.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setPercentValue = function(iPercentValue) { return new sap.me.ProgressIndicator(); };

/**
 * Sets a new value for property {@link #getShowValue showValue}.
 * 
 * Specifies whether the current value shall be rendered inside the bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValue New value for property <code>showValue</code>
 * @returns {sap.me.ProgressIndicator} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setShowValue = function(bShowValue) { return new sap.me.ProgressIndicator(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Invisible controls are not rendered
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.me.ProgressIndicator} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setVisible = function(bVisible) { return new sap.me.ProgressIndicator(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.me.ProgressIndicator} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.ProgressIndicator.prototype.setWidth = function(sWidth) { return new sap.me.ProgressIndicator(); };


// ---- sap.me.TabContainer --------------------------------------------------------------------------

/**
 * Constructor for a new TabContainer.
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
 * <li>{@link #getSelectedTab selectedTab} : int</li>
 * <li>{@link #getBadgeInfo badgeInfo} : int</li>
 * <li>{@link #getBadgeNotes badgeNotes} : int</li>
 * <li>{@link #getBadgeAttachments badgeAttachments} : int</li>
 * <li>{@link #getBadgePeople badgePeople} : int</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentInfo contentInfo} : sap.ui.core.Control</li>
 * <li>{@link #getContentAttachments contentAttachments} : sap.ui.core.Control</li>
 * <li>{@link #getContentNotes contentNotes} : sap.ui.core.Control</li>
 * <li>{@link #getContentPeople contentPeople} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:expand expand} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:collapse collapse} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The TabContainer allow to stack 1 to 4 contents in a
 * view with corresponding icons
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.15.0. 
 * The functionality of this control is merged with the sap.m.IconTabBar.
 * Please use the sap.m.IconTabBar instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.me.TabContainer = function(sId,mSettings) {};
/**
 * Indicates that the tab will collapse
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.me.TabContainer.prototype.collapse = function(oControlEvent) {  };

/**
 * Indicates that the tab will expand
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.me.TabContainer.prototype.expand = function(oControlEvent) {  };

/**
 * Indicates that the selected tab has changed
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.me.TabContainer.prototype.select = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:collapse collapse} event of this <code>sap.me.TabContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.TabContainer</code> itself.
 * 
 * Indicates that the tab will collapse
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code> itself
 * 
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.attachCollapse = function(oData,fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:expand expand} event of this <code>sap.me.TabContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.TabContainer</code> itself.
 * 
 * Indicates that the tab will expand
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code> itself
 * 
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.attachExpand = function(oData,fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.me.TabContainer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.me.TabContainer</code> itself.
 * 
 * Indicates that the selected tab has changed
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.me.TabContainer</code> itself
 * 
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.me.TabContainer.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * Destroys the contentAttachments in the aggregation {@link #getContentAttachments contentAttachments}.
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentAttachments = function() { return new sap.me.TabContainer(); };

/**
 * Destroys the contentInfo in the aggregation {@link #getContentInfo contentInfo}.
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentInfo = function() { return new sap.me.TabContainer(); };

/**
 * Destroys the contentNotes in the aggregation {@link #getContentNotes contentNotes}.
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentNotes = function() { return new sap.me.TabContainer(); };

/**
 * Destroys the contentPeople in the aggregation {@link #getContentPeople contentPeople}.
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.destroyContentPeople = function() { return new sap.me.TabContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:collapse collapse} event of this <code>sap.me.TabContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.detachCollapse = function(fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:expand expand} event of this <code>sap.me.TabContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.detachExpand = function(fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.me.TabContainer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.detachSelect = function(fnFunction,oListener) { return new sap.me.TabContainer(); };

/**
 * Creates a new subclass of class sap.me.TabContainer with name <code>sClassName</code>
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
sap.me.TabContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:collapse collapse} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.TabContainer.prototype.fireCollapse = function(mParameters) { return new sap.me.TabContainer(); };

/**
 * Fires event {@link #event:expand expand} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.me.TabContainer.prototype.fireExpand = function(mParameters) { return new sap.me.TabContainer(); };

/**
 * Fires event {@link #event:select select} to attached listeners.
 * 
 * Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {boolean} Whether or not to prevent the default action
 * @protected
 * 
 */
sap.me.TabContainer.prototype.fireSelect = function(mParameters) { return false; };

/**
 * Gets current value of property {@link #getBadgeAttachments badgeAttachments}.
 * 
 * The number to display in the badge for the attachments tab
 * 
 * @returns {int} Value of property <code>badgeAttachments</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgeAttachments = function() { return 0; };

/**
 * Gets current value of property {@link #getBadgeInfo badgeInfo}.
 * 
 * The number to display in the badge for the info tab
 * 
 * @returns {int} Value of property <code>badgeInfo</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgeInfo = function() { return 0; };

/**
 * Gets current value of property {@link #getBadgeNotes badgeNotes}.
 * 
 * The number to display in the badge for the notes tab
 * 
 * @returns {int} Value of property <code>badgeNotes</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgeNotes = function() { return 0; };

/**
 * Gets current value of property {@link #getBadgePeople badgePeople}.
 * 
 * The number to display in the badge for the people tab
 * 
 * @returns {int} Value of property <code>badgePeople</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getBadgePeople = function() { return 0; };

/**
 * Gets content of aggregation {@link #getContentAttachments contentAttachments}.
 * 
 * The attachments tab
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentAttachments = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getContentInfo contentInfo}.
 * 
 * The info tab
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentInfo = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getContentNotes contentNotes}.
 * 
 * The notes tab
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentNotes = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation {@link #getContentPeople contentPeople}.
 * 
 * The people tab
 * 
 * @returns {sap.ui.core.Control}
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getContentPeople = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property {@link #getExpandable expandable}.
 * 
 * Indicates if the tab can be collapsed and expanded
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expandable</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getExpandable = function() { return false; };

/**
 * Gets current value of property {@link #getExpanded expanded}.
 * 
 * Indicates if the actual tab is expanded or not
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getExpanded = function() { return false; };

/**
 * Returns a metadata object for class sap.me.TabContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.me.TabContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSelectedTab selectedTab}.
 * 
 * Return the index of the selected tab
 * 
 * @returns {int} Value of property <code>selectedTab</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getSelectedTab = function() { return 0; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * setter for visible property
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.getVisible = function() { return false; };

/**
 * Sets a new value for property {@link #getBadgeAttachments badgeAttachments}.
 * 
 * The number to display in the badge for the attachments tab
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iBadgeAttachments New value for property <code>badgeAttachments</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgeAttachments = function(iBadgeAttachments) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getBadgeInfo badgeInfo}.
 * 
 * The number to display in the badge for the info tab
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iBadgeInfo New value for property <code>badgeInfo</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgeInfo = function(iBadgeInfo) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getBadgeNotes badgeNotes}.
 * 
 * The number to display in the badge for the notes tab
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iBadgeNotes New value for property <code>badgeNotes</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgeNotes = function(iBadgeNotes) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getBadgePeople badgePeople}.
 * 
 * The number to display in the badge for the people tab
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iBadgePeople New value for property <code>badgePeople</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setBadgePeople = function(iBadgePeople) { return new sap.me.TabContainer(); };

/**
 * Sets the aggregated {@link #getContentAttachments contentAttachments}.
 * @param {sap.ui.core.Control} oContentAttachments The contentAttachments to set
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentAttachments = function(oContentAttachments) { return new sap.me.TabContainer(); };

/**
 * Sets the aggregated {@link #getContentInfo contentInfo}.
 * @param {sap.ui.core.Control} oContentInfo The contentInfo to set
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentInfo = function(oContentInfo) { return new sap.me.TabContainer(); };

/**
 * Sets the aggregated {@link #getContentNotes contentNotes}.
 * @param {sap.ui.core.Control} oContentNotes The contentNotes to set
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentNotes = function(oContentNotes) { return new sap.me.TabContainer(); };

/**
 * Sets the aggregated {@link #getContentPeople contentPeople}.
 * @param {sap.ui.core.Control} oContentPeople The contentPeople to set
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setContentPeople = function(oContentPeople) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getExpandable expandable}.
 * 
 * Indicates if the tab can be collapsed and expanded
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpandable New value for property <code>expandable</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setExpandable = function(bExpandable) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getExpanded expanded}.
 * 
 * Indicates if the actual tab is expanded or not
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setExpanded = function(bExpanded) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getSelectedTab selectedTab}.
 * 
 * Return the index of the selected tab
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {int} iSelectedTab New value for property <code>selectedTab</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setSelectedTab = function(iSelectedTab) { return new sap.me.TabContainer(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * setter for visible property
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.me.TabContainer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.me.TabContainer.prototype.setVisible = function(bVisible) { return new sap.me.TabContainer(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.me.CalendarDesign --------------------------------------------------------------------------

/**
 * Colors match calendar design for Action
 * @public
 * 
 */
sap.me.CalendarDesign.Action = "";

/**
 * Colors match calendar design for Approval
 * @public
 * 
 */
sap.me.CalendarDesign.Approval = "";


// ---- sap.me.CalendarEventType --------------------------------------------------------------------------

/**
 * Type 00 (non-working day (e.g. weekend))
 * @public
 * 
 */
sap.me.CalendarEventType.Type00 = "";

/**
 * Type 01 (nonattendance / submitted day)
 * @public
 * 
 */
sap.me.CalendarEventType.Type01 = "";

/**
 * Type 04 (open request / manager action needed)
 * @public
 * 
 */
sap.me.CalendarEventType.Type04 = "";

/**
 * Type 06 (public holiday)
 * @public
 * 
 */
sap.me.CalendarEventType.Type06 = "";

/**
 * Type 07 (deletion requested / your action needed)
 * @public
 * 
 */
sap.me.CalendarEventType.Type07 = "";

/**
 * Type 10 (workday)
 * @public
 * 
 */
sap.me.CalendarEventType.Type10 = "";


// ---- sap.me.CalendarSelectionMode --------------------------------------------------------------------------

/**
 * Can select multiple dates and ranges
 * @public
 * 
 */
sap.me.CalendarSelectionMode.MULTIPLE = "";

/**
 * Can select a range of dates
 * @public
 * 
 */
sap.me.CalendarSelectionMode.RANGE = "";

/**
 * Can only select one date
 * @public
 * 
 */
sap.me.CalendarSelectionMode.SINGLE = "";

