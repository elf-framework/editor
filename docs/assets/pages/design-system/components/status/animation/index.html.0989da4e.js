import{c as e,ac as s,a7 as r,j as o,G as t,i as a,s as u}from"../../../../../Version.833375e0.js";import{P as c}from"../../../../../PageBoard.7638f95d.js";/* empty css                                   */import"../../../../../LayoutManager.3c16e74c.js";function p(){return e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:[60,100],position:"relative"}},e("div",{style:{display:"flex",gap:10}},e("div",{style:{display:"flex",flexWrap:"wrap",gap:50,alignItems:"center",textAlign:"center"}},["spin","ping","fade","scaledown","bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","heartBeat"].map(n=>{const l=s[n];return e("div",null,e(l,{duration:"2s",play:!0},e(r,{size:"large",variant:"primary",value:30})),e("div",null,n))}))))}function m(){return e(t,{columns:["50%",1],gap:30},e(o,{style:{gap:30,backgroundColor:"var(--color-gray-0)",padding:"30px 20px",fontSize:13}},e("div",{style:{textAlign:"center"}},e(t,{columns:4,gap:20},["spin","ping","fade","scaledown","bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","heartBeat"].map(n=>{const l=s[n];return e("div",null,e(l,{duration:"2s"},e(r,{size:"large",variant:"primary",value:30})),e("div",null,n))})))),e("div",null,e("p",null,e("p",null,"Supports small animation. If you use Animation well, you can convey information more effectively.",e("ul",null,e("li",null,"spin"),e("li",null,"ping"),e("li",null,"fade"),e("li",null,"scaledown"),e("li",null,"bounce"),e("li",null,"flash"),e("li",null,"pulse"),e("li",null,"rubberBand"),e("li",null,"shake"),e("li",null,"headShake"),e("li",null,"swing"),e("li",null,"tada"),e("li",null,"wobble"),e("li",null,"jello"),e("li",null,"heartBeat"))))))}const d="Animation",g="DesignLayout",h="pages/design-system/status/animation/page.mdx";function i(n){const l=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},n.components);return a.createElementJsx(a.FragmentInstance,null,a.createElementJsx(l.h1,null,d),`
`,a.createElementJsx(l.p,null,"Supports small animations."),`
`,a.createElementJsx(p),`
`,a.createElementJsx(l.h2,null,"Options"),`
`,a.createElementJsx(l.h3,null,"animation"),`
`,a.createElementJsx(m))}function f(n={}){const{wrapper:l}=n.components||{};return l?a.createElementJsx(l,n,a.createElementJsx(i,n)):i(n)}u(e(c,{layout:g,filename:h,page:f}));
