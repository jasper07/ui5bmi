sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";
    return Controller.extend("bmi.controller.Calculate", {

        onInit: function() {
            this.oModel = new JSONModel({
                Height: 185.5,
                Weight: 85.6,
                BMI: 24.9,
                Category: "Normal"
            });
            this.getView().setModel(this.oModel);
        },


        calculateBMI: function(oEvent) {
            var iWeight = this.oModel.getProperty("/Weight");
            var iHeight = this.oModel.getProperty("/Height") / 100;

            var oValue = Math.round(iWeight / Math.pow(iHeight, 2) * 10) / 10;
            this.oModel.setProperty("/BMI", oValue);
            this.oModel.setProperty("/Category", this.getBMIClass(oValue));
        },

        getBMIClass: function(oValue) {
            var sClass = "";
            switch (true) {
                case (oValue >= 30):
                    sClass = "obese";
                    break;
                case (oValue >= 25):
                    sClass = "over";
                    break;
                case (oValue >= 18.5):
                    sClass = "healthy";
                    break;
                default:
                    sClass = "under";
            }
            return this.getView().getModel("i18n").getResourceBundle().getText(sClass);
        }

    });
});
