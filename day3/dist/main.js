!function(o){var n={};function e(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=o,e.c=n,e.d=function(o,n,t){e.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:t})},e.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,n){if(1&n&&(o=e(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var r in o)e.d(t,r,function(n){return o[n]}.bind(null,r));return t},e.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(n,"a",n),n},e.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},e.p="",e(e.s=0)}({0:function(o,n,e){"use strict";var t=e(2),r=e(20),u=e(1);console.log("# ------------- About timeouts");var i=setTimeout(function(o){return console.log("Timeout occured! - from a raw javascript"),0},3e3);console.log("# ------------- About bs.scope"),console.log("Length of ancestorOrigins = "+String(window.location.ancestorOrigins.length)),console.log("# ------------- About random");var l=Math.random();console.log("Random value = "+l.toString()),console.log("# ------------- About modules"),console.log("Some id = "+u.some_id.toString()),console.log("# ------------- About dict");var c={John:66};console.log(c),console.log("# ------------- About external.js");var a=r.eid;null==a?console.log("eid not found"):console.log("eid = "+a.toString());var s=t.get(r.peopleAge,"John");void 0!==s?console.log("John is "+String(s)):console.log("John can't be found"),console.log("# ------------- About objects"),console.log(r.getPerson()),console.log("# ------------- The End."),n.t=i,n.rand_val=l,n.some_map=c,n.getPerson=function(o){return r.getPerson()}},1:function(o,n,e){"use strict";n.some_id=6.6},2:function(o,n,e){"use strict";var t=e(3);n.get=function(o,n){if(n in o)return t.some(o[n])},n.unsafeDeleteKey=function(o,n){return delete o[n],0},n.entries=function(o){for(var n=Object.keys(o),e=n.length,t=new Array(e),r=0,u=e-1|0;r<=u;++r){var i=n[r];t[r]=[i,o[i]]}return t},n.values=function(o){for(var n=Object.keys(o),e=n.length,t=new Array(e),r=0,u=e-1|0;r<=u;++r)t[r]=o[n[r]];return t},n.fromList=function(o){for(var n={},e=o;;){var t=e;if(!t)return n;var r=t[0];n[r[0]]=r[1],e=t[1]}},n.fromArray=function(o){for(var n={},e=0,t=o.length-1|0;e<=t;++e){var r=o[e];n[r[0]]=r[1]}return n},n.map=function(o,n){for(var e={},t=Object.keys(n),r=0,u=t.length-1|0;r<=u;++r){var i=t[r];e[i]=o(n[i])}return e}},20:function(o,n,e){"use strict";e.r(n),e.d(n,"eid",function(){return t}),e.d(n,"peopleAge",function(){return r}),e.d(n,"getPerson",function(){return u}),e.d(n,"printTest",function(){return i});let t=3.3,r={John:67},u=()=>({name:"John",age:68,last:"Doe"}),i=o=>console.log(o)},3:function(o,n,e){"use strict";var t=[];function r(o){if(void 0===o){var n=[t,0];return n.tag=256,n}if(null!==o&&o[0]===t){var e=o[1]+1|0,r=[t,e];return r.tag=256,r}return o}function u(o){if(null!==o&&o[0]===t){var n=o[1];return 0===n?void 0:[t,n-1|0]}return o}n.nullable_to_opt=function(o){return null==o?void 0:r(o)},n.undefined_to_opt=function(o){return void 0===o?void 0:r(o)},n.null_to_opt=function(o){return null===o?void 0:r(o)},n.valFromOption=u,n.some=r,n.option_get=function(o){return void 0===o?void 0:u(o)},n.option_get_unwrap=function(o){return void 0===o?void 0:u(o)[1]}}});