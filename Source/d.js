/*global define,console*/
define([
        './indent',
        './e'
    ], function(
        indent,
        e) {
    'use strict';

    return function(depth) {
        console.log(indent(depth, 'd'));
        e(depth + 1);
    };
});