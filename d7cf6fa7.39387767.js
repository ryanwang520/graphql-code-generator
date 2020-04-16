(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{224:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return i})),o.d(t,"default",(function(){return u}));var n=o(1),r=o(10),a=(o(0),o(240)),l={},c={id:"generated-config/typescript-vue-apollo",title:"typescript-vue-apollo",description:"### withCompositionFunctions (`boolean`, default value: `true`)",source:"@site/docs/generated-config/typescript-vue-apollo.md",permalink:"/docs/generated-config/typescript-vue-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-vue-apollo.md"},i=[{value:"withCompositionFunctions (<code>boolean</code>, default value: <code>true</code>)",id:"withcompositionfunctions-boolean-default-value-true",children:[]},{value:"vueApolloComposableImportFrom (<code>string</code>, default value: <code>vue/apollo-composable</code>)",id:"vueapollocomposableimportfrom-string-default-value-vueapollo-composable",children:[]},{value:"addDocBlocks (<code>boolean</code>, default value: <code>true</code>)",id:"adddocblocks-boolean-default-value-true",children:[]}],p={rightToc:i};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"withcompositionfunctions-boolean-default-value-true"},"withCompositionFunctions (",Object(a.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(a.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(a.b)("p",null,"Customized the output by enabling/disabling the generated Vue composition functions."),Object(a.b)("h4",{id:"usage-example"},"Usage Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-vue-apollo\n config:\n   withCompositionFunctions: true\n")),Object(a.b)("h3",{id:"vueapollocomposableimportfrom-string-default-value-vueapollo-composable"},"vueApolloComposableImportFrom (",Object(a.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(a.b)("inlineCode",{parentName:"h3"},"vue/apollo-composable"),")"),Object(a.b)("h3",{id:"adddocblocks-boolean-default-value-true"},"addDocBlocks (",Object(a.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(a.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(a.b)("p",null,"Allows you to enable/disable the generation of docblocks in generated code. Some IDE's (like VSCode) add extra inline information with docblocks, you can disable this feature if your prefered IDE does not."),Object(a.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-vue-apollo\n config:\n   addDocBlocks: true\n")))}u.isMDXComponent=!0},240:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(o),b=n,f=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return o?r.a.createElement(f,c({ref:t},p,{components:o})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=o[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);