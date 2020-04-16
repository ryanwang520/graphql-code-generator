(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(10),a=(n(0),n(240)),i={id:"near-operation-file",title:"near-operation-file"},p={id:"presets/near-operation-file",title:"near-operation-file",description:"This preset generates a file per each operation file.",source:"@site/docs/presets/near-operation-file.md",permalink:"/docs/presets/near-operation-file",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/near-operation-file.md",sidebar:"sidebar",previous:{title:"All Presets",permalink:"/docs/presets/presets-index"},next:{title:"import-types",permalink:"/docs/presets/import-types"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This preset generates a file per each operation file."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-codegen/near-operation-file-preset\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"In order to use this preset, you need to add 2 outputs to your ",Object(a.b)("inlineCode",{parentName:"p"},"codegen.yml")," file:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The first, is the base types, generated by ",Object(a.b)("inlineCode",{parentName:"li"},"typescript")," plugin."),Object(a.b)("li",{parentName:"ul"},"The second, is the one that in charge of generating types per operation.")),Object(a.b)("p",null,"This following example generates operation typings and ",Object(a.b)("inlineCode",{parentName:"p"},"react-apollo")," component per each operation file, near the original file of the operation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: src/schema.json\ndocuments: 'src/**/*.graphql'\ngenerates:\n  src/types.ts:\n    - typescript\n  src/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .generated.tsx\n      baseTypesPath: types.ts\n    plugins:\n      - typescript-operations\n      - typescript-react-apollo\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"How does it work?")),Object(a.b)("p",null,"The first output is simple, and it only generates the base schema types to ",Object(a.b)("inlineCode",{parentName:"p"},"src/types.ts"),"."),Object(a.b)("p",null,"The second output refers to the base directory of the project (",Object(a.b)("inlineCode",{parentName:"p"},"./src/"),") and it uses the ",Object(a.b)("inlineCode",{parentName:"p"},"near-operation-file")," preset to generate a file per each operation found under ",Object(a.b)("inlineCode",{parentName:"p"},"./src/**/*.graphql"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"presetConfig")," section contains a key for setting the output files extension (in our case, ",Object(a.b)("inlineCode",{parentName:"p"},".generated.tsx")," because of ",Object(a.b)("inlineCode",{parentName:"p"},"react-apollo"),"), and the location of the base schema types file we created in the first section of this file (it will look for it in the base directory)."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"{@import: ../docs/generated-config/near-operation-file.md}"))}s.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return n?o.a.createElement(d,p({ref:t},l,{components:n})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);