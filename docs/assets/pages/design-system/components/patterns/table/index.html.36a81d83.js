import{c as e,h as a,A as o,ab as s,j as d,G as y,i as t,s as g}from"../../../../../Version.833375e0.js";import{P as h}from"../../../../../PageBoard.7638f95d.js";import{i}from"../../../../../SouthFilled.a5149b98.js";import{c as f}from"../../../../../SettingsFilled.f2b10c9c.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";import"../../../../../SvgIcon.59954b01.js";const w=[{key:"filename",title:"File name",style:{cellAlign:"flex-start"},tools:[e(i,{width:16})]},{key:"updateAt",title:"Last modified"},{key:"type",title:"Type",style:{width:100,cellAlign:"space-between"},tools:[e(a,{quiet:!0,size:"small"},e(f,null))]},{key:"size",title:"Size",style:{textAlign:"right"}},{key:"tools",title:"Tools",style:{width:130}}],x=[{filename:"2022 Proposal",updateAt:"3 months ago",type:"PDF",size:"1.2MB"},{filename:"Buget",updateAt:"1 months ago",type:"XLS",size:"1.2MB"},{filename:"Blog Posting_123",updateAt:"Just now",type:"TXT",size:"1.2MB"},{filename:"template - email",type:"PDF",updateAt:"1 year ago",size:"1.2MB",tools:[e(o,{compact:!0,style:{gap:10}},e(a,null,"1243"),e(a,null,"24234"))]}];function A(){return e("div",{style:{backgroundColor:"var(--color-gray-0)",padding:[20,2,10]}},e("div",{style:{margin:"0 auto",maxWidth:900}},e(s,{columns:w,data:x})))}const r=[{key:"filename",title:["File name",e(i,{width:16})],style:{cellAlign:"flex-start"}},{key:"updateAt",title:"Last modified",style:{display:"none"}},{key:"type",style:{width:30,cellAlign:"space-between"},title:["Type"]},{key:"size",title:"Size",style:{width:50,textAlign:"right"}},{key:"tools",title:"Tools",style:{width:100,display:"none"}}],c=[{filename:"2022 Proposal",updateAt:"3 months ago",type:"PDF",size:"1.2MB"},{filename:"Buget",updateAt:"1 months ago",type:"XLS",size:"1.2MB"},{filename:"Blog Posting_123",updateAt:"Just now",type:"TXT",size:"1.2MB"},{filename:"template - email",type:"PDF",updateAt:"1 year ago",size:"1.2MB",tools:[e(o,{compact:!0,style:{gap:10}},e(a,null,"1243"),e(a,null,"24234"))]}];function b(){return e(y,{columns:["50%",1],gap:30},e(d,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e(s,{columns:r,data:c}),e(s,{columns:r,data:c,quiet:!0})),e("div",null,e("p",null,"Use a standard table when a table is the main focus of an experience. Quiet tables are for when a table is meant to be supplementary, subtle, or lightweight.")))}const u=[{key:"filename",title:["File name",e(i,{width:16})],style:{cellAlign:"flex-start"}},{key:"updateAt",title:"Last modified",style:{display:"none"}},{key:"type",style:{width:30,cellAlign:"space-between"},title:["Type"]},{key:"size",title:"Size",showDivider:!0,style:{width:50,textAlign:"right"}},{key:"tools",title:"Tools",style:{width:100,display:"none"}}],p=[{filename:"2022 Proposal",updateAt:"3 months ago",type:"PDF",size:"1.2MB",selected:!0},{filename:"Buget",updateAt:"1 months ago",type:"XLS",size:"1.2MB",selected:!0},{filename:"Blog Posting_123",updateAt:"Just now",type:"TXT",size:"1.2MB"},{filename:"template - email",type:"PDF",updateAt:"1 year ago",size:"1.2MB",tools:[e(o,{compact:!0,style:{gap:10}},e(a,null,"1243"),e(a,null,"24234"))]}];function k(){return e(y,{columns:["50%",1],gap:30},e(d,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e(s,{columns:u,data:p,selectionStyle:"checkbox"}),e(s,{columns:u,data:p,quiet:!0,selectionStyle:"checkbox"})),e("div",null,e("p",null,"Some tables should allow a user to select rows, on which they can take an action. If a table has selectable rows, it should have checkboxes to the left of the table."),e("p",null,"All tables have a hover state regardless of if actions or selections can be made. This aids the user in viewing content in a single row.")))}const z="Table",B="DesignLayout",M="pages/design-system/patterns/table/page.mdx";function m(n){const l=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},n.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(l.h1,null,z),`
`,t.createElementJsx(l.p,null,"A table is a container that displays information. This allows users to quickly scan, sort, compare, and take action on large amounts of data."),`
`,t.createElementJsx(A),`
`,t.createElementJsx(l.h2,null,"Options"),`
`,t.createElementJsx(l.h3,null,"Standard or quiet"),`
`,t.createElementJsx(b),`
`,t.createElementJsx(l.h3,null,"Selection"),`
`,t.createElementJsx(k))}function T(n={}){const{wrapper:l}=n.components||{};return l?t.createElementJsx(l,n,t.createElementJsx(m,n)):m(n)}g(e(h,{layout:B,filename:M,page:T}));
