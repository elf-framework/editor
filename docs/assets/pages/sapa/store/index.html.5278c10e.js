import{i as e,s,c}from"../../../Version.066681bd.js";import{P as l}from"../../../PageBoard.fe897f8b.js";import"../../../LayoutManager.7a2f12cb.js";const m="Store Basic",o="SapaLayout",p="pages/sapa/store/page.mdx";function t(n){const a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",a:"a",pre:"pre",span:"span",h3:"h3"},n.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(a.h1,null,m),`
`,e.createElementJsx(a.p,null,"Sapa provides storage that can be used in three forms."),`
`,e.createElementJsx(a.ul,null,`
`,e.createElementJsx(a.li,null,e.createElementJsx(a.code,null,"useState")," - having order store"),`
`,e.createElementJsx(a.li,null,e.createElementJsx(a.code,null,"state")," - key-value store"),`
`,e.createElementJsx(a.li,null,e.createElementJsx(a.code,null,"$store")," - hierarchy store"),`
`),`
`,e.createElementJsx(a.h2,null,"useState"),`
`,e.createElementJsx(a.p,null,e.createElementJsx(a.code,null,"useState")," is an ordered storage using Hooks."),`
`,e.createElementJsx(a.p,null,"See ",e.createElementJsx(a.a,{href:"/pages/sapa/hook/"},"Hook")," for details."),`
`,e.createElementJsx(a.h2,null,"state"),`
`,e.createElementJsx(a.p,null,e.createElementJsx(a.code,null,"state")," is a local key-value store."),`
`,e.createElementJsx(a.p,null,"Since it is a class variable, the initial value is specified with ",e.createElementJsx(a.code,null,"initState()")," and can be used in the template function or other areas inside the class."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token imports"},e.createElementJsx(a.span,{className:"token punctuation"},"{")," ",e.createElementJsx(a.span,{className:"token maybe-class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"}"))," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"class")," ",e.createElementJsx(a.span,{className:"token class-name"},"A")," ",e.createElementJsx(a.span,{className:"token keyword"},"extends")," ",e.createElementJsx(a.span,{className:"token class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"initState"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"      ",e.createElementJsx(a.span,{className:"token literal-property property"},"value"),e.createElementJsx(a.span,{className:"token operator"},":")," ",e.createElementJsx(a.span,{className:"token number"},"10"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"template")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token keyword"},"this"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"state"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"value"),e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.h2,null,"$store"),`
`,e.createElementJsx(a.p,null,e.createElementJsx(a.code,null,"$store")," is the storage structure used in the hierachy structure."),`
`,e.createElementJsx(a.p,null,"Components connected by hierachy all share one ",e.createElementJsx(a.code,null,"$store"),"."),`
`,e.createElementJsx(a.p,null,"First, let's see how to use it in class components."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword module"},"import")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token maybe-class-name"},"UIElement"),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token constant"},"SUBSCRIBE"),e.createElementJsx(a.span,{className:"token punctuation"},"}")," ",e.createElementJsx(a.span,{className:"token keyword module"},"from")," ",e.createElementJsx(a.span,{className:"token string"},'"@elf-framework/sapa"'),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"class")," ",e.createElementJsx(a.span,{className:"token class-name"},"B")," ",e.createElementJsx(a.span,{className:"token keyword"},"extends")," ",e.createElementJsx(a.span,{className:"token class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"template")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token keyword"},"this"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"$store"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token method function property-access"},"get"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token comment"},"// If the value defined as key among the values \u200B\u200Bof $store changes, it receives and executes a message."),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"["),e.createElementJsx(a.span,{className:"token constant"},"SUBSCRIBE"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"]")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token function"},"useRender"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"class")," ",e.createElementJsx(a.span,{className:"token class-name"},"A")," ",e.createElementJsx(a.span,{className:"token keyword"},"extends")," ",e.createElementJsx(a.span,{className:"token class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"template")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div")," ",e.createElementJsx(a.span,{className:"token attr-name"},"onClick"),e.createElementJsx(a.span,{className:"token script language-javascript"},e.createElementJsx(a.span,{className:"token script-punctuation punctuation"},"="),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token arrow operator"},"=>")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`))),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token script language-javascript"},"      ",e.createElementJsx(a.span,{className:"token keyword"},"this"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"$store"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token method function property-access"},"set"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},'"key"'),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token string"},'"value"'),e.createElementJsx(a.span,{className:"token punctuation"},")"),`
`))),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token script language-javascript"},"    ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},"}")),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"      "),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token keyword"},"this"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"$store"),e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token method function property-access"},"get"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"      "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"B"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"class")," ",e.createElementJsx(a.span,{className:"token class-name"},"Main")," ",e.createElementJsx(a.span,{className:"token keyword"},"extends")," ",e.createElementJsx(a.span,{className:"token class-name"},"UIElement")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"template")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"      "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"A"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"      "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"B"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.p,null,"\xA0"),`
`,e.createElementJsx(a.p,null,"In the class component, you can access it using this.",e.createElementJsx(a.code,null,"$store"),". Of course, since the basic structure is similar, you can use this.",e.createElementJsx(a.code,null,"$store")," as it is in the function component."),`
`,e.createElementJsx(a.p,null,"The ",e.createElementJsx(a.code,null,"SUBSCRIBE")," magic method receives a specific event and executes it."),`
`,e.createElementJsx(a.p,null,"For details of ",e.createElementJsx(a.code,null,"SUBSCRIBE"),", check ",e.createElementJsx(a.a,{href:"/pages/sapa/magic-method/#SUBSCRIBE"},"Magic Method"),"."),`
`,e.createElementJsx(a.p,null,"Let's see how to use it in function component."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token constant"},"B")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token function"},"useStore"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token constant"},"A")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"useStoreSet"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token string"},"'value'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"dv"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token function"},"useStore"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"B"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"  "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},`}
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},`
`)))),`
`,e.createElementJsx(a.p,null,"You can use this.",e.createElementJsx(a.code,null,"$store")," as it is in the function component, but it can be used more appropriately for the function component by providing useStore and useStoreSet hooks."),`
`,e.createElementJsx(a.h3,null,"Store Message"),`
`,e.createElementJsx(a.p,null,"When the value of the store is changed, a message is delivered to the key value of the store."),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token constant"},"A"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token comment"},"// If the value defined as key among the values \u200B\u200Bof $store changes, it receives and executes a message."),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"useSubscribe"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token arrow operator"},"=>")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"    ",e.createElementJsx(a.span,{className:"token function"},"useRender"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},")"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div")," ",e.createElementJsx(a.span,{className:"token attr-name"},"onClick"),e.createElementJsx(a.span,{className:"token script language-javascript"},e.createElementJsx(a.span,{className:"token script-punctuation punctuation"},"="),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token arrow operator"},"=>")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`))),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token script language-javascript"},"    ",e.createElementJsx(a.span,{className:"token function"},"useStoreSet"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},",")," e",e.createElementJsx(a.span,{className:"token punctuation"},"."),e.createElementJsx(a.span,{className:"token property-access"},"target"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`))),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token script language-javascript"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},"}")),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},"Simple Text"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.h3,null,"Receiving messages from other components"),`
`,e.createElementJsx(a.pre,{className:"language-jsx language-jsx"},e.createElementJsx(a.code,{className:"language-jsx code-highlight"},e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token constant"},"A"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div")," ",e.createElementJsx(a.span,{className:"token attr-name"},"onClick"),e.createElementJsx(a.span,{className:"token script language-javascript"},e.createElementJsx(a.span,{className:"token script-punctuation punctuation"},"="),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token arrow operator"},"=>")," ",e.createElementJsx(a.span,{className:"token function"},"useStoreSet"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token function"},"useStore"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token operator"},"+")," ",e.createElementJsx(a.span,{className:"token number"},"1"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"}")),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},"Simple Text"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token constant"},"B")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"  ",e.createElementJsx(a.span,{className:"token function"},"useSubscribe"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},",")," ",e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token arrow operator"},"=>")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"    ",e.createElementJsx(a.span,{className:"token comment"},"// Re-render when key is changed."),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"    ",e.createElementJsx(a.span,{className:"token function"},"useRender"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},";"),`
`),e.createElementJsx(a.span,{className:"code-line highlight-line"},"  ",e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token punctuation"},")"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token punctuation"},"{"),e.createElementJsx(a.span,{className:"token function"},"useStore"),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token string"},"'key'"),e.createElementJsx(a.span,{className:"token punctuation"},")"),e.createElementJsx(a.span,{className:"token punctuation"},"}"),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`),e.createElementJsx(a.span,{className:"code-line"},`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token keyword"},"function")," ",e.createElementJsx(a.span,{className:"token function"},e.createElementJsx(a.span,{className:"token maybe-class-name"},"Main")),e.createElementJsx(a.span,{className:"token punctuation"},"("),e.createElementJsx(a.span,{className:"token punctuation"},")")," ",e.createElementJsx(a.span,{className:"token punctuation"},"{"),`
`),e.createElementJsx(a.span,{className:"code-line"},"  ",e.createElementJsx(a.span,{className:"token keyword control-flow"},"return")," ",e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"A"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"    "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"<"),e.createElementJsx(a.span,{className:"token class-name"},"B"))," ",e.createElementJsx(a.span,{className:"token punctuation"},"/>")),e.createElementJsx(a.span,{className:"token plain-text"},`
`)),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token plain-text"},"  "),e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token tag"},e.createElementJsx(a.span,{className:"token punctuation"},"</"),"div"),e.createElementJsx(a.span,{className:"token punctuation"},">")),`
`),e.createElementJsx(a.span,{className:"code-line"},e.createElementJsx(a.span,{className:"token punctuation"},"}"),`
`))),`
`,e.createElementJsx(a.p,null,e.createElementJsx(a.code,null,"$store")," is useful when dealing with public data."),`
`,e.createElementJsx(a.p,null,"Like React, it supports the Provider and Consumer concepts of context, but ",e.createElementJsx(a.code,null,"$store")," is easier to use."))}function r(n={}){const{wrapper:a}=n.components||{};return a?e.createElementJsx(a,n,e.createElementJsx(t,n)):t(n)}s(c(l,{layout:o,filename:p,page:r}));
