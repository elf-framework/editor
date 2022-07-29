(function(r,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("@elf-framework/sapa"),require("@elf-framework/ui")):typeof define=="function"&&define.amd?define(["exports","@elf-framework/sapa","@elf-framework/ui"],s):(r=typeof globalThis!="undefined"?globalThis:r||self,s(r.baseEditor={},r.sapa,r.ui))})(this,function(r,s,a){"use strict";var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(r,s,a)=>s in r?y(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,h=(r,s)=>{for(var a in s||(s={}))V.call(s,a)&&p(r,a,s[a]);if(m)for(var a of m(s))M.call(s,a)&&p(r,a,s[a]);return r};var G="";class C{constructor(t){this.editorContext=t,this.localCommands={}}loadCommands(t={}){Object.keys(t).forEach(i=>{s.isFunction(t[i])?this.registerCommand(i,t[i]):this.registerCommand(t[i])})}registerCommand(t,i){if(this.localCommands[t])throw new Error(`command ${t} is already registered`);if(arguments.length===2){const e=(...o)=>i.call(this,this.editorContext,...o);e.source=t,this.localCommands[t]=e}else if(s.isObject(t)){if(!t.command)throw new Error("command is required",t);if(!t.execute)throw new Error("callback is required",t);const e=(...o)=>t.execute.call(t,this.editorContext,...o);e.source=t.command,this.localCommands[t.command]=e}}getCallback(t){return this.localCommands[t]}emit(t,...i){const e=this.getCallback(t);if(e)return e(...i)}}class I{constructor(t){this.editorContext=t,this.configList=[],this.config=new Map}get(t){var i;return this.config.has(t)===!1&&this.config.set(t,(i=this.configList.find(e=>e.key==t))==null?void 0:i.defaultValue),this.config.get(t)}set(t,i){const e=this.config.get(t);e!==i&&(this.config.set(t,i),this.editorContext.emit("config:"+t,i,e))}push(t,i){const o=this.get(t).length;return this.setIndexValue(t,o,i),o}setIndexValue(t,i,e){const o=this.get(t);o[i]=e,this.set(t,[...o])}getIndexValue(t,i){return this.get(t)[i]}removeByIndex(t,i){const e=this.get(t);e.splice(i,1),this.set(t,[...e])}init(t,i){this.set(t,i,!1)}setAll(t){Object.keys(t).forEach(i=>{this.set(i,t[i])})}getType(t){var i;return(i=this.configList.find(e=>e.key==t))==null?void 0:i.type}isType(t,i){return this.getType(t)===i}isBoolean(t){return this.isType(t,"boolean")}toggle(t){this.set(t,!this.get(t))}toggleWith(t,i,e){this.get(t)===i?this.set(t,e):this.set(t,i)}true(t){return this.get(t)===!0}false(t){return this.get(t)===!1}is(t,i){return this.get(t)===i}remove(t){this.config.delete(t),this.editorContext.emit("config:"+t)}registerConfig(t){this.config.set(t.key,t.defaultValue),this.configList.push(t)}}class E{constructor(t){this.editorContext=t,this.plugins=[]}registerPlugin(t,i={}){this.plugins.push([t,i])}async initializePlugin(){return await Promise.all(this.plugins.map(async([t,i])=>{try{return await t(this.editorContext,i)}catch(e){console.error(e);return}}))}async activate(){await this.initializePlugin()}}class U{constructor(t){this.editorContext=t,this.uis={},this.groupUis={}}registerUI(t={}){Object.assign(this.uis,t)}registerGroupUI(t,i={}){this.groupUis[t]||(this.groupUis[t]={}),Object.assign(this.groupUis[t],i)}createUI(t){if(t instanceof s.VNode)return t;if(s.isArray(t)){const[i,e]=t;return s.createElementJsx(i,e)}return s.createElementJsx(t)}getUI(t){if(this.uis[t])return this.createUI(this.uis[t])}getGroupUI(t){return Object.values(this.groupUis[t]||{}).map(e=>this.createUI(e)).filter(Boolean)}}const w="EditorContext";class b{constructor(t,i={}){this.$rootEditor=t,this.$options=i,this.initialize()}initialize(){const{managers:t={},configs:i=[],commands:e=[],plugins:o=[]}=this.$options;this.initializeManagers(t),this.initializeConfigs(i),this.initializeCommands(e),this.initializePlugins(o),this.emit("editor.initialize",this)}initializeManagers(t={}){t=h({configs:I,commands:C,plugins:E,uis:U},t),Object.entries(t).forEach(([i,e])=>{if(Object.hasOwnProperty.call(this,i)){console.warn(`[EditorContext] ${i} manager is already exists.`);return}Object.defineProperty(this,i,{enumerable:!1,configurable:!1,writable:!1,value:new e(this)})})}initializeConfigs(t=[]){t.forEach(i=>{this.configs.registerConfig(i)})}initializeCommands(t=[]){t.forEach(i=>{this.commands.registerCommand(i)})}initializePlugins(t=[]){t.forEach(i=>{this.plugins.registerPlugin(i)})}async activate(){return await this.plugins.activate()}get $store(){return this.$rootEditor.$store}emit(t,...i){this.$store.source=w,this.$store.emit(t,...i)}registerCommand(t){this.commands.registerCommand(t)}registerUI(t){this.uis.registerUI(t)}registerGroupUI(t,i){this.uis.registerGroupUI(t,i)}registerConfig(t){this.configs.registerConfig(t)}getUI(t){return this.uis.getUI(t)}getGroupUI(t){return this.uis.getGroupUI(t)}getUIList(t){return[this.getUI(t),this.getGroupUI(t)].flat(1/0).filter(Boolean)}getConfig(t){return this.configs.get(t)}}const g="editor",f="editorOption";class x{constructor(t,i={}){this.editor=t,this.props=i}initialize(){}load(){}activate(){}deactivate(){}}function l(){return s.useStore(g)}function O(n){var t;return(t=s.useStore(f))==null?void 0:t[n]}function z(n){var t,i;return(i=(t=l())==null?void 0:t.configs)==null?void 0:i.get(n)}function v(n,t){var i,e;return(e=(i=l())==null?void 0:i.configs)==null?void 0:e.set(n,t)}async function $(n,...t){var i,e;return await((e=(i=l())==null?void 0:i.commands)==null?void 0:e.emit(n,...t))}function P(n,t={}){var i,e;return(e=(i=l())==null?void 0:i.i18n)==null?void 0:e.get(n,t)}class d extends s.UIElement{initialize(){super.initialize(),this.$editor=new b(this,this.props),this.$store.set(g,this.$editor),this.$store.set(f,this.props),this.activate()}async activate(){await this.$editor.activate()}}class j extends d{template(){const t=l();return s.createElementJsx("div",{class:s.classnames("elf--base-editor",h({"full-screen":this.props.fullScreen},this.props.editorClass))},t.getUIList("renderView"))}}function T({views:n=[],groups:t=[],as:i="div",style:e={}}){const o=l(),u=[...n.map(c=>o.getUI(c)),...t.map(c=>o.getGroupUI(c))].flat(1/0).filter(Boolean);return s.createElementJsx(a.View,{as:i,style:e},u)}r.BaseEditor=j,r.Editor=d,r.EditorPlugin=x,r.InjectView=T,r.useCommand=$,r.useConfig=z,r.useEditor=l,r.useEditorOption=O,r.useI18n=P,r.useSetConfig=v,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
