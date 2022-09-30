import{c as t,G as n,i as e,j as i,s as l}from"../../../../Version.10c83006.js";import{P as d}from"../../../../PageBoard.7c79461f.js";import"../../../../LayoutManager.fca90247.js";function s(){return t("div",{class:"default-view"},t(n,{columns:[1,1],gap:20},t("div",null,t("strong",null,"Default"),t("div",{style:{padding:10}},"This is the default state of a component or item when not interacted with.")),t("div",null,t("div",{style:{backgroundColor:"var(--color-gray-0)",display:"flex",alignItems:"center",justifyContent:"center",height:150,gap:20}},t("button",{type:"button",style:{backgroundColor:"var(--color-primary)",color:"white",border:0,borderRadius:25,padding:"7px 20px",fontWeight:"900"}},"Action"),t("button",{type:"button",style:{backgroundColor:"var(--color-background-default)",color:"var(--color-text-default)",border:"1px solid var(--color-black)",borderRadius:4,padding:"7px 20px"}},"Action")))))}function c(){return t("div",{class:"hover-view"},t(n,{columns:[1,1],gap:20},t("div",null,t("strong",null,"Hover"),t("div",{style:{padding:10}},"The hover state is initiated by the user and appears when the user places the cursor over the interactive item.")),t("div",null,t("div",{style:{backgroundColor:"var(--color-gray-0)",display:"flex",alignItems:"center",justifyContent:"center",height:150,gap:20}},t("button",{type:"button",style:{backgroundColor:"var(--color-hover-primary)",color:"white",border:0,borderRadius:25,padding:"10px 20px",fontWeight:"900"}},"Action"),t("button",{type:"button",style:{backgroundColor:"var(--color-hover-default)",color:"var(--color-text-default)",border:"1px solid var(--color-black)",borderRadius:4,padding:"10px 20px"}},"Action")))))}function u(){return t("div",{class:"down-view"},t(n,{columns:[1,1],gap:20},t("div",null,t("strong",null,"Down"),t("div",{style:{padding:10}},"A down state is initiated by the user and communicates when an interactive item is pressed (by a cursor, stylus, or finger).")),t("div",null,t("div",{style:{backgroundColor:"var(--color-gray-0)",display:"flex",alignItems:"center",justifyContent:"center",height:150,gap:20}},t("button",{type:"button",style:{backgroundColor:"var(--color-down-primary)",color:"white",border:0,borderRadius:25,padding:"10px 20px",fontWeight:"900"}},"Action"),t("button",{type:"button",style:{backgroundColor:"var(--color-down-default)",color:"var(--color-text-default)",border:"1px solid var(--color-black)",borderRadius:4,padding:"10px 20px"}},"Action")))))}function p(){return t("div",{class:"focus-view"},t(n,{columns:[1,1],gap:20},t("div",null,t("strong",null,"Keyboard Focus"),t("div",{style:{padding:10}},"Keyboard focus# Keyboard focus is initiated by the user and highlights an item when navigated using a keyboard. The keyboard focus state typically takes the component\u2019s visual hover state and adds an additional indication, most commonly a 2 px blue ring around the component.")),t("div",null,t("div",{style:{backgroundColor:"var(--color-gray-0)",display:"flex",alignItems:"center",justifyContent:"center",height:150,gap:20}},t("button",{type:"button",style:{backgroundColor:"var(--color-hover-primary)",color:"white",border:"2px solid var(--color-white)",outline:"2px solid var(--color-hover-primary)",borderRadius:25,boxSizing:"border-box",padding:"7px 20px",fontWeight:"900"}},"Action"),t("button",{type:"button",style:{backgroundColor:"var(--color-background-default)",color:"var(--color-text-default)",border:"0px solid var(--color-black)",outline:"2px solid var(--color-hover-primary)",borderRadius:4,padding:"7px 20px"}},"Action")))))}function b(){return t("div",{class:"disable-view"},t(n,{columns:[1,1],gap:20},t("div",null,t("strong",null,"Disabled"),t("div",{style:{padding:10}},"A disabled state is initiated by a component option. It shows that the item exists, but is not interactive in that circumstance. This state can be used to maintain layout continuity and to communicate that an action may become available later.")),t("div",null,t("div",{style:{backgroundColor:"var(--color-gray-0)",display:"flex",alignItems:"center",justifyContent:"center",height:150,gap:20}},t("button",{type:"button",style:{backgroundColor:"var(--color-disabled)",color:"var(--color-text-disabled)",border:0,borderRadius:25,padding:"8px 20px",fontWeight:"900"}},"Action"),t("button",{type:"button",style:{backgroundColor:"var(--color-disabled)",color:"var(--color-text-disabled)",border:"1px solid transparent",borderRadius:4,padding:"8px 20px"}},"Action")))))}const g="States",v="DesignLayout",y="pages/design/page.mdx";function a(o){const r=Object.assign({h1:"h1",h2:"h2"},o.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(r.h1,null,g),`
`,e.createElementJsx(r.h2,null,"Types of states"),`
`,e.createElementJsx(i,{style:{gap:50}},e.createElementJsx(s),e.createElementJsx(c),e.createElementJsx(u),e.createElementJsx(p),e.createElementJsx(b)))}function h(o={}){const{wrapper:r}=o.components||{};return r?e.createElementJsx(r,o,e.createElementJsx(a,o)):a(o)}l(t(d,{layout:v,filename:y,page:h}));
