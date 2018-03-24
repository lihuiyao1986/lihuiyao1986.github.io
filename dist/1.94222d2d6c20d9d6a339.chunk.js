webpackJsonp([1],{449:function(e,t,n){"use strict";function a(e){u||n(665)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(513),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var l=n(679),s=n.n(l),u=!1,c=n(4),p=a,d=c(o.a,s.a,!1,p,null,null);d.options.__file="src/views/profitManage/profitManage.vue",t.default=d.exports},450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={login:function(e){return r.default.fetch("/user/login",e)},resetPwd:function(e){return r.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return r.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return r.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return r.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return r.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return r.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return r.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return r.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return r.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return r.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return r.default.fetch("/config/addEmployee",e)},addCompany:function(e){return r.default.fetch("/config/addCompany",e)},updateCompany:function(e){return r.default.fetch("/config/updateCompany",e)},addArea:function(e){return r.default.fetch("/config/addArea",e)},updateArea:function(e){return r.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return r.default.fetch("/config/queryAllShop",e)},addShop:function(e){return r.default.fetch("/config/addShop",e)},updateShop:function(e){return r.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return r.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return r.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return r.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return r.default.fetch("/business/transferAgreement",e)},queryLeaderAchieve:function(e){return r.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return r.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return r.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return r.default.fetch("/business/querySalary",e)},updateSalary:function(e){return r.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return r.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return r.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return r.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return r.default.fetch("/config/updateShopByIds",e)}}},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.info=function(e,t,n,a){e.$Notice.info({title:n||"温馨提示",desc:t,duration:a||"1.5"})},a.success=function(e,t,n,a){e.$Notice.success({title:n||"成功提示",desc:t,duration:a||"1.5"})},a.warning=function(e,t,n,a){e.$Notice.warning({title:n||"警告提示",desc:t,duration:a||"1.5"})},a.error=function(e,t,n,a){e.$Notice.error({title:n||"错误提示",desc:t,duration:a||"1.5"})},a.confirm=function(e,t,n,a,r,o){e.$Modal.confirm({title:n,loading:t,content:a,onOk:function(){r&&r()},onCancel:function(){o&&o()}})},t.default=a},457:function(e,t,n){"use strict";function a(e){return("00"+e).substr(e.length)}function r(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp("("+r+")").test(t)){var o=n[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?o:a(o))}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=r},513:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(451),o=a(r),i=n(450),l=a(i),s=n(457),u=n(667),c=a(u),p=n(671),d=a(p),h=n(675),f=a(h);t.default={name:"profitManage",components:{ProfitQuery:c.default,ProfitCheck:d.default,ProfitBatchOut:f.default},data:function(){var e=this;return{total:0,pageSize:10,pageSizeOpts:[10,15,20,30],stripeTable:!0,pageNo:1,loading:!1,showQueryWin:!1,showCheckWin:!1,showBatchOutWin:!1,choosenCompanyId:"",checkParams:{},companyList:[],batchOutParams:{},datalist:[],queryForm:{areaId:null,shopId:null,queryTime:new Date},columns:[{title:"大区",key:"areaName"},{title:"店名",key:"shopName"},{title:"总收入",key:"toltalAchievement"},{title:"工资发放",key:"totolCommission"},{title:"过户费",key:"transferExpenditure"},{title:"管理费",key:"manageExpenditure"},{title:"其他支出",key:"otherExpenditure"},{title:"剩余",key:"lastMoney"},{title:"核对",key:"CommissionSettle",render:function(t,n){return!n.row.profitChecked||n.row.profitChecked.length<=0?t("div",[t("Button",{props:{type:"primary",size:"small"},on:{click:function(){e.edit(n)}}},"核对")]):t("div",n.row.profitCheckTime)}}]}},mounted:function(){this.queryCompany()},watch:{$route:"init"},methods:{changeDate:function(e){if(e.length<=0)return"";var t=new Date(e);return(0,s.formatDate)(t,"yyyy-MM-dd")},init:function(){this.queryCompany()},add:function(){this.showBatchOutWin=!0},filter:function(){this.showQueryWin=!0},changeCompany:function(e){e&&e.length>0&&(this.choosenCompanyId=e,this.queryData())},queryCompany:function(){var e=this;l.default.queryAllCompany().then(function(t){e.companyList=t.result,e.companyList.length>0&&(e.choosenCompanyId=e.companyList[0].companyId,e.queryData())}).catch(function(t){o.default.error(e,t.message+"["+t.responseCode+"]")})},refresh:function(){this.queryData()},queryData:function(){var e=this;this.loading=!0,l.default.queryProfit({choosenCompanyId:this.choosenCompanyId,queryTime:this.changeDate(this.queryForm.queryTime||new Date),shopId:this.queryForm.shopId,pageNum:this.pageNo,pageSize:this.pageSize,areaId:this.queryForm.areaId}).then(function(t){e.loading=!1,e.datalist=t.result.list,e.total=t.result.total}).catch(function(t){e.loading=!1,o.default.error(e,t.message+"["+t.responseCode+"]")})},pageChanged:function(e){this.pageNo=e,this.queryData()},pageSizeChanged:function(e){this.pageSize=e,this.queryData()},cancelQuery:function(){this.showQueryWin=!1},querySure:function(e){this.showQueryWin=!1,this.queryForm.areaId=e.areaId,this.queryForm.shopId=e.shopId,this.queryData()},edit:function(e){this.showCheckWin=!0,this.checkParams=e.row,this.checkParams.queryTime=this.changeDate(this.queryForm.queryTime||new Date)},cancelCheck:function(){this.showCheckWin=!1},checkSure:function(e){this.showCheckWin=!1,this.queryData()},batchOutSure:function(e){this.showBatchOutWin=!1,this.queryData()},cancelBatchOut:function(){this.showBatchOutWin=!1}}}},514:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(451),o=(a(r),n(450)),i=a(o);t.default={data:function(){return{showWin:!1,allShops:[],allAreas:[],choosenCompanyId:this.choosenCompanyId,queryForm:{shopId:null,areaId:null}}},props:{show:{default:!1},choosenCompanyId:{default:""}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.queryAllArea())}},methods:{cancel:function(){this.$emit("cancel")},sure:function(){this.$emit("sure",this.queryForm)},queryAllShop:function(e){var t=this;i.default.queryAllShop(e).then(function(e){t.allShops=e.result}).catch(function(e){})},queryAllArea:function(){var e=this;this.allShops=[],this.allAreas=[],i.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(t){e.allAreas=t.result,e.allAreas.length>0&&(e.queryForm.areaId=e.allAreas[0].areaId,e.queryAllShop({choosenCompanyId:e.choosenCompanyId,areaId:e.allAreas[0].areaId}))}).catch(function(e){})},changeArea:function(e){this.queryAllShop({choosenCompanyId:this.choosenCompanyId,areaId:e})},clearForm:function(){this.queryForm.areaId=null,this.queryForm.shopId=null,this.allShops=[],this.allAreas=[]}}}},515:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),o=a(r),i=n(451),l=a(i),s=n(450),u=a(s);t.default={name:"profitCheck",computed:{adjustBtnIcon:function(){return this.isEditing?"checkmark-round":"compose"}},methods:{cancel:function(){this.$emit("cancel")},sure:function(){var e=this;this.$refs.queryForm.validate(function(t){t&&(e.modal_loading=!0,u.default.updateProfit({profitChecked:e.queryForm.profitCheck,profitNum:e.params.lastMoney,changeReason:e.queryForm.changeReason,shopId:e.params.shopId,queryTime:e.params.queryTime}).then(function(t){e.modal_loading=!1,l.default.success(e,"利润核对成功"),e.$emit("sure",e.queryForm),e.handleReset("queryForm")}).catch(function(t){e.modal_loading=!1,l.default.error(e,t.message+"["+t.responseCode+"]")}))})},adjustBtnClicked:function(){this.isEditing=!this.isEditing},handleReset:function(e){this.$refs[e].resetFields()},clearForm:function(){this.queryForm.changeReason=null,this.isEditing=!1,this.modal_loading=!1,this.handleReset("queryForm")},fillData:function(){this.queryForm.profitCheck=this.params.lastMoney}},data:function(){return{showWin:!1,isEditing:!1,modal_loading:!1,queryForm:{profitCheck:"",changeReason:""},rules:{actGrant:[{validator:function(e,t,n){(t.length<=0||parseInt(t)<=0)&&n(new Error("请输入调整利润")),n()},trigger:"blur"}],changeReason:[{required:!0,message:"请输入调整原因",trigger:"blur"}]}}},props:{show:{default:!1},params:Object},watch:{show:function(e){this.showWin=e,e&&(alert((0,o.default)(this.params)),this.clearForm(),this.fillData())}}}},516:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(451),o=a(r),i=n(450),l=a(i);t.default={methods:{queryAllArea:function(){var e=this;this.allAreas=[],l.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(t){e.allAreas=t.result}).catch(function(e){})},cancel:function(){this.$emit("cancel")},sure:function(){var e=this;if(!this.queryForm.manageExpenditure||this.queryForm.manageExpenditure.length<=0)return void o.default.error(this,"请输入的管理费");if(!this.queryForm.otherExpenditure||this.queryForm.otherExpenditure.length<=0)return void o.default.error(this,"请输入的其他费用");if(this.selectData.length<=0)return void o.default.error(this,"请添加门店");for(var t=new Array,n=0;n<this.selectData.length;n++)t.push(this.selectData[n].id);this.modal_loading=!0,l.default.updateShopByIds({manageExpenditure:this.queryForm.manageExpenditure,shopIds:t,otherExpenditure:this.queryForm.otherExpenditure,choosenCompanyId:this.choosenCompanyId}).then(function(t){e.modal_loading=!1,o.default.success(e,"门店支出批量设置成功!"),e.$emit("sure",e.selectData)}).catch(function(t){o.default.error(e,t.message+"["+t.responseCode+"]"),e.modal_loading=!1})},selectChange:function(e){this.selectData=e},search:function(){this.queryAllShop()},queryAllShop:function(){var e=this;this.loading=!0,l.default.queryAllShop({shopName:this.queryForm.shopName,areaId:this.queryForm.areaId,choosenCompanyId:this.choosenCompanyId}).then(function(t){e.loading=!1,e.datalist=t.result}).catch(function(t){e.loading=!1,o.default.error(e,t.message+"["+t.responseCode+"]")})},remove:function(e){this.selectData.pop()},select:function(e){for(var t=!1,n=0;n<=this.selectData.length-1;n++){if(this.selectData[n].id==e.row.id){t=!0;break}}t?o.default.error(this,"该门店已添加，请勿重复添加!"):this.selectData.push(e.row)},clearForm:function(){this.selectData=[],this.modal_loading=!1,this.loading=!1,this.allAreas=[],this.queryForm.areaId=null,this.queryForm.shopName=null,this.queryForm.otherExpenditure=null,this.queryForm.manageExpenditure=null},fillData:function(){}},props:{show:{default:!1},choosenCompanyId:{default:null}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.fillData(),this.queryAllArea(),this.queryAllShop())}},data:function(){var e=this;return{loading:!1,stripeTable:!0,showWin:!1,selectData:[],allAreas:[],modal_loading:!1,queryForm:{areaId:null,shopName:null,manageExpenditure:"",otherExpenditure:""},datalist:[],columns:[{title:"大区",key:"areaName"},{title:"店名",key:"shopName"},{title:"操作",key:"action",align:"center",width:140,render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.select(n)}}},"添加")])}}]}}}},665:function(e,t,n){var a=n(666);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("9d0f35e2",a,!1)},666:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},667:function(e,t,n){"use strict";function a(e){u||n(668)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(514),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var l=n(670),s=n.n(l),u=!1,c=n(4),p=a,d=c(o.a,s.a,!1,p,null,null);d.options.__file="src/views/profitManage/profitQuery.vue",t.default=d.exports},668:function(e,t,n){var a=n(669);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("7d0f335e",a,!1)},669:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"queryContract"},[n("Modal",{attrs:{title:"查询条件",closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(t){e.showWin=t},expression:"showWin"}},[n("Form",{ref:"queryForm",attrs:{model:e.queryContractForm,"label-width":80,"label-position":"left"}},[n("Row",[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"大区：",prop:"areaId"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true"},on:{"on-change":e.changeArea},model:{value:e.queryForm.areaId,callback:function(t){e.$set(e.queryForm,"areaId",t)},expression:"queryForm.areaId"}},e._l(e.allAreas,function(t){return n("Option",{key:t.areaId,attrs:{value:t.areaId}},[e._v(e._s(t.areaName))])}))],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"店名：",prop:"shopId"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true"},model:{value:e.queryForm.shopId,callback:function(t){e.$set(e.queryForm,"shopId",t)},expression:"queryForm.shopId"}},e._l(e.allShops,function(t){return n("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.shopName))])}))],1)])],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary"},on:{click:e.sure}},[e._v("确定")])],1)],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o},671:function(e,t,n){"use strict";function a(e){u||n(672)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(515),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var l=n(674),s=n.n(l),u=!1,c=n(4),p=a,d=c(o.a,s.a,!1,p,null,null);d.options.__file="src/views/profitManage/profitCheck.vue",t.default=d.exports},672:function(e,t,n){var a=n(673);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("2e61eaaa",a,!1)},673:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"queryContract"},[n("Modal",{attrs:{title:"利润核对",closable:!1,width:"400px","mask-closable":!1},model:{value:e.showWin,callback:function(t){e.showWin=t},expression:"showWin"}},[n("Form",{ref:"queryForm",attrs:{rules:e.rules,model:e.queryForm,"label-width":100,"label-position":"left"}},[n("Row",[n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"利润：",prop:"profitCheck"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[e.isEditing?e._e():n("span",[e._v(e._s(e.queryForm.profitCheck))]),e._v(" "),e.isEditing?n("Input",{attrs:{placeholder:"请输入利润"},model:{value:e.queryForm.profitCheck,callback:function(t){e.$set(e.queryForm,"profitCheck",t)},expression:"queryForm.profitCheck"}}):e._e()],1),e._v(" "),n("Button",{attrs:{type:"text",icon:e.adjustBtnIcon},on:{click:e.adjustBtnClicked}})],1)],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"调整原因：",prop:"changeReason"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入调整原因"},model:{value:e.queryForm.changeReason,callback:function(t){e.$set(e.queryForm,"changeReason",t)},expression:"queryForm.changeReason"}})],1)])],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",modal_loading:e.modal_loading},on:{click:e.sure}},[e._v("确定")])],1)],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o},675:function(e,t,n){"use strict";function a(e){u||n(676)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(516),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var l=n(678),s=n.n(l),u=!1,c=n(4),p=a,d=c(o.a,s.a,!1,p,null,null);d.options.__file="src/views/profitManage/profitBatchOut.vue",t.default=d.exports},676:function(e,t,n){var a=n(677);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("404e1a41",a,!1)},677:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"querySellerList"},[n("Modal",{attrs:{title:"批量设置支出",width:600,closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(t){e.showWin=t},expression:"showWin"}},[n("Form",{ref:"queryForm",attrs:{"label-width":80,"label-position":"left"}},[n("Row",[n("Col",{attrs:{span:"10"}},[n("FormItem",{attrs:{label:"大区：",prop:"areaId"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true"},on:{"on-change":e.changeArea},model:{value:e.queryForm.areaId,callback:function(t){e.$set(e.queryForm,"areaId",t)},expression:"queryForm.areaId"}},e._l(e.allAreas,function(t){return n("Option",{key:t.areaId,attrs:{value:t.areaId}},[e._v(e._s(t.areaName))])}))],1)])],1),e._v(" "),n("Col",{attrs:{span:"10"}},[n("FormItem",{attrs:{label:"店名：",prop:"shopName"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入店名"},model:{value:e.queryForm.shopName,callback:function(t){e.$set(e.queryForm,"shopName",t)},expression:"queryForm.shopName"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"3",offset:"1"}},[n("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:e.search}},[e._v("搜索")])],1)],1),e._v(" "),n("div",{staticStyle:{margin:"0px 0px 10px 0px"}},e._l(e.selectData,function(t){return n("Tag",{attrs:{type:"border",closable:""},on:{"on-close":function(n){e.remove(t)}}},[e._v(e._s(t.shopName))])})),e._v(" "),n("Table",{ref:"selection",attrs:{height:250,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist},on:{"on-selection-change":e.selectChange}}),e._v(" "),n("Row",{staticStyle:{margin:"20px 0px 0px 0px"}},[n("Col",{attrs:{span:"10"}},[n("FormItem",{attrs:{label:"管理费：",prop:"manageExpenditure"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入管理费"},model:{value:e.queryForm.manageExpenditure,callback:function(t){e.$set(e.queryForm,"manageExpenditure",t)},expression:"queryForm.manageExpenditure"}})],1)])],1),e._v(" "),n("Col",{attrs:{span:"12",offset:"2"}},[n("FormItem",{attrs:{label:"其他支出：",prop:"otherExpenditure"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入支出"},model:{value:e.queryForm.otherExpenditure,callback:function(t){e.$set(e.queryForm,"otherExpenditure",t)},expression:"queryForm.otherExpenditure"}})],1)])],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.modal_loading},on:{click:e.sure}},[e._v("确定")])],1)],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-page"},[n("Card",[n("Row",{staticClass:"operate-btns"},[n("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.choosenCompanyId,callback:function(t){e.choosenCompanyId=t},expression:"choosenCompanyId"}},e._l(e.companyList,function(t){return n("Option",{key:t.companyId,attrs:{value:t.companyId}},[e._v(e._s(t.companyName))])})),e._v(" "),n("DatePicker",{staticStyle:{width:"150px"},attrs:{type:"month",format:"yyyy-MM",placeholder:"请选择月份"},model:{value:e.queryForm.queryTime,callback:function(t){e.$set(e.queryForm,"queryTime",t)},expression:"queryForm.queryTime"}}),e._v(" "),n("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:e.refresh}},[e._v("刷新")]),e._v(" "),n("Button",{attrs:{type:"primary",icon:"android-add"},on:{click:e.add}},[e._v("批量设置支出")]),e._v(" "),n("Button",{attrs:{type:"primary",icon:"android-bar"},on:{click:e.filter}},[e._v("筛选")])],1),e._v(" "),n("Table",{ref:"selection",attrs:{height:400,loading:e.loading,stripe:e.stripeTable,width:"100%",border:"",columns:e.columns,data:e.datalist}}),e._v(" "),n("Page",{staticClass:"page-component",attrs:{current:e.pageNo,"show-total":"","page-size-opts":e.pageSizeOpts,total:e.total,"page-size":e.pageSize,"show-sizer":""},on:{"on-change":e.pageChanged,"on-page-size-change":e.pageSizeChanged}})],1),e._v(" "),n("ProfitQuery",{attrs:{show:e.showQueryWin,choosenCompanyId:e.choosenCompanyId},on:{sure:e.querySure,cancel:e.cancelQuery}}),e._v(" "),n("ProfitCheck",{attrs:{show:e.showCheckWin,params:e.checkParams},on:{sure:e.checkSure,cancel:e.cancelCheck}}),e._v(" "),n("ProfitBatchOut",{attrs:{show:e.showBatchOutWin,choosenCompanyId:e.choosenCompanyId},on:{sure:e.batchOutSure,cancel:e.cancelBatchOut}})],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o}});