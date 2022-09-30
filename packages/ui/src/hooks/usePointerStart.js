import {
  isFunction,
  isUndefined,
  POINTERSTART,
  useMagicMethod,
} from "@elf-framework/sapa";

export function usePointerStart(...args) {
  let [selector, downAction, moveAction, upAction] = args;

  if (isFunction(selector)) {
    [downAction, moveAction, upAction] = args;
    selector = null;
  }

  return useMagicMethod(POINTERSTART(selector), (evt) => {
    if (isFunction(downAction)) {
      const ret = downAction(evt);

      if (!isUndefined(ret)) {
        return ret;
      }
    }

    const move = (e) => {
      if (isFunction(moveAction)) {
        moveAction(e);
      }
    };

    const end = (e) => {
      if (isFunction(upAction)) upAction(e);

      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
    };

    if (isFunction(moveAction)) {
      document.addEventListener("mousemove", move);
    }

    if (isFunction(upAction) || isFunction(moveAction)) {
      document.addEventListener("mouseup", end);
    }
  });
}
