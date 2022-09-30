import{c as i,G as n,i as t,s as c}from"../../../../Version.066681bd.js";import{P as g}from"../../../../PageBoard.fe897f8b.js";import{t as d,C as s}from"../../../../CopyText.a48509a3.js";import"../../../../LayoutManager.7a2f12cb.js";const a={0:"xxxs",1:"xxs",2:"xs",3:"sm",4:"md",5:"lg",6:"xl",7:"xxl",8:"xxxl"};function o(){return i("div",{class:"spacing-view"},i("div",{class:"size-preview",style:{backgroundColor:d.color.gray[0],display:"flex",justifyContent:"center",alignItems:"end",height:80,marginBottom:50,gap:30,padding:50}},Object.keys(d.spacing).map(e=>{if(e!=="size")return i("div",null,i("div",{class:"size-item",style:{backgroundColor:d.color.blue[5],width:d.spacing[e],height:d.spacing[e]}}),i("div",{style:{fontSize:12,textAlign:"center",paddingTop:10}},d.spacing[e]))})),i("table",{style:{width:"100%"}},i("thead",null,i("tr",null,i("th",null,"CSS"),i("th",null,"CSS Alias"),i("th",null,"SCSS"),i("th",null,"SCSS Alias"),i("th",null,"Value"))),i("tbody",null,Object.keys(d.spacing).map(e=>{if(e!=="size")return i("tr",null,i("td",null,i(s,{text:`--spacing-${e}`})),i("td",null,i(s,{text:`--spacing-size-${a[e]}`})),i("td",null,i(s,{text:`$spacing-${e}`})),i("td",null,i(s,{text:`$spacing-${a[e]}`})),i("td",null,i(s,{text:d.spacing[e]})))}))))}function u(){return i("div",{class:"grid-view"},i(n,{columns:[1,1]},i("div",null,i("div",{style:{width:150,height:150,backgroundColor:"var(--color-blue-0)",border:"1px solid var(--color-blue-5)"}}),"8point"),i("div",null,i("div",{style:{width:150,height:150,backgroundColor:"var(--color-blue-0)",border:"1px solid var(--color-blue-5)",backgroundImage:"repeating-linear-gradient(to right, transparent, transparent 11.9%, var(--color-blue-5) 11.9%, var(--color-blue-5) calc(11.9% + 1px)), repeating-linear-gradient(to bottom, transparent, transparent 12%, var(--color-blue-5) 12%, var(--color-blue-5) calc(12% + 1px))"}}),i("div",{style:{marginTop:10,width:20,height:1,backgroundColor:"var(--color-blue-6)"}}),"1px")))}function m(){return i(n,{columns:[1,1],gap:20,class:"column-view"},i("div",null,i(n,{class:"fluid",columns:12,gap:10,style:{height:240,paddingLeft:10,paddingRight:10}},i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"})),i("div",{class:"description"},i("strong",null,"Columns"),i("p",null,"By default, 12 columns are used. It can be specified in the form of column-xxx depending on the required state."))),i("div",null,i(n,{columns:12,gap:8,class:"gutter",style:{height:240,paddingLeft:8,paddingRight:8}},i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"})),i("div",{class:"description"},i("strong",null,"Gaps"),i("p",null,"Gaps are the gaps between the columns. Gutter widths are fixed values (16 px, 24 px, etc.) based on breakpoints."))),i("div",null,i(n,{class:"margin",columns:12,gap:10,style:{height:240,paddingLeft:10,paddingRight:10}},i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"})),i("div",{class:"description"},i("strong",null,"Margin"),i("p",null,"Grid margins are the outer margins of the grid. They can be the same width as the gutters or greater."))),i("div",null,i("div",{style:{position:"relative"}},i(n,{class:"grid-area-margin",columns:12,gap:10,padding:"0px 10px",style:{height:240,paddingLeft:10,paddingRight:10,boxSizing:"border-box"}},i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"})),i(n,{class:"grid-area",columns:12,rows:5,gap:10,padding:10,style:{position:"absolute",left:0,top:0,right:0,bottom:0}},i("div",{class:"grid-item",style:{gridColumn:"1 / span 7",gridRow:"1 / span 2"}}),i("div",{class:"grid-item",style:{gridColumnStart:7,gridColumn:"span 5",gridRowStart:1,gridRow:"span 1"}}),i("div",{class:"grid-item",style:{gridColumnStart:7,gridColumn:"span 5",gridRowStart:1,gridRow:"span 1"}}),i("div",{class:"grid-item",style:{gridColumnStart:1,gridColumn:"span 4",gridRowStart:3,gridRow:"span 3"}}),i("div",{class:"grid-item",style:{gridColumnStart:1,gridColumn:"span 4",gridRowStart:3,gridRow:"span 3"}}),i("div",{class:"grid-item",style:{gridColumnStart:1,gridColumn:"span 4",gridRowStart:3,gridRow:"span 3"}}))),i("div",{class:"description"},i("strong",null,"Layout"),i("br",null),i("p",null,"Grid areas are used to layout elements in a grid."))))}function p(){return i(n,{columns:[1,1],gap:20,class:"column-view"},i("div",null,i(n,{class:"fluid",columns:12,gap:10,style:{height:240,paddingLeft:10,paddingRight:10}},i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}))),i("div",null,i("div",{class:"description"},i("strong",null,"Fluid"),i("p",null,"The fluid grid is designed for complex screens and web applications as it uses 100% of the screen\u2019s width. The large and high-definition fluid grids allow for maximum use of screen real estate, and is best used for application workflows and UI."))),i("div",null,i("div",{style:{backgroundColor:"var(--color-green-1)"}},i(n,{class:"fixed",columns:12,gap:10,style:{maxWidth:260,height:240,paddingLeft:10,paddingRight:10}},i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"}),i("div",{class:"grid-item"})))),i("div",null,i("div",{class:"description"},i("strong",null,"Fixed"),i("p",null,"The fixed grid has a maximum width and is designed for simple screens and content-specific pages. The width allows for maximum readability of page content in large and high-definition screens."))))}function v(){return i("div",{class:"grid-column-list-view"},i("table",{style:{width:"100%"}},i("thead",null,i("tr",null,i("th",null,"CSS"),i("th",null,"CSS Class"),i("th",null,"SCSS"),i("th",null,"Value"))),i("tbody",null,Object.keys(d.column).map(e=>i("tr",null,i("td",null,i(s,{text:`--column-${e}`})),i("td",null,i(s,{text:`.column-${e}`})),i("td",null,i(s,{text:`$column-${e}`})),i("td",null,i(s,{text:d.column[e]})))))))}function h(){return i("div",{class:"grid-gap-list-view"},i("table",{style:{width:"100%"}},i("thead",null,i("tr",null,i("th",null,"CSS"),i("th",null,"CSS Class"),i("th",null,"SCSS"),i("th",null,"Value"))),i("tbody",null,Object.keys(d.gap).map(e=>i("tr",null,i("td",null,i(s,{text:`--gap-${e}`})),i("td",null,i(s,{text:`.gap-${e}`})),i("td",null,i(s,{text:`$gap-${e}`})),i("td",null,i(s,{text:d.gap[e]})))))))}const x="Spacing",f="DesignLayout",w="pages/design-system/page.mdx";function r(e){const l=Object.assign({h1:"h1",h2:"h2",p:"p"},e.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(l.h1,null,x),`
`,t.createElementJsx(l.h2,null,"8Point Grid"),`
`,t.createElementJsx(u),`
`,t.createElementJsx(l.p,null,"Space is set to 8px by default."),`
`,t.createElementJsx(l.h2,null,"Size Unit"),`
`,t.createElementJsx(o),`
`,t.createElementJsx(l.h2,null,"Grid"),`
`,t.createElementJsx(l.h2,null,"Column"),`
`,t.createElementJsx(l.p,null,"A column can be divided into a total of 12 levels and allows you to position yourself within it."),`
`,t.createElementJsx(v),`
`,t.createElementJsx(l.h2,null,"Column Gap"),`
`,t.createElementJsx(l.p,null,"The gap between columns is defined in 5 ways based on 8px."),`
`,t.createElementJsx(h),`
`,t.createElementJsx(l.h2,null,"Grid Column"),`
`,t.createElementJsx(l.p,null,"The column structure is defined as follows."),`
`,t.createElementJsx(m),`
`,t.createElementJsx(l.h2,null,"Grid Types"),`
`,t.createElementJsx(p))}function b(e={}){const{wrapper:l}=e.components||{};return l?t.createElementJsx(l,e,t.createElementJsx(r,e)):r(e)}c(i(g,{layout:f,filename:w,page:b}));
