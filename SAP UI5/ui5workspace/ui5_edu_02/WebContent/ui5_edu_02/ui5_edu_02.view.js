sap.ui.jsview("ui5_edu_02.ui5_edu_02", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5_edu_02.ui5_edu_02
	*/ 
	getControllerName : function() {
		return "ui5_edu_02.ui5_edu_02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5_edu_02.ui5_edu_02
	*/ 
	createContent : function(oController) {
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [
		        { axis : 1, name : '회사코드', value : "{Bukrs}" } 
		    ],
		    measures : [ 
		        { name : 'Price', value : '{Wrbtr}' } 
		    ],
		    data : {
		        path : "/CRUDSet",
		        filters: [
//		               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
		        ]
		    }
		});
		var oChart = new sap.viz.ui5.Donut({
		    width : "80%",
		    height : "400px",
		    title : {
		        visible : true,
		        text : 'Company Chart'
		    },
		});

		oChart.setDataset(oDataset);
		oChart.setModel(oModel);
		return oChart;
	}
	
});