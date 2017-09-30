
// ---- sap.ca.ui --------------------------------------------------------------------------


// ---- sap.ca.ui.AddPicture --------------------------------------------------------------------------

/**
 * Constructor for a new AddPicture.
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
 * <li>{@link #getButtonPageType buttonPageType} : string (default: 'Tab')</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getMaxPictureNumber maxPictureNumber} : int (default: 10)</li>
 * <li>{@link #getUploadUrl uploadUrl} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getPictureAlign pictureAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Left)</li>
 * <li>{@link #getItemSize itemSize} : int (default: 64)</li>
 * <li>{@link #getCompression compression} : string (default: 'low')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPictures pictures} : sap.ca.ui.PictureItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.AddPicture#event:show show} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:pictureAdded pictureAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:maxPictureLimitReached maxPictureLimitReached} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:imageUploadFailed imageUploadFailed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.AddPicture#event:fileNotSupported fileNotSupported} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Enables users to add pictures into a form. Contains PictureItem controls that describe the media.
 * It is designed to be used simultaneously with the PictureViewer control
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.26. 
 * As per central UX requirements, this control is replaced by sap.m.UploadCollection. Please use the new control if you start developing an application instead of using this AddPicture control.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.AddPicture = function(sId,mSettings) {};
/**
 * Image upload failed, only supports image format files
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {any} oControlEvent.getParameters.fileNames An array containing the file names that are not supported
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.fileNotSupported = function(oControlEvent) {  };

/**
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.imageUploadFailed = function(oControlEvent) {  };

/**
 * Indicates that the limit number of pictures has been reached
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.maxPictureLimitReached = function(oControlEvent) {  };

/**
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.pictureAdded = function(oControlEvent) {  };

/**
 * Indicates that the user wishes to view the picture
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.show = function(oControlEvent) {  };

/**
 * Adds some picture <code>oPicture</code> 
 * to the aggregation named <code>pictures</code>.
 * 
 * @param {sap.ca.ui.PictureItem}
 *            oPicture the picture to add; if empty, nothing is inserted
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.addPicture = function(oPicture) { return new sap.ca.ui.AddPicture(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'fileNotSupported' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Image upload failed, only supports image format files
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.attachFileNotSupported = function(oData,fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'imageUploadFailed' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.attachImageUploadFailed = function(oData,fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'maxPictureLimitReached' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the limit number of pictures has been reached
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.attachMaxPictureLimitReached = function(oData,fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'pictureAdded' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the image upload failed, only used as a fallback when FileReader is not supported by the browser
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.attachPictureAdded = function(oData,fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'show' event of this <code>sap.ca.ui.AddPicture</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.AddPicture</code>.<br/> itself. 
 *  
 * Indicates that the user wishes to view the picture
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.AddPicture</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.attachShow = function(oData,fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Binder for aggregation <code>pictures</code>.
 * 
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.bindPictures = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ca.ui.AddPicture(); };

/**
 * Destroys all the pictures in the aggregation 
 * named <code>pictures</code>.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.destroyPictures = function() { return new sap.ca.ui.AddPicture(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'fileNotSupported' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.detachFileNotSupported = function(fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'imageUploadFailed' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.detachImageUploadFailed = function(fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'maxPictureLimitReached' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.detachMaxPictureLimitReached = function(fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pictureAdded' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.detachPictureAdded = function(fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'show' event of this <code>sap.ca.ui.AddPicture</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.detachShow = function(fnFunction,oListener) { return new sap.ca.ui.AddPicture(); };

/**
 * Creates a new subclass of class sap.ca.ui.AddPicture with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.AddPicture.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event fileNotSupported to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileNames' of type <code>any</code> An array containing the file names that are not supported</li>
 * </ul>
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.AddPicture.prototype.fireFileNotSupported = function(mArguments) { return new sap.ca.ui.AddPicture(); };

/**
 * Fire event imageUploadFailed to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.AddPicture.prototype.fireImageUploadFailed = function(mArguments) { return new sap.ca.ui.AddPicture(); };

/**
 * Fire event maxPictureLimitReached to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.AddPicture.prototype.fireMaxPictureLimitReached = function(mArguments) { return new sap.ca.ui.AddPicture(); };

/**
 * Fire event pictureAdded to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.AddPicture.prototype.firePictureAdded = function(mArguments) { return new sap.ca.ui.AddPicture(); };

/**
 * Fire event show to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.AddPicture.prototype.fireShow = function(mArguments) { return new sap.ca.ui.AddPicture(); };

/**
 * Getter for property <code>buttonPageType</code>.
 * The page container type in which the button is embedded : Tab or Form
 * 
 * Default value is <code>Tab</code>
 * 
 * @return {string} the value of property <code>buttonPageType</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getButtonPageType = function() { return ""; };

/**
 * Getter for property <code>compression</code>.
 * Defines whether or not you want to maximize the compression. Possible values : "Low" (thumbnail size) or "High" (screen size)
 * 
 * Default value is <code>low</code>
 * 
 * @return {string} the value of property <code>compression</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getCompression = function() { return ""; };

/**
 * Getter for property <code>editable</code>.
 * Defines whether the button should appear or not.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getEditable = function() { return false; };

/**
 * Getter for property <code>itemSize</code>.
 * Defines thumbnail size (height / width) in Pixels
 * 
 * Default value is <code>64</code>
 * 
 * @return {int} the value of property <code>itemSize</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getItemSize = function() { return 0; };

/**
 * Getter for property <code>maxPictureNumber</code>.
 * Defines the maximum number of pictures you can add. Default is set to 10
 * 
 * Default value is <code>10</code>
 * 
 * @return {int} the value of property <code>maxPictureNumber</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getMaxPictureNumber = function() { return 0; };

/**
 * Returns a metadata object for class sap.ca.ui.AddPicture.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.AddPicture.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>pictureAlign</code>.
 * The text of the button.
 * 
 * Default value is <code>Left</code>
 * 
 * @return {sap.ui.core.TextAlign} the value of property <code>pictureAlign</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getPictureAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Getter for aggregation <code>pictures</code>.<br/>
 * The list of pictures
 * 
 * @return {sap.ca.ui.PictureItem[]}
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getPictures = function() { return new Array(); };

/**
 * Getter for property <code>text</code>.
 * The text of the button.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getText = function() { return ""; };

/**
 * Getter for property <code>uploadUrl</code>.
 * Url of server we wish to upload to, only used as a fallback when FileReader is not supported by the browser
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>uploadUrl</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getUploadUrl = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * The width of the control.
 * 
 * Default value is <code>100%</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ca.ui.PictureItem</code> in the aggregation named <code>pictures</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ca.ui.PictureItem}
 *            oPicture the picture whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.indexOfPicture = function(oPicture) { return 0; };

/**
 * Inserts a picture into the aggregation named <code>pictures</code>.
 * 
 * @param {sap.ca.ui.PictureItem}
 *          oPicture the picture to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the picture should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the picture is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the picture is inserted at 
 *             the last position        
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.insertPicture = function(oPicture,iIndex) { return new sap.ca.ui.AddPicture(); };

/**
 * Removes all the controls in the aggregation named <code>pictures</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.PictureItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.removeAllPictures = function() { return new Array(); };

/**
 * Removes an picture from the aggregation named <code>pictures</code>.
 * 
 * @param {int | string | sap.ca.ui.PictureItem} vPicture the picture to remove or its index or id
 * @return {sap.ca.ui.PictureItem} the removed picture or null
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.removePicture = function(vPicture) { return new sap.ca.ui.PictureItem(); };

/**
 * Setter for property <code>buttonPageType</code>.
 * 
 * Default value is <code>Tab</code> 
 * 
 * @param {string} sButtonPageType  new value for property <code>buttonPageType</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setButtonPageType = function(sButtonPageType) { return new sap.ca.ui.AddPicture(); };

/**
 * Setter for property <code>compression</code>.
 * 
 * Default value is <code>low</code> 
 * 
 * @param {string} sCompression  new value for property <code>compression</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setCompression = function(sCompression) { return new sap.ca.ui.AddPicture(); };

/**
 * Setter for property <code>editable</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setEditable = function(bEditable) { return new sap.ca.ui.AddPicture(); };

/**
 * Setter for property <code>itemSize</code>.
 * 
 * Default value is <code>64</code> 
 * 
 * @param {int} iItemSize  new value for property <code>itemSize</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setItemSize = function(iItemSize) { return new sap.ca.ui.AddPicture(); };

/**
 * Setter for property <code>maxPictureNumber</code>.
 * 
 * Default value is <code>10</code> 
 * 
 * @param {int} iMaxPictureNumber  new value for property <code>maxPictureNumber</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setMaxPictureNumber = function(iMaxPictureNumber) { return new sap.ca.ui.AddPicture(); };

/**
 * Setter for property <code>pictureAlign</code>.
 * 
 * Default value is <code>Left</code> 
 * 
 * @param {sap.ui.core.TextAlign} oPictureAlign  new value for property <code>pictureAlign</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setPictureAlign = function(oPictureAlign) { return new sap.ca.ui.AddPicture(); };

/**
 * Set the text for the button
 * @override
 * @public
 * @param sValue {string}
 * 
 */
sap.ca.ui.AddPicture.prototype.setText = function(sValue) {  };

/**
 * Setter for property <code>uploadUrl</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setUploadUrl = function(sUploadUrl) { return new sap.ca.ui.AddPicture(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code> 
 * 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.setWidth = function(sWidth) { return new sap.ca.ui.AddPicture(); };

/**
 * Unbinder for aggregation <code>pictures</code>.
 * 
 * @return {sap.ca.ui.AddPicture} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.AddPicture.prototype.unbindPictures = function() { return new sap.ca.ui.AddPicture(); };


// ---- sap.ca.ui.charts.BarListItem --------------------------------------------------------------------------

/**
 * Constructor for a new charts/BarListItem.
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
 * <li>{@link #getAxis axis} : string</li>
 * <li>{@link #getGroup group} : string</li>
 * <li>{@link #getValue value} : string</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The display list item consists of a label and a value.
 * @extends sap.m.ListItemBase
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.BarListItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.charts.BarListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.BarListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>axis</code>.
 * List item label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>axis</code>
 * @public
 * 
 */
sap.ca.ui.charts.BarListItem.prototype.getAxis = function() { return ""; };

/**
 * Getter for property <code>group</code>.
 * List item label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>group</code>
 * @public
 * 
 */
sap.ca.ui.charts.BarListItem.prototype.getGroup = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.BarListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.BarListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>value</code>.
 * List item value
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ca.ui.charts.BarListItem.prototype.getValue = function() { return ""; };

