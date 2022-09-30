export const iKnowThePerformanceRisksOfAsyncRouteFunctions = true;

// route 는 page 와 쌍으로 움직인다.
// route 의 우선순위에 따라 보여주는 페이지가 다르다.
// item.page.jsx
// item.page.route.js -> route 에 따라서 page가 달라진다.

export default (pageContext) => {
  const { urlOriginal: url } = pageContext;

  if (!url.startsWith("/product/")) {
    return false;
  }

  const arr = url.split("/product/")[1]?.split("/edit");

  if (arr.length < 2) {
    return false;
  }

  const productId = arr[0];

  // Only URLs like `/product/[0-9]+/edit`
  if (!productId) {
    return false;
  }

  // // Route Functions enable Route Guards.
  // // `pageContext.user` is defined in the server middleware, see https://vite-plugin-ssr.com/auth
  // if (!pageContext.user?.isAdmin) {
  //   return false;
  // }

  // Only if there is a product matching `productId`
  // const productId = url.split("/")[2];
  const product = "ffdsafdsfsdf";
  if (!product) {
    return false;
  }

  return {
    // We make `product` available as `pageContext.routeParams.product` so we can
    // access it anywhere, see https://vite-plugin-ssr.com/pageContext-anywhere
    routeParams: {
      product,
    },
  };
};
