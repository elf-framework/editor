

import { createBlankEditor, iconUse } from "@elf-framework/editor";
import "@elf-framework/editor/style.css";

window.elfEditor = createBlankEditor({
    container: document.getElementById('app'),
    config: {
        "editor.theme": "light",
        // 'editor.layout.mode': 'svg',
        // 'show.left.panel': false,
        // 'show.right.panel': false,
        // 'show.ruler': false,
    },
    plugins: [
        function (editor) {
            editor.registerMenu("toolbar.left", [
                {
                    type: "button",
                    title: "yellow",
                    action: () => {
                        console.log("aaaa");
                    }
                },
                {
                    type: "button",
                    title: "yellow",
                    action: () => {
                        console.log("aaaa");
                    }
                },
                {
                    type: "button",
                    title: "yellow",
                    action: () => {
                        console.log("aaaa");
                    }
                },
                {
                    type: "button",
                    title: "yellow",
                    action: () => {
                        console.log("aaaa");
                    }
                },
                {
                    type: "button",
                    title: "yellow",
                    action: () => {
                        console.log("aaaa");
                    }
                }                                                                
            ])

            editor.registerUI("layertab.tab", {
                Layer: {
                  title: editor.$i18n("app.tab.title.layers"),
                  icon: iconUse("layers"),
                  value: "layer",
                },
                Library: {
                  title: editor.$i18n("app.tab.title.libraries"),
                  icon: iconUse("auto_awesome"),
                  value: "library",
                },
                Asset: {
                  title: editor.$i18n("app.tab.title.assets"),
                  icon: iconUse("apps"),
                  value: "asset",
                },
                Component: {
                  title: editor.$i18n("app.tab.title.components"),
                  icon: iconUse("plugin"),
                  value: "component",
                },
            });
        },
    ],
});
