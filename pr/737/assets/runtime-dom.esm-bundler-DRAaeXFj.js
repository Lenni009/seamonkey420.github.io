import{aD as D,aE as S,aF as B,aG as _,aH as A,aI as M,aJ as H,aK as m,aL as z,W as F,aM as j,aN as X,aO as J,aP as U,aQ as Q,aR as Y,aS as G,aT as Z,aU as k,aV as tt}from"./links-DfRkeiXo.js";
/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const et="http://www.w3.org/2000/svg",nt="http://www.w3.org/1998/Math/MathML",f=typeof document<"u"?document:null,w=f&&f.createElement("template"),it={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const s="svg"===e?f.createElementNS(et,t):"mathml"===e?f.createElementNS(nt,t):n?f.createElement(t,{is:n}):f.createElement(t);return"select"===t&&o&&null!=o.multiple&&s.setAttribute("multiple",o.multiple),s},createText:t=>f.createTextNode(t),createComment:t=>f.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>f.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,o,s,l){const i=n?n.previousSibling:e.lastChild;if(s&&(s===l||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),s!==l&&(s=s.nextSibling););else{w.innerHTML="svg"===o?`<svg>${t}</svg>`:"mathml"===o?`<math>${t}</math>`:t;const s=w.content;if("svg"===o||"mathml"===o){const t=s.firstChild;for(;t.firstChild;)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},st=Symbol("_vtc");function ot(t,e,n){const o=t[st];o&&(e=(e?[e,...o]:[...o]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const C=Symbol("_vod"),W=Symbol("_vsh"),xt={beforeMount(t,{value:e},{transition:n}){t[C]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):h(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),h(t,!0),o.enter(t)):o.leave(t,(()=>{h(t,!1)})):h(t,e))},beforeUnmount(t,{value:e}){h(t,e)}};function h(t,e){t.style.display=e?t[C]:"none",t[W]=!e}const rt=Symbol(""),ct=/(^|;)\s*display\s*:/;function at(t,e,n){const o=t.style,s=S(n);let l=!1;if(n&&!s){if(e)if(S(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&b(o,e,"")}else for(const t in e)null==n[t]&&b(o,t,"");for(const t in n)"display"===t&&(l=!0),b(o,t,n[t])}else if(s){if(e!==n){const t=o[rt];t&&(n+=";"+t),o.cssText=n,l=ct.test(n)}}else e&&t.removeAttribute("style");C in t&&(t[C]=l?o.display:"",t[W]&&(o.display="none"))}const T=/\s*!important$/;function b(t,e,n){if(m(n))n.forEach((n=>b(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=ft(t,e);T.test(n)?t.setProperty(U(o),n.replace(T,""),"important"):t[o]=n}}const N=["Webkit","Moz","ms"],E={};function ft(t,e){const n=E[e];if(n)return n;let o=Q(e);if("filter"!==o&&o in t)return E[e]=o;o=Y(o);for(let n=0;n<N.length;n++){const s=N[n]+o;if(s in t)return E[e]=s}return e}const x="http://www.w3.org/1999/xlink";function I(t,e,n,o,s,l=k(e)){o&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(x,e.slice(6,e.length)):t.setAttributeNS(x,e,n):null==n||l&&!G(n)?t.removeAttribute(e):t.setAttribute(e,l?"":Z(n)?String(n):n)}function lt(t,e,n,o){if("innerHTML"===e||"textContent"===e){if(null==n)return;return void(t[e]=n)}const s=t.tagName;if("value"===e&&"PROGRESS"!==s&&!s.includes("-")){const o="OPTION"===s?t.getAttribute("value")||"":t.value,l=null==n?"":String(n);return(o!==l||!("_value"in t))&&(t.value=l),null==n&&t.removeAttribute(e),void(t._value=n)}let l=!1;if(""===n||null==n){const o=typeof t[e];"boolean"===o?n=G(n):null==n&&"string"===o?(n="",l=!0):"number"===o&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function u(t,e,n,o){t.addEventListener(e,n,o)}function ut(t,e,n,o){t.removeEventListener(e,n,o)}const P=Symbol("_vei");function dt(t,e,n,o,s=null){const l=t[P]||(t[P]={}),i=l[e];if(o&&i)i.value=o;else{const[n,r]=pt(e);if(o){u(t,n,l[e]=gt(o,s),r)}else i&&(ut(t,n,i,r),l[e]=void 0)}}const V=/(?:Once|Passive|Capture)$/;function pt(t){let e;if(V.test(t)){let n;for(e={};n=t.match(V);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[":"===t[2]?t.slice(3):U(t.slice(2)),e]}let v=0;const mt=Promise.resolve(),ht=()=>v||(mt.then((()=>v=0)),v=Date.now());function gt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();tt(bt(t,n.value),e,5,[t])};return n.value=t,n.attached=ht(),n}function bt(t,e){if(m(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const L=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,St=(t,e,n,o,s,l)=>{const i="svg"===s;"class"===e?ot(t,o,i):"style"===e?at(t,n,o):X(e)?J(e)||dt(t,e,n,o,l):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Ct(t,e,o,i))?(lt(t,e,o),!t.tagName.includes("-")&&("value"===e||"checked"===e||"selected"===e)&&I(t,e,o,i,l,"value"!==e)):("true-value"===e?t._trueValue=o:"false-value"===e&&(t._falseValue=o),I(t,e,o,i))};function Ct(t,e,n,o){if(o)return!!("innerHTML"===e||"textContent"===e||e in t&&L(e)&&D(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"form"===e||"list"===e&&"INPUT"===t.tagName||"type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!L(e)||!S(n))&&e in t}const p=t=>{const e=t.props["onUpdate:modelValue"]||!1;return m(e)?t=>z(e,t):e};function At(t){t.target.composing=!0}function O(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const l=Symbol("_assign"),It={created(t,{modifiers:{lazy:e,trim:n,number:o}},s){t[l]=p(s);const i=o||s.props&&"number"===s.props.type;u(t,e?"change":"input",(e=>{if(e.target.composing)return;let o=t.value;n&&(o=o.trim()),i&&(o=_(o)),t[l](o)})),n&&u(t,"change",(()=>{t.value=t.value.trim()})),e||(u(t,"compositionstart",At),u(t,"compositionend",O),u(t,"change",O))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:o,trim:s,number:i}},r){if(t[l]=p(r),t.composing)return;const a=e??"";(!i&&"number"!==t.type||/^0\d/.test(t.value)?t.value:_(t.value))!==a&&(document.activeElement===t&&"range"!==t.type&&(o&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Pt={deep:!0,created(t,e,n){t[l]=p(n),u(t,"change",(()=>{const e=t._modelValue,n=g(t),o=t.checked,s=t[l];if(m(e)){const t=M(e,n),l=-1!==t;if(o&&!l)s(e.concat(n));else if(!o&&l){const n=[...e];n.splice(t,1),s(n)}}else if(A(e)){const t=new Set(e);o?t.add(n):t.delete(n),s(t)}else s($(t,o))}))},mounted:R,beforeUpdate(t,e,n){t[l]=p(n),R(t,e,n)}};function R(t,{value:e,oldValue:n},o){t._modelValue=e,m(e)?t.checked=M(e,o.props.value)>-1:A(e)?t.checked=e.has(o.props.value):e!==n&&(t.checked=H(e,$(t,!0)))}const Vt={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const s=A(e);u(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?_(g(t)):g(t)));t[l](t.multiple?s?new Set(e):e:e[0]),t._assigning=!0,F((()=>{t._assigning=!1}))})),t[l]=p(o)},mounted(t,{value:e,modifiers:{number:n}}){y(t,e)},beforeUpdate(t,e,n){t[l]=p(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||y(t,e)}};function y(t,e,n){const o=t.multiple,s=m(e);if(!o||s||A(e)){for(let n=0,l=t.options.length;n<l;n++){const l=t.options[n],i=g(l);if(o)if(s){const t=typeof i;l.selected="string"===t||"number"===t?e.some((t=>String(t)===String(i))):M(e,i)>-1}else l.selected=e.has(i);else if(H(g(l),e))return void(t.selectedIndex!==n&&(t.selectedIndex=n))}!o&&-1!==t.selectedIndex&&(t.selectedIndex=-1)}}function g(t){return"_value"in t?t._value:t.value}function $(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Et=["ctrl","shift","alt","meta"],vt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Et.some((n=>t[`${n}Key`]&&!e.includes(n)))},Lt=(t,e)=>{const n=t._withMods||(t._withMods={}),o=e.join(".");return n[o]||(n[o]=(n,...o)=>{for(let t=0;t<e.length;t++){const o=vt[e[t]];if(o&&o(n,e))return}return t(n,...o)})},_t=j({patchProp:St},it);let K;function Mt(){return K||(K=B(_t))}const Ot=(...t)=>{const e=Mt().createApp(...t),{mount:n}=e;return e.mount=t=>{const o=Tt(t);if(!o)return;const s=e._component;!D(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const l=n(o,!1,wt(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},e};function wt(t){return t instanceof SVGElement?"svg":"function"==typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Tt(t){return S(t)?document.querySelector(t):t}export{It as a,Pt as b,Ot as c,xt as d,Vt as v,Lt as w};
