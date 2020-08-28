(function(e){function t(t){for(var r,a,l=t[0],u=t[1],c=t[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push(["e35a","chunk-vendors"]),n()})({5111:function(e,t,n){"use strict";var r=n("a2e4"),o=n.n(r);o.a},a2e4:function(e,t,n){},a7e2:function(e,t,n){"use strict";var r=n("b021"),o=n.n(r);o.a},b021:function(e,t,n){},e35a:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("9e7f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("strong",[e._v("sd-throttle")]),n("a",{attrs:{target:"_blank",title:"查看GitHub",href:"https://github.com/shuidi-fed/vue-directive-throttle"}},[n("svg",{staticClass:"octicon octicon-mark-github v-align-middle",attrs:{height:"22",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])])]),n("HelloWorld")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Example")]),n("div",[n("div",[e._v("点击按钮，1秒内只触发一次")]),n("button",{directives:[{name:"throttle",rawName:"v-throttle:[b]",value:e.isThrottle,expression:"isThrottle",arg:e.b}],on:{click:e.clickFn}},[e._v("click点击 "+e._s(e.num))])])])},l=[],u={name:"HelloWorld",data:function(){return{b:1,isThrottle:!0,num:0}},methods:{clickFn:function(){this.num++}}},c=u,s=(n("5111"),n("2877")),f=Object(s["a"])(c,a,l,!1,null,"4c156ea4",null),d=f.exports,p={name:"App",components:{HelloWorld:d}},v=p,h=(n("a7e2"),Object(s["a"])(v,o,i,!1,null,null,null)),b=h.exports,g=(n("c975"),n("a9e3"),n("9129"),n("d3b7"),n("25f0"),function(e){var t=Object.prototype.toString.call(e),n=t.indexOf(" ");return t.substring(n+1,t.length-1)}),m={inserted:function(e,t){var n=null,r=!0,o=+t.arg;if(Number.isNaN(o))console.error('error in [v-throttle:arg], invalid for "arg", Expected Numeric, got '.concat(g(t.arg),"."));else if(o<0)console.error('error in [v-throttle:arg], invalid for "arg", Expected Nonnegative number');else{if(void 0!==t.value){if("boolean"!==typeof t.value)return void console.error('error in [v-throttle="value"], invalid for "value", Expected Boolean, got '.concat(g(t.value),"."));r=t.value}e.parentElement&&e.parentElement.addEventListener("click",(function(e){!n&&r?n=setTimeout((function(){clearTimeout(n),n=null}),1e3*o||500):e.stopPropagation()}),!0)}}},w=function(e){e.directive("throttle",m)};"undefined"!==typeof window&&window.Vue&&(window.throttle=m,Vue.use(w)),m.install=w;var y=m;r["a"].use(y),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.4e240aa1.js.map