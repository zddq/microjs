!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e="undefined"!=typeof globalThis?globalThis:e||self).MiniCookie=i()}(this,(function(){"use strict";function e(e){return e&&"string"==typeof e?function(e){try{return e.includes("%")?decodeURIComponent(e):e}catch(i){return e}}(e).split(";").filter(Boolean).map((e=>e.split("="))).reduce(((e,[i,t=""])=>{try{return Object.assign(Object.assign({},e),{[i.trim()]:JSON.parse(t.trim())})}catch(n){return Object.assign(Object.assign({},e),{[i.trim()]:t.trim()})}}),{}):{}}const i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function t(e,t,n={}){const r=n||{};if(!i.test(e))throw new TypeError("argument name is invalid");const o=encodeURIComponent(JSON.stringify(t).trim());if(o&&!i.test(o))throw new TypeError("argument val is invalid");let a=`${e}=${o}`;if(r.domain){if(!i.test(r.domain))throw new TypeError("option domain is invalid");a+=`; Domain=${r.domain}`}if(r.path){if(!i.test(r.path))throw new TypeError("option path is invalid");a+=`; Path=${r.path}`}if(r.expires){if(!function(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}(r.expires))throw new TypeError("option expires is invalid");a+=`; Expires=${r.expires.toUTCString()}`}if("number"==typeof r.maxAge){if(isNaN(r.maxAge)||!isFinite(r.maxAge))throw new TypeError("option maxAge is invalid");a+=`; Max-Age=${Math.floor(r.maxAge)}`}if(r.httpOnly&&(a+="; HttpOnly"),r.secure&&(a+="; Secure"),r.sameSite){if("Strict"!==r.sameSite&&"Lax"!==r.sameSite&&"None"!==r.sameSite)throw new TypeError("option sameSite invalid, sameSite must be Strict | Lax |None");a+=`; SameSite=${r.sameSite}`}if(r.partitioned&&(a+="; Partitioned"),r.priority){if("High"!==r.priority&&"Medium"!==r.priority&&"Low"!==r.priority)throw new TypeError("option priority invalid, priority muse be High | Medium | Low");a+=`; Priority=${r.priority}`}return a}function n(e,i,n={}){if("undefined"!=typeof window&&n.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");return"undefined"!=typeof window&&(document.cookie=t(String(e),i,n),!0)}return{get:function(i){return e("undefined"==typeof window?"":document.cookie)[i]},set:n,has:function(i){return!!e("undefined"==typeof window?"":document.cookie)[String(i)]},del:function(e){return n(String(e),"",{maxAge:-1})},parse:e,serialize:t}}));
