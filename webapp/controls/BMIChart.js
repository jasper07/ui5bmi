sap.ui.define(["sap/ui/core/Control",
        "../thirdparty/d3",
        "../thirdparty/c3"
    ],
    function(Control, d3, c3) {
        "use strict";

        c3 = window.c3;

        return Control.extend("bmi.controls.BMIChart", {
            metadata: {
                properties: {
                    "columns": {
                        type: "object",
                        bindable: "bindable",
                        defaultValue: []
                    },
                    "bmi": {
                        type: "float",
                        group: "Data",
                        bindable: "bindable",
                        defaultValue: 0
                    }
                }
            },
            renderer: function(oRm, oControl) {
                oRm.write("<div ");
				oRm.writeControlData(oControl);
				oRm.writeClasses();
				oRm.write(">");

                oRm.write("<div ");
                oRm.writeAttribute("id", oControl.getId() + "-chart");
                oRm.write("</div>");

                oRm.write("</div>");
            },

            init: function() {
                this.sChartId = "#" + this.getId() + "-chart";
            },

            setBmi: function(iValue) {
                this.setProperty("bmi", iValue, true);
                this._updateColums();
            },

            _updateColums: function() {
                // delay if updated through binding
                jQuery.sap.clearDelayedCall(this.delayedCallId);
                this.delayedCallId = jQuery.sap.delayedCall(0, this, function() {

                    var aVal1 = ["BMI ", this.getBmi()];

                    this.setColumns([aVal1]);
                });
            },

            getColumns: function() {
                return this.getProperty("columns");
            },

            setColumns: function(aValue) {
                this.setProperty("columns", aValue, true);
                if (this.oChart) {
                    this.oChart.load({
                        columns: aValue
                    });
                    this.setVisible(true);
                }
            },
            invalidate: function() {
                jQuery.sap.clearDelayedCall(this._sInvalidateDelay);
                this._sInvalidateDelay = jQuery.sap.delayedCall(200, this, Control.prototype.invalidate, arguments);
            },

            onAfterRendering: function() {
                this.oChart = c3.generate({
                    bindto: this.sChartId,
                    size: {
                        height: 190,
                    },
                    data: {
                        columns: this.getColumns(),
                        type: "gauge"
                    },
                    color: {
                        pattern: ['#0092B9', '#86AD00', '#F2B705', '#D72931'],
                        threshold: { values: [18.5, 25, 30, 40] }
                    },
                    gauge: {
                        label: {
                            format: function(value, ratio) {
                                return value;
                            },
                            show: false
                        },
                        min: 0,
                        max: 40,
                        // units: 'X' //this is only the text for the label
                    }
                });
            }
        });
    }, /* bExport= */ true);
