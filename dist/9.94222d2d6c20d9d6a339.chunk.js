webpackJsonp([9],{442:function(e,n,t){"use strict";function a(e){c||t(600)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(495),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var l=t(606),s=t.n(l),c=!1,d=t(4),u=a,p=d(i.a,s.a,!1,u,null,null);p.options.__file="src/views/sysSettings/zoneManage.vue",n.default=p.exports},450:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(18),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={login:function(e){return o.default.fetch("/user/login",e)},resetPwd:function(e){return o.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return o.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return o.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return o.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return o.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return o.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return o.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return o.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return o.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return o.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return o.default.fetch("/config/addEmployee",e)},addCompany:function(e){return o.default.fetch("/config/addCompany",e)},updateCompany:function(e){return o.default.fetch("/config/updateCompany",e)},addArea:function(e){return o.default.fetch("/config/addArea",e)},updateArea:function(e){return o.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return o.default.fetch("/config/queryAllShop",e)},addShop:function(e){return o.default.fetch("/config/addShop",e)},updateShop:function(e){return o.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return o.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return o.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return o.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return o.default.fetch("/business/transferAgreement",e)},queryLeaderAchieve:function(e){return o.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return o.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return o.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return o.default.fetch("/business/querySalary",e)},updateSalary:function(e){return o.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return o.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return o.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return o.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return o.default.fetch("/config/updateShopByIds",e)}}},451:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={};a.info=function(e,n,t,a){e.$Notice.info({title:t||"温馨提示",desc:n,duration:a||"1.5"})},a.success=function(e,n,t,a){e.$Notice.success({title:t||"成功提示",desc:n,duration:a||"1.5"})},a.warning=function(e,n,t,a){e.$Notice.warning({title:t||"警告提示",desc:n,duration:a||"1.5"})},a.error=function(e,n,t,a){e.$Notice.error({title:t||"错误提示",desc:n,duration:a||"1.5"})},a.confirm=function(e,n,t,a,o,i){e.$Modal.confirm({title:t,loading:n,content:a,onOk:function(){o&&o()},onCancel:function(){i&&i()}})},n.default=a},452:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(451),i=a(o),r=t(450),l=a(r);n.default={methods:{pageChanged:function(e){this.pageNo=e,this.queryEmployees()},pageSizeChanged:function(e){this.pageSize=e,this.queryEmployees()},selectSeller:function(e){this.$emit("selectSeller",e.row)},cancel:function(){this.$emit("cancel")},query:function(){this.queryEmployees()},changeAreaId:function(e){this.show&&(this.areaId=e,this.queryAllShop())},changeCompany:function(e){this.show&&this.queryAllArea()},changeShop:function(e){this.show&&(this.shopId=e)},queryEmployees:function(){var e=this;this.loading=!0,l.default.queryAllEmployee({employeeName:this.employeeName,choosenCompanyId:this.choosenCompanyId,areaId:this.areaId,shopId:this.shopId,pageNum:this.pageNo,pageSize:this.pageSize}).then(function(n){e.loading=!1,e.total=n.result.total,e.datalist=n.result.list}).catch(function(n){e.loading=!1,i.default.error(e,n.message+"["+n.responseCode+"]")})},queryCompany:function(){var e=this;l.default.queryAllCompany().then(function(n){e.companyList=n.result,e.companyId=e.choosenCompanyId,e.queryAllArea()}).catch(function(e){})},queryAllShop:function(){var e=this;l.default.queryAllShop({areaId:this.areaId,choosenCompanyId:this.choosenCompanyId}).then(function(n){e.shopList=n.result}).catch(function(e){})},queryAllArea:function(){var e=this;l.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(n){e.areaList=n.result}).catch(function(e){})},clearForm:function(){this.pageNo=1,this.pageSize=10,this.areaId="",this.shopId="",this.total="0",this.shopList=[],this.areaList=[],this.companyList=[],this.datalist=[],this.employeeName="",this.loading=!1}},props:{show:{default:!1},choosenCompanyId:{default:""},outAreaId:{default:""},title:{default:"选择业务员"}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.queryCompany(),this.queryEmployees())}},data:function(){var e=this;return{loading:!1,total:"0",stripeTable:!0,showWin:!1,pageSize:10,datalist:[],employeeName:"",companyList:[],areaList:[],shopList:[],companyId:this.choosenCompanyId,areaId:"",shopId:"",columns:[{title:"店名",key:"shopName"},{title:"姓名",key:"employeeName"},{title:"操作",key:"action",align:"center",width:140,render:function(n,t){return n("div",[n("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.selectSeller(t)}}},"选择")])}}]}}}},453:function(e,n,t){"use strict";function a(e){c||t(454)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(452),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var l=t(456),s=t.n(l),c=!1,d=t(4),u=a,p=d(i.a,s.a,!1,u,null,null);p.options.__file="src/views/contractManage/SellerList.vue",n.default=p.exports},454:function(e,n,t){var a=t(455);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("3a4131c8",a,!1)},455:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},456:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"querySellerList"},[t("Modal",{attrs:{title:e.title,closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(n){e.showWin=n},expression:"showWin"}},[t("Row",{staticStyle:{"margin-bottom":"20px"}},[t("Col",{attrs:{span:"8"}},[t("Select",{staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.companyId,callback:function(n){e.companyId=n},expression:"companyId"}},e._l(e.companyList,function(n){return t("Option",{key:n.companyId,attrs:{value:n.companyId}},[e._v(e._s(n.companyName))])}))],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择大区"},on:{"on-change":e.changeAreaId},model:{value:e.areaId,callback:function(n){e.areaId=n},expression:"areaId"}},e._l(e.areaList,function(n){return t("Option",{key:n.areaId,attrs:{value:n.areaId}},[e._v(e._s(n.areaName))])}))],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择门店"},on:{"on-change":e.changeShop},model:{value:e.shopId,callback:function(n){e.shopId=n},expression:"shopId"}},e._l(e.shopList,function(n){return t("Option",{key:n.id,attrs:{value:n.id}},[e._v(e._s(n.shopName))])}))],1)],1),e._v(" "),t("Row",{staticStyle:{"margin-bottom":"20px"}},[t("Col",{attrs:{span:"8"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.employeeName,callback:function(n){e.employeeName=n},expression:"employeeName"}})],1)]),e._v(" "),t("Col",{attrs:{span:"8"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)])],1),e._v(" "),t("Table",{ref:"selection",attrs:{height:250,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}}),e._v(" "),t("Page",{staticClass:"page-component",attrs:{"show-total":"","page-size-opts":e.pageSizeOpts,total:e.total,"page-size":e.pageSize,"show-sizer":""},on:{"on-change":e.pageChanged,"on-page-size-change":e.pageSizeChanged}}),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},495:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(451),i=a(o),r=t(450),l=a(r),s=t(602),c=a(s);n.default={name:"zoneManage",components:{ModifyZone:c.default},methods:{init:function(){this.queryCompany()},queryCompany:function(){var e=this;l.default.queryAllCompany().then(function(n){e.companyList=n.result,e.companyList.length>0&&(e.choosenCompanyId=e.companyList[0].companyId,e.queryAllArea())}).catch(function(n){i.default.error(e,n.message+"["+n.responseCode+"]")})},refresh:function(){this.queryAllArea()},add:function(){this.$router.push({name:"add_zone",query:{choosenCompanyId:this.choosenCompanyId}})},changeCompany:function(e){this.choosenCompanyId=e,this.queryAllArea()},doModifyCancel:function(){this.showModifyWin=!1},doModify:function(e){this.showModifyWin=!1,this.queryAllArea()},doAdd:function(e){this.showAddWin=!1,this.queryAllArea()},doAddCancel:function(){this.showAddWin=!1},doCancel:function(){this.showEditWin=!1},edit:function(e){var n={choosenCompanyId:e.row.companyId,areaManagerName:e.row.areaManagerName,areaName:e.row.areaName,managerId:e.row.areaManagerId,areaId:e.row.areaId};this.$router.push({name:"edit_zone",query:n})},remove:function(e){i.default.confirm(this,!0,"删除提示","您确定需要删除该条记录吗？",function(){})},queryAllArea:function(){var e=this;this.loading=!0,l.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(n){e.loading=!1,e.datalist=n.result}).catch(function(n){e.loading=!1,i.default.error(e,n.message+"["+n.responseCode+"]")})}},watch:{$route:"init"},mounted:function(){this.init()},data:function(){var e=this;return{stripeTable:!0,loading:!1,showAddWin:!1,showModifyWin:!1,modifyData:{},datalist:[],choosenCompanyId:"",companyList:[],columns:[{title:"大区名称",key:"areaName"},{title:"公司名称",key:"companyName"},{title:"大区总监",key:"areaManagerName"},{title:"操作",key:"action",align:"center",width:140,render:function(n,t){return n("div",[n("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.edit(t)}}},"修改")])}}]}}}},496:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(453),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={components:{SellerList:o.default},data:function(){return{showWin:!1,modal_loading:!1,modifyForm:{companyId:"",managerId:"",areaName:"",state:""}}},methods:{cancel:function(){this.$emit("cancel")},chooseManager:function(){this.showWin=!0},cancelPickerSeller:function(){this.showWin=!1},surePickerSeller:function(){this.showWin=!1},modify:function(){this.$emit("modify",this.modifyForm)}}}},600:function(e,n,t){var a=t(601);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("299c96c4",a,!1)},601:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},602:function(e,n,t){"use strict";function a(e){c||t(603)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(496),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var l=t(605),s=t.n(l),c=!1,d=t(4),u=a,p=d(i.a,s.a,!1,u,null,null);p.options.__file="src/views/sysSettings/modifyZone.vue",n.default=p.exports},603:function(e,n,t){var a=t(604);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("369353dd",a,!1)},604:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},605:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"addContract"},[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[t("Icon",{attrs:{type:"person"}}),e._v("\n           修改大区\n       ")],1),e._v(" "),t("Form",{ref:"modifyForm",attrs:{model:e.modifyForm,"label-width":80,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"店长",prop:"companyId"}},[t("div",{staticStyle:{display:"inline-block",width:"120px"}},[t("Select",{staticStyle:{width:"150px"},model:{value:e.modifyForm.companyId,callback:function(n){e.$set(e.modifyForm,"companyId",n)},expression:"modifyForm.companyId"}},[t("Option",{attrs:{value:"00001"}},[e._v("华思科")]),e._v(" "),t("Option",{attrs:{value:"00002"}},[e._v("易联云")])],1)],1)])],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"大区名称:",prop:"areaName"}},[t("Input",{attrs:{placeholder:"请输入大区名称"},model:{value:e.modifyForm.areaName,callback:function(n){e.$set(e.modifyForm,"areaName",n)},expression:"modifyForm.areaName"}})],1)],1)],1),e._v(" "),t("Row",[t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"大区总监：",prop:"managerId"}},[t("div",{staticStyle:{display:"inline-block",width:"120px"}},[t("Button",{attrs:{type:"ghost"},on:{click:e.chooseManager}},[e._v("\n                请设置店长\n                "),t("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1)],1),e._v(" "),t("Row",[t("Col",{attrs:{offset:"2"}},[t("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:e.modal_loading},on:{click:e.modify}},[e._v("修改")])],1)],1)],1)],1),e._v(" "),t("SellerList",{attrs:{show:e.showWin},on:{cancel:e.cancelPickerSeller}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},606:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"index-page"},[t("Card",[t("Row",{staticClass:"operate-btns"},[t("Select",{staticStyle:{width:"150px"},on:{"on-change":e.changeCompany},model:{value:e.choosenCompanyId,callback:function(n){e.choosenCompanyId=n},expression:"choosenCompanyId"}},e._l(e.companyList,function(n){return t("Option",{key:n.companyId,attrs:{value:n.companyId}},[e._v(e._s(n.companyName))])})),e._v(" "),t("Button",{attrs:{type:"primary",icon:"android-add"},on:{click:e.add}},[e._v("新增")]),e._v(" "),t("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:e.refresh}},[e._v("刷新")])],1),e._v(" "),t("Table",{ref:"selection",attrs:{height:400,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}})],1),e._v(" "),t("ModifyCompany",{attrs:{show:e.showModifyWin,params:e.modifyData},on:{modify:e.doModify,cancel:e.doModifyCancel}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i}});