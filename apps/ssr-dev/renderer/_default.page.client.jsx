import { hydrate, start } from "@elf-framework/sapa";

export { render };

async function render(pageContext) {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const { Page, pageProps, routeParams } = pageContext;
  const content = (
    <Page {...pageProps} routeParams={routeParams} pageContext={pageContext} />
  );

  if (pageContext.isHydration) {
    hydrate(content, {
      container: document.getElementById("page-view"),
      routeParams,
      pageContext,
    });
  } else {
    start(content, {
      container: document.getElementById("page-view"),
      pageContext,
      routeParams,
    });
  }
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
