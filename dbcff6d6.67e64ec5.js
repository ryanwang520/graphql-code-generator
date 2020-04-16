(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(10),i=(n(0),n(240)),o={id:"typescript-urql",title:"TypeScript Urql"},c={id:"plugins/typescript-urql",title:"TypeScript Urql",description:"This plugin generates [`urql`](https://github.com/FormidableLabs/urql) components and HOC with TypeScript typings.",source:"@site/docs/plugins/typescript-urql.md",permalink:"/docs/plugins/typescript-urql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-urql.md",sidebar:"sidebar",previous:{title:"TypeScript Stencil Apollo",permalink:"/docs/plugins/typescript-stencil-apollo"},next:{title:"TypeScript GraphQL-Request",permalink:"/docs/plugins/typescript-graphql-request"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin generates ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/urql"}),Object(i.b)("inlineCode",{parentName:"a"},"urql"))," components and HOC with TypeScript typings."),Object(i.b)("p",null,"{@import: ../docs/plugins/client-note.md}"),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-codegen/typescript-urql\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"For the given input:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query Test {\n  feed {\n    id\n    commentCount\n    repository {\n      full_name\n      html_url\n      owner {\n        avatar_url\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"We can use the generated code like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"  <TestComponent variables={...}>\n    ...\n  </TestComponent>\n")),Object(i.b)("p",null,"Or if you prefer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"  const withTestData = withTestQuery(...);\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"{@import: ../docs/generated-config/base-visitor.md}\n{@import: ../docs/generated-config/client-side-base-visitor.md}\n{@import: ../docs/generated-config/typescript-urql.md}"))}u.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);