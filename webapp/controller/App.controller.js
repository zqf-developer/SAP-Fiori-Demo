sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	function(Controller) {
		"use strict";
		return Controller.extend("sap.ui.demo.zqf.controller.App", {

			onOpenDialog: function() {
					this.getOwnerComponent().openHelloDialog();
				}
				// onInit: function() {
				// 	// set data model on view
				// 	var oData = {
				// 		recipient: {
				// 			name: "World"
				// 		}
				// 	};
				// 	var oModel = new JSONModel(oData);
				// 	this.getView().setModel(oModel);

			// 	// set i18n model on view
			// 	var i18nModel = new ResourceModel({
			// 		bundleName: "sap.ui.demo.zqf.i18n.i18n"
			// 	});
			// 	this.getView().setModel(i18nModel, "i18n");

			// },
			// 	onShowHello: function() {
			// 		// read msg from i18n model
			// 		// debugger;
			// 		var oBundle = this.getView().getModel("i18n").getResourceBundle();
			// 		var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			// 		var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// 		// show message
			// 		// MessageToast.show(sMsg);
			// 		MessageBox.show(
			// 		sMsg, {
			// 		icon: MessageBox.Icon.INFORMATION,
			// 		title: "My message box title",
			// 		actions: [MessageBox.Action.YES, MessageBox.Action.NO],
			// 		emphasizedAction: MessageBox.Action.YES
			// 		// onClose: function (oAction) { / * do something * / }
			// 	}
			// );
			// 	}
		});
	});