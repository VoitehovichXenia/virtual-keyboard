(()=>{"use strict";var e={794:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(81),a=r.n(t),s=r(645),o=r.n(s)()(a());o.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/*\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\r\n\r\nhtml {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n  \r\n/* Remove the margin in all browsers. */\r\n  \r\nbody {\r\n    margin: 0;\r\n}\r\n  \r\n/* Render the `main` element consistently in IE. */\r\n  \r\nmain {\r\n    display: block;\r\n}\r\n  \r\n/* Correct the font size and margin on `h1` elements within `section` and `article` contexts in Chrome, Firefox, and Safari. */\r\n  \r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n  \r\n/*\r\n1. Add the correct box sizing in Firefox.\r\n2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\nhr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n}\r\n  \r\n/*\r\n1. Correct the inheritance and scaling of font size in all browsers.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\npre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n}\r\n  \r\n/* Remove the gray background on active links in IE 10.*/\r\n  \r\na {\r\n    background-color: transparent;\r\n}\r\n  \r\n/*\r\n1. Remove the bottom border in Chrome 57-\r\n2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n*/\r\n  \r\nabbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n}\r\n  \r\n/* Add the correct font weight in Chrome, Edge, and Safari. */\r\n  \r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n  \r\n/*\r\n1. Correct the inheritance and scaling of font size in all browsers.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n  \r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n}\r\n  \r\n  /* Add the correct font size in all browsers. */\r\n  \r\nsmall {\r\n    font-size: 80%;\r\n}\r\n  \r\n/* Prevent `sub` and `sup` elements from affecting the line height in all browsers. */\r\n  \r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n  \r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n  \r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Remove the border on images inside links in IE 10. */\r\n  \r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n  \r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n}\r\n  \r\n/* Show the overflow in IE.\r\n1. Show the overflow in Edge.\r\n*/\r\n  \r\nbutton,\r\ninput { /* 1 */\r\n    overflow: visible;\r\n}\r\n  \r\n/* Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n1. Remove the inheritance of text transform in Firefox.\r\n*/\r\n  \r\nbutton,\r\nselect { /* 1 */\r\n    text-transform: none;\r\n}\r\n  \r\n/* Correct the inability to style clickable types in iOS and Safari. */\r\n  \r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n    -webkit-appearance: button;\r\n}\r\n  \r\n/* Remove the inner border and padding in Firefox. */\r\n  \r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n  \r\n/* Restore the focus styles unset by the previous rule. */\r\n  \r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n  \r\n/* Correct the padding in Firefox. */\r\n  \r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n  \r\n/*\r\n1. Correct the text wrapping in Edge and IE.\r\n2. Correct the color inheritance from `fieldset` elements in IE.\r\n3. Remove the padding so developers are not caught out when they zero out `fieldset` elements in all browsers.\r\n*/\r\n  \r\nlegend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n}\r\n  \r\n/* Add the correct vertical alignment in Chrome, Firefox, and Opera. */\r\n  \r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n  \r\n/* Remove the default vertical scrollbar in IE 10+.*/\r\n  \r\ntextarea {\r\n    overflow: auto;\r\n}\r\n  \r\n/*\r\n1. Add the correct box sizing in IE 10.\r\n2. Remove the padding in IE 10.\r\n*/\r\n  \r\n[type="checkbox"],\r\n[type="radio"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n}\r\n  \r\n/* Correct the cursor style of increment and decrement buttons in Chrome. */\r\n  \r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n  \r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n  \r\n[type="search"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n}\r\n  \r\n/* Remove the inner padding in Chrome and Safari on macOS. */\r\n  \r\n[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n  \r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n  \r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n}\r\n  \r\n/* Add the correct display in Edge, IE 10+, and Firefox. */\r\n  \r\ndetails {\r\n    display: block;\r\n}\r\n  \r\n/* Add the correct display in all browsers. */\r\n  \r\nsummary {\r\n    display: list-item;\r\n}\r\n  \r\n/* Add the correct display in IE 10+. */\r\n  \r\ntemplate {\r\n    display: none;\r\n}\r\n  \r\n/* Add the correct display in IE 10. */\r\n  \r\n[hidden] {\r\n    display: none;\r\n}',""]);const i=o},206:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(81),a=r.n(t),s=r(645),o=r.n(s),i=r(794),l=o()(a());l.i(i.Z),l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]),l.push([e.id,":root {\r\n    --key-size: 4vw;\r\n    --key-color: #5abcb980;\r\n    --key-color-hover: #5abcb9;\r\n    --keyboard-color: rgb(241, 241, 241);\r\n    --font-color: #383838;\r\n    --placeholder-color: #1f5c5a;\r\n}\r\n\r\nhtml {\r\n    font-size: 16px;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\n#area {\r\n    outline: none;\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    border: 1px solid var(--key-color-hover);\r\n    border-radius: 5px;\r\n    background-color: var(--keyboard-color);\r\n}\r\n\r\n#area::placeholder {\r\n    color: var(--placeholder-color);\r\n}\r\n\r\n.heading {\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 40px 0 10px;\r\n    color: var(--placeholder-color);\r\n}\r\n\r\n.subtitle {\r\n    font-weight: 400;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0 0 40px;\r\n    font-size: 18px;\r\n    color: var(--placeholder-color);\r\n}\r\n\r\n.wrapper {\r\n    display: grid;\r\n    grid-template-rows: max-content 1fr max-content;\r\n    gap: 40px 0;\r\n    max-width: 1440px;\r\n    padding: 1vh 0;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.keyboard {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(60, calc(var(--key-size) / 8));\r\n    grid-template-rows: repeat(5, var(--key-size));\r\n    gap: calc(var(--key-size) / 4);\r\n    border-radius: 5px;\r\n    background-color: var(--keyboard-color);\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n}\r\n\r\n.key {\r\n    grid-column: auto / span 4;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-radius: 5px;\r\n    color: var(--font-color);\r\n    font-weight: 700;\r\n    background-color: var(--key-color);\r\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);\r\n    transition: 0.3s;\r\n}\r\n\r\n.key:hover {\r\n    background-color: var(--key-color-hover);\r\n}\r\n\r\n.key_pressed {\r\n    transform: scale(1.1);\r\n    background-color: lightcoral;\r\n    box-shadow: none;\r\n}\r\n\r\n.key_pressed:hover {\r\n    background-color: lightcoral;\r\n}\r\n\r\n.caps-lock {\r\n    position: relative;\r\n}\r\n\r\n.caps-lock::after {\r\n    display: block;\r\n    content: '';\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 5px;\r\n    background-color: var(--font-color);\r\n    transition: 0.3s;\r\n}\r\n\r\n.caps-lock_active::after {\r\n    background-color: #fff;\r\n}\r\n\r\n.del,\r\n.dash,\r\n.r-ctrl,\r\n.r-alt {\r\n    grid-column-start: span 3;\r\n}\r\n\r\n.tab,\r\n.l-alt,\r\n.l-ctrl {\r\n    grid-column-start: span 6;\r\n}\r\n\r\n.r-shift {\r\n    grid-column-start: span 7;\r\n}\r\n\r\n.backspace,\r\n.enter,\r\n.caps-lock {\r\n    grid-column-start: span 8;\r\n}\r\n\r\n.l-shift {\r\n    grid-column-start: span 9;\r\n}\r\n\r\n.space {\r\n    grid-column-start: span 30;\r\n}\r\n\r\n@media screen and (min-width: 1441px) {\r\n    .keyboard {\r\n        grid-template-columns: repeat(60, calc(60px / 8));\r\n        grid-template-rows: repeat(5, 60px);\r\n        gap: calc(60px / 4);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1098.99px) {\r\n    .key {\r\n        font-size: 1.5vw;\r\n    }\r\n\r\n    .caps-lock::after {\r\n        top: 10px;\r\n        right: 5px;\r\n        width: 4px;\r\n        height: 4px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767.98px) {\r\n    .caps-lock::after {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 559.98px) {    \r\n    .heading {\r\n        font-size: 28px;\r\n    }\r\n    \r\n    .keyboard {\r\n        grid-template-rows: repeat(5, 6vw);\r\n    }\r\n}",""]);const d=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(t)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);t&&o[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var s={},o=[],i=0;i<e.length;i++){var l=e[i],d=t.base?l[0]+t.base:l[0],u=s[d]||0,c="".concat(d," ").concat(u);s[d]=u+1;var p=r(c),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=a(h,t);t.byIndex=i,n.splice(i,0,{identifier:c,updater:m,references:1})}o.push(c)}return o}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var s=t(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var i=r(s[o]);n[i].references--}for(var l=t(e,a),d=0;d<s.length;d++){var u=r(s[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}s=l}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var s=n[t]={id:t,exports:{}};return e[t](s,s.exports,r),s.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=[{keyCode:192,en:{name:"`",value:"`",secondValue:"~"},ru:{name:"ё",value:"ё",secondValue:"Ё",isCapsed:!0}},{name:"1",value:"1",secondValue:"!",keyCode:49},{keyCode:50,en:{name:"2",value:"2",secondValue:"@"},ru:{name:"2",value:"2",secondValue:'"'}},{keyCode:51,en:{name:"3",value:"3",secondValue:"#"},ru:{name:"3",value:"3",secondValue:"№"}},{keyCode:52,en:{name:"4",value:"4",secondValue:"$"},ru:{name:"4",value:"4",secondValue:";"}},{name:"5",value:"5",secondValue:"%",keyCode:53},{keyCode:54,en:{name:"6",value:"6",secondValue:"^"},ru:{name:"6",value:"6",secondValue:":"}},{keyCode:55,en:{name:"7",value:"7",secondValue:"&"},ru:{name:"7",value:"7",secondValue:"?"}},{name:"8",value:"8",secondValue:"*",keyCode:56},{name:"9",value:"9",secondValue:"(",keyCode:57},{name:"0",value:"0",secondValue:")",keyCode:48},{name:"-",value:"-",secondValue:"_",keyCode:189},{name:"=",value:"=",secondValue:"+",keyCode:187},{name:"backspace",keyCode:8},{name:"tab",value:"\t",secondValue:"\t",keyCode:9},{keyCode:81,en:{name:"q",value:"q",secondValue:"Q",isCapsed:!0},ru:{name:"й",value:"й",secondValue:"Й",isCapsed:!0}},{keyCode:87,en:{name:"w",value:"w",secondValue:"W",isCapsed:!0},ru:{name:"ц",value:"ц",secondValue:"Ц",isCapsed:!0}},{keyCode:69,en:{name:"e",value:"e",secondValue:"E",isCapsed:!0},ru:{name:"у",value:"у",secondValue:"У",isCapsed:!0}},{keyCode:82,en:{name:"r",value:"r",secondValue:"R",isCapsed:!0},ru:{name:"к",value:"к",secondValue:"К",isCapsed:!0}},{keyCode:84,en:{name:"t",value:"t",secondValue:"T",isCapsed:!0},ru:{name:"е",value:"е",secondValue:"Е",isCapsed:!0}},{keyCode:89,en:{name:"y",value:"y",secondValue:"Y",isCapsed:!0},ru:{name:"н",value:"н",secondValue:"Н",isCapsed:!0}},{keyCode:85,en:{name:"u",value:"u",secondValue:"U",isCapsed:!0},ru:{name:"г",value:"г",secondValue:"Г",isCapsed:!0}},{keyCode:73,en:{name:"i",value:"i",secondValue:"I",isCapsed:!0},ru:{name:"ш",value:"ш",secondValue:"Ш",isCapsed:!0}},{keyCode:79,en:{name:"o",value:"o",secondValue:"O",isCapsed:!0},ru:{name:"щ",value:"щ",secondValue:"Щ",isCapsed:!0}},{keyCode:80,en:{name:"p",value:"p",secondValue:"P",isCapsed:!0},ru:{name:"з",value:"з",secondValue:"З",isCapsed:!0}},{keyCode:219,en:{name:"[",value:"[",secondValue:"{"},ru:{name:"х",value:"х",secondValue:"Х",isCapsed:!0}},{keyCode:221,en:{name:"]",value:"]",secondValue:"}"},ru:{name:"ъ",value:"ъ",secondValue:"Ъ",isCapsed:!0}},{keyCode:220,en:{name:"\\",value:"\\",secondValue:"|"},ru:{name:"\\",value:"\\",secondValue:"/"}},{keyCode:46,name:"del"},{name:"caps lock",keyCode:20},{keyCode:65,en:{name:"a",value:"a",secondValue:"A",isCapsed:!0},ru:{name:"ф",value:"ф",secondValue:"Ф",isCapsed:!0}},{keyCode:83,en:{name:"s",value:"s",secondValue:"S",isCapsed:!0},ru:{name:"ы",value:"ы",secondValue:"Ы",isCapsed:!0}},{keyCode:68,en:{name:"d",value:"d",secondValue:"D",isCapsed:!0},ru:{name:"в",value:"в",secondValue:"В",isCapsed:!0}},{keyCode:70,en:{name:"f",value:"f",secondValue:"F",isCapsed:!0},ru:{name:"а",value:"а",secondValue:"А",isCapsed:!0}},{keyCode:71,en:{name:"g",value:"g",secondValue:"G",isCapsed:!0},ru:{name:"п",value:"п",secondValue:"П",isCapsed:!0}},{keyCode:72,en:{name:"h",value:"h",secondValue:"H",isCapsed:!0},ru:{name:"р",value:"р",secondValue:"Р",isCapsed:!0}},{keyCode:74,en:{name:"j",value:"j",secondValue:"J",isCapsed:!0},ru:{name:"о",value:"о",secondValue:"О",isCapsed:!0}},{keyCode:75,en:{name:"k",value:"k",secondValue:"K",isCapsed:!0},ru:{name:"л",value:"л",secondValue:"Л",isCapsed:!0}},{keyCode:76,en:{name:"l",value:"l",secondValue:"L",isCapsed:!0},ru:{name:"д",value:"д",secondValue:"Д",isCapsed:!0}},{keyCode:186,en:{name:";",value:";",secondValue:":"},ru:{name:"ж",value:"ж",secondValue:"Ж",isCapsed:!0}},{keyCode:222,en:{name:"'",value:"'",secondValue:'"'},ru:{name:"э",value:"э",secondValue:"Э",isCapsed:!0}},{name:"enter",value:"\n",secondValue:"\n",keyCode:13},{name:"shift",keyCode:16,type:"left"},{keyCode:90,en:{name:"z",value:"z",secondValue:"Z",isCapsed:!0},ru:{name:"я",value:"я",secondValue:"Я",isCapsed:!0}},{keyCode:88,en:{name:"x",value:"x",secondValue:"X",isCapsed:!0},ru:{name:"ч",value:"ч",secondValue:"Ч",isCapsed:!0}},{keyCode:67,en:{name:"c",value:"c",secondValue:"C",isCapsed:!0},ru:{name:"с",value:"с",secondValue:"С",isCapsed:!0}},{keyCode:86,en:{name:"v",value:"v",secondValue:"V",isCapsed:!0},ru:{name:"м",value:"м",secondValue:"М",isCapsed:!0}},{keyCode:66,en:{name:"b",value:"b",secondValue:"B",isCapsed:!0},ru:{name:"и",value:"и",secondValue:"И",isCapsed:!0}},{keyCode:78,en:{name:"n",value:"n",secondValue:"N",isCapsed:!0},ru:{name:"т",value:"т",secondValue:"Т",isCapsed:!0}},{keyCode:77,en:{name:"m",value:"m",secondValue:"M",isCapsed:!0},ru:{name:"ь",value:"ь",secondValue:"Ь",isCapsed:!0}},{keyCode:188,en:{name:",",value:",",secondValue:"<"},ru:{name:"б",value:"б",secondValue:"Б",isCapsed:!0}},{keyCode:190,en:{name:".",value:".",secondValue:">"},ru:{name:"ю",value:"ю",secondValue:"Ю",isCapsed:!0}},{keyCode:191,en:{name:"/",value:"/",secondValue:"?"},ru:{name:".",value:".",secondValue:","}},{name:"↑",value:"↑",secondValue:"↑",keyCode:38},{name:"shift",keyCode:16,type:"right"},{name:"ctrl",keyCode:17,type:"left"},{name:"alt",keyCode:18,type:"left"},{name:"space",value:" ",secondValue:" ",keyCode:32},{name:"alt",keyCode:18,type:"right"},{name:"←",value:"←",secondValue:"←",keyCode:37},{name:"↓",value:"↓",secondValue:"↓",keyCode:40},{name:"→",value:"→",secondValue:"→",keyCode:39},{name:"ctrl",keyCode:17,type:"right"}];function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const t=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyCode=n.keyCode,this.name=n.name||null,this.value=n.value||null,this.secondValue=n.secondValue||null,this.ru=n.ru||null,this.en=n.en||null,this.language=localStorage.getItem("lang")?localStorage.getItem("lang"):"en",this.type=n.type||null,this.isCapsed=null,this.element=null,this.state="initial"}var r,t;return r=e,(t=[{key:"init",value:function(){"en"===this.language&&this.en&&(this.name=this.en.name,this.value=this.en.value,this.secondValue=this.en.secondValue,this.isCapsed=!!this.en.isCapsed),"ru"===this.language&&this.ru&&(this.name=this.ru.name,this.value=this.ru.value,this.secondValue=this.ru.secondValue,this.isCapsed=!!this.ru.isCapsed)}},{key:"render",value:function(){switch(this.init(this.language),this.element=document.createElement("button"),this.element.classList.add("key"),this.element.id=this.keyCode,this.type&&(this.element.dataset.type=this.type),this.name){case"backspace":case"tab":case"enter":case"space":case"del":this.element.classList.add(this.name);break;case"\\":this.element.classList.add("dash");break;case"caps lock":this.element.classList.add("caps-lock");break;case"shift":"left"===this.type&&this.element.classList.add("l-shift"),"right"===this.type&&this.element.classList.add("r-shift");break;case"ctrl":"left"===this.type&&this.element.classList.add("l-ctrl"),"right"===this.type&&this.element.classList.add("r-ctrl");break;case"alt":"left"===this.type&&this.element.classList.add("l-alt"),"right"===this.type&&this.element.classList.add("r-alt")}return this.element.value=this.value,this.element.textContent=this.name,this.element}},{key:"highlight",value:function(){this.element.classList.add("key_pressed")}},{key:"removeHighlight",value:function(){this.element.classList.remove("key_pressed")}},{key:"makeCaps",value:function(){this.isCapsed&&(this.element.textContent=this.secondValue,this.element.value=this.secondValue,this.state="capsed")}},{key:"makeLower",value:function(){this.isCapsed&&(this.element.textContent=this.value,this.element.value=this.value,this.state="initial")}},{key:"showSecondValue",value:function(){/[^\n\t\s]/.test(this.secondValue)&&this.secondValue&&"initial"===this.state&&(this.element.textContent=this.secondValue,this.element.value=this.secondValue,this.state="second value")}},{key:"showInitialValue",value:function(){"second value"===this.state&&(this.element.textContent=this.value,this.element.value=this.value,this.state="initial")}},{key:"changeLang",value:function(e){this.language=e,this.init(),this.element.textContent=this.name,this.element.value=this.value}}])&&n(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}();function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const o=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.keys=e.map((function(e){return new t(e)})),this.elements={keysContainer:null,keys:this.keys.map((function(e){return e.render()}))}}var r,o;return r=n,(o=[{key:"render",value:function(){var e,n;return this.elements.keysContainer=document.createElement("div"),this.elements.keysContainer.classList.add("keyboard"),(e=this.elements.keysContainer).append.apply(e,function(e){if(Array.isArray(e))return a(e)}(n=this.elements.keys)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),this.elements.keysContainer}}])&&s(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function i(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements={heading:null,subtitle:null,textArea:null,keyboardElement:null,wrapper:null},this.keyboard=null,this.cursorPos=0}var n,r;return n=e,(r=[{key:"renderMainPage",value:function(){var e=this,n=this.elements;n.heading=document.createElement("h1"),n.heading.textContent="Virtual keyboard for Windows OS",n.heading.classList.add("heading"),n.subtitle=document.createElement("h3"),n.subtitle.textContent="Press left ctrl + alt to switch language",n.subtitle.classList.add("subtitle"),n.textArea=document.createElement("textarea"),n.textArea.id="area",n.textArea.autofocus=!0,n.textArea.placeholder="Start typing here",n.textArea.addEventListener("click",(function(){e.cursorPos=e.elements.textArea.selectionStart})),n.wrapper=document.createElement("div"),n.wrapper.classList.add("wrapper"),this.keyboard=new o,n.keyboardElement=this.keyboard.render(),n.keyboardElement.addEventListener("mousedown",(function(n){var r=+n.target.id,t=e.keyboard.keys,a=n.target.getAttribute("data-type"),s=t.find((function(e){return a?e.keyCode===r&&e.type===a:e.keyCode===r}));if(s){if(s.highlight(),8===s.keyCode)return void e.backspace();if(46===s.keyCode)return void e.delete();20===s.keyCode?(e.isCapsLockPressed=!e.isCapsLockPressed,e.toggleCapsLock(),s.element.classList.toggle("caps-lock_active")):16===s.keyCode?(e.isShiftPressed=!0,t.forEach((function(e){return e.showSecondValue()}))):17===s.keyCode&&"left"===s.type?(e.isCtrlPressed=!e.isCtrlPressed,e.isCtrlPressed&&e.isAltPressed&&(e.changeLangHandler(),e.isAltPressed=!1,e.isCtrlPressed=!1)):18===s.keyCode&&"left"===s.type&&(e.isAltPressed=!e.isAltPressed,e.isCtrlPressed&&e.isAltPressed&&(e.changeLangHandler(),e.isAltPressed=!1,e.isCtrlPressed=!1))}s.value&&e.addSymbol(s.element.value,e.cursorPos)})),n.keyboardElement.addEventListener("mouseup",(function(n){var r=+n.target.id,t=e.keyboard.keys,a=n.target.getAttribute("data-type"),s=t.find((function(e){return a?e.keyCode===r&&e.type===a:e.keyCode===r}));if(s){if(8===s.keyCode)return e.setCaretPosition(e.cursorPos),void s.removeHighlight();if(46===s.keyCode)return e.setCaretPosition(e.cursorPos),void s.removeHighlight();if(16===s.keyCode)t.forEach((function(e){return e.showInitialValue()})),e.isShiftPressed=!1;else{if(18===s.keyCode&&"left"===s.type)return e.isAltPressed||s.removeHighlight(),void(e.isCtrlPressed||e.keyboard.keys.find((function(e){return 17===e.keyCode&&"left"===e.type})).removeHighlight());if(17===s.keyCode&&"left"===s.type)return e.isCtrlPressed||s.removeHighlight(),void(e.isAltPressed||e.keyboard.keys.find((function(e){return 18===e.keyCode&&"left"===e.type})).removeHighlight())}s.removeHighlight()}e.setCaretPosition(e.cursorPos+1)})),window.addEventListener("keydown",(function(n){n.preventDefault();var r=n.keyCode,t=e.keyboard.keys,a=n.code.toLowerCase(),s=t.find((function(e){return 18===r||17===r||16===r?e.keyCode===r&&a.indexOf(e.type)>=0:e.keyCode===r}));if(s){if(s.highlight(),8===s.keyCode)return e.backspace(),void e.setCaretPosition(e.cursorPos);if(46===s.keyCode)return e.delete(),void e.setCaretPosition(e.cursorPos);20===s.keyCode?(e.isCapsLockPressed=!e.isCapsLockPressed,e.toggleCapsLock(),s.element.classList.toggle("caps-lock_active")):16===s.keyCode?(e.isShiftPressed=!0,t.forEach((function(e){return e.showSecondValue()}))):17===s.keyCode&&"left"===s.type?(e.isCtrlPressed=!0,e.isCtrlPressed&&e.isAltPressed&&e.changeLangHandler()):18===s.keyCode&&"left"===s.type&&(e.isAltPressed=!0,e.isCtrlPressed&&e.isAltPressed&&e.changeLangHandler())}s.value&&e.addSymbol(s.element.value,e.cursorPos),e.setCaretPosition(e.cursorPos+1)})),window.addEventListener("keyup",(function(n){var r=n.keyCode,t=e.keyboard.keys,a=n.code.toLowerCase(),s=t.find((function(e){return 18===r||17===r||16===r?e.keyCode===r&&a.indexOf(e.type)>=0:e.keyCode===r}));s&&(16===s.keyCode?(t.forEach((function(e){return e.showInitialValue()})),e.isShiftPressed=!1):18===s.keyCode&&"left"===s.type?e.isAltPressed=!1:17===s.keyCode&&"left"===s.type&&(e.isCtrlPressed=!1),s.removeHighlight())})),n.wrapper.append(n.textArea,n.keyboardElement),document.body.append(n.heading,n.subtitle,n.wrapper)}},{key:"addSymbol",value:function(e,n){if(n&&n!==this.elements.textArea.textContent.length){var r=this.elements.textArea.textContent.slice(0,n),t=this.elements.textArea.textContent.slice(n);this.elements.textArea.textContent=r+e+t}else this.elements.textArea.textContent+=e}},{key:"backspace",value:function(){var e=this.elements.textArea,n=this.cursorPos;n?(e.textContent=e.textContent.slice(0,n-1)+e.textContent.slice(n),this.cursorPos-=1):this.cursorPos=0}},{key:"delete",value:function(){var e=this.elements.textArea,n=this.cursorPos,r=e.textContent.length;e.textContent=n!==r-1?e.textContent.slice(0,n)+e.textContent.slice(n+1):e.textContent.slice(0,r-1)}},{key:"toggleCapsLock",value:function(){this.isCapsLockPressed?(this.keyboard.keys.forEach((function(e){return e.makeCaps()})),localStorage.setItem("capsed",JSON.stringify(this.isCapsLockPressed))):(this.keyboard.keys.forEach((function(e){return e.makeLower()})),localStorage.setItem("capsed",JSON.stringify(this.isCapsLockPressed)))}},{key:"changeLangHandler",value:function(){var e=this,n=this.keyboard.keys;this.language="en"===this.language?"ru":"en",n.forEach((function(n){n.changeLang(e.language),e.isCapsLockPressed&&n.makeCaps()})),localStorage.setItem("lang",this.language)}},{key:"setCaretPosition",value:function(e){this.cursorPos=e,this.elements.textArea.focus(),this.elements.textArea.selectionStart=e}}])&&i(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();var d=r(379),u=r.n(d),c=r(795),p=r.n(c),h=r(569),m=r.n(h),y=r(565),f=r.n(y),v=r(216),C=r.n(v),g=r(589),k=r.n(g),b=r(206),x={};x.styleTagTransform=k(),x.setAttributes=f(),x.insert=m().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=C(),u()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,(new l).renderMainPage()})()})();