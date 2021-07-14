(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5185],{3905:function(e,n,a){"use strict";a.r(n),a.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var r=a(2784);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=r.createContext({}),s=function(e){return function(n){var a=c(n.components);return r.createElement(e,i({},n,{components:a}))}},c=function(e){var n=r.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return r.createElement(m.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=c(a),p=t,u=s["".concat(o,".").concat(p)]||s[p]||v[p]||i;return a?r.createElement(u,l(l({ref:n},m),{},{components:a})):r.createElement(u,l({ref:n},m))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19814:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var r=a(22122),t=a(19756),i=(a(2784),a(3905)),o=["components"],l={id:"env-variables",title:"Environment variables"},d={unversionedId:"env-variables",id:"env-variables",isDocsHomePage:!1,title:"Environment variables",description:"Available from v2.1.2.",source:"@site/docs/env-variables.md",sourceDirName:".",slug:"/env-variables",permalink:"/docs/env-variables",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/env-variables.md",version:"current",frontMatter:{id:"env-variables",title:"Environment variables"},sidebar:"someSidebar",previous:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"},next:{title:"Third party integrations",permalink:"/docs/third-party"}},m=[{value:"Passing variables from the CLI",id:"passing-variables-from-the-cli",children:[]},{value:"Using a dotenv file",id:"using-a-dotenv-file",children:[]},{value:"Setting via <code>renderFrames()</code>",id:"setting-via-renderframes",children:[]},{value:"See also",id:"see-also",children:[]}],s={toc:m};function c(e){var n=e.components,a=(0,t.default)(e,o);return(0,i.mdx)("wrapper",(0,r.default)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Available from v2.1.2.")),(0,i.mdx)("p",null,"Remotion supports environment variables being passed directly from the CLI, using a ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file and from the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/render-frames"},(0,i.mdx)("inlineCode",{parentName:"a"},"renderFrames()"))," function."),(0,i.mdx)("h2",{id:"passing-variables-from-the-cli"},"Passing variables from the CLI"),(0,i.mdx)("p",null,"If you want to pass an environment variable from the CLI, you need to prefix it with ",(0,i.mdx)("inlineCode",{parentName:"p"},"REMOTION_"),". This is a security feature to prevent your whole environment which could contain sensitive information being included in a Webpack bundle."),(0,i.mdx)("p",null,"You can pass environment variables in development mode and while rendering. For example:"),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"REMOTION_MY_VAR=hello_world npm start"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"REMOTION_MY_VAR=hello_world npm start")))))),(0,i.mdx)("p",null,"In your project, you can access the variable using ",(0,i.mdx)("inlineCode",{parentName:"p"},"process.env.REMOTION_MY_VAR"),"."),(0,i.mdx)("h2",{id:"using-a-dotenv-file"},"Using a dotenv file"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"Dotenv")," support is built in. Simply place a ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file in the root of your project and place key-value pairs in it."),(0,i.mdx)("p",null,"For example, if your file contains"),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki min-light with-title",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,i.mdx)("div",{parentName:"pre",className:"code-title"},".env"),(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ini"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"MY_VAR="),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"hello")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"ANOTHER_VAR="),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"world"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki min-dark with-title",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,i.mdx)("div",{parentName:"pre",className:"code-title"},".env"),(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"ini"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"MY_VAR="),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"hello")),(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"ANOTHER_VAR="),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"world")))))),(0,i.mdx)("p",null,"in your project you can read ",(0,i.mdx)("inlineCode",{parentName:"p"},"process.env")," to get an object ",(0,i.mdx)("inlineCode",{parentName:"p"},'{"MY_VAR": "hello", "ANOTHER_VAR": "world"}'),"."),(0,i.mdx)("p",null,"You can override the location of your dotenv file using the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/config#setdotenvlocation"},"configuration file setting")," or the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli"},"CLI flag"),"."),(0,i.mdx)("h2",{id:"setting-via-renderframes"},"Setting via ",(0,i.mdx)("inlineCode",{parentName:"h2"},"renderFrames()")),(0,i.mdx)("p",null,"The above two methods only work when rendering from the CLI. To pass environment variables while server-side-rendering, pass an object to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/render-frames#env-variables"},(0,i.mdx)("inlineCode",{parentName:"a"},"envVariables")," option of ",(0,i.mdx)("inlineCode",{parentName:"a"},"renderFrames()")),"."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/render-frames#env-variables"},(0,i.mdx)("inlineCode",{parentName:"a"},"renderFrames()")," - envVariables")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"dotenv"))))}c.isMDXComponent=!0}}]);