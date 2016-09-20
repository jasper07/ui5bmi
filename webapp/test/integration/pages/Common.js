sap.ui.define([
        "sap/ui/test/Opa5"
    ],
    function(Opa5) {
        "use strict";
        var sComponent = "bmi";


        return Opa5.extend("test.pages.Common", {
            constructor: function(oConfig) {
                Opa5.apply(this, arguments);

                this._oConfig = oConfig;
            },


            /**
             * i start my app
             * @param  {[type]} oOptions [description]
             */
            iStartMyApp: function(oOptions) {
                this.iStartMyUIComponent({
                    componentConfig: {
                        name: sComponent
                    },
                    hash: ""
                });
            },



            /**
             * [iLookAtTheScreen description]
             * @return {[type]} [description]
             */
            iLookAtTheScreen: function() {
                return this;
            }
        });
    });
