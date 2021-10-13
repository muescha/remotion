(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6035],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return u},useMDXComponents:function(){return i},withMDXComponents:function(){return p}});var n=t(2784);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){return function(a){var t=i(a.components);return n.createElement(e,r({},a,{components:t}))}},i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=i(t),c=o,x=p["".concat(d,".").concat(c)]||p[c]||N[c]||r;return t?n.createElement(x,s(s({ref:a},l),{},{components:t})):n.createElement(x,s({ref:a},l))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=x;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,d[1]=s;for(var l=2;l<r;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},34627:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=t(22122),o=t(19756),r=(t(2784),t(3905)),d=["components"],s={title:"<Audio />",id:"audio"},m=void 0,l={unversionedId:"audio",id:"audio",isDocsHomePage:!1,title:"<Audio />",description:"Using this component, you can add audio to your video. All audio formats which are supported by Chromium are supported by the component.",source:"@site/docs/audio.md",sourceDirName:".",slug:"/audio",permalink:"/docs/audio",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/audio.md",tags:[],version:"current",frontMatter:{title:"<Audio />",id:"audio"},sidebar:"someSidebar",previous:{title:"useVideoConfig()",permalink:"/docs/use-video-config"},next:{title:"<Composition />",permalink:"/docs/composition"}},p=[{value:"API / Example",id:"api--example",children:[]},{value:"Controlling volume",id:"controlling-volume",children:[]},{value:"Controlling playback speed",id:"controlling-playback-speed",children:[]},{value:"Using <code>&lt;source&gt;</code> tags",id:"using-source-tags",children:[]},{value:"See also",id:"see-also",children:[]}],i={toc:p};function c(e){var a=e.components,t=(0,o.default)(e,d);return(0,r.mdx)("wrapper",(0,n.default)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Using this component, you can add audio to your video. All audio formats which are supported by Chromium are supported by the component."),(0,r.mdx)("h2",{id:"api--example"},"API / Example"),(0,r.mdx)("p",null,"Use an import or require to load an audio file and pass it to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"src")," props of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Audio />")," component."),(0,r.mdx)("p",null,"The component also accepts a ",(0,r.mdx)("inlineCode",{parentName:"p"},"volume")," props which allows you to control the volume of the audio in it's entirety or frame by frame. Read the page on ",(0,r.mdx)("a",{parentName:"p",href:"/docs/using-audio"},"using audio")," to learn more."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<Audio>")," has two more helper props: ",(0,r.mdx)("inlineCode",{parentName:"p"},"startFrom")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"endAt")," for defining the start frame and end frame. Both are optional and do not get forwarded to the native ",(0,r.mdx)("inlineCode",{parentName:"p"},"<audio>")," element but tell Remotion which portion of the audio should be included."),(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio"),"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},"'remotion'")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport audio'},"audio")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},"'./audio.mp3'")),(0,r.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">Hello World!</"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport audio'},"audio"),"}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) startFrom?: number | undefined"},"startFrom")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"59"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// if composition is 30fps, then it will start at 2s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) endAt?: number | undefined"},"endAt")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"120"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// if composition is 30fps, then it will end at 4s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  )")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio"),"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},"'remotion'")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport audio'},"audio")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},"'./audio.mp3'")),(0,r.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">Hello World!</"),(0,r.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport audio'},"audio"),"}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) startFrom?: number | undefined"},"startFrom")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"59"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// if composition is 30fps, then it will start at 2s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) endAt?: number | undefined"},"endAt")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"120"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// if composition is 30fps, then it will end at 4s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  )")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}")))))),(0,r.mdx)("h2",{id:"controlling-volume"},"Controlling volume"),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"volume")," prop to control the loudness of the audio. See ",(0,r.mdx)("a",{parentName:"p",href:"/docs/using-audio#controlling-volume"},"Controlling audio")," for more information."),(0,r.mdx)("h2",{id:"controlling-playback-speed"},"Controlling playback speed"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Available from v2.2")),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"playbackRate")," prop to control the speed of the audio. ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," is the default and means regular speed, ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.5")," slows down the audio so it's twice as long and ",(0,r.mdx)("inlineCode",{parentName:"p"},"2")," speeds up the audio so it's twice as fast."),(0,r.mdx)("p",null,"While Remotion doesn't limit the range of possible playback speeds, in development mode the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate"},(0,r.mdx)("inlineCode",{parentName:"a"},"HTMLMediaElement.playbackRate"))," API is used which throws errors on extreme values. At the time of writing, Google Chrome throws an exception if the playback rate is below ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.0625")," or above ",(0,r.mdx)("inlineCode",{parentName:"p"},"16"),"."),(0,r.mdx)("h2",{id:"using-source-tags"},"Using ",(0,r.mdx)("inlineCode",{parentName:"h2"},"<source>")," tags"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Available from v2.4.4")),(0,r.mdx)("p",null,"You can use the browser-native ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"},(0,r.mdx)("inlineCode",{parentName:"a"},"<source>"))," tags to provide different media to support a broader range of browsers. While rendering always happens in Chrome, this feature is useful if you are showing a preview in ",(0,r.mdx)("a",{parentName:"p",href:"/docs/player"},(0,r.mdx)("inlineCode",{parentName:"a"},"<Player />")),"."),(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const Comp: React.FC<{}>"},"Comp")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"."),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>"},"source"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"https://example.com/kid-laugh.mp3"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.type?: string | undefined"},"type")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"audio/mpeg"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>"},"source"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"https://example.com/cow-moo.ogg"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.type?: string | undefined"},"type")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"audio/ogg"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  );")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const Comp: React.FC<{}>"},"Comp")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"."),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>"},"source"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"https://example.com/kid-laugh.mp3"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.type?: string | undefined"},"type")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"audio/mpeg"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>"},"source"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"https://example.com/cow-moo.ogg"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.SourceHTMLAttributes<HTMLSourceElement>.type?: string | undefined"},"type")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"audio/ogg"')),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio")),(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  );")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}")))))),(0,r.mdx)("h2",{id:"see-also"},"See also"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/audio"},"Using audio")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/video"},(0,r.mdx)("inlineCode",{parentName:"a"},"<Video />")))))}c.isMDXComponent=!0}}]);