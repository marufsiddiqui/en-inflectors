"use strict";
var list = require("./solve_lookup");
function strip(verb) {
    if (verb.length < 2)
        return "";
    verb = verb.substring(1);
    if (list.lookup(verb).length)
        return verb;
    else
        return strip(verb);
}
exports.strip = strip;
function rebuild(original, stripped, conjugated) {
    var rebuilt = original.substr(0, original.indexOf(stripped) + stripped.length);
    rebuilt = original.split(stripped).join(conjugated);
    return rebuilt;
}
exports.rebuild = rebuild;