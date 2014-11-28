define([], function() {
    return function(depth, text) {
        var indent = '';
        for (var i = 0; i < depth; ++i) {
            indent += '-';
        }
        return indent + text;
    }
});