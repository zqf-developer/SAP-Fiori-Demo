sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
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
					value:"Calvin"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// // set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName: "sap.ui.demo.zqf.i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");
		}
	});
});