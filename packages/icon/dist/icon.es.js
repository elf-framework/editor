function _icon_template(tpl, opt) {
  const defaultOpts = Object.assign({
    width: 24,
    height: 24
  }, opt);
  return `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="${defaultOpts.width}" 
            height="${defaultOpts.height}" 
            viewBox="0 0 ${defaultOpts.viewBoxWidth || defaultOpts.width} ${defaultOpts.viewBoxHeight || defaultOpts.height}">${tpl}</svg>`;
}
var __glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _icon_template
}, Symbol.toStringTag, { value: "Module" }));
var account_tree = _icon_template(`<path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>`);
var __glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": account_tree
}, Symbol.toStringTag, { value: "Module" }));
var add = _icon_template(`<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`);
var __glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": add
}, Symbol.toStringTag, { value: "Module" }));
var add_box = _icon_template(`<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>`);
var __glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": add_box
}, Symbol.toStringTag, { value: "Module" }));
var add_circle = _icon_template(`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>`);
var __glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": add_circle
}, Symbol.toStringTag, { value: "Module" }));
var add_note = _icon_template(`<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>`);
var __glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": add_note
}, Symbol.toStringTag, { value: "Module" }));
var align_center = _icon_template(`<path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>`);
var __glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_center
}, Symbol.toStringTag, { value: "Module" }));
var align_horizontal_center = _icon_template(`<polygon points="11,2 13,2 13,7 21,7 21,10 13,10 13,14 18,14 18,17 13,17 13,22 11,22 11,17 6,17 6,14 11,14 11,10 3,10 3,7 11,7"/>`);
var __glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_horizontal_center
}, Symbol.toStringTag, { value: "Module" }));
var align_horizontal_left = _icon_template(`<path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"/>`);
var __glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_horizontal_left
}, Symbol.toStringTag, { value: "Module" }));
var align_horizontal_right = _icon_template(`<path d="M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z"/>`);
var __glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_horizontal_right
}, Symbol.toStringTag, { value: "Module" }));
var align_justify = _icon_template(`<path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>`);
var __glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_justify
}, Symbol.toStringTag, { value: "Module" }));
var align_left = _icon_template(`<path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>`);
var __glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_left
}, Symbol.toStringTag, { value: "Module" }));
var align_right = _icon_template(`<path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>`);
var __glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_right
}, Symbol.toStringTag, { value: "Module" }));
var align_vertical_bottom = _icon_template(`<path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"/>`);
var __glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_vertical_bottom
}, Symbol.toStringTag, { value: "Module" }));
var align_vertical_center = _icon_template(`<polygon points="22,11 17,11 17,6 14,6 14,11 10,11 10,3 7,3 7,11 1.84,11 1.84,13 7,13 7,21 10,21 10,13 14,13 14,18 17,18 17,13 22,13"/>`);
var __glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_vertical_center
}, Symbol.toStringTag, { value: "Module" }));
var align_vertical_top = _icon_template(`<path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z"/>`);
var __glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align_vertical_top
}, Symbol.toStringTag, { value: "Module" }));
var alternate = _icon_template(`<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>`);
var __glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": alternate
}, Symbol.toStringTag, { value: "Module" }));
var alternate_reverse = _icon_template(`<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />`);
var __glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": alternate_reverse
}, Symbol.toStringTag, { value: "Module" }));
var apps_copy = _icon_template(`<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>`);
var __glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": apps_copy
}, Symbol.toStringTag, { value: "Module" }));
var apps = _icon_template(`<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>`);
var __glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": apps
}, Symbol.toStringTag, { value: "Module" }));
var archive = _icon_template(`<path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>`);
var __glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": archive
}, Symbol.toStringTag, { value: "Module" }));
var arrowLeft = _icon_template(`<path d="M14 7l-5 5 5 5V7z"/>`);
var __glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": arrowLeft
}, Symbol.toStringTag, { value: "Module" }));
var arrowRight = _icon_template(`<path d="M10 17l5-5-5-5v10z"/>`);
var __glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": arrowRight
}, Symbol.toStringTag, { value: "Module" }));
var arrow_right = _icon_template(`<path d="M10 17l5-5-5-5v10z"/>`);
var __glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": arrow_right
}, Symbol.toStringTag, { value: "Module" }));
var artboard = _icon_template(`<path d="M13.85 34.05H27.6V31.05H13.85ZM13.85 25.5H34.15V22.5H13.85ZM13.85 16.95H34.15V13.95H13.85ZM9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Z"/>`, {
  width: 48,
  height: 48
});
var __glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": artboard
}, Symbol.toStringTag, { value: "Module" }));
var auto_awesome = _icon_template(`<path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>`);
var __glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": auto_awesome
}, Symbol.toStringTag, { value: "Module" }));
var autorenew = _icon_template(`<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>`);
var __glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": autorenew
}, Symbol.toStringTag, { value: "Module" }));
var ballot = _icon_template(`<clipPath><use xlink:href="#a" overflow="visible"/></clipPath><path fill-rule="evenodd" clip-rule="evenodd" d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"/>`);
var __glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ballot
}, Symbol.toStringTag, { value: "Module" }));
var bar_chart = _icon_template(`<path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>`);
var __glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": bar_chart
}, Symbol.toStringTag, { value: "Module" }));
var blur = _icon_template(`<path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>`);
var __glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": blur
}, Symbol.toStringTag, { value: "Module" }));
var blur_linear = _icon_template(`<path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/>`);
var __glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": blur_linear
}, Symbol.toStringTag, { value: "Module" }));
var boolean_difference = _icon_template(`<path d="M 20 10L 30 10L 30 30L 10 30L 10 20L 20 20L 20 10Z M 0 0L 20 0L 20 20L 0 20L 0 0Z  M 2 2L 2 18L 18 18L 18 2L 2 2Z" />`, { width: 30, height: 30 });
var __glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": boolean_difference
}, Symbol.toStringTag, { value: "Module" }));
var boolean_intersection = _icon_template(`<path d="
    M 10 10L 30 10L 30 30L 10 30L 10 10Z 
    M 20 12L 18 18L 12 18L 12 28L 28 28L 28 12L 12 12Z 
    M 0 0L 20 0L 20 20L 0 20L 0 0Z  
    M 2 2L 2 18L 18 18L 18 2L 2 2Z
" />`, { width: 30, height: 30 });
var __glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": boolean_intersection
}, Symbol.toStringTag, { value: "Module" }));
var boolean_union = _icon_template(`<path d="M 0 0L 20 0L 20 20L 0 20L 0 0Z M 10 10L 30 10L 30 30L 10 30L 10 10Z"/>`, { width: 30, height: 30 });
var __glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": boolean_union
}, Symbol.toStringTag, { value: "Module" }));
var boolean_xor = _icon_template(`<path d="
    M 10 10L 30 10L 30 30L 10 30L 10 10Z
    M 0 0L 20 0L 20 20L 0 20L 0 0Z 
" fill-rule="evenodd"/>`, { width: 30, height: 30 });
var __glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": boolean_xor
}, Symbol.toStringTag, { value: "Module" }));
var border_all = _icon_template(`<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>`);
var __glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": border_all
}, Symbol.toStringTag, { value: "Module" }));
var border_inner = _icon_template(`<path d="M3 5v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2zm1 10c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1zm15 3c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zm0-15h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2z"/>`);
var __glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": border_inner
}, Symbol.toStringTag, { value: "Module" }));
var border_style = _icon_template(`<path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/>`);
var __glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": border_style
}, Symbol.toStringTag, { value: "Module" }));
var bottom = _icon_template(`<path d="M4,20 L20,20Z M10,8 L10,16 L14,16 L14,8Z" stroke-width="1" />`);
var __glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": bottom
}, Symbol.toStringTag, { value: "Module" }));
var broken_image = _icon_template(`<path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/>`);
var __glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": broken_image
}, Symbol.toStringTag, { value: "Module" }));
var brush = _icon_template(`<path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>`);
var __glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": brush
}, Symbol.toStringTag, { value: "Module" }));
var build = _icon_template(`<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>`);
var __glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": build
}, Symbol.toStringTag, { value: "Module" }));
var camera_roll = _icon_template(`<path d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"/>`);
var __glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": camera_roll
}, Symbol.toStringTag, { value: "Module" }));
var cat = _icon_template(`
<path d="M712.4846,631.2673c-8.3777-59.9758-44.6997-121.2822-117.7703-198.7816
	c-51.7295-54.8649-72.0865-105.7791-55.8514-139.6883c12.4393-25.9817,42.587-35.8935,65.343-34.1103
	c26.3435,2.0661,37.3148,18.5905,41.88,32.0888c6.5847,19.471,2.7829,43.5175-8.4753,53.6029
	c-2.4382,2.1843-19.5444,15.6083-31.617,2.486c-16.0995-17.4994,1.3123-34.1181,1.3123-34.1181s25.7198-19.4211,11.5477-34.6431
	c-14.1721-15.2219-81.6211,4.7241-73.1766,62.9098c2.102,14.4833,9.8525,35.0453,41.7667,49.9105
	c31.3411,14.5985,62.0806,11.5356,84.3365-8.4017c26.8387-24.0431,36.221-68.5172,22.8163-108.1526
	c-13.0433-38.5685-45.3375-63.5167-86.387-66.7359c-22.4584-1.7602-45.9053,2.9182-66.0231,13.1776
	c-22.1882,11.3155-39.3094,28.5606-49.5124,49.8713c-15.207,31.7608-27.0118,99.5788,64.7797,196.9337
	c64.4428,68.3486,97.5892,122.6011,104.3126,170.7358c6.1263,43.8577-32.9753,141.2908-59.1734,141.8642
	c-18.2653,0.3997-13.0681-28.0174-11.1219-46.1832c3.4623-32.3166,9.02-64.4668,7.8147-96.946
	c-1.7692-47.6774-16.0649-83.7216-38.2463-125.1911c-20.1995-37.7643-37.8974-60.6029-92.5699-111.4463
	c-13.4884-12.5438-27.4699-22.5866-44.7675-38.1754c-17.5431-15.8101-21.9685-33.5474-24.195-48.6835
	c-4.6472-31.5926,5.266-35.0392,22.933-61.1816c7.51,6.1134,15.132,13.1576,22.5878,21.2593
	c0.8908,0.9678,2.1063,1.4586,3.3257,1.4586c1.0938,0,2.1906-0.3947,3.059-1.1939c1.8362-1.6895,1.9548-4.548,0.2647-6.3846
	c-8.043-8.7399-16.2394-16.2892-24.29-22.8068c1.0196-1.6815,1.9806-3.3693,2.913-5.06
	c11.2809,3.873,22.4781,8.5857,32.8744,14.3263c0.6923,0.3824,1.4415,0.5638,2.1804,0.5638c1.592,0,3.1354-0.8433,3.9596-2.3353
	c1.2061-2.1848,0.4133-4.9333-1.7714-6.14c-10.5501-5.8255-21.7927-10.625-33.0861-14.5846
	c1.7051-3.6655,3.2152-7.3481,4.5178-11.0449c9.9095,1.0547,20.2559,2.6507,30.8756,4.9542
	c2.4407,0.5281,4.8451-1.0193,5.3736-3.4585c0.5285-2.4387-1.0193-4.8446-3.4586-5.3736
	c-10.3543-2.2456-20.4231-3.8448-30.0823-4.9431c6.761-25.5357,4.0583-51.5754-8.0207-76.8648
	C448.2098,115.8869,474.731,76.8288,466.0513,18c-68.8775,17.9071-87.2624,54.1776-94.1043,50.875
	c-7.9472-3.8361-40.5018-11.036-62.952-10.6586c-37.278,0.6267-61.382,7.0395-61.382,7.0395
	c-11.2537-14.6686-35.9431-36.6889-90.105-41.2683c2.9433,47.1602,13.4346,82.2557,28.5291,102.9373l-0.7433,2.377
	c-11.7879,32.4393-13.5817,62.8858-3.8016,89.6451c-9.0883,1.1019-18.5685,2.7173-28.321,4.9987
	c-2.4299,0.5687-3.939,2.9991-3.3708,5.429c0.5687,2.4294,2.9972,3.939,5.429,3.3708c10.3087-2.4115,20.3424-4.0428,29.9266-5.0891
	c1.4184,2.9763,2.9836,5.904,4.7147,8.7755c-11.2262,4.119-22.4456,9.1879-32.9296,15.4312
	c-2.1445,1.2767-2.8476,4.0498-1.5704,6.1939c0.8453,1.4199,2.3461,2.2073,3.8866,2.2073c0.7859,0,1.5827-0.2054,2.3073-0.6369
	c10.5541-6.2849,22.0078-11.3381,33.4798-15.4008c3.3157,4.5403,7.0729,8.9251,11.2576,13.1527
	c-5.6694,5.3088-11.3757,11.2216-17,17.8125c-1.6199,1.8979-1.3944,4.7505,0.504,6.3699c0.8507,0.7266,1.8935,1.0816,2.931,1.0816
	c1.2767,0,2.5456-0.5383,3.4389-1.5856c5.5062-6.4525,11.1144-12.2327,16.692-17.4078c5.7832,5.4212,11.3758,11.1287,15.514,17.8627
	c7.8208,12.7265,8.3216,25.8196,6.7598,40.6753c-3.119,29.6671-13.4278,58.0414-20.0391,87.1301
	c-16.8163,73.989-9.0635,132.7513,20.7169,202.5388c8.0053,18.7598,17.5698,36.9144,23.7843,56.341
	c10.5081,32.8488,7.8436,88.3559,8.2697,122.8419v2.9318c0,0-19.9931,0.1384-28.4717,6.0748
	c-8.2555,5.7802-10.3883,21.931-4.3929,28.6906c6.6872,7.5395,21.6739,10.6397,31.6837,11.8093
	c119.664,13.9824,293.6021-2.6707,341.7446-8.3345C701.2023,821.2982,721.1432,693.2562,712.4846,631.2673z M437.2106,66.5267
	c-0.1946,33.6617-23.5064,50.7886-23.5064,50.7886c-6.2684-17.19-21.1558-25.3943-21.1558-25.3943
	C408.2194,68.8708,437.2106,66.5267,437.2106,66.5267z M201.6607,103.3024c0,0-19.8527-14.6264-20.0184-43.3732
	c0,0,24.6894,2.0019,38.035,21.6866C219.6773,81.6158,206.999,88.6223,201.6607,103.3024z M215.969,158.6876
	c15.0275-4.1452,27.2506-3.8264,37.1033-1.1182c-15.9193,16.5729-7.4137,31.0502-3.2583,36.286
	C221.2402,186.9178,215.969,158.6876,215.969,158.6876z M252.8369,194.4974c13.6546-17.1619,7.1357-30.6827,3.4758-35.9226
	c24.8589,8.5877,33.2057,32.5095,33.2057,32.5095C274.4792,195.6167,262.4471,196.221,252.8369,194.4974z M308.1766,232.8661
	c-4.1644,0.2111-22.0216-7.8084-21.8634-21.8635c0.1244-11.0539,40.2451-7.8568,42.1652,0
	C330.8523,220.7164,312.3411,232.655,308.1766,232.8661z M327.2252,191.0843c0,0,8.7972-25.2037,35.2186-33.1565
	c-12.424,19.1432-1.5466,31.7233,3.55,36.1478C356.055,196.2867,343.3752,195.9514,327.2252,191.0843z M369.7458,193.0825
	c10.0879-20.4091-1.0878-32.4358-4.9794-35.7968c9.66-2.4378,21.5306-2.5917,36.0081,1.4018
	C400.7746,158.6876,395.8536,185.0439,369.7458,193.0825z"/>
`);
var __glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": cat
}, Symbol.toStringTag, { value: "Module" }));
var center = _icon_template(`
    <path d="M12,4 L12,20Z M6,10 L18,10 L18,14 L6,14Z" stroke-width="1" />
`);
var __glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": center
}, Symbol.toStringTag, { value: "Module" }));
var chart = _icon_template(`<path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>`);
var __glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": chart
}, Symbol.toStringTag, { value: "Module" }));
var check = _icon_template(`<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`);
var __glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": check
}, Symbol.toStringTag, { value: "Module" }));
var chevron_left = _icon_template(`<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>`);
var __glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": chevron_left
}, Symbol.toStringTag, { value: "Module" }));
var chevron_right = _icon_template(`
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
`);
var __glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": chevron_right
}, Symbol.toStringTag, { value: "Module" }));
var circle = _icon_template(`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>`);
var __glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": circle
}, Symbol.toStringTag, { value: "Module" }));
var close = _icon_template(`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`);
var __glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": close
}, Symbol.toStringTag, { value: "Module" }));
var code = _icon_template(`<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>`);
var __glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": code
}, Symbol.toStringTag, { value: "Module" }));
var color = _icon_template(`<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`);
var __glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": color
}, Symbol.toStringTag, { value: "Module" }));
var color_lens = _icon_template(`<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`);
var __glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": color_lens
}, Symbol.toStringTag, { value: "Module" }));
var control_point = _icon_template(`<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>`);
var __glob_0_54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": control_point
}, Symbol.toStringTag, { value: "Module" }));
var copy = _icon_template(`<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/>`);
var __glob_0_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": copy
}, Symbol.toStringTag, { value: "Module" }));
var create_folder = _icon_template(`
    <path d="M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/>
`);
var __glob_0_56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": create_folder
}, Symbol.toStringTag, { value: "Module" }));
var cube = _icon_template(`<path d="M21 16.5a1 1 0 0 1-.527.881l-7.907 4.443a.996.996 0 0 1-1.132 0l-7.907-4.443A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .527-.881l7.907-4.443a.995.995 0 0 1 1.132 0l7.907 4.443A1 1 0 0 1 21 7.5v9zM12 4.15L6.042 7.5l5.96 3.35 5.958-3.35-5.958-3.35zM5 15.916l6 3.372V12.58L5 9.209v6.706zm14 0V9.209l-6 3.372v6.707l6-3.373z" />`);
var __glob_0_57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": cube
}, Symbol.toStringTag, { value: "Module" }));
var cylinder = _icon_template(`
<g class="cylinder">
<path d="M 12 0 C 7.636719 0 3 1.226562 3 3.5 L 3 20.5 C 3 22.773438 7.636719 24 12 24 C 16.363281 24 21 22.773438 21 20.5 L 21 3.5 C 21 1.226562 16.363281 0 12 0 Z M 20 19.121094 C 19.921875 19.140625 19.84375 19.171875 19.78125 19.230469 C 19.574219 19.414062 19.554688 19.726562 19.738281 19.933594 C 19.914062 20.128906 20 20.320312 20 20.5 C 20 21.542969 16.957031 23 12 23 C 7.042969 23 4 21.542969 4 20.5 C 4 20.320312 4.085938 20.128906 4.261719 19.933594 C 4.445312 19.726562 4.425781 19.410156 4.21875 19.226562 C 4.15625 19.171875 4.078125 19.140625 4 19.121094 L 4 5.160156 C 5.59375 6.363281 8.863281 7 12 7 C 15.136719 7 18.40625 6.363281 20 5.160156 Z M 12 6 C 7.042969 6 4 4.542969 4 3.5 C 4 2.457031 7.042969 1 12 1 C 16.957031 1 20 2.457031 20 3.5 C 20 4.542969 16.957031 6 12 6 Z M 12 6 "/>
</g>
`);
var __glob_0_58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": cylinder
}, Symbol.toStringTag, { value: "Module" }));
var dahaze = _icon_template(`<path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/>`);
var __glob_0_59 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dahaze
}, Symbol.toStringTag, { value: "Module" }));
var dark = _icon_template(`<path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>`);
var __glob_0_60 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dark
}, Symbol.toStringTag, { value: "Module" }));
var delete_forever = _icon_template(`<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>`);
var __glob_0_61 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": delete_forever
}, Symbol.toStringTag, { value: "Module" }));
var device_hub = _icon_template(`<path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>`);
var __glob_0_62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": device_hub
}, Symbol.toStringTag, { value: "Module" }));
var diffuse = _icon_template(`<path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"/>`);
var __glob_0_63 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": diffuse
}, Symbol.toStringTag, { value: "Module" }));
function direction(transform2 = "") {
  return _icon_template(`
        <g transform='${transform2}'><path fill='#fff' d='M2.6 5.6L0 8.3 2.6 11l1.2-1.2-.5-.5h9.4l-.5.5 1.2 1.2L16 8.3l-2.6-2.7-1.2 1.2.5.5H3.3l.5-.5-1.2-1.2z'/><path fill='#231f20' d='M5.1 279h-4v1h5v-5h-1zm5 0v5h-5v1h5v5h1v-5h5v-1h-5v-5z'/><path fill='#fff' d='M.6 278.5h4v-4h2v6h-6zm4.5.5h-4v1h5v-5h-1zm4.5-.5h2v5h5v2h-5v5h-2v-5h-5v-2h5zm.5 5.5h-5v1h5v5h1v-5h5v-1h-5v-5h-1z'/><path fill='#000' d='M2.6 6.3l-2 2 2 2 .6-.5-1-1H14l-1 1 .5.5 2-2-2-2-.5.5 1 1H2.1l1-1-.5-.5z'/></g>
    `, { width: 24, height: 24, viewBoxWidth: 16, viewBoxHeight: 16 });
}
var __glob_0_64 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": direction
}, Symbol.toStringTag, { value: "Module" }));
var doc = _icon_template(`<path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>`);
var __glob_0_65 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": doc
}, Symbol.toStringTag, { value: "Module" }));
var drag_handle = _icon_template(`<path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>`);
var __glob_0_66 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": drag_handle
}, Symbol.toStringTag, { value: "Module" }));
var drag_indicator = _icon_template(`<path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>`);
var __glob_0_67 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": drag_indicator
}, Symbol.toStringTag, { value: "Module" }));
var draw = _icon_template(`<path d="M18.85,10.39l1.06-1.06c0.78-0.78,0.78-2.05,0-2.83L18.5,5.09c-0.78-0.78-2.05-0.78-2.83,0l-1.06,1.06L18.85,10.39z M14.61,11.81L7.41,19H6v-1.41l7.19-7.19L14.61,11.81z M13.19,7.56L4,16.76V21h4.24l9.19-9.19L13.19,7.56L13.19,7.56z M19,17.5 c0,2.19-2.54,3.5-5,3.5c-0.55,0-1-0.45-1-1s0.45-1,1-1c1.54,0,3-0.73,3-1.5c0-0.47-0.48-0.87-1.23-1.2l1.48-1.48 C18.32,15.45,19,16.29,19,17.5z M4.58,13.35C3.61,12.79,3,12.06,3,11c0-1.8,1.89-2.63,3.56-3.36C7.59,7.18,9,6.56,9,6 c0-0.41-0.78-1-2-1C5.74,5,5.2,5.61,5.17,5.64C4.82,6.05,4.19,6.1,3.77,5.76C3.36,5.42,3.28,4.81,3.62,4.38C3.73,4.24,4.76,3,7,3 c2.24,0,4,1.32,4,3c0,1.87-1.93,2.72-3.64,3.47C6.42,9.88,5,10.5,5,11c0,0.31,0.43,0.6,1.07,0.86L4.58,13.35z" />`);
var __glob_0_68 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": draw
}, Symbol.toStringTag, { value: "Module" }));
var east = _icon_template(`<path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/>`);
var __glob_0_69 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": east
}, Symbol.toStringTag, { value: "Module" }));
var edit = _icon_template(`<path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>`);
var __glob_0_70 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": edit
}, Symbol.toStringTag, { value: "Module" }));
var end = _icon_template(`<path transform="translate(24,0) scale(-1, 1)" d="M14.59,7.41L18.17,11H6v2h12.17l-3.59,3.59L16,18l6-6l-6-6L14.59,7.41z M2,6v12h2V6H2z"/>`);
var __glob_0_71 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": end
}, Symbol.toStringTag, { value: "Module" }));
var exit_to_app = _icon_template(`<path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>`);
var __glob_0_72 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": exit_to_app
}, Symbol.toStringTag, { value: "Module" }));
var expand = _icon_template(`<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>`);
var __glob_0_73 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": expand
}, Symbol.toStringTag, { value: "Module" }));
var expand_more = _icon_template(`<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>`);
var __glob_0_74 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": expand_more
}, Symbol.toStringTag, { value: "Module" }));
var _export = _icon_template(`<path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/>`);
var __glob_0_75 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _export
}, Symbol.toStringTag, { value: "Module" }));
var face = _icon_template(`<path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>`);
var __glob_0_76 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": face
}, Symbol.toStringTag, { value: "Module" }));
var fast_forward = _icon_template(`<path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>`);
var __glob_0_77 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fast_forward
}, Symbol.toStringTag, { value: "Module" }));
var fast_rewind = _icon_template(`<path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>`);
var __glob_0_78 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fast_rewind
}, Symbol.toStringTag, { value: "Module" }));
var file_copy = _icon_template(`<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/>`);
var __glob_0_79 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": file_copy
}, Symbol.toStringTag, { value: "Module" }));
var filter = _icon_template(`<path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>`);
var __glob_0_80 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": filter
}, Symbol.toStringTag, { value: "Module" }));
var flag = _icon_template(`<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>`);
var __glob_0_81 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flag
}, Symbol.toStringTag, { value: "Module" }));
var flash_on = _icon_template(`<path d="M7 2v11h3v9l7-12h-4l4-8z"/>`);
var __glob_0_82 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flash_on
}, Symbol.toStringTag, { value: "Module" }));
var flatten = _icon_template(`<path d="M4,9v2h16V9H4z M16,4l-1.41-1.41L13,4.17V1h-2v3.19L9.39,2.61L8,4l4,4L16,4z M4,14h16v-2H4V14z M8,19l1.39,1.39L11,18.81 V22h2v-3.17l1.59,1.59L16,19l-4-4L8,19z"/>`);
var __glob_0_83 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flatten
}, Symbol.toStringTag, { value: "Module" }));
var flex = _icon_template(`<path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"/>`);
var __glob_0_84 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flex
}, Symbol.toStringTag, { value: "Module" }));
var flip = _icon_template(`<path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"/>`);
var __glob_0_85 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flip
}, Symbol.toStringTag, { value: "Module" }));
var flipY = _icon_template(`<path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"/>`);
var __glob_0_86 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flipY
}, Symbol.toStringTag, { value: "Module" }));
var flip_camera = _icon_template(`
    <path d="M9,12c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S9,10.34,9,12z"/>
    <path d="M8,10V8H5.09C6.47,5.61,9.05,4,12,4c3.72,0,6.85,2.56,7.74,6h2.06c-0.93-4.56-4.96-8-9.8-8C8.73,2,5.82,3.58,4,6.01V4H2v6
        H8z"/>
    <path d="M16,14v2h2.91c-1.38,2.39-3.96,4-6.91,4c-3.72,0-6.85-2.56-7.74-6H2.2c0.93,4.56,4.96,8,9.8,8c3.27,0,6.18-1.58,8-4.01V20
        h2v-6H16z"/>
`);
var __glob_0_87 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": flip_camera
}, Symbol.toStringTag, { value: "Module" }));
var folder = _icon_template(`<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>`);
var __glob_0_88 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": folder
}, Symbol.toStringTag, { value: "Module" }));
var font_download = _icon_template(`<path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/>`);
var __glob_0_89 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": font_download
}, Symbol.toStringTag, { value: "Module" }));
var format_bold = _icon_template(`<path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>`);
var __glob_0_90 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": format_bold
}, Symbol.toStringTag, { value: "Module" }));
var format_indent = _icon_template(`<path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>`);
var __glob_0_91 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": format_indent
}, Symbol.toStringTag, { value: "Module" }));
var format_line_spacing = _icon_template(`<path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"/>`);
var __glob_0_92 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": format_line_spacing
}, Symbol.toStringTag, { value: "Module" }));
var format_shapes = _icon_template(`<path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"/>`);
var __glob_0_93 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": format_shapes
}, Symbol.toStringTag, { value: "Module" }));
var format_size = _icon_template(`<path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>`);
var __glob_0_94 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": format_size
}, Symbol.toStringTag, { value: "Module" }));
var fullscreen = _icon_template(`<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>`);
var __glob_0_95 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fullscreen
}, Symbol.toStringTag, { value: "Module" }));
var gps_fixed = _icon_template(`<path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>`);
var __glob_0_96 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": gps_fixed
}, Symbol.toStringTag, { value: "Module" }));
var gradient = _icon_template('<path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/>');
var __glob_0_97 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": gradient
}, Symbol.toStringTag, { value: "Module" }));
var grid = _icon_template(`<path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z"/>`);
var __glob_0_98 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": grid
}, Symbol.toStringTag, { value: "Module" }));
var grid3x3 = _icon_template(`<path d="M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z"/>`);
var __glob_0_99 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": grid3x3
}, Symbol.toStringTag, { value: "Module" }));
var group = _icon_template(`
        <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/>
    `);
