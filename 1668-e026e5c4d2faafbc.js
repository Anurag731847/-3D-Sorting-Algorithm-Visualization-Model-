try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="daaf74a1-3e4c-4e98-8716-c79fee9368ca",e._sentryDebugIdIdentifier="sentry-dbid-daaf74a1-3e4c-4e98-8716-c79fee9368ca")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1668],{91668:function(e,t,n){n.d(t,{VY:function(){return q},h_:function(){return Z},zt:function(){return H},fC:function(){return X},u:function(){return D},pn:function(){return k},aJ:function(){return P},xz:function(){return J}});var r=n(2265),o=n(6741),l=n(98575),i=n(73966),a=n(15278),s=n(99255),u=n(26008),c=n(83832),d=n(71599),p=n(82912),f=n(57437);r.forwardRef((e,t)=>{let{children:n,...o}=e,l=r.Children.toArray(n),i=l.find(y);if(i){let e=i.props.children,n=l.map(t=>t!==i?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,f.jsx)(h,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,f.jsx)(h,{...o,ref:t,children:n})}).displayName="Slot";var h=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],l=t[r];/^on[A-Z]/.test(r)?o&&l?n[r]=(...e)=>{l(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...l}:"className"===r&&(n[r]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,l.F)(t,a):a})}return r.Children.count(n)>1?r.Children.only(null):null});h.displayName="SlotClone";var g=({children:e})=>(0,f.jsx)(f.Fragment,{children:e});function y(e){return r.isValidElement(e)&&e.type===g}var x=n(80886),v=n(95098),[b,m]=(0,i.b)("Tooltip",[u.D7]),w=(0,u.D7)(),C="TooltipProvider",E="tooltip.open",[T,j]=b(C),k=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:l=!1,children:i}=e,[a,s]=r.useState(!0),u=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,f.jsx)(T,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:r.useCallback(e=>{u.current=e},[]),disableHoverableContent:l,children:i})};k.displayName=C;var R="Tooltip",[_,M]=b(R),D=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:l=!1,onOpenChange:i,disableHoverableContent:a,delayDuration:c}=e,d=j(R,e.__scopeTooltip),p=w(t),[h,g]=r.useState(null),y=(0,s.M)(),v=r.useRef(0),b=null!=a?a:d.disableHoverableContent,m=null!=c?c:d.delayDuration,C=r.useRef(!1),[T=!1,k]=(0,x.T)({prop:o,defaultProp:l,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(E))):d.onClose(),null==i||i(e)}}),M=r.useMemo(()=>T?C.current?"delayed-open":"instant-open":"closed",[T]),D=r.useCallback(()=>{window.clearTimeout(v.current),v.current=0,C.current=!1,k(!0)},[k]),L=r.useCallback(()=>{window.clearTimeout(v.current),v.current=0,k(!1)},[k]),P=r.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{C.current=!0,k(!0),v.current=0},m)},[m,k]);return r.useEffect(()=>()=>{v.current&&(window.clearTimeout(v.current),v.current=0)},[]),(0,f.jsx)(u.fC,{...p,children:(0,f.jsx)(_,{scope:t,contentId:y,open:T,stateAttribute:M,trigger:h,onTriggerChange:g,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?P():D()},[d.isOpenDelayed,P,D]),onTriggerLeave:r.useCallback(()=>{b?L():(window.clearTimeout(v.current),v.current=0)},[L,b]),onOpen:D,onClose:L,disableHoverableContent:b,children:n})})};D.displayName=R;var L="TooltipTrigger",P=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...i}=e,a=M(L,n),s=j(L,n),c=w(n),d=r.useRef(null),h=(0,l.e)(t,d,a.onTriggerChange),g=r.useRef(!1),y=r.useRef(!1),x=r.useCallback(()=>g.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),(0,f.jsx)(u.ee,{asChild:!0,...c,children:(0,f.jsx)(p.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...i,ref:h,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||y.current||s.isPointerInTransitRef.current||(a.onTriggerEnter(),y.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),y.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{g.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{g.current||a.onOpen()}),onBlur:(0,o.M)(e.onBlur,a.onClose),onClick:(0,o.M)(e.onClick,a.onClose)})})});P.displayName=L;var I="TooltipPortal",[O,N]=b(I,{forceMount:void 0}),V=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:o}=e,l=M(I,t);return(0,f.jsx)(O,{scope:t,forceMount:n,children:(0,f.jsx)(d.z,{present:n||l.open,children:(0,f.jsx)(c.h,{asChild:!0,container:o,children:r})})})};V.displayName=I;var B="TooltipContent",A=r.forwardRef((e,t)=>{let n=N(B,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...l}=e,i=M(B,e.__scopeTooltip);return(0,f.jsx)(d.z,{present:r||i.open,children:i.disableHoverableContent?(0,f.jsx)(z,{side:o,...l,ref:t}):(0,f.jsx)(F,{side:o,...l,ref:t})})}),F=r.forwardRef((e,t)=>{let n=M(B,e.__scopeTooltip),o=j(B,e.__scopeTooltip),i=r.useRef(null),a=(0,l.e)(t,i),[s,u]=r.useState(null),{trigger:c,onClose:d}=n,p=i.current,{onPointerInTransitChange:h}=o,g=r.useCallback(()=>{u(null),h(!1)},[h]),y=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),l=Math.abs(t.left-e.x);switch(Math.min(n,r,o,l)){case l:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),h(!0)},[h]);return r.useEffect(()=>()=>g(),[g]),r.useEffect(()=>{if(c&&p){let e=e=>y(e,p),t=e=>y(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,y,g]),r.useEffect(()=>{if(s){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,l=t.length-1;e<t.length;l=e++){let i=t[e].x,a=t[e].y,s=t[l].x,u=t[l].y;a>r!=u>r&&n<(s-i)*(r-a)/(u-a)+i&&(o=!o)}return o}(n,s);r?g():o&&(g(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,s,d,g]),(0,f.jsx)(z,{...e,ref:a})}),[S,W]=b(R,{isInside:!1}),z=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":l,onEscapeKeyDown:i,onPointerDownOutside:s,...c}=e,d=M(B,n),p=w(n),{onClose:h}=d;return r.useEffect(()=>(document.addEventListener(E,h),()=>document.removeEventListener(E,h)),[h]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&h()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,h]),(0,f.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:h,children:(0,f.jsxs)(u.VY,{"data-state":d.stateAttribute,...p,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,f.jsx)(g,{children:o}),(0,f.jsx)(S,{scope:n,isInside:!0,children:(0,f.jsx)(v.f,{id:d.contentId,role:"tooltip",children:l||o})})]})})});A.displayName=B;var Y="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=w(n);return W(Y,n).isInside?null:(0,f.jsx)(u.Eh,{...o,...r,ref:t})}).displayName=Y;var H=k,X=D,J=P,Z=V,q=A}}]);