import{c as e,z as a,R as s,j as i,G as r,i as t,s as d}from"../../../../../Version.833375e0.js";import{P as p}from"../../../../../PageBoard.7638f95d.js";import{i as c}from"../../../../../InfoOutlined.2e8ef61a.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";import"../../../../../SvgIcon.59954b01.js";function m(){return e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 150px",position:"relative",height:300}},e("div",{style:{flex:"none",position:"relative",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:10}},e("div",{style:{height:300,position:"relative",width:"100%",backgroundColor:"white"}},e(a,{direction:"bottom-right",icon:e(c,null),style:{position:"absolute"},tools:[e(s,{outline:!0,place:"toast",onClick:()=>console.log("action")},"Action")],closable:!0},"Hello World yellow 234"))))}function g(){return e(r,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px"}},e("div",null,e(a,{direction:"bottom-right"},"Hello World yellow 234"))),e("div",null,e("p",null,"Toasts must include text to communicate a message. Write the text as concisely as possible while still being clear about what has happened or is happening. View the toast content standards for writing guidelines.")))}function h(){return e(r,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px"}},e("div",null,e(a,{direction:"bottom-right",icon:e(c,null)},"Hello World yellow 234"))),e("div",null,e("p",null)))}function v(){return e(r,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px"}},e("div",null,e(a,{direction:"bottom-right",tools:[e(s,{place:"toast",variant:"outline"},"Action")]},"Hello World yellow 234"))),e("div",null,e("p",null)))}function x(){return e(r,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px"}},e("div",null,e(a,{direction:"bottom-right",closable:!0},"Hello World yellow 234"))),e("div",null,e("p",null)))}function l({variant:o}){return e(a,{variant:o,direction:"bottom-right",icon:e(c,null),tools:[e(s,{place:"toast",variant:"outline",onClick:()=>console.log("action")},"Action")],closable:!0},"Hello World yellow 234")}function f(){return e(r,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"40px 40px"}},e("div",{style:{display:"flex",gap:10,flexDirection:"column"}},e(l,{variant:"default"}),e("em",null,"Inforamtive variant"),e(l,{variant:"primary"}),e("em",null,"Positive variant"),e(l,{variant:"success"}),e(l,{variant:"warning"}),e("em",null,"Negative variant"),e(l,{variant:"danger"}),e(l,{variant:"info"}))),e("div",null,e("p",null,"The ",e("code",null,"informative")," toast uses the informative semantic color (blue) and has an info icon to help those with color vision deficiency discern the message tone. Similar to the accent button, this should be used when the message should call extra attention compared to the neutral variant."),e("p",null,"The ",e("code",null,"positive")," toast uses the positive semantic color (green) and has a checkmark icon to help those with color vision deficiency discern the message tone. This is used to inform about a successful action or completion of a task."),e("p",null,"The ",e("code",null,"negative")," toast uses the negative semantic color (red) and has an alert icon to help those with color vision deficiency to discern the message tone. This is used to show an error or failure.")))}const y="Toast",b="DesignLayout",w="pages/design-system/components/feedback/notification/page.mdx";function u(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},o.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(n.h1,null,y),`
`,t.createElementJsx(n.p,null,"Toasts display brief, temporary notifications. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken."),`
`,t.createElementJsx(m),`
`,t.createElementJsx(n.h2,null,"Options"),`
`,t.createElementJsx(n.h3,null,"Text"),`
`,t.createElementJsx(g),`
`,t.createElementJsx(n.h3,null,"Icon"),`
`,t.createElementJsx(h),`
`,t.createElementJsx(n.h3,null,"Tools"),`
`,t.createElementJsx(v),`
`,t.createElementJsx(n.h3,null,"Closable"),`
`,t.createElementJsx(x),`
`,t.createElementJsx(n.h3,null,"Variant"),`
`,t.createElementJsx(f))}function E(o={}){const{wrapper:n}=o.components||{};return n?t.createElementJsx(n,o,t.createElementJsx(u,o)):u(o)}d(e(p,{layout:b,filename:w,page:E}));
