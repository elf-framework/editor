import ComponentPopup from "elf/editor/ui/popup/ComponentPopup"
import ComponentProperty from "elf/editor/ui/property/ComponentProperty"

/**
 *
 * @param {Editor} editor
 */
export default function (editor) {

  editor.registerElement({
    ComponentPopup,
    ComponentProperty
  })
}
