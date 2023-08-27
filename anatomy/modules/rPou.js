/**
 * id: rPou
 * path: ../common/track-video
 */

function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function l(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,l)}u((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createVideoTracker=void 0;var o=require("@bilibili-live/web-player-video"),i=r(require("@bilibili-live/web-player-track")),a=require("@bilibili-live/web-player-common"),l=i.default.PerfCode,u=i.default.EventCode,c=i.default.CustomCode;function s(){var r=this,s=!1,f=!1,d=!1;window.addEventListener("unload",function(){d=!0});var p=new WeakMap,v=function(v){i.default.event(u.CreateVideo,null,{sampleRate:.1,extFields:["sProtocol","sHost","p2pType","sCodec","sName","sFormat"],randDelay:0}),v.once(o.EventType.NetworkResponse,function(e){var t,n,r=e.headers.get("x-service-module");null!=r&&i.default.updateDynamicInfo(((t={})["x-service-module"]=((n={})[r]=1,n),t))}),v.once(o.EventType.FirstFrame,function(e){i.default.perf(l.FirstFrame,e,{sampleRate:.1,extFields:"all"})}),v.once(o.EventType.FirstPacket,function(e){i.default.perf(l.FirstPacket,e,{sampleRate:.05})}),v.once(o.EventType.MetaData,function(e){i.default.perf(l.VideoMeta,e,{sampleRate:.05})}),v.once(o.EventType.Ended,function(){return t(r,void 0,void 0,function(){return n(this,function(e){return s=!0,[2]})})}),v.once(o.EventType.FirstFrame,function(){s=!1,f=!1}),v.once(o.EventType.Error,function(e){d||f||(f=!0,s||i.default.error(e.code,JSON.stringify(e.errInfo)))});var y=i.default.fixedDynamicFieldsVerIns(),h={};v.on(o.EventType.WaitReport,function(t){var n,r,o={},i=p.get(v);null!=(null==i?void 0:i.getP2PDataCollectionStatus)&&(null===(r=null==i?void 0:i.getP2PDataCollectionStatus)||void 0===r?void 0:r.call(i)).getQueryServerInfo().bvcServiceModule.forEach(function(e,t){o[t]=e});var l=a.minusObject(h,o);h=o;null!=i&&y.updateDynamicInfo(((n={})["x-service-module"]=l,n)),y.custom(c.Waiting,e({},t),{randDelay:5e3,extFields:"all"})})};return v.setP2PInstance=function(e,t){p.set(e,t)},v}exports.createVideoTracker=s;
}