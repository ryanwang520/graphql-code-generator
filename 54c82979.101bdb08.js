(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(10),o=(t(0),t(240)),i={id:"index",title:"What is GraphQL Code Generator?"},l={id:"getting-started/index",title:"What is GraphQL Code Generator?",description:"GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema. When we develop a GraphQL backend, there would be many instances where we would find ourselves writing the same things which are already described by the GraphQL schema, only in a different format; for example: resolver signatures, MongoDB models, Angular services etc.",source:"@site/docs/getting-started/index.md",permalink:"/docs/getting-started/index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/index.md",sidebar:"sidebar",next:{title:"Codegen Options Config",permalink:"/docs/getting-started/codegen-config"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Initialization Wizard",id:"initialization-wizard",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[{value:"Using in Runtime",id:"using-in-runtime",children:[]}]}],p={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema. When we develop a GraphQL backend, there would be many instances where we would find ourselves writing the same things which are already described by the GraphQL schema, only in a different format; for example: resolver signatures, MongoDB models, Angular services etc."),Object(o.b)("p",null,"GraphQL Code Generator was built to address exactly that. By analyzing the schema and parsing it, GraphQL Code Generator can output code at a wide variety of formats, based on pre-defined plugins or based on custom user-defined ones. Regardless of the language that you're using, GraphQL Code Generator got you covered."),Object(o.b)("p",null,"For example, given the following schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  posts(findTitle: String): [Post]\n}\n\ntype Post {\n  id: Int!\n  title: String!\n  author: Author!\n}\n\ntype Query {\n  posts: [Post]\n}\n\nschema {\n  query: Query\n}\n")),Object(o.b)("p",null,"GraphQL Code Generator can generate the following TypeScript typings:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export type Maybe<T> = T | null;\n\n/** All built-in and custom scalars, mapped to their actual values */\nexport type Scalars = {\n  ID: string,\n  String: string,\n  Boolean: boolean,\n  Int: number,\n  Float: number,\n};\n\nexport type Author = {\n  __typename?: 'Author',\n  id: Scalars['Int'],\n  firstName: Scalars['String'],\n  lastName: Scalars['String'],\n  posts?: Maybe<Array<Maybe<Post>>>,\n};\n\nexport type AuthorPostsArgs = {\n  findTitle?: Maybe<Scalars['String']>\n};\n\nexport type Post = {\n  __typename?: 'Post',\n  id: Scalars['Int'],\n  title: Scalars['String'],\n  author: Author,\n};\n\nexport type Query = {\n  __typename?: 'Query',\n  posts?: Maybe<Array<Maybe<Post>>>,\n};\n")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"First we gotta make sure that the basic GraphQL package is within our dependencies, since GraphQL Code Generator is dependent on it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add graphql\n")),Object(o.b)("p",null,"The we can install GraphQL Code Generator using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/cli\n")),Object(o.b)("h2",{id:"initialization-wizard"},"Initialization Wizard"),Object(o.b)("p",null,"GraphQL Code Generator lets you setup everything by simply running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ graphql-codegen init\n")),Object(o.b)("p",null,"Question by question, it will guide you through the whole process of setting up a schema, selecting and installing plugins, picking a destination of a generated file and a lot more."),Object(o.b)("p",null,"If you don't want to use the wizard, we've got you covered, just continue reading the next sections."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"GraphQL Code Generator's behavior is bound into plugins, thus we will need to install one of them:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript\n")),Object(o.b)("p",null,"Although can be used directly, it's recommended to add the code generation task as an ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," script in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". This way we won't have to install GraphQL Code Generator globally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "generate": "graphql-codegen"\n  }\n}\n')),Object(o.b)("p",null,"GraphQL Code Generator looks for ",Object(o.b)("inlineCode",{parentName:"p"},"codegen.yml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"codegen.json")," files by default, one might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.d.ts:\n    plugins:\n      - typescript\n")),Object(o.b)("p",null,"By running the following command the GraphQL schema will be fetched from the route endpoint and the typescript definitions would be generated in the specified destination:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm run generate\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"There are different methods to use GraphQL Code Generator besides the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../cli/index"}),"CLI"),". Here are other possible methods to do so which you might find useful:"),Object(o.b)("h3",{id:"using-in-runtime"},"Using in Runtime"),Object(o.b)("p",null,"We can ",Object(o.b)("inlineCode",{parentName:"p"},"require()")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"import"),") ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," directly with Node.JS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { generate } from '@graphql-codegen/cli';\n\nasync function doSomething() {\n  const generatedFiles = await generate(\n    {\n      schema: 'http://127.0.0.1:3000/graphql',\n      documents: './src/**/*.graphql',\n      generates: {\n        [process.cwd() + '/models/types.d.ts']: {\n          plugins: ['typescript'],\n        },\n      },\n    },\n    true\n  );\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"generate")," function accepts two parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"saveToFile: boolean"))),Object(o.b)("p",null,"The return value should be of type ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<FileOutput[]>"),"."))}s.isMDXComponent=!0},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(h,l({ref:n},p,{components:t})):a.a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);