import{c as e,a2 as c,a3 as n,a0 as d,j as o,G as r,i as l,s as g}from"../../../../../Version.066681bd.js";import{P as p}from"../../../../../PageBoard.fe897f8b.js";import{u as i}from"../../../../../ucwords.97ca09c2.js";import{e as s}from"../../../../../WarningFilled.ce97760e.js";import{U as m}from"../../../../../UIComponentLink.a0fe1d83.js";import"../../../../../LayoutManager.7a2f12cb.js";import"../../../../../SvgIcon.924548c6.js";function v(){return e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,300],position:"relative"}},e("div",{style:{textAlign:"center",width:240}},e(c,{style:{width:300}},e(n,null,e(d,{size:"30"},e("img",{src:"https://avatars.githubusercontent.com/u/591983?s=96&v=4"})),"\xA0 Tag 1"),e(n,null,"Tag 2"),e(n,null,"Tag 2"),e(n,null,"Tag 2"),e(n,null,"Tag 2"),e(n,null,"Tag 2"),e(n,null,"Tag 2"),e(n,null,"Tag 2"),e(n,{removable:!0,onClose:()=>{console.log("close")}},"Tag 3"))))}function y(){return e(r,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,padding:[20,20],justifyContent:"center",alignItems:"center"}},e(n,null,e(d,{size:"30"},e("img",{src:"https://avatars.githubusercontent.com/u/591983?v=4"})),"\xA0 Tag 1"))),e("div",null,e("p",null,e("p",null,"Tags have the option to include an avatar in addition to the label. These should be used to represent entities."))))}function x(){return e(r,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",gap:50,padding:[0,40],justifyContent:"center"}},e("div",{style:{textAlign:"center"}},e(n,{disabled:!0,removable:!0,onClose:()=>{console.log("removed")}},"Traveling")),e("div",{style:{textAlign:"center"}},e(n,{disabled:!0,removable:!0,onClose:()=>{console.log("removed")}},"Products")))),e("div",null,e("p",null,"A tag in a disabled state shows that a tag exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a tag may become available later.")))}function h(){return e(r,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13,height:100}},e("div",{style:{display:"flex",gap:30,padding:[20,40],justifyContent:"center",alignItems:"flex-start",height:200}},e(n,null,"Traveling"))),e("div",null,e("p",null,e("p",null,"Tags should always include a label. These can represent search terms, filters, or keywords."))))}function f(){return e(r,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13,height:100}},e("div",{style:{display:"flex",justifyContent:"space-evenly",padding:[20,40],height:200,gap:20}},e("div",null,e("em",null,"Not removable"),e("div",{style:{marginTop:10}},e(n,null,"Traveling"))),e("div",null,e("em",null,"Removable"),e("div",{style:{marginTop:10}},e(n,{removable:!0,onClose:()=>{console.log("removed")}},"Traveling"))))),e("div",null,e("p",null,e("p",null,"Tags have the option to be removable or not. Removable tags have a small close (\u201Cx\u201D) button."))))}function b(){return e(r,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-2)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:50,padding:[20,40],alignItems:"center"}},e("div",{style:{display:"flex",flexDirection:"column",gap:20}},e("em",null,"Not filled"),e("div",null,["default","primary","danger","success","warning","info","dark"].map(t=>e("div",null,e(n,{variant:t,style:{marginBottom:10},removable:!0,onClose:()=>{console.log("removed")}},e(s,null)," ",i(t)))))),e("div",{style:{display:"flex",flexDirection:"column",gap:20}},e("em",null,"Filled"),e("div",null,["default","primary","danger","success","warning","info","dark"].map(t=>e("div",null,e(n,{variant:t,style:{marginBottom:10},removable:!0,filled:!0,onClose:()=>{console.log("removed")}},e(s,null)," ",i(t)))))))),e("div",null,e("p",null,e("p",null,"A tag can be marked as having an error to show that it has become invalid."),e("p",null,"Variant List",e("ul",null,e("li",null,"primary"),e("li",null,"success"),e("li",null,"warning"),e("li",null,"danger"),e("li",null,"info"),e("li",null,"dark"))))))}function T(){return e(r,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",gap:50,padding:[0,40],justifyContent:"center"}},e("div",{style:{textAlign:"center"}},e(n,{readOnly:!0,removable:!0,onClose:()=>{console.log("removed")}},"Traveling")),e("div",{style:{textAlign:"center"}},e(n,{readOnly:!0,removable:!0,onClose:()=>{console.log("removed")}},"Products")))),e("div",null,e("p",null,"Tags have a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed.")))}const C="Tag",w="DesignLayout",E="pages/design-system/navigations/tag/page.mdx";function u(t){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},t.components);return l.createElementJsx(l.FragmentInstance,null,l.createElementJsx(a.h1,null,C),`
`,l.createElementJsx(a.p,null,"Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request."),`
`,l.createElementJsx(v),`
`,l.createElementJsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:30,padding:"30px 0"}},l.createElementJsx(m,{link:"/pages/ui-component/tag/"})),`
`,l.createElementJsx(a.h2,null,"Options"),`
`,l.createElementJsx(a.h3,null,"Label"),`
`,l.createElementJsx(h),`
`,l.createElementJsx(a.h3,null,"Avatar"),`
`,l.createElementJsx(y),`
`,l.createElementJsx(a.h3,null,"Removable"),`
`,l.createElementJsx(f),`
`,l.createElementJsx(a.h3,null,"Emphasis"),`
`,l.createElementJsx(b),`
`,l.createElementJsx(a.h3,null,"Disabled"),`
`,l.createElementJsx(x),`
`,l.createElementJsx(a.h3,null,"Read Only"),`
`,l.createElementJsx(T))}function J(t={}){const{wrapper:a}=t.components||{};return a?l.createElementJsx(a,t,l.createElementJsx(u,t)):u(t)}g(e(p,{layout:w,filename:E,page:J}));