/**
 * Setter for property <code>axis</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sAxis  new value for property <code>axis</code>
 * @return {sap.ca.ui.charts.BarListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BarListItem.prototype.setAxis = function(sAxis) { return new sap.ca.ui.charts.BarListItem(); };

/**
 * Setter for property <code>group</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sGroup  new value for property <code>group</code>
 * @return {sap.ca.ui.charts.BarListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BarListItem.prototype.setGroup = function(sGroup) { return new sap.ca.ui.charts.BarListItem(); };

/**
 * Setter for property <code>value</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ca.ui.charts.BarListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BarListItem.prototype.setValue = function(sValue) { return new sap.ca.ui.charts.BarListItem(); };


// ---- sap.ca.ui.charts.BubbleChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/BubbleChart.
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
 * <li>{@link #getDataLabelFormat dataLabelFormat} : any</li>
 * <li>{@link #getShowTitle showTitle} : boolean (default: false)</li>
 * <li>{@link #getShowXAxisLabel showXAxisLabel} : boolean (default: true)</li>
 * <li>{@link #getXAxisFixedRange xAxisFixedRange} : boolean (default: false)</li>
 * <li>{@link #getXAxisMinValue xAxisMinValue} : float (default: 0)</li>
 * <li>{@link #getXAxisMaxValue xAxisMaxValue} : float (default: 0)</li>
 * <li>{@link #getShowYAxisLabel showYAxisLabel} : boolean (default: true)</li>
 * <li>{@link #getYAxisFixedRange yAxisFixedRange} : boolean (default: false)</li>
 * <li>{@link #getYAxisMinValue yAxisMinValue} : float (default: 0)</li>
 * <li>{@link #getYAxisMaxValue yAxisMaxValue} : float (default: 0)</li>
 * <li>{@link #getMinimumLabelSize minimumLabelSize} : int (default: 60)</li>
 * <li>{@link #getShowSizeLegend showSizeLegend} : boolean (default: false)</li>
 * <li>{@link #getXAxisTitle xAxisTitle} : string</li>
 * <li>{@link #getYAxisTitle yAxisTitle} : string</li>
 * <li>{@link #getShowCustomLabels showCustomLabels} : boolean (default: false)</li>
 * <li>{@link #getLabelProperty labelProperty} : object</li>
 * <li>{@link #getXAxisFormatFunction xAxisFormatFunction} : object</li>
 * <li>{@link #getXAxisFormatString xAxisFormatString} : string</li>
 * <li>{@link #getYAxisFormatFunction yAxisFormatFunction} : object</li>
 * <li>{@link #getYAxisFormatString yAxisFormatString} : string</li>
 * <li>{@link #getAxisTooltipFormatString axisTooltipFormatString} : any</li>
 * <li>{@link #getAxisFormatFunction axisFormatFunction} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * 
 * Bubble chart.
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.BubbleChart = function(sId,mSettings) {};
/**
 * Clears the array of saved vertical lines.
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.clearVerticalLines = undefined

/**
 * Draws a vertical line at the given x axis value. Also display the text.
 * 
 * @param xAxisValue Value where to draw the vertical line
 * @param text The text to display.
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.drawVerticalLineAt = undefined

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.addContent = function(oContent) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.destroyContent = function() { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.BubbleChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.BubbleChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>axisFormatFunction</code>.
 * Set the formatter function for the axis labels or tooltips
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>axisFormatFunction</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the plotAreaAxisTooltipFormatter
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getAxisFormatFunction = function() { return new Object(); };

/**
 * Getter for property <code>axisTooltipFormatString</code>.
 * Flag to set the formatting of the tooltip on x-axis
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>axisTooltipFormatString</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the plotAreaAxisTooltipFormatter
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getAxisTooltipFormatString = function() { return null; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Deprecated aggregation, do not use. Left for compatibility purposes.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>dataLabelFormat</code>.
 * Defines the formater string for the dataLabel value to be displayed on the bubble
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>dataLabelFormat</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the dataLabelFormatter for any formatting of data label
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getDataLabelFormat = function() { return null; };

/**
 * Getter for property <code>labelProperty</code>.
 * Set the binding property values for the labels as array eg. ['property1','property2']. Only 2 labels are supported.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>labelProperty</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getLabelProperty = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ca.ui.charts.BubbleChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.BubbleChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minimumLabelSize</code>.
 * The minimum size of the bubble before a label gets displayed
 * 
 * Default value is <code>60</code>
 * 
 * @return {int} the value of property <code>minimumLabelSize</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getMinimumLabelSize = function() { return 0; };

/**
 * Getter for property <code>showCustomLabels</code>.
 * Flag to show custom data labels
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showCustomLabels</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getShowCustomLabels = function() { return false; };

/**
 * Getter for property <code>showSizeLegend</code>.
 * Show / Hide the visibility the size legend of the chart
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showSizeLegend</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getShowSizeLegend = function() { return false; };

/**
 * Getter for property <code>showTitle</code>.
 * Flag to display the title for the chart, default is set to false
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showTitle</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getShowTitle = function() { return false; };

/**
 * Getter for property <code>showXAxisLabel</code>.
 * Flag to set the visibility of x-axis label, default is set to true.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showXAxisLabel</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getShowXAxisLabel = function() { return false; };

/**
 * Getter for property <code>showYAxisLabel</code>.
 * Flag to set the visibility of y-axis label, default is set to true.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showYAxisLabel</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getShowYAxisLabel = function() { return false; };

/**
 * Getter for property <code>xAxisFixedRange</code>.
 * Flag to define x-axis scale range.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>xAxisFixedRange</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getXAxisFixedRange = function() { return false; };

/**
 * Getter for property <code>xAxisFormatFunction</code>.
 * Set the formatter function for the x-axis.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>xAxisFormatFunction</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the xAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getXAxisFormatFunction = function() { return new Object(); };

/**
 * Getter for property <code>xAxisFormatString</code>.
 * Set the format string for x-axis
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>xAxisFormatString</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the xAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getXAxisFormatString = function() { return ""; };

/**
 * Getter for property <code>xAxisMaxValue</code>.
 * Define the max value for x-axis scale
 * 
 * Default value is <code>0</code>
 * 
 * @return {float} the value of property <code>xAxisMaxValue</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getXAxisMaxValue = function() { return 0.0; };

/**
 * Getter for property <code>xAxisMinValue</code>.
 * Define the minimum value for x-axis scale
 * 
 * Default value is <code>0</code>
 * 
 * @return {float} the value of property <code>xAxisMinValue</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getXAxisMinValue = function() { return 0.0; };

/**
 * Getter for property <code>xAxisTitle</code>.
 * Set x-axis title
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>xAxisTitle</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getXAxisTitle = function() { return ""; };

/**
 * Getter for property <code>yAxisFixedRange</code>.
 * Flag to define y-axis scale range.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>yAxisFixedRange</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getYAxisFixedRange = function() { return false; };

/**
 * Getter for property <code>yAxisFormatFunction</code>.
 * Set the formatter function for the y-axis.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>yAxisFormatFunction</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the yAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getYAxisFormatFunction = function() { return new Object(); };

/**
 * Getter for property <code>yAxisFormatString</code>.
 * Set the format string for y-axis
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>yAxisFormatString</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the yAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getYAxisFormatString = function() { return ""; };

/**
 * Getter for property <code>yAxisMaxValue</code>.
 * Define the max value for y-axis scale
 * 
 * Default value is <code>0</code>
 * 
 * @return {float} the value of property <code>yAxisMaxValue</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getYAxisMaxValue = function() { return 0.0; };

/**
 * Getter for property <code>yAxisMinValue</code>.
 * Define the minimum value for y-axis scale
 * 
 * Default value is <code>0</code>
 * 
 * @return {float} the value of property <code>yAxisMinValue</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getYAxisMinValue = function() { return 0.0; };

/**
 * Getter for property <code>yAxisTitle</code>.
 * Set y-axis title
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>yAxisTitle</code>
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.getYAxisTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.insertContent = function(oContent,iIndex) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>axisFormatFunction</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oAxisFormatFunction  new value for property <code>axisFormatFunction</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the plotAreaAxisTooltipFormatter
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setAxisFormatFunction = function(oAxisFormatFunction) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>axisTooltipFormatString</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oAxisTooltipFormatString  new value for property <code>axisTooltipFormatString</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the plotAreaAxisTooltipFormatter
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setAxisTooltipFormatString = function(oAxisTooltipFormatString) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>dataLabelFormat</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oDataLabelFormat  new value for property <code>dataLabelFormat</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the dataLabelFormatter for any formatting of data label
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setDataLabelFormat = function(oDataLabelFormat) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>labelProperty</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oLabelProperty  new value for property <code>labelProperty</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setLabelProperty = function(oLabelProperty) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>minimumLabelSize</code>.
 * 
 * Default value is <code>60</code> 
 * 
 * @param {int} iMinimumLabelSize  new value for property <code>minimumLabelSize</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setMinimumLabelSize = function(iMinimumLabelSize) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>showCustomLabels</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowCustomLabels  new value for property <code>showCustomLabels</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setShowCustomLabels = function(bShowCustomLabels) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>showSizeLegend</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowSizeLegend  new value for property <code>showSizeLegend</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setShowSizeLegend = function(bShowSizeLegend) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>showTitle</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowTitle  new value for property <code>showTitle</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setShowTitle = function(bShowTitle) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>showXAxisLabel</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowXAxisLabel  new value for property <code>showXAxisLabel</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setShowXAxisLabel = function(bShowXAxisLabel) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>showYAxisLabel</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowYAxisLabel  new value for property <code>showYAxisLabel</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setShowYAxisLabel = function(bShowYAxisLabel) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>xAxisFixedRange</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bXAxisFixedRange  new value for property <code>xAxisFixedRange</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setXAxisFixedRange = function(bXAxisFixedRange) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>xAxisFormatFunction</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oXAxisFormatFunction  new value for property <code>xAxisFormatFunction</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the xAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setXAxisFormatFunction = function(oXAxisFormatFunction) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>xAxisFormatString</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sXAxisFormatString  new value for property <code>xAxisFormatString</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the xAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setXAxisFormatString = function(sXAxisFormatString) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>xAxisMaxValue</code>.
 * 
 * Default value is <code>0</code> 
 * 
 * @param {float} fXAxisMaxValue  new value for property <code>xAxisMaxValue</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setXAxisMaxValue = function(fXAxisMaxValue) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>xAxisMinValue</code>.
 * 
 * Default value is <code>0</code> 
 * 
 * @param {float} fXAxisMinValue  new value for property <code>xAxisMinValue</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setXAxisMinValue = function(fXAxisMinValue) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>xAxisTitle</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sXAxisTitle  new value for property <code>xAxisTitle</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setXAxisTitle = function(sXAxisTitle) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>yAxisFixedRange</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bYAxisFixedRange  new value for property <code>yAxisFixedRange</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setYAxisFixedRange = function(bYAxisFixedRange) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>yAxisFormatFunction</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oYAxisFormatFunction  new value for property <code>yAxisFormatFunction</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the yAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setYAxisFormatFunction = function(oYAxisFormatFunction) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>yAxisFormatString</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sYAxisFormatString  new value for property <code>yAxisFormatString</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now. Use the yAxisLabelFormatter for any formatting of the axis labels
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setYAxisFormatString = function(sYAxisFormatString) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>yAxisMaxValue</code>.
 * 
 * Default value is <code>0</code> 
 * 
 * @param {float} fYAxisMaxValue  new value for property <code>yAxisMaxValue</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setYAxisMaxValue = function(fYAxisMaxValue) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>yAxisMinValue</code>.
 * 
 * Default value is <code>0</code> 
 * 
 * @param {float} fYAxisMinValue  new value for property <code>yAxisMinValue</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setYAxisMinValue = function(fYAxisMinValue) { return new sap.ca.ui.charts.BubbleChart(); };

/**
 * Setter for property <code>yAxisTitle</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sYAxisTitle  new value for property <code>yAxisTitle</code>
 * @return {sap.ca.ui.charts.BubbleChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.BubbleChart.prototype.setYAxisTitle = function(sYAxisTitle) { return new sap.ca.ui.charts.BubbleChart(); };


// ---- sap.ca.ui.charts.Chart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/Chart.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getDataset dataset} : object</li>
 * <li>{@link #getChartType chartType} : string (default: 'Bar')</li>
 * <li>{@link #getMinShapeSize minShapeSize} : sap.ui.core.CSSSize (default: '48px')</li>
 * <li>{@link #getLabel label} : string (default: '')</li>
 * <li>{@link #getTitle title} : string (default: '')</li>
 * <li>{@link #getIcon icon} : string (default: '')</li>
 * <li>{@link #getSecondAxisVisible secondAxisVisible} : boolean (default: true)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ca.ui.charts.ChartSelectionMode (default: sap.ca.ui.charts.ChartSelectionMode.Multiple)</li>
 * <li>{@link #getShowHoverBackground showHoverBackground} : boolean (default: false)</li>
 * <li>{@link #getShowTooltip showTooltip} : boolean (default: false)</li>
 * <li>{@link #getShowPopover showPopover} : boolean (default: true)</li>
 * <li>{@link #getShowDataLabel showDataLabel} : boolean (default: true)</li>
 * <li>{@link #getYAxisLabelFormatter yAxisLabelFormatter} : string</li>
 * <li>{@link #getYAxis2LabelFormatter yAxis2LabelFormatter} : string</li>
 * <li>{@link #getXAxisLabelFormatter xAxisLabelFormatter} : string</li>
 * <li>{@link #getXAxis2LabelFormatter xAxis2LabelFormatter} : string</li>
 * <li>{@link #getPlotAreaAxisTooltipFormatter plotAreaAxisTooltipFormatter} : object</li>
 * <li>{@link #getTooltipFormatter tooltipFormatter} : object</li>
 * <li>{@link #getDataLabelFormatter dataLabelFormatter} : object</li>
 * <li>{@link #getPopoverFormatter popoverFormatter} : object</li>
 * <li>{@link #getPopoverGroupFormatter popoverGroupFormatter} : string</li>
 * <li>{@link #getChartSemanticColorFormatter chartSemanticColorFormatter} : object</li>
 * <li>{@link #getInternalVizChart internalVizChart} : sap.ui.core.Control</li>
 * <li>{@link #getChartPopOver chartPopOver} : sap.ui.core.Control</li>
 * <li>{@link #getPopoverSubHeader popoverSubHeader} : sap.ui.core.Control</li>
 * <li>{@link #getPopoverFooter popoverFooter} : sap.ui.core.Control</li>
 * <li>{@link #getAdvancedChartSettings advancedChartSettings} : object</li>
 * <li>{@link #getStackedChartWidthEnhancer stackedChartWidthEnhancer} : boolean (default: false)</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.charts.Chart#event:selectDataPoint selectDataPoint} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.Chart#event:popoverBeforeOpen popoverBeforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.Chart#event:popoverAfterOpen popoverAfterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Chart implementation on top of sap.viz that takes care of common functionality.
 * - Embedding in a scroll container
 * - Common color palette
 * - Minimum bar / dot / blip ... size
 * - Integration with ChartToolbar and ChartPopover
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.Chart = function(sId,mSettings) {};
/**
 * Event is fired after the popover is opened
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.popoverAfterOpen = function(oControlEvent) {  };

/**
 * Event is fired before the popover is opened
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.popoverBeforeOpen = function(oControlEvent) {  };

/**
 * Event is fired when the data point is selected/unselected on the chart
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.selectDataPoint = function(oControlEvent) {  };

/**
 * Creates an id for an Element prefixed with the control id
 * 
 * @return {string} id
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype._createId = function() { return ""; };

/**
 * Setter for property <code>advancedChartSettings</code>.
 * 
 * 
 * @param {object} settings
 * You can specify here any advanced viz chart settings that have not been exposed as a chart property.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.advancedChartSettings = function(settings) { return new sap.ca.ui.charts.Chart(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'popoverAfterOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself. 
 *  
 * Event is fired after the popover is opened
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.attachPopoverAfterOpen = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.Chart(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'popoverBeforeOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself. 
 *  
 * Event is fired before the popover is opened
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.attachPopoverBeforeOpen = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.Chart(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'selectDataPoint' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself. 
 *  
 * Event is fired when the data point is selected/unselected on the chart
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.Chart</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.attachSelectDataPoint = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.Chart(); };

/**
 * Binder for property <code>label</code>.
 * 
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.bindLabel = function(sPath,fnFormatter,sMode) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>dataLabelFormatter</code>.
 * 
 * 
 * @param {object} formatterArray  new value for property <code>dataLabelFormatter</code>
 * 		[formatterArray] must be a 2 dimensions array of formatters.
 * 			[  [ measure 1 of X Axis , ...,  [measure n of X Axis] ],
 * 			   [ measure 1 of X Axis 2 , ...,  [measure n of X Axis 2] ]
 * 		Each of these formatters can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * 		If for an axis, formatters count < measures count, then first formatter of axis will be used
 * 		for other measures.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.dataLabelFormatter = function(formatterArray) { return new sap.ca.ui.charts.Chart(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'popoverAfterOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.detachPopoverAfterOpen = function(fnFunction,oListener) { return new sap.ca.ui.charts.Chart(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'popoverBeforeOpen' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.detachPopoverBeforeOpen = function(fnFunction,oListener) { return new sap.ca.ui.charts.Chart(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'selectDataPoint' event of this <code>sap.ca.ui.charts.Chart</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.detachSelectDataPoint = function(fnFunction,oListener) { return new sap.ca.ui.charts.Chart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.Chart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.Chart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event popoverAfterOpen to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.charts.Chart.prototype.firePopoverAfterOpen = function(mArguments) { return new sap.ca.ui.charts.Chart(); };

/**
 * Fire event popoverBeforeOpen to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.charts.Chart.prototype.firePopoverBeforeOpen = function(mArguments) { return new sap.ca.ui.charts.Chart(); };

/**
 * Fire event selectDataPoint to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.charts.Chart.prototype.fireSelectDataPoint = function(mArguments) { return new sap.ca.ui.charts.Chart(); };

/**
 * Getter for property <code>advancedChartSettings</code>.
 * You can specify here any advanced viz chart settings that have not been exposed as a chart
 * property.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>advancedChartSettings</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getAdvancedChartSettings = function() { return new Object(); };

/**
 * Getter for property <code>chartPopOver</code>.
 * chart PopOver
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {sap.m.ResponsivePopover} oChartPopOver the value of property <code>chartPopOver</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getChartPopOver = function() { return new sap.m.ResponsivePopover(); };

/**
 * Getter for property <code>chartSemanticColorFormatter</code>.
 * Function that will be called when the chart is rendered in order to let the
 * application decide which color should be use for each bar.
 * The method should take the following parameter as input :
 * - The data context of the current datashape
 * And as output :
 * - One of sap.ca.ui.charts.ChartSemanticColor type
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>chartSemanticColorFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getChartSemanticColorFormatter = function() { return new Object(); };

/**
 * Getter for property <code>chartType</code>.
 * Type of viz chart that will be displayed.
 * 
 * Default value is <code>Bar</code>
 * 
 * @return {string} the value of property <code>chartType</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getChartType = function() { return ""; };

/**
 * Getter for property <code>dataLabelFormatter</code>.
 * Formatter for Data Label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>dataLabelFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getDataLabelFormatter = function() { return new Object(); };

/**
 * Getter for property <code>dataset</code>.
 * Viz Dataset that will hold the data to be displayed.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} oDataset the value of property <code>dataset</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getDataset = function() { return new Object(); };

/**
 * Getter for property <code>height</code>.
 * Target height for the charting area
 * 
 * Default value is <code>100%</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>icon</code>.
 * Icon of the Chart
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getIcon = function() { return ""; };

/**
 * Getter for property <code>internalVizChart</code>.
 * internal Viz Chart
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} oInternalVizChart the value of property <code>internalVizChart</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getInternalVizChart = function() { return new Object(); };

/**
 * Getter for property <code>label</code>.
 * User friendly name for the current chart type
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.Chart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.Chart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minShapeSize</code>.
 * Minimum shape size for touch enabled actions, default and minimum to 48px !
 * 
 * Default value is <code>48px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>minShapeSize</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getMinShapeSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for aggregation noData in Viz Chart.
 * Control tree to display when there is no data available
 * 
 * @return {sap.ui.core.Control} the value for aggregation noData
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getNoData = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>plotAreaAxisTooltipFormatter</code>.
 * Formatter for plotArea Axis Tooltip in bubble charts
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>plotAreaAxisTooltipFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getPlotAreaAxisTooltipFormatter = function() { return new Object(); };

/**
 * Getter for property <code>popoverFooter</code>.
 * custom footer for popover
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {sap.ui.core.Control} the value of property <code>popoverFooter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getPopoverFooter = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>popoverFormatter</code>.
 * Formatter for popover
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>popoverFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getPopoverFormatter = function() { return new Object(); };

/**
 * Getter for property <code>popoverGroupFormatter</code>.
 * Formatter for group label in the popover
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>popoverGroupFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getPopoverGroupFormatter = function() { return ""; };

/**
 * Getter for property <code>popoverSubHeader</code>.
 * custom subHeader for popover
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {sap.ui.core.Control} the value of property <code>popoverSubHeader</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getPopoverSubHeader = function() { return new sap.ui.core.Control(); };

/**
 * Getter for property <code>secondAxisVisible</code>.
 * Flag to show the second axis. Default is true
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>secondAxisVisible</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getSecondAxisVisible = function() { return false; };

/**
 * Getter for property <code>selectionMode</code>.
 * 
 * @return {sap.ca.ui.charts.ChartSelectionMode} The selection mode
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getSelectionMode = function() { return new sap.ca.ui.charts.ChartSelectionMode(); };

/**
 * Getter for property <code>showDataLabel</code>.
 * Flag to display data values on the bar, default is set to true
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showDataLabel</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getShowDataLabel = function() { return false; };

/**
 * Getter for property <code>showHoverBackground</code>.
 * Hide / Show the hover background
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showHoverBackground</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getShowHoverBackground = function() { return false; };

/**
 * Getter for property <code>showLegend</code>.
 * Hide / Show the legend of the chart
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getShowLegend = function() { return false; };

/**
 * Getter for property <code>showPopover</code>.
 * Hide / Show the sap.ca popover that gives information about what is available
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showPopover</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getShowPopover = function() { return false; };

/**
 * Getter for property <code>showTooltip</code>.
 * Hide / Show the CVOM tooltip
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showTooltip</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getShowTooltip = function() { return false; };

/**
 * Getter for property <code>stackedChartWidthEnhancer</code>.
 * You can use it if stacked bar width are to big. Disabled by default
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>stackedChartWidthEnhancer</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getStackedChartWidthEnhancer = function() { return false; };

/**
 * Getter for property <code>title</code>.
 * Title of the chart
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getTitle = function() { return ""; };

/**
 * Getter for property <code>tooltipFormatter</code>.
 * Formatter for toolTip
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>tooltipFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getTooltipFormatter = function() { return new Object(); };

/**
 * Getter for property <code>width</code>.
 * Target width for the charting area
 * 
 * Default value is <code>100%</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>xAxis2LabelFormatter</code>.
 * Formatter for X Axis 2 Label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>xAxis2LabelFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getXAxis2LabelFormatter = function() { return ""; };

/**
 * Getter for property <code>xAxisLabelFormatter</code>.
 * Formatter for X Axis Label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>xAxisLabelFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getXAxisLabelFormatter = function() { return ""; };

/**
 * Getter for property <code>yAxis2LabelFormatter</code>.
 * Formatter for Y Axis 2 Label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>yAxis2LabelFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getYAxis2LabelFormatter = function() { return ""; };

/**
 * Getter for property <code>yAxisLabelFormatter</code>.
 * Formatter for Y Axis Label
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>yAxisLabelFormatter</code>
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.getYAxisLabelFormatter = function() { return ""; };

/**
 * Setter for property <code>minShapeSize</code>.
 * Note: doesn't work for the bubble chart's bubbles sizes.
 * 
 * @param {string} sMinShapeSize Minimum shape size in pixels.
 * 
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.minShapeSize = function(sMinShapeSize) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>popoverFormatter</code>.
 * 
 * 
 * @param {object} formatterArray  new value for property <code>popoverFormatter</code>
 * 		[formatterArray] must be a 2 dimensions array of formatters.
 * 			[  [ measure 1 of X Axis , ...,  [measure n of X Axis] ],
 * 			   [ measure 1 of X Axis 2 , ...,  [measure n of X Axis 2] ]
 * 		Each of these formatters can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * 		If for an axis, formatters count < measures count, then first formatter of axis will be used
 * 		for other measures.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.popoverFormatter = function(formatterArray) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>popoverGroupFormatter</code>.
 * 
 * 
 * @param {object} formatter  new value for property <code>popoverGroupFormatter</code>
 * 		formatter can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.popoverGroupFormatter = function(formatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>advancedChartSettings</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oAdvancedChartSettings  new value for property <code>advancedChartSettings</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setAdvancedChartSettings = function(oAdvancedChartSettings) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>chartPopOver</code>.
 * 
 * 
 * @param {sap.m.ResponsivePopover} oChartPopOver  new value for property <code>chartPopOver</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setChartPopOver = function(oChartPopOver) { return new sap.m.ResponsivePopover(); };

/**
 * Setter for property <code>chartSemanticColorFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oChartSemanticColorFormatter  new value for property <code>chartSemanticColorFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setChartSemanticColorFormatter = function(oChartSemanticColorFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>chartType</code>.
 * 
 * Default value is <code>Bar</code> 
 * 
 * @param {string} sChartType  new value for property <code>chartType</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setChartType = function(sChartType) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>dataLabelFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oDataLabelFormatter  new value for property <code>dataLabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setDataLabelFormatter = function(oDataLabelFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>dataset</code>.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @param {sap.viz.ui5.data.Dataset} oDataset  new value for property <code>dataset</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setDataset = function(oDataset) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>100%</code>
 * 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setHeight = function(sHeight) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setIcon = function(sIcon) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>internalVizChart</code>.
 * 
 * Default value is <code>oChart</code>
 * 
 * @param {sap.viz.ui5.BaseChart} oInternalVizChart  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setInternalVizChart = function(oInternalVizChart) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>label</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setLabel = function(sLabel) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>minShapeSize</code>.
 * 
 * Default value is <code>48px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sMinShapeSize  new value for property <code>minShapeSize</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setMinShapeSize = function(sMinShapeSize) { return new sap.ca.ui.charts.Chart(); };

/**
 * Catch the setModel call and make sure we refresh the size of the chart.
 * 
 * @param {sap.ui.model.Model} oModel the model to be set or <code>null</code> or <code>undefined</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setModel = function(oModel) { return new sap.ca.ui.charts.Chart(); };

/**
 * setter for aggregation noData in Viz Chart.
 * Control tree to display when there is no data available
 * @param {sap.ui.core.Control} oControl new value for aggregation noData
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setNoData = function(oControl) {  };

/**
 * Setter for property <code>plotAreaAxisTooltipFormatter</code>.
 * 
 * 
 * @param {object} [formatterArray] new value for property <code>plotAreaAxisTooltipFormatter</code>
 * 		This is the tooltip for "bubbles" of bubble chart.
 * 		[formatterArray] must be an array of 2 formatters (one for X Axis, one for Y axis).
 * 		Each of these formatters can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setPlotAreaAxisTooltipFormatter = function(formatterArray) { return new sap.ca.ui.charts.Chart(); };

/**
 * setter for footer in the Popover.
 * 
 * @param {sap.m.Bar} oFooter new value for footer
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setPopoverFooter = function(oFooter) {  };

/**
 * Setter for property <code>popoverFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oPopoverFormatter  new value for property <code>popoverFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setPopoverFormatter = function(oPopoverFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>popoverGroupFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sPopoverGroupFormatter  new value for property <code>popoverGroupFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setPopoverGroupFormatter = function(sPopoverGroupFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * setter for subHeader in the Popover.
 * 
 * @param {sap.m.Bar} oSubHeader new value for sub header
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setPopoverSubHeader = function(oSubHeader) {  };

/**
 * Setter for property <code>secondAxisVisible</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bSecondAxisVisible  new value for property <code>secondAxisVisible</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setSecondAxisVisible = function(bSecondAxisVisible) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>selectionMode</code>.
 * 
 * Default value is <code>Multi</code>
 * 
 * @param {sap.ca.ui.charts.ChartSelectionMode} sSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setSelectionMode = function(sSelectionMode) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>showDataLabel</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowDataLabel  new value for property <code>showDataLabel</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setShowDataLabel = function(bShowDataLabel) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>showHoverBackground</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowHoverBackground  new value for property <code>showHoverBackground</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setShowHoverBackground = function(bShowHoverBackground) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>showLegend</code>.
 * 
 * Default value is <code>true</code>
 * 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setShowLegend = function(bShowLegend) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>showPopover</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowPopover  new value for property <code>showPopover</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setShowPopover = function(bShowPopover) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>showTooltip</code>.
 * 
 * Default value is <code>false</code>
 * 
 * @param {boolean} bShowTooltip  new value for property <code>showTooltip</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setShowTooltip = function(bShowTooltip) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>stackedChartWidthEnhancer</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bStackedChartWidthEnhancer  new value for property <code>stackedChartWidthEnhancer</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setStackedChartWidthEnhancer = function(bStackedChartWidthEnhancer) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code>Chart</code>
 * 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setTitle = function(sTitle) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>tooltipFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oTooltipFormatter  new value for property <code>tooltipFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setTooltipFormatter = function(oTooltipFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>100%</code>
 * 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setWidth = function(sWidth) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>xAxis2LabelFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sXAxis2LabelFormatter  new value for property <code>xAxis2LabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setXAxis2LabelFormatter = function(sXAxis2LabelFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>xAxisLabelFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sXAxisLabelFormatter  new value for property <code>xAxisLabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setXAxisLabelFormatter = function(sXAxisLabelFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>yAxis2LabelFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sYAxis2LabelFormatter  new value for property <code>yAxis2LabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setYAxis2LabelFormatter = function(sYAxis2LabelFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>yAxisLabelFormatter</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sYAxisLabelFormatter  new value for property <code>yAxisLabelFormatter</code>
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.setYAxisLabelFormatter = function(sYAxisLabelFormatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>tooltipFormatter</code>.
 * 
 * 
 * @param {object} formatterArray  new value for property <code>tooltipFormatter</code>
 * 		[formatterArray] must be a 2 dimensions array of formatters.
 * 			[  [ measure 1 of X Axis , ...,  [measure n of X Axis] ],
 * 			   [ measure 1 of X Axis 2 , ...,  [measure n of X Axis 2] ]
 * 		Each of these formatters can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * 		If for an axis, formatters count < measures count, then first formatter of axis will be used
 * 		for other measures.
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.tooltipFormatter = function(formatterArray) { return new sap.ca.ui.charts.Chart(); };

/**
 * Unbinder for property <code>label</code>.
 * 
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.unbindLabel = function() { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>xAxis2LabelFormatter</code>.
 * 
 * 
 * @param {object} formatter  new value for property <code>xAxis2LabelFormatter</code>
 * 		formatter can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.xAxis2LabelFormatter = function(formatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>xAxisLabelFormatter</code>.
 * 
 * 
 * @param {object} formatter  new value for property <code>xAxisLabelFormatter</code>
 * 		formatter can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.xAxisLabelFormatter = function(formatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>yAxis2LabelFormatter</code>.
 * 
 * 
 * @param {object} formatter  new value for property <code>yAxis2LabelFormatter</code>
 * 		formatter can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.yAxis2LabelFormatter = function(formatter) { return new sap.ca.ui.charts.Chart(); };

/**
 * Setter for property <code>yAxisLabelFormatter</code>.
 * 
 * 
 * @param {object} formatter  new value for property <code>yAxisLabelFormatter</code>
 * 		formatter can be:
 * 		  - a custom formatting function
 * 		  - a value of enum sap.ca.ui.charts.DefaultFormatterFunction
 * @return {sap.ca.ui.charts.Chart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.Chart.prototype.yAxisLabelFormatter = function(formatter) { return new sap.ca.ui.charts.Chart(); };


// ---- sap.ca.ui.charts.ChartColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ca.ui.charts.ChartColor.toString = function() { return ""; };

// ---- sap.ca.ui.charts.ChartSelectionMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ca.ui.charts.ChartSelectionMode.toString = function() { return ""; };

// ---- sap.ca.ui.charts.ChartSemanticColor --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ca.ui.charts.ChartSemanticColor.toString = function() { return ""; };

// ---- sap.ca.ui.charts.ChartToolBar --------------------------------------------------------------------------

/**
 * Constructor for a new charts/ChartToolBar.
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
 * <li>{@link #getShowPersonalization showPersonalization} : boolean (default: false)</li>
 * <li>{@link #getShowFullScreen showFullScreen} : boolean (default: false)</li>
 * <li>{@link #getFullScreen fullScreen} : boolean (default: false)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getChartTitle chartTitle} : string (default: '')</li>
 * <li>{@link #getFirstDimensionPath firstDimensionPath} : string (default: '')</li>
 * <li>{@link #getFirstDimensionKeyPath firstDimensionKeyPath} : string (default: '')</li>
 * <li>{@link #getFirstDimensionTextPath firstDimensionTextPath} : string (default: '')</li>
 * <li>{@link #getSecondDimensionPath secondDimensionPath} : string (default: '')</li>
 * <li>{@link #getSecondDimensionKeyPath secondDimensionKeyPath} : string (default: '')</li>
 * <li>{@link #getSecondDimensionTextPath secondDimensionTextPath} : string (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCharts charts} : sap.ui.core.Control[]</li>
 * <li>{@link #getToolBar toolBar} : sap.m.Bar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedChart selectedChart} : string | sap.ui.core.Control</li>
 * <li>{@link #getFirstDimensionSelect firstDimensionSelect} : string | sap.m.Select</li>
 * <li>{@link #getSecondDimensionSelect secondDimensionSelect} : string | sap.m.Select</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.charts.ChartToolBar#event:personalizationPressed personalizationPressed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.ChartToolBar#event:firstDimensionKeySelected firstDimensionKeySelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.charts.ChartToolBar#event:secondDimensionKeySelected secondDimensionKeySelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * ToolBar used for displaying one chart amongst several and provide additional features:
 * - 2 select boxes for selecting dimensions
 * - fullscreen toggle
 * - personalization icon
 * - showLegend toggle
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts and the ChartToolBar have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.ChartToolBar = function(sId,mSettings) {};
/**
 * Event fired when a user selects an item from the first select box.
 * This event is providing the item selectedKey as parameter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.firstDimensionKeySelected = function(oControlEvent) {  };

/**
 * Event fired when a user clicks on the personalization icon
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.personalizationPressed = function(oControlEvent) {  };

/**
 * Event fired when a user selects an item from the second select box.
 * This event is providing the item selectedKey as parameter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.secondDimensionKeySelected = function(oControlEvent) {  };

/**
 * Adds some chart <code>oChart</code> 
 * to the aggregation named <code>charts</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oChart the chart to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.addChart = function(oChart) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'firstDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself. 
 *  
 * Event fired when a user selects an item from the first select box.
 * This event is providing the item selectedKey as parameter
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.attachFirstDimensionKeySelected = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'personalizationPressed' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself. 
 *  
 * Event fired when a user clicks on the personalization icon
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.attachPersonalizationPressed = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'secondDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself. 
 *  
 * Event fired when a user selects an item from the second select box.
 * This event is providing the item selectedKey as parameter
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.attachSecondDimensionKeySelected = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Destroys all the charts in the aggregation 
 * named <code>charts</code>.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.destroyCharts = function() { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Destroys the toolBar in the aggregation 
 * named <code>toolBar</code>.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.destroyToolBar = function() { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'firstDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.detachFirstDimensionKeySelected = function(fnFunction,oListener) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'personalizationPressed' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.detachPersonalizationPressed = function(fnFunction,oListener) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'secondDimensionKeySelected' event of this <code>sap.ca.ui.charts.ChartToolBar</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.detachSecondDimensionKeySelected = function(fnFunction,oListener) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.ChartToolBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.ChartToolBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event firstDimensionKeySelected to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.fireFirstDimensionKeySelected = function(mArguments) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Fire event personalizationPressed to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.firePersonalizationPressed = function(mArguments) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Fire event secondDimensionKeySelected to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.fireSecondDimensionKeySelected = function(mArguments) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Getter for aggregation <code>charts</code>.<br/>
 * The charts to display. Theses charts are sap.ui.core/Control that implements the following properties:
 * - showLegend: boolean
 * - icon: string (expected a string such as "sap-icon://line-chart")
 * 
 * If the inserted control is an sap.m.Table, the icon is automatically set to "sap-icon://table-chart"
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getCharts = function() { return new Array(); };

/**
 * Getter for property <code>chartTitle</code>.
 * The string to display instead of the select boxes if there are no dimensions to display
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>chartTitle</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getChartTitle = function() { return ""; };

/**
 * Getter for property <code>firstDimensionKeyPath</code>.
 * Model path to the first select box items key
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>firstDimensionKeyPath</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getFirstDimensionKeyPath = function() { return ""; };

/**
 * Getter for property <code>firstDimensionPath</code>.
 * Model path to the dimensions to display into the first select box
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>firstDimensionPath</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getFirstDimensionPath = function() { return ""; };

/**
 * The sap.m.Select inserted into the toolBar for handling the firstDimension selection
 * 
 * @return {string} Id of the element which is the current target of the <code>firstDimensionSelect</code> association, or null
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getFirstDimensionSelect = function() { return ""; };

/**
 * Getter for property <code>firstDimensionTextPath</code>.
 * Model path to the first select box items displayed text
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>firstDimensionTextPath</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getFirstDimensionTextPath = function() { return ""; };

/**
 * Getter for property <code>fullScreen</code>.
 * Display the chart and the toolbar in full screen or normal mode
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>fullScreen</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getFullScreen = function() { return false; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.ChartToolBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.ChartToolBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>secondDimensionKeyPath</code>.
 * Model path to the second select box items key
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>secondDimensionKeyPath</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getSecondDimensionKeyPath = function() { return ""; };

/**
 * Getter for property <code>secondDimensionPath</code>.
 * Model path to the dimensions to display into the second select box
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>secondDimensionPath</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getSecondDimensionPath = function() { return ""; };

/**
 * The sap.m.Select inserted into the toolBar for handling the secondDimension selection
 * 
 * @return {string} Id of the element which is the current target of the <code>secondDimensionSelect</code> association, or null
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getSecondDimensionSelect = function() { return ""; };

/**
 * Getter for property <code>secondDimensionTextPath</code>.
 * Model path to the displayed select box items displayed text
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>secondDimensionTextPath</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getSecondDimensionTextPath = function() { return ""; };

/**
 * The ui5 control displayed
 * 
 * @return {string} Id of the element which is the current target of the <code>selectedChart</code> association, or null
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getSelectedChart = function() { return ""; };

/**
 * Getter for property <code>showFullScreen</code>.
 * Display or not the full screen icon into the ChartToolBar
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showFullScreen</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getShowFullScreen = function() { return false; };

/**
 * Getter for property <code>showLegend</code>.
 * Display or not the legend on the contained charts.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getShowLegend = function() { return false; };

/**
 * Getter for property <code>showPersonalization</code>.
 * Display or not the personalization icon into the ChartToolBar
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showPersonalization</code>
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getShowPersonalization = function() { return false; };

/**
 * Getter for aggregation <code>toolBar</code>.<br/>
 * The composite sap.m.Bar used for rendering select boxes and icons.
 * 
 * @return {sap.m.Bar}
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.getToolBar = function() { return new sap.m.Bar(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>charts</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ui.core.Control}
 *            oChart the chart whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.indexOfChart = function(oChart) { return 0; };

/**
 * Inserts a chart into the aggregation named <code>charts</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oChart the chart to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the chart should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the chart is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the chart is inserted at 
 *             the last position        
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.insertChart = function(oChart,iIndex) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Removes all the controls in the aggregation named <code>charts</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.removeAllCharts = function() { return new Array(); };

/**
 * Removes an chart from the aggregation named <code>charts</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vChart the chart to remove or its index or id
 * @return {sap.ui.core.Control} the removed chart or null
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.removeChart = function(vChart) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>chartTitle</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sChartTitle  new value for property <code>chartTitle</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setChartTitle = function(sChartTitle) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>firstDimensionKeyPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sFirstDimensionKeyPath  new value for property <code>firstDimensionKeyPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionKeyPath = function(sFirstDimensionKeyPath) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>firstDimensionPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sFirstDimensionPath  new value for property <code>firstDimensionPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionPath = function(sFirstDimensionPath) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * The sap.m.Select inserted into the toolBar for handling the firstDimension selection
 * 
 * @param {string | sap.m.Select} vFirstDimensionSelect 
 *    Id of an element which becomes the new target of this <code>firstDimensionSelect</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionSelect = function(vFirstDimensionSelect) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>firstDimensionTextPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sFirstDimensionTextPath  new value for property <code>firstDimensionTextPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionTextPath = function(sFirstDimensionTextPath) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>fullScreen</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bFullScreen  new value for property <code>fullScreen</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setFullScreen = function(bFullScreen) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>secondDimensionKeyPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sSecondDimensionKeyPath  new value for property <code>secondDimensionKeyPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionKeyPath = function(sSecondDimensionKeyPath) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>secondDimensionPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sSecondDimensionPath  new value for property <code>secondDimensionPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionPath = function(sSecondDimensionPath) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * The sap.m.Select inserted into the toolBar for handling the secondDimension selection
 * 
 * @param {string | sap.m.Select} vSecondDimensionSelect 
 *    Id of an element which becomes the new target of this <code>secondDimensionSelect</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionSelect = function(vSecondDimensionSelect) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>secondDimensionTextPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sSecondDimensionTextPath  new value for property <code>secondDimensionTextPath</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionTextPath = function(sSecondDimensionTextPath) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * The ui5 control displayed
 * 
 * @param {string | sap.ui.core.Control} vSelectedChart 
 *    Id of an element which becomes the new target of this <code>selectedChart</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setSelectedChart = function(vSelectedChart) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>showFullScreen</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowFullScreen  new value for property <code>showFullScreen</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setShowFullScreen = function(bShowFullScreen) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>showLegend</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setShowLegend = function(bShowLegend) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for property <code>showPersonalization</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowPersonalization  new value for property <code>showPersonalization</code>
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setShowPersonalization = function(bShowPersonalization) { return new sap.ca.ui.charts.ChartToolBar(); };

/**
 * Setter for the aggregated <code>toolBar</code>.
 * @param {sap.m.Bar} oToolBar
 * @return {sap.ca.ui.charts.ChartToolBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ChartToolBar.prototype.setToolBar = function(oToolBar) { return new sap.ca.ui.charts.ChartToolBar(); };


// ---- sap.ca.ui.charts.ChartType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ca.ui.charts.ChartType.toString = function() { return ""; };

// ---- sap.ca.ui.charts.ClusterListItem --------------------------------------------------------------------------

/**
 * Constructor for a new charts/ClusterListItem.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getItems items} : object</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The cluster list item consists of a title and items.
 * @extends sap.m.ListItemBase
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.ClusterListItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.charts.ClusterListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.ClusterListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>items</code>.
 * Items
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>items</code>
 * @public
 * 
 */
