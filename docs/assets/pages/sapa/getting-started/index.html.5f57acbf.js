import{i as e,t,s as c,c as l}from"../../../Version.833375e0.js";import{P as m}from"../../../PageBoard.7638f95d.js";import"../../../LayoutManager.3c16e74c.js";const o="@elf-framework/sapa",r="2.2.4",p="Fantastic UI library for vanilla JS",i="./index.d.ts",x=["dist","index.d.ts","package.json"],u="./dist/sapa.umd.js",E="./dist/sapa.es.js",J={"./package.json":"./package.json",".":{import:"./dist/sapa.es.js",require:"./dist/sapa.umd.js"}},N={"@elf-framework/config":"*",vite:"^3.0.8","vite-plugin-replace":"^0.1.1",vitest:"0.22.1"},k={"vite:dist":"vite build --config=vite.dist.config.js",watch:"vite build --config=vite.dist.config.js --watch","sapa:watch":"npm run watch","ssr:watch":"npm run watch","ui:watch":"npm run watch","editor:watch":"npm run watch",build:"npm run vite:dist",test:"vitest",coverage:"vitest --coverage"},d={type:"git",url:"git+https://github.com/elf-framework/editor.git"},g=["ELF","Sapa","UI","Library"],h="easylogic",f="MIT",y={url:"https://github.com/elf-framework/editor/issues"},w="https://docs.elf-framework.com/",b={name:o,version:r,description:p,types:i,files:x,main:u,module:E,exports:J,devDependencies:N,scripts:k,repository:d,keywords:g,author:h,license:f,bugs:y,homepage:w},j="Getting Started",v="SapaLayout",C="pages/sapa/getting-started/page.mdx";function s(n){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},n.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(a.h1,null,j),`
`,e.createElementJsx(a.p,null,`Let's learn the basics of Sapa.
Sapa was created to make UI creation with JavaScript easy.`),`
`,e.createElementJsx(a.p,null,"To use the JS library, you need a few things. Let's find out one by one."),`
`,e.createElementJsx(a.h2,null,"Import (ESM)"),`
`,e.createElementJsx(a.p,null,"Import the library into your project."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{")," start ",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.h2,null,"UMD (Using CDN Service)"),`
`,e.createElementJsx(a.p,null,"It can also be used in umd mode."),`
`,e.createElementJsx(a.p,null,"Let's load the script first."),`
`,e.createElementJsx(t,{variant:"dark",shape:"round"},e.createElementJsx(a.p,null,"<script src=",`https://cdn.jsdelivr.net/npm/@elf-framework/sapa@${b.version}/dist/sapa.umd.min.js`,"><\/script>")),`
`,e.createElementJsx(a.p,null,"Then use the desired function with the sapa object."),`
`,e.createElementJsx(a.pre,{className:"language-html language-html"},e.createElementJsx(a.code,{className:"language-html code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"script"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token script"},e.createElementJsx(a.span,{className:"token language-javascript"},`
`))),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token script"},e.createElementJsx(a.span,{className:"token language-javascript"},e.createElementJsx(a.span,{className:"token keyword"},"const")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{")," start ",e.createElementJsx(a.span,{className:"token punctuation"},"}")," ",e.createElementJsx(a.span,{className:"token operator"},"=")," sapa",e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token script"},e.createElementJsx(a.span,{className:"token language-javascript"})),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"script"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`))),`
`,e.createElementJsx(a.h1,null,"App"),`
`,e.createElementJsx(a.p,null,"The App is the root component of your application."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"App")),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token operator"},"<"),"div",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token operator"},"<"),"h1",e.createElementJsx(a.span,{className:"token operator"},">"),e.createElementJsx(a.span,{className:"token maybe-class-name"},"Hello")," ",e.createElementJsx(a.span,{className:"token maybe-class-name"},"World"),e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token operator"},"/"),"h1",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token operator"},"/"),"div",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.h2,null,"Render"),`
`,e.createElementJsx(a.p,null,"Render the component."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"start"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token maybe-class-name"},"App"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(t,{type:"info",weak:!0},e.createElementJsx(a.p,null,"You can use ",e.createElementJsx("strong",null,"render")," function instead of"," ",`
`,e.createElementJsx("strong",null,"start"),".")),`
`,e.createElementJsx(a.p,null,e.createElementJsx(a.code,null,"start")," is a function that takes a Sapa component as a parameter."),`
`,e.createElementJsx(a.h2,null,"VNode"),`
`,e.createElementJsx(a.p,null,"A VNode is a virtual DOM node."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"start"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token maybe-class-name"},"App")," key",e.createElementJsx(a.span,{className:"token operator"},"="),e.createElementJsx(a.span,{className:"token string"},'"value"')," ",e.createElementJsx(a.span,{className:"token operator"},"/"),e.createElementJsx(a.span,{className:"token operator"},">"),e.createElementJsx(a.span,{className:"token punctuation"},")"),`
`))),`
`,e.createElementJsx(a.h2,null,"Class Component"),`
`,e.createElementJsx(a.p,null,"A class component is a component that is defined in a class."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{")," ",e.createElementJsx(a.span,{className:"token maybe-class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"class")," ",e.createElementJsx(a.span,{className:"token class-name"},"App")," ",e.createElementJsx(a.span,{className:"token keyword"},"extends")," ",e.createElementJsx(a.span,{className:"token class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"template"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token operator"},"<"),"div",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"        ",e.createElementJsx(a.span,{className:"token operator"},"<"),"h1",e.createElementJsx(a.span,{className:"token operator"},">"),e.createElementJsx(a.span,{className:"token maybe-class-name"},"Hello")," ",e.createElementJsx(a.span,{className:"token maybe-class-name"},"World"),e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token operator"},"/"),"h1",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token operator"},"/"),"div",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.h2,null,"Function Component"),`
`,e.createElementJsx(a.p,null,"A function component is a component that is defined in a function."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"App")),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token operator"},"<"),"div",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token operator"},"<"),"h1",e.createElementJsx(a.span,{className:"token operator"},">"),e.createElementJsx(a.span,{className:"token maybe-class-name"},"Hello")," ",e.createElementJsx(a.span,{className:"token maybe-class-name"},"World"),e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token operator"},"/"),"h1",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token operator"},"<"),e.createElementJsx(a.span,{className:"token operator"},"/"),"div",e.createElementJsx(a.span,{className:"token operator"},">"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.h1,null,"RootContext Options"),`
`,e.createElementJsx(a.p,null,"The ",e.createElementJsx(a.code,null,"RootContext")," is special data that is transmitted only to the root element."),`
`,e.createElementJsx(a.p,null,"Data for common use in the entire component tree can be injected externally."),`
`,e.createElementJsx(a.h2,null,"container"),`
`,e.createElementJsx(a.p,null,"The container property renders the component under a specific element."),`
`,e.createElementJsx(a.p,null,"First, mark the area where the component will be drawn."),`
`,e.createElementJsx(a.pre,{className:"language-html language-html"},e.createElementJsx(a.code,{className:"language-html code-highlight"},e.createElementJsx(a.span,{className:"code-line line-number",line:"1"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"html"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"2"},`  ...
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"3"},"  ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"body"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"4"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div")," ",e.createElementJsx(a.span,{className:"token attr-name"},"id"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"root",e.createElementJsx(a.span,{className:"token punctuation"},'"')),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line line-number highlight-line",line:"5"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"script")," ",e.createElementJsx(a.span,{className:"token attr-name"},"type"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"module",e.createElementJsx(a.span,{className:"token punctuation"},'"'))," ",e.createElementJsx(a.span,{className:"token attr-name"},"src"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"page.jsx",e.createElementJsx(a.span,{className:"token punctuation"},'"')),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token script"}),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"script"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"6"},"  ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"body"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"7"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"html"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`))),`
`,e.createElementJsx(a.p,null,"Then you can specify it as a container option."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line line-number",line:"1"},e.createElementJsx(a.span,{className:"token comment"},"// @page.jsx"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"2"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{"),"start",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"3"},`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"4"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"Main")),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"5"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},"MainComponent"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"6"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"7"},`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"8"},e.createElementJsx(a.span,{className:"token function"},"start"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token maybe-class-name"},"Main"),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line line-number highlight-line",line:"9"},"  ",e.createElementJsx(a.span,{className:"token literal-property property"},"container"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token dom variable"},"document"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token method function property-access"},"getElementById"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'root'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"10"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"11"},`
`))),`
`,e.createElementJsx(a.h2,null,"using RootContext"),`
`,e.createElementJsx(a.p,null,e.createElementJsx(a.code,null,"RootContext")," is an option given when running start ."),`
`,e.createElementJsx(a.p,null,"To use RootContext inside component, refer ",e.createElementJsx(a.a,{href:"/pages/sapa/hook/#useRootContext154"},"here"),"."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"start"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"Page"))," ",e.createElementJsx(a.span,{className:"token spread"},e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token spread operator"},"..."),"pageProps",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  pageContext",e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"  routeParams",e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.p,null,"To use it, do the following:"),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"OtherComponent"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword"},"const")," pageContext ",e.createElementJsx(a.span,{className:"token operator"},"=")," ",e.createElementJsx(a.span,{className:"token function"},"useRootContext"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'pageContext'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"  ",e.createElementJsx(a.span,{className:"token keyword"},"const")," routeParams ",e.createElementJsx(a.span,{className:"token operator"},"=")," ",e.createElementJsx(a.span,{className:"token function"},"useRootContext"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'routeParams'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},"Other Component"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))))}function S(n={}){const{wrapper:a}=n.components||{};return a?e.createElementJsx(a,n,e.createElementJsx(s,n)):s(n)}c(l(m,{layout:v,filename:C,page:S}));
