try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="21b4ff10-9164-480a-871e-5fbb44d2705b",e._sentryDebugIdIdentifier="sentry-dbid-21b4ff10-9164-480a-871e-5fbb44d2705b")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3204],{77921:function(e,t,n){n.d(t,{ck:function(){return $},fC:function(){return X}});var r=n(2265),a=n(73966);n(54887);var o=n(98575),i=n(57437),l=r.forwardRef((e,t)=>{let{children:n,...a}=e,o=r.Children.toArray(n),l=o.find(s);if(l){let e=l.props.children,n=o.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(u,{...a,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(u,{...a,ref:t,children:n})});l.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...a}=e;if(r.isValidElement(n)){let e,i;let l=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref,u=function(e,t){let n={...t};for(let r in t){let a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?n[r]=(...e)=>{o(...e),a(...e)}:a&&(n[r]=a):"style"===r?n[r]={...a,...o}:"className"===r&&(n[r]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props);return n.type!==r.Fragment&&(u.ref=t?(0,o.F)(t,l):l),r.cloneElement(n,u)}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var c=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===c}var d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...a}=e,o=r?l:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...a,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),f=n(6741),p=n(99255),m=n(26606),v=n(80886),g=n(29114),h="rovingFocusGroup.onEntryFocus",w={bubbles:!1,cancelable:!0},y="RovingFocusGroup",[b,x,R]=function(e){let t=e+"CollectionProvider",[n,u]=(0,a.b)(t),[c,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,a=r.useRef(null),o=r.useRef(new Map).current;return(0,i.jsx)(c,{scope:t,itemMap:o,collectionRef:a,children:n})};d.displayName=t;let f=e+"CollectionSlot",p=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,a=s(f,n),u=(0,o.e)(t,a.collectionRef);return(0,i.jsx)(l,{ref:u,children:r})});p.displayName=f;let m=e+"CollectionItemSlot",v="data-radix-collection-item",g=r.forwardRef((e,t)=>{let{scope:n,children:a,...u}=e,c=r.useRef(null),d=(0,o.e)(t,c),f=s(m,n);return r.useEffect(()=>(f.itemMap.set(c,{ref:c,...u}),()=>void f.itemMap.delete(c))),(0,i.jsx)(l,{[v]:"",ref:d,children:a})});return g.displayName=m,[{Provider:d,Slot:p,ItemSlot:g},function(t){let n=s(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},u]}(y),[E,T]=(0,a.b)(y,[R]),[C,D]=E(y),A=r.forwardRef((e,t)=>(0,i.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,i.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,i.jsx)(M,{...e,ref:t})})}));A.displayName=y;var M=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:l=!1,dir:u,currentTabStopId:c,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:p,onEntryFocus:y,preventScrollOnEntryFocus:b=!1,...R}=e,E=r.useRef(null),T=(0,o.e)(t,E),D=(0,g.gm)(u),[A=null,M]=(0,v.T)({prop:c,defaultProp:s,onChange:p}),[S,P]=r.useState(!1),I=(0,m.W)(y),O=x(n),N=r.useRef(!1),[F,j]=r.useState(0);return r.useEffect(()=>{let e=E.current;if(e)return e.addEventListener(h,I),()=>e.removeEventListener(h,I)},[I]),(0,i.jsx)(C,{scope:n,orientation:a,dir:D,loop:l,currentTabStopId:A,onItemFocus:r.useCallback(e=>M(e),[M]),onItemShiftTab:r.useCallback(()=>P(!0),[]),onFocusableItemAdd:r.useCallback(()=>j(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>j(e=>e-1),[]),children:(0,i.jsx)(d.div,{tabIndex:S||0===F?-1:0,"data-orientation":a,...R,ref:T,style:{outline:"none",...e.style},onMouseDown:(0,f.M)(e.onMouseDown,()=>{N.current=!0}),onFocus:(0,f.M)(e.onFocus,e=>{let t=!N.current;if(e.target===e.currentTarget&&t&&!S){let t=new CustomEvent(h,w);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable);k([e.find(e=>e.active),e.find(e=>e.id===A),...e].filter(Boolean).map(e=>e.ref.current),b)}}N.current=!1}),onBlur:(0,f.M)(e.onBlur,()=>P(!1))})})}),S="RovingFocusGroupItem",P=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:o=!1,tabStopId:l,...u}=e,c=(0,p.M)(),s=l||c,m=D(S,n),v=m.currentTabStopId===s,g=x(n),{onFocusableItemAdd:h,onFocusableItemRemove:w}=m;return r.useEffect(()=>{if(a)return h(),()=>w()},[a,h,w]),(0,i.jsx)(b.ItemSlot,{scope:n,id:s,focusable:a,active:o,children:(0,i.jsx)(d.span,{tabIndex:v?0:-1,"data-orientation":m.orientation,...u,ref:t,onMouseDown:(0,f.M)(e.onMouseDown,e=>{a?m.onItemFocus(s):e.preventDefault()}),onFocus:(0,f.M)(e.onFocus,()=>m.onItemFocus(s)),onKeyDown:(0,f.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let a=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(a))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(a)))return I[a]}(e,m.orientation,m.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let a=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=m.loop?(n=a,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):a.slice(o+1)}setTimeout(()=>k(a))}})})})});P.displayName=S;var I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function k(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var O=n(6400),N="ToggleGroup",[F,j]=(0,a.b)(N,[T]),L=T(),B=r.forwardRef((e,t)=>{let{type:n,...r}=e;if("single"===n)return(0,i.jsx)(z,{...r,ref:t});if("multiple"===n)return(0,i.jsx)(H,{...r,ref:t});throw Error("Missing prop `type` expected on `".concat(N,"`"))});B.displayName=N;var[W,_]=F(N),z=r.forwardRef((e,t)=>{let{value:n,defaultValue:a,onValueChange:o=()=>{},...l}=e,[u,c]=(0,v.T)({prop:n,defaultProp:a,onChange:o});return(0,i.jsx)(W,{scope:e.__scopeToggleGroup,type:"single",value:u?[u]:[],onItemActivate:c,onItemDeactivate:r.useCallback(()=>c(""),[c]),children:(0,i.jsx)(Y,{...l,ref:t})})}),H=r.forwardRef((e,t)=>{let{value:n,defaultValue:a,onValueChange:o=()=>{},...l}=e,[u=[],c]=(0,v.T)({prop:n,defaultProp:a,onChange:o}),s=r.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[c]),d=r.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[c]);return(0,i.jsx)(W,{scope:e.__scopeToggleGroup,type:"multiple",value:u,onItemActivate:s,onItemDeactivate:d,children:(0,i.jsx)(Y,{...l,ref:t})})});B.displayName=N;var[U,q]=F(N),Y=r.forwardRef((e,t)=>{let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:a=!0,orientation:o,dir:l,loop:u=!0,...c}=e,s=L(n),f=(0,g.gm)(l),p={role:"group",dir:f,...c};return(0,i.jsx)(U,{scope:n,rovingFocus:a,disabled:r,children:a?(0,i.jsx)(A,{asChild:!0,...s,orientation:o,dir:f,loop:u,children:(0,i.jsx)(d.div,{...p,ref:t})}):(0,i.jsx)(d.div,{...p,ref:t})})}),G="ToggleGroupItem",V=r.forwardRef((e,t)=>{let n=_(G,e.__scopeToggleGroup),a=q(G,e.__scopeToggleGroup),o=L(e.__scopeToggleGroup),l=n.value.includes(e.value),u=a.disabled||e.disabled,c={...e,pressed:l,disabled:u},s=r.useRef(null);return a.rovingFocus?(0,i.jsx)(P,{asChild:!0,...o,focusable:!u,active:l,ref:s,children:(0,i.jsx)(K,{...c,ref:t})}):(0,i.jsx)(K,{...c,ref:t})});V.displayName=G;var K=r.forwardRef((e,t)=>{let{__scopeToggleGroup:n,value:r,...a}=e,o=_(G,n),l={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},u="single"===o.type?l:void 0;return(0,i.jsx)(O.Z,{...u,...a,ref:t,onPressedChange:e=>{e?o.onItemActivate(r):o.onItemDeactivate(r)}})}),X=B,$=V},4216:function(e,t,n){let r;n.d(t,{dy:function(){return L}});var a=n(70001),o=n(2265);let i=o.createContext({drawerRef:{current:null},overlayRef:{current:null},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,handleOnly:!1,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},closeDrawer:()=>{},direction:"bottom",shouldAnimate:{current:!0},shouldScaleBackground:!1,setBackgroundColorOnScale:!0,noBodyStyles:!1,container:null,autoFocus:!1}),l=()=>{let e=o.useContext(i);if(!e)throw Error("useDrawerContext must be used within a Drawer.Root");return e};function u(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function c(){return s(/^iPhone/)||s(/^iPad/)||s(/^Mac/)&&navigator.maxTouchPoints>1}function s(e){return"undefined"!=typeof window&&null!=window.navigator?e.test(window.navigator.platform):void 0}!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");let d="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let e of t)"function"==typeof e&&e(...n)}}let p="undefined"!=typeof document&&window.visualViewport;function m(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function v(e){for(m(e)&&(e=e.parentElement);e&&!m(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}let g=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),h=0;function w(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function y(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=v(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom>t.getBoundingClientRect().bottom+24&&(t.scrollTop+=r-n)}e=t.parentElement}}function b(e){return e instanceof HTMLInputElement&&!g.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function x(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.useCallback(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}(...t),t)}let R=new WeakMap;function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!(e instanceof HTMLElement))return;let r={};Object.entries(t).forEach(t=>{let[n,a]=t;if(n.startsWith("--")){e.style.setProperty(n,a);return}r[n]=e.style[n],e.style[n]=a}),n||R.set(e,r)}let T=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function C(e,t){if(!e)return null;let n=window.getComputedStyle(e),r=n.transform||n.webkitTransform||n.mozTransform,a=r.match(/^matrix3d\((.+)\)$/);return a?parseFloat(a[1].split(", ")[T(t)?13:12]):(a=r.match(/^matrix\((.+)\)$/))?parseFloat(a[1].split(", ")[T(t)?5:4]):null}function D(e,t){if(!e)return()=>{};let n=e.style.cssText;return Object.assign(e.style,t),()=>{e.style.cssText=n}}let A={DURATION:.5,EASE:[.32,.72,0,1]},M="vaul-dragging";function S(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current.call(t,...n)},[])}function P(e){let{prop:t,defaultProp:n,onChange:r=()=>{}}=e,[a,i]=function(e){let{defaultProp:t,onChange:n}=e,r=o.useState(t),[a]=r,i=o.useRef(a),l=S(n);return o.useEffect(()=>{i.current!==a&&(l(a),i.current=a)},[a,i,l]),r}({defaultProp:n,onChange:r}),l=void 0!==t,u=l?t:a,c=S(r);return[u,o.useCallback(e=>{if(l){let n="function"==typeof e?e(t):e;n!==t&&c(n)}else i(e)},[l,t,i,c])]}let I=()=>()=>{},k=null;function O(e){var t,n;let{open:l,onOpenChange:s,children:m,onDrag:g,onRelease:x,snapPoints:D,shouldScaleBackground:S=!1,setBackgroundColorOnScale:I=!0,closeThreshold:O=.25,scrollLockTimeout:N=100,dismissible:F=!0,handleOnly:j=!1,fadeFromIndex:L=D&&D.length-1,activeSnapPoint:B,setActiveSnapPoint:W,fixed:_,modal:z=!0,onClose:H,nested:U,noBodyStyles:q=!1,direction:Y="bottom",defaultOpen:G=!1,disablePreventScroll:V=!0,snapToSequentialPoint:K=!1,preventScrollRestoration:X=!1,repositionInputs:$=!0,onAnimationEnd:Z,container:J,autoFocus:Q=!1}=e,[ee=!1,et]=P({defaultProp:G,prop:l,onChange:e=>{null==s||s(e),e||U||ek(),setTimeout(()=>{null==Z||Z(e)},1e3*A.DURATION),e&&!z&&"undefined"!=typeof window&&window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"}),e||(document.body.style.pointerEvents="auto")}}),[en,er]=o.useState(!1),[ea,eo]=o.useState(!1),[ei,el]=o.useState(!1),eu=o.useRef(null),ec=o.useRef(null),es=o.useRef(null),ed=o.useRef(null),ef=o.useRef(null),ep=o.useRef(!1),em=o.useRef(null),ev=o.useRef(0),eg=o.useRef(!1),eh=o.useRef(!G),ew=o.useRef(0),ey=o.useRef(null),eb=o.useRef((null==(t=ey.current)?void 0:t.getBoundingClientRect().height)||0),ex=o.useRef((null==(n=ey.current)?void 0:n.getBoundingClientRect().width)||0),eR=o.useRef(0),eE=o.useCallback(e=>{D&&e===eM.length-1&&(ec.current=new Date)},[]),{activeSnapPoint:eT,activeSnapPointIndex:eC,setActiveSnapPoint:eD,onRelease:eA,snapPointsOffset:eM,onDrag:eS,shouldFade:eP,getPercentageDragged:eI}=function(e){let{activeSnapPointProp:t,setActiveSnapPointProp:n,snapPoints:r,drawerRef:a,overlayRef:i,fadeFromIndex:l,onSnapPointChange:u,direction:c="bottom",container:s,snapToSequentialPoint:d}=e,[f,p]=P({prop:t,defaultProp:null==r?void 0:r[0],onChange:n}),[m,v]=o.useState("undefined"!=typeof window?{innerWidth:window.innerWidth,innerHeight:window.innerHeight}:void 0);o.useEffect(()=>{function e(){v({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let g=o.useMemo(()=>f===(null==r?void 0:r[r.length-1])||null,[r,f]),h=o.useMemo(()=>{var e;return null!=(e=null==r?void 0:r.findIndex(e=>e===f))?e:null},[r,f]),w=r&&r.length>0&&(l||0===l)&&!Number.isNaN(l)&&r[l]===f||!r,y=o.useMemo(()=>{var e;let t=s?{width:s.getBoundingClientRect().width,height:s.getBoundingClientRect().height}:"undefined"!=typeof window?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0};return null!=(e=null==r?void 0:r.map(e=>{let n="string"==typeof e,r=0;if(n&&(r=parseInt(e,10)),T(c)){let a=n?r:m?e*t.height:0;return m?"bottom"===c?t.height-a:-t.height+a:a}let a=n?r:m?e*t.width:0;return m?"right"===c?t.width-a:-t.width+a:a}))?e:[]},[r,m,s]),b=o.useMemo(()=>null!==h?null==y?void 0:y[h]:null,[y,h]),x=o.useCallback(e=>{var t;let n=null!=(t=null==y?void 0:y.findIndex(t=>t===e))?t:null;u(n),E(a.current,{transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),transform:T(c)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")}),y&&n!==y.length-1&&void 0!==l&&n!==l&&n<l?E(i.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),opacity:"0"}):E(i.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),opacity:"1"}),p(null==r?void 0:r[Math.max(n,0)])},[a.current,r,y,l,i,p]);return o.useEffect(()=>{if(f||t){var e;let n=null!=(e=null==r?void 0:r.findIndex(e=>e===t||e===f))?e:-1;y&&-1!==n&&"number"==typeof y[n]&&x(y[n])}},[f,t,r,y,x]),{isLastSnapPoint:g,activeSnapPoint:f,shouldFade:w,getPercentageDragged:function(e,t){if(!r||"number"!=typeof h||!y||void 0===l)return null;let n=h===l-1;if(h>=l&&t)return 0;if(n&&!t)return 1;if(!w&&!n)return null;let a=n?h+1:h-1,o=e/Math.abs(n?y[a]-y[a-1]:y[a+1]-y[a]);return n?1-o:o},setActiveSnapPoint:p,activeSnapPointIndex:h,onRelease:function(e){let{draggedDistance:t,closeDrawer:n,velocity:a,dismissible:o}=e;if(void 0===l)return;let u="bottom"===c||"right"===c?(null!=b?b:0)-t:(null!=b?b:0)+t,s=h===l-1,f=0===h,p=t>0;if(s&&E(i.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")")}),!d&&a>2&&!p){o?n():x(y[0]);return}if(!d&&a>2&&p&&y&&r){x(y[r.length-1]);return}let m=null==y?void 0:y.reduce((e,t)=>"number"!=typeof e||"number"!=typeof t?e:Math.abs(t-u)<Math.abs(e-u)?t:e),v=T(c)?window.innerHeight:window.innerWidth;if(a>.4&&Math.abs(t)<.4*v){let e=p?1:-1;if(e>0&&g&&r){x(y[r.length-1]);return}if(f&&e<0&&o&&n(),null===h)return;x(y[h+e]);return}x(m)},onDrag:function(e){let{draggedDistance:t}=e;if(null===b)return;let n="bottom"===c||"right"===c?b-t:b+t;("bottom"===c||"right"===c)&&n<y[y.length-1]||("top"===c||"left"===c)&&n>y[y.length-1]||E(a.current,{transform:T(c)?"translate3d(0, ".concat(n,"px, 0)"):"translate3d(".concat(n,"px, 0, 0)")})},snapPointsOffset:y}}({snapPoints:D,activeSnapPointProp:B,setActiveSnapPointProp:W,drawerRef:ey,fadeFromIndex:L,overlayRef:eu,onSnapPointChange:eE,direction:Y,container:J,snapToSequentialPoint:K});!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isDisabled:t}=e;d(()=>{if(!t){var e,n,a;let t,o,i,l,u,s,d;return 1==++h&&c()&&(i=0,l=window.pageXOffset,u=window.pageYOffset,s=f((e=document.documentElement,n="paddingRight",a="".concat(window.innerWidth-document.documentElement.clientWidth,"px"),o=e.style[n],e.style[n]=a,()=>{e.style[n]=o})),window.scrollTo(0,0),d=f(w(document,"touchstart",e=>{((t=v(e.target))!==document.documentElement||t!==document.body)&&(i=e.changedTouches[0].pageY)},{passive:!1,capture:!0}),w(document,"touchmove",e=>{if(!t||t===document.documentElement||t===document.body){e.preventDefault();return}let n=e.changedTouches[0].pageY,r=t.scrollTop,a=t.scrollHeight-t.clientHeight;0!==a&&((r<=0&&n>i||r>=a&&n<i)&&e.preventDefault(),i=n)},{passive:!1,capture:!0}),w(document,"touchend",e=>{let t=e.target;b(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),w(document,"focus",e=>{let t=e.target;b(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",p&&(p.height<window.innerHeight?requestAnimationFrame(()=>{y(t)}):p.addEventListener("resize",()=>y(t),{once:!0}))}))},!0),w(window,"scroll",()=>{window.scrollTo(0,0)})),r=()=>{s(),d(),window.scrollTo(l,u)}),()=>{0==--h&&(null==r||r())}}},[t])}({isDisabled:!ee||ea||!z||ei||!en||!$||!V});let{restorePositionSetting:ek}=function(e){let{isOpen:t,modal:n,nested:r,hasBeenOpened:a,preventScrollRestoration:i,noBodyStyles:l}=e,[c,s]=o.useState(()=>"undefined"!=typeof window?window.location.href:""),d=o.useRef(0),f=o.useCallback(()=>{if(u()&&null===k&&t&&!l){k={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};let{scrollX:e,innerHeight:t}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:"".concat(-d.current,"px"),left:"".concat(-e,"px"),right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{let e=t-window.innerHeight;e&&d.current>=t&&(document.body.style.top="".concat(-(d.current+e),"px"))}),300)}},[t]),p=o.useCallback(()=>{if(u()&&null!==k&&!l){let e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);Object.assign(document.body.style,k),window.requestAnimationFrame(()=>{if(i&&c!==window.location.href){s(window.location.href);return}window.scrollTo(t,e)}),k=null}},[c]);return o.useEffect(()=>{function e(){d.current=window.scrollY}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),o.useEffect(()=>{if(n)return()=>{"undefined"!=typeof document&&(document.querySelector("[data-vaul-drawer]")||p())}},[n,p]),o.useEffect(()=>{r||!a||(t?(window.matchMedia("(display-mode: standalone)").matches||f(),n||window.setTimeout(()=>{p()},500)):p())},[t,a,c,n,r,f,p]),{restorePositionSetting:p}}({isOpen:ee,modal:z,nested:null!=U&&U,hasBeenOpened:en,preventScrollRestoration:X,noBodyStyles:q});function eO(){return(window.innerWidth-26)/window.innerWidth}function eN(e,t){var n;let r=e,a=null==(n=window.getSelection())?void 0:n.toString(),o=ey.current?C(ey.current,Y):null,i=new Date;if("SELECT"===r.tagName||r.hasAttribute("data-vaul-no-drag")||r.closest("[data-vaul-no-drag]"))return!1;if("right"===Y||"left"===Y)return!0;if(ec.current&&i.getTime()-ec.current.getTime()<500)return!1;if(null!==o&&("bottom"===Y?o>0:o<0))return!0;if(a&&a.length>0)return!1;if(ef.current&&i.getTime()-ef.current.getTime()<N&&0===o||t)return ef.current=i,!1;for(;r;){if(r.scrollHeight>r.clientHeight){if(0!==r.scrollTop)return ef.current=new Date,!1;if("dialog"===r.getAttribute("role"))break}r=r.parentNode}return!0}function eF(e){ea&&ey.current&&(ey.current.classList.remove(M),ep.current=!1,eo(!1),ed.current=new Date),null==H||H(),e||et(!1),setTimeout(()=>{D&&eD(D[0])},1e3*A.DURATION)}function ej(){if(!ey.current)return;let e=document.querySelector("[data-vaul-drawer-wrapper]"),t=C(ey.current,Y);E(ey.current,{transform:"translate3d(0, 0, 0)",transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")")}),E(eu.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),opacity:"1"}),S&&t&&t>0&&ee&&E(e,{borderRadius:"".concat(8,"px"),overflow:"hidden",...T(Y)?{transform:"scale(".concat(eO(),") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),transformOrigin:"top"}:{transform:"scale(".concat(eO(),") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:"".concat(A.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(A.EASE.join(","),")")},!0)}return o.useEffect(()=>{window.requestAnimationFrame(()=>{eh.current=!0})},[]),o.useEffect(()=>{var e;function t(){if(ey.current&&$&&(b(document.activeElement)||eg.current)){var e;let t=(null==(e=window.visualViewport)?void 0:e.height)||0,n=window.innerHeight,r=n-t,a=ey.current.getBoundingClientRect().height||0;eR.current||(eR.current=a);let o=ey.current.getBoundingClientRect().top;if(Math.abs(ew.current-r)>60&&(eg.current=!eg.current),D&&D.length>0&&eM&&eC&&(r+=eM[eC]||0),ew.current=r,a>t||eg.current){let e=ey.current.getBoundingClientRect().height,i=e;e>t&&(i=t-(a>.8*n?o:26)),_?ey.current.style.height="".concat(e-Math.max(r,0),"px"):ey.current.style.height="".concat(Math.max(i,t-o),"px")}else!function(){let e=navigator.userAgent;return"undefined"!=typeof window&&(/Firefox/.test(e)&&/Mobile/.test(e)||/FxiOS/.test(e))}()&&(ey.current.style.height="".concat(eR.current,"px"));D&&D.length>0&&!eg.current?ey.current.style.bottom="0px":ey.current.style.bottom="".concat(Math.max(r,0),"px")}}return null==(e=window.visualViewport)||e.addEventListener("resize",t),()=>{var e;return null==(e=window.visualViewport)?void 0:e.removeEventListener("resize",t)}},[eC,D,eM]),o.useEffect(()=>(ee&&(E(document.documentElement,{scrollBehavior:"auto"}),ec.current=new Date),()=>{!function(e,t){if(!e||!(e instanceof HTMLElement))return;let n=R.get(e);n&&(e.style[t]=n[t])}(document.documentElement,"scrollBehavior")}),[ee]),o.useEffect(()=>{z||window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"})},[z]),o.createElement(a.fC,{defaultOpen:G,onOpenChange:e=>{(F||e)&&(e?er(!0):eF(!0),et(e))},open:ee},o.createElement(i.Provider,{value:{activeSnapPoint:eT,snapPoints:D,setActiveSnapPoint:eD,drawerRef:ey,overlayRef:eu,onOpenChange:s,onPress:function(e){var t,n;(F||D)&&(!ey.current||ey.current.contains(e.target))&&(eb.current=(null==(t=ey.current)?void 0:t.getBoundingClientRect().height)||0,ex.current=(null==(n=ey.current)?void 0:n.getBoundingClientRect().width)||0,eo(!0),es.current=new Date,c()&&window.addEventListener("touchend",()=>ep.current=!1,{once:!0}),e.target.setPointerCapture(e.pointerId),ev.current=T(Y)?e.pageY:e.pageX)},onRelease:function(e){var t,n;if(!ea||!ey.current)return;ey.current.classList.remove(M),ep.current=!1,eo(!1),ed.current=new Date;let r=C(ey.current,Y);if(!e||!eN(e.target,!1)||!r||Number.isNaN(r)||null===es.current)return;let a=ed.current.getTime()-es.current.getTime(),o=ev.current-(T(Y)?e.pageY:e.pageX),i=Math.abs(o)/a;if(i>.05&&(el(!0),setTimeout(()=>{el(!1)},200)),D){eA({draggedDistance:o*("bottom"===Y||"right"===Y?1:-1),closeDrawer:eF,velocity:i,dismissible:F}),null==x||x(e,!0);return}if("bottom"===Y||"right"===Y?o>0:o<0){ej(),null==x||x(e,!0);return}if(i>.4){eF(),null==x||x(e,!1);return}let l=Math.min(null!=(t=ey.current.getBoundingClientRect().height)?t:0,window.innerHeight),u=Math.min(null!=(n=ey.current.getBoundingClientRect().width)?n:0,window.innerWidth);if(Math.abs(r)>=("left"===Y||"right"===Y?u:l)*O){eF(),null==x||x(e,!1);return}null==x||x(e,!0),ej()},onDrag:function(e){if(ey.current&&ea){let t="bottom"===Y||"right"===Y?1:-1,n=(ev.current-(T(Y)?e.pageY:e.pageX))*t,r=n>0,a=D&&!F&&!r;if(a&&0===eC)return;let o=Math.abs(n),i=document.querySelector("[data-vaul-drawer-wrapper]"),l=o/("bottom"===Y||"top"===Y?eb.current:ex.current),u=eI(o,r);if(null!==u&&(l=u),a&&l>=1||!ep.current&&!eN(e.target,r))return;if(ey.current.classList.add(M),ep.current=!0,E(ey.current,{transition:"none"}),E(eu.current,{transition:"none"}),D&&eS({draggedDistance:n}),r&&!D){let e=Math.min(-(8*(Math.log(n+1)-2)*1),0)*t;E(ey.current,{transform:T(Y)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")});return}let c=1-l;if((eP||L&&eC===L-1)&&(null==g||g(e,l),E(eu.current,{opacity:"".concat(c),transition:"none"},!0)),i&&eu.current&&S){let e=Math.min(eO()+l*(1-eO()),1),t=8-8*l,n=Math.max(0,14-14*l);E(i,{borderRadius:"".concat(t,"px"),transform:T(Y)?"scale(".concat(e,") translate3d(0, ").concat(n,"px, 0)"):"scale(".concat(e,") translate3d(").concat(n,"px, 0, 0)"),transition:"none"},!0)}if(!D){let e=o*t;E(ey.current,{transform:T(Y)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")})}}},dismissible:F,shouldAnimate:eh,handleOnly:j,isOpen:ee,isDragging:ea,shouldFade:eP,closeDrawer:eF,onNestedDrag:function(e,t){if(t<0)return;let n=(window.innerWidth-16)/window.innerWidth,r=n+t*(1-n),a=-16+16*t;E(ey.current,{transform:T(Y)?"scale(".concat(r,") translate3d(0, ").concat(a,"px, 0)"):"scale(".concat(r,") translate3d(").concat(a,"px, 0, 0)"),transition:"none"})},onNestedOpenChange:function(e){let t=e?(window.innerWidth-16)/window.innerWidth:1,n=e?-16:0;em.current&&window.clearTimeout(em.current),E(ey.current,{transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),transform:T(Y)?"scale(".concat(t,") translate3d(0, ").concat(n,"px, 0)"):"scale(".concat(t,") translate3d(").concat(n,"px, 0, 0)")}),!e&&ey.current&&(em.current=setTimeout(()=>{let e=C(ey.current,Y);E(ey.current,{transition:"none",transform:T(Y)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")})},500))},onNestedRelease:function(e,t){let n=T(Y)?window.innerHeight:window.innerWidth,r=t?(n-16)/n:1,a=t?-16:0;t&&E(ey.current,{transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),transform:T(Y)?"scale(".concat(r,") translate3d(0, ").concat(a,"px, 0)"):"scale(".concat(r,") translate3d(").concat(a,"px, 0, 0)")})},keyboardIsOpen:eg,modal:z,snapPointsOffset:eM,activeSnapPointIndex:eC,direction:Y,shouldScaleBackground:S,setBackgroundColorOnScale:I,noBodyStyles:q,container:J,autoFocus:Q}},m))}let N=o.forwardRef(function(e,t){let{...n}=e,{overlayRef:r,snapPoints:i,onRelease:u,shouldFade:c,isOpen:s,modal:d,shouldAnimate:f}=l(),p=x(t,r),m=i&&i.length>0;if(!d)return null;let v=o.useCallback(e=>u(e),[u]);return o.createElement(a.aV,{onMouseUp:v,ref:p,"data-vaul-overlay":"","data-vaul-snap-points":s&&m?"true":"false","data-vaul-snap-points-overlay":s&&c?"true":"false","data-vaul-animate":(null==f?void 0:f.current)?"true":"false",...n})});N.displayName="Drawer.Overlay";let F=o.forwardRef(function(e,t){let{onPointerDownOutside:n,style:r,onOpenAutoFocus:i,...u}=e,{drawerRef:c,onPress:s,onRelease:d,onDrag:f,keyboardIsOpen:p,snapPointsOffset:m,activeSnapPointIndex:v,modal:g,isOpen:h,direction:w,snapPoints:y,container:b,handleOnly:R,shouldAnimate:E,autoFocus:C}=l(),[M,S]=o.useState(!1),P=x(t,c),k=o.useRef(null),O=o.useRef(null),N=o.useRef(!1),F=y&&y.length>0;!function(){let{direction:e,isOpen:t,shouldScaleBackground:n,setBackgroundColorOnScale:r,noBodyStyles:a}=l(),i=o.useRef(null),u=(0,o.useMemo)(()=>document.body.style.backgroundColor,[]);function c(){return(window.innerWidth-26)/window.innerWidth}o.useEffect(()=>{if(t&&n){i.current&&clearTimeout(i.current);let t=document.querySelector("[data-vaul-drawer-wrapper]")||document.querySelector("[vaul-drawer-wrapper]");if(!t)return;!function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]}(r&&!a?D(document.body,{background:"black"}):I,D(t,{transformOrigin:T(e)?"top":"left",transitionProperty:"transform, border-radius",transitionDuration:"".concat(A.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(A.EASE.join(","),")")}));let n=D(t,{borderRadius:"".concat(8,"px"),overflow:"hidden",...T(e)?{transform:"scale(".concat(c(),") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)")}:{transform:"scale(".concat(c(),") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)")}});return()=>{n(),i.current=window.setTimeout(()=>{u?document.body.style.background=u:document.body.style.removeProperty("background")},1e3*A.DURATION)}}},[t,n,u])}();let j=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(N.current)return!0;let r=Math.abs(e.y),a=Math.abs(e.x),o=a>r,i=["bottom","right"].includes(t)?1:-1;if("left"===t||"right"===t){if(!(e.x*i<0)&&a>=0&&a<=n)return o}else if(!(e.y*i<0)&&r>=0&&r<=n)return!o;return N.current=!0,!0};function L(e){k.current=null,N.current=!1,d(e)}return o.useEffect(()=>{F&&window.requestAnimationFrame(()=>{S(!0)})},[]),o.createElement(a.VY,{"data-vaul-drawer-direction":w,"data-vaul-drawer":"","data-vaul-delayed-snap-points":M?"true":"false","data-vaul-snap-points":h&&F?"true":"false","data-vaul-custom-container":b?"true":"false","data-vaul-animate":(null==E?void 0:E.current)?"true":"false",...u,ref:P,style:m&&m.length>0?{"--snap-point-height":"".concat(m[null!=v?v:0],"px"),...r}:r,onPointerDown:e=>{R||(null==u.onPointerDown||u.onPointerDown.call(u,e),k.current={x:e.pageX,y:e.pageY},s(e))},onOpenAutoFocus:e=>{null==i||i(e),C||e.preventDefault()},onPointerDownOutside:e=>{if(null==n||n(e),!g||e.defaultPrevented){e.preventDefault();return}p.current&&(p.current=!1)},onFocusOutside:e=>{if(!g){e.preventDefault();return}},onPointerMove:e=>{if(O.current=e,R||(null==u.onPointerMove||u.onPointerMove.call(u,e),!k.current))return;let t=e.pageY-k.current.y,n=e.pageX-k.current.x,r="touch"===e.pointerType?10:2;j({x:n,y:t},w,r)?f(e):(Math.abs(n)>r||Math.abs(t)>r)&&(k.current=null)},onPointerUp:e=>{null==u.onPointerUp||u.onPointerUp.call(u,e),k.current=null,N.current=!1,d(e)},onPointerOut:e=>{null==u.onPointerOut||u.onPointerOut.call(u,e),L(O.current)},onContextMenu:e=>{null==u.onContextMenu||u.onContextMenu.call(u,e),O.current&&L(O.current)}})});F.displayName="Drawer.Content";let j=o.forwardRef(function(e,t){let{preventCycle:n=!1,children:r,...a}=e,{closeDrawer:i,isDragging:u,snapPoints:c,activeSnapPoint:s,setActiveSnapPoint:d,dismissible:f,handleOnly:p,isOpen:m,onPress:v,onDrag:g}=l(),h=o.useRef(null),w=o.useRef(!1);function y(){h.current&&window.clearTimeout(h.current),w.current=!1}return o.createElement("div",{onClick:function(){if(w.current){y();return}window.setTimeout(()=>{!function(){if(u||n||w.current){y();return}if(y(),!c||0===c.length){f||i();return}if(s===c[c.length-1]&&f){i();return}let e=c.findIndex(e=>e===s);-1!==e&&d(c[e+1])}()},120)},onPointerCancel:y,onPointerDown:e=>{p&&v(e),h.current=window.setTimeout(()=>{w.current=!0},250)},onPointerMove:e=>{p&&g(e)},ref:t,"data-vaul-drawer-visible":m?"true":"false","data-vaul-handle":"","aria-hidden":"true",...a},o.createElement("span",{"data-vaul-handle-hitarea":"","aria-hidden":"true"},r))});j.displayName="Drawer.Handle";let L={Root:O,NestedRoot:function(e){let{onDrag:t,onOpenChange:n,open:r,...a}=e,{onNestedDrag:i,onNestedOpenChange:u,onNestedRelease:c}=l();if(!i)throw Error("Drawer.NestedRoot must be placed in another drawer");return o.createElement(O,{nested:!0,open:r,onClose:()=>{u(!1)},onDrag:(e,n)=>{i(e,n),null==t||t(e,n)},onOpenChange:e=>{e&&u(e),null==n||n(e)},onRelease:c,...a})},Content:F,Overlay:N,Trigger:a.xz,Portal:function(e){let t=l(),{container:n=t.container,...r}=e;return o.createElement(a.h_,{container:n,...r})},Handle:j,Close:a.x8,Title:a.Dx,Description:a.dk}}}]);