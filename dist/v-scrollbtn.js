!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("v-scrollbtn",[],e):"object"==typeof exports?exports["v-scrollbtn"]=e():t["v-scrollbtn"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"v-scrollbtn",props:{text:{type:String,default:"默认文字"},itemWidth:{type:Number,default:60},itemHeight:{type:Number,default:60},gapWidth:{type:Number,default:10},coefficientHeight:{type:Number,default:.8}},created:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,this.left=this.clientWidth-this.itemWidth-this.gapWidth,this.top=this.clientHeight*this.coefficientHeight},mounted:function(){var t=this;window.addEventListener("scroll",this.handleScrollStart),this.$nextTick(function(){var e=t.$refs.div;e.addEventListener("touchstart",function(){document.body.style.overflow="hidden",e.style.transition="none"}),e.addEventListener("touchmove",function(e){if(document.body.style.overflow="hidden",1===e.targetTouches.length){var n=event.targetTouches[0];t.left=n.clientX-t.itemWidth/2,t.top=n.clientY-t.itemHeight/2}}),e.addEventListener("touchend",function(){document.body.style.overflow="auto",e.style.transition="all 0.3s",t.left>t.clientWidth/2?t.left=t.clientWidth-t.itemWidth-t.gapWidth:t.left=t.gapWidth})})},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScrollStart)},methods:{onBtnClicked:function(){this.$emit("onScrollClicked")},handleScrollStart:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.handleScrollEnd()},300),this.currentTop=document.documentElement.scrollTop||document.body.scrollTop,this.left>this.clientWidth/2?this.left=this.clientWidth-this.itemWidth/2:this.left=-this.itemWidth/2},handleScrollEnd:function(){(document.documentElement.scrollTop||document.body.scrollTop)===this.currentTop&&(this.left>this.clientWidth/2?this.left=this.clientWidth-this.itemWidth-this.gapWidth:this.left=this.gapWidth,clearTimeout(this.timer))}},data:function(){return{timer:null,currentTop:0,clientWidth:0,clientHeight:0,left:0,top:0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);i.a.install=function(t){t.component("VScrollbtn",i.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(i.a),e.default=i.a},function(t,e,n){"use strict";function i(t){n(3)}var o=n(0),r=n(9),s=n(8),c=i,a=s(o.a,r.a,!1,c,"data-v-1e4d41dc",null);e.a=a.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("3c8c0acd",i,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".ys-float-btn[data-v-1e4d41dc]{background:#fff;box-shadow:0 2px 10px 0 rgba(0,0,0,.1);border-radius:50%;color:#666;z-index:20;transition:all .3s;display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;bottom:20vw}.ys-float-btn img[data-v-1e4d41dc]{width:50%;height:50%;object-fit:contain;margin-bottom:3px}.ys-float-btn p[data-v-1e4d41dc]{font-size:7px}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=l[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,n,i=document.querySelector("style["+g+'~="'+t.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(y){var r=h++;i=f||(f=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=c.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function c(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),v.ssrId&&t.setAttribute(g,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),l={},u=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){p=n,v=o||{};var r=d(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],c=l[s.id];c.refs--,n.push(c)}e?(r=d(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var c=n[o];if(0===c.refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete l[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],c=r[1],a=r[2],d=r[3],l={id:t+":"+o,css:c,media:a,sourceMap:d};i[s]?i[s].parts.push(l):n.push(i[s]={id:s,parts:[l]})}return n}},function(t,e){t.exports=function(t,e,n,i,o,r){var s,c=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,c=t.default);var d="function"==typeof c?c.options:c;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o);var l;if(r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):i&&(l=i),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:c,options:d}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"div",staticClass:"ys-float-btn",style:{width:t.itemWidth+"px",height:t.itemHeight+"px",left:t.left+"px",top:t.top+"px"},on:{click:t.onBtnClicked}},[t._t("icon"),t._v(" "),n("p",[t._v(t._s(t.text))])],2)},o=[],r={render:i,staticRenderFns:o};e.a=r}])});
//# sourceMappingURL=v-scrollbtn.js.map