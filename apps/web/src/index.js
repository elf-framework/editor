import { createDesignEditor } from "@elf-framework/design-editor";

import "@elf-framework/design-editor/style.css";

window.elfEditor = createDesignEditor({
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
                }
            ])
        },
    ],
});
