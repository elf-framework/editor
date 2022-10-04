import{c as e,h as s,q as l,j as m,G as c,i as n,s as y}from"../../../../../Version.833375e0.js";import{P as x}from"../../../../../PageBoard.7638f95d.js";import{e as f}from"../../../../../EditFilled.a38c8e46.js";import{i as r}from"../../../../../InfoOutlined.2e8ef61a.js";import{c as p}from"../../../../../SvgIcon.59954b01.js";import{i as g}from"../../../../../HelpOutlineFilled.5e531a1c.js";import{n as w}from"../../../../../WarningOutlined.4a130750.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";const h=(t={})=>p({name:"Cached",theme:"filled",icon:{tag:"svg",attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},children:[{tag:"path",attributes:{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"},children:[]}]}},t);h.displayName="CachedFilled";function b(){return e(m,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 150px",position:"relative",height:200}},e("div",{style:{flex:"none",position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:10}},e("div",{style:{height:200,position:"relative",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:20}},e(s,null,e(f,null)),e(s,null,e(r,null)),e(s,null,e(h,null)),e(l,{placement:"top",message:"text message",show:!0},e(s,null,e(g,null))))))}function E(){return e(c,{columns:["50%",1],gap:30},e(m,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px",height:100}},e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},e(l,{placement:"top",message:"label",show:!0}))),e("div",null,e("p",null,"All tooltips have a label. The label communicates the contextual help or information about specific components when a user hovers over or focuses on them.")))}const v=(t={})=>p({name:"Error",theme:"outlined",icon:{tag:"svg",attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},children:[{tag:"path",attributes:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"},children:[]}]}},t);v.displayName="ErrorOutlined";const u=(t={})=>p({name:"TaskAlt",theme:"outlined",icon:{tag:"svg",attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},children:[{tag:"path",attributes:{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z"},children:[]}]}},t);u.displayName="TaskAltOutlined";function o({variant:t,icon:a}){return e(l,{variant:t,icon:a,message:e("div",null,"text message"),placement:"top",show:!0})}function J(){return e(c,{columns:["50%",1],gap:30},e(m,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[80,40],height:500}},e("div",{style:{display:"flex",gap:70,flexDirection:"column",alignItems:"center"}},e(o,{variant:"default",icon:e(r,null)}),e(o,{variant:"dark",icon:e(g,null)}),e(o,{variant:"primary",icon:e(r,null)}),e(o,{variant:"secondary",icon:e(u,null)}),e(o,{variant:"success",icon:e(u,null)}),e(o,{variant:"warning",icon:e(w,null)}),e(o,{variant:"danger",icon:e(v,null)}))),e("div",null,e("p",null,"3 of the 4 tooltip variants (informative, positive, and negative) can include an icon to supplement the messaging. These icons are predefined and can not be customized. Unless it's being used to provide context about the exact same icon, a semantic tooltip should always show an icon. Doing this is essential for helping users with color vision deficiency to discern the message tone.")))}function T(){return e(c,{columns:["50%",1],gap:30},e(m,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px",height:700}},e(c,{rows:2,style:{gap:30}},e("div",{style:{textAlign:"center"}},e("em",{style:{marginBottom:10}},"Placement : top (default)"),e("div",{style:{paddingTop:100}},e(l,{show:!0,message:e("div",{style:{whiteSpace:"pre-wrap"}},"Your admin must grant you permission to create segments"),style:{maxWidth:200},placement:"top"},e(s,{quiet:!0,iconOnly:!0,size:"extra-small",selected:!0},e(r,null))))),e("div",{style:{textAlign:"left",height:200}},e("em",{style:{marginBottom:10}},"Placement: bottom-right"),e("div",{style:{paddingTop:40,paddingLeft:120}},e(l,{show:!0,message:e("div",{style:{whiteSpace:"pre-wrap"}},"Your admin must grant you permission to create segments"),style:{maxWidth:200},placement:"bottom-right"},e(s,{quiet:!0,iconOnly:!0,size:"extra-small",selected:!0},e(r,null))))),e("div",{style:{textAlign:"center",height:200}},e("em",{style:{marginBottom:10}},"Placement: bottom"),e("div",{style:{paddingTop:20}},e(l,{show:!0,message:e("div",{style:{whiteSpace:"pre-wrap"}},"Your admin must grant you permission to create segments"),style:{maxWidth:200},placement:"bottom"},e(s,{quiet:!0,iconOnly:!0,size:"extra-small",selected:!0},e(r,null))))))),e("div",null,e("p",null,"A tooltip is positioned in relation to its target. Placement property values are at the:",e("ul",null,e("li",null,"top"),e("li",null,"top-left"),e("li",null,"top-right"),e("li",null,"bottom"),e("li",null,"bottom-left"),e("li",null,"bottom-right"),e("li",null,"left"),e("li",null,"right")),". The default placement value is at the top.")))}function i({variant:t}){return e(l,{variant:t,message:"text message",placement:"top",show:!0})}function C(){return e(c,{columns:["50%",1],gap:30},e(m,{style:{gap:50,backgroundColor:"var(--color-gray-0)",padding:"70px 40px",height:500}},e("div",{style:{display:"flex",gap:70,flexDirection:"column",alignItems:"center"}},e(i,{variant:"default"}),e(i,{variant:"dark"}),e(i,{variant:"primary"}),e(i,{variant:"secondary"}),e(i,{variant:"success"}),e(i,{variant:"warning"}),e(i,{variant:"danger"}),e(i,{variant:"info"}))),e("div",null,e("p",null,"By default, tooltips are the neutral variant. These are the most common variant because most tooltips are used to only disclose additional information, without conveying a semantic meaning. The neutral variant never includes an icon."),e("p",null,"Tooltips also come in semantic variants: informative (blue), positive (green), and negative (red). These use semantic colors to communicate the meaning.")))}function z({variant:t,icon:a}){return e(l,{variant:t,icon:a,message:[e("div",{style:{whiteSpace:"pre-wrap"}},"Your admin must grant you permission to create segments")],placement:"top",show:!0,style:{maxWidth:160}})}function k(){return e(c,{columns:["50%",1],gap:30},e(m,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[80,40]}},e("div",{style:{display:"flex",gap:70,flexDirection:"column",alignItems:"center"}},e(z,{variant:"default",icon:e(r,null)}))),e("div",null,e("p",null,"By default, the maximum width of a tooltip is size-2000 (160 px on desktop, 200 px on mobile). This can be customized to better fit your context.")))}const I="Tooltip",B="DesignLayout",A="pages/design-system/components/feedback/notification/page.mdx";function d(t){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},t.components);return n.createElementJsx(n.FragmentInstance,null,n.createElementJsx(a.h1,null,I),`
`,n.createElementJsx(a.p,null,"Tooltips show contextual help or information about specific components when a user hovers or focuses on them."),`
`,n.createElementJsx(b),`
`,n.createElementJsx(a.h2,null,"Options"),`
`,n.createElementJsx(a.h3,null,"Label"),`
`,n.createElementJsx(E),`
`,n.createElementJsx(a.h3,null,"Variants"),`
`,n.createElementJsx(C),`
`,n.createElementJsx(a.h3,null,"Icon"),`
`,n.createElementJsx(J),`
`,n.createElementJsx(a.h3,null,"Maximum width"),`
`,n.createElementJsx(k),`
`,n.createElementJsx(a.h3,null,"Placement"),`
`,n.createElementJsx(T))}function V(t={}){const{wrapper:a}=t.components||{};return a?n.createElementJsx(a,t,n.createElementJsx(d,t)):d(t)}y(e(x,{layout:B,filename:A,page:V}));
