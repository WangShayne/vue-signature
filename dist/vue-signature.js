!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var i=n(9),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"vueSignature",props:{sigOption:{type:Object,default:function(){return{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"}}},w:{type:String,default:"100%"},h:{type:String,default:"100%"},clearOnResize:{type:Boolean,default:!1},waterMark:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1},defaultUrl:{type:String,default:""}},data:function(){return{sig:function(){},option:{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"},uid:""}},watch:{disabled:function(t){var e=this;e.sig.off&&(t?e.sig.off():e.sig.on())}},created:function(){var t=this;this.uid="canvas"+t._uid;var e=Object.keys(t.sigOption),n=!0,i=!1,o=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value;t.option[s]=t.sigOption[s]}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}},methods:{draw:function(){function t(t){var n;e.isEmpty()||(n=e.save());var i=Math.max(window.devicePixelRatio||1,1);t.width=e.w.replace(/px|%/g,"")*i,t.height=e.h.replace(/px|%/g,"")*i,t.getContext("2d").scale(i,i),e.clear(),!e.clearOnResize&&void 0!==n&&e.fromDataURL(n),Object.keys(e.waterMark).length&&e.addWaterMark(e.waterMark)}var e=this,n=document.getElementById(e.uid);e.sig=new i.a(n,e.option),window.addEventListener("resize",t(n)),t(n),""!==e.defaultUrl&&e.fromDataURL(e.defaultUrl),e.disabled?e.sig.off():e.sig.on()},clear:function(){this.sig.clear()},save:function(t){var e=this;return t?e.sig.toDataURL(t):e.sig.toDataURL()},fromDataURL:function(t){this.sig.fromDataURL(t)},isEmpty:function(){return this.sig.isEmpty()},undo:function(){var t=this,e=t.sig.toData();e&&(e.pop(),t.sig.fromData(e))},addWaterMark:function(t){var e=this;if("[object Object]"!=Object.prototype.toString.call(t))throw new Error("Expected Object, got "+(void 0===t?"undefined":o(t))+".");var n=document.getElementById(e.uid),i={text:t.text||"",x:t.x||20,y:t.y||20,sx:t.sx||40,sy:t.sy||40},r=n.getContext("2d");r.font=t.font||"20px sans-serif",r.fillStyle=t.fillStyle||"#333",r.strokeStyle=t.strokeStyle||"#333","all"==t.style?(r.fillText(i.text,i.x,i.y),r.strokeText(i.text,i.sx,i.sx)):"stroke"==t.style?r.strokeText(i.text,i.sx,i.sx):r.fillText(i.text,i.x,i.y),e.sig._isEmpty=!1}},mounted:function(){var t=this;this.$nextTick().then(function(){t.draw()})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default=i.a},function(t,e,n){"use strict";function i(t){n(3)}var o=n(0),r=n(10),a=n(8),s=i,u=a(o.a,r.a,!1,s,null,null);e.a=u.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("fbce6166",i,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"canvas{width:100%;height:100%}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=c[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(r(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function r(t){var e,n,i=document.querySelector("style["+m+'~="'+t.id+'"]');if(i){if(f)return p;i.parentNode.removeChild(i)}if(g){var r=v++;i=d||(d=o()),e=a.bind(null,i,r,!1),n=a.bind(null,i,r,!0)}else i=o(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function s(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),y.ssrId&&t.setAttribute(m,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var h=n(7),c={},l=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,v=0,f=!1,p=function(){},y=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){f=n,y=o||{};var r=h(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=c[a.id];s.refs--,n.push(s)}e?(r=h(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s=r[1],u=r[2],h=r[3],c={id:t+":"+o,css:s,media:u,sourceMap:h};i[a]?i[a].parts.push(c):n.push(i[a]={id:a,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,i,o,r){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var h="function"==typeof s?s.options:s;e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0),n&&(h.functional=!0),o&&(h._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},h._ssrRegister=c):i&&(c=i),c){var l=h.functional,d=l?h.render:h.beforeCreate;l?(h._injectStyles=c,h.render=function(t,e){return c.call(e),d(t,e)}):h.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:h}}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=0,i=null,o=void 0,r=void 0,a=void 0,s=function(){n=Date.now(),i=null,o=t.apply(r,a),i||(r=null,a=[])};return function(){var u=Date.now(),h=e-(u-n);r=this;for(var c=arguments.length,l=Array(c),d=0;d<c;d++)l[d]=arguments[d];return a=l,h<=0||h>e?(i&&(clearTimeout(i),i=null),n=u,o=t.apply(r,a),i||(r=null,a=[])):i||(i=window.setTimeout(s,h)),o}}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e,n,o){i(this,t),this.x=e,this.y=n,this.time=o||Date.now()}return r(t,[{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}},{key:"velocityFrom",value:function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}]),t}(),s=function(){function t(e,n,o,r,a,s){i(this,t),this.startPoint=e,this.control2=n,this.control1=o,this.endPoint=r,this.startWidth=a,this.endWidth=s}return r(t,[{key:"length",value:function(){for(var t=0,e=void 0,n=void 0,i=0;i<=10;i+=1){var o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=r-e,u=a-n;t+=Math.sqrt(s*s+u*u)}e=r,n=a}return t}},{key:"point",value:function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t}}],[{key:"fromPoints",value:function(e,n){var i=this.calculateControlPoints(e[0],e[1],e[2]).c2,o=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new t(e[1],i,o,e[2],n.start,n.end)}},{key:"calculateControlPoints",value:function(t,e,n){var i=t.x-e.x,o=t.y-e.y,r=e.x-n.x,s=e.y-n.y,u={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h={x:(e.x+n.x)/2,y:(e.y+n.y)/2},c=Math.sqrt(i*i+o*o),l=Math.sqrt(r*r+s*s),d=u.x-h.x,v=u.y-h.y,f=l/(c+l),p={x:h.x+d*f,y:h.y+v*f},y=e.x-p.x,m=e.y-p.y;return{c1:new a(u.x+y,u.y+m),c2:new a(h.x+y,h.y+m)}}}]),t}(),u=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.canvas=e,this.options=r,this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(t.preventDefault(),1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){if(t.target===n.canvas){t.preventDefault();var e=t.changedTouches[0];n._strokeEnd(e)}},this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._strokeMoveUpdate=this.throttle?o(t.prototype._strokeUpdate,this.throttle):t.prototype._strokeUpdate,this._ctx=e.getContext("2d"),this.clear(),this.on()}return r(t,[{key:"clear",value:function(){var t=this._ctx,e=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}},{key:"fromDataURL",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2],o=new Image,r=n.ratio||window.devicePixelRatio||1,a=n.width||this.canvas.width/r,s=n.height||this.canvas.height/r;this._reset(),o.onload=function(){e._ctx.drawImage(o,0,0,a,s),i&&i()},o.onerror=function(t){i&&i(t)},o.src=t,this._isEmpty=!1}},{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/png",e=arguments[1];switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}},{key:"on",value:function(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}},{key:"off",value:function(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}},{key:"isEmpty",value:function(){return this._isEmpty}},{key:"fromData",value:function(t){var e=this;this.clear(),this._fromData(t,function(t){var n=t.color,i=t.curve;return e._drawCurve({color:n,curve:i})},function(t){var n=t.color,i=t.point;return e._drawDot({color:n,point:i})}),this._data=t}},{key:"toData",value:function(){return this._data}},{key:"_strokeBegin",value:function(t){var e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}},{key:"_strokeUpdate",value:function(t){if(0===this._data.length)return void this._strokeBegin(t);var e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],r=o.points,a=r.length>0&&r[r.length-1],s=!!a&&i.distanceTo(a)<=this.minDistance,u=o.color;if(!a||!a||!s){var h=this._addPoint(i);a?h&&this._drawCurve({color:u,curve:h}):this._drawDot({color:u,point:i}),r.push({time:i.time,x:i.x,y:i.y})}}},{key:"_strokeEnd",value:function(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}},{key:"_handlePointerEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}},{key:"_handleMouseEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}},{key:"_handleTouchEvents",value:function(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}},{key:"_reset",value:function(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}},{key:"_createPoint",value:function(t,e){var n=this.canvas.getBoundingClientRect();return new a(t-n.left,e-n.top,(new Date).getTime())}},{key:"_addPoint",value:function(t){var e=this._lastPoints;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveWidths(e[1],e[2]),i=s.fromPoints(e,n);return e.shift(),i}return null}},{key:"_calculateCurveWidths",value:function(t,e){var n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n),o={end:i,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=i,o}},{key:"_strokeWidth",value:function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}},{key:"_drawCurveSegment",value:function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}},{key:"_drawCurve",value:function(t){var e=t.color,n=t.curve,i=this._ctx,o=n.endWidth-n.startWidth,r=2*Math.floor(n.length());i.beginPath(),i.fillStyle=e;for(var a=0;a<r;a+=1){var s=a/r,u=s*s,h=u*s,c=1-s,l=c*c,d=l*c,v=d*n.startPoint.x;v+=3*l*s*n.control1.x,v+=3*c*u*n.control2.x,v+=h*n.endPoint.x;var f=d*n.startPoint.y;f+=3*l*s*n.control1.y,f+=3*c*u*n.control2.y,f+=h*n.endPoint.y;var p=Math.min(n.startWidth+h*o,this.maxWidth);this._drawCurveSegment(v,f,p)}i.closePath(),i.fill()}},{key:"_drawDot",value:function(t){var e=t.color,n=t.point,i=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(n.x,n.y,o),i.closePath(),i.fillStyle=e,i.fill()}},{key:"_fromData",value:function(t,e,n){var i=!0,o=!1,r=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var h=s.value,c=h.color,l=h.points;if(l.length>1)for(var d=0;d<l.length;d+=1){var v=l[d],f=new a(v.x,v.y,v.time);this.penColor=c,0===d&&this._reset();var p=this._addPoint(f);p&&e({color:c,curve:p})}else this._reset(),n({color:c,point:l[0]})}}catch(t){o=!0,r=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw r}}}},{key:"_toSVG",value:function(){var t=this,e=this._data,n=Math.max(window.devicePixelRatio||1,1),i=this.canvas.width/n,o=this.canvas.height/n,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",this.canvas.width.toString()),r.setAttribute("height",this.canvas.height.toString()),this._fromData(e,function(t){var e=t.color,n=t.curve,i=document.createElement("path");if(!(isNaN(n.control1.x)||isNaN(n.control1.y)||isNaN(n.control2.x)||isNaN(n.control2.y))){var o="M "+n.startPoint.x.toFixed(3)+","+n.startPoint.y.toFixed(3)+" C "+n.control1.x.toFixed(3)+","+n.control1.y.toFixed(3)+" "+n.control2.x.toFixed(3)+","+n.control2.y.toFixed(3)+" "+n.endPoint.x.toFixed(3)+","+n.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*n.endWidth).toFixed(3)),i.setAttribute("stroke",e),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),r.appendChild(i)}},function(e){var n=e.color,i=e.point,o=document.createElement("circle"),a="function"==typeof t.dotSize?t.dotSize():t.dotSize;o.setAttribute("r",a.toString()),o.setAttribute("cx",i.x.toString()),o.setAttribute("cy",i.y.toString()),o.setAttribute("fill",n),r.appendChild(o)});var a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+i+" "+o+'" width="'+i+'" height="'+o+'">',s=r.innerHTML;if(void 0===s){var u=document.createElement("dummy"),h=r.childNodes;u.innerHTML="";for(var c=0;c<h.length;c+=1)u.appendChild(h[c].cloneNode(!0));s=u.innerHTML}var l=a+s+"</svg>";return"data:image/svg+xml;base64,"+btoa(l)}}]),t}();e.a=u},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:t.w,height:t.h},on:{touchmove:function(t){t.preventDefault()}}},[n("canvas",{staticClass:"canvas",attrs:{id:t.uid,"data-uid":t.uid,disabled:t.disabled}})])},o=[],r={render:i,staticRenderFns:o};e.a=r}]);