import{W as u,c as e,a1 as s,P as p,M as c,h as m,j as l,G as r,i as t,s as g}from"../../../../../Version.066681bd.js";import{P as d}from"../../../../../PageBoard.fe897f8b.js";import{i as a}from"../../../../../CheckFilled.7afbdea1.js";import{U as h}from"../../../../../UIComponentLink.a0fe1d83.js";import"../../../../../LayoutManager.7a2f12cb.js";import"../../../../../SvgIcon.924548c6.js";function y(){const[i,n]=u(!1);return e(l,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,300],position:"relative"}},e("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",gap:30,width:240}},e(s,{items:[{title:e(p,{trigger:"click",show:i,placement:"bottom-left",body:e(c,{type:"dropdown",items:[{type:"item",title:"Item 1"}]})},e(m,{quiet:!0,selected:i,onClick:()=>{n(!i)}},e(a,null)))},{title:"Design",href:"/pages/design-system/getting-started/"},{title:"Inputs",href:"/pages/design-system/components/inputs/checkbox/"},{selected:!0,title:"New",href:"/pages/design-system/components/navigations/avatar/",style:{color:"var(--color-primary)"}}]})))}function f(){return e(r,{columns:["50%",1],gap:30},e(l,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},e(s,{items:[{title:e(a,null)},{title:"Design",href:"/pages/design-system/getting-started/"},{title:"Inputs",href:"/pages/design-system/components/inputs/checkbox/"},{selected:!0,title:"New",href:"/pages/design-system/components/navigations/avatar/"}]}))),e("div",null,e("p",null,e("p",null,"By default, breadcrumbs are displayed inline with the hierarchy shown in reading order."))))}function x(){return e(r,{columns:["50%",1],gap:30},e(l,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"flex-start"}},e(s,{multiline:!0,items:[{title:e(a,null)},{title:"Design",href:"/pages/design-system/getting-started/"},{title:"Inputs",href:"/pages/design-system/components/inputs/checkbox/"},{selected:!0,multiline:!0,title:"New line menu",href:"/pages/design-system/components/navigations/avatar/"}]}))),e("div",null,e("p",null,e("p",null,"The multiline variation places emphasis on the selected breadcrumb item as a page title, helping a user to more clearly identify their current location."))))}function v(){return e(r,{columns:["50%",1],gap:30},e(l,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13,height:200}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"flex-start",height:200}},e(s,{items:[{title:e(p,{trigger:"click",show:!0,placement:"bottom-left",body:e(c,{type:"dropdown",compact:!0,style:{width:150},items:[{type:"item",title:"Item 1"},{type:"item",title:"Item 2"},{type:"item",title:"Item 3"},{type:"item",title:"Item 4"}]})},e(m,{quiet:!0,selected:!0},e(a,null)))},{title:"Design",href:"/pages/design-system/getting-started/"},{title:"Inputs",href:"/pages/design-system/components/inputs/checkbox/"},{selected:!0,title:"New line menu",tooltip:"New line menu tooltip",href:"/pages/design-system/components/navigations/avatar/"}]}))),e("div",null,e("p",null,e("p",null,"The multiline variation places emphasis on the selected breadcrumb item as a page title, helping a user to more clearly identify their current location."))))}function b(){return e(r,{columns:["50%",1],gap:30},e(l,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13,height:100}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"flex-start",height:200}},e(s,{items:[{title:e(a,null)},{title:"Design",href:"/pages/design-system/getting-started/"},{title:"Inputs",href:"/pages/design-system/components/inputs/checkbox/"},{selected:!0,title:"New line menu",tooltip:{trigger:["focus","hover"],placement:"top",message:"New line menu",show:!0},href:"/pages/design-system/components/navigations/avatar/"}]}))),e("div",null,e("p",null,e("p",null,"When the breadcrumb title is truncated, a tooltip should display the full title when the user hovers, keyboard focuses, or single-taps on mobile."))))}const w="Breadcrumbs",E="DesignLayout",J="pages/design-system/navigations/breadcrumbs/page.mdx";function o(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},i.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(n.h1,null,w),`
`,t.createElementJsx(n.p,null,"Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an app."),`
`,t.createElementJsx(y),`
`,t.createElementJsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:30,padding:"30px 0"}},t.createElementJsx(h,{link:"/pages/ui-component/breadcrumbs/"})),`
`,t.createElementJsx(n.h2,null,"Options"),`
`,t.createElementJsx(n.h3,null,"Default"),`
`,t.createElementJsx(f),`
`,t.createElementJsx(n.h3,null,"Multiline"),`
`,t.createElementJsx(x),`
`,t.createElementJsx(n.h3,null,"Overflow"),`
`,t.createElementJsx(v),`
`,t.createElementJsx(n.h3,null,"Tooltips"),`
`,t.createElementJsx(b))}function k(i={}){const{wrapper:n}=i.components||{};return n?t.createElementJsx(n,i,t.createElementJsx(o,i)):o(i)}g(e(d,{layout:E,filename:J,page:k}));
