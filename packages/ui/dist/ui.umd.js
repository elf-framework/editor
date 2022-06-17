(function(c,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("@elf-framework/sapa")):typeof define=="function"&&define.amd?define(["exports","@elf-framework/sapa"],e):(c=typeof globalThis!="undefined"?globalThis:c||self,e(c.ui={},c.sapa))})(this,function(c,e){"use strict";var _=Object.defineProperty,q=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var M=(c,e,m)=>e in c?_(c,e,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[e]=m,n=(c,e)=>{for(var m in e||(e={}))X.call(e,m)&&M(c,m,e[m]);if(O)for(var m of O(e))Y.call(e,m)&&M(c,m,e[m]);return c},f=(c,e)=>q(c,Q(e));var m="";const $={width:!0,height:!0,top:!0,left:!0,right:!0,bottom:!0,maxWidth:!0,maxHeight:!0,minWidth:!0,minHeight:!0,margin:!0,marginTop:!0,marginRight:!0,marginBottom:!0,marginLeft:!0,padding:!0,paddingTop:!0,paddingRight:!0,paddingBottom:!0,paddingLeft:!0,border:!0,borderTop:!0,borderRight:!0,borderBottom:!0,borderLeft:!0,borderWidth:!0,borderTopWidth:!0,borderRightWidth:!0,borderBottomWidth:!0,borderLeftWidth:!0,gap:!0};function R(r,t){return typeof t=="number"&&$[r]&&(t=t+"px"),t}function h(r,t){const l={};return Object.keys(r).forEach(o=>{l[t[o]||o]=R(o,r[o])}),l}class v extends e.UIElement{template(){const{type:t,size:l,disabled:o,shape:s,destructive:i=!1,style:d={}}=this.props,u={class:e.classnames(["elf--button",{primary:t==="primary",secondary:t==="secondary",outline:t==="outline"},i?"destructive":"",{"elf--button-lg":l==="large","elf--button-sm":l==="small"},{"elf--button-shape-circle":s==="circle","elf--button-shape-round":s==="round"}]),disabled:o?"disabled":void 0,style:n({},h(d,{borderColor:"--elf--button-border-color",backgroundColor:"--elf--button-background",disabledColor:"--elf--button-disabled-color",color:"--elf--button-color",fontSize:"--elf--button-font-size",fontWeight:"--elf--button-font-weight",height:"--elf--button-height",padding:"--elf--button-padding",borderRadius:"--elf--button-border-radius"}))};return e.createElementJsx("button",f(n({},u),{onClick:this.props.onClick}),e.createElementJsx("span",null,this.props.content||""))}}class U extends e.UIElement{template(){const{disabled:t,style:l={},content:o,onClick:s,href:i}=this.props,d={class:e.classnames(["elf--link-button"]),disabled:t?"disabled":void 0,style:n({},h(l,{borderColor:"--elf--link-button-border-color",backgroundColor:"--elf--link-button-background",disabledColor:"--elf--link-button-disabled-color",color:"--elf--link-button-color",fontSize:"--elf--link-button-font-size",fontWeight:"--elf--link-button-font-weight",padding:"--elf--link-button-padding"}))};return e.createElementJsx("a",f(n({},d),{onClick:s,href:i||"#"}),e.createElementJsx("span",null,o||""))}}class B extends e.UIElement{template(){const{type:t,icon:l,content:o="",size:s,disabled:i,shape:d,style:u={}}=this.props,a={class:e.classnames(["elf--icon-button",{primary:t==="primary",secondary:t==="secondary",outline:t==="outline"},{"elf--icon-button-lg":s==="large","elf--icon-button-sm":s==="small"},{"elf--icon-button-shape-circle":d==="circle","elf--icon-button-shape-round":d==="round"}]),disabled:i?"disabled":void 0,style:n({},h(u,{borderColor:"--elf--icon-button-border-color",backgroundColor:"--elf--icon-button-background",disabledColor:"--elf--icon-button-disabled-color",color:"--elf--icon-button-color",fontSize:"--elf--icon-button-font-size",fontWeight:"--elf--icon-button-font-weight",height:"--elf--icon-button-height",padding:"--elf--icon-button-padding",borderRadius:"--elf--icon-button-border-radius"}))};return e.createElementJsx("button",f(n({type:"button"},a),{onClick:this.props.onClick}),l||o||"")}}const g={DIVIDER:"divider",GROUP:"group",MENU:"menu",ITEM:"item",CUSTOM:"custom"};function D(r=[],t){return r.map((l,o)=>{const s=`${l.type||"item"}${o}`;return e.isString(l)&&l==="-"?e.createElementJsx(C,{ref:s,rootClose:t}):e.isFunction(l)?e.createElementJsx(y,{ref:`custom${o}`,render:l,rootClose:t}):l.type===g.CUSTOM?e.createElementJsx(y,f(n({ref:s},l),{rootClose:t})):l.type===g.GROUP?e.createElementJsx(L,f(n({ref:s},l),{rootClose:t})):l.type===g.DIVIDER?e.createElementJsx(C,f(n({ref:s},l),{rootClose:t})):e.createElementJsx(F,f(n({ref:s},l),{rootClose:t}))})}function C({dashed:r=!1}){return e.createElementJsx("li",{class:"divider",dashed:r})}function y({render:r,rootClose:t}){return e.createElementJsx("li",{class:"custom"},r==null?void 0:r({rootClose:t}))}function L({title:r=""}){return e.createElementJsx("li",{class:"section-title"},r)}class F extends e.UIElement{initState(){const{title:t="",hover:l=!1,shortcut:o,icon:s,items:i=[],disabled:d=!1,selectable:u,selected:a,selectedIcon:b="\u2713",closable:p=!0,rootClose:k}=this.props;return{title:t,hover:l,shortcut:o,icon:s,items:i,selectable:u,selected:a,selectedIcon:b,disabled:d,closable:p,rootClose:k}}template(){const{title:t="",shortcut:l,icon:o="\u25B6",items:s=[],hover:i,selected:d,selectable:u,selectedIcon:a,disabled:b,rootClose:p}=this.state,k=s.length>0;return e.createElementJsx("li",{class:e.classnames({hover:i}),disabled:b?!0:void 0},u?e.createElementJsx("span",{class:"selected-icon"},d?a:void 0):null,t?e.createElementJsx("div",{class:"menu-title"},t):void 0,l?e.createElementJsx("div",{class:"shortcut"},l):void 0,o&&k?e.createElementJsx("div",{class:"icon"},o):void 0,s.length>0?e.createElementJsx(E,{items:s,rootClose:p}):void 0)}checkClickable(){if(this.state.disabled)return!1;const{type:t=g.ITEM,items:l=[]}=this.props;return t===g.ITEM&&l.length===0}[e.CLICK("$el")+e.IF("checkClickable")+e.PREVENT+e.STOP](t){var i,d;const{selectable:l=!1,onClick:o,closable:s=!0}=this.props;l&&this.setSelected(!this.selected),e.isFunction(o)&&o(t,this),s&&((d=(i=this.props).rootClose)==null||d.call(i))}setSelected(t=!1){this.setState({selected:t})}get selected(){return this.state.selected}}class E extends e.UIElement{initState(){return{intersectionLeft:0}}template(){let{style:t={},type:l="menu",x:o=0,y:s=0,direction:i="left",items:d=[],rootClose:u}=this.props,a=n({},t);o!==0&&(a=f(n({},a),{left:o})),s!==0&&(a=f(n({},a),{top:s}));const b={"data-direction":i,class:e.classnames("elf--menu",{"elf--menu-contextmenu":l==="contextmenu"}),style:n({},h(a,{left:"--elf--menu-left",top:"--elf--menu-top",backgroundColor:"--elf--menu-background",color:"--elf--menu-color",fontSize:"--elf--menu-font-size",fontWeight:"--elf--menu-font-weight",height:"--elf--menu-height",padding:"--elf--menu-padding",borderRadius:"--elf--menu-border-radius",borderColor:"--elf--menu-border-color",boxShadow:"--elf--menu-box-shadow",width:"--elf--menu-width",maxWidth:"--elf--menu-max-width",sectionTitleColor:"--elf--menu-section-title-color",sectionTitleBackgroundColor:"--elf--menu-section-title-background-color",dividerColor:"--elf--menu-divider-color",directionLeft:"--elf--menu-direction-left"}))};return e.createElementJsx("menu",f(n({},b),{onContextMenu:p=>p.preventDefault()}),D(d,u))}[e.OBSERVER("intersection")+e.PARAMS({root:document.body})](t=[]){const l=t.find(o=>o.isIntersecting&&o.intersectionRatio<1);if(l){const{left:o,right:s}=l.boundingClientRect,{left:i,right:d}=l.intersectionRect;let u="left";d!=s&&i!=o?u="center":d!=s&&(u="right"),this.$el.attr("data-direction",u)}}}class j extends e.UIElement{initState(){const{visible:t=!1,style:l={},center:o}=this.props;return{visible:t,style:l,center:o}}close(){const{onClose:t}=this.props;e.isFunction(t)&&t(this)}ok(){const{onOk:t}=this.props;e.isFunction(t)&&t(this)}cancel(){const{onCancel:t}=this.props;e.isFunction(t)&&t(this)}makeDefaultTools(){const{footer:t,cancelText:l="Cancel",okText:o="OK"}=this.props;return t?"":[e.createElementJsx(v,{onClick:()=>this.cancel()},l),e.createElementJsx(v,{type:"primary",onClick:()=>this.ok()},o)]}template(){const{style:t={},visible:l,center:o}=this.state,s={class:e.classnames("elf--dialog",{visible:l,center:o}),style:n({},h(t,{position:"--elf--dialog-position",backgroundColor:"--elf--dialog-background",color:"--elf--dialog-color",fontSize:"--elf--dialog-font-size",fontWeight:"--elf--dialog-font-weight",height:"--elf--dialog-height",padding:"--elf--dialog-padding",borderRadius:"--elf--dialog-border-radius",borderColor:"--elf--dialog-border-color",boxShadow:"--elf--dialog-box-shadow",width:"--elf--dialog-width"}))};return e.createElementJsx("div",n({},s),e.createElementJsx("div",{class:"elf--dialog-title"},e.createElementJsx("div",{class:"elf--dialog-title-text"},"Dialog"),e.createElementJsx("div",{class:"elf--dialog-title-tools",ref:"$tools"},this.props.tools||void 0),e.createElementJsx("div",{class:"elf--dialog-title-close",ref:"$close"},"\xD7")),e.createElementJsx("div",{class:"elf--dialog-content"},e.createElementJsx("div",{class:"elf--dialog-text"},this.props.content||""),e.createElementJsx("div",{class:"elf--dialog-content-tools"},this.props.footer?this.props.footer:this.makeDefaultTools())))}[e.CLICK("$close")](){this.close()}}const J={MENU:"menu",ITEM:"item",CUSTOM:"custom"};function z(r=[]){return r.map((t,l)=>{const o=`${t.type}-${l}`;return t.type===J.CUSTOM?e.createElementJsx(I,n({ref:o},t)):t.type===J.MENU?e.createElementJsx(T,n({ref:o},t)):e.createElementJsx(x,n({ref:o},t))})}class x extends e.UIElement{initialize(){super.initialize();const t=this.props.events||[];t.length&&t.forEach(l=>{this.on(l,()=>{this.refresh()})})}initState(){const{title:t="",icon:l,selected:o}=this.props;return{title:t,icon:l,selected:o}}template(){const{title:t="",icon:l}=this.state;return e.createElementJsx("div",{class:e.classnames("elf--tools-item",{selected:this.selected?!0:void 0}),onClick:this.props.onClick},e.createElementJsx("button",{type:"button"},l?e.createElementJsx("span",{class:"icon"},l):t?e.createElementJsx("span",{class:"menu-title"},t):void 0))}setSelected(t=!1){this.setState({selected:t})}get selected(){return e.isFunction(this.state.selected)?this.state.selected():this.state.selected}set selected(t){this.setSelected(t)}}class I extends x{template(){var t,l;return e.createElementJsx("div",{class:"elf--tools-item custom"},(l=(t=this.props).render)==null?void 0:l.call(t))}}class T extends x{initState(){const{title:t="",icon:l,selected:o,disabled:s,opened:i,items:d,direction:u,menuStyle:a}=this.props;return{title:t,icon:l,selected:o,opened:i,items:d,direction:u,disabled:s,menuStyle:a,rootClose:this.close.bind(this)}}template(){const{title:t="",icon:l,disabled:o,items:s=[],opened:i=!1,direction:d="left",rect:u,menuStyle:a}=this.state,b=s.length>0;return e.createElementJsx("div",{class:e.classnames("elf--tools-item",{selected:this.selected?!0:void 0,"has-items":b}),disabled:o},e.createElementJsx("button",{type:"button"},l?e.createElementJsx("span",{class:"icon"},l):t?e.createElementJsx("span",{class:"menu-title"},t):void 0,b?e.createElementJsx("span",{class:e.classnames("arrow",{opened:i})},e.createElementJsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.createElementJsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}))):void 0),i&&!o?e.createElementJsx("div",{class:"menu-area"},e.createElementJsx("div",{class:"arrow"}),e.createElementJsx(E,{ref:"$menu",items:s,direction:d,rootClose:this.state.rootClose,style:f(n({},a||{}),{top:"calc(100% + 5px)"})})):void 0)}runCallback(t,l){e.isFunction(t)&&t(l,this)}open(){this.setState({rect:this.$el.rect(),opened:!0})}close(){this.setState({opened:!1})}toggle(){this.state.opened||this.setState({rect:this.$el.rect()},!1),this.setState({opened:!this.state.opened})}checkClickable(t){return!e.Dom.create(t.target).closest("menu-area")}checkTriggerClick(){const{trigger:t="click"}=this.props;return t==="click"}checkTriggerOver(){return this.props.trigger==="hover"}[e.POINTEROVER("$el")+e.IF("checkTriggerOver")](){this.open()}checkNotInMenu(t){const l=e.Dom.create(t.target).closest("elf--tools-item");return l?this.$el.is(l)===!1:!0}[e.POINTERLEAVE("$el")+e.IF("checkTriggerOver")](t){this.close()}[e.CLICK("document")+e.IF("checkClickable")+e.IF("checkNotInMenu")](t){this.close()}[e.CLICK("$el")+e.IF("checkClickable")+e.IF("checkTriggerClick")](t){e.Dom.create(t.target).hasClass("arrow")?(this.toggle(),this.state.opened?this.runCallback(this.props.onOpen,t):this.runCallback(this.props.onClose,t)):(this.close(),this.runCallback(this.props.onClick,t))}}class S extends e.UIElement{template(){const{style:t={}}=this.props,l={class:e.classnames("elf--tools"),style:n({},h(t,{backgroundColor:"--elf--tools-background",color:"--elf--tools-color",height:"--elf--tools-height"}))};return e.createElementJsx("div",f(n({},l),{onContextMenu:o=>o.preventDefault()}),z(this.props.items))}}function N(r=[]){return r.map((t,l)=>{const o=`${t.type||"item"}${l}`;return e.createElementJsx(w,n({ref:o},t))})}class w extends e.UIElement{template(){const{items:t,style:l}=this.props;return e.createElementJsx("div",{class:"elf--toolbar-item"},e.createElementJsx(S,{ref:"$tools",items:t,style:l}))}}class V extends e.UIElement{template(){const{style:t={},align:l,items:o=[]}=this.props,s={class:e.classnames("elf--toolbar",{[l]:!0}),style:n({},h(t,{backgroundColor:"--elf--toolbar-background",color:"--elf--toolbar-color",height:"--elf--toolbar-height",align:"--elf--toolbar-align"}))};return e.createElementJsx("div",f(n({},s),{onContextMenu:i=>i.preventDefault()}),N(o))}}class W extends e.UIElement{template(){const{style:t={},icon:l,content:o,direction:s="top-left"}=this.props,i={class:e.classnames("elf--notification",`elf--notification-direction-${s}`),style:n({},h(t,{backgroundColor:"--elf--notification-background",color:"--elf--notification-color",height:"--elf--notification-height",hoverColor:"--elf--notification-hover-color",borderColor:"--elf--notification-border-color",boxShadow:"--elf--notification-box-shadow",toolsBorderColor:"--elf--notification-tools-border-color",toolsBorderRadius:"--elf--notification-tools-border-radius"}))};return e.createElementJsx("div",f(n({},i),{onContextMenu:d=>d.preventDefault()}),l?e.createElementJsx("div",{class:"elf--notification-icon"},l):void 0,e.createElementJsx("div",{class:"elf--notification-content"},e.createElementJsx("div",{class:"elf--notification-text"},o)),e.createElementJsx("div",{class:"elf--notification-tools"},this.props.tools||[]))}}class P extends e.UIElement{template(){const{style:t={},content:l,direction:o="bottom"}=this.props,s={class:e.classnames("elf--visual-bell",`elf--visual-bell-direction-${o}`),style:n({},h(t,{backgroundColor:"--elf--visual-bell-background",color:"--elf--visual-bell-color",height:"--elf--visual-bell-height",hoverColor:"--elf--visual-bell-hover-color",borderColor:"--elf--visual-bell-border-color",boxShadow:"--elf--visual-bell-box-shadow",toolsBorderColor:"--elf--visual-bell-tools-border-color",toolsBorderRadius:"--elf--visual-bell-tools-border-radius",hgap:"--elf--visual-bell-hgap",vgap:"--elf--visual-bell-vgap"}))};return e.createElementJsx("div",f(n({class:"elf--visual-bell"},s),{onContextMenu:i=>i.preventDefault()}),e.createElementJsx("div",{class:"elf--visual-bell-content"},e.createElementJsx("div",{class:"elf--visual-bell-text"},l)),e.createElementJsx("div",{class:"elf--visual-bell-tools"},this.props.tools||[]))}}class K extends e.UIElement{initState(){return{trigger:this.props.trigger||"hover",show:this.props.show||!1}}template(){const{style:t={},message:l="",content:o,position:s="bottom"}=this.props,{show:i}=this.state,d={class:e.classnames("elf--tooltip",`elf--tooltip-position-${s}`),style:n({},h(t,{backgroundColor:"--elf--tooltip-background",color:"--elf--tooltip-color",height:"--elf--tooltip-height",hoverColor:"--elf--tooltip-hover-color",borderColor:"--elf--tooltip-border-color",boxShadow:"--elf--tooltip-box-shadow",toolsBorderColor:"--elf--tooltip-tools-border-color",toolsBorderRadius:"--elf--tooltip-tools-border-radius",hgap:"--elf--tooltip-hgap",vgap:"--elf--tooltip-vgap",delay:"--elf--tooltip-delay"}))};return e.createElementJsx("div",n({class:"elf--tooltip"},d),e.createElementJsx("div",{class:"elf--tooltip-content"},o),i||this.props.show?e.createElementJsx("div",{class:"elf--tooltip-message"},e.createElementJsx("div",{class:"arrow"}),e.createElementJsx("div",{class:"elf--toolltip-message-content"},l)):void 0)}open(){this.setState({show:!0})}close(){this.setState({show:!1})}toggle(){this.setState({show:!this.state.show})}checkClickable(t){return!Dom.create(t.target).closest("elf--tooltip")}checkTriggerClick(){return this.state.trigger==="click"}checkTriggerOver(){return this.state.trigger==="hover"}[e.POINTERENTER("$el")+e.IF("checkTriggerOver")](){this.open()}checkNotInTooltip(t){const l=Dom.create(t.target).closest("elf--tooltip");return l?this.$el.is(l)===!1:!0}[e.POINTERLEAVE("$el")+e.IF("checkTriggerOver")](t){this.close()}[e.CLICK("$el")+e.IF("checkClickable")+e.IF("checkTriggerClick")](t){this.toggle()}}class A extends e.UIElement{template(){const{style:t={},content:l,theme:o,title:s="",tools:i=[],mode:d,footer:u}=this.props,a={class:e.classnames("elf--panel",`elf--panel-mode-${d}`),"data-theme":o,style:n({},h(t,{backgroundColor:"--elf--panel-background",color:"--elf--panel-color",height:"--elf--panel-height",hoverColor:"--elf--panel-hover-color",borderColor:"--elf--panel-border-color",boxShadow:"--elf--panel-box-shadow",padding:"--elf--panel-padding",borderRadius:"--elf--panel-border-radius"}))};return e.createElementJsx("div",n({},a),s?e.createElementJsx("div",{class:"elf--panel-title"},e.createElementJsx("div",{class:"elf--panel-title-text"},s),i?e.createElementJsx("div",{class:"elf--panel-title-tools"},i||[]):void 0):void 0,e.createElementJsx("div",{class:"elf--panel-content"},l),u?e.createElementJsx("div",{class:"elf--panel-footer"},u):void 0)}}class G extends e.UIElement{initState(){return{items:this.props.items||[]}}template(){var s;const{style:t={}}=this.props,{items:l=[]}=this.state,o={class:e.classnames("elf--tabstrip"),style:n({},h(t,{backgroundColor:"--elf--tabstrip-background",color:"--elf--tabstrip-color",height:"--elf--tabstrip-height",width:"--elf--tabstrip-width",hoverColor:"--elf--tabstrip-hover-color",borderColor:"--elf--tabstrip-border-color",hgap:"--elf--tabstrip-hgap",vgap:"--elf--tabstrip-vgap",delay:"--elf--tabstrip-delay"}))};return e.createElementJsx("div",n({class:"elf--tabstrip"},o),e.createElementJsx("div",{class:"elf--tabstrip-content"},l.map(i=>e.createElementJsx("div",{class:e.classnames("elf--tabstrip-item",{selected:!!i.selected}),onClick:d=>this.setSelectedValue(d,i.value)},i.title))),(s=this.props.tools)!=null&&s.length?e.createElementJsx("div",{class:"elf--tabstrip-tools"},this.props.tools.map(i=>e.createElementJsx("div",{class:"elf--tabstrip-tool"},i))):void 0)}get selectedValue(){var t;return(t=this.state.items.find(l=>l.selected))==null?void 0:t.value}setSelectedValue(t,l){const o=this.selectedValue;this.setState({items:this.state.items.map(s=>(s.selected=s.value===l,s))}),o!==l&&this.props.onChange&&this.props.onChange(t,this)}}class H extends e.UIElement{template(){const{style:t={},content:l,wrap:o=!1}=this.props,s={class:e.classnames("elf--layout",{stack:this.props.stack,wrap:o}),style:n({},h(t,{backgroundColor:"--elf--layout-background-color",gap:"--elf--layout-gap"}))};return e.createElementJsx("div",n({},s),l)}}c.Button=v,c.Dialog=j,c.IconButton=B,c.Layout=H,c.LinkButton=U,c.Menu=E,c.Notification=W,c.Panel=A,c.TabStrip=G,c.Toolbar=V,c.ToolbarItem=w,c.Tools=S,c.ToolsCustomItem=I,c.ToolsMenuItem=T,c.Tooltip=K,c.VisualBell=P,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
