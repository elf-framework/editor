import {
  classnames,
  DEBOUNCE,
  IF,
  KEYDOWN,
  KEYUP,
  RESIZE,
  SUBSCRIBE,
  SUBSCRIBE_SELF,
  useEffect,
  useGetStoreValue,
  useMemo,
  useRef,
} from "@elf-framework/sapa";

import { Loading } from "../status/Loading";
import { Editor, useEditor } from "./Editor";
const formElements = ["TEXTAREA", "INPUT", "SELECT"];
export class BaseEditor extends Editor {
  template() {
    const {
      class: className = "",
      fullScreen,
      loading = <Loading />,
    } = this.props;
    const editorRef = useRef(0);
    const editor = useEditor();
    const isPluginActivated = useGetStoreValue("editor.plugin.activated");

    editorRef.current++;

    const localClass = useMemo(() => {
      return classnames(
        "elf--base-editor",
        {
          "full-screen": fullScreen,
        },
        className
      );
    }, [className, fullScreen]);

    useEffect(() => {
      this.load();
    }, []);

    return (
      <div class={localClass}>
        {isPluginActivated() ? editor.getUIList("renderView") : loading}
      </div>
    );
  }

  isNotFormElement(e) {
    var tagName = e.target.tagName;

    if (formElements.includes(tagName)) return false;
    else if (e.target.getAttribute("contenteditable") === "true") return false;

    return true;
  }

  updateTheme() {
    const isDark =
      this.$editor.configs.get("editor.theme") === "light" ? false : true;
    document.body.classList.toggle("theme-dark", isDark);
  }

  [SUBSCRIBE_SELF("editor.plugin.activated")]() {
    this.updateTheme();
  }

  [SUBSCRIBE("config:editor.theme")]() {
    this.updateTheme();
  }

  [KEYDOWN("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keydown", e);
  }

  [KEYUP("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keyup", e);
  }

  [RESIZE("window") + DEBOUNCE(10)]() {
    this.$editor.emit("resize.window");
  }
}
