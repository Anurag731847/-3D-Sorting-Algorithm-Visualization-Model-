try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="56be1d48-cec9-42a8-a6d2-fcd82728710e",e._sentryDebugIdIdentifier="sentry-dbid-56be1d48-cec9-42a8-a6d2-fcd82728710e")}catch(e){}(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5570],{32586:function(e,t,n){Promise.resolve().then(n.bind(n,32825))},32825:function(e,t,n){"use strict";n.r(t),n.d(t,{DEFAULT_SIDEBAR_SIZE:function(){return a},PanelStoreProvider:function(){return l},useMinPanelSize:function(){return d},usePanelStore:function(){return f}});var r=n(57437),u=n(2265),i=n(59625);let o=e=>(0,i.Ue)(t=>({panelSizes:e||[a,100-a],updatePanelSizes:e=>t({panelSizes:e})}));var s=n(37545);let a=30,c=(0,u.createContext)(null);function l(e){let{initialPanelSizes:t,children:n}=e,i=(0,u.useRef)();return i.current||(i.current=o(t)),(0,r.jsx)(c.Provider,{value:i.current,children:n})}function f(e){let t=(0,u.useContext)(c);if(!t)throw Error("usePanelStore must be used within a PanelStoreProvider");return(0,i.oR)(t,e)}let d=()=>{let{width:e}=(0,s.Z)();return e?325/e*100:20}},37545:function(e,t,n){"use strict";var r=n(2265);t.Z=()=>{let[e,t]=(0,r.useState)({width:void 0,height:void 0});return(0,r.useEffect)(()=>{{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}},[]),e}},24369:function(e,t,n){"use strict";var r=n(2265),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,o=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),u=r[0].inst,l=r[1];return s(function(){u.value=n,u.getSnapshot=t,c(u)&&l({inst:u})},[e,n,t]),o(function(){return c(u)&&l({inst:u}),e(function(){c(u)&&l({inst:u})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},92860:function(e,t,n){"use strict";var r=n(2265),u=n(82558),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=u.useSyncExternalStore,s=r.useRef,a=r.useEffect,c=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var v=o(e,(f=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return void 0!==u&&u(t,n)?(o=e,t):(o=e,s=n)}var o,s,a=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,u]))[0],f[1]);return a(function(){d.hasValue=!0,d.value=v},[v]),l(v),v}},82558:function(e,t,n){"use strict";e.exports=n(24369)},35195:function(e,t,n){"use strict";e.exports=n(92860)},59625:function(e,t,n){"use strict";n.d(t,{Ue:function(){return v},oR:function(){return f}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u||null===u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,i={setState:r,getState:u,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},o=t=e(r,u,i);return i},u=e=>e?r(e):r;var i=n(2265),o=n(35195);let{useDebugValue:s}=i,{useSyncExternalStoreWithSelector:a}=o,c=!1,l=e=>e;function f(e,t=l,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let r=a(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return s(r),r}let d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?u(e):e,n=(e,n)=>f(t,e,n);return Object.assign(n,t),n},v=e=>e?d(e):d}},function(e){e.O(0,[991,2971,2577,1744],function(){return e(e.s=32586)}),_N_E=e.O()}]);