var __glob_0_100 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": group
}, Symbol.toStringTag, { value: "Module" }));
var height = _icon_template(`<polygon points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"/>`);
var __glob_0_101 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": height
}, Symbol.toStringTag, { value: "Module" }));
var highlight_at = _icon_template(`<path d="M17,5h-2V3h2V5z M15,15v6l2.29-2.29L19.59,21L21,19.59l-2.29-2.29L21,15H15z M19,9h2V7h-2V9z M19,13h2v-2h-2V13z M11,21h2 v-2h-2V21z M7,5h2V3H7V5z M3,17h2v-2H3V17z M5,21v-2H3C3,20.1,3.9,21,5,21z M19,3v2h2C21,3.9,20.1,3,19,3z M11,5h2V3h-2V5z M3,9h2 V7H3V9z M7,21h2v-2H7V21z M3,13h2v-2H3V13z M3,5h2V3C3.9,3,3,3.9,3,5z"/>`);
var __glob_0_102 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": highlight_at
}, Symbol.toStringTag, { value: "Module" }));
var horizontal_align_center = _icon_template(`<path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" transform="rotate(-90 12 12)" />`);
var __glob_0_103 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": horizontal_align_center
}, Symbol.toStringTag, { value: "Module" }));
var horizontal_distribute = _icon_template(`<path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"/>`);
var __glob_0_104 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": horizontal_distribute
}, Symbol.toStringTag, { value: "Module" }));
var horizontal_rule = _icon_template(`<rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/>`);
var __glob_0_105 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": horizontal_rule
}, Symbol.toStringTag, { value: "Module" }));
var image = _icon_template(`<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>`);
var __glob_0_106 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": image
}, Symbol.toStringTag, { value: "Module" }));
var input = _icon_template(`<path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/>`);
var __glob_0_107 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": input
}, Symbol.toStringTag, { value: "Module" }));
var italic = _icon_template(`<path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>`);
var __glob_0_108 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": italic
}, Symbol.toStringTag, { value: "Module" }));
var join_full = _icon_template(`
<g>
    <g>
        <ellipse cx="12" cy="12" rx="3" ry="5.74"/>
        <path d="M7.5,12c0-0.97,0.23-4.16,3.03-6.5C9.75,5.19,8.9,5,8,5c-3.86,0-7,3.14-7,7s3.14,7,7,7c0.9,0,1.75-0.19,2.53-0.5 C7.73,16.16,7.5,12.97,7.5,12z"/><path d="M16,5c-0.9,0-1.75,0.19-2.53,0.5c2.8,2.34,3.03,5.53,3.03,6.5c0,0.97-0.23,4.16-3.03,6.5C14.25,18.81,15.1,19,16,19 c3.86,0,7-3.14,7-7S19.86,5,16,5z"/>
    </g>
</g>
`);
var __glob_0_109 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": join_full
}, Symbol.toStringTag, { value: "Module" }));
var join_right = _icon_template(`
<ellipse cx="12" cy="12" rx="3" ry="5.74"/>
<path d="M16.5,12c0,0.97-0.23,4.16-3.03,6.5C14.25,18.81,15.1,19,16,19c3.86,0,7-3.14,7-7s-3.14-7-7-7c-0.9,0-1.75,0.19-2.53,0.5 C16.27,7.84,16.5,11.03,16.5,12z"/></g><g><path d="M8,19c0.9,0,1.75-0.19,2.53-0.5c-0.61-0.51-1.1-1.07-1.49-1.63C8.71,16.95,8.36,17,8,17c-2.76,0-5-2.24-5-5s2.24-5,5-5 c0.36,0,0.71,0.05,1.04,0.13c0.39-0.56,0.88-1.12,1.49-1.63C9.75,5.19,8.9,5,8,5c-3.86,0-7,3.14-7,7S4.14,19,8,19z"/>
`);
var __glob_0_110 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": join_right
}, Symbol.toStringTag, { value: "Module" }));
var justify_content_space_around = _icon_template(`<path d="M15,7v10H9V7H15z M21,5h-3v14h3V5z M17,5H7v14h10V5z M6,5H3v14h3V5z"/>`);
var __glob_0_111 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": justify_content_space_around
}, Symbol.toStringTag, { value: "Module" }));
var keyboard = _icon_template(`<path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/>`);
var __glob_0_112 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keyboard
}, Symbol.toStringTag, { value: "Module" }));
var keyboard_arrow_down = _icon_template(`<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>`);
var __glob_0_113 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keyboard_arrow_down
}, Symbol.toStringTag, { value: "Module" }));
var keyboard_arrow_left = _icon_template(`<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>`);
var __glob_0_114 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keyboard_arrow_left
}, Symbol.toStringTag, { value: "Module" }));
var keyboard_arrow_right = _icon_template(`<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>`);
var __glob_0_115 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keyboard_arrow_right
}, Symbol.toStringTag, { value: "Module" }));
var keyboard_arrow_up = _icon_template(`<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>`);
var __glob_0_116 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": keyboard_arrow_up
}, Symbol.toStringTag, { value: "Module" }));
var landscape = _icon_template(`<path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>`);
var __glob_0_117 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": landscape
}, Symbol.toStringTag, { value: "Module" }));
var launch = _icon_template(`
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
    `);
