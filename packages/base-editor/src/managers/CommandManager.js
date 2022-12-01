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
      if (!isFunction(command.execute))
        throw new Error("execute function is required", command);

      const callback = (...args) => {
        // 커맨드 함수를 생성하는 시점에 editorContext 를 자동으로 넘겨 주도록 맞춘다.
        // 이렇게 하는 이유는 editorContext 를 항상 전달해서 활용하기 위함이다.
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
    if (typeof command === "function") {
      return command;
    }

    return this.localCommands[command];
  }

  get(command) {
    return this.getCallback(command);
  }

  execute(command, ...args) {
    const callback = this.getCallback(command);

    if (!callback) {
      throw new Error("command is not registered : " + command);
    }

    return callback(...args);
  }

  /**
   * command 가 등록되어 있는지 확인한다.
   */
  has(command) {
    return !!this.getCallback(command);
  }
}
