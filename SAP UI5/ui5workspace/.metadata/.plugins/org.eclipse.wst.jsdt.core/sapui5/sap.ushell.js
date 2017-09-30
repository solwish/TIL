
// ---- sap.ushell --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ushell.toString = function() { return ""; };
/**
 * Initializes the Unified Shell container for the given platform. This method must be called
 * exactly once in the very beginning by platform-specific code in order to bootstrap the
 * container. As soon as the returned promise has been resolved, the container will be available
 * as a singleton object <code>sap.ushell.Container</code>.
 * <p>
 * For convenience, platform-specific bootstrap code is available and can be easily included
 * (<b>before</b> the SAPUI5 bootstrap) by a corporate shell as follows:
 * <pre>
 * &lt;script src="/sap/public/bc/ui5_ui5/resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
 * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
 * </pre>
 * This bootstrap code will automatically defer the initialization of SAPUI5 until the
 * container is available. This is the preferred way of bootstrapping the Unified Shell.
 * <p>
 * Note: For SAPUI5 application projects the recommended way is to add a dependency to the
 * "sap.ushell_abap" library (<code>&lt;groupId&gt;com.sap.ushell&lt;/groupId&gt;
 * &lt;artifactId&gt;ushell_abap&lt;/artifactId&gt;</code>) and load the bootstrap code via the
 * application's resources folder:
 * <pre>
 * &lt;script src=".../resources/sap/ushell_abap/bootstrap/abap.js"&gt;&lt;/script&gt;
 * &lt;script id="sap-ui-bootstrap" src=".../sap-ui-core.js"&gt;&lt;/script&gt;
 * </pre>
 * <p>
 * Since 1.15.0 you can provide the function
 * <code>window['sap.ushell.bootstrap.callback']</code> for calling back from this method
 * asynchronously. SAPUI5's bootstrap is ongoing then. The same restrictions apply
 * as for the function <code>window['sap-ui-config']['xx-bootTask']</code>) when the Unified
 * Shell container has not yet finished its bootstrap. You cannot delay the bootstrap of SAPUI5
 * or the Unified Shell container; any errors are ignored. This callback is useful for
 * sending asynchronous back-end requests at the earliest opportunity without delaying
 * the core bootstrap of SAPUI5 and the Unified Shell container.
 * 
 * @param {string} sPlatform
 *     the target platform, such as "abap" or "local" (Note: there is no fixed enumeration of
 *     possible platforms)
 * @param {map<string, string>} [mAdapterPackagesByPlatform={}]
 *     the map with platform specific package names for the service adapters.
 *     You only need to specify these package names, if they differ from the standard name
 *     <code>"sap.ushell.adapters." + sPlatform</code>.
 * @returns {jQuery.Promise}
 *     a promise that is resolved once the container is available
 * 
 * @since 1.15.0
 * @see sap.ushell.Container
 * @public
 * 
 * @memberof sap.ushell
 */
sap.ushell.bootstrap = function(sPlatform,mAdapterPackagesByPlatform) { return new jQuery.Promise(); };


// ---- sap.ushell.adapters --------------------------------------------------------------------------


// ---- sap.ushell.components.factsheet.controls.PictureTile --------------------------------------------------------------------------

