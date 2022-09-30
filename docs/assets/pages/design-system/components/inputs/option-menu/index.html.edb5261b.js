import{c as l,W as o,j as s,i as t,s as r}from"../../../../../Version.10c83006.js";import{P as a}from"../../../../../PageBoard.7c79461f.js";import{e as u}from"../../../../../AddchartFilled.7d1b3a14.js";import{U as m}from"../../../../../UIComponentLink.6975cb4a.js";import"../../../../../LayoutManager.fca90247.js";import"../../../../../SvgIcon.3dbcb0fb.js";function c(){return l(s,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,200],position:"relative"}},l("div",{style:{textAlign:"center"}},l(o,{icon:l(u,null),items:[{type:"item",title:"Hello",shortcut:"\u2303\u2325\u21E7\u2318A",onClick:(n,e)=>{console.log(e.selected)}},{type:"divider",dashed:!0},{type:"group",title:"Group"},{type:"item",title:"Menu Item",shortcut:"\u2303\u2325\u21E7\u2318A"},{type:"divider"},{type:"group",title:"Section Title"},{type:"item",title:"Menu Item",items:[{type:"item",title:"Hello",shortcut:"\u2303\u2325\u21E7\u2318A"},{type:"divider",dashed:!0},{type:"group",title:"Group"},{type:"item",title:"Menu Item",shortcut:"\u2303\u2325\u21E7\u2318A",onClick:(n,e)=>{console.log(n,e)}}]}]},"text")))}const p="Option menu",d="DesignLayout",x="pages/design-system/inputs/radio/page.mdx";function i(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},n.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(e.h1,null,p),`
`,t.createElementJsx(e.p,null,"Combo boxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query."),`
`,t.createElementJsx(c),`
`,t.createElementJsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:30,padding:"30px 0"}},t.createElementJsx(m,{link:"/pages/ui-component/option-menu/"})),`
`,t.createElementJsx(e.h2,null,"Options"),`
`,t.createElementJsx(e.h3,null,"Label"),`
`,t.createElementJsx(e.h3,null,"Hide slide, inputs"),`
`,t.createElementJsx(e.h3,null,"Size"),`
`,t.createElementJsx(e.h3,null,"Emphasis"),`
`,t.createElementJsx(e.h3,null,"Disabled"),`
`,t.createElementJsx(e.h3,null,"Error"))}function g(n={}){const{wrapper:e}=n.components||{};return e?t.createElementJsx(e,n,t.createElementJsx(i,n)):i(n)}r(l(a,{layout:d,filename:x,page:g}));
