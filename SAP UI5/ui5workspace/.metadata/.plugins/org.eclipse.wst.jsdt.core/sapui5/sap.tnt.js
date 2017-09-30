
// ---- sap.tnt --------------------------------------------------------------------------


// ---- sap.tnt.NavigationList --------------------------------------------------------------------------

/**
 * Constructor for a new NavigationList.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.tnt.NavigationListItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The NavigationList control is an interactive control, which provides a choice of
 * different items, ordered as a list.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.tnt.NavigationList = function(sId,mSettings) {};
/**
 * Fired when an item is selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.item The selected item.
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.itemSelect = function(oControlEvent) {  };

/**
 * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to add; if empty, nothing is inserted
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.tnt.NavigationList(); };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.tnt.NavigationList(); };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.tnt.NavigationListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.addItem = function(oItem) { return new sap.tnt.NavigationList(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.NavigationList</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.tnt.NavigationList</code> itself.
 * 
 * Fired when an item is selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationList</code> itself
 * 
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.tnt.NavigationList(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.destroyItems = function() { return new sap.tnt.NavigationList(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.NavigationList</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.tnt.NavigationList(); };

/**
 * Creates a new subclass of class sap.tnt.NavigationList with name <code>sClassName</code>
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
sap.tnt.NavigationList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Item} [mParameters.item] The selected item.
 * 
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.tnt.NavigationList.prototype.fireItemSelect = function(mParameters) { return new sap.tnt.NavigationList(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getExpanded expanded}.
 * 
 * Specifies if the control is in expanded or collapsed mode.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.getExpanded = function() { return false; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The items displayed in the list.
 * 
 * @returns {sap.tnt.NavigationListItem[]}
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.tnt.NavigationList.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.tnt.NavigationList.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * Specifies the width of the control.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.tnt.NavigationListItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.tnt.NavigationListItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.insertItem = function(oItem,iIndex) { return new sap.tnt.NavigationList(); };

/**
 * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.tnt.NavigationListItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy The ariaDescribedBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaDescribedBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return new sap.ui.core.ID(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.tnt.NavigationListItem} vItem The item to remove or its index or id
 * @returns {sap.tnt.NavigationListItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.removeItem = function(vItem) { return new sap.tnt.NavigationListItem(); };

/**
 * Sets a new value for property {@link #getExpanded expanded}.
 * 
 * Specifies if the control is in expanded or collapsed mode.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.setExpanded = function(bExpanded) { return new sap.tnt.NavigationList(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * Specifies the width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.tnt.NavigationList} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationList.prototype.setWidth = function(sWidth) { return new sap.tnt.NavigationList(); };


// ---- sap.tnt.NavigationListItem --------------------------------------------------------------------------

/**
 * Constructor for a new NavigationListItem.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: )</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getHasExpander hasExpander} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.tnt.NavigationListItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The NavigationListItem control represents an action, which can be selected by the user.
 * It can provide sub items.
 * @extends sap.ui.core.Item
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.tnt.NavigationListItem = function(sId,mSettings) {};
/**
 * Fired when this item is selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.item The selected item.
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.select = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.tnt.NavigationListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.addItem = function(oItem) { return new sap.tnt.NavigationListItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.tnt.NavigationListItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.tnt.NavigationListItem</code> itself.
 * 
 * Fired when this item is selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationListItem</code> itself
 * 
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.tnt.NavigationListItem(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.destroyItems = function() { return new sap.tnt.NavigationListItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.tnt.NavigationListItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.detachSelect = function(fnFunction,oListener) { return new sap.tnt.NavigationListItem(); };

/**
 * Creates a new subclass of class sap.tnt.NavigationListItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.tnt.NavigationListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:select select} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Item} [mParameters.item] The selected item.
 * 
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.tnt.NavigationListItem.prototype.fireSelect = function(mParameters) { return new sap.tnt.NavigationListItem(); };

/**
 * Gets current value of property {@link #getExpanded expanded}.
 * 
 * Specifies if the item is expanded.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.getExpanded = function() { return false; };

/**
 * Gets current value of property {@link #getHasExpander hasExpander}.
 * 
 * Specifies if the item has an expander.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>hasExpander</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.getHasExpander = function() { return false; };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Specifies the icon for the item.
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The sub items.
 * 
 * @returns {sap.tnt.NavigationListItem[]}
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.tnt.NavigationListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.tnt.NavigationListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.tnt.NavigationListItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.tnt.NavigationListItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.insertItem = function(oItem,iIndex) { return new sap.tnt.NavigationListItem(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.tnt.NavigationListItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.tnt.NavigationListItem} vItem The item to remove or its index or id
 * @returns {sap.tnt.NavigationListItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.removeItem = function(vItem) { return new sap.tnt.NavigationListItem(); };

/**
 * Sets a new value for property {@link #getExpanded expanded}.
 * 
 * Specifies if the item is expanded.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.setExpanded = function(bExpanded) { return new sap.tnt.NavigationListItem(); };

/**
 * Sets a new value for property {@link #getHasExpander hasExpander}.
 * 
 * Specifies if the item has an expander.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHasExpander New value for property <code>hasExpander</code>
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.setHasExpander = function(bHasExpander) { return new sap.tnt.NavigationListItem(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Specifies the icon for the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.tnt.NavigationListItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.NavigationListItem.prototype.setIcon = function(sIcon) { return new sap.tnt.NavigationListItem(); };


// ---- sap.tnt.SideNavigation --------------------------------------------------------------------------

/**
 * Constructor for a new SideNavigation.
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
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItem item} : sap.tnt.NavigationList (default)</li>
 * <li>{@link #getFixedItem fixedItem} : sap.tnt.NavigationList</li>
 * <li>{@link #getFooter footer} : sap.tnt.NavigationList</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * The SideNavigation control is a container, which consists of flexible and fixed parts on top of each other. The flexible part adapts its size to the fixed one.
 * The flexible part has a scrollbar when the content is larger than the available space.
 * Whenever the height of the whole control is less than 256 pixels, the scrollbar becomes joint for the two parts.
 * 
 * <b>Note:</b> In order for the SideNavigation to stretch properly, its parent layout control should only be the sap.tnt.ToolPage.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.tnt.SideNavigation = function(sId,mSettings) {};
/**
 * Fired when an item is selected.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.item The selected item.
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.itemSelect = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.SideNavigation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.tnt.SideNavigation</code> itself.
 * 
 * Fired when an item is selected.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.tnt.SideNavigation</code> itself
 * 
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.tnt.SideNavigation(); };

/**
 * Binds aggregation {@link #getItem item} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.bindItem = function(oBindingInfo) { return new sap.tnt.SideNavigation(); };

/**
 * Destroys the fixedItem in the aggregation {@link #getFixedItem fixedItem}.
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.destroyFixedItem = function() { return new sap.tnt.SideNavigation(); };

/**
 * Destroys the footer in the aggregation {@link #getFooter footer}.
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.destroyFooter = function() { return new sap.tnt.SideNavigation(); };

/**
 * Destroys the item in the aggregation {@link #getItem item}.
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.destroyItem = function() { return new sap.tnt.SideNavigation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:itemSelect itemSelect} event of this <code>sap.tnt.SideNavigation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.tnt.SideNavigation(); };

/**
 * Creates a new subclass of class sap.tnt.SideNavigation with name <code>sClassName</code>
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
sap.tnt.SideNavigation.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.ui.core.Item} [mParameters.item] The selected item.
 * 
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.tnt.SideNavigation.prototype.fireItemSelect = function(mParameters) { return new sap.tnt.SideNavigation(); };

/**
 * Gets current value of property {@link #getExpanded expanded}.
 * 
 * Specifies if the control is expanded.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.getExpanded = function() { return false; };

/**
 * Gets content of aggregation {@link #getFixedItem fixedItem}.
 * 
 * Defines the content inside the fixed part.
 * 
 * @returns {sap.tnt.NavigationList}
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.getFixedItem = function() { return new sap.tnt.NavigationList(); };

/**
 * Gets content of aggregation {@link #getFooter footer}.
 * 
 * Defines the content inside the footer.
 * 
 * @returns {sap.tnt.NavigationList}
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.getFooter = function() { return new sap.tnt.NavigationList(); };

/**
 * Gets content of aggregation {@link #getItem item}.
 * 
 * Defines the content inside the flexible part.
 * 
 * @returns {sap.tnt.NavigationList}
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.getItem = function() { return new sap.tnt.NavigationList(); };

/**
 * Returns a metadata object for class sap.tnt.SideNavigation.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.tnt.SideNavigation.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets the aggregated {@link #getFixedItem fixedItem}.
 * @param {sap.tnt.NavigationList} oFixedItem The fixedItem to set
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.setFixedItem = function(oFixedItem) { return new sap.tnt.SideNavigation(); };

/**
 * Sets the aggregated {@link #getFooter footer}.
 * @param {sap.tnt.NavigationList} oFooter The footer to set
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.setFooter = function(oFooter) { return new sap.tnt.SideNavigation(); };

/**
 * Sets the aggregated {@link #getItem item}.
 * @param {sap.tnt.NavigationList} oItem The item to set
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.setItem = function(oItem) { return new sap.tnt.SideNavigation(); };

/**
 * Unbinds aggregation {@link #getItem item} from model data.
 * @returns {sap.tnt.SideNavigation} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.SideNavigation.prototype.unbindItem = function() { return new sap.tnt.SideNavigation(); };


// ---- sap.tnt.ToolHeader --------------------------------------------------------------------------

/**
 * Constructor for a new ToolHeader.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * 
 * The ToolHeader control is a horizontal container that is most
 * commonly used to display buttons, labels, selects and other various input controls.
 * 
 * The ToolHeader control is based on sap.m.OverflowToolbar. In addition to the OverflowToolbar,
 * the user can specify where the overflow button is placed.
 * 
 * @extends sap.m.OverflowToolbar
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.tnt.ToolHeader = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.tnt.ToolHeader with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.tnt.ToolHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.tnt.ToolHeader.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.tnt.ToolHeader.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.tnt.ToolHeaderUtilitySeparator --------------------------------------------------------------------------

/**
 * Constructor for a new ToolHeaderUtilitySeparator.
 * 
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control
 * to specify where the overflow button is placed.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.16
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.tnt.ToolHeaderUtilitySeparator = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.tnt.ToolHeaderUtilitySeparator with name <code>sClassName</code>
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
sap.tnt.ToolHeaderUtilitySeparator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.tnt.ToolHeaderUtilitySeparator.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.tnt.ToolHeaderUtilitySeparator.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.tnt.ToolPage --------------------------------------------------------------------------

/**
 * Constructor for a new ToolPage.
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
 * <li>{@link #getSideExpanded sideExpanded} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeader header} : sap.tnt.ToolHeader</li>
 * <li>{@link #getSideContent sideContent} : sap.tnt.SideNavigation</li>
 * <li>{@link #getMainContents mainContents} : sap.ui.core.Control[]</li>
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
 * The ToolPage is a layout control, used to put together the parts of a basic tools app - ToolHeader, SideNavigation and contents area.
 * @extends sap.ui.core.Control
 * @version 1.48.4
 * 
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.tnt.ToolPage = function(sId,mSettings) {};
/**
 * Adds some mainContent to the aggregation {@link #getMainContents mainContents}.
 * @param {sap.ui.core.Control}
 *            oMainContent the mainContent to add; if empty, nothing is inserted
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.addMainContent = function(oMainContent) { return new sap.tnt.ToolPage(); };

/**
 * Destroys the header in the aggregation {@link #getHeader header}.
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.destroyHeader = function() { return new sap.tnt.ToolPage(); };

/**
 * Destroys all the mainContents in the aggregation {@link #getMainContents mainContents}.
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.destroyMainContents = function() { return new sap.tnt.ToolPage(); };

/**
 * Destroys the sideContent in the aggregation {@link #getSideContent sideContent}.
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.destroySideContent = function() { return new sap.tnt.ToolPage(); };

/**
 * Creates a new subclass of class sap.tnt.ToolPage with name <code>sClassName</code>
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
sap.tnt.ToolPage.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getHeader header}.
 * 
 * The control to appear in the header area.
 * 
 * @returns {sap.tnt.ToolHeader}
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.getHeader = function() { return new sap.tnt.ToolHeader(); };

/**
 * Gets content of aggregation {@link #getMainContents mainContents}.
 * 
 * The content section.
 * 
 * @returns {sap.ui.core.Control[]}
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.getMainContents = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.tnt.ToolPage.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.tnt.ToolPage.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getSideContent sideContent}.
 * 
 * The side menu of the layout.
 * 
 * @returns {sap.tnt.SideNavigation}
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.getSideContent = function() { return new sap.tnt.SideNavigation(); };

/**
 * Gets current value of property {@link #getSideExpanded sideExpanded}.
 * 
 * Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>sideExpanded</code>
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.getSideExpanded = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMainContents mainContents}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMainContent The mainContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.indexOfMainContent = function(oMainContent) { return 0; };

/**
 * Inserts a mainContent into the aggregation {@link #getMainContents mainContents}.
 * 
 * @param {sap.ui.core.Control}
 *            oMainContent the mainContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the mainContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the mainContent is inserted at
 *              the last position
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.insertMainContent = function(oMainContent,iIndex) { return new sap.tnt.ToolPage(); };

/**
 * Removes all the controls from the aggregation {@link #getMainContents mainContents}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.removeAllMainContents = function() { return new Array(); };

/**
 * Removes a mainContent from the aggregation {@link #getMainContents mainContents}.
 * 
 * @param {int | string | sap.ui.core.Control} vMainContent The mainContent to remove or its index or id
 * @returns {sap.ui.core.Control} The removed mainContent or <code>null</code>
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.removeMainContent = function(vMainContent) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated {@link #getHeader header}.
 * @param {sap.tnt.ToolHeader} oHeader The header to set
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.setHeader = function(oHeader) { return new sap.tnt.ToolPage(); };

/**
 * Sets the aggregated {@link #getSideContent sideContent}.
 * @param {sap.tnt.SideNavigation} oSideContent The sideContent to set
 * @returns {sap.tnt.ToolPage} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.setSideContent = function(oSideContent) { return new sap.tnt.ToolPage(); };

/**
 * Sets the expand/collapse state of the SideContent.
 * @param {boolean} isSideExpanded defines whether the SideNavigation is expanded.
 * @returns {sap.tnt.ToolPage} Pointer to the control instance for chaining
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.setSideExpanded = function(isSideExpanded) { return new sap.tnt.ToolPage(); };

/**
 * Toggles the expand/collapse state of the SideContent.
 * @returns {sap.tnt.ToolPage} Pointer to the control instance for chaining.
 * @public
 * 
 */
sap.tnt.ToolPage.prototype.toggleSideContentMode = function() { return new sap.tnt.ToolPage(); };

// ---- static fields of namespaces ---------------------------------------------------------------------
