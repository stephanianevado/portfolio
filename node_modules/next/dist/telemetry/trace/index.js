"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "trace", {
    enumerable: true,
    get: function() {
        return _trace.trace;
    }
});
Object.defineProperty(exports, "SpanId", {
    enumerable: true,
    get: function() {
        return _shared.SpanId;
    }
});
Object.defineProperty(exports, "Span", {
    enumerable: true,
    get: function() {
        return _trace.Span;
    }
});
Object.defineProperty(exports, "SpanStatus", {
    enumerable: true,
    get: function() {
        return _trace.SpanStatus;
    }
});
Object.defineProperty(exports, "stackPush", {
    enumerable: true,
    get: function() {
        return _autoparent.stackPush;
    }
});
Object.defineProperty(exports, "stackPop", {
    enumerable: true,
    get: function() {
        return _autoparent.stackPop;
    }
});
Object.defineProperty(exports, "setGlobal", {
    enumerable: true,
    get: function() {
        return _shared.setGlobal;
    }
});
var _trace = require("./trace");
var _shared = require("./shared");
var _autoparent = require("./autoparent");

//# sourceMappingURL=index.js.map