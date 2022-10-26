import { isBoolean } from "@elf-framework/sapa";

import { generateKeyCode, KEY_STRING } from "../consts/key";
import { os } from "../utils/detect";

function joinKeys(...args) {
  return args.filter(Boolean).join("+");
}

export class ShortCutManager {
  constructor(editorContext) {
    this.editorContext = editorContext;

    this.loadShortCuts();
  }

  getGeneratedKeyCode(code) {
    return generateKeyCode(code);
  }

  loadShortCuts() {
    this.list = [];
    this.commands = {};
  }

  makeShortcutCommandFunction(command) {
    if (typeof command === "function") {
      return (...args) => {
        return command(this.editorContext, ...args);
      };
    }

    return command;
  }

  registerShortcut(shortcut) {
    const OSName = os();

    console.log(OSName);

    this.list.push({
      key: "",
      args: [],
      eventType: "keydown",
      ...shortcut,
      command: this.makeShortcutCommandFunction(shortcut.command),
      checkKeyString: this.splitShortCut(shortcut[OSName] || shortcut.key),
      whenFunction: this.makeWhenFunction(
        shortcut.command,
        shortcut.when || true
      ),
    });

    this.sort();
  }

  makeWhenFunction(command, when) {
    if (isBoolean(when) && when) {
      return () => true;
    }

    const editor = this.editorContext;
    const whenList = when.split("|").map((it) => it.trim());
    return () => {
      return whenList.some((it) =>
        editor.context.modeViewManager.isCurrentMode(it)
      );
    };
  }

  sort() {
    this.commands = {};
    this.list.forEach((it) => {
      if (Array.isArray(this.commands[it.checkKeyString]) === false) {
        this.commands[it.checkKeyString] = [];
      }

      this.commands[it.checkKeyString].push(it);
    });
  }

  splitShortCut(key) {
    var arr = key
      .toUpperCase()
      .split("+")
      .map((it) => it.trim())
      .filter(Boolean);

    let isAlt = false;
    let isControl = false;
    let isShift = false;
    let isMeta = false;
    let restKeys = [];
    arr.forEach((key) => {
      if (key.includes(KEY_STRING.ALT)) isAlt = true;
      else if (key.includes(KEY_STRING.CTRL)) isControl = true;
      else if (key.includes(KEY_STRING.SHIFT)) isShift = true;
      else if (
        key.includes("CMD") ||
        key.includes("WIN") ||
        key.includes(KEY_STRING.META)
      )
        isMeta = true;
      else restKeys.push(key);
    });

    return joinKeys(
      isAlt ? KEY_STRING.ALT : "",
      isControl ? KEY_STRING.CTRL : "",
      isShift ? KEY_STRING.SHIFT : "",
      isMeta ? KEY_STRING.META : "",
      generateKeyCode(restKeys.join(""))
    );
  }

  makeKeyString(e) {
    return joinKeys(
      e.altKey ? KEY_STRING.ALT : "",
      e.ctrlKey ? KEY_STRING.CTRL : "",
      e.shiftKey ? KEY_STRING.SHIFT : "",
      e.metaKey ? KEY_STRING.META : "",
      e.key?.toUpperCase()
    );
  }

  makeCodeString(e) {
    return joinKeys(
      e.altKey ? KEY_STRING.ALT : "",
      e.ctrlKey ? KEY_STRING.CTRL : "",
      e.shiftKey ? KEY_STRING.SHIFT : "",
      e.metaKey ? KEY_STRING.META : "",
      e.code?.toUpperCase()
    );
  }

  makeKeyCodeString(e) {
    return joinKeys(
      e.altKey ? KEY_STRING.ALT : "",
      e.ctrlKey ? KEY_STRING.CTRL : "",
      e.shiftKey ? KEY_STRING.SHIFT : "",
      e.metaKey ? KEY_STRING.META : "",
      e.keyCode
    );
  }

  checkShortCut(keyCodeString, keyString, codeString) {
    return (
      this.commands[keyCodeString] ||
      this.commands[keyString] ||
      this.commands[codeString]
    );
  }

  checkWhen(command) {
    return command.whenFunction();
  }

  execute(e, eventType = "keydown") {
    let commands = this.checkShortCut(
      this.makeKeyCodeString(e),
      this.makeKeyString(e),
      this.makeCodeString(e)
    );

    if (commands) {
      const filteredCommands = commands
        .filter((it) => it.eventType === eventType)
        .filter((it) => this.checkWhen(it));

      if (filteredCommands.length) {
        // e.preventDefault();

        filteredCommands.forEach((it) => {
          this.editorContext.commands.execute(it.command, ...it.args);
        });
      }
    }
  }
}
