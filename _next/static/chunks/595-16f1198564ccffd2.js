"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{535:function(e,i,t){t.d(i,{Y:function(){return l}});var n=t(5893),r=t(4813);function l(e){let{pageKey:i,children:t}=e;return(0,n.jsx)(r.W,{pageKey:i,children:(0,n.jsx)("main",{children:t})})}},9973:function(e,i,t){t.d(i,{S:function(){return v}});var n=t(5893),r=t(7294),l=t(6010),a=t(7171),s=t(6346),u=t(9609),c=t(9608),o=t(997),d=t(6956);let f={animate:e=>({y:e?"-3rem":"0rem",transition:{duration:1.3,delay:.5,ease:d.cs.MAIN}}),exit:{y:"0rem",transition:{duration:.5,ease:d.cs.MAIN}}};function v(e){let{message:i,buttonLabel:t,hasButtonArrow:d=!0,onButtonClick:v}=e,[h,m]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{m(!0)},[]),(0,n.jsx)(u.W,{size:1,children:(0,n.jsx)("div",{className:(0,l.Z)(["pt-28 xs:pt-0","flex flex-col items-start justify-start xs:items-center xs:justify-center ","min-h-screen w-full text-center"]),children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mx-auto mb-20",children:(0,n.jsx)(c.D,{component:"div",size:3,fontWeight:500,children:i})}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:(0,l.Z)(["absolute inset-0","flex items-center justify-center","w-full text-center"]),children:(0,n.jsx)(a.E.div,{variants:f,animate:"animate",exit:"exit",custom:h,children:(0,n.jsx)(o.Z,{className:"h-20 w-20"})})}),(0,n.jsx)(s.z,{className:"relative z-10 bg-white",mode:"button",onClick:v,hasArrowIcon:d,children:t})]})]})})})}},4813:function(e,i,t){t.d(i,{W:function(){return w}});var n=t(5893),r=t(7294),l=t(9961),a=t(6010),s=t(8459),u=t(6546),c=t(2907),o=t(2852),d=t(8528),f=t(2290),v=t(4169),h=t(7171),m=t(6956);let x={initial:{x:16},animate:{x:0,transition:{duration:.7,delay:1,ease:m.cs.MAIN}},exit:{x:16}};function g(e){let{pageKey:i}=e,[t,l]=(0,r.useState)(0),{smoothScrollInstance:a,smoothScrollContent:s}=(0,d.B)(),{scrollViewport:u}=(0,o.l)(),f=(0,r.useRef)(null),m=(0,r.useRef)(!1);return((0,r.useEffect)(()=>{var e;null===(e=a[i])||void 0===e||e.on("scroll",e=>{let{progress:i}=e,n=i*(window.innerHeight-t);f.current&&(f.current.style.transform="translate3d(0, ".concat(n,"px, 0)"))})},[i,a,t]),(0,c.LI)(()=>{var e,t,n;let r=null!==(t=null==u?void 0:u.clientHeight)&&void 0!==t?t:0,a=null!==(n=null===(e=s[i])||void 0===e?void 0:e.clientHeight)&&void 0!==n?n:0,c=r/a*100;if(Math.ceil(c)>=100){l(0);return}let o=Math.round(c*r/100);l(64>o?64:o)},[s,u]),(0,c.OR)("pointermove",e=>{var t,n,r;if(!m.current||!a[i])return;e.preventDefault();let l=100/(window.innerHeight/e.clientY)*.01,s=(0,v.u)(0,1,l),u=(null!==(r=null===(t=a[i])||void 0===t?void 0:t.limit)&&void 0!==r?r:1)*s;null===(n=a[i])||void 0===n||n.scrollTo(u,{immediate:!1})}),(0,c.OR)("pointerup",()=>{m.current=!1}),(0,c.OR)("keydown",e=>{var t,n,r,l,s,u;let c=100/(window.innerHeight/10)*.01,o=(0,v.u)(0,1,c),d=(null!==(r=null===(t=a[i])||void 0===t?void 0:t.limit)&&void 0!==r?r:1)*o,f=null!==(l=null===(n=a[i])||void 0===n?void 0:n.scroll)&&void 0!==l?l:0;"ArrowUp"===e.code&&(null===(s=a[i])||void 0===s||s.scrollTo(f-d,{immediate:!1})),"ArrowDown"===e.code&&(null===(u=a[i])||void 0===u||u.scrollTo(f+d,{immediate:!1}))}),t)?(0,n.jsx)("div",{className:"fixed right-0 top-0 z-50 h-screen w-2 overflow-hidden mix-blend-difference",children:(0,n.jsx)("div",{className:"relative h-full",children:(0,n.jsx)("div",{ref:f,style:{height:t},className:"absolute right-1 w-1",onPointerDown:()=>{m.current=!0},children:(0,n.jsx)(h.E.div,{initial:"initial",animate:"animate",exit:"exit",variants:x,className:"h-full w-full py-3",children:(0,n.jsx)("div",{className:"h-full w-full rounded-full bg-white"})})})})}):null}function w(e){let{pageKey:i,hasCustomScrollbar:t=!0,children:v}=e,h=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useRef)(null),{setScrollViewport:w}=(0,o.l)(),{height:p}=(0,c.iP)(),j=(0,f.c)(),{setSmoothScrollViewport:y,setSmoothScrollInstance:N,setSmoothScrollContent:T}=(0,d.B)();return(0,c.LI)(()=>(j||(h.current=new l.Z({duration:1.3,smoothWheel:!0,syncTouch:!0,wrapper:m.current,content:x.current}),N(i,h.current),y(i,m.current),T(i,x.current),w(m.current)),u.ScrollTrigger.refresh(),()=>{var e;null===(e=h.current)||void 0===e||e.destroy(),N(i,null),y(i,null),T(i,null),w(null),u.ScrollTrigger.refresh()}),[i,j]),(0,r.useEffect)(()=>{var e;j||(null===(e=h.current)||void 0===e||e.resize(),u.ScrollTrigger.refresh())},[p,j]),(0,s.p)(e=>{var i;null===(i=h.current)||void 0===i||i.raf(e),u.ScrollTrigger.update()}),(0,c.OR)("orientationchange",()=>{u.ScrollTrigger.refresh()}),(0,c.OR)("resize",()=>{var e;j||(null===(e=h.current)||void 0===e||e.resize(),u.ScrollTrigger.refresh())}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:m,className:(0,a.Z)(["w-full",{"h-screen overflow-y-hidden":!j}]),style:{height:j?"auto":p},children:(0,n.jsx)("div",{ref:x,className:"scroll-auto",children:v})}),t&&!j&&(0,n.jsx)(g,{pageKey:i})]})}},2265:function(e,i,t){t.d(i,{n:function(){return p}});var n=t(5893),r=t(7294),l=t(1163),a=t(6010),s=t(5947),u=t(7171),c=t(6546),o=t.n(c),d=t(2907),f=t(2141),v=t(6956);let h={duration:1,ease:v.cs.MAIN},m={initial:{x:"100%"},animate:{x:0,transition:h},exit:{x:"-100%",transition:h}},x={exit:{x:"60%",transition:h}},g={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5,delay:.3}}},w={initial:{opacity:0},animate:{opacity:.8,transition:h}},p=(0,r.forwardRef)(function(e,i){let{pageKey:t,children:c}=e,[v,h]=(0,r.useState)(!0),{isBrowser:p}=(0,d.c1)(),{isPageTransition:j,outboundPageKey:y,setPageTransition:N,setOutboundPageKey:T}=(0,f.C)(),[E,b]=(0,s.oO)(),R=(0,l.useRouter)();(0,r.useEffect)(()=>{let e=()=>{T(t),N(!0)};return R.events.on("routeChangeStart",e),()=>{R.events.off("routeChangeStart",e)}},[R,T,N,t]),(0,r.useEffect)(()=>{let e=null;return E||(e=setTimeout(()=>{b()},1e3)),()=>{e&&clearTimeout(e)}},[E,b]);let S=y===t;return(0,r.useEffect)(()=>{let e=null;return j||(window.scrollTo(0,0),e=setTimeout(()=>{h(!1)},100)),()=>{e&&clearTimeout(e)}},[j,t,p]),(0,r.useEffect)(()=>{v||o().refresh()},[v]),(0,n.jsxs)(u.E.div,{className:(0,a.Z)(["page-key-".concat(t),"bg-white",v&&!S&&"fixed left-0 right-0 top-0 max-h-[120vh] w-full overflow-hidden"]),ref:i,variants:m,initial:"initial",animate:"animate",exit:"exit",children:[(0,n.jsx)(u.E.div,{variants:x,initial:!1,exit:"exit",children:(0,n.jsx)(u.E.div,{variants:g,initial:"initial",animate:"animate",children:c})}),!E&&(0,n.jsx)(u.E.div,{className:"fixed inset-0 z-10 h-full w-full bg-ds-grey-900",variants:w,initial:"initial",animate:"animate"})]})})},8780:function(e,i,t){t.d(i,{p:function(){return l}});var n=t(5893),r=t(2962);function l(e){let{title:i,description:t,url:l,siteName:a,ogTitle:s,ogDescription:u,ogImage:c,twitterSite:o}=e;return(0,n.jsx)(r.PB,{title:i,description:t,canonical:l,openGraph:{type:"website",url:l,title:s,description:u,siteName:a,images:c?[c]:[]},twitter:{site:o,cardType:"summary_large_image"}})}}}]);