/**
 * Constructor for a new components/factsheet/controls/PictureTile.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 32px)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 32px)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTileContent tileContent} : (sap.ui.core.ID | sap.ushell.components.factsheet.controls.PictureViewerItem)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:pictureDelete pictureDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.CustomTile#constructor sap.m.CustomTile}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Tile control embedding an image and allowing custom sizing
 * @extends sap.m.CustomTile
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * 
 * PictureTile is used in PictureViewer control and is not meant to be consumed outside of PictureViewer usage.
 * PictureViewer was replacing the sap.m.Carousel as it wasn't supporting some versions of MS Internet Explorer.
 * Now, the sap.m.Carousel is fully functional, please use sap.m.Carousel instead. This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile = function(sId,mSettings) {};
/**
 * Fired when the user deletes a picture
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.pictureDelete = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:pictureDelete pictureDelete} event of this <code>sap.ushell.components.factsheet.controls.PictureTile</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ushell.components.factsheet.controls.PictureTile</code> itself.
 * 
 * Fired when the user deletes a picture
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.components.factsheet.controls.PictureTile</code> itself
 * 
 * @returns {sap.ushell.components.factsheet.controls.PictureTile} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.attachPictureDelete = function(oData,fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:pictureDelete pictureDelete} event of this <code>sap.ushell.components.factsheet.controls.PictureTile</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ushell.components.factsheet.controls.PictureTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.detachPictureDelete = function(fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * Creates a new subclass of class sap.ushell.components.factsheet.controls.PictureTile with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.CustomTile.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:pictureDelete pictureDelete} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ushell.components.factsheet.controls.PictureTile} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.firePictureDelete = function(mParameters) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * height (in pixels) of the picture viewer control.
 * 
 * Default value is <code>32px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ushell.components.factsheet.controls.PictureTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * ID of the element which is the current target of the association {@link #getTileContent tileContent}, or <code>null</code>.
 * 
 * @returns {sap.ui.core.ID}
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.getTileContent = function() { return new sap.ui.core.ID(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * width (in pixels) of the picture viewer control.
 * 
 * Default value is <code>32px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * height (in pixels) of the picture viewer control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>32px</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ushell.components.factsheet.controls.PictureTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.setHeight = function(sHeight) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * Reference to one PictureViewerItem coming from the PictureViewer.
 * 
 * @override
 * @param {string | sap.ushell.components.factsheet.controls.PictureViewerItem} vTileContent
 *    Id of an element which becomes the new target of this <code>tileContent</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ushell.components.factsheet.controls.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.setTileContent = function(vTileContent) { return new sap.ushell.components.factsheet.controls.PictureTile(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * width (in pixels) of the picture viewer control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>32px</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ushell.components.factsheet.controls.PictureTile} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureTile.prototype.setWidth = function(sWidth) { return new sap.ushell.components.factsheet.controls.PictureTile(); };


// ---- sap.ushell.components.factsheet.controls.PictureViewer --------------------------------------------------------------------------

/**
 * Constructor for a new components/factsheet/controls/PictureViewer.
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
 * <li>{@link #getTileScaling tileScaling} : float (default: 0.95)</li>
 * <li>{@link #getRemovable removable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ushell.components.factsheet.controls.PictureViewerItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:pictureDeleted pictureDeleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.TileContainer#constructor sap.m.TileContainer}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Picture viewer control relying on the TileContainer control
 * @extends sap.m.TileContainer
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * PictureViewer was replacing the Carousel as it wasn't supporting some versions of MS Internet Explorer.
 * Now, the sap.m.Carousel is fully functional, please use sap.m.Carousel instead.
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer = function(sId,mSettings) {};
/**
 * Thrown when user delete an image
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.pictureDeleted = function(oControlEvent) {  };

/**
 * Adds some item <code>oItem</code>
 * to the aggregation named <code>items</code>.
 * 
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 * @deprecated Use aggregation "tiles"
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.addItem = function(oItem) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:pictureDeleted pictureDeleted} event of this <code>sap.ushell.components.factsheet.controls.PictureViewer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ushell.components.factsheet.controls.PictureViewer</code> itself.
 * 
 * Thrown when user delete an image
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.components.factsheet.controls.PictureViewer</code> itself
 * 
 * @returns {sap.ushell.components.factsheet.controls.PictureViewer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.attachPictureDeleted = function(oData,fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Removes the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 * 
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *          iIndex the index of the picture to delete; if empty, the current picture is deleted
 * @param {int}
 *             iIndex the <code>0</code>-based index of the picture collection to delete;
 *             if <code>iIndex</code> is out of range or empty, the current image will be deleted.
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.deletePicture = function(iIndex,iIndex) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.ushell.components.factsheet.controls.PictureViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.destroyItems = function() { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:pictureDeleted pictureDeleted} event of this <code>sap.ushell.components.factsheet.controls.PictureViewer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ushell.components.factsheet.controls.PictureViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.detachPictureDeleted = function(fnFunction,oListener) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Creates a new subclass of class sap.ushell.components.factsheet.controls.PictureViewer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.TileContainer.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:pictureDeleted pictureDeleted} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ushell.components.factsheet.controls.PictureViewer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.firePictureDeleted = function(mParameters) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Gets the current picture index.
 * 
 * @override
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} the current picture index
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getCurrentPictureIndex = function() { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * Aggregation of PictureViewerItem that contains either a picture URI or the actual Image control.
 * 
 * @returns {sap.ushell.components.factsheet.controls.PictureViewerItem[]}
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ushell.components.factsheet.controls.PictureViewer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getRemovable removable}.
 * 
 * Defines whether or not you can remove a picture
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>removable</code>
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getRemovable = function() { return false; };

/**
 * Gets current value of property {@link #getTileScaling tileScaling}.
 * 
 * Percentage of the space occupied by the image in the picture viewer control. Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 * 
 * Default value is <code>0.95</code>.
 * @returns {float} Value of property <code>tileScaling</code>
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.getTileScaling = function() { return 0.0; };

/**
 * Checks for the provided <code>sap.ushell.components.factsheet.controls.PictureViewerItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * When adding a new item to the aggregation, a sap.ca.ui.PictureTile is actually created
 * with its own ID and added to the internal TileContainer.
 * 
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the item is inserted at
 *             the last position
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 * @deprecated Use aggregation "tiles"
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.insertItem = function(oItem,iIndex) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ushell.components.factsheet.controls.PictureViewerItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.ushell.components.factsheet.controls.PictureViewerItem} vItem The item to remove or its index or id
 * @returns {sap.ushell.components.factsheet.controls.PictureViewerItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.removeItem = function(vItem) { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };

/**
 * Select the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 * 
 * @override
 * @param {sap.ushell.components.factsheet.controls.PictureViewerItem}
 *          iIndex the index of the picture to select; if empty, the first picture is selected
 * @param {int}
 *             iIndex the <code>0</code>-based index of the aggregation to select; for
 *             a negative value of <code>iIndex</code>, the picture at position 0 is selected; for a value
 *             greater than the current size of the aggregation, the selected picture at the last position is selected
 * @return {sap.ushell.components.factsheet.controls.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.selectPicture = function(iIndex,iIndex) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Sets a new value for property {@link #getRemovable removable}.
 * 
 * Defines whether or not you can remove a picture
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bRemovable New value for property <code>removable</code>
 * @returns {sap.ushell.components.factsheet.controls.PictureViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.setRemovable = function(bRemovable) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };

/**
 * Sets a new value for property {@link #getTileScaling tileScaling}.
 * 
 * Percentage of the space occupied by the image in the picture viewer control. Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0.95</code>.
 * @param {float} fTileScaling New value for property <code>tileScaling</code>
 * @returns {sap.ushell.components.factsheet.controls.PictureViewer} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewer.prototype.setTileScaling = function(fTileScaling) { return new sap.ushell.components.factsheet.controls.PictureViewer(); };


// ---- sap.ushell.components.factsheet.controls.PictureViewerItem --------------------------------------------------------------------------

/**
 * Constructor for a new components/factsheet/controls/PictureViewerItem.
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
 * <li>{@link #getSrc src} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getImage image} : sap.m.Image</li>
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
 * Picture viewer control relying on the TileContainer control
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * 
 * PictureViewerItem is used in PictureViewer control and is not meant to be consumed outside of PictureViewer usage.
 * PictureViewer was replacing the Carousel as it wasn't supporting some versions of MS Internet Explorer. Now, the
 * sap.m.Carousel is fully functional, please use sap.m.Carousel instead. This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem = function(sId,mSettings) {};
/**
 * Destroys the image in the aggregation {@link #getImage image}.
 * @returns {sap.ushell.components.factsheet.controls.PictureViewerItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.destroyImage = function() { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };

/**
 * Creates a new subclass of class sap.ushell.components.factsheet.controls.PictureViewerItem with name <code>sClassName</code>
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
sap.ushell.components.factsheet.controls.PictureViewerItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation {@link #getImage image}.
 * 
 * Pass in an existing Image control to be used inside the PictureViewer
 * 
 * @returns {sap.m.Image}
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.getImage = function() { return new sap.m.Image(); };

/**
 * Returns a metadata object for class sap.ushell.components.factsheet.controls.PictureViewerItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSrc src}.
 * 
 * Image source url.
 * 
 * @returns {string} Value of property <code>src</code>
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.getSrc = function() { return ""; };

/**
 * Sets the aggregated {@link #getImage image}.
 * @param {sap.m.Image} oImage The image to set
 * @returns {sap.ushell.components.factsheet.controls.PictureViewerItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.setImage = function(oImage) { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };

/**
 * Setter for property <code>src</code>.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ushell.components.factsheet.controls.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ushell.components.factsheet.controls.PictureViewerItem.prototype.setSrc = function(sSrc) { return new sap.ushell.components.factsheet.controls.PictureViewerItem(); };


// ---- sap.ushell.Container.DirtyState --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ushell.Container.DirtyState.toString = function() { return ""; };

// ---- sap.ushell.renderers --------------------------------------------------------------------------


// ---- sap.ushell.renderers.fiori2.Renderer --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.createRenderer("fiori2")</code>.
 * 
 * 
 * @class The SAPUI5 component of SAP Fiori Launchpad renderer for the Unified Shell.
 * 
 * @extends sap.ui.core.UIComponent
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer = function() {};
/**
 * The launchpad states that can be passed as a parameter.</br>
 * <b>Values:<b>
 * App - launchpad state when running a Fiori app</br>
 * Home - launchpad state when the home page is open</br>
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.LaunchpadState = undefined

/**
 * Creates an action button in the options bar of the Me Area in the SAP Fiori launchpad, in the given launchpad states (LaunchpadState). </br>
 *  <b>Example:</b>
 *   <pre> sap.ushell.Container.getRenderer("fiori2").addActionButton("sap.m.Button", {id: "testBtn2", text: "test button"}, true, true);</pre>
 * 
 * This function is marked for deprecation as of version 1.48.<br>
 * It will continue to work as expected as long as one of the following conditions apply:<br>
 * 1. The control instance is already created and its ID is included in the input parameter oControlProperties<br>
 * 2. The control type resource is already loaded<br>
 * 3. Synchronous XHR requests are supported by the browser<br>
 * 
 * @param {string} controlType
 *   The (class) name of the control type to create.
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.
 * 
 * @param {boolean} bIsVisible
 *  Specify whether to display the control. If true, the control is displayed (calls the showActionButton method)
 *  according to the bCurrentState and aStates parameters. If false, the control is created but not displayed (you can use showActionButton to display the control when needed).
 * 
 * @param {boolean} bCurrentState
 *   If true, add the current control only to the current rendered shell state.
 *   Once the user navigates to another app or back to the home page, this control will be removed.
 * 
 * @param {String[]} aStates
 *   List of the launchpad states (sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which to add the control. Valid only if bCurrentState is set to false.
 * 
 *  @see sap.ushell.renderers.fiori2.renderer.LaunchpadState.
 *    If no launchpad state is provided, the content is added in all states.
 * 
 * @returns {object} oItem - the created control
 * 
 * @since 1.30
 * 
 * @deprecated since version 1.48 (as a result of XMLHttpRequest spec prohibiting the sending of synchronous requests). 
 * Use <code>addUserAction<code> instead
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addActionButton = function(controlType,oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Adds the given sap.ui.core.Control to the EndUserFeedback dialog.</br>
 * The EndUserFeedback dialog is opened via the user actions menu in the Fiori Launchpad shell header.
 * 
 * @param {object} oCustomUIContent
 *   The control to be added to the EndUserFeedback dialog.
 * 
 * @param {boolean} bShowCustomUIContent
 *   Specify whether to display the control.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addEndUserFeedbackCustomUI = function(oCustomUIContent,bShowCustomUIContent) {  };

/**
 * Creates a FloatingActionButton in Fiori launchpad, in the given launchpad states.</br>
 * The FloatingActionButton is rendered in the bottom right corner of the shell.</br>
 *   <b>Example:</b>
 *   <pre> sap.ushell.Container.getRenderer("fiori2").addFloatingActionButton("sap.ushell.ui.shell.ShellFloatingAction", {id: "testBtn"}, true, true);</pre>
 * 
 * This function is marked for deprecation as of version 1.48.<br>
 * It will continue to work as expected as long as one of the following conditions apply:<br>
 * 1. The control instance is already created and its ID is included in the input parameter oControlProperties<br>
 * 2. The control type resource is already loaded<br>
 * 3. Synchronous XHR requests are supported by the browser<br>
 * 
 * @param {string} controlType
 *   The (class) name of the control type to create.
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.
 * 
 * @param {boolean} bIsVisible
 *   Specify whether to display the control.
 * 
 * @param {boolean} bCurrentState
 *   If true, add the current control only to the current rendered shell state.
 *   Once the user navigates to another app or back to the Home page, this control will be removed.
 * 
 * @param {String[]} aStates
 *   (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 * @returns {object} oItem - the created control
 * @since 1.30
 * 
 * @deprecated since version 1.48 (as a result of XMLHttpRequest spec prohibiting the sending of synchronous requests). 
 * Use <code>addFloatingButton<code> instead
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addFloatingActionButton = function(controlType,oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Creates a FloatingActionButton in Fiori launchpad, in the given launchpad states.</br>
 * The FloatingActionButton is rendered in the bottom right corner of the shell.</br>
 *   <b>Example:</b>
 *   <pre> sap.ushell.Container.getRenderer("fiori2").addFloatingActionButton("sap.ushell.ui.shell.ShellFloatingAction", {id: "testBtn"}, true, true);</pre>
 * 
 * @param {object} oParameters<br>
 *  Contains the required parameters for creating and showing the new control object:<br>
 *  Properties:<br>
 *   - {string} controlType<br>
 *       The (class) name of the control type to create.<br>
 *   - {object} oControlProperties<br>
 *       The properties that will be passed to the created control.<br>
 *   - {boolean} bIsVisible<br>
 *       Specify whether to display the control.<br>
 *   - {boolean} bCurrentState<br>
 *       If true, add the current control only to the current rendered shell state.<br>
 *       Once the user navigates to another app or back to the Home page, this control will be removed.<br>
 *   - {String[]} aStates<br>
 *       (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.<br>
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 * @returns {object} jQuery.deferred.promise object that when resolved, returns the newly created control
 * 
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addFloatingButton = function(oParameters<br>) { return new Object(); };

/**
 * Creates and displays one or more HeaderItem controls in Fiori launchpad, in the given launchpad states.</br>
 * The HeaderItem will be displayed in the right side of the Fiori Launchpad shell header.</br>
 *   <b>Example:</b>
 *   <pre> sap.ushell.Container.getRenderer("fiori2").addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem", {id: "testBtn"}, true, true);</pre>
 * 
 * @param {string} controlType
 *   The (class) name of the control type to create. Currently only "sap.ushell.ui.shell.ShellHeadItem" control type is supported.
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.
 * 
 * @param {boolean} bIsVisible
 *   Specify whether to display the control.
 * 
 * @param {boolean} bCurrentState
 *   If true, add the current control only to the current rendered shell state.
 *   Once the user navigates to another app or back to the Home page, this control will be removed.
 * 
 * @param {String[]} aStates
 *   (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 * @returns {object} oItem - the created control
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addHeaderEndItem = function(controlType,oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Creates and displays an item in the header of Fiori launchpad, in the given launchpad states.<br>
 * The new header item will be displayed on the left-hand side of the Fiori Launchpad shell header, according to the given display parameters.<br>
 * The new header item will be added to the right of any existing header items. The header can contain a maximum of three header items.<br><br>
 * <b>Example:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 * oRenderer.addHeaderItem("sap.ushell.ui.shell.ShellHeadItem", {id: "testBtn"}, true, true);
 * </pre>
 * 
 * @param {string} [controlType]
 *   The (class) name of the control type to create.
 *   For example: <code>"sap.m.Button"</code><br>
 *   <b>Deprecated</b>: Since version 1.38.
 *   This property is no longer supported.
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.
 *   For example: <code>{id: "testButton"}</code><br>
 * 
 * @param {boolean} bIsVisible
 *   Specifies whether the header item control is displayed after being created.<br>
 *   If <code>true</code> then the control is displayed according to parameters bCurrentState and aStates.<br>
 *   If <code>false</code> then the control is created but not displayed.<br>
 * 
 * @param {boolean} bCurrentState
 *   If <code>true</code> then the new created control is added to the current rendered shell state.<br>
 *   When the user navigates to a different state including a different application then the control will be removed.<br>
 *   If <code>false</code> then add the control to the LaunchPadState itself.<br>
 * 
 * @param {String[]} aStates
 *  (Valid only if bCurrentState is <code>false</code>)<br>
 *  A list of shell states (i.e. sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which the control is added.<br>
 *  If no launchpad state is provided the control is added in all states.
 *  @see LaunchpadState.<br>
 * 
 * @returns {object} The created control
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addHeaderItem = function(controlType,oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Creates the Left Pane content in Fiori launchpad, in the given launchpad states.</br>
 *   <b>Example:</b>
 *   <pre> sap.ushell.Container.getRenderer("fiori2").addLeftPaneContent("sap.m.Button", {id: "testBtn", text: "Test Button"}, true, true);</pre>
 * 
 * This function is marked for deprecation as of version 1.48.<br>
 * It will continue to work as expected as long as one of the following conditions apply:<br>
 * 1. The control instance is already created and its ID is included in the input parameter oControlProperties<br>
 * 2. The control type resource is already loaded<br>
 * 3. Synchronous XHR requests are supported by the browser<br>
 * 
 * @param {string} controlType
 *   The (class) name of the control type to create.
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.
 * 
 * @param {boolean} bIsVisible
 *   Specify whether to display the control.
 * 
 * @param {boolean} bCurrentState
 *   If true, add the current control only to the current rendered shell state.
 *   Once the user navigates to another app or back to the Home page, this control will be removed.
 * 
 * @param {String[]} aStates
 *   (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.
 * 
 * @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 * @returns {object} oItem - the created control
 * 
 * @since 1.30
 * 
 * @deprecated since version 1.48 (as a result of XMLHttpRequest spec prohibiting the sending of synchronous requests). 
 * Use <code>addSidePaneContent<code> instead
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addLeftPaneContent = function(controlType,oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Creates and displays a sub header control in Fiori launchpad, in the given launchpad states.<br>
 * The new control is displayed in FLP UI according to the given display parameters.<br>
 * If a sub header already exists, the new created one will replace the existing one.<br><br>
 * <b>Example:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2"),
 *     oAddSubHeaderProperties = {
 *         controlType : "sap.m.Bar",
 *         oControlProperties : {
 *             id: "testBar",
 *             contentLeft: [new sap.m.Button({
 *                 text: "Test SubHeader Button",
 *                 press: function () {
 *                     sap.m.MessageToast.show("Pressed");
 *                 }
 *             })
 *         },
 *         true,
 *         true
 *     };
 * 
 * oRenderer.addShellSubHeader(oAddSubHeaderProperties);
 * </pre>
 * 
 * @param {object} oParameters<br>
 *  Contains the required parameters for creating and showing the new control object:<br>
 *  Properties:<br>
 *   - {string} controlType<br>
 *       The (class) name of the control type to create.<br>
 *   - {object} oControlProperties<br>
 *       The properties that will be passed to the created control.<br>
 *   - {boolean} bIsVisible<br>
 *       Specify whether to display the control.<br>
 *   - {boolean} bCurrentState<br>
 *       If true, add the current control only to the current rendered shell state.<br>
 *     Once the user navigates to another app or back to the Home page, this control will be removed.<br>
 *   - {String[]} aStates<br>
 *       (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.<br>
 * 
 * @returns {object} jQuery.deferred.promise object that when resolved, returns the newly created control
 * 
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addShellSubHeader = function(oParameters<br>) { return new Object(); };

/**
 * Creates the Left Pane content in Fiori launchpad, in the given launchpad states.</br>
 *   <b>Example:</b>
 * 
 *  <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2"),
 *     oLeftPaneContentProperties = {
 *         controlType : "sap.m.Button",
 *         oControlProperties : {
 *             id: "testBtn",
 *             text: "Test Button"
 *         },
 *         true,
 *         true
 *     };
 * 
 * oRenderer.addSidePaneContent(oLeftPaneContentProperties);
 *  </pre>
 * 
 * @param {object} oParameters<br>
 *  Contains the parameters that are required for creating and showing the new control object:<br>
 *  Properties:<br>
 *   - {string} controlType<br>
 *       The (class) name of the control type to create.<br>
 *   - {object} oControlProperties<br>
 *       The properties that will be passed to the created control.<br>
 *   - {boolean} bIsVisible<br>
 *       Specify whether to display the control.<br>
 *   - {boolean} bCurrentState<br>
 *       If true, add the current control only to the current rendered shell state.<br>
 *       Once the user navigates to another app or back to the Home page, this control will be removed.<br>
 *   - {String[]} aStates<br>
 *       (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.<br>
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 * @returns {object} jQuery.deferred.promise object that when resolved, returns the newly created control
 * 
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addSidePaneContent = function(oParameters<br>) { return new Object(); };

/**
 * Creates and displays a sub header control in Fiori launchpad, in the given launchpad states.<br>
 * The new control is displayed in FLP UI according to the given display parameters.<br>
 * If a sub header already exists, the new created one will replace the existing one.<br><br>
 * <b>Example:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 * oRenderer.addSubHeader("sap.m.Bar", {id: "testBar", contentLeft: [new sap.m.Button({text: "Test SubHeader Button",
 *      press: function () {
 *      sap.m.MessageToast.show("Pressed");
 *      }
 *  })
 * ]}, true, true);
 * </pre>
 * 
 * This function is marked for deprecation as of version 1.48.<br>
 * It will continue to work as expected as long as one of the following conditions apply:<br>
 * 1. The control instance is already created and its ID is included in the input parameter oControlProperties<br>
 * 2. The control type resource is already loaded<br>
 * 3. Synchronous XHR requests are supported by the browser<br>
 * 
 * @param {string} controlType
 *   The (class) name of the control type to create.<br>
 *   For example: <code>"sap.m.Bar"</code><br>
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.<br>
 *   For example: <code>{id: "testBar"}</code><br>
 * 
 * @param {boolean} bIsVisible
 *   Specifies whether the sub header control is displayed after being created.<br>
 *   If <code>true</code> then the control is displayed according to parameters bCurrentState and aStates,<br>
 *   if <code>false</code> then the control is created but not displayed.<br>
 * 
 * @param {boolean} bCurrentState
 *   If <code>true</code> then the new created control is added to the current rendered shell state.<br>
 *   When the user navigates to another application (including the Home page) then the control will be removed.<br>
 *   If <code>false</code> then add the control to the LaunchPadState itself.<br>
 * 
 * @param {String[]} aStates
 *  (Valid only if bCurrentState is <code>false</code>)<br>
 *  A list of shell states (i.e. sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which the control is added.<br>
 *  If no launchpad state is provided the control is added in all states.
 *  @see LaunchpadState.<br>
 * 
 * @returns {object} The created control
 * 
 * @since 1.30
 * 
 * @deprecated since version 1.48 (as a result of XMLHttpRequest spec prohibiting the sending of synchronous requests). 
 * Use <code>addShellSubHeader<code> instead
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addSubHeader = function(controlType,oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Creates a ToolAreaItem  in Fiori Launchpad and adds it to the Tool Area, in the given launchpad states.</br>
 * If no items are added to the Tool Area, it will not be displayed.</br>
 * Once an item is added, the Tool Area is rendered on the left side on the Fiori Launchpad shell.</br>
 * 
 *   <b>Example:</b>
 *   <pre>sap.ushell.Container.getRenderer("fiori2").addToolAreaItem({
 *              id: "testButton",
 *              icon: "sap-icon://documents",
 *              expandable: true,
 *              press: function (evt) {
 *                 window.alert("Press" );
 *                },
 *             expand: function (evt) {
 *                 // This function will be called on the press event of the "expand" button. The result of "expand" event in the UI must be determined by the developer
 *                 window.alert("Expand" );
 *                }
 *           }, true, false, ["home"]);
 * </pre>
 * 
 * @param {object} oControlProperties
 *   The properties object that will be passed to the constructor of sap.ushell.ui.shell.ToolAreaItem control.
 *   @see sap.ushell.ui.shell.ToolAreaItem
 * 
 * @param {boolean} bIsVisible
 *   Specify whether to display the control.
 * 
 * @param {boolean} bCurrentState
 *   If true, add the current control only to the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   List of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.Only valid if bCurrentState is set to false.
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 *  @returns {object} oItem - the created control
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addToolAreaItem = function(oControlProperties,bIsVisible,bCurrentState,aStates) { return new Object(); };

/**
 * Creates an Action Button in Fiori launchpad, in the given launchpad states. </br>
 * The button will be displayed in the user actions menu, that is opened from the user button in the shell header.</br>
 *  <b>Example:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2"),
 *     oAddActionButtonProperties = {
 *         controlType : "sap.m.Bar",
 *         oControlProperties : {
 *             id: "testBar",
 *             contentLeft: [new sap.m.Button({
 *                 text: "Test SubHeader Button",
 *                 press: function () {
 *                     sap.m.MessageToast.show("Pressed");
 *                 }
 *             })
 *         },
 *         true,
 *         true
 *     };
 * 
 * oRenderer.addUserAction(oAddSubHeaderProperties);
 * </pre>
 * 
 * @param {object} oParameters<br>
 *  Contains the required parameters for creating and showing the new control object:<br>
 *  Properties:<br>
 *   - {string} controlType<br>
 *       The (class) name of the control type to create.<br>
 *   - {object} oControlProperties<br>
 *       The properties that will be passed to the created control.<br>
 *   - {boolean} bIsVisible<br>
 *       Specify whether to display the control.<br>
 *   - {boolean} bCurrentState<br>
 *       If true, add the current control only to the current rendered shell state.<br>
 *       Once the user navigates to another app or back to the Home page, this control will be removed.<br>
 *   - {String[]} aStates<br>
 *       (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to add the control.<br>
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is added in all states.
 * 
 * @returns {object} jQuery.deferred.promise object that when resolved, returns the newly created control
 * 
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addUserAction = function(oParameters<br>) { return new Object(); };

/**
 * Adds an entry to the User Preferences dialog box including the UI control that appears when the user clicks the new entry,<br>
 *  and handling of User Preferences actions such as SAVE and CANCEL.<br><br>
 * 
 * <b>Example:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 * var oEntry = {
 *   title: "title",
 *   value: function() {
 *       return jQuery.Deferred().resolve("entryTitleToBeDisplayed");
 *   },
 *   content: function() {
 *       return jQuery.Deferred().resolve(new sap.m.Button("userPrefEntryButton", {text: "Button"}));
 *   },
 *   onSave: function() {
 *       return jQuery.Deferred().resolve();
 *   }
 *   };
 * oRenderer.addUserPreferencesEntry(oEntry);   
 * </pre>
 * 
 * @param {object} entryObject
 *  The data of the new added User Preference entry<br>
 *  Including:<br>
 *  <ul>
 *  <li>{String} entryHelpID (Optional) - The ID of the object.<br>
 *  <li>{String} title - The title of the entry to be presented in the list in the User Preferences dialog box.<br>
 *  We recommend using a string from the translation bundle.<br>
 *  <li>{String}/{Function} value - A string to be presented as the value of the entry<br>
 *   OR a function to be called which returns a {jQuery.Deferred.promise} object.<br>
 *  <li>{Function} content - A function to be called that returns a {jQuery.Deferred.promise} object<br>
 *  which consists of a {sap.ui.core.Control} to be displayed in a follow-on dialog box. A SAPUI5 view instance can also be returned.
 *  The functions is called on each time the user opens the User Preferences dialog box.
 *  <li>{Function} onSave - A function to be called which returns a {jQuery.Deferred.promise} object when the user clicks Save in the User Preferences dialog box.<br>
 *   If an error occurs, pass the error message via the {jQuery.Deferred.promise} object. Errors are displayed in the log.<br>
 *  <li>{Function} onCancel - A function to be called that closes the User Preferences dialog box without saving any changes. <br>
 *  </ul>
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.addUserPreferencesEntry = function(entryObject) {  };

/**
 * Creates a new subclass of class sap.ushell.renderers.fiori2.Renderer with name <code>sClassName</code>
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
sap.ushell.renderers.fiori2.Renderer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * This method returns the current state of the Viewport Container control.
 * 
 * 
 * @since 1.37
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.getCurrentViewportState = function() {  };

/**
 * Returns a metadata object for class sap.ushell.renderers.fiori2.Renderer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.renderers.fiori2.Renderer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Hides an action button from the options bar of the Me Area in the SAP Fiori launchpad, in the given launchpad states (LaunchpadState). The removed button will not be destroyed.<br><br>
 * This API is meant to be used for custom elements in the SAP Fiori launchpad. We do not recommend using it on standard launchpad elements, as this may interfere with the standard launchpad functionality.
 * 
 * @param {String[]} aIds
 *   IDs of the button controls that should hidden.
 * 
 * @param {boolean} bCurrentState
 *   If true, removes the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   A list of the launchpad states in which to hide the control. Valid only if bCurrentState is set to false.
 * 
 *  @see sap.ushell.renderers.fiori2.renderer.LaunchpadState.
 * 
 *  If no launchpad state is provided, the content is hidden in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.hideActionButton = function(aIds,bCurrentState,aStates) {  };

/**
 * Hide the given sap.ushell.ui.shell.ShellFloatingAction from Fiori Launchpad, in the given launchpad states.
 * The removed control will not be destroyed.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * @param {String[]} aIds
 *   the Ids of the sap.ushell.ui.shell.ShellFloatingAction to remove.
 * 
 * @param {boolean} bCurrentState
 *   if true, remove the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to remove the control.(Only valid if bCurrentState is set to false)
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is removed in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.hideFloatingActionButton = function(aIds,bCurrentState,aStates) {  };

/**
 * Hide the given sap.ushell.ui.shell.ShellHeadItem from Fiori Launchpad, in the given launchpad states.
 * The removed control will not be destroyed.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * @param {String[]} aIds
 *   the Ids of the sap.ushell.ui.shell.ShellHeadItem to remove.
 * 
 * @param {boolean} bCurrentState
 *   if true, remove the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to remove the control.(Only valid if bCurrentState is set to false)
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is removed in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.hideHeaderEndItem = function(aIds,bCurrentState,aStates) {  };

/**
 * Hide the given sap.ushell.ui.shell.ShellHeadItem from Fiori Launchpad, in the given launchpad states.
 * The removed control will not be destroyed.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * @param {String[]} aIds
 *   the Ids of the sap.ushell.ui.shell.ShellHeadItem to remove.
 * 
 * @param {boolean} bCurrentState
 *   if true, remove the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to remove the control.(Only valid if bCurrentState is set to false)
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is removed in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.hideHeaderItem = function(aIds,bCurrentState,aStates) {  };

/**
 * Hide the given control from Fiori Launchpad, in the given launchpad states.
 * The removed control will not be destroyed.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * @param {String[]} aIds
 *   the Ids of the controls to remove.
 * 
 * @param {boolean} bCurrentState
 *   if true, remove the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to remove the control.(Only valid if bCurrentState is set to false)
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is removed in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.hideLeftPaneContent = function(aIds,bCurrentState,aStates) {  };

/**
 * Hide the given control from the Fiori Launchpad sub header, in the given launchpad states.
 * The removed control will not be destroyed.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * @param {String[]} aIds
 *   the Ids of the controls to remove.
 * 
 * @param {boolean} bCurrentState
 *   if true, remove the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to remove the control.(Only valid if bCurrentState is set to false)
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is removed in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.hideSubHeader = function(aIds,bCurrentState,aStates) {  };

/**
 * If exists, this method will remove the footer from the Fiori Launchpad.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.removeFooter = function() {  };

/**
 * Remove the given Tool Area Item from Fiori Launchpad, in the given launchpad states.<br><br>
 * This API is meant to be used for implementing custom elements in the SAP Fiori launchpad. We do not recommend using it on a standard launchpad element, as this may interfere with the standard launchpad functionality.
 * 
 * 
 * @param {String[]} aIds
 *   the Ids of the sap.ushell.ui.shell.ToolAreaItem control to remove.
 * 
 * @param {boolean} bCurrentState
 *   if true, remove the current control only from the current rendered shell state.
 * 
 * @param {String[]} aStates
 *   list of the sap.ushell.renderers.fiori2.Renderer.LaunchpadState in which to remove the control.(Only valid if bCurrentState is set to false)
 * 
 *  @see LaunchpadState.
 * 
 *  If no launchpad state is provided the content is removed in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.removeToolAreaItem = function(aIds,bCurrentState,aStates) {  };

/**
 * Displays the given sap.m.Bar as the footer of the Fiori launchpad shell.</br>
 * The footer will be displayed in all states. </br>
 * 
 * <b>Example:</b>
 * <pre>
 *  var bar = new sap.m.Bar({contentLeft: [new sap.m.Button({text: "Test Footer Button",
 * press: function () {
 * sap.m.MessageToast.show("Pressed");
 * }})
 * ]});
 *  var renderer = sap.ushell.Container.getRenderer("fiori2");
 *  renderer.setFooter(bar);
 * </pre>
 * 
 * @param {Object} oFooter - sap.m.Bar
 *   the control to be added as the footer of the Fiori Launchpad
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.setFooter = function(oFooter) {  };

/**
 * Creates and displays an SAPUI5 control as the footer of the Fiori launchpad shell.<br>
 * The footer will be displayed in all states. <br>
 * Previously created footer will be removed. <br>
 * 
 * <b>For example, using the sap.m.Bar control:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 * oRenderer.setFooterControl("sap.m.Bar", {id: "testBar", contentLeft: [new sap.m.Button({text: "Test Footer Button",
 *      press: function () {
 *      sap.m.MessageToast.show("Pressed");
 *      }
 *  })
 * ]});
 * </pre>
 * 
 * This function is marked for deprecation as of version 1.48.<br>
 * It will continue to work as expected as long as one of the following conditions apply:<br>
 * 1. The control instance is already created and its ID is included in the input parameter oControlProperties<br>
 * 2. The control type resource is already loaded<br>
 * 3. Synchronous XHR requests are supported by the browser<br>
 * 
 * @param {string} controlType
 *   The (class) name of the control type to create.<br>
 *   For example: <code>"sap.m.Bar"</code><br>
 * 
 * @param {object} oControlProperties
 *   The properties that will be passed to the created control.<br>
 *   For example: <code>{id: "testBar"}</code><br>
 * 
 * @returns {object} The created control
 * 
 * @since 1.42
 * 
 * @deprecated since version 1.48 (as a result of XMLHttpRequest spec prohibiting the sending of synchronous requests). 
 * Use <code>setShellFooter<code> instead
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.setFooterControl = function(controlType,oControlProperties) { return new Object(); };

/**
 * Sets the title in the Fiori Launchpad shell header.
 * 
 * @param {string} sTitle
 *   The title to be displayed in the Fiori Launchpad shell header
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.setHeaderTitle = function(sTitle) {  };

/**
 * Sets the header visibility accrding to the given value and shell states.<br>
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).<br><br>
 * 
 * <b>Example:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 * oRenderer.setHeaderVisibility(false, false, ["home", "app"]);
 * </pre>
 * 
 * @param {boolean} bVisible
 * The visibility of the header<br>
 * 
 * @param {boolean} bCurrentState
 *   If <code>true</code> then the visibility is set only to the current rendered shell state.<br>
 *   When the user navigates to another application (including the Home page) then the visibility flag is reset.<br>
 *   If <code>false</code> then set the visibility according to the states provided in the aState parameter.<br>
 * 
 * @param {String[]} aStates
 *  (Valid only if bCurrentState is <code>false</code>)<br>
 *  A list of shell states (i.e. sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which the header visibility flag should be set.<br>
 *  If no launchpad state is provided the visibility flag is set for all states.
 *  @see LaunchpadState.<br>
 * 
 * @since 1.38
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.setHeaderVisibility = function(bVisible,bCurrentState,aStates) {  };

/**
 * Sets the visibility of the left pane in the Fiori Launchpad shell, in the given launchpad state
 * @see LaunchpadState.
 * 
 * @param {string} sLaunchpadState
 *   LaunchpadState in which to show/hide the left pane
 * @param {boolean} bVisible
 *   specif whether to display the left pane or not
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.setLeftPaneVisibility = function(sLaunchpadState,bVisible) {  };

/**
 * Creates and displays an SAPUI5 control as the footer of the Fiori launchpad shell.<br>
 * The footer will be displayed in all states. <br>
 * Previously created footer will be removed. <br>
 * 
 * <b>For example, using the sap.m.Bar control:</b>
 * <pre>
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2"),
 *     oFooterControlProperties = {
 *         controlType : "sap.m.Bar",
 *         oControlProperties : {
 *             id: "testBar",
 *             contentLeft: [new sap.m.Button({
 *                 text: "Test Footer Button",
 *                 press: function () {
 *                     sap.m.MessageToast.show("Pressed");
 *                 }
 *             })]
 *         }
 *     };
 * 
 * oRenderer.setShellFooter(oFooterControlProperties);
 * </pre>
 * 
 * @param {object} oParameters<br>
 *  Contains the required parameters for creating and showing the new control object:<br>
 *  Properties:<br>
 *   - {string} controlType<br>
 *       The (class) name of the control type to create, for example: <code>"sap.m.Bar"</code><br>
 *   - {object} oControlProperties<br>
 *       The properties that will be passed to the created control, for example: <code>{id: "testBar"}</code><br>
 * 
 * @returns {object} jQuery.deferred.promise object that when resolved, returns the newly created control
 * 
 * @since 1.48
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.setShellFooter = function(oParameters<br>) { return new Object(); };

/**
 * Displays action buttons in the options bar of the Me Area in the SAP Fiori launchpad, in the given launchpad states (LaunchpadState).
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).</br>
 * If no launchpad state is provided the content is displayed in all states.</br>
 * The user actions menu is opened via the button on the right hand side of the shell header.</br>
 * 
 * <b>Example:</b>
 *   <pre>
 *   var button1 = new sap.m.Button();
 *   var renderer = sap.ushell.Container.getRenderer("fiori2");
 *   renderer.showActionButton([button1.getId()], false, ["home", "app"]);
 *   </pre>
 * 
 * @param {String[]} aIds
 *   List of ID elements to that should be added to the Me Area options bar.
 * 
 * @param {boolean} bCurrentState
 *   If true, add the created control to the current rendered shell state. When the user navigates to a
 *   different state, or to a different application, then the control is removed. If false, the control is added to the LaunchpadState.
 * 
 * @param {String[]} aStates
 *   List of the launchpad states (sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which to add the aIds. Valid only if bCurrentState is set to false.
 * @param {boolean} bIsFirst
 *   If set to true, displays the button as the first item.
 * 
 * @see sap.ushell.renderers.fiori2.renderer.LaunchpadState.
 *  If no launchpad state is provided, the content is added in all states.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showActionButton = function(aIds,bCurrentState,aStates,bIsFirst) {  };

/**
 * Displays FloatingActionButton on the bottom right corner of the Fiori launchpad, in the given launchpad states.
 * The FloatingActionButton is rendered in the bottom right corner of the shell.</br>
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).</br>
 * If no launchpad state is provided the content is displayed in all states.</br>
 * 
 * <b>Example:</b>
 *   <pre>
 *   var button1 = new sap.ushell.ui.shell.ShellFloatingAction();
 *   var renderer = sap.ushell.Container.getRenderer("fiori2");
 *   renderer.showFloatingActionButton([button1.getId()], true);
 *   </pre>
 * @param {String[]} aIds
 *   List of ID elements to add to the user actions menu.
 * 
 * @param {boolean} bCurrentState
 *   if true, add the current Buttons only to the current instance of the rendering of the shell.
 *   if false, add the Buttons to the LaunchPadState itself.
 * 
 * @param {String[]} aStates
 *   (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.renderer.LaunchpadState in which to add the aIds.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showFloatingActionButton = function(aIds,bCurrentState,aStates) {  };

/**
 * Displays HeaderItems on the right side of the Fiori launchpad shell header, in the given launchpad states
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).</br>
 * If no launchpad state is provided the content is displayed in all states.</br>
 * The shell header can display the user HeaderItem, and just one more HeaderItem.</br>
 * If this method is called when the right side of the header is full, this method will not do anything.</br>
 * 
 * <b>Example:</b>
 *   <pre>
 *   var button1 = new sap.ushell.ui.shell.ShellHeadItem();
 *   var renderer = sap.ushell.Container.getRenderer("fiori2");
 *   renderer.showHeaderEndItem ([button1.getId()], false, ["home", "app"]);
 *   </pre>
 * 
 * @param {String[]} aIds
 *   List of ID elements to add to the shell header.
 * 
 * @param {boolean} bCurrentState
 *   if true, add the current HeaderItems only to the current instance of the rendering of the shell.
 *   if false, add the HeaderItems to the LaunchPadState itself.
 * 
 * @param {String[]} aStates
 *   (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.renderer.LaunchpadState in which to add the aIds.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showHeaderEndItem = function(aIds,bCurrentState,aStates) {  };

/**
 * Creates and displays one or more HeaderItem controls according to the given control IDs and Shell states<br>
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).<br><br>
 * The HeaderItem controls will be displayed on the left side of the Fiori Launchpad shell header according to the given display parameters.<br>
 * There can be up to three header items. If the number of existing header items plus the given ones exceeds 3, then the operation fails and no new header items are created.<br>
 * 
 * <b>Example:</b>
 * <pre>
 * var button1 = new sap.ushell.ui.shell.ShellHeadItem();
 * var button2 = new sap.ushell.ui.shell.ShellHeadItem();
 * var renderer = sap.ushell.Container.getRenderer("fiori2");
 * renderer.showHeaderItem ([button1.getId(), button2.getId()], false, ["home", "app"]);
 * </pre>
 * 
 * @param {String[]} aIds
 *   IDs Array of headerItem controls that should be added to the shell header<br>
 * 
 * @param {boolean} bCurrentState
 *   If <code>true</code> then the new created controls are added to the current rendered shell state.<br>
 *   When the user navigates to another application (including the Home page) then the controls will be removed.<br>
 *   If <code>false</code> then the controls are added to the LaunchPadState itself.<br>
 * 
 * @param {String[]} aStates
 *  (Valid only if bCurrentState is <code>false</code>)<br>
 *  A list of shell states (i.e. sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which the controls are added.<br>
 *  If no launchpad state is provided the controls are added in all states.
 *  @see LaunchpadState.<br>
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showHeaderItem = function(aIds,bCurrentState,aStates) {  };

/**
 * Displays one or more sub header controls according to the given control IDs and shell states.<br>
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).<br><br>
 * A sub header is placed in a container, located directly below the main Fiori launchpad shell header.<br>
 * 
 * <b>Example:</b>
 * <pre>
 * var bar = new sap.m.Bar({id: "testBar", contentLeft: [new sap.m.Button({text: "Test SubHeader Button",
 * press: function () {
 * sap.m.MessageToast.show("Pressed");
 * }})
 * ]});
 * var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 * oRenderer.showSubHeader([bar.getId()], false, ["home", "app"]);
 * </pre>
 * 
 * @param {String[]} aIds
 * Array of sub header control IDs to be added<br>
 * 
 * @param {boolean} bCurrentState
 *   If <code>true</code> then the new created controls are added only to the current rendered shell state.<br>
 *   When the user navigates to another application (including the Home page) then the controls will be removed.<br>
 *   If <code>false</code> then add the control to the LaunchPadState itself.<br>
 * 
 * @param {String[]} aStates
 *  (Valid only if bCurrentState is <code>false</code>)<br>
 *  A list of shell states (i.e. sap.ushell.renderers.fiori2.Renderer.LaunchpadState) in which the controls are added.<br>
 *  If no launchpad state is provided the controls are added in all states.
 *  @see LaunchpadState.<br>
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showSubHeader = function(aIds,bCurrentState,aStates) {  };

/**
 * Sets the ToolArea visibility
 * 
 * @param {String} [sLaunchpadState] - LaunchpadState in which to show/hide the ToolArea
 * 
 * @see LaunchpadState
 * 
 * @param {boolean} [bVisible] - specifies whether to display the ToolArea or not
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showToolArea = function(sLaunchpadState,bVisible) {  };

/**
 * Displays ToolAreaItem on the left side of the Fiori launchpad shell, in the given launchpad states
 * (see sap.ushell.renderers.fiori2.renderer.LaunchpadState).</br>
 * If no launchpad state is provided the content is displayed in all states.</br>
 * 
 * <b>Example:</b>
 *   <pre>
 *   var button1 = new sap.ushell.ui.shell.ToolAreaItem();
 *   var renderer = sap.ushell.Container.getRenderer("fiori2");
 *   renderer.showToolAreaItem(button1.getId(), false, ["home", "app"]);
 *   </pre>
 * 
 * @param {string} sId
 *   ID of the element to add to the Tool Area.
 * 
 * @param {boolean} bCurrentState
 *   if true, add the current ToolAreaItems only to the current instance of the rendering of the shell.
 *   if false, add the ToolAreaItems to the LaunchPadState itself.
 * 
 * @param {String[]} aStates+
 *   (only valid if bCurrentState is set to false) - list of the sap.ushell.renderers.fiori2.renderer.LaunchpadState in which to add the aIds.
 * 
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.renderers.fiori2.Renderer.prototype.showToolAreaItem = function(sId,bCurrentState,aStates+) {  };


// ---- sap.ushell.services --------------------------------------------------------------------------


// ---- sap.ushell.services.AppConfiguration --------------------------------------------------------------------------

/**
 * The Unified Shell App configuration service as a singleton object.
 * 
 * @class The unified shell's AppConfiguration service.
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.AppConfiguration = function() {};
/**
 * Sets the application screen size to full width
 * 
 * @param {boolean} bValue
 * A Boolean value indicating if the application fills the full width of the screen
 * 
 * @public
 * 
 */
