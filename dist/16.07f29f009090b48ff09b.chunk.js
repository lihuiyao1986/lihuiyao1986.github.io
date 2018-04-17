webpackJsonp([16],{433:function(e,t,n){"use strict";function a(e){u||n(550)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(480),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);var s=n(552),l=n.n(s),u=!1,c=n(4),d=a,p=c(i.a,l.a,!1,d,null,null);p.options.__file="src/views/sysSettings/addZone.vue",t.default=p.exports},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={login:function(e){return o.default.fetch("/user/login",e)},resetPwd:function(e){return o.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return o.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return o.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return o.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return o.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return o.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return o.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return o.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return o.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return o.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return o.default.fetch("/config/addEmployee",e)},addCompany:function(e){return o.default.fetch("/config/addCompany",e)},updateCompany:function(e){return o.default.fetch("/config/updateCompany",e)},addArea:function(e){return o.default.fetch("/config/addArea",e)},updateArea:function(e){return o.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return o.default.fetch("/config/queryAllShop",e)},addShop:function(e){return o.default.fetch("/config/addShop",e)},updateShop:function(e){return o.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return o.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return o.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return o.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return o.default.fetch("/business/transferAgreement",e)},updateAgreement:function(e){return o.default.fetch("/business/updateAgreement",e)},queryLeaderAchieve:function(e){return o.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return o.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return o.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return o.default.fetch("/business/querySalary",e)},updateSalary:function(e){return o.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return o.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return o.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return o.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return o.default.fetch("/config/updateShopByIds",e)},queryReceiveCommission:function(e){return o.default.fetch("/business/queryReceiveCommission",e)},queryAllReceiveCommission:function(e){return o.default.fetch("/business/queryAllReceiveCommission",e)},updateReceiveCommission:function(e){return o.default.fetch("/business/updateReceiveCommission",e)},addReceiveCommission:function(e){return o.default.fetch("/business/addReceiveCommission",e)}}},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.info=function(e,t,n,a){e.$Notice.info({title:n||"温馨提示",desc:t,duration:a||"1.5"})},a.success=function(e,t,n,a){e.$Notice.success({title:n||"成功提示",desc:t,duration:a||"1.5"})},a.warning=function(e,t,n,a){e.$Notice.warning({title:n||"警告提示",desc:t,duration:a||"1.5"})},a.error=function(e,t,n,a){e.$Notice.error({title:n||"错误提示",desc:t,duration:a||"1.5"})},a.confirm=function(e,t,n,a,o,i){e.$Modal.confirm({title:n,loading:t,content:a,onOk:function(){o&&o()},onCancel:function(){i&&i()}})},t.default=a},453:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(452),i=a(o),r=n(451),s=a(r);t.default={methods:{pageChanged:function(e){this.pageNo=e,this.queryEmployees()},pageSizeChanged:function(e){this.pageSize=e,this.queryEmployees()},selectSeller:function(e){this.$emit("selectSeller",e.row)},cancel:function(){this.$emit("cancel")},query:function(){this.queryEmployees()},changeAreaId:function(e){this.show&&(this.areaId=e,this.queryAllShop())},changeCompany:function(e){this.show&&this.queryAllArea()},changeShop:function(e){this.show&&(this.shopId=e)},queryEmployees:function(){var e=this;this.loading=!0,s.default.queryAllEmployee({employeeName:this.employeeName,choosenCompanyId:this.choosenCompanyId,areaId:this.areaId,shopId:this.shopId,pageNum:this.pageNo,pageSize:this.pageSize}).then(function(t){e.loading=!1,e.total=t.result.total,e.datalist=t.result.list}).catch(function(t){e.loading=!1,i.default.error(e,t.message+"["+t.responseCode+"]")})},queryCompany:function(){var e=this;s.default.queryAllCompany().then(function(t){e.companyList=t.result,e.companyId=e.choosenCompanyId,e.queryAllArea()}).catch(function(e){})},queryAllShop:function(){var e=this;s.default.queryAllShop({areaId:this.areaId,choosenCompanyId:this.choosenCompanyId}).then(function(t){e.shopList=t.result}).catch(function(e){})},queryAllArea:function(){var e=this;s.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(t){e.areaList=t.result}).catch(function(e){})},clearForm:function(){this.pageNo=1,this.pageSize=10,this.areaId="",this.shopId="",this.total="0",this.shopList=[],this.areaList=[],this.companyList=[],this.datalist=[],this.employeeName="",this.loading=!1}},props:{show:{default:!1},choosenCompanyId:{default:""},outAreaId:{default:""},title:{default:"选择业务员"}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.queryCompany(),this.queryEmployees())}},data:function(){var e=this;return{loading:!1,total:"0",stripeTable:!0,showWin:!1,pageSize:10,datalist:[],employeeName:"",companyList:[],areaList:[],shopList:[],companyId:this.choosenCompanyId,areaId:"",shopId:"",columns:[{title:"店名",key:"shopName"},{title:"姓名",key:"employeeName"},{title:"操作",key:"action",align:"center",width:140,render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.selectSeller(n)}}},"选择")])}}]}}}},454:function(e,t,n){"use strict";function a(e){u||n(455)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(453),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);var s=n(457),l=n.n(s),u=!1,c=n(4),d=a,p=c(i.a,l.a,!1,d,null,null);p.options.__file="src/views/contractManage/SellerList.vue",t.default=p.exports},455:function(e,t,n){var a=n(456);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("3a4131c8",a,!1)},456:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},457:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"querySellerList"},[n("Modal",{attrs:{title:e.title,closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(t){e.showWin=t},expression:"showWin"}},[n("Row",{staticStyle:{"margin-bottom":"20px"}},[n("Col",{attrs:{span:"8"}},[n("Select",{staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.companyId,callback:function(t){e.companyId=t},expression:"companyId"}},e._l(e.companyList,function(t){return n("Option",{key:t.companyId,attrs:{value:t.companyId}},[e._v(e._s(t.companyName))])}))],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择大区"},on:{"on-change":e.changeAreaId},model:{value:e.areaId,callback:function(t){e.areaId=t},expression:"areaId"}},e._l(e.areaList,function(t){return n("Option",{key:t.areaId,attrs:{value:t.areaId}},[e._v(e._s(t.areaName))])}))],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择门店"},on:{"on-change":e.changeShop},model:{value:e.shopId,callback:function(t){e.shopId=t},expression:"shopId"}},e._l(e.shopList,function(t){return n("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.shopName))])}))],1)],1),e._v(" "),n("Row",{staticStyle:{"margin-bottom":"20px"}},[n("Col",{attrs:{span:"8"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.employeeName,callback:function(t){e.employeeName=t},expression:"employeeName"}})],1)]),e._v(" "),n("Col",{attrs:{span:"8"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)])],1),e._v(" "),n("Table",{ref:"selection",attrs:{height:250,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}}),e._v(" "),n("Page",{staticClass:"page-component",attrs:{"show-total":"","page-size-opts":e.pageSizeOpts,total:e.total,"page-size":e.pageSize,"show-sizer":""},on:{"on-change":e.pageChanged,"on-page-size-change":e.pageSizeChanged}}),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};t.default=i},480:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(452),i=a(o),r=n(451),s=a(r),l=n(454),u=a(l);t.default={components:{SellerList:u.default},watch:{$route:"init"},mounted:function(){this.init()},data:function(){return{addTitle:"请选择大区总监",showWin:!1,modal_loading:!1,companyList:[],areaManagerName:this.$route.query.areaManagerName||"请设置大区总监",addForm:{choosenCompanyId:this.$route.query.choosenCompanyId,managerId:this.$route.query.managerId,areaName:this.$route.query.areaName,state:"1",areaId:this.$route.query.areaId},rules:{areaName:[{required:!0,message:"请输入大区名称",trigger:"blur"}],choosenCompanyId:[{required:!0,message:"请选择所属公司",trigger:"blur"}]}}},methods:{init:function(){this.queryCompany()},queryCompany:function(){var e=this;s.default.queryAllCompany().then(function(t){e.companyList=t.result}).catch(function(t){i.default.error(e,t.message+"["+t.responseCode+"]")})},cancel:function(){this.finishPage()},chooseManager:function(){this.showWin=!0},cancelPickerSeller:function(){this.showWin=!1},surePickerSeller:function(e){this.showWin=!1,this.areaManagerName=e.employeeName,this.addForm.managerId=e.employeeId},add:function(){var e=this;this.$refs.addForm.validate(function(t){t&&(e.modal_loading=!0,s.default.addArea({areaName:e.addForm.areaName,choosenCompanyId:e.addForm.choosenCompanyId,managerId:e.addForm.managerId,state:"1"}).then(function(t){e.modal_loading=!1,i.default.success(e,"新增大区成功"),e.finishPage()}).catch(function(t){e.modal_loading=!1,i.default.error(e,t.message+"["+t.responseCode+"]")}))})},finishPage:function(){this.$store.commit("removeTag","add_zone"),this.$router.push({name:"zoneManage"})}}}},550:function(e,t,n){var a=n(551);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("76269691",a,!1)},551:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addForm"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"person"}}),e._v("\n      新增大区\n    ")],1),e._v(" "),n("Form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":100,"label-position":"left"}},[n("Row",[n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"所属公司：",prop:"choosenCompanyId"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Select",{staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"请选择公司"},model:{value:e.addForm.choosenCompanyId,callback:function(t){e.$set(e.addForm,"choosenCompanyId",t)},expression:"addForm.choosenCompanyId"}},e._l(e.companyList,function(t){return n("Option",{key:t.companyId,attrs:{value:t.companyId}},[e._v(e._s(t.companyName))])}))],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"大区名称:",prop:"areaName"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入大区名称"},model:{value:e.addForm.areaName,callback:function(t){e.$set(e.addForm,"areaName",t)},expression:"addForm.areaName"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"大区总监：",prop:"managerId"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Button",{attrs:{type:"ghost"},on:{click:e.chooseManager}},[e._v("\n                                                   "+e._s(e.areaManagerName)+"\n                                                   "),n("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{offset:"2"}},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:e.modal_loading},on:{click:e.add}},[e._v("新增")])],1)],1)],1)],1),e._v(" "),n("SellerList",{attrs:{show:e.showWin,title:e.addTitle,choosenCompanyId:e.addForm.choosenCompanyId},on:{selectSeller:e.surePickerSeller,cancel:e.cancelPickerSeller}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};t.default=i}});