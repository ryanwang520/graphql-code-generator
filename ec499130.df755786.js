(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(10),a=(n(0),n(240)),i={id:"typescript-vue-apollo",title:"TypeScript Vue Apollo"},p={id:"plugins/typescript-vue-apollo",title:"TypeScript Vue Apollo",description:"This plugin generates @vue/apollo-composable composition functions with TypeScript typings. It extends the basic TypeScript template [`@graphql-codegen/typescript`](typescript) and thus shares a similar configuration.",source:"@site/docs/plugins/typescript-vue-apollo.md",permalink:"/docs/plugins/typescript-vue-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-vue-apollo.md",sidebar:"sidebar",previous:{title:"TypeScript React Apollo",permalink:"/docs/plugins/typescript-react-apollo"},next:{title:"TypeScript Apollo Angular",permalink:"/docs/plugins/typescript-apollo-angular"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This plugin generates @vue/apollo-composable composition functions with TypeScript typings. It extends the basic TypeScript template ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"typescript"}),Object(a.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript"))," and thus shares a similar configuration."),Object(a.b)("p",null,"{@import: ../docs/plugins/client-note.md}"),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add @graphql-codegen/typescript-vue-apollo\n$ yarn add @vue/apollo-composable@4.0.0-alpha.4\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"For the given input:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query Test {\n  feed {\n    id\n  }\n}\n")),Object(a.b)("p",null,"We can use the generated code like this in Vue 2 (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vuejs/composition-api"}),"with composition api plugin"),"):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n  <div>\n    {{ result.feed.id }}\n  </div>\n</template>\n\n<script lang="ts">\nimport { createComponent } from "@vue/composition-api";\nimport {\n  useTestQuery,\n} from "../generated/graphqlOperations";\n\nexport default createComponent({\n  setup() {\n    const { result } = useMessagesQuery();\n\n    return { result };\n  }\n});\n<\/script>\n')),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"{@import: ../docs/generated-config/base-visitor.md}\n{@import: ../docs/generated-config/client-side-base-visitor.md}\n{@import: ../docs/generated-config/typescript-vue-apollo.md}"))}s.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,p({ref:t},l,{components:n})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);