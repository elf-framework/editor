import{i as e,s as t,c as l}from"../../../Version.10c83006.js";import{P as c}from"../../../PageBoard.7c79461f.js";import"../../../LayoutManager.fca90247.js";const m="Getting Started",o="DesignLayout",r="pages/design/page.mdx";function s(n){const a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3"},n.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(a.h1,null,m),`
`,e.createElementJsx(a.p,null,"ELF basically manages design in two forms to make UI."),`
`,e.createElementJsx(a.ul,null,`
`,e.createElementJsx(a.li,null,"Design Tokens"),`
`,e.createElementJsx(a.li,null,"Design System"),`
`,e.createElementJsx(a.li,null,"UI Component (Sapa based)"),`
`),`
`,e.createElementJsx(a.h1,null,"Design Tokens"),`
`,e.createElementJsx(a.p,null,"Design token manages various basic elements such as color, border, and padding, which are basic elements of design."),`
`,e.createElementJsx(a.h2,null,"Install"),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"npm")," ",e.createElementJsx(a.span,{className:"token function"},"install"),` @elf-framework/design-tokens
`))),`
`,e.createElementJsx(a.h2,null,"Import"),`
`,e.createElementJsx(a.h3,null,"JSON data"),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token comment"},"// json "),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},"tokens")," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/design-tokens/tokens.json"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token console class-name"},"console"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token method function property-access"},"log"),e.createElementJsx(a.span,{className:"token punctuation"},"("),"tokens",e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"spacing"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"size"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"lg"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.h3,null,"CSS variable"),`
`,e.createElementJsx(a.pre,{className:"language-css language-css"},e.createElementJsx(a.code,{className:"language-css code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token atrule"},e.createElementJsx(a.span,{className:"token rule"},"@import")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/design-tokens/tokens.css"'),e.createElementJsx(a.span,{className:"token punctuation"},";")),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token property"},"background-color"),e.createElementJsx(a.span,{className:"token punctuation"},":")," ",e.createElementJsx(a.span,{className:"token function"},"var"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token variable"},"--color-gray-0"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.h3,null,"CSS Class"),`
`,e.createElementJsx(a.pre,{className:"language-css language-css"},e.createElementJsx(a.code,{className:"language-css code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token atrule"},e.createElementJsx(a.span,{className:"token rule"},"@import")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/design-tokens/style.css"'),e.createElementJsx(a.span,{className:"token punctuation"},";")),`
`))),`
`,e.createElementJsx(a.pre,{className:"language-html language-html"},e.createElementJsx(a.code,{className:"language-html code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div")," ",e.createElementJsx(a.span,{className:"token attr-name"},"class"),e.createElementJsx(a.span,{className:"token attr-value"},e.createElementJsx(a.span,{className:"token punctuation attr-equals"},"="),e.createElementJsx(a.span,{className:"token punctuation"},'"'),"gap-16",e.createElementJsx(a.span,{className:"token punctuation"},'"')),e.createElementJsx(a.span,{className:"token punctuation"},">")),"Simple Text",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`))),`
`,e.createElementJsx(a.h1,null,"Design System"),`
`,e.createElementJsx(a.p,null,"The design system uses the design token to create a basic structure for making ui components."),`
`,e.createElementJsx(a.h2,null,"Install"),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"npm")," ",e.createElementJsx(a.span,{className:"token function"},"install"),` @elf-framework/design-system
`))),`
`,e.createElementJsx(a.h2,null,"Import"),`
`,e.createElementJsx(a.h3,null,"ESM Mode"),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/design-system/style.css"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),`
`,e.createElementJsx(a.h1,null,"UI Component (Sapa based)"),`
`,e.createElementJsx(a.p,null,"The UI component uses the design system to create a ",e.createElementJsx(a.code,null,"sapa")," implementation that can actually be used."),`
`,e.createElementJsx(a.h2,null,"Install"),`
`,e.createElementJsx(a.pre,{className:"language-shell language-shell"},e.createElementJsx(a.code,{className:"language-shell code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token function"},"npm")," ",e.createElementJsx(a.span,{className:"token function"},"install"),` @elf-framework/ui
`))),`
`,e.createElementJsx(a.h2,null,"Import"),`
`,e.createElementJsx(a.h3,null,"ESM Mode"),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token maybe-class-name"},"Button"),e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/ui"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))))}function p(n={}){const{wrapper:a}=n.components||{};return a?e.createElementJsx(a,n,e.createElementJsx(s,n)):s(n)}t(l(c,{layout:o,filename:r,page:p}));
