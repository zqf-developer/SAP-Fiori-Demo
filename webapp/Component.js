sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.zqf.UIComponent", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			var oData = {
				recipient: {
					name: "World",
					value: "Calvin"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			// // set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName: "sap.ui.demo.zqf.i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");
		},
		exit: function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});
});