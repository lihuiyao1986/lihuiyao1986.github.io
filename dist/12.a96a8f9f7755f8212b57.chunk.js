webpackJsonp([12],{439:function(e,n,t){"use strict";function o(e){l||t(576)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(488),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);var u=t(582),s=t.n(u),l=!1,d=t(4),c=o,f=d(r.a,s.a,!1,c,null,null);f.options.__file="src/views/sysSettings/accountManage.vue",n.default=f.exports},450:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(18),i=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default={login:function(e){return i.default.fetch("/user/login",e)},resetPwd:function(e){return i.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return i.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return i.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return i.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return i.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return i.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return i.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return i.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return i.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return i.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return i.default.fetch("/config/addEmployee",e)},addCompany:function(e){return i.default.fetch("/config/addCompany",e)},updateCompany:function(e){return i.default.fetch("/config/updateCompany",e)},addArea:function(e){return i.default.fetch("/config/addArea",e)},updateArea:function(e){return i.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return i.default.fetch("/config/queryAllShop",e)},addShop:function(e){return i.default.fetch("/config/addShop",e)},updateShop:function(e){return i.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return i.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return i.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return i.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return i.default.fetch("/business/transferAgreement",e)},updateAgreement:function(e){return i.default.fetch("/business/updateAgreement",e)},queryLeaderAchieve:function(e){return i.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return i.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return i.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return i.default.fetch("/business/querySalary",e)},updateSalary:function(e){return i.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return i.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return i.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return i.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return i.default.fetch("/config/updateShopByIds",e)}}},451:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};o.info=function(e,n,t,o){e.$Notice.info({title:t||"温馨提示",desc:n,duration:o||"1.5"})},o.success=function(e,n,t,o){e.$Notice.success({title:t||"成功提示",desc:n,duration:o||"1.5"})},o.warning=function(e,n,t,o){e.$Notice.warning({title:t||"警告提示",desc:n,duration:o||"1.5"})},o.error=function(e,n,t,o){e.$Notice.error({title:t||"错误提示",desc:n,duration:o||"1.5"})},o.confirm=function(e,n,t,o,i,r){e.$Modal.confirm({title:t,loading:n,content:o,onOk:function(){i&&i()},onCancel:function(){r&&r()}})},n.default=o},488:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(451),r=o(i),a=t(450),u=o(a),s=t(578),l=o(s);n.default={name:"accountManage",components:{ModifyPwd:l.default},watch:{$route:"init"},mounted:function(){this.queryCompany()},methods:{init:function(){this.queryCompany()},queryCompany:function(){var e=this;u.default.queryAllCompany().then(function(n){e.companyList=n.result,e.companyList.length>0&&(e.choosenCompanyId=e.companyList[0].companyId,e.queryData())}).catch(function(n){r.default.error(e,n.message+"["+n.responseCode+"]")})},queryData:function(){var e=this;this.loading=!0;var n={choosenCompanyId:this.choosenCompanyId};u.default.queryAllUser(n).then(function(n){e.datalist=n.result,e.loading=!1}).catch(function(n){e.loading=!1,r.default.error(e,n.message+"["+n.responseCode+"]")})},refresh:function(){this.queryData()},changeCompany:function(e){this.choosenCompanyId=e.value,this.queryData()},doCancel:function(){this.showEditWin=!1},doEdit:function(e){this.showEditWin=!1},edit:function(e){this.modifyData=e.row,this.showEditWin=!0}},data:function(){var e=this;return{stripeTable:!0,loading:!1,showEditWin:!1,companyList:[],choosenCompanyId:"",modifyData:{},datalist:[],columns:[{title:"用户名",key:"userName"},{title:"用户角色",key:"role",render:function(e,n){return e("div","1"==n.row.roleId?"管理员":"财务")}},{title:"操作",key:"action",align:"center",width:140,render:function(n,t){return n("div",[n("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.edit(t)}}},"修改密码")])}}]}}}},489:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(451),r=o(i),a=t(450),u=o(a);n.default={name:"modifyPwd",data:function(){return{showWin:!1,modal_loading:!1,rules:{password:[{required:!0,message:"请输入新密码",trigger:"blur"}]},modifyForm:{userName:"",role:"",roleId:"",password:""}}},methods:{modify:function(){var e=this;this.$refs.modifyForm.validate(function(n){n&&(e.modal_loading=!0,u.default.resetPwd({userName:e.modifyForm.userName,pwd:e.modifyForm.password}).then(function(n){e.modal_loading=!1,r.default.success(e,"恭喜你密码修改成功!"),e.$emit("modify",e.modify)}).catch(function(n){e.modal_loading=!1,r.default.error(e,n.message+"["+n.responseCode+"]")}))})},cancel:function(){this.$emit("cancel")},fillData:function(){this.modifyForm.userName=this.params.userName||"",this.modifyForm.role="1"==this.params.roleId?"管理员":"财务",this.modifyForm.roleId=this.params.roleId||""},clearForm:function(){this.modifyForm.userName="",this.modifyForm.role="",this.modifyForm.roleId="",this.modifyForm.password=""}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.fillData())}},props:{show:{default:!1},params:Object}}},576:function(e,n,t){var o=t(577);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(24)("6e403738",o,!1)},577:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},578:function(e,n,t){"use strict";function o(e){l||t(579)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(489),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);var u=t(581),s=t.n(u),l=!1,d=t(4),c=o,f=d(r.a,s.a,!1,c,null,null);f.options.__file="src/views/sysSettings/modifyPwd.vue",n.default=f.exports},579:function(e,n,t){var o=t(580);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(24)("1b49810c",o,!1)},580:function(e,n,t){n=e.exports=t(23)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},581:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Modal",{attrs:{width:400,title:"修改密码",closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(n){e.showWin=n},expression:"showWin"}},[t("Form",{ref:"modifyForm",attrs:{model:e.modifyForm,rules:e.rules,"label-width":100,"label-position":"left"}},[t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"用户名：",prop:"userName"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("span",[e._v(e._s(e.modifyForm.userName))])])])],1)],1),e._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"角   色：",prop:"roleId"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("span",[e._v(e._s(e.modifyForm.role))])])])],1)],1),e._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"新密码：",prop:"password"}},[t("div",{staticStyle:{display:"inline-block",width:"150px"}},[t("Input",{staticStyle:{display:"inline-block",width:"130px"},attrs:{type:"password",placeholder:"请设置新密码"},model:{value:e.modifyForm.password,callback:function(n){e.$set(e.modifyForm,"password",n)},expression:"modifyForm.password"}})],1)])],1)],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("Button",{attrs:{type:"primary",loading:e.modal_loading},on:{click:e.modify}},[e._v("修改")])],1)],1)],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};n.default=r},582:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"index-page"},[t("Card",[t("Row",{staticClass:"operate-btns"},[t("Select",{staticStyle:{width:"150px"},attrs:{"label-in-value":"true"},on:{"on-change":e.changeCompany},model:{value:e.choosenCompanyId,callback:function(n){e.choosenCompanyId=n},expression:"choosenCompanyId"}},e._l(e.companyList,function(n){return t("Option",{key:n.companyId,attrs:{value:n.companyId}},[e._v(e._s(n.companyName))])})),e._v(" "),t("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:e.refresh}},[e._v("刷新")])],1),e._v(" "),t("Table",{ref:"selection",attrs:{height:400,loading:e.loading,stripe:e.stripeTable,size:"large",width:"100%",border:"",columns:e.columns,data:e.datalist}})],1),e._v(" "),t("ModifyPwd",{attrs:{show:e.showEditWin,params:e.modifyData},on:{modify:e.doEdit,cancel:e.doCancel}})],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};n.default=r}});