import {
  classnames,
  DEBOUNCE,
  IF,
  KEYDOWN,
  KEYUP,
  RESIZE,
  SUBSCRIBE,
  SUBSCRIBE_SELF,
  UIElement,
  useEffect,
  useMemo,
  useRef,
  useRender,
} from "@elf-framework/sapa";

import { EditorContext } from "../../managers/EditorContext";
import { Loading } from "../status/Loading";
import { useEditor } from "./Editor";
const formElements = ["TEXTAREA", "INPUT", "SELECT"];
const KEY_EDITOR = "editor";
const KEY_EDITOR_OPTION = "editorOption";

export class BaseEditor extends UIElement {
  // initialize() {
  //   super.initialize();

  //   console.log("editor initialize");

  //   if (!this.$editor) {
  //     this.$editor = new EditorContext(this, this.props);
  //   }

  //   this.$store.set(KEY_EDITOR, this.$editor);
  //   this.$store.set(KEY_EDITOR_OPTION, this.props);
  // }

  // async load() {
  //   // start to load plugins
  //   const { configs } = this.props;
  //   this.$editor.updateConfigs(configs);
  //   console.warn("editor plugin load");
  //   await this.activate();
  // }

  // async activate() {
  //   // start to load plugins
  //   await this.$editor.activate();

  //   // send message
  //   this.$store.initValue("editor.plugin.activated", (v = 0) => v + 1);
  //   console.warn("editor.plugin.activated");
  //   this.render();
  // }

  template() {
    const {
      class: className = "",
      fullScreen,
      loading = <Loading />,
      plugins,
      configs,
    } = this.props;
    const editorRef = useRef(new EditorContext(this, this.props));
    const pluginActivatedRef = useRef(false);
    // const editor = useEditor();

    // console.log(editor, plugins, configs);

    const localClass = useMemo(() => {
      return classnames(
        "elf--base-editor",
        {
          "full-screen": fullScreen,
        },
        className
      );
    }, [className, fullScreen]);

    useEffect(async () => {
      console.log("editor useEffect", pluginActivatedRef.current);
      if (pluginActivatedRef.current) {
        return;
      }

      if (!this.$editor) {
        this.$editor = editorRef.current;
      }

      this.$store.set(KEY_EDITOR, this.$editor);
      this.$store.set(KEY_EDITOR_OPTION, this.props);

      // start to load plugins
      this.$editor.updateConfigs(configs);

      // start to load plugins
      await this.$editor.activate();

      // send message
      // this.$store.initValue("editor.plugin.activated", (v = 0) => v + 1);
      pluginActivatedRef.current = true;
      useRender(this);
    }, [editorRef.current, pluginActivatedRef.current, plugins, configs]);

    return (
      <div class={localClass}>
        {pluginActivatedRef.current
          ? editorRef.current.getUIList("renderView")
          : loading}
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
