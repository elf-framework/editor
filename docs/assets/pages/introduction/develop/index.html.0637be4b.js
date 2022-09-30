import{i as e,s,c as t}from"../../../Version.10c83006.js";import{P as c}from"../../../PageBoard.7c79461f.js";import"../../../LayoutManager.fca90247.js";const m="Development",r="MainLayout",o="pages/introduction/develop/page.mdx";function a(l){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",span:"span",h3:"h3",h4:"h4",ul:"ul",li:"li"},l.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(n.h1,null,m),`
`,e.createElementJsx(n.p,null,e.createElementJsx(n.code,null,"ELF")," can be modified by anyone and put their own functions."),`
`,e.createElementJsx(n.h2,null,"Clone project"),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"git"),` clone https://github.com/elf-framework/editor 
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token builtin class-name"},"cd"),` editor 
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"npm")," ",e.createElementJsx(n.span,{className:"token function"},"install"),` 
`))),`
`,e.createElementJsx(n.h2,null,"Monorepo Workspace"),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},`apps/
`),e.createElementJsx(n.span,{className:"code-line"},`+ editor-dev
`),e.createElementJsx(n.span,{className:"code-line"},`+ ui-dev
`),e.createElementJsx(n.span,{className:"code-line"},`packages/ 
`),e.createElementJsx(n.span,{className:"code-line"},`+ base-editor
`),e.createElementJsx(n.span,{className:"code-line"},`+ color
`),e.createElementJsx(n.span,{className:"code-line"},`+ config
`),e.createElementJsx(n.span,{className:"code-line"},`+ design-system
`),e.createElementJsx(n.span,{className:"code-line"},`+ design-tokens
`),e.createElementJsx(n.span,{className:"code-line"},`+ sapa
`),e.createElementJsx(n.span,{className:"code-line"},`+ sapa-router
`),e.createElementJsx(n.span,{className:"code-line"},`+ ui
`),e.createElementJsx(n.span,{className:"code-line"},`+ vite-plugin-sapa
`),e.createElementJsx(n.span,{className:"code-line"},`
`))),`
`,e.createElementJsx(n.h2,null,"local dev"),`
`,e.createElementJsx(n.p,null,"Use turborepo to configure the command."),`
`,e.createElementJsx(n.h3,null,"Install npm package to indivisual package"),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"npm")," ",e.createElementJsx(n.span,{className:"token function"},"install")," ",e.createElementJsx(n.span,{className:"token punctuation"},"("),"library",e.createElementJsx(n.span,{className:"token punctuation"},")"),` -w apps/ui-dev 
`))),`
`,e.createElementJsx(n.h3,null,"run ui-dev"),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"npm"),` run ui:dev 
`))),`
`,e.createElementJsx(n.p,null,"when ",e.createElementJsx(n.code,null,"ui:dev")," is runinng, some packages is too running by watch mode at same time."),`
`,e.createElementJsx(n.h4,null,"related packages"),`
`,e.createElementJsx(n.ul,null,`
`,e.createElementJsx(n.li,null,"ui"),`
`,e.createElementJsx(n.li,null,"sapa"),`
`,e.createElementJsx(n.li,null,"vite-plugin-sapa"),`
`,e.createElementJsx(n.li,null,"design-tokens"),`
`,e.createElementJsx(n.li,null,"design-system"),`
`,e.createElementJsx(n.li,null,"color"),`
`),`
`,e.createElementJsx(n.h3,null,"run editor-dev"),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"npm"),` run editor:dev
`))),`
`,e.createElementJsx(n.p,null,"when ",e.createElementJsx(n.code,null,"editor:dev")," is runinng, some packages is too running by watch mode at same time."),`
`,e.createElementJsx(n.h4,null,"related packages"),`
`,e.createElementJsx(n.ul,null,`
`,e.createElementJsx(n.li,null,"base-editor"),`
`,e.createElementJsx(n.li,null,"ui"),`
`,e.createElementJsx(n.li,null,"sapa"),`
`,e.createElementJsx(n.li,null,"vite-plugin-sapa"),`
`,e.createElementJsx(n.li,null,"design-tokens"),`
`,e.createElementJsx(n.li,null,"design-system"),`
`,e.createElementJsx(n.li,null,"color"),`
`))}function i(l={}){const{wrapper:n}=l.components||{};return n?e.createElementJsx(n,l,e.createElementJsx(a,l)):a(l)}s(t(c,{layout:r,filename:o,page:i}));
