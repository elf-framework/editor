var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
import { UIElement, classnames, createElementJsx, CLICK, IF, PREVENT, STOP, isFunction, isString, OBSERVER, PARAMS, Dom as Dom$1, POINTEROVER, POINTERLEAVE, POINTERENTER } from "@elf/sapa";
var style = /* @__PURE__ */ (() => ':root{--font-size-h1:32px;--font-size-h2:28px;--font-size-h3:26px;--font-size-h4:22px;--font-size-h5:20px;--font-size-h6:18px;--font-size-display:36px;--font-size-base:16px;--font-size-s:14px;--font-size-xs:12px;--font-light:300;--font-regular:400;--font-semi-bold:600;--font-bold:700;--color-primary:#18a0fb;--elf--primary-color:var(--color-primary);--color-secondary:rgba(0,0,0,.3);--elf--secondary-color:var(--color-secondary);--elf--disabled-color:var(--color-secondary);--elf--primary-destructive-color:#f24822;--elf--border-color:#e6e6e6;--color-primary-hover:#295fd6;--color-primary-selected:rgba(20,110,245,.12);--color-primary-lightest:linear-gradient(hsla(0,0%,100%,.9),hsla(0,0%,100%,.9));--color-focus-outer:#ffd337;--color-focus-inner:var(--color-neutral-10);--color-red-lightest:#faeaea;--color-red-lighter:#e9aaaa;--color-red-light:#d96a6a;--color-red:#c92a2a;--color-red-dark:#ab2424;--color-red-darker:#8d1d1d;--color-red-darkest:#6f1717;--color-orange-lightest:#fef0e6;--color-orange-lighter:#fcc29c;--color-orange-light:#f99551;--color-orange:#f76707;--color-orange-dark:#d25806;--color-orange-darker:#ad4805;--color-orange-darkest:#883904;--color-yellow-lightest:#fef5e5;--color-yellow-lighter:#fbd999;--color-yellow-light:#f8bc4c;--color-yellow:#f59f00;--color-yellow-dark:#d08700;--color-yellow-darker:#ac6f00;--color-yellow-darkest:#875700;--color-lime-lightest:#f1f8e8;--color-lime-lighter:#c7e3a2;--color-lime-light:#9ecd5c;--color-lime:#74b816;--color-lime-dark:#639c13;--color-lime-darker:#51810f;--color-lime-darkest:#40650c;--color-green-lightest:#ebf7ed;--color-green-lighter:#afe0b8;--color-green-light:#73c982;--color-green:#37b24d;--color-green-dark:#2f9741;--color-green-darker:#267d36;--color-green-darkest:#1e622a;--color-teal-lightest:#e6f2ef;--color-teal-lighter:#9cccbd;--color-teal-light:#52a58c;--color-teal:#087f5b;--color-teal-dark:#076c4d;--color-teal-darker:#065940;--color-teal-darkest:#044632;--color-cyan-lightest:#e7f2f4;--color-cyan-lighter:#9eccd3;--color-cyan-light:#56a6b2;--color-cyan:#0d8091;--color-cyan-dark:#0b6d7b;--color-cyan-darker:#095a66;--color-cyan-darkest:#074650;--color-blue-lightest:#e8f2fa;--color-blue-lighter:#a3c9ea;--color-blue-light:#5fa1db;--color-blue:#1a79cb;--color-blue-dark:#1667ad;--color-blue-darker:#12558e;--color-blue-darkest:#0e4370;--color-indigo-lightest:#eceffd;--color-indigo-lighter:#b3c1f7;--color-indigo-light:#7b92f1;--color-indigo:#4263eb;--color-indigo-dark:#3854c8;--color-indigo-darker:#2e45a5;--color-indigo-darkest:#243681;--color-violet-lightest:#f1edfd;--color-violet-lighter:#c6b6f6;--color-violet-light:#9b7fef;--color-violet:#7048e8;--color-violet-dark:#5f3dc5;--color-violet-darker:#4e32a2;--color-violet-darkest:#3e2880;--color-grape-lightest:#f7ecfa;--color-grape-lighter:#dfb2e9;--color-grape-light:#c678d9;--color-grape:#ae3ec9;--color-grape-dark:#9435ab;--color-grape-darker:#7a2b8d;--color-grape-darkest:#60226f;--color-pink-lightest:#fbebf0;--color-pink-lighter:#efadc4;--color-pink-light:#e27098;--color-pink:#d6336c;--color-pink-dark:#b62b5c;--color-pink-darker:#96244c;--color-pink-darkest:#761c3b;--color-neutral-0:#fff;--color-neutral-1:#f8f9fa;--color-neutral-2:#f1f3f5;--color-neutral-3:#e9ecef;--color-neutral-4:#dee2e6;--color-neutral-5:#ced4da;--color-neutral-6:#adb5bd;--color-neutral-7:#6a7178;--color-neutral-8:#4f575e;--color-neutral-9:#272b30;--color-neutral-10:#101213;--color-error-light:#fceaea;--color-error:#dc2020;--color-warning-light:#fdf6e5;--color-warning:#e9a100;--color-success-light:#eaf3eb;--color-success:#29823b;--color-info-light:#e5f5fc;--color-info:#017aad;--overlay-background:rgba(0,0,0,.25);--space-none:0;--space-xs:4px;--space-s:8px;--space-base:16px;--space-m:24px;--space-l:32px;--space-xl:40px;--space-xxl:48px;--border-radius-none:0;--border-radius-soft:4px;--border-radius-rounded:100px;--border-radius-circle:100%;--border-size-none:0;--border-size-s:1px;--border-size-m:2px;--border-size-l:3px;--shadow-none:none;--shadow-xs:0 1px 2px rgba(0,0,0,.1);--shadow-s:0 2px 4px rgba(0,0,0,.1);--shadow-m:0 4px 6px rgba(0,0,0,.1);--shadow-l:0 6px 8px rgba(0,0,0,.1);--shadow-xl:0 8px 10px rgba(0,0,0,.1);--header-color:#fff;--color-background-body:#f3f6f8;--color-background-login:#fff;--header-size:56px;--header-size-content:48px;--side-menu-size:300px;--bottom-bar-size:56px;--footer-height:0px;--os-safe-area-top:env(safe-area-inset-top);--os-safe-area-right:env(safe-area-inset-right);--os-safe-area-bottom:env(safe-area-inset-bottom);--os-safe-area-left:env(safe-area-inset-left)}@-webkit-keyframes bottomtotop{0%{opacity:0;transform:translate(0) translateY(60%) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@keyframes bottomtotop{0%{opacity:0;transform:translate(0) translateY(60%) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@-webkit-keyframes bounce{0%,20%,53%,80%,to{transform:translate(0) translateY(0) translateZ(0)}40%,43%{transform:translate(0) translateY(-30px) translateZ(0)}70%{transform:translate(0) translateY(-15px) translateZ(0)}90%{transform:translate(0) translateY(-4px) translateZ(0)}}@keyframes bounce{0%,20%,53%,80%,to{transform:translate(0) translateY(0) translateZ(0)}40%,43%{transform:translate(0) translateY(-30px) translateZ(0)}70%{transform:translate(0) translateY(-15px) translateZ(0)}90%{transform:translate(0) translateY(-4px) translateZ(0)}}@-webkit-keyframes fadein{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes fadein{0%{opacity:0}20%{opacity:0}to{opacity:1}}@-webkit-keyframes lefttoright{0%{opacity:0;transform:translate(-60%) translateY(0) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@keyframes lefttoright{0%{opacity:0;transform:translate(-60%) translateY(0) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@-webkit-keyframes righttoleft{0%{opacity:0;transform:translate(60%) translateY(0) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@keyframes righttoleft{0%{opacity:0;transform:translate(60%) translateY(0) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@-webkit-keyframes toptobottom{0%{opacity:0;transform:translate(0) translateY(-60%) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@keyframes toptobottom{0%{opacity:0;transform:translate(0) translateY(-60%) translateZ(0)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0)}}@-webkit-keyframes scale{0%{opacity:0;transform:translate(0) translateY(0) translateZ(0) scale(0)}80%{opacity:1;transform:translate(0) translateY(0) translateZ(0) scale(1.2)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0) scale(1)}}@keyframes scale{0%{opacity:0;transform:translate(0) translateY(0) translateZ(0) scale(0)}80%{opacity:1;transform:translate(0) translateY(0) translateZ(0) scale(1.2)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0) scale(1)}}@-webkit-keyframes scaledown{0%{opacity:0;transform:translate(0) translateY(0) translateZ(0) scale(1.5)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0) scale(1)}}@keyframes scaledown{0%{opacity:0;transform:translate(0) translateY(0) translateZ(0) scale(1.5)}to{opacity:1;transform:translate(0) translateY(0) translateZ(0) scale(1)}}@-webkit-keyframes scaleup{0%{opacity:0}to{opacity:1}}@keyframes scaleup{0%{opacity:0}to{opacity:1}}@-webkit-keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@-webkit-keyframes loadingSpinner{0%{transform:rotate(0) translateZ(0)}to{transform:rotate(1turn) translateZ(0)}}@keyframes loadingSpinner{0%{transform:rotate(0) translateZ(0)}to{transform:rotate(1turn) translateZ(0)}}@-webkit-keyframes list-item-scale-animation{0%{opacity:.3;transform:scaleX(0) translateZ(0)}to{opacity:0;transform:scale(400,300) translateZ(0)}}@keyframes list-item-scale-animation{0%{opacity:.3;transform:scaleX(0) translateZ(0)}to{opacity:0;transform:scale(400,300) translateZ(0)}}@-webkit-keyframes ptr-loading{0%{opacity:0;transform:translateY(0) scale(.3)}to{background-color:var(--color-neutral-0);opacity:1;transform:scale(1)}}@keyframes ptr-loading{0%{opacity:0;transform:translateY(0) scale(.3)}to{background-color:var(--color-neutral-0);opacity:1;transform:scale(1)}}@-webkit-keyframes fade{0%,50%{opacity:0}to{opacity:1}}@keyframes fade{0%,50%{opacity:0}to{opacity:1}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.elf--button{--elf--button-border-color:rgba(0,0,0,.8);--elf--button-padding:7px 10px;--elf--button-font-size:var(--elf--font-size,14px);--elf--button-background:transparent;--elf--button-color:rgba(0,0,0,.8);--elf--button-border-radius:4px;--elf--button-disabled-color:var(--elf--disabled-color);background-color:var(--elf--button-background);border:1px solid var(--elf--button-border-color);border-radius:var(--elf--button-border-radius);color:var(--elf--button-color);cursor:pointer;font-size:var(--elf--button-font-size);line-height:16px;padding:var(--elf--button-padding)}.elf--button.elf--button-lg{--elf--button-font-size:16px;--elf--button-padding:12px 20px}.elf--button.elf--button-sm{--elf--button-font-size:12px;--elf--button-padding:3px 5px}.elf--button.elf--button-shape-round{--elf--button-border-radius:8px}.elf--button.elf--button-shape-circle{--elf--button-border-radius:50%}.elf--button[disabled]{--elf--button-background:var(--elf--button-disabled-color)!important;cursor:not-allowed}.elf--button.hover,.elf--button:hover{--elf--button-background:rgba(0,0,0,.06)}.elf--button.primary{--elf--button-background:var(--elf--primary-color);--elf--button-color:#fff;border-width:0}.elf--button.primary.focus{--elf--button-border-color:rgba(0,0,0,.3);border-width:2px}.elf--button.primary[disabled]{--elf--button-background:var(--elf--disabled-color)}.elf--button.primary.destructive{--elf--button-background:var(--elf--primary-destructive-color)}.elf--button.primary.destructive.focus{--elf--button-border-color:rgba(0,0,0,.3);border-width:2px}.elf--button.primary.destructive[disabled]{--elf--button-background:var(--elf--disabled-color)}.elf--button.secondary{--elf--button-background:var(--elf--secondary-color);--elf--button-color:#fff;border:0 solid var(--elf--button-border-color)}.elf--button.secondary[disabled]{--elf--button-background:var(--elf--disabled-color)}.elf--button.outline{--elf--button-background:transparent;--elf--button-color:#000;--elf--button-border-color:#000}.elf--button.outline.focus{--elf--button-border-color:var(--elf--primary-color);border-width:2px}.elf--button.outline[disabled]{--elf--button-border-color:var(--elf--disabled-color);--elf--button-color:var(--elf--disabled-color)}.elf--button.outline.destructive{--elf--button-border-color:var(--elf--primary-destructive-color);color:var(--elf--primary-destructive-color)}.elf--icon-button{--elf--button-background:transparent;--elf--button-color:#000;--elf--button-border-color:#000;background-color:var(--elf--button-background);border:0 solid var(--elf--button-border-color);border-radius:1px;color:var(--elf--button-color);display:flex;height:30px;width:30px}.elf--icon-button.hover,.elf--icon-button:hover{--elf--button-background:rgba(0,0,0,.06)}.elf--icon-button.focus{--elf--button-border-color:var(--elf--primary-color);border-width:2px}.elf--icon-button.disabled,.elf--icon-button[disabled]{--elf--button-background:transparent;cursor:not-allowed;filter:opacity(.5)}.elf--icon-button.active{--elf--button-background:var(--elf--primary-color);--elf--button-color:#fff}.elf--icon-button.active.focus{--elf--button-border-color:rgba(0,0,0,.3);border-width:2px}.elf--option-button{--elf--button-background:transparent;--elf--button-color:#000;--elf--button-border-color:#000;background-color:transparent;border:0 solid var(--elf--button-border-color);border-radius:1px;box-sizing:border-box;color:var(--elf--button-color);cursor:pointer;height:32px;width:32px}.elf--option-button>*{align-items:center;background-color:var(--elf--button-background);display:flex;height:100%;justify-content:center;width:100%}.elf--option-button.hover,.elf--option-button:hover{--elf--button-border-color:rgba(0,0,0,.1)!important;border-width:1px}.elf--option-button.focus{--elf--button-border-color:var(--elf--primary-color)!important;border-width:2px!important}.elf--option-button.disabled,.elf--option-button[disabled]{--elf--button-background:transparent;--elf--button-border-color:transparent!important;border-width:0!important;cursor:not-allowed;filter:opacity(.5)}.elf--option-button.on{--elf--button-background:rgba(0,0,0,.1);--elf--button-color:#000;--elf--button-border-color:transparent;padding:3px}.elf--option-strip{--elf--option-strip-border-color:transparent;border:1px solid var(--elf--option-strip-border-color);border-radius:2px;display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.elf--option-strip.hover,.elf--option-strip:hover{--elf--option-strip-border-color:rgba(0,0,0,.1)}.elf--option-strip.focus{outline:2px solid var(--elf--primary-color)}.elf--option-strip.disabled,.elf--option-strip[disabled]{--elf--option-strip-border-color:transparent;cursor:not-allowed;filter:opacity(.5)}.elf--option-strip.disabled>*,.elf--option-strip[disabled]>*{cursor:not-allowed}.elf--option-strip>*{align-items:center;background-color:var(--elf--button-background);border:0;border-radius:2px;cursor:pointer;display:inline-block;height:24px;justify-content:center;width:24px}.elf--option-strip>.selected{--elf--button-background:rgba(0,0,0,.1);--elf--button-color:#000;--elf--button-border-color:transparent}.elf--icon-button{--elf--icon-button-border-color:rgba(0,0,0,.1);--elf--icon-button-font-size:var(--elf--font-size,14px);--elf--icon-button-background:transparent;--elf--icon-button-color:var(--elf--border-color);--elf--icon-button-border-radius:4px;--elf--icon-button-disabled-color:var(--elf--disabled-color);--elf--icon-button-size:30px;align-items:center;background-color:var(--elf--icon-button-background);border:1px solid var(--elf--icon-button-border-color);border-radius:var(--elf--icon-button-border-radius);color:var(--elf--icon-button-color);cursor:pointer;display:inline-flex;font-size:var(--elf--icon-button-font-size);height:var(--elf--icon-button-size);justify-content:center;padding:0;width:var(--elf--icon-button-size)}.elf--icon-button>svg{color:var(--elf--icon-button-color);height:24px;width:24px}.elf--icon-button>svg path{fill:currentColor}.elf--icon-button.elf--icon-button-lg{--elf--icon-button-size:40px;--elf--icon-button-font-size:16px}.elf--icon-button.elf--icon-button-lg>svg{height:30px;width:30px}.elf--icon-button.elf--icon-button-sm{--elf--icon-button-size:20px;--elf--icon-button-font-size:12px}.elf--icon-button.elf--icon-button-sm>svg{height:20px;width:20px}.elf--icon-button.elf--icon-button-shape-round{--elf--icon-button-border-radius:8px}.elf--icon-button.elf--icon-button-shape-circle{--elf--icon-button-border-radius:50%}.elf--icon-button[disabled]{--elf--icon-button-background:var(--elf--icon-button-disabled-color)!important;cursor:not-allowed}.elf--icon-button.hover,.elf--icon-button:hover{--elf--icon-button-background:rgba(0,0,0,.06)}.elf--icon-button.primary{--elf--icon-button-background:var(--elf--primary-color);--elf--icon-button-color:#fff;border-width:0}.elf--icon-button.primary.focus{--elf--icon-button-border-color:rgba(0,0,0,.3);border-width:2px}.elf--icon-button.primary[disabled]{--elf--icon-button-background:var(--elf--disabled-color)}.elf--icon-button.primary.destructive{--elf--icon-button-background:var(--elf--primary-destructive-color)}.elf--icon-button.primary.destructive.focus{--elf--icon-button-border-color:rgba(0,0,0,.3);border-width:2px}.elf--icon-button.primary.destructive[disabled]{--elf--icon-button-background:var(--elf--disabled-color)}.elf--icon-button.secondary{--elf--icon-button-background:var(--elf--secondary-color);--elf--icon-button-color:#fff;border:0 solid var(--elf--icon-button-border-color)}.elf--icon-button.secondary[disabled]{--elf--icon-button-background:var(--elf--disabled-color)}.elf--icon-button.outline{--elf--icon-button-background:transparent;--elf--icon-button-color:#000;--elf--icon-button-border-color:#000}.elf--icon-button.outline.focus{--elf--icon-button-border-color:var(--elf--primary-color);border-width:2px}.elf--icon-button.outline[disabled]{--elf--icon-button-border-color:var(--elf--disabled-color);--elf--icon-button-color:var(--elf--disabled-color)}.elf--icon-button.outline.destructive{--elf--icon-button-border-color:var(--elf--primary-destructive-color);color:var(--elf--primary-destructive-color)}.elf--menu{--elf--menu-background-color:#222;--elf--menu-border-color:rgba(0,0,0,.1);--elf--menu-box-shadow:0px 2px 7px rgba(0,0,0,.15),0px 5px 17px rgba(0,0,0,.2);--elf--menu-width:224px;--elf--menu-max-width:240px;--elf--menu-item-height:24px;--elf--menu-item-section-title-color:hsla(0,0%,100%,.6);--elf--menu-item-divider-color:hsla(0,0%,100%,.1);--elf--menu-direction-left:100%;--elf--menu-selected-icon-font-size:20px;--elf--menu-item-font-size:14px;--elf--menu-position:absolute;--elf--menu-left:0px;--elf--menu-top:0px;background:var(--elf--menu-background-color);border:.5px solid var(--elf--menu-border-color);border-radius:2px;box-shadow:var(--elf--menu-box-shadow);display:flex;display:inline-block;flex-direction:column;font-size:var(--elf--menu-item-font-size);left:var(--elf--menu-left);margin:0;max-width:var(--elf--menu-width);min-width:var(--elf--menu-width);padding:8px 0;position:var(--elf--menu-position);top:var(--elf--menu-top)}.elf--menu[data-direction=right]{left:auto;right:10px}.elf--menu[data-direction=right] li>.elf--menu{--elf--menu-direction-left:calc(var(--elf--menu-width)*-1)}.elf--menu[data-direction=center]{left:50%;transform:translate(-50%)}.elf--menu.has-state{--elf--menu-width:var(--elf--menu-max-width)}.elf--menu.elf--menu-contextmenu{--elf--menu-position:fixed}.elf--menu li{align-items:center;border-bottom:1px solid var(--elf--menu-border-color);box-sizing:border-box;color:#fff;cursor:pointer;display:flex;height:var(--elf--menu-item-height);margin-left:0;padding:0 16px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.elf--menu li.custom{height:auto;min-height:var(--elf--menu-item-height)}.elf--menu li.custom>*{flex:1 1 auto}.elf--menu li.hover,.elf--menu li:hover:not(.divider):not(.custom):not([disabled]){background-color:var(--elf--primary-color)}.elf--menu li.hover>.elf--menu,.elf--menu li:hover:not(.divider):not(.custom):not([disabled])>.elf--menu{opacity:1;pointer-events:all}.elf--menu li>.state{align-items:center;display:flex;width:16px}.elf--menu li[disabled]{cursor:not-allowed;opacity:.5}.elf--menu li[disabled]>*{pointer-events:none}.elf--menu li>.selected-icon{align-items:center;display:flex;flex:none;font-size:var(--elf--menu-selected-icon-font-size);height:24px;justify-content:flex-start;width:24px}.elf--menu li>.menu-title{flex:1 1 auto}.elf--menu li>.shortcut{--elf--menu-item-font-size:15px;flex:none;letter-spacing:2px}.elf--menu li>.icon{align-items:center;display:flex;flex:none;justify-content:center}.elf--menu li:last-child{border-bottom:0;margin-bottom:0}.elf--menu li.divider{border:1px solid var(--elf--menu-item-divider-color);height:2px;margin-bottom:10px;margin-top:10px;pointer-events:none}.elf--menu li.section-title{align-items:center;color:var(--elf--menu-item-section-title-color);display:flex;font-size:12px;font-weight:400;line-height:16px;padding:0 16px;pointer-events:none}.elf--menu li>.elf--menu{left:var(--elf--menu-direction-left);opacity:0;pointer-events:none;position:absolute;top:-8px}.elf--toolbar{--elf--toolbar-background:#2c2c2c;--elf--toolbar-color:#fff;--elf--toolbar-height:48px;--elf--toolbar-align:space-between;background-color:var(--elf--toolbar-background);color:var(--elf--toolbar-color);display:flex;flex-direction:row;height:var(--elf--toolbar-height);justify-content:var(--elf--toolbar-align)}.elf--toolbar.start{--elf--toolbar-align:flex-start}.elf--toolbar.end{--elf--toolbar-align:flex-end}.elf--toolbar.center{--elf--toolbar-align:center}.elf--toolbar.space-around{--elf--toolbar-align:space-around}.elf--toolbar.space-evenly{--elf--toolbar-align:space-evenly}.elf--tools{--elf--tools-background:#2c2c2c;--elf--tools-arrow-background:#2c2c2c;--elf--tools-hover-background:#000;--elf--tools-color:#fff;--elf--tools-height:48px;--elf--tools-min-width:40px;--elf--tools-min-width-scale:10px;color:var(--elf--tools-color);display:inline-flex;flex-direction:row;height:var(--elf--tools-height)}.elf--tools,.elf--tools>.elf--tools-item{background-color:var(--elf--tools-background)}.elf--tools>.elf--tools-item{display:flex;min-width:var(--elf--tools-min-width);position:relative}.elf--tools>.elf--tools-item.has-items{min-width:calc(var(--elf--tools-min-width) + var(--elf--tools-min-width-scale))}.elf--tools>.elf--tools-item.custom{align-items:center;cursor:pointer;justify-content:center;padding:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.elf--tools>.elf--tools-item>.menu-area>.arrow{border-bottom:5px solid var(--elf--tools-arrow-background);border-left:5px solid transparent;border-right:5px solid transparent;border-top:0;display:inline-block;height:0;left:50%;position:absolute;top:100%;transform:translate(-50%) translateY(.5px);width:0;z-index:1}.elf--tools>.elf--tools-item>button{align-items:center;background-color:transparent;border:0;color:var(--elf--tools-color);display:inline-flex;height:100%;justify-content:center;pointer-events:none;width:100%}.elf--tools>.elf--tools-item>button>.icon>svg{height:20px;width:20px}.elf--tools>.elf--tools-item>button>.icon>svg path{fill:currentColor}.elf--tools>.elf--tools-item>button>.arrow{margin-left:2px;pointer-events:all}.elf--tools>.elf--tools-item>button>.arrow>svg{height:12px;pointer-events:none;transition:transform .1s ease-in-out;width:12px}.elf--tools>.elf--tools-item>button>.arrow>svg path{fill:currentColor}.elf--tools>.elf--tools-item>button>.arrow.opened>svg,.elf--tools>.elf--tools-item>button>.arrow:hover>svg{transform:translateY(2px)}.elf--tools>.elf--tools-item.hover,.elf--tools>.elf--tools-item:hover{--elf--tools-background:var(--elf--tools-hover-background)}.elf--tools>.elf--tools-item.selected{--elf--tools-background:var(--elf--primary-color)}.elf--notification{--elf--notification-background:#222;--elf--notification-hover-color:var(--color-neutral-10);--elf--notification-color:var(--color-neutral-0);--elf--notification-border-color:rgba(0,0,0,.1);--elf--notification-box-shadow:0px 2px 7px rgba(0,0,0,.15),0px 5px 17px rgba(0,0,0,.2);--elf--notification-tools-border-color:hsla(0,0%,100%,.19);--elf--notification-border-radius:5px;--elf--notification-position:absolute;--elf--notification-hgap:10px;--elf--notification-vgap:10px;background-color:var(--elf--notification-background);border:.5px solid var(--elf--notification-border-color);border-radius:var(--elf--notification-border-radius);box-shadow:var(--elf--notification-box-shadow);color:var(--elf--notification-color);display:flex;height:60px;position:var(--elf--notification-position);width:320px}.elf--notification.elf--notification-direction-top-left{left:var(--elf--notification-vgap);top:var(--elf--notification-hgap)}.elf--notification.elf--notification-direction-top-right{right:var(--elf--notification-vgap);top:var(--elf--notification-hgap)}.elf--notification.elf--notification-direction-bottom-left{bottom:var(--elf--notification-hgap);left:var(--elf--notification-vgap)}.elf--notification.elf--notification-direction-bottom-right{bottom:var(--elf--notification-hgap);right:var(--elf--notification-vgap)}.elf--notification.elf--notification-direction-center{left:50%;top:50%;transform:translate(-50%) translateY(-50%)}.elf--notification.elf--notification-direction-top{left:50%;top:var(--elf--notification-hgap);transform:translate(-50%)}.elf--notification.elf--notification-direction-bottom{bottom:var(--elf--notification-hgap);left:50%;transform:translate(-50%)}.elf--notification.elf--notification-direction-left{left:var(--elf--notification-vgap);top:50%;transform:translateY(-50%)}.elf--notification.elf--notification-direction-right{right:var(--elf--notification-vgap);top:50%;transform:translateY(-50%)}.elf--notification .elf--notification-icon{align-items:center;display:flex;flex:none;justify-content:center;width:48px}.elf--notification .elf--notification-icon>svg{height:24px;width:24px}.elf--notification .elf--notification-icon>svg path{fill:var(--elf--notification-color)}.elf--notification .elf--notification-content{align-items:center;display:flex;flex:1 1 auto}.elf--notification .elf--notification-tools{border-left:1px solid var(--elf--notification-tools-border-color);box-sizing:border-box;display:flex;flex:none;flex-direction:column;overflow:hidden;width:72px}.elf--notification .elf--notification-tools>*{align-items:center;background-color:transparent;border:0;border-bottom:1px solid var(--elf--notification-tools-border-color);border-radius:0;box-sizing:border-box;display:flex;flex:1 1 auto;font-size:12px;font-weight:400;justify-content:center}.elf--notification .elf--notification-tools>:hover{background-color:var(--elf--notification-hover-color)}.elf--notification .elf--notification-tools>:first-child{border-top-right-radius:var(--elf--notification-border-radius)}.elf--notification .elf--notification-tools>:last-child{border-bottom:0;border-bottom-right-radius:var(--elf--notification-border-radius)}.elf--visual-bell{--elf--visual-bell-background:#222;--elf--visual-bell-hover-color:var(--color-neutral-10);--elf--visual-bell-color:var(--color-neutral-0);--elf--visual-bell-border-color:rgba(0,0,0,.1);--elf--visual-bell-box-shadow:0px 2px 7px rgba(0,0,0,.15),0px 5px 17px rgba(0,0,0,.2);--elf--visual-bell-tools-border-color:hsla(0,0%,100%,.19);--elf--visual-bell-border-radius:5px;--elf--visual-bell-position:fixed;--elf--visual-bell-hgap:40px;--elf--visual-bell-vgap:40px;background-color:var(--elf--visual-bell-background);border-radius:var(--elf--visual-bell-border-radius);box-shadow:var(--elf--visual-bell-box-shadow);box-sizing:border-box;color:var(--elf--visual-bell-color);display:flex;height:36px;padding:10px 0;position:var(--elf--visual-bell-position)}.elf--visual-bell.elf--visual-bell-direction-top-left{left:var(--elf--visual-bell-vgap);top:var(--elf--visual-bell-hgap)}.elf--visual-bell.elf--visual-bell-direction-top-right{right:var(--elf--visual-bell-vgap);top:var(--elf--visual-bell-hgap)}.elf--visual-bell.elf--visual-bell-direction-bottom-left{bottom:var(--elf--visual-bell-hgap);left:var(--elf--visual-bell-vgap)}.elf--visual-bell.elf--visual-bell-direction-bottom-right{bottom:var(--elf--visual-bell-hgap);right:var(--elf--visual-bell-vgap)}.elf--visual-bell.elf--visual-bell-direction-center{left:50%;top:50%;transform:translate(-50%) translateY(-50%)}.elf--visual-bell.elf--visual-bell-direction-top{left:50%;top:var(--elf--visual-bell-hgap);transform:translate(-50%)}.elf--visual-bell.elf--visual-bell-direction-bottom{bottom:var(--elf--visual-bell-hgap);left:50%;transform:translate(-50%)}.elf--visual-bell.elf--visual-bell-direction-left{left:var(--elf--visual-bell-vgap);top:50%;transform:translateY(-50%)}.elf--visual-bell.elf--visual-bell-direction-right{right:var(--elf--visual-bell-vgap);top:50%;transform:translateY(-50%)}.elf--visual-bell>*{align-items:center;display:flex;justify-content:center}.elf--visual-bell .elf--visual-bell-content{padding:0 16px}.elf--visual-bell .elf--visual-bell-tools>*{align-items:center;background-color:transparent;border:0;border-left:1px solid var(--elf--visual-bell-tools-border-color);border-radius:0;box-sizing:border-box;display:flex;flex:1 1 auto;font-size:11px;font-weight:600;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.elf--visual-bell .elf--visual-bell-tools>:hover{background-color:var(--elf--visual-bell-hover-color)}.elf--visual-bell .elf--visual-bell-tools>:last-child{border-bottom-right-radius:var(--elf--visual-bell-border-radius);border-top-right-radius:var(--elf--visual-bell-border-radius)}.elf--dialog{--elf--dialog-position:"relative";--elf--dialog-width:240px;--elf--dialog-background:#fff;--elf--dialog-border-color:rgba(0,0,0,.2);--elf--dialog-box-shadow:0px 2px 14px rgba(0,0,0,.15);--elf--dialog-border-radius:2px;background-color:var(--elf--dialog-background);border:.5px solid var(--elf--dialog-border-color);border-radius:var(--elf--dialog-border-radius);box-shadow:var(--elf--dialog-box-shadow);display:block;opacity:0;position:var(--elf--dialog-position);transition:all .2s ease-in-out;width:var(--elf--dialog-width)}.elf--dialog.visible{opacity:1}.elf--dialog.center{left:50%;top:50%;transform:translate(-50%) translateY(-50%)}.elf--dialog>.elf--dialog-title{align-items:center;border-bottom:1px solid var(--elf--dialog-border-color);box-sizing:border-box;display:flex;height:40px}.elf--dialog>.elf--dialog-title>.elf--dialog-title-text{align-items:center;display:flex;flex:1 1 auto;font-weight:600;padding-left:16px}.elf--dialog>.elf--dialog-title>.elf--dialog-title-tools{align-items:center;-moz-column-gap:2px;column-gap:2px;display:flex;flex:none;justify-content:center}.elf--dialog>.elf--dialog-title>.elf--dialog-title-close{align-items:center;cursor:pointer;display:flex;flex:none;font-size:24px;font-weight:200;height:32px;justify-content:center;width:32px}.elf--dialog>.elf--dialog-content{padding:16px}.elf--dialog>.elf--dialog-content>.full{margin:-8px;padding:8px 16px}.elf--dialog>.elf--dialog-content>.elf--dialog-content-tools{align-items:center;-moz-column-gap:8px;column-gap:8px;display:flex;justify-content:flex-end;margin-top:16px;position:relative}.elf--dialog>.elf--dialog-content>.elf--dialog-content-tools>.panel{align-items:center;-moz-column-gap:8px;column-gap:8px;display:flex;flex:1 1 auto;justify-content:flex-end}.elf--dialog>.elf--dialog-content>.elf--dialog-content-tools>.panel.left{justify-content:flex-start}.elf--modal{--elf--modal-width:240px;--elf--modal-background:#fff;--elf--modal-border-color:rgba(0,0,0,.2);--elf--modal-box-shadow:0px 2px 14px rgba(0,0,0,.15);--elf--modal-border-radius:2px;background-color:var(--elf--modal-background);border:.5px solid var(--elf--modal-border-color);border-radius:var(--elf--modal-border-radius);box-shadow:var(--elf--modal-box-shadow);width:var(--elf--modal-width)}.elf--modal>.elf--modal-title{align-items:center;box-sizing:border-box;display:flex;padding:16px}.elf--modal>.elf--modal-title>.elf--modal-title-text{align-items:center;display:flex;flex:1 1 auto;font-weight:600}.elf--modal>.elf--modal-content{padding:0 16px 16px}.elf--modal>.elf--modal-content>.full{margin:-8px;padding:8px 16px}.elf--modal>.elf--modal-content>.elf--modal-content-tools{align-items:center;-moz-column-gap:8px;column-gap:8px;display:flex;justify-content:flex-end;margin-top:16px;position:relative}.elf--modal>.elf--modal-content>.elf--modal-content-tools>.panel{align-items:center;-moz-column-gap:8px;column-gap:8px;display:flex;flex:1 1 auto;justify-content:flex-end}.elf--modal>.elf--modal-content>.elf--modal-content-tools>.panel.left{justify-content:flex-start}.elf--panel{--elf--panel-background-color:#fff;--elf--panel-color:#000;--elf--panel-border-color:transparent;--elf--panel-width:240px;--elf--panel-min-width:var(--elf--panel-width);--elf--panel-border-radius:0px;--elf--panel-box-shadow:0px 2px 14px rgba(0,0,0,.15);background-color:var(--elf--panel-background-color);border:1px solid var(--elf--panel-border-color);border-radius:var(--elf--panel-border-radius);box-sizing:border-box;color:var(--elf--panel-color);min-width:var(--elf--panel-min-width);padding:0;width:var(--elf--panel-width)}.elf--panel[data-theme=dark]{--elf--panel-background-color:#000;--elf--panel-color:#fff}.elf--panel[disabled]{cursor:not-allowed}.elf--panel[disabled]>*{filter:opacity(.5);pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.elf--panel.elf--panel-mode-stroke{--elf--panel-border-color:var(--elf--border-color);--elf--panel-border-radius:2px;box-shadow:var(--elf--panel-box-shadow)}.elf--panel>.elf--panel-title{align-items:center;border-bottom:1px solid var(--elf--panel-border-color);box-sizing:border-box;display:flex;padding:8px 16px}.elf--panel>.elf--panel-title>.elf--panel-title-text{align-items:center;color:var(--elf--panel-color);display:flex;flex:1 1 auto;font-weight:600}.elf--panel>.elf--panel-title>.elf--panel-title-tools{align-items:center;-moz-column-gap:2px;column-gap:2px;display:flex;flex:none;justify-content:center}.elf--panel>.elf--panel-title>.elf--panel-title-tools>*{border:0;padding:0}.elf--panel>.elf--panel-content{padding:16px}.elf--panel>.elf--panel-footer{padding:8px 16px}.elf--tooltip{--elf--tooltip-background:#222;--elf--tooltip-hover-color:var(--color-neutral-10);--elf--tooltip-color:var(--color-neutral-0);--elf--tooltip-border-color:rgba(0,0,0,.1);--elf--tooltip-box-shadow:0px 2px 7px rgba(0,0,0,.15),0px 5px 17px rgba(0,0,0,.2);--elf--tooltip-tools-border-color:hsla(0,0%,100%,.19);--elf--tooltip-border-radius:2px;--elf--tooltip-position:fixed;--elf--tooltip-hgap:10px;--elf--tooltip-vgap:10px;--elf--tooltip-arrow-background:var(--elf--tooltip-background);--elf--tooltip-delay:.5s;display:inline-block;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.elf--tooltip>.elf--tooltip-message{-webkit-animation:fadein var(--elf--tooltip-delay) ease-in-out;animation:fadein var(--elf--tooltip-delay) ease-in-out;background-color:var(--elf--tooltip-background);border-radius:var(--elf--tooltip-border-radius);box-shadow:var(--elf--tooltip-box-shadow);box-sizing:border-box;color:var(--elf--tooltip-color);display:inline-block;font-size:13px;padding:8px 14px;position:absolute}.elf--tooltip>.elf--tooltip-message>.arrow{border-bottom:5px solid var(--elf--tooltip-arrow-background);border-left:5px solid transparent;border-right:5px solid transparent;border-top:0;display:inline-block;height:0;left:50%;position:absolute;top:100%;transform:translate(-50%) translateY(.5px);width:0;z-index:1}.elf--tooltip.elf--tooltip-position-top-left>.elf--tooltip-message{bottom:calc(100% + var(--elf--tooltip-hgap));right:100%;transform:translate(20px)}.elf--tooltip.elf--tooltip-position-top-left>.elf--tooltip-message>.arrow{border-bottom:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--elf--tooltip-arrow-background);left:auto;right:5px;transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-top-right>.elf--tooltip-message{bottom:calc(100% + var(--elf--tooltip-hgap));left:100%;transform:translate(-20px)}.elf--tooltip.elf--tooltip-position-top-right>.elf--tooltip-message>.arrow{border-bottom:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--elf--tooltip-arrow-background);left:10px;transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-bottom-left>.elf--tooltip-message{right:100%;top:calc(100% + var(--elf--tooltip-hgap));transform:translate(25px)}.elf--tooltip.elf--tooltip-position-bottom-left>.elf--tooltip-message>.arrow{left:auto;right:5px;top:-5px;transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-bottom-right>.elf--tooltip-message{left:100%;top:calc(100% + var(--elf--tooltip-hgap));transform:translate(-20px)}.elf--tooltip.elf--tooltip-position-bottom-right>.elf--tooltip-message>.arrow{left:10px;right:auto;top:-5px;transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-top>.elf--tooltip-message{bottom:calc(100% + var(--elf--tooltip-hgap));left:50%;transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-top>.elf--tooltip-message>.arrow{border-bottom:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--elf--tooltip-arrow-background);transform:translate(-50%) translateY(0)}.elf--tooltip.elf--tooltip-position-bottom>.elf--tooltip-message{left:50%;top:calc(100% + var(--elf--tooltip-hgap));transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-bottom>.elf--tooltip-message>.arrow{top:-5px;transform:translate(-50%)}.elf--tooltip.elf--tooltip-position-left>.elf--tooltip-message{right:100%;top:50%;transform:translateY(-50%) translate(calc(var(--elf--tooltip-vgap)*-1))}.elf--tooltip.elf--tooltip-position-left>.elf--tooltip-message>.arrow{border-bottom:5px solid transparent;border-left:5px solid var(--elf--tooltip-arrow-background);border-right:0;border-top:5px solid transparent;left:calc(100% - var(--elf--tooltip-vgap));top:50%;transform:translate(var(--elf--tooltip-vgap)) translateY(-50%)}.elf--tooltip.elf--tooltip-position-right>.elf--tooltip-message{left:100%;top:50%;transform:translateY(-50%) translate(var(--elf--tooltip-vgap))}.elf--tooltip.elf--tooltip-position-right>.elf--tooltip-message>.arrow{border-bottom:5px solid transparent;border-left:0;border-right:5px solid var(--elf--tooltip-arrow-background);border-top:5px solid transparent;left:calc(0px - var(--elf--tooltip-vgap)/2);top:50%;transform:translate(0) translateY(-50%)}\n')();
const NumberStyleKeys = {
  width: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  maxWidth: true,
  maxHeight: true,
  minWidth: true,
  minHeight: true,
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  border: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true
};
function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }
  return value;
}
function propertyMap(styles, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key] || key] = styleMap(key, styles[key]);
  });
  return styleObj;
}
class Button extends UIElement {
  template() {
    const { type, size, disabled, shape, style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames([
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        },
        {
          "elf--button-lg": size === "large",
          "elf--button-sm": size === "small"
        },
        {
          "elf--button-shape-circle": shape === "circle",
          "elf--button-shape-round": shape === "round"
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style2, {
        borderColor: "--elf--button-border-color",
        backgroundColor: "--elf--button-background",
        disabledColor: "--elf--button-disabled-color",
        color: "--elf--button-color",
        fontSize: "--elf--button-font-size",
        fontWeight: "--elf--button-font-weight",
        height: "--elf--button-height",
        padding: "--elf--button-padding",
        borderRadius: "--elf--button-border-radius"
      }))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({}, styleObject), {
      onClick: this.props.onClick
    }), /* @__PURE__ */ createElementJsx("span", null, this.props.content || ""));
  }
}
class IconButton extends UIElement {
  template() {
    const {
      type,
      icon,
      content = "",
      size,
      disabled,
      shape,
      style: style2 = {}
    } = this.props;
    const styleObject = {
      class: classnames([
        "elf--icon-button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        },
        {
          "elf--icon-button-lg": size === "large",
          "elf--icon-button-sm": size === "small"
        },
        {
          "elf--icon-button-shape-circle": shape === "circle",
          "elf--icon-button-shape-round": shape === "round"
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style2, {
        borderColor: "--elf--icon-button-border-color",
        backgroundColor: "--elf--icon-button-background",
        disabledColor: "--elf--icon-button-disabled-color",
        color: "--elf--icon-button-color",
        fontSize: "--elf--icon-button-font-size",
        fontWeight: "--elf--icon-button-font-weight",
        height: "--elf--icon-button-height",
        padding: "--elf--icon-button-padding",
        borderRadius: "--elf--icon-button-border-radius"
      }))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({
      type: "button"
    }, styleObject), {
      onClick: this.props.onClick
    }), icon || content || "");
  }
}
const MenuItemType = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom"
};
function makeMenuItem(items = [], rootClose) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    if (isString(it) && it === "-") {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, {
        ref,
        rootClose
      });
    } else if (isFunction(it)) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, {
        ref: `custom${index}`,
        render: it,
        rootClose
      });
    } else if (it.type === MenuItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, __spreadProps(__spreadValues({
        ref
      }, it), {
        rootClose
      }));
    } else if (it.type === MenuItemType.GROUP) {
      return /* @__PURE__ */ createElementJsx(GroupMenuItem, __spreadProps(__spreadValues({
        ref
      }, it), {
        rootClose
      }));
    } else if (it.type === MenuItemType.DIVIDER) {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, __spreadProps(__spreadValues({
        ref
      }, it), {
        rootClose
      }));
    }
    return /* @__PURE__ */ createElementJsx(MenuItem, __spreadProps(__spreadValues({
      ref
    }, it), {
      rootClose
    }));
  });
}
function DividerMenuItem({ dashed = false }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "divider",
    dashed
  });
}
function CustomMenuItem({ render, rootClose }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "custom"
  }, render == null ? void 0 : render({ rootClose }));
}
function GroupMenuItem({ title = "" }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "section-title"
  }, title);
}
class MenuItem extends UIElement {
  initState() {
    const {
      title = "",
      hover = false,
      shortcut,
      icon,
      items = [],
      disabled = false,
      selectable,
      selected,
      selectedIcon = "\u2713",
      closable = true,
      rootClose
    } = this.props;
    return {
      title,
      hover,
      shortcut,
      icon,
      items,
      selectable,
      selected,
      selectedIcon,
      disabled,
      closable,
      rootClose
    };
  }
  template() {
    const {
      title = "",
      shortcut,
      icon = "\u25B6",
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon,
      disabled,
      rootClose
    } = this.state;
    const hasItems = items.length > 0;
    return /* @__PURE__ */ createElementJsx("li", {
      class: classnames({
        hover
      }),
      disabled: disabled ? true : void 0
    }, selectable ? /* @__PURE__ */ createElementJsx("span", {
      class: "selected-icon"
    }, selected ? selectedIcon : void 0) : null, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-title"
    }, title) : void 0, shortcut ? /* @__PURE__ */ createElementJsx("div", {
      class: "shortcut"
    }, shortcut) : void 0, icon && hasItems ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon) : void 0, items.length > 0 ? /* @__PURE__ */ createElementJsx(Menu, {
      items,
      rootClose
    }) : void 0);
  }
  checkClickable() {
    if (this.state.disabled) {
      return false;
    }
    const { type = MenuItemType.ITEM, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }
  [CLICK("$el") + IF("checkClickable") + PREVENT + STOP](e) {
    var _a, _b;
    const { selectable = false, onClick, closable = true } = this.props;
    if (selectable) {
      this.setSelected(!this.selected);
    }
    if (isFunction(onClick)) {
      onClick(e, this);
    }
    if (closable) {
      (_b = (_a = this.props).rootClose) == null ? void 0 : _b.call(_a);
    }
  }
  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected
    });
  }
  get selected() {
    return this.state.selected;
  }
}
class Menu extends UIElement {
  initState() {
    return {
      intersectionLeft: 0
    };
  }
  template() {
    let { style: style2 = {}, type = "menu", x = 0, y = 0, direction = "left", items = [], rootClose } = this.props;
    let itemStyle = __spreadValues({}, style2);
    if (x !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { left: x });
    if (y !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { top: y });
    const styleObject = {
      "data-direction": direction,
      class: classnames("elf--menu", {
        "elf--menu-contextmenu": type === "contextmenu"
      }),
      style: __spreadValues({}, propertyMap(itemStyle, {
        left: "--elf--menu-left",
        top: "--elf--menu-top",
        backgroundColor: "--elf--menu-background",
        color: "--elf--menu-color",
        fontSize: "--elf--menu-font-size",
        fontWeight: "--elf--menu-font-weight",
        height: "--elf--menu-height",
        padding: "--elf--menu-padding",
        borderRadius: "--elf--menu-border-radius",
        borderColor: "--elf--menu-border-color",
        boxShadow: "--elf--menu-box-shadow",
        width: "--elf--menu-width",
        maxWidth: "--elf--menu-max-width",
        sectionTitleColor: "--elf--menu-section-title-color",
        sectionTitleBackgroundColor: "--elf--menu-section-title-background-color",
        dividerColor: "--elf--menu-divider-color",
        directionLeft: "--elf--menu-direction-left"
      }))
    };
    return /* @__PURE__ */ createElementJsx("menu", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeMenuItem(items, rootClose));
  }
  [OBSERVER("intersection") + PARAMS({
    root: document.body
  })](intersects = []) {
    const item = intersects.find((it) => it.isIntersecting && it.intersectionRatio < 1);
    if (item) {
      const { left: bLeft, right: bRight } = item.boundingClientRect;
      const { left: iLeft, right: iRight } = item.intersectionRect;
      let direction = "left";
      if (iRight != bRight && iLeft != bLeft) {
        direction = "center";
      } else if (iRight != bRight) {
        direction = "right";
      }
      this.$el.attr("data-direction", direction);
    }
  }
}
class Dialog extends UIElement {
  initState() {
    const { visible = false, style: style2 = {}, center } = this.props;
    return {
      visible,
      style: style2,
      center
    };
  }
  close() {
    const { onClose } = this.props;
    if (isFunction(onClose)) {
      onClose(this);
    }
  }
  ok() {
    const { onOk } = this.props;
    if (isFunction(onOk)) {
      onOk(this);
    }
  }
  cancel() {
    const { onCancel } = this.props;
    if (isFunction(onCancel)) {
      onCancel(this);
    }
  }
  makeDefaultTools() {
    const { footer, cancelText = "Cancel", okText = "OK" } = this.props;
    if (!footer) {
      return [
        /* @__PURE__ */ createElementJsx(Button, {
          onClick: () => this.cancel()
        }, cancelText),
        /* @__PURE__ */ createElementJsx(Button, {
          type: "primary",
          onClick: () => this.ok()
        }, okText)
      ];
    }
    return "";
  }
  template() {
    const { style: style2 = {}, visible, center } = this.state;
    const styleObject = {
      class: classnames("elf--dialog", {
        visible,
        center
      }),
      style: __spreadValues({}, propertyMap(style2, {
        position: "--elf--dialog-position",
        backgroundColor: "--elf--dialog-background",
        color: "--elf--dialog-color",
        fontSize: "--elf--dialog-font-size",
        fontWeight: "--elf--dialog-font-weight",
        height: "--elf--dialog-height",
        padding: "--elf--dialog-padding",
        borderRadius: "--elf--dialog-border-radius",
        borderColor: "--elf--dialog-border-color",
        boxShadow: "--elf--dialog-box-shadow",
        width: "--elf--dialog-width"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-text"
    }, "Dialog"), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-tools",
      ref: "$tools"
    }, this.props.tools || void 0), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-close",
      ref: "$close"
    }, "\xD7")), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-text"
    }, this.props.content || ""), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content-tools"
    }, this.props.footer ? this.props.footer : this.makeDefaultTools())));
  }
  [CLICK("$close")]() {
    this.close();
  }
}
const ToolsItemType = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom"
};
function makeToolsItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type}-${index}`;
    if (it.type === ToolsItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(ToolsCustomItem, __spreadValues({
        ref
      }, it));
    }
    if (it.type === ToolsItemType.MENU) {
      return /* @__PURE__ */ createElementJsx(ToolsMenuItem, __spreadValues({
        ref
      }, it));
    }
    return /* @__PURE__ */ createElementJsx(ToolsItem, __spreadValues({
      ref
    }, it));
  });
}
class ToolsItem extends UIElement {
  initialize() {
    super.initialize();
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => {
          this.refresh();
        });
      });
    }
  }
  initState() {
    const { title = "", icon, selected } = this.props;
    return {
      title,
      icon,
      selected
    };
  }
  template() {
    const { title = "", icon } = this.state;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tools-item", {
        selected: this.selected ? true : void 0
      }),
      onClick: this.props.onClick
    }, /* @__PURE__ */ createElementJsx("button", {
      type: "button"
    }, icon ? /* @__PURE__ */ createElementJsx("span", {
      class: "icon"
    }, icon) : title ? /* @__PURE__ */ createElementJsx("span", {
      class: "menu-title"
    }, title) : void 0));
  }
  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected
    });
  }
  get selected() {
    if (isFunction(this.state.selected)) {
      return this.state.selected();
    }
    return this.state.selected;
  }
  set selected(value) {
    this.setSelected(value);
  }
}
class ToolsCustomItem extends ToolsItem {
  template() {
    var _a, _b;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tools-item custom"
    }, (_b = (_a = this.props).render) == null ? void 0 : _b.call(_a));
  }
}
class ToolsMenuItem extends ToolsItem {
  initState() {
    const { title = "", icon, selected, disabled, opened, items, direction, menuStyle } = this.props;
    return {
      title,
      icon,
      selected,
      opened,
      items,
      direction,
      disabled,
      menuStyle,
      rootClose: this.close.bind(this)
    };
  }
  template() {
    const { title = "", icon, disabled, items = [], opened = false, direction = "left", rect, menuStyle } = this.state;
    const hasItems = items.length > 0;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tools-item", {
        selected: this.selected ? true : void 0,
        "has-items": hasItems
      }),
      disabled
    }, /* @__PURE__ */ createElementJsx("button", {
      type: "button"
    }, icon ? /* @__PURE__ */ createElementJsx("span", {
      class: "icon"
    }, icon) : title ? /* @__PURE__ */ createElementJsx("span", {
      class: "menu-title"
    }, title) : void 0, hasItems ? /* @__PURE__ */ createElementJsx("span", {
      class: classnames("arrow", { opened })
    }, /* @__PURE__ */ createElementJsx("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ createElementJsx("path", {
      d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    }))) : void 0), opened && !disabled ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), /* @__PURE__ */ createElementJsx(Menu, {
      ref: "$menu",
      items,
      direction,
      rootClose: this.state.rootClose,
      style: __spreadProps(__spreadValues({}, menuStyle || {}), {
        top: "calc(100% + 5px)"
      })
    })) : void 0);
  }
  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }
  open() {
    this.setState({
      rect: this.$el.rect(),
      opened: true
    });
  }
  close() {
    this.setState({
      opened: false
    });
  }
  toggle() {
    if (!this.state.opened) {
      this.setState({
        rect: this.$el.rect()
      }, false);
    }
    this.setState({
      opened: !this.state.opened
    });
  }
  checkClickable(e) {
    const $menu = Dom$1.create(e.target).closest("menu-area");
    if ($menu)
      return false;
    return true;
  }
  checkTriggerClick() {
    const { trigger = "click" } = this.props;
    return trigger === "click";
  }
  checkTriggerOver() {
    return this.props.trigger === "hover";
  }
  [POINTEROVER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }
  checkNotInMenu(e) {
    const $menu = Dom$1.create(e.target).closest("elf--tools-item");
    if (!$menu)
      return true;
    return this.$el.is($menu) === false;
  }
  [POINTERLEAVE("$el") + IF("checkTriggerOver")](e) {
    this.close();
  }
  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")](e) {
    this.close();
  }
  [CLICK("$el") + IF("checkClickable") + IF("checkTriggerClick")](e) {
    if (Dom$1.create(e.target).hasClass("arrow")) {
      this.toggle();
      if (this.state.opened) {
        this.runCallback(this.props.onOpen, e);
      } else {
        this.runCallback(this.props.onClose, e);
      }
    } else {
      this.close();
      this.runCallback(this.props.onClick, e);
    }
  }
}
class Tools extends UIElement {
  template() {
    const { style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames("elf--tools"),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--tools-background",
        color: "--elf--tools-color",
        height: "--elf--tools-height"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeToolsItem(this.props.items));
  }
}
function makeToolbarItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    return /* @__PURE__ */ createElementJsx(ToolbarItem, __spreadValues({
      ref
    }, it));
  });
}
class ToolbarItem extends UIElement {
  template() {
    const { items, style: style2 } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolbar-item"
    }, /* @__PURE__ */ createElementJsx(Tools, {
      ref: "$tools",
      items,
      style: style2
    }));
  }
}
class Toolbar extends UIElement {
  template() {
    const { style: style2 = {}, align, items = [] } = this.props;
    const styleObject = {
      class: classnames("elf--toolbar", {
        [align]: true
      }),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--toolbar-background",
        color: "--elf--toolbar-color",
        height: "--elf--toolbar-height",
        align: "--elf--toolbar-align"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeToolbarItem(items));
  }
}
class Notification extends UIElement {
  template() {
    const { style: style2 = {}, icon, content, direction = "top-left" } = this.props;
    const styleObject = {
      class: classnames("elf--notification", `elf--notification-direction-${direction}`),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--notification-background",
        color: "--elf--notification-color",
        height: "--elf--notification-height",
        hoverColor: "--elf--notification-hover-color",
        borderColor: "--elf--notification-border-color",
        boxShadow: "--elf--notification-box-shadow",
        toolsBorderColor: "--elf--notification-tools-border-color",
        toolsBorderRadius: "--elf--notification-tools-border-radius"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-text"
    }, content)), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-tools"
    }, this.props.tools || []));
  }
}
class VisualBell extends UIElement {
  template() {
    const { style: style2 = {}, content, direction = "bottom" } = this.props;
    const styleObject = {
      class: classnames("elf--visual-bell", `elf--visual-bell-direction-${direction}`),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--visual-bell-background",
        color: "--elf--visual-bell-color",
        height: "--elf--visual-bell-height",
        hoverColor: "--elf--visual-bell-hover-color",
        borderColor: "--elf--visual-bell-border-color",
        boxShadow: "--elf--visual-bell-box-shadow",
        toolsBorderColor: "--elf--visual-bell-tools-border-color",
        toolsBorderRadius: "--elf--visual-bell-tools-border-radius",
        hgap: "--elf--visual-bell-hgap",
        vgap: "--elf--visual-bell-vgap"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({
      class: "elf--visual-bell"
    }, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--visual-bell-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--visual-bell-text"
    }, content)), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--visual-bell-tools"
    }, this.props.tools || []));
  }
}
class Tooltip extends UIElement {
  initState() {
    return {
      trigger: this.props.trigger || "hover",
      show: this.props.show || false
    };
  }
  template() {
    const { style: style2 = {}, message = "", content, position = "bottom" } = this.props;
    const { show } = this.state;
    const styleObject = {
      class: classnames("elf--tooltip", `elf--tooltip-position-${position}`),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--tooltip-background",
        color: "--elf--tooltip-color",
        height: "--elf--tooltip-height",
        hoverColor: "--elf--tooltip-hover-color",
        borderColor: "--elf--tooltip-border-color",
        boxShadow: "--elf--tooltip-box-shadow",
        toolsBorderColor: "--elf--tooltip-tools-border-color",
        toolsBorderRadius: "--elf--tooltip-tools-border-radius",
        hgap: "--elf--tooltip-hgap",
        vgap: "--elf--tooltip-vgap",
        delay: "--elf--tooltip-delay"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({
      class: "elf--tooltip"
    }, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tooltip-content"
    }, content), show || this.props.show ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tooltip-message"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolltip-message-content"
    }, message)) : void 0);
  }
  open() {
    this.setState({
      show: true
    });
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");
    if ($menu)
      return false;
    return true;
  }
  checkTriggerClick() {
    return this.state.trigger === "click";
  }
  checkTriggerOver() {
    return this.state.trigger === "hover";
  }
  [POINTERENTER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }
  checkNotInTooltip(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");
    if (!$menu)
      return true;
    return this.$el.is($menu) === false;
  }
  [POINTERLEAVE("$el") + IF("checkTriggerOver")](e) {
    this.close();
  }
  [CLICK("$el") + IF("checkClickable") + IF("checkTriggerClick")](e) {
    this.toggle();
  }
}
class Panel extends UIElement {
  template() {
    const { style: style2 = {}, content, theme, title = "", tools = [], mode, footer } = this.props;
    const styleObject = {
      class: classnames("elf--panel", `elf--panel-mode-${mode}`),
      "data-theme": theme,
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--panel-background",
        color: "--elf--panel-color",
        height: "--elf--panel-height",
        hoverColor: "--elf--panel-hover-color",
        borderColor: "--elf--panel-border-color",
        boxShadow: "--elf--panel-box-shadow",
        padding: "--elf--panel-padding",
        borderRadius: "--elf--panel-border-radius"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), title ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-title"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-title-text"
    }, title), tools ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-title-tools"
    }, tools || []) : void 0) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-content"
    }, content), footer ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-footer"
    }, footer) : void 0);
  }
}
export { Button, Dialog, IconButton, Menu, Notification, Panel, Toolbar, ToolbarItem, Tools, ToolsCustomItem, ToolsMenuItem, Tooltip, VisualBell };
