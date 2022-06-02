

import { createBlankEditor } from "@elf/editor";
import "@elf/editor/style.css";

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
                }
            ])
        },
    ],
});
