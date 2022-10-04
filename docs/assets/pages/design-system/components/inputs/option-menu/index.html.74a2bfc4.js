import{c as l,U as o,j as r,i as t,s}from"../../../../../Version.833375e0.js";import{P as u}from"../../../../../PageBoard.7638f95d.js";import{e as a}from"../../../../../AddchartFilled.2be4103c.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";import"../../../../../SvgIcon.59954b01.js";function m(){return l(r,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,200],position:"relative"}},l("div",{style:{textAlign:"center"}},l(o,{icon:l(a,null),items:[{type:"item",title:"Hello",shortcut:"\u2303\u2325\u21E7\u2318A",onClick:(n,e)=>{console.log(e.selected)}},{type:"divider",dashed:!0},{type:"group",title:"Group"},{type:"item",title:"Menu Item",shortcut:"\u2303\u2325\u21E7\u2318A"},{type:"divider"},{type:"group",title:"Section Title"},{type:"item",title:"Menu Item",items:[{type:"item",title:"Hello",shortcut:"\u2303\u2325\u21E7\u2318A"},{type:"divider",dashed:!0},{type:"group",title:"Group"},{type:"item",title:"Menu Item",shortcut:"\u2303\u2325\u21E7\u2318A",onClick:(n,e)=>{console.log(n,e)}}]}]},"text")))}const c="Option menu",p="DesignLayout",d="pages/design-system/inputs/radio/page.mdx";function i(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},n.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(e.h1,null,c),`
`,t.createElementJsx(e.p,null,"Combo boxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query."),`
`,t.createElementJsx(m),`
`,t.createElementJsx(e.h2,null,"Options"),`
`,t.createElementJsx(e.h3,null,"Label"),`
`,t.createElementJsx(e.h3,null,"Hide slide, inputs"),`
`,t.createElementJsx(e.h3,null,"Size"),`
`,t.createElementJsx(e.h3,null,"Emphasis"),`
`,t.createElementJsx(e.h3,null,"Disabled"),`
`,t.createElementJsx(e.h3,null,"Error"))}function h(n={}){const{wrapper:e}=n.components||{};return e?t.createElementJsx(e,n,t.createElementJsx(i,n)):i(n)}s(l(u,{layout:p,filename:d,page:h}));
