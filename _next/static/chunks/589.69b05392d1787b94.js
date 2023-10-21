"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{2813:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(5893),l=a(5675),n=a.n(l);let i=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),s=(e,t)=>{let a=new URL(e);for(let e in t){let r=i(e),l=t[e];void 0===l?a.searchParams.delete(r):Array.isArray(l)?a.searchParams.set(r,l.join(",")):a.searchParams.set(r,`${l}`)}let r=a.searchParams.get("s");return r&&(a.searchParams.delete("s"),a.searchParams.append("s",r)),a.toString()},o=e=>{let t=new URL(e.src),a={fit:t.searchParams.get("fit")||"max",w:e.width,h:void 0};return e.quality&&(a.q=e.quality),s(e.src,a)},c=e=>null!=e,d=e=>c(e)&&!!e.url,u=e=>{if("number"==typeof e||void 0===e)return e;{let t=Number.parseInt(e);if(Number.isNaN(t))return;return t}},m=({field:e,imgixParams:t={},alt:a,fallbackAlt:l,fill:i,width:c,height:m,fallback:f=null,...p})=>{if(!d(e))return(0,r.jsx)(r.Fragment,{children:f});{for(let e in t)null===t[e]&&(t[e]=void 0);let d=s(e.url,t),f=e.dimensions.width/e.dimensions.height,h=u(c),x=u(m),b=h??e.dimensions.width,v=x??e.dimensions.height;null!=h&&null==x?v=h/f:null==h&&null!=x&&(b=x*f);let g=a??(e.alt||l),j=n();return"default"in j&&(j=j.default),(0,r.jsx)(j,{src:d,width:i?void 0:b,height:i?void 0:v,alt:g,fill:i,loader:o,...p})}}},4173:function(e,t,a){a.d(t,{I:function(){return i}});var r=a(7294),l=a(166),n=a(6893);function i(e){let[t,a]=(0,l.H)(),i=(0,n.Y)(t,{once:!0,amount:.2});return(0,r.useEffect)(()=>{e&&a(t.current,{filter:i?"blur(0px)":"blur(8px)",opacity:i?1:0},{delay:.2,duration:.6,ease:"easeOut"})},[i,e,a,t]),{animationScope:t}}},8589:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(5893),l=a(6010),n=a(2746),i=a(5897),s=a(8145),o=a(9609),c=a(2569),d=a(9608),u=a(9766);function m(e){let{socialLinks:t}=e;return(0,r.jsx)("ul",{className:"flex flex-col gap-y-4",children:t.map(e=>{let{href:t}=(0,u.t)(e.socialAccount.data.url),a=e.socialAccount.data.serviceName;return(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"group block",href:t,target:"_blank",children:(0,r.jsx)("span",{className:"relative block overflow-hidden",children:(0,r.jsx)("span",{className:(0,l.Z)(["relative block","before:absolute before:left-0 before:top-0 before:w-full","before:text-ds-grey-900 before:content-[attr(data-text)]","after:absolute after:left-0 after:top-[105%] after:w-full","after:text-ds-grey-900 after:content-[attr(data-text)]","duration-500 group-hover:-translate-y-[105%]"]),"data-text":a,children:a})})})},e.socialAccount.data.type)})})}function f(e){let{contactEmail:t,socialLinks:a,title:u,imageData:f}=e,p=(0,n.useTranslations)("Common");return(0,r.jsx)(c.$,{className:"min-h-screen",spacingY:[3,2],children:(0,r.jsx)(o.W,{size:2,children:(0,r.jsxs)("div",{className:"flex w-full grid-cols-6 flex-col gap-x-main-lg md:grid",children:[(0,r.jsxs)("div",{className:"col-span-4 col-start-1 mb-10 md:mb-0",children:[(0,r.jsx)("div",{className:(0,l.Z)(["h-24 w-24 md:h-40 md:w-40","mx-auto md:mx-0","mb-4 md:mb-10","bg-ds-pink overflow-hidden rounded-full"]),children:(0,r.jsx)(s.i,{imageData:f,mode:"square",hasParallax:!1})}),(0,r.jsx)(d.D,{className:"mb-4 whitespace-pre-line text-center md:mb-10 md:text-left",component:"h1",size:2,children:u}),(0,r.jsx)("div",{className:"text-center md:text-left",children:(0,r.jsx)(i.A,{href:"mailto:".concat(t),children:t})})]}),(0,r.jsxs)("div",{className:"col-span-1 col-start-6 mx-auto text-center md:mx-0 md:text-left",children:[(0,r.jsx)(d.D,{className:"mb-6 md:mb-8",component:"h5",size:5,fontWeight:600,children:p("socials")}),(0,r.jsx)(m,{socialLinks:a})]})]})})})}var p=function(e){let{slice:t,context:a}=e;return(0,r.jsx)(f,{title:t.primary.title,imageData:t.primary.avatar,contactEmail:a.contactEmail,socialLinks:a.socialLinks})}},8145:function(e,t,a){a.d(t,{i:function(){return f}});var r=a(5893),l=a(7294),n=a(2813),i=a(5139),s=a(8828),o=a(7171),c=a(7993);let d=(0,i.j)(["relative w-full overflow-hidden"],{variants:{mode:{cover:"aspect-square md:aspect-video",square:"aspect-square rounded-main",auto:"aspect-auto rounded-main"}},defaultVariants:{mode:"auto"}}),u=(0,i.j)(["scale-105"],{variants:{mode:{cover:"absolute inset-0 h-full object-cover",square:"absolute left-0 top-0 rounded-main object-cover",auto:"relative rounded-main"}},defaultVariants:{mode:"auto"}}),m={initial:{opacity:0,scale:1},animate:e=>({opacity:e?1:0,scale:e?1:1.2,transition:{duration:.6}})};function f(e){let{className:t,imageData:a,mode:i,hasParallax:f=!0,isFill:p=!1,isLazy:h=!0}=e,[x,b]=(0,l.useState)(!1),[v,g]=(0,l.useState)(!1),[j,w]=(0,l.useState)(!1),N=(0,l.useRef)(null),{scrollYProgress:y}=(0,c.B)({target:N,offsetStart:"top bottom",offsetEnd:"bottom top"}),k=(0,s.H)(y,[0,1],["-10%","10%"]),A=(0,l.useCallback)(()=>{g(!0)},[]);return(0,l.useEffect)(()=>{let e=setTimeout(()=>{b(!0)},1e3);return()=>{clearTimeout(e)}},[]),(0,l.useEffect)(()=>{v&&x&&w(!0)},[v,x]),(0,r.jsx)("div",{ref:N,className:d({className:"bg-ds-grey-200",mode:i}),children:(0,r.jsx)(o.E.div,{className:"relative h-full w-full",style:{y:f?k:0},variants:m,custom:j,initial:"initial",animate:"animate",children:(0,r.jsx)(n.Z,{className:u({className:t,mode:i}),field:a,fill:"cover"===i||p,fallbackAlt:"",loading:h?"lazy":"eager",imgixParams:{auto:["format"]},onLoad:A})})})}},2569:function(e,t,a){a.d(t,{$:function(){return o}});var r=a(5893),l=a(7294),n=a(5139),i=a(6010);let s=(0,n.j)("whitespace-pre-line",{variants:{paddingTop:{0:"pt-0",1:"pt-8 md:pt-15",2:"pt-16 md:pt-30",3:"pt-32 md:pt-60"},paddingBottom:{0:"pb-0",1:"pb-8 md:pb-15",2:"pb-16 md:pb-30",3:"pb-32 md:pb-60"}},defaultVariants:{paddingTop:0,paddingBottom:0}}),o=(0,l.forwardRef)(function(e,t){let{className:a="",spacingY:l=[0,0],style:n={},children:o}=e,c=0,d=0;if(Array.isArray(l)){var u;[c]=l,d=null!==(u=l[1])&&void 0!==u?u:c}else c=l,d=l;let m=s({paddingTop:c}),f=s({paddingBottom:null!=d?d:c});return(0,r.jsx)("section",{ref:t,className:(0,i.Z)([a,m,f]),style:n,children:o})})},9608:function(e,t,a){a.d(t,{D:function(){return c}});var r=a(5893),l=a(5139),n=a(6010),i=a(7851),s=a(4173);let o=(0,l.j)("",{variants:{size:{1:"text-title-1",2:"text-title-2",3:"text-title-3",4:"text-title-4",5:"text-title-5",6:"text-title-6",big:"text-title-big",hero:"text-title-hero"},fontWeight:{400:"font-normal",500:"font-medium",600:"font-semibold",700:"font-bold",800:"font-extrabold"},whitespace:{nowrap:"whitespace-nowrap",preLine:"whitespace-pre-line"}},defaultVariants:{size:2,fontWeight:700,whitespace:"preLine"}});function c(e){let{className:t="",component:a="h2",size:l,fontWeight:c,whitespace:d,isDark:u=!1,isAnimated:m=!1,children:f}=e,{animationScope:p}=(0,s.I)(m),h=(0,i.m)(u?"text-white":"text-ds-grey-900",t);return(0,r.jsx)("div",{ref:p,children:(0,r.jsx)(a,{className:(0,n.Z)([o({size:l,fontWeight:c,whitespace:d}),h]),children:f})})}}}]);