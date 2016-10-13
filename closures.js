"use strict"

function foo() {
    var bar;
    quux = 5;
    
    function zip() {
        bar = true;
        var quux = 4;
    };

    return zip;
};

