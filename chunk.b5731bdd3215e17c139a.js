webpackJsonp([2],{"1Cs9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("XyMi");var o=function(e){n("fIUU")},a=Object(r.a)(null,function(){var e=this.$createElement,t=this._self._c||e;return t("m-layout-grid-inner",[t("m-layout-grid-cell",{attrs:{span:12}},[t("m-typo-display",{attrs:{level:1}},[this._v("Card")]),t("m-typo-body",{attrs:{level:2}},[t("a",{attrs:{href:"https://github.com/matsp/material-components-vue/blob/master/components/Card"}},[this._v("\n        https://github.com/matsp/material-components-vue/blob/master/components/Card\n      ")])])],1),t("m-layout-grid-cell",[t("m-card",[t("m-typo-headline",{staticClass:"demo"},[this._v("\n        Title\n      ")]),t("m-typo-body",{staticClass:"demo",attrs:{level:1}},[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      ")]),t("m-button",{attrs:{slot:"actionButtons",interactive:"",href:"https://github.com/matsp/material-components-vue/blob/master/components/Card"},slot:"actionButtons"},[this._v("\n        github\n      ")])],1)],1)],1)},[],!1,o,null,null);t.default=a.exports},"FZ+f":function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},fIUU:function(e,t,n){var r=n("jzF/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("rjj0").default)("67677374",r,!0,{})},"jzF/":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".demo{padding:8px 16px}",""])},rjj0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}t.default=function(e,t,n,o){l=n,d=o||{};var i=r(e,t);return m(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,n.push(u)}for(t?m(i=r(e,t)):i=[],o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete a[u.id]}}}};var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(v(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(f){var o=u++;r=s||(s=h()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(p,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}}});