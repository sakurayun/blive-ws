/**
 * id: jGuH
 * path: ./exp
 */

function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExpUtils=void 0;var e=require("../utils");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var a,i,o,s=function(e,t,r,n,a){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?a.call(e,r):a?a.value=r:t.set(e,r),r},c=function(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)},l=function(){function e(r,n,c){t(this,e),a.set(this,!1),i.set(this,void 0),o.set(this,null),s(this,i,r,"f"),s(this,o,null,"f"),this.createObserver(n,c)}return n(e,[{key:"createObserver",value:function(e,t){var r=this;null!==c(this,o,"f")&&this.destroyObserver();var n=!1;s(this,a,!1,"f"),s(this,o,new IntersectionObserver(function(t){var i=t.some(function(e){return e.isIntersecting});i!==c(r,a,"f")&&(s(r,a,i,"f"),i&&(n||(n=!0,setTimeout(function(){n=!1},500),e.callback(),e.repeat||r.destroyObserver())))},{threshold:[.5]}),"f"),t.context.$nextTick(function(){var e;null===(e=c(r,o,"f"))||void 0===e||e.observe(c(r,i,"f"))})}},{key:"destroyObserver",value:function(){var e;null===(e=c(this,o,"f"))||void 0===e||e.disconnect(),s(this,o,null,"f")}}]),e}();a=new WeakMap,i=new WeakMap,o=new WeakMap;var u={bind:function(e,t,r){if(void 0===window.IntersectionObserver)console.warn("IntersectionObserver API is not available in your browser.");else{var n=new l(e,t,r);e.track_exp_state=n}},update:function(t,r,n){(0,e.deepEqual)(r.value,r.oldValue)||t.track_exp_state.createObserver({callback:r.callback,repeat:r.repeat},n)},unbind:function(e){e.track_exp_state.destroyObserver()}};exports.ExpUtils=u;
}