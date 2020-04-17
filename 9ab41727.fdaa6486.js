(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{193:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(10),a=(t(0),t(240)),c={},l={id:"plugins/java-installation",title:"java-installation",description:"To use the GraphQL Code Generator with Java, start by adding the [com.moowork.node](https://plugins.gradle.org/plugin/com.moowork.node) Gradle plugin to your `build.gradle`:",source:"@site/docs/plugins/java-installation.md",permalink:"/docs/plugins/java-installation",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-installation.md"},i=[],p={rightToc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To use the GraphQL Code Generator with Java, start by adding the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://plugins.gradle.org/plugin/com.moowork.node"}),"com.moowork.node")," Gradle plugin to your ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'plugins {\n  id "com.moowork.node" version "1.3.1"\n}\n')),Object(a.b)("p",null,"Then, add the following in order to make sure you are running the code-generator on each build:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"build.dependsOn yarn\n")),Object(a.b)("p",null,"Then, create a ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file in your project root, with the following content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "java-app",\n  "scripts": {\n    "postinstall": "graphql-codegen"\n  },\n  "dependencies": {\n    "graphql": "14.5.8",\n    "@graphql-codegen/cli": "1.7.0",\n    "@graphql-codegen/$1": "1.7.0"\n  }\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Make sure to use the latest version of codegen and the plugins.")),Object(a.b)("p",null,"Then, create ",Object(a.b)("inlineCode",{parentName:"p"},"codegen.yml")," file in your root directory, pointing to your schema, and add the plugins you need. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"schema: src/main/resources/schema.graphqls\ngenerates:\n  src/main/java/com/my-name/my-app/generated/$2.java:\n    - $1\n")),Object(a.b)("p",null,"Also, make sure you add the following to your ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn.lock\nnode_modules\n")),Object(a.b)("p",null,"Now, run ",Object(a.b)("inlineCode",{parentName:"p"},"gradle yarn")," to install the dependencies for the first time."),Object(a.b)("p",null,"Next time, the codegen will run automatically each time you run your Gradle build script."))}u.isMDXComponent=!0},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(t),s=r,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||a;return t?o.a.createElement(m,l({ref:n},p,{components:t})):o.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);