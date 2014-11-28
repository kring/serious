/*global require,console*/
require([
        './a',
        './b',
        './c'
    ], function(
        a,
        b,
        c) {
    'use strict';

    console.log('main');
    a(1);
    b(1);
    c(1);
});