var __glob_0_118 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": launch
}, Symbol.toStringTag, { value: "Module" }));
var layers = _icon_template(`<path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>`);
var __glob_0_119 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": layers
}, Symbol.toStringTag, { value: "Module" }));
var layout_default = _icon_template(`<path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4-8H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/>`);
var __glob_0_120 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": layout_default
}, Symbol.toStringTag, { value: "Module" }));
var layout_flex = _icon_template(`<path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z"/>`);
var __glob_0_121 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": layout_flex
}, Symbol.toStringTag, { value: "Module" }));
var layout_grid = _icon_template(`<path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z"/>`);
var __glob_0_122 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": layout_grid
}, Symbol.toStringTag, { value: "Module" }));
var left = _icon_template(`<path d="M2,4 L2,20Z M6,10 L16,10 L16,14 L6,14Z" stroke-width="1" />`);
var __glob_0_123 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": left
}, Symbol.toStringTag, { value: "Module" }));
var left_hide = _icon_template(`<path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>`);
var __glob_0_124 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": left_hide
}, Symbol.toStringTag, { value: "Module" }));
var lens = _icon_template(`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>`);
var __glob_0_125 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": lens
}, Symbol.toStringTag, { value: "Module" }));
var light = _icon_template(`<path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>`);
var __glob_0_126 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": light
}, Symbol.toStringTag, { value: "Module" }));
var line_cap_butt = _icon_template(`
        <rect class="base" width="13" height="12" x="3" y="2" fill="transparent" fill-rule="nonzero"></rect>
        <path stroke="currentColor"  fill="transparent" fill-rule="nonzero" d="M3.5,6.06300874 C4.20280365,6.2438979 4.7561021,6.79719635 4.93699126,7.5 L16,7.5 L16,8.5 L4.93699126,8.5 C4.7561021,9.20280365 4.20280365,9.7561021 3.5,9.93699126 L3.5,13.5 L16,13.5 L16,14.5 L2.5,14.5 L2.5,9.93699126 C1.63738639,9.71496986 1,8.93191971 1,8 C1,7.06808029 1.63738639,6.28503014 2.5,6.06300874 L2.5,1.5 L16,1.5 L16,2.5 L3.5,2.5 L3.5,6.06300874 Z"></path>
    `, { width: 18, height: 16 });
var __glob_0_127 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_cap_butt
}, Symbol.toStringTag, { value: "Module" }));
var line_cap_round = _icon_template(`
        <path class="base" fill="transparent" fill-rule="nonzero" d="M8,2 L16,2 L16,14 L8,14 C4.6862915,14 2,11.3137085 2,8 L2,8 C2,4.6862915 4.6862915,2 8,2 Z"></path>
        <path stroke="currentColor" fill="transparent" fill-rule="nonzero" d="M9.93699126,8.5 C9.71496986,9.36261361 8.93191971,10 8,10 C6.8954305,10 6,9.1045695 6,8 C6,6.8954305 6.8954305,6 8,6 C8.93191971,6 9.71496986,6.63738639 9.93699126,7.5 L16,7.5 L16,8.5 L9.93699126,8.5 Z M16,13.5 L16,14.5 L8,14.5 C4.41014913,14.5 1.5,11.5898509 1.5,8 C1.5,4.41014913 4.41014913,1.5 8,1.5 L16,1.5 L16,2.5 L8,2.5 C4.96243388,2.5 2.5,4.96243388 2.5,8 C2.5,11.0375661 4.96243388,13.5 8,13.5 L16,13.5 Z"></path>
    `, { width: 18, height: 16 });
var __glob_0_128 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_cap_round
}, Symbol.toStringTag, { value: "Module" }));
var line_cap_square = _icon_template(`
        <rect class="base" width="14" height="12" x="2" y="2" fill="transparent" fill-rule="nonzero"></rect>
        <path stroke="currentColor" fill="transparent" fill-rule="nonzero" d="M9.93699126,8.5 C9.71496986,9.36261361 8.93191971,10 8,10 C6.8954305,10 6,9.1045695 6,8 C6,6.8954305 6.8954305,6 8,6 C8.93191971,6 9.71496986,6.63738639 9.93699126,7.5 L16,7.5 L16,8.5 L9.93699126,8.5 Z M2.5,13.5 L16,13.5 L16,14.5 L1.5,14.5 L1.5,1.5 L16,1.5 L16,2.5 L2.5,2.5 L2.5,13.5 Z"></path>
    `, { width: 18, height: 16 });
var __glob_0_129 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_cap_square
}, Symbol.toStringTag, { value: "Module" }));
var line_chart = _icon_template(`<path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>`);
var __glob_0_130 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_chart
}, Symbol.toStringTag, { value: "Module" }));
var line_join_bevel = _icon_template(`<g fill="none" fill-rule="evenodd"><polygon class="base" fill="transparent" fill-rule="nonzero" points="2 14.5 2 7.538 7.382 1.5 16 1.5 16 14.5"></polygon><path fill="currentColor" fill-rule="nonzero" d="M2.96551724,7.95245414 L2.96551724,14.5 L2,14.5 L2,7.53775146 L7.38172454,1.5 L16,1.5 L16,2.46 L7.76471206,2.46 L2.96551724,7.95245414 Z M10.9369913,9 C10.7561021,9.70280365 10.2028036,10.2561021 9.5,10.4369913 L9.5,14.5 L8.5,14.5 L8.5,10.4369913 C7.63738639,10.2149699 7,9.43191971 7,8.5 C7,7.3954305 7.8954305,6.5 9,6.5 C9.93191971,6.5 10.7149699,7.13738639 10.9369913,8 L16,8 L16,9 L10.9369913,9 Z"></path></g>`, { width: 18, height: 16 });
var __glob_0_131 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_join_bevel
}, Symbol.toStringTag, { value: "Module" }));
var line_join_miter = _icon_template(`<g fill="none" fill-rule="evenodd"><rect class="base" width="14" height="13" x="2" y="1.5" fill="transparent" fill-rule="nonzero"></rect><path fill="currentColor" fill-rule="nonzero" d="M10.9369913,9 C10.7561021,9.70280365 10.2028036,10.2561021 9.5,10.4369913 L9.5,14.5 L8.5,14.5 L8.5,10.4369913 C7.63738639,10.2149699 7,9.43191971 7,8.5 C7,7.3954305 7.8954305,6.5 9,6.5 C9.93191971,6.5 10.7149699,7.13738639 10.9369913,8 L16,8 L16,9 L10.9369913,9 Z M3,2.5 L3,14.5 L2,14.5 L2,1.5 L16,1.5 L16,2.5 L3,2.5 Z"></path></g>`, { width: 18, height: 16 });
var __glob_0_132 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_join_miter
}, Symbol.toStringTag, { value: "Module" }));
var line_join_round = _icon_template(`<g fill="none" fill-rule="evenodd"><path class="base" fill="transparent" fill-rule="nonzero" d="M9,1.5 L16,1.5 L16,14.5 L2,14.5 L2,8.5 C2,4.63400675 5.13400675,1.5 9,1.5 Z"></path><path fill="currentColor" fill-rule="nonzero" d="M2.96551724,14.5 L2,14.5 L2,7.74 C2,4.29374316 4.80979916,1.5 8.27586207,1.5 L16,1.5 L16,2.46 L8.27586207,2.46 C5.3430396,2.46 2.96551724,4.82393652 2.96551724,7.74 L2.96551724,14.5 Z M10.9369913,9 C10.7561021,9.70280365 10.2028036,10.2561021 9.5,10.4369913 L9.5,14.5 L8.5,14.5 L8.5,10.4369913 C7.63738639,10.2149699 7,9.43191971 7,8.5 C7,7.3954305 7.8954305,6.5 9,6.5 C9.93191971,6.5 10.7149699,7.13738639 10.9369913,8 L16,8 L16,9 L10.9369913,9 Z"></path></g>`, { width: 18, height: 16 });
var __glob_0_133 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_join_round
}, Symbol.toStringTag, { value: "Module" }));
var line_style = _icon_template(`<path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"/>`);
var __glob_0_134 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_style
}, Symbol.toStringTag, { value: "Module" }));
var line_weight = _icon_template(`<path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/>`);
var __glob_0_135 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": line_weight
}, Symbol.toStringTag, { value: "Module" }));
var list = _icon_template(`<path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>`);
var __glob_0_136 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": list
}, Symbol.toStringTag, { value: "Module" }));
var local_library = _icon_template(`<path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>`);
var __glob_0_137 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": local_library
}, Symbol.toStringTag, { value: "Module" }));
var local_movie = _icon_template(`<path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>`);
var __glob_0_138 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": local_movie
}, Symbol.toStringTag, { value: "Module" }));
var lock = _icon_template(`<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>`);
var __glob_0_139 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": lock
}, Symbol.toStringTag, { value: "Module" }));
var lock_open = _icon_template(`<path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>`);
var __glob_0_140 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": lock_open
}, Symbol.toStringTag, { value: "Module" }));
var looks = _icon_template(`<path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"/>`);
var __glob_0_141 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": looks
}, Symbol.toStringTag, { value: "Module" }));
var margin = _icon_template(`<path d="M3,3v18h18V3H3z M19,19H5V5h14V19z M11,7h2v2h-2V7z M7,7h2v2H7V7z M15,7h2v2h-2V7z M7,11h2v2H7V11z M11,11h2v2h-2V11z M15,11h2v2h-2V11z"/>`);
var __glob_0_142 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": margin
}, Symbol.toStringTag, { value: "Module" }));
var merge = _icon_template(`<path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/>`);
var __glob_0_143 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": merge
}, Symbol.toStringTag, { value: "Module" }));
var middle = _icon_template(`<path d="M4,12 L20,12Z M10,8 L10,16 L14,16 L14,8Z" stroke-width="1" />`);
var __glob_0_144 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": middle
}, Symbol.toStringTag, { value: "Module" }));
var navigation = _icon_template(`<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" transform="rotate(-30 12 12)" stroke-width="1" fill="transparent"/>`);
var __glob_0_145 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": navigation
}, Symbol.toStringTag, { value: "Module" }));
var near_me = _icon_template(`<path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>`);
var __glob_0_146 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": near_me
}, Symbol.toStringTag, { value: "Module" }));
var north = _icon_template(`<path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"/>`);
var __glob_0_147 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": north
}, Symbol.toStringTag, { value: "Module" }));
var note = _icon_template(`<path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/>`);
var __glob_0_148 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": note
}, Symbol.toStringTag, { value: "Module" }));
var nowrap = _icon_template(`<path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/>`);
var __glob_0_149 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": nowrap
}, Symbol.toStringTag, { value: "Module" }));
var opacity = _icon_template(`<path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/>`);
var __glob_0_150 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": opacity
}, Symbol.toStringTag, { value: "Module" }));
var outline = _icon_template(`
    <path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"/>
`);
var __glob_0_151 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outline
}, Symbol.toStringTag, { value: "Module" }));
var outline_circle = _icon_template(`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>`);
var __glob_0_152 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outline_circle
}, Symbol.toStringTag, { value: "Module" }));
var outline_image = _icon_template(`<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>`);
var __glob_0_153 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outline_image
}, Symbol.toStringTag, { value: "Module" }));
var outline_rect = _icon_template(`<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>`);
var __glob_0_154 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outline_rect
}, Symbol.toStringTag, { value: "Module" }));
var outline_shape = _icon_template(`<path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/>`);
var __glob_0_155 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outline_shape
}, Symbol.toStringTag, { value: "Module" }));
var padding = _icon_template(`<path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/>`);
var __glob_0_156 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": padding
}, Symbol.toStringTag, { value: "Module" }));
var paint = _icon_template(`<path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/>`);
var __glob_0_157 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": paint
}, Symbol.toStringTag, { value: "Module" }));
var palette = _icon_template(`<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`);
var __glob_0_158 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": palette
}, Symbol.toStringTag, { value: "Module" }));
var pantool = _icon_template(`<path d="M23,5.5V20c0,2.2-1.8,4-4,4h-7.3c-1.08,0-2.1-0.43-2.85-1.19L1,14.83c0,0,1.26-1.23,1.3-1.25 c0.22-0.19,0.49-0.29,0.79-0.29c0.22,0,0.42,0.06,0.6,0.16C3.73,13.46,8,15.91,8,15.91V4c0-0.83,0.67-1.5,1.5-1.5S11,3.17,11,4v7 h1V1.5C12,0.67,12.67,0,13.5,0S15,0.67,15,1.5V11h1V2.5C16,1.67,16.67,1,17.5,1S19,1.67,19,2.5V11h1V5.5C20,4.67,20.67,4,21.5,4 S23,4.67,23,5.5z"/>`);
var __glob_0_159 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pantool
}, Symbol.toStringTag, { value: "Module" }));
var pattern_check = _icon_template(`<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>`);
var __glob_0_160 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pattern_check
}, Symbol.toStringTag, { value: "Module" }));
var pattern_cross_dot = _icon_template(`<path d="M6,13c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S6.55,13,6,13z M6,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S6.55,17,6,17z M6,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S6.55,9,6,9z M3,9.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5 s0.5-0.22,0.5-0.5S3.28,9.5,3,9.5z M6,5C5.45,5,5,5.45,5,6s0.45,1,1,1s1-0.45,1-1S6.55,5,6,5z M21,10.5c0.28,0,0.5-0.22,0.5-0.5 S21.28,9.5,21,9.5s-0.5,0.22-0.5,0.5S20.72,10.5,21,10.5z M14,7c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S13.45,7,14,7z M14,3.5 c0.28,0,0.5-0.22,0.5-0.5S14.28,2.5,14,2.5S13.5,2.72,13.5,3S13.72,3.5,14,3.5z M3,13.5c-0.28,0-0.5,0.22-0.5,0.5 s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5S3.28,13.5,3,13.5z M10,20.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5 S10.28,20.5,10,20.5z M10,3.5c0.28,0,0.5-0.22,0.5-0.5S10.28,2.5,10,2.5S9.5,2.72,9.5,3S9.72,3.5,10,3.5z M10,7c0.55,0,1-0.45,1-1 s-0.45-1-1-1S9,5.45,9,6S9.45,7,10,7z M10,12.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S10.83,12.5,10,12.5z M18,13c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S18.55,13,18,13z M18,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S18.55,17,18,17z M18,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S18.55,9,18,9z M18,5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S18.55,5,18,5z M21,13.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5S21.28,13.5,21,13.5z M14,17 c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S14.55,17,14,17z M14,20.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5 S14.28,20.5,14,20.5z M10,8.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S10.83,8.5,10,8.5z M10,17 c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S10.55,17,10,17z M14,12.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S14.83,12.5,14,12.5z M14,8.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S14.83,8.5,14,8.5z"/>`);
var __glob_0_161 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pattern_cross_dot
}, Symbol.toStringTag, { value: "Module" }));
var pattern_dot = _icon_template(`<path d="M6,13c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S6.55,13,6,13z M6,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S6.55,17,6,17z M6,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S6.55,9,6,9z M3,9.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5 s0.5-0.22,0.5-0.5S3.28,9.5,3,9.5z M6,5C5.45,5,5,5.45,5,6s0.45,1,1,1s1-0.45,1-1S6.55,5,6,5z M21,10.5c0.28,0,0.5-0.22,0.5-0.5 S21.28,9.5,21,9.5s-0.5,0.22-0.5,0.5S20.72,10.5,21,10.5z M14,7c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S13.45,7,14,7z M14,3.5 c0.28,0,0.5-0.22,0.5-0.5S14.28,2.5,14,2.5S13.5,2.72,13.5,3S13.72,3.5,14,3.5z M3,13.5c-0.28,0-0.5,0.22-0.5,0.5 s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5S3.28,13.5,3,13.5z M10,20.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5 S10.28,20.5,10,20.5z M10,3.5c0.28,0,0.5-0.22,0.5-0.5S10.28,2.5,10,2.5S9.5,2.72,9.5,3S9.72,3.5,10,3.5z M10,7c0.55,0,1-0.45,1-1 s-0.45-1-1-1S9,5.45,9,6S9.45,7,10,7z M10,12.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S10.83,12.5,10,12.5z M18,13c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S18.55,13,18,13z M18,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S18.55,17,18,17z M18,9c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S18.55,9,18,9z M18,5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S18.55,5,18,5z M21,13.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5S21.28,13.5,21,13.5z M14,17 c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S14.55,17,14,17z M14,20.5c-0.28,0-0.5,0.22-0.5,0.5s0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5 S14.28,20.5,14,20.5z M10,8.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S10.83,8.5,10,8.5z M10,17 c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S10.55,17,10,17z M14,12.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S14.83,12.5,14,12.5z M14,8.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S14.83,8.5,14,8.5z"/>`);
var __glob_0_162 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pattern_dot
}, Symbol.toStringTag, { value: "Module" }));
var pattern_grid = _icon_template(`<path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/>`);
var __glob_0_163 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pattern_grid
}, Symbol.toStringTag, { value: "Module" }));
var pattern_horizontal_line = _icon_template(`<path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>`);
var __glob_0_164 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pattern_horizontal_line
}, Symbol.toStringTag, { value: "Module" }));
var pause = _icon_template(`<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`);
var __glob_0_165 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pause
}, Symbol.toStringTag, { value: "Module" }));
var pentool = _icon_template(`
    <g transform="translate(4.000003875248012, 4.000001937624006)">
        <path stroke="currentColor" d="M 7.501491970838878 -0.0000015572448855733659Q 14.336036333057622 7.389304433496911 15.674208571053226 11.025537025755131Q 17.012380809048864 14.661769618013372 12.854180922821438 14.544928811787997L 12.854180922821438 16.99999278410904L 3.2146550430021494 16.99999278410904L 3.2146550430021494 14.544928811787997Q -0.8480130988910353 14.661769618013372 0.22369613306813782 11.025537025755131Q 1.295405365027311 7.389304433496911 7.501491970838878 -0.0000015572448855733659Z M 7.501491970838878 -0.0000015572448855733659M 7.043097362212707 10.615180199186797L 7.043097362212707 2.029497238417552Q 2.4235653311211847 7.389304433496911 1.2143202542326725 11.099378313047254Q 0.22369613306813782 14.380813978493594 4.269842778971384 13.709709450113499L 4.269842778971384 16.233605781316655L 11.751764459057853 16.233605781316655L 11.751764459057853 13.709709450113499Q 15.84146041516868 14.140123940309786 14.670231046646997 10.775846698306177Q 14.195747591990225 9.593976493057127 8.077664264490855 2.029497238417552L 8.077664264490855 10.615180199186797L 7.043097362212707 10.615180199186797Z"/>
    </g>
`);
var __glob_0_166 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pentool
}, Symbol.toStringTag, { value: "Module" }));
var photo = _icon_template(`<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>`);
var __glob_0_167 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": photo
}, Symbol.toStringTag, { value: "Module" }));
var play = _icon_template(`<path d="M8 5v14l11-7z"/>`);
var __glob_0_168 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": play
}, Symbol.toStringTag, { value: "Module" }));
var plugin = _icon_template(`<path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/>`);
var __glob_0_169 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": plugin
}, Symbol.toStringTag, { value: "Module" }));
var polygon = _icon_template(`<path d="M17.2,3H6.8l-5.2,9l5.2,9h10.4l5.2-9L17.2,3z M16.05,19H7.95l-4.04-7l4.04-7h8.09l4.04,7L16.05,19z"/>`);
var __glob_0_170 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": polygon
}, Symbol.toStringTag, { value: "Module" }));
var power_input = _icon_template(`<path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>`);
var __glob_0_171 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": power_input
}, Symbol.toStringTag, { value: "Module" }));
var publish = _icon_template(`<path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/>`);
var __glob_0_172 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": publish
}, Symbol.toStringTag, { value: "Module" }));
var rect = _icon_template(`<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>`);
var __glob_0_173 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": rect
}, Symbol.toStringTag, { value: "Module" }));
var redo = _icon_template(`<path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>`);
var __glob_0_174 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": redo
}, Symbol.toStringTag, { value: "Module" }));
var refresh = _icon_template(`<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>`);
var __glob_0_175 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": refresh
}, Symbol.toStringTag, { value: "Module" }));
var remove = _icon_template(`<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>`);
var __glob_0_176 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": remove
}, Symbol.toStringTag, { value: "Module" }));
var remove2 = _icon_template(`<path d="M19 13H5v-2h14v2z"/>`);
var __glob_0_177 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": remove2
}, Symbol.toStringTag, { value: "Module" }));
var repeat = _icon_template(`<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>`);
var __glob_0_178 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": repeat
}, Symbol.toStringTag, { value: "Module" }));
var replay = _icon_template(`<defs><path id="a" d="M0 0h24v24H0V0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z" clip-path="url(#b)"/>`);
var __glob_0_179 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": replay
}, Symbol.toStringTag, { value: "Module" }));
var right = _icon_template(`<path d="M20,4 L20,20Z M6,10 L16,10 L16,14 L6,14Z" stroke-width="1" />`);
var __glob_0_180 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": right
}, Symbol.toStringTag, { value: "Module" }));
var right_hide = _icon_template(`<path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>`);
var __glob_0_181 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": right_hide
}, Symbol.toStringTag, { value: "Module" }));
var rotate = _icon_template(`
        <path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z" stroke='white' stroke-width="0.5" />
    `);
