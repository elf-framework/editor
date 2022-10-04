import{i as e,s as a,c as l}from"../../../Version.833375e0.js";import{P as i}from"../../../PageBoard.7638f95d.js";import{D as s}from"../../../Diagram.c2f13d67.js";import"../../../LayoutManager.3c16e74c.js";const o="MainLayout",c="pages/introduction/core/page.mdx";function r(n){const t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a"},n.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(t.h1,null,"Core Concept"),`
`,e.createElementJsx(t.p,null,e.createElementJsx(t.code,null,"ELF")," is a framework designed to easily create editors. ",e.createElementJsx(t.code,null,"ELF")," was created with the hope that various technologies could be flexibly combined."),`
`,e.createElementJsx(t.p,null,"The goal is to provide a structure that can be easily implemented when creating a large-scale application."),`
`,e.createElementJsx(t.p,null,"So, we plan to combine all of the various technologies below."),`
`,e.createElementJsx(t.ul,null,`
`,e.createElementJsx(t.li,null,"Design Tokens: Color, Size, Font, etc"),`
`,e.createElementJsx(t.li,null,"Design System: Typography, Grid, Space, Color Status, etc"),`
`,e.createElementJsx(t.li,null,"Sapa : frontend library like React"),`
`,e.createElementJsx(t.li,null,"UI : Design System and Sapa"),`
`,e.createElementJsx(t.li,null,"Icon : icons for Sapa"),`
`,e.createElementJsx(t.li,null,"Router : Sapa client router"),`
`,e.createElementJsx(t.li,null,"MDX : Markdown for Sapa"),`
`,e.createElementJsx(t.li,null,"MPA : Multple page application for sapa"),`
`,e.createElementJsx(t.li,null,"vite-plugin-sapa : Sapa Hot Module Reload"),`
`,e.createElementJsx(t.li,null,"BaseEditor : base editor library for sapa"),`
`,e.createElementJsx(t.li,null,"EditorContext:  editor store"),`
`,e.createElementJsx(t.li,null,"Register System :  Editor item register system"),`
`,e.createElementJsx(t.li,null,"I18n : Internalization"),`
`,e.createElementJsx(t.li,null,"Shortcut : Keyboard Event Manager"),`
`,e.createElementJsx(t.li,null,"Config : Editor config"),`
`),`
`,e.createElementJsx(t.h1,null,"Architecture"),`
`,e.createElementJsx(s,{graph:`
flowchart TD;
  subgraph sapa
    DesignTokens-->DesignSystem;
    DesignSystem-->UI
    Sapa-->UI & Icon & Router
  end
  subgraph "vite bundler"
    Sapa-->vite-plugin-sapa & MDX & MPA
    Vite-->vite-plugin-sapa & MDX & MPA
    Vite-->Sapa
  end
  subgraph Editor
    UI & Icon &  Router & MDX & MPA --> BaseEditor
    vite-plugin-sapa--HMR-->BaseEditor
    BaseEditor-->EditorContext
  end
  subgraph Manager    
    EditorContext--RegisterSystem-->Manager
    Manager-->Config & Command & UISystem & Plugin & Shortcut & I18n & Inspector
  end
  subgraph System
    Plugin-->registerPlugin
    registerPlugin-->registerConfig & registerCommand & registerUI & registerShortcut & registerI18n & registerInspector
  end
    registerConfig & registerCommand & registerUI & registerShortcut & registerI18n & registerInspector-->YourEditor
`}),`
`,e.createElementJsx(t.h1,null,"Getting started"),`
`,e.createElementJsx(t.p,null,"Let's go try the ",e.createElementJsx(t.code,null,"ELF")," framework. ",e.createElementJsx(t.a,{href:"/pages/introduction/getting-started/"},"Here")))}function u(n={}){const{wrapper:t}=n.components||{};return t?e.createElementJsx(t,n,e.createElementJsx(r,n)):r(n)}a(l(i,{layout:o,filename:c,page:u}));
