(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-e8e73ef6":"f5e80dc6","chunk-59bd336b":"7ee75be9","chunk-fb76c60a":"7da2bd3e","chunk-2a5cd7aa":"e650513c","chunk-2d0ac08b":"3158b3ed","chunk-156d5d2f":"c868e722"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-e8e73ef6":1,"chunk-2a5cd7aa":1,"chunk-156d5d2f":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-e8e73ef6":"b8204109","chunk-59bd336b":"31d6cfe0","chunk-fb76c60a":"31d6cfe0","chunk-2a5cd7aa":"7bcc92e1","chunk-2d0ac08b":"31d6cfe0","chunk-156d5d2f":"ccb6d6ab"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/demo-project-ui/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Project",{attrs:{lists:e.lists},on:{refresh:e.createLists}})],1)},a=[],c=(n("d81d"),n("a434"),n("d3b7"),n("25f0"),n("ddb0"),n("2909")),u={components:{Project:function(){return n.e("chunk-e8e73ef6").then(n.bind(null,"1766"))}},data:function(){return{lists:[]}},methods:{createLists:function(){var e=["rgba(255, 0, 0, 0.1)","rgba(0, 255, 0, 0.1)","rgba(0, 0, 255, 0.1)","rgba(255, 0, 0, 0.1)","rgba(0, 255, 0, 0.1)","rgba(0, 0, 255, 0.1)"],t=Object(c["a"])(Array(e.length).keys()).map((function(t){var n=Math.random().toString(36).substring(7),r="List ".concat(t+1),o=e.splice(0,1),a=Object(c["a"])(Array(Math.round(25*Math.random())+3).keys()).map((function(e){var t=Math.random().toString(36).substring(7),r="Item ".concat(e+1),o=Math.round(5*Math.random())+2;return{id:t,listId:n,label:r,duration:o}}));return{id:n,items:a,label:r,color:o}}));this.lists=t}},mounted:function(){this.createLists()}},i=u,s=n("2877"),d=Object(s["a"])(i,o,a,!1,null,null,null),l=d.exports;n("f9e3");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.d73145fc.js.map