sap.ushell.services.AppConfiguration.prototype.setApplicationFullWidth = function(bValue) {  };


// ---- sap.ushell.services.AppLifeCycle --------------------------------------------------------------------------

/**
 * The Unified Shell's AppLifeCycle service
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("AppLifeCycle")</code>.
 * Constructs a new instance of the AppLifeCycle service.
 * 
 * @param {object} oAdapter
 *   The service adapter for the AppLifeCycle service,
 *   as already provided by the container
 * @param {object} oContainerInterface interface
 * @param {string} sParameter Service instantiation
 * @param {object} oConfig service configuration (not in use)
 * 
 * 
 * @constructor
 * @class
 * @see sap.ushell.services.Container#getService
 * 
 * @since 1.38
 * @public
 * 
 */
sap.ushell.services.AppLifeCycle = function(oAdapter,oContainerInterface,sParameter,oConfig) {};
/**
 * Attaches an event handler for the appLoaded event. This event handler will be triggered
 * each time an application has been loaded.
 * 
 * @param {object} oData
 *     An object that will be passed to the handler along with the event object when the
 *     event is fired.
 * @param {function} fnFunction
 *     The handler function to call when the event occurs.
 * @param {object} oListener
 *     The object that wants to be notified when the event occurs (this context within the
 *     handler function).
 * @since 1.38
 * @public
 * 
 */
sap.ushell.services.AppLifeCycle.prototype.attachAppLoaded = function(oData,fnFunction,oListener) {  };

/**
 * Detaches an event handler from the EventProvider.
 * 
 * @param {function} fnFunction
 *     The handler function that has to be detached from the EventProvider.
 * @param {object} oListener
 *     The object that wanted to be notified when the event occurred
 * @since 1.38
 * @public
 * 
 */
sap.ushell.services.AppLifeCycle.prototype.detachAppLoaded = function(fnFunction,oListener) {  };

/**
 * Get information about the currently running application. The function returns an
 * object with following parameters:
 *   - applicationType: “UI5|WDA|NWBC|URL|GUI”
 *   - componentInstance: reference to component (only for type SAPUI5)
 *   - homePage: true is Shell-home is currently displayed
 * 
 * @returns {object}
 *   the currently alive application component or undefined if no component alive
 * 
 * @since 1.38
 * @public
 * 
 */
sap.ushell.services.AppLifeCycle.prototype.getCurrentApplication = function() { return new Object(); };


// ---- sap.ushell.services.Bookmark --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("Bookmark")</code>.
 * Constructs a new instance of the bookmark service.
 * 
 * @class The unified shell's bookmark service, which allows you to create shortcuts on the
 * user's home page.
 * 
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Bookmark = function() {};
/**
 * Adds a bookmark tile to one of the user's home page groups.
 * 
 * @param {object} oParameters
 *   bookmark parameters. In addition to title and URL, a bookmark might allow additional
 *   settings, such as an icon or a subtitle. Which settings are supported depends
 *   on the environment in which the application is running. Unsupported parameters will be
 *   ignored.
 * 
 * @param {string} oParameters.title
 *   The title of the bookmark.
 * @param {string} oParameters.url
 *   The URL of the bookmark. If the target application shall run in the Shell the URL has
 *   to be in the format <code>"#SO-Action~Context?P1=a&P2=x&/route?RPV=1"</code>.
 * @param {string} [oParameters.icon]
 *   The optional icon URL of the bookmark (e.g. <code>"sap-icon://home"</code>).
 * @param {string} [oParameters.info]
 *   The optional information text of the bookmark. This property is not relevant in the CDM
 *   context.
 * @param {string} [oParameters.subtitle]
 *   The optional subtitle of the bookmark.
 * @param {string} [oParameters.serviceUrl]
 *   The URL to a REST or OData service that provides some dynamic information for the
 *   bookmark.
 * @param {string} [oParameters.serviceRefreshInterval]
 *   The refresh interval for the <code>serviceUrl</code> in seconds.
 * @param {string} [oParameters.numberUnit]
 *   The unit for the number retrieved from <code>serviceUrl</code>.
 *   This property is not relevant in the CDM context.
 * @param {object} [oGroup]
 *   Optional reference to the group the bookmark tile should be added to.
 *   If not given, the default group is used.
 * 
 * @returns {object}
 *   A <code>jQuery.Deferred</code> promise which resolves on success, but rejects
 *   (with a reason-message) on failure to add the bookmark to the specified or implied group.
 * 
 * @see sap.ushell.services.URLParsing#getShellHash
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Bookmark.prototype.addBookmark = function(oParameters,oGroup) { return new Object(); };

/**
 * Adds the catalog tile with the given ID to given group. The catalog tile is looked up in
 * the legacy SAP HANA catalog unless data to look up a remote catalog is provided.
 * 
 * @param {string} sCatalogTileId
 *   The ID of the tile within the catalog
 * @param {string} [sGroupId]
 *   The id of the group. If not given, the tile is added to the default group
 * @param {object} [oCatalogData]
 *   The data to identify the catalog containing the tile with the given ID
 * @param {string} oCatalogData.baseUrl
 *   The remote catalog's base URL such as
 *   "/sap/hba/apps/kpi/s/odata/hana_chip_catalog.xsodata/"
 * @param {string} oCatalogData.remoteId
 *   The remote catalog's id on the remote system such as "HANA_CATALOG"
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or failure
 *   of this asynchronous operation. In case of success, no further details are passed.
 *   In case of failure, an error message is passed.
 * 
 * @since 1.21.2
 * @public
 * 
 */
sap.ushell.services.Bookmark.prototype.addCatalogTileToGroup = function(sCatalogTileId,sGroupId,oCatalogData) { return new Object(); };

/**
 * Counts <b>all</b> bookmarks pointing to the given URL from all of the user's pages. You
 * can use this method to check if a bookmark already exists.
 * <p>
 * This is a potentially asynchronous operation in case the user's pages have not yet been
 * loaded completely!
 * 
 * @param {string} sUrl
 *   The URL of the bookmarks to be counted, exactly as specified to {@link #addBookmark}.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or failure
 *   of this asynchronous operation. In case of success, the count of existing bookmarks
 *   is provided (which might be zero). In case of failure, an error message is passed.
 * 
 * @see #addBookmark
 * @since 1.17.1
 * @public
 * 
 */
sap.ushell.services.Bookmark.prototype.countBookmarks = function(sUrl) { return new Object(); };

/**
 * Deletes <b>all</b> bookmarks pointing to the given URL from all of the user's pages.
 * 
 * @param {string} sUrl
 *   The URL of the bookmarks to be deleted, exactly as specified to {@link #addBookmark}.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or
 *   failure of this asynchronous operation. In case of success, the number of deleted
 *   bookmarks is provided (which might be zero). In case of failure, an error message is
 *   passed.
 * 
 * @see #addBookmark
 * @see #countBookmarks
 * @since 1.17.1
 * @public
 * 
 */
sap.ushell.services.Bookmark.prototype.deleteBookmarks = function(sUrl) { return new Object(); };

/**
 * Updates <b>all</b> bookmarks pointing to the given URL on all of the user's pages
 * with the given new parameters. Parameters which are omitted are not changed in the
 * existing bookmarks.
 * 
 * @param {string} sUrl
 *   The URL of the bookmarks to be updated, exactly as specified to {@link #addBookmark}.
 *   In case you need to update the URL itself, pass the old one here and the new one as
 *   <code>oParameters.url</code>!
 * @param {object} oParameters
 *   The bookmark parameters as documented in {@link #addBookmark}.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which informs about success or
 *   failure of this asynchronous operation.  In case of success, the number of updated
 *   bookmarks is provided (which might be zero). In case of failure, an error message is
 *   passed.
 * 
 * @see #addBookmark
 * @see #countBookmarks
 * @see #deleteBookmarks
 * @since 1.17.1
 * @public
 * 
 */
sap.ushell.services.Bookmark.prototype.updateBookmarks = function(sUrl,oParameters) { return new Object(); };


// ---- sap.ushell.services.Container --------------------------------------------------------------------------

/**
 * @class The Unified Shell's container which manages renderers, services, and adapters.
 * @see sap.ushell.bootstrap
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Container = function() {};
/**
 * Adds a system to the list of remote systems currently in use. On logout
 * this list is processed and performs a logout for each system via the ContainerAdapter
 * specific for its platform.
 * 
 * @param  {sap.ushell.System} oRemoteSystem
 *         Remote system to be added.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Container.prototype.addRemoteSystem = undefined

/**
 * Attaches a listener to the logout event.
 * 
 * @param  {function} fnFunction
 *     Event handler to be attached.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.19.1
 * @public
 * 
 */
sap.ushell.services.Container.prototype.attachLogoutEvent = undefined

/**
 * Attaches a listener to the rendererCreated event.
 * 
 * @param  {function} fnFunction
 *     Event handler to be attached. If a renderer is created, this function is called with a parameter
 *     of instance <code>sap.ui.base.Event</code>. The event object provides the instance of the
 *     created renderer as parameter &quot;renderer&quot;. If the renderer is a SAPUI5 UI component
 *     (i.e. extend <code>sap.ui.core.UIComponent</code>), the event parameter returns the component
 *     instance, i.e. it unwraps the renderer component from its component container.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.34.1
 * @public
 * 
 */
sap.ushell.services.Container.prototype.attachRendererCreatedEvent = undefined

/**
 * Cancels the logon procedure in the current frame, if any. This MUST be used by the
 * logon frame provider in case the user wants to close the logon frame for good.
 * It will report "Authentication cancelled" and let all pending requests for the current
 * realm fail. As a side-effect, it also calls <code>destroy</code> on the logon frame
 * provider.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.21.2
 * @public
 * @see sap.ushell.services.Container#setLogonFrameProvider
 * 
 */
sap.ushell.services.Container.prototype.cancelLogon = undefined

/**
 * Creates a new renderer instance for the given renderer name.
 * <p>
 * Names without a dot are interpreted as package names within the default naming convention
 * and will be expanded to
 * <code>"sap.ushell.renderers." + sRendererName + ".Renderer"</code>.
 * Names containing a dot are used "as is".
 * <p>
 * The resulting name must point to a SAPUI5 object which is first required and then
 * created (constructor call without arguments).
 * The object must be either a control (i.e. extend <code>sap.ui.core.Control</code>) or a
 * UI component (i.e. extend <code>sap.ui.core.UIComponent</code>), which is then
 * automatically wrapped into a <code>sap.ui.core.ComponentContainer</code> control by this
 * method. This <code>sap.ui.core.ComponentContainer</code> is created with
 * <code>height</code> and <code>width</code> set to "100%" to accommodate the complete
 * available space.
 * <p>
 * The returned renderer is supposed to be added to a direct child (for example
 * <code>DIV</code>) of the <code>BODY</code> of the page and there should be no other
 * parts of the page consuming space outside the renderer.
 * Use CSS class <code>sapUShellFullHeight</code> at <code>HTML</code>, <code>BODY</code>
 * and at the element to which the renderer is added to allow the renderer to use 100%
 * height.
 * 
 * @param {string} [sRendererName]
 *     The renderer name, such as "standard" or "acme.foo.bar.MyRenderer"; it is taken from
 *     the configuration property <code>defaultRenderer</code> if not given here.
 * @returns {sap.ui.core.Control}
 *     the renderer
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Container.prototype.createRenderer = undefined

/**
 * Detaches a listener from the rendererCreated event.
 * 
 * @param  {function} fnFunction
 *     Event handler to be detached.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.34.1
 * @public
 * 
 */
sap.ushell.services.Container.prototype.detachLogoutEvent = undefined

/**
 * Returns the isDirty flag value.
 * 
 * @returns {isDirty}
 *      The value of the dirty flag.
 * @methodOf sap.ushell.services.Container#
 * @since 1.27.0
 * @public
 * 
 */
sap.ushell.services.Container.prototype.getDirtyFlag = undefined

/**
 * Returns the global dirty state.
 * 
 * All open UShell browser windows for the same origin are asked about their global dirty
 * state.
 * 
 * @returns {jQuery.Deferred}
 *     A <code>jQuery.Deferred</code> object's promise receiving the dirty state
 *     (see {@link sap.ushell.Container.DirtyState}).
 * @throws  Raises an exception, if called again before promise is resolved.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.21.1
 * @public
 * 
 */
sap.ushell.services.Container.prototype.getGlobalDirty = undefined

/**
 * Returns a service with the given name, creating it if necessary.
 * Services are singleton objects identified by their (resulting) name.
 * <p>
 * Names without a dot are interpreted as service names within the default naming convention
 * and will be expanded to <code>"sap.ushell.services." + sServiceName</code>.
 * Names containing a dot are not yet supported. This name may be overridden via
 * configuration. See example 2 below.
 * <p>
 * The resulting name must point to a constructor function which is first required as a
 * SAPUI5 module and then called to create a service instance.
 * The service will be passed to a corresponding service adapter for the current logon system, as well as a callback
 * interface (of virtual type <code>sap.ushell.services.ContainerInterface</code>) to the
 * container providing a method <code>createAdapter(oSystem)</code> to create further
 * adapters for the same service but connected to remote systems.
 * The third parameter will be <code>sParameter</code> as passed to this function.
 * The fourth parameter will be an
 * object with the property <code>config</code> supplied by the configuration. See
 * example 2 below.
 * <p>
 * The adapter for the logon system will be created before the service. Its constructor
 * gets three parameters. The first parameter is the logon system, the second parameter is
 * <code>sParameter</code> and the third parameter is an object with the property
 * <code>config</code> supplied by the configuration.
 * <p>
 * The service may declare itself adapterless by setting the property
 * <code>hasNoAdapter = true</code> at the constructor function. In this case no adapter
 * will be created and passed to the constructor and all other parameters will be shifted.
 * <p>
 * <b>Example 1:</b> The service <code>sap.ushell.services.UserInfo</code> is
 * parameterless. It indicates this by setting
 * <code>sap.ushell.services.UserInfo.hasNoAdapter = true;</code>.
 * <p>
 * <b>Example 2:</b> (Configuration)
 * <pre>
 * window["sap-ushell-config"] = {
 *     services: {
 *         Foo: {
 *             module: "my.own.Foo"
 *             config: {header: "hidden"},
 *             adapter: {
 *                 module: "my.own.FooAdapter",
 *                 config: {foo: "bar"}
 *             }
 *         }
 *     }
 * }
 * oService = sap.ushell.Container.getService("Foo", "runtimeConfig");
 * </pre>
 * Now <code>oService</code> is an instance of <code>my.own.Foo</code>. The third parameter
 * of the constructor will be "runtimeConfig", the fourth parameter
 * <code>{config: {header: "hidden"}}</code>. Its adapter is an instance of
 * <code>my.own.FooAdapter</code> constructed with the parameters logon system,
 * "runtimeConfig" and <code>{config: {foo: "bar"}}</code>.
 * 
 * @param {string} sServiceName
 *     The service name, such as "Menu"
 * @param {string} [sParameter]
 *     A parameter which is passed to the service constructor and every adapter
 *     constructor. (since 1.15.0)
 * @returns {object}
 *     the service
 * 
 * @methodOf sap.ushell.services.Container#
 * @see sap.ushell.services.ContainerInterface
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Container.prototype.getService = undefined

/**
 * Logs out the current user from all relevant back-end systems, including the logon system
 * itself.
 * 
 * @returns {jQuery.Deferred}
 *          A <code>jQuery.promise</code> to be resolved when logout is finished, even when it fails.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.Container.prototype.logout = undefined

/**
 * Register the work protection dirty callback function.
 * In the work protect mechanism, each platform can register their own method in order to check if data
 * was changed during the session, and notify the container about the change
 * 
 * Use <code>Function.prototype.bind()</code> to determine the callback's <code>this</code> or
 * some of its arguments.
 * 
 * @param {Function} fnDirty
 *     function for determining the state of the application
 * @since 1.31.0
 * @methodOf sap.ushell.services.Container#
 * @public
 * 
 */
sap.ushell.services.Container.prototype.registerDirtyStateProvider = undefined

/**
 * Setter for the isDirty flag value.
 * 
 * Default value is false
 * 
 * @param {boolean} [bIsDirty] The value of the dirty flag.
 * @methodOf sap.ushell.services.Container#
 * @default false
 * @since 1.27.0
 * @public
 * 
 */
sap.ushell.services.Container.prototype.setDirtyFlag = undefined

/**
 * Determines the current logon frame provider for the entire Unified Shell. Initially,
 * a rudimentary default provider is active and should be replaced as soon as possible
 * by the current renderer.
 * <p>
 * A logon frame provider is used to facilitate user authentication even for requests sent
 * via <code>XMLHttpRequest</code>. It is called back in order to create a hidden
 * <code>IFRAME</code>, to show it to the user, then to hide and destroy it. The frame
 * must be treated as a black box by the provider; especially with respect to the source of
 * the frame which is managed by the Unified Shell framework. Showing the frame might
 * require user interaction and some decoration around the frame. The frame should be
 * destroyed, not reused, to be on the safe side. Note that in typical cases with SAML2,
 * authentication happens automatically and the frame can stay hidden.
 * <p>
 * The following order of method calls is guaranteed:
 * <ol>
 *   <li> The <code>create</code> method is called first.
 *   <li> The <code>show</code> method may be called next (if there is HTML code to
 *   display).
 *   <li> The <code>destroy</code> method is called last.
 *   <li> A new cycle may start for a new logon process.
 * </ol>
 * 
 * @param {object} oLogonFrameProvider
 *   The new logon frame provider which needs to implement at least the methods documented
 *   here.
 * @param {function} oLogonFrameProvider.create
 *   A function taking no arguments and returning a DOM reference to an empty
 *   <code>IFRAME</code> which is initially hidden.
 *   The frame must not be moved around in the DOM later on. Make sure to add all necessary
 *   parent objects immediately, to render SAPUI5 controls as needed, and to return the DOM
 *   reference synchronously.
 * @param {function} oLogonFrameProvider.destroy
 *   A function taking no arguments which hides and destroys the current frame.
 * @param {function} oLogonFrameProvider.show
 *   A function taking no arguments which is called to indicate that the current frame
 *   probably needs to be shown to the user because interaction is required. Note that
 *   there may be false positives here. It is up to the provider how and when the frame
 *   is shown exactly; make sure to provide a good user interaction design here.
 * 
 * @methodOf sap.ushell.services.Container#
 * @since 1.21.2
 * @public
 * @see sap.ushell.services.Container#cancelLogon
 * 
 */
sap.ushell.services.Container.prototype.setLogonFrameProvider = undefined


// ---- sap.ushell.services.ContainerInterface --------------------------------------------------------------------------

