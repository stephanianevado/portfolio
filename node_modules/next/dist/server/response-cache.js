"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _utils = require("./utils");
class ResponseCache {
    constructor(incrementalCache){
        this.incrementalCache = incrementalCache;
        this.pendingResponses = new Map();
    }
    get(key, responseGenerator) {
        const pendingResponse = key ? this.pendingResponses.get(key) : null;
        if (pendingResponse) {
            return pendingResponse;
        }
        let resolver = ()=>{
        };
        let rejecter = ()=>{
        };
        const promise = new Promise((resolve, reject)=>{
            resolver = resolve;
            rejecter = reject;
        });
        if (key) {
            this.pendingResponses.set(key, promise);
        }
        let resolved = false;
        const resolve = (cacheEntry)=>{
            if (key) {
                // Ensure all reads from the cache get the latest value.
                this.pendingResponses.set(key, Promise.resolve(cacheEntry));
            }
            if (!resolved) {
                resolved = true;
                resolver(cacheEntry);
            }
        };
        (async ()=>{
            try {
                const cachedResponse = key ? await this.incrementalCache.get(key) : null;
                if (cachedResponse) {
                    var ref;
                    resolve({
                        revalidate: cachedResponse.curRevalidate,
                        value: ((ref = cachedResponse.value) === null || ref === void 0 ? void 0 : ref.kind) === 'PAGE' ? {
                            kind: 'PAGE',
                            html: (0, _utils).resultFromChunks([
                                cachedResponse.value.html
                            ]),
                            pageData: cachedResponse.value.pageData
                        } : cachedResponse.value
                    });
                    if (!cachedResponse.isStale) {
                        // The cached value is still valid, so we don't need
                        // to update it yet.
                        return;
                    }
                }
                const cacheEntry = await responseGenerator(resolved);
                resolve(cacheEntry);
                if (key && cacheEntry && typeof cacheEntry.revalidate !== 'undefined') {
                    var ref;
                    await this.incrementalCache.set(key, ((ref = cacheEntry.value) === null || ref === void 0 ? void 0 : ref.kind) === 'PAGE' ? {
                        kind: 'PAGE',
                        html: (await (0, _utils).resultToChunks(cacheEntry.value.html)).join(''),
                        pageData: cacheEntry.value.pageData
                    } : cacheEntry.value, cacheEntry.revalidate);
                }
            } catch (err) {
                rejecter(err);
            } finally{
                if (key) {
                    this.pendingResponses.delete(key);
                }
            }
        })();
        return promise;
    }
}
exports.default = ResponseCache;

//# sourceMappingURL=response-cache.js.map