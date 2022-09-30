import{c as e,$ as t,Q as s,j as o,G as n,W as d,i as l,s as m}from"../../../../../Version.066681bd.js";import{P as x}from"../../../../../PageBoard.02ebaf31.js";import{i as f}from"../../../../../CheckFilled.7afbdea1.js";import{n as g}from"../../../../../WarningOutlined.a30dc5cc.js";import{U as h}from"../../../../../UIComponentLink.b4445ed4.js";import"../../../../../LayoutManager.7778c99f.js";import"../../../../../SvgIcon.924548c6.js";/* empty css                                   */function y(){return e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,300],position:"relative"}},e("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",gap:30,width:240}},e(t,{label:"Email address",value:"xxx@elf-framework.com"}),e(t,{type:"password",label:"Password",value:"password"}),e(t,{label:"Title",optional:!0,help:e(s,null,"Designer, lawyer, etc")})))}function v(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},e(t,{label:"Email address",value:"xxx@elf-framework.com"}))),e("div",null,e("p",null,e("p",null,"Text fields should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. These text fields without a visible label should still include an aria-label in HTML (depending on the context, \u201Caria-label\u201D or \u201Caria-labelledby\u201D)."))))}function b(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},e("div",{style:{display:"flex",flexDirection:"column",gap:10}},e(t,{label:"Email address",value:"xxx@elf-framework.com"}),e(t,{type:"password",label:"Password",value:"password"})),e("div",{style:{display:"flex",gap:10,flexDirection:"column"}},e(t,{type:"number",position:"horizontal",label:"Columns",value:12}),e(t,{type:"number",position:"horizontal",label:"Gutter width",value:30}),e(t,{type:"number",position:"horizontal",label:"Column width",value:100})))),e("div",null,e("p",null,e("p",null,"Labels can be placed either on top or on the side. Top labels are the default and are recommended because they work better with long copy, localization, and responsive layouts. Side labels are most useful when vertical space is limited."))))}function w(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},e("div",{style:{display:"flex",flexDirection:"column",gap:10}},e(t,{label:"Email address",value:"xxx@elf-framework.com"})))),e("div",null,e("p",null,e("p",null,"The value shows a user\u2019s entered text."))))}function E(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},e("div",{style:{display:"flex",flexDirection:"column",gap:10}},e(t,{label:"Email address",value:"xxx@elf-framework.com"}),e(t,{label:"Email address",value:"xxx@elf-framework.com",inputStyle:{width:240}})))),e("div",null,e("p",null,e("p",null,"The width of a text field can be customized appropriately for its context."))))}function k(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},["small","medium","large","extra-large"].map(i=>e("div",{style:{display:"flex"}},e("div",{style:{flex:"none",width:100}},e("em",null,i)),e(t,{label:"Email address",size:i,required:!0,value:"xxx@elf-framework.com"}))))),e("div",null,e("p",null,e("p",null,"Text fields come in four different sizes: small, medium, large, and extra-large. The medium size is the default and most frequently used option. Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page."))))}function J(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{display:"flex",gap:30,flexDirection:"column",padding:[20,40],alignItems:"center"}},e("div",{style:{display:"flex",flexDirection:"column",gap:30}},e(t,{label:"Email address",optional:!0,value:"xxx@elf-framework.com"}),e(t,{label:"Email address",requiredText:"(required)",required:!0,value:"xxx@elf-framework.com"}),e(t,{label:"Email address",required:!0,value:"xxx@elf-framework.com"})))),e("div",null,e("p",null,e("p",null,"Text fields can be marked as optional or required, depending on the situation. For required text fields, there are two styling options: a \u201C(required)\u201D label or an asterisk. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional text fields are either denoted with text added to the end of the label \u2014 \u201C(optional)\u201D \u2014 or have no indication at all."),e("p",null,"The asterisk used in this component is an icon that has specific spacing from the label text \u2014 not part of the label text itself."))))}function D(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e(n,{columns:1,style:{padding:[0,10]}},e("div",{style:{display:"flex",flexDirection:"column",padding:20,alignItems:"center"}},e(t,{label:"Disabled",disabled:!0,value:"xxx@elf-framework.com"})))),e("div",null,e("p",null,"A text field in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.")))}function T(){return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 20px",fontSize:13}},e(n,{columns:1,style:{padding:[0,10]}},e("div",{style:{display:"flex",flexDirection:"column",padding:20,alignItems:"center"}},e(t,{label:"Read only",readOnly:!0,value:"xxx@elf-framework.com"})))),e("div",null,e("p",null,"Text fields have a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed. A text field does not have a read-only option if there is nothing entered in it.")))}function C(){const[i,a]=d(!1),[c,p]=d(!1);return e(n,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"60px 0px",fontSize:13}},e(n,{columns:1,style:{padding:[0,10]}},e("div",{style:{display:"flex",flexDirection:"column",padding:0,alignItems:"center",gap:30}},e(t,{label:"Password",type:"password",placeholder:"Enter your password",value:"xxx@elf-framework.com",style:{width:240},help:e(s,null,"Password must be at least 8 characters.")}),e(t,{label:"Email address",value:"xxx@elf-framework.com",style:{width:240},invalid:i,validIcon:c?e(f,null):void 0,invalidIcon:e(g,null),invalidMessage:e(s,{variant:"danger"},"Invalid email address"),onInput:r=>{a(r.target.value===""||r.target.value.length<10),r.target.value.length>15&&p(!0)}})))),e("div",null,e("p",null,"A text field can have help text below the field to give extra context or instruction about what a user should input in the field. The help text area has two options: a description and an error message. The description communicates a hint or helpful information, such as specific requirements for correctly filling out the field. The error message communicates an error for when the field requirements aren\u2019t met, prompting a user to adjust what they had originally input.")))}const I="Text Field",z="DesignLayout",V="pages/design-system/inputs/textfield/page.mdx";function u(i){const a=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},i.components);return l.createElementJsx(l.FragmentInstance,null,l.createElementJsx(a.h1,null,I),`
`,l.createElementJsx(a.p,null,"Help text provides either an informative description or an error message that gives more context about what a user needs to input. It\u2019s commonly used in forms."),`
`,l.createElementJsx(y),`
`,l.createElementJsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:30,padding:"30px 0"}},l.createElementJsx(h,{link:"/pages/ui-component/textfield/"})),`
`,l.createElementJsx(a.h2,null,"Options"),`
`,l.createElementJsx(a.h3,null,"Label"),`
`,l.createElementJsx(v),`
`,l.createElementJsx(a.h3,null,"Label position"),`
`,l.createElementJsx(b),`
`,l.createElementJsx(a.h3,null,"Value"),`
`,l.createElementJsx(w),`
`,l.createElementJsx(a.h3,null,"Width"),`
`,l.createElementJsx(E),`
`,l.createElementJsx(a.h3,null,"Size"),`
`,l.createElementJsx(k),`
`,l.createElementJsx(a.h3,null,"Required or Optional"),`
`,l.createElementJsx(J),`
`,l.createElementJsx(a.h3,null,"Disabled"),`
`,l.createElementJsx(D),`
`,l.createElementJsx(a.h3,null,"Read only"),`
`,l.createElementJsx(T),`
`,l.createElementJsx(a.h3,null,"Help text(description and error message)"),`
`,l.createElementJsx(C))}function S(i={}){const{wrapper:a}=i.components||{};return a?l.createElementJsx(a,i,l.createElementJsx(u,i)):u(i)}m(e(x,{layout:z,filename:V,page:S}));