sap.ca.ui.charts.ClusterListItem.prototype.getItems = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ca.ui.charts.ClusterListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.ClusterListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>title</code>.
 * Title
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ca.ui.charts.ClusterListItem.prototype.getTitle = function() { return ""; };

/**
 * Setter for property <code>items</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oItems  new value for property <code>items</code>
 * @return {sap.ca.ui.charts.ClusterListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ClusterListItem.prototype.setItems = function(oItems) { return new sap.ca.ui.charts.ClusterListItem(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.charts.ClusterListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.ClusterListItem.prototype.setTitle = function(sTitle) { return new sap.ca.ui.charts.ClusterListItem(); };


// ---- sap.ca.ui.charts.CombinedChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/CombinedChart.
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
 * <li>{@link #getData data} : any</li>
 * <li>{@link #getPrimaryAxis primaryAxis} : any</li>
 * <li>{@link #getSecondAxis secondAxis} : any</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getScrollArea scrollArea} : sap.m.ScrollContainer</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Allows you to create a chart using vertical bars and lines to represent the data
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.CombinedChart = function(sId,mSettings) {};
/**
 * Destroys the scrollArea in the aggregation 
 * named <code>scrollArea</code>.
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.destroyScrollArea = function() { return new sap.ca.ui.charts.CombinedChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.CombinedChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.CombinedChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>data</code>.
 * Data of the Chart
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>data</code>
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.getData = function() { return null; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.CombinedChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.CombinedChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>primaryAxis</code>.
 * Shapes for the internal viz chart primary axis
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>primaryAxis</code>
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.getPrimaryAxis = function() { return null; };

/**
 * Getter for aggregation <code>scrollArea</code>.<br/>
 * scroll area that contains the graph plot
 * 
 * @return {sap.m.ScrollContainer}
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.getScrollArea = function() { return new sap.m.ScrollContainer(); };

/**
 * Getter for property <code>secondAxis</code>.
 * Shapes for the internal viz chart second axis
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>secondAxis</code>
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.getSecondAxis = function() { return null; };

/**
 * Setter for property <code>data</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.setData = function(oData) { return new sap.ca.ui.charts.CombinedChart(); };

/**
 * Setter for property <code>primaryAxis</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oPrimaryAxis  new value for property <code>primaryAxis</code>
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.setPrimaryAxis = function(oPrimaryAxis) { return new sap.ca.ui.charts.CombinedChart(); };

/**
 * Setter for the aggregated <code>scrollArea</code>.
 * @param {sap.m.ScrollContainer} oScrollArea
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.setScrollArea = function(oScrollArea) { return new sap.ca.ui.charts.CombinedChart(); };

/**
 * Setter for property <code>secondAxis</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oSecondAxis  new value for property <code>secondAxis</code>
 * @return {sap.ca.ui.charts.CombinedChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.CombinedChart.prototype.setSecondAxis = function(oSecondAxis) { return new sap.ca.ui.charts.CombinedChart(); };


// ---- sap.ca.ui.charts.HorizontalBarChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/HorizontalBarChart.
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
 * <li>{@link #getData data} : object</li>
 * <li>{@link #getContainer container} : string (default: 'chart')</li>
 * <li>{@link #getBarHeight barHeight} : int (default: 48)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getScroll scroll} : sap.m.ScrollContainer</li>
 * <li>{@link #getHorizontalBarChart horizontalBarChart} : sap.viz.ui5.Bar</li>
 * <li>{@link #getVerticalArea verticalArea} : sap.m.VBox</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Allows you to create a chart using horizontal bars to represent the data
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.HorizontalBarChart = function(sId,mSettings) {};
/**
 * Destroys the horizontalBarChart in the aggregation 
 * named <code>horizontalBarChart</code>.
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.destroyHorizontalBarChart = function() { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Destroys the scroll in the aggregation 
 * named <code>scroll</code>.
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.destroyScroll = function() { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Destroys the verticalArea in the aggregation 
 * named <code>verticalArea</code>.
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.destroyVerticalArea = function() { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.HorizontalBarChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>barHeight</code>.
 * Minimum shape size for touch enabled actions, default and minimum to 48px !
 * 
 * Default value is <code>48</code>
 * 
 * @return {int} the value of property <code>barHeight</code>
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.getBarHeight = function() { return 0; };

/**
 * Getter for property <code>container</code>.
 * The DOM ID where the chart will be added. Deprecated
 * 
 * Default value is <code>chart</code>
 * 
 * @return {string} the value of property <code>container</code>
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.getContainer = function() { return ""; };

/**
 * Getter for property <code>data</code>.
 * The data to be used by the chart
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>data</code>
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.getData = function() { return new Object(); };

/**
 * Getter for aggregation <code>horizontalBarChart</code>.<br/>
 * The internal chart
 * 
 * @return {sap.viz.ui5.Bar}
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.getHorizontalBarChart = function() { return new sap.viz.ui5.Bar(); };

/**
 * Returns a metadata object for class sap.ca.ui.charts.HorizontalBarChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>scroll</code>.<br/>
 * The scroll container
 * 
 * @return {sap.m.ScrollContainer}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.getScroll = function() { return new sap.m.ScrollContainer(); };

/**
 * Getter for aggregation <code>verticalArea</code>.<br/>
 * The vertical area within the scroll container
 * 
 * @return {sap.m.VBox}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.getVerticalArea = function() { return new sap.m.VBox(); };

/**
 * Setter for property <code>barHeight</code>.
 * 
 * Default value is <code>48</code> 
 * 
 * @param {int} iBarHeight  new value for property <code>barHeight</code>
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.setBarHeight = function(iBarHeight) { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Setter for property <code>container</code>.
 * 
 * Default value is <code>chart</code> 
 * 
 * @param {string} sContainer  new value for property <code>container</code>
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.setContainer = function(sContainer) { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Setter for property <code>data</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.setData = function(oData) { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Setter for the aggregated <code>horizontalBarChart</code>.
 * @param {sap.viz.ui5.Bar} oHorizontalBarChart
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.setHorizontalBarChart = function(oHorizontalBarChart) { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Setter for the aggregated <code>scroll</code>.
 * @param {sap.m.ScrollContainer} oScroll
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.setScroll = function(oScroll) { return new sap.ca.ui.charts.HorizontalBarChart(); };

/**
 * Setter for the aggregated <code>verticalArea</code>.
 * @param {sap.m.VBox} oVerticalArea
 * @return {sap.ca.ui.charts.HorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.HorizontalBarChart.prototype.setVerticalArea = function(oVerticalArea) { return new sap.ca.ui.charts.HorizontalBarChart(); };


// ---- sap.ca.ui.charts.LineChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/LineChart.
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
 * <li>{@link #getChartTitle chartTitle} : string (default: 'Line Chart')</li>
 * <li>{@link #getDataLabelFormat dataLabelFormat} : any (default: '#0')</li>
 * <li>{@link #getMinTouchSize minTouchSize} : string (default: '48px')</li>
 * <li>{@link #getMinTouchWidth minTouchWidth} : string (default: '48px')</li>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getShowScrollContext showScrollContext} : boolean (default: false)</li>
 * <li>{@link #getChartDataset chartDataset} : any</li>
 * <li>{@link #getDatasetSettings datasetSettings} : any</li>
 * <li>{@link #getChartDatasetSettings chartDatasetSettings} : any</li>
 * <li>{@link #getDataPath dataPath} : string</li>
 * <li>{@link #getData data} : any</li>
 * <li>{@link #getChartBusinessData chartBusinessData} : any</li>
 * <li>{@link #getUseDelayedResize useDelayedResize} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getVertical vertical} : sap.m.VBox</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.charts.LineChart#event:onDetailsSelected onDetailsSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Line Chart for the Fiori Project
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @since 1.0.0
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.LineChart = function(sId,mSettings) {};
/**
 * Event fired when the details button is pressed on the selected Datapoint Popover
 * @event
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.charts.LineChart.prototype.onDetailsSelected = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'onDetailsSelected' event of this <code>sap.ca.ui.charts.LineChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.charts.LineChart</code>.<br/> itself. 
 *  
 * Event fired when the details button is pressed on the selected Datapoint Popover
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.charts.LineChart</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.attachOnDetailsSelected = function(oData,fnFunction,oListener) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Destroys the vertical in the aggregation 
 * named <code>vertical</code>.
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.destroyVertical = function() { return new sap.ca.ui.charts.LineChart(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'onDetailsSelected' event of this <code>sap.ca.ui.charts.LineChart</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.detachOnDetailsSelected = function(fnFunction,oListener) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.LineChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.LineChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event onDetailsSelected to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.fireOnDetailsSelected = function(mArguments) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Getter for property <code>chartBusinessData</code>.
 * Allow the chart data to be set, that is the measure and dimension values
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>chartBusinessData</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'data' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getChartBusinessData = function() { return null; };

/**
 * Getter for property <code>chartDataset</code>.
 * Allow the Dataset for the chart to be set, includes the dimensions, and measures, any data binding is removed, this will disable the chart scroll context view,
 * use the dataset settings if you want the
 * scroll context to work
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>chartDataset</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'dataset' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getChartDataset = function() { return null; };

/**
 * Getter for property <code>chartDatasetSettings</code>.
 * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally two datasets are created, one for the main chart and
 * one for the scroll context)
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>chartDatasetSettings</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'datasetSettings' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getChartDatasetSettings = function() { return null; };

/**
 * Getter for property <code>chartTitle</code>.
 * The title to display on the chart
 * 
 * Default value is <code>Line Chart</code>
 * 
 * @return {string} the value of property <code>chartTitle</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'title' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getChartTitle = function() { return ""; };

/**
 * Getter for property <code>data</code>.
 * Allow the chart data to be set, that is the measure and dimension values
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>data</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getData = function() { return null; };

/**
 * Getter for property <code>dataLabelFormat</code>.
 * The data format string to use to display the data labels on the graph, this is an array of arrays of Format String following the 'sap.viz.ui5.Line' documentation
 * 
 * Default value is <code>'#0'</code>
 * 
 * @return {any} the value of property <code>dataLabelFormat</code>
 * @public
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getDataLabelFormat = function() { return null; };

/**
 * Getter for property <code>dataPath</code>.
 * Allow the data path for binding the model to the dimensions and measures to be set
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>dataPath</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getDataPath = function() { return ""; };

/**
 * Getter for property <code>datasetSettings</code>.
 * Allow the Dataset for the chart to be set by providing the settings for the dataset creation, (internally two datasets are created, one for the main chart and
 * one
 * for the scroll context)
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {any} the value of property <code>datasetSettings</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is property is not needed any more, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getDatasetSettings = function() { return null; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.LineChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.LineChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minTouchSize</code>.
 * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile device, only applies if the chart width is not set
 * 
 * Default value is <code>48px</code>
 * 
 * @return {string} the value of property <code>minTouchSize</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'dataLabelFormatter' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getMinTouchSize = function() { return ""; };

/**
 * Getter for property <code>minTouchWidth</code>.
 * The minimum size (width for a line chart) that a point has to be, so as to be able to touch on a mobile device, only applies if the chart width is not set
 * 
 * Default value is <code>48px</code>
 * 
 * @return {string} the value of property <code>minTouchWidth</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'minShapeSize' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getMinTouchWidth = function() { return ""; };

/**
 * Getter for property <code>showLabel</code>.
 * Show the data label value on the chart
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showLabel</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'showDataLabel' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getShowLabel = function() { return false; };

/**
 * Getter for property <code>showScrollContext</code>.
 * Show the chart scroll context, (the preview of the whole chart as a small image when scrolling)
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showScrollContext</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Feature does not work correctly yet.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getShowScrollContext = function() { return false; };

/**
 * Getter for property <code>useDelayedResize</code>.
 * Use a delayed resize event to cause the chart to render when navigated to after resize when in the background
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>useDelayedResize</code>
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getUseDelayedResize = function() { return false; };

/**
 * Getter for aggregation <code>vertical</code>.<br/>
 * The vertical layout
 * 
 * @return {sap.m.VBox}
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.getVertical = function() { return new sap.m.VBox(); };

/**
 * Setter for property <code>chartBusinessData</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oChartBusinessData  new value for property <code>chartBusinessData</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'data' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setChartBusinessData = function(oChartBusinessData) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>chartDataset</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oChartDataset  new value for property <code>chartDataset</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'dataset' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setChartDataset = function(oChartDataset) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>chartDatasetSettings</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oChartDatasetSettings  new value for property <code>chartDatasetSettings</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'datasetSettings' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setChartDatasetSettings = function(oChartDatasetSettings) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>chartTitle</code>.
 * 
 * Default value is <code>Line Chart</code> 
 * 
 * @param {string} sChartTitle  new value for property <code>chartTitle</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'title' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setChartTitle = function(sChartTitle) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>data</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setData = function(oData) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>dataLabelFormat</code>.
 * 
 * Default value is <code>'#0'</code> 
 * 
 * @param {any} oDataLabelFormat  new value for property <code>dataLabelFormat</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setDataLabelFormat = function(oDataLabelFormat) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>dataPath</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sDataPath  new value for property <code>dataPath</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the binding on 'dataset', do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setDataPath = function(sDataPath) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>datasetSettings</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {any} oDatasetSettings  new value for property <code>datasetSettings</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is property is not needed any more, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setDatasetSettings = function(oDatasetSettings) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>minTouchSize</code>.
 * 
 * Default value is <code>48px</code> 
 * 
 * @param {string} sMinTouchSize  new value for property <code>minTouchSize</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'dataLabelFormatter' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setMinTouchSize = function(sMinTouchSize) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>minTouchWidth</code>.
 * 
 * Default value is <code>48px</code> 
 * 
 * @param {string} sMinTouchWidth  new value for property <code>minTouchWidth</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Please use the 'minShapeSize' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setMinTouchWidth = function(sMinTouchWidth) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>showLabel</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowLabel  new value for property <code>showLabel</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * This is a copy of the 'showDataLabel' property, do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setShowLabel = function(bShowLabel) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>showScrollContext</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowScrollContext  new value for property <code>showScrollContext</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Feature does not work correctly yet.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setShowScrollContext = function(bShowScrollContext) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for property <code>useDelayedResize</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bUseDelayedResize  new value for property <code>useDelayedResize</code>
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setUseDelayedResize = function(bUseDelayedResize) { return new sap.ca.ui.charts.LineChart(); };

/**
 * Setter for the aggregated <code>vertical</code>.
 * @param {sap.m.VBox} oVertical
 * @return {sap.ca.ui.charts.LineChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.0.0. 
 * Do not use as it will be removed in a future release.
 * 
 */
