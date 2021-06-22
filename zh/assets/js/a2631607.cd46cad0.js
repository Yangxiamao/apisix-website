(self.webpackChunk=self.webpackChunk||[]).push([[47212],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(a,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49188:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return a},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),p={title:"\u63d2\u4ef6\u62e6\u622a\u5668"},c={unversionedId:"plugin-interceptors",id:"version-2.7/plugin-interceptors",isDocsHomePage:!1,title:"\u63d2\u4ef6\u62e6\u622a\u5668",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.7/plugin-interceptors.md",sourceDirName:".",slug:"/plugin-interceptors",permalink:"/zh/docs/apisix/plugin-interceptors",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugin-interceptors.md",version:"2.7",frontMatter:{title:"\u63d2\u4ef6\u62e6\u622a\u5668"},sidebar:"version-2.7/docs",previous:{title:"External Plugin",permalink:"/zh/docs/apisix/external-plugin"},next:{title:"Running APISIX in AWS with AWS CDK",permalink:"/zh/docs/apisix/aws"}},a=[],l={toc:a};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u4e9b\u63d2\u4ef6\u4e3a\u5b9e\u73b0\u5b83\u7684\u529f\u80fd\u4f1a\u6ce8\u518c\u989d\u5916\u7684\u63a5\u53e3\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e9b\u63a5\u53e3\u4e0d\u662f\u901a\u8fc7 admin API \u6dfb\u52a0\u7684\uff0c\u6240\u4ee5\u6ca1\u529e\u6cd5\u50cf\u7ba1\u7406 Route \u90a3\u6837\u7ba1\u7406\u5b83\u4eec\u3002\u4e3a\u4e86\u80fd\u591f\u4fdd\u62a4\u8fd9\u4e9b\u63a5\u53e3\u4e0d\u88ab\u5229\u7528\uff0c\u6211\u4eec\u5f15\u5165\u4e86 interceptors \u7684\u6982\u5ff5\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u901a\u8fc7 interceptors \u6765\u4fdd\u62a4\u7531 prometheus \u63d2\u4ef6\u5f15\u5165\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," \u63a5\u53e3\uff0c\u9650\u5b9a\u53ea\u80fd\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.0.0/24")," \u7f51\u6bb5\u7684\u7528\u6237\u8bbf\u95ee\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/prometheus -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n    "interceptors": [\n        {\n            "name": "ip-restriction",\n            "conf": {\n                "whitelist": ["10.0.0.0/24"]\n            }\n        }\n    ]\n}\'\n')),(0,o.kt)("p",null,"\u6211\u4eec\u80fd\u770b\u5230\u914d\u7f6e interceptors \u5c31\u50cf\u914d\u7f6e plugin \u4e00\u6837\uff1aname \u662f interceptor \u7684\u540d\u79f0\uff0c\u800c conf \u662f\u5b83\u7684\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5f53\u524d\u6211\u4eec\u53ea\u652f\u6301\u4e00\u90e8\u5206\u63d2\u4ef6\u4f5c\u4e3a interceptor \u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u7684 interceptor\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/ip-restriction"},"ip-restriction"))))}u.isMDXComponent=!0}}]);