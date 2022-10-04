import{c as e,R as d,P as i,v as a,h as o,j as u,G as r,i as t,s as g}from"../../../../../Version.833375e0.js";import{P as h}from"../../../../../PageBoard.7638f95d.js";import{i as m}from"../../../../../InfoOutlined.2e8ef61a.js";import{e as p}from"../../../../../EditFilled.a38c8e46.js";import{c as x}from"../../../../../SvgIcon.59954b01.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";function f(){return e(u,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 150px",position:"relative",height:300}},e("div",{style:{flex:"none",position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:10}},e(d,{disabled:!0},"Create segment"),e(i,{show:!0,body:e(a,{title:"Permission required"},e("p",null,"Your admin must grant you permission to create segments."),e("a",{href:"#"},"Learn about permissions")),placement:"right-bottom"},e(o,{quiet:!0,size:"extra-small",selected:!0},e(m,null)))))}const s=(n={})=>x({name:"HelpOutline",theme:"outlined",icon:{tag:"svg",attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},children:[{tag:"path",attributes:{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"},children:[]}]}},n);s.displayName="HelpOutlineOutlined";function y(){return e(r,{columns:["50%",1],gap:30},e(u,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px"}},e(r,{columns:2},e("div",null,e("em",{style:{marginBottom:10}},"Information"),e("div",null,e(o,null,e(p,null)," Edit"),"\xA0",e(o,{quiet:!0,size:"extra-small"},e(m,null)))),e("div",null,e("em",{style:{marginBottom:10}},"Help"),e("div",null,e(o,null,e(p,null)," Edit"),"\xA0",e(o,{quiet:!0,size:"extra-small"},e(s,null)))))),e("div",null,e("p",null,"Contextual help can be used to display two types of supplementary content in an experience: in-line information (the info icon) or help and resources to learn more (the help icon).")))}function v(){return e(r,{columns:["50%",1],gap:30},e(u,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px",height:700}},e(r,{rows:2,style:{gap:30}},e("div",{style:{textAlign:"left"}},e("em",{style:{marginBottom:10}},"Placement : bottom-left (default)"),e("div",{style:{paddingTop:20}},e(i,{show:!0,body:e(a,{title:"Permission required"},e("p",null,"Your admin must grant you permission to create segments."),e("a",{href:"#"},"Learn about permissions")),placement:"bottom-left"},e(o,{quiet:!0,size:"extra-small",selected:!0},e(m,null))))),e("div",{style:{textAlign:"left",height:200}},e("em",{style:{marginBottom:10}},"Placement: top"),e("div",{style:{paddingTop:180,paddingLeft:120}},e(i,{show:!0,body:e(a,{title:"Permission required"},e("p",null,"Your admin must grant you permission to create segments."),e("a",{href:"#"},"Learn about permissions")),placement:"top"},e(o,{quiet:!0,size:"extra-small",selected:!0},e(s,null))))),e("div",{style:{textAlign:"left",height:200}},e("em",{style:{marginBottom:10}},"Placement: right-bottom"),e("div",{style:{paddingTop:20}},e(i,{show:!0,body:e(a,{title:"Permission required"},e("p",null,"Your admin must grant you permission to create segments."),e("a",{href:"#"},"Learn about permissions")),placement:"right-bottom"},e(o,{quiet:!0,size:"extra-small",selected:!0},e(s,null))))))),e("div",null,e("p",null,"A popover is positioned in relation to its source. The placement property values are the following:",e("ul",null,e("li",null,"top"),e("li",null,"top-left"),e("li",null,"top-right"),e("li",null,"bottom"),e("li",null,"bottom-left"),e("li",null,"bottom-right"),e("li",null,"left"),e("li",null,"left-top"),e("li",null,"left-bottom"),e("li",null,"right"),e("li",null,"right-top"),e("li",null,"right-bottom")),". The default placement value is at the top.")))}const b="Contextual Help",w="DesignLayout",E="pages/design-system/components/feedback/notification/page.mdx";function c(n){const l=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},n.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(l.h1,null,b),`
`,t.createElementJsx(l.p,null,"Contextual help shows a user extra information about the state of either an adjacent component or an entire view. It explains a high-level topic about an experience and can point users to more information elsewhere."),`
`,t.createElementJsx(f),`
`,t.createElementJsx(l.h2,null,"Options"),`
`,t.createElementJsx(l.h3,null,"Icon"),`
`,t.createElementJsx(y),`
`,t.createElementJsx(l.h3,null,"Popover placement"),`
`,t.createElementJsx(v))}function P(n={}){const{wrapper:l}=n.components||{};return l?t.createElementJsx(l,n,t.createElementJsx(c,n)):c(n)}g(e(h,{layout:w,filename:E,page:P}));
