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

      /**
       * hmr 로 인해서 컴포넌트의 템플릿을 새로 생성이 되면
       * 기존의 인스턴스에 저장해놓았던 this.$editor 가 사라지기 때문에
       * useRef 를 사용해서 다시 복구하는 형태로 진행한다.
       */

      if (!this.$editor) {
        this.$editor = editorRef.current;
      }

      // store를 재설정한다.
      this.$store.set(KEY_EDITOR, this.$editor);
      this.$store.set(KEY_EDITOR_OPTION, this.props);

      if (pluginActivatedRef.current) {
        return;
      }

      // start to load plugins
      this.$editor.updateConfigs(configs);

      // start to load plugins
      await this.$editor.activate();

      // send message
      // this.$store.initValue("editor.plugin.activated", (v = 0) => v + 1);
      pluginActivatedRef.current = true;
      console.warn("editor.plugin.activated", pluginActivatedRef.current);
      useRender(this);
    }, [editorRef.current, pluginActivatedRef.current, plugins, configs]);

    console.log(
      "editor render",
      pluginActivatedRef.current,
      editorRef.current.getUIList("renderView")
    );
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
    console.log(this.$editor, this);
    this.$editor.emit("resize.window");
  }
}
