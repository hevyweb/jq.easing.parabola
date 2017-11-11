if (typeof QUnit == 'undefined') {// if your tests also run in the browser...
    QUnit = require('qunit-cli');
}

if (typeof jQuery == 'undefined') {
    var jsdom = require('jsdom');
    var document = new jsdom.JSDOM('');
    jQuery = require('jquery')(document.window);
    $ = jQuery;
}

require("../jq.easing.parabola");

QUnit.test('Positive test jQuery easing parabola', function(assert){
    var data = [
        {timeDelta: 0, expected: 100},
        {timeDelta: 0.0001, expected: 101.99989999749982},
        {timeDelta: 0.5, expected: 200},
        {timeDelta: 0.9999, expected: 101.99989999749982}
    ];
    var initialValue = 100;
    var delta = 100;

    for(var n = 0; n < data.length; n++){
        var test = data[n];
        var result = $.easing.parabola(test.timeDelta, null, initialValue, delta, null);
        assert.equal(result, test.expected, 'Test ' + n + ' failed.');
    }
});

QUnit.test('Negative test jQuery easing parabola', function(assert){
    var data = [-0.0001, 1.0001, 2, -999999];
    var initialValue = 100;
    var delta = 100;

    for(var n = 0; n < data.length; n++){
        var test = data[n];
        var result = $.easing.parabola(test, null, initialValue, delta, null);
        assert.notOk(result, 'Test ' + n + ' failed.');
    }
});