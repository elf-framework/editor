(function(l,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("@elf/sapa")):typeof define=="function"&&define.amd?define(["exports","@elf/sapa"],e):(l=typeof globalThis!="undefined"?globalThis:l||self,e(l.ui={},l.sapa))})(this,function(l,e){"use strict";var D=Object.defineProperty;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var E=(l,e,n)=>e in l?D(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n,s=(l,e)=>{for(var n in e||(e={}))M.call(e,n)&&E(l,n,e[n]);if(x)for(var n of x(e))w.call(e,n)&&E(l,n,e[n]);return l};var n="";const p={width:!0,height:!0,top:!0,left:!0,right:!0,bottom:!0,maxWidth:!0,maxHeight:!0,minWidth:!0,minHeight:!0,margin:!0,marginTop:!0,marginRight:!0,marginBottom:!0,marginLeft:!0,padding:!0,paddingTop:!0,paddingRight:!0,paddingBottom:!0,paddingLeft:!0,border:!0,borderTop:!0,borderRight:!0,borderBottom:!0,borderLeft:!0,borderWidth:!0,borderTopWidth:!0,borderRightWidth:!0,borderBottomWidth:!0,borderLeftWidth:!0};function y(r,t){return typeof t=="number"&&p[r]&&(t=t+"px"),t}function c(r,t){const o={};return Object.keys(r).forEach(i=>{o[t[i]]=y(i,r[i])}),o}class u extends e.UIElement{template(){return e.createElementJsx("button",{class:"elf--button"},this.props.content||"")}[e.BIND("$el")](){const{type:t,disabled:o,style:i={}}=this.props;return{class:["elf--button",{primary:t==="primary",secondary:t==="secondary",outline:t==="outline"}],disabled:o?"disabled":null,style:s({},c(i,{borderColor:"--elf--button-border-color",backgroundColor:"--elf--button-background",disabledColor:"--elf--button-disabled-color",color:"--elf--button-color",fontSize:"--elf--button-font-size",fontWeight:"--elf--button-font-weight",height:"--elf--button-height",padding:"--elf--button-padding",borderRadius:"--elf--button-border-radius"}))}}[e.CLICK("$el")](t){const{onClick:o}=this.props;o&&o(t)}}function v(r=[]){return r.map((t,o)=>{const i=`${t.type}${o}`;return t.type===f.GROUP?e.createElementJsx(J,s({ref:i},t)):t.type===f.DIVIDER?e.createElementJsx(I,s({ref:i},t)):e.createElementJsx(C,s({ref:i},t))})}const f={DIVIDER:"divider",GROUP:"group",MENU:"menu",ITEM:"item"};function I({dashed:r=!1}){return e.createElementJsx("li",{class:"divider",dashed:r})}function J({title:r=""}){return e.createElementJsx("li",{class:"section-title"},r)}class C extends e.UIElement{initState(){const{title:t="",hover:o=!1,shortcut:i,icon:d,items:m=[],selectable:a,selected:h,selectedIcon:g="\u2713"}=this.props;return{title:t,hover:o,shortcut:i,icon:d,items:m,selectable:a,selected:h,selectedIcon:g}}template(){const{title:t="",shortcut:o,icon:i,items:d=[],hover:m,selected:a,selectable:h,selectedIcon:g}=this.state;return e.createElementJsx("li",{class:e.classnames({hover:m})},h?e.createElementJsx("span",{class:"selected-icon"},a?g:void 0):null,t?e.createElementJsx("div",{class:"menu-title"},t):void 0,o?e.createElementJsx("div",{class:"shortcut"},o):void 0,i?e.createElementJsx("div",{class:"icon"},i):void 0,d.length>0?e.createElementJsx(b,{items:d}):void 0)}checkClickable(){const{type:t,items:o=[]}=this.props;return t===f.ITEM&&o.length===0}[e.CLICK("$el")+e.IF("checkClickable")](t){const{selectable:o=!1,onClick:i}=this.props;o&&this.setSelected(!this.selected),e.isFunction(i)&&i(t,this)}setSelected(t=!1){this.setState({selected:t})}get selected(){return this.state.selected}}class b extends e.UIElement{template(){return e.createElementJsx("menu",{class:"elf--menu"},v(this.props.items||[]))}[e.BIND("$el")](){const{style:t={}}=this.props;return{style:s({},c(t,{backgroundColor:"--elf--menu-background",color:"--elf--menu-color",fontSize:"--elf--menu-font-size",fontWeight:"--elf--menu-font-weight",height:"--elf--menu-height",padding:"--elf--menu-padding",borderRadius:"--elf--menu-border-radius",borderColor:"--elf--menu-border-color",boxShadow:"--elf--menu-box-shadow",width:"--elf--menu-width",maxWidth:"--elf--menu-max-width",sectionTitleColor:"--elf--menu-section-title-color",sectionTitleBackgroundColor:"--elf--menu-section-title-background-color",dividerColor:"--elf--menu-divider-color",left:"--elf--menu-direction-left"}))}}}class k extends e.UIElement{initState(){const{visible:t=!1,style:o={}}=this.props;return{visible:t,style:o}}template(){return e.createElementJsx("div",{class:"elf--dialog"},e.createElementJsx("div",{class:"elf--dialog-title"},e.createElementJsx("div",{class:"elf--dialog-title-text"},"Dialog"),e.createElementJsx("div",{class:"elf--dialog-title-tools",ref:"$tools"}),e.createElementJsx("div",{class:"elf--dialog-title-close",ref:"$close"},"\xD7")),e.createElementJsx("div",{class:"elf--dialog-content"},e.createElementJsx("div",{class:"elf--dialog-text"},"Hello, I'm a dialog"),e.createElementJsx("div",{class:"elf--dialog-content-tools"},e.createElementJsx("button",{class:"elf--button"},"Action"),e.createElementJsx("button",{class:"elf--button"},"Dismiss"))))}[e.LOAD("$tools")](){return[e.createElementJsx(u,{type:"primary",ref:"$action",onClick:()=>{console.log("Action")}},"Action"),e.createElementJsx(u,{ref:"$outline",type:"outline",onClick:()=>{console.log("Dismiss")}},"Dismiss")]}[e.BIND("$el")](){const{style:t={},visible:o}=this.state;return{class:e.classnames("elf--dialog",{visible:o}),style:s({},c(t,{backgroundColor:"--elf--dialog-background",color:"--elf--dialog-color",fontSize:"--elf--dialog-font-size",fontWeight:"--elf--dialog-font-weight",height:"--elf--dialog-height",padding:"--elf--dialog-padding",borderRadius:"--elf--dialog-border-radius",borderColor:"--elf--dialog-border-color",boxShadow:"--elf--dialog-box-shadow",width:"--elf--dialog-width"}))}}[e.CLICK("$close")](){const{onClose:t}=this.props;e.isFunction(t)&&t(this)}}l.Button=u,l.Dialog=k,l.Menu=b,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
