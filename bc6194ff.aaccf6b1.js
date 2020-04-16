(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{203:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(10),o=(r(0),r(240)),i={id:"java-resolvers",title:"Java Resolvers"},l={id:"plugins/java-resolvers",title:"Java Resolvers",description:"The `java-resolvers` plugin creates Java `interface`s for the resolvers signature.",source:"@site/docs/plugins/java-resolvers.md",permalink:"/docs/plugins/java-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-resolvers.md",sidebar:"sidebar",previous:{title:"Java",permalink:"/docs/plugins/java"},next:{title:"Java Apollo Android",permalink:"/docs/plugins/java-apollo-android"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"java-resolvers")," plugin creates Java ",Object(o.b)("inlineCode",{parentName:"p"},"interface"),"s for the resolvers signature."),Object(o.b)("p",null,"It works with ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," library and it uses it's ",Object(o.b)("inlineCode",{parentName:"p"},"DataFetcher")," API."),Object(o.b)("p",null,"You can use this plugin to generate interfaces and later implement them, this way you can always tell if one of the fields is missing a resolvers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import com.my.app.generated.Resolvers;\nimport com.my.app.models.User;\nimport graphql.schema.DataFetcher;\n\nexport class QueryResolvers implements Resolvers.Query {\n  public DataFetcher<String> id() {\n        return environment -> environment.<User>getSource().getId();\n    }\n}\n")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"{@import: ../docs/plugins/java-installation.md|java-resolvers|Resolvers}"),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"{@import: ../docs/generated-config/java-resolvers.md}\n{@import: ../docs/generated-config/base-visitor.md}"))}p.isMDXComponent=!0},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(b,l({ref:t},c,{components:r})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);