/**
 * @class This is a virtual type for the callback interface passed by
 * {@link sap.ui.Container.getService()} to any newly created service.
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.ContainerInterface = function() {};
/**
 * For the given remote system, creates a new adapter that corresponds to the service
 * to which this container interface was passed at construction time.
 * 
 * @param {sap.ushell.System} oSystem
 *     information about the remote system to which the resulting adapter should
 *     connect
 * @returns {jQuery.Deferred}
 *     A <code>jQuery.Deferred</code> object's promise receiving the remote adapter.
 * 
 * @methodOf sap.ushell.services.ContainerInterface#
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.ContainerInterface.prototype.createAdapter = undefined


// ---- sap.ushell.services.CrossApplicationNavigation --------------------------------------------------------------------------

/**
 * The Unified Shell's CrossApplicationNavigation service, which allows to
 *        navigate to external targets or create links to external targets
 * 
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("CrossApplicationNavigation")</code>.
 * Constructs a new instance of the CrossApplicationNavigation service.
 * 
 * 
 * CrossApplicationNavigation currently provides platform independent functionality.
 * 
 * This interface is for usage by applications or shell renderers/containers.
 * 
 * Usage:
 * 
 * example: see demoapps/AppNavSample/MainXML.controller.js
 * 
 * <code>
 *   var xnavservice =  sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;<br/>
 *      && sap.ushell.Container.getService("CrossApplicationNavigation");<br/>
 *   var href = ( xnavservice && xnavservice.hrefForExternal({<br/>
 *          target : { semanticObject : "Product", action : "display" },<br/>
 *          params : { "ProductID" : "102343333" }<br/>
 *          })) || "";<br/>
 * </code>
 * 
 * 
 * Parameter names and values are case sensitive.
 * 
 * Note that the usage of multi-valued parameters (specifying an array with more than one member as parameter value, e.g.
 * <code>  params : { A : ["a1", "a2"] } </code> )
 * is possible with this API but <b>strongly discouraged</b>. Especially the navigation target matching performed at the back-end
 * is not supported for multi-value parameters. Furthermore, it is not guaranteed that additional parameter values specified in the
 * back-end configuration are merged with parameter values passed in this method.
 * 
 * Note that the application parameter length (including SemanticObject/Action) shall not exceed 512 bytes when serialized as UTF-8
 * 
 * Note that when receiving the values as startup parameters (as part of the component data object) single values
 * are represented as an array of size 1. Above example is returned as
 * <code> deepEqual(getComponentData().startupParameters ,  { "ProductID" : [ "102343333" ] } ) </code>
 * 
 * Make sure not to store security critical data within an URL
 * URLs may appear in a server log, be persisted inside and outside the system.
 * 
 * Note: When constructing large URLs, the URLs may be shortened and persisted on a database server
 * for prolonged time, the actual data is persisted under a key accessible to any User (guessing the key).
 * 
 * The same restrictions apply for the Application state
 * 
 * @constructor
 * @class
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation = function() {};
/**
 * Attempts to use the browser history to navigate to the previous app.
 * <p>A navigation to the Fiori Launchpad Home is performed in case this
 * method is called on a first navigation.  In all other cases, this
 * function simply performs a browser back navigation.
 * </p>
 * <p>Please note that the behavior of this method is subject to change
 * and therefore it may not yield to the expected results especially on
 * mobile devices where "back" is the previous inner app state iff
 * these are put into the history!</p>
 * 
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.backToPreviousApp = function() {  };

/**
 * if sHashFragment is a compacted hash (sap-intent-param is present),
 * in a hash, this function replaces it into a long url with all parameters
 * expanded
 * @param {string} sHashFragment
 *   an (internal format) shell hash
 * @returns {object} promise
 *           the success handler of the resolve promise get an expanded shell hash
 *           as first argument
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.expandCompactHash = function(sHashFragment) { return new Object(); };

/**
 * Returns a list of semantic objects of the intents the current user
 * can navigate to.
 * 
 * @returns {jQuery.Deferred.promise}
 *   A promise that resolves with an array of strings representing the
 *   semantic objects of the intents the current user can navigate
 *   to, or rejects with an error message. The returned array will not
 *   contain duplicates.
 *   <p>
 *   NOTE: the caller should not rely on the specific order
 *   the semantic objects appear in the returned array.
 *   </p>
 * 
 * @public
 * @since 1.38.0
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getDistinctSemanticObjects = function() { return new jQuery.Deferred.promise(); };

/**
 * Resolves the given semantic object (or action) and business
 * parameters to a list of links available to the user
 * 
 * @param {object|object[]} [vArgs]
 *   An object containing nominal arguments for the method, having the
 *   following structure:
 *   <pre>
 *   {
 *      semanticObject: "Object", // optional, matches any semantic
 *                                // objects if undefined
 * 
 *      action: "action",         // optional, matches any actions if
 *                                // undefined
 * 
 *      params: {                 // optional business parameters
 *         A: "B",
 *         C: ["e", "j"]
 *      },
 *      withAtLeastOneUsedParam: true, // optional, defaults to false. If
 *                                     // true, only the links that use
 *                                     // at least one (non sap-) parameter
 *                                     // from 'params' will be returned.
 *      treatTechHintAsFilter : true, // optional, defaults to false
 *                                    // if true, only apps that match
 *                                    // exactly the supplied technology
 *                                    // (e.g. sap-ui-tech-hint=WDA) will be considered
 * 
 *      ui5Component: UI5Component, // mandatory, the UI5 component
 *                                  // invoking the service, shall be a root component!
 * 
 *      appStateKey: "abc123...",   // optional, application state key
 *                                  // to add to the generated links,
 *                                  // SAP internal usage only
 * 
 *      compactIntents: true        // optional, whether intents
 *                                  // should be returned in compact
 *                                  // format. Defaults to false.
 *      ignoreFormFactor: true,     // optional, defaults to false, deprecated, do not use, may have no effect in the future
 * 
 *      tags: ["tag-1", "tag-2"]    // optional, if specified,
 *                                  // only returns links that match
 *                                  // inbound with certain tags.
 *   }
 *   </pre>
 * 
 *   This method supports a mass invocation interface to obtain
 *   multiple results with a single call, as shown in the following example:
 *   <pre>
 *      oCrossApplicationService.getLinks([ // array, because multiple invocations are to be made
 *         [                           // arguments for the first invocation
 *           { semanticObject: "SO" }  // this method supports one parameter only in each call
 *         ],
 *         [                           // arguments for the second invocation
 *           { action: "someAction" }
 *         ]
 *         // ... and so on
 *     ]);
 *   </pre>
 * 
 *   <p>Calling this method with no arguments will produce the same result
 *   as if the method was called with an empty object.</p>
 * 
 * @returns {jQuery.Deferred.promise}
 *   A promise that resolves with an array of links objects containing
 *   (at least) the following properties:
 * 
 * <pre>
 *   {
 *      intent: "#AnObject-Action?A=B&C=e&C=j",
 *      text: "Perform action",
 *      icon: "sap-icon://Fiori2/F0018", // optional
 *      subTitle: "Action", //optional
 *      shortTitle: "Perform"            // optional
 *      tags: ["tag-1", "tag-2"]         // optional
 *   }
 * </pre>
 *   <p>
 *   Properties marked as 'optional' in the example above may not be
 *   present in the returned result.
 * 
 *   <p>
 *   <b>NOTE:</b> the intents returned are in <b>internal</b> format
 *   and cannot be directly put into a link tag.
 *   <p>
 *   Example: Let the string <code>"C&A != H&M"</code> be a parameter value.
 * 
 *   Intent will be encoded as<code>#AnObject-action?text=C%26A%20!%3D%20H%26M<code>.
 *   Note that the intent is in <b>internal</b> format, before putting it into a link tag, you must invoke:
 *   <code>externalHash = oCrossApplicationNavigationService.hrefForExternal({ target : { shellHash :  oLink.intent} }, that.oComponent);</code>
 *   </p>
 * 
 *   <p>
 *   NOTE: in case the mass invocation interface is used (see
 *   <code>vArgs</code> parameter explanation above),
 *   the promise will resolve to an array of arrays of arrays. For
 *   example, if the mass interface specified two arguments, the promise would resolve as follows:
 * 
 *   <pre>
 *   [     // mass interface was used, so return multiple values
 *      [  // values returned from the first call (functions may return multiple values)
 * 
 *         // value returned from first getLinks call (as returned by single getLinks call)
 *         [
 *           {intent: "#SO-something1", text: "Perform navigation"},
 *           {intent: "#SO-something2", text: "Perform action"} ],
 *         ]
 *      ],
 *      [
 * 
 *         // value returned from second getLinks call (as returned by single getLinks call)
 *         [
 *           {intent: "#Object-someAction", text: "Some action1"}
 *         ]
 *      ]
 *      // ... and so on
 *   ]
 *   </pre>
 * 
 * @public
 * @since 1.38.0
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getLinks = function(vArgs) { return new jQuery.Deferred.promise(); };

/**
 * For a given semantic object, this method considers all actions
 * associated with the semantic object and returns the one tagged as a
 * "primaryAction". If no inbound tagged as "primaryAction" exists, then
 * the intent of the first inbound (after sorting has been applied)
 * matching the action "displayFactSheet".
 * 
 * The primary intent is determined by querying {@link CrossApplicationNavigation#getLinks}
 * with the given semantic object and optional parameter. Then the
 * resulting list is filtered to the outcome that a single item remains.
 * 
 * @param {string} sSemanticObject Semantic object.
 * @param {object} [mParameters] @see CrossApplicationNavigation#getSemanticObjectLinks for description.
 * 
 * @returns {jQuery.Deferred} When a relevant link object exists, it will return
 * a promise that resolves to an object of the following form:
 * <pre>
 *   {
 *      intent: "#AnObject-Action?A=B&C=e&C=j",
 *      text: "Perform action",
 *      icon: "sap-icon://Fiori2/F0018", // optional
 *      shortTitle: "Perform"            // optional
 *      tags: ["tag-1", "tag-2"]         // optional
 *   }
 * </pre>
 * Otherwise, the returned promise will resolve to null when no relevant
 * link object exists.
 * 
 * @public
 * @since 1.48
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getPrimaryIntent = function(sSemanticObject,mParameters) { return new jQuery.Deferred(); };

/**
 * Resolves a given semantic object and business parameters to a list of links,
 * taking into account the form factor of the current device.
 * 
 * @param {string} sSemanticObject
 *   the semantic object such as <code>"AnObject"</code>
 * @param {object} [mParameters]
 *   the map of business parameters with values, for instance
 *   <pre>
 *   {
 *     A: "B",
 *     c: "e"
 *   }
 *   </pre>
 * @param {boolean} [bIgnoreFormFactor=false]
 *   when set to <code>true</code> the form factor of the current device is ignored
 * @param {Object} [oComponent]
 *    SAP UI5 Component invoking the service
 * @param {string} [sAppStateKey]
 *    application state key to add to the generated links, SAP internal usage only
 * @param {boolean} [bCompactIntents]
 *    whether the returned intents should be returned in compact format. Defaults to false.
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which is resolved with an array of
 *   link objects containing (at least) the following properties:
 * <pre>
 * {
 *   intent: "#AnObject-action?A=B&C=e",
 *   text: "Perform action",
 *   icon: "sap-icon://Fiori2/F0018", //optional
 *   subTitle: "Action", //optional
 *   shortTitle: "Perform" //optional
 * }
 * </pre>
 * 
 * <b>NOTE:</b> the intents returned are in <b>internal</b> format and cannot be directly put into a link tag.
 * <p>
 * Example: Let the string <code>"C&A != H&M"</code> be a parameter value.
 * Intent will be encoded as<code>#AnObject-action?text=C%26A%20!%3D%20H%26M<code>.
 * Note that the intent is in <b>internal</b> format, before putting it into a link tag, you must invoke:
 * <code>externalHash = oCrossApplicationNavigationService.hrefForExternal({ target : { shellHash :  oLink.intent} }, that.oComponent);</code>
 * </p>
 * 
 * @deprecated since version 1.38.0 use getLinks
 * @since 1.19.0
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.getSemanticObjectLinks = function(sSemanticObject,mParameters,bIgnoreFormFactor,oComponent,sAppStateKey,bCompactIntents) { return new Object(); };

/**
 * performs window.history.back() if supported by the underlying
 * platform.
 * May be a noop if the url is the first url in the browser.
 * 
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.historyBack = function() {  };

/**
 * Returns a string which can be put into the DOM (e.g. in a link tag)
 * given an application specific hash suffix
 * 
 * Example: <code>hrefForAppSpecificHash("View1/details/0/")</code> returns
 * <code>#SemanticObject-action&/View1/details/0/</code> if the current application
 * runs in the shell and was started using "SemanticObject-action" as
 * shell navigation hash
 * 
 * @param {string} sAppHash
 *   the app specific router, obtained e.g. via router.getURL(...)
 * @returns {string}
 * A string which can be put into the link tag,
 *          containing the current shell navigation target and the
 *          specified application specific hash suffix
 * 
 * Note that sAppHash shall not exceed 512 bytes when serialized as UTF-8
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.hrefForAppSpecificHash = function(sAppHash) { return ""; };

/**
 * Returns a string which can be put into the DOM (e.g. in a link tag)
 * 
 * @param {object} oArgs
 *     object encoding a semantic object and action
 *  e.g.
 *  <pre>
 *  {
 *     target : { semanticObject : "AnObject", action: "action" },
 *     params : { A : "B" }
 *  }
 *  </pre>
 *  or
 *  e.g.
 *  <pre>
 *  {
 *     target : {
 *        semanticObject : "AnObject",
 *        action: "action", context  : "AB7F3C"
 *     },
 *     params : {
 *        A : "B",
 *        c : "e"
 *     }
 *  }
 *  </pre>
 *  or
 *  <pre>
 *  {
 *     target : { shellHash : "SO-36?jumper=postman" }
 *  }
 *  </pre>
 * @param {object} [oComponent]
 *   the root component of the application
 * @param {bool} bAsync
 *   if set to <code>true</code>, a promise will be returned instead of
 *   the direct argument. The promise will only succeed after all
 *   compaction requests have been sent
 * 
 * @returns {string}
 *   the href for the specified parameters as an *external* shell hash;
 *   always starting with a
 *   hash character; all parameters and parameter names are URL-encoded (via
 *   encodeURIComponent) and the complete string is encoded via encodeURI (!).
 *   The generated string can not be used in the majority of interfaces which expect a
 *   internal shell hash.
 * 
 * A proper way for an application to generate a link to return to the home page of the
 * Fiori launchpad is :
 * <code>
 * hrefForExternal( { target : { shellHash : "#" }})
 * </code>
 * 
 * Do *not* use "#Shell-home" to navigate to a specific homepage!
 * 
 * Note: if object is undefined, the current shell hash is returned.
 * 
 * Note that the application parameter length (including
 * SemanticObject/Action) shall not exceed 512 bytes when serialized as
 * UTF-8.
 * 
 * The function can be used to convert an shell hash internal format
 * commonly encountered into the URL format to use in link tags:
 * <pre>
 * externalHash = oCrossApplicationNavigationService.hrefForExternal({
 *     target: {
 *         shellHash: oLink.intent
 *     }
 * }, that.oComponent);
 * </pre>
 * 
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.hrefForExternal = function(oArgs,oComponent,bAsync) { return ""; };

/**
 * Checks whether the FLP has performed the first navigation. This method can
 * be used to detect whether the current app was started directly, that is,
 * without a previous navigation to another app, to the FLP home, or another
 * target that adds an entry in the browser history.
 * 
 * @returns {boolean}
 *    Whether the initial navigation occurred.
 * 
 * @public
 * @since 1.36.0
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.isInitialNavigation = function() { return false; };

/**
 * Tells whether the given intent(s) are supported, taking into account the form factor of
 * the current device. "Supported" means that navigation to the intent is possible.
 * Note that the intents are assumed to be in internal format  and expanded.
 * @param {string[]} aIntents
 *   the intents (such as <code>["#AnObject-action?A=B&c=e"]</code>) to be checked
 * @param {object} [oComponent]
 *   the root component of the application
 * 
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which is resolved with a map
 *   containing the intents from <code>aIntents</code> as keys. The map values are
 *   objects with a property <code>supported</code> of type <code>boolean</code>.<br/>
 *   Example:
 * <pre>
 *   {
 *     "#AnObject-action?A=B&c=e": { supported: false },
 *     "#AnotherObject-action2": { supported: true }
 *   }
 * </pre>
 * Example usage:
 * <code>
 *   this.oCrossAppNav.isIntentSupported(["SalesOrder-approve?SOId=1234"])
 *   .done(function(aResponses) {
 *     if (oResponse["SalesOrder-approve?SOId=1234"].supported===true){
 *        // enable link
 *     }
 *     else {
 *        // disable link
 *     }
 *   })
 *   .fail(function() {
 *     // disable link
 *     // request failed or other error
 *   });
 * </code>
 * * @deprecated switch to isNavigationSupported
 * Note that this has a slightly different response format
 * @since 1.19.1
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.isIntentSupported = function(aIntents,oComponent) { return new Object(); };

/**
 * Tells whether the given navigation intent(s) are supported for the given
 * parameters, form factor etc
 * "Supported" means that a valid navigation target is configured for the
 * user for the given device.
 * 
 * This is effectively a test function for {@link toExternal}/ {@link hrefForExternal}.
 * It is functionally equivalent to {@link isIntentSupported} but accepts the same interface
 * as {@link toExternal}/ {@link hrefForExternal}.
 * 
 * @param {object[]} aIntents
 *   the intents to be checked
 * with object being instances the oArgs object of toExternal, hrefForExternal etc.
 * 
 *  e.g. <code>
 *  {
 *      target: {
 *          semanticObject: "AnObject",
 *          action: "action"
 *      },
 *      params: {
 *          A: "B"
 *      }
 *  }
 *  </code>
 *  or
 *  e.g. <code>
 *  {
 *      target: {
 *          semanticObject: "AnObject",
 *          action: "action"
 *      },
 *      params: {
 *          A: "B",
 *          c: "e"
 *      }
 *  }
 *  </code>
 *  or
 *  <code>
 *  {
 *      target: {
 *          shellHash: "SO-36&jumper=postman"
 *      },
 *  }
 *  </code>
 * @param {object} [oComponent]
 *   the root component of the application
 * 
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which is resolved with an array (!) of
 *   objects representing whether the intent is supported or not
 *   objects with a property <code>supported</code> of type <code>boolean</code>.<br/> representing
 *   Example:
 * 
 * aIntents:
 * <pre>
 *  [
 *    {  target : {
 *          semanticObject : "AnObject",
 *          action: "action"
 *       },
 *       params : { P1 : "B", P2 : [ "V2a", "V2b"]  }
 *    },
 *    {  target : {
 *          semanticObject : "SalesOrder",
 *          action: "display"
 *       },
 *       params : { P3 : "B", SalesOrderIds : [ "4711", "472"] }
 *    }
 * ]
 * </pre>
 * 
 * response: [Indices correspond]
 * <pre>
 * [
 *   { supported: false },
 *   { supported: true }
 * ]
 * </pre>
 * Example usage:
 * <code>
 * this.oCrossAppNav.isNavigationSupported([ ])
 * .done(function(aResponses) {
 *   if (oResponse[0].supported===true){
 *      // enable link
 *   }
 *   else {
 *      // disable link
 *   }
 * })
 * .fail(function() {
 *   // disable link
 *   // request failed or other fatal error
 * });
 * </code>
 * 
 * @since 1.32
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.isNavigationSupported = function(aIntents,oComponent) { return new Object(); };

/**
 * Navigate to an specified external target (e.g. different launchpad application)
 * Invocation will trigger an hash change and subsequent invocation of the application.
 * 
 * If the navigation target opens in a new window the running application may be retained.
 * 
 * @param {Object} oArgs
 * configuration object describing the target
 * 
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "action" },<br/>
 *         params : { A : "B" } }</code>
 *    constructs sth. like   <code>#AnObject-action?A=B&C=e&C=j</code>;
 *  or
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "action", context  : "AB7F3C" },<br/>
 *         params : { A : "B", c : "e" } }</code>
 *  or
 *      <code>{ target : { shellHash : "SO-36&jumper=postman" },
 *      }</code>
 * 
 * and navigate to it via changing the hash
 * 
 * A proper way for an application to generate a link to return to the home page of the
 * Fiori launchpad is:
 * <code>
 * hrefForExternal( { target : { shellHash : "#" }})
 * </code>
 * 
 * Do *not* use "#Shell-home" or "Shell-home" to navigate to a specific homepage!
 * 
 * The actual navigation may occur deferred!
 * 
 * 
 * 
 * 
 * Note that the application parameter length (including SemanticObject/Action) shall not exceed 512 bytes when serialized as utf-8
 * @param {object} [oComponent]
 *    an optional SAP UI5 Component,
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.CrossApplicationNavigation.prototype.toExternal = function(oArgs,oComponent) {  };


// ---- sap.ushell.services.EndUserFeedback --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("EndUserFeedback")</code>.
 * Constructs a new instance of the end user feedback service.
 * 
 * @class The Unified Shell's end user feedback service
 * 
 * @param {object}
 *            oAdapter the service adapter for the end user feedback service,
 *            as already provided by the container
 * @param {object}
 *            oContainerInterface the interface provided by the container
 * @param {string}
 *            sParameters the runtime configuration specified in the
 *            <code>sap.ushell.Container.getService()</code> call (not
 *            evaluated yet)
 * @param {object}
 *            oServiceConfiguration the service configuration defined in the
 *            bootstrap configuration; the boolean property
 *            <code>enabled</code> controls the service enablement
 * 
 * This service is enabled by default. It can be disabled explicitly in the
 * bootstrap configuration of the start page:
 * <pre>
 * window[&quot;sap-ushell-config&quot;] = {
 *     services: {
 *         EndUserFeedback: {
 *             config: {
 *                 enabled: true
 *             }
 *         }
 *     }
 * }
 * 
 * Platform implementations can also enable it dynamically by modification of the
 * bootstrap configuration during boot time.
 * 
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * 
 * @since 1.25.1
 * 
 */
sap.ushell.services.EndUserFeedback = function(oAdapter,oContainerInterface,sParameters,oServiceConfiguration) {};
/**
 * Receives the legal text for the feedback dialog box
 * 
 * @param
 * 
 * @public
 * @since 1.25.1
 * 
 */
sap.ushell.services.EndUserFeedback.prototype.getLegalText = function() {  };

/**
 * Checks if the service is enabled.
 * <p>
 * The service enablement depends on the configuration in the back-end system and the bootstrap configuration.
 * 
 * @return {Object} Promise, done = if the service is enabled;
 * 
 * @public
 * @since 1.25.1
 * 
 */
sap.ushell.services.EndUserFeedback.prototype.isEnabled = function() { return null; };

/**
 * Sends a feedback. Forwards the given data (JSON object) to the associated adapter.
 * 
 * @param {JSON} JSON object containing the input fields required for the end user feedback.
 * 
 * @public
 * @since 1.25.1
 * 
 */
sap.ushell.services.EndUserFeedback.prototype.sendFeedback = function(JSON) {  };


