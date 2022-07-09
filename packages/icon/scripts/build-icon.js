import { build } from "vite";
import path from "path";
import fs from "fs"

; (async () => {



    const ROOT_DIR = path.resolve("./src/icons/");
    // const files = [];
    
    const files = fs.readdirSync(ROOT_DIR).filter((file) => file !== "index.js").map(it => {
        return { name: `icons/${it.replace(".jsx", "")}` };
    });

    files.push({ name: 'components/SvgIcon' });

    // const input = {}
    const libs = files.filter((_, index) => index < 100);

    libs.forEach((item) => {

        build({
            root: ".",
            esbuild: {
                jsxFactory: "createElementJsx",
                jsxFragment: "FragmentInstance",
                jsxInject: `import { createElementJsx } from "@elf-framework/sapa"`,
            },

            build: {
                emptyOutDir: false,
                // minify: true,
                lib: {
                    entry: `./src/${item.name}.jsx`,
                    name: item.name,
                    formats: ["umd", "esm"],
                    fileName: (format) => {
                        return `${format}/${item.name}.js`
                    },
                },
                rollupOptions: {
                    // input,
                    // make sure to externalize deps that shouldn't be bundled
                    // into your library
                    external: [
                        /components\/SvgIcon/,
                        "@elf-framework/sapa"
                    ],
                    output: {
                        // entryFileNames: '[format]/[name].js',
                        // Provide global variables to use in the UMD build
                        // for externalized deps
                        globals: {
                            "componennts/SvgIcon": "SvgIcon",
                            "@elf-framework/sapa": "sapa",
                        },
                    },
                },
            },
        })
    })


})()
