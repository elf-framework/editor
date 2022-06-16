var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { AFTER, UIElement, createElementJsx, BIND, POINTERSTART, IF, CONFIG, DRAGOVER, PREVENT, DROP, Dom, WHEEL, normalizeWheelEvent, SUBSCRIBE, createComponent, isFunction, isString, isArray, LOAD, DOMDIFF, CLICK, STOP, SUBSCRIBE_SELF, isNumber, isNotUndefined, isUndefined, classnames, isBoolean, FOCUSIN, FOCUSOUT, INPUT, DEBOUNCE, KEYUP, ENTER, FOCUS, BLUR, CHANGE, createElement, POINTEROVER, POINTEROUT, isObject, BaseStore, registElement, registAlias, debounce, SUBSCRIBE_ALL, POINTERMOVE, POINTEREND, RESIZE, PASTE, clone as clone$1, KEYDOWN, TRANSITIONEND, start } from "@elf/sapa";
export * from "@elf/sapa";
import * as Color from "@elf/color";
export * from "@elf/color";
import { iconUse, iconBlank, icons } from "@elf/icon";
export * from "@elf/icon";
var index = /* @__PURE__ */ (() => '.colorpicker{background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:3px;box-shadow:0 0 10px 2px rgba(0,0,0,.12);display:inline-block;position:relative;width:224px;z-index:1000}.colorpicker>.arrow{border-bottom:10px solid rgba(0,0,0,.2);border-left:10px solid transparent;border-right:10px solid transparent;display:none;height:0;left:7px;pointer-events:none;position:absolute;top:-10px;width:0}.colorpicker>.arrow:after{border-bottom:9px solid #fff;border-left:9px solid transparent;border-right:9px solid transparent;content:"";height:0;left:-9px;position:absolute;top:1px;width:0}.colorpicker .colorpicker-body .color-tab{border:1px solid #ececec;box-sizing:border-box;display:flex;flex-direction:column;height:350px}.colorpicker .colorpicker-body .color-tab.xd{height:200px}.colorpicker .colorpicker-body .color-tab .color-tab-header{display:flex;flex:none;flex-direction:row;height:20px}.colorpicker .colorpicker-body .color-tab .color-tab-header .color-tab-item{background-color:#ececec;box-sizing:border-box;cursor:pointer;flex:1 1 auto;height:100%;padding:4px 10px;text-align:center}.colorpicker .colorpicker-body .color-tab .color-tab-header .color-tab-item.active{background-color:#fff;border-bottom-color:#fff}.colorpicker .colorpicker-body .color-tab .color-tab-body{flex:1 1 auto;position:relative}.colorpicker .colorpicker-body .color-tab .color-tab-body .color-tab-content{bottom:0;display:none;left:0;position:absolute;right:0;top:0}.colorpicker .colorpicker-body .color-tab .color-tab-body .color-tab-content.active{display:block}.colorpicker .colorpicker-body .color-panel{cursor:pointer;height:120px;overflow:hidden;position:relative}.colorpicker .colorpicker-body .color-panel>.saturation,.colorpicker .colorpicker-body .color-panel>.saturation>.value{height:100%;position:relative;width:100%}.colorpicker .colorpicker-body .color-panel>.saturation>.value>.drag-pointer{border-radius:50%;height:10px;position:absolute;transform:translateX(-50%) translateY(-50%);width:10px}.colorpicker .colorpicker-body .color-panel>.saturation{background-color:hsla(20,42%,65%,0);background-image:linear-gradient(90deg,#fff,hsla(20,42%,65%,0));background-repeat:repeat-x}.colorpicker .colorpicker-body .color-panel>.saturation>.value{background-image:linear-gradient(0deg,#000,hsla(20,42%,65%,0))}.colorpicker .colorpicker-body .color-panel>.saturation>.value>.drag-pointer{border:1px solid #fff;box-shadow:0 0 2px 0 rgba(0,0,0,.05)}.colorpicker .colorpicker-body .control{padding:10px 0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.colorpicker .colorpicker-body .control>.color,.colorpicker .colorpicker-body .control>.empty{background-color:#fff;border-radius:50%;box-sizing:border-box;height:30px;left:12px;position:absolute;top:14px;width:30px}.colorpicker .colorpicker-body .control>.color{border:1px solid rgba(0,0,0,.1)}.colorpicker .colorpicker-body .control>.hue{box-sizing:border-box;cursor:pointer;margin:0 0 0 42px;padding:6px 16px;position:relative}.colorpicker .colorpicker-body .control>.hue>.hue-container{border-radius:3px;height:10px;position:relative;width:100%}.colorpicker .colorpicker-body .control>.opacity{box-sizing:border-box;cursor:pointer;margin:0 0 0 42px;padding:3px 16px;position:relative}.colorpicker .colorpicker-body .control>.opacity>.opacity-container{border-radius:3px;height:10px;position:relative;width:100%}.colorpicker .colorpicker-body .control .drag-bar,.colorpicker .colorpicker-body .control .drag-bar2{border-radius:50%;cursor:pointer;height:12px;left:0;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:12px}.colorpicker .colorpicker-body .control>.hue>.hue-container{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.colorpicker .colorpicker-body .control>.opacity>.opacity-container{background-color:transparent;background-image:linear-gradient(45deg,#8b8b8b 25%,transparent 0),linear-gradient(-45deg,#8b8b8b 25%,transparent 0),linear-gradient(45deg,transparent 75%,#8b8b8b 0),linear-gradient(-45deg,transparent 75%,#8b8b8b 0);background-position:0 0,0 5.5px,5.5px -5.5px,-5.5px 0;background-size:11px 11px}.colorpicker .colorpicker-body .control>.opacity>.opacity-container>.color-bar{bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.colorpicker .colorpicker-body .control>.empty{background-color:transparent;background-color:#fff;background-image:linear-gradient(45deg,#8b8b8b 25%,transparent 0),linear-gradient(-45deg,#8b8b8b 25%,transparent 0),linear-gradient(45deg,transparent 75%,#8b8b8b 0),linear-gradient(-45deg,transparent 75%,#8b8b8b 0);background-position:0 0,0 5.5px,5.5px -5.5px,-5.5px 0;background-size:11px 11px}.colorpicker .colorpicker-body .control .drag-bar,.colorpicker .colorpicker-body .control .drag-bar2{background-color:#fefefe;border:1px solid rgba(0,0,0,.05);box-shadow:2px 2px 2px 0 rgba(0,0,0,.2)}.colorpicker .colorpicker-body .information{box-sizing:border-box;position:relative}.colorpicker .colorpicker-body .information>input{bottom:20px;box-sizing:border-box;height:20px;padding:0 0 0 2px;position:absolute;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.colorpicker .colorpicker-body .information>input[type=number]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.colorpicker .colorpicker-body .information>input[type=number]::-webkit-inner-spin-button,.colorpicker .colorpicker-body .information>input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.colorpicker .colorpicker-body .information.hex>.information-item.hex,.colorpicker .colorpicker-body .information.hsl>.information-item.hsl,.colorpicker .colorpicker-body .information.rgb>.information-item.rgb{display:flex}.colorpicker .colorpicker-body .information>.information-item{box-sizing:border-box;display:none;margin-right:40px;padding:0 5px 0 9px;position:relative}.colorpicker .colorpicker-body .information>.information-item>.input-field{box-sizing:border-box;display:block;flex:1;padding:3px 1px;position:relative}.colorpicker .colorpicker-body .information>.information-item>.input-field>.title{color:#a9a9a9;padding-top:2px;text-align:center}.colorpicker .colorpicker-body .information>.information-item>.input-field input{border:1px solid #cbcbcb;border-radius:2px;box-sizing:border-box;color:#333;height:21px;padding:3px;text-align:center;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%}.colorpicker .colorpicker-body .information>.information-item>.input-field input[type=number]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.colorpicker .colorpicker-body .information>.information-item>.input-field input[type=number]::-webkit-inner-spin-button,.colorpicker .colorpicker-body .information>.information-item>.input-field input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.colorpicker .colorpicker-body .information>.information-item>.input-field.hsl-l input[type=number],.colorpicker .colorpicker-body .information>.information-item>.input-field.hsl-s input[type=number]{padding-left:1px;padding-right:10px}.colorpicker .colorpicker-body .information>.information-item>.input-field .postfix{box-sizing:border-box;display:inline-block;height:21px;line-height:2;padding:2px;position:absolute;right:1px;text-align:center;top:2px}.colorpicker .colorpicker-body .information>.information-change{bottom:0;box-sizing:border-box;display:block;padding-top:5px;position:absolute;right:0;text-align:center;top:0;width:40px}.colorpicker .colorpicker-body .information>.information-change>.format-change-button{background:transparent;border:0;box-sizing:border-box;cursor:pointer;outline:none}.colorpicker .colorpicker-body .information>.title{color:#a3a3a3}.colorpicker .colorpicker-body .information>.input{color:#333}.colorpicker .colorpicker-body .colorsets{border-top:1px solid #e2e2e2}.colorpicker .colorpicker-body .colorsets>.menu{float:right;padding:10px 15px 10px 5px}.colorpicker .colorpicker-body .colorsets>.menu button{border:0;cursor:pointer;font-family:serif,sans-serif;font-weight:300;outline:none}.colorpicker .colorpicker-body .colorsets>.color-list{box-sizing:border-box;display:block;line-height:0;margin-right:30px;padding:10px 0 0 10px}.colorpicker .colorpicker-body .colorsets>.color-list .color-item{background-size:contain;border-radius:2px;box-sizing:border-box;cursor:pointer;display:inline-block;height:13px;margin-bottom:12px;margin-right:12px;overflow:hidden;position:relative;vertical-align:middle;width:13px}.colorpicker .colorpicker-body .colorsets>.color-list .color-item:hover{transform:scale(1.2)}.colorpicker .colorpicker-body .colorsets>.color-list .color-item .empty{background-color:transparent;background-color:#fff;background-image:linear-gradient(45deg,#8b8b8b 25%,transparent 0),linear-gradient(-45deg,#8b8b8b 25%,transparent 0),linear-gradient(45deg,transparent 75%,#8b8b8b 0),linear-gradient(-45deg,transparent 75%,#8b8b8b 0);background-position:0 0,0 5.5px,5.5px -5.5px,-5.5px 0;background-size:11px 11px;height:100%;left:0;margin:0;padding:0;pointer-events:none;position:absolute;top:0;width:100%}.colorpicker .colorpicker-body .colorsets>.color-list .color-item .color-view{border:1px solid rgba(0,0,0,.1);box-sizing:border-box;height:100%;left:0;margin:0;padding:0;pointer-events:none;position:absolute;top:0;width:100%}.colorpicker .colorpicker-body .colorsets>.color-list .add-color-item{color:#8e8e8e;cursor:pointer;display:inline-block;font-family:serif,sans-serif;font-weight:400;height:13px;line-height:1;margin-bottom:12px;margin-right:12px;text-align:center;vertical-align:middle;width:13px}.colorpicker .colorpicker-body .color-chooser{background-color:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .05s ease-out}.colorpicker .colorpicker-body .color-chooser.open{opacity:1;pointer-events:all}.colorpicker .colorpicker-body .color-chooser .color-chooser-container{background-color:#fff;bottom:0;left:0;position:absolute;right:0;top:120px}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-item-header{border-bottom:1px solid rgba(0,0,0,.2);box-sizing:border-box;display:flex;height:34px;left:0;padding:3px 0;position:absolute;right:0;top:0}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-item-header .title{box-sizing:border-box;color:#000;flex:2;font-weight:700;margin:0;overflow:hidden;padding:5px 5px 5px 14px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-item-header .items{cursor:pointer;display:block;flex:1;height:100%;line-height:2;padding-right:10px;text-align:right}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list{bottom:0;left:0;overflow:auto;position:absolute;right:0;top:34px}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list .colorsets-item{border-bottom:1px solid rgba(0,0,0,.1);cursor:pointer;display:flex;padding:3px 0}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list .colorsets-item:hover{background-color:rgba(0,0,0,.05)}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list .colorsets-item .title{box-sizing:border-box;color:#000;flex:2;font-weight:400;margin:0;overflow:hidden;padding:5px 5px 5px 14px;pointer-events:none;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list .colorsets-item .items{cursor:pointer;display:block;flex:3;height:100%;line-height:1.6;pointer-events:none}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list .colorsets-item .items .color-item{background-color:transparent;background-image:linear-gradient(45deg,#8b8b8b 25%,transparent 0),linear-gradient(-45deg,#8b8b8b 25%,transparent 0),linear-gradient(45deg,transparent 75%,#8b8b8b 0),linear-gradient(-45deg,transparent 75%,#8b8b8b 0);background-position:0 0,0 5.5px,5.5px -5.5px,-5.5px 0;background-size:11px 11px;background-size:contain;border:1px solid #ddd;border-radius:3px;box-sizing:border-box;cursor:pointer;display:inline-block;height:13px;margin-right:10px;overflow:hidden;vertical-align:middle;width:13px}.colorpicker .colorpicker-body .color-chooser .color-chooser-container .colorsets-list .colorsets-item .items .color-item .color-view{height:100%;margin:0;padding:0;pointer-events:none;width:100%}.colorpicker.sketch{border-radius:5px}.colorpicker.sketch>.colorpicker-body .color-panel{box-sizing:border-box;height:150px}.colorpicker.sketch>.colorpicker-body>.control{margin-top:5px;padding:0}.colorpicker.sketch>.colorpicker-body>.control>.color,.colorpicker.sketch>.colorpicker-body>.control>.empty{background-color:#fff;border-radius:100%;box-sizing:border-box;height:26px;left:auto;position:absolute;right:0;top:1px;width:26px}.colorpicker.sketch>.colorpicker-body>.control>.color{box-shadow:inset 0 0 1px 0 rgba(0,0,0,.5)}.colorpicker.sketch>.colorpicker-body>.control>.hue{margin:0 32px 0 0;padding:2px 2px 2px 0;position:relative}.colorpicker.sketch>.colorpicker-body>.control>.hue>.hue-container{border-radius:12px}.colorpicker.sketch>.colorpicker-body>.control>.opacity{margin:0 32px 0 0;padding:2px 2px 2px 0;position:relative}.colorpicker.sketch>.colorpicker-body>.control>.opacity>.opacity-container,.colorpicker.sketch>.colorpicker-body>.control>.opacity>.opacity-container .color-bar{border-radius:12px}.colorpicker.sketch>.colorpicker-body>.control .drag-bar,.colorpicker.sketch>.colorpicker-body>.control .drag-bar2{background-color:#fff;border:1px solid #fff;border-radius:0;border-radius:50%;bottom:1px!important;box-shadow:0 0 1px 0 rgba(0,0,0,.5);height:12px;left:0;top:50%;transform:translateX(-50%) translateY(-50%);width:12px}.colorpicker.sketch>.colorpicker-body>.information{margin-top:5px}.colorpicker.sketch>.colorpicker-body>.information .information-change{display:none}.colorpicker.sketch>.colorpicker-body>.information.rgb .information-item.rgb{display:inherit}.colorpicker.sketch>.colorpicker-body>.information.rgb .information-item.hsl{display:none!important}.colorpicker.sketch>.colorpicker-body>.information.hex .information-item.hex{display:inherit}.colorpicker.sketch>.colorpicker-body>.information.hex .information-item.hsl,.colorpicker.sketch>.colorpicker-body>.information.hsl .information-item.rgb{display:none!important}.colorpicker.sketch>.colorpicker-body>.information.hsl .information-item.hsl{display:inherit}.colorpicker.sketch>.colorpicker-body>.information .information-item{display:inline-flex!important;margin-right:0}.colorpicker.sketch>.colorpicker-body>.information .information-item>.input-field>.title{color:#000;cursor:pointer}.colorpicker.sketch>.colorpicker-body>.information .information-item>.input-field>.title:hover{font-weight:700}.colorpicker.sketch>.colorpicker-body>.information .information-item>.input-field:last-child:not(:first-child){padding-right:0}.colorpicker.sketch>.colorpicker-body>.information .information-item.hex{padding-left:0;padding-right:0;width:70px}.colorpicker.sketch>.colorpicker-body>.information .information-item.rgb{padding-left:0;padding-right:0;width:150px}.colorpicker.sketch>.colorpicker-body>.information .information-item.hsl{display:none;padding-left:0;padding-right:0;width:150px}.colorpicker.sketch>.colorpicker-body>.colorsets>.menu{display:none}.colorpicker.sketch>.colorpicker-body>.colorsets>.color-list{margin-right:0;padding-right:12px}.colorpicker.sketch>.colorpicker-body>.colorsets>.color-list .color-item{border-radius:3px;height:16px;margin-bottom:10px;margin-right:9px;width:16px}.colorsets-contextmenu{background-color:#ececec;border:1px solid #ccc;border-radius:6px;display:none;list-style:none;padding:4px 0;position:fixed}.colorsets-contextmenu.show{display:inline-block}.colorsets-contextmenu .elf--menu-item{cursor:default;padding:2px 20px}.colorsets-contextmenu .elf--menu-item:hover{background-color:#5ea3fb;color:#fff}.colorsets-contextmenu.small .elf--menu-item.small-hide{display:none}.elf-editor{--elf--editor-ruler-size:20px;bottom:0;box-sizing:border-box;font-family:Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,sans-serif;font-size:11px;margin:0;padding:0;right:0}.elf-editor *,.elf-editor :after,.elf-editor :before{-webkit-overflow-scrolling:touch;box-sizing:border-box}.elf-editor.ua-window .scrollbar::-webkit-scrollbar{background-color:#aaa;height:8px;width:5px}.elf-editor.ua-window .scrollbar::-webkit-scrollbar-thumb{background:#000}.elf-editor[data-theme=dark]{--elf--range-thumb-color:#228be6;--elf--range-track-color:#616161;--elf--range-thumb-border-color:rgba(0,0,0,.8);--elf--input-background-color:#343a40;--elf--input-inactive-color:#495057;--elf--input-border-color:#adb5bd;--elf--input-font-color:#f8f9fa;--elf--input-sub-font-color:#7a7a7a;--elf--input-height:30px;--elf--input-font-size:11px;--elf--border-color:#495057;--elf--selection-tool-border-color:#3a89f0;--elf--selected-color:#228be6;--elf--selected-color-2:#1864ab;--elf--selected-hover-color:#74c0fc;--elf--selected-border-color:#1c7ed6;--elf--layout-border-color:#212529;--elf--background-color:#343a40;--elf--toolbar-background-color:#212529;--elf--selected-background-color:#535353;--elf--font-color:#f8f9fa;--elf--disabled-font-color:#e9ecef;--elf--menu-item-title-font-color:#e9ecef;--elf--selected-font-color:#f8f9fa;--elf--divider-color:#616161;--elf--property-border-color:#0b0b0b;--elf--property-title-background-color:#161616;--elf--property-background-color:#22282c;--elf--list-item-font-color:#fff;--elf--list-item-selected-color:#03a9f4;--elf--list-item-disable-font-color:#828282;--elf--popup-background-color:#343a40;--elf--popup-font-color:#ced4da;--elf--window-background-color:rgba(61,61,61,.5);--elf--path-background-color:hsla(0,0%,100%,.7);--elf--path-guide-color:#000;--elf--path-segment-stroke-color:#0bf;--elf--timeline-gauge-background-color:#ee4b66;--elf--timeline-gauge-handle-color:#fffaaf;--elf--timeline-row-selected-color:rgba(67,92,181,.4);--elf--timeline-property-add-background-color:#666;--elf--guide-line-color:#ca7976;--elf--guide-font-color:#fff;--elf--guide-line-rect-color:#435cb5;--elf--canvas-background-color:#d3d3d3;--elf--animation-item-background-color:#435cb5;--elf--grid-box-editor-button-background-color:#435cb5;--elf--drag-area-rect-border-color:rgba(62,168,255,.9);--elf--drag-area-rect-background-color:rgba(107,188,255,.214);--elf--rotate-x-border-color:#6868f7;--elf--rotate-y-border-color:#70c570;--elf--tooltip-background-color:#212529;--elf--tooltip-font-color:#f8f9fa;--elf--tab-toolbar-background-color:#212529;--elf--tab-font-color:#949494}.elf-editor[data-theme=light]{--elf--range-thumb-color:#609de2;--elf--range-track-color:#cfcfcf;--elf--range-thumb-border-color:#609de2;--elf--input-background-color:#fff;--elf--input-inactive-color:#f1f3f5;--elf--input-border-color:#ced4da;--elf--input-font-color:#333;--elf--input-sub-font-color:#7a7a7a;--elf--input-height:30px;--elf--input-font-size:11px;--elf--border-color:#868e96;--elf--selection-tool-border-color:#3a89f0;--elf--layout-border-color:#dee2e6;--elf--selected-color:#66baff;--elf--selected-color-2:#339af0;--elf--selected-hover-color:#d0ebff;--elf--selected-border-color:#609de2;--elf--background-color:#fff;--elf--toolbar-background-color:#2c2c2c;--elf--selected-background-color:#d8d8d8;--elf--font-color:#333;--elf--disabled-font-color:#c1c1c1;--elf--menu-item-title-font-color:#f8f9fa;--elf--selected-font-color:#fff;--elf--divider-color:#cfcfcf;--elf--property-border-color:#e5e5e5;--elf--property-title-background-color:#fff;--elf--property-background-color:#fff;--elf--list-item-font-color:#000;--elf--list-item-selected-color:#609de2;--elf--list-item-disable-font-color:#a3a3a3;--elf--popup-background-color:#fff;--elf--popup-font-color:#ced4da;--elf--window-background-color:rgba(42,42,42,.478);--elf--path-background-color:hsla(0,0%,100%,.7);--elf--path-guide-color:#5c5c5c;--elf--path-segment-stroke-color:#b7b7b7;--elf--timeline-gauge-background-color:#435cb5;--elf--timeline-gauge-handle-color:#748ff1;--elf--timeline-row-selected-color:#609de2;--elf--timeline-property-add-background-color:#747474;--elf--guide-line-color:#66baff;--elf--guide-font-color:#fff;--elf--guide-line-rect-color:#36457a;--elf--canvas-background-color:hsla(0,0%,7%,.1);--elf--animation-item-background-color:#435cb5;--elf--grid-box-editor-button-background-color:#435cb5;--elf--drag-area-rect-border-color:rgba(62,168,255,.9);--elf--drag-area-rect-background-color:rgba(107,188,255,.5);--elf--rotate-x-border-color:#643ac7;--elf--rotate-y-border-color:#8bdf8b;--elf--tooltip-background-color:#212529;--elf--tooltip-font-color:#fff;--elf--tab-toolbar-background-color:#f6fafc;--elf--tab-font-color:#adadad}.elf-editor{height:100%;left:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.elf-editor [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.elf-editor input[type=email],.elf-editor input[type=number],.elf-editor input[type=text],.elf-editor textarea{background-color:var(--elf--input-background-color);border:1px solid var(--elf--border-color);color:var(--elf--input-font-color);outline:none}.elf-editor select{background-color:var(--elf--input-background-color);border-radius:0;border-radius:3px;color:var(--elf--font-color);line-height:1.6;padding:0 4px}.elf-editor button,.elf-editor select{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;vertical-align:middle}.elf-editor button{background-color:transparent;border-width:0;color:var(--elf--button-front-color);display:inline-block;padding:0}.elf-editor button svg{height:100%;width:100%}.elf-editor input[type=file].embed-file-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--elf--background-color);display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}.elf-editor .add-image-button{display:none}.elf-editor .icon svg,.elf-editor button svg,.elf-editor label svg{height:16px;width:16px}.elf-editor .icon svg circle,.elf-editor .icon svg ellipse,.elf-editor .icon svg line,.elf-editor .icon svg path,.elf-editor .icon svg polygon,.elf-editor .icon svg polyline,.elf-editor .icon svg rect,.elf-editor .icon svg text,.elf-editor .icon svg tspan,.elf-editor .icon svg use,.elf-editor button svg circle,.elf-editor button svg ellipse,.elf-editor button svg line,.elf-editor button svg path,.elf-editor button svg polygon,.elf-editor button svg polyline,.elf-editor button svg rect,.elf-editor button svg text,.elf-editor button svg tspan,.elf-editor button svg use,.elf-editor label svg circle,.elf-editor label svg ellipse,.elf-editor label svg line,.elf-editor label svg path,.elf-editor label svg polygon,.elf-editor label svg polyline,.elf-editor label svg rect,.elf-editor label svg text,.elf-editor label svg tspan,.elf-editor label svg use{fill:currentColor;stroke-width:0}.elf-editor .primary{background-color:var(--elf--selected-color);color:var(--elf--selected-text-color)}.elf-editor input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;margin:3px 0;width:100%}.elf-editor input[type=range]:focus{outline:none}.elf-editor input[type=range]::-moz-focus-outer{border:0}.elf-editor input[type=range]::-webkit-slider-runnable-track{background:var(--elf--range-track-color);border-radius:10px;cursor:pointer;height:2px;width:100%}.elf-editor input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:var(--elf--range-thumb-color);border:1px solid var(--elf--range-thumb-border-color);border-radius:100%;cursor:pointer;height:12px;margin-top:-5px;width:12px}.elf-editor input[type=range]:focus::-webkit-slider-runnable-track{background:var(--elf--range-track-color)}.elf-editor input[type=range]::-moz-range-track{background:var(--elf--range-track-color);border-radius:10px;box-shadow:inset 0 1px 3px rgba(0,0,0,.12),inset 0 1px 2px rgba(0,0,0,.12);cursor:pointer;height:2px;width:100%}.elf-editor input[type=range]::-moz-range-thumb{background:var(--elf--range-thumb-color);border:1px solid #000;border-radius:9px;border-radius:20px;cursor:pointer;height:12px;margin-top:-5px;width:12px}.elf-editor input[type=range]::-ms-track{background:var(--elf--range-track-color);border:1px solid #000;border-radius:10px;cursor:pointer;height:2px;width:100%}.elf-editor input[type=range]::-ms-fill-lower{box-shadow:0 0 0 #000,0 0 0 #0d0d0d}.elf-editor input[type=range]::-ms-fill-lower,.elf-editor input[type=range]::-ms-fill-upper{background:var(--elf--range-thumb-color);border:0 solid #010101;border-radius:0}.elf-editor input[type=range]::-ms-thumb{background:var(--elf--range-thumb-color);border-radius:9px;cursor:pointer;height:12px;margin-top:-5px;width:12px}.elf-editor input[type=range]:focus::-ms-fill-lower,.elf-editor input[type=range]:focus::-ms-fill-upper{background:var(--elf--range-thumb-color)}.elf-editor .colorpicker-layer .colorpicker{background-color:transparent;border:0;box-shadow:none;width:100%}.elf-editor .colorpicker-layer .colorpicker .colorpicker-body{width:240px}.elf-editor .colorpicker-layer .colorpicker .colorpicker-body .color-list .current-color-sets .color-item{height:20px;margin:2px!important;width:20px}.elf-editor .colorpicker-layer .colorpicker .colorpicker-body .color-list .current-color-sets .add-color-item{height:20px;margin:0!important;padding:3px;width:20px}.elf-editor .colorpicker-layer .colorpicker .colorpicker-body .wheel{background-color:transparent;border:0}.elf-editor .icons-group{grid-column-gap:2px;grid-row-gap:2px;display:grid;grid-template-columns:repeat(6,40px);max-height:200px;overflow:auto}.elf-editor .icons-group .icon-item{display:inline-block;margin-bottom:2px;margin-right:2px;width:40px}.elf-editor .icons-group .icon-item .title{word-wrap:break-word;color:var(--elf--list-item-font-color);display:block;line-height:1;margin-top:5px;text-align:left;word-break:break-all}.elf-editor .icons-group .icon-item .icon-svg{background-color:var(--elf--input-background-color);border-radius:4px;box-sizing:border-box;color:var(--elf--font-color);cursor:pointer;display:inline-block;height:40px;padding:8px;width:40px}.elf-editor .icons-group .icon-item .icon-svg>svg{height:100%;width:100%}.elf-editor .icons-group .icon-item .icon-svg:hover{background-color:var(--elf--list-item-selected-color);color:var(--elf--selected-font-color)}.elf-editor [data-tooltip]{position:relative}.elf-editor [data-tooltip]:hover:after{opacity:1}.elf-editor [data-tooltip][data-tooltip-dy]:after{top:170%}.elf-editor [data-tooltip]:after{background-color:var(--elf--tooltip-background-color);border:1px solid var(--elf--border-color);border-radius:4px;box-shadow:0 2px 5px rgba(0,0,0,.29);box-sizing:border-box;color:var(--elf--tooltip-font-color);content:attr(data-tooltip);display:inline-block;font-size:11px;font-weight:400;left:50%;line-height:1.6;opacity:0;padding:4px 5px;pointer-events:none;position:absolute;right:auto;text-align:center;top:110%;transform:translateX(-50%);transition:all .3s linear;white-space:nowrap;z-index:10000000}.elf-editor [data-tooltip][data-direction=right]:after{left:120%;position:absolute;top:50%;transform:translateY(-50%)}.elf-editor [data-tooltip][data-direction=left]:after{position:absolute;right:120%;top:50%;transform:translateY(-50%)}.elf-editor [data-tooltip][data-direction=bottom]:after{left:50%;position:absolute;right:auto;top:var(--elf--toggle-checkbox-tooltip-bottom-top,100%);transform:translateX(-50%)}.elf-editor [data-tooltip][data-direction=top]:after{left:50%;position:absolute;right:auto;top:var(----elf--toggle-checkbox-tooltip-top,0);transform:translateX(-50%) translateY(-150%)}.elf-editor [data-tooltip][data-direction="top left"]:after{left:0;position:absolute;right:auto;top:0;transform:translateY(-150%)}.elf-editor [data-tooltip][data-direction="top right"]:after{left:auto;position:absolute;right:0;top:0;transform:translateY(-150%)}.elf-editor [data-tooltip][data-direction="bottom right"]:after{left:auto;position:absolute;right:0;top:110%;transform:translateX(0)}.elf-editor .logo-item{align-items:center;display:flex;flex-direction:row;justify-content:center}.elf-editor .logo-item label.logo{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMS2lDQ1BJQ0MgUHJvZmlsZQAASImVVwdUU8kanltSSWiBCEgJvYlSpEsJoUUQkCrYCEkgocSYEETsyrIKrl1EQF3RVREXXQsga0Vd66JgX8uLsqisrIsFGypvUkDXPe+98+acufe7//z/95c7d+4MAHq1PKk0H9UHoEBSKEuMCmNNSs9gkboACggAAFtgw+PLpeyEhFj4BIbuf2+vbwBEdb/qpuL65/h/bQYCoZwPAJIAcZZAzi+A+CAAeClfKisEgOinimJWoVSFp0BsJIMBQixV4RwNLlXhLA2uUuskJ3Ig3gMAmcbjyXIA0G2BclYRPwfy6N6C2F0iEEsA0CNDHMwX8QQQR0M8qqBghgpDPeCU9QVPzt84s4Y5ebycYazJRd3I4WK5NJ83+/8sx/9uBfmKIR8OsNNEsuhEVc6wbrfyZsSoMA3iXklWXDzEhhC/FQvU+hCjVJEiOkWjj5rz5RxYM8CE2F3AC4+B2BziSEl+XKxWnpUtjuRCDGcIWiwu5CZrbZcK5RFJWs5a2YzE+CGcLeOwtbaNPJnar0r/tCIvha3lvyUScof4X5WIktM0MWPUInFqHMS6EDPleUkxGh3MrkTEiRvSkSkSVfHbQRwglESFafixadmyyEStvqxAPpQvtlQk5sZpcXWhKDlay7OHz1PHbwJxi1DCThniEconxQ7lIhCGR2hyx64IJSnafDGltDAsUWv7QpqfoNXHqcL8KJXcBmJzeVGS1hYPLoQTUsOPx0kLE5I1ceJZubzxCZp48GIQCzggHLCAAvYsMAPkAnF7b3MvfNKMRAIekIEcIARuWsmQRZp6RAKvSaAE/AmREMiH7cLUo0JQBOUfh6WaqxvIVo8WqS3ywCOIC0AMyIfPCrWVZNhbKvgdSsT/8M6HsebDrhr7p4wNJbFaiWKIl6U3pEmMIIYTo4mRRGfcDA/GA/FYeA2F3RP3w/2Hov2sT3hE6CA8JFwnKAm3p4sXy77KhwUmACX0EKnNOevLnHEHyOqNh+FBkB9y40zcDLjhY6EnNh4CfXtDKUcbuSr7r7n/lsMXVdfqUdwpKGUEJZTi9LWlrouu9zCLqqZfVkgTa9ZwXTnDI1/753xRaQG8x3ytiS3FDmBnsZPYeewI1gxY2HGsBbuEHVXh4Vn0u3oWDXlLVMeTB3nE//DH0/pUVVLu3uDe4/5BM1YoLFatj4AzQzpbJs4RFbLYcOUXsrgS/uhRLE93D38AVP8RzTL1kqn+PyDMC59lS6gABEkGBwePfJbFvAfgoDUAVOVnmWMnXA7gWn9uNV8hK9LIcNWFAKhAD35RpsAS/qWcYD6ewAcEglAQAcaDeJAM0sE0WGURnM8yMAvMBYtAGagAq8B6UA22gG1gF/gR7AfN4Ag4CX4BF8EVcB3cgbOnGzwFfeA1GEAQhITQEQZiilgh9ogr4on4IcFIBBKLJCLpSCaSg0gQBTIXWYJUIGuQamQrUo/8hBxGTiLnkQ7kNvIA6UFeIO9RDKWhRqgF6oCOQf1QNhqDJqNT0Rx0JlqClqIr0Cq0Dt2DNqEn0YvodVSJPkX7MYDpYEzMGnPD/DAOFo9lYNmYDJuPlWOVWB3WiLXC93wVU2K92DuciDNwFu4GZ3A0noLz8Zn4fHw5Xo3vwpvw0/hV/AHeh38i0AnmBFdCAIFLmETIIcwilBEqCTsIhwhn4NfUTXhNJBKZREeiL/wa04m5xDnE5cRNxL3EE8QOYhexn0QimZJcSUGkeBKPVEgqI20k7SEdJ3WSuklvyTpkK7InOZKcQZaQF5MrybvJx8id5MfkAYo+xZ4SQImnCCizKSsp2ymtlMuUbsoA1YDqSA2iJlNzqYuoVdRG6hnqXepLHR0dGx1/nYk6Yp2FOlU6+3TO6TzQeUczpLnQOLQpNAVtBW0n7QTtNu0lnU53oIfSM+iF9BX0evop+n36W12G7mhdrq5Ad4FujW6TbqfuMz2Knr0eW2+aXolepd4Bvct6vfoUfQd9jj5Pf75+jf5h/Zv6/QYMAw+DeIMCg+UGuw3OGzwxJBk6GEYYCgxLDbcZnjLsYmAMWwaHwWcsYWxnnGF0GxGNHI24RrlGFUY/GrUb9RkbGo81TjUuNq4xPmqsZGJMByaXmc9cydzPvMF8P8JiBHuEcMSyEY0jOke8MRlpEmoiNCk32Wty3eS9Kcs0wjTPdLVps+k9M9zMxWyi2SyzzWZnzHpHGo0MHMkfWT5y/8jfzFFzF/NE8znm28wvmfdbWFpEWUgtNlqcsui1ZFqGWuZarrM8ZtljxbAKthJbrbM6bvUHy5jFZuWzqlinWX3W5tbR1grrrdbt1gM2jjYpNott9trcs6Xa+tlm266zbbPts7Oym2A3167B7jd7ir2fvch+g/1Z+zcOjg5pDt86NDs8cTRx5DqWODY43nWiO4U4zXSqc7rmTHT2c85z3uR8xQV18XYRudS4XHZFXX1cxa6bXDtGEUb5j5KMqht1043mxnYrcmtwezCaOTp29OLRzaOfjbEbkzFm9ZizYz65e7vnu293v+Nh6DHeY7FHq8cLTxdPvmeN5zUvulek1wKvFq/nY13HCsduHnvLm+E9wftb7zbvjz6+PjKfRp8eXzvfTN9a35t+Rn4Jfsv9zvkT/MP8F/gf8X8X4BNQGLA/4K9At8C8wN2BT8Y5jhOO2z6uK8gmiBe0NUgZzArODP4+WBliHcILqQt5GGobKgjdEfqY7czOZe9hPwtzD5OFHQp7wwngzOOcCMfCo8LLw9sjDCNSIqoj7kfaROZENkT2RXlHzYk6EU2IjoleHX2Ta8Hlc+u5feN9x88bfzqGFpMUUx3zMNYlVhbbOgGdMH7C2gl34+zjJHHN8SCeG782/l6CY8LMhJ8nEicmTKyZ+CjRI3Fu4tkkRtL0pN1Jr5PDklcm30lxSlGktKXqpU5JrU99kxaetiZNOWnMpHmTLqabpYvTWzJIGakZOzL6J0dMXj+5e4r3lLIpN6Y6Ti2een6a2bT8aUen603nTT+QSchMy9yd+YEXz6vj9Wdxs2qz+vgc/gb+U0GoYJ2gRxgkXCN8nB2UvSb7SU5QztqcHlGIqFLUK+aIq8XPc6Nzt+S+yYvP25k3mJ+Wv7eAXJBZcFhiKMmTnJ5hOaN4RofUVVomVc4MmLl+Zp8sRrZDjsinylsKjeCG/ZLCSfGN4kFRcFFN0dtZqbMOFBsUS4ovzXaZvWz245LIkh/m4HP4c9rmWs9dNPfBPPa8rfOR+Vnz2xbYLihd0L0wauGuRdRFeYt+Xey+eM3iV0vSlrSWWpQuLO36JuqbhjLdMlnZzW8Dv92yFF8qXtq+zGvZxmWfygXlFyrcKyorPiznL7/wncd3Vd8Nrshe0b7SZ+XmVcRVklU3Voes3rXGYE3Jmq61E9Y2rWOtK1/3av309ecrx1Zu2UDdoNigrIqtatlot3HVxg/VourrNWE1e2vNa5fVvtkk2NS5OXRz4xaLLRVb3n8v/v7W1qitTXUOdZXbiNuKtj3anrr97A9+P9TvMNtRsePjTslO5a7EXafrfevrd5vvXtmANigaevZM2XPlx/AfWxrdGrfuZe6t2Af2Kfb98VPmTzf2x+xvO+B3oPGg/cHaQ4xD5U1I0+ymvmZRs7IlvaXj8PjDba2BrYd+Hv3zziPWR2qOGh9deYx6rPTY4PGS4/0npCd6T+ac7Gqb3nbn1KRT105PPN1+JubMuV8ifzl1ln32+Lmgc0fOB5w/fMHvQvNFn4tNl7wvHfrV+9dD7T7tTZd9L7dc8b/S2jGu41hnSOfJq+FXf7nGvXbxetz1jhspN27dnHJTeUtw68nt/NvPfyv6beDOwruEu+X39O9V3je/X/cv53/tVfoojz4If3DpYdLDO138rqe/y3//0F36iP6o8rHV4/onnk+O9ET2XPlj8h/dT6VPB3rL/jT4s/aZ07ODf4X+dalvUl/3c9nzwRfLX5q+3Plq7Ku2/oT++68LXg+8KX9r+nbXO793Z9+nvX88MOsD6UPVR+ePrZ9iPt0dLBgclPJkPPVWAIMdzc4G4MVOAOjpADCuwP3DZM05T90QzdlUjcB/wpqzoLr5ANAIb6rtOucEAPtgd1gIuWFXbdWTQwHq5TXctU2e7eWp4aLBEw/h7eDgSwsASK0AfJQNDg5sGhz8uB0GexuAEzM150tVI8KzwffuKtRp1VAMvmr/Bh1jf9vM+xg/AAAACXBIWXMAABYlAAAWJQFJUiTwAAACBmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTY3ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yNDE2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CuU+ZkwAAAQXSURBVHgB7ZxPS1RhGMXf0cygkhYtXLRpEW6SFrnqW/RZa1ffIAnKhVSS/ccy+2NkRDN3wha98jBCMNPznrnnNyC8z6D3POecH3rB4Q4+3l4fl4uXy2BltfDySmB8uFcWvCzjNiYAADERsxkAzAqPdgEgJmI2A4BZ4dEuAMREzGYAMCs82gWAmIjZDABmhUe7ABATMZsBwKzwaBcAYiJmMwCYFR7tAkBMxGwGALPCo10AiImYzWda+l1cWy+Lq1dariClPXrxrIxe7qTu1BSApfWb5dzGrVTDymJH9+54ATBYXi4L5y8od5K622DpbKresRj3AOmRawkCgFYf6dsAQHrkWoIAoNVH+jYAkB65liAAaPWRvg0ApEeuJQgAWn2kbwMA6ZFrCQKAVh/p2wBAeuRaggCg1Uf6NgCQHrmWYNN/B88yitHBfumOvs/ykunX6g4/p2v2BoCfjzbLcGc7PcBZCnZ7b2d5uX+6Vm8AGL15UYZbm/9kmm+qCXAPULOwPAGAZe3VNADULCxPAGBZezUNADULyxMAWNZeTQNAzcLyBACWtVfTAFCzsDwBgGXt1TQA1CwsTwBgWXs1DQA1C8sTAFjWXk0DQM3C8gQAlrVX0wBQs7A89eYTQWeuXitlPJ6rEkevd0v3Pv9jYCdD6g0Ayzc2ytLa9ZPe5M8/7t8FgFm1tLByqSyszOpqOdcZCDwfiXuAnK5lVQBAtpqcxQAgJ2dZFQCQrSZnMQDIyVlWBQBkq8lZDABycpZVAQDZanIWA4CcnGVVAEC2mpzFACAnZ1kVAJCtJmcxAMjJWValN/8OHr57XUaHX2SDnrRYd/Bh0tup7/UGgD/PCNp+lBretGLdp/1pLzH1z/cGgG5/r4x2n04diNsFuAdwazz4BYAQiNsIAG6NB78AEAJxGwHArfHgFwBCIG4jALg1HvwCQAjEbQQAt8aDXwAIgbiNAODWePALACEQtxEA3BoPfgEgBOI2AoBb48EvAIRA3EYAcGs8+AWAEIjbCABujQe/ABACcRsBwK3x4Lc3nwqex+cEhi7+jt23r2X0ZOvv/D8PvQFgHp8TeFqxw1fPyxEAnBbP5Pfn8TmBk52UcvwbIOvFPUBW0qI6ACBaTNZaAJCVtKgOAIgWk7UWAGQlLaoDAKLFZK0FAFlJi+oAgGgxWWsBQFbSojoAIFpM1loAkJW0qA4AiBaTtRYAZCUtqgMAosVkrdX08wC/th6W7svnLK9zo9Md5D0/sCkAw8cPyvEXr3YJ8CegXfYSygAgUUO7JQCgXfYSygAgUUO7JQCgXfYSygAgUUO7JQCgXfYSygAgUUO7JQCgXfYSygAgUUO7JQCgXfYSygAgUUO7JQCgXfYSygAgUUO7JQCgXfYSygAgUUO7JX4DM7xriSDTbF0AAAAASUVORK5CYII=);background-size:contain;border-radius:2px;display:inline-block;height:30px;width:30px}')();
var BlankBodyPanel$1 = /* @__PURE__ */ (() => ".elf--body-panel,.elf--body-panel .editing-area{bottom:0;left:0;position:absolute;right:0;top:0}.elf--body-panel .editing-area>.canvas-layout{bottom:0;left:var(--elf--editor-ruler-size);overflow:hidden;position:absolute;right:0;top:var(--elf--editor-ruler-size)}.elf--body-panel:not(.ruler)>.editing-area>.canvas-layout{left:0;top:0}")();
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0, i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };
function create$2() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function create$1() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function distance$1(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
var dist = distance$1;
(function() {
  var vec = create$1();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
})();
function create() {
  var out = new ARRAY_TYPE(2);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.hypot(x, y);
}
(function() {
  var vec = create();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 2;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }
    return a;
  };
})();
const Language = {
  EN: "en_US",
  FR: "fr_FR",
  KO: "ko_KR"
};
const EditingMode = {
  SELECT: "select",
  APPEND: "append",
  DRAW: "draw",
  PATH: "path",
  HAND: "hand"
};
const NotifyType = {
  ERROR: "error",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ALERT: "alert"
};
const MenuItemType = {
  BUTTON: "button",
  LINK: "link",
  SEPARATOR: "separator",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  SUBMENU: "submenu",
  DROPDOWN: "dropdown",
  CUSTOM: "custom"
};
const ViewModeType = {
  CanvasView: "CanvasView",
  PathEditorView: "PathEditorView"
};
const ADD_BODY_FIRST_MOUSEMOVE = "add/body/first/mousemove";
const ADD_BODY_MOUSEMOVE = "add/body/mousemove";
const ADD_BODY_MOUSEUP = "add/body/mouseup";
const FIRSTMOVE = (method = "move") => {
  return AFTER(`bodyMouseFirstMove ${method}`);
};
const MOVE = (method = "move") => {
  return AFTER(`bodyMouseMove ${method}`);
};
const END = (method = "end") => {
  return AFTER(`bodyMouseUp ${method}`);
};
const UPDATE_VIEWPORT = "updateViewport";
const TOGGLE_FULLSCREEN = "toggle.fullscreen";
const REFRESH_SELECTION = "refreshSelection";
const REFRESH_SELECTION_TOOL = "refreshSelectionTool";
const REFRESH_CONTENT = "refreshContent";
const SHOW_COMPONENT_POPUP = "showComponentPopup";
const SHOW_NOTIFY = "showNotify";
const RESIZE_WINDOW = "resize.window";
const RESIZE_CANVAS = "resizeCanvas";
const UPDATE_CANVAS = "updateCanvas";
const OPEN_CONTEXT_MENU = "openContextMenu";
const START_GUESTURE = "startGuesture";
const END_GUESTURE = "endGuesture";
const KEYMAP_KEYDOWN = "keymapKeydown";
const KEYMAP_KEYUP = "keymapKeyup";
const SET_LOCALE = "setLocale";
const PUSH_MODE_VIEW = "pushModeView";
const POP_MODE_VIEW = "popModeView";
let osInfo = {
  name: void 0
};
function os() {
  if (osInfo.name === void 0) {
    if (window.navigator.appVersion.indexOf("Win") != -1)
      osInfo.name = "win";
    else if (window.navigator.appVersion.indexOf("Mac") != -1)
      osInfo.name = "mac";
    else if (window.navigator.appVersion.indexOf("X11") != -1)
      osInfo.name = "linux";
    else
      osInfo.name = "";
  }
  return osInfo.name;
}
const KEY_CODE = {
  backspace: 8,
  tab: 9,
  enter: 13,
  escape: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  delete: 46,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  semicolon: 59,
  equals: 61,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  multiply: 106,
  add: 107,
  subtract: 109,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  f13: 124,
  f14: 125,
  f15: 126,
  f16: 127,
  f17: 128,
  f18: 129,
  f19: 130,
  comma: 188,
  ",": 188,
  period: 190,
  ".": 190,
  slash: 191,
  "/": 191,
  backquote: 192,
  "`": 192,
  openbracket: 219,
  "[": 219,
  backslash: 220,
  "\\": 220,
  closebracket: 221,
  "]": 221,
  quote: 222,
  "'": 222,
  altgr: 225
};
const keyAlias$1 = {
  ARROWRIGHT: "\u2192",
  ARROWLEFT: "\u2190",
  ARROWUP: "\u2191",
  ARROWDOWN: "\u2192",
  BACKSPACE: "\u232B",
  CMD: "\u2318",
  SHIFT: "\u21E7",
  CTRL: "\u2303",
  ALT: "\u2325",
  ENTER: "\u21B5",
  ESC: "\u238B",
  TAB: "\u21E5",
  SPACE: "\u2423",
  CAPSLOCK: "\u21EA",
  DELETE: "\u2326",
  INSERT: "\u2324",
  HOME: "\u21F1",
  END: "\u21F2",
  PAGEUP: "\u21DE",
  PAGEDOWN: "\u21DF",
  PRINTSCREEN: "\u2399",
  SCROLLLOCK: "\u21DE",
  PAUSE: "\u23CF",
  NUMLOCK: "\u21EA",
  META: "\u2318",
  WINDOWS: "\u2318",
  CONTEXTMENU: "\u2325",
  COMMAND: "\u2318"
};
const OSName$1 = os();
const KeyStringMaker = (item, os2 = OSName$1) => {
  return (item[os2] || item.key).split("+").map((it) => it.trim()).map((it) => {
    const keyString = it.toUpperCase();
    return keyAlias$1[keyString] || keyString;
  }).join(" ");
};
class EditorElement extends UIElement {
  get notEventRedefine() {
    return true;
  }
  get $editor() {
    if (!this.__cacheParentEditor) {
      let parentElement = this.parent;
      while (parentElement) {
        if (parentElement.$editor) {
          this.__cacheParentEditor = parentElement.$editor;
          break;
        }
        parentElement = parentElement.parent;
      }
    }
    return this.__cacheParentEditor;
  }
  get $context() {
    return this.$editor.context;
  }
  get $store() {
    return this.$context.store || this.parent.$store;
  }
  get localeKey() {
    return "";
  }
  getMessageKey(key) {
    if (this.localeKey) {
      return `${this.localeKey}.${key}`;
    }
    return key;
  }
  $i18n(key, params = {}, locale) {
    return this.$editor.getI18nMessage(this.getMessageKey(key), params, locale);
  }
  $initI18n(key) {
    return this.$editor.initI18nMessage(this.getMessageKey(key));
  }
  get $config() {
    return this.$context.config;
  }
  get $selection() {
    return this.$context.selection;
  }
  get $segmentSelection() {
    return this.$context.segmentSelection;
  }
  get $commands() {
    return this.$context.commands;
  }
  get $viewport() {
    return this.$context.viewport;
  }
  get $snapManager() {
    return this.$context.snapManager;
  }
  get $timeline() {
    return this.$context.timeline;
  }
  get $history() {
    return this.$context.history;
  }
  get $shortcuts() {
    return this.$context.shortcuts;
  }
  get $keyboardManager() {
    return this.$context.keyboardManager;
  }
  get $storageManager() {
    return this.$context.storageManager;
  }
  get $injectManager() {
    return this.$context.injectManager;
  }
  get $model() {
    return this.$context.modelManager;
  }
  get $lockManager() {
    return this.$context.lockManager;
  }
  get $visibleManager() {
    return this.$context.visibleManager;
  }
  get $modeView() {
    return this.$context.modeViewManager;
  }
  get $icon() {
    return this.$context.icon;
  }
  get $stateManager() {
    return this.$context.stateManager;
  }
  get $menu() {
    return this.$context.menuManager;
  }
  notify(type, title, description, duration = 1e3) {
    this.emit(SHOW_NOTIFY, type, title, description, duration);
  }
  alert(title, description, duration = 1e3) {
    this.notify(NotifyType.ALERT, title, description, duration);
  }
  $theme(key) {
    return this.$editor.themeValue(key);
  }
  bodyMouseFirstMove(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_FIRST_MOUSEMOVE, this[methodName], this, e.xy);
    }
  }
  bodyMouseMove(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_MOUSEMOVE, this[methodName], this, e.xy);
    }
  }
  bodyMouseUp(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_MOUSEUP, this[methodName], this, e.xy);
    }
  }
  createFunctionComponent(EventMachineComponent, props, baseClass = EditorElement) {
    return super.createFunctionComponent(EventMachineComponent, props, baseClass);
  }
}
class BlankCanvasView extends EditorElement {
  initState() {
    return {
      cursor: "auto",
      cursorArgs: []
    };
  }
  afterRender() {
    this.nextTick(() => {
      this.refreshCanvasSize();
      this.refreshCursor();
    });
  }
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--page-container",
      tabIndex: "-1",
      ref: "$container"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "page-view",
      ref: "$pageView"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "page-lock scrollbar",
      ref: "$lock"
    }, this.$injectManager.generate("canvas.view"))));
  }
  [BIND("$pageView")]() {
    return {
      style: {
        "--elf--canvas-background-color": this.$config.get("style.canvas.background.color")
      }
    };
  }
  checkSpace() {
    if (this.$context.config.is("editing.mode", EditingMode.HAND)) {
      return true;
    }
    return this.$context.keyboardManager.check(this.$context.shortcuts.getGeneratedKeyCode(KEY_CODE.space));
  }
  [POINTERSTART("$lock") + IF("checkSpace") + MOVE("movePan") + END("moveEndPan")]() {
    this.startMovePan();
  }
  [CONFIG("editing.mode")]() {
    if (this.$config.is("editing.mode", EditingMode.HAND)) {
      this.startMovePan();
      this.$commands.emit("refreshCursor", "grab");
    } else {
      this.$commands.emit("recoverCursor", "auto");
    }
  }
  startMovePan() {
    this.lastDist = create$1();
  }
  movePan(dx, dy) {
    this.$commands.emit("refreshCursor", "grabbing");
    const currentDist = fromValues(dx, dy, 0);
    this.$context.viewport.pan(...transformMat4([], subtract([], this.lastDist, currentDist), this.$context.viewport.scaleMatrixInverse));
    this.lastDist = currentDist;
  }
  refreshCursor() {
    if (this.$context.config.is("editing.mode", EditingMode.HAND)) {
      this.$commands.emit("refreshCursor", "grab");
    } else {
      this.$commands.emit("refreshCursor", "auto");
    }
  }
  moveEndPan() {
    this.refreshCursor();
  }
  async [BIND("$container")]() {
    const cursor = await this.$context.cursorManager.load(this.state.cursor, ...this.state.cursorArgs || []);
    return {
      style: {
        cursor
      }
    };
  }
  [DRAGOVER("$lock") + PREVENT]() {
  }
  [DROP("$lock") + PREVENT](e) {
    const newCenter = this.$context.viewport.getWorldPosition(e);
    if (e.dataTransfer.getData("text/asset")) {
      this.$command.emit("drop.asset", {
        asset: { id: e.dataTransfer.getData("text/asset"), center: newCenter }
      });
    } else {
      const id = Dom.create(e.target).attr("data-id");
      if (id) {
        this.$command.emit("drop.asset", {
          gradient: e.dataTransfer.getData("text/gradient"),
          pattern: e.dataTransfer.getData("text/pattern"),
          color: e.dataTransfer.getData("text/color"),
          imageUrl: e.dataTransfer.getData("image/info")
        }, id);
      } else {
        const imageUrl = e.dataTransfer.getData("image/info");
        this.$command.emit("dropImageUrl", imageUrl);
      }
    }
  }
  [WHEEL("$lock") + PREVENT](e) {
    const [dx, dy] = normalizeWheelEvent(e);
    if (!this.state.gesture) {
      if (e.ctrlKey) {
        this.$context.viewport.setMousePoint(e.clientX, e.clientY);
      }
      this.emit("startGesture");
      this.state.gesture = true;
    } else {
      if (e.ctrlKey) {
        const zoomFactor = 1 - 2.5 * dy / 100;
        this.$context.viewport.zoom(zoomFactor);
      } else {
        const newDx = -2.5 * dx;
        const newDy = -2.5 * dy;
        this.$context.viewport.pan(-newDx / this.$viewport.scale, -newDy / this.$viewport.scale, 0);
      }
    }
    window.clearTimeout(this.state.timer);
    this.state.timer = window.setTimeout(() => {
      this.state.gesture = void 0;
      this.emit("endGesture");
    }, 200);
  }
  refreshCanvasSize() {
    this.$context.viewport.refreshCanvasSize(this.refs.$lock.rect());
  }
  [SUBSCRIBE(RESIZE_WINDOW, RESIZE_CANVAS)]() {
    this.refreshCanvasSize();
  }
  [CONFIG("editor.cursor")]() {
    this.state.cursor = this.$config.get("editor.cursor");
    this.state.cursorArgs = this.$config.get("editor.cursor.args");
    this.bindData("$container");
  }
  [CONFIG("editor.cursor.args")]() {
    this.state.cursor = this.$config.get("editor.cursor");
    this.state.cursorArgs = this.$config.get("editor.cursor.args");
    this.bindData("$container");
  }
  [SUBSCRIBE(UPDATE_VIEWPORT)]() {
    this.$commands.emit("refreshCursor", "auto");
  }
}
class BlankBodyPanel extends EditorElement {
  components() {
    return {
      BlankCanvasView
    };
  }
  template() {
    return `
      <div class="elf--body-panel">
        <div class='editing-area'>
          <div class="canvas-layout">
            ${createComponent("BlankCanvasView")}
          </div>

        </div>
      </div>
    `;
  }
}
class BaseUI extends UIElement {
  get notEventRedefine() {
    return true;
  }
  getValue() {
    return this.props.defaultValue;
  }
  sendEvent() {
    const key = this.props.key;
    const value = this.getValue();
    const params = this.props.params;
    if (isFunction(this.props.onClick)) {
      this.props.onClick(key, value, params);
    } else if (this.props.command) {
      this.$commands.emit(this.props.command, ...this.props.args || []);
    } else if (isString(this.props.action) || isFunction(this.props.action)) {
      this.emit(this.props.action, key, value, params);
    } else if (isArray(this.props.action)) {
      this.emit(this.props.action.map((action) => [action, key, value, params]));
    } else {
      if (this.props.onChange) {
        this.parent.trigger(this.props.onChange, key, value, params);
      }
    }
  }
}
var Button$1 = /* @__PURE__ */ (() => ".elf--button{grid-column-gap:4px;display:grid;grid-template-columns:1fr;height:var(--elf--input-height)}.elf--button.has-label{grid-column-gap:2px;grid-template-columns:64px 1fr}.elf--button.has-label label{font-size:var(--elf--input-font-size);overflow:hidden;padding:7px 0 2px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--button .area{display:block;height:100%}.elf--button .area button{background-color:var(--elf--input-inactive-color);border:0;border-radius:4px;color:var(--elf--input-font-color);display:inline-block;height:100%;width:100%}.elf--button .area button:hover{background-color:var(--elf--selected-color-2);color:var(--elf--selected-font-color)}")();
class Button extends BaseUI {
  initState() {
    return {
      label: this.props.label || "",
      text: this.props.text || "",
      params: this.props.params || ""
    };
  }
  template() {
    return `<div class='small-editor button' ref='$body'></div>`;
  }
  [LOAD("$body") + DOMDIFF]() {
    var { label, text } = this.state;
    var hasLabel = label ? "has-label" : "";
    return `
        <div class='elf--button ${hasLabel}'>
            ${label ? `<label title="${label}">${label}</label>` : ""}
            <div class='area'>
                <button type="button" >${text || label}</button>
            </div>
        </div>
    `;
  }
  getValue() {
    return this.props.defaultValue;
  }
  [CLICK("$el button")]() {
    this.sendEvent();
  }
}
var ToggleButton$1 = /* @__PURE__ */ (() => ".elf--toggle-button{height:24px;width:24px}.elf--toggle-button.has-label{grid-column-gap:2px;grid-template-columns:70px 1fr}.elf--toggle-button.has-label label{overflow:hidden;padding:7px 0 2px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--toggle-button .area{background-color:var(--elf--input-inactive-color);display:block;height:100%;position:relative}.elf--toggle-button .area>div{display:none;height:100%;position:relative;width:100%}.elf--toggle-button .area>div.visible{display:inline-block}.elf--toggle-button .area>div.checked{background-color:var(--elf--selected-color-2);color:var(--elf--selected-font-color)}.elf--toggle-button .area button{align-items:center;box-sizing:border-box;color:var(--elf--input-font-color);display:flex;height:100%;justify-content:center;width:100%;z-index:1}.elf--toggle-button .area button.checked{color:var(--elf--selected-font-color);font-weight:700}.elf--toggle-button .area button svg{height:20px;width:20px}")();
const DEFAULT_LABELS$1 = ["True", "False"];
class ToggleButton extends BaseUI {
  initState() {
    return {
      checkedValue: this.props.checkedValue || this.props.value,
      checked: this.props.value || "false",
      size: this.props.size,
      toggleLabels: this.props.toggleLabels || DEFAULT_LABELS$1,
      toggleTitles: this.props.toggleTitles || [],
      toggleValues: this.props.toggleValues || ["true", "false"]
    };
  }
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "small-editor button",
      ref: "$body"
    });
  }
  [LOAD("$body") + DOMDIFF]() {
    var { checked, checkedValue } = this.state;
    return `
        <div class='elf--toggle-button'>
            <div class='area' ref="$area">
                ${this.state.toggleValues.map((it, index2) => {
      let label = this.state.toggleLabels[index2];
      let title = this.state.toggleTitles[index2];
      return createElementJsx("div", {
        class: `${it === checked ? "visible" : ""} ${it === checkedValue ? "checked" : ""}`
      }, createElementJsx("button", {
        type: "button",
        "data-index": index2,
        class: it === checkedValue ? "checked" : "",
        value: it,
        title,
        style: "--elf--toggle-checkbox-tooltip-top: -20%;"
      }, label));
    }).join("")}
            </div>
        </div>
    `;
  }
  [BIND("$area")]() {
    const selectedIndex = this.state.toggleValues.findIndex((v) => v === this.state.checked);
    return {
      "data-selected-index": selectedIndex
    };
  }
  setValue(checked) {
    this.setState({
      checked
    });
  }
  getValue() {
    return this.state.checked;
  }
  [CLICK("$el button") + PREVENT + STOP](e) {
    const value = e.$dt.value;
    const selectedIndex = this.state.toggleValues.findIndex((v) => v === value);
    const nextValue = this.state.toggleValues[(selectedIndex + 1) % this.state.toggleValues.length];
    this.setValue(nextValue);
    this.trigger("change");
  }
  [SUBSCRIBE_SELF("change")]() {
    this.sendEvent();
  }
}
var ToggleCheckBox$1 = /* @__PURE__ */ (() => '.elf--toggle-checkbox{border:1px solid transparent;border-radius:2px;display:grid;grid-template-columns:1fr;height:var(--elf--input-height);overflow:hidden}.elf--toggle-checkbox:hover,.elf--toggle-checkbox:hover .area,.elf--toggle-checkbox:hover .area>*{border-color:var(--elf--input-border-color)}.elf--toggle-checkbox.has-label{grid-column-gap:2px;grid-template-columns:70px 1fr}.elf--toggle-checkbox.has-label label{overflow:hidden;padding:7px 0 2px 2px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--toggle-checkbox .area{--selected-button-size:50%;--selected-button-position:0%;--unit-count:2;display:block;display:grid;grid-template-columns:repeat(var(--unit-count),1fr);height:100%;position:relative}.elf--toggle-checkbox .area>div{border-right:1px solid transparent;display:inline-block;position:relative;width:100%}.elf--toggle-checkbox .area>div:last-child{border-right:0}.elf--toggle-checkbox .area:before{background-color:var(--elf--selected-color-2);box-shadow:0 0 0 0 rgba(0,0,0,.1);content:"";display:block;height:100%;left:var(--selected-button-position);pointer-events:none;position:absolute;top:0;transition:all .2s ease-in-out;width:var(--selected-button-size);z-index:0}.elf--toggle-checkbox .area>*{z-index:1}.elf--toggle-checkbox .area button{box-sizing:border-box;color:var(--elf--font-color);display:inline-block;font-size:var(--elf--input-font-size);height:100%;padding:4px 8px;text-align:center;vertical-align:middle;width:100%;z-index:1}.elf--toggle-checkbox .area button:hover:not(.checked){background-color:var(--elf--input-background-color)}.elf--toggle-checkbox .area button.checked{color:var(--elf--selected-font-color);font-weight:700}')();
const DEFAULT_LABELS = ["True", "False"];
class ToggleCheckBox extends BaseUI {
  initState() {
    return {
      label: this.props.label || "",
      checked: this.props.value || false,
      toggleLabels: this.props.toggleLabels || DEFAULT_LABELS,
      toggleTitles: this.props.toggleTitles || [],
      toggleValues: this.props.toggleValues || [true, false]
    };
  }
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "small-editor button",
      ref: "$body"
    });
  }
  [LOAD("$body")]() {
    var { label, checked } = this.state;
    var hasLabel = label ? "has-label" : "";
    return `
        <div class='elf--toggle-checkbox ${hasLabel}'>
            ${label ? `<label title="${label}">${label}</label>` : ""}
            <div class='area' ref="$area">
                ${this.state.toggleValues.map((it, index2) => {
      let label2 = this.state.toggleLabels[index2];
      let title = this.state.toggleTitles[index2];
      return createElementJsx("div", null, createElementJsx("button", {
        type: "button",
        class: `${it === checked ? "checked" : ""}`,
        "data-index": index2,
        title,
        style: "--elf--toggle-checkbox-tooltip-top: -20%;"
      }, label2));
    }).join("")}
            </div>
        </div>
    `;
  }
  [BIND("$area")]() {
    const selectedIndex = this.state.toggleValues.findIndex((v) => v === this.state.checked);
    const unit = 100 / this.state.toggleValues.length;
    return {
      "data-selected-index": selectedIndex,
      cssText: `
                --unit-count: ${this.state.toggleValues.length};
                --button-font-size: ${13 - this.state.toggleValues.length}px ;
                --selected-button-size: ${1 / this.state.toggleValues.length * 100}%;
                --selected-button-position: ${selectedIndex * unit}%;
            `
    };
  }
  setValue(checked) {
    this.setState({
      checked
    });
  }
  getValue() {
    return this.state.checked;
  }
  [CLICK("$el button")](e) {
    const index2 = +e.$dt.data("index");
    this.setValue(this.state.toggleValues[index2]);
    this.trigger("change");
  }
  [SUBSCRIBE_SELF("change")]() {
    this.sendEvent();
  }
}
class TabPanel extends UIElement {
  initState() {
    return {
      value: this.props.value || ""
    };
  }
  template() {
    const { content } = this.props;
    const { value } = this.state;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "tab-content scrollbar",
      "data-value": value
    }, content);
  }
}
var Tabs$1 = /* @__PURE__ */ (() => '.tab{bottom:0;color:var(--elf--font-color);left:0;position:absolute;right:0;top:0}.tab.number-tab.padding-5 .tab-content{padding:5px}.tab.number-tab.padding-10 .tab-content{padding:10px}.tab.number-tab.side-tab.side-tab-left>.tab-header{background-color:var(--elf--toolbar-background-color);bottom:0;box-sizing:border-box;display:flex;flex-direction:column;height:auto;left:0;overflow:visible;padding:0;position:absolute;text-align:center;top:0;width:60px}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item{align-items:center;background-color:var(--elf--toolbar-background-color)!important;border-bottom:0!important;border:0;display:flex;flex:none;height:50px;justify-content:center;margin:0 auto;position:relative;width:60px;width:100%}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item:before{border-radius:4px;content:"";display:inline-block;height:32px;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:32px}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item:hover label{color:var(--elf--selected-font-color)!important}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item.selected{color:var(--elf--selected-font-color);margin-left:0}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item.selected:before{background-color:var(--elf--selected-color-2)}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item.selected label svg{color:var(--elf--selected-font-color)}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item.extra-item{flex:1 1 auto;overflow:auto}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item label{display:inline-block;height:24px;left:50%;padding:0;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:24px;z-index:1}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item label svg{height:24px;width:24px}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item label svg path,.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item label svg use{fill:currentColor}.tab.number-tab.side-tab.side-tab-left>.tab-header>.tab-item .title{color:var(--elf--selected-font-color);overflow:hidden;padding-bottom:5px;text-overflow:ellipsis;white-space:wrap;word-break:break-all}.tab.number-tab.side-tab.side-tab-left>.tab-body{bottom:0;left:60px;right:0;top:0}.tab.number-tab>.tab-content{display:none}.tab.number-tab>.tab-content.selected{display:block}.tab.number-tab>.tab-body{top:34px}.tab>.tab-header{box-sizing:border-box;display:flex;height:40px;left:0;padding:0 10px;position:absolute;right:0;z-index:1}.tab>.tab-header.no-border>.tab-item{border:0!important}.tab>.tab-header>.tab-item{cursor:pointer;gap:10px;height:100%;margin-right:10px;padding:0;position:relative;text-align:center}.tab>.tab-header>.tab-item.selected label,.tab>.tab-header>.tab-item:hover label{color:var(--elf--font-color)}.tab>.tab-header>.tab-item.selected label{font-weight:600}.tab>.tab-header>.tab-item label{box-sizing:border-box;color:var(--elf--tab-font-color);display:inline-block;height:100%;line-height:24px;padding:12px 0;pointer-events:none;vertical-align:middle}.tab>.tab-header>.tab-item:first-child:hover label{left:10px}.tab>.tab-header>.tab-item:last-child:hover label{left:auto;right:10px}.tab>.tab-header>.tab-item:hover label{opacity:1}.tab>.tab-body{bottom:0;left:0;position:absolute;right:0;top:40px}.tab>.tab-body.no-border{border:0}.tab>.tab-body>.tab-content{bottom:0;display:none;left:0;overflow:auto;position:absolute;right:0;top:0}.tab>.tab-body>.tab-content.selected{display:block}.tab>.tab-body>.tab-content.selected.flex{display:flex;flex-direction:column}.tab>.tab-body>.tab-content .fixed{flex:none}.tab>.tab-body>.tab-content .scroll{flex:1 1 auto;overflow:auto;position:relative}')();
class Tabs extends UIElement {
  afterRender() {
    window.setTimeout(() => {
      this.setValue(this.state.selectedValue);
    }, 0);
  }
  initState() {
    return {
      type: this.props.type || "number",
      direction: this.props.direction || "",
      selectedValue: this.props.selectedValue || ""
    };
  }
  template() {
    return `
        <div class="tab number ${this.state.type === "side" ? `number-tab side-tab` : ""} side-tab-${this.state.direction}" ref="$tab"></div>
      `;
  }
  [LOAD("$tab")]() {
    const { content, contentChildren = [] } = this.props;
    const children = contentChildren.filter((it) => it.component === TabPanel);
    return [
      /* @__PURE__ */ createElementJsx("div", {
        class: "tab-header",
        ref: "$header"
      }, children.map((it) => /* @__PURE__ */ createElementJsx("div", {
        class: "tab-item",
        "data-value": it.props.value,
        title: it.props.title
      }, /* @__PURE__ */ createElementJsx("label", {
        class: "title"
      }, it.props.icon || it.props.title)))),
      /* @__PURE__ */ createElementJsx("div", {
        class: "tab-body",
        ref: "$body"
      }, content)
    ];
  }
  [CLICK("$header .tab-item:not(.empty-item)")](e) {
    var selectedValue = e.$dt.attr("data-value");
    this.setValue(selectedValue);
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.getValue());
  }
  getValue() {
    return this.state.selectedValue;
  }
  setValue(selectedValue) {
    var _a, _b;
    (_a = this.$el.$(`* > .tab-item[data-value="${selectedValue}"]`)) == null ? void 0 : _a.onlyOneClass("selected");
    (_b = this.$el.$(`* > .tab-content[data-value="${selectedValue}"]`)) == null ? void 0 : _b.onlyOneClass("selected");
    this.updateData({ selectedValue });
  }
}
var DefaultLayout$1 = /* @__PURE__ */ (() => ".elf--default-layout,.elf--default-layout-container{bottom:0;left:0;position:absolute;right:0;top:0}.elf--default-layout{display:flex;flex-direction:column}.elf--default-layout .layout-top{box-sizing:border-box;flex:none;height:48px;position:relative;z-index:10000}.elf--default-layout .layout-bottom{box-sizing:border-box;display:flex;flex:none;height:20px;position:relative;z-index:10000}.elf--default-layout .layout-middle{box-sizing:border-box;display:flex;flex:1 1 auto;flex-direction:row;overflow:hidden;position:relative}.elf--default-layout .layout-middle>.splitter{bottom:0;cursor:ew-resize;left:340px;position:absolute;top:0;transition:all .05s linear;width:4px;z-index:1}.elf--default-layout .layout-middle>.splitter.selected,.elf--default-layout .layout-middle>.splitter:hover{background-color:var(--elf--selected-color)}.elf--default-layout .layout-middle .layout-left{border-right:1px solid var(--elf--layout-border-color);box-sizing:border-box;display:flex;flex:none;flex-direction:column;overflow:hidden;position:relative;transition:width .05s linear;width:340px}.elf--default-layout .layout-middle .layout-right{border-left:1px solid var(--elf--layout-border-color);display:flex;flex:none;flex-direction:column;overflow:auto;overflow:hidden;position:relative;transition:width .05s linear;width:280px;z-index:100}.elf--default-layout .layout-middle .layout-right.closed{width:10px!important}.elf--default-layout .layout-middle .layout-body{flex:1 1 auto;position:relative}")();
function round(n, k) {
  k = typeof k === "undefined" ? 1 : k;
  return Math.round(n * k) / k;
}
function degreeToRadian(degrees) {
  return degrees * (Math.PI / 180);
}
function radianToDegree(radian) {
  var angle = radian * (180 / Math.PI);
  if (angle < 0) {
    angle = 360 + angle;
  }
  return angle;
}
function getDist(x, y, centerX = 0, centerY = 0) {
  return distance([x, y], [centerX, centerY]);
}
function vertiesMap(verties, transformView) {
  if (verties.length === 1) {
    return [transformMat4([], verties[0], transformView)];
  } else if (verties.length === 2) {
    return [
      transformMat4([], verties[0], transformView),
      transformMat4([], verties[1], transformView)
    ];
  } else if (verties.length === 3) {
    return [
      transformMat4([], verties[0], transformView),
      transformMat4([], verties[1], transformView),
      transformMat4([], verties[2], transformView)
    ];
  } else if (verties.length === 4) {
    return [
      transformMat4([], verties[0], transformView),
      transformMat4([], verties[1], transformView),
      transformMat4([], verties[2], transformView),
      transformMat4([], verties[3], transformView)
    ];
  } else if (verties.length === 5) {
    return [
      transformMat4([], verties[0], transformView),
      transformMat4([], verties[1], transformView),
      transformMat4([], verties[2], transformView),
      transformMat4([], verties[3], transformView),
      transformMat4([], verties[4], transformView)
    ];
  }
  return verties.map((v) => {
    return transformMat4([], v, transformView);
  });
}
function calculateMatrix(...args) {
  const view = create$2();
  args.forEach((v) => {
    multiply(view, view, v);
  });
  return view;
}
function calculateMatrixInverse(...args) {
  return invert([], calculateMatrix(...args));
}
const UUID_REG = /[xy]/g;
function uuid() {
  var dt = new Date().getTime();
  var uuid2 = "xxx12-xx-34xx".replace(UUID_REG, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid2;
}
const stringToPercent = {
  center: 50,
  top: 0,
  left: 0,
  right: 100,
  bottom: 100
};
class Position {
}
Position.CENTER = "center";
Position.TOP = "top";
Position.RIGHT = "right";
Position.LEFT = "left";
Position.BOTTOM = "bottom";
const REG_CSS_UNIT = /([\d.]+)(px|pt|fr|r?em|deg|vh|vw|m?s|%|g?rad|turn)/gi;
class Length {
  constructor(value = "", unit = "") {
    this.value = value;
    if (isNumber(this.value) && isNaN(this.value)) {
      this.value = 0;
    }
    this.unit = unit;
  }
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return this.value;
    }
    return this.toString();
  }
  static min(...args) {
    var min = args.shift();
    for (var i = 0, len = args.length; i < len; i++) {
      if (min.value > args[i].value) {
        min = args[i];
      }
    }
    return min;
  }
  static max(...args) {
    var max = args.shift();
    for (var i = 0, len = args.length; i < len; i++) {
      if (max.value < args[i].value) {
        max = args[i];
      }
    }
    return max;
  }
  static string(value) {
    return new Length(value + "", "");
  }
  static number(value) {
    return new Length(+value, "number");
  }
  static px(value) {
    return new Length(+value, "px");
  }
  static em(value) {
    return new Length(+value, "em");
  }
  static percent(value) {
    return new Length(+value, "%");
  }
  static makePercent(value, maxValue) {
    return Length.percent(value / maxValue * 100);
  }
  static deg(value) {
    return new Length(+value, "deg");
  }
  static rad(value) {
    return new Length(+value, "rad");
  }
  static turn(value) {
    return new Length(+value, "turn");
  }
  static fr(value) {
    return new Length(+value, "fr");
  }
  static second(value) {
    return new Length(+value, "s");
  }
  static ms(value) {
    return new Length(+value, "ms");
  }
  static var(value) {
    return new Length(value + "", "--");
  }
  static z() {
    return 0;
  }
  static calc(str) {
    return new Length(str, "calc");
  }
  static parse(obj2) {
    obj2 = obj2 || Length.number(0);
    if (isString(obj2)) {
      obj2 = obj2.trim();
      var arr = obj2.replace(REG_CSS_UNIT, "$1 $2").split(" ");
      var isNumberString = +arr[0] == arr[0];
      if (isNumberString) {
        return new Length(+arr[0], arr[1]);
      } else {
        return new Length(arr[0]);
      }
    }
    if (obj2 instanceof Length) {
      return obj2;
    } else if (obj2.unit) {
      if (obj2.unit == "%" || obj2.unit == "percent") {
        var value = 0;
        if (isNotUndefined(obj2.percent)) {
          value = obj2.percent;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.percent(value);
      } else if (obj2.unit == "px") {
        var value = 0;
        if (isNotUndefined(obj2.px)) {
          value = obj2.px;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return value;
      } else if (obj2.unit == "em") {
        var value = 0;
        if (isNotUndefined(obj2.em)) {
          value = obj2.em;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.em(value);
      } else if (obj2.unit == "deg") {
        var value = 0;
        if (isNotUndefined(obj2.deg)) {
          value = obj2.deg;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.deg(value);
      } else if (obj2.unit == "turn") {
        var value = 0;
        if (isNotUndefined(obj2.deg)) {
          value = obj2.turn;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.turn(value);
      } else if (obj2.unit == "s") {
        var value = 0;
        if (isNotUndefined(obj2.second)) {
          value = obj2.second;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.second(value);
      } else if (obj2.unit == "ms") {
        var value = 0;
        if (isNotUndefined(obj2.ms)) {
          value = obj2.ms;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.ms(value);
      } else if (obj2.unit == "number") {
        var value = 0;
        if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.number(value);
      } else if (obj2.unit == "--") {
        var value = 0;
        if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.var(value);
      } else if (obj2.unit === "" || obj2.unit === "string") {
        var value = "";
        if (isNotUndefined(obj2.str)) {
          value = obj2.str;
        } else if (isNotUndefined(obj2.value)) {
          value = obj2.value;
        }
        return Length.string(value);
      }
    }
    return Length.string(obj2);
  }
  toString() {
    return this.getUnitText();
  }
  getUnitText() {
    switch (this.unit) {
      case "string":
      case "number":
        return this.value + "";
      case "var":
        return `var(--${this.value})`;
      case "calc":
        return `calc(${this.value})`;
      default:
        return this.value + this.unit;
    }
  }
  isUnitType(unit) {
    return this.unit === unit;
  }
  isCalc() {
    return this.isUnitType("calc");
  }
  isFr() {
    return this.isUnitType("fr");
  }
  isPercent() {
    return this.isUnitType("%");
  }
  isPx() {
    return this.isUnitType("px");
  }
  isEm() {
    return this.isUnitType("em");
  }
  isDeg() {
    return this.isUnitType("deg");
  }
  isRad() {
    return this.isUnitType("rad");
  }
  isTurn() {
    return this.isUnitType("turn");
  }
  isSecond() {
    return this.isUnitType("s");
  }
  isMs() {
    return this.isUnitType("ms");
  }
  isNumber() {
    return this.isUnitType("number") || this.isUnitType("");
  }
  isString() {
    return this.isUnitType("");
  }
  isVar() {
    return this.isUnitType("--");
  }
  isNaN() {
    return isNumber(this.value) && isNaN(this.value);
  }
  set(value) {
    this.value = value;
    return this;
  }
  add(obj2) {
    this.value += +obj2;
    return this;
  }
  sub(obj2) {
    return this.add(-1 * obj2);
  }
  mul(obj2) {
    this.value *= +obj2;
    return this;
  }
  div(obj2) {
    this.value /= +obj2;
    return this;
  }
  mod(obj2) {
    this.value %= +obj2;
    return this;
  }
  clone() {
    return new Length(this.value, this.unit);
  }
  getUnitName() {
    return this.unit === "%" ? "percent" : this.unit;
  }
  get isAuto() {
    return this.value === "auto" || this.unit === "auto";
  }
  get isNotAuto() {
    return !this.isAuto;
  }
  toJSON() {
    return this.toString();
  }
  rate(maxValue = 100) {
    return this.value / maxValue;
  }
  stringToPercent() {
    if (isNotUndefined(stringToPercent[this.value])) {
      return Length.percent(stringToPercent[this.value]);
    }
    return Length.percent(0);
  }
  stringToEm(maxValue) {
    return this.stringToPercent().toEm(maxValue);
  }
  stringToPx(maxValue) {
    return this.stringToPercent().toPx(maxValue);
  }
  toPercent(maxValue, fontSize = 16) {
    if (this.isPercent()) {
      return this.clone();
    } else if (this.isPx()) {
      return Length.percent(this.value * 100 / maxValue);
    } else if (this.isEm()) {
      return Length.percent(this.value * fontSize * 100 / maxValue);
    } else if (this.isString()) {
      return this.stringToPercent(maxValue);
    } else if (this.isDeg()) {
      return Length.percent(this.value / 360 * 100);
    }
  }
  toEm(maxValue, fontSize = 16) {
    if (this.isPercent()) {
      return Length.em(this.value / 100 * maxValue / fontSize);
    } else if (this.isPx()) {
      return Length.em(this.value / fontSize);
    } else if (this.isEm()) {
      return this.clone();
    } else if (this.isString()) {
      return this.stringToEm(maxValue);
    }
  }
  toPx(maxValue, fontSize = 16) {
    if (this.isPercent()) {
      if (isUndefined(maxValue)) {
        return this;
      }
      return Length.px(this.value / 100 * maxValue);
    } else if (this.isPx()) {
      return this.clone();
    } else if (this.isEm()) {
      return Length.px(this.value / 100 * maxValue / fontSize);
    } else if (this.isString()) {
      return this.stringToPx(maxValue);
    } else if (this.isNumber()) {
      return Length.px(this.value).toPx(maxValue);
    }
  }
  toDeg() {
    if (this.isDeg()) {
      return this.clone();
    } else if (this.isTurn()) {
      return Length.deg(this.value * 360);
    } else if (this.isRad()) {
      return Length.deg(radianToDegree(this.value));
    }
  }
  toRad() {
    if (this.isRad()) {
      return this.clone();
    } else if (this.isTurn()) {
      const deg = this.toDeg();
      return Length.rad(degreeToRadian(deg.value));
    } else if (this.isDeg()) {
      return Length.rad(degreeToRadian(this.value));
    }
  }
  toTurn() {
    if (this.isTurn()) {
      return this.clone();
    } else if (this.isDeg()) {
      return Length.turn(this.value / 360);
    }
  }
  toSecond() {
    if (this.isSecond()) {
      return this;
    } else if (this.isMs()) {
      return Length.second(this.value / 1e3);
    }
  }
  toMs() {
    if (this.isSecond()) {
      return Length.ms(this.value * 1e3);
    } else if (this.isMs()) {
      return this;
    }
  }
  to(unit, maxValue, fontSize = 16) {
    if (unit === "px") {
      return this.toPx(maxValue, fontSize);
    } else if (unit === "%" || unit === "percent") {
      return this.toPercent(maxValue, fontSize);
    } else if (unit === "em") {
      return this.toEm(maxValue, fontSize);
    } else if (unit === "deg") {
      return this.toDeg();
    } else if (unit === "turn") {
      return this.toTurn();
    }
  }
  toUnit(unit) {
    return new Length(this.value, unit);
  }
  calculate(type, dist2) {
    var func = this[type];
    if (func) {
      return func.call(this, dist2);
    }
    return this;
  }
  includes(...arr) {
    return arr.includes(this.value);
  }
  round(k) {
    return new Length(round(this.value, k), this.unit);
  }
  floor() {
    return new Length(Math.floor(this.value), this.unit);
  }
  equals(t) {
    return this.is(t.value) && this.isUnitType(t.unit);
  }
  is(value) {
    return this.value === value;
  }
  clamp(min, max) {
    return new Length(Math.max(min, Math.min(max, this.value)), this.unit);
  }
  isZero() {
    return this.value === 0;
  }
  changeUnitValue(px, maxValue) {
    const unit = this.unit;
    return Length.px(px).to(unit, maxValue);
  }
  toObject() {
    return { value: this.value, unit: this.unit };
  }
}
Length.auto = Length.string("auto");
const DefaultLayoutDirection = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
  BODY: "body",
  INNER: "inner",
  OUTER: "outer"
};
class DefaultLayoutItem extends EditorElement {
  get size() {
    return this.props.size;
  }
}
class DefaultLayout extends EditorElement {
  getLayoutElements() {
    return this.refs;
  }
  initState() {
    return {
      showLeftPanel: isNotUndefined(this.props.showLeftPanel) ? Boolean(this.props.showLeftPanel) : true,
      showRightPanel: isNotUndefined(this.props.showRightPanel) ? Boolean(this.props.showRightPanel) : true,
      topSize: isNotUndefined(this.props.topSize) ? Number(this.props.topSize) : 48,
      leftSize: isNotUndefined(this.props.leftSize) ? Number(this.props.leftSize) : 340,
      rightSize: isNotUndefined(this.props.rightSize) ? Number(this.props.rightSize) : 280,
      bottomSize: this.props.bottomSize || 20,
      lastBottomSize: this.props.lastBottomSize || 150,
      minSize: isNotUndefined(this.props.minSize) ? Boolean(this.props.minSize) : 240,
      maxSize: isNotUndefined(this.props.maxSize) ? Boolean(this.props.maxSize) : 500
    };
  }
  getDirection(direction) {
    return this.getChildContent((it) => it.props.type === direction);
  }
  template() {
    const top = this.getDirection(DefaultLayoutDirection.TOP);
    const left = this.getDirection(DefaultLayoutDirection.LEFT);
    const right = this.getDirection(DefaultLayoutDirection.RIGHT);
    const bottom = this.getDirection(DefaultLayoutDirection.BOTTOM);
    const body = this.getDirection(DefaultLayoutDirection.BODY);
    const inner = this.getDirection(DefaultLayoutDirection.INNER);
    const outer = this.getDirection(DefaultLayoutDirection.OUTER);
    let leftWidth = this.state.leftSize;
    if (!this.state.showLeftPanel) {
      leftWidth = 0;
    }
    let rightWidth = this.state.rightSize;
    if (!this.state.showRightPanel) {
      rightWidth = 0;
    }
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--default-layout-container"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: `elf--default-layout`
    }, top ? /* @__PURE__ */ createElementJsx("div", {
      class: "layout-top",
      ref: "$topPanel"
    }, top) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "layout-middle",
      ref: "$middle"
    }, left ? /* @__PURE__ */ createElementJsx("div", {
      class: "layout-left",
      style: {
        width: leftWidth
      },
      ref: "$leftPanel"
    }, left) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "layout-body",
      ref: "$bodyPanel"
    }, body), right ? /* @__PURE__ */ createElementJsx("div", {
      class: classnames("layout-right", {
        closed: !this.state.showRightPanel
      }),
      style: {
        width: rightWidth
      },
      ref: "$rightPanel"
    }, right) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "splitter",
      ref: "$splitter",
      style: {
        left: leftWidth
      }
    })), bottom ? /* @__PURE__ */ createElementJsx("div", {
      class: "layout-bottom",
      ref: "$bottomPanel"
    }, bottom) : void 0, inner), outer);
  }
  setOptions(obj2 = {}) {
    this.setState(obj2);
  }
  [POINTERSTART("$splitter") + MOVE("moveSplitter") + END("moveEndSplitter")]() {
    this.leftSize = this.state.leftSize;
    this.refs.$splitter.addClass("selected");
  }
  moveSplitter(dx) {
    this.setState({
      leftSize: Math.max(Math.min(this.leftSize + Math.floor(dx), this.state.maxSize), this.state.minSize)
    });
  }
  moveEndSplitter() {
    this.refs.$splitter.removeClass("selected");
  }
}
var ColorSingleEditor$1 = /* @__PURE__ */ (() => ".elf--color-single-editor{height:30px;text-align:center;width:100%}.elf--color-single-editor .preview{height:100%}.elf--color-single-editor .preview .mini-view{background-color:transparent;background-image:linear-gradient(45deg,#8b8b8b 25%,transparent 0),linear-gradient(-45deg,#8b8b8b 25%,transparent 0),linear-gradient(45deg,transparent 75%,#8b8b8b 0),linear-gradient(-45deg,transparent 75%,#8b8b8b 0);background-position:0 0,0 5.5px,5.5px -5.5px,-5.5px 0;background-size:11px 11px;border:1px solid var(--elf--input-border-color);height:100%}.elf--color-single-editor .preview .mini-view .color-view{cursor:pointer;height:100%}")();
class ColorSingleEditor extends EditorElement {
  initState() {
    return {
      params: this.props.params,
      color: this.props.color || "rgba(0, 0, 0, 1)"
    };
  }
  updateData(opt = {}) {
    this.setState(opt, false);
    this.modifyColor();
  }
  modifyColor() {
    this.parent.trigger(this.props.onchange, this.props.key, this.state.color, this.state.params);
  }
  changeColor(color2) {
    this.setState({ color: color2 });
  }
  setValue(color2) {
    this.changeColor(color2);
  }
  [BIND("$miniView")]() {
    return {
      style: {
        "background-color": this.state.color
      }
    };
  }
  template() {
    return `
            <div class='elf--color-single-editor'>
                <div class='preview' ref='$preview'>
                    <div class='mini-view'>
                        <div class='color-view' style="background-color: ${this.state.color}" ref='$miniView'></div>
                    </div>
                </div>
            </div>
        `;
  }
  [CLICK("$preview")]() {
    this.viewColorPicker();
  }
  viewColorPicker() {
    this.emit("showColorPickerPopup", {
      target: this,
      changeEvent: (color2) => {
        this.refs.$miniView.cssText(`background-color: ${color2}`);
        this.updateData({ color: color2 });
      },
      color: this.state.color
    });
  }
}
var ColorViewEditor$1 = /* @__PURE__ */ (() => ".elf--color-view-editor{border:1px solid transparent;box-sizing:border-box;display:grid;grid-template-columns:1fr;height:var(--elf--input-height);text-align:center}.elf--color-view-editor input{outline:none}.elf--color-view-editor.focused{border-color:var(--elf--selected-color);border-width:1px;box-shadow:0 0 0 1px var(--elf--selected-color)}.elf--color-view-editor.focused .opacity-input{border-left:1px solid var(--elf--input-border-color)}.elf--color-view-editor:hover:not(.focused):not(.drag){border-color:var(--elf--input-border-color)}.elf--color-view-editor:hover:not(.focused):not(.drag) .opacity-input{border-left:1px solid var(--elf--input-border-color)}.elf--color-view-editor.has-label{grid-template-columns:70px 1fr}.elf--color-view-editor.has-label.compact{grid-template-columns:40px 1fr}.elf--color-view-editor.has-label.compact .color-code{grid-template-columns:26px 1fr 40px}.elf--color-view-editor.has-label label{line-height:1.6;padding:6px 4px 2px 2px;text-align:left;vertical-align:middle}.elf--color-view-editor.has-label label span{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.elf--color-view-editor.mini .color-input{display:none}.elf--color-view-editor.mini .color-code{grid-template-columns:26px 50px}.elf--color-view-editor .color-code{grid-column-gap:2px;border:1px solid transparent;border-radius:2px;box-sizing:border-box;display:grid;grid-template-columns:26px 1fr 50px;overflow:hidden;text-transform:uppercase;vertical-align:middle}.elf--color-view-editor .color-code .preview{align-items:center;background-color:transparent;border-radius:2px;cursor:pointer;display:flex;justify-content:flex-start;padding:2px;vertical-align:middle}.elf--color-view-editor .color-code .preview .mini-view{background-color:transparent;background-image:linear-gradient(45deg,#c7c7c7 25%,transparent 0),linear-gradient(-45deg,#c7c7c7 25%,transparent 0),linear-gradient(45deg,transparent 75%,#c7c7c7 0),linear-gradient(-45deg,transparent 75%,#c7c7c7 0);background-position:0 0,0 3px,3px -3px,-3px 0;background-size:6px 6px;border:1px solid var(--elf--input-border-color);box-sizing:border-box;display:grid;grid-template-columns:1fr 1fr;height:20px;overflow:hidden;position:relative;vertical-align:middle;width:20px}.elf--color-view-editor .color-code .preview .mini-view .color-view{box-shadow:0 0 0 .1px var(--elf--input-border-color)}.elf--color-view-editor .color-code input{background-color:transparent;border:0;border-radius:3px;font-size:11px;height:100%;padding:0 3px;text-transform:uppercase;width:100%}")();
class ColorViewEditor extends EditorElement {
  initState() {
    const value = this.props.value || "rgba(0, 0, 0, 1)";
    const compact = isBoolean(this.props.compact) ? this.props.compact : this.props.compact === "true";
    const mini = isBoolean(this.props.mini) ? this.props.mini : this.props.mini === "true";
    return {
      label: this.props.label,
      title: this.props.title,
      value,
      compact,
      mini,
      color: Color.parse(value),
      colorFocus: false,
      opacityFocus: false
    };
  }
  updateData(opt = {}) {
    this.setState(opt);
    this.modifyColor();
  }
  updateEndData(opt = {}) {
    this.setState(opt);
    this.modifyEndColor();
  }
  getValue() {
    return this.state.value;
  }
  setValue(value) {
    this.changeColor(value);
  }
  modifyColor() {
    this.parent.trigger(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
  modifyEndColor() {
    this.parent.trigger(this.props.onchangeend, this.props.key, this.state.value, this.props.params);
  }
  changeColor(value) {
    this.setState({
      value,
      color: Color.parse(value)
    });
  }
  get alpha() {
    return this.state.color.a * 100;
  }
  get hexColor() {
    return Color.formatWithoutAlpha(this.state.color, "hex");
  }
  get fullColor() {
    return Color.format(this.state.color, this.state.color.type);
  }
  refresh() {
    this.refreshColorView();
    this.refs.$colorCode.val(this.state.value);
    this.refs.$opacityCode.val(this.alpha);
  }
  refreshColorView() {
    this.bindData("$miniView1");
    this.bindData("$miniView2");
  }
  template() {
    var { label, title } = this.state;
    return `
            <div class='elf--color-view-editor'>
                ${label ? `<label data-tooltip="${title}"><span>${label}</span></label>` : ""}            
                <div class='color-code' ref="$container">
                    <div class='preview' ref='$preview'>
                        <div class='mini-view'>
                            <div class='color-view' ref='$miniView1'></div>
                            <div class='color-view' ref='$miniView2'></div>
                        </div>
                    </div>                
                    <div class="color-input">
                        <input type="text" ref='$colorCode' value='${this.state.value}' tabIndex="1" />
                    </div>
                    <div class="opacity-input">                    
                        <input type="number" ref='$opacityCode' value='${this.alpha}' tabIndex="2" max="100" min="0" step="0.1" />
                    </div>                    
                </div>
            </div>
        `;
  }
  [BIND("$el")]() {
    var { label, compact, mini, colorFocus, opacityFocus } = this.state;
    return {
      class: [
        "elf--color-view-editor",
        {
          "has-label": label,
          compact,
          mini
        },
        {
          focused: colorFocus || opacityFocus
        }
      ]
    };
  }
  [BIND("$miniView1")]() {
    return {
      style: {
        "background-color": this.hexColor
      }
    };
  }
  [BIND("$miniView2")]() {
    return {
      style: {
        "background-color": this.fullColor
      }
    };
  }
  [BIND("$colorCode")]() {
    return {
      value: this.props.format ? this.hexColor : this.state.value
    };
  }
  [BIND("$opacityCode")]() {
    return {
      value: this.alpha
    };
  }
  [FOCUSIN("$colorCode")]() {
    this.setState({
      colorFocus: true
    });
    this.refs.$colorCode.select();
  }
  [FOCUSOUT("$colorCode")]() {
    this.setState({
      colorFocus: false
    });
  }
  [FOCUSIN("$opacityCode")]() {
    this.setState({
      opacityFocus: true
    });
    this.refs.$opacityCode.select();
  }
  [FOCUSOUT("$opacityCode")]() {
    this.setState({
      opacityFocus: false
    });
  }
  [CLICK("$preview")]() {
    this.viewColorPicker();
  }
  viewColorPicker() {
    this.emit("showColorPickerPopup", {
      target: this,
      changeEvent: (color2) => {
        this.updateData({ value: color2, color: Color.parse(color2) });
      },
      changeEndEvent: (color2) => {
        this.updateEndData({ value: color2, color: Color.parse(color2) });
      },
      color: this.state.value
    }, null, this.$el.rect());
  }
  [CLICK("$remove")]() {
    this.updateData({ value: "" });
  }
  [INPUT("$el .color-input input")](e) {
    var color2 = e.$dt.value;
    this.updateData({
      value: color2,
      color: Color.parse(color2)
    });
    this.refreshColorView();
  }
  [INPUT("$el .opacity-input input")](e) {
    var opacity = +e.$dt.value;
    opacity = Math.max(0, Math.min(100, opacity));
    const color2 = Color.parse(this.state.value);
    color2.a = round(opacity / 100, 1e3);
    const value = Color.format(color2, color2.type);
    this.updateData({
      value,
      color: color2
    });
    this.refreshColorView();
  }
}
var ComponentEditor$1 = /* @__PURE__ */ (() => ".component-editor{--column-gap:2px;--row-gap:2px;padding-bottom:5px}.component-editor .component-folder.close>label>svg{transform:rotate(0deg)}.component-editor .component-folder.close>ul{display:none}.component-editor .component-folder>label{cursor:pointer}.component-editor .component-folder>label>svg{fill:var(--elf--font-color);height:16px;transform:rotate(90deg);transition:all .1s ease-in-out;vertical-align:middle;width:16px}.component-editor .component-folder>ul{list-style:none;margin:0;padding:0}.component-editor .column{grid-column-gap:var(--column-gap);grid-row-gap:2px;display:grid;grid-template-columns:1fr}.component-editor .column .column-item{align-items:stretch;display:flex;justify-content:stretch}.component-editor .column .column-item>*{width:100%}.component-editor .column .column-item>label{align-items:center;display:flex;justify-content:flex-start}.component-editor .column-1-1{grid-template-columns:1fr 1fr}.component-editor .column-1-1-1{grid-template-columns:1fr 1fr 1fr}.component-editor .column-1-2{grid-template-columns:1fr 2fr}.component-editor .column-1-2-3{grid-template-columns:1fr 3fr}.component-editor .column-1-1-1-1{grid-template-columns:1fr 1fr 1fr 1fr}.component-editor .column-2{grid-template-columns:1fr 1fr}.component-editor .column-2-1{grid-template-columns:2fr 1fr}.component-editor .column-2-1-1{grid-template-columns:2fr 1fr 1fr}.component-editor .column-3-1{grid-template-columns:3fr 1fr}.component-editor .column-3-1-1{grid-template-columns:3fr 1fr 1fr}.component-editor .column-3-2-1{grid-template-columns:3fr 2fr 1fr}.component-editor>label{align-items:center;display:flex;justify-content:flex-start}.component-editor .component-item{margin-bottom:5px}")();
class ComponentEditor extends EditorElement {
  initState() {
    return {
      inspector: this.props.inspector
    };
  }
  template() {
    return `
      <div ref='$body' class="component-editor"></div>
    `;
  }
  getPropertyEditor(index2, childEditor) {
    if (childEditor.type === "folder") {
      return `
        <div class='component-folder'>
          <label>${iconUse("chevron_right")} ${childEditor.label}</label>
          <ul>
            ${childEditor.children.map((it, itemIndex) => {
        return `<li>${this.getPropertyEditor(`${index2}${itemIndex}`, it)}</li>`;
      }).join("")}
          </ul>
        </div>
      `;
    } else if (childEditor.type === "column") {
      const size = (childEditor.size || [2]).join("-");
      return `
        <div class='column column-${size}' style="--column-gap: ${childEditor.gap || 0}px; --row-gap: ${childEditor.rowGap || 0}px" >
          ${childEditor.columns.map((it, itemIndex) => {
        if (it === "-") {
          return `<div class="column-item"></div>`;
        } else if (it.type === "label") {
          return `<div class="column-item">
                    <label>${it.label}</label>
                  </div>`;
        }
        return `
                  <div class='column-item'>
                    ${this.getPropertyEditor(`${index2}${itemIndex}`, it)}
                  </div>
                `;
      }).join("")}  
        </div>
      `;
    }
    return createComponent(childEditor.editor, __spreadProps(__spreadValues({}, childEditor.editorOptions), {
      onchange: (key, value) => {
        const newValue = isFunction(childEditor.convert) ? childEditor.convert(key, value) : value;
        this.trigger("changeComponentValue", key, newValue);
      },
      ref: `${childEditor.key}${index2}`,
      key: childEditor.key,
      value: childEditor.defaultValue
    }));
  }
  [LOAD("$body")]() {
    const inspector = this.state.inspector;
    var self = inspector.map((it, index2) => {
      if (isString(it) || it.type === "label") {
        const title = it.label || it;
        return `
          <div class='component-item'> 
            <label>${title}</label>
          </div>`;
      } else if (it.type === "folder") {
        return `
          <div class='component-item'>
            ${this.getPropertyEditor(index2, it)}
          </div>
        `;
      } else {
        return `
            <div class='component-item'> 
              ${this.getPropertyEditor(index2, it)}
            </div>
          `;
      }
    });
    return self;
  }
  setInspector(inspector) {
    this.setState({
      inspector
    });
  }
  setValue(obj2 = {}) {
    Object.keys(obj2).forEach((key) => {
      const value = obj2[key];
      this.eachChildren((child) => {
        if (child.setValue && child.props.key === key) {
          child.setValue(value);
        }
      });
    });
  }
  getValue() {
    const result = {};
    this.eachChildren((child) => {
      if (isFunction(child.getValue) && child.props.key) {
        result[child.props.key] = child.getValue();
      }
    });
    return result;
  }
  [SUBSCRIBE_SELF("changeComponentValue")](key, value) {
    this.parent.trigger(this.props.onchange, key, value);
  }
  [CLICK("$el .component-folder > label")](e) {
    const $target = e.$dt.closest("component-folder");
    $target.toggleClass("close");
  }
}
class InputArrayEditor extends EditorElement {
  initState() {
    var values = this.props.values.split(" ").map((it) => +it);
    return {
      values,
      column: this.props.column
    };
  }
  template() {
    return `<div class='small-editor input-array-editor' ref='$body' ></div>`;
  }
  [BIND("$body")]() {
    return {
      cssText: `
                display: grid;
                grid-template-columns: repeat(${this.state.column}, 1fr);
                grid-column-gap: 2px;
                grid-row-gap: 2px;
            `
    };
  }
  [LOAD("$body")]() {
    var { values } = this.state;
    return values.map((value, index2) => {
      return `
                <div class='number-editor'>
                    <input type="number" value="${value}" step="0.01" data-index="${index2}" />
                </div>
            `;
    });
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.state.values, this.props.params);
  }
  [INPUT("$body input")](e) {
    var $el = e.$dt;
    var index2 = +$el.attr("data-index");
    var value = +$el.value;
    this.state.values[index2] = value;
    this.updateData();
  }
}
var InputRangeEditor$1 = /* @__PURE__ */ (() => ".elf--input-range-editor{border:1px solid transparent;border-radius:2px;display:grid;grid-template-columns:1fr;height:var(--elf--input-height)}.elf--input-range-editor.disabled label{color:var(--elf--selected-color)}.elf--input-range-editor.disabled>*{pointer-events:none}.elf--input-range-editor.disabled input{color:var(--elf--input-sub-font-color)}.elf--input-range-editor.focused{box-shadow:0 0 0 1px var(--elf--selected-color)}.elf--input-range-editor.drag,.elf--input-range-editor.focused{--elf--input-range-border-color:var(--elf--input-border-color);border-color:var(--elf--selected-color);border-width:1px}.elf--input-range-editor:hover:not(.focused):not(.drag){--elf--input-range-border-color:var(--elf--input-border-color);border-color:var(--elf--input-border-color)}.elf--input-range-editor.has-label{grid-template-columns:70px 1fr}.elf--input-range-editor.has-label.compact{grid-template-columns:30px 1fr}.elf--input-range-editor.has-label.wide{grid-template-columns:1fr 1fr}.elf--input-range-editor.has-label.wide .range--editor-type .area{grid-template-columns:1fr 40px}.elf--input-range-editor.has-label.is-removable{grid-template-columns:70px 1fr 12px}.elf--input-range-editor.has-label label{align-items:center;cursor:ew-resize;display:flex;justify-content:flex-start;line-height:2;overflow:hidden;padding:0;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--input-range-editor.has-label label svg{height:24px;vertical-align:middle;width:24px}.elf--input-range-editor.has-label.block{display:block}.elf--input-range-editor.has-label.block label{color:rgba(0,0,0,.7);display:block}.elf--input-range-editor.is-removable{grid-template-columns:1fr 12px}.elf--input-range-editor.is-removable .remove{display:inline-block}.elf--input-range-editor .remove,.elf--input-range-editor .type-button{display:none}.elf--input-range-editor .range--editor-type{height:100%;vertical-align:middle}.elf--input-range-editor .range--editor-type .area{border-radius:3px;display:grid;grid-template-columns:1fr 40px;height:100%}.elf--input-range-editor .range--editor-type .area span{padding:1px;vertical-align:middle}.elf--input-range-editor .range--editor-type .area input,.elf--input-range-editor .range--editor-type .area select{font-size:11px;width:100%}.elf--input-range-editor .range--editor-type .area input[type=number]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;padding-left:2px;vertical-align:middle;width:100%}.elf--input-range-editor .range--editor-type .area .elf--select-editor{border-left:1px solid var(--elf--input-range-border-color);height:calc(var(--elf--input-height) - 2px)}.elf--input-range-editor .range--editor-type .area .elf--select-editor:hover{border:0!important;box-shadow:none!important}.elf--input-range-editor .range--editor-type .area .elf--select-editor select{background-color:transparent;border:0;color:var(--elf--input-sub-font-color);height:24px}.elf--input-range-editor .range--editor-type .area .unit{display:inline-block;line-height:2;vertical-align:middle}")();
class InputRangeEditor extends EditorElement {
  initState() {
    var units = this.props.units || ["px", "em", "%", "auto"];
    var value = Length.parse(this.props.value || "0px");
    let label = this.props.label || "";
    return {
      label,
      compact: this.props.compact,
      wide: this.props.wide,
      min: +this.props.min || 0,
      max: +this.props.max || 100,
      step: +this.props.step || 1,
      key: this.props.key,
      params: this.props.params || "",
      layout: this.props.layout || "",
      disabled: this.props.disabled,
      title: this.props.title || "",
      units,
      value
    };
  }
  template() {
    return `<div class='small-editor' ref='$body'></div>`;
  }
  [LOAD("$body") + DOMDIFF]() {
    var {
      min,
      max,
      step,
      label,
      title,
      compact,
      wide,
      layout: layout2,
      disabled
    } = this.state;
    label = iconUse(label);
    if (isNumber(this.state.value)) {
      this.state.value = Length.px(0);
    }
    var value = +this.state.value.value.toString();
    if (isNaN(value)) {
      value = 0;
    }
    var layoutClass = layout2;
    var realValue = (+value).toString();
    const units = this.state.units;
    return `<div 
            ref="$range",
            class="${classnames({
      "elf--input-range-editor": true,
      "has-label": !!label,
      compact: !!compact,
      wide: !!wide,
      disabled,
      [layoutClass]: true
    })}"
        >${label ? `<label title="${title}">${label}</label>` : ""}<div class='range--editor-type' 
        data-type='range'><div class='area'><input type='number' class='property-number' ref='$propertyNumber' value="${realValue}" min="${min}" max="${max}" step="${step}" tabIndex="1" />${units.length === 1 ? `<span class='unit'>${units[0]}</span>` : createComponent("SelectEditor", {
      ref: "$unit",
      key: "unit",
      compact: true,
      value: this.state.selectedUnit || this.state.value.unit,
      options: this.state.units,
      onchange: "changeUnit"
    })}</div></div></div>`;
  }
  getValue() {
    return this.state.value.clone();
  }
  setValue(value) {
    var _a;
    this.setState({
      value: Length.parse(value)
    }, false);
    this.refs.$propertyNumber.val(this.state.value.value);
    (_a = this.children.$unit) == null ? void 0 : _a.setValue(this.state.value.unit);
  }
  disabled() {
    this.setState({
      disabled: true
    });
  }
  enabled() {
    this.setState({
      disabled: false
    });
  }
  [CLICK("$remove")]() {
    this.updateData({
      value: ""
    });
  }
  getUnit() {
    var _a;
    return ((_a = this.children.$unit) == null ? void 0 : _a.getValue()) || this.state.value.unit;
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
  initValue() {
    if (this.state.value == "") {
      this.state.value = new Length(0, this.getUnit());
    }
  }
  [INPUT("$body .property-number")](e) {
    var value = +e.$dt.value;
    this.initValue();
    this.updateData({
      value: new Length(value, this.getUnit())
    });
  }
  [SUBSCRIBE_SELF("changeUnit")](key, value) {
    this.initValue();
    this.updateData({
      value: this.state.value.toUnit(value)
    });
  }
  [FOCUSIN("$body input[type=number]")](e) {
    this.refs.$range.addClass("focused");
    e.$dt.select();
  }
  [FOCUSOUT("$body input[type=number]")]() {
    this.refs.$range.removeClass("focused");
  }
  [POINTERSTART("$body .elf--input-range-editor label") + MOVE("moveDrag") + END("moveDragEnd")]() {
    this.refs.$range.addClass("drag");
    this.initNumberValue = +this.refs.$propertyNumber.value;
    this.initUnit = this.state.value.unit;
    this.initUnits = this.state.units;
    this.refs.$propertyNumber.focus();
    this.refs.$propertyNumber.select();
  }
  moveDrag(dx) {
    let newValue = Math.floor(round(this.initNumberValue + dx * this.state.step, 100));
    newValue = Math.min(this.state.max, Math.max(this.state.min, newValue));
    this.updateData({
      value: new Length(newValue, this.getUnit())
    });
    this.refs.$propertyNumber.val(this.state.value.value);
  }
  moveDragEnd() {
    this.refs.$range.removeClass("drag");
  }
}
var NumberInputEditor$1 = /* @__PURE__ */ (() => ".elf--number-input-editor{border:1px solid transparent;border-radius:1px;box-sizing:border-box;display:grid;grid-template-columns:1fr;height:var(--elf--input-height);padding:4px}.elf--number-input-editor.focused{border-color:var(--elf--selected-color);border-width:1px;box-shadow:0 0 0 1px var(--elf--selected-color)}.elf--number-input-editor.drag{box-shadow:0 0 0 1px var(--elf--selected-color-2)}.elf--number-input-editor:hover:not(.focused):not(.drag){box-shadow:0 0 0 1px var(--elf--input-border-color)}.elf--number-input-editor.has-label{grid-template-columns:60px 1fr}.elf--number-input-editor.has-label.compact{grid-template-columns:30px 1fr}.elf--number-input-editor.has-label.mini{grid-template-columns:10px 1fr}.elf--number-input-editor.has-label.wide{grid-template-columns:1fr 1fr}.elf--number-input-editor.has-label.wide .range--editor-type .area{grid-template-columns:1fr}.elf--number-input-editor.has-label label{align-items:center;cursor:ew-resize;display:flex;justify-content:flex-start;overflow:hidden;padding:2px 4px 2px 0;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--number-input-editor.has-label label svg{height:20px;width:20px}.elf--number-input-editor.has-label.block,.elf--number-input-editor.has-label.block label{display:block}.elf--number-input-editor .range--editor-type{height:100%;vertical-align:middle}.elf--number-input-editor .range--editor-type .area{grid-column-gap:3px;display:grid;grid-template-columns:1fr;height:100%}.elf--number-input-editor .range--editor-type .area span{padding:1px;vertical-align:middle}.elf--number-input-editor .range--editor-type .area input{-webkit-appearance:none;appearance:none;-moz-appearance:textfield;background-color:transparent;border:0;padding-left:2px;width:100%}.elf--number-input-editor .range--editor-type .area input::-webkit-inner-spin-button,.elf--number-input-editor .range--editor-type .area input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}")();
class NumberInputEditor extends EditorElement {
  initState() {
    var value = +this.props.value;
    let label = this.props.label || "";
    const compact = isBoolean(this.props.compact) ? this.props.compact : this.props.compact === "true";
    const wide = isBoolean(this.props.wide) ? this.props.wide : this.props.wide === "true";
    const mini = isBoolean(this.props.mini) ? this.props.mini : this.props.mini === "true";
    const trigger = this.props.trigger || "input";
    return {
      label,
      compact,
      wide,
      mini,
      trigger,
      min: +this.props.min || 0,
      max: +this.props.max || 100,
      step: +this.props.step || 1,
      key: this.props.key,
      params: this.props.params || "",
      layout: this.props.layout || "",
      value
    };
  }
  template() {
    return `<div class='small-editor' ref='$body'></div>`;
  }
  [LOAD("$body") + DOMDIFF]() {
    var {
      min,
      max,
      step,
      label,
      type,
      layout: layout2,
      mini,
      compact,
      wide,
      disabled,
      removable
    } = this.state;
    label = iconUse(label);
    var value = this.state.value;
    if (isNaN(value)) {
      value = 0;
    }
    var layoutClass = layout2;
    var realValue = (+value).toString();
    return `
        <div 
            class="${classnames({
      "elf--number-input-editor": true,
      "has-label": !!label,
      compact: !!compact,
      wide: !!wide,
      mini: !!mini,
      "is-removable": removable,
      disabled,
      [layoutClass]: true
    })}"
            ref="$range"
            data-selected-type='${type}'>
            ${label ? `<label>${label}</label>` : ""}
            <div class='range--editor-type' data-type='range'>
                <div class='area'>
                    <input type='number' ref='$propertyNumber' value="${realValue}" min="${min}" max="${max}" step="${step}" />
                </div>
            </div>
        </div>
    `;
  }
  getValue() {
    return this.state.value || 0;
  }
  setValue(value) {
    this.setState({
      value
    }, false);
    this.refs.$propertyNumber.val(this.state.value);
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
  [FOCUSIN("$body input[type=number]")](e) {
    this.refs.$range.addClass("focused");
    e.$dt.select();
  }
  [FOCUSOUT("$body input[type=number]")]() {
    this.refs.$range.removeClass("focused");
  }
  updateValue(e) {
    var value = +e.$dt.value;
    this.updateData({
      value
    });
  }
  isTriggerInput() {
    return this.state.trigger === "input";
  }
  isTriggerEnter() {
    return this.state.trigger === "enter";
  }
  [INPUT("$body input[type=number]") + IF("isTriggerInput") + DEBOUNCE(500)](e) {
    this.updateValue(e);
  }
  [KEYUP("$body input[type=number]") + IF("isTriggerEnter") + ENTER](e) {
    this.updateValue(e);
    e.$dt.select();
  }
  [POINTERSTART("$body label") + MOVE("moveDrag") + END("moveDragEnd")]() {
    this.refs.$range.addClass("drag");
    this.initValue = +this.refs.$propertyNumber.value;
  }
  moveDrag(dx) {
    let newValue = round(this.initValue + dx * this.state.step, 1 / this.state.step);
    newValue = Math.min(this.state.max, Math.max(this.state.min, newValue));
    this.updateData({
      value: newValue
    });
    this.refs.$propertyNumber.val(this.state.value);
  }
  moveDragEnd() {
    this.refs.$range.removeClass("drag");
  }
}
var NumberRangeEditor$1 = /* @__PURE__ */ (() => ".elf--number-range-editor{grid-column-gap:4px;border:1px solid transparent;border-radius:2px;display:grid;grid-template-columns:1fr;height:var(--elf--input-height)}.elf--number-range-editor.disabled label{color:var(--elf--selected-color)}.elf--number-range-editor.disabled>*{pointer-events:none}.elf--number-range-editor.disabled input{color:var(--elf--input-sub-font-color)}.elf--number-range-editor.drag,.elf--number-range-editor.focused{--elf--input-range-border-color:var(--elf--input-border-color);border-color:var(--elf--selected-color);border-width:1px}.elf--number-range-editor:hover:not(.focused):not(.drag){--elf--input-range-border-color:var(--elf--input-border-color);border-color:var(--elf--input-border-color)}.elf--number-range-editor.has-label{grid-column-gap:2px;grid-template-columns:70px 1fr}.elf--number-range-editor.has-label.is-removable{grid-template-columns:70px 1fr 12px}.elf--number-range-editor.has-label.compact{grid-template-columns:30px 1fr}.elf--number-range-editor.has-label.wide{grid-template-columns:1fr 1fr}.elf--number-range-editor.has-label label{align-items:center;cursor:ew-resize;display:flex;justify-content:flex-start;line-height:2;overflow:hidden;padding:0 0 0 2px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--number-range-editor.has-label label svg{height:20px;vertical-align:middle;width:20px}.elf--number-range-editor.has-label.block{display:block;height:auto}.elf--number-range-editor.has-label.block label{display:block}.elf--number-range-editor.is-removable{grid-template-columns:1fr 12px}.elf--number-range-editor.is-removable .remove{display:inline-block}.elf--number-range-editor .remove{display:none}.elf--number-range-editor .range--editor-type{height:100%;vertical-align:middle}.elf--number-range-editor .range--editor-type .area{grid-column-gap:4px;border-radius:3px;display:grid;grid-template-columns:1fr;height:100%}.elf--number-range-editor .range--editor-type .area span{padding:1px;vertical-align:middle}.elf--number-range-editor .range--editor-type .area input{height:100%;width:100%}.elf--number-range-editor .range--editor-type .area input[type=number]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;vertical-align:middle}")();
class NumberRangeEditor extends EditorElement {
  initState() {
    var value = Length.parse(this.props.value || Length.number(0));
    value = value.toUnit("number");
    return {
      compact: this.props.compact === "true",
      wide: this.props.wide === "true",
      clamp: this.props.clamp === "true",
      label: this.props.label || "",
      min: +this.props.min || 0,
      max: +this.props.max || 100,
      step: +this.props.step || 1,
      key: this.props.key,
      params: this.props.params || "",
      layout: this.props.layout || "",
      value
    };
  }
  template() {
    return `<div class='small-editor' ref='$body'></div>`;
  }
  [LOAD("$body")]() {
    var { min, max, step, label, removable, layout: layout2, compact, wide, disabled } = this.state;
    var value = +this.state.value.value.toString();
    if (isNaN(value)) {
      value = 0;
    }
    var layoutClass = layout2;
    var realValue = (+value).toString();
    return `
        <div 
            class="${classnames({
      "elf--number-range-editor": true,
      "has-label": !!label,
      compact: !!compact,
      wide: !!wide,
      disabled,
      [layoutClass]: true
    })}"
        >
            ${label ? `<label title="${label}">${label}</label>` : ""}
            <div class='range--editor-type' data-type='range'>
                <div class='area'>
                    <div>
                        <input type='range' ref='$property' value="${realValue}" min="${min}" max="${max}" step="${step}" />
                    </div>
                    <div>
                        <input type='number' ref='$propertyNumber' value="${realValue}" min="${min}" max="${max}" step="${step}" tabIndex="1" />
                    </div>
                </div>
            </div>
        </div>
    `;
  }
  setMin(value) {
    this.setState({
      min: Length.parse(value)
    });
  }
  setMax(value) {
    this.setState({
      max: Length.parse(value)
    });
  }
  getValue() {
    if (this.state.clamp) {
      return this.state.value.clamp(this.state.min, this.state.max);
    }
    return this.state.value;
  }
  setValue(value) {
    this.setState({
      value: Length.parse(value)
    });
  }
  [FOCUS('$body input[type="number"]')]() {
    this.refs.$propertyNumber.addClass("focused");
  }
  [BLUR('$body input[type="number"]')]() {
    this.refs.$propertyNumber.removeClass("focused");
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.getValue(), this.props.params);
  }
  [INPUT('$body input[type="number"]')]() {
    var value = +this.refs.$propertyNumber.value;
    this.getRef("$property").val(value);
    this.updateData({
      value: this.state.value.set(value)
    });
  }
  [INPUT('$body input[type="range"]')]() {
    this.trigger("changeRangeValue");
  }
  [POINTERSTART('$body input[type="range"]') + END()]() {
  }
  end() {
    this.trigger("changeRangeValue");
  }
  [SUBSCRIBE_SELF("changeRangeValue")]() {
    var value = +this.getRef("$property").value;
    this.getRef("$propertyNumber").val(value);
    if (this.state.value === "") {
      this.state.value = Length.number(0);
    }
    this.updateData({
      value: this.state.value.set(value)
    });
  }
}
var RangeEditor$1 = /* @__PURE__ */ (() => ".elf--range--editor{grid-column-gap:4px;display:grid;grid-template-columns:1fr;height:var(--elf--input-height)}.elf--range--editor.has-label{grid-column-gap:2px;grid-template-columns:70px 1fr}.elf--range--editor.has-label.compact{grid-template-columns:30px 1fr}.elf--range--editor.has-label.is-removable{grid-template-columns:70px 1fr 12px}.elf--range--editor.has-label.block{height:auto}.elf--range--editor.has-label.block>label{display:block}.elf--range--editor.has-label label{overflow:hidden;padding:7px 0 2px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--range--editor.has-label.block{display:block}.elf--range--editor.has-label.block label{color:var(--elf--font-color);display:block}.elf--range--editor.is-removable{grid-template-columns:1fr 12px}.elf--range--editor.is-removable .remove{display:inline-block;margin-top:3px}.elf--range--editor .remove{display:none}.elf--range--editor .range--editor-type{grid-column-gap:2px;display:grid;grid-template-columns:1fr 1fr;height:100%;vertical-align:middle}.elf--range--editor .range--editor-type .area{border:1px solid transparent;border-radius:3px;display:grid;grid-template-columns:1fr 24px}.elf--range--editor .range--editor-type .area.focused{border:1px solid var(--elf--selected-color);border-radius:3px}.elf--range--editor .range--editor-type .area span{padding:1px;vertical-align:middle}.elf--range--editor .range--editor-type .area input,.elf--range--editor .range--editor-type .area select{background-color:transparent;border:0;width:100%}.elf--range--editor .range--editor-type .area input[type=range]{width:95%}.elf--range--editor .range--editor-type .area input[type=number]{background-color:var(--elf--input-background-color);border:1px solid var(--elf--input-border-color);border-bottom-left-radius:3px;border-right:0;border-top-left-radius:3px;height:100%;padding:2px;text-align:left}.elf--range--editor .range--editor-type .area .elf--select-editor{background-color:var(--elf--input-background-color);border:0!important;border-bottom-left-radius:0;border-bottom-right-radius:3px;border-top-left-radius:0;border-top-right-radius:3px;box-sizing:border-box;position:relative;text-align:right}.elf--range--editor .range--editor-type .area .elf--select-editor .selected-value{display:none}.elf--range--editor .range--editor-type .area .elf--select-editor select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:1px solid var(--elf--input-border-color);border-bottom-left-radius:0;border-bottom-right-radius:3px;border-left:0;border-top-left-radius:0;border-top-right-radius:3px;color:var(--elf--input-sub-font-color);display:inline-block;height:24px;padding:0;position:absolute;right:0;text-align:center;width:24px}")();
class RangeEditor extends EditorElement {
  initState() {
    var units = this.props.units || ["px", "em", "%"];
    var value = Length.parse(this.props.value || 0);
    return {
      compact: this.props.compact === "true" ? true : false,
      label: this.props.label || "",
      min: +this.props.min || 0,
      max: +this.props.max || 100,
      step: +this.props.step || 1,
      key: this.props.key,
      params: this.props.params || "",
      layout: this.props.layout || "",
      units,
      value
    };
  }
  template() {
    return `<div class='small-editor' ref='$body'></div>`;
  }
  [LOAD("$body")]() {
    var { min, max, step, label, layout: layout2, compact } = this.state;
    label = iconUse(label);
    var value = +this.state.value.value.toString();
    if (isNaN(value)) {
      value = 0;
    }
    var layoutClass = layout2;
    var realValue = (+value).toString();
    if (this.state.units === "%") {
      throw new Error("%");
    }
    var units = this.state.units.map((it) => {
      let description = it;
      if (description === "number") {
        description = "";
      }
      return { value: it, text: description };
    });
    return `
        <div 
            ref="$range"
            class="${classnames({
      "elf--range--editor": true,
      "has-label": !!label,
      compact: !!compact,
      [layoutClass]: true
    })}"
        >
            ${label ? `<label title="${label}">${label}</label>` : ""}
            <div class='range--editor-type' data-type='range'>
                <input type='range' ref='$property' value="${realValue}" min="${min}" max="${max}" step="${step}" /> 
                <div class='area' ref='$rangeArea'>
                    <input type='number' ref='$propertyNumber' value="${realValue}" min="${min}" max="${max}" step="${step}" tabIndex="1" />
                    ${createComponent("SelectEditor", {
      ref: "$unit",
      key: "unit",
      value: this.state.value.unit,
      options: units,
      onchange: (key, value2) => {
        this.changeUnit(key, value2);
      }
    })}
                </div>
            </div>
        </div>
    `;
  }
  getValue() {
    return this.state.value.clone();
  }
  setValue(value) {
    this.setState({
      value: Length.parse(value)
    });
  }
  [FOCUS('$body input[type="number"]')]() {
    this.refs.$rangeArea.addClass("focused");
  }
  [BLUR('$body input[type="number"]')]() {
    this.refs.$rangeArea.removeClass("focused");
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
  initValue() {
    if (this.state.value == "") {
      this.state.value = new Length(0, this.children.$unit.getValue());
    }
  }
  [INPUT('$body input[type="number"]')]() {
    var value = +this.refs.$propertyNumber.value;
    this.getRef("$property").val(value);
    this.initValue();
    this.updateData({
      value: new Length(value, this.children.$unit.getValue())
    });
  }
  [INPUT('$body input[type="range"]')]() {
    this.changeRangeValue();
  }
  [POINTERSTART('$body input[type="range"]') + END()]() {
  }
  end() {
    this.changeRangeValue();
  }
  changeRangeValue() {
    var value = +this.getRef("$property").value;
    this.refs.$propertyNumber.val(value);
    this.initValue();
    this.updateData({
      value: new Length(value, this.children.$unit.getValue())
    });
  }
  changeUnit(key, value) {
    this.initValue();
    this.updateData({
      value: this.state.value.toUnit(value)
    });
  }
}
var SelectEditor$1 = /* @__PURE__ */ (() => ".elf--select-editor{grid-column-gap:4px;border:1px solid transparent;box-sizing:border-box;display:grid;grid-template-columns:1fr;height:var(--elf--input-height);position:relative}.elf--select-editor:hover:not(.focused):not(.drag){border-color:var(--elf--input-border-color)}.elf--select-editor:hover:not(.focused):not(.drag) .selected-value{display:grid;grid-template-columns:1fr 20px}.elf--select-editor.compact select{opacity:1}.elf--select-editor select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;color:var(--elf--input-font-color);height:24px;opacity:0;vertical-align:middle;width:100%}.elf--select-editor .selected-value{background-color:var(--elf--input-background-color);box-sizing:border-box;color:var(--elf--input-font-color);display:flex;height:100%;left:0;line-height:2;padding:0 2px;pointer-events:none;position:absolute;right:0;top:0}.elf--select-editor .selected-value svg{fill:currentColor;height:16px;width:16px}.elf--select-editor .selected-value .expand{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-start;vertical-align:middle}.elf--select-editor .selected-value .value{align-items:center;display:flex;justify-content:flex-start;overflow:hidden;padding:0;text-align:left;text-overflow:ellipsis;white-space:nowrap}.elf--select-editor.has-label{grid-column-gap:2px;grid-template-columns:70px 1fr}.elf--select-editor.has-label.compact{grid-template-columns:30px 1fr}.elf--select-editor.has-label label{align-items:center;display:flex;justify-content:flex-start;line-height:2;overflow:hidden;padding:0 4px 0 2px;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--select-editor.has-label label svg{height:20px;width:20px}.elf--select-editor.has-label .editor-view{position:relative}.elf--select-editor.has-label .selected-value{height:100%;position:absolute;text-align:left}.elf--select-editor.has-label .selected-value select{height:24px;width:100%}")();
class SelectEditor extends EditorElement {
  initState() {
    var splitChar = this.props.split || ",";
    var options = Array.isArray(this.props.options) ? this.props.options.map((it) => {
      if (typeof it === "string") {
        return { value: it, text: it };
      }
      return it;
    }) : (this.props.options || "").split(splitChar).map((it) => it.trim()).map((it) => {
      const [value2, text] = it.split(":");
      return { value: value2, text: text || value2 };
    });
    var value = this.props.value;
    var tabIndex = this.props.tabindex;
    var title = this.props.title;
    return {
      splitChar,
      label: this.props.label || "",
      title,
      options,
      value,
      tabIndex
    };
  }
  getOptionString() {
    var arr = this.state.options.map((it) => {
      var value = it.value;
      var label = it.text || it.value;
      if (label === "") {
        label = this.props["none-value"] ? this.props["none-value"] : "";
      } else if (label === "-") {
        label = "----------";
        value = "";
      }
      var selected = value === this.state.value ? "selected" : "";
      const disabled = it.disabled ? "disabled" : "";
      return `<option ${selected} value="${value}" ${disabled}>${label}</option>`;
    });
    return arr.join("");
  }
  template() {
    var { label, title, tabIndex, value } = this.state;
    var hasLabel = label ? "has-label" : "";
    var hasTabIndex = tabIndex ? 'tabIndex="1"' : "";
    var compact = this.props.compact ? "compact" : "";
    label = iconUse(label);
    return `<div class='elf--select-editor ${hasLabel} ${compact}'>${label ? `<label title="${title}">${label}</label>` : ""}<div class="editor-view"><select ref='$options' ${hasTabIndex}>${this.getOptionString()}</select><div class='selected-value'><span class='value' ref="$selectedValue">${value}</span><span class='expand' ref='$expand'>${iconUse("expand_more")}</span></div></div></div>`;
  }
  getValue() {
    return this.refs.$options.value;
  }
  setValue(value) {
    this.refs.$options.val(this.state.value);
    this.setState({
      value: value + ""
    });
  }
  [BIND("$options")]() {
    return {
      "data-count": this.state.options.length.toString()
    };
  }
  [BIND("$selectedValue")]() {
    var _a;
    return {
      text: (_a = this.state.options.find((it) => it.value === this.state.value)) == null ? void 0 : _a.text
    };
  }
  [CHANGE("$options")]() {
    this.updateData({
      value: this.refs.$options.value
    });
    this.bindData("$selectedValue");
  }
  updateData(data) {
    this.setState(data, false);
    this.emit(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
}
var SelectIconEditor$1 = /* @__PURE__ */ (() => '.elf--select-icon-editor{border:1px solid transparent;display:grid;height:24px}.elf--select-icon-editor:hover,.elf--select-icon-editor:hover .items>div{border-color:var(--elf--input-border-color)}.elf--select-icon-editor.has-label{grid-template-columns:70px 1fr}.elf--select-icon-editor.has-label label{overflow:hidden;padding:6px 4px 2px 0;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.elf--select-icon-editor .items{background-color:transparent;border-radius:3px;box-sizing:border-box;cursor:pointer;display:flex;height:100%;line-height:1;outline:none}.elf--select-icon-editor .items>.select-icon-item{align-items:center;border-right:1px solid transparent;box-sizing:border-box;color:var(--elf--font-color);display:flex;flex:none;height:24px;justify-content:center;line-height:1.4;position:relative;text-transform:uppercase;white-space:pre-wrap;width:24px;word-break:break-all}.elf--select-icon-editor .items>.select-icon-item:last-child{border-right:0}.elf--select-icon-editor .items>.select-icon-item:hover{background-color:var(--elf--input-inactive-color)}.elf--select-icon-editor .items>.select-icon-item svg{stroke:currentColor;height:24px;width:24px}.elf--select-icon-editor .items>.select-icon-item.selected{background-color:var(--elf--selected-color-2);color:var(--elf--selected-font-color)}.elf--select-icon-editor .items>.select-icon-item.icon{padding:3px 2px}.elf--select-icon-editor .items>.select-icon-item[data-value=""]{max-width:20px}.elf--select-icon-editor .items>.select-icon-item[data-value=none]{text-transform:none;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=uppercase]{text-transform:uppercase;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=lowercase]{text-transform:lowercase;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=capitalize]{text-transform:capitalize;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=full-width]{text-transform:full-width;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=underline]{text-decoration:underline;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=overline]{text-decoration:overline;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=line-through]{text-decoration:line-through;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=normal]{font-style:normal;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=italic]{font-style:italic;vertical-align:middle}.elf--select-icon-editor .items>.select-icon-item[data-value=oblique]{font-style:oblique;vertical-align:middle}.elf--select-icon-editor .tools{padding:4px 0;text-align:right;vertical-align:middle}')();
function CSS_TO_STRING(style, postfix = "") {
  var newStyle = style || {};
  return Object.keys(newStyle).filter((key) => isNotUndefined(newStyle[key])).map((key) => `${key}: ${newStyle[key]}`).join(";" + postfix);
}
class SelectIconEditor extends EditorElement {
  initState() {
    var splitChar = this.props.split || ",";
    var options = Array.isArray(this.props.options) ? this.props.options.map((it) => {
      if (isString(it)) {
        return { value: it, text: it };
      }
      return it;
    }) : (this.props.options || "").split(splitChar).map((it) => it.trim()).map((it) => {
      const [value2, text] = it.split(":");
      return { value: value2, text };
    });
    var icons2 = this.props.icons || [];
    var colors = this.props.colors || [];
    var value = this.props.value || "";
    return {
      label: this.props.label || "",
      compact: isBoolean(this.props.compact) ? this.props.compact : this.props.compact === "true",
      options,
      icons: icons2,
      colors,
      value,
      height: this.props.height
    };
  }
  template() {
    var { label, compact, height } = this.state;
    var hasLabel = label ? "has-label" : "";
    var hasCompact = compact ? "compact" : "";
    var heightVar = height ? `--elf--input-height: ${height}px;` : "";
    return `
            <div class='elf--select-icon-editor ${hasLabel}' style="${heightVar}">
                ${label ? `<label title="${label}">${label}</label>` : ""}
                <div class='items ${hasCompact}' ref='$options'></div>
            </div>
        `;
  }
  [CLICK("$close")]() {
    this.updateData({
      value: ""
    });
    this.refresh();
  }
  getValue() {
    return this.state.value || "";
  }
  setValue(value) {
    this.setState({
      value
    });
  }
  [LOAD("$options") + DOMDIFF]() {
    return this.state.options.map((it, index2) => {
      var value = it.value;
      var label = it.text;
      var title = it.text;
      var iconClass = "";
      var isSelected = value === this.state.value;
      var selected = isSelected ? "selected" : "";
      if (it.value === "") {
        var label = "";
        title = "close";
        if (isNotUndefined(this.state.icons[index2])) {
          iconClass = "icon";
          label = iconBlank();
          value = "__blank__";
        }
      } else {
        var iconKey = this.state.icons[index2];
        if (icons[iconKey]) {
          iconClass = "icon";
        }
        title = label;
        label = iconUse(iconKey) || label || iconKey || it.text || it.value;
      }
      var color2 = this.state.colors[index2];
      var css = {};
      if (isSelected && color2) {
        css["background-color"] = color2;
      }
      return `<div class='select-icon-item ${selected} ${iconClass}' 
          style='${CSS_TO_STRING(css)}' 
          data-value="${value}" 
          data-tooltip='${title}'
      >${label}</div>`;
    });
  }
  [CLICK("$options .select-icon-item")](e) {
    var value = e.$dt.attr("data-value");
    if (!value || value === "__blank__")
      return;
    this.updateData({
      value
    });
    this.refresh();
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.getValue(), this.props.params);
  }
}
var TextAreaEditor$1 = /* @__PURE__ */ (() => ".elf--text-area-editor{grid-column-gap:4px;display:grid;grid-template-columns:1fr}.elf--text-area-editor.has-label{grid-column-gap:2px;grid-template-columns:60px 1fr}.elf--text-area-editor.has-label label{padding:2px 4px 2px 0;vertical-align:middle}.elf--text-area-editor input[type=text]{border:1px solid var(--elf--border-color);width:100%}")();
class TextAreaEditor extends EditorElement {
  initState() {
    var value = this.props.value;
    return {
      label: this.props.label || "",
      height: 100,
      value
    };
  }
  template() {
    var { label, height, value } = this.state;
    var hasLabel = label ? "has-label" : "";
    return `
            <div class='elf--text-area-editor ${hasLabel}'>
                ${label ? `<label>${label}</label>` : ""}
                <textarea ref='$text' style='height:${height}'>${value}</textarea>
            </div>
        `;
  }
  getValue() {
    return this.refs.$options.value;
  }
  setValue(value, height) {
    this.setState({ value }, false);
    if (height) {
      this.setState({ height }, false);
    }
    this.refresh();
  }
  [BIND("$text")]() {
    return {
      text: this.state.value || "",
      style: {
        height: this.state.height
      }
    };
  }
  [INPUT("$text")]() {
    this.updateData({
      value: this.refs.$text.value
    });
  }
  updateData(data) {
    this.setState(data);
    this.parent.trigger(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
}
var TextEditor$1 = /* @__PURE__ */ (() => ".elf--text-editor{grid-column-gap:4px;display:grid;grid-template-columns:1fr}.elf--text-editor.has-label{grid-column-gap:2px;grid-template-columns:60px 1fr}.elf--text-editor.has-label label{padding:2px 4px 2px 0;vertical-align:middle}.elf--text-editor input[type=text]{border:1px solid var(--elf--border-color);width:100%}")();
class TextEditor extends EditorElement {
  initState() {
    var value = this.props.value;
    return {
      label: this.props.label || "",
      value
    };
  }
  template() {
    var { label, value } = this.state;
    var hasLabel = label ? "has-label" : "";
    return `
            <div class='elf--text-editor ${hasLabel}'>
                ${label ? `<label>${label}</label>` : ""}
                <div>
                    <input type='text' ref='$text' value="${value}" />
                </div>
            </div>
        `;
  }
  getValue() {
    return this.refs.$text.value;
  }
  setValue(value) {
    this.refs.$text.val(value);
    this.setState({
      value
    }, false);
  }
  [BIND("$text")]() {
    return {
      value: this.state.value
    };
  }
  [INPUT("$text")]() {
    this.updateData({
      value: this.refs.$text.value
    });
  }
  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(this.props.onchange, this.props.key, this.getValue(), this.props.params);
  }
}
var propertyEditor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorSingleEditor,
  ColorViewEditor,
  ComponentEditor,
  InputArrayEditor,
  InputRangeEditor,
  NumberInputEditor,
  NumberRangeEditor,
  RangeEditor,
  SelectEditor,
  CSS_TO_STRING,
  SelectIconEditor,
  TextAreaEditor,
  TextEditor
}, Symbol.toStringTag, { value: "Module" }));
class BlankInspector extends EditorElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "feature-control inspector"
    }, /* @__PURE__ */ createElementJsx("div", null, /* @__PURE__ */ createElementJsx(Tabs, {
      ref: "$tab",
      selectedValue: this.$config.get("inspector.selectedValue"),
      onchange: (value) => {
        this.$config.set("inspector.selectedValue", value);
      }
    }, this.$injectManager.getTargetUI("inspector.tab").map((it) => {
      const { value, title, icon, loadElements = [] } = it.class;
      return /* @__PURE__ */ createElementJsx(TabPanel, {
        value,
        title,
        icon
      }, /* @__PURE__ */ createElementJsx("div", {
        style: "display: flex: flex-direction: column;"
      }, loadElements == null ? void 0 : loadElements.map((element) => createElement(element)), this.$injectManager.generate("inspector.tab." + value), /* @__PURE__ */ createElementJsx("div", {
        class: "empty",
        style: "order: 1000000;"
      })));
    }))));
  }
}
class BlankLayerTab extends EditorElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "layer-tab"
    }, /* @__PURE__ */ createElementJsx(Tabs, {
      ref: "$tab",
      type: "side",
      direction: "left",
      selectedValue: this.$config.get("layertab.selectedValue"),
      onchange: (value) => {
        this.$config.set("layertab.selectedValue", value);
      }
    }, this.$injectManager.getTargetUI("layertab.tab").map((it) => {
      const { value, title, icon, loadElements = [] } = it.class;
      return /* @__PURE__ */ createElementJsx(TabPanel, {
        value,
        title,
        icon
      }, /* @__PURE__ */ createElementJsx("div", {
        style: "display: flex: flex-direction: column;"
      }, loadElements == null ? void 0 : loadElements.map((element) => createElement(element)), this.$injectManager.generate("layertab.tab." + value), /* @__PURE__ */ createElementJsx("div", {
        class: "empty",
        style: "order: 1000000;"
      })));
    })));
  }
}
var BlankToolBar$1 = /* @__PURE__ */ (() => ".elf--blank-tool-bar{background-color:var(--elf--toolbar-background-color);color:var(--elf--selected-font-color);display:flex;flex-direction:row;height:100%;justify-content:space-between}.elf--blank-tool-bar>.logo-area{flex:none;height:100%;width:60px}.elf--blank-tool-bar>.logo-area>*{height:100%}.elf--blank-tool-bar>.toolbar-area{display:flex;flex:1 1 auto;flex-direction:row;justify-content:space-between}.elf--blank-tool-bar>.toolbar-area>*{align-items:center;display:flex;justify-content:center;min-height:48px!important;min-width:48px!important;padding:0;vertical-align:middle}.elf--blank-tool-bar>.toolbar-area .dropdown-menu>button{height:48px!important;width:48px!important}.elf--blank-tool-bar>.toolbar-area .dropdown-menu>button,.elf--blank-tool-bar>.toolbar-area button{stroke:var(--elf--selected-font-color);fill:transparent!important;stroke-width:1!important;align-items:center;display:flex;justify-content:center;min-width:40px;position:relative}.elf--blank-tool-bar>.toolbar-area .dropdown-menu>button .icon svg,.elf--blank-tool-bar>.toolbar-area button .icon svg{stroke:var(--elf--selected-font-color);fill:transparent!important;stroke-width:1!important;height:20px;width:20px}.elf--blank-tool-bar>.toolbar-area .dropdown-menu>button.elf--menu-item.selected,.elf--blank-tool-bar>.toolbar-area button.elf--menu-item.selected{background-color:var(--elf--selected-color-2)}.elf--blank-tool-bar>.toolbar-area .dropdown-menu>button.elf--menu-item:hover:not(.selected):not([checked]),.elf--blank-tool-bar>.toolbar-area .elf--logo-area:hover,.elf--blank-tool-bar>.toolbar-area button.elf--menu-item:hover:not(.selected):not([checked]){background-color:#000}")();
var ToolbarMenuItem = /* @__PURE__ */ (() => ".elf--toolbar-menu-item{align-items:center;display:flex;height:100%;justify-content:center;padding:0 10px!important;text-align:left;width:auto}.elf--toolbar-menu-item>.icon{display:inline-block;height:24px;width:24px}.elf--toolbar-menu-item>.icon svg{stroke:var(--elf--selected-font-color);height:100%;width:100%}.elf--toolbar-menu-item:hover:not([disabled=true]){background-color:#000}.elf--toolbar-menu-item[data-selected=true]{background-color:var(--elf--selected-color-2);color:var(--elf--selected-font-color)}.elf--toolbar-menu-item[disabled=true]{cursor:not-allowed;filter:invert(50%)}.elf--toolbar-menu-item[disabled=true]>*{pointer-events:none}")();
class ToolbarButtonMenuItem extends EditorElement {
  initialize() {
    super.initialize();
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => this.refresh());
      });
    }
  }
  template() {
    let tooltip = this.props.tooltip ? `data-tooltip="${this.props.tooltip}"` : "";
    return `<button type="button"  class='elf--toolbar-menu-item' ${tooltip}></button>`;
  }
  [CLICK("$el")]() {
    if (this.props.command) {
      this.$commands.emit(this.props.command, ...this.props.args || []);
    } else if (isFunction(this.props.action)) {
      this.props.action(this.$editor, this);
    } else if (isFunction(this.props.onClick)) {
      this.props.onClick(this.$editor, this);
    }
    if (isFunction(this.props.nextTick)) {
      this.props.nextTick(this.$editor);
    }
  }
  [LOAD("$el") + DOMDIFF]() {
    let result = "";
    if (this.props.icon) {
      const iconName = isFunction(this.props.icon) ? this.props.icon(this.$editor) : this.props.icon;
      result += `<span class="icon">${iconUse(iconName)}</span>`;
    }
    if (this.props.title) {
      result += `<span class="title">${this.props.title}</span>`;
    }
    return result;
  }
  [BIND("$el")]() {
    const selected = isFunction(this.props.selected) ? this.props.selected(this.$editor) : false;
    const disabled = isFunction(this.props.disabled) ? this.props.disabled(this.$editor) : this.props.disabled;
    return {
      style: __spreadValues({}, this.props.style),
      "data-selected": selected,
      disabled
    };
  }
}
var ToolBarRenderer$1 = /* @__PURE__ */ (() => ".elf--toolbar-renderer{display:flex;height:100%}.elf--toolbar-renderer>*{align-items:center;height:100%;justify-content:center;text-align:center;width:auto}")();
function Divider() {
  return Dom.createByHTML(`<li class="dropdown-divider"></li>`);
}
class DropdownMenuItem extends EditorElement {
  initialize() {
    super.initialize();
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => this.refresh());
      });
    }
  }
  template() {
    var _a;
    const it = this.props;
    const checked = isFunction(it.checked) ? it.checked(this.$editor) : it.checked;
    return `
          <li data-has-children="${Boolean((_a = it.items) == null ? void 0 : _a.length)}"
            ${it.disabled ? "disabled" : ""} 
            ${it.shortcut ? "shortcut" : ""}
            ${checked ? `checked` : ""}
          >
              <span class="icon">${checked ? iconUse("check") : it.icon || ""}</span>
              <div class='menu-item-text'>
                <label>${this.$i18n(it.title)}</label>
                <kbd class="shortcut">${it.shortcut || ""}</kbd>
              </div>
          </li>
        `;
  }
  [CLICK("$el") + PREVENT + STOP]() {
    console.log("click", this.props.command, this.props.args);
    if (this.props.command) {
      this.$commands.emit(this.props.command, ...this.props.args || []);
    } else if (isFunction(this.props.action)) {
      this.props.action(this.$editor, this);
    } else if (isFunction(this.props.onClick)) {
      this.props.action(this.$editor, this);
    }
    if (isFunction(this.props.nextTick)) {
      this.nextTick(() => {
        this.props.nextTick(this.$editor, this);
      });
    }
    if (this.props.closable) {
      this.parent.close();
    }
  }
}
class DropdownCheckboxMenuItem extends DropdownMenuItem {
  template() {
    return `<li class='checkbox'></li>`;
  }
  get checked() {
    if (isFunction(this.props.checked)) {
      return this.props.checked(this.$editor, this);
    }
    return this.props.checked;
  }
  [LOAD("$el") + DOMDIFF]() {
    return `
        <label>
          <input type="checkbox" ${this.checked ? 'checked="checked"' : ""} value="${this.props.value}" /> 
          ${this.$i18n(this.props.title)}
        </label>
      `;
  }
}
class DropdownCustomMenuItem extends DropdownMenuItem {
  template() {
    return `<li class='custom'></li>`;
  }
  getTemplateString() {
    if (isFunction(this.props.template)) {
      return this.props.template(this.$editor, this);
    }
    return this.$i18n(this.props.template);
  }
  [LOAD("$el") + DOMDIFF]() {
    return this.getTemplateString();
  }
}
function DropdownDividerMenuItem() {
  return `<li class="dropdown-divider"></li>`;
}
function DropdownLinkMenuItem() {
  return `<li>
        <a href="${this.props.href}" target="${this.props.target || "_blank"}">${this.$i18n(this.props.title)}</a>
      </li>`;
}
function DropdownTextMenuItem() {
  return `<li class='text'><label>${this.$i18n(this.props.text)}</label></li>`;
}
function makeMenuItem(it, id) {
  if (it === "-") {
    return createComponent("Divider", {
      ref: `${id}-divider`
    });
  }
  if (it === "-" || it.type === "divider") {
    return createComponent("DropdownDividerMenuItem", {
      ref: `${id}-divider`
    });
  }
  if (isString(it)) {
    return createComponent("DropdownTextMenuItem", {
      text: it,
      ref: `${id}-text`
    });
  }
  if (it.type === "link") {
    return createComponent("DropdownLinkMenuItem", {
      href: it.href,
      target: it.target,
      title: it.title,
      closable: it.closable,
      ref: `${id}-link`
    });
  }
  if (it.type === "custom") {
    return createComponent("DropdownCustomMenuItem", {
      action: it.action,
      command: it.command,
      args: it.args,
      icon: it.icon,
      text: it.text,
      events: it.events,
      template: it.template,
      closable: it.closable,
      ref: `${id}-custom`
    });
  }
  if (it.type === "checkbox") {
    return createComponent("DropdownCheckboxMenuItem", {
      checked: it.checked,
      command: it.command,
      args: it.args || [],
      disabled: it.disabled,
      direction: it.direction,
      icon: it.icon,
      nextTick: it.nextTick,
      onClick: it.onClick,
      action: it.action,
      shortcut: it.shortcut,
      title: it.title,
      key: it.key,
      events: it.events,
      closable: it.closable,
      items: it.items || [],
      ref: `${id}-checkbox`
    });
  }
  if (isArray(it.items)) {
    return createComponent("DropdownMenuList", {
      title: it.title,
      items: it.items,
      ref: `${id}-list`
    });
  }
  return createComponent("DropdownMenuItem", {
    checked: it.checked,
    command: it.command,
    args: it.args || [],
    disabled: it.disabled,
    direction: it.direction,
    icon: it.icon,
    nextTick: it.nextTick,
    onClick: it.onClick,
    action: it.action,
    shortcut: it.shortcut,
    title: it.title,
    key: it.key,
    events: it.events,
    closable: it.closable,
    items: it.items || [],
    ref: `${id}-menu-item`
  });
}
class DropdownMenuList extends EditorElement {
  components() {
    return {
      Divider,
      DropdownDividerMenuItem,
      DropdownLinkMenuItem,
      DropdownTextMenuItem,
      DropdownCustomMenuItem,
      DropdownCheckboxMenuItem,
      DropdownMenuList,
      DropdownMenuItem
    };
  }
  get groupId() {
    return `${this.props.id}-groupId`;
  }
  template() {
    return `
        <li class="dropdown-menu-list">
            <label>${this.$i18n(this.props.title)}</label> 
            <span>${iconUse("arrowRight")}</span>              
            <ul>
                ${this.props.items.map((child, index2) => makeMenuItem(child, `${this.groupId}-${index2}`)).join("")}
            </ul>
        </li>
      `;
  }
}
var DropdownMenu$1 = /* @__PURE__ */ (() => ".dropdown-menu{--elf--dropdown-menu-width:240px;--elf--dropdown-menu-dy:0px;align-items:center;box-sizing:border-box;display:flex;justify-content:center;padding:0 4px;position:relative}.dropdown-menu .dropdown-menu-item-list{border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.05),0 25px 35px rgba(0,0,0,.03)}.dropdown-menu>.label{font-size:13px}.dropdown-menu>.icon{align-items:center;cursor:pointer;display:flex;justify-content:center;padding:0 4px 0 8px;width:34px}.dropdown-menu>.icon:empty{display:none}.dropdown-menu>.icon svg{height:24px;pointer-events:none;width:24px}.dropdown-menu .dropdown-arrow{fill:var(--elf--selected-font-color)}.dropdown-menu .dropdown-arrow:hover svg{transform:translateY(2px)}.dropdown-menu .dropdown-arrow svg{transition:all .1s ease-in-out;width:14px}.dropdown-menu[data-selected=true]{background-color:var(--elf--selected-color-2)}.dropdown-menu.opened:not([data-selected=true]),.dropdown-menu:hover:not([data-selected=true]){background-color:#000}.dropdown-menu.opened:not([data-selected=true]) .dropdown-arrow svg,.dropdown-menu:hover:not([data-selected=true]) .dropdown-arrow svg{transform:translateY(2px)}.dropdown-menu.opened>ul{display:block}.dropdown-menu.opened>.dropdown-menu-arrow{display:block;width:100%}.dropdown-menu li{align-items:center;color:var(--elf--font-color);-moz-column-gap:4px;column-gap:4px;cursor:pointer;display:flex;justify-content:space-between;padding:8px;position:relative}.dropdown-menu li .icon{flex:none}.dropdown-menu li .menu-item-text{align-items:center;display:flex;flex:1 1 auto;justify-content:space-between;vertical-align:middle}.dropdown-menu li .menu-item-text>*{line-height:1.6;vertical-align:middle}.dropdown-menu li .menu-item-text .shortcut{border:1px solid var(--elf--border-color);border-radius:2px;font-size:13px;padding:0 4px}.dropdown-menu li .menu-item-text .shortcut:empty{display:none}.dropdown-menu li>*{color:var(--elf--font-color);text-decoration:none}.dropdown-menu li[disabled]{cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dropdown-menu li[disabled]>*{color:var(--elf--disabled-font-color);pointer-events:none}.dropdown-menu li svg{color:var(--elf--border-color);height:20px;vertical-align:middle;width:20px}.dropdown-menu li svg path,.dropdown-menu li svg use{fill:currentColor}.dropdown-menu li.dropdown-divider{background-color:var(--elf--layout-border-color);box-sizing:border-box;display:block;height:1px;line-height:0px;margin-bottom:4px;margin-top:4px;padding:0}.dropdown-menu li.dropdown-divider>*{pointer-events:all}.dropdown-menu li.checkbox{align-items:center;display:flex}.dropdown-menu li.checkbox *{vertical-align:middle}.dropdown-menu li.custom{display:block}.dropdown-menu[data-direction=right]>ul{left:auto;right:0}.dropdown-menu[data-direction=right]>.dropdown-menu-arrow{left:auto;right:50%;transform:translateX(50%) scale(1.5)}.dropdown-menu[data-direction=right] .dropdown-menu-list>ul{left:calc(-100% - 2px)}.dropdown-menu[data-direction=center]>ul{left:50%;transform:translateX(-50%)}.dropdown-menu[data-direction=center]>.dropdown-menu-arrow{left:50%;transform:translateX(-50%) scale(1.5)}.dropdown-menu.flat{padding:0}.dropdown-menu.flat>ul{position:relative;width:100%}.dropdown-menu ul{background-color:var(--elf--background-color);border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.05),0 25px 35px rgba(0,0,0,.03);display:none;left:0;list-style-type:none;margin:0;padding:4px 0;position:absolute;top:calc(100% + 5px);width:var(--elf--dropdown-menu-width)}.dropdown-menu .dropdown-menu-list>ul{top:-11px}.dropdown-menu .dropdown-menu-arrow{background-color:transparent;box-sizing:border-box;display:none;height:12px;left:50%;position:absolute;top:calc(100% - 6px);transform:translateX(-50%) scale(1.5);width:12px}.dropdown-menu .dropdown-menu-arrow svg{height:6px;width:8px}.dropdown-menu .dropdown-menu-arrow svg path,.dropdown-menu .dropdown-menu-arrow svg use{fill:var(--elf--background-color);stroke:var(--elf--border-color)}.dropdown-menu ul ul{left:100%;position:absolute;top:0}.dropdown-menu li:hover{color:var(--elf--font-color)}.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider){background-color:var(--elf--selected-color);color:var(--elf--selected-font-color)}.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>div,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>div>*,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>div>* svg,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>label,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>label>*,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>label>* svg,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>span,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>span>*,.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>span>* svg{color:var(--elf--selected-font-color)}.dropdown-menu li:hover:not([disabled]):not(.dropdown-divider)>.menu-item-text .shortcut{border-color:var(--elf--selected-font-color)}.dropdown-menu li:hover>ul{display:block}")();
class DropdownMenu extends EditorElement {
  components() {
    return {
      Divider,
      DropdownDividerMenuItem,
      DropdownLinkMenuItem,
      DropdownTextMenuItem,
      DropdownCustomMenuItem,
      DropdownCheckboxMenuItem,
      DropdownMenuList,
      DropdownMenuItem
    };
  }
  initialize() {
    super.initialize();
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => this.refresh());
      });
    }
  }
  initState() {
    return {
      trigger: this.props.trigger || "click",
      direction: this.props.direction || "left",
      opened: this.props.opened || false,
      items: this.props.items || [],
      dy: this.props.dy || 0
    };
  }
  findItem(searchKey) {
    return this.state.items.find((it) => it.key && it.key === searchKey);
  }
  template() {
    const { direction } = this.state;
    return `
        <div class="${classnames("dropdown-menu", {
      opened: false
    })}" data-direction="${direction}">
          <span class='icon' ref="$icon"></span>
          <span class='label' ref='$label'></span>
          <span class='dropdown-arrow' ref="$arrow">${iconUse("keyboard_arrow_down")}</span>
          <ul class="dropdown-menu-item-list" ref="$list"></ul>
          <div class="dropdown-menu-arrow"></div>
      </div>
      `;
  }
  [LOAD("$icon")]() {
    return isFunction(this.props.icon) ? this.props.icon(this.$editor, this) : this.props.icon;
  }
  [BIND("$label")]() {
    return {
      innerHTML: this.props.title
    };
  }
  [BIND("$el")]() {
    const selected = isFunction(this.props.selected) ? this.props.selected(this.$editor, this) : false;
    return {
      "data-selected": !!selected,
      style: __spreadProps(__spreadValues({}, this.props.style || {}), {
        "--elf--dropdown-menu-width": this.props.width,
        "--elf--dropdown-menu-dy": isNotUndefined(this.props.dy) ? Length.px(this.props.dy) : 0
      })
    };
  }
  close() {
    this.setState({
      opened: false
    }, false);
    this.$el.removeClass("opened");
  }
  toggle() {
    this.setState({
      opened: !this.state.opened
    }, false);
    this.$el.toggleClass("opened", this.state.opened);
    if (this.state.opened) {
      this.emit("hideDropdownMenu");
    }
  }
  open() {
    this.setState({
      opened: true
    }, false);
    this.$el.toggleClass("opened", this.state.opened);
    if (this.state.opened) {
      this.emit("hideDropdownMenu");
    }
  }
  hide() {
    this.setState({
      opened: false
    }, false);
    this.$el.toggleClass("opened", this.state.opened);
  }
  get groupId() {
    return this.id + "$list";
  }
  [LOAD("$list") + DOMDIFF]() {
    return this.state.items.map((it, index2) => makeMenuItem(it, `${this.groupId}-${index2}`));
  }
  checkDropdownOpen(e) {
    const ul = Dom.create(e.target).closest("dropdown-menu-item-list");
    if (!ul)
      return true;
    return false;
  }
  checkTriggerClick() {
    return this.state.trigger === "click";
  }
  checkTriggerOver() {
    return this.state.trigger === "over";
  }
  [CLICK("$arrow") + IF("checkDropdownOpen") + IF("checkTriggerClick")]() {
    this.toggle();
  }
  [CLICK("$label") + IF("checkDropdownOpen") + IF("checkTriggerClick")]() {
    this.toggle();
  }
  [POINTEROVER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }
  [POINTEROUT("$el") + IF("checkTriggerOver")]() {
    this.hide();
  }
  [CLICK("$icon")]() {
    const selectedKey = isFunction(this.props.selectedKey) ? this.props.selectedKey(this.$editor, this) : this.props.selectedKey;
    const menuItem = this.findItem(selectedKey);
    if (!menuItem) {
      if (isFunction(this.props.action)) {
        this.props.action(this.$editor, this);
      }
      return;
    }
    const command = menuItem.command;
    const args = menuItem.args;
    const action = menuItem.action;
    const nextTick = menuItem.nextTick;
    if (command) {
      this.$commands.emit(command, ...args);
    } else if (action && isFunction(action)) {
      this.emit(action);
    }
    if (nextTick && isFunction(nextTick)) {
      this.nextTick(() => {
        nextTick(this.$editor);
      });
    }
    this.close();
  }
  [SUBSCRIBE_SELF("updateMenuItems")](items) {
    this.setState({ items });
  }
  [SUBSCRIBE("hideDropdownMenu")]() {
    this.close();
  }
  [POINTERSTART("document")](e) {
    const $target = Dom.create(e.target);
    const $dropdown = $target.closest("dropdown-menu");
    if (!$dropdown) {
      this.close();
    } else if ($dropdown.el !== this.$el.el) {
      this.close();
    }
  }
}
class ToolBarRenderer extends EditorElement {
  components() {
    return {
      DropdownMenu,
      ToolbarButtonMenuItem
    };
  }
  template() {
    return `<div class="elf--toolbar-renderer"></div>`;
  }
  [LOAD("$el")]() {
    return this.props.items.map((item, index2) => {
      return this.renderMenuItem(item, index2);
    });
  }
  renderMenuItem(item, index2) {
    switch (item.type) {
      case MenuItemType.LINK:
        return this.renderLink(item, index2);
      case MenuItemType.SUBMENU:
        return this.renderMenu(item, index2);
      case MenuItemType.BUTTON:
        return this.renderButton(item, index2);
      case MenuItemType.DROPDOWN:
        return this.renderDropdown(item, index2);
      default:
        return this.renderButton(item, index2);
    }
  }
  renderButton(item, index2) {
    return createComponent("ToolbarButtonMenuItem", {
      ref: "$button-" + index2,
      title: item.title,
      tooltip: item.tooltip,
      icon: item.icon,
      command: item.command,
      shortcut: item.shortcut,
      args: item.args,
      nextTick: item.nextTick,
      disabled: item.disabled,
      selected: item.selected,
      selectedKey: item.selectedKey,
      action: item.action,
      events: item.events,
      style: item.style
    });
  }
  renderDropdown(item, index2) {
    return createComponent("DropdownMenu", __spreadProps(__spreadValues({
      ref: "$dropdown-" + index2
    }, item), {
      items: item.items,
      icon: item.icon,
      title: item.title,
      trigger: item.trigger,
      tooltip: item.tooltip,
      direction: item.direction,
      events: item.events || [],
      selected: item.selected,
      selectedKey: item.selectedKey,
      action: item.action,
      style: item.style,
      dy: 6
    }), [item.content]);
  }
}
class BlankToolBar extends EditorElement {
  components() {
    return {
      ToolBarRenderer
    };
  }
  template() {
    return `
            <div class='elf--blank-tool-bar'>
              <div class="logo-area">
                ${createComponent("ToolBarRenderer", {
      items: this.$menu.getTargetMenu("toolbar.logo")
    })}
              </div>            
              <div class="toolbar-area">
                <div class='left'>
                    ${createComponent("ToolBarRenderer", {
      items: this.$menu.getTargetMenu("toolbar.left")
    })}
                    ${this.$injectManager.generate("toolbar.left")}                                        
                </div>
                <div class='center'>
                    ${createComponent("ToolBarRenderer", {
      items: this.$menu.getTargetMenu("toolbar.center")
    })}
                    ${this.$injectManager.generate("toolbar.center")}                                        
                </div>
                <div class='right'>
                    ${createComponent("ToolBarRenderer", {
      items: this.$menu.getTargetMenu("toolbar.right", "desc")
    })}                
                    ${this.$injectManager.generate("toolbar.right")}                    
                </div>
              </div>
            </div>
        `;
  }
  [SUBSCRIBE("updateMenu")](target) {
    if (target === "toolbar.log" || target === "toolbar.left" || target === "toolbar.center" || target === "toolbar.right") {
      this.refresh();
    }
  }
}
var layout = /* @__PURE__ */ (() => ".elf-editor{background-color:var(--elf--background-color);height:100%;overflow:hidden;position:absolute;width:100%}")();
var Console = {
  command: "Console",
  description: "do console.log()",
  execute: (editor, ...args) => {
    console.log(...args);
  }
};
var __glob_0_0$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Console
}, Symbol.toStringTag, { value: "Module" }));
var keymap_keydown = {
  command: "keymap.keydown",
  execute: function(editor, e) {
    editor.context.keyboardManager.add(e.code, e.keyCode, e);
    if (editor.context.shortcuts) {
      editor.context.shortcuts.execute(e, "keydown");
    }
  }
};
var __glob_0_1$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keymap_keydown
}, Symbol.toStringTag, { value: "Module" }));
var keymap_keyup = {
  command: "keymap.keyup",
  execute: function(editor, e) {
    editor.context.keyboardManager.remove(e.key, e.keyCode);
    if (editor.context.shortcuts) {
      editor.context.shortcuts.execute(e, "keyup");
    }
  }
};
var __glob_0_2$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keymap_keyup
}, Symbol.toStringTag, { value: "Module" }));
var moveToCenter = {
  command: "moveToCenter",
  description: "Move Layer to Center on Viewport",
  execute: function(editor, areaVerties, withScale = false) {
    if (areaVerties) {
      editor.context.viewport.moveToCenter(areaVerties, withScale ? -0.2 : 0, withScale);
    }
  }
};
var __glob_0_3$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": moveToCenter
}, Symbol.toStringTag, { value: "Module" }));
var pop_mode_view = {
  command: "pop.mode.view",
  execute: function(editor, modeView = void 0) {
    editor.context.modeViewManager.popMode(modeView);
  }
};
var __glob_0_4$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pop_mode_view
}, Symbol.toStringTag, { value: "Module" }));
var push_mode_view = {
  command: "push.mode.view",
  execute: function(editor, modeView = ViewModeType.CanvasView) {
    editor.context.modeViewManager.pushMode(modeView);
    editor.emit("updateModeView");
  }
};
var __glob_0_5$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": push_mode_view
}, Symbol.toStringTag, { value: "Module" }));
var recoverCursor = {
  command: "recoverCursor",
  execute: function(editor) {
    editor.context.config.set("editor.cursor", "auto");
    editor.context.config.set("editor.cursor.args", []);
  }
};
var __glob_0_6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": recoverCursor
}, Symbol.toStringTag, { value: "Module" }));
var refreshCursor = {
  command: "refreshCursor",
  execute: function(editor, iconType, ...args) {
    editor.context.config.set("editor.cursor", iconType);
    editor.context.config.set("editor.cursor.args", args);
  }
};
var __glob_0_7$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": refreshCursor
}, Symbol.toStringTag, { value: "Module" }));
var setLocale = {
  command: "setLocale",
  execute: function(editor, locale) {
    editor.setLocale(locale);
    editor.emit("changed.locale");
  }
};
var __glob_0_8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": setLocale
}, Symbol.toStringTag, { value: "Module" }));
var toggle_tool_hand = {
  command: "toggleHandTool",
  execute: function(editor) {
    if (editor.context.config.is("editing.mode", EditingMode.HAND)) {
      editor.context.config.set("editing.mode", EditingMode.SELECT);
    } else {
      editor.context.config.set("editing.mode", EditingMode.HAND);
    }
    editor.emit("hideLayerAppendView");
  }
};
var __glob_0_9$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": toggle_tool_hand
}, Symbol.toStringTag, { value: "Module" }));
var zoom_default$1 = {
  command: "zoom.default",
  execute: function(editor) {
    editor.context.viewport.zoomDefault();
  }
};
var __glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zoom_default$1
}, Symbol.toStringTag, { value: "Module" }));
var zoom_in$1 = {
  command: "zoom.in",
  execute: function(editor) {
    editor.context.viewport.zoomIn(0.02);
  }
};
var __glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zoom_in$1
}, Symbol.toStringTag, { value: "Module" }));
var zoom_out$1 = {
  command: "zoom.out",
  execute: function(editor) {
    editor.context.viewport.zoomOut(0.02);
  }
};
var __glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zoom_out$1
}, Symbol.toStringTag, { value: "Module" }));
const modules$2 = { "./command_list/Console.js": __glob_0_0$2, "./command_list/keymap.keydown.js": __glob_0_1$2, "./command_list/keymap.keyup.js": __glob_0_2$2, "./command_list/moveToCenter.js": __glob_0_3$2, "./command_list/pop.mode.view.js": __glob_0_4$2, "./command_list/push.mode.view.js": __glob_0_5$2, "./command_list/recoverCursor.js": __glob_0_6$1, "./command_list/refreshCursor.js": __glob_0_7$1, "./command_list/setLocale.js": __glob_0_8$1, "./command_list/toggle.tool.hand.js": __glob_0_9$1, "./command_list/zoom.default.js": __glob_0_10, "./command_list/zoom.in.js": __glob_0_11, "./command_list/zoom.out.js": __glob_0_12 };
const obj = {};
Object.entries(modules$2).forEach(([key, value]) => {
  key = key.replace("./command_list/", "").replace(".js", "");
  obj[key] = value.default;
});
class AssetParser {
  static parse(datauri, enableParselocal = false) {
    var [, data] = datauri.split("data:");
    var [mediaType, ...content] = data.split(",");
    var [mimeType, encoding] = mediaType.split(";");
    content = content.join(",");
    return {
      mimeType,
      local: enableParselocal && AssetParser.getLink(mimeType, encoding, content)
    };
  }
  static getLink(mimeType, encoding, content) {
    if (encoding === "base64") {
      var binary = window.atob(content);
      var len = binary.length;
      var unit8Array = new window.Uint8Array(len);
      for (var i = 0; i < len; i++) {
        unit8Array[i] = binary.charCodeAt(i);
      }
      var blob = new window.Blob([unit8Array], { type: mimeType });
      return window.URL.createObjectURL(blob);
    }
    return "";
  }
}
class AssetManager {
  constructor(editor) {
    this.$editor = editor;
  }
  get project() {
    return this.$editor.context.selection.currentProject;
  }
  revokeResource(value) {
    var json = JSON.parse(value || "[]");
    var assets = {};
    json.forEach((project) => {
      project.images.forEach((it) => {
        assets[`#${it.id}`] = it;
      });
    });
    Object.keys(assets).map((idString) => {
      var a = assets[idString];
      var info = AssetParser.parse(a.original, true);
      a.local = info.local;
    });
    json.forEach((project) => {
      project.layers = this.applyAsset(project.layers, assets);
    });
    return json;
  }
  applyAsset(json, assets) {
    if (Array.isArray(json)) {
      json = json.map((it) => this.applyAsset(it, assets));
    } else if (isObject(json)) {
      Object.keys(json).forEach((key) => {
        json[key] = this.applyAsset(json[key], assets);
      });
    } else if (isString(json)) {
      Object.keys(assets).forEach((idString) => {
        var a = assets[idString];
        if (json.indexOf(`#${a.id}`) > -1) {
          json = json.replace(new RegExp(`#${a.id}`, "g"), a.local);
        }
      });
    }
    return json;
  }
}
class CommandMaker {
  constructor(editor) {
    this.editor = editor;
    this.commands = [];
  }
  log() {
    console.log(this.commands);
  }
  emit(...args) {
    this.commands.push(args);
  }
  run() {
    this.editor.emit(this.commands);
  }
  add(otherCommandMaker) {
    this.commands = this.commands.concat(otherCommandMaker.commands);
  }
}
class CommandManager {
  constructor(editor) {
    this.$editor = editor;
    this.promiseProxy = this.localCommands = {};
    this.loadCommands();
    return new Proxy(this, {
      get: (target, key) => {
        var originMethod = target[key];
        if (isFunction(originMethod)) {
          return (...args) => {
            return originMethod.apply(target, args);
          };
        } else {
          return this.makePromiseEvent(key);
        }
      }
    });
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
  registerCommand(command, commandCallback) {
    if (this.localCommands[command]) {
      throw new Error(`command ${command} is already registered`);
    }
    if (arguments.length === 2) {
      const callback = (...args) => {
        const result = commandCallback.call(this, this.$editor, ...args);
        this.$editor.debug("command execute", this, ...args);
        return result;
      };
      callback.source = command;
      this.localCommands[command] = callback;
    } else if (isObject(command)) {
      const callback = (...args) => {
        const result = command.execute.call(command, this.$editor, ...args);
        this.$editor.debug("command execute", command, ...args);
        return result;
      };
      callback.source = command.command;
      this.localCommands[command.command] = callback;
    }
  }
  getCallback(command) {
    return this.localCommands[command];
  }
  makePromiseEvent(command) {
    const callback = this.getCallback(command);
    if (callback) {
      return (...args) => new Promise((resolve) => {
        resolve(callback(...args));
      });
    }
  }
  executeCommand(command, description, ...args) {
    if (this.$editor.context.stateManager.isPointerUp) {
      command = `history.${command}`;
      const callback = this.getCallback(command);
      return callback(description, ...args);
    } else {
      return this.emit(command, ...args);
    }
  }
  emit(command, ...args) {
    const callback = this.getCallback(command);
    if (callback) {
      return callback(...args);
    }
  }
}
class ComponentManager {
  constructor(editor) {
    this.editor = editor;
    this.components = {};
    this.inspectors = {};
  }
  registerComponent(name, componentProperty) {
    this.components[name] = componentProperty;
  }
  registerInspector(name, inspectorCallback) {
    this.inspectors[name] = inspectorCallback;
  }
  isComponentClass(name) {
    return !!this.getComponentClass(name);
  }
  getComponentClass(name) {
    return this.components[name] || this.components["rect"];
  }
  getInspector(name) {
    return this.inspectors[name];
  }
  createComponent(itemType, obj2 = {}) {
    var ComponentClass = this.getComponentClass(itemType);
    if (!ComponentClass) {
      console.warn(`${itemType} type is not valid.`);
      return void 0;
    }
    return new ComponentClass(obj2);
  }
  createInspector(item, name = "") {
    const inspector = this.getInspector(name || item.itemType);
    if (isFunction(inspector)) {
      return inspector(item) || [];
    }
    if (isFunction(item.getProps)) {
      return item.getProps() || [];
    }
    return [];
  }
}
class ConfigManager {
  constructor(editor) {
    this.editor = editor;
    this.configList = [];
    this.config = /* @__PURE__ */ new Map();
  }
  load() {
    const obj2 = this.editor.loadItem("config") || {};
    Object.keys(obj2).forEach((key) => {
      this.config.set(key, obj2[key]);
    });
  }
  get(key) {
    var _a;
    if (this.config.has(key) === false) {
      this.config.set(key, (_a = this.configList.find((it) => it.key == key)) == null ? void 0 : _a.defaultValue);
    }
    return this.config.get(key);
  }
  set(key, value, isSave = true) {
    const oldValue = this.config.get(key);
    if (oldValue !== value) {
      this.config.set(key, value);
      this.editor.emit("config:" + key, value, oldValue);
      if (isSave) {
        this.save();
      }
    }
  }
  push(key, value) {
    const list = this.get(key);
    const lastIndex = list.length;
    this.setIndexValue(key, lastIndex, value);
    return lastIndex;
  }
  setIndexValue(key, index2, value) {
    const list = this.get(key);
    list[index2] = value;
    this.set(key, [...list]);
  }
  getIndexValue(key, index2) {
    const list = this.get(key);
    return list[index2];
  }
  removeByIndex(key, index2) {
    const list = this.get(key);
    list.splice(index2, 1);
    this.set(key, [...list]);
  }
  init(key, value) {
    this.set(key, value, false);
  }
  save() {
    const obj2 = {};
    this.configList.filter((it) => it.storage !== "none").forEach((it) => {
      obj2[it.key] = this.get(it.key);
    });
    this.editor.saveItem("config", obj2);
  }
  setAll(obj2) {
    Object.keys(obj2).forEach((key) => {
      this.set(key, obj2[key]);
    });
  }
  getType(key) {
    var _a;
    return (_a = this.configList.find((it) => it.key == key)) == null ? void 0 : _a.type;
  }
  isType(key, type) {
    return this.getType(key) === type;
  }
  isBoolean(key) {
    return this.isType(key, "boolean");
  }
  toggle(key) {
    this.set(key, !this.get(key));
  }
  toggleWith(key, firstValue, secondValue) {
    if (this.get(key) === firstValue) {
      this.set(key, secondValue);
    } else {
      this.set(key, firstValue);
    }
  }
  true(key) {
    return this.get(key) === true;
  }
  false(key) {
    return this.get(key) === false;
  }
  is(key, value) {
    return this.get(key) === value;
  }
  remove(key) {
    this.config.delete(key);
    this.editor.emit("config:" + key);
  }
  registerConfig(config) {
    this.config.set(config.key, config.defaultValue);
    this.configList.push(config);
  }
}
class CursorManager {
  async load(iconName = "default", ...args) {
    if (icons[iconName]) {
      const iconContent = isFunction(icons[iconName]) ? icons[iconName].call(icons[iconName], ...args) : icons[iconName];
      const blob = new window.Blob([iconContent], { type: "image/svg+xml" });
      return new Promise((resolve) => {
        const reader = new window.FileReader();
        reader.onload = (e) => {
          const datauri = e.target.result;
          resolve(`url(${datauri}) 12 12, auto`);
        };
        reader.readAsDataURL(blob);
      });
    } else {
      return iconName;
    }
  }
}
class I18nManager {
  constructor(editor) {
    this.editor = editor;
    this.locales = {};
    this.fallbackLang = "en_US";
  }
  getLang(lang = void 0) {
    return lang || this.fallbackLang;
  }
  setFallbackLang(lang) {
    this.fallbackLang = lang;
  }
  get(key, params = {}, lang = void 0) {
    var _a, _b;
    const currentLang = this.getLang(lang);
    const str = ((_a = this.locales[currentLang]) == null ? void 0 : _a[key]) || ((_b = this.locales[this.fallbackLang]) == null ? void 0 : _b[key]) || key || void 0;
    if (isFunction(str)) {
      return str(params);
    } else {
      let newValue = str;
      if (key === newValue) {
        return key.split(".").pop();
      }
      Object.entries(params).forEach(([key2, value]) => {
        newValue = newValue.replace(new RegExp(`{${key2}}`, "ig"), value);
      });
      return newValue;
    }
  }
  hasKey(key, lang = void 0) {
    const currentLang = this.getLang(lang);
    return !!(this.locales[currentLang][key] || this.locales[this.fallbackLang][key]);
  }
  registerI18nMessage(lang, messages) {
    if (!this.locales[lang]) {
      this.locales[lang] = {};
    }
    Object.assign(this.locales[lang], messages);
  }
}
class IconManager {
  constructor(editor) {
    this.editor = editor;
    this.iconMap = {};
  }
  get(itemType, item) {
    const icon = this.iconMap[itemType];
    if (isFunction(icon)) {
      return icon(item);
    }
    return iconUse(icon || "rect");
  }
  set(itemType, value) {
    this.iconMap[itemType] = value;
  }
  registerIcon(itemType, iconOrFunction) {
    this.set(itemType, iconOrFunction);
  }
  registerIconList(obj2) {
    Object.keys(obj2).forEach((key) => {
      this.set(key, obj2[key]);
    });
  }
  load() {
    return this.iconMap;
  }
}
class InjectManager {
  constructor(editor) {
    this.editor = editor;
    this.ui = {};
  }
  registerUI(target, obj2 = {}, order = 1) {
    if (!this.ui[target]) {
      this.ui[target] = [];
    }
    Object.keys(obj2).forEach((refClass) => {
      const targetClass = this.ui[target].find((it) => it.refClass === refClass);
      if (targetClass) {
        targetClass.class = obj2[refClass];
      } else {
        this.ui[target].push({
          refClass,
          order,
          class: obj2[refClass]
        });
      }
    });
  }
  getTargetUI(target) {
    return this.ui[target] || [];
  }
  generate(target, hasRef = false) {
    const list = this.getTargetUI(target);
    list.sort((a, b) => {
      if (a.order === b.order)
        return 0;
      return a.order > b.order ? 1 : -1;
    });
    return list.map((it, index2) => {
      if (isArray(it.class)) {
        return createElementJsx(...it.class);
      } else {
        const props = {};
        if (hasRef) {
          props.ref = `$${it.refClass}-${index2}`;
        }
        return createComponent(it.refClass, props);
      }
    }).join("\n");
  }
}
class KeyBoardManager {
  constructor(editor) {
    this.editor = editor;
    this.codeSet = /* @__PURE__ */ new Set();
    this.keyCodeSet = /* @__PURE__ */ new Set();
    this.event = {};
  }
  add(key, keyCode, e) {
    if (this.codeSet.has(key) === false) {
      this.codeSet.add(key);
    }
    if (this.keyCodeSet.has(keyCode) === false) {
      this.keyCodeSet.add(keyCode);
    }
    this.event = e;
  }
  remove(key, keyCode) {
    this.codeSet.delete(key);
    this.keyCodeSet.delete(keyCode);
  }
  hasKey(keyOrKeyCode) {
    return this.codeSet.has(keyOrKeyCode) || this.keyCodeSet.has(keyOrKeyCode);
  }
  check(...args) {
    return args.some((keyOrKeyCode) => this.hasKey(keyOrKeyCode));
  }
  isShift() {
    return Boolean(this.event.shiftKey);
  }
  isCtrl() {
    return Boolean(this.event.ctrlKey);
  }
  isAlt() {
    return Boolean(this.event.altKey);
  }
  isMeta() {
    return Boolean(this.event.metaKey);
  }
}
class MenuManager {
  constructor(editor) {
    this.editor = editor;
    this.menus = {};
  }
  registerMenu(target, obj2 = [], order = 1) {
    if (!this.menus[target]) {
      this.menus[target] = [];
    }
    if (!isArray(obj2)) {
      obj2 = [obj2];
    }
    obj2.forEach((it) => {
      this.menus[target].push(it);
    });
    this.editor.emit("updateMenu", target);
  }
  getTargetMenu(target, sort = "asc") {
    const list = this.menus[target] || [];
    if (sort === "desc") {
      return list.reverse();
    }
    return list;
  }
}
class ModeViewManager {
  constructor(editor) {
    this.editor = editor;
    this.modes = [ViewModeType.CanvasView];
  }
  pushMode(mode) {
    if (!this.isCurrentMode(mode)) {
      this.modes.push(mode);
    }
  }
  popMode(mode = void 0) {
    if (mode) {
      if (this.isCurrentMode(mode)) {
        this.modes.pop();
      }
    } else {
      this.modes.pop();
    }
  }
  currentMode() {
    return this.modes[this.modes.length - 1];
  }
  isCurrentMode(mode) {
    return this.currentMode() === mode;
  }
}
class PluginManager {
  constructor(editor) {
    this.editor = editor;
    this.plugins = [];
  }
  registerPlugin(func) {
    this.plugins.push(func);
  }
  async initializePlugin(options = {}) {
    return await Promise.all(this.plugins.map(async (CreatePluginFunction) => {
      return await CreatePluginFunction(this.editor, options);
    }));
  }
}
class RendererManager {
  constructor(editor) {
    this.editor = editor;
    this.renderers = {};
    this.rendererTypes = {};
  }
  getRenderType(rendererType) {
    if (!this.renderers[rendererType]) {
      this.renderers[rendererType] = {};
    }
    return this.renderers[rendererType];
  }
  registerRenderer(rendererType, name, rendererInstance) {
    const typedRenderer = this.getRenderType(rendererType);
    typedRenderer[name] = rendererInstance;
  }
  registerRendererType(rendererType, rendererTypeInstance) {
    this.rendererTypes[rendererType] = rendererTypeInstance;
  }
  getRenderer(rendererType) {
    return this.rendererTypes[rendererType];
  }
  getRendererInstance(rendererType, name) {
    const typedRenderer = this.getRenderType(rendererType);
    return typedRenderer[name];
  }
}
var clipboard_copy = {
  category: "Edit",
  key: "cmd+c",
  command: "clipboard.copy",
  description: "Copy objects",
  when: "CanvasView"
};
var __glob_0_0$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": clipboard_copy
}, Symbol.toStringTag, { value: "Module" }));
var clipboard_paste = {
  category: "Edit",
  key: "cmd+v",
  win: "ctrl+v",
  command: "clipboard.paste",
  description: "Paste selected objects",
  when: "CanvasView"
};
var __glob_0_1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": clipboard_paste
}, Symbol.toStringTag, { value: "Module" }));
var show_pan = {
  category: "Tool",
  key: "space",
  command: "showPan",
  description: "Show panning area",
  when: "CanvasView"
};
var __glob_0_2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": show_pan
}, Symbol.toStringTag, { value: "Module" }));
var zoom_default = {
  category: "View",
  key: "0",
  command: "zoom.default",
  description: "zoom by scale 1",
  when: "CanvasView"
};
var __glob_0_3$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zoom_default
}, Symbol.toStringTag, { value: "Module" }));
var zoom_in = {
  category: "View",
  key: "Equal",
  command: "zoom.in",
  description: "zoom in",
  when: "CanvasView"
};
var __glob_0_4$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zoom_in
}, Symbol.toStringTag, { value: "Module" }));
var zoom_out = {
  category: "View",
  key: "minus",
  command: "zoom.out",
  description: "zoom Out",
  when: "CanvasView"
};
var __glob_0_5$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zoom_out
}, Symbol.toStringTag, { value: "Module" }));
const modules$1 = { "./shortcuts_list/clipboard.copy.js": __glob_0_0$1, "./shortcuts_list/clipboard.paste.js": __glob_0_1$1, "./shortcuts_list/show.pan.js": __glob_0_2$1, "./shortcuts_list/zoom.default.js": __glob_0_3$1, "./shortcuts_list/zoom.in.js": __glob_0_4$1, "./shortcuts_list/zoom.out.js": __glob_0_5$1 };
var shortcuts = Object.values(modules$1).map((it) => it.default);
function joinKeys(...args) {
  return args.filter(Boolean).join("+");
}
function generateKeyCode(code) {
  return KEY_CODE[`${code}`.toLowerCase()] || code;
}
class ShortCutManager {
  constructor(editor) {
    this.$editor = editor;
    this.loadShortCuts();
  }
  getGeneratedKeyCode(code) {
    return generateKeyCode(code);
  }
  loadShortCuts() {
    this.list = [];
    this.commands = {};
    shortcuts.forEach((shortcut) => {
      this.registerShortCut(shortcut);
    });
    this.sort();
  }
  registerShortCut(shortcut) {
    const OSName2 = os();
    this.list.push(__spreadProps(__spreadValues({
      key: "",
      command: "",
      args: [],
      eventType: "keydown"
    }, shortcut), {
      checkKeyString: this.splitShortCut(shortcut[OSName2] || shortcut.key),
      whenFunction: this.makeWhenFunction(shortcut.command, shortcut.when || true)
    }));
    this.sort();
  }
  makeWhenFunction(command, when) {
    if (isBoolean(when) && when) {
      return () => true;
    }
    const editor = this.$editor;
    const whenList = when.split("|").map((it) => it.trim());
    return () => {
      return whenList.some((it) => editor.context.modeViewManager.isCurrentMode(it));
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
    var arr = key.toUpperCase().split("+").map((it) => it.trim()).filter(Boolean);
    let isAlt = false;
    let isControl = false;
    let isShift = false;
    let isMeta = false;
    let restKeys = [];
    arr.forEach((key2) => {
      if (key2.includes("ALT"))
        isAlt = true;
      else if (key2.includes("CTRL"))
        isControl = true;
      else if (key2.includes("SHIFT"))
        isShift = true;
      else if (key2.includes("CMD") || key2.includes("WIN") || key2.includes("META"))
        isMeta = true;
      else
        restKeys.push(key2);
    });
    return joinKeys(isAlt ? "ALT" : "", isControl ? "CTRL" : "", isShift ? "SHIFT" : "", isMeta ? "META" : "", generateKeyCode(restKeys.join("")));
  }
  makeKeyString(e) {
    return joinKeys(e.altKey ? "ALT" : "", e.ctrlKey ? "CTRL" : "", e.shiftKey ? "SHIFT" : "", e.metaKey ? "META" : "", e.key.toUpperCase());
  }
  makeCodeString(e) {
    return joinKeys(e.altKey ? "ALT" : "", e.ctrlKey ? "CTRL" : "", e.shiftKey ? "SHIFT" : "", e.metaKey ? "META" : "", e.code.toUpperCase());
  }
  makeKeyCodeString(e) {
    return joinKeys(e.altKey ? "ALT" : "", e.ctrlKey ? "CTRL" : "", e.shiftKey ? "SHIFT" : "", e.metaKey ? "META" : "", e.keyCode);
  }
  checkShortCut(keyCodeString, keyString, codeString) {
    return this.commands[keyCodeString] || this.commands[keyString] || this.commands[codeString];
  }
  checkWhen(command) {
    return command.whenFunction();
  }
  execute(e, eventType = "keydown") {
    let commands = this.checkShortCut(this.makeKeyCodeString(e), this.makeKeyString(e), this.makeCodeString(e));
    if (commands) {
      const filteredCommands = commands.filter((it) => it.eventType === eventType).filter((it) => this.checkWhen(it));
      if (filteredCommands.length) {
        filteredCommands.forEach((it) => {
          this.$editor.context.commands.emit(it.command, ...it.args);
        });
      }
    }
  }
}
class StateManager {
  constructor(editor) {
    this.editor = editor;
  }
  get config() {
    return this.editor.context.config;
  }
  get zIndex() {
    return this.popupZIndex++;
  }
  get isPointerUp() {
    const e = this.config.get("bodyEvent");
    if (!e)
      return true;
    if (e.type === "pointerup")
      return true;
    else if (e.type === "pointermove" && e.buttons === 0)
      return true;
    return false;
  }
  get isPointerDown() {
    return !this.isPointerUp;
  }
  get isPointerMove() {
    if (!this.config.get("bodyEvent"))
      return false;
    return this.config.get("bodyEvent").type === "pointermove";
  }
}
class StorageManager {
  constructor(editor) {
    this.editor = editor;
    this.customAssetKey = "custom-assets";
  }
  async getCustomAssetList() {
    let isNew = false;
    const artboards = (this.editor.loadItem(this.customAssetKey) || []).map((it) => {
      if (!it.id) {
        it.id = uuid();
        isNew = true;
      }
      return it;
    });
    if (isNew) {
      await this.setCustomAssetList(artboards);
    }
    return artboards;
  }
  async setCustomAssetList(list) {
    this.editor.saveItem(this.customAssetKey, list);
  }
  async getCustomAsset(id) {
    const assetList = await this.getCustomAssetList();
    const it = assetList.find((it2) => it2.id === id);
    if (it && it.component) {
      return it.component;
    }
    return null;
  }
  async saveCustomAsset(datauri = "") {
    const current = this.editor.context.selection.current;
    if (current) {
      const assetList = await this.getCustomAssetList();
      const json = await this.editor.json.render(current);
      json.x = 0;
      json.y = 0;
      await this.setCustomAssetList([
        ...assetList,
        {
          id: uuid(),
          preview: datauri,
          component: json
        }
      ]);
    }
  }
  async removeCustomAsset(id) {
    const assetList = await this.getCustomAssetList();
    await this.setCustomAssetList(assetList.filter((it) => {
      return it.id !== id;
    }));
  }
}
function rectRect(rx1, ry1, rw1, rh1, rx2, ry2, rw2, rh2) {
  return rx1 + rw1 >= rx2 && rx1 <= rx2 + rw2 && ry1 + rh1 >= ry2 && ry1 <= ry2 + rh2;
}
class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get centerX() {
    return this.x + this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }
  get center() {
    return [this.centerX, this.centerY];
  }
  get topLeft() {
    return [this.left, this.top];
  }
  get topRight() {
    return [this.right, this.top];
  }
  get bottomLeft() {
    return [this.left, this.bottom];
  }
  get bottomRight() {
    return [this.right, this.bottom];
  }
  get vertices() {
    return [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight];
  }
  intersect(rect) {
    return intersectRectRect(this, rect);
  }
}
function intersectRectRect(rect1, rect2) {
  const minRectX = Math.min(rect1.x, rect2.x);
  const minRectY = Math.min(rect1.y, rect2.y);
  const rect1Verties = rectToVerties(rect1.x - minRectX, rect1.y - minRectY, rect1.width, rect1.height);
  const rect2Verties = rectToVerties(rect2.x - minRectX, rect2.y - minRectY, rect2.width, rect2.height);
  const startPoint = [
    Math.max(rect1Verties[0][0], rect2Verties[0][0]),
    Math.max(rect1Verties[0][1], rect2Verties[0][1]),
    Math.max(rect1Verties[0][2], rect2Verties[0][2])
  ];
  const endPoint = [
    Math.min(rect1Verties[2][0], rect2Verties[2][0]),
    Math.min(rect1Verties[2][1], rect2Verties[2][1]),
    Math.min(rect1Verties[2][2], rect2Verties[2][2])
  ];
  const minX = Math.min(startPoint[0], endPoint[0]);
  const minY = Math.min(startPoint[1], endPoint[1]);
  const maxX = Math.max(startPoint[0], endPoint[0]);
  const maxY = Math.max(startPoint[1], endPoint[1]);
  return new Rect(minX + minRectX, minY + minRectY, maxX - minX, maxY - minY);
}
function parseStyle(transformOrigin = "50% 50% 0px") {
  const origins = transformOrigin.trim().split(" ").filter((it) => it.trim());
  let parsedTransformOrigin = null;
  if (origins.length === 1) {
    parsedTransformOrigin = [origins[0], origins[0]].map((it) => Length.parse(it));
  } else {
    parsedTransformOrigin = origins.map((it) => Length.parse(it));
  }
  return parsedTransformOrigin;
}
function transformScale(transformOrigin, width, height) {
  let parsedTransformOrigin = parseStyle(transformOrigin);
  if (width === 0 && height === 0) {
    return [0, 0, 0];
  }
  const originX = parsedTransformOrigin[0].toPx(width).value;
  const originY = parsedTransformOrigin[1].toPx(height).value;
  const originZ = parsedTransformOrigin[2].value;
  return [originX, originY, originZ];
}
function rectToVerties(x, y, width, height, origin = "50% 50% 0px") {
  const center = transformScale(origin, width, height);
  return [
    [x, y, 0],
    [x + width, y, 0],
    [x + width, y + height, 0],
    [x, y + height, 0],
    [x + center[0], y + center[1], 0]
  ];
}
function rectToVertiesForArea(x, y, width, height) {
  return rectToVerties(x, y, width, height);
}
function vertiesToRectangle(verties) {
  const x = verties[0][0];
  const y = verties[0][1];
  const width = dist(verties[0], verties[1]);
  const height = dist(verties[0], verties[3]);
  return new Rect(x, y, width, height);
}
class ViewportManager {
  constructor(editor) {
    this.editor = editor;
    this.context = this.editor.context;
    this.canvasSize = null;
    this.cachedViewport = rectToVerties(0, 0, 0, 0);
    this.mouse = create$1();
    this.scaleMax = 1e5;
    this.scale = 1;
    this.translate = create$1();
    this.transformOrigin = create$1();
    this.maxScale = 25;
    this.minScale = 0.02;
    this.zoomFactor = 1;
    this.resetWorldMatrix();
  }
  setTransformOrigin(originVec) {
    this.transformOrigin = originVec;
    this.resetWorldMatrix();
  }
  setTransformOriginWithTranslate(newOrigin) {
    const oldOrigin = clone(this.transformOrigin);
    this.setTransformOrigin(newOrigin);
    this.setTranslate(add([], this.translate, subtract([], oldOrigin, newOrigin)));
  }
  setScale(scale) {
    this.scale = Math.min(Math.max(this.minScale, scale), this.maxScale);
    this.scaleMax = this.scale * 1e5;
    this.resetWorldMatrix();
  }
  setTranslate(translate) {
    this.translate = translate;
    this.resetWorldMatrix();
  }
  resetWorldMatrix() {
    this.translate = this.translate.map((it) => +it.toFixed(4));
    this.transformOrigin = this.transformOrigin.map((it) => +it.toFixed(4));
    this.scale = +this.scale.toFixed(4);
    this.matrix = calculateMatrix(fromTranslation([], this.translate), fromTranslation([], this.transformOrigin), fromScaling([], [this.scale, this.scale, 1]), fromTranslation([], negate([], this.transformOrigin)));
    this.matrixInverse = invert([], this.matrix);
    this.scaleMatrix = calculateMatrix(fromScaling([], [this.scale, this.scale, 1]));
    this.scaleMatrixInverse = invert([], this.scaleMatrix);
    this.refresh();
  }
  refreshCanvasSize(rect) {
    if (this.canvasSize) {
      this.canvasSize = rect;
      this.cachedViewport = rectToVerties(0, 0, this.canvasSize.width, this.canvasSize.height);
      const newVerties = transformMat4([], [this.canvasSize.width, this.canvasSize.height, 0], this.scaleMatrixInverse);
      const newTransformOrigin = add([], this.verties[0], [
        newVerties[0] / 2,
        newVerties[1] / 2,
        0
      ]);
      const newTranslate = getTranslation([], calculateMatrix(this.matrix, calculateMatrixInverse(fromTranslation([], newTransformOrigin), this.scaleMatrix, invert([], fromTranslation([], newTransformOrigin)))));
      this.setTranslate(newTranslate);
      this.setTransformOrigin(newTransformOrigin);
    } else {
      this.canvasSize = rect;
      this.cachedViewport = rectToVerties(0, 0, this.canvasSize.width, this.canvasSize.height);
      this.setTransformOrigin([
        this.canvasSize.width / 2,
        this.canvasSize.height / 2,
        0
      ]);
    }
    this.editor.emit(UPDATE_VIEWPORT);
  }
  refresh() {
    if (this.cachedViewport) {
      this.verties = vertiesMap(this.cachedViewport, this.matrixInverse);
      this.originVerties = this.verties.filter((_, index2) => index2 < 4);
      this.originRect = vertiesToRectangle(this.originVerties);
    }
  }
  getWorldPosition(e) {
    e = e || this.context.config.get("bodyEvent");
    if (!e) {
      return this.createWorldPosition(0, 0);
    }
    return this.createWorldPosition(e.clientX, e.clientY);
  }
  createWorldPosition(x, y) {
    if (!this.canvasSize) {
      return create$1();
    }
    const origin = {
      x: x - this.canvasSize.x,
      y: y - this.canvasSize.y
    };
    const mouseX = this.verties[0][0] + (this.verties[2][0] - this.verties[0][0]) * (origin.x / this.canvasSize.width);
    const mouseY = this.verties[0][1] + (this.verties[2][1] - this.verties[0][1]) * (origin.y / this.canvasSize.height);
    return [mouseX, mouseY, 0];
  }
  setMousePoint(x, y) {
    this.mouse = this.createWorldPosition(x, y);
    this.setTransformOriginWithTranslate(lerp([], this.verties[0], this.verties[2], 0.5));
    this.editor.emit(UPDATE_VIEWPORT);
  }
  zoom(zoomFactor) {
    const oldScale = this.scale;
    const newScale = oldScale * zoomFactor;
    this.setScale(newScale);
    const newZoomFactor = this.scale / oldScale;
    this.zoomFactor = newZoomFactor;
    if (newZoomFactor !== 1) {
      this.setTransformOriginWithTranslate(lerp([], this.mouse, this.transformOrigin, 1 / zoomFactor));
      this.editor.emit(UPDATE_VIEWPORT);
    }
  }
  pan(x, y, z = 0) {
    this.setTransformOriginWithTranslate(add([], this.transformOrigin, [x, y, 0]));
    this.editor.emit(UPDATE_VIEWPORT);
  }
  moveToCenter(areaVerties, scaleRate = -0.2, withScale = true) {
    if (!this.canvasSize)
      return;
    const areaCenter = lerp([], areaVerties[0], areaVerties[2], 0.5);
    const width = dist(areaVerties[0], areaVerties[1]);
    const height = dist(areaVerties[0], areaVerties[3]);
    const viewportCenter = lerp([], this.verties[0], this.verties[2], 0.5);
    const viewportWidth = dist(this.verties[0], this.verties[1]);
    const viewportHeight = dist(this.verties[0], this.verties[3]);
    const minRate = withScale ? Math.min(viewportWidth / width, viewportHeight / height) + scaleRate : 1;
    this.setTranslate(add([], this.translate, subtract([], viewportCenter, areaCenter)));
    this.setTransformOrigin(areaCenter);
    this.setScale(this.scale * minRate);
    this.editor.emit(UPDATE_VIEWPORT);
  }
  get pos() {
    const mouseX = (this.mouse[0] - this.verties[0][0]) / (this.verties[2][0] - this.verties[0][0]) * 100;
    const mouseY = (this.mouse[1] - this.verties[0][1]) / (this.verties[2][1] - this.verties[0][1]) * 100;
    return [mouseX, mouseY, 0];
  }
  get minX() {
    return this.verties[0][0];
  }
  get maxX() {
    return this.verties[2][0];
  }
  get minY() {
    return this.verties[0][1];
  }
  get maxY() {
    return this.verties[2][1];
  }
  get center() {
    return this.verties[4];
  }
  get height() {
    return this.maxY - this.minY;
  }
  get width() {
    return this.maxX - this.minX;
  }
  get pixelSize() {
    return Math.round(this.width / this.canvasSize.width);
  }
  checkInViewport(pointVertex) {
    const xInViewport = this.minX < pointVertex[0] && pointVertex[0] < this.maxX;
    const yInViewport = this.minY < pointVertex[1] && pointVertex[1] < this.maxY;
    return xInViewport && yInViewport;
  }
  checkInViewportArea(verties = []) {
    const source = vertiesToRectangle(verties);
    const target = this.originRect;
    return rectRect(source.x, source.y, source.width, source.height, target.x, target.y, target.width, target.height);
  }
  applyVertex(vertex) {
    return transformMat4([], vertex, this.matrix);
  }
  applyVertexInverse(vertex) {
    return transformMat4([], vertex, this.matrixInverse);
  }
  applyScaleVertex(vertex) {
    return transformMat4([], vertex, this.scaleMatrix);
  }
  applyScaleVertexInverse(vertex) {
    return transformMat4([], vertex, this.scaleMatrixInverse);
  }
  applyVerties(verties) {
    return vertiesMap(verties, this.matrix);
  }
  applyScaleVerties(verties) {
    return vertiesMap(verties, this.scaleMatrix);
  }
  applyVertiesInverse(verties) {
    return vertiesMap(verties, this.matrixInverse);
  }
  applyScaleVertiesInverse(verties) {
    return vertiesMap(verties, this.scaleMatrixInverse);
  }
  createAreaVerties(x, y, width, height) {
    return this.applyVertiesInverse(rectToVertiesForArea(x, y, width, height));
  }
  zoomIn(zoomFactor = 0.01) {
    this.setScale(this.scale + zoomFactor);
    this.editor.emit(UPDATE_VIEWPORT);
  }
  zoomOut(zoomFactor = 0.01) {
    this.zoomIn(-zoomFactor);
  }
  zoomDefault() {
    this.setScale(1);
    this.editor.emit(UPDATE_VIEWPORT);
  }
}
var dark = {
  left_size: 250,
  left_max_size: 400,
  bottom_size: 150,
  bottom_max_size: 500,
  timeline_grid_font_color: "#ececec",
  timeline_line_color: "red",
  timeline_timeview_bottom_color: "black"
};
var light = {
  left_size: 250,
  left_max_size: 400,
  bottom_size: 150,
  bottom_max_size: 500,
  timeline_grid_font_color: "black",
  timeline_line_color: "#4778d4",
  timeline_timeview_bottom_color: "#ececec"
};
var theme = {
  dark,
  light
};
class Editor {
  constructor(opt = {}) {
    this.EDITOR_ID = uuid();
    this.projects = [];
    this.popupZIndex = 1e4;
    this.symbols = {};
    this.images = {};
    this.openRightPanel = true;
    this.ignoreManagers = opt.ignoreManagers || [];
    this.context = {};
    this.loadManagers();
  }
  loadManagers() {
    this.registerManager({
      store: BaseStore,
      config: ConfigManager,
      commands: CommandManager,
      keyboardManager: KeyBoardManager,
      viewport: ViewportManager,
      storageManager: StorageManager,
      modeViewManager: ModeViewManager,
      cursorManager: CursorManager,
      assetManager: AssetManager,
      injectManager: InjectManager,
      components: ComponentManager,
      pluginManager: PluginManager,
      renderers: RendererManager,
      i18n: I18nManager,
      icon: IconManager,
      stateManager: StateManager,
      menuManager: MenuManager
    });
    if (this.ignoreManagers.includes("ShortCutManager") === false) {
      this.registerManager({
        shortcuts: ShortCutManager
      });
    }
    this.loadCommands(obj);
    this.initPlugins();
    this.initStorage();
  }
  registerManager(obj2 = {}) {
    Object.keys(obj2).forEach((name) => {
      const DataManagerClass = obj2[name];
      Object.defineProperty(this.context, name, {
        value: new DataManagerClass(this),
        writable: false
      });
    });
  }
  initStorage() {
    this.locale = this.loadItem("locale") || "en_US";
    this.layout = this.loadItem("layout") || "all";
  }
  getI18nMessage(key, params = {}, locale) {
    return this.context.i18n.get(key, params, locale || this.locale);
  }
  $i18n(key, params = {}, locale) {
    return this.getI18nMessage(key, params, locale);
  }
  hasI18nkey(key, locale) {
    return this.context.i18n.hasKey(key, locale || this.locale);
  }
  initI18nMessage(root = "") {
    return (key, params = {}, locale) => {
      const i18nKey = `${root}.${key}`;
      if (this.hasI18nkey(i18nKey, locale)) {
        return this.context.i18(`${root}.${key}`, params, locale);
      } else {
        return this.context.i18(`${key}`, params, locale);
      }
    };
  }
  setLocale(locale = "en_US") {
    this.locale = locale;
    this.saveItem("locale", this.locale);
  }
  setUser(user) {
    this.user = user;
  }
  async initPlugins(options = {}) {
    await this.context.pluginManager.initializePlugin(options);
  }
  themeValue(key, defaultValue = "") {
    return theme[this.context.config.get("editor.theme")][key] || defaultValue;
  }
  get zIndex() {
    return this.popupZIndex++;
  }
  getFile(url) {
    return this.images[url] || url;
  }
  setStore(store) {
    this.store = store;
  }
  emit(...args) {
    this.context.store.source = this.EDITOR_ID;
    this.context.store.emit(...args);
  }
  on(...args) {
    const [name, callback, context, ...rest] = args;
    return this.context.store.on(name, callback, context || this, ...rest);
  }
  off(...args) {
    this.context.store.off(...args);
  }
  offAll(...args) {
    this.context.store.offAll(...args);
  }
  debug() {
  }
  command(command, message, ...args) {
    console.warn("command", command, message, args);
    if (this.context.stateManager.isPointerUp) {
      return this.context.store.emit(`history.${command}`, message, ...args);
    } else {
      return this.context.store.emit(command, ...args);
    }
  }
  nextTick(callback, delay = 0) {
    if (this.context.store) {
      window.setTimeout(() => {
        this.context.store.nextTick(callback);
      }, delay);
    }
  }
  get(idOrModel) {
    return this.context.modelManager.get((idOrModel == null ? void 0 : idOrModel.id) || idOrModel);
  }
  replaceLocalUrltoRealUrl(str) {
    var project = this.context.selection.currentProject;
    var images = {};
    project.images.forEach((a) => {
      if (str.indexOf(a.local) > -1) {
        images[a.local] = a.original;
      }
    });
    Object.keys(images).forEach((local) => {
      if (str.indexOf(local) > -1) {
        str = str.replace(new RegExp(local, "g"), images[local]);
      }
    });
    return str;
  }
  get storeKey() {
    return `__els__.${this.context.config.get("store.key")}`;
  }
  saveItem(key, value) {
    window.localStorage.setItem(`${this.storeKey}.${key}`, JSON.stringify(value));
  }
  loadItem(key) {
    return JSON.parse(window.localStorage.getItem(`${this.storeKey}.${key}`) || JSON.stringify(""));
  }
  createCommandMaker() {
    return new CommandMaker(this);
  }
  registerElement(obj2) {
    registElement(obj2);
  }
  registerAlias(obj2) {
    Object.entries(obj2).forEach(([key, value]) => {
      registAlias(key, value);
    });
  }
  registerUI(target, obj2 = {}, order = 1) {
    this.context.injectManager.registerUI(target, obj2, order);
    this.registerElement(obj2);
  }
  isComponentClass(name) {
    return this.context.components.isComponentClass(name);
  }
  registerComponent(name, component2) {
    this.context.components.registerComponent(name, component2);
  }
  registerItem(name, item) {
    this.registerComponent(name, item);
  }
  registerInspector(name, inspectorCallback) {
    this.context.components.registerInspector(name, inspectorCallback);
  }
  registerRenderer(rendererType, name, rendererInstance) {
    this.context.renderers.registerRenderer(rendererType, name, rendererInstance);
  }
  registerRendererType(rendererType, rendererTypeInstance) {
    this.context.renderers.registerRendererType(rendererType, rendererTypeInstance);
  }
  getRendererInstance(rendererType, itemType) {
    return this.context.renderers.getRendererInstance(rendererType, itemType);
  }
  renderer(rendererType) {
    return this.context.renderers.getRenderer(rendererType);
  }
  get json() {
    return this.renderer("json");
  }
  loadCommands(userCommands) {
    return this.context.commands.loadCommands(userCommands);
  }
  registerCommand(commandObject) {
    return this.context.commands.registerCommand(commandObject);
  }
  registerShortCut(shortcut) {
    this.context.shortcuts.registerShortCut(shortcut);
  }
  registerPlugin(createPluginFunction) {
    this.context.pluginManager.registerPlugin(createPluginFunction);
  }
  registerPluginList(plugins = []) {
    plugins.forEach((p) => this.registerPlugin(p));
  }
  registerConfig(config) {
    this.context.config.registerConfig(config);
  }
  registerI18nMessage(locale, messages) {
    this.context.i18n.registerI18nMessage(locale, messages);
  }
  registerI18nMessageWithLocale(messages) {
    Object.entries(messages).forEach(([locale, messages2]) => {
      this.registerI18nMessage(locale, messages2);
    });
  }
  registerIcon(itemType, iconOrFunction) {
    this.context.icon.registerIcon(itemType, iconOrFunction);
  }
  registerIconList(obj2 = {}) {
    this.context.icon.registerIconList(obj2);
  }
  registerMenu(target, menu) {
    this.context.menuManager.registerMenu(target, menu);
  }
}
const EMPTY_POS = { x: 0, y: 0 };
const DEFAULT_POS = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER };
const MOVE_CHECK_MS = 0;
class BaseLayout extends EditorElement {
  async created() {
    this.$editor.registerManager(this.getManagers());
    this.$editor.registerPluginList(this.getPlugins());
    if (Array.isArray(this.opt.plugins)) {
      this.$editor.registerPluginList(this.opt.plugins);
    }
    await this.$editor.initPlugins();
    this.$config.load();
    if (isObject(this.opt.config)) {
      this.$config.setAll(this.opt.config || {});
    }
    this._isPluginLoaded = true;
  }
  get isPreLoaded() {
    return Boolean(this._isPluginLoaded);
  }
  get $editor() {
    if (!this.__editorInstance) {
      this.__editorInstance = this.createEditorInstance();
    }
    return this.__editorInstance;
  }
  createEditorInstance() {
    return new Editor();
  }
  afterRender() {
    super.afterRender();
    this.$el.attr("data-theme", this.$config.get("editor.theme"));
    this.$el.addClass(window.navigator.userAgent.includes("Windows") ? "ua-window" : "ua-default");
    this.trigger("initialize");
  }
  initialize() {
    super.initialize();
    this.__initBodyMoves();
  }
  [CONFIG("editor.theme")]() {
    this.$el.attr("data-theme", this.$config.get("editor.theme"));
  }
  getPlugins() {
    return [];
  }
  getManagers() {
    return {};
  }
  __initBodyMoves() {
    this.__firstMove = /* @__PURE__ */ new Set();
    this.__moves = /* @__PURE__ */ new Set();
    this.__ends = /* @__PURE__ */ new Set();
    this.__modifyBodyMoveSecond(MOVE_CHECK_MS);
  }
  __modifyBodyMoveSecond(ms = MOVE_CHECK_MS) {
    this.$config.set("body.move.ms", ms);
    const callback = ms === 0 ? this.__loopBodyMoves.bind(this) : debounce(this.__loopBodyMoves.bind(this), this.$config.get("body.move.ms"));
    this.__funcBodyMoves = callback;
  }
  __loopBodyMoves() {
    var pos = this.pos;
    var e = this.$config.get("bodyEvent");
    var lastPos = this.lastPos || DEFAULT_POS;
    var isNotEqualLastPos = !(lastPos.x === pos.x && lastPos.y === pos.y);
    if (isNotEqualLastPos && this.__firstMove.size) {
      let i = 0;
      this.__firstMove.forEach((v) => {
        const dist2 = getDist(pos.x, pos.y, v.xy.x, v.xy.y);
        if (Math.abs(dist2) > 0) {
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
        const dist2 = getDist(pos.x, pos.y, v.xy.x, v.xy.y);
        if (Math.abs(dist2) > 0.5) {
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
    var e = this.$config.get("bodyEvent");
    if (pos) {
      this.__ends.forEach((v) => {
        v.func.call(v.context, pos.x - v.xy.x, pos.y - v.xy.y, "end", e.pressure);
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
    this.$config.init("bodyEvent", e);
    this.pos = newPos;
  }
  [POINTERMOVE()](e) {
    var newPos = e.xy || EMPTY_POS;
    this.$config.init("bodyEvent", e);
    this.$commands.emit("change.bodyEvent");
    this.pos = newPos;
    if (!this.__requestId) {
      this.__requestId = window.requestAnimationFrame(this.__funcBodyMoves);
    }
  }
  [POINTEREND()](e) {
    this.$config.set("bodyEvent", e);
    this.__removeBodyMoves();
    window.cancelAnimationFrame(this.__requestId);
    this.__requestId = null;
  }
  [RESIZE("window") + DEBOUNCE(100)]() {
    this.emit(RESIZE_WINDOW);
  }
  [SUBSCRIBE("refreshAll")]() {
    this.emit("refreshProjectList");
    this.$commands.emit("refreshArtboard");
  }
  [SUBSCRIBE("changed.locale")]() {
    this.refresh();
  }
}
var body_move_ms = {
  key: "body.move.ms",
  defaultValue: 30,
  title: "pointer move delay millisecond",
  description: "Set delay millisecond to moving pointer in body  ",
  type: "number"
};
var __glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": body_move_ms
}, Symbol.toStringTag, { value: "Module" }));
var debug_mode = {
  key: "debug.mode",
  defaultValue: false,
  title: "debug mode",
  description: "Set debug mode to on ",
  type: "boolean"
};
var __glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": debug_mode
}, Symbol.toStringTag, { value: "Module" }));
var editor_cursor = {
  key: "editor.cursor",
  defaultValue: "auto",
  title: "Editor Cursor ",
  description: "Set editor's cursor",
  type: "string"
};
var __glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": editor_cursor
}, Symbol.toStringTag, { value: "Module" }));
var editor_theme = {
  key: "editor.theme",
  defaultValue: "light",
  title: "Editor Theme ",
  description: "Set editor's theme",
  type: "string"
};
var __glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": editor_theme
}, Symbol.toStringTag, { value: "Module" }));
var event_doubleclick_timing = {
  key: "event.doubleclick.timing",
  defaultValue: 500,
  title: "doubleclick timing",
  description: "whether doubleclick timing is in some seconds",
  type: "number"
};
var __glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": event_doubleclick_timing
}, Symbol.toStringTag, { value: "Module" }));
var language_locale = {
  key: "language.locale",
  defaultValue: Language.EN,
  title: "set locale for editor",
  description: "set locale for editor",
  type: "string"
};
var __glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": language_locale
}, Symbol.toStringTag, { value: "Module" }));
var show_left_panel = {
  key: "show.left.panel",
  defaultValue: true,
  title: "Show left panel",
  description: "Set left panel visibility to on",
  type: "boolean"
};
var __glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": show_left_panel
}, Symbol.toStringTag, { value: "Module" }));
var show_right_panel = {
  key: "show.right.panel",
  defaultValue: true,
  title: "Show right panel",
  description: "Set right panel visibility to on",
  type: "boolean"
};
var __glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": show_right_panel
}, Symbol.toStringTag, { value: "Module" }));
var store_key = {
  key: "store.key",
  defaultValue: "easylogic.studio",
  title: "Store Key",
  description: "Set localStorage key",
  type: "string"
};
var __glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": store_key
}, Symbol.toStringTag, { value: "Module" }));
var style_canvas_background_color = {
  key: "style.canvas.background.color",
  defaultValue: "#ececec",
  title: "Canvas Background Color",
  description: "Set canvas background color",
  type: "color"
};
var __glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": style_canvas_background_color
}, Symbol.toStringTag, { value: "Module" }));
const modules = { "./config_list/body.move.ms.js": __glob_0_0, "./config_list/debug.mode.js": __glob_0_1, "./config_list/editor.cursor.js": __glob_0_2, "./config_list/editor.theme.js": __glob_0_3, "./config_list/event.doubleclick.timing.js": __glob_0_4, "./config_list/language.locale.js": __glob_0_5, "./config_list/show.left.panel.js": __glob_0_6, "./config_list/show.right.panel.js": __glob_0_7, "./config_list/store.key.js": __glob_0_8, "./config_list/style.canvas.background.color.js": __glob_0_9 };
var configs$1 = Object.values(modules).map((it) => it.default);
function configs(editor) {
  configs$1.forEach((config) => {
    editor.registerConfig(config);
  });
}
function baseEditor(editor) {
  editor.registerElement({
    Button,
    ToggleButton,
    ToggleCheckBox
  });
  editor.registerAlias({
    "toggle-checkbox": "ToggleCheckBox",
    "toggle-button": "ToggleButton",
    button: "Button"
  });
}
var en_US = {
  "app.title": "elf",
  "app.sample": (a, b, c) => {
    return `${a}-${b}-${c}`;
  },
  "app.lang.en_US": "English",
  "app.lang.ko_KR": "\uD55C\uAD6D\uC5B4",
  "app.lang.fr_FR": "Fran\xE7ais",
  "app.label.lang": "Language",
  "app.layout.all": "Layout",
  "app.layout.css": "CSS Mode",
  "app.layout.svg": "SVG Mode",
  "app.label.layout": "Menu Layout",
  "app.theme.dark": "Dark",
  "app.theme.light": "Light",
  "app.theme.toon": "Toon",
  "app.theme.gray": "Gray",
  "app.label.theme": "Theme",
  "app.tab.title.projects": "Projects",
  "app.tab.title.layers": "Layers",
  "app.tab.title.libraries": "Library",
  "app.tab.title.components": "Component",
  "app.tab.title.artboards": "Artboard",
  "app.tab.title.assets": "Assets",
  "app.tab.title.keyMap": "KeyMap",
  "app.confirm.message.artboard.items.removeArtboard": "Do you remove an artboard preview really?",
  "app.confirm.message.custom-component.items.removeCustomComponent": "Do you remove a custom component preview really?",
  "menu.item.download.title": "Source",
  "menu.item.save.title": "Save",
  "menu.item.export.title": "Export",
  "menu.item.codepen.title": "CodePen",
  "menu.item.fullscreen.title": "Full Screen",
  "menu.item.shortcuts.title": "ShortCuts",
  "menu.item.github.title": "Github",
  "menu.item.learn.title": "Learn",
  "menu.item.projects.title": "Projects",
  "menu.item.language.title": "Language",
  "project.property.title": "Project",
  "project.information.property.title": "Project information",
  "project.information.property.name": "Name",
  "project.information.property.description": "Description",
  "artboard.property.title": "ArtBoards",
  "artboard.property.layout.title.flex": "Flex",
  "artboard.property.layout.title.grid": "Grid",
  "layer.tree.property.title": "Layers",
  "layer.tree.property.layout.title.flex": "Flex",
  "layer.tree.property.layout.title.grid": "Grid",
  "alignment.property.title": "Alignment",
  "position.property.title": "Position",
  "position.property.X": "X",
  "position.property.Y": "Y",
  "size.property.title": "Size",
  "position.property.width": "W",
  "position.property.height": "H",
  "position.property.opacity": "Opacity",
  "position.property.rotate": "Rotate",
  "background.color.property.title": "Appearance",
  "background.color.property.color": "Color",
  "background.color.property.zindex": "z-index",
  "background.color.property.blend": "Blend",
  "background.color.property.overflow": "Overflow",
  "background.color.property.overflow.visible": "Visible",
  "background.color.property.overflow.hidden": "Hidden",
  "background.color.property.overflow.scroll": "Scroll",
  "background.color.property.overflow.auto": "Auto",
  "blend.normal": "normal",
  "blend.multiply": "multiply",
  "blend.screen": "screen",
  "blend.overlay": "overlay",
  "blend.darken": "darken",
  "blend.lighten": "lighten",
  "blend.color-dodge": "color-dodge",
  "blend.color-burn": "color-burn",
  "blend.hard-light": "hard-light",
  "blend.soft-light": "soft-light",
  "blend.difference": "difference",
  "blend.exclusion": "exclusion",
  "blend.hue": "hue",
  "blend.saturation": "saturation",
  "blend.color": "color",
  "blend.luminosity": "luminosity",
  "background.image.property.title": "Fill",
  "border.property.title": "Border",
  "border.radius.property.title": "Border Radius",
  "boxshadow.property.title": "Box Shadows",
  "filter.property.title": "Filter",
  "filter.property.blur": "Blur",
  "filter.property.grayscale": "GrayScale",
  "filter.property.hue-rotate": "Hue Rotate",
  "filter.property.invert": "Invert",
  "filter.property.brightness": "Brightness",
  "filter.property.contrast": "Contrast",
  "filter.property.drop-shadow": "Drop Shadow",
  "filter.property.drop-shadow.color": "Color",
  "filter.property.drop-shadow.offsetX": "Offset X",
  "filter.property.drop-shadow.offsetY": "Offset Y",
  "filter.property.drop-shadow.blurRadius": "Blur",
  "filter.property.opacity": "Opacity",
  "filter.property.saturate": "Saturate",
  "filter.property.sepia": "Sepia",
  "filter.property.svg": "SVG",
  "font.property.title": "Font",
  "font.property.color": "Color",
  "font.property.size": "Size",
  "font.property.stretch": "Stretch",
  "font.property.weight": "Weight",
  "font.property.style": "Style",
  "font.property.family": "Family",
  "font.spacing.property.title": "Font spacing",
  "font.spacing.property.lineHeight": "Line height",
  "font.spacing.property.letterSpacing": "Letter spacing",
  "font.spacing.property.wordSpacing": "Word spacing",
  "font.spacing.property.indent": "Indent",
  "backdrop.filter.property.title": "Backdrop Filter",
  "clippath.property.title": "Clip Path",
  "export.property.title": "Export",
  "export.property.download": "Download",
  "iframe.property.title": "IFrame",
  "image.property.title": "Image",
  "image.property.origin": "Origin",
  "image.property.size": "Size",
  "image.property.width": "Width",
  "image.property.height": "height",
  "video.property.title": "Video",
  "video.property.play": "Play",
  "video.property.pause": "Pause",
  "video.property.volume": "Volume",
  "video.property.playbackRate": "Playback Rate",
  "video.property.currentTime": "Current Time",
  "video.property.playTime": "Play Time Distance",
  "motion.property.title": "Motion",
  "text.property.title": "Text Style",
  "text.property.align": "Align",
  "text.property.transform": "Transform",
  "text.property.decoration": "Decoration",
  "text.clip.property.title": "Text Clip",
  "text.shadow.property.title": "Text Shadows",
  "text.fill.property.title": "Text Fill",
  "text.fill.property.fill": "Fill",
  "text.fill.property.stroke": "Stroke",
  "text.fill.property.strokeWidth": "Width",
  "transform.property.title": "Transform",
  "transform.origin.property.title": "Transform Origin",
  "transition.property.title": "CSS Transition",
  "keyframe.property.title": "CSS Keyframe",
  "selector.property.title": "Selector",
  "selector.property.none": "None selector",
  "path.data.property.title": "Path Information",
  "polygon.data.property.title": "Polygon Information",
  "perspective.property.title": "Perspective",
  "perspective.origin.property.title": "Perspective Origin",
  "svg.item.property.title": "Appearance",
  "svg.item.property.isMotionPath": "Motion Path",
  "svg.item.property.fill": "Fill",
  "svg.item.property.fillOpacity": "Opacity",
  "svg.item.property.path": "Path",
  "svg.item.property.polygon": "Polygon",
  "svg.item.property.totalLength": "Total Length",
  "svg.item.property.fillRule": "Fill Rule",
  "svg.item.property.stroke": "Stroke",
  "svg.item.property.strokeWidth": "Width",
  "svg.item.property.dashArray": "Dash Array",
  "svg.item.property.dashOffset": "Dash Offset",
  "svg.item.property.lineCap": "Line Cap",
  "svg.item.property.lineJoin": "Line Join",
  "svg.item.property.filter": "Filter",
  "svg.item.property.blend": "Blend Mode",
  "border.editor.all": "All",
  "border.editor.width": "Width",
  "border.editor.style": "Style",
  "border.editor.color": "C",
  "border.editor.top": "Top",
  "border.editor.left": "Left",
  "border.editor.right": "Right",
  "border.editor.bottom": "Bottom",
  "border.radius.editor.topLeft": "Top Left",
  "border.radius.editor.topRight": "Top Right",
  "border.radius.editor.bottomLeft": "Bottom Left",
  "border.radius.editor.bottomRight": "Bottom Right",
  "boxshadow.editor.blur": "Blur",
  "boxshadow.editor.spread": "Spread",
  "css.property.editor.properties": "Properties",
  "offset.path.list.editor.path": "Path",
  "offset.path.list.editor.totalLength": "Total Length",
  "offset.path.list.editor.distance": "Distance",
  "offset.path.list.editor.direction": "Direction",
  "offset.path.list.editor.rotate": "Rotate",
  "svgfilter.select.editor.message.create": "Create new svg filter",
  "svgfilter.select.editor.message.select": "Select a filter",
  "fill.editor.message.click.image": "Click the preview area if you want to select a image",
  "fill.editor.message.drag.position": "Drag if you want to move center position",
  "fill.editor.x1": "Start X",
  "fill.editor.x2": "End X",
  "fill.editor.y1": "Start Y",
  "fill.editor.y2": "End Y",
  "fill.editor.spread": "Spread",
  "fill.editor.offset": "Offset",
  "fill.editor.cx": "Center X",
  "fill.editor.cy": "Center Y",
  "fill.editor.r": "End radius",
  "fill.editor.fx": "Start X",
  "fill.editor.fy": "Start Y",
  "fill.editor.fr": "Start radius",
  "perspective.origin.editor.originX": "Origin X",
  "perspective.origin.editor.originY": "Origin Y",
  "path.manager.msg": "Keydown ESC or Enter key to close editing",
  "path.manager.mode.done": "Done",
  "path.manager.mode.modify": "Modify",
  "path.manager.mode.path": "Path",
  "path.manager.mode.warp": "Warp",
  "path.manager.mode.transform": "Transform",
  "path.manager.mode.reverse": "Reverse",
  "path.manager.mode.flipX": "Flip X",
  "path.manager.mode.flipY": "Flip Y",
  "path.manager.mode.flipOrigin": "Flip Origin",
  "colorpicker.popup.title": "ColorPicker",
  "selector.popup.title": "Selector Property",
  "selector.popup.selector": "Selector",
  "background.image.position.popup.title": "Background Pattern",
  "background.image.position.popup.size": "Size",
  "background.image.position.popup.width": "Width",
  "background.image.position.popup.height": "Height",
  "background.image.position.popup.repeat": "Repeat",
  "background.image.position.popup.blend": "Blend",
  "background.image.position.popup.type.repeat": "repeat",
  "background.image.position.popup.type.no-repeat": "no repeat",
  "background.image.position.popup.type.repeat-x": "repeat-x",
  "background.image.position.popup.type.repeat-y": "repeat-y",
  "background.image.position.popup.type.space": "space",
  "background.image.position.popup.type.round": "round",
  "gradient.picker.popup.title": "Gradient & Image Picker",
  "gradient.picker.popup.static-gradient": "Static",
  "gradient.picker.popup.linear-gradient": "Linear",
  "gradient.picker.popup.repeating-linear-gradient": "Repeating Linear",
  "gradient.picker.popup.radial-gradient": "Radial",
  "gradient.picker.popup.repeating-radial-gradient": "Repeating Radial",
  "gradient.picker.popup.conic-gradient": "Linear",
  "gradient.picker.popup.repeating-conic-gradient": "Repeating Conic",
  "image.asset.property.title": "Image",
  "video.asset.property.title": "Video",
  "color.asset.property.title": "Color",
  "gradient.asset.property.title": "Gradient",
  "pattern.asset.property.title": "Pattern",
  "svgfilter.asset.property.title": "SVG Filter",
  "inspector.tab.title.design": "Design",
  "inspector.tab.title.component": "Component",
  "inspector.tab.title.transition": "Animation",
  "inspector.tab.title.asset": "Assets",
  "inspector.tab.title.text": "Text",
  "inspector.tab.title.code": "Code",
  "inspector.tab.title.history": "History",
  "timeline.property.title": "Timeline",
  "timeline.property.resize": "Drag if you want to resize timeline height.",
  "timeline.animation.property.title": "Animations",
  "timeline.play.control.play": "Play",
  "timeline.play.control.pause": "Pause",
  "timeline.play.control.first": "First",
  "timeline.play.control.prev": "Previous",
  "timeline.play.control.next": "Next",
  "timeline.play.control.last": "Last",
  "timeline.play.control.direction": "Direction",
  "timeline.play.control.speed": "Speed",
  "timeline.play.control.repeat": "Repeat",
  "timeline.play.control.infinite": "Infinite",
  "timeline.play.control.normal": "normal",
  "timeline.play.control.alternate": "alternate",
  "timeline.play.control.reverse": "reverse",
  "timeline.play.control.alternate.reverse": "alternate reverse",
  "timeline.value.editor.value": "Value",
  "timeline.value.editor.time": "Time",
  "timeline.value.editor.timing": "Timing",
  "timeline.value.editor.offset.message": "Please input enter key to change time offset.",
  "svgfilter.popup.title": "SVG Filter",
  "css.item.rotate": "Rotate",
  "css.item.rotateX": "Rotate X",
  "css.item.rotateY": "Rotate Y",
  "css.item.rotateZ": "Rotate Z",
  "css.item.rotate3d": "3D Rotate",
  "css.item.skewX": "Skew X",
  "css.item.skewY": "Skew Y",
  "css.item.translate": "Translate",
  "css.item.translateX": "Translate X",
  "css.item.translateY": "Translate Y",
  "css.item.translateZ": "Translate Z",
  "css.item.translate3d": "3D Translate",
  "css.item.perspective": "Perspective",
  "css.item.scale": "Scale",
  "css.item.scaleX": "Scale X",
  "css.item.scaleY": "Scale Y",
  "css.item.scaleZ": "Scale Z",
  "css.item.scale3d": "3D Scale",
  "css.item.matrix": "Matrix",
  "css.item.matrix3d": "3D Matrix",
  "animation.property.title": "CSS Animation",
  "animation.property.direction": "Direction",
  "animation.property.play.state": "Play State",
  "animation.property.fill.mode": "Fill Mode",
  "animation.property.delay": "Delay",
  "animation.property.duration": "Duration",
  "animation.property.iteration.count": "Iteration Count",
  "animation.property.Select a keyframe": "Select a keyframe",
  "animation.property.popup.title": "Animation",
  "animation.property.popup.timing.function": "Timing Function",
  "animation.property.popup.keyframe": "Keyframe",
  "animation.property.popup.direction": "Direction",
  "animation.property.popup.play.state": "Play State",
  "animation.property.popup.fill.mode": "Fill Mode",
  "animation.property.popup.delay": "Delay",
  "animation.property.popup.duration": "Duration",
  "animation.property.popup.iteration": "Iteration",
  "animation.property.popup.normal": "normal",
  "animation.property.popup.reverse": "reverse",
  "animation.property.popup.alternate": "alternate",
  "animation.property.popup.alternate-reverse": "alternate-reverse",
  "animation.property.popup.none": "none",
  "animation.property.popup.forwards": "forwards",
  "animation.property.popup.backwards": "backwards",
  "animation.property.popup.both": "both",
  "animation.property.popup.Select a keyframe": "Select a keyframe",
  "keyframe.popup.title": "Keyframe",
  "code.view.property.title": "CodeView",
  "svg.filter.editor.tab.filter": "Filter",
  "svg.filter.editor.tab.preset": "Preset",
  "svg.filter.editor.tab.asset": "Assets",
  "svg.filter.editor.GRAPHIC REFERENCES": "GRAPHIC REFERENCES",
  "svg.filter.editor.SOURCES": "SOURCES",
  "svg.filter.editor.MODIFIER": "MODIFIER",
  "svg.filter.editor.LIGHTING": "LIGHTING",
  "svg.filter.editor.COMBINERS": "COMBINERS",
  "svg.filter.editor.Template": "Template",
  "layout.property.title": "Layout",
  "layout.property.flex": "Flex Box",
  "layout.property.grid": "Grid",
  "layout.property.default": "Default",
  "layout.property.resizing.title": "Resizing",
  "layout.property.resizing.self.title": "Self Resizing",
  "default.layout.item.property.title.constraints": "Constraints",
  "flex.layout.editor.row": "Row",
  "flex.layout.editor.column": "column",
  "flex.layout.editor.row-reverse": "Row Reverse",
  "flex.layout.editor.column-reverse": "Column Reverse",
  "flex.layout.editor.nowrap": "Nowrap",
  "flex.layout.editor.wrap": "Wrap",
  "flex.layout.editor.wrap-reverse": "Wrap Reverse",
  "flex.layout.editor.flex-start": "Start",
  "flex.layout.editor.flex-end": "End",
  "flex.layout.editor.center": "Center",
  "flex.layout.editor.space-between": "Between",
  "flex.layout.editor.space-around": "Around",
  "flex.layout.editor.baseline": "BaseLine",
  "flex.layout.editor.stretch": "Stretch",
  "flex.layout.editor.direction": "Direction",
  "flex.layout.editor.justify-content": "Justify Content",
  "flex.layout.editor.align-items": "Align Items",
  "flex.layout.editor.align-content": "Align Content",
  "flex.layout.item.property.title": "Flex Item Detail",
  "flex.layout.item.property.grow": "Flex Grow",
  "flex.layout.item.property.shrink": "Flex Shrink",
  "flex.layout.item.property.basis": "Flex Basis",
  "flex.layout.item.property.none": "none",
  "flex.layout.item.property.auto": "auto",
  "flex.layout.item.property.value": "value",
  "grid.layout.editor.template.columns": "Columns",
  "grid.layout.editor.column.gap": "Column Gap",
  "grid.layout.editor.template.rows": "Rows",
  "grid.layout.editor.row.gap": "Row Gap",
  "grid.box.editor.box.title": "Box",
  "grid.box.editor.type": "Type",
  "grid.box.editor.repeat": "Repeat",
  "grid.box.editor.length": "Length",
  "grid.box.editor.none": "None",
  "grid.box.editor.auto": "Auto",
  "grid.box.editor.count": "Count",
  "grid.box.editor.value": "Size",
  "grid.layout.item.property.title": "Layout Item Detail",
  "grid.layout.item.property.column": "Column",
  "grid.layout.item.property.row": "Row",
  "grid.layout.item.property.start": "Start",
  "grid.layout.item.property.end": "End",
  "grid.layout.item.property.none": "none",
  "grid.layout.item.property.value": "value",
  "box.model.property.title": "Box Model",
  "box.model.property.margin": "Margin",
  "box.model.property.padding": "Padding",
  "component.items.canvas": "Canvas",
  "component.items.layer": "Layer",
  "component.items.3dlayer": "3D Layer",
  "component.items.drawing": "Drawing",
  "component.items.custom": "Custom Component",
  "component.items.chart": "Chart",
  "component.items.plugin": "Plugin",
  "svg.text.property.title": "SVG Text Style",
  "svg.text.property.textarea": "Text Area",
  "svg.text.property.size": "Font Size",
  "svg.text.property.weight": "Font Weight",
  "svg.text.property.style": "Font Style",
  "svg.text.property.anchor": "Text Anchor",
  "svg.text.property.family": "Font Family",
  "svg.text.property.length.adjust": "Length Adjust",
  "svg.text.property.text.length": "Text Length",
  "svg.text.property.start.offset": "Start Offset",
  "fill.picker.popup.title": "SVG Fragment picker",
  "gradient.editor.drag.message": "Drag if you want to move center pointer.",
  "draw.manager.tolerance": "Tolerance",
  "pattern.property.title": "Pattern",
  "pattern.info.popup.title": "Pattern Info",
  "pattern.info.popup.width": "Width",
  "pattern.info.popup.height": "Height",
  "pattern.info.popup.lineWidth": "Line Width",
  "pattern.info.popup.lineHeight": "Line Height",
  "pattern.info.popup.rotate": "Rotate",
  "pattern.info.popup.blend": "Blend Mode",
  "pattern.info.popup.foreColor": "Fore",
  "pattern.info.popup.backColor": "Back",
  "stroke.dasharray.editor.add": "Add Dash",
  "viewport.panning.enable": "You can move the area by holding down space key and dragging the screen.",
  "image.select.editor.button": "Select Image"
};
var fr_FR = {
  "app.title": "elf",
  "app.sample": (a, b, c) => {
    return `${a}-${b}-${c}`;
  },
  "app.lang.en_US": "English",
  "app.lang.ko_KR": "\uD55C\uAD6D\uC5B4",
  "app.lang.fr_FR": "Fran\xE7ais",
  "app.label.lang": "Langue",
  "app.layout.all": "Layout",
  "app.layout.css": "CSS Mode",
  "app.layout.svg": "SVG Mode",
  "app.label.layout": "Menu Layout",
  "app.theme.dark": "Sombre",
  "app.theme.light": "Clair",
  "app.theme.gray": "Gris",
  "app.label.theme": "Th\xE8me",
  "app.tab.title.projects": "Projets",
  "app.tab.title.layers": "Objets",
  "app.tab.title.libraries": "Librarie",
  "app.tab.title.components": "Objet",
  "app.tab.title.artboards": "Artboard",
  "app.tab.title.assets": "Elements",
  "app.tab.title.keyMap": "Clavier",
  "app.confirm.message.artboard.items.removeArtboard": "Do you remove an artboard preview really?",
  "app.confirm.message.custom-component.items.removeCustomComponent": "Do you remove a custom component preview really?",
  "menu.item.download.title": "T\xE9l\xE9charger",
  "menu.item.save.title": "Enregistrer",
  "menu.item.export.title": "Exporter",
  "menu.item.codepen.title": "CodePen",
  "menu.item.fullscreen.title": "Ecran",
  "menu.item.shortcuts.title": "ShortCuts",
  "menu.item.github.title": "Github",
  "menu.item.learn.title": "Docs",
  "menu.item.projects.title": "Projects",
  "project.property.title": "Projet",
  "project.information.property.title": "Information",
  "project.information.property.name": "Nom",
  "project.information.property.description": "Description",
  "artboard.property.title": "Planche",
  "artboard.property.layout.title.flex": "Flex",
  "artboard.property.layout.title.grid": "Grille",
  "layer.tree.property.title": "Objets",
  "layer.tree.property.layout.title.flex": "Flex",
  "layer.tree.property.layout.title.grid": "Grille",
  "alignment.property.title": "Alignment",
  "position.property.title": "Position",
  "position.property.X": "X",
  "position.property.Y": "Y",
  "size.property.title": "Taille",
  "position.property.width": "Largeur",
  "position.property.height": "Hauteur",
  "position.property.opacity": "Opacity",
  "position.property.rotate": "Rotate",
  "background.color.property.title": "Apparance",
  "background.color.property.color": "Couleur",
  "background.color.property.zindex": "z-index",
  "background.color.property.opacity": "Opacit\xE9",
  "background.color.property.blend": "M\xE9lange",
  "background.color.property.overflow": "D\xE9bordement",
  "background.color.property.overflow.visible": "Visible",
  "background.color.property.overflow.hidden": "Cach\xE9",
  "background.color.property.overflow.scroll": "Scroll",
  "background.color.property.overflow.auto": "Auto",
  "blend.normal": "normal",
  "blend.multiply": "multiplie",
  "blend.screen": "\xE9cran",
  "blend.overlay": "couche",
  "blend.darken": "sombre",
  "blend.lighten": "clair",
  "blend.color-dodge": "dodge",
  "blend.color-burn": "brul\xE9",
  "blend.hard-light": "dur",
  "blend.soft-light": "doux",
  "blend.difference": 'diff"rence',
  "blend.exclusion": "exclusion",
  "blend.hue": "teinte",
  "blend.saturation": "saturation",
  "blend.color": "couleur",
  "blend.luminosity": "luminosit\xE9",
  "background.image.property.title": "Remplissage",
  "border.property.title": "Bordure",
  "border.radius.property.title": "Rayon de bordure",
  "boxshadow.property.title": "Ombres",
  "filter.property.title": "Filtre",
  "filter.property.blur": "Flou",
  "filter.property.grayscale": "Echelle de gris",
  "filter.property.hue-rotate": "Rotation teinte",
  "filter.property.invert": "Invertir",
  "filter.property.brightness": "Luminosit\xE9",
  "filter.property.contrast": "Contraste",
  "filter.property.drop-shadow": "Ombre port\xE9e",
  "filter.property.drop-shadow.color": "Couleur",
  "filter.property.drop-shadow.offsetX": "D\xE9calage X",
  "filter.property.drop-shadow.offsetY": "D\xE9calage Y",
  "filter.property.drop-shadow.blurRadius": "Flou",
  "filter.property.opacity": "Opacit\xE9",
  "filter.property.saturate": "Saturation",
  "filter.property.sepia": "S\xE9pia",
  "filter.property.svg": "SVG",
  "font.property.title": "Police",
  "font.property.color": "Couleur",
  "font.property.size": "Taille",
  "font.property.stretch": "Etirement",
  "font.property.weight": "Poids",
  "font.property.style": "Style",
  "font.property.family": "Famille",
  "font.spacing.property.title": "Espaces du texte",
  "font.spacing.property.lineHeight": "Hauteur de ligne",
  "font.spacing.property.letterSpacing": "Espace inter-caract\xE8res",
  "font.spacing.property.wordSpacing": "Espace inter-mots",
  "font.spacing.property.indent": "Identation",
  "backdrop.filter.property.title": "Filtre Backdrop",
  "clippath.property.title": "Chemin du Clip",
  "export.property.title": "Exporter",
  "export.property.download": "T\xE9l\xE9charger",
  "iframe.property.title": "IFrame",
  "image.property.title": "Image",
  "image.property.origin": "Origine",
  "image.property.size": "Taille",
  "image.property.width": "Largeur",
  "image.property.height": "Hauteur",
  "video.property.title": "Video",
  "video.property.play": "Jouer",
  "video.property.pause": "Pause",
  "video.property.volume": "Volume",
  "video.property.playbackRate": "Vitesse de lecture",
  "video.property.currentTime": "Temps actuel",
  "video.property.playTime": "Temps de lecture",
  "motion.property.title": "Mouvement",
  "text.property.title": "Style Texte",
  "text.property.align": "Alignement",
  "text.property.transform": "Transformation",
  "text.property.decoration": "D\xE9coration",
  "text.clip.property.title": "Clip Texte",
  "text.shadow.property.title": "Ombres Texte",
  "text.fill.property.title": "Remplissage Texte",
  "text.fill.property.fill": "Remplissage",
  "text.fill.property.stroke": "Trait",
  "text.fill.property.strokeWidth": "Largeur",
  "transform.property.title": "Transformation",
  "transform.origin.property.title": "Origine Transformation",
  "transition.property.title": "Transition CSS",
  "keyframe.property.title": "Image cl\xE9 CSS",
  "selector.property.title": "S\xE9l\xE9cteur",
  "selector.property.none": "Aucun s\xE9l\xE9cteur",
  "path.data.property.title": "Information Chemin",
  "polygon.data.property.title": "Information Polygone",
  "perspective.property.title": "Perspective",
  "perspective.origin.property.title": "Origine Perspective",
  "svg.item.property.title": "Appearance",
  "svg.item.property.isMotionPath": "Chemin de mouvement",
  "svg.item.property.fill": "Remplissage",
  "svg.item.property.fillOpacity": "Opacit\xE9",
  "svg.item.property.path": "Chemin",
  "svg.item.property.polygon": "Polygone",
  "svg.item.property.totalLength": "Longueur totale",
  "svg.item.property.fillRule": "R\xE8gle remplissage",
  "svg.item.property.stroke": "Trait",
  "svg.item.property.strokeWidth": "Largeur de trait",
  "svg.item.property.dashArray": "Suite tiret",
  "svg.item.property.dashOffset": "D\xE9calage tiret",
  "svg.item.property.lineCap": "Chapeau Ligne",
  "svg.item.property.lineJoin": "Jonction ligne",
  "svg.item.property.filter": "Filtre",
  "svg.item.property.blend": "Blend Mode",
  "border.editor.all": "Tout",
  "border.editor.width": "Largeur",
  "border.editor.style": "Style",
  "border.editor.color": "Couleur",
  "border.editor.top": "Haut",
  "border.editor.left": "Gauche",
  "border.editor.right": "Droite",
  "border.editor.bottom": "Bas",
  "border.radius.editor.topLeft": "Haut gauche",
  "border.radius.editor.topRight": "Haut droite",
  "border.radius.editor.bottomLeft": "Bas gauche",
  "border.radius.editor.bottomRight": "Bas droite",
  "boxshadow.editor.blur": "Flou",
  "boxshadow.editor.spread": "Etalement",
  "css.property.editor.properties": "Propri\xE9t\xE9s",
  "offset.path.list.editor.path": "Chemin",
  "offset.path.list.editor.totalLength": "Longueur totale",
  "offset.path.list.editor.distance": "Distance",
  "offset.path.list.editor.direction": "Direction",
  "offset.path.list.editor.rotate": "Rotation",
  "svgfilter.select.editor.message.create": "Cr\xE9er un filtre svg",
  "svgfilter.select.editor.message.select": "S\xE9lection filtre",
  "fill.editor.message.click.image": "Cliquez sur aper\xE7u si vous souhaitez s\xE9lectionner une image",
  "fill.editor.message.drag.position": "Prendre pour changer la position centrale",
  "fill.editor.x1": "D\xE9but X",
  "fill.editor.x2": "Fin X",
  "fill.editor.y1": "D\xE9but Y",
  "fill.editor.y2": "Fin Y",
  "fill.editor.spread": "Etalement",
  "fill.editor.offset": "D\xE9calage",
  "fill.editor.cx": "Centre X",
  "fill.editor.cy": "Centre Y",
  "fill.editor.r": "Rayon de fin",
  "fill.editor.fx": "D\xE9part X",
  "fill.editor.fy": "D\xE9part Y",
  "fill.editor.fr": "Rayon de d\xE9part",
  "perspective.origin.editor.originX": "Origine X",
  "perspective.origin.editor.originY": "Origine Y",
  "path.manager.msg": "Appuyer ESC ou Entr\xE9z keypour fermer Edition",
  "path.manager.mode.done": "Done",
  "path.manager.mode.modify": "Modifier",
  "path.manager.mode.path": "Chemin",
  "path.manager.mode.warp": "Warp",
  "path.manager.mode.transform": "Transformer",
  "path.manager.mode.reverse": "Reverse",
  "path.manager.mode.flipX": "Retouner X",
  "path.manager.mode.flipY": "Retouner Y",
  "path.manager.mode.flipOrigin": "Retouner Origine",
  "colorpicker.popup.title": "Pipette",
  "selector.popup.title": "Propi\xE9t\xE9 de S\xE9lecteur",
  "selector.popup.selector": "S\xE9lecteur",
  "background.image.position.popup.title": "Motif de fond",
  "background.image.position.popup.size": "Taille",
  "background.image.position.popup.width": "Largeur",
  "background.image.position.popup.height": "Hauteur",
  "background.image.position.popup.repeat": "Rep\xE8te",
  "background.image.position.popup.blend": "M\xE9lange",
  "background.image.position.popup.type.repeat": "rep\xE8te",
  "background.image.position.popup.type.no-repeat": "sans rep\xE9tition",
  "background.image.position.popup.type.repeat-x": "rep\xE8te-x",
  "background.image.position.popup.type.repeat-y": "rep\xE8te-y",
  "background.image.position.popup.type.space": "espace",
  "background.image.position.popup.type.round": "rond",
  "gradient.picker.popup.title": "S\xE9lection Gradient & Image",
  "image.asset.property.title": "Image",
  "video.asset.property.title": "Vid\xE9o",
  "color.asset.property.title": "Couleur",
  "gradient.asset.property.title": "Gradient",
  "pattern.asset.property.title": "Motif",
  "svgfilter.asset.property.title": "Filtre SVG",
  "inspector.tab.title.design": "Design",
  "inspector.tab.title.component": "Composant",
  "inspector.tab.title.transition": "Animation",
  "inspector.tab.title.asset": "El\xE9ments",
  "inspector.tab.title.text": "Texte",
  "inspector.tab.title.code": "Code",
  "inspector.tab.title.history": "History",
  "timeline.property.title": "Chronologie",
  "timeline.property.resize": "Drag if you want to resize timeline height.",
  "timeline.animation.property.title": "Animations",
  "timeline.play.control.play": "Jouer",
  "timeline.play.control.pause": "Pause",
  "timeline.play.control.first": "Premier",
  "timeline.play.control.prev": "Pr\xE9c\xE9dent",
  "timeline.play.control.next": "Suivant",
  "timeline.play.control.last": "Dernier",
  "timeline.play.control.direction": "Direction",
  "timeline.play.control.speed": "Vitesse",
  "timeline.play.control.repeat": "R\xE9p\xE9ter",
  "timeline.play.control.infinite": "Infini",
  "timeline.play.control.normal": "normal",
  "timeline.play.control.alternate": "alternatif",
  "timeline.play.control.reverse": "inverse",
  "timeline.play.control.alternate.reverse": "inverse alternatif",
  "timeline.value.editor.value": "Valeur",
  "timeline.value.editor.time": "Temps",
  "timeline.value.editor.timing": "Calage temps",
  "timeline.value.editor.offset.message": "Please input enter key to change time offset.",
  "svgfilter.popup.title": "Filtre SVG",
  "css.item.rotate": "Rotation",
  "css.item.rotateX": "Rotation X",
  "css.item.rotateY": "Rotation Y",
  "css.item.rotateZ": "Rotation Z",
  "css.item.rotate3d": "Rotation 3D",
  "css.item.skewX": "Oblique X",
  "css.item.skewY": "Oblique Y",
  "css.item.translate": "Translation",
  "css.item.translateX": "Translation X",
  "css.item.translateY": "Translation Y",
  "css.item.translateZ": "Translation Z",
  "css.item.translate3d": "Translation 3D",
  "css.item.perspective": "Persp\xE9ctive",
  "css.item.scale": "Echelle",
  "css.item.scaleX": "Echelle X",
  "css.item.scaleY": "Echelle Y",
  "css.item.scaleZ": "Echelle Z",
  "css.item.scale3d": "Echelle 3D",
  "css.item.matrix": "Matrice",
  "css.item.matrix3d": "Matrice 3D",
  "animation.property.title": "Animation CSS",
  "animation.property.direction": "Direction",
  "animation.property.play.state": "Etat lecture",
  "animation.property.fill.mode": "Mode remplissage",
  "animation.property.delay": "D\xE9lais",
  "animation.property.duration": "Dur\xE9e",
  "animation.property.iteration.count": "Nombre It\xE9rations",
  "animation.property.Select a keyframe": "Selectionner une image cl\xE9",
  "animation.property.popup.title": "Animation",
  "animation.property.popup.timing.function": "Fonction temps",
  "animation.property.popup.keyframe": "image cl\xE9",
  "animation.property.popup.direction": "Direction",
  "animation.property.popup.play.state": "Etat lecture",
  "animation.property.popup.fill.mode": "Mode remplissage",
  "animation.property.popup.delay": "D\xE9lais",
  "animation.property.popup.duration": "Dur\xE9\xE9",
  "animation.property.popup.iteration": "It\xE9ration",
  "animation.property.popup.normal": "normal",
  "animation.property.popup.reverse": "inverse",
  "animation.property.popup.alternate": "alternatif",
  "animation.property.popup.alternate-reverse": "inverse alternatif",
  "animation.property.popup.none": "Aucun",
  "animation.property.popup.forwards": "en avant",
  "animation.property.popup.backwards": "en arri\xE8re",
  "animation.property.popup.both": "les deux",
  "animation.property.popup.Select a keyframe": "Selectionner une image cl\xE9",
  "keyframe.popup.title": "image cl\xE9",
  "code.view.property.title": "Vue code",
  "svg.filter.editor.tab.filter": "Filtrer",
  "svg.filter.editor.tab.preset": "Pre-rempli",
  "svg.filter.editor.tab.asset": "El\xE9ments",
  "svg.filter.editor.GRAPHIC REFERENCES": "REFERENCES GRAPHIQUES",
  "svg.filter.editor.SOURCES": "SOURCES",
  "svg.filter.editor.MODIFIER": "MODIFIER",
  "svg.filter.editor.LIGHTING": "ECLAIRAGE",
  "svg.filter.editor.COMBINERS": "COMBINER",
  "svg.filter.editor.Template": "Mod\xE8le",
  "layout.property.title": "Disposition",
  "layout.property.flex": "Bo\xEEte Flex",
  "layout.property.grid": "Grille",
  "layout.property.default": "D\xE9faut",
  "layout.property.resizing.title": "Resizing",
  "layout.property.resizing.self.title": "Self Resizing",
  "default.layout.item.property.title.constraints": "Constraints",
  "flex.layout.editor.row": "Ligne",
  "flex.layout.editor.column": "Colonne",
  "flex.layout.editor.row-reverse": "Inverse ligne",
  "flex.layout.editor.column-reverse": "Inverse Colonne",
  "flex.layout.editor.nowrap": "Non-emball\xE9",
  "flex.layout.editor.wrap": "Emball\xE9 (wrap)",
  "flex.layout.editor.wrap-reverse": "Inverse emball\xE9",
  "flex.layout.editor.flex-start": "D\xE9but",
  "flex.layout.editor.flex-end": "Fin",
  "flex.layout.editor.center": "Centrer",
  "flex.layout.editor.space-between": "Entre",
  "flex.layout.editor.space-around": "Autour",
  "flex.layout.editor.baseline": "Base",
  "flex.layout.editor.stretch": "Etirement",
  "flex.layout.editor.direction": "Direction",
  "flex.layout.editor.justify-content": "Justifier",
  "flex.layout.editor.align-items": "Aligner objets",
  "flex.layout.editor.align-content": "Aligner contenu",
  "flex.layout.item.property.title": "D\xE9tail Disposition objet",
  "flex.layout.item.property.grow": "Augmenter Flex",
  "flex.layout.item.property.shrink": "R\xE9duire Flex",
  "flex.layout.item.property.basis": "Base Flex",
  "flex.layout.item.property.none": "Aucun",
  "flex.layout.item.property.auto": "auto",
  "flex.layout.item.property.value": "valeur",
  "grid.layout.editor.template.columns": "Colonne",
  "grid.layout.editor.column.gap": "Espace Colonne",
  "grid.layout.editor.template.rows": "Lignes",
  "grid.layout.editor.row.gap": "Espace lignes",
  "grid.box.editor.box.title": "Bo\xEEte",
  "grid.box.editor.type": "Type",
  "grid.box.editor.repeat": "R\xE9p\xE9ter",
  "grid.box.editor.length": "Longueur",
  "grid.box.editor.none": "Aucun",
  "grid.box.editor.auto": "Auto",
  "grid.box.editor.count": "Compte",
  "grid.box.editor.value": "Taille",
  "grid.layout.item.property.title": "D\xE9tail disposition objets",
  "grid.layout.item.property.column": "Colonne",
  "grid.layout.item.property.row": "Ligne",
  "grid.layout.item.property.start": "D\xE9but",
  "grid.layout.item.property.end": "Fin",
  "grid.layout.item.property.none": "Aucun",
  "grid.layout.item.property.value": "valeur",
  "box.model.property.title": "Mod\xE8le",
  "box.model.property.margin": "Marge",
  "box.model.property.padding": "Espace",
  "component.items.canvas": "Toile",
  "component.items.layer": "Objet",
  "component.items.3dlayer": "Objet 3D",
  "component.items.drawing": "Dessin",
  "component.items.custom": "Composant personnalis\xE9",
  "component.items.chart": "Chart",
  "component.items.plugin": "Plugin",
  "svg.text.property.title": "Style SVG Texte",
  "svg.text.property.textarea": "Zone Texte",
  "svg.text.property.size": "Taille",
  "svg.text.property.weight": "Poids",
  "svg.text.property.style": "Style",
  "svg.text.property.anchor": "Ancre Texte",
  "svg.text.property.family": "Famille",
  "svg.text.property.length.adjust": "Ajusteement longueur",
  "svg.text.property.text.length": "Ajusteement Texte",
  "svg.text.property.start.offset": "D\xE9callage d\xE9part",
  "fill.picker.popup.title": "S\xE9lection Fragment SVG",
  "gradient.editor.drag.message": "Glisser pour d\xE9placer centre.",
  "draw.manager.tolerance": "Tol\xE9rance",
  "pattern.property.title": "Motif",
  "pattern.info.popup.title": "Info Motif",
  "pattern.info.popup.width": "Largeur",
  "pattern.info.popup.height": "Hauteur",
  "pattern.info.popup.lineWidth": "Largeur ligne",
  "pattern.info.popup.lineHeight": "Hauteur de ligne",
  "pattern.info.popup.rotate": "Rotatation",
  "pattern.info.popup.blend": "M\xE9lange",
  "pattern.info.popup.foreColor": "Avant",
  "pattern.info.popup.backColor": "Arri\xE8re",
  "stroke.dasharray.editor.add": "Ajout tiret",
  "viewport.panning.enable": "You can move the area by holding down space and dragging the screen."
};
var ko_KR = {
  "app.title": "elf",
  "app.sample": (a, b, c) => {
    return `${a}-${b}-${c}`;
  },
  "app.lang.en_US": "English",
  "app.lang.ko_KR": "\uD55C\uAD6D\uC5B4",
  "app.lang.fr_FR": "Fran\xE7ais",
  "app.label.lang": "\uC5B8\uC5B4",
  "app.layout.all": "\uB808\uC774\uC544\uC6C3",
  "app.layout.css": "CSS \uBAA8\uB4DC",
  "app.layout.svg": "SVG \uBAA8\uB4DC",
  "app.label.layout": "\uBA54\uB274\uAD6C\uC131",
  "app.theme.dark": "\uC5B4\uB450\uC6B4",
  "app.theme.light": "\uBC1D\uC740",
  "app.theme.toon": "\uADF8\uB9AC\uAE30",
  "app.theme.gray": "\uD68C\uC0C9",
  "app.label.theme": "\uD14C\uB9C8",
  "app.tab.title.projects": "\uD504\uB85C\uC81D\uD2B8",
  "app.tab.title.layers": "\uB808\uC774\uC5B4",
  "app.tab.title.libraries": "\uB77C\uC774\uBE0C\uB7EC\uB9AC",
  "app.tab.title.components": "\uCEF4\uD3EC\uB10C\uD2B8",
  "app.tab.title.artboards": "\uC544\uD2B8\uBCF4\uB4DC",
  "app.tab.title.assets": "\uC5D0\uC14B",
  "app.tab.title.keyMap": "\uB2E8\uCD95\uD0A4",
  "app.confirm.message.artboard.items.removeArtboard": "\uC544\uD2B8\uBCF4\uB4DC \uD504\uB9AC\uBDF0\uB97C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  "app.confirm.message.custom-component.items.removeCustomComponent": "\uCEF4\uD3EC\uB10C\uD2B8 \uD504\uB9AC\uBDF0\uB97C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  "menu.item.download.title": "\uB2E4\uC6B4\uB85C\uB4DC",
  "menu.item.save.title": "\uC800\uC7A5",
  "menu.item.export.title": "\uB0B4\uBCF4\uB0B4\uAE30",
  "menu.item.fullscreen.title": "\uC804\uCCB4\uD654\uBA74",
  "menu.item.shortcuts.title": "\uB2E8\uCD95\uD0A4",
  "menu.item.github.title": "Github",
  "menu.item.learn.title": "\uBC30\uC6B0\uAE30",
  "menu.item.projects.title": "\uD504\uB85C\uC81D\uD2B8",
  "project.property.title": "\uD504\uB85C\uC81D\uD2B8",
  "project.information.property.title": "\uD504\uB85C\uC81D\uD2B8 \uC815\uBCF4",
  "project.information.property.name": "\uC774\uB984",
  "project.information.property.description": "\uC124\uBA85",
  "artboard.property.title": "\uC544\uD2B8\uBCF4\uB4DC",
  "artboard.property.layout.title.flex": "\uD50C\uB809\uC2A4",
  "artboard.property.layout.title.grid": "\uADF8\uB9AC\uB4DC",
  "layer.tree.property.title": "\uB808\uC774\uC5B4",
  "layer.tree.property.layout.title.flex": "\uD50C\uB809\uC2A4",
  "layer.tree.property.layout.title.grid": "\uADF8\uB9AC\uB4DC",
  "alignment.property.title": "\uC815\uB82C",
  "position.property.title": "\uC704\uCE58",
  "position.property.X": "X",
  "position.property.Y": "Y",
  "size.property.title": "\uD06C\uAE30",
  "position.property.width": "\uB113\uC774",
  "position.property.height": "\uB192\uC774",
  "position.property.rotate": "\uD68C\uC804",
  "position.property.opacity": "\uD22C\uBA85",
  "background.color.property.title": "\uD45C\uC2DC",
  "background.color.property.color": "\uBC30\uACBD\uC0C9",
  "background.color.property.zindex": "z-index",
  "background.color.property.blend": "\uBE14\uB80C\uB4DC\uBAA8\uB4DC",
  "background.color.property.overflow": "\uC624\uBC84\uD50C\uB85C\uC6B0",
  "background.color.property.overflow.visible": "\uBCF4\uC774\uAE30",
  "background.color.property.overflow.hidden": "\uC228\uAE30\uAE30",
  "background.color.property.overflow.scroll": "\uC2A4\uD06C\uB864",
  "background.color.property.overflow.auto": "\uC790\uB3D9",
  "blend.normal": "Normal(\uD45C\uC900) \uD63C\uD569\uBAA8\uB4DC",
  "blend.multiply": "Multiply(\uACF1\uD558\uAE30) \uBAA8\uB4DC",
  "blend.screen": "Screen(\uC2A4\uD06C\uB9B0) \uBAA8\uB4DC ",
  "blend.overlay": "Overlay(\uC624\uBC84\uB808\uC774) \uBAA8\uB4DC",
  "blend.darken": "Darken(\uC5B4\uB461\uAE30) \uBAA8\uB4DC",
  "blend.lighten": "Lighten(\uBC1D\uAE30) \uBAA8\uB4DC ",
  "blend.color-dodge": "Color Dodge(\uCEEC\uB7EC \uB2F7\uC9C0) \uBAA8\uB4DC ",
  "blend.color-burn": "Color Burn(\uCEEC\uB7EC \uBC88) \uBAA8\uB4DC ",
  "blend.hard-light": "Hard Light(\uD558\uB4DC \uB77C\uC774\uD2B8) \uBAA8\uB4DC ",
  "blend.soft-light": "Soft Light(\uC18C\uD504\uD2B8 \uB77C\uC774\uD2B8) \uBAA8\uB4DC ",
  "blend.difference": "Difference(\uCC28\uC774) \uBAA8\uB4DC",
  "blend.exclusion": "Exclusion(\uC81C\uC678) \uBAA8\uB4DC",
  "blend.hue": "Hue(\uC0C9\uC870) \uBAA8\uB4DC ",
  "blend.saturation": "Saturation(\uCC44\uB3C4) \uBAA8\uB4DC",
  "blend.color": "Color(\uC0C9\uC0C1) \uBAA8\uB4DC",
  "blend.luminosity": "Luminosity(\uAD11\uB3C4) \uBAA8\uB4DC ",
  "background.image.property.title": "\uCC44\uC6B0\uAE30",
  "border.property.title": "\uC678\uACFD\uC120",
  "border.radius.property.title": "\uB465\uADFC \uC678\uACFD\uC120",
  "boxshadow.property.title": "\uADF8\uB9BC\uC790",
  "filter.property.title": "\uD544\uD130",
  "filter.property.blur": "\uD750\uB9BC(Blur)",
  "filter.property.grayscale": "\uD68C\uC0C9(GrayScale)",
  "filter.property.hue-rotate": "\uC0C9\uC870(HueRotate)",
  "filter.property.invert": "\uBC18\uC804(Invert)",
  "filter.property.brightness": "\uBC1D\uAE30(Brightness)",
  "filter.property.contrast": "\uB300\b\uC870(Contrast)",
  "filter.property.drop-shadow": "\uADF8\uB9BC\uC790(Drop Shadow)",
  "filter.property.drop-shadow.color": "\uC0C9",
  "filter.property.drop-shadow.offsetX": "X",
  "filter.property.drop-shadow.offsetY": "Y",
  "filter.property.drop-shadow.blurRadius": "\uD750\uB9BC",
  "filter.property.opacity": "\uD22C\uBA85\uB3C4(Opacity)",
  "filter.property.saturate": "\uCC44\uB3C4(Saturate)",
  "filter.property.sepia": "\uAC08\uC0C9\uD1A4(Sepia)",
  "filter.property.svg": "SVG",
  "font.property.title": "\uD3F0\uD2B8",
  "font.property.color": "\uC0C9",
  "font.property.size": "\uD06C\uAE30",
  "font.property.stretch": "\uBED7\uAE30",
  "font.property.weight": "\uAD75\uAE30",
  "font.property.style": "\uC2A4\uD0C0\uC77C",
  "font.property.family": "\uAE00\uAF34",
  "font.spacing.property.title": "\uD3F0\uD2B8 \uACF5\uAC04",
  "font.spacing.property.lineHeight": "\uC904 \uB192\uC774",
  "font.spacing.property.letterSpacing": "\uAE00\uC790 \uAC04\uACA9",
  "font.spacing.property.wordSpacing": "\uB2E8\uC5B4 \uAC04\uACA9",
  "font.spacing.property.indent": "\uB4E4\uC5EC\uC4F0\uAE30",
  "backdrop.filter.property.title": "\uD6C4\uBA74 \uD544\uD130",
  "clippath.property.title": "\uD074\uB9BD\uD328\uC2A4",
  "export.property.title": "\uB0B4\uBCF4\uB0B4\uAE30",
  "export.property.download": "\uB2E4\uC6B4\uB85C\uB4DC",
  "iframe.property.title": "\uC544\uC774\uD504\uB808\uC784",
  "image.property.title": "\uC774\uBBF8\uC9C0",
  "image.property.origin": "\uC6D0\uBCF8",
  "image.property.size": "\uD06C\uAE30",
  "image.property.width": "\uB113\uC774",
  "image.property.height": "\uB192\uC774",
  "video.property.title": "\uBE44\uB514\uC624",
  "video.property.play": "\uC2DC\uC791",
  "video.property.pause": "\uBA48\uCDA4",
  "video.property.volume": "\uBCFC\uB968",
  "video.property.playbackRate": "\uBE60\uB974\uAE30",
  "video.property.currentTime": "\uD604\uC7AC \uC2DC\uAC04",
  "video.property.playTime": "\uD50C\uB808\uC774 \uC2DC\uAC04 \uAC04\uACA9",
  "motion.property.title": "\uBAA8\uC158",
  "path.data.property.title": "\uD328\uC2A4 \uC815\uBCF4",
  "polygon.data.property.title": "\uD3F4\uB9AC\uACE4 \uC815\uBCF4",
  "text.property.title": "\uD14D\uC2A4\uD2B8 \uC2A4\uD0C0\uC77C",
  "text.property.align": "\uC815\uB82C",
  "text.property.transform": "\uBCC0\uD615",
  "text.property.decoration": "\uC7A5\uC2DD",
  "text.clip.property.title": "\uD14D\uC2A4\uD2B8 \uD074\uB9BD",
  "text.shadow.property.title": "\uD14D\uC2A4\uD2B8 \uADF8\uB9BC\uC790",
  "text.fill.property.title": "\uD14D\uC2A4\uD2B8 \uCC44\uC6B0\uAE30",
  "text.fill.property.fill": "\uCC44\uC6B0\uAE30",
  "text.fill.property.stroke": "\uC724\uACFD\uC120",
  "text.fill.property.strokeWidth": "\uC724\uACFD\uC120 \uAD75\uAE30",
  "transform.property.title": "\uD2B8\uB79C\uC2A4\uD3FC",
  "transform.origin.property.title": "\uD2B8\uB79C\uC2A4\uD3FC Origin",
  "transition.property.title": "CSS \uD2B8\uB79C\uC9C0\uC158",
  "keyframe.property.title": "CSS \uD0A4\uD504\uB808\uC784",
  "selector.property.title": "CSS \uC140\uB809\uD130",
  "selector.property.none": "\uC120\uD0DD\uC790 \uC5C6\uC74C",
  "perspective.property.title": "\uD22C\uC601(perspective)",
  "perspective.origin.property.title": "\uD22C\uC601 \uC911\uC2EC\uC810",
  "svg.item.property.title": "\uBCF4\uC774\uAE30",
  "svg.item.property.isMotionPath": "\uBAA8\uC158 \uD328\uC2A4",
  "svg.item.property.fill": "\uCC44\uC6B0\uAE30",
  "svg.item.property.fillOpacity": "\uD22C\uBA85\uB3C4",
  "svg.item.property.path": "\uD328\uC2A4",
  "svg.item.property.polygon": "\uD3F4\uB9AC\uACE4",
  "svg.item.property.totalLength": "\uC804\uCCB4 \uAE38\uC774",
  "svg.item.property.fillRule": "\uCC44\uC6B0\uAE30 \uADDC\uCE59",
  "svg.item.property.stroke": "\uC120",
  "svg.item.property.strokeWidth": "\uC120 \uAD75\uAE30",
  "svg.item.property.dashArray": "\uC810\uC120 \uAE38\uC774",
  "svg.item.property.dashOffset": "\uC810\uC120 \uC704\uCE58",
  "svg.item.property.lineCap": "\uC120 \uBAA8\uC591",
  "svg.item.property.lineJoin": "\uACB9\uCE5C \uC120",
  "svg.item.property.filter": "\uD544\uD130",
  "svg.item.property.blend": "\uBE14\uB80C\uB4DC",
  "border.editor.all": "\uC804\uCCB4",
  "border.editor.width": "\uD06C\uAE30",
  "border.editor.style": "\uC2A4\uD0C0\uC77C",
  "border.editor.color": "\uC0C9",
  "border.editor.top": "\uC704",
  "border.editor.left": "\uC67C\uCABD",
  "border.editor.right": "\uC624\uB978\uCABD",
  "border.editor.bottom": "\uC544\uB798",
  "border.radius.editor.topLeft": "\uC67C\uCABD \uC704",
  "border.radius.editor.topRight": "\uC624\uB978\uCABD \uC704",
  "border.radius.editor.bottomLeft": "\uC67C\uCABD \uC544\uB798",
  "border.radius.editor.bottomRight": "\uC624\uB978\uCABD \uC544\uB798",
  "boxshadow.editor.blur": "\uD750\uB9BC",
  "boxshadow.editor.spread": "\uAE38\uC774",
  "css.property.editor.properties": "\uC18D\uC131",
  "offset.path.list.editor.path": "\uD328\uC2A4",
  "offset.path.list.editor.totalLength": "\uC804\uCCB4 \uAE38\uC774",
  "offset.path.list.editor.distance": "\uAC70\uB9AC",
  "offset.path.list.editor.direction": "\uBC29\uD5A5",
  "offset.path.list.editor.rotate": "\uD68C\uC804",
  "svgfilter.select.editor.message.create": "\uC0C8\uB85C\uC6B4 SVG Filter \uB97C \uB9CC\uB4DC\uC138\uC694.",
  "svgfilter.select.editor.message.select": "\uD544\uD130\uB97C \uC120\uD0DD\uD558\uC138\uC694.",
  "fill.editor.message.click.image": "\uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD558\uACE0 \uC2F6\uC73C\uBA74 \uD504\uB9AC\uBDF0 \uC601\uC5ED\uC744 \uD074\uB9AD\uD558\uC138\uC694.",
  "fill.editor.message.drag.position": "\uAC00\uC6B4\uB370 \uC704\uCE58\uB97C \uB4DC\uB798\uADF8 \uD574\uBCF4\uC138\uC694.",
  "fill.editor.x1": "\uC2DC\uC791 X",
  "fill.editor.x2": "\uB05D X",
  "fill.editor.y1": "\uC2DC\uC791 Y",
  "fill.editor.y2": "\uB05D Y",
  "fill.editor.spread": "\uD655\uC0B0",
  "fill.editor.offset": "\uC704\uCE58",
  "fill.editor.cx": "\uC911\uC2EC\uC810 X",
  "fill.editor.cy": "\uC911\uC2EC\uC810 Y",
  "fill.editor.r": "\uB05D \uBC18\uC9C0\uB984",
  "fill.editor.fx": "\uC2DC\uC791 X",
  "fill.editor.fy": "\uC2DC\uC791 Y",
  "fill.editor.fr": "\uC2DC\uC791 \uBC18\uC9C0\uB984",
  "perspective.origin.editor.originX": "\uC911\uC2EC\uC810 X",
  "perspective.origin.editor.originY": "\uC911\uC2EC\uC810 Y",
  "path.manager.msg": "\uD3B8\uC9D1\uC744 \uC885\uB8CC\uD560 \uB54C\uB294 ESC \uD0A4\uB098 Enter \uD0A4\uB97C \uB204\uB974\uC138\uC694. \uB610\uB294 \uD654\uBA74\uC744 \uD074\uB9AD\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4.",
  "path.manager.mode.done": "\uC644\uB8CC",
  "path.manager.mode.modify": "\uC810 \uD3B8\uC9D1",
  "path.manager.mode.path": "\uC810 \uCD94\uAC00",
  "path.manager.mode.warp": "\uC6CC\uD504",
  "path.manager.mode.transform": "\uBCC0\uD615",
  "path.manager.mode.reverse": "\uC21C\uC11C\uBCC0\uACBD",
  "path.manager.mode.flipX": "X\uCD95 \uD68C\uC804",
  "path.manager.mode.flipY": "Y\uCD95 \uD68C\uC804",
  "path.manager.mode.flipOrigin": "\uC804\uCCB4 \uD68C\uC804",
  "colorpicker.popup.title": "\uC0C9\uC0C1 \uC120\uD0DD",
  "selector.popup.title": "\uC120\uD0DD\uC790 \uC18D\uC131",
  "selector.popup.selector": "\uC120\uD0DD\uC790",
  "background.image.position.popup.title": "\uBC30\uACBD \uD328\uD134",
  "background.image.position.popup.size": "\uD06C\uAE30",
  "background.image.position.popup.width": "\uB113\uC774",
  "background.image.position.popup.height": "\uB192\uC774",
  "background.image.position.popup.repeat": "\uBC18\uBCF5",
  "background.image.position.popup.blend": "\uBE14\uB80C\uB4DC",
  "background.image.position.popup.type.repeat": "\uBC18\uBCF5",
  "background.image.position.popup.type.no-repeat": "\uBC18\uBCF5 \uC548\uD568",
  "background.image.position.popup.type.repeat-x": "x\uCD95 \uBC18\uBCF5",
  "background.image.position.popup.type.repeat-y": "y\uCD95 \uBC18\uBCF5",
  "background.image.position.popup.type.space": "\uACF5\uBC31\uC720\uC9C0",
  "background.image.position.popup.type.round": "\uBC18\uC62C\uB9BC",
  "gradient.picker.popup.title": "\uADF8\uB77C\uB514\uC5B8\uD2B8\uC640 \uC774\uBBF8\uC9C0",
  "image.asset.property.title": "\uC774\uBBF8\uC9C0",
  "video.asset.property.title": "\uBE44\uB514\uC624",
  "color.asset.property.title": "\uC0C9",
  "gradient.asset.property.title": "\uADF8\uB77C\uB514\uC5B8\uD2B8",
  "pattern.asset.property.title": "\uD328\uD134",
  "svgfilter.asset.property.title": "SVG \uD544\uD130",
  "inspector.tab.title.design": "\uB514\uC790\uC778",
  "inspector.tab.title.component": "\uCEF4\uD3EC\uB10C\uD2B8 \uC18D\uC131",
  "inspector.tab.title.transition": "\uC560\uB2C8\uBA54\uC774\uC158",
  "inspector.tab.title.asset": "\uC5D0\uC14B \uAD00\uB9AC\uC790",
  "inspector.tab.title.text": "\uD14D\uC2A4\uD2B8",
  "inspector.tab.title.code": "\uCF54\uB4DC",
  "inspector.tab.title.history": "\uAE30\uB85D",
  "timeline.property.title": "\uD0C0\uC784\uB77C\uC778",
  "timeline.property.resize": "\uD0C0\uC784\uB77C\uC778 \uB192\uC774\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4. \uB4DC\uB798\uADF8 \uD574\uC8FC\uC138\uC694.",
  "timeline.animation.property.title": "\uC560\uB2C8\uBA54\uC774\uC158",
  "timeline.play.control.play": "\uD50C\uB808\uC774",
  "timeline.play.control.pause": "\uBA48\uCDA4",
  "timeline.play.control.first": "\uCC98\uC74C\uC73C\uB85C",
  "timeline.play.control.prev": "\uC774\uC804\uC73C\uB85C",
  "timeline.play.control.next": "\uB2E4\uC74C\uC73C\uB85C",
  "timeline.play.control.last": "\uB9C8\uC9C0\uB9C9\uC73C\uB85C",
  "timeline.play.control.direction": "\uBC29\uD5A5",
  "timeline.play.control.speed": "\uC18D\uB825",
  "timeline.play.control.repeat": "\uBC18\uBCF5",
  "timeline.play.control.infinite": "\uBB34\uD55C",
  "timeline.play.control.normal": "normal",
  "timeline.play.control.alternate": "alternate",
  "timeline.play.control.reverse": "reverse",
  "timeline.play.control.alternate.reverse": "alternate reverse",
  "timeline.value.editor.value": "\uAC12",
  "timeline.value.editor.time": "\uC2DC\uAC04",
  "timeline.value.editor.timing": "\uD0C0\uC774\uBC0D \uD568\uC218",
  "timeline.value.editor.offset.message": "Enter\uD0A4\uB97C \uC785\uB825\uD558\uBA74 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
  "svgfilter.popup.title": "SVG \uD544\uD130",
  "css.item.rotate": "\uD68C\uC804",
  "css.item.rotateX": "X\uCD95 \uD68C\uC804",
  "css.item.rotateY": "Y\uCD95 \uD68C\uC804",
  "css.item.rotateZ": "Z\uCD95 \uD68C\uC804",
  "css.item.rotate3d": "3D \uD68C\uC804",
  "css.item.skewX": "X\uCD95 \uB298\uC774\uAE30",
  "css.item.skewY": "Y\uCD95 \uB298\uC774\uAE30",
  "css.item.translate": "\uC774\uB3D9",
  "css.item.translateX": "X\uCD95 \uC774\uB3D9",
  "css.item.translateY": "Y\uCD95 \uC774\uB3D9",
  "css.item.translateZ": "Z\uCD95 \uC774\uB3D9",
  "css.item.translate3d": "3D \uC774\uB3D9",
  "css.item.perspective": "\uC6D0\uADFC",
  "css.item.scale": "\uD06C\uAE30\uBCC0\uACBD",
  "css.item.scaleX": "X\uCD95 \uD06C\uAE30\uBCC0\uACBD",
  "css.item.scaleY": "Y\uCD95 \uD06C\uAE30\uBCC0\uACBD",
  "css.item.scaleZ": "Z\uCD95 \uD06C\uAE30\uBCC0\uACBD",
  "css.item.scale3d": "3D \uD06C\uAE30\uBCC0\uACBD",
  "css.item.matrix": "\uBCC0\uD658 \uD589\uB82C",
  "css.item.matrix3d": "3D \uBCC0\uD658 \uD589\uB82C",
  "animation.property.title": "CSS \uC560\uB2C8\uBA54\uC774\uC158",
  "animation.property.direction": "\uBC29\uD5A5",
  "animation.property.play.state": "\uD50C\uB808\uC774 \uC0C1\uD0DC",
  "animation.property.fill.mode": "\uCC44\uC6B0\uAE30 \uBAA8\uB4DC",
  "animation.property.delay": "\uB300\uAE30\uC2DC\uAC04",
  "animation.property.duration": "\uC2DC\uAC04",
  "animation.property.iteration.count": "\uBC18\uBCF5 \uD69F\uC218",
  "animation.property.select a keyframe": "\uD0A4\uD504\uB808\uC784\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694",
  "animation.property.popup.title": "CSS \uC560\uB2C8\uBA54\uC774\uC158",
  "animation.property.popup.timing.function": "\uD0C0\uC774\uBC0D \uD568\uC218",
  "animation.property.popup.keyframe": "\uD0A4\uD504\uB808\uC784",
  "animation.property.popup.direction": "\uBC29\uD5A5",
  "animation.property.popup.play.state": "\uD50C\uB808\uC774 \uC0C1\uD0DC",
  "animation.property.popup.fill.mode": "\uCC44\uC6B0\uAE30 \uBAA8\uB4DC",
  "animation.property.popup.delay": "\uB300\uAE30\uC2DC\uAC04",
  "animation.property.popup.duration": "\uC2DC\uAC04",
  "animation.property.popup.iteration": "\uBC18\uBCF5 \uD69F\uC218",
  "animation.property.popup.normal": "\uC2DC\uAC04\uC21C",
  "animation.property.popup.reverse": "\uC5ED\uC2DC\uAC04\uC21C",
  "animation.property.popup.alternate": "\uC655\uBCF5 \uC2DC\uAC04\uC21C",
  "animation.property.popup.alternate-reverse": "\uC655\uBCF5 \uC5ED\uC2DC\uAC04\uC21C",
  "animation.property.popup.none": "none",
  "animation.property.popup.forwards": "forwards",
  "animation.property.popup.backwards": "backwards",
  "animation.property.popup.both": "both",
  "animation.property.popup.Select a keyframe": "\uD0A4\uD504\uB808\uC784\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
  "keyframe.popup.title": "\uD0A4\uD504\uB808\uC784",
  "code.view.property.title": "\uCF54\uB4DC\uBDF0",
  "svg.filter.editor.tab.filter": "\uD544\uD130",
  "svg.filter.editor.tab.preset": "\uD504\uB9AC\uC14B",
  "svg.filter.editor.tab.asset": "\uC5D0\uC14B",
  "svg.filter.editor.GRAPHIC REFERENCES": "\uCC38\uC870 \uADF8\uB798\uD53D",
  "svg.filter.editor.SOURCES": "\uC6D0\uBCF8",
  "svg.filter.editor.MODIFIER": "\uC218\uC815",
  "svg.filter.editor.LIGHTING": "\uBE5B",
  "svg.filter.editor.COMBINERS": "\uACB0\uD569",
  "svg.filter.editor.Template": "\uD15C\uD50C\uB9BF",
  "layout.property.title": "\uB808\uC774\uC544\uC6C3",
  "layout.property.flex": "\uD50C\uB809\uC2A4 \uBC15\uC2A4",
  "layout.property.grid": "\uADF8\uB9AC\uB4DC",
  "layout.property.default": "\uAE30\uBCF8 \uC88C\uD45C",
  "layout.property.resizing.title": "\uC0AC\uC774\uC988 \uC870\uC808",
  "layout.property.resizing.self.title": "\uC544\uC774\uD15C \uC0AC\uC774\uC988 \uC870\uC808",
  "default.layout.item.property.title.constraints": "Constraints",
  "flex.layout.editor.row": "\uD589",
  "flex.layout.editor.column": "\uC5F4",
  "flex.layout.editor.row-reverse": "\uC5ED\uBC29\uD5A5 \uD589",
  "flex.layout.editor.column-reverse": "\uC5ED\uBC29\uD5A5 \uC5F4",
  "flex.layout.editor.nowrap": "\uAC10\uC2F8\uC9C0 \uC54A\uAE30",
  "flex.layout.editor.wrap": "\uAC10\uC2F8\uAE30",
  "flex.layout.editor.wrap-reverse": "\uC5ED\uBC29\uD5A5 \uAC10\uC2F8\uAE30",
  "flex.layout.editor.flex-start": "\uC2DC\uC791",
  "flex.layout.editor.flex-end": "\uB05D",
  "flex.layout.editor.center": "\uC911\uAC04",
  "flex.layout.editor.space-between": "\uACF5\uAC04 \uC911\uAC04 \uCC44\uC6C0",
  "flex.layout.editor.space-around": "\uACF5\uAC04 \uC591\uB05D \uCC44\uC6C0",
  "flex.layout.editor.baseline": "\uAE30\uBCF8\uC120",
  "flex.layout.editor.stretch": "\uD3BC\uCE58\uAE30",
  "flex.layout.editor.direction": "\uBC29\uD5A5",
  "flex.layout.editor.justify-content": "\uCEE8\uD150\uCE20 \uC870\uC815",
  "flex.layout.editor.align-items": "\uC544\uC774\uD15C \uC815\uB82C",
  "flex.layout.editor.align-content": "\uCEE8\uD150\uCE20 \uC815\uB82C",
  "flex.layout.item.property.title": "\uD50C\uB809\uC2A4 \uC544\uC774\uD15C \uC124\uC815",
  "flex.layout.item.property.grow": "\uACF5\uAC04 \uBE44\uC728",
  "flex.layout.item.property.shrink": "\uCD95\uC18C \uBE44\uC728",
  "flex.layout.item.property.basis": "\uCD08\uAE30 \uD06C\uAE30",
  "flex.layout.item.property.none": "\uC5C6\uC74C",
  "flex.layout.item.property.auto": "\uC790\uB3D9",
  "flex.layout.item.property.value": "\uAC12",
  "grid.layout.editor.template.columns": "\uC5F4",
  "grid.layout.editor.column.gap": "\uC5F4 \uAC04\uACA9",
  "grid.layout.editor.template.rows": "\uD589",
  "grid.layout.editor.row.gap": "\uD589 \uAC04\uACA9",
  "grid.box.editor.box.title": "\uC601\uC5ED",
  "grid.box.editor.type": "\uD0C0\uC785",
  "grid.box.editor.repeat": "\uBC18\uBCF5",
  "grid.box.editor.length": "\uAE38\uC774",
  "grid.box.editor.none": "\uC5C6\uC74C",
  "grid.box.editor.auto": "\uC790\uB3D9",
  "grid.box.editor.count": "\uAC1C\uC218",
  "grid.box.editor.value": "\uD06C\uAE30",
  "grid.layout.item.property.title": "\uADF8\uB9AC\uB4DC \uC544\uC774\uD15C \uC124\uC815",
  "grid.layout.item.property.column": "\uC5F4",
  "grid.layout.item.property.row": "\uD589",
  "grid.layout.item.property.start": "\uC2DC\uC791",
  "grid.layout.item.property.End": "\uB05D",
  "grid.layout.item.property.none": "\uC5C6\uC74C",
  "grid.layout.item.property.value": "\uAC12",
  "box.model.property.title": "\uBC15\uC2A4 \uBAA8\uB378",
  "box.model.property.margin": "\uB9C8\uC9C4",
  "box.model.property.padding": "\uD328\uB529",
  "component.items.canvas": "\uCE94\uBC84\uC2A4",
  "component.items.layer": "\uB808\uC774\uC5B4",
  "component.items.3dlayer": "3D \uB808\uC774\uC5B4",
  "component.items.drawing": "\uADF8\uB9AC\uAE30",
  "component.items.custom": "\uC0AC\uC6A9\uC790 \uC815\uC758 \uCEF4\uD3EC\uB10C\uD2B8",
  "component.items.chart": "\uCC28\uD2B8",
  "component.items.plugin": "\uD50C\uB7EC\uADF8\uC778",
  "svg.text.property.title": "SVG Text \uC2A4\uD0C0\uC77C",
  "svg.text.property.textarea": "\uD14D\uC2A4\uD2B8 \uC785\uB825",
  "svg.text.property.size": "\uD3F0\uD2B8 \uD06C\uAE30",
  "svg.text.property.weight": "\uD3F0\uD2B8 \uAD75\uAE30",
  "svg.text.property.style": "\uD3F0\uD2B8 \uC2A4\uD0C0\uC77C",
  "svg.text.property.anchor": "\uD14D\uC2A4\uD2B8 \uC704\uCE58",
  "svg.text.property.family": "\uD3F0\uD2B8 \uAE00\uAF34",
  "svg.text.property.length.adjust": "\uAE38\uC774 \uB300\uC751",
  "svg.text.property.text.length": "\uD14D\uC2A4\uD2B8 \uAE38\uC774",
  "svg.text.property.start.offset": "\uC2DC\uC791 \uC9C0\uC810",
  "fill.picker.popup.title": "\uC0C9 \uCC44\uC6B0\uAE30",
  "gradient.editor.drag.message": "\uB4DC\uB798\uADF8 \uD558\uBA74 \uC911\uC2EC\uC810\uC744 \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  "draw.manager.tolerance": "\uD3EC\uC778\uD2B8 \uD5C8\uC6A9 \uC624\uCC28",
  "pattern.property.title": "\uD328\uD134",
  "pattern.info.popup.title": "\uD328\uD134 \uC815\uBCF4",
  "pattern.info.popup.width": "\uB113\uC774",
  "pattern.info.popup.height": "\uB192\uC774",
  "pattern.info.popup.lineWidth": "\uC120 \uB113\uC774",
  "pattern.info.popup.lineHeight": "\uC120 \uB192\uC774",
  "pattern.info.popup.rotate": "\uD68C\uC804",
  "pattern.info.popup.blend": "\uBE14\uB80C\uB4DC",
  "pattern.info.popup.foreColor": "\uD328\uD134\uC0C9",
  "pattern.info.popup.backColor": "\uBC30\uACBD\uC0C9",
  "stroke.dasharray.editor.add": "\uC810 \uCD94\uAC00",
  "viewport.panning.enable": "space \uB97C \uB204\uB978\uCC44 \uD654\uBA74\uC744 \uB4DC\uB798\uADF8 \uD558\uBA74 \uC601\uC5ED\uC744 \uC6C0\uC9C1\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."
};
var locales = {
  en_US,
  fr_FR,
  ko_KR
};
function defaultMessages(editor) {
  Object.keys(locales).forEach(function(locale) {
    editor.registerI18nMessage(locale, locales[locale]);
  });
}
function propertyEditor(editor) {
  editor.registerElement(__spreadValues({}, propertyEditor$1));
  editor.registerAlias({
    "icon-list-view": "IconListViewEditor",
    "box-shadow": "BoxShadowEditor",
    "text-shadow": "TextShadowEditor",
    component: "ComponentEditor",
    "text-area": "TextAreaEditor",
    text: "TextEditor",
    "color-single": "ColorSingleEditor",
    "cubic-bezier": "CubicBezierEditor",
    path: "PathEditor",
    "clip-path": "ClipPathEditor",
    "color-view": "ColorViewEditor",
    var: "VarEditor",
    "path-data": "PathDataEditor",
    "polygon-data": "PolygonDataEditor",
    "input-array": "InputArrayEditor",
    "stroke-dash-array": "StrokeDashArrayEditor",
    "number-input": "NumberInputEditor",
    "number-range": "NumberRangeEditor",
    "media-progress": "MediaProgressEditor",
    "select-icon": "SelectIconEditor",
    "css-property": "CSSPropertyEditor",
    direction: "DirectionEditor",
    "iteration-count": "IterationCountEditor",
    gradient: "GradientEditor",
    filter: "FilterEditor",
    select: "SelectEditor",
    "blend-select": "BlendSelectEditor",
    range: "RangeEditor",
    "input-range": "InputRangeEditor",
    "color-assets": "ColorAssetsEditor",
    "font-select": "FontSelectEditor"
  });
}
class ColorInformation extends EditorElement {
  template() {
    return `
        <div class="information hex">
            <div ref="$informationChange" class="information-change">
                <button ref="$formatChangeButton" type="button" class="format-change-button">
                    ${iconUse("unfold")}
                </button>
            </div>
            <div class="information-item hex">
                <div class="input-field hex">
                    <input ref="$hexCode" class="input" type="text" />
                    <div class="title">HEX</div>
                </div>
            </div>
            <div class="information-item rgb">
                <div class="input-field rgb-r">
                    <input ref="$rgb_r" class="input" type="number" step="1" min="0" max="255" />
                    <div class="title">R</div>
                </div>
                <div class="input-field rgb-g">
                    <input ref="$rgb_g" class="input" type="number" step="1" min="0" max="255" />
                    <div class="title">G</div>
                </div>
                <div class="input-field rgb-b">
                    <input ref="$rgb_b" class="input" type="number" step="1" min="0" max="255" />
                    <div class="title">B</div>
                </div>          
                <div class="input-field rgb-a">
                    <input ref="$rgb_a" class="input" type="number" step="0.01" min="0" max="1" />
                    <div class="title">A</div>
                </div>                                                            
            </div>
            <div class="information-item hsl">
                <div class="input-field hsl-h">
                    <input ref="$hsl_h" class="input" type="number" step="1" min="0" max="360" />
                    <div class="title">H</div>
                </div>
                <div class="input-field hsl-s">
                    <input ref="$hsl_s" class="input" type="number" step="1" min="0" max="100" />
                    <div class="postfix">%</div>
                    <div class="title">S</div>
                </div>
                <div class="input-field hsl-l">
                    <input ref="$hsl_l" class="input" type="number" step="1" min="0" max="100" />
                    <div class="postfix">%</div>                        
                    <div class="title">L</div>
                </div>
                <div class="input-field hsl-a">
                    <input ref="$hsl_a" class="input" type="number" step="0.01" min="0" max="1" />
                    <div class="title">A</div>
                </div>
            </div>
        </div>
        `;
  }
  get manager() {
    return this.parent.manager;
  }
  setCurrentFormat(format) {
    this.format = format;
    this.initFormat();
  }
  initFormat() {
    var current_format = this.format || "hex";
    ["hex", "rgb", "hsl"].filter((it) => it !== current_format).forEach((formatString) => {
      this.$el.removeClass(formatString);
    });
    this.$el.addClass(current_format);
  }
  nextFormat() {
    var current_format = this.format || "hex";
    var next_format = "hex";
    if (current_format == "hex") {
      next_format = "rgb";
    } else if (current_format == "rgb") {
      next_format = "hsl";
    } else if (current_format == "hsl") {
      if (this.parent.alpha == 1) {
        next_format = "hex";
      } else {
        next_format = "rgb";
      }
    }
    this.format = next_format;
    this.initFormat();
    this.parent.changeFormat(this.format);
  }
  goToFormat(to_format) {
    this.format = to_format;
    if (to_format === "rgb" || to_format === "hsl") {
      this.initFormat();
    }
    this.parent.changeFormat(this.format);
  }
  getFormat() {
    return this.format || "hex";
  }
  changeRgbColor() {
    this.parent.lastUpdateColor({
      type: "rgb",
      r: this.refs.$rgb_r.int(),
      g: this.refs.$rgb_g.int(),
      b: this.refs.$rgb_b.int(),
      a: this.refs.$rgb_a.float()
    });
  }
  changeHslColor() {
    this.parent.lastUpdateColor({
      type: "hsl",
      h: this.refs.$hsl_h.int(),
      s: this.refs.$hsl_s.int(),
      l: this.refs.$hsl_l.int(),
      a: this.refs.$hsl_a.float()
    });
  }
  hasValue(e) {
    if (e.target.value === "") {
      return false;
    }
    return true;
  }
  [INPUT("$rgb_r") + IF("hasValue")]() {
    this.changeRgbColor();
  }
  [INPUT("$rgb_g") + IF("hasValue")]() {
    this.changeRgbColor();
  }
  [INPUT("$rgb_b") + IF("hasValue")]() {
    this.changeRgbColor();
  }
  [INPUT("$rgb_a") + IF("hasValue")]() {
    this.changeRgbColor();
  }
  [INPUT("$hsl_h") + IF("hasValue")]() {
    this.changeHslColor();
  }
  [INPUT("$hsl_s") + IF("hasValue")]() {
    this.changeHslColor();
  }
  [INPUT("$hsl_l") + IF("hasValue")]() {
    this.changeHslColor();
  }
  [INPUT("$hsl_a") + IF("hasValue")]() {
    this.changeHslColor();
  }
  [KEYUP("$hexCode") + IF("hasValue")]() {
    var code = this.refs.$hexCode.val();
    if (code.charAt(0) == "#" && (code.length == 7 || code.length === 9)) {
      this.parent.lastUpdateColor(code);
    }
  }
  [PASTE("$hexCode") + IF("hasValue")]() {
    var code = this.refs.$hexCode.val();
    if (code.charAt(0) == "#" && (code.length == 7 || code.length === 9)) {
      this.parent.lastUpdateColor(code);
    }
  }
  [CLICK("$formatChangeButton")]() {
    this.nextFormat();
  }
  [CLICK("$el .information-item.hex .input-field .title")]() {
    this.goToFormat("hex");
  }
  [CLICK("$el .information-item.rgb .input-field .title")]() {
    this.goToFormat("hsl");
  }
  [CLICK("$el .information-item.hsl .input-field .title")]() {
    this.goToFormat("rgb");
  }
  setRGBInput() {
    this.refs.$rgb_r.val(this.manager.rgb.r);
    this.refs.$rgb_g.val(this.manager.rgb.g);
    this.refs.$rgb_b.val(this.manager.rgb.b);
    this.refs.$rgb_a.val(this.manager.alpha);
  }
  setHSLInput() {
    this.refs.$hsl_h.val(this.manager.hsl.h);
    this.refs.$hsl_s.val(this.manager.hsl.s);
    this.refs.$hsl_l.val(this.manager.hsl.l);
    this.refs.$hsl_a.val(this.manager.alpha);
  }
  setHexInput() {
    this.refs.$hexCode.val(this.manager.toString("hex"));
  }
  setValue() {
    this.refresh();
  }
  refresh() {
    this.setCurrentFormat(this.manager.format);
    this.setRGBInput();
    this.setHSLInput();
    this.setHexInput();
  }
}
class ColorPalette extends EditorElement {
  initState() {
    return {
      hueColor: "rgba(0, 0, 0, 1)",
      s: 0,
      v: 0
    };
  }
  template() {
    return `
        <div class="color-panel">
            <div ref="$saturation" class="saturation">
                <div ref="$value" class="value">
                    <div ref="$drag_pointer" class="drag-pointer"></div>
                </div>
            </div>        
        </div>        
        `;
  }
  afterRender() {
    this.rect = this.$el.rect();
  }
  [BIND("$el")]() {
    return {
      style: {
        "background-color": this.state.hueColor
      }
    };
  }
  [BIND("$drag_pointer")]() {
    if (!this.rect || this.rect.width === 0) {
      this.rect = this.$el.rect();
    }
    const x = this.rect.width * this.state.s;
    const y = this.rect.height * (1 - this.state.v);
    return {
      style: {
        left: x,
        top: y
      }
    };
  }
  [POINTERSTART("$el") + MOVE("movePointer") + END("moveEndPointer")]() {
    this.rect = this.$el.rect();
    this.refreshColorUI();
  }
  movePointer() {
    this.refreshColorUI();
  }
  moveEndPointer() {
    this.parent.changeEndColor();
  }
  refreshColorUI() {
    const e = this.$config.get("bodyEvent");
    const minX = this.rect.left;
    const maxX = this.rect.right;
    const minY = this.rect.top;
    const maxY = this.rect.bottom;
    const currentX = Math.min(maxX, Math.max(minX, e.clientX));
    const currentY = Math.min(maxY, Math.max(minY, e.clientY));
    const width = maxX - minX;
    const height = maxY - minY;
    var s = (currentX - minX) / width;
    var v = (height - (currentY - minY)) / height;
    this.parent.changeColor({
      type: "hsv",
      s,
      v
    });
  }
  setValue(s, v, hueColor) {
    this.setState({
      s,
      v,
      hueColor
    });
  }
}
class ColorView extends EditorElement {
  initState() {
    return {
      value: "rgba(0, 0, 0, 1)"
    };
  }
  template() {
    return `<div class='color'></div>`;
  }
  [BIND("$el")]() {
    return {
      style: {
        "background-color": this.state.value
      }
    };
  }
  setValue(value) {
    this.setState({
      value
    });
  }
}
class Hue extends EditorElement {
  initState() {
    return {
      hue: 0,
      minValue: 0,
      maxValue: 360
    };
  }
  template() {
    return `
            <div class="hue">
                <div ref="$container" class="hue-container">
                    <div ref="$bar" class="drag-bar"></div>
                </div>
            </div>
        `;
  }
  [BIND("$bar")]() {
    const hue = this.state.hue;
    return {
      style: {
        left: Length.makePercent(hue, 360)
      },
      class: [
        "drag-bar",
        {
          first: hue <= this.state.minValue,
          last: hue >= this.state.maxValue
        }
      ]
    };
  }
  [POINTERSTART("$container") + MOVE("movePointer") + END("moveEndPointer")]() {
    this.rect = this.refs.$container.rect();
    this.refreshColorUI();
  }
  movePointer() {
    this.refreshColorUI();
  }
  refreshColorUI() {
    const minX = this.rect.left;
    const maxX = this.rect.right;
    const currentX = Math.max(Math.min(maxX, this.$config.get("bodyEvent").clientX), minX);
    const rate = (currentX - minX) / (maxX - minX);
    this.parent.changeColor({
      h: rate * this.state.maxValue,
      type: "hsv"
    });
  }
  setValue(hue) {
    this.setState({
      hue
    });
  }
}
class Opacity extends EditorElement {
  initState() {
    return {
      colorbar: Color.parse("rgba(0, 0, 0, 1)"),
      opacity: 0,
      minValue: 0,
      maxValue: 100
    };
  }
  template() {
    return `
        <div class="opacity">
            <div ref="$container" class="opacity-container">
                <div ref="$colorbar" class="color-bar"></div>
                <div ref="$bar" class="drag-bar2"></div>
            </div>
        </div>
        `;
  }
  [BIND("$colorbar")]() {
    const rgb = clone$1(this.state.colorbar);
    rgb.a = 0;
    const start2 = Color.format(rgb, "rgb");
    rgb.a = 1;
    const end = Color.format(rgb, "rgb");
    return {
      style: {
        background: `linear-gradient(to right, ${start2}, ${end})`
      }
    };
  }
  [BIND("$bar")]() {
    const opacity = this.state.opacity * 100;
    return {
      style: {
        left: Length.percent(opacity)
      },
      class: [
        "drag-bar2",
        {
          first: opacity <= this.state.minValue,
          last: opacity >= this.state.maxValue
        }
      ]
    };
  }
  [POINTERSTART("$container") + MOVE("movePointer") + END("moveEndPointer")]() {
    this.rect = this.refs.$container.rect();
    this.refreshColorUI();
  }
  movePointer() {
    this.refreshColorUI();
  }
  refreshColorUI() {
    const minX = this.rect.left;
    const maxX = this.rect.right;
    const currentX = Math.max(Math.min(maxX, this.$config.get("bodyEvent").clientX), minX);
    const rate = (currentX - minX) / (maxX - minX);
    this.parent.changeColor({
      a: rate.toFixed(2)
    });
  }
  setValue(colorbar, opacity) {
    this.setState({
      opacity,
      colorbar
    });
  }
}
class ColorManagerV2 {
  constructor() {
    this.initialize();
  }
  initialize() {
    this.state = {
      rgb: {},
      hsl: {},
      hsv: {},
      alpha: 1,
      format: "hex"
    };
  }
  get hsv() {
    return this.state.hsv;
  }
  get rgb() {
    return this.state.rgb;
  }
  get hsl() {
    return this.state.hsl;
  }
  get hex() {
    return this.state.hex;
  }
  get alpha() {
    if (typeof this.state.alpha === "undefined")
      return 1;
    return this.state.alpha;
  }
  get format() {
    return this.state.format;
  }
  changeFormat(format) {
    this.state.format = format;
  }
  initColor(colorObj) {
    this.changeColor(colorObj);
  }
  changeColor(colorObj) {
    colorObj = colorObj || "#FF0000";
    if (typeof colorObj === "string") {
      colorObj = Color.parse(colorObj);
    }
    this.state.alpha = typeof colorObj.a !== "undefined" ? colorObj.a : this.state.alpha;
    this.state.format = colorObj.type != "hsv" ? colorObj.type || this.state.format : this.state.format;
    if (colorObj.type == "hsl") {
      this.state.hsl = __spreadValues(__spreadValues({}, this.state.hsl), colorObj);
      this.state.rgb = Color.HSLtoRGB(this.state.hsl);
      this.state.hsv = Color.HSLtoHSV(colorObj);
    } else if (colorObj.type == "hex") {
      this.state.rgb = __spreadValues(__spreadValues({}, this.state.rgb), colorObj);
      this.state.hsl = Color.RGBtoHSL(this.state.rgb);
      this.state.hsv = Color.RGBtoHSV(colorObj);
    } else if (colorObj.type == "rgb") {
      this.state.rgb = __spreadValues(__spreadValues({}, this.state.rgb), colorObj);
      this.state.hsl = Color.RGBtoHSL(this.state.rgb);
      this.state.hsv = Color.RGBtoHSV(colorObj);
    } else if (colorObj.type == "hsv") {
      this.state.hsv = __spreadValues(__spreadValues({}, this.state.hsv), colorObj);
      this.state.rgb = Color.HSVtoRGB(this.state.hsv);
      this.state.hsl = Color.HSVtoHSL(this.state.hsv);
    }
  }
  getHueColor() {
    return Color.checkHueColor(this.state.hsv.h / 360);
  }
  toString(type) {
    type = type || this.state.format;
    var colorObj = this.state[type] || this.state.rgb;
    return Color.format(__spreadProps(__spreadValues({}, colorObj), { a: this.state.alpha }), type);
  }
  toColor(type) {
    type = (type || this.state.format).toLowerCase();
    return this.toString(type);
  }
}
class ColorPickerEditor extends EditorElement {
  created() {
    this.manager = new ColorManagerV2();
  }
  initState() {
    const value = this.props.value || "rgba(0, 0, 0, 1)";
    this.manager.initColor(value);
    return {
      key: this.props.key,
      value: this.manager.toString()
    };
  }
  updateData(opt = {}) {
    this.setState(opt, false);
    this.modifyColorPicker();
  }
  modifyColorPicker() {
    this.parent.trigger(this.props.onchange, this.props.key, this.state.value, this.props.params);
  }
  initColor(newColor, format) {
    this.manager.changeColor(newColor, format);
    this.refresh();
  }
  changeColor(newColor, format) {
    this.manager.changeColor(newColor, format);
    this.refresh();
    this.updateData({
      value: this.manager.toColor()
    });
  }
  [SUBSCRIBE_SELF("selectColorAssets")](key, color2) {
    this.lastUpdateColor(color2);
  }
  changeFormat(format) {
    this.manager.changeFormat(format);
    this.setState({
      value: this.manager.toColor()
    }, false);
    this.modifyColorPicker();
    this.changeEndColor();
  }
  lastUpdateColor(newColor, format) {
    this.manager.changeColor(newColor, format);
    this.refresh();
    this.setState({
      value: this.manager.toColor()
    }, false);
    this.modifyColorPicker();
    this.changeEndColor();
  }
  changeEndColor() {
    this.parent.trigger(this.props.onchangeend, this.props.key, this.state.value, this.props.params);
  }
  refresh() {
    const color2 = this.manager.toColor();
    this.children.$palette.setValue(this.manager.hsv.s, this.manager.hsv.v, this.manager.getHueColor());
    this.children.$opacity.setValue(this.manager.rgb, this.manager.alpha);
    this.children.$hue.setValue(this.manager.hsv.h);
    this.children.$colorview.setValue(color2);
    this.children.$information.setValue();
  }
  components() {
    return {
      Hue,
      Opacity,
      ColorView,
      Palette: ColorPalette,
      ColorInformation
    };
  }
  template() {
    return `
        <div class='colorpicker sketch inline'>
            <div class='colorpicker-body'>
                ${createComponent("Palette", { ref: "$palette" })}
                <div class="control">
                    ${createComponent("Hue", { ref: "$hue" })}
                    ${createComponent("Opacity", { ref: "$opacity" })}
                    <div class="empty"></div>
                    ${createComponent("ColorView", {
      ref: "$colorview"
    })}                    
                </div>
                ${createComponent("ColorInformation", {
      ref: "$information"
    })}                
                ${this.$context.injectManager.generate("colorpicker")}
                ${createComponent("ColorAssetsEditor", {
      ref: "$colorAsset",
      key: "colorAssets",
      onchange: "selectColorAssets"
    })}
            </div>
        </div>
      `;
  }
}
var ColorPickerPopup$1 = /* @__PURE__ */ (() => ".elf--colorpicker-popup{padding:0 10px;width:244px}.elf--colorpicker-popup .colorpicker{background-color:transparent;border:0;border-radius:0;box-shadow:none}.elf--colorpicker-popup .colorpicker input{border:1px solid hsla(0,0%,87%,.4)!important;color:var(--elf--font-color)!important;text-transform:uppercase}.elf--colorpicker-popup .colorpicker .title{color:var(--elf--font-color)!important}.elf--colorpicker-popup .colorpicker .colorsets{border-top:1px solid var(--elf--border-color)!important}.elf--colorpicker-popup .assets{padding:0 10px}.elf--colorpicker-popup .assets .project-color-list{padding:5px 0}.elf--colorpicker-popup .assets .project-color-list .color-item{background-color:transparent;background-image:linear-gradient(45deg,#8b8b8b 25%,transparent 0),linear-gradient(-45deg,#8b8b8b 25%,transparent 0),linear-gradient(45deg,transparent 75%,#8b8b8b 0),linear-gradient(-45deg,transparent 75%,#8b8b8b 0);background-position:0 0,0 5.5px,5.5px -5.5px,-5.5px 0;background-size:11px 11px;border-radius:3px;display:inline-block;height:16px;margin-bottom:9px;margin-right:9px;overflow:hidden;position:relative;width:16px}.elf--colorpicker-popup .assets .project-color-list .color-item .color-view{bottom:0;left:0;position:absolute;right:0;top:0}.elf--colorpicker-popup .assets .project-color-list .color-item:hover{transform:scale(1.2)}")();
var BasePopup$1 = /* @__PURE__ */ (() => ".elf--popup{background-color:var(--elf--popup-background-color);border-radius:2px;box-shadow:0 1px 5px 0 rgba(0,0,0,.5);color:var(--elf--font-color);display:none;position:absolute;z-index:1000}.elf--popup.compact .popup-body{padding:0 0 5px}.elf--popup .popup-title{border-bottom:1px solid var(--elf--property-border-color);display:flex;font-size:12px;font-weight:700;height:32px;padding:8px;pointer-events:all}.elf--popup .popup-title>*{flex:1 1 auto}.elf--popup .popup-title .tools{align-items:center;display:flex;justify-content:flex-end}.elf--popup .popup-title .tools button{background-color:transparent;border:0;cursor:pointer;padding:0}.elf--popup .popup-title .tools button svg{fill:var(--elf--font-color);height:16px;width:16px}.elf--popup .popup-title label{cursor:move}.elf--popup .popup-body{padding:8px}.elf--popup .popup-body .popup-item{margin-bottom:5px;padding:2px 0}.elf--popup .popup-resizer{background-color:gray;bottom:0;cursor:se-resize;height:10px;position:absolute;right:0;width:10px}")();
class BasePopup extends EditorElement {
  template() {
    return `
    <div class='elf--popup ${this.getClassName()}'>
      <div class='popup-title' ref="$title">
        <label>${this.getTitle()}</label>
        <span class="tools">
          ${this.getTools()}
          <button type='button' class='close' ref='$close'>${iconUse("close")}</button>
        </span>
      </div>
      <div class='popup-body'>${this.getBody()}</div>
      <!--<div class='popup-resizer' ref='$resizer'></div> -->
    </div>
    `;
  }
  getClassName() {
    return "";
  }
  getTitle() {
    return "";
  }
  getTools() {
    return "";
  }
  getBody() {
    return "";
  }
  onClose() {
  }
  [CLICK("$close")]() {
    this.$el.hide();
    this.onClose();
  }
  setTitle(title) {
    this.refs.$title.$("label").text(title);
  }
  [POINTERSTART("$title") + MOVE("movePopupTitle") + END("endPopupTitle")]() {
    this.x = Length.parse(this.$el.css("left"));
    this.y = Length.parse(this.$el.css("top"));
  }
  movePopupTitle(dx, dy) {
    var left = Length.px(this.x.value + dx);
    var top = Length.px(this.y.value + dy);
    this.$el.css({ left, top, right: "auto", bottom: "auto" });
  }
  show(width = 200) {
    var popupPadding = 28;
    var rightPosition = 320;
    var top = this.$el.css("top");
    var left = this.$el.css("left");
    var realTop = top !== "auto" ? Length.parse(top) : 110;
    var realLeft = left !== "auto" ? Length.parse(left) : document.body.clientWidth - rightPosition - popupPadding - width;
    this.$el.css({
      top: Length.px(realTop),
      left: Length.px(realLeft),
      "z-index": this.$editor.zIndex
    }).show("inline-block");
  }
  makeRect(width, height, rect) {
    const elements = this.$config.get("editor.layout.elements");
    const bodyRect = elements.$bodyPanel.rect();
    let left = bodyRect.left + bodyRect.width - width - 10;
    let top = rect.top + height > bodyRect.top + bodyRect.height ? bodyRect.top + bodyRect.height - height - 10 : rect.top;
    if (top < 10) {
      top = 10;
    }
    return {
      top,
      left,
      width,
      height
    };
  }
  showByRect(rect) {
    this.$el.css({
      top: Length.px(rect.top),
      left: Length.px(rect.left),
      width: Length.px(rect.width),
      height: Length.px(rect.height),
      "z-index": this.$editor.zIndex
    }).show("inline-block");
  }
  hide() {
    this.$el.hide();
  }
  [SUBSCRIBE("hidePropertyPopup")]() {
    this.hide();
  }
  [POINTERSTART("$resizer") + MOVE("moveResizer")]() {
    this.width = Length.parse(this.$el.css("width"));
    this.height = Length.parse(this.$el.css("height"));
  }
  moveResizer(dx, dy) {
    this.$el.css({
      width: Math.min(this.width + dx, 1e3),
      height: Math.min(this.height + dy, 700)
    });
  }
}
class ColorPickerPopup extends BasePopup {
  getTitle() {
    return this.$i18n("colorpicker.popup.title");
  }
  getClassName() {
    return "compact elf--colorpicker-popup";
  }
  initState() {
    return {
      color: "rgba(0, 0, 0, 1)"
    };
  }
  updateData(opt = {}) {
    this.setState(opt, false);
    if (this.state.target) {
      this.state.target.trigger(this.state.changeEvent, this.state.color, this.params);
    }
  }
  updateEndData(opt = {}) {
    this.setState(opt, false);
    if (this.state.target) {
      this.state.target.trigger(this.state.changeEndEvent, this.state.color, this.params);
    }
  }
  getBody() {
    return `
    <div>
      <div class='box'>
        ${createComponent("EmbedColorPicker", {
      ref: "$color",
      value: this.state.color,
      onchange: (color2) => this.updateData({ color: color2 }),
      onchangeend: (color2) => this.updateEndData({ color: color2 })
    })}
    </div>
  `;
  }
  [LOAD("$projectColors")]() {
    var project = this.$context.selection.currentProject || { colors: [] };
    var colors = project.colors;
    return colors.map((color2) => {
      return `
      <div class='color-item' title='${color2.name}'>
        <div class='color-view' data-color='${color2.color}' style='background-color: ${color2.color}'></div>
      </div>`;
    });
  }
  [CLICK("$projectColors .color-view")](e) {
    this.updateData({
      color: e.$dt.attr("data-color")
    });
    this.children.$color.setValue(this.state.color);
  }
  [SUBSCRIBE("showColorPickerPopup")](data, params, rect) {
    data.changeEvent = data.changeEvent || "changeFillPopup";
    if (!(data.target instanceof UIElement)) {
      throw new Error("ColorPicker needs data.target");
    }
    this.params = params;
    this.setState(data, false);
    this.children.$color.setValue(this.state.color);
    this.showByRect(this.makeRect(245, 500, rect));
  }
  [SUBSCRIBE("hideColorPickerPopup")]() {
    this.hide();
  }
}
class EmbedColorPicker extends EditorElement {
  initState() {
    return {
      value: this.props.value || "rgba(0, 0, 0, 1)"
    };
  }
  template() {
    return `
        <div class='embed-color-picker'>
          ${createComponent("ColorPickerEditor", {
      ref: "$colorpicker",
      key: "colorpicker",
      value: this.state.value,
      onchange: "localChangeColor",
      onchangeend: "localLastUpdate"
    })}
        </div>
      `;
  }
  [SUBSCRIBE_SELF("localChangeColor")](key, color2) {
    this.parent.trigger(this.props.onchange, color2);
  }
  [SUBSCRIBE_SELF("localLastUpdate")](key, color2) {
    this.parent.trigger(this.props.onchangeend, color2);
  }
  setValue(color2) {
    this.state.value = color2;
    this.children.$colorpicker.initColor(color2);
  }
  refresh() {
    this.children.$colorpicker.initColor(this.props.value);
  }
}
function color(editor) {
  editor.registerElement({
    ColorPickerEditor,
    EmbedColorPicker
  });
  editor.registerUI("popup", {
    ColorPickerPopup
  });
}
var ComponentPopup$1 = /* @__PURE__ */ (() => "")();
class ComponentPopup extends BasePopup {
  getClassName() {
    return "component-property w(800)";
  }
  getTitle() {
    return "Component";
  }
  initState() {
    return {
      title: "",
      inspector: []
    };
  }
  refresh() {
    this.setTitle(this.state.title || this.getTitle());
    this.load();
  }
  getBody() {
    return `
      <div ref='$body'></div>
    `;
  }
  [BIND("$body")]() {
    return {
      style: {
        width: this.state.width || 250
      }
    };
  }
  [LOAD("$body")]() {
    const inspector = this.state.inspector;
    return createComponent("ComponentEditor", {
      inspector,
      onchange: "changeComponent"
    });
  }
  [SUBSCRIBE_SELF("changeComponent")](key, value) {
    if (isFunction(this.state.changeEvent)) {
      this.emit(this.state.changeEvent, key, value);
    }
  }
  [SUBSCRIBE(SHOW_COMPONENT_POPUP)](data) {
    this.setState(data, false);
    this.refresh();
    this.show(data.width);
  }
}
var ComponentProperty$1 = /* @__PURE__ */ (() => "")();
var BaseProperty$1 = /* @__PURE__ */ (() => ".elf--property{--property-order:1000;border-bottom:1px solid var(--elf--property-border-color);box-shadow:0 0 2px 0 hsla(0,0%,100%,.001);display:none;margin-bottom:4px;order:var(--property-order)}.elf--property:first-child{border-top:0}.elf--property.full{display:flex;flex-direction:column;height:100%}.elf--property.full.show{height:100%}.elf--property.full .property-title{flex:none}.elf--property.full .property-body{flex:1 1 auto;overflow:auto;padding-left:0;padding-right:0;position:relative}.elf--property.show{display:block}.elf--property.show>.property-title>label .icon{display:inline-block;transform:rotate(90deg)}.elf--property.show>.property-body{display:block}.elf--property>.property-title{align-items:center;box-sizing:border-box;color:var(--elf--font-color);cursor:pointer;display:flex;height:32px;justify-content:space-between;margin:8px;padding:8px;position:relative}.elf--property>.property-title.filter{grid-template-columns:1fr 110px}.elf--property>.property-title svg{height:16px;width:16px}.elf--property>.property-title label{cursor:pointer;font-size:10px;font-weight:800;letter-spacing:1px;line-height:2;overflow:hidden;padding-left:2px;text-overflow:ellipsis;text-transform:uppercase;vertical-align:middle;white-space:nowrap}.elf--property>.property-title label .icon{display:inline-block;transition:all .1s linear}.elf--property>.property-title label.has-keyframe{padding-left:0}.elf--property>.property-title>.tools{flex:none;text-align:right;vertical-align:middle;white-space:nowrap}.elf--property>.property-title>.tools>*{flex:none}.elf--property>.property-body{box-sizing:border-box;display:none;margin:0 8px;position:relative}.elf--property>.property-body:empty{display:none}.elf--property>.property-body .property-item:first-child{padding-top:0}.elf--property>.property-body .property-item:not(.has-label){background-color:hsla(0,0%,100%,.001)}.elf--property>.property-body .property-item.animation-property-item{display:grid;grid-template-columns:1fr}.elf--property>.property-body .property-item.animation-property-item.has-label{grid-template-columns:80px 1fr}.elf--property>.property-body .property-item.animation-property-item.has-label .group{padding-left:12px;padding-top:5px;vertical-align:middle}.elf--property>.property-body .property-item.animation-property-item.full{display:block}.elf--property>.property-body .property-item.animation-property-item.full .group{padding-left:14px;vertical-align:middle}.elf--property>.property-body .property-item>label.label{background-color:var(--elf--selected-color-2);border-radius:4px;box-sizing:border-box;color:var(--elf--selected-font-color);display:block;padding:5px}.elf--property>.property-footer{padding:0 6px}.elf--property>.property-footer>div{margin-bottom:5px}.elf--property>.property-footer label{cursor:pointer;display:inline-block;padding-left:2px;padding-right:5px;vertical-align:middle;width:60px}")();
class BaseProperty extends EditorElement {
  onToggleShow() {
  }
  template() {
    return `
        <div class='elf--property ${this.isHideHeader() ? "no-title" : ""} ${this.getClassName()} ${this.isFirstShow() ? "show" : ""}'>
            ${this.isHideHeader() ? "" : `
            <div class='property-title ${this.getTitleClassName()}' ref="$title">
                <label class="${this.hasKeyframe() ? "has-keyframe" : ""}"> 
                  ${this.hasKeyframe() ? `
                      <span class='add-timeline-property' data-property='${this.getKeyframeProperty()}'></span>
                    ` : ""} 
                  <span ref='$propertyTitle'>${this.getTitle()}</span>
                </label>
                <span class="tools">${this.getTools()}</span>
            </div>`}
            <div class='property-body ${this.getBodyClassName()}'>${this.getBody()}</div>
            ${this.getFooter() ? `<div class='property-footer'>${this.getFooter()}</div>` : ""}
        </div>
        `;
  }
  [BIND("$el")]() {
    return {
      style: {
        "--property-order": this.order
      }
    };
  }
  setTitle(title) {
    this.refs.$propertyTitle.html(title);
  }
  hasKeyframe() {
    return false;
  }
  isHideHeader() {
    return false;
  }
  isFirstShow() {
    return true;
  }
  getClassName() {
    return "";
  }
  getTitleClassName() {
    return "";
  }
  getBodyClassName() {
    return "";
  }
  getKeyframeProperty() {
    return "";
  }
  getTitle() {
    return "";
  }
  getTools() {
    return "";
  }
  getBody() {
    return "";
  }
  getFooter() {
    return "";
  }
  isPropertyShow() {
    return this.$el.hasClass("show");
  }
  toggle(isShow) {
    this.$el.toggle(isShow);
  }
  hide() {
    this.$el.hide();
  }
  show() {
    this.$el.show();
  }
  onShowTitle() {
  }
  refreshShowIsNot(type = "", isRefresh = true) {
    var current = this.$context.selection.current;
    if (current) {
      if (type.includes(current.itemType)) {
        this.hide();
      } else {
        this.show();
        if (isRefresh)
          this.refresh();
      }
    }
  }
  refreshShow(type, isRefresh = true) {
    var current = this.$context.selection.current;
    if (current) {
      if (isFunction(type) && type()) {
        this.show();
        if (isRefresh)
          this.refresh();
      } else {
        if (!isFunction(type) && type.includes(current.itemType)) {
          this.show();
          if (isRefresh)
            this.refresh();
        } else {
          this.hide();
        }
      }
    } else {
      this.hide();
    }
  }
  startInputEditing(input) {
    if (!input)
      return;
    input.attr("contenteditable", true);
    input.css({
      "background-color": "white",
      outline: "1px auto black",
      color: "black"
    });
    input.focus();
  }
  endInputEditing(input, callback) {
    if (!input)
      return;
    input.attr("contenteditable", false);
    input.css({
      "background-color": null,
      outline: null,
      color: null
    });
    var index2 = input.attr("data-index");
    callback && callback(index2, input.text().trim());
    input.blur();
  }
  get editableProperty() {
    return "";
  }
  get order() {
    return 1e3;
  }
  checkShow() {
    if (!this.$context.selection.current) {
      this.hide();
      return false;
    }
    if (this.$context.selection.current.editable(this.editableProperty)) {
      this.show();
      return true;
    } else {
      this.hide();
      return false;
    }
  }
}
class ComponentProperty extends BaseProperty {
  getClassName() {
    return "component-property";
  }
  getTitle() {
    return "Component";
  }
  isShow() {
    var _a;
    var current = (_a = this.$context.selection) == null ? void 0 : _a.current;
    const inspector = this.$context.components.createInspector(current);
    if (current && (current.is("component") || inspector.length > 0)) {
      return true;
    }
    return false;
  }
  [SUBSCRIBE(REFRESH_SELECTION) + DEBOUNCE(100)]() {
    this.refreshShow(() => {
      const current = this.$context.selection.current;
      const inspector = this.$context.components.createInspector(current);
      return inspector.length > 0;
    });
  }
  refresh() {
    var current = this.$context.selection.current;
    if (current) {
      this.setTitle(current.getDefaultTitle() || current.itemType || current.name);
      this.load();
    }
  }
  getBody() {
    return `
      <div ref='$body'></div>
    `;
  }
  [LOAD("$body")]() {
    var _a;
    var current = (_a = this.$context.selection) == null ? void 0 : _a.current;
    if (!current)
      return "";
    const inspector = this.$context.components.createInspector(current);
    inspector.forEach((it) => {
      if (isString(it)) {
        return;
      }
      let defaultValue = current[it.key] || it.defaultValue;
      if (isFunction(it.convertDefaultValue)) {
        defaultValue = it.convertDefaultValue(current, it.key);
      }
      it.defaultValue = defaultValue;
    });
    return createComponent("ComponentEditor", {
      ref: "$comp",
      inspector,
      onchange: "changeComponentProperty"
    });
  }
  [SUBSCRIBE_SELF("changeComponentProperty")](key, value) {
    this.$commands.executeCommand("setAttribute", "change component : " + key, this.$context.selection.packByValue({
      [key]: value
    }));
  }
}
function component(editor) {
  editor.registerElement({
    ComponentPopup,
    ComponentProperty
  });
}
var blankEditorPlugins = [
  defaultMessages,
  baseEditor,
  propertyEditor,
  configs,
  color,
  component
];
var ContextMenuManager$1 = /* @__PURE__ */ (() => ".elf--context-menu-manger{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.elf--context-menu-manger>*{pointer-events:auto}")();
class ContextMenuManager extends EditorElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--context-menu-manger"
    }, this.$injectManager.generate("context.menu"));
  }
  [SUBSCRIBE(OPEN_CONTEXT_MENU)](obj2) {
    this.$context.config.set("context.menu.open", obj2);
  }
}
const formElements = ["TEXTAREA", "INPUT", "SELECT"];
class KeyboardManager extends EditorElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "keyboard-manager",
      style: "display: none;"
    });
  }
  isNotFormElement(e) {
    var tagName = e.target.tagName;
    if (formElements.includes(tagName))
      return false;
    else if (Dom.create(e.target).attr("contenteditable") === "true")
      return false;
    return true;
  }
  [KEYDOWN("document") + IF("isNotFormElement")](e) {
    this.$commands.emit("keymap.keydown", e);
  }
  [KEYUP("document") + IF("isNotFormElement")](e) {
    this.$commands.emit("keymap.keyup", e);
  }
}
var PopupManager$1 = /* @__PURE__ */ (() => ".elf--popup-manager{bottom:0;left:0;pointer-events:none;position:fixed;right:0;top:0;z-index:99999}.elf--popup-manager>*{pointer-events:all}")();
var NotificationView$1 = /* @__PURE__ */ (() => ".elf--notification-view{display:inline-block;position:absolute;right:10px;top:10px;z-index:10000}.elf--notification-view .item{border-radius:4px;color:#fff;margin-bottom:10px;min-width:300px;opacity:1;padding:10px 20px;position:relative;transition:opacity 10s linear}.elf--notification-view .item .description{padding-top:10px}.elf--notification-view .item .icon{display:inline-block;position:absolute;right:10px;top:10px}.elf--notification-view .item .icon svg path{fill:currentColor}.elf--notification-view .item.alert{background-color:rgba(228,80,80,.87)}.elf--notification-view .item.alert .title{color:#fff;font-weight:700}.elf--notification-view .item.alert .description{color:#fff}")();
class NotificationView extends EditorElement {
  template() {
    return `
            <div class='elf--notification-view'>
            </div>
        `;
  }
  [TRANSITIONEND("$el")](e) {
    Dom.create(e.target).remove();
  }
  [CLICK("$el .item > .icon")](e) {
    e.$dt.parent().remove();
  }
  getMessageTemplate(type, title, description, duration = 1e3) {
    return `
        <div class='item ${type}' style='transition-duration: ${duration}ms;'>
            <div class='title'>${title}</div> 
            <div class='description'>${description}</div>
            <span class='icon'>${iconUse("close")}</span>
        </div>
    `;
  }
  [SUBSCRIBE(SHOW_NOTIFY)](type, title, description, duration = 1e3) {
    const $dom = Dom.createByHTML(this.getMessageTemplate(type, title, description, 1e3));
    this.$el.prepend($dom);
    window.setTimeout(($dom2) => {
      $dom2.css("opacity", 0);
    }, duration, $dom);
  }
}
var BaseWindow$1 = /* @__PURE__ */ (() => ".elf--window-background{background-color:var(--elf--window-background-color);bottom:0;display:none;left:0;position:absolute;right:0;top:0;z-index:10000}.elf--window-background .window{background-color:var(--elf--background-color);border:1px solid var(--elf--border-color);box-shadow:0 0 1px 0 var(--elf--border-color);color:var(--elf--font-color);height:200px;left:50%;padding:14px;position:absolute;top:50%;transform:translate(-50%,-50%);width:200px;z-index:1000}.elf--window-background .window .window-title{border-bottom:1px solid var(--elf--border-color);display:flex;font-size:15px;font-weight:700;height:40px;left:0;margin-bottom:10px;padding:10px;pointer-events:all;position:absolute;right:0;top:0}.elf--window-background .window .window-title>*{flex:1 1 auto}.elf--window-background .window .window-title .tools{text-align:right}.elf--window-background .window .window-title label{cursor:move}.elf--window-background .window .window-body{bottom:0;left:0;position:absolute;right:0;top:40px}")();
class BaseWindow extends EditorElement {
  template() {
    return `
      <div class='elf--window-background'>
        <div class='window ${this.getClassName()}'>
            <div class='window-title' ref="$title">
                <label>${this.getTitle()}</label>
                <span class="tools">
                  ${this.getTools()}
                  <button type='button' class='close' ref='$close'>${iconUse("close")}</button>
                </span>
            </div>
            <div class='window-body'>${this.getBody()}</div>
        </div>
      </div>
        `;
  }
  getClassName() {
    return "";
  }
  getTitle() {
    return "";
  }
  getTools() {
    return "";
  }
  getBody() {
    return "";
  }
  [CLICK("$close")]() {
    this.$el.hide();
  }
  show() {
    this.$el.show("block");
  }
  hide() {
    this.$el.hide();
  }
}
var ShortcutWindow$1 = /* @__PURE__ */ (() => ".elf--shortcut-window{height:80%!important;width:600px!important}.elf--shortcut-window .window-body{overflow:auto}.elf--shortcut-window .list{padding:10px 20px}.elf--shortcut-window .list .item h2{padding-left:10px}.elf--shortcut-window .list .item .shortcut-view-item{display:grid;grid-template-columns:1fr 200px;margin-bottom:2px}.elf--shortcut-window .list .item .shortcut-view-item>*{border-bottom:1px solid var(--elf--border-color);border-right:0;padding:5px 10px;position:relative}.elf--shortcut-window .list .item .shortcut-view-item .title{padding:10px}.elf--shortcut-window .list .item .shortcut-view-item .title .description{color:var(--elf--font-color);opacity:.5}.elf--shortcut-window .list .item .shortcut-view-item .os-item{text-align:right}.elf--shortcut-window .list .item .shortcut-view-item .os-item span{border:1px solid var(--elf--font-color);box-sizing:border-box;display:inline-block;margin:0 2px;padding:4px 6px}")();
const categories = /* @__PURE__ */ new Set();
shortcuts.forEach((it) => {
  categories.add(it.category);
});
const keys = {};
categories.forEach((it) => {
  shortcuts.filter((item) => item.category === it).forEach((item) => {
    if (!keys[item.category]) {
      keys[item.category] = [];
    }
    keys[item.category].push(item);
  });
});
const keyAlias = {
  ARROWRIGHT: "\u2192",
  ARROWLEFT: "\u2190",
  ARROWUP: "\u2191",
  ARROWDOWN: "\u2192",
  BACKSPACE: "\u232B",
  CMD: "\u2318"
};
const OSName = os();
class ShortcutWindow extends BaseWindow {
  getClassName() {
    return "elf--shortcut-window";
  }
  getTitle() {
    return "ShortCuts";
  }
  getKeyString(os2, item) {
    return (item[os2] || item.key).split("+").map((it) => it.trim()).map((it) => {
      const keyString = it.toUpperCase();
      return `<span>${keyAlias[keyString] || keyString}</span>`;
    }).join(" + ");
  }
  getTemplateForShortcutItem(item) {
    return `
            <div class='shortcut-view-item'>
                <div class='title'>${item.description}</div>
                <div class='os-item'>${this.getKeyString(OSName, item)}</div>
            </div>                        
        `;
  }
  getTemplateForCategory(category, list = []) {
    return `
            <div class='item'>
                <h2>${category}</h2>
                <div>
                    ${list.map((it) => this.getTemplateForShortcutItem(it)).join("")}
                </div>
            </div>
        `;
  }
  getTemplateForLayer() {
    return `
            <div class='item'>
                <h2>Layer</h2>
                <div>
                    <div class='shortcut-view-item'>
                        <div class='title'>
                            Add Rect
                            <span class='description'>fdsafdsfdf</span>
                        </div>

                        <div class='os-item mac'><span>CTRL</span>+<span>R</span></div>
                        <div class='os-item win'>R</div>
                        <div class='os-item linux'>R</div>
                    </div>
                </div>
            </div>
        `;
  }
  getBody() {
    return `
        <div class="list">
            ${Object.keys(keys).map((category) => {
      return this.getTemplateForCategory(category, keys[category]);
    }).join("")}
        </div>
        `;
  }
  [SUBSCRIBE("showShortcutWindow")]() {
    this.show();
  }
}
registElement({ ShortcutWindow });
class PopupManager extends EditorElement {
  components() {
    return {
      NotificationView
    };
  }
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--popup-manager"
    }, createComponent("ShortcutWindow"), createComponent("NotificationView"), this.$injectManager.generate("popup", true));
  }
}
class BlankEditor extends BaseLayout {
  afterRender() {
    super.afterRender();
    this.$config.init("editor.layout.elements", this.refs);
  }
  getPlugins() {
    return blankEditorPlugins;
  }
  initState() {
    return {
      leftSize: 340
    };
  }
  getTopPanel() {
    return /* @__PURE__ */ createElementJsx(DefaultLayoutItem, {
      type: "top"
    }, /* @__PURE__ */ createElementJsx(BlankToolBar, {
      ref: "$blankToolbar"
    }));
  }
  getLeftPanel() {
    return /* @__PURE__ */ createElementJsx(DefaultLayoutItem, {
      type: "left",
      resizable: true
    }, /* @__PURE__ */ createElementJsx(BlankLayerTab, {
      ref: "$blankLayerTab"
    }));
  }
  getRightPanel() {
    return /* @__PURE__ */ createElementJsx(DefaultLayoutItem, {
      type: "right"
    }, /* @__PURE__ */ createElementJsx(BlankInspector, {
      ref: "$blankInspector"
    }));
  }
  getBodyPanel() {
    return /* @__PURE__ */ createElementJsx(DefaultLayoutItem, {
      type: "body"
    }, /* @__PURE__ */ createElementJsx(BlankBodyPanel, {
      ref: "$blankBodyPanel"
    }));
  }
  getInnerPanel() {
    return /* @__PURE__ */ createElementJsx(DefaultLayoutItem, {
      type: "inner"
    }, /* @__PURE__ */ createElementJsx(KeyboardManager, {
      ref: "$keyboardManager"
    }));
  }
  getOuterPanel() {
    return /* @__PURE__ */ createElementJsx(DefaultLayoutItem, {
      type: "outer"
    }, /* @__PURE__ */ createElementJsx(PopupManager, {
      ref: "$popupManager"
    }), /* @__PURE__ */ createElementJsx(ContextMenuManager, {
      ref: "$contextManager"
    }));
  }
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf-editor"
    }, /* @__PURE__ */ createElementJsx(DefaultLayout, {
      showLeftPanel: this.$config.get("show.left.panel"),
      showRightPanel: this.$config.get("show.right.panel"),
      leftSize: 340,
      rightSize: 280,
      ref: "$layout"
    }, this.getTopPanel(), this.getLeftPanel(), this.getRightPanel(), this.getBodyPanel(), this.getInnerPanel(), this.getOuterPanel()));
  }
  [CONFIG("show.left.panel")]() {
    this.children.$layout.setOptions({
      showLeftPanel: this.$config.get("show.left.panel")
    });
  }
  [CONFIG("show.right.panel")]() {
    this.children.$layout.setOptions({
      showRightPanel: this.$config.get("show.right.panel")
    });
  }
  refresh() {
    super.refresh();
    this.emit("resizeEditor");
  }
}
class DirectionLength {
  static parse(str) {
    var temp = str.split(" ").filter((it) => it.trim()).map((it) => Length.parse(it));
    var top = Length.percent(0), right = Length.percent(0), bottom = Length.percent(0), left = Length.percent(0);
    if (temp.length === 1) {
      top = temp[0].clone();
      right = temp[0].clone();
      bottom = temp[0].clone();
      left = temp[0].clone();
    } else if (temp.length === 2) {
      top = temp[0].clone();
      right = temp[1].clone();
      bottom = temp[0].clone();
      left = temp[1].clone();
    } else if (temp.length === 3) {
      top = temp[0].clone();
      right = temp[1].clone();
      bottom = temp[2].clone();
      left = temp[1].clone();
    } else if (temp.length === 4) {
      top = temp[0].clone();
      right = temp[1].clone();
      bottom = temp[2].clone();
      left = temp[3].clone();
    }
    return [temp.length, top, right, bottom, left];
  }
}
class ObjectProperty {
  static create(json) {
    return class extends BaseProperty {
      getTitle() {
        return json.title;
      }
      getClassName() {
        return json.className || "item";
      }
      get editableProperty() {
        return json.editableProperty;
      }
      get order() {
        return isUndefined(json.order) ? 1e3 : json.order;
      }
      afterComponentRendering($dom, refName, instance) {
        var _a;
        if (refName == "$comp") {
          const current = ((_a = this.$context.selection) == null ? void 0 : _a.current) || {};
          const inspector = isFunction(json.inspector) ? json.inspector(current) : this.$context.components.createInspector(current, json.editableProperty);
          instance.setInspector(inspector);
        }
      }
      refresh() {
        const current = this.$context.selection.current || {};
        if (current || json.visible) {
          this.setTitle(json.title || current.getDefaultTitle() || current.itemType || current.name);
          this.load();
        }
      }
      [SUBSCRIBE(REFRESH_SELECTION) + IF("checkShow")]() {
        if (json.preventUpdate) {
          if (this.$stateManager.isPointerUp) {
            this.refresh();
          }
        } else {
          this.refresh();
        }
      }
      [LOAD("$body")]() {
        var _a;
        var current = (_a = this.$context.selection) == null ? void 0 : _a.current;
        if (!current && !json.visible)
          return "";
        const inspector = isFunction(json.inspector) ? json.inspector(current || {}) : this.$context.components.createInspector(current || {}, json.editableProperty);
        return createComponent("ComponentEditor", {
          ref: "$comp",
          inspector,
          onchange: "changeComponentProperty"
        });
      }
      getBody() {
        return `<div ref='$body'></div>`;
      }
      [SUBSCRIBE_SELF("changeComponentProperty")](key, value) {
        if (json.action) {
          this.$commands.executeCommand(json.action, `change attribute : ${key}`, key, value);
        } else {
          this.$commands.executeCommand("setAttribute", `change attribute : ${key}`, this.$context.selection.packByValue({
            [key]: value
          }));
        }
      }
    };
  }
}
class ContextDropdownMenu extends DropdownMenuList {
  template() {
    return `
      <div class="dropdown-menu opened flat">
          <ul>
              ${this.props.items.map((child, index2) => makeMenuItem(child, `${this.groupId}-${index2}`)).join("")}
          </ul>
      </div>
    `;
  }
}
var ContextMenuRenderer$1 = /* @__PURE__ */ (() => ".elf--context-menu-renderer>*{display:block!important;width:100%}.elf--context-menu-renderer .dropdown-menu{height:100%}.elf--context-menu-renderer .elf--toolbar-menu-item:hover{background-color:var(--elf--selected-color);color:#fff!important}")();
class ContextMenuRenderer extends EditorElement {
  checkProps(props = {}) {
    return props;
  }
  components() {
    return {
      ContextDropdownMenu,
      ToolbarButtonMenuItem
    };
  }
  template() {
    return `<div class="elf--context-menu-renderer"></div>`;
  }
  [LOAD("$el")]() {
    var _a;
    return (_a = this.props.items) == null ? void 0 : _a.map((item, index2) => {
      return this.renderMenuItem(item, index2);
    });
  }
  renderMenuItem(item, index2) {
    switch (item.type) {
      case MenuItemType.LINK:
        return this.renderLink(item, index2);
      case MenuItemType.SUBMENU:
        return this.renderMenu(item, index2);
      case MenuItemType.BUTTON:
        return this.renderButton(item, index2);
      case MenuItemType.DROPDOWN:
        return this.renderDropdown(item, index2);
      default:
        return this.renderButton(item, index2);
    }
  }
  renderButton(item, index2) {
    return createComponent("ToolbarButtonMenuItem", {
      ref: "$button-" + index2,
      title: item.title,
      icon: item.icon,
      command: item.command,
      shortcut: item.shortcut,
      args: item.args,
      nextTick: item.nextTick,
      disabled: item.disabled,
      selected: item.selected,
      selectedKey: item.selectedKey,
      checked: item.checked,
      action: item.action,
      events: item.events,
      style: item.style
    });
  }
  renderDropdown(item, index2) {
    return createComponent("ContextDropdownMenu", __spreadProps(__spreadValues({
      ref: "$dropdown-" + index2
    }, item), {
      items: item.items,
      icon: item.icon,
      title: item.title,
      events: item.events || []
    }));
  }
}
var ContextMenuView$1 = /* @__PURE__ */ (() => ".elf--context-menu-view{border-radius:4px;display:none;left:0;min-width:240px;position:absolute;top:0;z-index:1000}")();
class ContextMenuView extends EditorElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--context-menu-view"
    });
  }
  [BIND("$el")]() {
    const contextMenuOpenInfo = this.$context.config.get("context.menu.open");
    if (!contextMenuOpenInfo) {
      return;
    }
    return {
      style: {
        left: Length.px(contextMenuOpenInfo.x),
        top: Length.px(contextMenuOpenInfo.y + 10)
      }
    };
  }
  [LOAD("$el")]() {
    const info = this.$context.config.get("context.menu.open");
    if (!info)
      return;
    const items = this.$menu.getTargetMenu(info.target) || [];
    return /* @__PURE__ */ createElementJsx(ContextMenuRenderer, {
      items: [{ type: "dropdown", items: [...items, ...info.items || []] }]
    });
  }
  [CONFIG("context.menu.open")]() {
    this.refresh();
    if (this.$context.config.get("context.menu.open")) {
      this.$el.show();
    } else {
      this.$el.hide();
    }
  }
  close() {
    this.$el.hide();
    this.$context.config.set("context.menu.open", null);
  }
  [POINTERSTART("document")](e) {
    const $target = Dom.create(e.target);
    const $dropdown = $target.closest("elf--context-menu-view");
    if (!$dropdown) {
      this.close();
    } else if ($dropdown.el !== this.$el.el) {
      this.close();
    }
  }
}
function createBlankEditor(opts) {
  return start(BlankEditor, opts);
}
export { ADD_BODY_FIRST_MOUSEMOVE, ADD_BODY_MOUSEMOVE, ADD_BODY_MOUSEUP, BasePopup, BaseProperty, BaseUI, BlankEditor, Button, CSS_TO_STRING, ColorSingleEditor, ColorViewEditor, ComponentEditor, ContextDropdownMenu, ContextMenuView, DefaultLayout, DefaultLayoutItem, DirectionLength, END, END_GUESTURE, EditingMode, Editor, EditorElement, FIRSTMOVE, InputArrayEditor, InputRangeEditor, KEYMAP_KEYDOWN, KEYMAP_KEYUP, KEY_CODE, KeyStringMaker, Language, Length, MOVE, MenuItemType, NotifyType, NumberInputEditor, NumberRangeEditor, OPEN_CONTEXT_MENU, ObjectProperty, POP_MODE_VIEW, PUSH_MODE_VIEW, Position, REFRESH_CONTENT, REFRESH_SELECTION, REFRESH_SELECTION_TOOL, RESIZE_CANVAS, RESIZE_WINDOW, RangeEditor, SET_LOCALE, SHOW_COMPONENT_POPUP, SHOW_NOTIFY, START_GUESTURE, SelectEditor, SelectIconEditor, TOGGLE_FULLSCREEN, TabPanel, Tabs, TextAreaEditor, TextEditor, ToggleButton, ToggleCheckBox, UPDATE_CANVAS, UPDATE_VIEWPORT, ViewModeType, createBlankEditor };
