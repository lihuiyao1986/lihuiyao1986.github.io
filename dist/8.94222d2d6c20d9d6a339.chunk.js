webpackJsonp([8],{441:function(n,e,t){"use strict";function o(n){s||t(589)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(492),i=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var d=t(599),l=t.n(d),s=!1,u=t(4),c=o,f=u(i.a,l.a,!1,c,null,null);f.options.__file="src/views/sysSettings/companyManage.vue",e.default=f.exports},450:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(18),a=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default={login:function(n){return a.default.fetch("/user/login",n)},resetPwd:function(n){return a.default.fetch("/user/resetPwd",n)},queryAllUser:function(n){return a.default.fetch("/user/queryAllUser",n)},queryAllCommissionCal:function(n){return a.default.fetch("/config/queryAllCommissionCal",n)},updateAllCommissionCal:function(n){return a.default.fetch("/config/updateAllCommissionCal",n)},queryHouseRes:function(n){return a.default.fetch("/config/queryHouseRes",n)},updateHouseRes:function(n){return a.default.fetch("/config/updateHouseRes",n)},queryAllCompany:function(n){return a.default.fetch("/config/queryAllCompany",n)},queryAllArea:function(n){return a.default.fetch("/config/queryAllArea",n)},queryAllEmployee:function(n){return a.default.fetch("/config/queryAllEmployee",n)},updateEmployee:function(n){return a.default.fetch("/config/updateEmployee",n)},addEmployee:function(n){return a.default.fetch("/config/addEmployee",n)},addCompany:function(n){return a.default.fetch("/config/addCompany",n)},updateCompany:function(n){return a.default.fetch("/config/updateCompany",n)},addArea:function(n){return a.default.fetch("/config/addArea",n)},updateArea:function(n){return a.default.fetch("/config/updateArea",n)},queryAllShop:function(n){return a.default.fetch("/config/queryAllShop",n)},addShop:function(n){return a.default.fetch("/config/addShop",n)},updateShop:function(n){return a.default.fetch("/config/updateShop",n)},queryAllAgreement:function(n){return a.default.fetch("/business/queryAllAgreement",n)},insertAgreement:function(n){return a.default.fetch("/business/insertAgreement",n)},balanceAgreement:function(n){return a.default.fetch("/business/balanceAgreement",n)},transferAgreement:function(n){return a.default.fetch("/business/transferAgreement",n)},queryLeaderAchieve:function(n){return a.default.fetch("/business/queryLeaderAchieve",n)},querySalemanAchieve:function(n){return a.default.fetch("/business/querySalemanAchieve",n)},queryMajordomoAchieve:function(n){return a.default.fetch("/business/queryMajordomoAchieve",n)},querySalary:function(n){return a.default.fetch("/business/querySalary",n)},updateSalary:function(n){return a.default.fetch("/business/updateSalary",n)},updateEmployeeByIds:function(n){return a.default.fetch("/config/updateEmployeeByIds",n)},queryProfit:function(n){return a.default.fetch("/business/queryProfit",n)},updateProfit:function(n){return a.default.fetch("/business/updateProfit",n)},updateShopByIds:function(n){return a.default.fetch("/config/updateShopByIds",n)}}},451:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.info=function(n,e,t,o){n.$Notice.info({title:t||"温馨提示",desc:e,duration:o||"1.5"})},o.success=function(n,e,t,o){n.$Notice.success({title:t||"成功提示",desc:e,duration:o||"1.5"})},o.warning=function(n,e,t,o){n.$Notice.warning({title:t||"警告提示",desc:e,duration:o||"1.5"})},o.error=function(n,e,t,o){n.$Notice.error({title:t||"错误提示",desc:e,duration:o||"1.5"})},o.confirm=function(n,e,t,o,a,i){n.$Modal.confirm({title:t,loading:e,content:o,onOk:function(){a&&a()},onCancel:function(){i&&i()}})},e.default=o},492:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(451),i=o(a),r=t(450),d=o(r),l=t(591),s=o(l),u=t(595),c=o(u);e.default={name:"公司管理",components:{AddCompany:s.default,ModifyCompany:c.default},mounted:function(){this.queryCompany()},watch:{$route:"init"},methods:{refresh:function(){this.queryCompany()},queryCompany:function(){var n=this;this.loading=!0,d.default.queryAllCompany().then(function(e){n.datalist=e.result,n.loading=!1}).catch(function(e){n.loading=!1,i.default.error(n,e.message+"["+e.responseCode+"]")})},add:function(){this.showAddWin=!0},doModifyCancel:function(){this.showModifyWin=!1},doModify:function(n){this.showModifyWin=!1,this.queryCompany()},doAdd:function(n){this.showAddWin=!1,this.queryCompany()},doAddCancel:function(){this.showAddWin=!1},doCancel:function(){this.showEditWin=!1},edit:function(n){this.modifyData=n.row,this.showModifyWin=!0},remove:function(n){var e=this;i.default.confirm(this,!0,"删除提示","您确定需要删除该条记录吗？",function(){d.default.updateCompany({choosenCompanyId:n.row.companyId,state:"2"}).then(function(n){i.default.success(e,"删除公司成功"),e.queryCompany(),e.$Modal.remove()}).catch(function(n){e.$Modal.remove(),i.default.error(e,n.message+"["+n.responseCode+"]")})})}},data:function(){var n=this;return{stripeTable:!0,loading:!1,showAddWin:!1,showModifyWin:!1,modifyData:{},datalist:[],columns:[{title:"公司编号",key:"companyId"},{title:"公司名称",key:"companyName"},{title:"操作",key:"action",align:"center",width:140,render:function(e,t){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){n.edit(t)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){n.remove(t)}}},"删除")])}}]}}}},493:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(451),i=o(a),r=t(450),d=o(r);e.default={data:function(){return{showWin:!1,modal_loading:!1,addForm:{companyName:""},rules:{companyName:[{required:!0,message:"请输入公司名称",trigger:"blur"}]}}},methods:{add:function(){var n=this;this.$refs.addForm.validate(function(e){e&&(n.modal_loading=!0,d.default.addCompany({companyName:n.addForm.companyName}).then(function(e){n.modal_loading=!1,n.$emit("add",n.addForm),i.default.success(n,"新增公司成功")}).catch(function(e){n.modal_loading=!1,i.default.error(n,e.message+"["+e.responseCode+"]")}))})},cancel:function(){this.$emit("cancel")},clearForm:function(){this.addForm.companyName=""}},watch:{show:function(n){this.showWin=n,n&&this.clearForm()}},props:{show:{default:!1}}}},494:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(451),i=o(a),r=t(450),d=o(r);e.default={data:function(){return{showWin:!1,modal_loading:!1,modifyForm:{companyId:"",companyName:""},rules:{companyName:[{required:!0,message:"请输入公司名称",trigger:"blur"}]}}},methods:{modify:function(){var n=this;this.$refs.modifyForm.validate(function(e){e&&(n.modal_loading=!0,d.default.updateCompany({choosenCompanyId:n.modifyForm.companyId,companyName:n.modifyForm.companyName}).then(function(e){n.modal_loading=!1,n.$emit("modify",n.modifyForm),i.default.success(n,"修改公司成功")}).catch(function(e){n.modal_loading=!1,i.default.error(n,e.message+"["+e.responseCode+"]")}))})},cancel:function(){this.$emit("cancel")},fillData:function(){this.modifyForm.companyId=this.params.companyId,this.modifyForm.companyName=this.params.companyName},clearForm:function(){this.modifyForm.companyId="",this.modifyForm.companyName="",this.modal_loading=!1}},watch:{show:function(n){this.showWin=n,n&&(this.clearForm(),this.fillData())}},props:{show:{default:!1},params:Object}}},589:function(n,e,t){var o=t(590);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(24)("d3204e74",o,!1)},590:function(n,e,t){e=n.exports=t(23)(!1),e.push([n.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},591:function(n,e,t){"use strict";function o(n){s||t(592)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(493),i=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var d=t(594),l=t.n(d),s=!1,u=t(4),c=o,f=u(i.a,l.a,!1,c,null,null);f.options.__file="src/views/sysSettings/addCompany.vue",e.default=f.exports},592:function(n,e,t){var o=t(593);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(24)("e46f4c0a",o,!1)},593:function(n,e,t){e=n.exports=t(23)(!1),e.push([n.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},594:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"add"},[t("Modal",{attrs:{title:"新增公司",closable:!1,"mask-closable":!1},model:{value:n.showWin,callback:function(e){n.showWin=e},expression:"showWin"}},[t("Form",{ref:"addForm",attrs:{model:n.addForm,rules:n.rules,"label-width":90,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"公司名称：",prop:"companyName"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{attrs:{placeholder:"请输入公司名称"},model:{value:n.addForm.companyName,callback:function(e){n.$set(n.addForm,"companyName",e)},expression:"addForm.companyName"}})],1)])],1)],1)],1),n._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"goast"},on:{click:n.cancel}},[n._v("取消")]),n._v(" "),t("Button",{attrs:{type:"primary",loading:n.modal_loading},on:{click:n.add}},[n._v("新增")])],1)],1)],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.default=i},595:function(n,e,t){"use strict";function o(n){s||t(596)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(494),i=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var d=t(598),l=t.n(d),s=!1,u=t(4),c=o,f=u(i.a,l.a,!1,c,null,null);f.options.__file="src/views/sysSettings/modifyCompany.vue",e.default=f.exports},596:function(n,e,t){var o=t(597);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(24)("f01dd974",o,!1)},597:function(n,e,t){e=n.exports=t(23)(!1),e.push([n.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},598:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"modifyForm"},[t("Modal",{attrs:{title:"修改公司信息",closable:!1,"mask-closable":!1},model:{value:n.showWin,callback:function(e){n.showWin=e},expression:"showWin"}},[t("Form",{ref:"modifyForm",attrs:{model:n.modifyForm,rules:n.rules,"label-width":100,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"公司编码：",prop:"companyId"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("span",[n._v(n._s(n.modifyForm.companyId))])])])],1)],1),n._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"公司名称：",prop:"companyName"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{attrs:{placeholder:"请设置公司名称"},model:{value:n.modifyForm.companyName,callback:function(e){n.$set(n.modifyForm,"companyName",e)},expression:"modifyForm.companyName"}})],1)])],1)],1)],1),n._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"goast"},on:{click:n.cancel}},[n._v("取消")]),n._v(" "),t("Button",{attrs:{type:"primary",loading:n.modal_loading},on:{click:n.modify}},[n._v("修改")])],1)],1)],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.default=i},599:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"index-page"},[t("Card",[t("Row",{staticClass:"operate-btns"},[t("Button",{attrs:{type:"primary",icon:"android-add"},on:{click:n.add}},[n._v("新增")]),n._v(" "),t("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:n.refresh}},[n._v("刷新")])],1),n._v(" "),t("Table",{ref:"selection",attrs:{height:400,loading:n.loading,stripe:n.stripeTable,size:"large",width:"100%",border:"",columns:n.columns,data:n.datalist}})],1),n._v(" "),t("AddCompany",{attrs:{show:n.showAddWin},on:{add:n.doAdd,cancel:n.doAddCancel}}),n._v(" "),t("ModifyCompany",{attrs:{show:n.showModifyWin,params:n.modifyData},on:{modify:n.doModify,cancel:n.doModifyCancel}})],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.default=i}});