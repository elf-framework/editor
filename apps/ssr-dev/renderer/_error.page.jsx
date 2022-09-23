import { escapeInject } from "vite-plugin-ssr";

export { render };

async function render(pageContext) {
  const { is404 } = pageContext;

  return escapeInject`
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Error</title>
</head>
<body>
    <h1>Error</h1>
    <p>${is404 ? "404" : ""}</p>
</body>
</html>
    `;
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
