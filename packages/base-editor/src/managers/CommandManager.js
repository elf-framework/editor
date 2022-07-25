import { isFunction, isObject } from "@elf-framework/sapa";

export class CommandManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.localCommands = {};
  }

  loadCommands(userCommands = {}) {
    Object.keys(userCommands).forEach((command) => {
      if (isFunction(userCommands[command])) {
        this.registerCommand(command, userCommands[command]);
      } else {
        this.registerCommand(userCommands[command]);
      }
    });
  }

  /**
   * command 를 등록한다.
   * 등록 이후에 커맨드 실행 이후 종료시킬 함수를 리턴해준다.
   * 종료를 하게 되면 command 에서 빠지게 된다.
   *
   * @returns {Function} dispose callback
   */
  registerCommand(command, commandCallback) {
    if (this.localCommands[command]) {
      throw new Error(`command ${command} is already registered`);
    }

    if (arguments.length === 2) {
      const callback = (...args) => {
        const result = commandCallback.call(this, this.editorContext, ...args);

        return result;
      };
      callback.source = command;

      // local command 에 등록
      this.localCommands[command] = callback;

      // return this.editorContext.on(command, callback, this, 0);
    } else if (isObject(command)) {
      if (!command.command) throw new Error("command is required", command);
      if (!command.execute) throw new Error("callback is required", command);

      const callback = (...args) => {
        const result = command.execute.call(
          command,
          this.editorContext,
          ...args
        );

        return result;
      };
      callback.source = command.command;

      // local command 에 등록
      this.localCommands[command.command] = callback;
    }
  }

  getCallback(command) {
    return this.localCommands[command];
  }

  emit(command, ...args) {
    const callback = this.getCallback(command);

    if (callback) {
      return callback(...args);
    }
  }
}
