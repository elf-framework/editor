import{c as e,x as l,a0 as o,C as s,a8 as r,a as d,b as u,h as m,d as c,j as g,i as t,s as p}from"../../../../../Version.066681bd.js";import{P as h}from"../../../../../PageBoard.02ebaf31.js";/* empty css                                   */import"../../../../../LayoutManager.7778c99f.js";function x(){return e(g,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,100],position:"relative"}},e("div",null,e("div",{style:{display:"flex",flexWrap:"wrap",gap:50,alignItems:"center",textAlign:"center",width:"100%"}},e("em",null,"Default"),e("div",{style:{width:100,height:100}},e(l,null)),e("em",null,"Animated"),e("div",{style:{width:100,height:100}},e(l,{animated:!0}))),e("div",{style:{display:"flex",flexWrap:"wrap",gap:50,alignItems:"center",textAlign:"center",width:"100%"}},e("em",null,"Avatar"),e("div",{style:{width:100,height:100,display:"flex",alignItems:"center",justifyContent:"center"}},e(o,{ghost:!0,size:"700"},e("img",{src:"https://avatars.githubusercontent.com/u/12592949?v=4"})))),e("div",{style:{display:"flex",flexWrap:"wrap",gap:50,alignItems:"center",width:"100%"}},e("div",null,e("em",null,"Card Preview "),e(s,null,e(r,{ratio:"2:1",ghost:!0}))),e("div",null,e("em",null,"Card Preview "),e(s,null,e(r,{ratio:"2:1",ghost:!0}),e(d,null,e(u,{title:"sample",ghost:!0,actions:[e(m,null,"fdsaf")]}),e(c,{ghost:!0})))))))}const f="Ghost",v="DesignLayout",y="pages/design-system/status/ghost/page.mdx";function i(a){const n=Object.assign({h1:"h1",p:"p"},a.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(n.h1,null,f),`
`,t.createElementJsx(n.p,null,"Supports ghost component for loading status."),`
`,t.createElementJsx(x))}function w(a={}){const{wrapper:n}=a.components||{};return n?t.createElementJsx(n,a,t.createElementJsx(i,a)):i(a)}p(e(h,{layout:v,filename:y,page:w}));
