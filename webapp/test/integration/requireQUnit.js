jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.qunit.qunit-coverage");

if (window.blanket) {
    window.blanket.options("sap-ui-cover-never", "/thirdparty/");
    window.blanket.options("sap-ui-cover-only", "bmi");
}

jQuery.sap.require("sap.ui.thirdparty.sinon");
jQuery.sap.require("sap.ui.thirdparty.sinon-qunit");

/*
 global QUnit
 */
QUnit.config.autostart = false;
