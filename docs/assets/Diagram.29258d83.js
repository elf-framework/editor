import{X as u,u as f,al as d,c as h}from"./Version.10c83006.js";const E="modulepreload",_=function(s){return"/"+s},a={},v=function(i,t,o){return!t||t.length===0?i():Promise.all(t.map(e=>{if(e=_(e),e in a)return;a[e]=!0;const n=e.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":E,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((c,m)=>{r.addEventListener("load",c),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())};function P({diagram:s,graph:i}){const[t,o]=u("");return f(()=>{(async()=>{const e=(await v(()=>import("./mermaid.esm.min.aa1e5077.js"),[])).default;e.mermaidAPI.initialize({securityLevel:"loose",theme:"base",themeVariables:{fontFamily:"pretend",fontSize:"20px"}}),t||e.mermaidAPI.render("id1",i||s,n=>{o(d(n))})})()},[t,s]),h("div",null,t)}export{P as D};
