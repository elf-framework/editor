import{i as e,s,c as l}from"../../../Version.066681bd.js";import{P as c}from"../../../PageBoard.02ebaf31.js";import"../../../LayoutManager.7778c99f.js";const o="Custom Hook",m="SapaLayout",r="pages/sapa/custom-hook/page.mdx";function t(a){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},a.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(n.h1,null,o),`
`,e.createElementJsx(n.p,null,"You can extend some of the hooks you already have."),`
`,e.createElementJsx(n.p,null,"There are two types of Hooks: ordered Hooks and unordered Hooks."),`
`,e.createElementJsx(n.ul,null,`
`,e.createElementJsx(n.li,null,"Ordered Hooks",`
`,e.createElementJsx(n.ul,null,`
`,e.createElementJsx(n.li,null,"useState"),`
`,e.createElementJsx(n.li,null,"useEffect"),`
`,e.createElementJsx(n.li,null,"useCallback"),`
`,e.createElementJsx(n.li,null,"useMemo"),`
`,e.createElementJsx(n.li,null,"useRef"),`
`,e.createElementJsx(n.li,null,"useReducer"),`
`),`
`),`
`,e.createElementJsx(n.li,null,"Unordered Hooks (Sapa Hooks)",`
`,e.createElementJsx(n.ul,null,`
`,e.createElementJsx(n.li,null,"useSubscribe"),`
`,e.createElementJsx(n.li,null,"useSelf"),`
`,e.createElementJsx(n.li,null,"useStore"),`
`,e.createElementJsx(n.li,null,"useStoreSet"),`
`,e.createElementJsx(n.li,null,"useRootContext"),`
`,e.createElementJsx(n.li,null,"useEmit"),`
`,e.createElementJsx(n.li,null,"useTrigger"),`
`,e.createElementJsx(n.li,null,"useMagicMethod"),`
`),`
`),`
`),`
`,e.createElementJsx(n.p,null,"Unordered hooks can be used in any method, not just the template function."),`
`,e.createElementJsx(n.h1,null,"How to redefine Hook"),`
`,e.createElementJsx(n.p,null,"It is convenient to think of a Hook as a function executed within a template."),`
`,e.createElementJsx(n.p,null,"In other words, you can create a function continuously by combining several hooks (functions)."),`
`,e.createElementJsx(n.pre,{className:"language-jsx language-jsx"},e.createElementJsx(n.code,{className:"language-jsx code-highlight"},e.createElementJsx(n.span,{className:"code-line"},`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token keyword"},"function")," ",e.createElementJsx(n.span,{className:"token function"},"useMyState"),e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token parameter"},"defaultValue"),e.createElementJsx(n.span,{className:"token punctuation"},")")," ",e.createElementJsx(n.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token keyword"},"const")," text ",e.createElementJsx(n.span,{className:"token operator"},"=")," ",e.createElementJsx(n.span,{className:"token function"},"useRootContext"),e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token string"},"'text'"),e.createElementJsx(n.span,{className:"token punctuation"},")"),e.createElementJsx(n.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token keyword"},"const")," ",e.createElementJsx(n.span,{className:"token punctuation"},"["),"value",e.createElementJsx(n.span,{className:"token punctuation"},",")," setValue",e.createElementJsx(n.span,{className:"token punctuation"},"]")," ",e.createElementJsx(n.span,{className:"token operator"},"=")," ",e.createElementJsx(n.span,{className:"token function"},"useState"),e.createElementJsx(n.span,{className:"token punctuation"},"("),"text",e.createElementJsx(n.span,{className:"token punctuation"},")"),e.createElementJsx(n.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(n.span,{className:"code-line"},`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(n.span,{className:"token punctuation"},"["),"value",e.createElementJsx(n.span,{className:"token punctuation"},",")," ",e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token parameter"},"v"),e.createElementJsx(n.span,{className:"token punctuation"},")")," ",e.createElementJsx(n.span,{className:"token arrow operator"},"=>")," ",e.createElementJsx(n.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(n.span,{className:"code-line"},"    ",e.createElementJsx(n.span,{className:"token function"},"setValue"),e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token parameter"},"value"),e.createElementJsx(n.span,{className:"token punctuation"},")")," ",e.createElementJsx(n.span,{className:"token arrow operator"},"=>")," v ",e.createElementJsx(n.span,{className:"token operator"},"+")," value",e.createElementJsx(n.span,{className:"token punctuation"},")"),`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token punctuation"},"}"),e.createElementJsx(n.span,{className:"token punctuation"},"]"),e.createElementJsx(n.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(n.span,{className:"code-line"},`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token keyword"},"function")," ",e.createElementJsx(n.span,{className:"token constant"},"A")," ",e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token punctuation"},")")," ",e.createElementJsx(n.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token keyword"},"const")," ",e.createElementJsx(n.span,{className:"token punctuation"},"["),"value",e.createElementJsx(n.span,{className:"token punctuation"},",")," setValue",e.createElementJsx(n.span,{className:"token punctuation"},"]")," ",e.createElementJsx(n.span,{className:"token operator"},"=")," ",e.createElementJsx(n.span,{className:"token function"},"useMyState"),e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token number"},"0"),e.createElementJsx(n.span,{className:"token punctuation"},")"),e.createElementJsx(n.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(n.span,{className:"token tag"},e.createElementJsx(n.span,{className:"token tag"},e.createElementJsx(n.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(n.span,{className:"token punctuation"},">")),e.createElementJsx(n.span,{className:"token plain-text"},"Simple Text "),e.createElementJsx(n.span,{className:"token punctuation"},"{"),"value",e.createElementJsx(n.span,{className:"token punctuation"},"}"),e.createElementJsx(n.span,{className:"token plain-text"}," "),e.createElementJsx(n.span,{className:"token tag"},e.createElementJsx(n.span,{className:"token tag"},e.createElementJsx(n.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(n.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(n.span,{className:"code-line"},`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"start"),e.createElementJsx(n.span,{className:"token punctuation"},"("),e.createElementJsx(n.span,{className:"token constant"},"A"),e.createElementJsx(n.span,{className:"token punctuation"},",")," ",e.createElementJsx(n.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(n.span,{className:"code-line"},"  ",e.createElementJsx(n.span,{className:"token literal-property property"},"text"),e.createElementJsx(n.span,{className:"token operator"},":")," ",e.createElementJsx(n.span,{className:"token string"},'"Simple Text 2"'),`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token punctuation"},"}"),e.createElementJsx(n.span,{className:"token punctuation"},")"),`
`),e.createElementJsx(n.span,{className:"code-line"},`
`))),`
`,e.createElementJsx(n.p,null,"For more details, it is good to learn while continuing to make hooks."))}function u(a={}){const{wrapper:n}=a.components||{};return n?e.createElementJsx(n,a,e.createElementJsx(t,a)):t(a)}s(l(c,{layout:m,filename:r,page:u}));
