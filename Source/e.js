/*global define,console*/
define([
        './indent',
        './c'
    ], function(
        indent,
        c) {
    'use strict';

    return function(depth) {
        console.log(indent(depth, 'e'));
        c(depth + 1);
    };
});