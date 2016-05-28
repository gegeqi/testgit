'use strict';

function thousands_separators(input) {
    var expectText = String(input).split(".");
    expectText[0] = expectText[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");
    return expectText.join(".");

}


module.exports = thousands_separators;

