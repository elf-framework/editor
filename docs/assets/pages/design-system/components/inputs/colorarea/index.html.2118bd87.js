import{c as e,J as o,j as i,G as a,E as s,i as t,s as d}from"../../../../../Version.833375e0.js";import{P as c}from"../../../../../PageBoard.7638f95d.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";function u(){return e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,200],position:"relative"}},e("div",{style:{textAlign:"center"}},e(o,{color:"red",shadow:!0})))}function p(){return e(a,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{textAlign:"center"}},e("div",null,e("em",null,"Hide slide")),e(o,{color:"red",hideSlide:!0}),e("div",null,"\xA0"),e("div",null,e("em",null,"Hide inputs")),e(o,{color:"red",hideInput:!0}))),e("div",null,e("p",null,"A popover\u2019s width and height can be customized appropriately for its context.")))}function m(){return e(a,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,80],fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",gap:30}},e("div",null,e("em",null,"240 x 240"),e(o,{color:"red",hideSlide:!0,hideInput:!0})),e("div",null,e("div",null,e("em",null,"192 x 192")),e(o,{color:"red",hideSlide:!0,hideInput:!0,width:192,height:192})))),e("div",null,e("p",null,"A color area\u2019s width can be customized appropriately for its context. By default, the width is size-2400 (192 px on desktop and 240 px on mobile)."),e("p",null,"A color area\u2019s height can be customized appropriately for its context. By default, the height is size-2400 (192 px on desktop and 240 px on mobile).")))}function h(){return e(a,{columns:["50%",1],gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e(a,{columns:1,style:{padding:[0,50]}},e("div",{style:{display:"flex",flexDirection:"column",padding:20}},e("div",null,"\xA0"),e(o,{color:"red",disabled:!0,hideSlide:!0,hideInput:!0,width:192,height:192})))),e("div",null,e("p",null,"A color area in a disabled state shows that an input exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that the area may become available later.")))}function x(){return e(a,{columns:2,gap:30},e(i,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e(a,{columns:1,style:{padding:[0,100]}},e("div",{style:{display:"flex",flexDirection:"column",padding:20}},e("div",null,"\xA0"),e(s,{direction:"vertical",value:[10],variant:"danger",options:[{value:10,label:"Travel"},{value:20,label:"Music"},{value:30,label:"Shopping"}],onChange:(l,n)=>console.log(n)})))),e("div",null,e("p",null,"Checkboxes can be marked as having an error to show that a selection needs to be made in order to move forward, or that a selection that was made is invalid. For example, in a form that requires a user to acknowledge legal terms before proceeding, the checkbox would show an unchecked error to communicate that it needs to be selected.")))}const g="Color area",v="DesignLayout",y="pages/design-system/inputs/radio/page.mdx";function r(l){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},l.components);return t.createElementJsx(t.FragmentInstance,null,t.createElementJsx(n.h1,null,g),`
`,t.createElementJsx(n.p,null,"A color area allows users to visually select two properties of a color simultaneously. It's commonly used together with a color slider or color wheel."),`
`,t.createElementJsx(u),`
`,t.createElementJsx(n.h2,null,"Options"),`
`,t.createElementJsx(n.h3,null,"Label"),`
`,t.createElementJsx(n.h3,null,"Hide slide, inputs"),`
`,t.createElementJsx(p),`
`,t.createElementJsx(n.h3,null,"Size"),`
`,t.createElementJsx(m),`
`,t.createElementJsx(n.h3,null,"Emphasis"),`
`,t.createElementJsx(n.h3,null,"Disabled"),`
`,t.createElementJsx(h),`
`,t.createElementJsx(n.h3,null,"Error"),`
`,t.createElementJsx(x))}function b(l={}){const{wrapper:n}=l.components||{};return n?t.createElementJsx(n,l,t.createElementJsx(r,l)):r(l)}d(e(c,{layout:v,filename:y,page:b}));
