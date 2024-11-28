!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).MiniCookie=t()}(this,(function(){"use strict";const e=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function t(t,i,r={}){const n=r||{};if(!e.test(t))throw new TypeError("argument name is invalid");const o=encodeURIComponent(JSON.stringify(i).trim());if(o&&!e.test(o))throw new TypeError("argument val is invalid");let a=`${t}=${o}`;if(n.domain){if(!e.test(n.domain))throw new TypeError("option domain is invalid");a+=`; Domain=${n.domain}`}if(n.path){if(!e.test(n.path))throw new TypeError("option path is invalid");a+=`; Path=${n.path}`}if(n.expires){if(!function(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}(n.expires))throw new TypeError("option expires is invalid");a+=`; Expires=${n.expires.toUTCString()}`}if("number"==typeof n.maxAge){if(isNaN(n.maxAge)||!isFinite(n.maxAge))throw new TypeError("option maxAge is invalid");a+=`; Max-Age=${Math.floor(n.maxAge)}`}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.sameSite){if("Strict"!==n.sameSite&&"Lax"!==n.sameSite&&"None"!==n.sameSite)throw new TypeError("option sameSite invalid, sameSite must be Strict | Lax |None");a+=`; SameSite=${n.sameSite}`}if(n.partitioned&&(a+="; Partitioned"),n.priority){if("High"!==n.priority&&"Medium"!==n.priority&&"Low"!==n.priority)throw new TypeError("option priority invalid, priority muse be High | Medium | Low");a+=`; Priority=${n.priority}`}return a}function i(e){try{return e&&"string"==typeof e?function(e){try{return e.includes("%")?decodeURIComponent(e):e}catch(t){return e}}(e).split(";").filter(Boolean).map((e=>e.split("="))).reduce(((e,[t,i=""])=>{try{return Object.assign(Object.assign({},e),{[t.trim()]:JSON.parse(i.trim())})}catch(r){return Object.assign(Object.assign({},e),{[t.trim()]:i.trim()})}}),{}):{}}catch(e){return console.error(e),{}}}function r(e,i,r={}){try{if("undefined"!=typeof window&&r.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");const n=t(String(e),i,r);return"undefined"==typeof window?!!r.ctx&&(r.ctx.res.setHeader("'Set-Cookie'",n),!0):(document.cookie=n,!0)}catch(e){return console.error("cookie set err:",e),!1}}return{serialize:t,parse:i,get:function(e,t={}){try{return"undefined"==typeof window?i(document.cookie)[e]:t.ctx?i(t.ctx.req.headers.cookie||"")[e]:i("")[e]}catch(t){return console.error(t),i("")[e]}},set:r,del:function(e,t={}){return r(String(e),"",Object.assign(Object.assign({},t),{maxAge:-1}))},has:function(e,t={}){try{return"undefined"==typeof window?!!t.ctx&&!!i(t.ctx.req.headers.cookie||"")[String(e)]:!!i(document.cookie)[String(e)]}catch(e){return console.error(e),!1}}}}));
