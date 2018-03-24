webpackJsonp([17],{434:function(e,t,n){"use strict";function a(e){d||n(540)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(478),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var s=n(542),l=n.n(s),d=!1,c=n(4),p=a,u=c(r.a,l.a,!1,p,null,null);u.options.__file="src/views/contractManage/contractAdd.vue",t.default=u.exports},450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={login:function(e){return o.default.fetch("/user/login",e)},resetPwd:function(e){return o.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return o.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return o.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return o.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return o.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return o.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return o.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return o.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return o.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return o.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return o.default.fetch("/config/addEmployee",e)},addCompany:function(e){return o.default.fetch("/config/addCompany",e)},updateCompany:function(e){return o.default.fetch("/config/updateCompany",e)},addArea:function(e){return o.default.fetch("/config/addArea",e)},updateArea:function(e){return o.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return o.default.fetch("/config/queryAllShop",e)},addShop:function(e){return o.default.fetch("/config/addShop",e)},updateShop:function(e){return o.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return o.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return o.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return o.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return o.default.fetch("/business/transferAgreement",e)},queryLeaderAchieve:function(e){return o.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return o.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return o.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return o.default.fetch("/business/querySalary",e)},updateSalary:function(e){return o.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return o.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return o.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return o.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return o.default.fetch("/config/updateShopByIds",e)}}},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.info=function(e,t,n,a){e.$Notice.info({title:n||"温馨提示",desc:t,duration:a||"1.5"})},a.success=function(e,t,n,a){e.$Notice.success({title:n||"成功提示",desc:t,duration:a||"1.5"})},a.warning=function(e,t,n,a){e.$Notice.warning({title:n||"警告提示",desc:t,duration:a||"1.5"})},a.error=function(e,t,n,a){e.$Notice.error({title:n||"错误提示",desc:t,duration:a||"1.5"})},a.confirm=function(e,t,n,a,o,r){e.$Modal.confirm({title:n,loading:t,content:a,onOk:function(){o&&o()},onCancel:function(){r&&r()}})},t.default=a},452:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(451),r=a(o),i=n(450),s=a(i);t.default={methods:{pageChanged:function(e){this.pageNo=e,this.queryEmployees()},pageSizeChanged:function(e){this.pageSize=e,this.queryEmployees()},selectSeller:function(e){this.$emit("selectSeller",e.row)},cancel:function(){this.$emit("cancel")},query:function(){this.queryEmployees()},changeAreaId:function(e){this.show&&(this.areaId=e,this.queryAllShop())},changeCompany:function(e){this.show&&this.queryAllArea()},changeShop:function(e){this.show&&(this.shopId=e)},queryEmployees:function(){var e=this;this.loading=!0,s.default.queryAllEmployee({employeeName:this.employeeName,choosenCompanyId:this.choosenCompanyId,areaId:this.areaId,shopId:this.shopId,pageNum:this.pageNo,pageSize:this.pageSize}).then(function(t){e.loading=!1,e.total=t.result.total,e.datalist=t.result.list}).catch(function(t){e.loading=!1,r.default.error(e,t.message+"["+t.responseCode+"]")})},queryCompany:function(){var e=this;s.default.queryAllCompany().then(function(t){e.companyList=t.result,e.companyId=e.choosenCompanyId,e.queryAllArea()}).catch(function(e){})},queryAllShop:function(){var e=this;s.default.queryAllShop({areaId:this.areaId,choosenCompanyId:this.choosenCompanyId}).then(function(t){e.shopList=t.result}).catch(function(e){})},queryAllArea:function(){var e=this;s.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(t){e.areaList=t.result}).catch(function(e){})},clearForm:function(){this.pageNo=1,this.pageSize=10,this.areaId="",this.shopId="",this.total="0",this.shopList=[],this.areaList=[],this.companyList=[],this.datalist=[],this.employeeName="",this.loading=!1}},props:{show:{default:!1},choosenCompanyId:{default:""},outAreaId:{default:""},title:{default:"选择业务员"}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.queryCompany(),this.queryEmployees())}},data:function(){var e=this;return{loading:!1,total:"0",stripeTable:!0,showWin:!1,pageSize:10,datalist:[],employeeName:"",companyList:[],areaList:[],shopList:[],companyId:this.choosenCompanyId,areaId:"",shopId:"",columns:[{title:"店名",key:"shopName"},{title:"姓名",key:"employeeName"},{title:"操作",key:"action",align:"center",width:140,render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.selectSeller(n)}}},"选择")])}}]}}}},453:function(e,t,n){"use strict";function a(e){d||n(454)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(452),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var s=n(456),l=n.n(s),d=!1,c=n(4),p=a,u=c(r.a,l.a,!1,p,null,null);u.options.__file="src/views/contractManage/SellerList.vue",t.default=u.exports},454:function(e,t,n){var a=n(455);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("3a4131c8",a,!1)},455:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"querySellerList"},[n("Modal",{attrs:{title:e.title,closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(t){e.showWin=t},expression:"showWin"}},[n("Row",{staticStyle:{"margin-bottom":"20px"}},[n("Col",{attrs:{span:"8"}},[n("Select",{staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.companyId,callback:function(t){e.companyId=t},expression:"companyId"}},e._l(e.companyList,function(t){return n("Option",{key:t.companyId,attrs:{value:t.companyId}},[e._v(e._s(t.companyName))])}))],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择大区"},on:{"on-change":e.changeAreaId},model:{value:e.areaId,callback:function(t){e.areaId=t},expression:"areaId"}},e._l(e.areaList,function(t){return n("Option",{key:t.areaId,attrs:{value:t.areaId}},[e._v(e._s(t.areaName))])}))],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true",placeholder:"请选择门店"},on:{"on-change":e.changeShop},model:{value:e.shopId,callback:function(t){e.shopId=t},expression:"shopId"}},e._l(e.shopList,function(t){return n("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.shopName))])}))],1)],1),e._v(" "),n("Row",{staticStyle:{"margin-bottom":"20px"}},[n("Col",{attrs:{span:"8"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.employeeName,callback:function(t){e.employeeName=t},expression:"employeeName"}})],1)]),e._v(" "),n("Col",{attrs:{span:"8"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)])],1),e._v(" "),n("Table",{ref:"selection",attrs:{height:250,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}}),e._v(" "),n("Page",{staticClass:"page-component",attrs:{"show-total":"","page-size-opts":e.pageSizeOpts,total:e.total,"page-size":e.pageSize,"show-sizer":""},on:{"on-change":e.pageChanged,"on-page-size-change":e.pageSizeChanged}}),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};t.default=r},478:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(453),r=a(o),i=n(451),s=a(i),l=n(450),d=a(l);t.default={components:{SellerList:r.default},data:function(){return{showWin:!1,modal_loading:!1,saleManName:"请选择业务员",registerName:"请选择登记员",delegateName:"请选择委托人",rules:{houseType:[{required:!0,message:"请选择类型",trigger:"blur"}],agreementDate:[{validator:function(e,t,n){t.length<=0&&n(new Error("请选择签约时间")),n()},trigger:"blur"}],quarterName:[{required:!0,message:"请输入小区名",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],customerCommission:[{required:!0,message:"请输入客户佣金",trigger:"blur"}],landlordCommission:[{required:!0,message:"请输入房东佣金",trigger:"blur"}],customerDeposit:[{required:!0,message:"请输入客户押金",trigger:"blur"}],landlordDeposit:[{required:!0,message:"请输入房东押金",trigger:"blur"}],agreementNo:[{required:!0,message:"请输入合同编号",trigger:"blur"}],salesmanId:[{required:!0,message:"请选择业务员",trigger:"blur"}]},addForm:{agreementDate:new Date,choosenCompanyId:this.$route.query.choosenCompanyId,houseType:"一手房",quarterName:"",address:"",customerCommission:"",landlordCommission:"",totalCommision:"",customerDeposit:"",landlordDeposit:"",salesmanId:"",registrantId:null,clienteleId:null,clientelName:"",registrantName:"",salesmanName:"",pickType:"",agreementNo:""}}},computed:{totalCommision:function(){return parseFloat(this.addForm.customerCommission||"0")+parseFloat(this.addForm.landlordCommission||"0")}},methods:{cancel:function(){this.$emit("cancel")},pickerSaleman:function(){this.addForm.pickType="0",this.showWin=!0},pickerRegister:function(){this.addForm.pickType="1",this.showWin=!0},pickerDelegate:function(){this.addForm.pickType="2",this.showWin=!0},surePickerSeller:function(e){this.showWin=!1,"0"==this.addForm.pickType?(this.saleManName=e.employeeName,this.addForm.salesmanId=e.employeeId):"1"==this.addForm.pickType?(this.registerName=e.employeeName,this.addForm.registrantId=e.employeeId):(this.delegateName=e.employeeName,this.addForm.clienteleId=e.employeeId)},cancelPickerSeller:function(){this.showWin=!1},add:function(){var e=this;this.$refs.addForm.validate(function(t){if(t){e.modal_loading=!0;var n="一手房"==e.addForm.houseType?"2":"二手房"==e.addForm.houseType?"1":"3";d.default.insertAgreement({agreementNo:e.addForm.agreementNo,quarterName:e.addForm.quarterName,address:e.addForm.address,salesmanId:e.addForm.salesmanId,houseType:n,registrantId:e.addForm.registrantId,clienteleId:e.addForm.clienteleId,customerCommission:e.addForm.customerCommission,landlordCommission:e.addForm.landlordCommission,customerDeposit:e.addForm.customerDeposit,landlordDeposit:e.addForm.landlordDeposit,agreementDate:e.addForm.agreementDate}).then(function(t){e.$emit("add",e.addForm),e.modal_loading=!1,s.default.success(e,"新增合同成功!")}).catch(function(t){e.modal_loading=!1,s.default.error(e,t.message+"["+t.responseCode+"]")})}})}}}},540:function(e,t,n){var a=n(541);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("53f7eb7b",a,!1)},541:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addContract"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"person"}}),e._v("\n      新增合同\n    ")],1),e._v(" "),n("Form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":100,"label-position":"left"}},[n("Row",[n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"签约时间：",prop:"agreementDate"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("DatePicker",{staticStyle:{width:"125px"},attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"请选择签约时间"},model:{value:e.addForm.agreementDate,callback:function(t){e.$set(e.addForm,"agreementDate",t)},expression:"addForm.agreementDate"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"类型:",prop:"houseType"}},[n("RadioGroup",{model:{value:e.addForm.houseType,callback:function(t){e.$set(e.addForm,"houseType",t)},expression:"addForm.houseType"}},[n("Radio",{attrs:{label:"一手房"}}),e._v(" "),n("Radio",{attrs:{label:"速销房"}}),e._v(" "),n("Radio",{attrs:{label:"二手房"}})],1)],1)],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"合同编号：",prop:"agreementNo"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入合同编号"},model:{value:e.addForm.agreementNo,callback:function(t){e.$set(e.addForm,"agreementNo",t)},expression:"addForm.agreementNo"}})],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"小区名称：",prop:"quarterName"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入小区名称"},model:{value:e.addForm.quarterName,callback:function(t){e.$set(e.addForm,"quarterName",t)},expression:"addForm.quarterName"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"具体地址：",prop:"address"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入具体地址"},model:{value:e.addForm.address,callback:function(t){e.$set(e.addForm,"address",t)},expression:"addForm.address"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"客户佣金：",prop:"customerCommission"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入客户佣金"},model:{value:e.addForm.customerCommission,callback:function(t){e.$set(e.addForm,"customerCommission",t)},expression:"addForm.customerCommission"}})],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"业务员：",prop:"salesmanId"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Button",{attrs:{type:"ghost"},on:{click:e.pickerSaleman}},[e._v("\n                                                                                                   "+e._s(e.saleManName)+"\n                                                                                                   "),n("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"登记员：",prop:"registrantId"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Button",{attrs:{type:"ghost"},on:{click:e.pickerRegister}},[e._v("\n                                                                                                   "+e._s(e.registerName)+"\n                                                                                                   "),n("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"委托人：",prop:"clienteleId"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Button",{attrs:{type:"ghost"},on:{click:e.pickerDelegate}},[e._v("\n                                                                                                   "+e._s(e.delegateName)+"\n                                                                                                   "),n("Icon",{attrs:{type:"chevron-right"}})],1)],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"房东佣金：",prop:"landlordCommission"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入房东佣金"},model:{value:e.addForm.landlordCommission,callback:function(t){e.$set(e.addForm,"landlordCommission",t)},expression:"addForm.landlordCommission"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"总佣金：",prop:"totalCommision"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{disabled:"",placeholder:"请输入总佣金"},model:{value:e.totalCommision,callback:function(t){e.totalCommision=t},expression:"totalCommision"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"客户押金：",prop:"customerDeposit"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入客户押金"},model:{value:e.addForm.customerDeposit,callback:function(t){e.$set(e.addForm,"customerDeposit",t)},expression:"addForm.customerDeposit"}})],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"8"}},[n("FormItem",{attrs:{label:"房东押金：",prop:"landlordDeposit"}},[n("div",{staticStyle:{display:"inline-block",width:"120px"}},[n("Input",{attrs:{placeholder:"请输入房东押金"},model:{value:e.addForm.landlordDeposit,callback:function(t){e.$set(e.addForm,"landlordDeposit",t)},expression:"addForm.landlordDeposit"}})],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{offset:"2"}},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:e.modal_loading},on:{click:e.add}},[e._v("新增")])],1)],1)],1)],1),e._v(" "),n("SellerList",{attrs:{show:e.showWin,choosenCompanyId:e.addForm.choosenCompanyId},on:{selectSeller:e.surePickerSeller,cancel:e.cancelPickerSeller}})],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};t.default=r}});