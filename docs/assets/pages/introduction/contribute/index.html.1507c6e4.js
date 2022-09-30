import{i as e,s as l,c as s}from"../../../Version.066681bd.js";import{P as c}from"../../../PageBoard.fe897f8b.js";import"../../../LayoutManager.7a2f12cb.js";const o="Contribute",r="MainLayout",m="pages/introduction/contribute/page.mdx";function a(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},t.components);return e.createElementJsx(e.FragmentInstance,null,e.createElementJsx(n.h1,null,o),`
`,e.createElementJsx(n.h2,null,"update ChangeLog"),`
`,e.createElementJsx(n.p,null,"Use changeset to manage changelog. See ",e.createElementJsx(n.a,{href:"https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md"},"here")," for more details."),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token comment"},"# udpate change log"),`
`),e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"npm"),` run changeset
`))),`
`,e.createElementJsx(n.ul,null,`
`,e.createElementJsx(n.li,null,"Select multiple projects to be changed after executing changeset."),`
`,e.createElementJsx(n.li,null,"Then, insert comments for major, minor, and patch."),`
`),`
`,e.createElementJsx(n.h2,null,"update version"),`
`,e.createElementJsx(n.p,null,"Updates the version of package.json for the project in which the changelog is updated."),`
`,e.createElementJsx(n.pre,{className:"language-shell language-shell"},e.createElementJsx(n.code,{className:"language-shell code-highlight"},e.createElementJsx(n.span,{className:"code-line"},e.createElementJsx(n.span,{className:"token function"},"npm"),` run version-packages 
`))),`
`,e.createElementJsx(n.h2,null,"Release packages"),`
`,e.createElementJsx(n.p,null,"Ask to maintainer(",e.createElementJsx(n.a,{href:"mailto:cyberuls@gmail.com"},"easylogic"),", ",e.createElementJsx(n.a,{href:"https://github.com/elf-framework"},"github"),")."))}function i(t={}){const{wrapper:n}=t.components||{};return n?e.createElementJsx(n,t,e.createElementJsx(a,t)):a(t)}l(s(c,{layout:r,filename:m,page:i}));
