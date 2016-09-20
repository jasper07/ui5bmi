sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/matchers/PropertyStrictEquals",
    "sap/ui/test/actions/Press",
    "sap/ui/test/actions/EnterText",
    "test/pages/Common"
], function(Opa5, PropertyStrictEquals, Press, EnterText, Common) {
    "use strict";
    var sViewName = "Calculate";

    Opa5.createPageObjects({
        onTheCalculatePage: {
            baseClass: Common,
            actions: {
                iEnterHeightAsHeight: function(iHeight) {
                    return this.waitFor({
                        id: "idHeight-input",
                        viewName: sViewName,
                        actions: new EnterText({ text: iHeight }),
                        success: function(oInput) {
                            assert.strictEqual(oInput.getValue(), iHeight.toString(), "Height added");
                        },
                        errorMessage: "Height Input field not found"
                    });
                },

                iEnterWeightAsWeight: function(iWeight) {
                    return this.waitFor({
                        id: "idWeight-input",
                        viewName: sViewName,
                        actions: new EnterText({ text: iWeight }),
                        success: function(oInput) {
                            assert.strictEqual(oInput.getValue(), iWeight.toString(), "Weight added");
                        },
                        errorMessage: "Weight Input field not found"
                    });
                },

                iPressTheCalculateButton: function() {
                    return this.waitFor({
                        id: "idCalculate",
                        viewName: sViewName,
                        actions: new Press(),
                        success: function(oButton) {
                            Opa5.assert.ok(true, "Calculate Button Pressed");
                        },
                        errorMessage: " Calculate Button not found"
                    });
                }
            },
            assertions: {
                iShouldseeBMIAndCategory: function(iBMI, sCategory) {
                        this.waitFor({
                            id: "idCategory",
                            viewName: sViewName,
                            matchers: new PropertyStrictEquals({ name: "text", value: sCategory }),
                            success: function(oText) {
                                assert.strictEqual(oText.getText(), sCategory, "Category " + sCategory + " = " + oText.getText());
                            },
                            errorMessage: "Category was not correct"
                        });


                        return this.waitFor({
                            id: "idChart",
                            viewName: sViewName,
                            matchers: new PropertyStrictEquals({ name: "bmi", value: parseFloat(iBMI, 10) }),
                            success: function() {
                                Opa5.assert.ok(true, "Correct BMI " + iBMI);
                            },
                            errorMessage: "BMI is not correct"
                        });
                }

            }
        }
    });
});
