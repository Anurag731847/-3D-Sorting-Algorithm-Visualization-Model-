try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="caf64c7d-77d1-4210-9107-0ad42b6e94ad",e._sentryDebugIdIdentifier="sentry-dbid-caf64c7d-77d1-4210-9107-0ad42b6e94ad")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7050],{25134:function(e,t,n){n.d(t,{d:function(){return l},v:function(){return o}});var r=n(5978),a=n(2265),i=n(52558),s=n(78099);let o=()=>{let[e,t]=(0,a.useState)(void 0),{isInitialized:n,authUser:o}=(0,i.E)();return(0,a.useEffect)(()=>{var e,a;if(!n)return;let i=null!==(a=null==o?void 0:o.uid)&&void 0!==a?a:null===(e=s.I.currentUser)||void 0===e?void 0:e.uid;if(!i)return;let l=(0,r.JU)(s.db,"users",i);return(0,r.cf)(l,e=>{t(e.data())})},[o,n]),{userData:e,isInitialized:n}},l=()=>{let{userData:e}=o();if(e)return e.is_admin||"free"!==e.plan}},93435:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(57437),a=n(62869),i=n(94508),s=n(108);function o(e){let{label:t,className:n,variant:o}=e,{createPortalSession:l,isCreatePortalSessionLoading:d,checkoutLoading:c}=(0,s.m)();return(0,r.jsx)(a.z,{variant:o,className:(0,i.cn)("min-h-10",n),onClick:l,loading:d,disabled:!!c,children:t})}},74129:function(e,t,n){n.d(t,{U:function(){return C}});var r=n(57437),a=n(2265),i=n(25134),s=n(94132),o=n.n(s),l=n(66070),d=n(49340),c=n(94508),u=n(35974),p=n(57346),m=n(53647),f=n(73400),h=n(62869),x=n(93435),g=n(108),v=n(67150);let y=e=>{let{plan:t}=e,[n,a]=(0,d.a)(),{userData:s}=(0,i.v)(),o=(null==s?void 0:s.plan)===t.id,{checkoutLoading:l,isCreatePortalSessionLoading:u,toCheckout:p}=(0,g.m)();if(a)return null;if(t.id===f.n.plan.ENTERPRISE){var m,v,y,C,b;return(0,r.jsx)("a",{className:(0,c.cn)((0,h.d)({variant:"default"}),"min-h-10 w-full"),href:"https://antonosika.typeform.com/to/pT3rZYw0#email=".concat(null!==(b=null!==(C=null==n?void 0:n.email)&&void 0!==C?C:null==n?void 0:null===(y=n.firebase)||void 0===y?void 0:null===(v=y.identities)||void 0===v?void 0:null===(m=v.email)||void 0===m?void 0:m[0])&&void 0!==b?b:"xxxxx"),target:"_blank",children:"Contact us"})}return n?o&&t.canManagePlan?(0,r.jsx)(x.Z,{className:"w-full",label:"Manage subscription"}):t.stripeCheckoutData?(0,r.jsx)(h.z,{className:"min-h-10 w-full",variant:"default",onClick:()=>p({userId:null==n?void 0:n.uid,plan:t}),disabled:!!l||u,loading:l===t.id,children:_(t,null==s?void 0:s.plan)}):null:(0,r.jsx)("a",{className:(0,c.cn)((0,h.d)({variant:"default"}),"min-h-10 w-full"),href:"/signup?redirect=/settings/plans",children:"Try now"})},_=(e,t)=>{var n,r;if(e.ctaOverride)return e.ctaOverride;let a=t&&null!==(n=v.qZ[t])&&void 0!==n?n:-1,i=null!==(r=v.qZ[e.id])&&void 0!==r?r:0;return"".concat(i>a?"Upgrade":"Downgrade"," to ").concat(e.name)};function C(e){let{plan:t,fullWidth:n}=e,[s]=(0,d.a)(),{userData:m,isInitialized:f}=(0,i.v)(),[h,x]=(0,a.useState)(Array.isArray(t.planOptions)?t.planOptions[0]:t.planOptions);(0,a.useEffect)(()=>{if((null==m?void 0:m.plan)&&Array.isArray(t.planOptions)){let e=t.planOptions.find(e=>e.id===m.plan);e&&x(e)}},[null==m?void 0:m.plan]);let g=(null==m?void 0:m.plan)===h.id;return(0,r.jsxs)(l.Zb,{className:(0,c.cn)("bg-background",n&&"col-span-full",n&&"mx-auto max-w-2xl"),children:[(0,r.jsxs)(l.Ol,{className:"flex flex-col gap-4",children:[(0,r.jsxs)(l.ll,{className:(0,c.cn)("flex flex-wrap items-center gap-x-2 text-lg font-bold",o().className),children:[t.icon&&(0,r.jsx)(p.Z,{name:t.icon,size:"small",className:"text-muted-foreground"}),h.name.toUpperCase(),g&&(0,r.jsx)(u.C,{className:"text-xs font-normal",variant:"default",children:"Active"})]}),(0,r.jsxs)("div",{className:"text-2xl font-bold",children:[h.price>0?(0,r.jsxs)("span",{children:["$",null==h?void 0:h.price," "]}):void 0,t.priceSuffix&&(0,r.jsx)("span",{className:"text-lg font-normal text-muted-foreground",children:t.priceSuffix})]}),Array.isArray(t.planOptions)&&(0,r.jsx)(b,{planOptions:t.planOptions,setSelectedPlanOption:x,selectedPlanOption:h}),(0,r.jsx)(l.SZ,{className:"mt-4 text-sm font-medium text-muted-foreground",children:t.description})]}),t.features.length>0&&(0,r.jsxs)(l.aY,{className:(0,c.cn)("space-y-2 text-xs","flex flex-col gap-2"),children:[t.features.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-start gap-1",children:[(0,r.jsx)(p.Z,{name:"check_small",className:"-ml-2 text-muted-foreground"}),(0,r.jsx)("span",{children:e})]},t)),(0,r.jsx)("div",{className:"w-[50ch] opacity-0"})]}),(0,r.jsxs)(l.eW,{className:"mt-auto flex-col px-0 pb-4",children:[(0,r.jsx)("div",{className:"mt-8"}),(0,r.jsx)(y,{plan:h})]})]})}let b=e=>{let{planOptions:t,selectedPlanOption:n,setSelectedPlanOption:a}=e;return(0,r.jsxs)(m.Ph,{onValueChange:e=>{let n=t.find(t=>t.id===e);n&&a(n)},value:n.id,children:[(0,r.jsx)(m.i4,{className:"bg-card",children:(0,r.jsx)(m.ki,{placeholder:"Select a plan"})}),(0,r.jsx)(m.Bw,{children:t.map(e=>(0,r.jsx)(m.Ql,{value:e.id,onClick:()=>a(e),children:e.dropdownLabel||e.price},e.id))})]})}},97050:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(57437),a=n(93435),i=n(74129),s=n(108);function o(e){let{plans:t,showInvoiceButton:n=!1}=e;return(0,r.jsxs)(s.q,{children:[n&&(0,r.jsx)(a.Z,{variant:"link",label:"To Billing and Invoices"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-".concat(Math.min(t.length,4)),children:null==t?void 0:t.map(e=>(0,r.jsx)(i.U,{plan:e},e.id))}),(0,r.jsx)("div",{className:"mt-8 text-center text-sm text-muted-foreground",children:"Premium hosting included up to 10 million requests per month."})]})}},108:function(e,t,n){n.d(t,{m:function(){return m},q:function(){return f}});var r=n(57437),a=n(83464),i=n(46214),s=n(2265),o=n(14438),l=n(49360),d=n(52558),c=n(36710),u=n(21288);let p=(0,s.createContext)(void 0),m=()=>{let e=(0,s.useContext)(p);if(!e)throw Error("useSubscription must be used within a SubscriptionProvider");return e},f=e=>{let{children:t}=e,n=(0,c.O)(),{authUser:m}=(0,d.E)(),[f,h]=(0,s.useState)(!1),[x,g]=(0,s.useState)(!1),v=async e=>{let{plan:t,userId:r,workspaceId:a}=e;if(!t.stripeCheckoutData){u.PW.error("plan_missing_stripe_checkout_data",{plan:t});return}if(i.ZP.capture("credit_plan_checkout_clicked"),!r){u.PW.error("user_id_not_found");return}try{var s;h(t.id);let e=new URL(window.location.href),r=new URL("".concat(window.location.origin,"/purchase-success"));"/profile/plans"===window.location.pathname?r.searchParams.set("redirect","".concat(window.location.origin,"/")):r.searchParams.set("redirect",e.href);let i="ORDER_".concat(null==m?void 0:m.uid,"_").concat((0,l.Z)());r.searchParams.set("plan_id",t.id),r.searchParams.set("order_id",i);let o={product_id:t.stripeCheckoutData.stripeProductId,quantity:t.stripeCheckoutData.quantity,cancel_url:e.toString(),success_url:r.toString(),client_reference_id:null===(s=window.Rewardful)||void 0===s?void 0:s.referral,workspace_id:a},d=await n.post("/stripe/checkout",o);window.location.assign(d.url)}catch(e){u.PW.error("error_creating_checkout_session",{error:e})}finally{h(!1)}},y=async()=>{try{g(!0);let e={return_url:window.location.href},t=await n.post("/stripe/create-portal-session",e);window.location.assign(t.url)}catch(e){a.default.isAxiosError(e)&&!e.response&&"Network Error"===e.message&&o.Am.error("Network error: Please check your internet connection and try again."),u.PW.error("error_creating_portal_session",{error:e})}finally{g(!1)}};return(0,r.jsx)(p.Provider,{value:{checkoutLoading:f,isCreatePortalSessionLoading:x,toCheckout:v,createPortalSession:y},children:t})}},67150:function(e,t,n){n.d(t,{EA:function(){return U},o9:function(){return k},qZ:function(){return L},K:function(){return T},dv:function(){return d},D:function(){return I},GY:function(){return q},oW:function(){return O},ZN:function(){return u}});var r=n(57437),a=n(27648);let i={CREDITS:{PRODUCT_ID:"prod_PBz7dgcoojSzVk"},OLD_PRO:{PRODUCT_ID:"prod_OtayqnnNbMxjpg"},STARTER:{PRODUCT_ID:"prod_RATAhoODy1Kbsn"},LAUNCH:{PRODUCT_ID:"prod_RAT9OebuvgB9ur"},SCALE_1:{PRODUCT_ID:"prod_RM6vrOL5DeHYgr"},SCALE:{PRODUCT_ID:"prod_RATAg5DUEdbkr4"},SCALE_3:{PRODUCT_ID:"prod_RM6wsb37tx0R2i"},SCALE_4:{PRODUCT_ID:"prod_RM6wsXmA4a0acz"},SCALE_5:{PRODUCT_ID:"prod_RM6wwDaeC6NikJ"},SCALE_6:{PRODUCT_ID:"prod_RM6xlLog0ySaSu"},SCALE_7:{PRODUCT_ID:"prod_RM6x95NN4Uw4Ne"}};if(!Object.values(i).every(e=>e.PRODUCT_ID))throw Error("All stripe products must have a product id");var s=n(73400),o=n(57346),l=n(57054);let d=30,c=e=>{let{label:t,tooltip:n}=e;return(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)("span",{children:t}),(0,r.jsxs)(l.J2,{children:[(0,r.jsx)(l.xo,{asChild:!0,children:(0,r.jsx)("button",{children:(0,r.jsx)(o.Z,{name:"info",size:"small"})})}),(0,r.jsx)(l.yk,{className:"w-fit p-4",children:"string"==typeof n?(0,r.jsx)("p",{children:n}):n})]})]})},u=e=>{switch(e){case s.n.plan.FREE:return"Free";case s.n.plan.PRO:return"Pro";case s.n.plan.STARTER:return"Starter";case s.n.plan.LAUNCH:return"Launch";case"bonus":return"Bonus";case s.n.plan.ENTERPRISE:return"Enterprise & Teams";case s.n.plan.PARTNER:return"Partner";case s.n.plan.SCALE:return"Scale 2";case s.n.plan.SCALE_1:case s.n.plan.SCALE_3:case s.n.plan.SCALE_4:case s.n.plan.SCALE_5:case s.n.plan.SCALE_6:case s.n.plan.SCALE_7:return e.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}},p=e=>{let{priceAlternatives:t}=e;return(0,r.jsxs)("div",{className:"grid w-fit grid-cols-2 gap-x-4 gap-y-2",children:[(0,r.jsx)("span",{children:(0,r.jsx)("strong",{children:"Limit/mo"})}),(0,r.jsx)("span",{children:(0,r.jsx)("strong",{children:"Price/mo"})}),t.map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:e.limit}),(0,r.jsxs)("span",{children:["$",e.price]})]}))]})},m={id:s.n.plan.FREE,price:0,limit:1,canManagePlan:!1,name:u(s.n.plan.FREE)},f={id:s.n.plan.PRO,price:19,limit:100,canManagePlan:!0,stripeCheckoutData:{stripeProductId:i.OLD_PRO.PRODUCT_ID,quantity:1},name:u(s.n.plan.PRO)},h={id:s.n.plan.STARTER,price:20,limit:100,canManagePlan:!0,stripeCheckoutData:{stripeProductId:i.STARTER.PRODUCT_ID,quantity:1},name:u(s.n.plan.STARTER)},x={id:s.n.plan.LAUNCH,price:50,limit:250,canManagePlan:!0,stripeCheckoutData:{stripeProductId:i.LAUNCH.PRODUCT_ID,quantity:1},name:u(s.n.plan.LAUNCH)},g={id:s.n.plan.SCALE_1,price:100,limit:500,canManagePlan:!0,name:u(s.n.plan.SCALE_1),stripeCheckoutData:{stripeProductId:i.SCALE_1.PRODUCT_ID,quantity:1},dropdownLabel:"5x monthly limits"},v={id:s.n.plan.SCALE,price:200,limit:1e3,canManagePlan:!0,name:u(s.n.plan.SCALE),stripeCheckoutData:{stripeProductId:i.SCALE.PRODUCT_ID,quantity:1},dropdownLabel:"10x monthly limits"},y={id:s.n.plan.SCALE_3,price:294,limit:1500,canManagePlan:!0,name:u(s.n.plan.SCALE_3),stripeCheckoutData:{stripeProductId:i.SCALE_3.PRODUCT_ID,quantity:1},dropdownLabel:"15x monthly limits"},_={id:s.n.plan.SCALE_4,price:384,limit:2e3,canManagePlan:!0,name:u(s.n.plan.SCALE_4),stripeCheckoutData:{stripeProductId:i.SCALE_4.PRODUCT_ID,quantity:1},dropdownLabel:"20x monthly limits"},C={id:s.n.plan.SCALE_5,price:564,limit:3e3,canManagePlan:!0,name:u(s.n.plan.SCALE_5),stripeCheckoutData:{stripeProductId:i.SCALE_5.PRODUCT_ID,quantity:1},dropdownLabel:"30x monthly limits"},b={id:s.n.plan.SCALE_6,price:736,limit:4e3,canManagePlan:!0,name:u(s.n.plan.SCALE_6),stripeCheckoutData:{stripeProductId:i.SCALE_6.PRODUCT_ID,quantity:1},dropdownLabel:"40x monthly limits"},E={id:s.n.plan.SCALE_7,price:900,limit:5e3,canManagePlan:!0,name:u(s.n.plan.SCALE_7),stripeCheckoutData:{stripeProductId:i.SCALE_7.PRODUCT_ID,quantity:1},dropdownLabel:"50x monthly limits"},w=[g,v,y,_,C,b,E];s.n.plan.FREE,r.Fragment;let R={id:s.n.plan.PRO,priceSuffix:"/ month",description:"Everything in Free, plus:",features:["Private projects","> 10x higher rate limits","Pay as you go, if daily AI messages run out","Early access to AI-powered backend generation via Supabase","Early access to other new features"],icon:"bolt_fill",planOptions:f},A={id:s.n.plan.STARTER,priceSuffix:"/ month",description:"Perfect for hobby and occasional use:",features:["Everything in Free, plus:",(0,r.jsx)(c,{label:"Go beyond daily limits with a monthly limit",tooltip:(0,r.jsx)(p,{priceAlternatives:[{price:h.price,limit:100}]},"100-monthly-edits")},"100-monthly-edits"),"Unlimited private projects",(0,r.jsx)(c,{label:"Custom domains",tooltip:"Connect your custom domain to your site"},"connect-your-custom-domain-to-your-site")],icon:"construction",planOptions:h},j={id:s.n.plan.LAUNCH,priceSuffix:"/ month",description:"For individuals working on small projects:",features:["Everything in Starter, plus:",(0,r.jsx)(c,{label:"2.5x monthly limits",tooltip:(0,r.jsx)(p,{priceAlternatives:[{price:x.price,limit:250}]},"250-monthly-edits")},"250-monthly-edits")],icon:"rocket_launch",planOptions:x},S={id:"scale",priceSuffix:"/ month",description:"For individuals working on larger projects:",features:["Everything in Launch, plus:",(0,r.jsx)(c,{label:"Larger message limits",tooltip:(0,r.jsx)(p,{priceAlternatives:w.map(e=>({price:e.price,limit:e.limit}))},"1000-monthly-edits")},"1000-monthly-edits"),"Early access to new features"],icon:"open_in_full",planOptions:w},N={id:s.n.plan.ENTERPRISE,description:(0,r.jsxs)("span",{children:[(0,r.jsx)(a.default,{href:"https://antonosika.typeform.com/to/pT3rZYw0",target:"_blank",className:"underline",children:"Contact us"})," ","for:"]}),features:["Custom messaging limits","Centralized billing","SSO","Custom integrations","Dedicated support & account management"],planOptions:{id:s.n.plan.ENTERPRISE,name:"Teams",price:0,limit:0,canManagePlan:!1},icon:"enterprise"},P={id:"bonus",priceSuffix:"(one-time payment)",description:"100 bonus messages",icon:null,features:["Does not reset at midnight","Used after daily allowances"],planOptions:{id:"bonus",price:10,limit:100,name:"Bonus Messages",canManagePlan:!1,ctaOverride:"Buy bonus messages",stripeCheckoutData:{stripeProductId:i.CREDITS.PRODUCT_ID,quantity:100}}},L={[s.n.plan.FREE]:0,[s.n.plan.STARTER]:1,[s.n.plan.LAUNCH]:2,[s.n.plan.SCALE_1]:3,[s.n.plan.SCALE]:4,[s.n.plan.SCALE_3]:5,[s.n.plan.SCALE_4]:6,[s.n.plan.SCALE_5]:7,[s.n.plan.SCALE_6]:8,[s.n.plan.SCALE_7]:9,[s.n.plan.ENTERPRISE]:10},D={[s.n.plan.FREE]:m.price,[s.n.plan.STARTER]:h.price,[s.n.plan.LAUNCH]:x.price,[s.n.plan.SCALE_1]:g.price,[s.n.plan.SCALE]:v.price,[s.n.plan.SCALE_3]:y.price,[s.n.plan.SCALE_4]:_.price,[s.n.plan.SCALE_5]:C.price,[s.n.plan.SCALE_6]:b.price,[s.n.plan.SCALE_7]:E.price,[s.n.plan.ENTERPRISE]:0,bonus:19,pro:19,partner:0},O=e=>D[e],T=[R,N],k=[A,j,S,N],I=[A,j,S],U=[P],M={id:s.n.plan.PRO,price:20,limit:1,canManagePlan:!0,name:u(s.n.plan.PRO),stripeCheckoutData:{stripeProductId:i.OLD_PRO.PRODUCT_ID,quantity:1},dropdownLabel:"1x monthly limits"},q=[{id:s.n.plan.PRO,title:"Pro",priceSuffix:"/ month",description:"For more projects and usage",featuresHeader:"Everything in Free, plus:",features:["Unlimited projects","Private projects","Monthly AI credits","Remove the Lovable badge","3 editors max, per project"],icon:null,planOptions:[M]},{id:s.n.plan.LAUNCH,title:"Teams",priceSuffix:"/ month",description:"For collaborating with others",featuresHeader:"Everything in Pro, plus:",features:["Centralised billing","20 editors max, per workspace","Set AI credit limits"],icon:null,planOptions:w},{id:s.n.plan.ENTERPRISE,title:"Enterprise",description:"Advanced and custom",featuresHeader:"Everything in Teams, plus:",features:["Custom credit packages","Unlimited collaborator seats","Dedicated support channels","Opt out of data training","SSO"],icon:null,planOptions:N.planOptions}]},35974:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(57437),a=n(77712);n(2265);var i=n(94508);let s=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",success:"border-transparent bg-success text-success-foreground hover:bg-success/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:(0,i.cn)(s({variant:n}),t),...a})}},62869:function(e,t,n){n.d(t,{d:function(){return d},z:function(){return c}});var r=n(57437),a=n(37053),i=n(77712),s=n(2265),o=n(94508),l=n(57346);let d=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",success:"bg-success text-sm font-medium text-primary hover:opacity-90 [&>*]:text-shadow-sm shadow-black/50",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-muted shadow-sm hover:bg-accent hover:border-accent hover:text-accent-foreground",muted:"bg-background text-sm font-medium hover:bg-primary/20 border border-border",accent:"bg-accent text-primary hover:opacity-80 [&>*]:text-shadow-sm shadow-black/50",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hotkey:"hover:bg-background text-primary"},size:{default:"h-8 rounded-md px-2 py-2",sm:"h-7 rounded-md px-2 py-2 gap-1.5",lg:"h-11 rounded-md px-8",xl:"h-16 rounded-md px-12 text-lg",icon:"h-10 w-10","icon-sm":"h-7 px-1 rounded-md py-1 aspect-square"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:n,variant:i,size:s,asChild:c=!1,children:u,loading:p,disabled:m,...f}=e,h=c?a.g7:"button";return(0,r.jsx)(h,{className:(0,o.cn)(d({variant:i,size:s,className:n})),ref:t,...f,disabled:m||p,children:p?(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)(l.Z,{name:"progress_activity",className:"h-4 w-4 animate-spin"}),u]}):u})});c.displayName="Button"},66070:function(e,t,n){n.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return s},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var r=n(57437),a=n(2265),i=n(94508);let s=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col gap-6 rounded-lg border bg-card p-6 text-primary shadow-sm",n),...a})});s.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5",n),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",n),...a})});l.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",n),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("gap-6 pt-0",n),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center pt-0",n),...a})});u.displayName="CardFooter"},57054:function(e,t,n){n.d(t,{J2:function(){return o},xo:function(){return l},yk:function(){return d}});var r=n(57437),a=n(51777),i=n(2265),s=n(94508);let o=a.fC,l=a.xz;a.ee;let d=i.forwardRef((e,t)=>{let{className:n,align:i="center",sideOffset:o=4,...l}=e;return(0,r.jsx)(a.h_,{children:(0,r.jsx)(a.VY,{ref:t,align:i,sideOffset:o,className:(0,s.cn)("z-[10000] w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})})});d.displayName=a.VY.displayName},53647:function(e,t,n){n.d(t,{Bw:function(){return f},DI:function(){return d},Ph:function(){return l},Ql:function(){return x},i4:function(){return u},ki:function(){return c},n5:function(){return h}});var r=n(57437),a=n(20653),i=n(74797),s=n(2265),o=n(94508);let l=i.fC,d=i.ZA,c=i.B4,u=s.forwardRef((e,t)=>{let{className:n,children:s,...l}=e;return(0,r.jsxs)(i.xz,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...l,children:[s,(0,r.jsx)(i.JO,{asChild:!0,children:(0,r.jsx)(a.v4q,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=i.xz.displayName;let p=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(i.u_,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",n),...s,children:(0,r.jsx)(a.g8U,{className:"h-4 w-4"})})});p.displayName=i.u_.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(i.$G,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",n),...s,children:(0,r.jsx)(a.v4q,{className:"h-4 w-4"})})});m.displayName=i.$G.displayName;let f=s.forwardRef((e,t)=>{let{className:n,children:a,position:s="popper",...l}=e;return(0,r.jsx)(i.h_,{children:(0,r.jsxs)(i.VY,{ref:t,className:(0,o.cn)("relative z-[10000] max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-card text-card-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:s,...l,children:[(0,r.jsx)(p,{}),(0,r.jsx)(i.l_,{className:(0,o.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,r.jsx)(m,{})]})})});f.displayName=i.VY.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",n),...a})});h.displayName=i.__.displayName;let x=s.forwardRef((e,t)=>{let{className:n,children:s,...l}=e;return(0,r.jsxs)(i.ck,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",n),...l,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(i.wU,{children:(0,r.jsx)(a.nQG,{className:"h-4 w-4"})})}),(0,r.jsx)(i.eT,{children:s})]})});x.displayName=i.ck.displayName,s.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",n),...a})}).displayName=i.Z0.displayName},49340:function(e,t,n){n.d(t,{a:function(){return a},e:function(){return i}});var r=n(52558);let a=()=>{let{authUser:e}=(0,r.E)();return[e,!1,null]},i=()=>{let[e,t,n]=a();return null==e?void 0:e.email}},39837:function(e,t,n){n.d(t,{LC:function(){return i},n3:function(){return s}});var r=n(83464),a=n(27277);function i(e,t){return r.default.create({baseURL:t,headers:e?{Authorization:"Bearer ".concat(e)}:void 0,withCredentials:!0})}class s{async getApi(){let e=i(this.idToken?await (0,a.B)({serverIdToken:this.idToken,refreshTokenUrl:"/api/refresh-token"}):null,this.baseURL);return e.interceptors.response.use(e=>e.data,e=>{var t;if((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)===401){let e;e=this.redirect?"/signup?redirect="+this.redirect:"/"===this.pathname?"/signup":"/signup?redirect="+encodeURIComponent(this.pathname),this.router.push(e)}return e.response&&e.response.data?Promise.reject(e.response):Promise.reject(e)}),e}async get(e,t){return(await this.getApi()).get(e,t)}async delete(e,t){return(await this.getApi()).delete(e,t)}async post(e,t,n){return(await this.getApi()).post(e,t,n)}async put(e,t,n){return(await this.getApi()).put(e,t,n)}async patch(e,t,n){return(await this.getApi()).patch(e,t,n)}async head(e,t){return(await this.getApi()).head(e,t)}constructor(e,t,n,r,a){this.baseURL=e,this.idToken=t,this.router=n,this.pathname=r,this.redirect=a}}},36710:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(99376),a=n(2265),i=n(52558),s=n(39837),o=n(25057);let l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=(0,r.useRouter)(),n=(0,r.usePathname)(),{authUser:l}=(0,i.E)(),[d,c]=(0,a.useState)(()=>new s.n3((0,o.u)(),null==l?void 0:l.idToken,t,n,e));return(0,a.useEffect)(()=>{c(new s.n3((0,o.u)(),null==l?void 0:l.idToken,t,n,e))},[t,n,e,l]),d}},73400:function(e,t,n){var r,a,i;n.d(t,{n:function(){return r}}),(i=(a=r||(r={})).plan||(a.plan={})).FREE="free",i.PRO="pro",i.PARTNER="partner",i.STARTER="starter",i.LAUNCH="launch",i.SCALE_1="scale_1",i.SCALE="scale",i.SCALE_3="scale_3",i.SCALE_4="scale_4",i.SCALE_5="scale_5",i.SCALE_6="scale_6",i.SCALE_7="scale_7",i.ENTERPRISE="enterprise"}}]);