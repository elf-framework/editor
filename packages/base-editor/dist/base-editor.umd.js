(function(c,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("@elf-framework/sapa"),require("@elf-framework/ui")):typeof define=="function"&&define.amd?define(["exports","@elf-framework/sapa","@elf-framework/ui"],n):(c=typeof globalThis<"u"?globalThis:c||self,n(c.baseEditor={},c.sapa,c.ui))})(this,function(c,n,y){"use strict";const _="",S=[{command:"keymap.keydown",execute:function(s,t){s.keyboard.add(t.code,t.keyCode,t),s.shortcuts&&s.shortcuts.execute(t,"keydown")}},{command:"keymap.keyup",execute:function(s,t){s.shortcuts&&s.shortcuts.execute(t,"keyup")}},{command:"toggle.theme",execute:function(s){var t=s.configs.get("editor.theme");s.configs.set("editor.theme",t==="light"?"dark":"light")}}],I=[{key:"editor.theme",defaultValue:"light",title:"Editor Theme ",description:"Set editor's theme",type:"string"}];class b{constructor(t){this.editorContext=t,this.localCommands={}}loadCommands(t={}){Object.keys(t).forEach(e=>{n.isFunction(t[e])?this.registerCommand(e,t[e]):this.registerCommand(t[e])})}registerCommand(t,e){if(this.localCommands[t])throw new Error(`command ${t} is already registered`);if(arguments.length===2){const i=(...r)=>e.call(this,this.editorContext,...r);i.source=t,this.localCommands[t]=i}else if(n.isObject(t)){if(!t.command)throw new Error("command is required",t);if(!t.execute)throw new Error("callback is required",t);const i=(...r)=>t.execute.call(t,this.editorContext,...r);i.source=t.command,this.localCommands[t.command]=i}}getCallback(t){return typeof t=="function"?t:this.localCommands[t]}execute(t,...e){const i=this.getCallback(t);if(!i)throw new Error("command is not registered : "+t);return i(...e)}}class w{constructor(t){this.editorContext=t,this.configList=[],this.config=new Map}get(t){var e;return this.config.has(t)===!1&&this.config.set(t,(e=this.configList.find(i=>i.key==t))==null?void 0:e.defaultValue),this.config.get(t)}set(t,e){const i=this.config.get(t);i!==e&&(this.config.set(t,e),this.editorContext.emit("config:"+t,e,i))}push(t,e){const r=this.get(t).length;return this.setIndexValue(t,r,e),r}setIndexValue(t,e,i){const r=this.get(t);r[e]=i,this.set(t,[...r])}getIndexValue(t,e){return this.get(t)[e]}removeByIndex(t,e){const i=this.get(t);i.splice(e,1),this.set(t,[...i])}init(t,e){this.set(t,e,!1)}setAll(t){Object.keys(t).forEach(e=>{this.set(e,t[e])})}getType(t){var e;return(e=this.configList.find(i=>i.key==t))==null?void 0:e.type}isType(t,e){return this.getType(t)===e}isBoolean(t){return this.isType(t,"boolean")}toggle(t){this.set(t,!this.get(t))}toggleWith(t,e,i){this.get(t)===e?this.set(t,i):this.set(t,e)}true(t){return this.get(t)===!0}false(t){return this.get(t)===!1}is(t,e){return this.get(t)===e}remove(t){this.config.delete(t),this.editorContext.emit("config:"+t)}registerConfig(t){this.config.set(t.key,t.defaultValue),this.configList.push(t)}updateConfig(t,e=!1){Object.entries(t).forEach(([i,r])=>{e?this.set(i,r):this.config.set(i,r)})}}class T{constructor(t){this.editorContext=t,this.locales={},this.fallbackLang="en_US"}getLang(t=void 0){return t||this.fallbackLang}setFallbackLang(t){this.fallbackLang=t}get(t,e={},i=void 0){var u,f;const r=this.getLang(i),o=((u=this.locales[r])==null?void 0:u[t])||((f=this.locales[this.fallbackLang])==null?void 0:f[t])||t||void 0;if(n.isFunction(o))return o(e);{let l=o;return t===l?t.split(".").pop():(Object.entries(e).forEach(([N,G])=>{l=l.replace(new RegExp(`{${N}}`,"ig"),G)}),l)}}hasKey(t,e=void 0){const i=this.getLang(e);return!!(this.locales[i][t]||this.locales[this.fallbackLang][t])}registerI18nMessage(t,e){this.locales[t]||(this.locales[t]={}),Object.assign(this.locales[t],e)}}class k{constructor(t){this.editorContext=t,this.codeSet=new Set,this.keyCodeSet=new Set,this.event={}}add(t,e,i){this.codeSet.has(t)===!1&&this.codeSet.add(t),this.keyCodeSet.has(e)===!1&&this.keyCodeSet.add(e),this.event=i}remove(t,e){this.codeSet.delete(t),this.keyCodeSet.delete(e)}hasKey(t){return this.codeSet.has(t)||this.keyCodeSet.has(t)}check(...t){return t.some(e=>this.hasKey(e))}isShift(){return Boolean(this.event.shiftKey)}isCtrl(){return Boolean(this.event.ctrlKey)}isAlt(){return Boolean(this.event.altKey)}isMeta(){return Boolean(this.event.metaKey)}}class v{constructor(t,e,i){this.editor=t,this.callback=e,this.options=i,this.isActivated=!1,this.ret=null}async initialize(){const t=await this.callback(this.editor,this.options);return this.isActivated=!0,t}async activate(){return this.isActivated?this.ret:(this.ret=await this.initialize(),this.ret)}deactivate(){this.isActivated=!1}}class K{constructor(t){this.editorContext=t,this.plugins=[]}registerPlugin(t,e={}){this.plugins.push(new v(this.editorContext,t,e))}async initializePlugin(){return await Promise.all(this.plugins.map(async t=>{try{return await t.activate()}catch(e){console.error(e);return}}))}async activate(){await this.initializePlugin()}}let d={name:void 0};function m(){return d.name===void 0&&(window.navigator.appVersion.indexOf("Win")!=-1?d.name="win":window.navigator.appVersion.indexOf("Mac")!=-1?d.name="mac":window.navigator.appVersion.indexOf("X11")!=-1?d.name="linux":d.name=""),d.name}const L={backspace:8,tab:9,enter:13,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,semicolon:59,equals:61,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,multiply:106,add:107,subtract:109,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,comma:188,",":188,period:190,".":190,slash:191,"/":191,backquote:192,"`":192,openbracket:219,"[":219,backslash:220,"\\":220,closebracket:221,"]":221,quote:222,"'":222,altgr:225};m();const a={ALT:"ALT",CMD:"CMD",META:"META",CTRL:"CTRL",SHIFT:"SHIFT",SPACE:"SPACE",BACKSPACE:"BACKSPACE"};function x(s){return L[`${s}`.toLowerCase()]||s}function g(...s){return s.filter(Boolean).join("+")}class U{constructor(t){this.editorContext=t,this.loadShortCuts()}getGeneratedKeyCode(t){return x(t)}loadShortCuts(){this.list=[],this.commands={}}makeShortcutCommandFunction(t){return typeof t=="function"?(...e)=>t(this.editorContext,...e):t}registerShortcut(t){const e=m(),i={key:"",args:[],eventType:"keydown",priority:10,preventDefault:!1,stopPropagation:!1,isDisabled:!1,container:null,...t,command:this.makeShortcutCommandFunction(t.command),checkKeyString:this.splitShortCut(t[e]||t.key),whenFunction:this.makeWhenFunction(t.command,t.when||!0)};this.list.push(i),this.updateCommandInfo(i)}makeWhenFunction(t,e){if(n.isBoolean(e)&&e)return()=>!0;const i=this.editorContext,r=e.split("|").map(o=>o.trim());return()=>r.some(o=>i.context.modeViewManager.isCurrentMode(o))}updateCommandInfo(t){Array.isArray(this.commands[t.checkKeyString])===!1&&(this.commands[t.checkKeyString]=[]),this.commands[t.checkKeyString].push(t)}sort(){this.commands={},this.list.forEach(t=>{this.updateCommandInfo(t)})}splitShortCut(t){var e=t.toUpperCase().split("+").map(l=>l.trim()).filter(Boolean);let i=!1,r=!1,o=!1,u=!1,f=[];return e.forEach(l=>{l.includes(a.ALT)?i=!0:l.includes(a.CTRL)?r=!0:l.includes(a.SHIFT)?o=!0:l.includes("CMD")||l.includes("WIN")||l.includes(a.META)?u=!0:f.push(l)}),g(i?a.ALT:"",r?a.CTRL:"",o?a.SHIFT:"",u?a.META:"",x(f.join("")))}makeKeyString(t){var e;return g(t.altKey?a.ALT:"",t.ctrlKey?a.CTRL:"",t.shiftKey?a.SHIFT:"",t.metaKey?a.META:"",(e=t.key)==null?void 0:e.toUpperCase())}makeCodeString(t){var e;return g(t.altKey?a.ALT:"",t.ctrlKey?a.CTRL:"",t.shiftKey?a.SHIFT:"",t.metaKey?a.META:"",(e=t.code)==null?void 0:e.toUpperCase())}makeKeyCodeString(t){return g(t.altKey?a.ALT:"",t.ctrlKey?a.CTRL:"",t.shiftKey?a.SHIFT:"",t.metaKey?a.META:"",t.keyCode)}checkShortCut(t,e,i){return this.commands[t]||this.commands[e]||this.commands[i]}checkWhen(t){return t.whenFunction()}execute(t,e="keydown"){let i=this.checkShortCut(this.makeKeyCodeString(t),this.makeKeyString(t),this.makeCodeString(t));if(i){const r=i.filter(o=>o.eventType===e).filter(o=>this.checkWhen(o));r.length&&r.forEach(o=>{if(o.container){if(n.isString(o.container)){if(!t.target.matches(o.container))return}else if(o.container instanceof HTMLElement&&!o.container.contains(t.target))return}o.preventDefault&&t.preventDefault(),o.stopPropagation&&t.stopPropagation(),this.editorContext.commands.execute(o.command,...o.args)})}}}class A{constructor(t){this.editorContext=t,this.uis={},this.groupUis={}}registerUI(t={}){Object.assign(this.uis,t)}registerGroupUI(t,e={}){this.groupUis[t]||(this.groupUis[t]={}),Object.assign(this.groupUis[t],e)}createUI(t){if(t instanceof n.VNode)return t;if(n.isArray(t)){const[e,i]=t;return n.createElementJsx(e,i)}return n.createElementJsx(t)}getUI(t){if(this.uis[t])return this.createUI(this.uis[t])}getGroupUI(t){return Object.values(this.groupUis[t]||{}).map(i=>this.createUI(i)).filter(Boolean)}}const M="EditorContext";class O{constructor(t,e={}){this.$rootEditor=t,this.$options=e,this.isPluginActivated=!1,this.initialize()}initialize(){const{managers:t={},configList:e=[],commands:i=[],plugins:r=[]}=this.$options;this.initializeManagers(t),this.initializeConfigs(I),this.initializeConfigs(e),this.initializeInnerCommands(),this.initializeCommands(i),this.initializePlugins(r),this.emit("editor.initialize",this)}initializeManagers(t={}){t={configs:w,commands:b,plugins:K,uis:A,shortcuts:U,keyboard:k,i18n:T,...t},Object.entries(t).forEach(([e,i])=>{if(Object.hasOwnProperty.call(this,e)){console.warn(`[EditorContext] ${e} manager is already exists.`);return}Object.defineProperty(this,e,{enumerable:!1,configurable:!1,writable:!1,value:new i(this)})})}initializeConfigs(t=[]){t.forEach(e=>{this.configs.registerConfig(e)})}updateConfigs(t={}){this.configs.updateConfig(t)}initializeInnerCommands(){this.initializeCommands(S)}initializeCommands(t=[]){t.forEach(e=>{this.commands.registerCommand(e)})}initializePlugins(t=[]){t.forEach(e=>{this.plugins.registerPlugin(e)})}async activate(){const t=await this.plugins.activate();return this.isPluginActivated=!0,this.updateConfigs(this.$options.configs),t}get $store(){return this.$rootEditor.$store}emit(t,...e){this.$store.source=M,this.$store.emit(t,...e)}registerCommand(t){this.commands.registerCommand(t)}registerUI(t){this.uis.registerUI(t)}registerGroupUI(t,e){this.uis.registerGroupUI(t,e)}registerConfig(t){this.configs.registerConfig(t)}registerShortcut(t){this.shortcuts.registerShortcut(t)}registerI18nMessage(t,e){this.i18n.registerI18nMessage(t,e)}registerI18nMessageWithLang(t){Object.keys(t).forEach(e=>{this.registerI18nMessage(e,t[e])})}getUI(t){return this.uis.getUI(t)}getGroupUI(t){return this.uis.getGroupUI(t)}getUIList(t){return[this.getUI(t),this.getGroupUI(t)].flat(1/0).filter(Boolean)}getConfig(t){return this.configs.get(t)}}const p="editor",C="editorOption";class P{constructor(t,e={}){this.editor=t,this.props=e}initialize(){}load(){}activate(){}deactivate(){}}function h(){return n.useStore(p)}function z(s){var t;return(t=n.useStore(C))==null?void 0:t[s]}function $(s){var t,e;return(e=(t=h())==null?void 0:t.configs)==null?void 0:e.get(s)}function B(s,t){var e,i;return(i=(e=h())==null?void 0:e.configs)==null?void 0:i.set(s,t)}async function F(s,...t){var e,i;return await((i=(e=h())==null?void 0:e.commands)==null?void 0:i.emit(s,...t))}function j(s,t={}){var e,i;return(i=(e=h())==null?void 0:e.i18n)==null?void 0:i.get(s,t)}class E extends n.UIElement{initialize(){super.initialize(),this.$editor=new O(this,this.props),this.$store.set(p,this.$editor),this.$store.set(C,this.props);const{configs:t}=this.props;this.$editor.updateConfigs(t),this.activate()}async activate(){await this.$editor.activate(),this.emit("editor.plugin.activated"),this.trigger("editor.plugin.activated")}}const R=["TEXTAREA","INPUT","SELECT"];class V extends E{template(){const{editorClass:t,fullScreen:e}=this.props;n.useComponentRender("editor.plugin.activated");const i=h(),r=n.useMemo(()=>n.classnames("elf--base-editor",{"full-screen":e,[t]:!0}),[t,e]);return n.createElementJsx("div",{class:r},i.isPluginActivated?i.getUIList("renderView"):void 0)}isNotFormElement(t){var e=t.target.tagName;return R.includes(e)?!1:t.target.getAttribute("contenteditable")!=="true"}updateTheme(){const t=this.$editor.configs.get("editor.theme")!=="light";document.body.classList.toggle("theme-dark",t)}[n.SUBSCRIBE_SELF("editor.plugin.activated")](){this.updateTheme()}[n.SUBSCRIBE("config:editor.theme")](){this.updateTheme()}[n.KEYDOWN("document")+n.IF("isNotFormElement")](t){this.$editor.commands.execute("keymap.keydown",t)}[n.KEYUP("document")+n.IF("isNotFormElement")](t){this.$editor.commands.execute("keymap.keyup",t)}[n.RESIZE("window")+n.DEBOUNCE(10)](){this.$editor.emit("resize.window")}}function D({views:s=[],groups:t=[],as:e="div",style:i={}}){const r=h(),o=[...s.map(u=>r.getUI(u)),...t.map(u=>r.getGroupUI(u))].flat(1/0).filter(Boolean);return n.createElementJsx(y.View,{as:e,style:i},o)}c.BaseEditor=V,c.Editor=E,c.EditorPlugin=P,c.InjectView=D,c.useCommand=F,c.useConfig=$,c.useEditor=h,c.useEditorOption=z,c.useI18n=j,c.useSetConfig=B,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