// ---- sap.ushell.services.LaunchPage --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("LaunchPage")</code>.
 * Constructs a new instance of the page builder service.
 * 
 * @class A service for handling groups, tiles and catalogs.
 * 
 * The functions that return the main objects are getGroups, getGroupTitle, getCatalogs and getCatalogTiles.
 * Since the implementation (i.e. adapter) is platform specific, do not call or access properties and functions of returned objects.
 * Instead, use other functions of the LaunchPage service with the relevant object as the input parameter.
 * 
 * @param {object} oAdapter
 *     the page builder adapter for the logon system
 * @param {object} oContainerInterface
 *     the interface provided by the container
 * 
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage = function(oAdapter,oContainerInterface) {};
/**
 * Adds a new group.
 * 
 * In case of success, the <code>done</code> function gets the new added group object.
 * Intention: the page builder adds this group to the end of the home screen.
 * 
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * 
 * @param {string} sTitle
 *     The title of the new group
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.addGroup = function(sTitle) { return new Object(); };

/**
 * Adds a new group at a specific location.
 * 
 * In case of success, the <code>done</code> function gets the new added group object.
 * Intention: the page builder adds this group to the specific location on the home screen.
 * 
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * 
 * @param {string} sTitle
 *     The title of the new group
 * 
 * @param {integer} iIndex
 *     the location of the new group
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.addGroupAt = function(sTitle,iIndex) { return new Object(); };

/**
 * Adds a tile to a group.
 * 
 * If no group is provided then the tile is added to the default group.
 * 
 * In case of success, the <code>done</code> function returns the new tile.
 * Intention: the page builder by default puts this tile at the end of the default group.
 * In case of failure, the <code>fail</code> function should return the consistent (i.e. persisted) backend state of the default group.
 * 
 * @param {object} oCatalogTile
 *     An 'anonymous' tile from the tile catalog
 * @param {object} [oGroup]
 *     The target group
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.addTile = function(oCatalogTile,oGroup) { return new Object(); };

/**
 * Returns the press handler for clicking on a tile.
 * 
 * @param {object} oTile
 *     The tile
 * 
 * @returns {function}
 *  handler for clicking on the tile.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getAppBoxPressHandler = function(oTile) { return function() {}; };

/**
 * Returns catalog's technical data.
 * 
 * @param {object} oCatalog
 *     the catalog
 * 
 * @returns {object}
 *     An object that includes the following properties (the list may include additional properties):
 *     <ul>
 *     <li><code>id</code>: the catalog ID
 *     <li><code>systemId</code>: [remote catalogs] the ID of the remote system
 *     <li><code>remoteId</code>: [remote catalogs] the ID of the catalog in the
 *       remote system
 *     <li><code>baseUrl</code>: [remote catalogs] the base URL of the catalog in the
 *       remote system
 *     </ul>
 * 
 * @since 1.21.2
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogData = function(oCatalog) { return new Object(); };

/**
 * Returns the catalog's technical error message in case it could not be loaded from the
 * backend.
 * <p>
 * <b>Beware:</b> The technical error message is not translated!
 * 
 * @param {object} oCatalog
 *     the catalog
 * @returns {string}
 *     The technical error message or <code>undefined</code> if the catalog was loaded
 *     properly
 * @since 1.17.1
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogError = function(oCatalog) { return ""; };

/**
 * Returns the catalog's unique identifier
 * 
 * @param {object} oCatalog
 *     The catalog
 * 
 * @returns {string}
 *  Catalog id
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogId = function(oCatalog) { return ""; };

/**
 * Returns the catalogs of the user.
 * 
 * <p>
 * Only severe failures make the overall operation fail. If loading of a remote catalog fails,
 * this is handled gracefully by providing a "dummy" empty catalog (with ID instead of title).
 * Use {@link getCatalogError} to check if a (remote) catalog could not be loaded from the backend.
 * <p>
 * Progress notifications are sent for each single catalog, i.e. attaching a <code>progress</code> handler gives you the same
 * possibilities as attaching a <code>done</code> handler, but with the advantage of
 * improved responsiveness.
 * 
 * @example
 *   sap.ushell.Container.getService("LaunchPage").getCatalogs()
 *   .fail(function (sErrorMessage) { // string
 *     // handle error situation
 *   })
 *   .progress(function (oCatalog) { // object
 *     // do s.th. with single catalog
 *   })
 *   .done(function (aCatalogs) { // object[]
 *     aCatalogs.forEach(function (oCatalog) {
 *       // do s.th. with single catalog
 *     });
 *   });
 * 
 * @returns {object}
 *  <code>jQuery.Deferred</code> object's promise
 *   In case of success, an array of black-box catalog objects is provided (which might be empty).
 *   In case of failure, an error message is passed.
 *   Progress notifications are sent for each single catalog, providing a single black-box catalog object each time.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogs = function() { return new Object(); };

/**
 * Returns catalog tile's unique identifier.
 * This function may be called for a catalog tile or (since 1.21.0) for a group tile.
 * In the latter case, the function returns the unique identifier of the catalog tile on which the group tile is based.
 * 
 * @param {object} oTile
 *     The tile or the catalog tile
 * 
 * @returns {string}
 *  Tile id
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileId = function(oTile) { return ""; };

/**
 * Returns the keywords associated with a catalog tile which can be used to find the
 * catalog tile in a search.
 * Note: getCatalogTileView <b>must</b> be called <b>before</b> this method. Otherwise the
 * keywords may be incomplete.
 * 
 * @param {object} oCatalogTile
 *      The catalog tile
 * 
 * @returns string[]
 *      The keywords associated with this catalog tile
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileKeywords = function(oCatalogTile) {  };

/**
 * Returns preview icon for a catalog tile.
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {string}
 *     Preview icon as URL/URI for the catalog tile's underlying application as provided via the "preview" contract
 * 
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTilePreviewIcon = function(oCatalogTile) { return ""; };

/**
 * Returns preview subtitle for a catalog tile.
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {string}
 *     Preview subtitle for the catalog tile's underlying application as provided via the
 *     "preview" contract
 * 
 * @since 1.40
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTilePreviewSubtitle = function(oCatalogTile) { return ""; };

/**
 * Returns preview title for a catalog tile.
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {string}
 *     Preview title for the catalog tile's underlying application as provided via the
 *     "preview" contract
 * 
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTilePreviewTitle = function(oCatalogTile) { return ""; };

/**
 * Returns the tiles of a catalog.
 * In case of success, the <code>done</code> function of the returned promise object gets an array of 'anonymous' tiles of the catalog.
 * 
 * @param {object} oCatalog
 *     The catalog
 * 
 * @returns {object}
 *  jQuery.promise object.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTiles = function(oCatalog) { return new Object(); };

/**
 * Returns the size of a catalog tile as a string. For example: "1x1", "1x2"
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {string}
 *  Tile size in units in 1x1 or 1x2 format
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileSize = function(oCatalogTile) { return ""; };

/**
 * Returns the tags associated with a catalog tile which can be used to find the
 * catalog tile in a tag filter.
 * 
 * @param {object} oCatalogTile
 *      The catalog tile
 * 
 * @returns string[]
 *      The tags associated with this catalog tile
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileTags = function(oCatalogTile) {  };

/**
 * Returns the navigation target URL of a catalog tile.
 * If the catalog tile does not exist, this function implicitly instantiates it using {@link #getCatalogTileView(oCatalogTile)}.
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {string}
 *     The target URL for the catalog tile's underlying application as provided via the
 *     "preview" contract
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileTargetURL = function(oCatalogTile) { return ""; };

/**
 * Returns the catalog tile's title
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {string}
 *  Tile title
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileTitle = function(oCatalogTile) { return ""; };

/**
 * Returns the UI5 view or control  of a catalog tile
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {object}
 *  UI5 view or control
 * 
 * @public
 * 
 * @deprecated since version 1.48 (as a result of XMLHttpRequest spec prohibiting the sending of synchronous requests). 
 * Use <code>getCatalogTileViewControl</code> instead
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileView = function(oCatalogTile) { return new Object(); };

/**
 * Returns the UI5 view or control  of a catalog tile
 * 
 * @param {object} oCatalogTile
 *     The catalog tile
 * 
 * @returns {object}
 *  jQuery.deferred.promise object that when resolved, returns the Catalog Tile View
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTileViewControl = function(oCatalogTile) { return new Object(); };

/**
 * Returns the catalog's title
 * 
 * @param {object} oCatalog
 *     The catalog
 * 
 * @returns {string}
 *  Catalog title
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getCatalogTitle = function(oCatalog) { return ""; };

/**
 * Returns the default group of the user.
 * In case of success, the <code>done</code> function gets an 'anonymous' object representing the default group.
 * 
 * @returns {object}
 *  jQuery.promise object.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getDefaultGroup = function() { return new Object(); };

/**
 * Returns the unique identifier of the given group
 * 
 * @param {object} oGroup
 *     The group whose id is returned
 * @returns {string}
 *  Group id
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getGroupId = function(oGroup) { return ""; };

/**
 * Returns the groups of the user.
 * In case of success, the <code>done</code> function gets an array of 'anonymous' groups.
 * The order of the array is the order in which the groups will be displayed to the user.
 * 
 * @returns {object}
 *  jQuery.promise object.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getGroups = function() { return new Object(); };

/**
 * Returns an array of 'anonymous' tiles of a group.
 * The order of the array is the order of tiles that will be displayed to the user.
 * 
 * @param {object} oGroup
 *     The group whose tiles are returned
 * 
 * @returns {Array}
 *  The group tiles array
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getGroupTiles = function(oGroup) { return null; };

/**
 * Returns the title of the given group.
 * 
 * @param {object} oGroup
 *     The group whose title is returned
 * @returns {string}
 *  group title
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getGroupTitle = function(oGroup) { return ""; };

/**
 * Returns an array of link tiles for a group.
 * The order of the array is the order in which the links will be displayed to the user.
 * 
 * @param {object} oGroup
 *     The group whose link tiles are returned
 * 
 * @returns {Array}
 *  The array of link tiles
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getLinkTiles = function(oGroup) { return null; };

/**
 * Returns the tile's unique identifier
 * 
 * @param {object} oTile
 *     The tile
 * @returns {string}
 *     Tile id
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getTileId = function(oTile) { return ""; };

/**
 * Returns the tile size in the format of 1x1 or 1x2 string
 * 
 * @param {object} oTile
 *     The tile
 * 
 * @returns {string}
 *  tile size in units in 1x1 format
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getTileSize = function(oTile) { return ""; };

/**
 * Returns the tile's navigation target.
 * 
 * The navigation target string is used (when assigned to <code>location.hash</code>) for performing a navigation action
 *  that eventually opens the application represented by the tile.
 * 
 * @param {object} oTile
 *     the tile
 * @returns {string}
 *  the tile target
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getTileTarget = function(oTile) { return ""; };

/**
 * Returns the tile's title.
 * 
 * @param {object} oTile
 *     The tile
 * @returns {string}
 *     The title
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getTileTitle = function(oTile) { return ""; };

/**
 * Returns the tile's type.
 * 
 * @param {object} oTile
 *     The tile
 * @returns {string}
 *     The type
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getTileType = function(oTile) { return ""; };

/**
 * Returns UI5 view or control of the tile.
 * In case of success the <code>done</code> function should return UI5 view or control of the tile.
 * In case of failure the <code>fail</code> function should return nothing.
 * 
 * @param {object} oTile
 *     The tile
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.getTileView = function(oTile) { return new Object(); };

/**
 * Returns whether the catalogs collection previously returned by <code>getCatalogs()</code> is still valid.
 * 
 * Initially the result is <code>false</code> until <code>getCatalogs()</code> has been called.
 * Later, the result might be <code>false</code> again in case one of the catalogs has been invalidated,
 * e.g. due to adding a tile to a catalog ("Add to catalog" scenario).
 * 
 * @returns {boolean} <code>true</code> in case the catalogs are still valid; <code>false</code> if not
 * 
 * @since 1.16.4
 * @see #getCatalogs
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.isCatalogsValid = function() { return false; };

/**
 * Checks if a group was marked as locked (meaning the group and its tiles will lack several capabilities such as Rename, Drag&Drop...).
 * 
 * Returns <code>true</code> if the group is locked
 * and <code>false</code> if not.
 * 
 * @param {object} oGroup
 *     The group to be checked
 * 
 * @returns {boolean}
 *  <code>true</code> if locked; <code>false</code> if not (or as default in case the function was not implemented in the proper adapter).
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.isGroupLocked = function(oGroup) { return false; };

/**
 * Checks if a group can be removed.
 * 
 * Returns <code>true</code> if the group can be removed (i.e. if the given group was created by the user)
 * and <code>false</code> if the group can only be reset.
 * 
 * @param {object} oGroup
 *     The group to be checked
 * 
 * @returns {boolean}
 *  <code>true</code> if removable; <code>false</code> if resettable
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.isGroupRemovable = function(oGroup) { return false; };

/**
 * Moves a group to a new index (i.e. location).
 * 
 * In case of success, the <code>done</code> function is called without any value.
 * Intention: the page builder already moved the page (visible to the user) and if successful - nothing needs to be done.
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * 
 * @param {object} oGroup
 *     The group to be moved
 * @param {integer} iNewIndex
 *     The new index for the group
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.moveGroup = function(oGroup,iNewIndex) { return new Object(); };

/**
 * Moves a tile within a group or between different groups.
 * 
 * In case of success, the <code>done</code> function returns nothing.
 * Intention: the page builder already moved the tile.
 * 
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of the source group and the target group.
 * The result is in the following format {source:[{},{}], target:[{},{}]}.
 * 
 * The source and the target groups tiles are in the form of the @see sap.ushell.services.LaunchPage.getGroupTiles
 * 
 * @param {object} oTile
 *     a tile instance to be moved
 *     The same object type as the one returned by <code>sap.ushell.services.LaunchPage.getGroupTiles</code>
 * @param {integer} iSourceIndex
 *     the index in the source group
 * @param {integer} iTargetIndex
 * the target group index, in case this parameter is not supplied we assume the move tile is within the source group using iSourceIndex
 * @param {object} oSourceGroup
 *     the source group the tile came from
 * @param {object} [oTargetGroup]
 *    The same object type as the one returned by <code>sap.ushell.services.LaunchPage.getGroups</code>
 *    the target group the tile will be placed in, in case this
 *     parameter is not supplied we assume the move tile is within the source group
 * @param {string} newTileType
 *    The new type of the tile
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.moveTile = function(oTile,iSourceIndex,iTargetIndex,oSourceGroup,oTargetGroup,newTileType) { return new Object(); };

/**
 * Triggers a refresh action of a tile.
 * Typically this action is related to the value presented in dynamic tiles
 * 
 * @param {object} oTile
 *      The tile
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.refreshTile = function(oTile) {  };

/**
 * Register an external tile actions provider callback function.
 * 
 * The callback has to return an array of actions of the given tile. The callback is triggered when
 * @see sap.ushell.services.LaunchPage.getTileActions is called.
 * 
 * Tile actions are additional operations that can be executed on a tile, and can be provided by
 * external providers.
 * 
 * A tile action is an object with the following properties: text, icon and targetURL or a press handler.
 * 
 * Tile actions should be returned immediately without any additional server access in order
 * to avoid delays in rendering the action list in the browser.
 * 
 * @example of a tile actions provider callback:
 * <code>
 *     function (oTile){
 *          return [
 *                  {
 *                      text: "Some Action",
 *                      icon: "sap-icon://action",
 *                      targetURL: "#SemanticObject-Action"
 *                  },
 *                  {
 *                      text: "Settings",
 *                      icon: "sap-icon://action-settings",
 *                      press: function (){
 *                          //Open settings UI
 *                      }
 *                  }
 *              ];
 *       }
 * </code>.
 * 
 * 
 * Use <code>Function.prototype.bind()</code> to determine the callback's <code>this</code> or
 * some of its arguments.
 * 
 * @param {Object} fnProvider
 *  A callback which returns an array of action objects.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.registerTileActionsProvider = function(fnProvider) {  };

/**
 * Removes a group.
 * 
 * In case of success, the <code>done</code> function is called without any value (i.e. input data).
 * Intention: the page builder already removed the page (or hid it from the user) and if successful - nothing needs to be done.
 * 
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state of all groups.
 * 
 * @param {object} oGroup
 *     The group to be removed
 * @param {integer} iIndex
 *     The index of the group to be removed
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.removeGroup = function(oGroup,iIndex) { return new Object(); };

/**
 * Removes a tile from a group.
 * 
 * In case of success, the <code>done</code> function returns the new tile.
 * Intention: the page builder has already 'hidden' (or removed) the tile.
 * 
 * In case of failure, the <code>fail</code> function should return the consistent (i.e. persisted) backend state of the group.
 * 
 * @param {object} oTile
 *     The tile instance to remove
 * @param {object} oGroup
 *     The group from which to remove the tile instance
 * @param {integer} iIndex
 *     The tile index
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.removeTile = function(oTile,oGroup,iIndex) { return new Object(); };

/**
 * Resets a group.
 * 
 * The reset action is relevant for a group that was assigned to the user by an administrator.
 * The reset action means that the group is set back to the state defined by the administrator,
 * and changes made by the end user (e.g. adding tiles) are removed.
 * A group can be reset multiple times.
 * 
 * In case of success, the <code>done</code> function gets the reset group object.
 * 
 * In case of failure, or when the given group was created by the user (i.e. can't be reset)- <code>fail</code> handler is called,
 * returning the consistent (i.e. persisted) backend state of all groups.
 * The returned group object is the same as the one returned by @see sap.ushell.services.LaunchPage.getGroups
 * 
 * @param {object} oGroup
 *     The group to be reset
 * @param {integer} iIndex
 *     The index of the group to be reset
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.resetGroup = function(oGroup,iIndex) { return new Object(); };

/**
 * Sets the title of an existing group.
 * 
 * In case of success, the <code>done</code> function returns nothing.
 * Intention: the page builder knows the new title, and if successful nothing needs to be done,
 *  as the title is already visible to the user.
 * In case of failure, the <code>fail</code> function returns the consistent (i.e. persisted) backend state
 *  of the group title, in most cases the old title.
 * 
 * @param {string} sTitle
 *     The new title of the group
 * @param {object} oGroup
 *     The group whose title is set
 * 
 * @returns {object}
 *  jQuery.promise object
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.setGroupTitle = function(sTitle,oGroup) { return new Object(); };

/**
 * Sets the tile's visibility state and notifies the tile about the change.
 * 
 * @param {object} oTile
 *     The tile
 * @param {boolean} bNewVisible
 *   The tile's required visibility state.
 * 
 * @public
 * 
 */
sap.ushell.services.LaunchPage.prototype.setTileVisible = function(oTile,bNewVisible) {  };


// ---- sap.ushell.services.Message --------------------------------------------------------------------------

/**
 * Message service.
 * 
 * @constructor
 * @since 1.16.0
 * @public
 * 
 */
sap.ushell.services.Message = function() {};
/**
 * Shows an confirmation dialog on the screen.
 * 
 * The callback is called with the following signature: <code>function(oAction)</code>
 * where oAction is the button that the user has tapped. For example, when the user has pressed the close button, a sap.m.MessageBox.Action.Close is returned.
 * 
 * If no actions are provided, OK and Cancel will be shown. In this case oAction is set by one of the following three values:
 * 1. sap.m.MessageBox.Action.OK: OK (confirmed) button is tapped.
 * 2. sap.m.MessageBox.Action.Cancel: Cancel (unconfirmed) button is tapped.
 * 3. null: Confirm dialog is closed by Calling sap.m.InstanceManager.closeAllDialogs()
 * 
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {function} fnCallback
 *      callback function
 * @param {string} [sTitle]
 *      the localized title as plain text (optional)
 * @param {sap.m.MessageBox.Action|sap.m.MessageBox.Action[]|string|string[]} [vActions]
 *       Either a single action, or an array of two actions. If no action(s) are given, the single action MessageBox.Action.OK is taken as a default for the parameter. If more than two actions are given, only the first two actions are taken. Custom action string(s) can be provided, and then the translation of custom action string(s) needs to be done by the application.
 * 
 * @methodOf sap.ushell.services.Message#
 * @public
 * 
 */
sap.ushell.services.Message.prototype.confirm = undefined

/**
 * Shows an error message on the screen.
 * 
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {string} [sTitle]
 *      the localized title as plain text (optional)
 * 
 * @methodOf sap.ushell.services.Message#
 * @public
 * 
 */
sap.ushell.services.Message.prototype.error = undefined

/**
 * Shows an info message on the screen.
 * 
 * @param {string} sMessage
 *      the localized message as plain text
 * @param {int} [iDuration=3000]
 *      display duration in ms (optional)
 * 
 * @methodOf sap.ushell.services.Message#
 * @public
 * 
 */
sap.ushell.services.Message.prototype.info = undefined


// ---- sap.ushell.services.NavTargetResolution --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("NavTargetResolution")</code>.
 * Constructs a new instance of the navigation target resolution service.
 * 
 * @class The Unified Shell's internal navigation target resolution service
 * 
 * Methods in this class deal with *internal* representations of the shell hash.
 * 
 * configurations:
 * <code>config : { allowTestUrlComponentConfig  : true }</code>
 * allow to redefine the Test-url, Test-local1, Test-local2 applications via url parameters
 * (sap-ushell-test-local1-url=  / sap-ushell-test-local1-additionalInformation=  ... )
 * 
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @param {oServiceConfiguration} a Service configuration
 * 
 * @public
 * 
 */
sap.ushell.services.NavTargetResolution = function(a) {};
/**
 * expands a URL hash fragment
 * 
 * This function gets the hash part of the URL and expands a sap-intent-param if present
 * and retrievable
 * 
 * This is an asynchronous operation.
 * 
 * @param {string} sHashFragment
 *     The formatted URL hash fragment in internal format(as obtained by the SAPUI5 hasher service,
 *     not as given in <code>location.hash</code>)
 * 
 * @returns {string}
 *     A jQuery.Promise. Its <code>done()</code> function gets an expanded shell hash
 *     (in internal format)
 * 
 * @public
 * 
 */
sap.ushell.services.NavTargetResolution.prototype.expandCompactHash = function(sHashFragment) { return ""; };

/**
 * Tells whether the given navigation intent(s) are supported for the given
 * parameters
 * Supported" means that a valid navigation target is configured for the
 * user for the given device form factor.
 * 
 * This is effectively a test function for {@link toExternal}/ {@link hrefForExternal}.
 * It is functionally equivalent to {@link isIntentSupported} but accepts the same input
 * as {@link toExternal}/ {@link hrefForExternal}.
 * 
 * @param {object[]} aIntents
 *   the intents (such as <code>["#AnObject-action?A=B&c=e"]</code>) to be checked
 * with object beeing instances the oArgs object of toExternal, hrefForExternal etc.
 * 
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "action" },<br/>
 *         params : { A : "B" } }</code>
 *  or
 *  e.g. <code>{ target : { semanticObject : "AnObject", action: "action" },<br/>
 *         params : { A : "B", c : "e" } }</code>
 *  or
 *      <code>{ target : { shellHash : "AnObject-action?A=B&c=e" },
 *      }</code>
 * 
 * @returns {object}
 *   A <code>jQuery.Deferred</code> object's promise which is resolved with an array (!) of
 *   objects representing whether the intent is supported or not
 *   objects with a property <code>supported</code> of type <code>boolean</code>.<br/> representing
 *   Example:
 * 
 * aIntents:
 * an array of parameterized (parsed) Intent objects,
 * in the corresponding structure to arguments to {@link sap.ushell.services.CrossApplicationNavigation.toExternal},
 * {@link sap.ushell.services.CrossApplicationNavigation.hrefForExternal}
 * <pre>
 *  [
 *    {  target : {
 *          semanticObject : "AnObject",
 *          action: "action"
 *       },
 *       params : { P1 : "B", P2 : [ "V2a", "V2b"]  }
 *    },
 *    {  target : {
 *          semanticObject : "SalesOrder",
 *          action: "display"
 *       },
 *       params : { P3 : "B", SalesOrderIds : [ "4711", "472"] }
 *    }
 * ]
 * </pre>
 * 
 * The following formats are also supported as input:
 *  <code>[ "#AnObject-action?P1=B&SalesOrderIds=4711&SalesOrderIds=472" ]
 * to ease migration of existing code
 * 
 * response:
 * <pre>
 * [
 *   { supported: false },
 *   { supported: true }
 * ]
 * </pre>
 * Example usage:
 * <code>
 * this.oCrossAppNav.isNavigationSupported([ ])
 * .done(function(aResponses) {
 *   if (oResponse[0].supported===true){
 *      // enable link
 *   }
 *   else {
 *      // disable link
 *   }
 * })
 * .fail(function() {
 *   // disable link
 *   // request failed or other fatal error
 * });
 * </code>
 * 
 * @since 1.32
 * @public
 * 
 */
sap.ushell.services.NavTargetResolution.prototype.isNavigationSupported = function(aIntents) { return new Object(); };

/**
 * Resolves the URL hash fragment.
 * 
 * This function should be used by a custom renderer in order to
 * implement custom navigation.  Do not use this function for developing
 * Fiori applications.
 * 
 * This function gets the hash part of the URL and returns data of the
 * target application.
 * 
 * Example of the returned data:
 * <pre>
 * {
 *    "additionalInformation": "SAPUI5.Component=sap.ushell.renderers.fiori2.search.container",
 *    "applicationType": "URL",
 *    "url": "/sap/bc/ui5_ui5/ui2/ushell/resources/sap/ushell/renderers/fiori2/search/container",
 *    "navigationMode": "embedded"
 * }
 * </pre>
 * 
 * This is an asynchronous operation.
 * 
 * @param {string} sHashFragment
 *     The formatted URL hash fragment in internal format (as obtained by the SAPUI5 hasher service)
 *     not as given in <code>location.hash</code>)!
 *     example <code>#SemanticObject-action?P1=V1&P2=A%20B%20C</code>
 * 
 * @returns {object}
 *     A jQuery.Promise. Its <code>done()</code> function gets an object that you can use
 *     to create a {@link sap.ushell.components.container.ApplicationContainer}
 *     or <code>undefined</code> in case the hash fragment was empty.
 * 
 *     Typically it contains the following information:
 * <pre>
 * {
 *   "applicationType": "URL",
 *   "url": "/sap/bc/",
 *   "additionalInformation": "SAPUI5.Component=com.sap.AComponent",
 *   "text": "My targetmapping description",
 *   "navigationMode": "embedded"
 * }
 * </pre>
 * 
 * <p>The <code>navigationMode</code> indicates how the target application
 * should be navigated. It is added to the result using the logic
 * in {@link #_getNavigationMode} if none of the resolvers in the chain
 * added it.</p>
 * 
 * <p>No navigation should occur when the promise is resolved to
 * <code>undefined</code>.</p>
 * 
 * @public
 * 
 */
sap.ushell.services.NavTargetResolution.prototype.resolveHashFragment = function(sHashFragment) { return new Object(); };


// ---- sap.ushell.services.Notifications --------------------------------------------------------------------------

