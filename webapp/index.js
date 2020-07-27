sap.ui.define([
	// "sap/ui/core/mvc/XMLView"
	"sap/ui/core/ComponentContainer"

], function(ComponentContainer) {
	"use strict";

	// XMLView.create({
	// 	viewName: "sap.ui.demo.zqf.view.App"
	// }).then(function (oView) {
	// 	oView.placeAt("content");
	// });

	new ComponentContainer({
		name: "sap.ui.demo.zqf",
		settings: {
			id: "containerId"
		},
		async: true
	}).placeAt("content");

});