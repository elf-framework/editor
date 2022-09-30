import{i as e,s,c as l}from"../../../../Version.10c83006.js";import{P as c}from"../../../../PageBoard.7c79461f.js";import"../../../../LayoutManager.fca90247.js";const m="Vite",o="MainLayout",r="pages/introduction/install/vite/page.mdx";function n(t){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},t.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(a.h1,null,m),`
`,e.createElementJsx(a.p,null,"Let's use Vite as a bundler."),`
`,e.createElementJsx(a.h2,null,"create a project"),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"mkdir"),` my-project
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token builtin class-name"},"cd"),` my-project 
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"npm"),` init -y
`))),`
`,e.createElementJsx(a.h2,null,"npm"),`
`,e.createElementJsx(a.p,null,"After creating the project, let's install vite."),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"npm")," ",e.createElementJsx(a.span,{className:"token function"},"install"),` -D vite 
`))),`
`,e.createElementJsx(a.h2,null,"package.json"),`
`,e.createElementJsx(a.p,null,"Write the execution script in package.json ."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token string-property property"},'"scripts"'),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token string-property property"},'"dev"'),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token string"},'"vite dev"'),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`))),`
`,e.createElementJsx(a.h2,null,"vite.config.js"),`
`,e.createElementJsx(a.p,null,"Now we need to configure the structure to run sapa on vite."),`
`,e.createElementJsx(a.p,null,"Create a file called ",e.createElementJsx(a.code,null,"vite.config.dev.js")," and do it as follows."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{")," defineConfig ",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"vite"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},"path")," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"path"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"export")," ",e.createElementJsx(a.span,{className:"token keyword module"},"default")," ",e.createElementJsx(a.span,{className:"token function"},"defineConfig"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token literal-property property"},"esbuild"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"jsxFactory"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token string"},'"createElementJsx"'),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"jsxFragment"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token string"},'"FragmentInstance"'),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"jsxInject"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token template-string"},e.createElementJsx(a.span,{className:"token template-punctuation string"},"`"),e.createElementJsx(a.span,{className:"token string"},'import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token template-punctuation string"},"`")),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token literal-property property"},"build"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"rollupOptions"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token literal-property property"},"input"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"        ",e.createElementJsx(a.span,{className:"token literal-property property"},"ui"),e.createElementJsx(a.span,{className:"token operator"},":")," path",e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token method function property-access"},"resolve"),e.createElementJsx(a.span,{className:"token punctuation"},"("),"__dirname",e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token string"},'"index.html"'),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`))),`
`,e.createElementJsx(a.h2,null,"ESBuild"),`
`,e.createElementJsx(a.p,null,"Since vite uses a compiler called esbuild by default, keywords are specified for jsx processing."),`
`,e.createElementJsx(a.h2,null,"Running Dev Server"),`
`,e.createElementJsx(a.p,null,"The basic setup to run is complete. You need to specify the config you set last."),`
`,e.createElementJsx(a.p,null,"First, change the command in package.json as follows."),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token string-property property"},'"scripts"'),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"    ",e.createElementJsx(a.span,{className:"token string-property property"},'"dev"'),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token string"},'"vite dev --config=vite.config.dev.js"'),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`))),`
`,e.createElementJsx(a.h1,null,"Make a ",e.createElementJsx(a.code,null,"index.html")),`
`,e.createElementJsx(a.p,null,"Let's create index.html in the input specified in rollupOption. This will be the starting point for everything."),`
`,e.createElementJsx(a.pre,{className:"language-html language-html"},e.createElementJsx(a.code,{className:"language-html code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token doctype"},e.createElementJsx(a.span,{className:"token punctuation"},"<!"),e.createElementJsx(a.span,{className:"token doctype-tag"},"DOCTYPE")," ",e.createElementJsx(a.span,{className:"token name"},"html"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"html"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"head"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`    
`),e.createElementJsx(a.span,{className:"code-line"},"        ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"meta")," ",e.createElementJsx(a.span,{className:"token attr-name"},"charset"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"utf-8",e.createElementJsx(a.span,{className:"token punctuation"},'"'))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),`
`),e.createElementJsx(a.span,{className:"code-line"},"        ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"title"),e.createElementJsx(a.span,{className:"token punctuation"},">")),"ELF - An easy and customizable set of developers",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"title"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"head"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"body"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"        ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"script")," ",e.createElementJsx(a.span,{className:"token attr-name"},"type"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"module",e.createElementJsx(a.span,{className:"token punctuation"},'"'))," ",e.createElementJsx(a.span,{className:"token attr-name"},"src"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"./page.jsx",e.createElementJsx(a.span,{className:"token punctuation"},'"')),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token script"}),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"script"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"body"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"html"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`))),`
`,e.createElementJsx(a.p,null,"Use ",e.createElementJsx(a.code,null,'script type="module"')," to specify a script to be started as a module."),`
`,e.createElementJsx(a.p,null,"Since jsx was also processed, it is okay to directly specify the jsx file."),`
`,e.createElementJsx(a.h1,null,"Make a ",e.createElementJsx(a.code,null,"page.jsx")),`
`,e.createElementJsx(a.p,null,"Define the component and render it on the screen using the start function."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line highlight-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{")," start ",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"Main")),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},"Hello, World!! This is a Sapa "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},e.createElementJsx(a.span,{className:"token function"},"start"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token maybe-class-name"},"Main"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))))}function p(t={}){const{wrapper:a}=t.components||{};return a?e.createElementJsx(a,t,e.createElementJsx(n,t)):n(t)}s(l(c,{layout:o,filename:r,page:p}));