/**
 * @class A UShell service for fetching user notification data from the Notification center/service<br>
 * and exposing them to the Unified Shell and Fiori applications UI controls.
 * 
 * In order to get user notifications, Unified Shell notification service issues OData requests<br>
 * to the service defined by the configuration property <code>serviceUrl</code>,<br>
 * for example: "/sap/opu/odata4/iwngw/notification/default/iwngw/notification_srv/0001"<br>.
 * 
 * Unified Shell Notification service has several working modes, depending on the environment and the available resources:<br>
 *  PackagedApp mode: Fiori launchpad runs in the context of PackagedApp<br>
 *  FioriClient mode: Fiori launchpad runs in the context of FioriLaunchpad<br>
 *  WebSocket mode: Fiori launchpad runs in a browser, and WebSocket connection to the notifications provider is available<br>
 *  Polling mode: Fiori launchpad in runs in a browser, and WebSocket connection to the notifications provider is not available<br>
 * 
 * The notification service exposes an API that includes:
 * - Service enabling and initialization<br>
 * - Registration of callback functions (by Shell/FLP controls) that will be called for every data update<br>.
 * - Retrieval of notification data (e.g. notifications, number of unseen notifications)
 * - Execution of a notification actions
 * - Marking user notifications as seen
 * 
 * @param {object} oContainerInterface
 *     The interface provided by the container
 * @param {object} sParameter
 *     Not used in this service
 * @param {object} oServiceProperties
 *     Service configuration
 * 
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications = function(oContainerInterface,sParameter,oServiceProperties) {};
/**
 * Launches dismiss notification call.<br>
 * 
 * @param {object} sNotificationId The ID of the notification whose action is being executed
 * 
 * @since 1.34
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.dismissNotification = function(sNotificationId) {  };

/**
 * Launches a notification action oData call.<br>
 * 
 * After launching the action, the function gets updated notification data in order to push the updated data to the consumers.
 * 
 * @param {object} sNotificationGroupId The ID of the notification header/group whose action is being executed
 * 
 * @param {object} sActionId The ID of the action that is being executed
 * 
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.executeBulkAction = function(sNotificationGroupId,sActionId) {  };

/**
 * Returns the notifications of the user sorted by type include the group headers and the notifications
 * 
 * @returns {promise} Promise object that on success - returns all notification items
 * 
 * @since 1.38
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.getNotificationsByTypeWithGroupHeaders = function() { return null; };

/**
 * Returns the number of  notifications<br>
 * e.g. Notifications for user.
 * 
 * @returns Returns the number of notifications of the user
 * 
 * @since 1.44
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.getNotificationsCount = function() {  };

/**
 * Returns the group headers of the user notifications
 * 
 * @returns {promise} Promise object that on success - returns all group headers
 * 
 * @since 1.44
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.getNotificationsGroupHeaders = function() { return null; };

/**
 * Returns the number of unseen notifications<br>
 * e.g. Notifications that the user hasn't seen yet.
 * 
 * @returns {promise} Promise object that on success - returns the number of unread notifications of the user
 * 
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.getUnseenNotificationsCount = function() { return null; };

/**
 * Initializes the notification service
 * 
 * Initialization is performed only if the following two conditions are fulfilled:<br>
 *  1. Notification service is enabled<br>
 *  2. Notification service hasn't been initialized yet<br>
 * 
 * The main initialization functionality is determining and setting the mode in which notifications are consumed.<br>
 * The possible modes are:<br>
 *  PACKAGED_APP - Notifications are fetched when a callback is called by PackagedApp environment<br>
 *  FIORI_CLIENT - Notifications are fetched when a callback is called by FioriClient environment<br>
 *  WEB_SOCKET - Notifications are fetched on WebSocket "ping"<br>
 *  POLLING - Notifications are fetched using periodic polling mechanism<br>
 * 
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.init = function() {  };

/**
 * Indicates whether notification service is enabled.<br>
 * Enabling is based on the <code>enable</code> service configuration flag.<br>
 * The service configuration must also include serviceUrl attribute.<br>
 * 
 * @returns {boolean} A boolean value indicating whether the notifications service is enabled
 * 
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.isEnabled = function() { return false; };

/**
 * Return whether first request was already performed and data was returned.<br>
 * 
 * @since 1.38
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.isFirstDataLoaded = function() {  };

/**
 * Launches mark as read notification call.<br>
 * 
 * After launching the action, the function gets updated notification data in order to push the updated data to the consumers.
 * 
 * @param {object} sNotificationId The ID of the notification whose action is being executed
 * 
 * @since 1.34
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.markRead = function(sNotificationId) {  };

/**
 * Mark all notifications as seen.<br>
 * the main use-case is when the user navigated to the notification center and sees all the pending notifications.<br>
 * 
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.notificationsSeen = function() {  };

/**
 * Gets a callback function that will be called when updated unseen notifications count is available.
 * 
 * @param {object} The callback function that is registered and called on data update.
 * 
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.registerNotificationCountUpdateCallback = function(The) {  };

/**
 * Gets a callback function that will be called when updated notifications data is available.
 * 
 * @param {object} The callback function that is registered and called on data update.
 * 
 * @since 1.32
 * 
 * @public
 * 
 */
sap.ushell.services.Notifications.prototype.registerNotificationsUpdateCallback = function(The) {  };


// ---- sap.ushell.services.Personalization --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("Personalization")</code>.
 * Constructs a new instance of the personalization service.
 * 
 * @param {object} oAdapter
 *            the service adapter for the personalization service,
 *            as already provided by the container
 * 
 * @class The Unified Shell's personalization service, which provides a
 *        personalizer object that handles all personalization operations.
 * 
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * 
 * @since 1.15.0
 * 
 */
sap.ushell.services.Personalization = function(oAdapter) {};

// ---- sap.ushell.services.Personalization.ContextContainer --------------------------------------------------------------------------

/**
 * To be called by the personalization service getContainer method.
 * 
 * @class The container is the anchor object of the unified shell
 *        personalization in container mode.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer = function() {};
/**
 * Returns an array with all internal  keys of direct items in the container.
 * @returns {array}
 *             item keys
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype._getInternalKeys = function() { return null; };

/**
 * clears the local copy data of this container
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.clear = function() {  };

/**
 * Checks if a specific direct item is contained in the container.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a direct item with the key
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.containsItem = function(sItemKey) { return false; };

/**
 * Deletes a direct item from the container.
 * In case the item does not exist, nothing happens.
 * @param {string} sItemKey
 *            item key
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.delItem = function(sItemKey) {  };

/**
 * flush all pending request;
 * The result of the promise may reflect the last pending operation in the queue
 * @returns {object} promise
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.flush = function() { return new Object(); };

/**
 * Returns an array with the keys of direct items in the container.
 * @returns {array}
 *             item keys
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getItemKeys = function() { return null; };

/**
 * Returns the value for a direct item from the container.
 * (Value semantics, new copy is returned)
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the container does not contain a direct item with this key
 * <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * return the container key as a string variable
 * @returns {string} the container key
 * @public
 * @since 1.28.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getKey = function() { return ""; };

/**
 * Return an instance unmodifiable container instance. There is one instance of this wrapper
 * per container. It will permit all read accesses to the container, but block all
 * modifying accesses.
 * @returns {object}
 *      unmodifiable wrapper instance
 * 
 * @public
 * @since 1.28.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getUnmodifiableContainer = function() { return new Object(); };

/**
 * return the validity of this container
 * @deprecated only for testing!
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.getValidity = function() {  };

/**
 * (Re)loads the current container data from the underlying storage asynchronously.
 * The current local data is discarded.
 * 
 * Returns a promise for the load operation.
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * 
 * Synchronous read and write operations before the load is done have undefined
 * effects.
 * @returns {object}
 *          Promise object
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.load = function() { return new Object(); };

/**
 * Attempts to save the current container data at the underlying storage asynchronously.
 * The current state is serialized.
 * @returns {object}
 *             Promise object
 * 
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.save = function() { return new Object(); };

/**
 * Save the current container data at the underlying storage asynchronously at the earlies
 * nDelayInMilliseconds seconds before.
 * The current state is serialized.
 * @returns {object}
 *             Promise object
 * 
 * The operation may wait for completion of another pending operation.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.saveDeferred = function() { return new Object(); };

/**
 * Sets the value of a direct item in the container.
 * In case the item is already existing its value is overwritten. In case it is not
 * existing a new item with this key and value is created.
 * The value is serialized during set
 * @param {string} sItemKey
 *            item key
 *            The string length is restricted to 40 characters
 * @param {object} sItemValue
 *            item value (JSON object)
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.ContextContainer.prototype.setItemValue = function(sItemKey,sItemValue) {  };


// ---- sap.ushell.services.Personalization.Variant --------------------------------------------------------------------------

/**
 * To be instantiated via Personalization.VariantSet  add / get Variant only
 * 
 * @class The personalization variant contains personalization data.
 *        It is used in the personalization container mode.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.Variant = function() {};
/**
 * Checks if a specific item is contained in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the variant contains an item with the key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.containsItem = function(sItemKey) { return false; };

/**
 * Deletes an item from this variant.
 * In case the item does not exist, nothing happens.
 * @param {string} sItemKey
 *            item key
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.delItem = function(sItemKey) {  };

/**
 * Returns an array with the keys of all items in this variant.
 * @returns {array}
 *            item keys
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.getItemKeys = function() { return null; };

/**
 * Returns the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the variant does not contain an item with this key
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * Returns the key of this variant.
 * @returns {string}
 *             variant key.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.getVariantKey = function() { return ""; };

/**
 * Returns the name of this variant.
 * @returns {string}
 *             variant name.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.getVariantName = function() { return ""; };

/**
 * Sets the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @param {object}
 *            item value (JSON object)
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.setItemValue = function(sItemKey,item) {  };

/**
 * Sets the name of the variant.
 * 
 * In case a variant with <code>sVariantName</code> is already existing in the corresponding variant set an exception is thrown.
 * @param {string} sVariantName
 *          variant name
 * 
 * @public
 * @since 1.24.0
 * 
 */
sap.ushell.services.Personalization.Variant.prototype.setVariantName = function(sVariantName) {  };


// ---- sap.ushell.services.Personalization.VariantSet --------------------------------------------------------------------------

/**
 * A VariantSet is a class representing a collection of
 * Variants (identified by a key and name)
 * and a member variable indicating the
 * "current variable"
 * 
 * When manipulating the underlying data, additional constraints are enforced.
 * 
 * To be called by the personalization container.
 * 
 * @class The personalization variant set contains variants of personalization data.
 *        It is used in the personalization container mode.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet = function() {};
/**
 * Creates a new variant in the variant set.
 * In case a variant with this name is already existing an exception is thrown.
 * @param {string} sVariantSetName
 *            variant set name
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.addVariant = function(sVariantSetName) { return new Object(); };

/**
 * Checks if a specific variant is contained in the variant set.
 * @param {string} sVariantKey
 *            variant key
 * @returns {boolean}
 *            <tt>true</tt> if the variant set contains a variant with the key
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.containsVariant = function(sVariantKey) { return false; };

/**
 * Deletes a variant from the variant set.
 * In case the variant does not exist nothing happens.
 * @param {string} sVariantKey
 *            variant key
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.delVariant = function(sVariantKey) {  };

/**
 * Returns the current variant key.
 * @returns {string}
 *             current variant key. In case the current variant was never set <code>null</code> is returned.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.getCurrentVariantKey = function() { return ""; };

/**
 * Returns a variant object.
 * @param {string} sVariantKey
 *            variant key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}.
 *            In case the variant set does not contain a variant with this key
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.getVariant = function(sVariantKey) { return new Object(); };

/**
 * Returns the variant key corresponding to a variant name.
 * @param {string} sVariantName
 *            variant name
 * @returns {string}
 *            variant key. In case the variant set does not contain a variant with this name
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.getVariantKeyByName = function(sVariantName) { return ""; };

/**
 * Returns an array with the keys of the variants in the variant set.
 * @returns {array}
 *             variant keys
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.getVariantKeys = function() { return null; };

/**
 * Sets the current variant key.
 * @param {string} sVariantKey
 *            There is no validity check for the variant key.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSet.prototype.setCurrentVariantKey = function(sVariantKey) {  };


// ---- sap.ushell.services.Personalization.VariantSetAdapter --------------------------------------------------------------------------

/**
 * VariantSetAdapter
 * amends ContextContainer with functionality to
 * 
 * Example: An application has two types of variants.
 * Variant type 1 contains filter values for a query, which are stored in item 1 of
 * the variant, and personalization data for a table, which are stored in item 2
 * of the variant.
 * Variant type 2 contains a setting (item 3) that is independent of
 * the filtering and the table settings. It might be used for a different
 * screen than the variants of type 1.
 * In this example you would have 2 variant sets, one for each variant type.
 * 
 * @class Wrapper object to expose a variant interface on a
 *        ContextContainer object obtained from the Peronalization service:
 *        <code>
 *        getContainer(...).done( function(oContainer) {
 *           that.oVariantSetContainer = new VariantSetAdapater(oContainer);
 *           });
 *        </code>
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.Personalization.VariantSetAdapter = function() {};
/**
 * Creates a new variant set in the container.
 * In case a variant set with this key is already existing an exception is thrown.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {object}
 *            {@link ontainerVariantSet}
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.addVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * Checks if a specific variant set is contained in the container.
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a variant set with the key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.containsVariantSet = function(sVariantSetKey) { return false; };

/**
 * Deletes a variant set from the container.
 * In case the variant set does not exist nothing happens.
 * @param {string} sVariantSetKey
 *            variant set key
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.delVariantSet = function(sVariantSetKey) {  };

/**
 * Returns the variant set object from the container.
 * @param {string} sVariantSetKey
 *            variant set key
 *            The string length is restricted to 40 characters
 * @returns {object}
 *            {@link ontainerVariantSet}.
 *            In case the container does not contain a variant set with this key
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.22.0
 * 
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.getVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * Returns an array with the keys of the variant sets in the container.
 * @returns {array}
 *             variant set keys
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.Personalization.VariantSetAdapter.prototype.getVariantSetKeys = function() { return null; };


// ---- sap.ushell.services.PersonalizationContainer --------------------------------------------------------------------------

/**
 * To be called by the personalization service getPersonalizationContainer method.
 * 
 * @class The personalization container is the anchor object of the unified shell
 *        personalization in container mode.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer = function() {};
/**
 * Creates a new variant set in the container.
 * In case a variant set with this key is already existing an exception is thrown.
 * 
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariantSet}
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.addVariantSet = function(sVariantSetKey) { return new Object(); };

/**
 * Checks if a specific direct item is contained in the container.
 * 
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a direct item with the key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.containsItem = function(sItemKey) { return false; };

/**
 * Checks if a specific variant set is contained in the container.
 * 
 * @param {string} sVariantSetKey
 *            variant set key
 * @returns {boolean}
 *            <tt>true</tt> if the container contains a variant set with the key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.containsVariantSet = function(sVariantSetKey) { return false; };

/**
 * 
 * Deletes a direct item from the container.
 * In case the item does not exist, nothing happens.
 * 
 * @param {string} sItemKey
 *            item key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.delItem = function(sItemKey) {  };

/**
 * Deletes a variant set from the container.
 * In case the variant set does not exist nothing happens.
 * 
 * @param {string} sVariantSetKey
 *            variant set key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.delVariantSet = function(sVariantSetKey) {  };

/**
 * Returns an array with the keys of direct items in the container.
 * 
 * @returns {array}
 *             item keys
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.getItemKeys = function() { return null; };

/**
 * Returns the value for a direct item from the container.
 * 
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the container does not contain a direct item with this key
 * <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * Returns an array with the keys of the variant sets in the container.
 * 
 * @returns {array}
 *             variant set keys
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.getVariantSetKeys = function() { return null; };

/**
 * 
 * (Re)loads the current container data from the underlying storage asynchronously.
 * The current local data is discarded.
 * 
 * Returns a promise for the load operation.
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * 
 * Synchronous read and write operations before the load is done have undefined
 * effects.
 * 
 * @returns {object}
 *          Promise object
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.load = function() { return new Object(); };

/**
 * Attempts to save the current container data at the underlying storage asynchronously.
 * The current state is serialized.
 * 
 * @returns {object}
 *             Promise object
 * 
 * If another save/load/delete operation is not completed, the  operation may fail!
 * (wait for the other promise).
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.save = function() { return new Object(); };

/**
 * Sets the value of a direct item in the container.
 * In case the item is already existing its value is overwritten. In case it is not
 * existing a new item with this key and value is created.
 * 
 * @param {string} sItemKey
 *            item key
 * @param {object} oItemValue
 *            item value (JSON object)
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainer.prototype.setItemValue = function(sItemKey,oItemValue) {  };


// ---- sap.ushell.services.PersonalizationContainerVariant --------------------------------------------------------------------------

/**
 * To be called by the personalization variant set.
 * 
 * @class The personalization variant contains personalization data.
 *        It is used in the personalization container mode.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant = function() {};
/**
 * Checks if a specific item is contained in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {boolean}
 *            <tt>true</tt> if the variant contains an item with the key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.containsItem = function(sItemKey) { return false; };

/**
 * Deletes an item from this variant.
 * In case the item does not exist, nothing happens.
 * 
 * @param {string} sItemKey
 *            item key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.delItem = function(sItemKey) {  };

/**
 * Returns an array with the keys of all items in this variant.
 * @returns {array}
 *            item keys
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getItemKeys = function() { return null; };

/**
 * Returns the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @returns {object}
 *            item value (JSON object). In case the variant does not contain an item with this key
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getItemValue = function(sItemKey) { return new Object(); };

/**
 * Returns the key of this variant.
 * @returns {string}
 *             variant key.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getVariantKey = function() { return ""; };

/**
 * Returns the name of this variant.
 * @returns {string}
 *             variant name.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.getVariantName = function() { return ""; };

/**
 * Sets the value for an item in this variant.
 * @param {string} sItemKey
 *            item key
 * @param {object}
 *            item value (JSON object)
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariant.prototype.setItemValue = function(sItemKey,item) {  };


// ---- sap.ushell.services.PersonalizationContainerVariantSet --------------------------------------------------------------------------

/**
 * To be called by the personalization container.
 * 
 * @class The personalization variant set contains variants of personalization data.
 *        It is used in the personalization container mode.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet = function() {};
/**
 * Deletes a variant from the variant set.
 * In case the variant does not exist nothing happens.
 * @param {string} sVariantKey
 *            variant key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.delVariant = undefined

/**
 * Checks if a specific variant is contained in the variant set.
 * @param {string} sVariantKey
 *            variant key
 * @returns {boolean}
 *            <tt>true</tt> if the variant set contains a variant with the key
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.containsVariant = function(sVariantKey) { return false; };

/**
 * Returns the current variant key.
 * @returns {string}
 *             current variant key. In case the current variant was never set <code>null</code> is returned.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getCurrentVariantKey = function() { return ""; };

/**
 * Returns a variant object.
 * @param {string} sVariantKey
 *            variant key
 * @returns {object}
 *            {@link sap.ushell.services.PersonalizationContainerVariant}.
 *            In case the variant set does not contain a variant with this key
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getVariant = function(sVariantKey) { return new Object(); };

/**
 * Returns the variant key corresponding to a variant name.
 * @param {string} sVariantName
 *            variant name
 * @returns {object}
 *            variant key. In case the variant set does not contain a variant with this name
 *            <code>undefined</code> is returned.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getVariantKeyByName = function(sVariantName) { return new Object(); };

/**
 * Returns an array with the keys of the variants in the variant set.
 * @returns {array}
 *             variant keys
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.getVariantKeys = function() { return null; };

/**
 * Sets the current variant key.
 * @param {string} sVariantKey
 *            There is no validity check for the variant key.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.PersonalizationContainerVariantSet.prototype.setCurrentVariantKey = function(sVariantKey) {  };


// ---- sap.ushell.services.ShellNavigation --------------------------------------------------------------------------

/**
 * The Unified Shell's internal navigation service (platform independent)
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("ShellNavigation")</code>.
 * Constructs a new instance of the shell navigation service.
 * 
 * Note that the shell instantiation mechanism has to assure exactly one instance is created (!)
 * 
 * 
 * This interface is for consumption by shell renderers/containers only
 * 
 * It is not for direct usage by applications, see
 * 
 * inner app navigation : UI5 interfaces (hashChanger, Router)
 * cross app navigation : @see CrossApplicationNavigation
 * 
 * 
 * Usage:
 * 
 * example: see renders/fiorisandbox/Shell.controller.js
 * 
 * <pre>
 *   sap.ui.define([
 *      "sap/ushell/services/ShellNavigation"
 *   ], function (ShellNavigation) {
 *       Shell.onHashChange(shellHash,appHash) {  / *resolve url, load app and exchange root view* / }
 *       Shell.init() {
 *         this.privShellNavigator = new ShellNavigation();
 *         this.privShellNavigator.init(jQuery.proxy(this.doHashChange, this));
 *       }
 *   });
 * </pre>
 * 
 * Note: further app specific integration via the reference app reuse code
 *  (setting of app specific handler)
 * 
 * 
 * Note: the ShellNavigation service replaces the UI5 core HashChanger which abstracts from the
 * browser url modification.
 * 
 * It performs the following services:
 * - encoding of the actual browser url hash ( via hasher.js).
 * - expansion of "shortened" urls ( AppParameterParts) via invocation.
 * - splitting of shellHash and AppSpecific hash and abstraction w.r.t. Eventing
 * 
 * Thus it is crucial to use appropriate interfaces and not directly invoke
 * window.location.hash.
 * 
 * - internal construction methods for a "current" App specific and non-app specific hash
 * (invoked by CrossApplicationNavigation), not to be invoked directly!
 * 
 * @param {object} oContainerInterface interface
 * @param {string} sParameters parameters
 * @param {object} oServiceConfiguration configuration
 * 
 * @constructor
 * @class
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * 
 * @public
 * 
 */
sap.ushell.services.ShellNavigation = function(oContainerInterface,sParameters,oServiceConfiguration) {};
/**
 * Initializes ShellNavigation
 * 
 * This function should be used by a custom renderer in order to implement custom navigation.
 * Do not use this function for developing Fiori applications.
 * 
 * This method should be invoked by the Shell in order to:
 * - Register the event listener
 * - Register the container callback for the (currently single) ShellHash changes.
 * 
 * Signature of the callback function(
 *         sShellHashPart,  // The hash part on the URL that is resolved and used for application loading
 *         sAppSpecificPart // Typically ignored
 *         sOldShellHashPart, // The old shell hash part, if exist
 *         sOldAppSpecificPart, // The old app hash part, if exist
 * 
 * @param {function} fnShellCallback The callback method for hash changes
 * @returns {object} this
 * @public
 * 
 */
sap.ushell.services.ShellNavigation.prototype.init = function(fnShellCallback) { return new Object(); };


// ---- sap.ushell.services.SmartNavigation --------------------------------------------------------------------------

/**
 * Constructs an instance of SmartNavigation.
 * 
 * <p>
 * The constructed service provides an enhancement on {@link CrossApplicationNavigation#getLinks}
 * and {@link CrossApplicationNavigation#toExternal}. In order for an application
 * to leverage this enhancement, it is pertinent that the application uses
 * {@link SmartNavigation#toExternal} for naviagtion. Hence the caller can
 * subsequently use {@link SmartNavigation#getLinks} with the outcome that
 * it sorts the resulting list in the order of frequency of <i>Attempted</i> navigation
 * from the application to respective links.
 * 
 * <p>
 * <i>Attempted</i> in the previous paragraph is emphasized due to the fact
 * that a click on the link will cause an increment of the frequency count,
 * regardless of wether the navigation was successful or not.
 * 
 * <p>
 * Note that an instance of this service should be obtained with <code>sap.ushell.services.Container#getService( "SmartNavigation" )</code>
 * @see sap.ushell.services.Container#getService
 * @constructor
 * @public
 * @since 1.44.0
 * 
 */