sap.ca.ui.charts.LineChart.prototype.setVertical = function(oVertical) { return new sap.ca.ui.charts.LineChart(); };


// ---- sap.ca.ui.charts.StackedHorizontalBarChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/StackedHorizontalBarChart.
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
 * <li>{@link #getType type} : string (default: 'StackedBar')</li>
 * <li>{@link #getMinTouchSize minTouchSize} : sap.ui.core.CSSSize (default: '48px')</li>
 * <li>{@link #getDataLabelFormat dataLabelFormat} : any (default: [["##"]])</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Stacked Horizontal Bar Chart wrapper around the viz StackedBarChart / MultipleStackedBarChart.
 * To be used in conjunction with the chart toolbar.
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart = function(sId,mSettings) {};
/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.StackedHorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.addContent = function(oContent) { return new sap.ca.ui.charts.StackedHorizontalBarChart(); };

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.charts.StackedHorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.destroyContent = function() { return new sap.ca.ui.charts.StackedHorizontalBarChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.StackedHorizontalBarChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Deprecated aggregation. Left for compatibility purposes.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>dataLabelFormat</code>.
 * Defines the formater string for the dataLabel value to be diaplyed on the bubble e.g [ [##]]
 * 
 * Default value is <code>[["##"]]</code>
 * 
 * @return {any} the value of property <code>dataLabelFormat</code>
 * @public
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.getDataLabelFormat = function() { return null; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.StackedHorizontalBarChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minTouchSize</code>.
 * Mapped to minShapeSize property.
 * 
 * Default value is <code>48px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>minTouchSize</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize instead.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.getMinTouchSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>type</code>.
 * Mapped to charType property.
 * 
 * Default value is <code>StackedBar</code>
 * 
 * @return {string} the value of property <code>type</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * type has been deprecated since 1.16.3. Please use the chartType instead.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.getType = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ca.ui.charts.StackedHorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.insertContent = function(oContent,iIndex) { return new sap.ca.ui.charts.StackedHorizontalBarChart(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>dataLabelFormat</code>.
 * 
 * Default value is <code>[["##"]]</code> 
 * 
 * @param {any} oDataLabelFormat  new value for property <code>dataLabelFormat</code>
 * @return {sap.ca.ui.charts.StackedHorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.setDataLabelFormat = function(oDataLabelFormat) { return new sap.ca.ui.charts.StackedHorizontalBarChart(); };

/**
 * Setter for property <code>minTouchSize</code>.
 * 
 * Default value is <code>48px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sMinTouchSize  new value for property <code>minTouchSize</code>
 * @return {sap.ca.ui.charts.StackedHorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize instead.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.setMinTouchSize = function(sMinTouchSize) { return new sap.ca.ui.charts.StackedHorizontalBarChart(); };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>StackedBar</code> 
 * 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ca.ui.charts.StackedHorizontalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * type has been deprecated since 1.16.3. Please use the chartType instead.
 * 
 */
sap.ca.ui.charts.StackedHorizontalBarChart.prototype.setType = function(sType) { return new sap.ca.ui.charts.StackedHorizontalBarChart(); };


// ---- sap.ca.ui.charts.StackedVerticalColumnChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/StackedVerticalColumnChart.
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
 * <li>{@link #getType type} : string (default: 'StackedColumn')</li>
 * <li>{@link #getMinTouchSize minTouchSize} : sap.ui.core.CSSSize (default: '48px')</li>
 * <li>{@link #getDataLabelFormat dataLabelFormat} : any (default: [["##"]])</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Stacked Vertical Column Chart wrapper around the viz StackedColumnChart / MultipleStackedColumnChart.
 * To be used in conjunction with the chart toolbar.
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart = function(sId,mSettings) {};
/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.addContent = function(oContent) { return new sap.ca.ui.charts.StackedVerticalColumnChart(); };

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.destroyContent = function() { return new sap.ca.ui.charts.StackedVerticalColumnChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.StackedVerticalColumnChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Deprecated aggregation. Left for compatibility purposes.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>dataLabelFormat</code>.
 * Does not do anything anymore
 * 
 * Default value is <code>[["##"]]</code>
 * 
 * @return {any} the value of property <code>dataLabelFormat</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter instead.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.getDataLabelFormat = function() { return null; };

/**
 * Returns a metadata object for class sap.ca.ui.charts.StackedVerticalColumnChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minTouchSize</code>.
 * Mapped to minShapeSize property.
 * 
 * Default value is <code>'48px'</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>minTouchSize</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize instead.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.getMinTouchSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Getter for property <code>type</code>.
 * Mapped to charType property.
 * 
 * Default value is <code>StackedColumn</code>
 * 
 * @return {string} the value of property <code>type</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * type has been deprecated since 1.16.3. Please use the chartType instead.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.getType = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.insertContent = function(oContent,iIndex) { return new sap.ca.ui.charts.StackedVerticalColumnChart(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * content has been deprecated since 1.16.3. The only visible content in the chart now is the internalVizChart.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>dataLabelFormat</code>.
 * 
 * Default value is <code>[["##"]]</code> 
 * 
 * @param {any} oDataLabelFormat  new value for property <code>dataLabelFormat</code>
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * dataLabelFormat has been deprecated since 1.16.3. Please use the dataLabelFormatter instead.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.setDataLabelFormat = function(oDataLabelFormat) { return new sap.ca.ui.charts.StackedVerticalColumnChart(); };

/**
 * Setter for property <code>minTouchSize</code>.
 * 
 * Default value is <code>'48px'</code> 
 * 
 * @param {sap.ui.core.CSSSize} sMinTouchSize  new value for property <code>minTouchSize</code>
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * minTouchSize has been deprecated since 1.16.3. Please use the minShapeSize instead.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.setMinTouchSize = function(sMinTouchSize) { return new sap.ca.ui.charts.StackedVerticalColumnChart(); };

/**
 * Setter for property <code>type</code>.
 * 
 * Default value is <code>StackedColumn</code> 
 * 
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ca.ui.charts.StackedVerticalColumnChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * 
 * type has been deprecated since 1.16.3. Please use the chartType instead.
 * 
 */
sap.ca.ui.charts.StackedVerticalColumnChart.prototype.setType = function(sType) { return new sap.ca.ui.charts.StackedVerticalColumnChart(); };


// ---- sap.ca.ui.charts.VerticalBarChart --------------------------------------------------------------------------

/**
 * Constructor for a new charts/VerticalBarChart.
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
 * <li>{@link #getData data} : object</li>
 * <li>{@link #getContainer container} : string (default: 'chart')</li>
 * <li>{@link #getBarWidth barWidth} : int (default: 48)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getScroll scroll} : sap.m.ScrollContainer</li>
 * <li>{@link #getVerticalBarChart verticalBarChart} : sap.viz.ui5.Column</li>
 * <li>{@link #getVerticalArea verticalArea} : sap.m.VBox</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ca.ui.charts.Chart#constructor sap.ca.ui.charts.Chart}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Allows you to create a chart using vertical bars to represent the data
 * @extends sap.ca.ui.charts.Chart
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * 
 * Sap.ca charts have been replaced with sap.viz and vizFrame in 1.24.
 * The UI5 control "sap.viz.ui5.controls.VizFrame" serves as a single point of entry for all the new charts.
 * Now that 1.24 is available you are asked to use sap.viz charts and the VizFrame instead!
 * This control will not be supported anymore from 1.24.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.charts.VerticalBarChart = function(sId,mSettings) {};
/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.addContent = function(oContent) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.destroyContent = function() { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Destroys the scroll in the aggregation 
 * named <code>scroll</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.destroyScroll = function() { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Destroys the verticalArea in the aggregation 
 * named <code>verticalArea</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.destroyVerticalArea = function() { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Destroys the verticalBarChart in the aggregation 
 * named <code>verticalBarChart</code>.
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.destroyVerticalBarChart = function() { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Creates a new subclass of class sap.ca.ui.charts.VerticalBarChart with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.VerticalBarChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>barWidth</code>.
 * Minimum shape size for touch enabled actions, default and minimum to 48px !
 * 
 * Default value is <code>48</code>
 * 
 * @return {int} the value of property <code>barWidth</code>
 * @public
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getBarWidth = function() { return 0; };

/**
 * Getter for property <code>container</code>.
 * The DOM ID where the chart will be added. Deprecated
 * 
 * Default value is <code>chart</code>
 * 
 * @return {string} the value of property <code>container</code>
 * @public
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getContainer = function() { return ""; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Deprecated aggregation. Left for compatibility purposes.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>data</code>.
 * The data to be used by the chart
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {object} the value of property <code>data</code>
 * @public
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getData = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ca.ui.charts.VerticalBarChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.charts.VerticalBarChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for aggregation <code>scroll</code>.<br/>
 * The scroll container
 * 
 * @return {sap.m.ScrollContainer}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getScroll = function() { return new sap.m.ScrollContainer(); };

/**
 * Getter for aggregation <code>verticalArea</code>.<br/>
 * The vertical layout
 * 
 * @return {sap.m.VBox}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getVerticalArea = function() { return new sap.m.VBox(); };

/**
 * Getter for aggregation <code>verticalBarChart</code>.<br/>
 * The chart
 * 
 * @return {sap.viz.ui5.Column}
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.getVerticalBarChart = function() { return new sap.viz.ui5.Column(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.insertContent = function(oContent,iIndex) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>barWidth</code>.
 * 
 * Default value is <code>48</code> 
 * 
 * @param {int} iBarWidth  new value for property <code>barWidth</code>
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.setBarWidth = function(iBarWidth) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Setter for property <code>container</code>.
 * 
 * Default value is <code>chart</code> 
 * 
 * @param {string} sContainer  new value for property <code>container</code>
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.setContainer = function(sContainer) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Setter for property <code>data</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {object} oData  new value for property <code>data</code>
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.setData = function(oData) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Setter for the aggregated <code>scroll</code>.
 * @param {sap.m.ScrollContainer} oScroll
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.setScroll = function(oScroll) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Setter for the aggregated <code>verticalArea</code>.
 * @param {sap.m.VBox} oVerticalArea
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.setVerticalArea = function(oVerticalArea) { return new sap.ca.ui.charts.VerticalBarChart(); };

/**
 * Setter for the aggregated <code>verticalBarChart</code>.
 * @param {sap.viz.ui5.Column} oVerticalBarChart
 * @return {sap.ca.ui.charts.VerticalBarChart} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * This method is deprecated now.
 * 
 */
sap.ca.ui.charts.VerticalBarChart.prototype.setVerticalBarChart = function(oVerticalBarChart) { return new sap.ca.ui.charts.VerticalBarChart(); };


// ---- sap.ca.ui.CustomerContext --------------------------------------------------------------------------

/**
 * Constructor for a new CustomerContext.
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
 * <li>{@link #getPersonalizationPageName personalizationPageName} : string (default: 'AppCustomerContext')</li>
 * <li>{@link #getShowSalesArea showSalesArea} : boolean (default: false)</li>
 * <li>{@link #getPath path} : string (default: '/Customers')</li>
 * <li>{@link #getCustomerIDProperty customerIDProperty} : string (default: 'CustomerID')</li>
 * <li>{@link #getCustomerNameProperty customerNameProperty} : string (default: 'CustomerName')</li>
 * <li>{@link #getSalesOrganizationNameProperty salesOrganizationNameProperty} : string (default: 'SalesOrganizationName')</li>
 * <li>{@link #getDistributionChannelNameProperty distributionChannelNameProperty} : string (default: 'DistributionChannelName')</li>
 * <li>{@link #getDivisionNameProperty divisionNameProperty} : string (default: 'DivisionName')</li>
 * <li>{@link #getDialogTitle dialogTitle} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.CustomerContext#event:customerSelected customerSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control allows you to open a dialog containing a list of customers for users to pick.
 * The chosen selected customer is persisted using sap.ushell services that shall be fully configured outside of this control.
 * 
 * The dialog can be open following two modes:
 * "select" : exiting without choosing a customer is firing the customerSelected event with a null customer before closing the dialog
 * "change" : exiting without choosing a customer is simply closing the dialog
 * 
 * When opening the dialog in "select" mode, if a customer has been persisted in a previous session, it will be retrieved and the dialog won't open at all.
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.3. 
 * This control is not required anymore as per central UX requirements.
 * Please use Contextual Filter design instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.CustomerContext = function(sId,mSettings) {};
/**
 * Fired when a customer is selected in the list. The fired customer can be empty in case the user press the cancel button while the Customer Context has been open using select()
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.customerSelected = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'customerSelected' event of this <code>sap.ca.ui.CustomerContext</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.CustomerContext</code>.<br/> itself. 
 *  
 * Fired when a customer is selected in the list. The fired customer can be empty in case the user press the cancel button while the Customer Context has been open using select()
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.CustomerContext</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.attachCustomerSelected = function(oData,fnFunction,oListener) { return new sap.ca.ui.CustomerContext(); };

/**
 * Open the Customer Context dialog
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.CustomerContext.prototype.change = function() { return null; };

/**
 * Detach event handler <code>fnFunction</code> from the 'customerSelected' event of this <code>sap.ca.ui.CustomerContext</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.detachCustomerSelected = function(fnFunction,oListener) { return new sap.ca.ui.CustomerContext(); };

/**
 * Creates a new subclass of class sap.ca.ui.CustomerContext with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.CustomerContext.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event customerSelected to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.CustomerContext.prototype.fireCustomerSelected = function(mArguments) { return new sap.ca.ui.CustomerContext(); };

/**
 * Getter for property <code>customerIDProperty</code>.
 * Property name of the customer ID
 * 
 * Default value is <code>CustomerID</code>
 * 
 * @return {string} the value of property <code>customerIDProperty</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getCustomerIDProperty = function() { return ""; };

/**
 * Getter for property <code>customerNameProperty</code>.
 * Property name of the customer name
 * 
 * Default value is <code>CustomerName</code>
 * 
 * @return {string} the value of property <code>customerNameProperty</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getCustomerNameProperty = function() { return ""; };

/**
 * Getter for property <code>dialogTitle</code>.
 * Overrides the default Dialog title
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>dialogTitle</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getDialogTitle = function() { return ""; };

/**
 * Getter for property <code>distributionChannelNameProperty</code>.
 * Property name of the distribution channel name
 * 
 * Default value is <code>DistributionChannelName</code>
 * 
 * @return {string} the value of property <code>distributionChannelNameProperty</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getDistributionChannelNameProperty = function() { return ""; };

/**
 * Getter for property <code>divisionNameProperty</code>.
 * Property name of the division name
 * 
 * Default value is <code>DivisionName</code>
 * 
 * @return {string} the value of property <code>divisionNameProperty</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getDivisionNameProperty = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.CustomerContext.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.CustomerContext.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>path</code>.
 * Model path to the customer collection to be displayed
 * 
 * Default value is <code>/Customers</code>
 * 
 * @return {string} the value of property <code>path</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getPath = function() { return ""; };

/**
 * Getter for property <code>personalizationPageName</code>.
 * Name of your app that shall be unique.
 * 
 * Default value is <code>AppCustomerContext</code>
 * 
 * @return {string} the value of property <code>personalizationPageName</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getPersonalizationPageName = function() { return ""; };

/**
 * Getter for property <code>salesOrganizationNameProperty</code>.
 * Property name of the sales organization name
 * 
 * Default value is <code>SalesOrganizationName</code>
 * 
 * @return {string} the value of property <code>salesOrganizationNameProperty</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getSalesOrganizationNameProperty = function() { return ""; };

/**
 * Getter for property <code>showSalesArea</code>.
 * Display or not the customers sales area as well as its name and id.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showSalesArea</code>
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.getShowSalesArea = function() { return false; };

/**
 * Delete the user selected customer
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.CustomerContext.prototype.reset = function() { return null; };

/**
 * Open the Customer Context dialog and fires a null customerSelected if the cancel button is clicked
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.CustomerContext.prototype.select = function() { return null; };

/**
 * Setter for property <code>customerIDProperty</code>.
 * 
 * Default value is <code>CustomerID</code> 
 * 
 * @param {string} sCustomerIDProperty  new value for property <code>customerIDProperty</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setCustomerIDProperty = function(sCustomerIDProperty) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>customerNameProperty</code>.
 * 
 * Default value is <code>CustomerName</code> 
 * 
 * @param {string} sCustomerNameProperty  new value for property <code>customerNameProperty</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setCustomerNameProperty = function(sCustomerNameProperty) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>dialogTitle</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sDialogTitle  new value for property <code>dialogTitle</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setDialogTitle = function(sDialogTitle) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>distributionChannelNameProperty</code>.
 * 
 * Default value is <code>DistributionChannelName</code> 
 * 
 * @param {string} sDistributionChannelNameProperty  new value for property <code>distributionChannelNameProperty</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setDistributionChannelNameProperty = function(sDistributionChannelNameProperty) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>divisionNameProperty</code>.
 * 
 * Default value is <code>DivisionName</code> 
 * 
 * @param {string} sDivisionNameProperty  new value for property <code>divisionNameProperty</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setDivisionNameProperty = function(sDivisionNameProperty) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for the control model
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.CustomerContext.prototype.setModel = function() { return null; };

/**
 * Setter for property <code>path</code>.
 * 
 * Default value is <code>/Customers</code> 
 * 
 * @param {string} sPath  new value for property <code>path</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setPath = function(sPath) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>personalizationPageName</code>.
 * 
 * Default value is <code>AppCustomerContext</code> 
 * 
 * @param {string} sPersonalizationPageName  new value for property <code>personalizationPageName</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setPersonalizationPageName = function(sPersonalizationPageName) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>salesOrganizationNameProperty</code>.
 * 
 * Default value is <code>SalesOrganizationName</code> 
 * 
 * @param {string} sSalesOrganizationNameProperty  new value for property <code>salesOrganizationNameProperty</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setSalesOrganizationNameProperty = function(sSalesOrganizationNameProperty) { return new sap.ca.ui.CustomerContext(); };

/**
 * Setter for property <code>showSalesArea</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowSalesArea  new value for property <code>showSalesArea</code>
 * @return {sap.ca.ui.CustomerContext} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerContext.prototype.setShowSalesArea = function(bShowSalesArea) { return new sap.ca.ui.CustomerContext(); };


// ---- sap.ca.ui.CustomerControlListItem --------------------------------------------------------------------------

/**
 * Constructor for a new CustomerControlListItem.
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
 * <li>{@link #getShowSalesArea showSalesArea} : boolean (default: false)</li>
 * <li>{@link #getCustomerID customerID} : string (default: 'CustomerID')</li>
 * <li>{@link #getCustomerName customerName} : string (default: 'CustomerName')</li>
 * <li>{@link #getSalesOrganizationName salesOrganizationName} : string (default: 'SalesOrganizationName')</li>
 * <li>{@link #getDistributionChannelName distributionChannelName} : string (default: 'DistributionChannelName')</li>
 * <li>{@link #getDivisionName divisionName} : string (default: 'DivisionName')</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.CustomListItem#constructor sap.m.CustomListItem}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Extends the ObjectListItem to display a line in the customer context control.
 * @extends sap.m.CustomListItem
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.3. 
 * This control is not required anymore as per central UX requirements.
 * Please use Contextual Filter design instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.CustomerControlListItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.CustomerControlListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.CustomerControlListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>customerID</code>.
 * The ID of the customer
 * 
 * Default value is <code>CustomerID</code>
 * 
 * @return {string} the value of property <code>customerID</code>
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.getCustomerID = function() { return ""; };

/**
 * Getter for property <code>customerName</code>.
 * The name of the customer
 * 
 * Default value is <code>CustomerName</code>
 * 
 * @return {string} the value of property <code>customerName</code>
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.getCustomerName = function() { return ""; };

/**
 * Getter for property <code>distributionChannelName</code>.
 * The distribution channel name
 * 
 * Default value is <code>DistributionChannelName</code>
 * 
 * @return {string} the value of property <code>distributionChannelName</code>
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.getDistributionChannelName = function() { return ""; };

/**
 * Getter for property <code>divisionName</code>.
 * The division name
 * 
 * Default value is <code>DivisionName</code>
 * 
 * @return {string} the value of property <code>divisionName</code>
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.getDivisionName = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.CustomerControlListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.CustomerControlListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>salesOrganizationName</code>.
 * The sales organization name
 * 
 * Default value is <code>SalesOrganizationName</code>
 * 
 * @return {string} the value of property <code>salesOrganizationName</code>
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.getSalesOrganizationName = function() { return ""; };

/**
 * Getter for property <code>showSalesArea</code>.
 * Display or not the customers sales area as well as its name and id.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showSalesArea</code>
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.getShowSalesArea = function() { return false; };

/**
 * Setter for property <code>customerID</code>.
 * 
 * Default value is <code>CustomerID</code> 
 * 
 * @param {string} sCustomerID  new value for property <code>customerID</code>
 * @return {sap.ca.ui.CustomerControlListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.setCustomerID = function(sCustomerID) { return new sap.ca.ui.CustomerControlListItem(); };

/**
 * Setter for property <code>customerName</code>.
 * 
 * Default value is <code>CustomerName</code> 
 * 
 * @param {string} sCustomerName  new value for property <code>customerName</code>
 * @return {sap.ca.ui.CustomerControlListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.setCustomerName = function(sCustomerName) { return new sap.ca.ui.CustomerControlListItem(); };

/**
 * Setter for property <code>distributionChannelName</code>.
 * 
 * Default value is <code>DistributionChannelName</code> 
 * 
 * @param {string} sDistributionChannelName  new value for property <code>distributionChannelName</code>
 * @return {sap.ca.ui.CustomerControlListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.setDistributionChannelName = function(sDistributionChannelName) { return new sap.ca.ui.CustomerControlListItem(); };

/**
 * Setter for property <code>divisionName</code>.
 * 
 * Default value is <code>DivisionName</code> 
 * 
 * @param {string} sDivisionName  new value for property <code>divisionName</code>
 * @return {sap.ca.ui.CustomerControlListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.setDivisionName = function(sDivisionName) { return new sap.ca.ui.CustomerControlListItem(); };

/**
 * Setter for property <code>salesOrganizationName</code>.
 * 
 * Default value is <code>SalesOrganizationName</code> 
 * 
 * @param {string} sSalesOrganizationName  new value for property <code>salesOrganizationName</code>
 * @return {sap.ca.ui.CustomerControlListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.setSalesOrganizationName = function(sSalesOrganizationName) { return new sap.ca.ui.CustomerControlListItem(); };

/**
 * Setter for property <code>showSalesArea</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowSalesArea  new value for property <code>showSalesArea</code>
 * @return {sap.ca.ui.CustomerControlListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.CustomerControlListItem.prototype.setShowSalesArea = function(bShowSalesArea) { return new sap.ca.ui.CustomerControlListItem(); };


// ---- sap.ca.ui.DatePicker --------------------------------------------------------------------------

/**
 * Constructor for a new DatePicker.
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
 * <li>{@link #getFirstDayOffset firstDayOffset} : int (default: 0)</li>
 * <li>{@link #getDateValue dateValue} : string</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Allows end users to interact with dates.
 * Entries can directly be written in, or selected from a calendar pad.
 * @extends sap.m.InputBase
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * This control has been made available in sap.m.
 * Please use the sap.m.DatePicker instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.DatePicker = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.DatePicker with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.DatePicker.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * returns selected date as a Date object
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.DatePicker.prototype.getDate = function() { return new Object(); };

/**
 * Getter for property <code>dateValue</code>.
 * This is a date string formatted as per the format for the control. If there is no valid input
 * for the control, this value will be null.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>dateValue</code>
 * @public
 * 
 */
sap.ca.ui.DatePicker.prototype.getDateValue = function() { return ""; };

/**
 * Getter for property <code>firstDayOffset</code>.
 * This property is used to offset the first day of the week (0 = sunday). Returns int, default
 * 0
 * 
 * Default value is <code>0</code>
 * 
 * @return {int} the value of property <code>firstDayOffset</code>
 * @public
 * 
 */
sap.ca.ui.DatePicker.prototype.getFirstDayOffset = function() { return 0; };

/**
 * Returns a metadata object for class sap.ca.ui.DatePicker.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.DatePicker.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>dateValue</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sDateValue  new value for property <code>dateValue</code>
 * @return {sap.ca.ui.DatePicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.DatePicker.prototype.setDateValue = function(sDateValue) { return new sap.ca.ui.DatePicker(); };

/**
 * Setter for property <code>firstDayOffset</code>.
 * 
 * Default value is <code>0</code> 
 * 
 * @param {int} iFirstDayOffset  new value for property <code>firstDayOffset</code>
 * @return {sap.ca.ui.DatePicker} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.DatePicker.prototype.setFirstDayOffset = function(iFirstDayOffset) { return new sap.ca.ui.DatePicker(); };


// ---- sap.ca.ui.dialog.confirmation --------------------------------------------------------------------------

/**
 * Opens the confirmation dialog
 * @param {object} [oSettings] settings for the confirmation dialog
 *        <p>The supported settings are:</p>
 *        <p>additionalInformation  : {array} optional, up-to 4 lines can be shown, every line has the structure: {label: "Leave Type", text: "Vacation"}</p>
 *        <p>confirmButtonLabel  {string} text for the confirm button</p>
 *        <p>noteMandatory  :{boolean} optional, default <i>false</i>
 *        <p>question  : {string} the question/action which the user needs to confirm</p>
 *        <p>showNote  : {boolean} default <i>true</i>
 *        <p>title  : {string} title of the dialog
 * @param {function} [fnClose] the function will be called if the confirmation dialog is closed.
 *        <p>there are 2 default values can be retrieved:</p>
 *        <p>isConfirmed : {boolean} <i>true</i> if the user confirms the action; <i>false</i> if the user cancels the dialog</p>
 *        <p>sNote : {string} the note text provided by the user</p>
 * @public
 * 
 * @memberof sap.ca.ui.dialog.confirmation
 */
sap.ca.ui.dialog.confirmation.prototype.open = function(oSettings,fnClose) {  };


// ---- sap.ca.ui.ExpansibleFeedListItem --------------------------------------------------------------------------

/**
 * Constructor for a new ExpansibleFeedListItem.
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
 * <li>{@link #getMaxLines maxLines} : int (default: 5)</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.FeedListItem#constructor sap.m.FeedListItem}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Extends the FeedListItem to hide text when it is longer than maxLines. When text is hidden a See more
 * link is displayed, clicking on the link displays the entire text.
 * @extends sap.m.FeedListItem
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * This control has been made available in sap.m. Please use sap.m.FeedListItem instead! This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.ExpansibleFeedListItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.ExpansibleFeedListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.ExpansibleFeedListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>maxLines</code>.
 * The maximum number of lines to display before adding the "See more" link.
 * 
 * Default value is <code>5</code>
 * 
 * @return {int} the value of property <code>maxLines</code>
 * @public
 * 
 */
sap.ca.ui.ExpansibleFeedListItem.prototype.getMaxLines = function() { return 0; };

/**
 * Returns a metadata object for class sap.ca.ui.ExpansibleFeedListItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.ExpansibleFeedListItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>maxLines</code>.
 * 
 * Default value is <code>5</code> 
 * 
 * @param {int} iMaxLines  new value for property <code>maxLines</code>
 * @return {sap.ca.ui.ExpansibleFeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.ExpansibleFeedListItem.prototype.setMaxLines = function(iMaxLines) { return new sap.ca.ui.ExpansibleFeedListItem(); };


// ---- sap.ca.ui.FileUpload --------------------------------------------------------------------------

/**
 * Constructor for a new FileUpload.
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
 * <li>{@link #getUploadUrl uploadUrl} : string</li>
 * <li>{@link #getFileName fileName} : string</li>
 * <li>{@link #getSize size} : string</li>
 * <li>{@link #getUrl url} : string</li>
 * <li>{@link #getUploadedDate uploadedDate} : string</li>
 * <li>{@link #getContributor contributor} : string</li>
 * <li>{@link #getFileExtension fileExtension} : string</li>
 * <li>{@link #getMimeType mimeType} : string</li>
 * <li>{@link #getItems items} : string</li>
 * <li>{@link #getUploadEnabled uploadEnabled} : boolean</li>
 * <li>{@link #getFileId fileId} : string</li>
 * <li>{@link #getXsrfToken xsrfToken} : string</li>
 * <li>{@link #getUseMultipart useMultipart} : boolean (default: false)</li>
 * <li>{@link #getAcceptRequestHeader acceptRequestHeader} : string (default: 'application/json')</li>
 * <li>{@link #getEncodeUrl encodeUrl} : string</li>
 * <li>{@link #getRenameEnabled renameEnabled} : boolean</li>
 * <li>{@link #getDeleteEnabled deleteEnabled} : boolean</li>
 * <li>{@link #getMultipleSelectionEnabled multipleSelectionEnabled} : boolean (default: true)</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: false)</li>
 * <li>{@link #getSequentialUploadsEnabled sequentialUploadsEnabled} : boolean (default: false)</li>
 * <li>{@link #getShowAttachmentsLabel showAttachmentsLabel} : boolean (default: true)</li>
 * <li>{@link #getUseEditControls useEditControls} : boolean (default: false)</li>
 * <li>{@link #getShowAttachmentsLabelInEditMode showAttachmentsLabelInEditMode} : boolean (default: true)</li>
 * <li>{@link #getEditMode editMode} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getUploadProgressLabel uploadProgressLabel} : sap.m.Label</li>
 * <li>{@link #getAttachmentNumberLabel attachmentNumberLabel} : sap.m.Label</li>
 * <li>{@link #getToolBar toolBar} : sap.m.Toolbar</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.FileUpload#event:deleteFile deleteFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:renameFile renameFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:uploadFile uploadFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:fileUploadFailed fileUploadFailed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:beforeUploadFile beforeUploadFile} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:saveClicked saveClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.FileUpload#event:cancelClicked cancelClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Allows you to display a list of uploaded files. You can also upload a new one, rename or delete them
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.26. 
 * This control is available in sap.m in 1.26, as sap.m.UploadCollection.
 * Please use UploadCollection, as sap.ca.ui.FileUpload will not be supported anymore from 1.26.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.FileUpload = function(sId,mSettings) {};
/**
 * Fired just before the control is about to make a file upload request. The data passed is the file object selected by the user. You may handle this event to attach custom headers for example if your service implementation requires it.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.beforeUploadFile = function(oControlEvent) {  };

/**
 * Fired when the cancel button is clicked. The consumer may handle the event if required.
 * @event
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.cancelClicked = function(oControlEvent) {  };

/**
 * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor json for the file to be deleted is passed in the event data
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.deleteFile = function(oControlEvent) {  };

/**
 * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer should handle the error by showing the appropriate message.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.fileUploadFailed = function(oControlEvent) {  };

/**
 * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event data and also a property, newFilename, that contains the new filename.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.renameFile = function(oControlEvent) {  };

/**
 * Fired when the save button is clicked. The consumer should handle the event and save all the file renames to backend.
 * @event
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now. The rename or delete event is enough and should be use to commit the action immediatly
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.saveClicked = function(oControlEvent) {  };

/**
 * Fired when a file is uploaded and the response comes back from service. The service response for the file to be added to the list is passed in the event data and the consumer must format it in the correct json structure and pass it back to the control using commitUploadFile method.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.uploadFile = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'beforeUploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired just before the control is about to make a file upload request. The data passed is the file object selected by the user. You may handle this event to attach custom headers for example if your service implementation requires it.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.attachBeforeUploadFile = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'cancelClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when the cancel button is clicked. The consumer may handle the event if required.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now
 * 
 */
sap.ca.ui.FileUpload.prototype.attachCancelClicked = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'deleteFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file deletion event occurs typically by clicking a the delete icon. The file descriptor json for the file to be deleted is passed in the event data
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.attachDeleteFile = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'fileUploadFailed' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file fails to upload. The error code and response data is passed in this event. The consumer should handle the error by showing the appropriate message.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.attachFileUploadFailed = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'renameFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file is renamed. The file descripter json for the file to be renamed is passed in the event data and also a property, newFilename, that contains the new filename.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.attachRenameFile = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'saveClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when the save button is clicked. The consumer should handle the event and save all the file renames to backend.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now. The rename or delete event is enough and should be use to commit the action immediatly
 * 
 */
sap.ca.ui.FileUpload.prototype.attachSaveClicked = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'uploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.FileUpload</code>.<br/> itself. 
 *  
 * Fired when a file is uploaded and the response comes back from service. The service response for the file to be added to the list is passed in the event data and the consumer must format it in the correct json structure and pass it back to the control using commitUploadFile method.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.FileUpload</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.attachUploadFile = function(oData,fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Destroys the attachmentNumberLabel in the aggregation 
 * named <code>attachmentNumberLabel</code>.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.21.0. 
 * This aggregation is deprecatd now. The label is part of the ToolBar
 * 
 */
sap.ca.ui.FileUpload.prototype.destroyAttachmentNumberLabel = function() { return new sap.ca.ui.FileUpload(); };

/**
 * Destroys the toolBar in the aggregation 
 * named <code>toolBar</code>.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.destroyToolBar = function() { return new sap.ca.ui.FileUpload(); };

/**
 * Destroys the uploadProgressLabel in the aggregation 
 * named <code>uploadProgressLabel</code>.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.destroyUploadProgressLabel = function() { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeUploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.detachBeforeUploadFile = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cancelClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now
 * 
 */
sap.ca.ui.FileUpload.prototype.detachCancelClicked = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'deleteFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.detachDeleteFile = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'fileUploadFailed' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.detachFileUploadFailed = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'renameFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.detachRenameFile = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'saveClicked' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now. The rename or delete event is enough and should be use to commit the action immediatly
 * 
 */
sap.ca.ui.FileUpload.prototype.detachSaveClicked = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'uploadFile' event of this <code>sap.ca.ui.FileUpload</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.detachUploadFile = function(fnFunction,oListener) { return new sap.ca.ui.FileUpload(); };

/**
 * Creates a new subclass of class sap.ca.ui.FileUpload with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.FileUpload.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event beforeUploadFile to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.FileUpload.prototype.fireBeforeUploadFile = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Fire event cancelClicked to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now
 * 
 */
sap.ca.ui.FileUpload.prototype.fireCancelClicked = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Fire event deleteFile to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.FileUpload.prototype.fireDeleteFile = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Fire event fileUploadFailed to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.FileUpload.prototype.fireFileUploadFailed = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Fire event renameFile to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.FileUpload.prototype.fireRenameFile = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Fire event saveClicked to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.21.1. 
 * This method is deprecated now. The rename or delete event is enough and should be use to commit the action immediatly
 * 
 */
sap.ca.ui.FileUpload.prototype.fireSaveClicked = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Fire event uploadFile to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.FileUpload.prototype.fireUploadFile = function(mArguments) { return new sap.ca.ui.FileUpload(); };

/**
 * Getter for property <code>acceptRequestHeader</code>.
 * The Accept request header the control should use when sending the upload request
 * 
 * Default value is <code>application/json</code>
 * 
 * @return {string} the value of property <code>acceptRequestHeader</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getAcceptRequestHeader = function() { return ""; };

/**
 * Getter for property <code>contributor</code>.
 * Relative path in model, pointing to property that stores the name of the person who uploaded the file.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>contributor</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getContributor = function() { return ""; };

/**
 * Getter for property <code>deleteEnabled</code>.
 * Indicates whether delete functionality should be enabled
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {boolean} the value of property <code>deleteEnabled</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getDeleteEnabled = function() { return false; };

/**
 * Getter for property <code>editMode</code>.
 * Property to allow toggling between edit and view screens.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>editMode</code>
 * @public
 * @deprecated Since version 1.21.0. 
 * This method is deprecatd now. If you want to prevent edit you can use useEditControls property or the deleteEnabled, renameEnabed and uploadEnabled properties
 * 
 */
sap.ca.ui.FileUpload.prototype.getEditMode = function() { return false; };

/**
 * Getter for property <code>encodeUrl</code>.
 * Url of server that will base64 encode the file
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>encodeUrl</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getEncodeUrl = function() { return ""; };

/**
 * Getter for property <code>fileExtension</code>.
 * Relative path in model, pointing to property that stores the uploaded files extension. Note: either fileExtension or mimeType may be used, but mimeType is preferable.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>fileExtension</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getFileExtension = function() { return ""; };

/**
 * Getter for property <code>fileId</code>.
 * An identifier property name that is used to uniquely reference the file on the server.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>fileId</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getFileId = function() { return ""; };

/**
 * Getter for property <code>fileName</code>.
 * Relative path in model, pointing to property that stores the name of a file.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>fileName</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getFileName = function() { return ""; };

/**
 * Getter for property <code>items</code>.
 * The base path in the model for the control. Avoid trailing forward slashes in value, as per default value.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>items</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getItems = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.FileUpload.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.FileUpload.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>mimeType</code>.
 * Relative path in model, pointing to property that stores the file's mimeType. Note: either fileExtension or mimeType may be used, but mimeType is preferable.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>mimeType</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getMimeType = function() { return ""; };

/**
 * Getter for property <code>multipleSelectionEnabled</code>.
 * Indicates whether the user is allowed to select multiple file at once from his desktop
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>multipleSelectionEnabled</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getMultipleSelectionEnabled = function() { return false; };

/**
 * Getter for property <code>renameEnabled</code>.
 * Indicates whether rename functionality should be enabled
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {boolean} the value of property <code>renameEnabled</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getRenameEnabled = function() { return false; };

/**
 * Getter for property <code>sequentialUploadsEnabled</code>.
 * Indicates whether file uploads should occur sequentially or in parallel. The default is in parallel.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>sequentialUploadsEnabled</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getSequentialUploadsEnabled = function() { return false; };

/**
 * Getter for property <code>showAttachmentsLabel</code>.
 * Show the Attachments count label
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showAttachmentsLabel</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getShowAttachmentsLabel = function() { return false; };

/**
 * Getter for property <code>showAttachmentsLabelInEditMode</code>.
 * Show the Attachments label in edit mode
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showAttachmentsLabelInEditMode</code>
 * @public
 * @deprecated Since version 1.21.0. 
 * This method is deprecated now. Use the showAttachmentsLabel instead
 * 
 */
sap.ca.ui.FileUpload.prototype.getShowAttachmentsLabelInEditMode = function() { return false; };

/**
 * Getter for property <code>showNoData</code>.
 * Show the label "No data" when the control doesn't have files
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>showNoData</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getShowNoData = function() { return false; };

/**
 * Getter for property <code>size</code>.
 * Relative path in model, pointing to property that stores the size of a file.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>size</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getSize = function() { return ""; };

/**
 * Getter for aggregation <code>toolBar</code>.<br/>
 * Aggregation that contains the buttons for adding
 * 
 * @return {sap.m.Toolbar}
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getToolBar = function() { return new sap.m.Toolbar(); };

/**
 * Getter for property <code>uploadedDate</code>.
 * Relative path in model, pointing to property that stores the date at which a file was uploaded.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>uploadedDate</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUploadedDate = function() { return ""; };

/**
 * Getter for property <code>uploadEnabled</code>.
 * This property enables & disables the ability to upload a file
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {boolean} the value of property <code>uploadEnabled</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUploadEnabled = function() { return false; };

/**
 * Getter for aggregation <code>uploadProgressLabel</code>.<br/>
 * Aggregation that displays the current number of items that are being uploaded
 * 
 * @return {sap.m.Label}
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUploadProgressLabel = function() { return new sap.m.Label(); };

/**
 * Getter for property <code>uploadUrl</code>.
 * Url of server we wish to upload to
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>uploadUrl</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUploadUrl = function() { return ""; };

/**
 * Getter for property <code>url</code>.
 * Relative path in model, pointing to property that stores the url at which the file is stored.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>url</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUrl = function() { return ""; };

/**
 * Getter for property <code>useEditControls</code>.
 * Show the edit user controls to rename and delete files (same as deleteEnabled and renameEnabled)
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>useEditControls</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUseEditControls = function() { return false; };

/**
 * Getter for property <code>useMultipart</code>.
 * Indicates if the control should send multipart/form data request when uploading
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>useMultipart</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getUseMultipart = function() { return false; };

/**
 * Getter for property <code>xsrfToken</code>.
 * The XSRF token the control should use when making the upload request. If it is not set, the control will not use a security token.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>xsrfToken</code>
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.getXsrfToken = function() { return ""; };

/**
 * Setter for property <code>acceptRequestHeader</code>.
 * 
 * Default value is <code>application/json</code> 
 * 
 * @param {string} sAcceptRequestHeader  new value for property <code>acceptRequestHeader</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setAcceptRequestHeader = function(sAcceptRequestHeader) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for the aggregated <code>attachmentNumberLabel</code>.
 * @param {sap.m.Label} oAttachmentNumberLabel
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.21.0. 
 * This aggregation is deprecatd now. The label is part of the ToolBar
 * 
 */
sap.ca.ui.FileUpload.prototype.setAttachmentNumberLabel = function(oAttachmentNumberLabel) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>encodeUrl</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sEncodeUrl  new value for property <code>encodeUrl</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setEncodeUrl = function(sEncodeUrl) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>fileId</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sFileId  new value for property <code>fileId</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setFileId = function(sFileId) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>multipleSelectionEnabled</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bMultipleSelectionEnabled  new value for property <code>multipleSelectionEnabled</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setMultipleSelectionEnabled = function(bMultipleSelectionEnabled) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>sequentialUploadsEnabled</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bSequentialUploadsEnabled  new value for property <code>sequentialUploadsEnabled</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setSequentialUploadsEnabled = function(bSequentialUploadsEnabled) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>showNoData</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bShowNoData  new value for property <code>showNoData</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setShowNoData = function(bShowNoData) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for the aggregated <code>toolBar</code>.
 * @param {sap.m.Toolbar} oToolBar
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setToolBar = function(oToolBar) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for the aggregated <code>uploadProgressLabel</code>.
 * @param {sap.m.Label} oUploadProgressLabel
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setUploadProgressLabel = function(oUploadProgressLabel) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>uploadUrl</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setUploadUrl = function(sUploadUrl) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>useMultipart</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bUseMultipart  new value for property <code>useMultipart</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setUseMultipart = function(bUseMultipart) { return new sap.ca.ui.FileUpload(); };

/**
 * Setter for property <code>xsrfToken</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sXsrfToken  new value for property <code>xsrfToken</code>
 * @return {sap.ca.ui.FileUpload} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.FileUpload.prototype.setXsrfToken = function(sXsrfToken) { return new sap.ca.ui.FileUpload(); };


// ---- sap.ca.ui.GrowingTileContainer --------------------------------------------------------------------------

/**
 * Constructor for a new GrowingTileContainer.
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
 * <li>{@link #getGrowing growing} : boolean (default: false)</li>
 * <li>{@link #getGrowingThreshold growingThreshold} : int (default: 20)</li>
 * <li>{@link #getGrowingScrollToLoad growingScrollToLoad} : boolean (default: false)</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ScrollContainer#constructor sap.m.ScrollContainer}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A Tile container for the Overview tile with growing capabilities
 * @extends sap.m.ScrollContainer
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.3. 
 * This control is not required anymore as per central UX requirements.
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.GrowingTileContainer = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.GrowingTileContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.GrowingTileContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>growing</code>.
 * growing enablement
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>growing</code>
 * @public
 * 
 */
sap.ca.ui.GrowingTileContainer.prototype.getGrowing = function() { return false; };

/**
 * Getter for property <code>growingScrollToLoad</code>.
 * load when scrolling
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>growingScrollToLoad</code>
 * @public
 * 
 */
sap.ca.ui.GrowingTileContainer.prototype.getGrowingScrollToLoad = function() { return false; };

/**
 * Getter for property <code>growingThreshold</code>.
 * growing Threshold
 * 
 * Default value is <code>20</code>
 * 
 * @return {int} the value of property <code>growingThreshold</code>
 * @public
 * 
 */
sap.ca.ui.GrowingTileContainer.prototype.getGrowingThreshold = function() { return 0; };

/**
 * Returns a metadata object for class sap.ca.ui.GrowingTileContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.GrowingTileContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Setter for property <code>growing</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bGrowing  new value for property <code>growing</code>
 * @return {sap.ca.ui.GrowingTileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.GrowingTileContainer.prototype.setGrowing = function(bGrowing) { return new sap.ca.ui.GrowingTileContainer(); };

/**
 * Setter for property <code>growingScrollToLoad</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bGrowingScrollToLoad  new value for property <code>growingScrollToLoad</code>
 * @return {sap.ca.ui.GrowingTileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.GrowingTileContainer.prototype.setGrowingScrollToLoad = function(bGrowingScrollToLoad) { return new sap.ca.ui.GrowingTileContainer(); };

/**
 * Setter for property <code>growingThreshold</code>.
 * 
 * Default value is <code>20</code> 
 * 
 * @param {int} iGrowingThreshold  new value for property <code>growingThreshold</code>
 * @return {sap.ca.ui.GrowingTileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.GrowingTileContainer.prototype.setGrowingThreshold = function(iGrowingThreshold) { return new sap.ca.ui.GrowingTileContainer(); };


// ---- sap.ca.ui.HierarchicalSelectDialog --------------------------------------------------------------------------

/**
 * Constructor for a new HierarchicalSelectDialog.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ca.ui.HierarchicalSelectDialogItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.HierarchicalSelectDialog#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ca.ui.HierarchicalSelectDialog#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Select an item in a dialog from a hierarchical list
 * @extends sap.m.Dialog
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.1. 
 * HierarchicalSelectDialog is deprecated as per central UX requirements. This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.HierarchicalSelectDialog = function(sId,mSettings) {};
/**
 * Thrown when user clicks cancel
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.cancel = function(oControlEvent) {  };

/**
 * Thrown when user selects an item
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.select = function(oControlEvent) {  };

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * 
 * @param {sap.ca.ui.HierarchicalSelectDialogItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.addItem = function(oItem) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself. 
 *  
 * Thrown when user clicks cancel
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself. 
 *  
 * Thrown when user selects an item
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.destroyItems = function() { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ca.ui.HierarchicalSelectDialog</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Creates a new subclass of class sap.ca.ui.HierarchicalSelectDialog with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event cancel to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.fireCancel = function(mArguments) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Fire event select to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.HierarchicalSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.fireSelect = function(mArguments) { return new sap.ca.ui.HierarchicalSelectDialog(); };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Type checker, only HierarchicalSelectDialogItem are allowed. Please do NOT use the "content" aggregation of the dialog
 * 
 * <strong>Note</strong>: this is the default aggregation for HierarchicalSelectDialog.
 * @return {sap.ca.ui.HierarchicalSelectDialogItem[]}
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ca.ui.HierarchicalSelectDialog.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ca.ui.HierarchicalSelectDialogItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ca.ui.HierarchicalSelectDialogItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.HierarchicalSelectDialogItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * 
 * @param {int | string | sap.ca.ui.HierarchicalSelectDialogItem} vItem the item to remove or its index or id
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} the removed item or null
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialog.prototype.removeItem = function(vItem) { return new sap.ca.ui.HierarchicalSelectDialogItem(); };


// ---- sap.ca.ui.HierarchicalSelectDialogItem --------------------------------------------------------------------------

/**
 * Constructor for a new HierarchicalSelectDialogItem.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getEntityName entityName} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getListItemTemplate listItemTemplate} : sap.m.ListItemBase</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * 
 * Kind of item required by the sap.ca.ui.HierarchicalSelectDialog control.
 * An item is actually one page of the Dialog.
 * @extends sap.ui.core.Item
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * This control is deprecated as per central UX requirements.
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem = function(sId,mSettings) {};
/**
 * Destroys the listItemTemplate in the aggregation 
 * named <code>listItemTemplate</code>.
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.destroyListItemTemplate = function() { return new sap.ca.ui.HierarchicalSelectDialogItem(); };

/**
 * Creates a new subclass of class sap.ca.ui.HierarchicalSelectDialogItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>entityName</code>.
 * Property used for the binding
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>entityName</code>
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.getEntityName = function() { return ""; };

/**
 * Getter for aggregation <code>listItemTemplate</code>.<br/>
 * Used as a template for each list item of the page
 * 
 * @return {sap.m.ListItemBase}
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.getListItemTemplate = function() { return new sap.m.ListItemBase(); };

/**
 * Returns a metadata object for class sap.ca.ui.HierarchicalSelectDialogItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>title</code>.
 * Dialog title for this item
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.getTitle = function() { return ""; };

/**
 * Setter for property <code>entityName</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sEntityName  new value for property <code>entityName</code>
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.setEntityName = function(sEntityName) { return new sap.ca.ui.HierarchicalSelectDialogItem(); };

/**
 * Setter for the aggregated <code>listItemTemplate</code>.
 * @param {sap.m.ListItemBase} oListItemTemplate
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.setListItemTemplate = function(oListItemTemplate) { return new sap.ca.ui.HierarchicalSelectDialogItem(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.HierarchicalSelectDialogItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchicalSelectDialogItem.prototype.setTitle = function(sTitle) { return new sap.ca.ui.HierarchicalSelectDialogItem(); };


// ---- sap.ca.ui.Hierarchy --------------------------------------------------------------------------

/**
 * Constructor for a new Hierarchy.
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
 * <li>{@link #getHideOptionalLevels hideOptionalLevels} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ca.ui.HierarchyItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Display the Hierarchy of an item. Useful to indicates where an object stand in a chain of
 * hierarchical data. The emphasized item shows the one item to display. Optional item can be hidden using the
 * hideOptionalLevels property. Hidden items will stay accessible with an expand button.
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.3. 
 * This control is not required anymore as per central UX requirements.
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.Hierarchy = function(sId,mSettings) {};
/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * 
 * @param {sap.ca.ui.HierarchyItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.addItem = function(oItem) { return new sap.ca.ui.Hierarchy(); };

/**
 * Binder for aggregation <code>items</code>.
 * 
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.bindItems = function(sPath,oTemplate,oSorter,aFilters) { return new sap.ca.ui.Hierarchy(); };

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.destroyItems = function() { return new sap.ca.ui.Hierarchy(); };

/**
 * Creates a new subclass of class sap.ca.ui.Hierarchy with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.Hierarchy.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>hideOptionalLevels</code>.
 * Hide the levels marked optional. An expand button will appear
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>hideOptionalLevels</code>
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.getHideOptionalLevels = function() { return false; };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * The array of HierarchyItem ordered and starting from the root hierarchy
 * 
 * @return {sap.ca.ui.HierarchyItem[]}
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ca.ui.Hierarchy.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.Hierarchy.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ca.ui.HierarchyItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ca.ui.HierarchyItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * 
 * @param {sap.ca.ui.HierarchyItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.insertItem = function(oItem,iIndex) { return new sap.ca.ui.Hierarchy(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.HierarchyItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * 
 * @param {int | string | sap.ca.ui.HierarchyItem} vItem the item to remove or its index or id
 * @return {sap.ca.ui.HierarchyItem} the removed item or null
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.removeItem = function(vItem) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>hideOptionalLevels</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bHideOptionalLevels  new value for property <code>hideOptionalLevels</code>
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.setHideOptionalLevels = function(bHideOptionalLevels) { return new sap.ca.ui.Hierarchy(); };

/**
 * Unbinder for aggregation <code>items</code>.
 * 
 * @return {sap.ca.ui.Hierarchy} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Hierarchy.prototype.unbindItems = function() { return new sap.ca.ui.Hierarchy(); };


// ---- sap.ca.ui.HierarchyItem --------------------------------------------------------------------------

/**
 * Constructor for a new HierarchyItem.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLevelType levelType} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIdentifier identifier} : string</li>
 * <li>{@link #getLink link} : string</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: false)</li>
 * <li>{@link #getOptional optional} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.HierarchyItem#event:linkPress linkPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Item that represent a line of the Hierarchy control. The emphasized property should apply to the item
 * that we want to represent in his hierarchy. Optionals item will be hidden if the option is true on the Hierarchy
 * control.
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24. 
 * This control is deprecated as per central UX requirements.
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.HierarchyItem = function(sId,mSettings) {};
/**
 * Event when a link is pressed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.linkPress = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'linkPress' event of this <code>sap.ca.ui.HierarchyItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.HierarchyItem</code>.<br/> itself. 
 *  
 * Event when a link is pressed
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.HierarchyItem</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.attachLinkPress = function(oData,fnFunction,oListener) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'linkPress' event of this <code>sap.ca.ui.HierarchyItem</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.detachLinkPress = function(fnFunction,oListener) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Creates a new subclass of class sap.ca.ui.HierarchyItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.HierarchyItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event linkPress to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.HierarchyItem.prototype.fireLinkPress = function(mArguments) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Getter for property <code>emphasized</code>.
 * Does the item looks emphasized
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getEmphasized = function() { return false; };

/**
 * Getter for property <code>icon</code>.
 * Icon for the item
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * Getter for property <code>identifier</code>.
 * Identifier text
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>identifier</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getIdentifier = function() { return ""; };

/**
 * Getter for property <code>levelType</code>.
 * Level type
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>levelType</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getLevelType = function() { return ""; };

/**
 * Getter for property <code>link</code>.
 * Text of the link
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>link</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getLink = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.HierarchyItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.HierarchyItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>optional</code>.
 * Is the item optional, so we hide it if option is set on the Hierarchy control
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>optional</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getOptional = function() { return false; };

/**
 * Getter for property <code>title</code>.
 * Title
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.getTitle = function() { return ""; };

/**
 * Setter for property <code>emphasized</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setEmphasized = function(bEmphasized) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setIcon = function(sIcon) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>identifier</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sIdentifier  new value for property <code>identifier</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setIdentifier = function(sIdentifier) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>levelType</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sLevelType  new value for property <code>levelType</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setLevelType = function(sLevelType) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>link</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sLink  new value for property <code>link</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setLink = function(sLink) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>optional</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bOptional  new value for property <code>optional</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setOptional = function(bOptional) { return new sap.ca.ui.HierarchyItem(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.HierarchyItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.HierarchyItem.prototype.setTitle = function(sTitle) { return new sap.ca.ui.HierarchyItem(); };


// ---- sap.ca.ui.InPlaceEdit --------------------------------------------------------------------------

/**
 * Constructor for a new InPlaceEdit.
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
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getUndoEnabled undoEnabled} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.InPlaceEdit#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * 
 * This control is used to switch between readonly and edit modes. A typical use case would be to change the value of a Label.
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * This control is not required anymore as per central UX requirements.
 * Please use sap.m.Input instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.InPlaceEdit = function(sId,mSettings) {};
/**
 * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter key is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the InPlaceEdit.
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.change = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ca.ui.InPlaceEdit</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.InPlaceEdit</code>.<br/> itself. 
 *  
 * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter key is pressed.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.InPlaceEdit</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ca.ui.InPlaceEdit(); };

/**
 * Clear the old text after a change to disable the undo functionality. If undoEnabled is false this has no effect.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.clearOldText = function() { return null; };

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.destroyContent = function() { return new sap.ca.ui.InPlaceEdit(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ca.ui.InPlaceEdit</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.detachChange = function(fnFunction,oListener) { return new sap.ca.ui.InPlaceEdit(); };

/**
 * Creates a new subclass of class sap.ca.ui.InPlaceEdit with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.InPlaceEdit.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the InPlaceEdit.</li>
 * </ul>
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.fireChange = function(mArguments) { return new sap.ca.ui.InPlaceEdit(); };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content control of the InPlaceEdit.
 * The following control is allowed: sap.m.Input, sap.m.Link
 * 
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ca.ui.InPlaceEdit.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.InPlaceEdit.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns the tooltip for this InPlaceEdit if any or an undefined value.
 * The tooltip can either be a simple string or a subclass of
 * {@link sap.ui.core.TooltipBase}.
 * 
 * Callers that are only interested in tooltips of type string (e.g. to render
 * them as a <code>title</code> attribute), should call the convenience method
 * {@link #getTooltip_AsString} instead. If they want to get a tooltip text no
 * matter where it comes from (be it a string tooltip or the text from a TooltipBase
 * instance) then they could call {@link #getTooltip_Text} instead.
 * 
 * If a content control is assigned to the InPlaceEdit the tooltip of this control
 * is used. A directly set tooltip to the InPlaceEdit is ignored in this case.
 * 
 * @return {string|sap.ui.core.TooltipBase} The tooltip for this Element.
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.getTooltip = function() { return ""; };

/**
 * Getter for property <code>undoEnabled</code>.
 * If undo is enabled after changing the text an undo button appears.
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>undoEnabled</code>
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.getUndoEnabled = function() { return false; };

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success.
 * If the content control has a own valueState property this will be used.
 * 
 * Default value is <code>None</code>
 * 
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.setContent = function(oContent) { return new sap.ca.ui.InPlaceEdit(); };

/**
 * Sets a new tooltip for this InPlaceEdit. The tooltip can either be a simple string
 * (which in most cases will be rendered as the <code>title</code> attribute of this
 * Element) or an instance of {@link sap.ui.core.TooltipBase}.
 * 
 * If a new tooltip is set, any previously set tooltip is deactivated.
 * 
 * If a content control is assigned to the InPlaceEdit the tooltip of this control
 * is used. A directly set tooltip to the InPlaceEdit is ignored in this case.
 * 
 * @param {string|sap.ui.core.TooltipBase} oTooltip.
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.setTooltip = function() {  };

/**
 * Setter for property <code>undoEnabled</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bUndoEnabled  new value for property <code>undoEnabled</code>
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.setUndoEnabled = function(bUndoEnabled) { return new sap.ca.ui.InPlaceEdit(); };

/**
 * Setter for property <code>valueState</code>.
 * 
 * Default value is <code>None</code> 
 * 
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ca.ui.InPlaceEdit} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.InPlaceEdit.prototype.setValueState = function(oValueState) { return new sap.ca.ui.InPlaceEdit(); };


// ---- sap.ca.ui.message --------------------------------------------------------------------------

/**
 * Shows the messages with type of Success, Error, Warning, Info, in a Fiori style of MessageBox 
 * @param {object} [oSettings] settings for the message box
 *        <p>The supported settings are:</p>
 *        <p>type : {sap.ca.ui.message.Type}</p>
 *        <p>message : {string} short text, the leading and ending white spaces will be removed</p>
 *        <p>details : {string} long text (optional), the detailed information will only be shown if the text is available and 
 *         different to the message text</p>
 * @param {function} [fnClose] the function will be called if the message box is closed 
 * @public
 * 
 * @memberof sap.ca.ui.message
 */
sap.ca.ui.message.prototype.showMessageBox = function(oSettings,fnClose) {  };

/**
 * Shows the success message as a MessageToast
 * @param {string} [sMessage] message to be shown in the MessageToast
 * @public
 * 
 * @memberof sap.ca.ui.message
 */
sap.ca.ui.message.prototype.showMessageToast = function(sMessage) {  };


// ---- sap.ca.ui.model.format.AmountFormat --------------------------------------------------------------------------

/**
 * Constructor for AmountFormat - must not be used: To get a AmountFormat instance, please use getInstance.
 * 
 * @class
 * The AmountFormat is a static class for formatting and parsing file size values according
 * to a set of format options.
 * 
 * If no pattern is specified a default pattern according to the locale settings is used.
 * 
 * @public
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.core.format.NumberFormat.getCurrencyInstance instead! This control will not be supported anymore.
 * 
 * 
 */
sap.ca.ui.model.format.AmountFormat = function() {};
/**
 * Format an amount according to the given format options.
 * 
 * @param {number} oValue the value to format
 * @return {string} the formatted output value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.prototype.format = function(oValue) { return ""; };

/**
 * Convenience static function
 * Format an amount in short Style.
 * Number of decimals for values not "shortified" will be set :
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given currency
 *          if decimals == "preserve", the number of decimals of the source value will be preserved (currency not taken into account).
 * 
 * @param {string} oValue the string containing a formatted value
 * @param {string} currencyCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.FormatAmountShort = function(oValue,currencyCode,decimals) { return ""; };

/**
 * Convenience static function
 * Format an amount in short Style with the currency code according to the cldr currency format.
 * Number of decimals for values not "shortified" will be set :
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given currency
 *          If decimals == "preserve", the number of decimals of the source value will be preserved (currency not taken into account).
 * 
 * 
 * @param {string} sValue the string containing a formatted value
 * @param {string} sCurrencyCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.FormatAmountShortWithCurrency = function(sValue,sCurrencyCode,decimals) { return ""; };

/**
 * Convenience static function
 * Format an amount in standard Style.
 * Number of decimals will be set:
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given currency
 *          if decimals == "preserve", the number of decimals of the source value will be preserved (currency not taken into account).
 * 
 * @param {string} oValue the string containing a formatted value
 * @param {string} currencyCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.FormatAmountStandard = function(oValue,currencyCode,decimals) { return ""; };

/**
 * Convenience static function
 * Format an amount in standard Style with the currency code according to the cldr currency format.
 * Number of decimals will be set:
 *          Using decimals if specified
 *          else using the standard number of decimal for the given currency
 *          if decimals == "preserve", the number of decimals of the source value will be preserved (currency not taken into account).
 * 
 * @param {string} sValue the string containing a formatted value
 * @param {string} sCurrencyCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.FormatAmountStandardWithCurrency = function(sValue,sCurrencyCode,decimals) { return ""; };

/**
 * Format an amount with the currency code according to the cldr currency format.
 * 
 * @param {string} sValue the string containing a formatted value
 * @param {string} sCurrencyCode the string containing the currency code
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.prototype.formatWithCurrency = function(sValue,sCurrencyCode) { return ""; };

/**
 * Get a instance of the AmountFormat, which can be used for formatting.
 * 
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.style] either empty or 'standard or 'short'. If no pattern is given, a locale dependent default pattern of that style is used from the LocaleData class.
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.AmountFormat} instance of the AmountFormat
 * @static
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.getInstance = function(oFormatOptions,oLocale) { return new sap.ca.ui.model.format.AmountFormat(); };

/**
 * Parse a string which is formatted according to the given format options.
 * 
 * @param {string} sValue the string containing a formatted value
 * @return {number} the parsed value
 * @public
 * 
 */
sap.ca.ui.model.format.AmountFormat.prototype.parse = function(sValue) { return 0.0; };


// ---- sap.ca.ui.model.format.DateFormat --------------------------------------------------------------------------

/**
 * Constructor for DateFormat - must not be used: To get a DateFormat instance, please use getInstance, getDateTimeInstance or getTimeInstance.
 * 
 * @class
 * The DateFormat is a static class for formatting and parsing date and time values according
 * to a set of format options.
 * 
 * It uses sap.ui.core.format.DateFormat to format and parse dates, and adds a new style daysAgo for Date instances.
 * With this style:
 * <ul>
 * <li>For today: "Today" will be displayed (localized)</li>
 * <li>For yesterday: "1 day ago" will be displayed (localized)</li>
 * <li>Between 2 days and 6 days in the past: "x days ago" will be displayed (localized)</li>
 * <li>In the future or more than 6 days in the past: the date will be formatted with a medium style</li> 
 * </ul>
 * The daysAgo style can be formatted in UTC.
 * 
 * Supported format options are pattern based on Unicode LDML Date Format notation.
 * If no pattern is specified a default pattern according to the locale settings is used.
 * 
 * @public
 * @see http://unicode.org/reports/tr35/#Date_Field_Symbol_Table
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.core.format.DateFormat instead! This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.format.DateFormat = function() {};
/**
 * Format a date according to the given format options.
 * 
 * If oValue contains a JSON date ("/Date(milliseconds)/"), it will be converted to a Date before to be formatted.
 * 
 * @param {Date|string} oValue the vale to format
 * @param {boolean} bUTC whether to use UTC
 * @return {string} the formatted output value
 * @public
 * 
 */
sap.ca.ui.model.format.DateFormat.prototype.format = function(oValue,bUTC) { return ""; };

/**
 * Get a date instance of the DateFormat, which can be used for formatting.
 * 
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a data pattern in LDML format. It is not verified whether the pattern represents only a date.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium', 'long' or 'daysAgo'. If no pattern is given, a locale dependent default date pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} date instance of the DateFormat
 * @static
 * @public
 * 
 */
sap.ca.ui.model.format.DateFormat.getDateInstance = function(oFormatOptions,oLocale) { return new sap.ca.ui.model.format.DateFormat(); };

/**
 * Get a datetime instance of the DateFormat, which can be used for formatting.
 * 
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a datetime pattern in LDML format. It is not verified whether the pattern represents a full datetime.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default datetime pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} datetime instance of the DateFormat
 * @static
 * @public
 * 
 */
sap.ca.ui.model.format.DateFormat.getDateTimeInstance = function(oFormatOptions,oLocale) { return new sap.ca.ui.model.format.DateFormat(); };

/**
 * Get a time instance of the DateFormat, which can be used for formatting.
 * 
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.pattern] a time pattern in LDML format. It is not verified whether the pattern only represents a time.  
 * @param {string} [oFormatOptions.style] either empty or 'short, 'medium' or 'long'. If no pattern is given, a locale dependent default time pattern of that style is used from the LocaleData class.    
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.DateFormat} time instance of the DateFormat
 * @static
 * @public
 * 
 */
sap.ca.ui.model.format.DateFormat.getTimeInstance = function(oFormatOptions,oLocale) { return new sap.ca.ui.model.format.DateFormat(); };

/**
 * Parse a string which is formatted according to the given format options.
 * The strings specific to the daysAgo style will not be well-parsed.
 * 
 * @param {string} sValue the string containing a formatted date/time value
 * @return {Date} the parsed value
 * @public
 * 
 */
sap.ca.ui.model.format.DateFormat.prototype.parse = function(sValue) { return null; };


// ---- sap.ca.ui.model.format.FileSizeFormat --------------------------------------------------------------------------

/**
 * Constructor for FileSizeFormat - must not be used: To get a FileSizeFormat instance, please use getInstance.
 * 
 * @class
 * The FileSizeFormat is a static class for formatting and parsing file size values according
 * to a set of format options.
 * 
 * Simplified logic:
 *  display in kB for 1e3 <= bytes < 1e6
 *  display in MB for 1e6 <= bytes < 1e9
 *  ...
 * 
 * 
 * @public
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.core.format.FileSizeFormat instead! This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.format.FileSizeFormat = function() {};
/**
 * Format according to the given format options.
 * 
 * @param {FileSize} oValue the value to format
 * @return {string} the formatted output value
 * @public
 * 
 */
sap.ca.ui.model.format.FileSizeFormat.prototype.format = function(oValue) { return ""; };

/**
 * Get a instance of the FileSizeFormat, which can be used for formatting.
 * 
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {number} [oFormatOptions.shortDecimals] number of decimals to use.
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.FileSizeFormat} instance of the FileSizeFormat
 * @static
 * @public
 * 
 */
sap.ca.ui.model.format.FileSizeFormat.getInstance = function(oFormatOptions,oLocale) { return new sap.ca.ui.model.format.FileSizeFormat(); };

/**
 * Parse a string which is formatted according to the given format options.
 * 
 * @param {string} sValue the string containing a formatted value
 * @return {number} the parsed value
 * @public
 * 
 */
sap.ca.ui.model.format.FileSizeFormat.prototype.parse = function(sValue) { return 0.0; };


// ---- sap.ca.ui.model.format.QuantityFormat --------------------------------------------------------------------------

/**
 * Constructor for QuantityFormat - must not be used: To get a QuantityFormat instance, please use getInstance.
 * 
 * @class
 * The QuantityFormat is a static class for formatting and parsing file size values according
 * to a set of format options.
 * 
 * If no pattern is specified a default pattern according to the locale settings is used.
 * 
 * @public
 * 
 * @deprecated Deprecated API:Since version 1.28. There is no replacement for the QuantityFormat in sap.ui.core.format. Please refer to sap.ui.core.format and set the minFractionDigits and maxFractionDigits on the formatter as required. This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.format.QuantityFormat = function() {};
/**
 * Format a value according to the given format options.
 * 
 * @param {object} oValue the value to format
 * @return {string} the formatted output value
 * @public
 * 
 */
sap.ca.ui.model.format.QuantityFormat.prototype.format = function(oValue) { return ""; };

/**
 * Convenience static function
 * Format an quantity in short Style.
 * Number of decimals will be set :
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given unit
 * 
 * @param {string} sValue the string containing a formatted value
 * @param {string} unitCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.QuantityFormat.FormatQuantityShort = function(sValue,unitCode,decimals) { return ""; };

/**
 * Convenience static function
 * Format an quantity in standard Style.
 * Number of decimals will be set :
 *          Using Decimals if specified
 *          else using the standard number of decimal for the given unit
 * 
 * @param {string} sValue the string containing a formatted value
 * @param {string} unitCode
 * @param {string} decimals
 * @return {string} the formatted value
 * @public
 * 
 */
sap.ca.ui.model.format.QuantityFormat.FormatQuantityStandard = function(sValue,unitCode,decimals) { return ""; };

/**
 * Get a instance of the QuantityFormat, which can be used for formatting.
 * 
 * @param {object} [oFormatOptions] Object which defines the format options
 * @param {string} [oFormatOptions.style] either empty or 'standard or 'short'. If no pattern is given, a locale dependent default pattern of that style is used from the LocaleData class.
 * @param {sap.ui.core.Locale} [oLocale] Locale to ask for locale specific texts/settings
 * @return {sap.ca.ui.model.format.QuantityFormat} instance of the QuantityFormat
 * @static
 * @public
 * 
 */
sap.ca.ui.model.format.QuantityFormat.getInstance = function(oFormatOptions,oLocale) { return new sap.ca.ui.model.format.QuantityFormat(); };

/**
 * Parse a string which is formatted according to the given format options.
 * 
 * @param {string} sValue the string containing a formatted value
 * @return {number} the parsed value
 * @public
 * 
 */
sap.ca.ui.model.format.QuantityFormat.prototype.parse = function(sValue) { return 0.0; };


// ---- sap.ca.ui.model.type.Date --------------------------------------------------------------------------

/**
 * Constructor for a Date type.
 * 
 * 
 * @class
 * This class represents date simple types.
 * 
 * @extends sap.ui.model.SimpleType
 * 
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing.
 *           Supports the same options as {@link sap.ca.ui.model.format.DateFormat.getDateInstance DateFormat.getDateInstance}.
 * 			 You can use an extra boolean option UTC to format in UTC ({style: "short", UTC: true}).
 * @param {object} [oFormatOptions.source] additional set of options used to create a second DateFormat object for conversions between 
 *           string values in the data source (e.g. model) and Date. This second format object is used to convert from a model string to Date before 
 *           converting the Date to string with the primary format object. Vice versa, this 'source' format is also used to format an already parsed 
 *           external value (e.g. user input) into the string format expected by the data source.
 *           Supports the same set of options as {@link sap.ca.ui.model.format.DateFormat.getDateInstance DateFormat.getDateInstance}.
 * @param {object} [oConstraints] value constraints. 
 * @param {Date|string} [oConstraints.minimum] smallest value allowed for this type. Values for constraints must use the same type as configured via <code>oFormatOptions.source</code>  
 * @param {Date|string} [oConstraints.maximum] largest value allowed for this type. Values for constraints must use the same type as configured via <code>oFormatOptions.source</code>  
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.model.type.Date instead! This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.type.Date = function(oFormatOptions,oConstraints) {};
/**
 * Creates a new subclass of class sap.ca.ui.model.type.Date with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.Date.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ca.ui.model.type.Date.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.Date.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * @protected
 * 
 */
sap.ca.ui.model.type.Date.prototype.getOutputPattern = function() {  };


// ---- sap.ca.ui.model.type.DateTime --------------------------------------------------------------------------

/**
 * Constructor for a DateTime type.
 * 
 * 
 * @class
 * This class represents datetime simple types.
 * 
 * @extends sap.ca.ui.model.type.Date
 * 
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing to/from external values and 
 *           optionally for a second DateFormat to convert between the data source format (Model) and the internally used JavaScript Date.format. 
 *           For both DateFormat objects, the same options are supported as for {@link sap.ca.ui.model.format.DateFormat.getDateTimeInstance DateFormat.getDateTimeInstance}.
 *           You can use an extra boolean option UTC to format in UTC ({style: "short", UTC: true}).
 *           Note that this differs from the base type.
 * @param {object} [oConstraints] value constraints. Supports the same kind of constraints as its base type Date, but note the different format options (Date vs. DateTime) 
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.model.type.DateTime instead! This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.type.DateTime = function(oFormatOptions,oConstraints) {};
/**
 * Creates a new subclass of class sap.ca.ui.model.type.DateTime with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.DateTime.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ca.ui.model.type.DateTime.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.DateTime.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ca.ui.model.type.FileSize --------------------------------------------------------------------------

/**
 * Constructor for a FileSize type.
 * 
 * 
 * @class
 * This class represents file size types.
 * 
 * @extends sap.ui.model.SimpleType
 * 
 * @constructor
 * @public
 * @param {object} [oFormatOptions] formatting options. Supports the same options as {@link sap.ui.core.format.NumberFormat.getFloatInstance NumberFormat.getFloatInstance}
 * @param {object} [oConstraint]s value constraints.
 * @param {float} [oConstraints.minimum] smallest value allowed for this type
 * @param {float} [oConstraints.maximum] largest value allowed for this type
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.model.type.FileSize instead! This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.type.FileSize = function(oFormatOptions,oConstraint) {};
/**
 * Creates a new subclass of class sap.ca.ui.model.type.FileSize with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code>
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * 
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.FileSize.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ca.ui.model.type.FileSize.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.FileSize.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ca.ui.model.type.Number --------------------------------------------------------------------------

/**
 * Constructor for a Number type.
 * 
 * 
 * @class
 * This class represents number simple types.
 * 
 * @extends sap.ui.model.SimpleType
 * @version 1.15.1-SNAPSHOT
 * 
 * @constructor
 * @public
 * @param {object} [oFormatOptions] formatting options. Supports the same options as {@link sap.ui.core.format.NumberFormat.getNumberInstance NumberFormat.getNumberInstance}
 * @param {object} [oConstraint]s value constraints.
 * @param {number} [oConstraints.minimum] smallest value allowed for this type
 * @param {numbers} [oConstraints.maximum] largest value allowed for this type
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.model.type.Float or sap.ui.model.type.Integer with sap.ui.core.format.NumberFormat instead! This control will not be supported anymore.
 * 
 * 
 */
sap.ca.ui.model.type.Number = function(oFormatOptions,oConstraint) {};
/**
 * Creates a new subclass of class sap.ca.ui.model.type.Number with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code>
 * see {@link sap.ui.base.Object.extend Object.extend}.
 * 
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.Number.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ca.ui.model.type.Number.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.Number.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ca.ui.model.type.Time --------------------------------------------------------------------------

/**
 * Constructor for a Time type.
 * 
 * 
 * @class
 * This class represents time simple types.
 * 
 * @extends sap.ca.ui.model.type.Date
 * 
 * @constructor
 * @public
 * @param {object} [oFormatOptions] options used to create a DateFormat for formatting / parsing to/from external values and 
 *           optionally for a second DateFormat to convert between the data source format (Model) and the internally used JavaScript Date.format. 
 *           For both DateFormat objects, the same options are supported as for {@link sap.ca.ui.model.format.DateFormat.getTimeInstance DateFormat.getTimeInstance}.
 *           You can use an extra boolean option UTC to format in UTC ({style: "short", UTC: true}).
 *           Note that this differs from the base type.
 * @param {object} [oConstraints] value constraints. Supports the same kind of constraints as its base type Date, but note the different format options (Date vs. Time) 
 * 
 * @deprecated Deprecated API:Since version 1.28. This control has been made available in sap.ui.core. Please use sap.ui.model.type.Time instead! This control will not be supported anymore.
 * 
 */
sap.ca.ui.model.type.Time = function(oFormatOptions,oConstraints) {};
/**
 * Creates a new subclass of class sap.ca.ui.model.type.Time with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.Time.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ca.ui.model.type.Time.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.model.type.Time.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ca.ui.Notes --------------------------------------------------------------------------

/**
 * Constructor for a new Notes.
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
 * <li>{@link #getShowNoteInput showNoteInput} : boolean (default: true)</li>
 * <li>{@link #getTextMaxLength textMaxLength} : int (default: 1000)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.Notes#event:addNote addNote} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * This control is a List with the ability to render an additional control on top of it to add new
 * notes. The developer is responsible to give the correct template to use to display notes (recommended are either
 * the FeedListItem or the ExpansibleFeedListItem). The developer is also responsible to implement the code to send
 * the notes to the backend system, by responding to the addNote event.
 * @extends sap.m.List
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * This control has been made available in sap.m.
 * Please use sap.m.FeedInput with sap.m.FeedListItem instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.Notes = function(sId,mSettings) {};
/**
 * press event for button
 * 
 * (oControlEvent) Event is fired when the user clicks on the control.
 * 
 * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction,
 * oListenerObject]
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.addNote = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'addNote' event of this <code>sap.ca.ui.Notes</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.Notes</code>.<br/> itself. 
 *  
 * press event for button
 * 
 * (oControlEvent) Event is fired when the user clicks on the control.
 * 
 * fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction,
 * oListenerObject]
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.Notes</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.attachAddNote = function(oData,fnFunction,oListener) { return new sap.ca.ui.Notes(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'addNote' event of this <code>sap.ca.ui.Notes</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.detachAddNote = function(fnFunction,oListener) { return new sap.ca.ui.Notes(); };

/**
 * Creates a new subclass of class sap.ca.ui.Notes with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.Notes.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event addNote to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.Notes.prototype.fireAddNote = function(mArguments) { return new sap.ca.ui.Notes(); };

/**
 * Returns a metadata object for class sap.ca.ui.Notes.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.Notes.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>placeholder</code>.
 * Placeholder text shown when no value available . Default value is "Add note".
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.getPlaceholder = function() { return ""; };

/**
 * Getter for property <code>showNoteInput</code>.
 * If set to true, this control will render an additional control to create new notes.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>showNoteInput</code>
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.getShowNoteInput = function() { return false; };

/**
 * Getter for property <code>textMaxLength</code>.
 * max text input length
 * 
 * Default value is <code>1000</code>
 * 
 * @return {int} the value of property <code>textMaxLength</code>
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.getTextMaxLength = function() { return 0; };

/**
 * Setter for property <code>placeholder</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.setPlaceholder = function(sPlaceholder) { return new sap.ca.ui.Notes(); };

/**
 * Setter for property <code>showNoteInput</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bShowNoteInput  new value for property <code>showNoteInput</code>
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.setShowNoteInput = function(bShowNoteInput) { return new sap.ca.ui.Notes(); };

/**
 * Setter for property <code>textMaxLength</code>.
 * 
 * Default value is <code>1000</code> 
 * 
 * @param {int} iTextMaxLength  new value for property <code>textMaxLength</code>
 * @return {sap.ca.ui.Notes} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.Notes.prototype.setTextMaxLength = function(iTextMaxLength) { return new sap.ca.ui.Notes(); };


// ---- sap.ca.ui.OverflowContainer --------------------------------------------------------------------------

/**
 * Constructor for a new OverflowContainer.
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
 * <li>{@link #getOverflowHeight overflowHeight} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * 
 * The OverflowContainer allows the content of a control to be partially displayed before being fully expanded.
 * It will cut its content to a fixed height that can be defined. It is fully suitable within an IconTabBar.
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.1. 
 * OverflowContainer is deprecated as per central UX requirements. This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.OverflowContainer = function(sId,mSettings) {};
/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.addContent = function(oContent) { return new sap.ca.ui.OverflowContainer(); };

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.destroyContent = function() { return new sap.ca.ui.OverflowContainer(); };

/**
 * Creates a new subclass of class sap.ca.ui.OverflowContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.OverflowContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls to be embedded.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.getContent = function() { return new Array(); };

/**
 * Getter for property <code>expanded</code>.
 * This property allows to fully expand the container
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.getExpanded = function() { return false; };

/**
 * Returns a metadata object for class sap.ca.ui.OverflowContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.OverflowContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>overflowHeight</code>.
 * 
 * The height of the container when not expanded. It should be determined by the application.
 * The default value is set to 200px.
 * 
 * Default value is <code>200px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>overflowHeight</code>
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.getOverflowHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation named <code>content</code>.
 * 
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.ca.ui.OverflowContainer(); };

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an content from the aggregation named <code>content</code>.
 * 
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Setter for property <code>expanded</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.setExpanded = function(bExpanded) { return new sap.ca.ui.OverflowContainer(); };

/**
 * Setter for property <code>overflowHeight</code>.
 * 
 * Default value is <code>200px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sOverflowHeight  new value for property <code>overflowHeight</code>
 * @return {sap.ca.ui.OverflowContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverflowContainer.prototype.setOverflowHeight = function(sOverflowHeight) { return new sap.ca.ui.OverflowContainer(); };


// ---- sap.ca.ui.OverviewTile --------------------------------------------------------------------------

/**
 * Constructor for a new OverviewTile.
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
 * <li>{@link #getTitle title} : string (default: 'null')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: 'null')</li>
 * <li>{@link #getContact contact} : string (default: 'null')</li>
 * <li>{@link #getAddress address} : string (default: 'null')</li>
 * <li>{@link #getOpportunities opportunities} : string (default: 'null')</li>
 * <li>{@link #getRating rating} : string (default: 'null')</li>
 * <li>{@link #getLastContact lastContact} : string (default: 'null')</li>
 * <li>{@link #getNextContact nextContact} : string (default: 'null')</li>
 * <li>{@link #getRevenue revenue} : string (default: 'null')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContactActive contactActive} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.OverviewTile#event:contactPress contactPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Tile#constructor sap.m.Tile}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Display aTile that presents an overview of a customer
 * @extends sap.m.Tile
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.24.3. 
 * This control is not required anymore as per central UX requirements.
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.OverviewTile = function(sId,mSettings) {};
/**
 * This event is fired when the end user clicks on the contact link.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.contactPress = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'contactPress' event of this <code>sap.ca.ui.OverviewTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.OverviewTile</code>.<br/> itself. 
 *  
 * This event is fired when the end user clicks on the contact link.
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.OverviewTile</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.attachContactPress = function(oData,fnFunction,oListener) { return new sap.ca.ui.OverviewTile(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'contactPress' event of this <code>sap.ca.ui.OverviewTile</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.detachContactPress = function(fnFunction,oListener) { return new sap.ca.ui.OverviewTile(); };

/**
 * Creates a new subclass of class sap.ca.ui.OverviewTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.OverviewTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event contactPress to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.OverviewTile.prototype.fireContactPress = function(mArguments) { return new sap.ca.ui.OverviewTile(); };

/**
 * Getter for property <code>address</code>.
 * This property is used to set the address field in the form of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>address</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getAddress = function() { return ""; };

/**
 * Getter for property <code>contact</code>.
 * This property is used to set the contact of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>contact</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getContact = function() { return ""; };

/**
 * Getter for property <code>contactActive</code>.
 * This property is used to enable an event to be thrown when clicking on the contact's name
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>contactActive</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getContactActive = function() { return false; };

/**
 * Getter for property <code>lastContact</code>.
 * This property is used to set the last contact field in the form of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>lastContact</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getLastContact = function() { return ""; };

/**
 * Returns a metadata object for class sap.ca.ui.OverviewTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.OverviewTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>nextContact</code>.
 * This property is used to set the next contact field in the form of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>nextContact</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getNextContact = function() { return ""; };

/**
 * Getter for property <code>opportunities</code>.
 * This property is used to set the opportunities field in the form of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>opportunities</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getOpportunities = function() { return ""; };

/**
 * Getter for property <code>rating</code>.
 * This property is used to set the rating field in the form of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>rating</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getRating = function() { return ""; };

/**
 * Getter for property <code>revenue</code>.
 * This property is used to set the revenue to date field in the form of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>revenue</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getRevenue = function() { return ""; };

/**
 * Getter for property <code>title</code>.
 * This property is used to set the title of the tile
 * 
 * Default value is <code>null</code>
 * 
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getTitle = function() { return ""; };

/**
 * Getter for property <code>visible</code>.
 * This property is used to show/hide the tile
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getVisible = function() { return false; };

/**
 * Getter for property <code>width</code>.
 * This property is used to set the width of the control
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * The initialization method
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.OverviewTile.prototype.init = function() { return null; };

/**
 * Setter for property <code>address</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sAddress  new value for property <code>address</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setAddress = function(sAddress) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>contact</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sContact  new value for property <code>contact</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setContact = function(sContact) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>contactActive</code>.
 * 
 * Default value is <code>false</code> 
 * 
 * @param {boolean} bContactActive  new value for property <code>contactActive</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setContactActive = function(bContactActive) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>icon</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setIcon = function(sIcon) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>lastContact</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sLastContact  new value for property <code>lastContact</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setLastContact = function(sLastContact) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>nextContact</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sNextContact  new value for property <code>nextContact</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setNextContact = function(sNextContact) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>opportunities</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sOpportunities  new value for property <code>opportunities</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setOpportunities = function(sOpportunities) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>rating</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sRating  new value for property <code>rating</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setRating = function(sRating) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>revenue</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sRevenue  new value for property <code>revenue</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setRevenue = function(sRevenue) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>title</code>.
 * 
 * Default value is <code>null</code> 
 * 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setTitle = function(sTitle) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>visible</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setVisible = function(bVisible) { return new sap.ca.ui.OverviewTile(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.OverviewTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.OverviewTile.prototype.setWidth = function(sWidth) { return new sap.ca.ui.OverviewTile(); };


// ---- sap.ca.ui.PictureItem --------------------------------------------------------------------------

/**
 * Constructor for a new PictureItem.
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
 * <li>{@link #getStatus status} : string</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '62px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '62px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.PictureItem#event:loaded loaded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * A picture / photo Item for AddPicture and PictureViewer Controls
 * @extends sap.ui.core.Control
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * This control has been made available in sap.m.
 * Please use the sap.m.Carousel instead!
 * This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.PictureItem = function(sId,mSettings) {};
/**
 * Fired when the Image is really loaded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.loaded = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'loaded' event of this <code>sap.ca.ui.PictureItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.PictureItem</code>.<br/> itself. 
 *  
 * Fired when the Image is really loaded
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.PictureItem</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.attachLoaded = function(oData,fnFunction,oListener) { return new sap.ca.ui.PictureItem(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'loaded' event of this <code>sap.ca.ui.PictureItem</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.detachLoaded = function(fnFunction,oListener) { return new sap.ca.ui.PictureItem(); };

/**
 * Creates a new subclass of class sap.ca.ui.PictureItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event loaded to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.PictureItem.prototype.fireLoaded = function(mArguments) { return new sap.ca.ui.PictureItem(); };

/**
 * Getter for property <code>height</code>.
 * The height of the picture.
 * 
 * Default value is <code>62px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @deprecated Since version 1.16.2. 
 * Height is defined by the AddPicture control
 * 
 */
sap.ca.ui.PictureItem.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ca.ui.PictureItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>name</code>.
 * The original name of the picture.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.getName = function() { return ""; };

/**
 * Getter for property <code>source</code>.
 * The content of the picture. Either the uri or base64 content.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>source</code>
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.getSource = function() { return ""; };

/**
 * Getter for property <code>status</code>.
 * The status of the picture / photo : Added, Deleted, Read
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>status</code>
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.getStatus = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * The width of the picture.
 * 
 * Default value is <code>62px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @deprecated Since version 1.16.2. 
 * Width is defined by the AddPicture control
 * 
 */
sap.ca.ui.PictureItem.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Set the File object
 * @public
 * @param file {File}
 * @param oConfig {Object} Canvas config
 * 
 */
sap.ca.ui.PictureItem.prototype.setFile = function(file,oConfig) {  };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>62px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.2. 
 * Height is defined by the AddPicture control
 * 
 */
sap.ca.ui.PictureItem.prototype.setHeight = function(sHeight) { return new sap.ca.ui.PictureItem(); };

/**
 * Setter for property <code>name</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.setName = function(sName) { return new sap.ca.ui.PictureItem(); };

/**
 * Set the source for the picture, either uri or data url scheme (base64 information).
 * @override
 * @public
 * @param {string} sValue The URI of the image or the DATA URL scheme.
 * <BR>Samples:
 * <BR>1 - "./images/IMG_0095.PNG"
 * <BR>2 - "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAhtJREFUOE+tkF9oUlEcx11pmbnVkw+lvkQwWPXQoMegl57qrZcIpjEqqociiOoloraBIIxRG7UoSNhsq1axGpmatRUEaTljbm56s6b3rnmdXv+k13/ffsfYIPKxH3y53/M953zOl6tYN57y/Q81vUxdVCiHeajtAvRjP9E8IkA5xGPDsFD3m0kq8lr6toz+ydi+iu6wM6tSPRTs658n1Yp9T+LwiTISxSrCmTI63MswPPiBCPlJoQDlAAdbKIvvuTI4yhyLBeweiUFz5xs0g6S70RcbbTGtgs2zhQxShQpOT8TR+zGBvfcjOPNaAJtqDWi/F8ErLguJHrviXkLyVwWPQxmorbNo6Z2b0vaHdXUQm6EvSZQqNYwF0zg6GsWW69N4H83BF8tDzJfR83YJEyEJy9SsrS+IkFjEB9rfdM3/aatlRr8GYqatx49Hn0UIkoxiuQarR4BM8C5HDJ4FCQE+D8dsGhWqyUslZIsVWFzxgOayd8dfILZov+HDfosfR/pn6g3ZJTacWIBIbeqQtAyJfsUFexjHBoPzO6/6Wv8BseC2axEruRL4lIwcvSqXq4gmCuh+ysE6HqW2VZRI8ZUidKfe8bqzk3sagli469wUTgx8xSXbHA51eXH8ZgCHu73Qmd3Y1vkGpr5pdN4KsDy1/aTngLHD2Ww0ORvzjGYnDCYn9KRVb6CM+bW1yZnXm10HCdJKOk9qakT7DfsPyGaTv0W2AAAAAElFTkSuQmCC"
 * 
 */
sap.ca.ui.PictureItem.prototype.setSource = function(sValue) {  };

/**
 * Setter for property <code>status</code>.
 * 
 * Default value is empty/<code>undefined</code> 
 * 
 * @param {string} sStatus  new value for property <code>status</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureItem.prototype.setStatus = function(sStatus) { return new sap.ca.ui.PictureItem(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>62px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.PictureItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.2. 
 * Width is defined by the AddPicture control
 * 
 */
sap.ca.ui.PictureItem.prototype.setWidth = function(sWidth) { return new sap.ca.ui.PictureItem(); };


// ---- sap.ca.ui.PictureTile --------------------------------------------------------------------------

/**
 * Constructor for a new PictureTile.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '32px')</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '32px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTileContent tileContent} : string | sap.ca.ui.PictureViewerItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.PictureTile#event:pictureDelete pictureDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
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
 * @version 1.48.0
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
sap.ca.ui.PictureTile = function(sId,mSettings) {};
/**
 * Fired when the user deletes a picture
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.pictureDelete = function(oControlEvent) {  };

/**
 * Attach event handler <code>fnFunction</code> to the 'pictureDelete' event of this <code>sap.ca.ui.PictureTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.PictureTile</code>.<br/> itself. 
 *  
 * Fired when the user deletes a picture
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.PictureTile</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.attachPictureDelete = function(oData,fnFunction,oListener) { return new sap.ca.ui.PictureTile(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pictureDelete' event of this <code>sap.ca.ui.PictureTile</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.detachPictureDelete = function(fnFunction,oListener) { return new sap.ca.ui.PictureTile(); };

/**
 * Creates a new subclass of class sap.ca.ui.PictureTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event pictureDelete to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.PictureTile.prototype.firePictureDelete = function(mArguments) { return new sap.ca.ui.PictureTile(); };

/**
 * Getter for property <code>height</code>.
 * height (in pixels) of the picture viewer control.
 * 
 * Default value is <code>32px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ca.ui.PictureTile.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureTile.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Reference to one PictureViewerItem coming from the PictureViewer.
 * 
 * @return {string} Id of the element which is the current target of the <code>tileContent</code> association, or null
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.getTileContent = function() { return ""; };

/**
 * Getter for property <code>width</code>.
 * width (in pixels) of the picture viewer control.
 * 
 * Default value is <code>32px</code>
 * 
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Setter for property <code>height</code>.
 * 
 * Default value is <code>32px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.setHeight = function(sHeight) { return new sap.ca.ui.PictureTile(); };

/**
 * Reference to one PictureViewerItem coming from the PictureViewer.
 * 
 * @override
 * @param {string | sap.ca.ui.PictureViewerItem} vTileContent
 *    Id of an element which becomes the new target of this <code>tileContent</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.setTileContent = function(vTileContent) { return new sap.ca.ui.PictureTile(); };

/**
 * Setter for property <code>width</code>.
 * 
 * Default value is <code>32px</code> 
 * 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ca.ui.PictureTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureTile.prototype.setWidth = function(sWidth) { return new sap.ca.ui.PictureTile(); };


// ---- sap.ca.ui.PictureViewer --------------------------------------------------------------------------

/**
 * Constructor for a new PictureViewer.
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
 * <li>{@link #getTileScaling tileScaling} : float (default: 0.95)</li>
 * <li>{@link #getRemovable removable} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ca.ui.PictureViewerItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ca.ui.PictureViewer#event:pictureDeleted pictureDeleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * 
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
 * @version 1.48.0
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
sap.ca.ui.PictureViewer = function(sId,mSettings) {};
/**
 * Thrown when user delete an image
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.pictureDeleted = function(oControlEvent) {  };

/**
 * Adds some item <code>oItem</code>
 * to the aggregation named <code>items</code>.
 * 
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 * @deprecated Use aggregation "tiles"
 * 
 */
sap.ca.ui.PictureViewer.prototype.addItem = function(oItem) { return new sap.ca.ui.PictureViewer(); };

/**
 * Attach event handler <code>fnFunction</code> to the 'pictureDeleted' event of this <code>sap.ca.ui.PictureViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ca.ui.PictureViewer</code>.<br/> itself. 
 *  
 * Thrown when user delete an image
 * 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ca.ui.PictureViewer</code>.<br/> itself.
 * 
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.attachPictureDeleted = function(oData,fnFunction,oListener) { return new sap.ca.ui.PictureViewer(); };

/**
 * Removes the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 * 
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
 *          iIndex the index of the picture to delete; if empty, the current picture is deleted
 * @param {int}
 *             iIndex the <code>0</code>-based index of the picture collection to delete;
 *             if <code>iIndex</code> is out of range or empty, the current image will be deleted.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.deletePicture = function(iIndex,iIndex) { return new sap.ca.ui.PictureViewer(); };

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.destroyItems = function() { return new sap.ca.ui.PictureViewer(); };

/**
 * Detach event handler <code>fnFunction</code> from the 'pictureDeleted' event of this <code>sap.ca.ui.PictureViewer</code>.<br/>
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.detachPictureDeleted = function(fnFunction,oListener) { return new sap.ca.ui.PictureViewer(); };

/**
 * Creates a new subclass of class sap.ca.ui.PictureViewer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureViewer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fire event pictureDeleted to attached listeners.
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ca.ui.PictureViewer.prototype.firePictureDeleted = function(mArguments) { return new sap.ca.ui.PictureViewer(); };

/**
 * Gets the current picture index.
 * 
 * @override
 * @return {sap.ca.ui.PictureViewer} the current picture index
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.getCurrentPictureIndex = function() { return new sap.ca.ui.PictureViewer(); };

/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of PictureViewerItem that contains either a picture URI or the actual Image
 * control.
 * 
 * <strong>Note</strong>: this is the default aggregation for PictureViewer.
 * @return {sap.ca.ui.PictureViewerItem[]}
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ca.ui.PictureViewer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureViewer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>removable</code>.
 * Defines whether or not you can remove a picture
 * 
 * Default value is <code>false</code>
 * 
 * @return {boolean} the value of property <code>removable</code>
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.getRemovable = function() { return false; };

/**
 * Getter for property <code>tileScaling</code>.
 * Percentage of the space occupied by the image in the picture viewer control. Please note that
 * if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be
 * available
 * 
 * Default value is <code>0.95</code>
 * 
 * @return {float} the value of property <code>tileScaling</code>
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.getTileScaling = function() { return 0.0; };

/**
 * Checks for the provided <code>sap.ca.ui.PictureViewerItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * 
 * @param {sap.ca.ui.PictureViewerItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation named <code>items</code>.
 * When adding a new item to the aggregation, a sap.ca.ui.PictureTile is actually created
 * with its own ID and added to the internal TileContainer.
 * 
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *             greater than the current size of the aggregation, the item is inserted at
 *             the last position
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 * @deprecated Use aggregation "tiles"
 * 
 */
sap.ca.ui.PictureViewer.prototype.insertItem = function(oItem,iIndex) { return new sap.ca.ui.PictureViewer(); };

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ca.ui.PictureViewerItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an item from the aggregation named <code>items</code>.
 * 
 * @param {int | string | sap.ca.ui.PictureViewerItem} vItem the item to remove or its index or id
 * @return {sap.ca.ui.PictureViewerItem} the removed item or null
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.removeItem = function(vItem) { return new sap.ca.ui.PictureViewerItem(); };

/**
 * Select the picture at index <code>iIndex</code> from the <code>items</code> aggregation.
 * 
 * @override
 * @param {sap.ca.ui.PictureViewerItem}
 *          iIndex the index of the picture to select; if empty, the first picture is selected
 * @param {int}
 *             iIndex the <code>0</code>-based index of the aggregation to select; for
 *             a negative value of <code>iIndex</code>, the picture at position 0 is selected; for a value
 *             greater than the current size of the aggregation, the selected picture at the last position is selected
 * @return {sap.ca.ui.PictureViewer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.selectPicture = function(iIndex,iIndex) { return new sap.ca.ui.PictureViewer(); };

/**
 * Specify whether or not you can delete a picture.
 * If FALSE the delete button will never be visible. Default value is TRUE
 * @override
 * @public
 * 
 */
sap.ca.ui.PictureViewer.prototype.setRemovable = function() {  };

/**
 * Set the percentage of the space occupied by the image in the picture viewer control.
 * Please note that if the factor is too close to 1, the navigation arrows usually displayed in desktop mode will not be available
 * @override
 * @public
 * @param fTileScale
 * 
 */
sap.ca.ui.PictureViewer.prototype.setTileScaling = function(fTileScale) {  };


// ---- sap.ca.ui.PictureViewerItem --------------------------------------------------------------------------

/**
 * Constructor for a new PictureViewerItem.
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
 * <li>{@link #getSrc src} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getImage image} : sap.m.Image</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Picture viewer control relying on the TileContainer control
 * @extends sap.ui.core.Control
 * @version 1.48.0
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
sap.ca.ui.PictureViewerItem = function(sId,mSettings) {};
/**
 * Destroys the image in the aggregation 
 * named <code>image</code>.
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewerItem.prototype.destroyImage = function() { return new sap.ca.ui.PictureViewerItem(); };

/**
 * Creates a new subclass of class sap.ca.ui.PictureViewerItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureViewerItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for aggregation <code>image</code>.<br/>
 * Pass in an existing Image control to be used inside the PictureViewer
 * 
 * @return {sap.m.Image}
 * @public
 * 
 */
sap.ca.ui.PictureViewerItem.prototype.getImage = function() { return new sap.m.Image(); };

/**
 * Returns a metadata object for class sap.ca.ui.PictureViewerItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.PictureViewerItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>src</code>.
 * Image source url.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @return {string} the value of property <code>src</code>
 * @public
 * 
 */
sap.ca.ui.PictureViewerItem.prototype.getSrc = function() { return ""; };

/**
 * Setter for the aggregated <code>image</code>.
 * @param {sap.m.Image} oImage
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewerItem.prototype.setImage = function(oImage) { return new sap.ca.ui.PictureViewerItem(); };

/**
 * Setter for property <code>src</code>.
 * 
 * Default value is empty/<code>undefined</code>
 * 
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ca.ui.PictureViewerItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.PictureViewerItem.prototype.setSrc = function(sSrc) { return new sap.ca.ui.PictureViewerItem(); };


// ---- sap.ca.ui.utils.busydialog --------------------------------------------------------------------------

/**
 * Destroys the waiting/blocking screen (this method is only recommended if the App developer
 * or the "Unified Shell" has a clean-up strategy and want to release the memory on purpose)
 * @public
 * 
 * @memberof sap.ca.ui.utils.busydialog
 */
sap.ca.ui.utils.busydialog.prototype.destroyBusyDialog = function() {  };

/**
 * Removes the waiting/blocking screen, and is used in pair with the method "requireBusyDialog"
 * @public
 * 
 * @memberof sap.ca.ui.utils.busydialog
 */
sap.ca.ui.utils.busydialog.prototype.releaseBusyDialog = function() {  };

/**
 * Shows the waiting/blocking screen
 * @param {object} [oSettings] settings for the busy dialog:
 *        <p>text : {string} (optional) loading text</p>
 * @public
 * 
 * @memberof sap.ca.ui.utils.busydialog
 */
sap.ca.ui.utils.busydialog.prototype.requireBusyDialog = function(oSettings) {  };


// ---- sap.ca.ui.ZoomableScrollContainer --------------------------------------------------------------------------

/**
 * Constructor for a new ZoomableScrollContainer.
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
 * <li>{@link #getZoomable zoomable} : boolean (default: true)</li>
 * <li>{@link #getInitialScale initialScale} : float (default: 1)</li>
 * <li>{@link #getMinScale minScale} : float (default: 1)</li>
 * <li>{@link #getMaxScale maxScale} : float (default: 4)</li></ul>
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
 * 
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ScrollContainer#constructor sap.m.ScrollContainer}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Based on a ScrollContainer, it allows you to pinch and zoom on mobile devices
 * @extends sap.m.ScrollContainer
 * @version 1.48.0
 * 
 * @constructor
 * @public
 * @deprecated Since version 1.22. 
 * 
 * ZoomableScrollContainer is used in PictureViewer control and is not meant to be consumed outside of PictureViewer usage.
 * PictureViewer was replacing the Carousel as it wasn't supporting some versions of MS Internet Explorer. Now, the
 * sap.m.Carousel is fully functional, please use sap.m.Carousel instead. This control will not be supported anymore.
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ca.ui.ZoomableScrollContainer = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ca.ui.ZoomableScrollContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ca.ui.ZoomableScrollContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Getter for property <code>initialScale</code>.
 * Initial scaling factor
 * 
 * Default value is <code>1</code>
 * 
 * @return {float} the value of property <code>initialScale</code>
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.getInitialScale = function() { return 0.0; };

/**
 * Getter for property <code>maxScale</code>.
 * Highest scaling factor allowed
 * 
 * Default value is <code>4</code>
 * 
 * @return {float} the value of property <code>maxScale</code>
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.getMaxScale = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.ca.ui.ZoomableScrollContainer.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ca.ui.ZoomableScrollContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Getter for property <code>minScale</code>.
 * Lowest scaling factor allowed
 * 
 * Default value is <code>1</code>
 * 
 * @return {float} the value of property <code>minScale</code>
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.getMinScale = function() { return 0.0; };

/**
 * Getter for property <code>zoomable</code>.
 * Activate or not the zooming functionality. If FALSE, it acts exactly as a basic
 * ScrollContainer.
 * 
 * Default value is <code>true</code>
 * 
 * @return {boolean} the value of property <code>zoomable</code>
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.getZoomable = function() { return false; };

/**
 * Setter for property <code>initialScale</code>.
 * 
 * Default value is <code>1</code> 
 * 
 * @param {float} fInitialScale  new value for property <code>initialScale</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.setInitialScale = function(fInitialScale) { return new sap.ca.ui.ZoomableScrollContainer(); };

/**
 * Setter for property <code>maxScale</code>.
 * 
 * Default value is <code>4</code> 
 * 
 * @param {float} fMaxScale  new value for property <code>maxScale</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.setMaxScale = function(fMaxScale) { return new sap.ca.ui.ZoomableScrollContainer(); };

/**
 * Setter for property <code>minScale</code>.
 * 
 * Default value is <code>1</code> 
 * 
 * @param {float} fMinScale  new value for property <code>minScale</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.setMinScale = function(fMinScale) { return new sap.ca.ui.ZoomableScrollContainer(); };

/**
 * Setter for property <code>zoomable</code>.
 * 
 * Default value is <code>true</code> 
 * 
 * @param {boolean} bZoomable  new value for property <code>zoomable</code>
 * @return {sap.ca.ui.ZoomableScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ca.ui.ZoomableScrollContainer.prototype.setZoomable = function(bZoomable) { return new sap.ca.ui.ZoomableScrollContainer(); };


// ---- Type --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
Type.toString = function() { return ""; };
// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ca.ui.charts.ChartColor --------------------------------------------------------------------------

/**
 * Sap Ui Chart 1
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart1 = undefined;

/**
 * Sap Ui Chart 10
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart10 = undefined;

/**
 * Sap Ui Chart 11
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart11 = undefined;

/**
 * Sap Ui Chart 2
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart2 = undefined;

/**
 * Sap Ui Chart 3
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart3 = undefined;

/**
 * Sap Ui Chart 4
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart4 = undefined;

/**
 * Sap Ui Chart 5
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart5 = undefined;

/**
 * Sap Ui Chart 6
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart6 = undefined;

/**
 * Sap Ui Chart 7
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart7 = undefined;

/**
 * Sap Ui Chart 8
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart8 = undefined;

/**
 * Sap Ui Chart 9
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartColor
 */
sap.ca.ui.charts.ChartColor.sapUiChart9 = undefined;


// ---- sap.ca.ui.charts.ChartSelectionMode --------------------------------------------------------------------------

/**
 * The chart will allow multi selection.
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSelectionMode
 */
sap.ca.ui.charts.ChartSelectionMode.Multiple = undefined;

/**
 * The chart will not allow any selection
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSelectionMode
 */
sap.ca.ui.charts.ChartSelectionMode.None = undefined;

/**
 * The chart will only allow single selection
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSelectionMode
 */
sap.ca.ui.charts.ChartSelectionMode.Single = undefined;


// ---- sap.ca.ui.charts.ChartSemanticColor --------------------------------------------------------------------------

/**
 * Bad colro
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.Bad = undefined;

/**
 * Darker Bad color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.BadDark = undefined;

/**
 * Lighter Bad color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.BadLight = undefined;

/**
 * Critical colro
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.Critical = undefined;

/**
 * Darker Critical color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.CriticalDark = undefined;

/**
 * Lighter Critical color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.CriticalLight = undefined;

/**
 * Good colro
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.Good = undefined;

/**
 * Darker Good color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.GoodDark = undefined;

/**
 * Lighter Good color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.GoodLight = undefined;

/**
 * Neutral colro
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.Neutral = undefined;

/**
 * Darker Neutral color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.NeutralDark = undefined;

/**
 * Lighter Neutral color
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartSemanticColor
 */
sap.ca.ui.charts.ChartSemanticColor.NeutralLight = undefined;


// ---- sap.ca.ui.charts.ChartType --------------------------------------------------------------------------

/**
 * A Bar Chart using "viz/bar" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.Bar = undefined;

/**
 * A Bubble chart using "viz/bubble" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.Bubble = undefined;

/**
 * A Column Chart using "viz/column" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.Column = undefined;

/**
 * A Combination chart using "viz/combination" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.Combination = undefined;

/**
 * A Dual Stacked Bar Chart using "viz/dual_stacked_bar" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.DualStackedBar = undefined;

/**
 * A 100% Dual Stacked Bar Chart using "viz/100_dual_stacked_bar" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.DualStackedBar100 = undefined;

/**
 * A Dual Stacked Column Chart using "viz/dual_stacked_column" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.DualStackedColumn = undefined;

/**
 * A 100% Dual Stacked Column Chart using "viz/100_dual_stacked_column" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.DualStackedColumn100 = undefined;

/**
 * A Line Chart using "viz/line" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.Line = undefined;

/**
 * A Stacked Bar Chart using "viz/stacked_bar" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.StackedBar = undefined;

/**
 * A 100% Stacked Bar Chart using "viz/100_stacked_bar" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.StackedBar100 = undefined;

/**
 * A Stacked Column Chart using "viz/stacked_column" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.StackedColumn = undefined;

/**
 * A 100% Stacked Column Chart using "viz/100_stacked_column" chart
 * @public
 * 
 * @memberof sap.ca.ui.charts.ChartType
 */
sap.ca.ui.charts.ChartType.StackedColumn100 = undefined;


// ---- Type --------------------------------------------------------------------------

/**
 * message type: ERROR.
 * @public
 * 
 * @memberof Type
 */
Type.ERROR = undefined;

/**
 * message type: INFO.
 * @public
 * 
 * @memberof Type
 */
Type.INFO = undefined;

/**
 * message type: SUCCESS.
 * @public
 * 
 * @memberof Type
 */
Type.SUCCESS = undefined;

/**
 * message type: WARNING.
 * @public
 * 
 * @memberof Type
 */
Type.WARNING = undefined;

