import{i as e,s as o,c as r}from"../../../Version.10c83006.js";import{P as s}from"../../../PageBoard.7c79461f.js";import{D as c}from"../../../Diagram.29258d83.js";import"../../../LayoutManager.fca90247.js";const l="Life Cycle",m="SapaLayout",i="pages/sapa/lifecycle/page.mdx";function a(t){const n=Object.assign({h1:"h1",p:"p"},t.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(n.h1,null,l),`
`,e.createElementJsx(n.p,null,"Sapa has a basic lifecycle. This works depending on how you render the DOM."),`
`,e.createElementJsx(c,{graph:`
flowchart TD;
  A["Start(VNode, UIElement, Function)"] --> I[initialize property]
  I --> D[render]
  D --> Template[Create template]
  Template --> G[Has a $el in Component ?]
  G --NO--> Mounted
  G --YES--> Updated  
  Mounted -- onMounted --> Z[Rendering Done]
  Updated -- onUpdated --> Z
  Z -- onDestroyed --> Destroyed[DOM removed]
`}))}function p(t={}){const{wrapper:n}=t.components||{};return n?e.createElementJsx(n,t,e.createElementJsx(a,t)):a(t)}o(r(s,{layout:m,filename:i,page:p}));
