import{c as t,N as i,j as l,h as s,z as r,i as e,s as c}from"../../../../../Version.10c83006.js";import{P as m}from"../../../../../PageBoard.7c79461f.js";import{i as p}from"../../../../../InfoOutlined.5d80cc14.js";import{U as u}from"../../../../../UIComponentLink.6975cb4a.js";import"../../../../../LayoutManager.fca90247.js";import"../../../../../SvgIcon.3dbcb0fb.js";function g(){return t(r,null,t(s,{onClick:()=>console.log("action")},"Action"),t(s,{onClick:()=>console.log("Dismiss")},"Dismiss"))}function h(){return t(l,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 150px",position:"relative",height:300}},t("div",{style:{flex:"none",position:"relative"}},t(i,{icon:t(p,null),tools:t(g,null),style:{width:"100%",height:100}},"Your trial has expired. Please purchase to continue. Please send email to elf-framework.com. This sample")))}const x="Notification",f="DesignLayout",d="pages/design-system/components/feedback/notification/page.mdx";function a(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},o.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(n.h1,null,x),`
`,e.createElementJsx(n.p,null,"Notification show pressing and high-signal messages, such as system alerts. They're meant to be noticed and prompt users to take action."),`
`,e.createElementJsx(h),`
`,e.createElementJsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:30,padding:"30px 0"}},e.createElementJsx(u,{link:"/pages/ui-component/notification/"})),`
`,e.createElementJsx(n.h2,null,"Options"),`
`,e.createElementJsx(n.h3,null,"Size"),`
`,e.createElementJsx(n.h3,null,"Orientation"))}function y(o={}){const{wrapper:n}=o.components||{};return n?e.createElementJsx(n,o,e.createElementJsx(a,o)):a(o)}c(t(m,{layout:f,filename:d,page:y}));
