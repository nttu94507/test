(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{6204:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/probes/edit/[Id]",function(){return r(1693)}])},5181:function(e,t,r){"use strict";r.d(t,{G:function(){return d}});var n=r(5893);r(7294);var s=r(5193),o=r.n(s),a=r(1664),i=r.n(a),c=r(3435);let l=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:o().header,children:[(0,n.jsx)("div",{className:"".concat(o().probesupperleft," ").concat(o().display),children:(0,n.jsx)(i(),{href:"/",children:"PIXIS CRM System"})}),(0,n.jsx)("div",{className:"".concat(o().probesuppermid),children:(0,n.jsx)(c.default,{})}),(0,n.jsx)("div",{className:"".concat(o().probesuppermid)}),(0,n.jsx)("div",{className:"".concat(o().probesupperright," ").concat(o().display),children:(0,n.jsx)(i(),{href:"/probes",children:"登入"})})]}),t]})},d=e=>(0,n.jsx)(l,{children:e})},1693:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(5193),o=r.n(s),a=r(5181);r(1664);var i=r(9008),c=r.n(i),l=r(1163),d=r(7294);r(8464);let u=()=>{let e=(0,l.useRouter)(),[t,r]=(0,d.useState)([]),[s,a]=(0,d.useState)(""),[i,u]=(0,d.useState)(""),[p,_]=(0,d.useState)(""),[f,h]=(0,d.useState)(""),[m,y]=(0,d.useState)(""),[E,b]=(0,d.useState)({}),[v,x]=(0,d.useState)(!1),{Id:R}=e.query,g="127.0.0.1:8000";(0,d.useEffect)(()=>{e.isReady&&(console.log("127.0.0.1:8000"),fetch("http://".concat(g,"/api/Probe/detail/").concat(R)).then(e=>e.json()).then(e=>{console.log(e),r(e[0]),a(e[0].probeId),u(e[0].hddcode),_(e[0].typecode),h(e[0].price),y(e[0].note),console.log(e)}))},[e.isReady]),(0,d.useEffect)(()=>{let e={};i||(e.hddcode="hddcode is required."),p||(e.typecode="typecode is required."),f?Number(f)||(e.price="price no a number."):e.price="price is required.",b(e),x(0===Object.keys(e).length)},[s,i,p,f]);let S=()=>{fetch("http://".concat(g,"/api/Probe/update"),{method:"POST",body:JSON.stringify({id:R,probeId:s,type:p,harddiskdrive:i,price:f,note:m}),headers:{"content-type":"application/json"}}).then(t=>{t.json(),e.push("/probes/probelist")})};return(0,n.jsxs)("div",{className:"".concat(o().display),children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:t.probeId?"修改設備資訊":"新增設備資訊"})}),(0,n.jsx)("div",{className:"".concat(o().display," ").concat(o().editprobe),children:(0,n.jsxs)("div",{className:"".concat(o().probeInfo," ").concat(o().display),children:[(0,n.jsx)("div",{className:"".concat(o().probetitle," ").concat(o().display),children:(0,n.jsx)("h1",{children:t.probeId?"修改設備資訊":"新增設備資訊"})}),(0,n.jsxs)("div",{className:"".concat(o().probecontent),children:[(0,n.jsxs)("div",{className:"".concat(o().probeInfoCell," ").concat(o().display),children:[(0,n.jsx)("div",{className:"".concat(o().itemcell),children:"probe ID: "}),(0,n.jsx)("div",{className:" ".concat(o().imputcell),children:(0,n.jsx)("input",{type:"text",name:"probeId",placeholder:s||"請輸入 probeID",value:s||""})})]}),(0,n.jsxs)("div",{className:"".concat(o().probeInfoCell," ").concat(o().display),children:[(0,n.jsx)("div",{className:"".concat(o().itemcell),children:"硬碟: "}),(0,n.jsx)("div",{className:" ".concat(o().imputcell),children:(0,n.jsxs)("select",{name:"harddiskdrive",required:!0,value:i||"",onChange:e=>{u(e.target.value)},children:[(0,n.jsx)("option",{value:"",children:"請選擇容量大小"}),(0,n.jsx)("option",{value:2,children:"8GB"}),(0,n.jsx)("option",{value:1,children:"16GB"})]})})]}),!!E.hddcode&&(0,n.jsx)("p",{className:o().error1,children:E.hddcode}),(0,n.jsxs)("div",{className:"".concat(o().probeInfoCell," ").concat(o().display),children:[(0,n.jsx)("div",{className:"".concat(o().itemcell),children:"型號: "}),(0,n.jsx)("div",{className:" ".concat(o().imputcell),children:(0,n.jsxs)("select",{name:"probetype",required:!0,value:p||"",onChange:e=>{_(e.target.value)},children:[(0,n.jsx)("option",{value:"",children:"請選擇型號"}),(0,n.jsx)("option",{value:6,children:"P110"}),(0,n.jsx)("option",{value:1,children:"P120"}),(0,n.jsx)("option",{value:2,children:"P220"}),(0,n.jsx)("option",{value:3,children:"P360"}),(0,n.jsx)("option",{value:4,children:"P560"}),(0,n.jsx)("option",{value:5,children:"P110+(樹苺派4)"})]})})]}),!!E.typecode&&(0,n.jsx)("p",{className:o().error1,children:E.typecode}),(0,n.jsxs)("div",{className:"".concat(o().probeInfoCell," ").concat(o().display),children:[(0,n.jsx)("div",{className:"".concat(o().itemcell),children:"單價:  "}),(0,n.jsx)("div",{className:" ".concat(o().imputcell),children:(0,n.jsx)("input",{type:"text",name:"probeId",placeholder:f||"請輸入 單價",defaultValue:f||"",onChange:e=>{h(e.target.value)}})})]}),!!E.price&&(0,n.jsx)("p",{className:o().error1,children:E.price}),(0,n.jsxs)("div",{className:"".concat(o().probeInfoCell," ").concat(o().note," ").concat(o().display),children:[(0,n.jsx)("div",{className:"".concat(o().itemcell),children:"備註: "}),(0,n.jsx)("div",{className:" ".concat(o().textareacell),children:(0,n.jsx)("textarea",{name:"note",defaultValue:m||"",onChange:e=>{y(e.target.value)}})})]})]}),(0,n.jsxs)("div",{className:" ".concat(o().confirm," ").concat(o().display," "),children:[(0,n.jsx)("div",{className:"".concat(o().flex1," ").concat(o().display," ").concat(o().btnleft),onClick:()=>e.back(),children:"放棄修改"}),(0,n.jsx)("div",{className:"".concat(o().flex1," ").concat(o().display," ").concat(o().btnright),onClick:()=>{S("/probes/")},children:"送出修改"})]})]})})]})};u.getLayout=a.G,t.default=u},3435:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),s=r(1664),o=r.n(s),a=r(5193),i=r.n(a);function c(e){let{title:t}=e;return(0,n.jsxs)("div",{className:"".concat(i().header),children:[(0,n.jsx)(o(),{href:"/probes",children:(0,n.jsx)("div",{className:i().option,children:"設備管理"})}),(0,n.jsx)(o(),{href:"/customers",children:(0,n.jsx)("div",{className:i().option,children:"客戶管理 "})}),(0,n.jsx)(o(),{href:"/transfers",children:(0,n.jsx)("div",{className:i().option,children:"出貨管理"})}),(0,n.jsx)(o(),{href:"/staffs",children:(0,n.jsx)("div",{className:i().option,children:"員工管理 "})})]})}},738:function(e){var t,r,n,s,o;"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab="//"),/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */(t={}).parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},o=e.split(s),a=(t||{}).decode||r,i=0;i<o.length;i++){var c=o[i],l=c.indexOf("=");if(!(l<0)){var d=c.substr(0,l).trim(),u=c.substr(++l,c.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==n[d]&&(n[d]=function(e,t){try{return t(e)}catch(t){return e}}(u,a))}}return n},t.serialize=function(e,t,r){var s=r||{},a=s.encode||n;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var i=a(t);if(i&&!o.test(i))throw TypeError("argument val is invalid");var c=e+"="+i;if(null!=s.maxAge){var l=s.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(s.domain){if(!o.test(s.domain))throw TypeError("option domain is invalid");c+="; Domain="+s.domain}if(s.path){if(!o.test(s.path))throw TypeError("option path is invalid");c+="; Path="+s.path}if(s.expires){if("function"!=typeof s.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(c+="; HttpOnly"),s.secure&&(c+="; Secure"),s.sameSite)switch("string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c},r=decodeURIComponent,n=encodeURIComponent,s=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,e.exports=t},5193:function(e){e.exports={nomargin:"styles_nomargin__mZx0d",test:"styles_test__EjHrQ",header:"styles_header__4HpNK",option:"styles_option__q82WJ",display:"styles_display__54Iml",flex1:"styles_flex1__D68VL",flex3:"styles_flex3__FQvA1",btn:"styles_btn__3ftX1",column:"styles_column_____PD",probescontent:"styles_probescontent___jhPF",probelistcontent:"styles_probelistcontent__rv4oD",card:"styles_card__Q1DxY",cardupper:"styles_cardupper__PrSHI",cardcontent:"styles_cardcontent__m3dPT",cardbuttom:"styles_cardbuttom__Y164a",btnleft:"styles_btnleft__B1quw",btnright:"styles_btnright__Q873l",probesupper:"styles_probesupper__l3r5B",probesteleport:"styles_probesteleport__eisIe",probescube:"styles_probescube__BsWHU",probesstatus:"styles_probesstatus__zXVAT",dashboardcube:"styles_dashboardcube__9DZzW",cubeup:"styles_cubeup__inGzA",cubebuttom:"styles_cubebuttom__vuUjt",dashboardmid:"styles_dashboardmid__4Z88V",event:"styles_event__q5ft_",eventtitle:"styles_eventtitle__qzw57",eventcontent:"styles_eventcontent__niTrY",eventlist:"styles_eventlist__91nrG",cell:"styles_cell__9bcow",celltype:"styles_celltype__3oAsl",cellcustomer:"styles_cellcustomer__5Dao1",probesupperright:"styles_probesupperright__VpeON",probesupperleft:"styles_probesupperleft__2DlOQ",probeid:"styles_probeid__Dlg1B",probestatus:"styles_probestatus__B132d",probesuppermid:"styles_probesuppermid__ADIsM",editprobe:"styles_editprobe__PBfpd",probeInfo:"styles_probeInfo__wKa5_",probetitle:"styles_probetitle__lmKxT",probecontent:"styles_probecontent__a_j3d",probeInfoCell:"styles_probeInfoCell__gLGsa",imputcell:"styles_imputcell__nMxXl",textareacell:"styles_textareacell__0LRB9",itemcell:"styles_itemcell__f43EC",note:"styles_note__3B2DB",confirm:"styles_confirm__gyeu3",customer:"styles_customer__feL2i",error1:"styles_error1__vjPlJ",justfycenter:"styles_justfycenter__Wcjn_"}},2350:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{NEXT_QUERY_PARAM_PREFIX:function(){return r},PRERENDER_REVALIDATE_HEADER:function(){return n},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return s},CACHE_ONE_YEAR:function(){return o},MIDDLEWARE_FILENAME:function(){return a},MIDDLEWARE_LOCATION_REGEXP:function(){return i},INSTRUMENTATION_HOOK_FILENAME:function(){return c},INSTRUMENTATION_HOOKS_LOCATION_REGEXP:function(){return l},PAGES_DIR_ALIAS:function(){return d},DOT_NEXT_ALIAS:function(){return u},ROOT_DIR_ALIAS:function(){return p},APP_DIR_ALIAS:function(){return _},RSC_MOD_REF_PROXY_ALIAS:function(){return f},RSC_ACTION_VALIDATE_ALIAS:function(){return h},RSC_ACTION_PROXY_ALIAS:function(){return m},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return y},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return E},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return b},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return v},SERVER_PROPS_SSG_CONFLICT:function(){return x},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return R},SERVER_PROPS_EXPORT_ERROR:function(){return g},GSP_NO_RETURNED_VALUE:function(){return S},GSSP_NO_RETURNED_VALUE:function(){return A},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return P},GSSP_COMPONENT_MEMBER_ERROR:function(){return j},NON_STANDARD_NODE_ENV:function(){return N},SSG_FALLBACK_EXPORT_ERROR:function(){return I},ESLINT_DEFAULT_DIRS:function(){return O},ESLINT_DEFAULT_DIRS_WITH_APP:function(){return T},ESLINT_PROMPT_VALUES:function(){return C},SERVER_RUNTIME:function(){return L},WEBPACK_LAYERS:function(){return D},WEBPACK_RESOURCE_QUERIES:function(){return M}});let r="nxtP",n="x-prerender-revalidate",s="x-prerender-revalidate-if-generated",o=31536e3,a="middleware",i=`(?:src/)?${a}`,c="instrumentation",l=`(?:src/)?${c}`,d="private-next-pages",u="private-dot-next",p="private-next-root-dir",_="private-next-app-dir",f="private-next-rsc-mod-ref-proxy",h="private-next-rsc-action-validate",m="private-next-rsc-action-proxy",y="private-next-rsc-action-client-wrapper",E="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",b="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",v="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",x="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",R="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",g="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",S="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",A="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",P="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",j="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",N='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',I="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",O=["pages","components","lib","src"],T=["app",...O],C=[{title:"Strict",recommended:!0,config:{extends:"next/core-web-vitals"}},{title:"Base",config:{extends:"next"}},{title:"Cancel",config:null}],L={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},w={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"actionBrowser",api:"api",middleware:"middleware",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",appMetadataRoute:"app-metadata-route"},D={...w,GROUP:{server:[w.reactServerComponents,w.actionBrowser,w.appMetadataRoute]}},M={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},8464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getCookieParser:function(){return o},sendStatusCode:function(){return a},redirect:function(){return i},checkIsOnDemandRevalidate:function(){return c},COOKIE_NAME_PRERENDER_BYPASS:function(){return l},COOKIE_NAME_PRERENDER_DATA:function(){return d},RESPONSE_LIMIT_DEFAULT:function(){return u},SYMBOL_PREVIEW_DATA:function(){return p},SYMBOL_CLEARED_COOKIES:function(){return _},clearPreviewData:function(){return f},ApiError:function(){return h},sendError:function(){return m},setLazyProp:function(){return y}});let n=r(4042),s=r(2350);function o(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(738);return n(Array.isArray(t)?t.join("; "):t)}}function a(e,t){return e.statusCode=t,e}function i(e,t,r){if("string"==typeof t&&(r=t,t=307),"number"!=typeof t||"string"!=typeof r)throw Error("Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').");return e.writeHead(t,{Location:r}),e.write(r),e.end(),e}function c(e,t){let r=n.HeadersAdapter.from(e.headers),o=r.get(s.PRERENDER_REVALIDATE_HEADER),a=o===t.previewModeId,i=r.has(s.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);return{isOnDemandRevalidate:a,revalidateOnlyGenerated:i}}let l="__prerender_bypass",d="__next_preview_data",u=4194304,p=Symbol(d),_=Symbol(l);function f(e,t={}){if(_ in e)return e;let{serialize:n}=r(738),s=e.getHeader("Set-Cookie");return e.setHeader("Set-Cookie",[..."string"==typeof s?[s]:Array.isArray(s)?s:[],n(l,"",{expires:new Date(0),httpOnly:!0,sameSite:"none",secure:!0,path:"/",...void 0!==t.path?{path:t.path}:void 0}),n(d,"",{expires:new Date(0),httpOnly:!0,sameSite:"none",secure:!0,path:"/",...void 0!==t.path?{path:t.path}:void 0})]),Object.defineProperty(e,_,{value:!0,enumerable:!1}),e}class h extends Error{constructor(e,t){super(t),this.statusCode=e}}function m(e,t,r){e.statusCode=t,e.statusMessage=r,e.end(r)}function y({req:e},t,r){let n={configurable:!0,enumerable:!0},s={...n,writable:!0};Object.defineProperty(e,t,{...n,get:()=>{let n=r();return Object.defineProperty(e,t,{...s,value:n}),n},set:r=>{Object.defineProperty(e,t,{...s,value:r})}})}},4042:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyHeadersError:function(){return s},HeadersAdapter:function(){return o}});let n=r(7246);class s extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new s}}class o extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,s){if("symbol"==typeof r)return n.ReflectAdapter.get(t,r,s);let o=r.toLowerCase(),a=Object.keys(e).find(e=>e.toLowerCase()===o);if(void 0!==a)return n.ReflectAdapter.get(t,a,s)},set(t,r,s,o){if("symbol"==typeof r)return n.ReflectAdapter.set(t,r,s,o);let a=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===a);return n.ReflectAdapter.set(t,i??r,s,o)},has(t,r){if("symbol"==typeof r)return n.ReflectAdapter.has(t,r);let s=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0!==o&&n.ReflectAdapter.has(t,o)},deleteProperty(t,r){if("symbol"==typeof r)return n.ReflectAdapter.deleteProperty(t,r);let s=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0===o||n.ReflectAdapter.deleteProperty(t,o)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return s.callable;default:return n.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new o(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,n]of this.entries())e.call(t,n,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},7246:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let n=Reflect.get(e,t,r);return"function"==typeof n?n.bind(e):n}static set(e,t,r,n){return Reflect.set(e,t,r,n)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},9008:function(e,t,r){e.exports=r(2636)},1163:function(e,t,r){e.exports=r(6885)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=6204)}),_N_E=e.O()}]);