sap.ushell.services.SmartNavigation = function() {};
/**
 * Resolves the given semantic object (or action) and business
 * parameters to a list of links available to the user, sorted
 * according their relevance to the calling application.
 * 
 * The relevance of link is defined by the frequency with which
 * a navigation activity from the calling application to that
 * link occurs.
 * 
 * Internally, this method delegates to {@link sap.ushell.services.CrossApplicationNavigation#getLinks}
 * and then sorts the resulting list accordingly.
 * 
 * @returns {jQuery.Deferred.promise}
 *  A promise that resolves with an array of link objects
 *  sorted according to their relevance to the calling application.
 * 
 * @see sap.ushell.services.CrossApplicationNavigation#getLinks
 * 
 * @since 1.44.0
 * @public
 * @memberof sap.ushell.services.SmartNavigation#
 * 
 */
sap.ushell.services.SmartNavigation.prototype.getLinks = function() { return new jQuery.Deferred.promise(); };

/**
 * Completely delegates to {@link sap.ushell.services.CrossApplicationNavigation#getPrimaryIntent},
 * and either may be used in place of the other with exactly the
 * same outcome.
 * 
 * @see sap.ushell.services.CrossApplicationNavigation#getPrimaryIntent
 * 
 * @since 1.48.0
 * @public
 * @memberof sap.ushell.services.SmartNavigation#
 * 
 */
sap.ushell.services.SmartNavigation.prototype.getPrimaryIntent = function() {  };

/**
 * Completely delegates to {@link sap.ushell.services.CrossApplicationNavigation#hrefFoExternal},
 * and either may be used in place of the other with exactly the
 * same outcome.
 * 
 * @see sap.ushell.services.CrossApplicationNavigation#hrefForExternal
 * 
 * @since 1.46.0
 * @public
 * @memberof sap.ushell.services.SmartNavigation#
 * 
 */
sap.ushell.services.SmartNavigation.prototype.hrefForExternal = function() {  };

/**
 * Usage of this method in place of {@link sap.ushell.services.CrossApplicationNavigation#toExternal}
 * drives the smartness of the results returned by {@link sap.ushell.services.SmartNavigation#getLinks}.
 * 
 * @see sap.ushell.services.CrossApplicationNavigation#toExternal
 * 
 * @since 1.44.0
 * @public
 * @memberof sap.ushell.services.SmartNavigation#
 * 
 */
sap.ushell.services.SmartNavigation.prototype.toExternal = function() {  };

/**
 * Tracks a navigation to a valid intent if provided via arguments but does not perform the navigation itself.
 * If no valid intent was provided tracking will be prevented. The intent has to consist of SemanticObject and Action.
 * It may be passed as complete shellHash (presidence) or as individual parts
 * Additional parameters will not be part of the tracking and ignored
 * This Method can be used to track a click if the actual navigation was triggered via clicking a link on the UI.
 * 
 * 
 * @param {object} oArguments
 *      The navigation target as object, for example:
 * 
 * <code>
 *  {
 *      target: {
 *          shellHash: 'SaleOrder-display'
 *      }
 *  }
 * </code>
 * 
 *  or
 * 
 * <code>
 *  {
 *      target: {
 *          semanticObject: 'SalesOrder',
 *          action: 'action'
 *      }
 *  }
 * 
 *  @returns {object} promise
 *      the new item created for tracking
 * 
 * </code>
 * @since 1.46.0
 * @public
 * @memberof sap.ushell.services.SmartNavigation#
 * 
 */
sap.ushell.services.SmartNavigation.prototype.trackNavigation = function(oArguments) { return new Object(); };


// ---- sap.ushell.services.SupportTicket --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others
 * MUST call <code>sap.ushell.Container.getService("SupportTicket")</code>.
 * Constructs a new instance of the support ticket service.
 * 
 * @param {object}
 *            oAdapter the service adapter for the support ticket service,
 *            as already provided by the container
 * @param {object}
 *            oContainerInterface the interface provided by the container
 * @param {string}
 *            sParameters the runtime configuration specified in the
 *            <code>sap.ushell.Container.getService()</code> call (not
 *            evaluated yet)
 * @param {object}
 *            oServiceConfiguration the service configuration defined in the
 *            bootstrap configuration; the boolean property
 *            <code>enabled</code> controls the service enablement
 * 
 * This service is disabled by default. It can be enabled explicitly in the
 * bootstrap configuration of the start page:
 * <pre>
 * window[&quot;sap-ushell-config&quot;] = {
 *     services: {
 *         SupportTicket: {
 *             config: {
 *                 enabled: true
 *             }
 *         }
 *     }
 * }
 * 
 * Platform implementations can also enable it dynamically by modification of the
 * bootstrap configuration during boot time.
 * 
 * @class The Unified Shell's Support Ticket service
 * 
 * @public
 * @constructor
 * @see sap.ushell.services.Container#getService
 * 
 * @since 1.19.1
 * 
 * 
 */
sap.ushell.services.SupportTicket = function(oAdapter,oContainerInterface,sParameters,oServiceConfiguration) {};
/**
 * Creates a Support Ticket. Forwards the given data (JSON object) to the associated adapter.
 * 
 * @param {JSON} oSupportTicketData JSON object containing the input fields required for the support ticket.
 * @returns {object} promise
 * @public
 * @since 1.20.0
 * 
 */
sap.ushell.services.SupportTicket.prototype.createTicket = function(oSupportTicketData) { return new Object(); };

/**
 * Checks if the service is enabled.
 * <p>
 * The service enablement depends on the configuration in the back-end system and the bootstrap configuration.
 * 
 * @return {boolean} <code>true</code> if the service is enabled; <code>false</code> otherwise
 * 
 * @public
 * @since 1.20.0
 * 
 */
sap.ushell.services.SupportTicket.prototype.isEnabled = function() { return false; };


// ---- sap.ushell.services.TransientPersonalizer --------------------------------------------------------------------------

/**
 * To be called by the personalization service getTransientPersonalizer method.
 * 
 * @class The transient personalizer shall be used
 *        in container mode for table personalization.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.TransientPersonalizer = function() {};
/**
 * Deletes a personalization data value.
 * 
 * @returns {object}
 *          Promise object which returns if the deletion was
 *          successful or erroneous. Promise object done function: no
 *          params. Promise object fail function ins never triggered.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.TransientPersonalizer.prototype.delPersData = function() { return new Object(); };

/**
 * Gets a personalization data value.
 * 
 * @returns {object}
 *          Promise object which provides the personalization
 *          value. Promise object done function: param {object} oValue JSON
 *          object containing the personalization value. If there is no
 *          personalization data for the item, undefined is returned.
 *          Promise object fail function ins never triggered.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.TransientPersonalizer.prototype.getPersData = function() { return new Object(); };

/**
 * Synchronously gets a personalization data value.
 * 
 * @returns {object}
 *            JSON object containing the personalization value.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.TransientPersonalizer.prototype.getValue = function() { return new Object(); };

/**
 * Sets a personalization data value.
 * 
 * @param {object} oValue
 *          JSON object containing the personalization value.
 * @returns {object}
 *          Promise object which returns if the saving was
 *          successful or erroneous. Promise object done function: no
 *          params. Promise fail function ins never triggered.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.TransientPersonalizer.prototype.setPersData = function(oValue) { return new Object(); };

/**
 * Synchronously sets a personalization data value.
 * 
 * @param {object} oValue
 *            JSON object containing the personalization value.
 * 
 * @public
 * @since 1.18.0
 * 
 */
sap.ushell.services.TransientPersonalizer.prototype.setValue = function(oValue) {  };


// ---- sap.ushell.services.URLParsing --------------------------------------------------------------------------

/**
 * The Unified Shell's internal URL parsing service (platform independent)
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("URLParsing")</code>.
 * Constructs a new instance of the URL parsing service.
 * 
 * 
 * Methods in this class allow to break down a shell compliant hash into it's respective parts
 * (SemanticObject,Action,Context, Parameters, appSpecificHash) or (ShellPart,appSpecificHash) respectively
 * or construct a hash from its constituents.
 * 
 * All methods deal with the *internal* shellHash format.
 * 
 * Most of the parse methods are robust w.r.t. a leading "#".
 * 
 * Note: The functions were designed with a "truthy" behaviour for not present values,
 * Thus a client should not rely on the difference between null, "undefined", "" when testing for the
 * result of a parse action.
 * 
 * The parsing functions are deliberately restrictive and fragile,
 * only shell compliant hashes are parsed correctly,
 * behaviour for non-compliant hashes is undefined and subject to change,
 * notably we do not aim do "degrade" nicefully or support partial parsing of corrupted urls.
 * 
 * @constructor
 * @class
 * @see sap.ushell.services.Container#getService
 * @since 1.15.0
 * @public
 * 
 */
sap.ushell.services.URLParsing = function() {};
/**
 * Note: deprecated, please use <code>sap.ui.model.odata.ODataUtils.setOrigin(sServiceUrl, { alias : sSystem });</code>
 * Makes the given server-relative SAP OData service URL point to the system given
 * explicitly as parameter <code>vComponentOrSystem</code>. If this parameter is not provided,
 * it makes the server-relative URL point to the system of the current application.
 * <em>Server-relative URL</em> means a URL starting with exactly one &quot;/&quot; (also known as
 * absolute-path URL). The <em>system of the current application</em> is taken from
 * the parameter &quot;sap-system&quot; of the last navigation target resolution result.
 * <p>
 * If either a multiple-origin parameter <code>;mo/</code> or an origin parameter with qualified system
 * (<code>;o=sid(SYS.123)</code> or <code>o=SYSALIAS</code>) is already present,
 * the <code>sServiceUrl</code> is returned unchanged.
 * <p>
 * The framework invokes this function for SAPUI5 applications that have been built using declarative model
 * instantiation with the application descriptor (data source) mechanism or using an sap.ca framework. For
 * these applications, you do not need to invoke this function explicitly in the application code.
 * If the application does not use any of these mechanisms, but explicitly constructs additional OData models or
 * performs OData requests, the application code shall invoke this function. It shall
 * pass its root component instance as <code>vComponentOrSystem</code> - the function will then determine the system
 * from the navigation start-up parameter &quot;sap-system&quot;
 * (<code>getComponentData().startupParameters[&quot;sap-system&quot;][0]).
 * Applications may call this API with parameter <code>vComponentOrSystem</code> and a non-empty string value
 * if application-specific logic is used to determine the target system for service calls.
 * <p>
 * With service URLs converted using this API, administrators can redirect service
 * calls to servers other than the default SAP Gateway and back-end server
 * either via reverse proxy (e.g. SAP Web Dispatcher) configuration or using the system
 * alias functionality of the SAP Gateway server.
 * <p>
 * The system is added to the last URL segment of the service URL with the segment parameter
 * <code>;o=</code>. You can also make this function put the system to a different
 * URL path segment of the service URL by specifying the empty segment parameter
 * <code>;o=</code>, e.g. <code>/sap/opu/odata/MyService;o=/MyEntities/$count?p1=v1</code>.
 * If both <code>vComponentOrSystem</code> is empty and the current application has
 * no system, no system is added and the empty segment parameter <code>;o</code> is removed.
 * <br/>
 * <b>Example 1:</b> <code>/sap/opu/odata/MyService/?p1=v1</code> is converted to
 * <code>/sap/opu/odata/MyService;o=SYS/?p1=v1</code> if the target system
 * is &quot;SYS&quot;.
 * However it remains unchanged if both the current application's system <em>and</em>
 * the parameter <code>vComponentOrSystem</code> are empty.<br/>
 * <b>Example 2:</b> <code>/sap/opu/odata/MyService;o=/MyEntities/$count?p1=v1</code> is
 * converted to
 * <code>/sap/opu/odata/MyService;o=sid(SYS.123)/MyEntities/$count?p1=v1</code> if
 * parameter <code>vComponentOrSystem</code> is set to &quot;sid(SYS.123)&quot;</code>.
 * <p>
 * The URL is in no way normalized.
 * 
 * @param {string} sServiceUrl
 *   a server-relative URL without system alias information
 * @param {string|sap.ui.core.Component} [vComponentOrSystem]
 *   the root component of the FLP application (
 *   <code>getComponentData().startupParameters[&quot;sap-system&quot;][0]</code> is used as system alias if present)
 *   or a string valued system specification like &quot;SYS&quot; or &quot;sid(SYS.123)&quot;
 *   if undefined or falsy the system of the current application is used
 * @returns {string}
 *   the service URL pointing to the system specified in parameter <code>vComponentOrSystem</code> or
 *   to the system of the current application
 * @public
 * @deprecated please use <code>sap.ui.model.odata.ODataUtils.setOrigin(sServiceUrl, { alias : sSystem });</code>
 * The system alias can be extracted from the Component via <code>getComponentData().startupParameters["sap-system"][0]</code>
 * @since 1.19.1 (passing an SAPUI5 component instance as second parameter is supported since version 1.32.0)
 * @throws Error if the URL is not server-relative (e.g. <code>./something</code>,
 *   <code>http://foo.bar/something</code>, ...)
 * 
 */
sap.ushell.services.URLParsing.prototype.addSystemToServiceUrl = function(sServiceUrl,vComponentOrSystem) { return ""; };

/**
 * compose a shell Hash from it's respective parts
 * Note that it also may append an app specific route !
 * @returns {string}
 *  the hash part of an URL, e.g. <code>"Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH</code>
 *  returns "" for an undefined object
 * 
 * The action must be a valid action, it may not contain "?" or directly a parameter string
 * @param {object} oShellHash
 *   <code>undefined </code> if not a parseable hash
 *   <code> { target : { semanticObject : string,<br/>
 *                       action : string,<br/>
 *                       contextRaw : string<br/>
 *                     },<br/>
 *            params :  MapObject<String,Array[String]>,<br/>
 *            appStateKey : string <br/>
 *            appSpecificRoute : string<br/>
 *          }<br/>
 *    </code>
 *    xor
 *   <code> { target : { shellHash }<br/>
 *          }
 *    </code>
 * 
 * Note: in general it is preferred to add an appStateKey directly to the params object
 * 
 * @since 1.16.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.constructShellHash = function(oShellHash) { return ""; };

/**
 * Extract a hash part from an URL, including an app-specific part
 * @param {String} sURL
 *   any value
 * @returns {String}
 *   <code>extracted string</code> if and only if a hash is present, undefined otherwise
 * @since 1.16.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.getHash = function(sURL) { return null; };

/**
 * Extract the Shell hash# part from an URL
 * The application specific route part is removed
 * @see getHash for a function which retains the app specific route
 * 
 * Shell services shall use this service to extract relevant
 * parts of an URL from an actual URL string (which should be treated as opaque)
 * <p>
 * The URL has to comply with the Fiori-Wave 2 agreed upon format
 * 
 * <p>
 * This service shall be used to extract a hash part from an url.
 * The result can be further broken up by parseShellHash
 * 
 * examples <p>
 * 
 * http://a.b.c?defhij#SemanticObject-Action~Context?PV1=A&PV2=B&/appspecific
 * <br/>
 * returns : "#SemanticObject-Action~Context?PV1=A&PV2=B&/appspecific"
 * 
 * Note: the results when passing an illegal (non-compliant) url are undefined and subject to change
 * w.o. notice. Notably further checks may added.
 * The design is deliberately restrictive and non-robust.
 * 
 * @param {string} sShellHashString
 *     a valid (Shell) url, e.g. <br/>
 *     <code>http://xx.b.c#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH</code>
 * @returns {Object}
 *     the parsed result
 * @since 1.16.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.getShellHash = function(sShellHashString) { return null; };

/**
 * Check if a URL has an intent based navigation part which can be parsed into
 * a semantic object and action part.
 * Accepts only a relative URL (must contain #) or
 * fully qualified Urls for which
 * origin and filename must correspond to the running launchpad.
 * Given actual url
 * <code>
 * http://www.mycorp.com/sap/fiori/FioriLaunchpad.html?sap-language=DE#SO-action?P1=value1
 * </code>, the following parts
 * <code>http://www.mycorp.com/sap/fiori/FioriLaunchpad.html<code> must match.
 * 
 * The actual test is synchronous and *only* tests whether the hash part can be parsed
 * and contains a semantic object and action.
 * It does not test whether the intent or it's parameters is valid for a given user
 * 
 * @param {String} sUrl the URL to test
 *  Note, this url must be in internal format.
 * @returns {Boolean}
 *   true if the conditions are fulfilled.
 * @since 1.30.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.isIntentUrl = function(sUrl) { return null; };

/**
 * combine members of a javascript object into a
 * parameter string,
 * note that parameters are ordered in an arbitrary manner
 * which is subject to change
 * @param {Object} oParams
 *   any value { ABC : [1,"1 2"], DEF : ["4"]}
 * @returns {String}
 *   <code>ABC=1&ABC=1%202DEF=4</code>
 *   Note that the result is *not* prefixed with a "?",
 *   parameter values are encodeURIComponent encoded.
 * @since 1.20.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.paramsToString = function(oParams) { return null; };

/**
 * parse parameters from a URI query string (starting with ?)
 * into a parameter object
 * @param {String} sParams
 *   Parameter string, e.g. <code>?ABC=1&ABC=1%202DEF=4</code>
 * @returns {Object} oParams
 *   any value { ABC : ["1","1 2"], DEF : ["4"]}
 * @since 1.20.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.parseParameters = function(sParams) { return null; };

/**
 * Decompose a shell hash into the respective parts
 * @param {String} sHash
 *  Hash part of a shell compliant URL
 *  <code>#SO-Action~Context?P1=a&P2=x&/route?RPV=1</code>
 *  the hash part of an URL, <br/> e.g. <code>"#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH</code>
 * 
 *  Note that params always has an Array for each parameter value!
 * 
 * @returns {object}
 *   <code>undefined </code> if not a parseable hash <br/>
 *   <code> { semanticObject : string, <br/>
 *            action : string, <br/>
 *            contextRaw : string, <br/>
 *            params :  MapObject<String,Array[String]>, <br/>
 *            appSpecificRoute : string <br/>
 *          }
 *  </code>
 * 
 * @since 1.16.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.parseShellHash = function(sHash) { return new Object(); };

/**
 * split a Unified Shell compliant hash into an Object containing a shell specific part and an app specific parts</br>
 * for non compliant hash strings, the empty object {} is returned.
 * an optional leading # is stripped
 * @param {String} sHash
 *  Hash part of a shell conformant URL
 *  {code}#SO-Action~Context?P1=a&P2=x&/route?RPV=1{code}
 *  the hash part of an URL, e.g. {code}"#Object-name~AFE2==?PV1=PV2&PV4=V5&/display/detail/7?UU=HH{code}
 * 
 *  Note that params always has an Array for each parameter value!
 * 
 * @returns {object}
 *   <code>{}</code>(empty object) if not a parseable hash
 *   <code>{ shellPart : "Object-name~AFE2==?PV1=PV2&PV4=V5",<br/>
 *            appSpecificRoute : "display/detail/7?UU=HH"<br/>
 *         }</br>
 *    </code> otherwise
 * 
 * @since 1.16.0
 * @public
 * 
 */
sap.ushell.services.URLParsing.prototype.splitHash = function(sHash) { return new Object(); };


// ---- sap.ushell.services.UsageAnalytics --------------------------------------------------------------------------

/**
 * The UsageAnalytics service exposes API for logging custom events and setting custom field values in the logged events.<br>
 * The data is sent via http and recorded on a server, whose URL is defined by the <code>baseUrl</code> service configuration property.<br>
 * The service configuration must also include the site ID from the <code>pubToken</code> attribute.<br>
 * You can find the pubToken in the code snippet provided in the WARP when creating a new site.
 * 
 * Each tracked event is represented by a table entry on the server database.<br>
 * The administrator can produce reports based on the the recorded data.
 * 
 * Two types of events can be logged:<br>
 * - Automatic events: Click or pageLoad are predefined events, logged by the base tracking library.<br>
 *  You can disable these events in the service configuration.<br>
 * - Custom events: You can use the service API to log an event with custom data using the function logCustomEvent<br>
 * 
 * Each tracked event (either automatic or custom) is represented by a database row, that includes 10 custom attributes named custom1...custom10.<br>
 *  Some of these values can be set using UsageAnalytics service API.<br>
 * 
 * @class A UShell service for tracking business flows and user actions.
 * 
 * @param {object} oContainerInterface
 *     The interface provided by the container
 * @param {object} sParameter
 *     Not used in this service
 * @param {object} oServiceProperties
 *     Service configuration
 * 
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.UsageAnalytics = function(oContainerInterface,sParameter,oServiceProperties) {};
/**
 * Sets up to 6 customer attributes of logged events according to the given object attributes.<br>
 * A customer attribute can be set only once during a session.<br>
 * Currently these attributes correspond to database columns custom5...custom10.
 * 
 * @param {object} oCustomFieldValues An json object that includes attribute1...attribute6 (or subset)<br>
 *  with values of type string/number/boolean or a function that returns any of these types.<br>
 *  For example:<br>
 *  {<br>
 *   attribute1: "value3",<br>
 *   attribute2: function () {return "value4"},<br>
 *   attribute3: 55<br>
 *  }<br>
 *  in this example the custom field "custom5" gets the string "value3"<br>
 *  the custom field custom6 gets the function that returns the string "value4",<br>
 *  the custom field custom7 gets a string "55".<br>
 *  Any property of oCustomFieldValues which is not in the range of attribute1...attribute6 is ignored.
 * 
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.UsageAnalytics.prototype.setCustomAttributes = function(oCustomFieldValues) {  };

/**
 * Enables the renderer to set the content of the legal message..
 * 
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.UsageAnalytics.prototype.setLegalText = function() {  };

/**
 * Indicates whether the service is available.<br><br>
 * Returns <code>true</code> if the following conditions exist, and <code>false</code> otherwise:<br>
 * a) Service configuration property <code>enable</code> is set to <code>true</code><br>
 * b) Service configuration property <code>pubToken</code> is not empty<br>
 * c) Agreement text exists or <code>setUsageAnalyticsPermitted</code> is set to <code>false</code><br>
 * @returns {boolean} A boolean value indicating whether the UsageAnalytics service is enabled
 * 
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.UsageAnalytics.prototype.systemEnabled = function() { return false; };

/**
 * Indicates whether the user has specified to track activities.<br><br>
 * Returns <code>true</code> if the following conditions exist, and <code>false</code> otherwise:<br>
 * a) The function <code>system enabled</code> returns <code>true</code><br>
 * b) The user property <code>trackUsageAnalytics</code> is set to <code>true</code><br>
 * @returns {boolean} A boolean value indicating whether the user has specified to track activities
 * 
 * @since 1.32.0
 * 
 * @public
 * 
 */
sap.ushell.services.UsageAnalytics.prototype.userEnabled = function() { return false; };


// ---- sap.ushell.services.UserInfo --------------------------------------------------------------------------

/**
 * This method MUST be called by the Unified Shell's container only, others MUST call
 * <code>sap.ushell.Container.getService("UserInfo")</code>.
 * Constructs a new instance of the user information service.
 * 
 * @class The Unified Shell's user information service, which allows you to retrieve
 *     information about the logged-in user.
 * 
 * @constructor
 * @see sap.ushell.services.Container#getService
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ushell.services.UserInfo = function() {};
/**
 * Returns the id of the user.
 * 
 * @returns {string}
 *   The user id.
 * 
 * @since 1.16.3
 * 
 * @public
 * 
 */
sap.ushell.services.UserInfo.prototype.getId = function() { return ""; };


// ---- sap.ushell.ui.appfinder.AppBox --------------------------------------------------------------------------