var __glob_0_182 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": rotate
}, Symbol.toStringTag, { value: "Module" }));
var rotate_left = _icon_template(`<path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/>`);
var __glob_0_183 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": rotate_left
}, Symbol.toStringTag, { value: "Module" }));
var round = _icon_template(`<path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"/>`);
var __glob_0_184 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": round
}, Symbol.toStringTag, { value: "Module" }));
var same_height = _icon_template(`
    <path d="M4,4 L20,4Z M4,20 L20,20Z M10,8 L10,16 L14,16 L14,8Z" stroke-width="1" />
`);
var __glob_0_185 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": same_height
}, Symbol.toStringTag, { value: "Module" }));
var same_width = _icon_template(`
    <path d="M20,4 L20,20Z M2,4 L2,20Z M6,10 L16,10 L16,14 L6,14Z" stroke-width="1" />
`);
var __glob_0_186 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": same_width
}, Symbol.toStringTag, { value: "Module" }));
var save = _icon_template(`<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/>`);
var __glob_0_187 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": save
}, Symbol.toStringTag, { value: "Module" }));
var scatter = _icon_template(`<g fill="#010101"><circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/><circle cx="16.6" cy="17.6" r="3"/></g>`);
var __glob_0_188 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": scatter
}, Symbol.toStringTag, { value: "Module" }));
var screen = _icon_template(`<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>`);
var __glob_0_189 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": screen
}, Symbol.toStringTag, { value: "Module" }));
var setting = _icon_template(`<path d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>`);
var __glob_0_190 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": setting
}, Symbol.toStringTag, { value: "Module" }));
var settings_input_component = _icon_template(`<path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"/>`);
var __glob_0_191 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": settings_input_component
}, Symbol.toStringTag, { value: "Module" }));
var shadow = _icon_template(`<path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>`);
var __glob_0_192 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": shadow
}, Symbol.toStringTag, { value: "Module" }));
var shape = _icon_template(`<path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2z"/>`);
var __glob_0_193 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": shape
}, Symbol.toStringTag, { value: "Module" }));
var shuffle = _icon_template(`<path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>`);
var __glob_0_194 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": shuffle
}, Symbol.toStringTag, { value: "Module" }));
var size = _icon_template(`<path d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"/>`);
var __glob_0_195 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": size
}, Symbol.toStringTag, { value: "Module" }));
var skip_next = _icon_template(`<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>`);
var __glob_0_196 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": skip_next
}, Symbol.toStringTag, { value: "Module" }));
var skip_prev = _icon_template(`<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>`);
var __glob_0_197 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": skip_prev
}, Symbol.toStringTag, { value: "Module" }));
var smooth = _icon_template(`<path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"/>`);
var __glob_0_198 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": smooth
}, Symbol.toStringTag, { value: "Module" }));
var source = _icon_template(`<path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17 l2,2H20V18z M18,12H6v-2h12V12z M14,16H6v-2h8V16z"/>`);
var __glob_0_199 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": source
}, Symbol.toStringTag, { value: "Module" }));
var south = _icon_template(`<path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"/>`);
var __glob_0_200 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": south
}, Symbol.toStringTag, { value: "Module" }));
var space = _icon_template(`<path d="M18 9v4H6V9H4v6h16V9h-2z"/>`);
var __glob_0_201 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": space
}, Symbol.toStringTag, { value: "Module" }));
var specular = _icon_template(`<path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"/>`);
var __glob_0_202 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": specular
}, Symbol.toStringTag, { value: "Module" }));
var speed = _icon_template(`<path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/>`);
var __glob_0_203 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": speed
}, Symbol.toStringTag, { value: "Module" }));
var star = _icon_template(`<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>`);
var __glob_0_204 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": star
}, Symbol.toStringTag, { value: "Module" }));
var start = _icon_template(`<path d="M14.59,7.41L18.17,11H6v2h12.17l-3.59,3.59L16,18l6-6l-6-6L14.59,7.41z M2,6v12h2V6H2z"/>`);
var __glob_0_205 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": start
}, Symbol.toStringTag, { value: "Module" }));
var storage = _icon_template(`<path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/>`);
var __glob_0_206 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": storage
}, Symbol.toStringTag, { value: "Module" }));
var straighten = _icon_template(`<path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>`);
var __glob_0_207 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": straighten
}, Symbol.toStringTag, { value: "Module" }));
var strikethrough = _icon_template(`<defs><path id="a" d="M0 0h24v24H0V0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z"/>`);
var __glob_0_208 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": strikethrough
}, Symbol.toStringTag, { value: "Module" }));
var stroke_to_path = _icon_template(`<path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10zm2-8h8v6H8v-6z"/>`);
var __glob_0_209 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": stroke_to_path
}, Symbol.toStringTag, { value: "Module" }));
var swap_horiz = _icon_template(`<path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>`);
var __glob_0_210 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": swap_horiz
}, Symbol.toStringTag, { value: "Module" }));
var switch_left = _icon_template(`<path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z"/>`);
var __glob_0_211 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": switch_left
}, Symbol.toStringTag, { value: "Module" }));
var switch_right = _icon_template(`<path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z"/>`);
var __glob_0_212 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": switch_right
}, Symbol.toStringTag, { value: "Module" }));
var sync = _icon_template(`<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>`);
var __glob_0_213 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": sync
}, Symbol.toStringTag, { value: "Module" }));
var table_rows = _icon_template(`<path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,5v3H5V5H19z M19,10v4H5v-4H19z M5,19v-3h14v3H5z"/>`);
var __glob_0_214 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": table_rows
}, Symbol.toStringTag, { value: "Module" }));
var text_rotate = _icon_template(`<path d="M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1L12.75 3zm-2.62 7L12 4.98 13.87 10h-3.74zm10.37 8l-3-3v2H5v2h12.5v2l3-3z"/>`);
var __glob_0_215 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": text_rotate
}, Symbol.toStringTag, { value: "Module" }));
var texture = _icon_template(`<path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"/>`);
var __glob_0_216 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": texture
}, Symbol.toStringTag, { value: "Module" }));
var timer = _icon_template(`<path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>`);
var __glob_0_217 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": timer
}, Symbol.toStringTag, { value: "Module" }));
var title = _icon_template(`<path d="M22.25 39.1V12.4H10.9V8.9H37.1V12.4H25.75V39.1Z"/>`, {
  width: 48,
  height: 48
});
var __glob_0_218 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": title
}, Symbol.toStringTag, { value: "Module" }));
var to_back = _icon_template(`<path d="M 7 7L 22 7L 22 22L 7 22L 7 7Z" class="target" /><path d="M 0 0L 14 0L 14 14L 0 14L 0 0Z M 16 16L 30 16L 30 30L 16 30L 16 16Z"/>`, { width: 30, height: 30 });
var __glob_0_219 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": to_back
}, Symbol.toStringTag, { value: "Module" }));
var to_front = _icon_template(`<path d="M 0 0L 14 0L 14 14L 0 14L 0 0Z M 16 16L 30 16L 30 30L 16 30L 16 16Z"/><path class="target" d="M 7 7L 22 7L 22 22L 7 22L 7 7Z"/>`, { width: 30, height: 30 });
var __glob_0_220 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": to_front
}, Symbol.toStringTag, { value: "Module" }));
var tonality = _icon_template(`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/>`);
var __glob_0_221 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tonality
}, Symbol.toStringTag, { value: "Module" }));
var top = _icon_template(`<path d="M4,4 L20,4Z M10,8 L10,16 L14,16 L14,8Z" stroke-width="1" />`);
var __glob_0_222 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": top
}, Symbol.toStringTag, { value: "Module" }));
var transform = _icon_template(`<path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"/>`);
var __glob_0_223 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": transform
}, Symbol.toStringTag, { value: "Module" }));
var underline = _icon_template(`<path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>`);
var __glob_0_224 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": underline
}, Symbol.toStringTag, { value: "Module" }));
var undo = _icon_template(`<path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>`);
var __glob_0_225 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": undo
}, Symbol.toStringTag, { value: "Module" }));
var unfold = _icon_template(`<path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>`);
var __glob_0_226 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": unfold
}, Symbol.toStringTag, { value: "Module" }));
var vertical_align_baseline = _icon_template(`<path d="M16,18v2H8v-2H16z M11,7.99V16h2V7.99h3L12,4L8,7.99H11z"/>`);
var __glob_0_227 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vertical_align_baseline
}, Symbol.toStringTag, { value: "Module" }));
var vertical_align_bottom = _icon_template(`<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>`);
var __glob_0_228 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vertical_align_bottom
}, Symbol.toStringTag, { value: "Module" }));
var vertical_align_center = _icon_template(`<path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/>`);
var __glob_0_229 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vertical_align_center
}, Symbol.toStringTag, { value: "Module" }));
var vertical_align_stretch = _icon_template(`
    <path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z M19,19H5v-4h14V19z"/>
    <path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,9H5V5h14V9z"/>
`);
var __glob_0_230 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vertical_align_stretch
}, Symbol.toStringTag, { value: "Module" }));
var vertical_align_top = _icon_template(`<path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/>`);
var __glob_0_231 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vertical_align_top
}, Symbol.toStringTag, { value: "Module" }));
var vertical_distribute = _icon_template(`<path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"/>`);
var __glob_0_232 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vertical_distribute
}, Symbol.toStringTag, { value: "Module" }));
var video = _icon_template(`
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
    `);
var __glob_0_233 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": video
}, Symbol.toStringTag, { value: "Module" }));
var view_comfy = _icon_template(`<path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"/>`);
var __glob_0_234 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": view_comfy
}, Symbol.toStringTag, { value: "Module" }));
var view_list = _icon_template(`<path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>`);
var __glob_0_235 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": view_list
}, Symbol.toStringTag, { value: "Module" }));
var view_week = _icon_template(`<path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z"/>`);
var __glob_0_236 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": view_week
}, Symbol.toStringTag, { value: "Module" }));
var view_week_reverse = _icon_template(`<path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z M0,12 L24,12"/>`);
var __glob_0_237 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": view_week_reverse
}, Symbol.toStringTag, { value: "Module" }));
var vignette = _icon_template(`<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"/>`);
var __glob_0_238 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vignette
}, Symbol.toStringTag, { value: "Module" }));
var vintage = _icon_template(`<path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>`);
var __glob_0_239 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vintage
}, Symbol.toStringTag, { value: "Module" }));
var visible = _icon_template(`<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>`);
var __glob_0_240 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": visible
}, Symbol.toStringTag, { value: "Module" }));
var visible_off = _icon_template(`<path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>`);
var __glob_0_241 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": visible_off
}, Symbol.toStringTag, { value: "Module" }));
var volume_down = _icon_template(`
        <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
    `);
