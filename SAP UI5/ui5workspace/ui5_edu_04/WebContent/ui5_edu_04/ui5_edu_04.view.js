sap.ui.jsview("ui5_edu_04.ui5_edu_04", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf ui5_edu_04.ui5_edu_04
	 */
	getControllerName : function() {
		return "ui5_edu_04.ui5_edu_04";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf ui5_edu_04.ui5_edu_04
	 */
	createContent : function(oController) {
		
//		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
//			dimensions : [ {
//				axis : 1,
//				name : '자재코드',
//				value : "{Matnr}"
//			} ],
//			measures : [ {
//				name : '수량',
//				value : '{Menge}'
//			} ],
//			data : {
//				path : "/MATERIALSet",
//				filters : [
//				// new
//				// sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
//				]
//			}
//		});
//
//		var oChart = new sap.viz.ui5.Line({
//			width : "80%",
//			height : "400px",
//			title : {
//				visible : true,
//				text : '자재코드 라인'
//			},
//		});
//		
//		oChart.setDataset(oDataset);
//		oChart.setModel(oModel)
//		return oChart;
//
		
		//Table
		var oTable = new sap.ui.table.Table("itab1",{
				visibleRowCount: 10
		});

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "회사코드"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Bukrs")
		}));
				
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "공장코드"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Werks")
		}));
				
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "자재"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Matnr")
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "수량"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Menge")
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "단위"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Meins")
		}));

		oTable.bindRows("/MATERIALSet");
		
		var ele = [oTable];
		return ele;

	}

});
