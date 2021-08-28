"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _asyncRetry = _interopRequireDefault(require("next/dist/compiled/async-retry"));
var _crypto = require("crypto");
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var Log = _interopRequireWildcard(require("../../../build/output/log"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
let traceId = process.env.TRACE_ID;
let batch;
const localEndpoint = {
    serviceName: 'nextjs',
    ipv4: '127.0.0.1',
    port: 9411
};
const zipkinUrl = `http://${localEndpoint.ipv4}:${localEndpoint.port}`;
const zipkinAPI = `${zipkinUrl}/api/v2/spans`;
// Batch events as zipkin allows for multiple events to be sent in one go
function batcher(reportEvents) {
    const events = [];
    let timeout;
    return (event)=>{
        events.push(event);
        // setTimeout is used instead of setInterval to ensure events sending does not block exiting the program
        if (!timeout) {
            timeout = setTimeout(()=>{
                reportEvents(events.slice());
                events.length = 0;
                timeout = undefined;
            }, 1500);
        }
    };
}
const reportToLocalHost = (name, duration, timestamp, id, parentId, attrs)=>{
    if (!traceId) {
        traceId = process.env.TRACE_ID = (0, _crypto).randomBytes(8).toString('hex');
        Log.info(`Zipkin trace will be available on ${zipkinUrl}/zipkin/traces/${traceId}`);
    }
    if (!batch) {
        batch = batcher((events)=>{
            // Ensure ECONNRESET error is retried 3 times before erroring out
            (0, _asyncRetry).default(()=>// Send events to zipkin
                (0, _nodeFetch).default(zipkinAPI, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(events)
                })
            , {
                minTimeout: 500,
                retries: 3,
                factor: 1
            }).catch(console.log);
        });
    }
    batch({
        traceId,
        parentId,
        name,
        id,
        timestamp,
        duration,
        localEndpoint,
        tags: attrs
    });
};
var _default = reportToLocalHost;
exports.default = _default;

//# sourceMappingURL=to-zipkin.js.map