var __glob_0_242 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": volume_down
}, Symbol.toStringTag, { value: "Module" }));
var volume_off = _icon_template(`
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
`);
var __glob_0_243 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": volume_off
}, Symbol.toStringTag, { value: "Module" }));
var volume_up = _icon_template(`
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
`);
var __glob_0_244 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": volume_up
}, Symbol.toStringTag, { value: "Module" }));
var wave = _icon_template(`<path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"/>`);
var __glob_0_245 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": wave
}, Symbol.toStringTag, { value: "Module" }));
var waves = _icon_template(`<path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"/>`);
var __glob_0_246 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": waves
}, Symbol.toStringTag, { value: "Module" }));
var web = _icon_template(`<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>`);
var __glob_0_247 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": web
}, Symbol.toStringTag, { value: "Module" }));
var west = _icon_template(`<path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>`);
var __glob_0_248 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": west
}, Symbol.toStringTag, { value: "Module" }));
var width = _icon_template(`<polygon transform="rotate(90 12 12)" points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"/>`);
var __glob_0_249 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": width
}, Symbol.toStringTag, { value: "Module" }));
var wrap = _icon_template(`<path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/>`);
var __glob_0_250 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": wrap
}, Symbol.toStringTag, { value: "Module" }));
var wrap_text = _icon_template(`<path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/>`);
var __glob_0_251 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": wrap_text
}, Symbol.toStringTag, { value: "Module" }));
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
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _eventList, _eventMap;
function debounce(callback, delay = 0) {
  if (delay === 0) {
    return callback;
  }
  var t = void 0;
  return function($1, $2, $3, $4, $5) {
    if (t) {
      window.clearTimeout(t);
    }
    t = window.setTimeout(function() {
      callback($1, $2, $3, $4, $5);
    }, delay || 300);
  };
}
function throttle(callback, delay) {
  var t = void 0;
  return function($1, $2, $3, $4, $5) {
    if (!t) {
      t = window.setTimeout(function() {
        callback($1, $2, $3, $4, $5);
        t = null;
      }, delay || 300);
    }
  };
}
function isUndefined(value) {
  return typeof value == "undefined";
}
function isNotUndefined(value) {
  return !isUndefined(value);
}
function isString(value) {
  return typeof value == "string";
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return typeof value == "object" && !Array.isArray(value) && !isNumber(value) && !isString(value) && value !== null;
}
function isFunction(value) {
  return typeof value == "function";
}
function isNumber(value) {
  return typeof value == "number";
}
function classnames(...args) {
  const result = [];
  args.filter(Boolean).forEach((it) => {
    if (isArray(it)) {
      result.push(classnames(...it));
    } else if (isObject(it)) {
      Object.keys(it).filter((k) => Boolean(it[k])).forEach((key) => {
        result.push(key);
      });
    } else if (isString(it)) {
      result.push(it);
    }
  });
  return result.join(" ");
}
const setBooleanProp = (el, name, value) => {
  if (value) {
    el.setAttribute(name, name);
    el[name] = value;
  } else {
    el.removeAttribute(name);
    el[name] = value;
  }
};
const setProp = (el, name, value) => {
  if (typeof value === "boolean") {
    setBooleanProp(el, name, value);
  } else {
    if (name === "style") {
      el.style.cssText = value;
    } else {
      el.setAttribute(name, value);
    }
  }
};
const removeBooleanProp = (node, name) => {
  node.removeAttribute(name);
  node[name] = false;
};
const removeUndefinedProp = (node, name) => {
  node.removeAttribute(name);
};
const removeProp = (node, name, value) => {
  if (typeof value === "boolean") {
    removeBooleanProp(node, name);
  } else if (name) {
    removeUndefinedProp(node, name);
  }
};
const updateProp = (node, name, newValue, oldValue) => {
  if (!newValue) {
    removeProp(node, name, oldValue);
  } else if (!oldValue || newValue !== oldValue) {
    setProp(node, name, newValue);
  } else
    ;
};
const updateProps = (node, newProps = {}, oldProps = {}) => {
  const keyList = [];
  const newPropsKeys = Object.keys(newProps);
  const oldPropsKeys = Object.keys(oldProps);
  if (newPropsKeys.length === 0 && oldPropsKeys.length === 0) {
    return;
  }
  keyList.push.apply(keyList, newPropsKeys);
  keyList.push.apply(keyList, oldPropsKeys);
  const props = new Set(keyList);
  props.forEach((key) => {
    updateProp(node, key, newProps[key], oldProps[key]);
  });
};
function changed(node1, node2) {
  return node1.nodeType === window.Node.TEXT_NODE && node1.textContent !== node2.textContent || node1.nodeName !== node2.nodeName;
}
function hasPassed(node1) {
  if ((node1 == null ? void 0 : node1.nodeType) === 8) {
    return true;
  }
  return node1.nodeType !== window.Node.TEXT_NODE && node1.getAttribute("data-domdiff-pass") === "true";
}
function hasRefClass(node1) {
  return node1.nodeType !== window.Node.TEXT_NODE && node1.getAttribute("refclass");
}
function getProps(attributes) {
  var results = {};
  const len = attributes.length;
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    if (t.name === "has-event")
      continue;
    else if (t.name.startsWith("on"))
      continue;
    results[t.name] = t.value;
  }
  return results;
}
function updateElement(parentElement, oldEl, newEl, i, options = {}) {
  if (!oldEl) {
    parentElement.appendChild(newEl.cloneNode(true));
  } else if (!newEl) {
    parentElement.removeChild(oldEl);
  } else if (hasPassed(oldEl) || hasPassed(newEl))
    ;
  else if (changed(newEl, oldEl) || hasRefClass(newEl)) {
    if (oldEl.nodeType === window.Node.TEXT_NODE && newEl.nodeType !== window.Node.TEXT_NODE) {
      parentElement.insertBefore(newEl.cloneNode(true), oldEl);
      parentElement.removeChild(oldEl);
    } else if (oldEl.nodeType !== window.Node.TEXT_NODE && newEl.nodeType === window.Node.TEXT_NODE) {
      parentElement.insertBefore(newEl.cloneNode(true), oldEl);
      parentElement.removeChild(oldEl);
    } else {
      if (hasRefClass(newEl)) {
        if (isFunction(options.checkRefClass) && options.checkRefClass(oldEl, newEl)) {
          console.log("replace object refclass", oldEl, newEl);
          oldEl.replaceWith(newEl.cloneNode(true));
        }
      } else {
        oldEl.replaceWith(newEl.cloneNode(true));
      }
    }
  } else if (newEl.nodeType !== window.Node.TEXT_NODE && newEl.nodeType !== window.Node.COMMENT_NODE && newEl.toString() !== "[object HTMLUnknownElement]") {
    if (options.checkPassed && options.checkPassed(oldEl, newEl))
      ;
    else {
      updateProps(oldEl, getProps(newEl.attributes), getProps(oldEl.attributes));
    }
    var oldChildren = children(oldEl);
    var newChildren = children(newEl);
    var max = Math.max(oldChildren.length, newChildren.length);
    for (var index = 0; index < max; index++) {
      updateElement(oldEl, oldChildren[index], newChildren[index], index, options);
    }
  }
}
const children = (el) => {
  var element = el.firstChild;
  if (!element) {
    return [];
  }
  var results = [];
  do {
    results.push(element);
    element = element.nextSibling;
  } while (element);
  return results;
};
const DefaultOption = {
  checkPassed: void 0,
  keyField: "key",
  removedElements: []
};
function DomDiff(A, B, options = {}) {
  options = __spreadProps(__spreadValues({}, DefaultOption), {
    checkPassed: isFunction(options.checkPassed) ? options.checkPassed : void 0,
    checkRefClass: isFunction(options.checkRefClass) ? options.checkRefClass : void 0
  });
  A = A.el || A;
  B = B.el || B;
  var childrenA = children(A);
  var childrenB = children(B);
  if (A.nodeType !== 11 && B.nodeType !== 11) {
    updateProps(A, getProps(B.attributes), getProps(A.attributes));
  }
  var len = Math.max(childrenA.length, childrenB.length);
  if (len === 0) {
    return;
  }
  if (childrenA.length === 0 && childrenB.length > 0) {
    var fragment = document.createDocumentFragment();
    childrenB.forEach((it) => fragment.appendChild(it));
    A.appendChild(fragment);
  } else if (childrenA.length > 0 && childrenB.length === 0) {
    A.textContent = "";
  } else {
    for (var i = 0; i < len; i++) {
      updateElement(A, childrenA[i], childrenB[i], i, options);
    }
  }
}
const __tempVariables = /* @__PURE__ */ new Map();
function recoverVariable(id, removeVariable = true) {
  if (isString(id) === false) {
    return id;
  }
  let value = id;
  if (__tempVariables.has(id)) {
    value = __tempVariables.get(id);
    if (removeVariable) {
      __tempVariables.delete(id);
    }
  }
  return value;
}
function getVariable(idOrValue) {
  if (__tempVariables.has(idOrValue)) {
    return __tempVariables.get(idOrValue);
  }
  return idOrValue;
}
function registHandler(handlers) {
  Object.keys(handlers).forEach((key) => {
  });
}
class Dom {
  constructor(tag, className, attr) {
    if (typeof tag !== "string") {
      if (tag instanceof Dom) {
        this.el = tag.el;
      } else {
        this.el = tag;
      }
    } else {
      var el = document.createElement(tag);
      if (className) {
        el.className = className;
      }
      attr = attr || {};
      Object.assign(el, attr);
      this.el = el;
    }
  }
  static create(tag, className, attr) {
    return new Dom(tag, className, attr);
  }
  static createByHTML(htmlString) {
    var div = Dom.create("div");
    return div.html(htmlString).firstChild;
  }
  static makeElementList(html) {
    const TEMP_DIV2 = Dom.create("div");
    let list2 = [];
    if (!isArray(html)) {
      html = [html];
    }
    html = html.filter(Boolean);
    for (let i = 0, len = html.length; i < len; i++) {
      const item = html[i];
      if (isString(item)) {
        list2.push(...TEMP_DIV2.html(item == null ? void 0 : item.trim()).childNodes || []);
      } else if (item) {
        list2.push(Dom.create(item));
      } else
        ;
    }
    return list2;
  }
  static getScrollTop() {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  static getScrollLeft() {
    return Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);
  }
  static parse(html) {
    var parser = window.DOMParser();
    return parser.parseFromString(html, "text/htmll");
  }
  static body() {
    return Dom.create(document.body);
  }
  get exists() {
    return Boolean(this.el);
  }
  setAttr(obj) {
    Object.keys(obj).forEach((key) => {
      this.attr(key, obj[key]);
    });
    return this;
  }
  setAttrNS(obj, namespace = "http://www.w3.org/2000/svg") {
    Object.keys(obj).forEach((key) => {
      this.attr(key, obj[key], namespace);
    });
    return this;
  }
  setProp(obj) {
    Object.keys(obj).forEach((key) => {
      if (this.el[key] != obj[key]) {
        this.el[key] = obj[key];
      }
    });
    return this;
  }
  data(key, value) {
    if (arguments.length === 1) {
      const value2 = this.attr("data-" + key);
      return recoverVariable(value2, false);
    } else if (arguments.length === 2) {
      return this.attr("data-" + key, value);
    }
    return this;
  }
  attr(...args) {
    if (args.length == 1) {
      return isFunction(this.el.getAttribute) && this.el.getAttribute(args[0]);
    }
    if (this.el.getAttribute(args[0]) != args[1]) {
      this.el.setAttribute(args[0], args[1]);
    }
    return this;
  }
  attrNS(key, value, namespace = "http://www.w3.org/2000/svg") {
    if (arguments.length == 1) {
      return this.el.getAttributeNS(namespace, key);
    }
    if (this.el.getAttributeNS(namespace, key) != value) {
      this.el.setAttributeNS(namespace, key, value);
    }
    return this;
  }
  attrKeyValue(keyField) {
    return {
      [this.el.getAttribute(keyField)]: this.val()
    };
  }
  get attributes() {
    try {
      return [...this.el.attributes];
    } catch (e) {
      const length = this.el.attributes.length;
      const attributes = [];
      for (var i = 0; i < length; i++) {
        attributes.push(this.el.attributes[`${i}`]);
      }
      return attributes;
    }
  }
  attrs(...args) {
    return args.map((key) => {
      return this.el.getAttribute(key);
    });
  }
  styles(...args) {
    return args.map((key) => {
      return this.el.style[key];
    });
  }
  removeAttr(key) {
    this.el.removeAttribute(key);
    return this;
  }
  removeStyle(key) {
    this.el.style.removeProperty(key);
    return this;
  }
  isFragment() {
    return this.el.nodeType === 11;
  }
  is(checkElement) {
    if (checkElement instanceof Dom) {
      return this.el === checkElement.el;
    }
    return this.el === checkElement;
  }
  isTag(tag) {
    return this.el.tagName.toLowerCase() === tag.toLowerCase();
  }
  closest(cls) {
    var temp = this;
    var checkCls = false;
    while (!(checkCls = temp.hasClass(cls))) {
      if (temp.el.parentNode) {
        temp = Dom.create(temp.el.parentNode);
      } else {
        return null;
      }
    }
    if (checkCls) {
      return temp;
    }
    return null;
  }
  path() {
    if (!this.el)
      return [];
    let pathList = [this];
    let $parentNode = this.parent();
    if (!$parentNode.el)
      return pathList;
    while ($parentNode) {
      pathList.unshift($parentNode);
      $parentNode = $parentNode.parent();
      if (!$parentNode.el)
        break;
    }
    return pathList;
  }
  get $parent() {
    return this.parent();
  }
  parent() {
    return Dom.create(this.el.parentNode);
  }
  hasParent() {
    return !!this.el.parentNode;
  }
  removeClass(...args) {
    this.el.classList.remove(...args);
    return this;
  }
  updateClass(className) {
    this.el.className = className;
    return this;
  }
  replaceClass(oldClass, newClass) {
    this.el.classList.replace(oldClass, newClass);
    return this;
  }
  hasClass(cls) {
    if (!this.el.classList)
      return false;
    return this.el.classList.contains(cls);
  }
  addClass(...args) {
    this.el.classList.add(...args);
    return this;
  }
  onlyOneClass(cls) {
    var parent = this.parent();
    parent.children().forEach((it) => {
      it.removeClass(cls);
    });
    this.addClass(cls);
  }
  toggleClass(cls, isForce) {
    this.el.classList.toggle(cls, isForce);
    return this;
  }
  outerHTML() {
    if (this.isTextNode) {
      return this.text();
    }
    return this.el.outerHTML;
  }
  html(html) {
    try {
      if (typeof html === "undefined") {
        return this.el.innerHTML;
      }
      if (typeof html === "string") {
        Object.assign(this.el, { innerHTML: html });
      } else {
        this.empty().append(html);
      }
      return this;
    } catch (e) {
      console.log(e, html);
      return this;
    }
  }
  htmlDiff(fragment, options = {}) {
    DomDiff(this, fragment, options);
  }
  updateDiff(html, rootElement = "div", options = {}) {
    DomDiff(this, Dom.create(rootElement).html(html), options);
  }
  updateSVGDiff(html, rootElement = "div", options = {}) {
    DomDiff(this, Dom.create(rootElement).html(`<svg>${html}</svg>`).firstChild.firstChild, options);
  }
  getById(id) {
    return this.el.getElementById(id);
  }
  find(selector) {
    if (this.isTextNode)
      return void 0;
    return this.el.querySelector(selector);
  }
  $(selector) {
    var node = this.find(selector);
    return node ? Dom.create(node) : null;
  }
  findAll(selector) {
    if (this.isTextNode)
      return [];
    return Array.from(this.el.querySelectorAll(selector));
  }
  $$(selector) {
    var arr = this.findAll(selector);
    return arr.map((node) => Dom.create(node));
  }
  empty() {
    while (this.el.firstChild)
      this.el.removeChild(this.el.firstChild);
    return this;
  }
  append(el) {
    if (!el)
      return this;
    if (isArray(el)) {
      this.el.append(...el.map((it) => it.el || it));
    } else if (typeof el === "string") {
      this.el.appendChild(document.createTextNode(el));
    } else {
      this.el.appendChild(el.el || el);
    }
    return this;
  }
  prepend(el) {
    if (typeof el === "string") {
      this.el.prepend(document.createTextNode(el));
    } else {
      this.el.prepend(el.el || el);
    }
    return this;
  }
  prependHTML(html) {
    var $dom = Dom.create("div").html(html);
    this.prepend($dom.createChildrenFragment());
    return $dom;
  }
  appendHTML(html) {
    var $dom = Dom.create("div").html(html);
    this.append($dom.createChildrenFragment());
    return $dom;
  }
  createChildrenFragment() {
    const list2 = this.childNodes;
    var fragment = document.createDocumentFragment();
    list2.forEach(($el) => fragment.appendChild($el.el));
    return fragment;
  }
  static createFragment(list2 = []) {
    var fragment = document.createDocumentFragment();
    list2.forEach((it) => fragment.appendChild(it));
    return fragment;
  }
  appendTo(target) {
    var t = target.el ? target.el : target;
    t.appendChild(this.el);
    return this;
  }
  remove() {
    if (this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
    return this;
  }
  removeChild(el) {
    this.el.removeChild(el.el || el);
    return this;
  }
  text(value) {
    if (typeof value === "undefined") {
      return this.el.textContent;
    } else {
      var tempText = value;
      if (value instanceof Dom) {
        tempText = value.text();
      }
      if (this.el.textContent !== tempText) {
        this.el.textContent = tempText;
      }
      return this;
    }
  }
  css(key, value) {
    if (typeof key !== "undefined" && typeof value !== "undefined") {
      if (key.indexOf("--") === 0 && typeof value !== "undefined") {
        this.el.style.setProperty(key, value);
      } else {
        this.el.style[key] = value;
      }
    } else if (typeof key !== "undefined") {
      if (typeof key === "string") {
        return window.getComputedStyle(this.el)[key];
      } else {
        Object.entries(key).forEach(([localKey, value2]) => {
          if (localKey.indexOf("--") === 0 && typeof value2 !== "undefined") {
            this.el.style.setProperty(localKey, value2);
          } else {
            this.el.style[localKey] = value2;
          }
        });
      }
    }
    return this;
  }
  getComputedStyle(...list2) {
    var css = window.getComputedStyle(this.el);
    var obj = {};
    list2.forEach((it) => {
      obj[it] = css[it];
    });
    return obj;
  }
  getStyleList(...list2) {
    var style = {};
    var len = this.el.style.length;
    for (var i = 0; i < len; i++) {
      var key = this.el.style[i];
      style[key] = this.el.style[key];
    }
    list2.forEach((key2) => {
      style[key2] = this.css(key2);
    });
    return style;
  }
  cssText(value) {
    if (typeof value === "undefined") {
      return this.el.style.cssText;
    }
    if (value != this.el.tempCssText) {
      this.el.style.cssText = value;
      this.el.tempCssText = value;
    }
    return this;
  }
  cssArray(arr) {
    if (arr[0])
      this.el.style[arr[0]] = arr[1];
    if (arr[2])
      this.el.style[arr[2]] = arr[3];
    if (arr[4])
      this.el.style[arr[4]] = arr[5];
    if (arr[6])
      this.el.style[arr[6]] = arr[7];
    if (arr[8])
      this.el.style[arr[8]] = arr[9];
    return this;
  }
  cssFloat(key) {
    return parseFloat(this.css(key));
  }
  cssInt(key) {
    return parseInt(this.css(key));
  }
  px(key, value) {
    return this.css(key, `${value}px`);
  }
  rect() {
    return this.el.getBoundingClientRect();
  }
  bbox() {
    return this.el.getBBox();
  }
  isSVG() {
    if (!this.el._cachedIsSVG) {
      this.el._cachedIsSVG = { value: this.el.tagName.toLowerCase() === "svg" };
    }
    return this.el._cachedIsSVG.value;
  }
  offsetRect() {
    if (this.isSVG()) {
      const parentBox = this.parent().rect();
      const box = this.rect();
      return {
        x: box.x - parentBox.x,
        y: box.y - parentBox.y,
        width: box.width,
        height: box.height
      };
    }
    const el = this.el;
    return {
      x: el.offsetLeft,
      y: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
  offsetClientRect() {
    if (this.isSVG()) {
      const parentBox2 = this.parent().rect();
      const box2 = this.rect();
      return {
        x: box2.x - parentBox2.x,
        y: box2.y - parentBox2.y,
        width: box2.width,
        height: box2.height
      };
    }
    const parentBox = this.parent().rect();
    const box = this.rect();
    return {
      x: box.x - parentBox.x,
      y: box.y - parentBox.y,
      width: box.width,
      height: box.height
    };
  }
  offset() {
    var rect2 = this.rect();
    var scrollTop = Dom.getScrollTop();
    var scrollLeft = Dom.getScrollLeft();
    return {
      top: rect2.top + scrollTop,
      left: rect2.left + scrollLeft
    };
  }
  offsetLeft() {
    return this.offset().left;
  }
  offsetTop() {
    return this.offset().top;
  }
  position() {
    if (this.el.style.top) {
      return {
        top: parseFloat(this.css("top")),
        left: parseFloat(this.css("left"))
      };
    } else {
      return this.rect();
    }
  }
  size() {
    return [this.width(), this.height()];
  }
  width() {
    return this.el.offsetWidth || this.rect().width;
  }
  contentWidth() {
    return this.width() - this.cssFloat("padding-left") - this.cssFloat("padding-right");
  }
  height() {
    return this.el.offsetHeight || this.rect().height;
  }
  contentHeight() {
    return this.height() - this.cssFloat("padding-top") - this.cssFloat("padding-bottom");
  }
  val(value) {
    if (typeof value === "undefined") {
      return this.el.value;
    } else if (typeof value !== "undefined") {
      var tempValue = value;
      if (value instanceof Dom) {
        tempValue = value.val();
      }
      this.el.value = tempValue;
    }
    return this;
  }
  matches(selector) {
    if (this.el) {
      if (!this.el.matches)
        return null;
      if (this.el.matches(selector)) {
        return this;
      }
      return this.parent().matches(selector);
    }
    return null;
  }
  get value() {
    return this.el.value;
  }
  get naturalWidth() {
    return this.el.naturalWidth;
  }
  get naturalHeight() {
    return this.el.naturalHeight;
  }
  get files() {
    return this.el.files ? [...this.el.files] : [];
  }
  get isTextNode() {
    return this.el.nodeType === 3;
  }
  realVal() {
    switch (this.el.nodeType) {
      case "INPUT":
        var type = this.attr("type");
        if (type == "checkbox" || type == "radio") {
          return this.checked();
        }
        return this.el.value;
      case "SELECT":
      case "TEXTAREA":
        return this.el.value;
    }
    return "";
  }
  int() {
    return parseInt(this.val(), 10);
  }
  float() {
    return parseFloat(this.val());
  }
  show(displayType = "block") {
    this.el.style.display = displayType != "none" ? displayType : "block";
    return this;
  }
  hide() {
    this.el.style.display = "none";
    return this;
  }
  isHide() {
    return this.el.style.display === "none";
  }
  isShow() {
    return !this.isHide();
  }
  toggle(isForce) {
    var currentHide = this.isHide();
    if (arguments.length == 1) {
      if (isForce) {
        return this.show();
      } else {
        return this.hide();
      }
    } else {
      if (currentHide) {
        return this.show();
      } else {
        return this.hide();
      }
    }
  }
  get totalLength() {
    return this.el.getTotalLength();
  }
  scrollIntoView() {
    this.el.scrollIntoView();
  }
  addScrollLeft(dt) {
    this.el.scrollLeft += dt;
    return this;
  }
  addScrollTop(dt) {
    this.el.scrollTop += dt;
    return this;
  }
  setScrollTop(scrollTop) {
    this.el.scrollTop = scrollTop;
    return this;
  }
  setScrollLeft(scrollLeft) {
    this.el.scrollLeft = scrollLeft;
    return this;
  }
  scrollTop() {
    if (this.el === document.body) {
      return Dom.getScrollTop();
    }
    return this.el.scrollTop;
  }
  scrollLeft() {
    if (this.el === document.body) {
      return Dom.getScrollLeft();
    }
    return this.el.scrollLeft;
  }
  scrollHeight() {
    return this.el.scrollHeight;
  }
  scrollWidth() {
    return this.el.scrollWidth;
  }
  on(eventName, callback, opt1, opt2) {
    this.el.addEventListener(eventName, callback, opt1, opt2);
    return this;
  }
  off(eventName, callback) {
    this.el.removeEventListener(eventName, callback);
    return this;
  }
  getElement() {
    return this.el;
  }
  createChild(tag, className = "", attrs = {}, css = {}) {
    let $element = Dom.create(tag, className, attrs);
    $element.css(css);
    this.append($element);
    return $element;
  }
  get firstChild() {
    return Dom.create(this.el.firstElementChild);
  }
  get first() {
    return Dom.create(this.el.firstChild);
  }
  children() {
    var element = this.el.firstElementChild;
    if (!element) {
      return [];
    }
    var results = [];
    do {
      results.push(Dom.create(element));
      element = element.nextElementSibling;
    } while (element);
    return results;
  }
  hasChild(child) {
    const childNode = child.el || child;
    return this.el === childNode ? false : this.el.contains(childNode);
  }
  get childNodes() {
    const result = [];
    if (this.el.hasChildNodes()) {
      const childNodes = this.el.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        result.push(Dom.create(childNodes[i]));
      }
    }
    return result;
  }
  childLength() {
    return this.el.children.length;
  }
  replace(newElement) {
    if (this.el.parentNode) {
      this.el.parentNode.replaceChild(newElement.el || newElement, this.el);
    }
    return this;
  }
  replaceChild(oldElement, newElement) {
    this.el.replaceChild(newElement.el || newElement, oldElement.el || oldElement);
    return this;
  }
  checked(isChecked = false) {
    if (arguments.length == 0) {
      return !!this.el.checked;
    }
    this.el.checked = !!isChecked;
    return this;
  }
  click() {
    this.el.click();
    return this;
  }
  focus() {
    this.el.focus();
    return this;
  }
  select() {
    if (this.attr("contenteditable") === "true") {
      var range = document.createRange();
      range.selectNodeContents(this.el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      this.el.select();
    }
    return this;
  }
  blur() {
    this.el.blur();
    return this;
  }
  toDataURL(type = "image/png", quality = 1) {
    return this.el.toDataURL(type, quality);
  }
  fullscreen() {
    var element = this.el;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.wekitRequestFullscreen) {
      element.wekitRequestFullscreen();
    }
  }
  toggleFullscreen() {
    if (this.el === document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      this.fullscreen();
    }
  }
}
const MAGIC_METHOD_REG = /^@magic:([a-zA-Z][a-zA-Z0-9]*)[\W]{1}(.*)*$/g;
const MAGIC_METHOD = "@magic:";
const SPLITTER = "|";
const FUNC_REGEXP = /(([\$a-z_\-]+)\([^\(\)]*\)|([a-z_\-]+))/gi;
const FUNC_START_CHARACTER = "(";
const FUNC_END_CHARACTER = ")";
const MAGICMETHOD_EXTRA = {
  KEYWORD: "keyword",
  FUNCTION: "function",
  VALUE: "value"
};
class MagicMethod {
  constructor(obj) {
    this.context = obj.context;
    this.originalMethod = obj.originalMethod;
    this.method = obj.method;
    this.args = obj.args;
    this.pipes = obj.pipes;
    this.keys = obj.keys;
    this.__cache = /* @__PURE__ */ new Map();
  }
  setCache(key, value) {
    this.__cache.set(key, value);
  }
  hasCache(key) {
    return this.__cache.has(key);
  }
  getCache(key) {
    return this.__cache.get(key);
  }
  hasKeyword(keyword) {
    if (this.hasCache(keyword)) {
      return this.getCache(keyword);
    }
    let exists = false;
    this.pipes.forEach((pipe) => {
      switch (pipe.type) {
        case MAGICMETHOD_EXTRA.KEYWORD:
          if (pipe.value === keyword) {
            exists = true;
          }
          break;
      }
    });
    this.setCache(keyword, exists);
    return exists;
  }
  hasFunction(funcName) {
    if (this.hasCache(funcName)) {
      return this.getCache(funcName);
    }
    let exists = !!this.getFunction(funcName);
    this.setCache(funcName, exists);
    return exists;
  }
  getFunction(funcName) {
    return this.functions.find((pipe) => pipe.func === funcName);
  }
  getFunctionList(funcName) {
    return this.functions.filter((pipe) => pipe.func === funcName);
  }
  get originalCallback() {
    return this.context[this.originalMethod];
  }
  get keywords() {
    return this.keys[MAGICMETHOD_EXTRA.KEYWORD].map((pipe) => pipe.value);
  }
  get functions() {
    return this.keys[MAGICMETHOD_EXTRA.FUNCTION];
  }
  get values() {
    return this.keys[MAGICMETHOD_EXTRA.VALUE].map((pipe) => pipe.value);
  }
  execute(...args) {
    return this.originalCallback.call(this.context, ...args);
  }
  executeWithContext(context, ...args) {
    return this.originalCallback.call(context, ...args);
  }
  static make(str, ...args) {
    return `${MAGIC_METHOD}${str} ${args.join(SPLITTER)}`;
  }
  static check(str) {
    return str.match(MAGIC_METHOD_REG) !== null;
  }
  static parse(str, context = {}) {
    const matches = str.match(MAGIC_METHOD_REG);
    if (!matches) {
      return void 0;
    }
    const result = matches[0].split(MAGIC_METHOD)[1].split(SPLITTER).map((item) => item.trim());
    let [initializer, ...pipes] = result;
    const [method, ...args] = initializer.split(" ");
    const pipeList = pipes.map((it) => {
      return this.parsePipe(it);
    }).filter((it) => it.value);
    const pipeObjects = {
      function: [],
      keyword: [],
      value: []
    };
    pipeList.forEach((pipe) => {
      if (pipe.type === "function") {
        pipeObjects.function.push(pipe);
      } else if (pipe.type === "keyword") {
        pipeObjects.keyword.push(pipe);
      } else {
        pipeObjects.value.push(pipe);
      }
    });
    return new MagicMethod({
      context,
      originalMethod: str,
      method,
      args,
      pipes: pipeList,
      keys: pipeObjects
    });
  }
  static parsePipe(it) {
    const result = it.match(FUNC_REGEXP);
    if (!result) {
      return {
        type: "value",
        value: it
      };
    }
    const [value] = result;
    if (value.includes(FUNC_START_CHARACTER)) {
      const [func, rest] = value.split(FUNC_START_CHARACTER);
      const [args] = rest.split(FUNC_END_CHARACTER);
      return {
        type: "function",
        value,
        func,
        args: args.split(",").map((it2) => it2.trim()).filter(Boolean)
      };
    }
    return {
      type: "keyword",
      value: result[0]
    };
  }
}
const NAME_SAPARATOR = ":";
const SAPARATOR = " ";
const DOM_EVENT_MAKE = (...keys) => {
  var key = keys.join(NAME_SAPARATOR);
  return (...args) => {
    const [selector, ...result] = args;
    return MagicMethod.make("domevent", [key, selector].join(" "), ...result);
  };
};
const CALLBACK_EVENT_MAKE = (...args) => {
  return MagicMethod.make("callback", ...args);
};
const CALLBACK = CALLBACK_EVENT_MAKE;
CALLBACK("requestAnimationFrame");
const CUSTOM = DOM_EVENT_MAKE;
DOM_EVENT_MAKE("click");
DOM_EVENT_MAKE("dblclick");
DOM_EVENT_MAKE("mousedown");
DOM_EVENT_MAKE("mouseup");
DOM_EVENT_MAKE("mousemove");
DOM_EVENT_MAKE("mouseover");
DOM_EVENT_MAKE("mouseout");
DOM_EVENT_MAKE("mouseenter");
DOM_EVENT_MAKE("mouseleave");
DOM_EVENT_MAKE("touchstart");
DOM_EVENT_MAKE("touchmove");
DOM_EVENT_MAKE("touchend");
DOM_EVENT_MAKE("keydown");
DOM_EVENT_MAKE("keyup");
DOM_EVENT_MAKE("keypress");
DOM_EVENT_MAKE("drag");
DOM_EVENT_MAKE("dragstart");
DOM_EVENT_MAKE("drop");
DOM_EVENT_MAKE("dragover");
DOM_EVENT_MAKE("dragenter");
DOM_EVENT_MAKE("dragleave");
DOM_EVENT_MAKE("dragexit");
DOM_EVENT_MAKE("dragout");
DOM_EVENT_MAKE("dragend");
DOM_EVENT_MAKE("contextmenu");
DOM_EVENT_MAKE("change");
DOM_EVENT_MAKE("input");
DOM_EVENT_MAKE("focus");
DOM_EVENT_MAKE("focusin");
DOM_EVENT_MAKE("focusout");
DOM_EVENT_MAKE("blur");
DOM_EVENT_MAKE("paste");
DOM_EVENT_MAKE("resize");
DOM_EVENT_MAKE("scroll");
DOM_EVENT_MAKE("submit");
CUSTOM("pointerover");
CUSTOM("pointerenter");
CUSTOM("pointerout");
CUSTOM("pointerleave");
CUSTOM("pointermove");
CUSTOM("pointerup");
CUSTOM("change", "input");
CUSTOM("wheel", "mousewheel", "DOMMouseScroll");
DOM_EVENT_MAKE("animationstart");
DOM_EVENT_MAKE("animationend");
DOM_EVENT_MAKE("animationiteration");
DOM_EVENT_MAKE("transitionstart");
DOM_EVENT_MAKE("transitionend");
DOM_EVENT_MAKE("transitionrun");
DOM_EVENT_MAKE("transitioncancel");
CUSTOM("doubletab");
const BIND_CHECK_FUNCTION = (field) => {
  return function() {
    return this.prevState[field] != this.state[field];
  };
};
const BIND_CHECK_DEFAULT_FUNCTION = () => {
  return true;
};
var Event = {
  addDomEvent(dom, eventName, callback, useCapture = false) {
    if (dom) {
      dom.addEventListener(eventName, callback, useCapture);
    }
  },
  removeDomEvent(dom, eventName, callback) {
    if (dom) {
      dom.removeEventListener(eventName, callback);
    }
  },
  pos(e) {
    if (e.touches && e.touches[0]) {
      return e.touches[0];
    }
    return e;
  },
  posXY(e) {
    var pos = this.pos(e);
    return {
      x: pos.pageX,
      y: pos.pageY
    };
  }
};
class BaseHandler {
  constructor(context, options = {}) {
    this.context = context;
    this.options = options;
  }
  initialize() {
  }
  load() {
  }
  refresh() {
  }
  render() {
  }
  getRef(id) {
    return this.context.getRef(id);
  }
  run() {
  }
  destroy() {
  }
}
const convertToPx = (key, value) => {
  if (isNumber(value)) {
    switch (key) {
      case "width":
      case "height":
      case "top":
      case "left":
      case "right":
      case "bottom":
        return value + "px";
    }
  }
  return value;
};
const applyElementAttribute = ($element, key, value, hasStyleAttribute = false) => {
  if (key === "cssText") {
    $element.cssText(value);
    return;
  } else if (key === "style") {
    if (typeof value !== "string") {
      const css = {};
      Object.entries(value).forEach(([key2, value2]) => {
        css[key2] = convertToPx(key2, value2);
      });
      if (hasStyleAttribute) {
        const styleText = Object.keys(css).map((key2) => {
          return `${key2}:${css[key2]};`;
        }).join("");
        $element.attr("style", styleText);
      } else {
        if (Object.keys(css).length > 0) {
          $element.css(css);
        }
      }
    }
    return;
  } else if (key === "class") {
    if (Array.isArray(value)) {
      $element.updateClass(classnames(...value));
    } else {
      $element.updateClass(classnames(value));
    }
    return;
  } else if (key === "callback") {
    if (typeof value === "function") {
      value();
      return;
    }
  }
  if (typeof value === "undefined") {
    $element.removeAttr(key);
  } else {
    if ($element.el.nodeName === "TEXTAREA" && key === "value") {
      $element.text(value);
    } else if (key === "text" || key === "textContent") {
      $element.text(value);
    } else if (key === "innerHTML" || key === "html") {
      $element.html(value);
    } else if (key === "htmlDiff") {
      $element.updateDiff(value);
    } else if (key === "svgDiff") {
      $element.updateSVGDiff(value);
    } else if (key === "value") {
      $element.val(value);
    } else {
      $element.attr(key, value);
    }
  }
};
const FunctionMap = {};
class BindHandler extends BaseHandler {
  async initialize() {
    if (!FunctionMap[this.context.sourceName]) {
      FunctionMap[this.context.sourceName] = this.context.filterMethodes("bind");
    }
  }
  getBindMethods() {
    return FunctionMap[this.context.sourceName] || [];
  }
  async bindData(...args) {
    const list2 = this.getBindMethods();
    if (!(list2 == null ? void 0 : list2.length))
      return;
    const bindList = list2 == null ? void 0 : list2.filter((it) => {
      if (!args.length)
        return true;
      return args.indexOf(it.args[0]) > -1;
    });
    await Promise.all(bindList == null ? void 0 : bindList.map(async (magicMethod) => {
      let refObject = this.getRef(`${magicMethod.keywords[0]}`);
      let refCallback = BIND_CHECK_DEFAULT_FUNCTION;
      if (typeof refObject === "string" && refObject !== "") {
        refCallback = BIND_CHECK_FUNCTION(refObject);
      } else if (typeof refObject === "function") {
        refCallback = refObject;
      }
      const elName = magicMethod.args[0];
      let $element = this.context.refs[elName];
      const isBindCheck = typeof refCallback === "function" && refCallback.call(this.context);
      if ($element && isBindCheck) {
        const results = await magicMethod.executeWithContext(this.context, ...args);
        if (!results)
          return;
        const keys = Object.keys(results);
        for (var elementKeyIndex = 0, len = keys.length; elementKeyIndex < len; elementKeyIndex++) {
          const key = keys[elementKeyIndex];
          const value = results[key];
          applyElementAttribute($element, key, value, this.context.isServer);
        }
      }
    }));
  }
  destroy() {
    this._bindMethods = void 0;
  }
}
class CallbackHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    this.destroy();
    if (!this._callbacks) {
      this._callbacks = this.context.filterMethodes("callback");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._callbacks) == null ? void 0 : _b.length)) {
      this._callbacks.forEach((key) => this.parseCallback(key));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.removeCallbackAll();
    }
  }
  getCallback(field) {
    return this.context[field];
  }
  removeCallbackAll() {
    this.getBindings().forEach((obj) => {
      this.removeCallback(obj);
    });
    this.initBindings();
  }
  removeCallback({ requestId }) {
    window.cancelAnimationFrame(requestId);
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  makeCallback(callbackObject) {
    const callback = callbackObject.callback;
    const run = (time) => {
      callback(time);
      callbackObject.requestId = window.requestAnimationFrame(run);
    };
    return () => {
      callbackObject.requestId = window.requestAnimationFrame(run);
    };
  }
  addCallback(callbackObject, magicMethod) {
    const callback = this.makeCallback(callbackObject, magicMethod);
    this.addBinding(callbackObject);
    callback();
  }
  bindingCallback(magicMethod, callback) {
    var _a, _b;
    const obj = {
      eventName: magicMethod.args[0],
      callback
    };
    obj.codes = [];
    obj.checkMethodList = [];
    const debounceFunction = magicMethod.getFunction("debounce");
    const throttleFunction = magicMethod.getFunction("throttle");
    if (debounceFunction) {
      var debounceTime = +(((_a = debounceFunction.args) == null ? void 0 : _a[0]) || 0);
      obj.callback = debounce(callback, debounceTime);
    } else if (throttleFunction) {
      var throttleTime = +(((_b = throttleFunction.args) == null ? void 0 : _b[0]) || 0);
      obj.callback = throttle(callback, throttleTime);
    }
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.getCallback(method)) {
        obj.checkMethodList.push(method);
      } else {
        obj.codes.push(method.toLowerCase());
      }
    });
    this.addCallback(obj, magicMethod);
  }
  parseCallback(it) {
    const context = this.context;
    var arr = it.args;
    if (arr) {
      var originalCallback = context[it.originalMethod].bind(context);
      this.bindingCallback(it, originalCallback);
    }
  }
}
const scrollBlockingEvents = {
  touchstart: true,
  touchmove: true,
  mousedown: true,
  mouseup: true,
  mousemove: true
};
const eventConverts = {
  doubletab: "touchend"
};
const customEventNames = {
  doubletab: true
};
const selfCheckMethods = {
  self(e) {
    return e && e.$dt && e.$dt.is(e.target);
  },
  isAltKey(e) {
    return e.altKey;
  },
  isCtrlKey(e) {
    return e.ctrlKey;
  },
  isShiftKey(e) {
    return e.shiftKey;
  },
  isMetaKey(e) {
    return e.metaKey || e.key == "Meta" || e.code.indexOf("Meta") > -1;
  },
  isMouseLeftButton(e) {
    return e.buttons === 1;
  },
  isMouseRightButton(e) {
    return e.buttons === 2;
  },
  hasMouse(e) {
    return e.pointerType === "mouse";
  },
  hasTouch(e) {
    return e.pointerType === "touch";
  },
  hasPen(e) {
    return e.pointerType === "pen";
  },
  preventDefault(e) {
    e.preventDefault();
    return true;
  },
  stopPropagation(e) {
    e.stopPropagation();
    return true;
  }
};
class DomEventHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    this.destroy();
    if (this._domEvents && this.context.notEventRedefine) {
      return;
    }
    if (!this._domEvents || this._domEvents.length === 0 || this._bindings.length === 0) {
      this._domEvents = this.context.filterMethodes("domevent");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._domEvents) == null ? void 0 : _b.length)) {
      this._domEvents.forEach((it) => this.parseDomEvent(it));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.removeEventAll();
    }
  }
  getCallback(field) {
    return this.context[field] || selfCheckMethods[field];
  }
  removeEventAll() {
    this.getBindings().forEach((obj) => {
      this.removeDomEvent(obj);
    });
    this.initBindings();
  }
  removeDomEvent({ eventName, dom, callback }) {
    Event.removeDomEvent(dom, eventName, callback);
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  matchPath(el, selector) {
    if (el) {
      if (el.matches(selector)) {
        return el;
      }
      return this.matchPath(el.parentElement, selector);
    }
    return null;
  }
  hasDelegate(e, eventObject) {
    return this.matchPath(e.target || e.srcElement, eventObject.delegate);
  }
  makeCallback(eventObject, magicMethod, callback) {
    if (eventObject.delegate) {
      return this.makeDelegateCallback(eventObject, magicMethod, callback);
    } else {
      return this.makeDefaultCallback(eventObject, magicMethod, callback);
    }
  }
  makeDefaultCallback(eventObject, magicMethod, callback) {
    return (e) => {
      var returnValue = this.runEventCallback(e, eventObject, magicMethod, callback);
      if (isNotUndefined(returnValue)) {
        return returnValue;
      }
    };
  }
  makeDelegateCallback(eventObject, magicMethod, callback) {
    return (e) => {
      const delegateTarget = this.hasDelegate(e, eventObject);
      if (delegateTarget) {
        e.$dt = Dom.create(delegateTarget);
        var returnValue = this.runEventCallback(e, eventObject, magicMethod, callback);
        if (isNotUndefined(returnValue)) {
          return returnValue;
        }
      }
    };
  }
  runEventCallback(e, eventObject, magicMethod, callback) {
    const context = this.context;
    e.xy = Event.posXY(e);
    if (eventObject.beforeMethods.length) {
      eventObject.beforeMethods.every((before) => {
        return this.getCallback(before.target).call(context, e, before.param);
      });
    }
    if (this.checkEventType(e, eventObject)) {
      var returnValue = callback(e, e.$dt, e.xy);
      if (returnValue !== false && eventObject.afterMethods.length) {
        eventObject.afterMethods.forEach((after) => {
          return this.getCallback(after.target).call(context, e, after.param);
        });
      }
      return returnValue;
    }
  }
  checkEventType(e, eventObject) {
    const context = this.context;
    var hasKeyCode = true;
    if (eventObject.codes.length) {
      hasKeyCode = (e.code ? eventObject.codes.indexOf(e.code.toLowerCase()) > -1 : false) || (e.key ? eventObject.codes.indexOf(e.key.toLowerCase()) > -1 : false);
    }
    var isAllCheck = true;
    if (eventObject.checkMethodList.length) {
      isAllCheck = eventObject.checkMethodList.every((field) => {
        var fieldValue = this.getCallback(field);
        if (isFunction(fieldValue) && fieldValue) {
          return fieldValue.call(context, e);
        } else if (isNotUndefined(fieldValue)) {
          return !!fieldValue;
        }
        return true;
      });
    }
    return hasKeyCode && isAllCheck;
  }
  getDefaultDomElement(dom) {
    const context = this.context;
    let el;
    if (dom) {
      el = context.refs[dom] || context[dom] || window[dom];
    } else {
      el = context.el || context.$el || context.$root;
    }
    if (el instanceof Dom) {
      return el.getElement();
    }
    return el;
  }
  getRealEventName(eventName) {
    return eventConverts[eventName] || eventName;
  }
  getCustomEventName(eventName) {
    return customEventNames[eventName] ? eventName : "";
  }
  getDefaultEventObject(eventName, dom, delegate, magicMethod, callback) {
    var _a, _b;
    const obj = {
      eventName: this.getRealEventName(eventName),
      customEventName: this.getCustomEventName(eventName),
      callback
    };
    const [, , ...delegates] = magicMethod.args;
    obj.dom = this.getDefaultDomElement(dom);
    obj.delegate = delegates.join(SAPARATOR);
    obj.beforeMethods = [];
    obj.afterMethods = [];
    obj.codes = [];
    obj.checkMethodList = [];
    const debounceFunction = magicMethod.getFunction("debounce");
    const throttleFunction = magicMethod.getFunction("throttle");
    if (debounceFunction) {
      var debounceTime = +(((_a = debounceFunction.args) == null ? void 0 : _a[0]) || 0);
      obj.callback = debounce(callback, debounceTime);
    } else if (throttleFunction) {
      var throttleTime = +(((_b = throttleFunction.args) == null ? void 0 : _b[0]) || 0);
      obj.callback = throttle(callback, throttleTime);
    }
    const afterFunctionList = magicMethod.getFunctionList("after");
    const beforeFunctionList = magicMethod.getFunctionList("before");
    if (afterFunctionList.length) {
      afterFunctionList.forEach((afterFunction) => {
        var r = afterFunction.args[0].split(" ");
        var [target, param] = r;
        obj.afterMethods.push({
          target,
          param
        });
      });
    }
    if (beforeFunctionList.length) {
      beforeFunctionList.forEach((beforeFunction) => {
        var r = beforeFunction.args[0].split(" ");
        var [target, param] = r;
        obj.beforeMethods.push({
          target,
          param
        });
      });
    }
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.getCallback(method)) {
        obj.checkMethodList.push(method);
      } else {
        obj.codes.push(method.toLowerCase());
      }
    });
    return obj;
  }
  addDomEvent(eventObject, magicMethod, callback) {
    eventObject.callback = this.makeCallback(eventObject, magicMethod, callback);
    this.addBinding(eventObject);
    var options = false;
    if (magicMethod.hasKeyword("capture")) {
      options = true;
    }
    if (scrollBlockingEvents[eventObject.eventName]) {
      options = {
        passive: true,
        capture: options
      };
    }
    if (eventObject.dom) {
      Event.addDomEvent(eventObject.dom, eventObject.eventName, eventObject.callback, options);
    }
  }
  makeCustomEventCallback(eventObject, magicMethod, callback) {
    var _a;
    if (eventObject.customEventName === "doubletab") {
      var delay = 300;
      var delayFunction = magicMethod.getFunction("delay");
      if (delayFunction) {
        delay = +(((_a = delayFunction.args) == null ? void 0 : _a[0]) || 0);
      }
      return (...args) => {
        if (!this.doubleTab) {
          this.doubleTab = {
            time: window.performance.now()
          };
        } else {
          if (window.performance.now() - this.doubleTab.time < delay) {
            callback(...args);
          }
          this.doubleTab = null;
        }
      };
    }
    return callback;
  }
  bindingDomEvent([eventName, dom, ...delegate], magicMethod, callback) {
    let eventObject = this.getDefaultEventObject(eventName, dom, delegate, magicMethod, callback);
    eventObject.callback = this.makeCustomEventCallback(eventObject, magicMethod, eventObject.callback);
    this.addDomEvent(eventObject, magicMethod, eventObject.callback);
  }
  getEventNames(eventName) {
    let results = [];
    eventName.split(NAME_SAPARATOR).forEach((e) => {
      var arr = e.split(NAME_SAPARATOR);
      results.push.apply(results, arr);
    });
    return results;
  }
  parseDomEvent(it) {
    const context = this.context;
    var arr = it.args;
    if (arr) {
      var eventNames = this.getEventNames(arr[0]);
      var callback = context[it.originalMethod].bind(context);
      for (let i = 0, len = eventNames.length; i < len; i++) {
        arr[0] = eventNames[i];
        this.bindingDomEvent(arr, it, callback);
      }
    }
  }
}
const NATIVE_EVENT_PREFIX = "on";
class NativeEventHandler extends BaseHandler {
  constructor() {
    super(...arguments);
    __privateAdd(this, _eventList, []);
    __privateAdd(this, _eventMap, new window.WeakMap());
  }
  async initialize() {
    var _a;
    if (((_a = __privateGet(this, _eventList)) == null ? void 0 : _a.length) && this.context.notEventRedefine) {
      return;
    }
    this.parseHasEvent();
  }
  loadHasEventList() {
    const $el = this.context.$el;
    if (!$el)
      return;
    let targets = $el.$$("[has-event='true']");
    if ($el.attr("has-event") === "true") {
      targets.unshift($el);
    }
    if (!targets.length) {
      return;
    }
    targets.map(($dom) => {
      if (!__privateGet(this, _eventMap).has($dom.el)) {
        __privateGet(this, _eventMap).set($dom.el, {});
      }
      const results = __privateGet(this, _eventMap).get($dom.el);
      for (var t of $dom.attributes) {
        if (t.nodeName.startsWith(NATIVE_EVENT_PREFIX)) {
          const eventName = t.nodeName.replace(NATIVE_EVENT_PREFIX, "");
          if (!results[eventName]) {
            results[eventName] = {
              applied: false,
              attributeName: t.nodeName,
              $dom,
              eventName,
              eventHandler: recoverVariable(t.nodeValue)
            };
            __privateGet(this, _eventList).push(results[eventName]);
          } else {
            recoverVariable(t.nodeValue);
          }
        }
      }
    });
  }
  parseHasEvent() {
    this.loadHasEventList();
    __privateGet(this, _eventList).forEach((it) => {
      if (!it.applied) {
        it.$dom.on(it.eventName, it.eventHandler);
        it.applied = true;
      }
      it.$dom.removeAttr(it.attributeName);
      it.$dom.removeAttr("has-event");
    });
  }
  destroy() {
    __privateSet(this, _eventList, []);
    __privateGet(this, _eventList).forEach((it) => {
      if (it.applied) {
        it.$dom.off(it.eventName, it.eventHandler);
      }
    });
    __privateSet(this, _eventMap, new window.WeakMap());
  }
}
_eventList = /* @__PURE__ */ new WeakMap();
_eventMap = /* @__PURE__ */ new WeakMap();
class ObserverHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    if (this._observers && this.context.notEventRedefine) {
      return;
    }
    if (!this._observers || this._observers.length === 0) {
      this._observers = this.context.filterMethodes("observer");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._observers) == null ? void 0 : _b.length)) {
      this._observers.forEach((it) => this.parseObserver(it));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.removeEventAll();
    }
  }
  removeEventAll() {
    this.getBindings().forEach((observer) => {
      this.disconnectObserver(observer);
    });
    this.initBindings();
  }
  disconnectObserver(observer) {
    observer == null ? void 0 : observer.disconnect();
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  addObserver(observer) {
    this.addBinding(observer);
  }
  getDefaultDomElement(dom) {
    const context = this.context;
    let el;
    if (dom) {
      el = context.refs[dom] || context[dom] || window[dom];
    } else {
      el = context.el || context.$el || context.$root;
    }
    if (el instanceof Dom) {
      return el.getElement();
    }
    return el;
  }
  createObserver(magicMethod, callback) {
    var _a;
    const [observerType, observerTarget] = magicMethod.args || ["intersection"];
    const $target = this.getDefaultDomElement(observerTarget);
    const params = magicMethod.getFunction("params");
    const options = getVariable((_a = params == null ? void 0 : params.args) == null ? void 0 : _a[0]);
    let observer;
    switch (observerType) {
      case "intersection":
        if (options.root) {
          options.root = this.getDefaultDomElement(options.root);
        }
        observer = new window.IntersectionObserver(callback, options || {});
        observer.observe($target);
        break;
      case "mutation":
        observer = new window.MutationObserver(callback);
        observer.observe($target, options || {
          attributes: true,
          characterData: true,
          childList: true
        });
        break;
      case "performance":
        observer = new window.PerformanceObserver(callback);
        observer.observe(options || {
          entryTypes: ["paint"]
        });
        break;
    }
    return observer;
  }
  bindingObserver(magicMethod, callback) {
    this.addObserver(this.createObserver(magicMethod, callback));
  }
  parseObserver(it) {
    const context = this.context;
    var originalCallback = context[it.originalMethod].bind(context);
    this.bindingObserver(it, originalCallback);
  }
}
class StoreHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    if (!this._callbacks) {
      this._callbacks = this.context.filterMethodes("subscribe");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._callbacks) == null ? void 0 : _b.length)) {
      this._callbacks.forEach((key) => this.parseSubscribe(key));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      console.log("destroy store", this.context, this.context.props.ref);
      this.context.$store.offAll(this.context);
    }
  }
  getCallback(field) {
    return this.context[field];
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  createLocalCallback(event, callback) {
    var newCallback = callback.bind(this.context);
    newCallback.displayName = `${this.context.sourceName}.${event}`;
    newCallback.source = this.context.source;
    return newCallback;
  }
  parseSubscribe(magicMethod) {
    var _a, _b;
    const events = magicMethod.args.join(" ");
    const checkMethodList = [];
    const eventList = [];
    let debounce2 = 0;
    let throttle2 = 0;
    let isAllTrigger = false;
    let isSelfTrigger = false;
    let isFrameTrigger = false;
    const debounceFunction = magicMethod.getFunction("debounce");
    const throttleFunction = magicMethod.getFunction("throttle");
    const allTriggerFunction = magicMethod.getFunction("allTrigger");
    const selfTriggerFunction = magicMethod.getFunction("selfTrigger");
    const frameFunction = magicMethod.getFunction("frame");
    if (debounceFunction) {
      debounce2 = +(((_a = debounceFunction.args) == null ? void 0 : _a[0]) || 0);
    }
    if (throttleFunction) {
      throttle2 = +(((_b = throttleFunction.args) == null ? void 0 : _b[0]) || 0);
    }
    if (allTriggerFunction) {
      isAllTrigger = true;
    }
    if (selfTriggerFunction) {
      isSelfTrigger = true;
    }
    if (frameFunction) {
      isFrameTrigger = true;
    }
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.context[method]) {
        checkMethodList.push(method);
      } else {
        eventList.push(method);
      }
    });
    const originalCallback = this.context[magicMethod.originalMethod];
    [...eventList, events].filter(Boolean).forEach((e) => {
      var callback = this.createLocalCallback(e, originalCallback);
      this.context.$store.on(e, callback, this.context, debounce2, throttle2, isAllTrigger, isSelfTrigger, checkMethodList, isFrameTrigger);
    });
    this.addBinding(magicMethod);
  }
}
registHandler({
  BindHandler,
  CallbackHandler,
  NativeEventHandler,
  DomEventHandler,
  ObserverHandler,
  StoreHandler
});
Dom.create("div");
const modules = { "./icon_list/_icon_template.js": __glob_0_0, "./icon_list/account_tree.js": __glob_0_1, "./icon_list/add.js": __glob_0_2, "./icon_list/add_box.js": __glob_0_3, "./icon_list/add_circle.js": __glob_0_4, "./icon_list/add_note.js": __glob_0_5, "./icon_list/align_center.js": __glob_0_6, "./icon_list/align_horizontal_center.js": __glob_0_7, "./icon_list/align_horizontal_left.js": __glob_0_8, "./icon_list/align_horizontal_right.js": __glob_0_9, "./icon_list/align_justify.js": __glob_0_10, "./icon_list/align_left.js": __glob_0_11, "./icon_list/align_right.js": __glob_0_12, "./icon_list/align_vertical_bottom.js": __glob_0_13, "./icon_list/align_vertical_center.js": __glob_0_14, "./icon_list/align_vertical_top.js": __glob_0_15, "./icon_list/alternate.js": __glob_0_16, "./icon_list/alternate_reverse.js": __glob_0_17, "./icon_list/apps copy.js": __glob_0_18, "./icon_list/apps.js": __glob_0_19, "./icon_list/archive.js": __glob_0_20, "./icon_list/arrowLeft.js": __glob_0_21, "./icon_list/arrowRight.js": __glob_0_22, "./icon_list/arrow_right.js": __glob_0_23, "./icon_list/artboard.js": __glob_0_24, "./icon_list/auto_awesome.js": __glob_0_25, "./icon_list/autorenew.js": __glob_0_26, "./icon_list/ballot.js": __glob_0_27, "./icon_list/bar_chart.js": __glob_0_28, "./icon_list/blur.js": __glob_0_29, "./icon_list/blur_linear.js": __glob_0_30, "./icon_list/boolean_difference.js": __glob_0_31, "./icon_list/boolean_intersection.js": __glob_0_32, "./icon_list/boolean_union.js": __glob_0_33, "./icon_list/boolean_xor.js": __glob_0_34, "./icon_list/border_all.js": __glob_0_35, "./icon_list/border_inner.js": __glob_0_36, "./icon_list/border_style.js": __glob_0_37, "./icon_list/bottom.js": __glob_0_38, "./icon_list/broken_image.js": __glob_0_39, "./icon_list/brush.js": __glob_0_40, "./icon_list/build.js": __glob_0_41, "./icon_list/camera_roll.js": __glob_0_42, "./icon_list/cat.js": __glob_0_43, "./icon_list/center.js": __glob_0_44, "./icon_list/chart.js": __glob_0_45, "./icon_list/check.js": __glob_0_46, "./icon_list/chevron_left.js": __glob_0_47, "./icon_list/chevron_right.js": __glob_0_48, "./icon_list/circle.js": __glob_0_49, "./icon_list/close.js": __glob_0_50, "./icon_list/code.js": __glob_0_51, "./icon_list/color.js": __glob_0_52, "./icon_list/color_lens.js": __glob_0_53, "./icon_list/control_point.js": __glob_0_54, "./icon_list/copy.js": __glob_0_55, "./icon_list/create_folder.js": __glob_0_56, "./icon_list/cube.js": __glob_0_57, "./icon_list/cylinder.js": __glob_0_58, "./icon_list/dahaze.js": __glob_0_59, "./icon_list/dark.js": __glob_0_60, "./icon_list/delete_forever.js": __glob_0_61, "./icon_list/device_hub.js": __glob_0_62, "./icon_list/diffuse.js": __glob_0_63, "./icon_list/direction.js": __glob_0_64, "./icon_list/doc.js": __glob_0_65, "./icon_list/drag_handle.js": __glob_0_66, "./icon_list/drag_indicator.js": __glob_0_67, "./icon_list/draw.js": __glob_0_68, "./icon_list/east.js": __glob_0_69, "./icon_list/edit.js": __glob_0_70, "./icon_list/end.js": __glob_0_71, "./icon_list/exit_to_app.js": __glob_0_72, "./icon_list/expand.js": __glob_0_73, "./icon_list/expand_more.js": __glob_0_74, "./icon_list/export.js": __glob_0_75, "./icon_list/face.js": __glob_0_76, "./icon_list/fast_forward.js": __glob_0_77, "./icon_list/fast_rewind.js": __glob_0_78, "./icon_list/file_copy.js": __glob_0_79, "./icon_list/filter.js": __glob_0_80, "./icon_list/flag.js": __glob_0_81, "./icon_list/flash_on.js": __glob_0_82, "./icon_list/flatten.js": __glob_0_83, "./icon_list/flex.js": __glob_0_84, "./icon_list/flip.js": __glob_0_85, "./icon_list/flipY.js": __glob_0_86, "./icon_list/flip_camera.js": __glob_0_87, "./icon_list/folder.js": __glob_0_88, "./icon_list/font_download.js": __glob_0_89, "./icon_list/format_bold.js": __glob_0_90, "./icon_list/format_indent.js": __glob_0_91, "./icon_list/format_line_spacing.js": __glob_0_92, "./icon_list/format_shapes.js": __glob_0_93, "./icon_list/format_size.js": __glob_0_94, "./icon_list/fullscreen.js": __glob_0_95, "./icon_list/gps_fixed.js": __glob_0_96, "./icon_list/gradient.js": __glob_0_97, "./icon_list/grid.js": __glob_0_98, "./icon_list/grid3x3.js": __glob_0_99, "./icon_list/group.js": __glob_0_100, "./icon_list/height.js": __glob_0_101, "./icon_list/highlight_at.js": __glob_0_102, "./icon_list/horizontal_align_center.js": __glob_0_103, "./icon_list/horizontal_distribute.js": __glob_0_104, "./icon_list/horizontal_rule.js": __glob_0_105, "./icon_list/image.js": __glob_0_106, "./icon_list/input.js": __glob_0_107, "./icon_list/italic.js": __glob_0_108, "./icon_list/join_full.js": __glob_0_109, "./icon_list/join_right.js": __glob_0_110, "./icon_list/justify_content_space_around.js": __glob_0_111, "./icon_list/keyboard.js": __glob_0_112, "./icon_list/keyboard_arrow_down.js": __glob_0_113, "./icon_list/keyboard_arrow_left.js": __glob_0_114, "./icon_list/keyboard_arrow_right.js": __glob_0_115, "./icon_list/keyboard_arrow_up.js": __glob_0_116, "./icon_list/landscape.js": __glob_0_117, "./icon_list/launch.js": __glob_0_118, "./icon_list/layers.js": __glob_0_119, "./icon_list/layout_default.js": __glob_0_120, "./icon_list/layout_flex.js": __glob_0_121, "./icon_list/layout_grid.js": __glob_0_122, "./icon_list/left.js": __glob_0_123, "./icon_list/left_hide.js": __glob_0_124, "./icon_list/lens.js": __glob_0_125, "./icon_list/light.js": __glob_0_126, "./icon_list/line_cap_butt.js": __glob_0_127, "./icon_list/line_cap_round.js": __glob_0_128, "./icon_list/line_cap_square.js": __glob_0_129, "./icon_list/line_chart.js": __glob_0_130, "./icon_list/line_join_bevel.js": __glob_0_131, "./icon_list/line_join_miter.js": __glob_0_132, "./icon_list/line_join_round.js": __glob_0_133, "./icon_list/line_style.js": __glob_0_134, "./icon_list/line_weight.js": __glob_0_135, "./icon_list/list.js": __glob_0_136, "./icon_list/local_library.js": __glob_0_137, "./icon_list/local_movie.js": __glob_0_138, "./icon_list/lock.js": __glob_0_139, "./icon_list/lock_open.js": __glob_0_140, "./icon_list/looks.js": __glob_0_141, "./icon_list/margin.js": __glob_0_142, "./icon_list/merge.js": __glob_0_143, "./icon_list/middle.js": __glob_0_144, "./icon_list/navigation.js": __glob_0_145, "./icon_list/near_me.js": __glob_0_146, "./icon_list/north.js": __glob_0_147, "./icon_list/note.js": __glob_0_148, "./icon_list/nowrap.js": __glob_0_149, "./icon_list/opacity.js": __glob_0_150, "./icon_list/outline.js": __glob_0_151, "./icon_list/outline_circle.js": __glob_0_152, "./icon_list/outline_image.js": __glob_0_153, "./icon_list/outline_rect.js": __glob_0_154, "./icon_list/outline_shape.js": __glob_0_155, "./icon_list/padding.js": __glob_0_156, "./icon_list/paint.js": __glob_0_157, "./icon_list/palette.js": __glob_0_158, "./icon_list/pantool.js": __glob_0_159, "./icon_list/pattern_check.js": __glob_0_160, "./icon_list/pattern_cross_dot.js": __glob_0_161, "./icon_list/pattern_dot.js": __glob_0_162, "./icon_list/pattern_grid.js": __glob_0_163, "./icon_list/pattern_horizontal_line.js": __glob_0_164, "./icon_list/pause.js": __glob_0_165, "./icon_list/pentool.js": __glob_0_166, "./icon_list/photo.js": __glob_0_167, "./icon_list/play.js": __glob_0_168, "./icon_list/plugin.js": __glob_0_169, "./icon_list/polygon.js": __glob_0_170, "./icon_list/power_input.js": __glob_0_171, "./icon_list/publish.js": __glob_0_172, "./icon_list/rect.js": __glob_0_173, "./icon_list/redo.js": __glob_0_174, "./icon_list/refresh.js": __glob_0_175, "./icon_list/remove.js": __glob_0_176, "./icon_list/remove2.js": __glob_0_177, "./icon_list/repeat.js": __glob_0_178, "./icon_list/replay.js": __glob_0_179, "./icon_list/right.js": __glob_0_180, "./icon_list/right_hide.js": __glob_0_181, "./icon_list/rotate.js": __glob_0_182, "./icon_list/rotate_left.js": __glob_0_183, "./icon_list/round.js": __glob_0_184, "./icon_list/same_height.js": __glob_0_185, "./icon_list/same_width.js": __glob_0_186, "./icon_list/save.js": __glob_0_187, "./icon_list/scatter.js": __glob_0_188, "./icon_list/screen.js": __glob_0_189, "./icon_list/setting.js": __glob_0_190, "./icon_list/settings_input_component.js": __glob_0_191, "./icon_list/shadow.js": __glob_0_192, "./icon_list/shape.js": __glob_0_193, "./icon_list/shuffle.js": __glob_0_194, "./icon_list/size.js": __glob_0_195, "./icon_list/skip_next.js": __glob_0_196, "./icon_list/skip_prev.js": __glob_0_197, "./icon_list/smooth.js": __glob_0_198, "./icon_list/source.js": __glob_0_199, "./icon_list/south.js": __glob_0_200, "./icon_list/space.js": __glob_0_201, "./icon_list/specular.js": __glob_0_202, "./icon_list/speed.js": __glob_0_203, "./icon_list/star.js": __glob_0_204, "./icon_list/start.js": __glob_0_205, "./icon_list/storage.js": __glob_0_206, "./icon_list/straighten.js": __glob_0_207, "./icon_list/strikethrough.js": __glob_0_208, "./icon_list/stroke_to_path.js": __glob_0_209, "./icon_list/swap_horiz.js": __glob_0_210, "./icon_list/switch_left.js": __glob_0_211, "./icon_list/switch_right.js": __glob_0_212, "./icon_list/sync.js": __glob_0_213, "./icon_list/table_rows.js": __glob_0_214, "./icon_list/text_rotate.js": __glob_0_215, "./icon_list/texture.js": __glob_0_216, "./icon_list/timer.js": __glob_0_217, "./icon_list/title.js": __glob_0_218, "./icon_list/to_back.js": __glob_0_219, "./icon_list/to_front.js": __glob_0_220, "./icon_list/tonality.js": __glob_0_221, "./icon_list/top.js": __glob_0_222, "./icon_list/transform.js": __glob_0_223, "./icon_list/underline.js": __glob_0_224, "./icon_list/undo.js": __glob_0_225, "./icon_list/unfold.js": __glob_0_226, "./icon_list/vertical_align_baseline.js": __glob_0_227, "./icon_list/vertical_align_bottom.js": __glob_0_228, "./icon_list/vertical_align_center.js": __glob_0_229, "./icon_list/vertical_align_stretch.js": __glob_0_230, "./icon_list/vertical_align_top.js": __glob_0_231, "./icon_list/vertical_distribute.js": __glob_0_232, "./icon_list/video.js": __glob_0_233, "./icon_list/view_comfy.js": __glob_0_234, "./icon_list/view_list.js": __glob_0_235, "./icon_list/view_week.js": __glob_0_236, "./icon_list/view_week_reverse.js": __glob_0_237, "./icon_list/vignette.js": __glob_0_238, "./icon_list/vintage.js": __glob_0_239, "./icon_list/visible.js": __glob_0_240, "./icon_list/visible_off.js": __glob_0_241, "./icon_list/volume_down.js": __glob_0_242, "./icon_list/volume_off.js": __glob_0_243, "./icon_list/volume_up.js": __glob_0_244, "./icon_list/wave.js": __glob_0_245, "./icon_list/waves.js": __glob_0_246, "./icon_list/web.js": __glob_0_247, "./icon_list/west.js": __glob_0_248, "./icon_list/width.js": __glob_0_249, "./icon_list/wrap.js": __glob_0_250, "./icon_list/wrap_text.js": __glob_0_251 };
let icons$1 = {};
Object.entries(modules).forEach(([key, value]) => {
  key = key.replace("./icon_list/", "").replace(".js", "");
  icons$1[key] = isFunction(value.default) ? value.default : `${value.default}`.trim();
});
function registIcon$1(obj = {}) {
  Object.entries(obj).forEach(([key, value]) => {
    icons$1[key] = value;
  });
}
var iconList = {
  icons: icons$1,
  registIcon: registIcon$1
};
function iconUse(name, transform2 = "", opt = { width: 24, height: 24 }) {
  if (!name)
    return "";
  if (!iconList.icons[name]) {
    return name;
  }
  return iconList.icons[name];
}
function iconUseForPath(pathString, opt = { width: 24, height: 24 }) {
  return `
    <svg viewBox="0 0 ${opt.width} ${opt.height}" xmlns="http://www.w3.org/2000/svg">
      <path d="${pathString}" style="fill:${opt.fill || "transparent"};stroke:${opt.stroke || "white"}" stroke-width="1" />
    </svg>
  `;
}
function iconMake(svgString, opt = { width: 24, height: 24 }) {
  return `
    <svg viewBox="0 0 ${opt.width} ${opt.height}" xmlns="http://www.w3.org/2000/svg">
      ${svgString}
    </svg>
  `;
}
function iconBlank() {
  return iconMake(`<path d="M0 0h24v24H0z" fill="none" fill-opacity="0"/>`);
}
const registIcon = iconList.registIcon;
const icons = iconList.icons;
export { iconBlank, iconMake, iconUse, iconUseForPath, icons, registIcon };
