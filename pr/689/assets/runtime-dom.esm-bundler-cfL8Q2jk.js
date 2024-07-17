import{aD as H,aE as A,aF as B,aG as M,aH as C,aI as w,aJ as U,aK as m,aL as z,W as F,aM as j,aN as X,aO as J,aP as G,aQ as Q,aR as Y,aS as W,aT as Z,aU as k,aV as tt}from"./links-BAvP7Vld.js";
/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const et="http://www.w3.org/2000/svg",nt="http://www.w3.org/1998/Math/MathML",l=typeof document<"u"?document:null,T=l&&l.createElement("template"),st={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const s="svg"===e?l.createElementNS(et,t):"mathml"===e?l.createElementNS(nt,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&o&&null!=o.multiple&&s.setAttribute("multiple",o.multiple),s},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,o,s,l){const i=n?n.previousSibling:e.lastChild;if(s&&(s===l||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),s!==l&&(s=s.nextSibling););else{T.innerHTML="svg"===o?`<svg>${t}</svg>`:"mathml"===o?`<math>${t}</math>`:t;const s=T.content;if("svg"===o||"mathml"===o){const t=s.firstChild;for(;t.firstChild;)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},it=Symbol("_vtc");function ot(t,e,n){const o=t[it];o&&(e=(e?[e,...o]:[...o]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const E=Symbol("_vod"),$=Symbol("_vsh"),xt={beforeMount(t,{value:e},{transition:n}){t[E]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):h(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),h(t,!0),o.enter(t)):o.leave(t,(()=>{h(t,!1)})):h(t,e))},beforeUnmount(t,{value:e}){h(t,e)}};function h(t,e){t.style.display=e?t[E]:"none",t[$]=!e}const rt=Symbol(""),ct=/(^|;)\s*display\s*:/;function ft(t,e,n){const o=t.style,s=A(n);let l=!1;if(n&&!s){if(e)if(A(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&S(o,e,"")}else for(const t in e)null==n[t]&&S(o,t,"");for(const t in n)"display"===t&&(l=!0),S(o,t,n[t])}else if(s){if(e!==n){const t=o[rt];t&&(n+=";"+t),o.cssText=n,l=ct.test(n)}}else e&&t.removeAttribute("style");E in t&&(t[E]=l?o.display:"",t[$]&&(o.display="none"))}const N=/\s*!important$/;function S(t,e,n){if(m(n))n.forEach((n=>S(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=at(t,e);N.test(n)?t.setProperty(G(o),n.replace(N,""),"important"):t[o]=n}}const x=["Webkit","Moz","ms"],v={};function at(t,e){const n=v[e];if(n)return n;let o=Q(e);if("filter"!==o&&o in t)return v[e]=o;o=Y(o);for(let n=0;n<x.length;n++){const s=x[n]+o;if(s in t)return v[e]=s}return e}const I="http://www.w3.org/1999/xlink";function P(t,e,n,o,s,l=k(e)){o&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(I,e.slice(6,e.length)):t.setAttributeNS(I,e,n):null==n||l&&!W(n)?t.removeAttribute(e):t.setAttribute(e,l?"":Z(n)?String(n):n)}function lt(t,e,n,o,s,l,i){if("innerHTML"===e||"textContent"===e)return o&&i(o,s,l),void(t[e]=n??"");const r=t.tagName;if("value"===e&&"PROGRESS"!==r&&!r.includes("-")){const o="OPTION"===r?t.getAttribute("value")||"":t.value,s=null==n?"":String(n);return(o!==s||!("_value"in t))&&(t.value=s),null==n&&t.removeAttribute(e),void(t._value=n)}let a=!1;if(""===n||null==n){const o=typeof t[e];"boolean"===o?n=W(n):null==n&&"string"===o?(n="",a=!0):"number"===o&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function d(t,e,n,o){t.addEventListener(e,n,o)}function ut(t,e,n,o){t.removeEventListener(e,n,o)}const V=Symbol("_vei");function dt(t,e,n,o,s=null){const l=t[V]||(t[V]={}),i=l[e];if(o&&i)i.value=o;else{const[n,r]=pt(e);if(o){d(t,n,l[e]=gt(o,s),r)}else i&&(ut(t,n,i,r),l[e]=void 0)}}const L=/(?:Once|Passive|Capture)$/;function pt(t){let e;if(L.test(t)){let n;for(e={};n=t.match(L);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[":"===t[2]?t.slice(3):G(t.slice(2)),e]}let _=0;const mt=Promise.resolve(),ht=()=>_||(mt.then((()=>_=0)),_=Date.now());function gt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();tt(bt(t,n.value),e,5,[t])};return n.value=t,n.attached=ht(),n}function bt(t,e){if(m(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const O=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,St=(t,e,n,o,s,l,i,r,a)=>{const u="svg"===s;"class"===e?ot(t,o,u):"style"===e?ft(t,n,o):X(e)?J(e)||dt(t,e,n,o,i):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):At(t,e,o,u))?(lt(t,e,o,l,i,r,a),!t.tagName.includes("-")&&("value"===e||"checked"===e||"selected"===e)&&P(t,e,o,u,i,"value"!==e)):("true-value"===e?t._trueValue=o:"false-value"===e&&(t._falseValue=o),P(t,e,o,u))};function At(t,e,n,o){if(o)return!!("innerHTML"===e||"textContent"===e||e in t&&O(e)&&H(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"form"===e||"list"===e&&"INPUT"===t.tagName||"type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!O(e)||!A(n))&&e in t}const p=t=>{const e=t.props["onUpdate:modelValue"]||!1;return m(e)?t=>z(e,t):e};function Et(t){t.target.composing=!0}function R(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const u=Symbol("_assign"),It={created(t,{modifiers:{lazy:e,trim:n,number:o}},s){t[u]=p(s);const l=o||s.props&&"number"===s.props.type;d(t,e?"change":"input",(e=>{if(e.target.composing)return;let o=t.value;n&&(o=o.trim()),l&&(o=M(o)),t[u](o)})),n&&d(t,"change",(()=>{t.value=t.value.trim()})),e||(d(t,"compositionstart",Et),d(t,"compositionend",R),d(t,"change",R))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:o,trim:s,number:l}},i){if(t[u]=p(i),t.composing)return;const r=e??"";(!l&&"number"!==t.type||/^0\d/.test(t.value)?t.value:M(t.value))!==r&&(document.activeElement===t&&"range"!==t.type&&(o&&e===n||s&&t.value.trim()===r)||(t.value=r))}},Pt={deep:!0,created(t,e,n){t[u]=p(n),d(t,"change",(()=>{const e=t._modelValue,n=g(t),o=t.checked,s=t[u];if(m(e)){const t=w(e,n),l=-1!==t;if(o&&!l)s(e.concat(n));else if(!o&&l){const n=[...e];n.splice(t,1),s(n)}}else if(C(e)){const t=new Set(e);o?t.add(n):t.delete(n),s(t)}else s(q(t,o))}))},mounted:y,beforeUpdate(t,e,n){t[u]=p(n),y(t,e,n)}};function y(t,{value:e,oldValue:n},o){t._modelValue=e,m(e)?t.checked=w(e,o.props.value)>-1:C(e)?t.checked=e.has(o.props.value):e!==n&&(t.checked=U(e,q(t,!0)))}const Vt={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const s=C(e);d(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?M(g(t)):g(t)));t[u](t.multiple?s?new Set(e):e:e[0]),t._assigning=!0,F((()=>{t._assigning=!1}))})),t[u]=p(o)},mounted(t,{value:e,modifiers:{number:n}}){K(t,e)},beforeUpdate(t,e,n){t[u]=p(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||K(t,e)}};function K(t,e,n){const o=t.multiple,s=m(e);if(!o||s||C(e)){for(let n=0,l=t.options.length;n<l;n++){const l=t.options[n],i=g(l);if(o)if(s){const t=typeof i;l.selected="string"===t||"number"===t?e.some((t=>String(t)===String(i))):w(e,i)>-1}else l.selected=e.has(i);else if(U(g(l),e))return void(t.selectedIndex!==n&&(t.selectedIndex=n))}!o&&-1!==t.selectedIndex&&(t.selectedIndex=-1)}}function g(t){return"_value"in t?t._value:t.value}function q(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ct=["ctrl","shift","alt","meta"],vt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Ct.some((n=>t[`${n}Key`]&&!e.includes(n)))},Lt=(t,e)=>{const n=t._withMods||(t._withMods={}),o=e.join(".");return n[o]||(n[o]=(n,...o)=>{for(let t=0;t<e.length;t++){const o=vt[e[t]];if(o&&o(n,e))return}return t(n,...o)})},_t=j({patchProp:St},st);let D;function Mt(){return D||(D=B(_t))}const Ot=(...t)=>{const e=Mt().createApp(...t),{mount:n}=e;return e.mount=t=>{const o=Tt(t);if(!o)return;const s=e._component;!H(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const l=n(o,!1,wt(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},e};function wt(t){return t instanceof SVGElement?"svg":"function"==typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Tt(t){return A(t)?document.querySelector(t):t}export{It as a,Pt as b,Ot as c,xt as d,Vt as v,Lt as w};
