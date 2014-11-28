/*global define,console*/
define([
        './indent',
        './a'
    ], function(
        indent,
        a) {
    'use strict';

    return function(depth) {
        console.log(indent(depth, 'b'));
        a(depth + 1);
    };
});