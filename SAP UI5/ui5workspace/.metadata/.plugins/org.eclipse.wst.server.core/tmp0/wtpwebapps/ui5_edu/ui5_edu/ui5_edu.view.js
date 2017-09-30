sap.ui.jsview("ui5_edu.ui5_edu", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf ui5_edu.ui5_edu
	 */
	getControllerName : function() {
		return "ui5_edu.ui5_edu";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf ui5_edu.ui5_edu
	 */
	createContent : function(oController) {

		var oTable = new sap.ui.table.Table({
			title : " 자재문서번호 Table ",
			visibleRowCount : 5,
			selectionMode : sap.ui.table.SelectionMode.Single,
			navigationMode : sap.ui.table.NavigationMode.Paginavigator,
			fixedColumnCount : 2,
			width : "800px"
		});

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "년도"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Gjahr"),
			sortProperty : "Gjahr",
			filterProperty : "Gjahr",
			width : "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "회사코드"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Bukrs"),
			sortProperty : "Bukrs",
			filterProperty : "Bukrs",
			width : "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "자재문서번호"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Belnr"),
			sortProperty : "Belnr",
			filterProperty : "Belnr",
			width : "300px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "로컬금액"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Dmbtr"),
			sortProperty : "Dmbtr",
			filterProperty : "Dmbtr",
			width : "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "통화키"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Waers"),
			sortProperty : "Waers",
			filterProperty : "Waers",
			width : "100px"
		}));


		oTable.bindRows("/EX02Set");
		oTable.setModel(oModel);

		return oTable;
	}
});
