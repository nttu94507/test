(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{215:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers/edit",function(){return t(4929)}])},5181:function(e,s,t){"use strict";t.d(s,{G:function(){return d}});var c=t(5893);t(7294);var n=t(5193),l=t.n(n),a=t(1664),r=t.n(a),o=t(3435);let i=e=>{let{children:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:l().header,children:[(0,c.jsx)("div",{className:"".concat(l().probesupperleft," ").concat(l().display),children:(0,c.jsx)(r(),{href:"/",children:"PIXIS CRM System"})}),(0,c.jsx)("div",{className:"".concat(l().probesuppermid),children:(0,c.jsx)(o.default,{})}),(0,c.jsx)("div",{className:"".concat(l().probesuppermid)}),(0,c.jsx)("div",{className:"".concat(l().probesupperright," ").concat(l().display),children:(0,c.jsx)(r(),{href:"/probes",children:"登入"})})]}),s]})},d=e=>(0,c.jsx)(i,{children:e})},4929:function(e,s,t){"use strict";t.r(s);var c=t(5893),n=t(5193),l=t.n(n),a=t(5181);t(1664);var r=t(9008),o=t.n(r),i=t(1163),d=t(7294);let _=()=>{let e=(0,i.useRouter)(),[s,t]=(0,d.useState)(""),[n,a]=(0,d.useState)(""),[r,_]=(0,d.useState)(""),[p,u]=(0,d.useState)(""),[m,h]=(0,d.useState)(""),[x,b]=(0,d.useState)(""),[j,y]=(0,d.useState)(""),[v,N]=(0,d.useState)(""),[f,g]=(0,d.useState)(""),[I,P]=(0,d.useState)({}),[C,D]=(0,d.useState)(!1),E=()=>{let t={GUInumber:s,Organization_Name:n,Organization_Address:r,contractPerson:p,contractPerson_PhoneNumber:m,contractPerson_Email:x,SalesID:j,FAEID:v,note:f};fetch("http://".concat("127.0.0.1:8000","/api/customer/"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then(()=>{e.push("/customers/customerlist")}).catch(e=>{console.log(e)}),console.log(t)};(0,d.useEffect)(()=>{let e={};s?Number(s)||(e.GUInumber="GUInumber no a number."):e.GUInumber="GUInumber is required.",n||(e.Organization_Name="Organization_Name is required."),r||(e.Organization_Address="Organization_Address is required."),p||(e.contractPerson="contractPerson is required."),m?Number(m)||(e.GUInumber="contractPerson_PhoneNumber no a number."):e.contractPerson_PhoneNumber="contractPerson_PhoneNumber is required.",x||(e.contractPerson_Email="contractPerson_Email is required."),j||(e.SalesID="SalesID is required."),v||(e.FAEID="FAEID is required."),P(e),D(0===Object.keys(e).length)},[s,n,r,p,m,x,j,v]);let S=()=>{C?(console.log("Form submitted successfully!"),E()):console.log("Form has errors. Please correct them.")};return(0,c.jsxs)("div",{className:"".concat(l().display),children:[(0,c.jsx)(o(),{children:(0,c.jsx)("title",{children:"新增客戶資訊"})}),(0,c.jsx)("div",{className:"".concat(l().display," ").concat(l().editprobe),children:(0,c.jsxs)("div",{className:"".concat(l().probeInfo," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().probetitle," ").concat(l().display),children:(0,c.jsx)("h1",{children:"新增客戶資訊"})}),(0,c.jsxs)("div",{className:"".concat(l().probecontent),children:[(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"統一編號: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsx)("input",{type:"text",name:"GUInumber",placeholder:"請輸入統一編號",onChange:e=>{t(e.target.value)}})})]}),!!I.GUInumber&&(0,c.jsx)("p",{className:l().error1,children:I.GUInumber}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"公司名稱: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsx)("input",{type:"text",name:"Organization_Name",placeholder:"請輸入公司名稱",onChange:e=>{a(e.target.value)}})})]}),!!I.Organization_Name&&(0,c.jsx)("p",{className:l().error1,children:I.Organization_Name}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"公司地址: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsx)("input",{type:"text",name:"Organization_Address",placeholder:"請輸入公司地址",onChange:e=>{_(e.target.value)}})})]}),!!I.Organization_Address&&(0,c.jsx)("p",{className:l().error1,children:I.Organization_Address}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"承辦人: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsx)("input",{type:"text",name:"contractPerson",placeholder:"請輸入承辦人姓名",onChange:e=>{u(e.target.value)}})})]}),!!I.contractPerson&&(0,c.jsx)("p",{className:l().error1,children:I.contractPerson}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"承辦人電話: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsx)("input",{type:"text",name:"contractPerson_PhoneNumber",placeholder:"請輸入承辦人電話",onChange:e=>{h(e.target.value)}})})]}),!!I.contractPerson_PhoneNumber&&(0,c.jsx)("p",{className:l().error1,children:I.contractPerson_PhoneNumber}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"承辦人Email: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsx)("input",{type:"text",name:"contractPerson_Email",placeholder:"請輸入承辦人Email",onChange:e=>{b(e.target.value)}})})]}),!!I.contractPerson_Email&&(0,c.jsx)("p",{className:l().error1,children:I.contractPerson_Email}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"負責業務: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsxs)("select",{name:"SalesID",required:!0,onChange:e=>{y(e.target.value)},children:[(0,c.jsx)("option",{value:"",children:"請選擇業務"}),(0,c.jsx)("option",{value:0,children:"Jenlin"}),(0,c.jsx)("option",{value:1,children:"Wade"})]})})]}),!!I.SalesID&&(0,c.jsx)("p",{className:l().error1,children:I.SalesID}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"負責工程師: "}),(0,c.jsx)("div",{className:" ".concat(l().imputcell),children:(0,c.jsxs)("select",{name:"FAEID",required:!0,onChange:e=>{N(e.target.value)},children:[(0,c.jsx)("option",{value:"",children:"請選擇工程師"}),(0,c.jsx)("option",{value:0,children:"Jason"}),(0,c.jsx)("option",{value:1,children:"Joy"}),(0,c.jsx)("option",{value:2,children:"Leo"}),(0,c.jsx)("option",{value:3,children:"Bobby"}),(0,c.jsx)("option",{value:4,children:"Jorden"}),(0,c.jsx)("option",{value:5,children:"Hank"})]})})]}),!!I.FAEID&&(0,c.jsx)("p",{className:l().error1,children:I.FAEID}),(0,c.jsxs)("div",{className:"".concat(l().probeInfoCell," ").concat(l().note," ").concat(l().display),children:[(0,c.jsx)("div",{className:"".concat(l().itemcell),children:"備註: "}),(0,c.jsx)("div",{className:" ".concat(l().textareacell),children:(0,c.jsx)("textarea",{name:"note",onChange:e=>{g(e.target.value)}})})]})]}),(0,c.jsxs)("div",{className:" ".concat(l().confirm," ").concat(l().display," "),children:[(0,c.jsx)("div",{className:"".concat(l().flex1," ").concat(l().display," ").concat(l().btnleft),onClick:()=>{e.back()},children:"返回"}),(0,c.jsx)("div",{className:"".concat(l().flex1," ").concat(l().display," ").concat(l().btnright),onClick:()=>{S()},children:"送出"})]})]})})]})};_.getLayout=a.G,s.default=_},3435:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var c=t(5893),n=t(1664),l=t.n(n),a=t(5193),r=t.n(a);function o(e){let{title:s}=e;return(0,c.jsxs)("div",{className:"".concat(r().header),children:[(0,c.jsx)(l(),{href:"/probes",children:(0,c.jsx)("div",{className:r().option,children:"設備管理"})}),(0,c.jsx)(l(),{href:"/customers",children:(0,c.jsx)("div",{className:r().option,children:"客戶管理 "})}),(0,c.jsx)(l(),{href:"/transfers",children:(0,c.jsx)("div",{className:r().option,children:"出貨管理"})}),(0,c.jsx)(l(),{href:"/staffs",children:(0,c.jsx)("div",{className:r().option,children:"員工管理 "})})]})}},5193:function(e){e.exports={nomargin:"styles_nomargin__mZx0d",test:"styles_test__EjHrQ",header:"styles_header__4HpNK",option:"styles_option__q82WJ",display:"styles_display__54Iml",flex1:"styles_flex1__D68VL",flex3:"styles_flex3__FQvA1",btn:"styles_btn__3ftX1",column:"styles_column_____PD",probescontent:"styles_probescontent___jhPF",probelistcontent:"styles_probelistcontent__rv4oD",card:"styles_card__Q1DxY",cardupper:"styles_cardupper__PrSHI",cardcontent:"styles_cardcontent__m3dPT",cardbuttom:"styles_cardbuttom__Y164a",btnleft:"styles_btnleft__B1quw",btnright:"styles_btnright__Q873l",probesupper:"styles_probesupper__l3r5B",probesteleport:"styles_probesteleport__eisIe",probescube:"styles_probescube__BsWHU",probesstatus:"styles_probesstatus__zXVAT",dashboardcube:"styles_dashboardcube__9DZzW",cubeup:"styles_cubeup__inGzA",cubebuttom:"styles_cubebuttom__vuUjt",dashboardmid:"styles_dashboardmid__4Z88V",event:"styles_event__q5ft_",eventtitle:"styles_eventtitle__qzw57",eventcontent:"styles_eventcontent__niTrY",eventlist:"styles_eventlist__91nrG",cell:"styles_cell__9bcow",celltype:"styles_celltype__3oAsl",cellcustomer:"styles_cellcustomer__5Dao1",probesupperright:"styles_probesupperright__VpeON",probesupperleft:"styles_probesupperleft__2DlOQ",probeid:"styles_probeid__Dlg1B",probestatus:"styles_probestatus__B132d",probesuppermid:"styles_probesuppermid__ADIsM",editprobe:"styles_editprobe__PBfpd",probeInfo:"styles_probeInfo__wKa5_",probetitle:"styles_probetitle__lmKxT",probecontent:"styles_probecontent__a_j3d",probeInfoCell:"styles_probeInfoCell__gLGsa",imputcell:"styles_imputcell__nMxXl",textareacell:"styles_textareacell__0LRB9",itemcell:"styles_itemcell__f43EC",note:"styles_note__3B2DB",confirm:"styles_confirm__gyeu3",customer:"styles_customer__feL2i",error1:"styles_error1__vjPlJ",justfycenter:"styles_justfycenter__Wcjn_"}},9008:function(e,s,t){e.exports=t(2636)},1163:function(e,s,t){e.exports=t(6885)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=215)}),_N_E=e.O()}]);