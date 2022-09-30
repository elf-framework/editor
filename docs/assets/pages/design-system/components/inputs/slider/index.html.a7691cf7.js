import{W as u,X as p,c as e,Y as t,j as o,G as s,i as a,s as m}from"../../../../../Version.066681bd.js";import{P as x}from"../../../../../PageBoard.fe897f8b.js";import{U as f}from"../../../../../UIComponentLink.a0fe1d83.js";import"../../../../../LayoutManager.7a2f12cb.js";import"../../../../../SvgIcon.924548c6.js";function g(){const[l,n]=u(0),r=p(i=>{n(i)},[n]);return e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,200],position:"relative",alignItems:"center"}},e("div",{style:{display:"flex",flexDirection:"column",gap:30,fontSize:20}},e(t,{min:0,max:1e4,step:20,value:l,onInput:r,valuePlacement:"top",label:"Contrast",valueFunc:i=>new Intl.NumberFormat().format(i)}),e(t,{min:0,max:1e4,step:20,value:l,onInput:r,valuePlacement:"top",showValue:!0,valueFunc:i=>new Intl.NumberFormat().format(i)}),e(t,{min:0,max:1e4,step:20,value:l,onInput:r,showValue:!0,valueFunc:i=>new Intl.NumberFormat().format(i)}),e(t,{min:0,max:1e4,step:20,value:l,onInput:r,valuePlacement:"bottom",showValue:!0,valueFunc:i=>new Intl.NumberFormat().format(i)})))}function v(){const[l,n]=u(0);return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20}},e(t,{label:"Contrast",value:l,max:1e4,step:20,onInput:r=>n(r)}))),e("div",null,e("p",null,"Sliders should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These sliders should still include an aria-label in HTML (depending on the context, \u201Caria-label\u201D or \u201Caria-labelledby\u201D).")))}function h(){const[l,n]=u(0),[r,i]=u(0);return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20,gap:50}},e(t,{label:"Contrast",value:l,fill:!0,min:-5,max:5,step:.01,onInput:c=>n(c)}),e(t,{label:"Contrast",labelPosition:"side",value:r,max:1e4,step:20,onInput:c=>i(c)}))),e("div",null,e("p",null,"Labels can be placed either on top or on the side. Top labels are the default and are recommended because they work better with long copy, localization, and responsive layouts. Side labels are most useful when vertical space is limited.")))}function b(){return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20,gap:50}},e("div",null,e("div",{style:{display:"flex",flexDirection:"column"}},e("strong",null,"Example: Opacity"),e("label",null,"Value: 40"),e("label",null,"Min value: 0"),e("label",null,"Max value: 100"),e("label",null,"Step: 1")),e(t,{label:"Opacity",value:40,fill:!0,min:0,max:100,step:1,valueFunc:l=>`${l}%`})),e("div",null,e("div",{style:{display:"flex",flexDirection:"column"}},e("strong",null,"Example: Contrast"),e("label",null,"Value: 40"),e("label",null,"Min value: 0"),e("label",null,"Max value: 100"),e("label",null,"Step: 1")),e(t,{label:"Contrast",value:40,fill:!0,min:0,max:100,step:1,valueFunc:l=>`${l}%`})))),e("div",null,e("p",null,"The value is the number selected within the slider\u2019s range, from the min value to max value."),e("p",null,"The min and max values can also be customized appropriately for whatever the slider is showing. By default, the min value starts at 0 and the max value is set to 100."),e("p",null,"The step is the increment by which these values increase or decrease. A step value of 1 (the default) lets a user only select whole numbers within the min and max range.")))}function y(){return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20,gap:50}},e(t,{label:"Opacity",value:40,min:0,max:100,step:1,valueFunc:l=>`${l}%`}),e(t,{label:"Exposure",value:1.83,fill:!0,min:-5,max:5,step:.01,valueFunc:l=>`${l<0?"-":"+"} ${l}%`}),e(t,{label:"Expense",value:20,fill:!0,min:0,max:100,step:1,valueFunc:l=>`$${l}`}))),e("div",null,e("p",null,"Sometimes a value needs to be formatted for localization or for clearer communication (e.g., currencies or percentages). Formatting can involve rounding, mathematical transformations, number formatting, or displaying a prefix or suffix (e.g., \u201C+/-\u201D or \u201Cpx\u201D).")))}function w(){return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,40],fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",gap:30}},e(t,{label:"Opacity",fill:!0,value:40,min:0,max:100,step:1,valueFunc:l=>`${l}%`}))),e("div",null,e("p",null,"The track of the slider can have a fill. By default, the fill originates from the left side of the track.")))}function E(){return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20,gap:50}},e(t,{label:"Exposure",value:1.83,fill:!0,fillOffset:0,min:-5,max:5,step:.01,valueFunc:l=>`${l<0?"-":"+"} ${l}%`}))),e("div",null,e("p",null,"If the value represents an offset, the fill start can be set to represent the point of origin. This allows the slider fill to start from inside the track.")))}function J(){return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20}},e(t,{disabled:!0,label:"Exposure",value:1.83,fill:!0,min:-5,max:5,step:.01,valueFunc:l=>`${l<0?"-":"+"} ${l}%`}))),e("div",null,e("p",null,"A Switch in a disabled state shows that a selection exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.")))}function C(){return e(s,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e("div",{style:{display:"flex",flexDirection:"column",padding:20}},e(t,{label:"Opacity",value:40,min:0,max:100,step:1,valueFunc:l=>`${l}%`,style:{backgroundImage:"linear-gradient(to right, #fff, #f00)"}}))),e("div",null,e("p",null,"A gradient can be added to the track of any slider to give more meaning to the range of values. Tracks with a gradient can also have a fill. A gradient track should not be used for choosing a precise color; use a color slider, color area, or color wheel instead.")))}const F="Slider",V="DesignLayout",k="pages/design-system/inputs/slider/page.mdx";function d(l){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},l.components);return a.createElementJsx(a.FragmentInstance,null,a.createElementJsx(n.h1,null,F),`
`,a.createElementJsx(n.p,null,"Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."),`
`,a.createElementJsx(g),`
`,a.createElementJsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:30,padding:"30px 0"}},a.createElementJsx(f,{link:"/pages/ui-component/slider/"})),`
`,a.createElementJsx(n.h2,null,"Options"),`
`,a.createElementJsx(n.h3,null,"Label"),`
`,a.createElementJsx(v),`
`,a.createElementJsx(n.h3,null,"Label Position"),`
`,a.createElementJsx(h),`
`,a.createElementJsx(n.h3,null,"Value, min value, max value and step"),`
`,a.createElementJsx(b),`
`,a.createElementJsx(n.h3,null,"Value format"),`
`,a.createElementJsx(y),`
`,a.createElementJsx(n.h3,null,"Fill"),`
`,a.createElementJsx(w),`
`,a.createElementJsx(n.h3,null,"Fill start"),`
`,a.createElementJsx(E),`
`,a.createElementJsx(n.h3,null,"Gradient"),`
`,a.createElementJsx(C),`
`,a.createElementJsx(n.h3,null,"Disabled"),`
`,a.createElementJsx(J))}function D(l={}){const{wrapper:n}=l.components||{};return n?a.createElementJsx(n,l,a.createElementJsx(d,l)):d(l)}m(e(x,{layout:V,filename:k,page:D}));