/**
 * Constructor for a new ui/appfinder/AppBox.
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
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getUrl url} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPinButton pinButton} : sap.m.Button</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * Add your documentation for the newui/appfinder/AppBox
 * @extends sap.ui.core.Control
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ushell.ui.appfinder.AppBox = function(sId,mSettings) {};
/**
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.afterRendering = function(oControlEvent) {  };

/**
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:afterRendering afterRendering} event of this <code>sap.ushell.ui.appfinder.AppBox</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ushell.ui.appfinder.AppBox</code> itself.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.appfinder.AppBox</code> itself
 * 
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.attachAfterRendering = function(oData,fnFunction,oListener) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ushell.ui.appfinder.AppBox</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ushell.ui.appfinder.AppBox</code> itself.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.appfinder.AppBox</code> itself
 * 
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Destroys the pinButton in the aggregation {@link #getPinButton pinButton}.
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.destroyPinButton = function() { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:afterRendering afterRendering} event of this <code>sap.ushell.ui.appfinder.AppBox</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.detachAfterRendering = function(fnFunction,oListener) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ushell.ui.appfinder.AppBox</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.detachPress = function(fnFunction,oListener) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Creates a new subclass of class sap.ushell.ui.appfinder.AppBox with name <code>sClassName</code>
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
sap.ushell.ui.appfinder.AppBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:afterRendering afterRendering} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.fireAfterRendering = function(mParameters) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.firePress = function(mParameters) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * @returns {string} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.getIcon = function() { return ""; };

/**
 * Returns a metadata object for class sap.ushell.ui.appfinder.AppBox.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.ui.appfinder.AppBox.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getPinButton pinButton}.
 * 
 * @returns {sap.m.Button}
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.getPinButton = function() { return new sap.m.Button(); };

/**
 * Gets current value of property {@link #getSubtitle subtitle}.
 * 
 * @returns {string} Value of property <code>subtitle</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.getSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getUrl url}.
 * 
 * @returns {string} Value of property <code>url</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.getUrl = function() { return ""; };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sIcon New value for property <code>icon</code>
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.setIcon = function(sIcon) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Sets the aggregated {@link #getPinButton pinButton}.
 * @param {sap.m.Button} oPinButton The pinButton to set
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.setPinButton = function(oPinButton) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Sets a new value for property {@link #getSubtitle subtitle}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSubtitle New value for property <code>subtitle</code>
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.setSubtitle = function(sSubtitle) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.setTitle = function(sTitle) { return new sap.ushell.ui.appfinder.AppBox(); };

/**
 * Sets a new value for property {@link #getUrl url}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sUrl New value for property <code>url</code>
 * @returns {sap.ushell.ui.appfinder.AppBox} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.appfinder.AppBox.prototype.setUrl = function(sUrl) { return new sap.ushell.ui.appfinder.AppBox(); };


// ---- sap.ushell.ui.footerbar.AddBookmarkButton --------------------------------------------------------------------------

/**
 * Constructor for a new ui/footerbar/AddBookmarkButton.
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
 * <li>{@link #getBeforePressHandler beforePressHandler} : any</li>
 * <li>{@link #getAfterPressHandler afterPressHandler} : any</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getTileIcon tileIcon} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getKeywords keywords} : string</li>
 * <li>{@link #getCustomUrl customUrl} : any</li>
 * <li>{@link #getServiceUrl serviceUrl} : any</li>
 * <li>{@link #getServiceRefreshInterval serviceRefreshInterval} : string</li>
 * <li>{@link #getShowGroupSelection showGroupSelection} : boolean (default: true)</li>
 * <li>{@link #getAppData appData} : object</li>
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
 * A button to be displayed in the application footer. Clicking the button opens a dialog box allowing the user to save the app state, so that the app can be launched in this state directly from the launchpad.
 * @extends sap.m.Button
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ushell.ui.footerbar.AddBookmarkButton with name <code>sClassName</code>
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
sap.ushell.ui.footerbar.AddBookmarkButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getAfterPressHandler afterPressHandler}.
 * 
 * A callback function to be called after the press handler called upon clicking the button.
 * 
 * @returns {any} Value of property <code>afterPressHandler</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getAfterPressHandler = function() { return null; };

/**
 * Gets current value of property {@link #getAppData appData}.
 * 
 * Deprecated – an object containing application information properties.
 * 
 * @returns {object} Value of property <code>appData</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getAppData = function() { return new Object(); };

/**
 * Gets current value of property {@link #getBeforePressHandler beforePressHandler}.
 * 
 * A callback function to be called prior to the press handler upon clicking the button.
 * 
 * @returns {any} Value of property <code>beforePressHandler</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getBeforePressHandler = function() { return null; };

/**
 * Gets current value of property {@link #getCustomUrl customUrl}.
 * 
 * A customized target URL for the tile.
 * 
 * @returns {any} Value of property <code>customUrl</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getCustomUrl = function() { return null; };

/**
 * Gets current value of property {@link #getInfo info}.
 * 
 * Text to be displayed at the bottom of the tile.
 * 
 * @returns {string} Value of property <code>info</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getInfo = function() { return ""; };

/**
 * Gets current value of property {@link #getKeywords keywords}.
 * 
 * The keywords based on which the future tile should be indexed and filtered.
 * 
 * @returns {string} Value of property <code>keywords</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getKeywords = function() { return ""; };

/**
 * Returns a metadata object for class sap.ushell.ui.footerbar.AddBookmarkButton.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getNumberUnit numberUnit}.
 * 
 * For dynamic tile, the unit to be displayed below the number, for example, USD.
 * 
 * @returns {string} Value of property <code>numberUnit</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getNumberUnit = function() { return ""; };

/**
 * Gets current value of property {@link #getServiceRefreshInterval serviceRefreshInterval}.
 * 
 * Number of seconds after which dynamic content is read from the data source and the display is refreshed.
 * 
 * @returns {string} Value of property <code>serviceRefreshInterval</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getServiceRefreshInterval = function() { return ""; };

/**
 * Gets current value of property {@link #getServiceUrl serviceUrl}.
 * 
 * URL of an OData service from which data should be read.
 * 
 * @returns {any} Value of property <code>serviceUrl</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getServiceUrl = function() { return null; };

/**
 * Gets current value of property {@link #getShowGroupSelection showGroupSelection}.
 * 
 * Defines whether to display the group selection control within the Save as Tile dialog box.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showGroupSelection</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getShowGroupSelection = function() { return false; };

/**
 * Gets current value of property {@link #getSubtitle subtitle}.
 * 
 * Subtitle to be displayed below the tile title.
 * 
 * @returns {string} Value of property <code>subtitle</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getSubtitle = function() { return ""; };

/**
 * Gets current value of property {@link #getTileIcon tileIcon}.
 * 
 * Icon to be desplied in the Tile.
 * 
 * @returns {string} Value of property <code>tileIcon</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getTileIcon = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * Title to be displayed on the tile.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.getTitle = function() { return ""; };

/**
 * Sets a new value for property {@link #getAfterPressHandler afterPressHandler}.
 * 
 * A callback function to be called after the press handler called upon clicking the button.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oAfterPressHandler New value for property <code>afterPressHandler</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setAfterPressHandler = function(oAfterPressHandler) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getAppData appData}.
 * 
 * Deprecated – an object containing application information properties.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {object} oAppData New value for property <code>appData</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setAppData = function(oAppData) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getBeforePressHandler beforePressHandler}.
 * 
 * A callback function to be called prior to the press handler upon clicking the button.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oBeforePressHandler New value for property <code>beforePressHandler</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setBeforePressHandler = function(oBeforePressHandler) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getCustomUrl customUrl}.
 * 
 * A customized target URL for the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oCustomUrl New value for property <code>customUrl</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setCustomUrl = function(oCustomUrl) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getInfo info}.
 * 
 * Text to be displayed at the bottom of the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sInfo New value for property <code>info</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setInfo = function(sInfo) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getKeywords keywords}.
 * 
 * The keywords based on which the future tile should be indexed and filtered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sKeywords New value for property <code>keywords</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setKeywords = function(sKeywords) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getNumberUnit numberUnit}.
 * 
 * For dynamic tile, the unit to be displayed below the number, for example, USD.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sNumberUnit New value for property <code>numberUnit</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setNumberUnit = function(sNumberUnit) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getServiceRefreshInterval serviceRefreshInterval}.
 * 
 * Number of seconds after which dynamic content is read from the data source and the display is refreshed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sServiceRefreshInterval New value for property <code>serviceRefreshInterval</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setServiceRefreshInterval = function(sServiceRefreshInterval) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getServiceUrl serviceUrl}.
 * 
 * URL of an OData service from which data should be read.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oServiceUrl New value for property <code>serviceUrl</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setServiceUrl = function(oServiceUrl) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getShowGroupSelection showGroupSelection}.
 * 
 * Defines whether to display the group selection control within the Save as Tile dialog box.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowGroupSelection New value for property <code>showGroupSelection</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setShowGroupSelection = function(bShowGroupSelection) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getSubtitle subtitle}.
 * 
 * Subtitle to be displayed below the tile title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSubtitle New value for property <code>subtitle</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setSubtitle = function(sSubtitle) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getTileIcon tileIcon}.
 * 
 * Icon to be desplied in the Tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTileIcon New value for property <code>tileIcon</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setTileIcon = function(sTileIcon) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * Title to be displayed on the tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ushell.ui.footerbar.AddBookmarkButton} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.footerbar.AddBookmarkButton.prototype.setTitle = function(sTitle) { return new sap.ushell.ui.footerbar.AddBookmarkButton(); };


// ---- sap.ushell.ui.shell.ToolAreaItem --------------------------------------------------------------------------

/**
 * Constructor for a new ToolAreaItem.
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
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getAriaLabel ariaLabel} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:expand expand} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
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
 * A control to be placed in the tool area
 * @extends sap.ui.core.Control
 * 
 * @version ${version}
 * 
 * @constructor
 * @public
 * @since 1.30.5
 * 
 */
sap.ushell.ui.shell.ToolAreaItem = function(sId,mSettings) {};
/**
 * Event is fired when the user presses the Expand icon.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.expand = function(oControlEvent) {  };

/**
 * Event is fired when the user presses the item.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:expand expand} event of this <code>sap.ushell.ui.shell.ToolAreaItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ushell.ui.shell.ToolAreaItem</code> itself.
 * 
 * Event is fired when the user presses the Expand icon.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.shell.ToolAreaItem</code> itself
 * 
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.attachExpand = function(oData,fnFunction,oListener) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ushell.ui.shell.ToolAreaItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ushell.ui.shell.ToolAreaItem</code> itself.
 * 
 * Event is fired when the user presses the item.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ushell.ui.shell.ToolAreaItem</code> itself
 * 
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:expand expand} event of this <code>sap.ushell.ui.shell.ToolAreaItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.detachExpand = function(fnFunction,oListener) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ushell.ui.shell.ToolAreaItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Creates a new subclass of class sap.ushell.ui.shell.ToolAreaItem with name <code>sClassName</code>
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
sap.ushell.ui.shell.ToolAreaItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:expand expand} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.fireExpand = function(mParameters) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.firePress = function(mParameters) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Gets current value of property {@link #getAriaLabel ariaLabel}.
 * 
 * Text  which will be read by screenreader.
 * 
 * @returns {string} Value of property <code>ariaLabel</code>
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.getAriaLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getExpandable expandable}.
 * 
 * Defines whether the control will have an expand functionality containing sub-items or actions.
 * If the property is set to true, a small "expand" icon appears in the lower corner of the control.
 * The "expand" event is fired when the "expand" icon is pressed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>expandable</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.getExpandable = function() { return false; };

/**
 * Gets current value of property {@link #getIcon icon}.
 * 
 * Icon that is displayed in the item.
 * 
 * @returns {sap.ui.core.URI} Value of property <code>icon</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Returns a metadata object for class sap.ushell.ui.shell.ToolAreaItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSelected selected}.
 * 
 * Defines whether to mark the control as selected
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>selected</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property {@link #getText text}.
 * 
 * @returns {string} Value of property <code>text</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.getText = function() { return ""; };

/**
 * Gets current value of property {@link #getVisible visible}.
 * 
 * Defines whether to display the control
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.getVisible = function() { return false; };

/**
 * Sets a new value for property {@link #getAriaLabel ariaLabel}.
 * 
 * Text  which will be read by screenreader.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sAriaLabel New value for property <code>ariaLabel</code>
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.setAriaLabel = function(sAriaLabel) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Sets a new value for property {@link #getExpandable expandable}.
 * 
 * Defines whether the control will have an expand functionality containing sub-items or actions.
 * If the property is set to true, a small "expand" icon appears in the lower corner of the control.
 * The "expand" event is fired when the "expand" icon is pressed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandable New value for property <code>expandable</code>
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.setExpandable = function(bExpandable) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Sets a new value for property {@link #getIcon icon}.
 * 
 * Icon that is displayed in the item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.URI} sIcon New value for property <code>icon</code>
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.setIcon = function(sIcon) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Sets a new value for property {@link #getSelected selected}.
 * 
 * Defines whether to mark the control as selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.setSelected = function(bSelected) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Sets a new value for property {@link #getText text}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.setText = function(sText) { return new sap.ushell.ui.shell.ToolAreaItem(); };

/**
 * Sets a new value for property {@link #getVisible visible}.
 * 
 * Defines whether to display the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ushell.ui.shell.ToolAreaItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.ushell.ui.shell.ToolAreaItem.prototype.setVisible = function(bVisible) { return new sap.ushell.ui.shell.ToolAreaItem(); };


// ---- sap.ushell.ui5service.ShellUIService --------------------------------------------------------------------------

/**
 * Returns an instance of the ShellUIService. This constructor must only be
 * called internally by the Fiori Launchpad renderer and never by
 * applications.
 * 
 * Instead, this service should be consumed by app components as described
 * in the overview section of this class.
 * @class
 * 
 * @classdesc The Unified Shell's ShellUIService service.
 * 
 * This service allows apps to interact with the Fiori Launchpad UI.
 * The service is injected in the app components by the FLP renderer
 * before the corresponding apps start. To consume the service,
 * app components should declare it in their manifest.json as follows:
 * 
 * <pre>
 * {
 *    ...
 *    "sap.ui5": {
 *       "services" : {
 *          "ShellUIService": {
 *              "factoryName": "sap.ushell.ui5service.ShellUIService"
 *          }
 *       }
 *    }
 *    ...
 * }
 * </pre>
 * 
 * The service can be then retrieved and consumed from the app root component
 * as in the following example:
 * <pre>
 * // Component.js (the app root component)
 * ...
 * this.getService("ShellUIService").then( // promise is returned
 *    function (oService) {
 *       oService.setTitle("Application Title");
 *    },
 *    function (oError) {
 *       jQuery.sap.log.error("Cannot get ShellUIService", oError, "my.app.Component");
 *    }
 * );
 * ...
 * </pre>
 * 
 * The ShellUIService can work together with the routing defined in a UI5
 * app to set title and hierarchy automatically, as the navigation within
 * the app occurs. This can be achieved by enabling the ShellUIService to
 * load instantly and configuring one or both <code>setTitle</code> and
 * <code>setHierarchy</code> options to
 * <code>auto</code> in the app manifest, as shown in the example below:
 * 
 * <pre>
 * {
 *    "sap.ui5": {
 *       "services" : {
 *          "ShellUIService": {
 *              "lazy": false,
 *              "factoryName": "sap.ushell.ui5service.ShellUIService",
 *              "settings": {
 *                  "setHierarchy": "auto", // configuration under discussion currently
 *                  "setTitle": "auto" // configuration under discussion currently
 *              }
 *          }
 *       }
 *    }
 * }
 * </pre>
 * 
 * Please note that the <code>setHierarchy</code> or <code>setTitle</code>
 * methods should not be actively called by the application when title and
 * hierarchy are set automatically.
 * 
 * @param {object} oCallerContext
 *   The context in which the service was instantiated. Must have the
 *   format:
 * <pre>
 * {
 *   scopeType: "component",
 *   scopeObject: [a UI5 Component in the sap.ushell package]
 * }
 * </pre>
 * 
 * @public
 * @since 1.38.0
 * 
 */
sap.ushell.ui5service.ShellUIService = function(oCallerContext) {};
/**
 * Creates a new subclass of class sap.ushell.ui5service.ShellUIService with name <code>sClassName</code>
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
sap.ushell.ui5service.ShellUIService.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ushell.ui5service.ShellUIService.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.ui5service.ShellUIService.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the title that was last set via {@link setTitle}.
 * 
 * @returns {string}
 *    The title that was last set via {@link setTitle}.
 * 
 * @since 1.38.0
 * @public
 * 
 */
sap.ushell.ui5service.ShellUIService.prototype.getTitle = function() { return ""; };

/**
 * Displays the given hierarchy in the shell header.
 * 
 * @param {object[]} [aHierarchyLevels]
 *    An array representing hierarchies of the currently displayed
 *    app.  The array should specify title, icon, and
 *    navigation intent as shown in the following example:
 * 
 * <pre>
 * [
 *     {
 *         title: "Main View",
 *         icon: "sap-icon://documents",
 *         intent: "#Action-sameApp"
 *     },
 *     {
 *         title: "View 2",
 *         subtitle: "Application view number 2",
 *         intent: "#Action-sameApp&/View2/"
 *     },
 *     {
 *         title: "View 3",
 *         subtitle: "Application view number 3",
 *         intent: "#Action-sameApp&/View3/"
 *     }
 * ]
 * </pre>
 * 
 * The default app hierarchy is applied if no parameter is given.
 * 
 * @since 1.38.0
 * @public
 * 
 */
sap.ushell.ui5service.ShellUIService.prototype.setHierarchy = function(aHierarchyLevels) {  };

/**
 * Used by apps to set related apps.  This setting is propagated
 * towards the Shell Header via corresponding events.
 * 
 * @param {object[]} [aRelatedApps]
 *    an array of related apps, for example like:
 * 
 * <pre>
 * [
 *       {
 *           title: "App 1",
 *           icon: "sap-icon://folder",
 *           subtitle: "go to app 1",
 *           intent: "#Action-toapp1"
 *       },
 *       {
 *           title: "App 2",
 *           icon: "sap-icon://folder",
 *           subtitle: "go to app 2",
 *           intent: "#Action-toapp2"
 *       },
 *       {
 *           title: "App 3",
 *           icon: "sap-icon://folder",
 *           subtitle: "go to app 3",
 *           intent: "#Action-toapp3"
 *       }
 * ]
 * </pre>
 * 
 * @since 1.40.0
 * @public
 * 
 */
sap.ushell.ui5service.ShellUIService.prototype.setRelatedApps = function(aRelatedApps) {  };

/**
 * Displays the given title in the shell header. This method should not
 * be called if the app calling the method is not currently displayed
 * in the Fiori Launchpad.
 * 
 * @param {string} [sTitle]
 *    The new title. The default title is set if this argument is not given.
 * 
 * @since 1.38.0
 * @public
 * 
 */
sap.ushell.ui5service.ShellUIService.prototype.setTitle = function(sTitle) {  };


// ---- sap.ushell.ui5service.UserStatus --------------------------------------------------------------------------

/**
 * Returns an instance of the UserStatus. This constructor must only be
 * called internally by the Fiori Launchpad renderer and never by
 * applications.
 * 
 * Instead, this service should be consumed by app components as described
 * in the overview section of this class.
 * @class
 * 
 * @classdesc The Unified Shell's UserStatus service.
 * 
 * This service allows apps to interact with the Fiori Launchpad UI.
 * The service is injected in the app components by the FLP renderer
 * before the corresponding apps start. To consume the service,
 * app components should declare it in their manifest.json as follows:
 * 
 * <pre>
 * {
 *    ...
 *    "sap.ui5": {
 *       "UserStatus": {
 *           "factoryName": "sap.ushell.ui5service.UserStatus"
 *       }
 *    }
 *    ...
 * }
 * </pre>
 * 
 * The service can be then consumed within the component as shown in the
 * following example:
 * <pre>
 * // Component.js
 * ...
 * this.getService("UserStatus").then( // promise is returned
 *    function (oService) {
 *       oService.setTitle("Application Title");
 *    },
 *    function (oError) {
 *       jQuery.sap.log.error("Cannot get UserStatus", oError, "my.app.Component");
 *    }
 * );
 * ...
 * </pre>
 * 
 * @param {object} oCallerContext
 *   The context in which the service was instantiated. Must have the
 *   format:
 * <pre>
 * {
 *   scopeType: "component",
 *   scopeObject: [a UI5 Component in the sap.ushell package]
 * }
 * </pre>
 * 
 * @public
 * @since 1.38.0
 * 
 */
sap.ushell.ui5service.UserStatus = function(oCallerContext) {};
/**
 * Attaches an event handler fnFunction to be called upon the 'statusChanged' event.
 * Event is fired when the setStatus method is called.
 * 
 * @param {function} [fnFunction]
 *  The function to be called when the event occurs.
 * @since 1.46
 * 
 * @public
 * 
 */
sap.ushell.ui5service.UserStatus.prototype.attachStatusChanged = function(fnFunction) {  };

/**
 * Detaches an event handler from the 'statusChanged' event.
 * 
 * @param  {function} fnFunction
 *     Event handler to be detached.
 * 
 * @since 1.46
 * @public
 * 
 */
sap.ushell.ui5service.UserStatus.prototype.detachStatusChanged = function(fnFunction) {  };

/**
 * Creates a new subclass of class sap.ushell.ui5service.UserStatus with name <code>sClassName</code>
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
sap.ushell.ui5service.UserStatus.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ushell.ui5service.UserStatus.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ushell.ui5service.UserStatus.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Enable the User Status service (online status)
 * 
 * If the user has never agreed to share their online status, then the method will show the opt-in screen to the user.
 * If the user already agreed to share their online status, the setStatus method will be called with the default online status that was set by the user.
 * If the user already declined to share their online status, the setStatus method will be called with a null value.
 * 
 * @param {variant} bEnable
 *   boolean.
 * 
 * @since 1.46
 * 
 * @public
 * 
 */
sap.ushell.ui5service.UserStatus.prototype.setEnabled = function(bEnable) {  };

/**
 * Publish the user status.
 * This method is used to publish the status to other components.
 * 
 * The publication of the status by firing the 'statusChanged' event will happen when all the following apply:
 * 1) the User Status service is enabled
 * 2) the status is null or exists in the list of available statuses (sap.ushell.ui5service.UserStatus.prototype.AvailableStatus)
 * 3) the user has agreed to share their online status
 * 
 * @param {variant} oNewStatus
 *   sap.ushell.ui5service.UserStatus.prototype.AvailableStatus
 * 
 * @since 1.46
 * @public
 * 
 */
sap.ushell.ui5service.UserStatus.prototype.setStatus = function(oNewStatus) {  };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ushell --------------------------------------------------------------------------

/**
 * The Unified Shell container as a singleton object. This object will only be
 * available after <code>sap.ushell.bootstrap()</code> has finished.
 * 
 * @since 1.15.0
 * @type sap.ushell.services.Container
 * @see sap.ushell.bootstrap
 * @public
 * 
 * @memberof sap.ushell
 */
sap.ushell.Container = new sap.ushell.services.Container();


// ---- sap.ushell.Container.DirtyState --------------------------------------------------------------------------

/**
 * The embedded application is clean, there is no unsaved data.
 * 
 * @public
 * @constant
 * @default "CLEAN"
 * @since 1.21.1
 * @type string
 * 
 * @memberof sap.ushell.Container.DirtyState
 */
sap.ushell.Container.DirtyState.CLEAN = "";

/**
 * The embedded application is dirty, the user has entered data
 * that is not yet saved.
 * 
 * @public
 * @constant
 * @default "DIRTY"
 * @since 1.21.1
 * @type string
 * 
 * @memberof sap.ushell.Container.DirtyState
 */
sap.ushell.Container.DirtyState.DIRTY = "";

/**
 * The embedded application container's dirty state cannot be determined because
 * of technical reasons.
 * 
 * @public
 * @constant
 * @default "MAYBE_DIRTY"
 * @since 1.21.1
 * @type string
 * 
 * @memberof sap.ushell.Container.DirtyState
 */
sap.ushell.Container.DirtyState.MAYBE_DIRTY = "";

