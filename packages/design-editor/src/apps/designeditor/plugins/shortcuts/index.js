import shortcuts from "elf/editor/shortcuts";

/**
 * 키보드 shortcut 등록하기
 *
 * @param {Editor} editor
 */
export default function (editor) {
  shortcuts.forEach((shortcut) => {
    editor.registerShortCut(shortcut);
  });
}
