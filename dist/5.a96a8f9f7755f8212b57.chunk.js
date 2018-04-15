webpackJsonp([5,13,16],{425:function(e,n,t){"use strict";function a(e){d||t(464)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(462),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var s=t(466),l=t.n(s),d=!1,c=t(4),p=a,u=c(i.a,l.a,!1,p,null,null);u.options.__file="src/views/sysSettings/addStore.vue",n.default=u.exports},426:function(e,n,t){"use strict";function a(e){d||t(467)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(463),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var s=t(469),l=t.n(s),d=!1,c=t(4),p=a,u=c(i.a,l.a,!1,p,null,null);u.options.__file="src/views/sysSettings/modifyStore.vue",n.default=u.exports},443:function(e,n,t){"use strict";function a(e){d||t(608)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(497),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var s=t(610),l=t.n(s),d=!1,c=t(4),p=a,u=c(i.a,l.a,!1,p,null,null);u.options.__file="src/views/sysSettings/storeManage.vue",n.default=u.exports},450:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(18),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={login:function(e){return o.default.fetch("/user/login",e)},resetPwd:function(e){return o.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return o.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return o.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return o.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return o.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return o.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return o.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return o.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return o.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return o.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return o.default.fetch("/config/addEmployee",e)},addCompany:function(e){return o.default.fetch("/config/addCompany",e)},updateCompany:function(e){return o.default.fetch("/config/updateCompany",e)},addArea:function(e){return o.default.fetch("/config/addArea",e)},updateArea:function(e){return o.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return o.default.fetch("/config/queryAllShop",e)},addShop:function(e){return o.default.fetch("/config/addShop",e)},updateShop:function(e){return o.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return o.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return o.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return o.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return o.default.fetch("/business/transferAgreement",e)},updateAgreement:function(e){return o.default.fetch("/business/updateAgreement",e)},queryLeaderAchieve:function(e){return o.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return o.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return o.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return o.default.fetch("/business/querySalary",e)},updateSalary:function(e){return o.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return o.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return o.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return o.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return o.default.fetch("/config/updateShopByIds",e)}}},451:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={};a.info=function(e,n,t,a){e.$Notice.info({title:t||"温馨提示",desc:n,duration:a||"1.5"})},a.success=function(e,n,t,a){e.$Notice.success({title:t||"成功提示",desc:n,duration:a||"1.5"})},a.warning=function(e,n,t,a){e.$Notice.warning({title:t||"警告提示",desc:n,duration:a||"1.5"})},a.error=function(e,n,t,a){e.$Notice.error({title:t||"错误提示",desc:n,duration:a||"1.5"})},a.confirm=function(e,n,t,a,o,i){e.$Modal.confirm({title:t,loading:n,content:a,onOk:function(){o&&o()},onCancel:function(){i&&i()}})},n.default=a},452:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(451),i=a(o),r=t(450),s=a(r);n.default={methods:{pageChanged:function(e){this.pageNo=e,this.queryEmployees()},pageSizeChanged:function(e){this.pageSize=e,this.queryEmployees()},selectSeller:function(e){this.$emit("selectSeller",e.row)},cancel:function(){this.$emit("cancel")},query:function(){this.queryEmployees()},changeAreaId:function(e){this.show&&(this.areaId=e,this.queryAllShop())},changeCompany:function(e){this.show&&this.queryAllArea()},changeShop:function(e){this.show&&(this.shopId=e)},queryEmployees:function(){var e=this;this.loading=!0,s.default.queryAllEmployee({employeeName:this.employeeName,choosenCompanyId:this.choosenCompanyId,areaId:this.areaId,shopId:this.shopId,pageNum:this.pageNo,pageSize:this.pageSize}).then(function(n){e.loading=!1,e.total=n.result.total,e.datalist=n.result.list}).catch(function(n){e.loading=!1,i.default.error(e,n.message+"["+n.responseCode+"]")})},queryCompany:function(){var e=this;s.default.queryAllCompany().then(function(n){e.companyList=n.result,e.companyId=e.choosenCompanyId,e.queryAllArea()}).catch(function(e){})},queryAllShop:function(){var e=this;s.default.queryAllShop({areaId:this.areaId,choosenCompanyId:this.choosenCompanyId}).then(function(n){e.shopList=n.result}).catch(function(e){})},queryAllArea:function(){var e=this;s.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(n){e.areaList=n.result}).catch(function(e){})},clearForm:function(){this.pageNo=1,this.pageSize=10,this.areaId="",this.shopId="",this.total="0",this.shopList=[],this.areaList=[],this.companyList=[],this.datalist=[],this.employeeName="",this.loading=!1}},props:{show:{default:!1},choosenCompanyId:{default:""},outAreaId:{default:""},title:{default:"选择业务员"}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.queryCompany(),this.queryEmployees())}},data:function(){var e=this;return{loading:!1,total:"0",stripeTable:!0,showWin:!1,pageSize:10,datalist:[],employeeName:"",companyList:[],areaList:[],shopList:[],companyId:this.choosenCompanyId,areaId:"",shopId:"",columns:[{title:"店名",key:"shopName"},{title:"姓名",key:"employeeName"},{title:"操作",key:"action",align:"center",width:140,render:function(n,t){return n("div",[n("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.selectSeller(t)}}},"选择")])}}]}}}},453:function(e,n,t){"use strict";function a(e){d||t(454)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(452),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var s=t(456),l=t.n(s),d=!1,c=t(4),p=a,u=c(i.a,l.a,!1,p,null,null);u.options.__file="src/views/contractManage/SellerList.vue",n.default=u.exports},454:function(e,n,t){var a=t(455);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("3a4131c8",a,!1)},455:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},456:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"querySellerList"},[t("Modal",{attrs:{title:e.title,closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(n){e.showWin=n},expression:"showWin"}},[t("Row",{staticStyle:{"margin-bottom":"20px"}},[t("Col",{attrs:{span:"8"}},[t("Select",{staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.companyId,callback:function(n){e.companyId=n},expression:"companyId"}},e._l(e.companyList,function(n){return t("Option",{key:n.companyId,attrs:{value:n.companyId}},[e._v(e._s(n.companyName))])}))],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择大区"},on:{"on-change":e.changeAreaId},model:{value:e.areaId,callback:function(n){e.areaId=n},expression:"areaId"}},e._l(e.areaList,function(n){return t("Option",{key:n.areaId,attrs:{value:n.areaId}},[e._v(e._s(n.areaName))])}))],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择门店"},on:{"on-change":e.changeShop},model:{value:e.shopId,callback:function(n){e.shopId=n},expression:"shopId"}},e._l(e.shopList,function(n){return t("Option",{key:n.id,attrs:{value:n.id}},[e._v(e._s(n.shopName))])}))],1)],1),e._v(" "),t("Row",{staticStyle:{"margin-bottom":"20px"}},[t("Col",{attrs:{span:"8"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.employeeName,callback:function(n){e.employeeName=n},expression:"employeeName"}})],1)]),e._v(" "),t("Col",{attrs:{span:"8"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)])],1),e._v(" "),t("Table",{ref:"selection",attrs:{height:250,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}}),e._v(" "),t("Page",{staticClass:"page-component",attrs:{"show-total":"","page-size-opts":e.pageSizeOpts,total:e.total,"page-size":e.pageSize,"show-sizer":""},on:{"on-change":e.pageChanged,"on-page-size-change":e.pageSizeChanged}}),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},462:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(451),i=a(o),r=t(450),s=a(r),l=t(453),d=a(l);n.default={components:{SellerList:d.default},data:function(){return{addTitle:"请选择店长",showWin:!1,modal_loading:!1,managerName:this.$route.query.managerName||"请设置店长",addForm:{companyId:this.$route.query.companyId,areaId:this.$route.query.areaId,managerId:"",shopName:""},rules:{shopName:[{required:!0,message:"请输入门店名称",trigger:"blur"}]}}},methods:{cancel:function(){this.finishPage()},chooseManager:function(){this.showWin=!0},cancelPickerSeller:function(){this.showWin=!1},surePickerSeller:function(e){this.showWin=!1,this.managerName=e.employeeName,this.addForm.managerId=e.employeeId},add:function(){var e=this;this.$refs.addForm.validate(function(n){n&&(e.modal_loading=!0,s.default.addShop({shopName:e.addForm.shopName,choosenCompanyId:e.addForm.companyId,managerId:e.addForm.managerId,areaId:e.addForm.areaId}).then(function(n){e.modal_loading=!1,i.default.success(e,"新增门店成功"),e.finishPage()}).catch(function(n){e.modal_loading=!1,i.default.error(e,n.message+"["+n.responseCode+"]")}))})},finishPage:function(){this.$store.commit("removeTag","add_store"),this.$router.push({name:"storeManage"})}}}},463:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(451),i=a(o),r=t(450),s=a(r),l=t(453),d=a(l);n.default={components:{SellerList:d.default},data:function(){return{showWin:!1,modal_loading:!1,managerName:this.$route.query.managerName||"请设置店长",addForm:{companyId:this.$route.query.companyId,areaId:this.$route.query.areaId,managerId:this.$route.query.managerId,shopName:this.$route.query.shopName,shopId:this.$route.query.shopId},rules:{shopName:[{required:!0,message:"请输入门店名称",trigger:"blur"}],managerId:[{required:!0,message:"请设置店长",trigger:"blur"}]}}},methods:{cancel:function(){this.finishPage()},chooseManager:function(){this.showWin=!0},cancelPickerSeller:function(){this.showWin=!1},surePickerSeller:function(e){this.showWin=!1,this.managerName=e.employeeName,this.addForm.managerId=e.employeeId},add:function(){var e=this;this.$refs.addForm.validate(function(n){n&&(e.modal_loading=!0,s.default.updateShop({shopName:e.addForm.shopName,choosenCompanyId:e.addForm.companyId,managerId:e.addForm.managerId,areaId:e.addForm.areaId,id:e.addForm.shopId}).then(function(n){e.modal_loading=!1,i.default.success(e,"修改门店成功"),e.finishPage()}).catch(function(n){e.modal_loading=!1,i.default.error(e,n.message+"["+n.responseCode+"]")}))})},finishPage:function(){this.$store.commit("removeTag","edit_store"),this.$router.push({name:"storeManage"})}}}},464:function(e,n,t){var a=t(465);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("5e62d567",a,!1)},465:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},466:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"addContract"},[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[t("Icon",{attrs:{type:"person"}}),e._v("\n      新增门店\n    ")],1),e._v(" "),t("Form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":80,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"门店名称:",prop:"shopName"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{attrs:{placeholder:"请输入店名"},model:{value:e.addForm.shopName,callback:function(n){e.$set(e.addForm,"shopName",n)},expression:"addForm.shopName"}})],1)])],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"店长：",prop:"managerId"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Button",{attrs:{type:"ghost"},on:{click:e.chooseManager}},[e._v("\n                                 "+e._s(e.managerName)+"\n                                 "),t("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1)],1),e._v(" "),t("Row",[t("Col",{attrs:{offset:"2"}},[t("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:e.modal_loading},on:{click:e.add}},[e._v("新增")])],1)],1)],1)],1),e._v(" "),t("SellerList",{attrs:{show:e.showWin,choosenCompanyId:e.addForm.companyId,title:e.addTitle},on:{selectSeller:e.surePickerSeller,cancel:e.cancelPickerSeller}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},467:function(e,n,t){var a=t(468);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("ef9f6a92",a,!1)},468:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},469:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"addContract"},[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[t("Icon",{attrs:{type:"person"}}),e._v("\n      修改门店\n    ")],1),e._v(" "),t("Form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":80,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"门店名称:",prop:"shopName"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{attrs:{placeholder:"请输入店名"},model:{value:e.addForm.shopName,callback:function(n){e.$set(e.addForm,"shopName",n)},expression:"addForm.shopName"}})],1)])],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"店长：",prop:"managerId"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Button",{attrs:{type:"ghost"},on:{click:e.chooseManager}},[e._v("\n                                 "+e._s(e.managerName)+"\n                                 "),t("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1)],1),e._v(" "),t("Row",[t("Col",{attrs:{offset:"2"}},[t("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:e.modal_loading},on:{click:e.add}},[e._v("修改")])],1)],1)],1)],1),e._v(" "),t("SellerList",{attrs:{show:e.showWin,choosenCompanyId:e.addForm.companyId},on:{selectSeller:e.surePickerSeller,cancel:e.cancelPickerSeller}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},497:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(36),i=a(o),r=t(451),s=a(r),l=t(450),d=a(l),c=t(425),p=a(c),u=t(426),h=a(u);n.default={name:"storeManage",components:{AddStore:p.default,ModifyStore:h.default},watch:{$route:"init"},mounted:function(){this.init()},methods:{init:function(){this.queryCompany()},refresh:function(){this.queryAllShop()},changeCompany:function(e){this.choosenCompanyId=e,this.queryAllArea()},queryCompany:function(){var e=this;d.default.queryAllCompany().then(function(n){e.companyList=n.result,e.companyList.length>0&&(e.choosenCompanyId=e.companyList[0].companyId,e.queryAllShop())}).catch(function(n){s.default.error(e,n.message+"["+n.responseCode+"]")})},changeZone:function(e){this.areaId=e,this.queryAllShop()},queryAllShop:function(){var e=this;this.loading=!0,d.default.queryAllShop({choosenCompanyId:this.choosenCompanyId,areaId:this.areaId}).then(function(n){e.loading=!1,e.datalist=n.result}).catch(function(n){e.loading=!1,s.default.error(e,n.message+"["+n.responseCode+"]")})},add:function(){this.$router.push({name:"add_store",query:{companyId:this.choosenCompanyId,areaId:this.areaId}})},doModifyCancel:function(){this.showModifyWin=!1},doModify:function(e){this.showModifyWin=!1},doAdd:function(e){this.showAddWin=!1,alert((0,i.default)(e))},doAddCancel:function(){this.showAddWin=!1},doCancel:function(){this.showEditWin=!1},edit:function(e){var n={companyId:this.choosenCompanyId,areaId:this.areaId,shopName:e.row.shopName,managerId:e.row.managerId,managerName:e.row.managerName,shopId:e.row.id};this.$router.push({name:"edit_store",query:n})},remove:function(e){s.default.confirm(this,!0,"删除提示","您确定需要删除该条记录吗？",function(){})},queryAllArea:function(){var e=this;d.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(n){e.areaList=n.result,e.areaList.length>0&&(e.areaId=e.areaList[0].areaId),e.queryAllShop()}).catch(function(e){})}},data:function(){var e=this;return{stripeTable:!0,loading:!1,showAddWin:!1,showModifyWin:!1,companyList:[],areaList:[],choosenCompanyId:"",areaId:"",modifyData:{},datalist:[],columns:[{title:"所属大区",key:"areaName"},{title:"门店名称",key:"shopName"},{title:"店长",key:"managerName"},{title:"操作",key:"action",align:"center",width:140,render:function(n,t){return n("div",[n("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.edit(t)}}},"修改")])}}]}}}},608:function(e,n,t){var a=t(609);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(24)("f1cb153e",a,!1)},609:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},610:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"index-page"},[t("Card",[t("Row",{staticClass:"operate-btns"},[t("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.choosenCompanyId,callback:function(n){e.choosenCompanyId=n},expression:"choosenCompanyId"}},e._l(e.companyList,function(n){return t("Option",{key:n.companyId,attrs:{value:n.companyId}},[e._v(e._s(n.companyName))])})),e._v(" "),t("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择大区"},on:{"on-change":e.changeZone},model:{value:e.areaId,callback:function(n){e.areaId=n},expression:"areaId"}},e._l(e.areaList,function(n){return t("Option",{key:n.areaId,attrs:{value:n.areaId}},[e._v(e._s(n.areaName))])})),e._v(" "),t("Button",{attrs:{type:"primary",icon:"android-add"},on:{click:e.add}},[e._v("新增")]),e._v(" "),t("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:e.refresh}},[e._v("刷新")])],1),e._v(" "),t("Table",{ref:"selection",attrs:{height:400,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}})],1),e._v(" "),t("AddZone",{attrs:{show:e.showAddWin},on:{add:e.doAdd,cancel:e.doAddCancel}}),e._v(" "),t("ModifyCompany",{attrs:{show:e.showModifyWin,params:e.modifyData},on:{modify:e.doModify,cancel:e.doModifyCancel}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i}});