/**
 * id: XBQm
 * path: ./panorama
 */

(function(require,module,exports) {
"use strict";var e,t,n,a,i,o,r,s,l,c,f,p,d,u,h,m,v,w,x,g,M,E,y,b,k,T,W=this&&this.__classPrivateFieldGet||function(e,t,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)},L=this&&this.__classPrivateFieldSet||function(e,t,n,a,i){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?i.call(e,n):i?i.value=n:t.set(e,n),n},P=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.showPanoramaTip=exports.Panorama=void 0;var C=require("@bilibili-live/web-player-common"),R=P(require("@bilibili-live/web-player-track")),z=function(){return function(P,z,_){var A=this;this.container=P,this.videoEl=z,e.set(this,document.createElement("div")),t.set(this,!1),n.set(this,0),a.set(this,0),i.set(this,0),o.set(this,0),r.set(this,!1),s.set(this,0),l.set(this,0),c.set(this,0),f.set(this,void 0),p.set(this,[]),d.set(this,null),this.destroy=function(){L(A,t,!0,"f"),W(A,T,"f").call(A),W(A,e,"f").remove(),W(A,p,"f").forEach(function(e){return null==e?void 0:e()})},u.set(this,function(e,t,n){var a=n.getBoundingClientRect(),i=new e.PerspectiveCamera(75,a.width/a.height,1,1100);W(A,h,"f").call(A,i);var o=new e.Scene,r=new e.SphereBufferGeometry(500,100,80);r.scale(-1,1,1);var s=new e.VideoTexture(t),l=new e.MeshBasicMaterial({map:s}),c=new e.Mesh(r,l);o.add(c);var f=new e.WebGLRenderer;return L(A,d,f,"f"),f.setPixelRatio(window.devicePixelRatio),f.setSize(a.width,a.height),W(A,p,"f").push(A.handleResize()),{camera:i,renderer:f,scene:o}}),this.handleResize=function(){var e=function(){var e,t=A.container.getBoundingClientRect();null===(e=W(A,d,"f"))||void 0===e||e.setSize(t.width,t.height)};window.addEventListener("resize",e);var t=setInterval(function(){e()},17);return function(){window.removeEventListener("resize",e),clearInterval(t)}},h.set(this,function(e){L(A,l,Math.max(-85,Math.min(85,W(A,l,"f"))),"f");var t=window.THREE.MathUtils.degToRad(90-W(A,l,"f")),n=window.THREE.MathUtils.degToRad(W(A,s,"f"));e.position.x=10*Math.sin(t)*Math.cos(n),e.position.y=10*Math.cos(t),e.position.z=10*Math.sin(t)*Math.sin(n),e.lookAt(0,0,0)}),m.set(this,function(){var t=window.THREE,n=W(A,u,"f").call(A,t,A.videoEl,A.container),a=n.camera,i=n.renderer,o=n.scene;L(A,f,a,"f");var r=i.domElement;A.videoEl.style.cssText+="\n      z-index: -1;\n    ",C.ua.isSafari()&&(A.videoEl.crossOrigin="anonymous"),r.style.cssText="\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow: hidden;\n      z-index: 1;\n    ",r.style.width="100%",r.style.height="100%",A.container.appendChild(r),W(A,p,"f").push(W(A,v,"f").call(A,a)),A.container.appendChild(W(A,e,"f")),function e(){i.render(o,a),l=requestAnimationFrame(e)}();var s=W(A,x,"f").call(A,a,A.container),l=0;return function(){s(),cancelAnimationFrame(l),r.remove(),W(A,e,"f").remove()}}),v.set(this,function(t){R.default.operation(R.default.OperationCode.Panorama,{type:"pv"}),W(A,e,"f").style.cssText="\n    position: absolute;\n    opacity: 0.4;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    z-index: 39;\n    outline: none;\n    left: 10px;\n    top: 60px;\n    background-color: #fff;\n    cursor: pointer;\n  ",W(A,e,"f").appendChild(W(A,g,"f").call(A)),W(A,e,"f").appendChild(W(A,M,"f").call(A)),W(A,e,"f").appendChild(W(A,y,"f").call(A)),W(A,e,"f").appendChild(W(A,b,"f").call(A));var n=function(e){e.stopPropagation()};return W(A,e,"f").addEventListener("dblclick",n),W(A,e,"f").onmouseenter=function(){W(A,e,"f").style.opacity="1"},W(A,e,"f").onmouseleave=function(){W(A,e,"f").style.opacity="0.4"},function(){W(A,e,"f").removeEventListener("dblclick",n)}}),w.set(this,function(t){W(A,e,"f").contains(t.target)||(L(A,r,!0,"f"),R.default.operation(R.default.OperationCode.Panorama,{type:"mouse"},{sampleRate:.1}),L(A,n,t.clientX,"f"),L(A,a,t.clientY,"f"),L(A,i,W(A,s,"f"),"f"),L(A,o,W(A,l,"f"),"f"))}),x.set(this,function(t,c){var f=function(c){W(A,e,"f").contains(c.target)||W(A,r,"f")&&(L(A,s,.1*(W(A,n,"f")-c.clientX)+W(A,i,"f"),"f"),L(A,l,.1*(W(A,a,"f")-c.clientY)+W(A,o,"f"),"f"),W(A,h,"f").call(A,t))},p=function(){L(A,r,!1,"f")};return c.addEventListener("pointerdown",W(A,w,"f")),c.addEventListener("pointermove",f),c.addEventListener("pointerup",p),c.addEventListener("mouseleave",p),c.addEventListener("mouseout",p),function(){c.removeEventListener("pointerdown",W(A,w,"f")),c.removeEventListener("pointermove",f),c.removeEventListener("pointerup",p),c.removeEventListener("mouseleave",p),c.removeEventListener("mouseout",p)}}),g.set(this,function(){var e=document.createElement("span");return e.innerHTML=H,e.style.cssText+=S,e.style.cssText+="\n    left: 50%;\n    margin: -4px 0 0 -8px;\n    top: 0;\n    transform: rotate(-90deg);\n  ",W(A,k,"f").call(A,e,"top"),e}),M.set(this,function(){var e=document.createElement("span");return e.innerHTML=H,e.style.cssText+=S,e.style.cssText+="\n    top: 50%;\n    margin: -10px -4px 0 -4px;\n    left: 1px;\n    transform: rotate(-180deg);\n  ",W(A,k,"f").call(A,e,"left"),e}),E.set(this,function(e){if(null!=W(A,f,"f")){switch(W(A,h,"f").call(A,W(A,f,"f")),e){case"top":L(A,l,W(A,l,"f")-1,"f");break;case"left":L(A,s,W(A,s,"f")-1,"f");break;case"bottom":L(A,l,W(A,l,"f")+1,"f");break;case"right":L(A,s,W(A,s,"f")+1,"f")}L(A,c,requestAnimationFrame(function(){W(A,E,"f").call(A,e)}),"f")}}),y.set(this,function(){var e=document.createElement("span");return e.innerHTML=H,e.style.cssText+=S,e.style.cssText+="\n    left: 50%;\n    margin: -7px 0px -5px -10px;\n    bottom: 0px;\n    transform: rotate(90deg);\n  ",W(A,k,"f").call(A,e,"bottom"),e}),b.set(this,function(){var e=document.createElement("span");return e.innerHTML=H,e.style.cssText+=S,e.style.cssText+="\n    top: 50%;\n    margin: -8px -1px 0 0;\n    right: -2px;\n  ",W(A,k,"f").call(A,e,"right"),e}),k.set(this,function(e,t){e.onmousedown=function(){R.default.operation(R.default.OperationCode.Panorama,{type:t},{sampleRate:.1}),W(A,E,"f").call(A,t)},e.onmouseup=W(A,T,"f"),e.onmouseout=W(A,T,"f")}),T.set(this,function(){cancelAnimationFrame(W(A,c,"f"))}),null==window.THREE?(0,C.loadScript)("//s1.hdslb.com/bfs/live-pkg/live-web-player/three-0.141.0.min.js").then(function(){W(A,t,"f")||W(A,p,"f").push(W(A,m,"f").call(A))}).catch(function(e){C.logger.error(e),_()}):W(this,p,"f").push(W(this,m,"f").call(this))}}();exports.Panorama=z,e=new WeakMap,t=new WeakMap,n=new WeakMap,a=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap,f=new WeakMap,p=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,m=new WeakMap,v=new WeakMap,w=new WeakMap,x=new WeakMap,g=new WeakMap,M=new WeakMap,E=new WeakMap,y=new WeakMap,b=new WeakMap,k=new WeakMap,T=new WeakMap;var _=function(e,t){var n="bili_panorama_roomId_list",a=localStorage.getItem(n);if(!0===(null==a?void 0:a.includes(t)))return null;if(null==a)localStorage.setItem(n,t);else{var i=a.split(",");100===i.length&&(i=i.slice(1)),i.push(t),localStorage.setItem(n,i.join(","))}R.default.operation(R.default.OperationCode.Panorama,{type:"tip"});var o=A();e.appendChild(o);var r=setTimeout(function(){o.remove()},1e4);return function(){o.remove(),clearTimeout(r)}};exports.showPanoramaTip=_;var S="\n  position: absolute;\n  width: 18px;\n  cursor: pointer;\n  transition: fill .3s;\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 0;\n",H='\n<svg viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">\n  <path d="M2.65 11.634a.75.75 0 01-.073-.976l.072-.085L6.185 7.03 2.65 3.483a.75.75 0 01-.071-.977l.072-.084a.75.75 0 01.977-.071l.084.073L7.776 6.5a.75.75 0 01.072.975l-.072.084-4.065 4.074a.75.75 0 01-1.06.001z" fill="#999"></path>\n</svg>\n',A=function(){var e=document.createElement("div");e.style.cssText="\n    position: absolute;\n    z-index: 40;\n    bottom: 40px;\n    right: 194px;\n    cursor: pointer;\n    background-color: #23ADE5;\n    color: white;\n    height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 30px;\n    border-radius: 4px;\n    padding: 0 12px 0 12px;\n    font-size: 14px;\n  ";var t=document.createElement("span");return t.style.cssText+="\n    border: 8px solid transparent;\n    border-top-color: #23ADE5;\n    width: 0;\n    position: absolute;\n    height: 0;\n    bottom: -14px;\n    right: 8px;\n  ",e.innerText="快来体验下沉浸式全景直播吧!",e.appendChild(t),e};
})()