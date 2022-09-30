import{i as e,s,c as l}from"../../../Version.066681bd.js";import{P as c}from"../../../PageBoard.02ebaf31.js";import"../../../LayoutManager.7778c99f.js";const m="MainLayout",r="pages/introduction/install/page.mdx";function t(n){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},n.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(a.h1,null,"Install"),`
`,e.createElementJsx(a.p,null,"It can install it with the npm(or yarn) command."),`
`,e.createElementJsx(a.h2,null,"npm"),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"npm")," ",e.createElementJsx(a.span,{className:"token function"},"install"),` @elf-framework/sapa --save
`))),`
`,e.createElementJsx(a.h2,null,"yarn"),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"yarn")," ",e.createElementJsx(a.span,{className:"token function"},"add"),` @elf-framework/sapa 
`))),`
`,e.createElementJsx(a.h1,null,"Template - JSX"),`
`,e.createElementJsx(a.p,null,"Sapa is using ",e.createElementJsx(a.a,{href:"https://ko.reactjs.org/docs/introducing-jsx.html"},"JSX")," template."),`
`,e.createElementJsx(a.h2,null,"Vite config"),`
`,e.createElementJsx(a.pre,{className:"language-js language-js"},e.createElementJsx(a.code,{className:"language-js code-highlight"},e.createElementJsx(a.span,{className:"code-line line-number",line:"1"},e.createElementJsx(a.span,{className:"token keyword module"},"export")," ",e.createElementJsx(a.span,{className:"token keyword module"},"default")," ",e.createElementJsx(a.span,{className:"token function"},"defineConfig"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"2"},"  ",e.createElementJsx(a.span,{className:"token literal-property property"},"esbuild"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line line-number highlight-line",line:"3"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"jsxFactory"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token string"},'"createElementJsx"'),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line line-number highlight-line",line:"4"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"jsxFragment"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token string"},'"FragmentInstance"'),e.createElementJsx(a.span,{className:"token punctuation"},","),`
`),e.createElementJsx(a.span,{className:"code-line line-number highlight-line",line:"5"},"    ",e.createElementJsx(a.span,{className:"token literal-property property"},"jsxInject"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token template-string"},e.createElementJsx(a.span,{className:"token template-punctuation string"},"`"),e.createElementJsx(a.span,{className:"token string"},'import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token template-punctuation string"},"`")),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"6"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line line-number",line:"7"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.h1,null,"How to use @elf-framework/sapa"),`
`,e.createElementJsx(a.h2,null,"import"),`
`,e.createElementJsx(a.p,null,"It can be rendering from ",e.createElementJsx(a.code,null,"start")," function. Please check about ",e.createElementJsx(a.a,{href:"/pages/sapa"},"@elf-framework/sapa")," for details."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{")," start ",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"App")),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div")," ",e.createElementJsx(a.span,{className:"token attr-name"},"class"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"layout",e.createElementJsx(a.span,{className:"token punctuation"},'"')),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"      "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"h1"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},"Elf Framework"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"h1"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"start"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token maybe-class-name"},"App"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.h1,null,"Bundlers"),`
`,e.createElementJsx(a.p,null,"ELF uses vite by default."),`
`,e.createElementJsx(a.p,null,"Let's see how you can use ELF using vite. ",e.createElementJsx(a.a,{href:"/pages/introduction/install/vite/"},"Here")))}function o(n={}){const{wrapper:a}=n.components||{};return a?e.createElementJsx(a,n,e.createElementJsx(t,n)):t(n)}s(l(c,{layout:m,filename:r,page:o}));
