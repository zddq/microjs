var t=function(){return t=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},t.apply(this,arguments)};function e(e){return e&&"string"==typeof e?i(e).split(";").filter(Boolean).map((function(t){return t.split("=")})).reduce((function(e,r){var n,o=r[0],a=r[1],p=void 0===a?"":a;return t(t({},e),((n={})[o.trim()]=JSON.parse(i(p.trim())),n))}),{}):{}}function i(t){try{return t.includes("%")?decodeURIComponent(t):t}catch(e){return t}}"function"==typeof SuppressedError&&SuppressedError;var r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(t,e,i){void 0===i&&(i={});var n=i||{};if(!r.test(t))throw new TypeError("argument name is invalid");var o=encodeURIComponent(JSON.stringify(e).trim());if(o&&!r.test(o))throw new TypeError("argument val is invalid");var a="".concat(t,"=").concat(o);if(n.domain){if(!r.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain=".concat(n.domain)}if(n.path){if(!r.test(n.path))throw new TypeError("option path is invalid");a+="; Path=".concat(n.path)}if(n.expires){if(!function(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}(n.expires))throw new TypeError("option expires is invalid");a+="; Expires=".concat(n.expires.toUTCString())}if("number"==typeof n.maxAge){if(isNaN(n.maxAge)||!isFinite(n.maxAge))throw new TypeError("option maxAge is invalid");a+="; Max-Age=".concat(Math.floor(n.maxAge))}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.sameSite){if("Strict"!==n.sameSite&&"Lax"!==n.sameSite&&"None"!==n.sameSite)throw new TypeError("option sameSite invalid, sameSite must be Strict | Lax |None");a+="; SameSite=".concat(n.sameSite)}if(n.partitioned&&(a+="; Partitioned"),n.priority){if("High"!==n.priority&&"Medium"!==n.priority&&"Low"!==n.priority)throw new TypeError("option priority invalid, priority muse be High | Medium | Low");a+="; Priority=".concat(n.priority)}return a}function o(t,e,i){if(void 0===i&&(i={}),"undefined"!=typeof window&&i.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");return"undefined"!=typeof window&&(document.cookie=n(String(t),e,i),!0)}var a={get:function(t){return e("undefined"==typeof window?"":document.cookie)[t]},set:o,has:function(t){return!!e("undefined"==typeof window?"":document.cookie)[String(t)]},del:function(t){return o(String(t),"",{maxAge:-1})},parse:e,serialize:n};export{a as default};
