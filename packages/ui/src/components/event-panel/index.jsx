import {
  debounce,
  POINTEREND,
  POINTERMOVE,
  POINTERSTART,
  SUBSCRIBE_ALL,
  UIElement,
} from "@elf-framework/sapa";

import {
  ADD_BODY_FIRST_MOUSEMOVE,
  ADD_BODY_MOUSEMOVE,
  ADD_BODY_MOUSEUP,
  BODY_MOVE_EVENT,
} from "../../consts";
import { registerComponent } from "../../utils/component";

const EMPTY_POS = { x: 0, y: 0 };
const DEFAULT_POS = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER };
const MOVE_CHECK_MS = 0;

function getDist(startPos, endPos) {
  return Math.sqrt(
    Math.pow(endPos.x - startPos.x, 2) + Math.pow(endPos.y - startPos.y, 2)
  );
}

export class EventPanel extends UIElement {
  initialize() {
    super.initialize();

    // initialize root event
    this.__initBodyMoves();
  }

  __initBodyMoves() {
    this.__firstMove = new Set();
    this.__moves = new Set();
    this.__ends = new Set();

    this.__modifyBodyMoveSecond(MOVE_CHECK_MS);
  }

  __modifyBodyMoveSecond(ms = MOVE_CHECK_MS) {
    const callback =
      ms === 0
        ? this.__loopBodyMoves.bind(this)
        : debounce(this.__loopBodyMoves.bind(this), ms);

    this.__funcBodyMoves = callback;
  }

  __loopBodyMoves() {
    var pos = this.pos;
    var e = this.$store.get(BODY_MOVE_EVENT);
    var lastPos = this.lastPos || DEFAULT_POS;
    var isNotEqualLastPos = !(lastPos.x === pos.x && lastPos.y === pos.y);

    if (isNotEqualLastPos && this.__firstMove.size) {
      let i = 0;
      this.__firstMove.forEach((v) => {
        const dist = getDist(pos, v.xy);

        if (Math.abs(dist) > 0) {
          var dx = pos.x - v.xy.x;
          var dy = pos.y - v.xy.y;

          v.func.call(v.context, dx, dy, "move", e.pressure);
          i++;
        }
      });

      if (i > 0) {
        this.__firstMove.clear();
      }
    }

    if (isNotEqualLastPos && this.__moves.size) {
      this.__moves.forEach((v) => {
        const dist = getDist(pos, v.xy);

        if (Math.abs(dist) > 0.5) {
          var dx = pos.x - v.xy.x;
          var dy = pos.y - v.xy.y;

          v.func.call(v.context, dx, dy, "move", e.pressure);
        }
      });
      this.lastPos = pos;
    }
    window.requestAnimationFrame(this.__funcBodyMoves);
  }

  __removeBodyMoves() {
    var pos = this.lastPos;
    var e = this.$store.get(BODY_MOVE_EVENT);
    if (pos) {
      this.__ends.forEach((v) => {
        v.func.call(
          v.context,
          pos.x - v.xy.x,
          pos.y - v.xy.y,
          "end",
          e.pressure
        );
      });
    }

    this.__firstMove.clear();
    this.__moves.clear();
    this.__ends.clear();
  }

  [SUBSCRIBE_ALL(ADD_BODY_FIRST_MOUSEMOVE)](func, context, xy) {
    this.__firstMove.add({ func, context, xy });
  }

  [SUBSCRIBE_ALL(ADD_BODY_MOUSEMOVE)](func, context, xy) {
    this.__moves.add({ func, context, xy });
  }

  [SUBSCRIBE_ALL(ADD_BODY_MOUSEUP)](func, context, xy) {
    this.__ends.add({ func, context, xy });
  }

  [POINTERSTART()](e) {
    var newPos = e.xy || EMPTY_POS;

    this.$store.init(BODY_MOVE_EVENT, e);
    this.pos = newPos;
  }

  [POINTERMOVE()](e) {
    var newPos = e.xy || EMPTY_POS;

    this.$store.init(BODY_MOVE_EVENT, e);
    this.pos = newPos;

    if (!this.__requestId) {
      this.__requestId = window.requestAnimationFrame(this.__funcBodyMoves);
    }
  }

  [POINTEREND()](e) {
    // var newPos = e.xy || EMPTY_POS;
    this.$store.set(BODY_MOVE_EVENT, e);
    this.__removeBodyMoves();
    window.cancelAnimationFrame(this.__requestId);
    this.__requestId = null;
  }
}

registerComponent("event-panel", EventPanel);
registerComponent("EventPanel", EventPanel);
registerComponent("eventpanel", EventPanel);
