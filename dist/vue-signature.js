!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-signature",[],e):"object"==typeof exports?exports["vue-signature"]=e():t["vue-signature"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";var i=n(9);e.a={name:"vueSignature",props:{sigOption:{type:Object,default:function(){}},w:{type:String,default:"100%"},h:{type:String,default:"100%"}},data:function(){return{sig:function(){},uid:""}},created:function(){var t=this;this.uid="canvas"+t._uid},methods:{draw:function(){function t(){var t=Math.max(window.devicePixelRatio||1,1);n.width=n.offsetWidth*t,n.height=n.offsetHeight*t,n.getContext("2d").scale(t,t)}var e=this,n=document.getElementById(e.uid);e.sig=new i.a(n,e.sigOption),window.addEventListener("resize",t),t()},clear:function(){this.sig.clear()},save:function(t){var e=this;return t?e.sig.toDataURL(t):e.sig.toDataURL()},isEmpty:function(){return this.sig.isEmpty()}},mounted:function(){this.draw()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);const o={install:function(t,e){t.component(i.a.name,i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";function i(t){n(3)}var o=n(0),r=n(10),s=n(8),a=i,h=s(o.a,r.a,!1,a,null,null);e.a=h.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("8191c076",i,!0)},function(t,e,n){e=t.exports=n(5)(void 0),e.push([t.i,"canvas{width:100%;height:100%}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=c[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(_){var r=f++;i=l||(l=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),c={},d=h&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,p=!1,v=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var o=u(t,e);return i(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r],a=c[s.id];a.refs--,n.push(a)}e?(o=u(t,e),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete c[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],h=r[2],u=r[3],c={id:t+":"+o,css:a,media:h,sourceMap:u};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,i,o,r){var s,a=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):i&&(c=i),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:s,exports:a,options:u}}},function(t,e,n){"use strict";/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */
function i(t,e,n){this.x=t,this.y=e,this.time=n||(new Date).getTime()}function o(t,e,n,i){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=i}function r(t,e,n){var i,o,r,s=null,a=0;n||(n={});var h=function(){a=!1===n.leading?0:Date.now(),s=null,r=t.apply(i,o),s||(i=o=null)};return function(){var u=Date.now();a||!1!==n.leading||(a=u);var c=e-(u-a);return i=this,o=arguments,c<=0||c>e?(s&&(clearTimeout(s),s=null),a=u,r=t.apply(i,o),s||(i=o=null)):s||!1===n.trailing||(s=setTimeout(h,c)),r}}function s(t,e){var n=this,i=e||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.throttle?this._strokeMoveUpdate=r(s.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=s.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===n._canvas&&(t.preventDefault(),n._strokeEnd(t))},this.on()}i.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},i.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},i.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},o.prototype.length=function(){for(var t=0,e=void 0,n=void 0,i=0;i<=10;i+=1){var o=i/10,r=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),s=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var a=r-e,h=s-n;t+=Math.sqrt(a*a+h*h)}e=r,n=s}return t},o.prototype._point=function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},s.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},s.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,o=n.ratio||window.devicePixelRatio||1,r=n.width||this._canvas.width/o,s=n.height||this._canvas.height/o;this._reset(),i.src=t,i.onload=function(){e._ctx.drawImage(i,0,0,r,s)},this._isEmpty=!1},s.prototype.toDataURL=function(t){var e;switch(t){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return(e=this._canvas).toDataURL.apply(e,[t].concat(i))}},s.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},s.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},s.prototype.isEmpty=function(){return this._isEmpty},s.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)},s.prototype._strokeUpdate=function(t){var e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],r=o&&o[o.length-1],s=r&&i.distanceTo(r)<this.minDistance;if(!r||!s){var a=this._addPoint(i),h=a.curve,u=a.widths;h&&u&&this._drawCurve(h,u.start,u.end),this._data[this._data.length-1].push({x:i.x,y:i.y,time:i.time,color:this.penColor})}},s.prototype._strokeEnd=function(t){var e=this.points.length>2,n=this.points[0];if(!e&&n&&this._drawDot(n),n){var i=this._data[this._data.length-1],o=i[i.length-1];n.equals(o)||i.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"==typeof this.onEnd&&this.onEnd(t)},s.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},s.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},s.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},s.prototype._createPoint=function(t,e,n){var o=this._canvas.getBoundingClientRect();return new i(t-o.left,e-o.top,n||(new Date).getTime())},s.prototype._addPoint=function(t){var e=this.points,n=void 0;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]),n=this._calculateCurveControlPoints(e[0],e[1],e[2]);var i=n.c2;n=this._calculateCurveControlPoints(e[1],e[2],e[3]);var r=n.c1,s=new o(e[1],i,r,e[2]),a=this._calculateCurveWidths(s);return e.shift(),{curve:s,widths:a}}return{}},s.prototype._calculateCurveControlPoints=function(t,e,n){var o=t.x-e.x,r=t.y-e.y,s=e.x-n.x,a=e.y-n.y,h={x:(t.x+e.x)/2,y:(t.y+e.y)/2},u={x:(e.x+n.x)/2,y:(e.y+n.y)/2},c=Math.sqrt(o*o+r*r),d=Math.sqrt(s*s+a*a),l=h.x-u.x,f=h.y-u.y,p=d/(c+d),v={x:u.x+l*p,y:u.y+f*p},_=e.x-v.x,y=e.y-v.y;return{c1:new i(h.x+_,h.y+y),c2:new i(u.x+_,u.y+y)}},s.prototype._calculateCurveWidths=function(t){var e=t.startPoint,n=t.endPoint,i={start:null,end:null},o=this.velocityFilterWeight*n.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(o);return i.start=this._lastWidth,i.end=r,this._lastVelocity=o,this._lastWidth=r,i},s.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},s.prototype._drawPoint=function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},s.prototype._drawCurve=function(t,e,n){var i=this._ctx,o=n-e,r=Math.floor(t.length());i.beginPath();for(var s=0;s<r;s+=1){var a=s/r,h=a*a,u=h*a,c=1-a,d=c*c,l=d*c,f=l*t.startPoint.x;f+=3*d*a*t.control1.x,f+=3*c*h*t.control2.x,f+=u*t.endPoint.x;var p=l*t.startPoint.y;p+=3*d*a*t.control1.y,p+=3*c*h*t.control2.y,p+=u*t.endPoint.y;var v=e+u*o;this._drawPoint(f,p,v)}i.closePath(),i.fill()},s.prototype._drawDot=function(t){var e=this._ctx,n="function"==typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},s.prototype._fromData=function(t,e,n){for(var o=0;o<t.length;o+=1){var r=t[o];if(r.length>1)for(var s=0;s<r.length;s+=1){var a=r[s],h=new i(a.x,a.y,a.time),u=a.color;if(0===s)this.penColor=u,this._reset(),this._addPoint(h);else if(s!==r.length-1){var c=this._addPoint(h),d=c.curve,l=c.widths;d&&l&&e(d,l,u)}}else{this._reset();n(r[0])}}},s.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,i=Math.max(window.devicePixelRatio||1,1),o=n.width/i,r=n.height/i,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS(null,"width",n.width),s.setAttributeNS(null,"height",n.height),this._fromData(e,function(t,e,n){var i=document.createElement("path");if(!(isNaN(t.control1.x)||isNaN(t.control1.y)||isNaN(t.control2.x)||isNaN(t.control2.y))){var o="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),i.setAttribute("stroke",n),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),s.appendChild(i)}},function(e){var n=document.createElement("circle"),i="function"==typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",i),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),s.appendChild(n)});var a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+o+" "+r+'" width="'+o+'" height="'+r+'">',h=s.innerHTML;if(void 0===h){var u=document.createElement("dummy"),c=s.childNodes;u.innerHTML="";for(var d=0;d<c.length;d+=1)u.appendChild(c[d].cloneNode(!0));h=u.innerHTML}var l=a+h+"</svg>";return"data:image/svg+xml;base64,"+btoa(l)},s.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,function(t,n){return e._drawCurve(t,n.start,n.end)},function(t){return e._drawDot(t)}),this._data=t},s.prototype.toData=function(){return this._data},e.a=s},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:t.w,height:t.h}},[n("canvas",{staticClass:"canvas",attrs:{id:t.uid,"data-uid":t.uid}})])},o=[],r={render:i,staticRenderFns:o};e.a=r}])});
//# sourceMappingURL=vue-signature.js.map