const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LandingPage-BQ1qFIy7.js","assets/vendor-DhN6jbAB.js","assets/createLucideIcon-DcRGKe__.js","assets/logo-DUNX4YAq.js","assets/users-De-2gxwh.js","assets/SignIn-BLu09tSN.js","assets/DashBoard-Cq2CXdev.js","assets/Error-BoH8CDEf.js"])))=>i.map(i=>d[i]);
import{r as c,a as J,B as Z,R as G,b as _,N as B}from"./vendor-DhN6jbAB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();var M={exports:{}},S={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K=c,Q=Symbol.for("react.element"),X=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,te=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,o){var a,s={},r=null,n=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(n=t.ref);for(a in t)ee.call(t,a)&&!re.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)s[a]===void 0&&(s[a]=t[a]);return{$$typeof:Q,type:e,key:r,ref:n,props:s,_owner:te.current}}S.Fragment=X;S.jsx=q;S.jsxs=q;M.exports=S;var p=M.exports,H,D=J;H=D.createRoot,D.hydrateRoot;const oe="modulepreload",se=function(e){return"/"+e},z={},A=function(t,o,a){let s=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.allSettled(o.map(l=>{if(l=se(l),l in z)return;z[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":oe,d||(m.as="script"),m.crossOrigin="",m.href=l,i&&m.setAttribute("nonce",i),document.head.appendChild(m),d)return new Promise((f,g)=>{m.addEventListener("load",f),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return s.then(n=>{for(const i of n||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};let ae={data:""},ne=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ae,ie=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,le=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,x=(e,t)=>{let o="",a="",s="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?o=r+" "+n+";":a+=r[1]=="f"?x(n,r):r+"{"+x(n,r[1]=="k"?"":t)+"}":typeof n=="object"?a+=x(n,t?t.replace(/([^,])+/g,i=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=x.p?x.p(r,n):r+":"+n+";")}return o+(t&&s?t+"{"+s+"}":s)+a},y={},V=e=>{if(typeof e=="object"){let t="";for(let o in e)t+=o+V(e[o]);return t}return e},ce=(e,t,o,a,s)=>{let r=V(e),n=y[r]||(y[r]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(r));if(!y[n]){let l=r!==e?e:(d=>{let u,m,f=[{}];for(;u=ie.exec(d.replace(le,""));)u[4]?f.shift():u[3]?(m=u[3].replace(F," ").trim(),f.unshift(f[0][m]=f[0][m]||{})):f[0][u[1]]=u[2].replace(F," ").trim();return f[0]})(e);y[n]=x(s?{["@keyframes "+n]:l}:l,o?"":"."+n)}let i=o&&y.g?y.g:null;return o&&(y.g=y[n]),((l,d,u,m)=>{m?d.data=d.data.replace(m,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[n],t,a,i),n},de=(e,t,o)=>e.reduce((a,s,r)=>{let n=t[r];if(n&&n.call){let i=n(o),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return a+s+(n??"")},"");function I(e){let t=this||{},o=e.call?e(t.p):e;return ce(o.unshift?o.raw?de(o,[].slice.call(arguments,1),t.p):o.reduce((a,s)=>Object.assign(a,s&&s.call?s(t.p):s),{}):o,ne(t.target),t.g,t.o,t.k)}let W,L,N;I.bind({g:1});let b=I.bind({k:1});function ue(e,t,o,a){x.p=t,W=e,L=o,N=a}function v(e,t){let o=this||{};return function(){let a=arguments;function s(r,n){let i=Object.assign({},r),l=i.className||s.className;o.p=Object.assign({theme:L&&L()},i),o.o=/ *go\d+/.test(l),i.className=I.apply(o,a)+(l?" "+l:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),N&&d[0]&&N(i),W(d,i)}return s}}var pe=e=>typeof e=="function",k=(e,t)=>pe(e)?e(t):e,me=(()=>{let e=0;return()=>(++e).toString()})(),Y=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),fe=20,O=new Map,he=1e3,U=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),E({type:4,toastId:e})},he);O.set(e,t)},ge=e=>{let t=O.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,fe)};case 1:return t.toast.id&&ge(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return e.toasts.find(r=>r.id===o.id)?T(e,{type:1,toast:o}):T(e,{type:0,toast:o});case 3:let{toastId:a}=t;return a?U(a):e.toasts.forEach(r=>{U(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===a||a===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},$=[],P={toasts:[],pausedAt:void 0},E=e=>{P=T(P,e),$.forEach(t=>{t(P)})},ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},be=(e={})=>{let[t,o]=c.useState(P);c.useEffect(()=>($.push(o),()=>{let s=$.indexOf(o);s>-1&&$.splice(s,1)}),[t]);let a=t.toasts.map(s=>{var r,n;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ye[s.type],style:{...e.style,...(n=e[s.type])==null?void 0:n.style,...s.style}}});return{...t,toasts:a}},xe=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||me()}),w=e=>(t,o)=>{let a=xe(t,e,o);return E({type:2,toast:a}),a.id},h=(e,t)=>w("blank")(e,t);h.error=w("error");h.success=w("success");h.loading=w("loading");h.custom=w("custom");h.dismiss=e=>{E({type:3,toastId:e})};h.remove=e=>E({type:4,toastId:e});h.promise=(e,t,o)=>{let a=h.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(s=>(h.success(k(t.success,s),{id:a,...o,...o==null?void 0:o.success}),s)).catch(s=>{h.error(k(t.error,s),{id:a,...o,...o==null?void 0:o.error})}),e};var ve=(e,t)=>{E({type:1,toast:{id:e,height:t}})},Ee=()=>{E({type:5,time:Date.now()})},we=e=>{let{toasts:t,pausedAt:o}=be(e);c.useEffect(()=>{if(o)return;let r=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&h.dismiss(i.id);return}return setTimeout(()=>h.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,o]);let a=c.useCallback(()=>{o&&E({type:6,time:Date.now()})},[o]),s=c.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},u=t.filter(g=>(g.position||d)===(r.position||d)&&g.height),m=u.findIndex(g=>g.id===r.id),f=u.filter((g,R)=>R<m&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,R)=>g+(R.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ve,startPause:Ee,endPause:a,calculateOffset:s}}},_e=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,je=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Oe=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$e=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${je} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pe=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ke=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Pe} 1s linear infinite;
`,Se=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ae=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ie=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Se} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ae} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Re=v("div")`
  position: absolute;
`,Le=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ne=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ne} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:o,iconTheme:a}=e;return t!==void 0?typeof t=="string"?c.createElement(Te,null,t):t:o==="blank"?null:c.createElement(Le,null,c.createElement(ke,{...a}),o!=="loading"&&c.createElement(Re,null,o==="error"?c.createElement($e,{...a}):c.createElement(Ie,{...a})))},De=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ze=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Fe="0%{opacity:0;} 100%{opacity:1;}",Ue="0%{opacity:1;} 100%{opacity:0;}",Be=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Me=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qe=(e,t)=>{let o=e.includes("top")?1:-1,[a,s]=Y()?[Fe,Ue]:[De(o),ze(o)];return{animation:t?`${b(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},He=c.memo(({toast:e,position:t,style:o,children:a})=>{let s=e.height?qe(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(Ce,{toast:e}),n=c.createElement(Me,{...e.ariaProps},k(e.message,e));return c.createElement(Be,{className:e.className,style:{...s,...o,...e.style}},typeof a=="function"?a({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});ue(c.createElement);var Ve=({id:e,className:t,style:o,onHeightUpdate:a,children:s})=>{let r=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;a(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return c.createElement("div",{ref:r,className:t,style:o},s)},We=(e,t)=>{let o=e.includes("top"),a=o?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...a,...s}},Ye=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,j=16,st=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:a,children:s,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=we(o);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:j,left:j,right:j,bottom:j,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let u=d.position||t,m=l.calculateOffset(d,{reverseOrder:e,gutter:a,defaultPosition:t}),f=We(u,m);return c.createElement(Ve,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ye:"",style:f},d.type==="custom"?k(d.message,d):s?s(d):c.createElement(He,{toast:d,position:u}))}))},Je=h;const C=c.createContext(),Ze=({children:e})=>{const[t,o]=c.useState(localStorage.getItem("token")||null);c.useEffect(()=>{const r=localStorage.getItem("token");r&&o(r)},[]);const a=r=>{localStorage.setItem("token",r),o(r)},s=()=>{Je("Signing Out....",{duration:2e3}),setTimeout(()=>{localStorage.removeItem("token"),o(null)},2e3)};return p.jsx(C.Provider,{value:{authToken:t,login:a,logout:s},children:e})},Ge=c.lazy(()=>A(()=>import("./LandingPage-BQ1qFIy7.js"),__vite__mapDeps([0,1,2,3,4]))),Ke=c.lazy(()=>A(()=>import("./SignIn-BLu09tSN.js"),__vite__mapDeps([5,1,3,2]))),Qe=c.lazy(()=>A(()=>import("./DashBoard-Cq2CXdev.js"),__vite__mapDeps([6,1,3,2,4]))),Xe=c.lazy(()=>A(()=>import("./Error-BoH8CDEf.js"),__vite__mapDeps([7,1,2]))),et=()=>p.jsx("div",{className:"flex items-center justify-center h-screen",children:p.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"})}),tt=({children:e})=>{const{authToken:t}=c.useContext(C);return t?e:p.jsx(B,{to:"/signin",replace:!0})};function rt(){const{authToken:e}=c.useContext(C);return p.jsx(Z,{children:p.jsx(c.Suspense,{fallback:p.jsx(et,{}),children:p.jsxs(G,{children:[p.jsx(_,{path:"/",element:p.jsx(Ge,{})}),p.jsx(_,{path:"/signin",element:e?p.jsx(B,{to:"/dashboard",replace:!0}):p.jsx(Ke,{})}),p.jsx(_,{path:"/dashboard",element:p.jsx(tt,{children:p.jsx(Qe,{})})}),p.jsx(_,{path:"*",element:p.jsx(Xe,{})})]})})})}H(document.getElementById("root")).render(p.jsx(c.StrictMode,{children:p.jsx(Ze,{children:p.jsx(rt,{})})}));export{C as A,st as I,Je as _,p as j};
