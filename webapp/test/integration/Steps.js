sap.ui.define([
    "sap/ui/test/gherkin/StepDefinitions",
    "sap/ui/test/gherkin/dataTableUtils"
], function(StepDefinitions, dataTableUtils) {
    "use strict";

    var Steps = StepDefinitions.extend("test.Steps", {

        init: function() {

            this.register(/^on the calculate page: I enter (\d{1,3}) as height$/i,
                function(iHeight, Given, When, Then) {
                    When.onTheCalculatePage.iEnterHeightAsHeight(parseInt(iHeight, 10));
                });

            this.register(/^I enter (\d{1,3}) as weight$/i,
                function(iWeight, Given, When, Then) {
                    When.onTheCalculatePage.iEnterWeightAsWeight(parseInt(iWeight, 10));
                });

            this.register(/^I press the Calculate button$/i,
                function(Given, When, Then) {
                    When.onTheCalculatePage.iPressTheCalculateButton();
                });


            this.register(/^on the calculate page: I should see (\d+\.?\d+) as bmi and (\w{1,20}) as category$/i, function(iBMI, sCategory, Given, When, Then) {
                Then.onTheCalculatePage.iShouldseeBMIAndCategory(iBMI, sCategory);
            });

        },
        closeApplication: function() {
            $.sap.log.info("Closing application");
            $("body").removeClass("sapUiOpaBodyComponent");
            $(".sapUiOpaComponent").remove();
        }
    });

    return Steps;

});
