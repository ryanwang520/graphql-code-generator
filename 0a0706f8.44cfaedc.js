(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(10),c=(n(0),n(240)),a={},i={id:"generated-config/typescript-stencil-apollo",title:"typescript-stencil-apollo",description:"### componentType (`functional / class`, default value: `functional`)",source:"@site/docs/generated-config/typescript-stencil-apollo.md",permalink:"/docs/generated-config/typescript-stencil-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-stencil-apollo.md"},l=[{value:"componentType (<code>functional / class</code>, default value: <code>functional</code>)",id:"componenttype-functional--class-default-value-functional",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"componenttype-functional--class-default-value-functional"},"componentType (",Object(c.b)("inlineCode",{parentName:"h3"},"functional / class"),", default value: ",Object(c.b)("inlineCode",{parentName:"h3"},"functional"),")"),Object(c.b)("p",null,"Customize the output of the plugin - you can choose to generate a Component class or a function component."),Object(c.b)("h4",{id:"usage-example"},"Usage Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-stencil-apollo\n config:\n   componentType: class\n")))}u.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(a,".").concat(d)]||s[d]||f[d]||c;return n?o.a.createElement(m,i({ref:t},p,{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);