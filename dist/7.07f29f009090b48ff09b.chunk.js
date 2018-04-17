webpackJsonp([7],{439:function(t,n,e){"use strict";function a(t){l||e(580)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(489),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);var r=e(590),d=e.n(r),l=!1,u=e(4),p=a,c=u(o.a,d.a,!1,p,null,null);c.options.__file="src/views/sysSettings/bonusManage.vue",n.default=c.exports},451:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(18),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={login:function(t){return i.default.fetch("/user/login",t)},resetPwd:function(t){return i.default.fetch("/user/resetPwd",t)},queryAllUser:function(t){return i.default.fetch("/user/queryAllUser",t)},queryAllCommissionCal:function(t){return i.default.fetch("/config/queryAllCommissionCal",t)},updateAllCommissionCal:function(t){return i.default.fetch("/config/updateAllCommissionCal",t)},queryHouseRes:function(t){return i.default.fetch("/config/queryHouseRes",t)},updateHouseRes:function(t){return i.default.fetch("/config/updateHouseRes",t)},queryAllCompany:function(t){return i.default.fetch("/config/queryAllCompany",t)},queryAllArea:function(t){return i.default.fetch("/config/queryAllArea",t)},queryAllEmployee:function(t){return i.default.fetch("/config/queryAllEmployee",t)},updateEmployee:function(t){return i.default.fetch("/config/updateEmployee",t)},addEmployee:function(t){return i.default.fetch("/config/addEmployee",t)},addCompany:function(t){return i.default.fetch("/config/addCompany",t)},updateCompany:function(t){return i.default.fetch("/config/updateCompany",t)},addArea:function(t){return i.default.fetch("/config/addArea",t)},updateArea:function(t){return i.default.fetch("/config/updateArea",t)},queryAllShop:function(t){return i.default.fetch("/config/queryAllShop",t)},addShop:function(t){return i.default.fetch("/config/addShop",t)},updateShop:function(t){return i.default.fetch("/config/updateShop",t)},queryAllAgreement:function(t){return i.default.fetch("/business/queryAllAgreement",t)},insertAgreement:function(t){return i.default.fetch("/business/insertAgreement",t)},balanceAgreement:function(t){return i.default.fetch("/business/balanceAgreement",t)},transferAgreement:function(t){return i.default.fetch("/business/transferAgreement",t)},updateAgreement:function(t){return i.default.fetch("/business/updateAgreement",t)},queryLeaderAchieve:function(t){return i.default.fetch("/business/queryLeaderAchieve",t)},querySalemanAchieve:function(t){return i.default.fetch("/business/querySalemanAchieve",t)},queryMajordomoAchieve:function(t){return i.default.fetch("/business/queryMajordomoAchieve",t)},querySalary:function(t){return i.default.fetch("/business/querySalary",t)},updateSalary:function(t){return i.default.fetch("/business/updateSalary",t)},updateEmployeeByIds:function(t){return i.default.fetch("/config/updateEmployeeByIds",t)},queryProfit:function(t){return i.default.fetch("/business/queryProfit",t)},updateProfit:function(t){return i.default.fetch("/business/updateProfit",t)},updateShopByIds:function(t){return i.default.fetch("/config/updateShopByIds",t)},queryReceiveCommission:function(t){return i.default.fetch("/business/queryReceiveCommission",t)},queryAllReceiveCommission:function(t){return i.default.fetch("/business/queryAllReceiveCommission",t)},updateReceiveCommission:function(t){return i.default.fetch("/business/updateReceiveCommission",t)},addReceiveCommission:function(t){return i.default.fetch("/business/addReceiveCommission",t)}}},452:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={};a.info=function(t,n,e,a){t.$Notice.info({title:e||"温馨提示",desc:n,duration:a||"1.5"})},a.success=function(t,n,e,a){t.$Notice.success({title:e||"成功提示",desc:n,duration:a||"1.5"})},a.warning=function(t,n,e,a){t.$Notice.warning({title:e||"警告提示",desc:n,duration:a||"1.5"})},a.error=function(t,n,e,a){t.$Notice.error({title:e||"错误提示",desc:n,duration:a||"1.5"})},a.confirm=function(t,n,e,a,i,o){t.$Modal.confirm({title:e,loading:n,content:a,onOk:function(){i&&i()},onCancel:function(){o&&o()}})},n.default=a},489:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(452),o=a(i),s=e(451),r=a(s),d=e(582),l=a(d),u=e(586),p=a(u);n.default={name:"bonusManage",components:{BonusAdd:l.default,BonusModify:p.default},data:function(){var t=this;return{stripeTable:!0,showAddWin:!1,loading:!1,showModifyWin:!1,columns:[{title:"开始",key:"numStart"},{title:"结束",key:"numEnd"},{title:"提成比例",key:"commissionRate"},{title:"提成金额",key:"commissionNum"},{title:"操作",key:"action",align:"center",width:140,render:function(n,e){return n("div",[n("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(e)}}},"修改"),n("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(e)}}},"删除")])}}],datalist:[],choosenCompanyId:"",choosenCompanyName:"",type:"1",typeStr:"业务员(无底薪)",companyList:[],bonusModifyData:{},bonusData:{}}},watch:{$route:"init"},mounted:function(){this.queryCompany()},methods:{cancelModifyBonus:function(){this.showModifyWin=!1},modfiyBonus:function(){this.showModifyWin=!1,this.queryData()},init:function(){this.queryCompany()},queryCompany:function(){var t=this;r.default.queryAllCompany().then(function(n){t.companyList=n.result,t.companyList.length>0&&(t.choosenCompanyId=t.companyList[0].companyId,t.choosenCompanyName=t.companyList[0].companyName,t.queryData())}).catch(function(n){o.default.error(t,n.message+"["+n.responseCode+"]")})},queryData:function(){var t=this;this.loading=!0,r.default.queryAllCommissionCal({choosenCompanyId:this.choosenCompanyId,type:this.type}).then(function(n){t.loading=!1,t.datalist=n.result}).catch(function(n){t.loading=!1,o.default.error(t,n.message+"["+n.responseCode+"]")})},changeCompany:function(t){t&&t.label.length>0&&(this.choosenCompanyId=t.value,this.choosenCompanyName=t.label,this.queryData())},changeType:function(t){this.type=t.value,this.typeStr=t.label,this.queryData()},edit:function(t){this.bonusModifyData={type:this.type,companyId:this.choosenCompanyId,companyName:this.choosenCompanyName,typeStr:this.typeStr,numEnd:t.row.numEnd,numStart:t.row.numStart,sort:t.row.sort,commissionRate:t.row.commissionRate,commissionNum:t.row.commissionNum},this.showModifyWin=!0},remove:function(t){var n=this;if(t.row.sort!=this.datalist[this.datalist.length-1].sort)return void o.default.error(this,"该条记录不是最后一个区间，不能删除!");o.default.confirm(this,!0,"删除提示","您确定需要删除该条记录吗？",function(){for(var e=[],a=0;a<=n.datalist.length-1;a++)if(n.datalist[a].sort!=t.row.sort){var i={numStart:n.datalist[a].numStart,numEnd:n.datalist[a].numEnd,commissionRate:n.datalist[a].commissionRate,commissionNum:n.datalist[a].commissionNum,type:n.datalist[a].type,commissionType:n.datalist[a].commissionType,sort:n.datalist[a].sort,companyId:n.datalist[a].companyId};e.push(i)}var s={choosenCompanyId:n.choosenCompanyId,type:n.type,commissionCalList:e};r.default.updateAllCommissionCal(s).then(function(t){o.default.success(n,"删除记录成功"),n.queryData(),n.$Modal.remove()}).catch(function(t){n.$Modal.remove(),o.default.error(n,t.message+"["+t.responseCode+"]")})})},refresh:function(){this.queryData()},add:function(){if("1"==this.type||"2"==this.type||"3"==this.type||"4"==this.type||"10"==this.type){if(this.datalist.length>0){var t=this.datalist[this.datalist.length-1];if("0"==t.numEnd)return void o.default.error(this,"您已经设置了最大的提成区间")}}else if(this.datalist.length>0)return void o.default.error(this,"您已经设置了提成区间");this.bonusData={type:this.type,companyId:this.choosenCompanyId,companyName:this.choosenCompanyName,typeStr:this.typeStr},this.showAddWin=!0},addBonus:function(t){this.showAddWin=!1,this.queryData()},cancelAddBonus:function(){this.showAddWin=!1}}}},490:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(452),o=a(i),s=e(451),r=a(s);n.default={data:function(){return{showWin:!1,modal_loading:!1,maxInterVal:!1,companyName:"",disableStart:!1,companyId:"",type:"",typeStr:"",bonusTypes:[],addForm:{numStart:"",numEnd:"",bonusType:"提成金额",tcvalue:""}}},computed:{showNum:function(){return"1"==this.type||"2"==this.type||"3"==this.type||"4"==this.type||"10"==this.type},unit:function(){return"提成金额"==this.addForm.bonusType?"元":"%"}},methods:{add:function(){for(var t=this,n=[],e=1,a=0;a<=this.datalist.length-1;a++){var i={numStart:this.datalist[a].numStart,numEnd:this.datalist[a].numEnd,commissionRate:this.datalist[a].commissionRate,commissionNum:this.datalist[a].commissionNum,type:this.type,sort:this.sort,commissionType:this.datalist[a].commissionType,companyId:this.companyId};n.push(i)}this.datalist.length>0&&(e=this.datalist[this.datalist.length-1].sort+1);var s=0,d=0,l=this.addForm.numStart,u=this.addForm.numEnd;if(this.showNum){if(l.length<=0)return void o.default.error(this,"请输入起始业绩区间");if(this.maxInterVal)u=0;else{if(u.length<=0||u<=0)return void o.default.error(this,"请输入截止业绩区间");if(u<=l)return void o.default.error(this,"起始业绩区间大于等于截止业绩区间")}}var p="";"提成金额"==this.addForm.bonusType?(s=0,d=this.addForm.tcvalue||"0",p="1"):(d=0,p="0",s=parseFloat(this.addForm.tcvalue||"0")/100),n.push({numStart:this.addForm.numStart,numEnd:u,commissionRate:s,commissionNum:d,type:this.type,commissionType:p,companyId:this.companyId,sort:e});var c={choosenCompanyId:this.companyId,type:this.type,commissionCalList:n};this.modal_loading=!0,r.default.updateAllCommissionCal(c).then(function(n){t.modal_loading=!1,t.$emit("add",t.addForm)}).catch(function(n){t.modal_loading=!1,o.default.error(t,n.message+"["+n.responseCode+"]")})},cancel:function(){this.$emit("cancel")},fillData:function(){if(this.companyName=this.params.companyName,this.typeStr=this.params.typeStr,this.type=this.params.type,this.companyId=this.params.companyId,this.maxInterVal=!1,this.datalist.length>0){var t=this.datalist[this.datalist.length-1];this.addForm.bonusType="0"==t.commissionRate?"提成金额":"提成比例",this.bonusTypes.push(this.addForm.bonusType),this.disableStart=!0,this.addForm.numStart=t.numEnd+1}else this.addForm.bonusType="提成比例",this.bonusTypes.push("提成比例"),this.bonusTypes.push("提成金额")},clearForm:function(){this.addForm.numStart="",this.addForm.numEnd="",this.addForm.tcvalue="",this.disableStart=!1,this.bonusTypes=[]}},watch:{show:function(t){this.showWin=t,t&&(this.clearForm(),this.fillData())}},props:{show:{default:!1},params:Object,datalist:Object}}},491:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(452),o=a(i),s=e(451),r=a(s);n.default={data:function(){return{showWin:!1,modal_loading:!1,maxInterVal:!1,companyName:"",disableStart:!1,companyId:"",type:"",typeStr:"",bonusTypes:[],addForm:{numStart:"",numEnd:"",bonusType:"提成金额",tcvalue:""}}},computed:{showNum:function(){return"1"==this.type||"2"==this.type||"3"==this.type||"4"==this.type||"10"==this.type},unit:function(){return"提成金额"==this.addForm.bonusType?"元":"%"}},methods:{add:function(){var t=this,n=[];if(this.addForm.tcvalue.length<=0||"0"==this.addForm.tcvalue)return void o.default.error(this,"请设置"+this.addForm.bonusType);for(var e=0;e<=this.datalist.length-1;e++){var a=this.datalist[e].commissionRate,i=this.datalist[e].commissionNum,s=this.datalist[e].commissionType;this.params.sort==this.datalist[e].sort&&("提成金额"==this.addForm.bonusType?i=this.addForm.tcvalue:a=parseFloat(this.addForm.tcvalue||"0")/100);var d={numStart:this.datalist[e].numStart,numEnd:this.datalist[e].numEnd,commissionRate:a,commissionType:s,commissionNum:i,type:this.datalist[e].type,sort:this.datalist[e].sort,companyId:this.datalist[e].companyId};n.push(d)}var l={choosenCompanyId:this.companyId,type:this.type,commissionCalList:n};this.modal_loading=!0,r.default.updateAllCommissionCal(l).then(function(n){t.modal_loading=!1,t.$emit("add",t.addForm)}).catch(function(n){t.modal_loading=!1,o.default.error(t,n.message+"["+n.responseCode+"]")})},cancel:function(){this.$emit("cancel")},fillData:function(){if(this.companyName=this.params.companyName,this.typeStr=this.params.typeStr,this.type=this.params.type,this.addForm.numStart=this.params.numStart,this.addForm.numEnd=this.params.numEnd,this.companyId=this.params.companyId,"1"==this.params.commissionType?this.addForm.tcvalue=this.params.commissionNum||"0":this.addForm.tcvalue=(100*parseFloat(this.params.commissionRate||"0")).toFixed(0),this.datalist.length>0){var t=this.datalist[this.datalist.length-1];this.addForm.bonusType="1"==t.commissionType?"提成金额":"提成比例",this.bonusTypes.push(this.addForm.bonusType),this.maxInterVal=this.datalist[this.datalist.length-1].numEnd.length<=0||"0"==this.datalist[this.datalist.length-1].numEnd}else this.addForm.bonusType="提成比例",this.bonusTypes.push("提成比例"),this.bonusTypes.push("提成金额"),this.maxInterVal=!1},clearForm:function(){this.addForm.numStart="",this.addForm.numEnd="",this.addForm.tcvalue="",this.disableStart=!1,this.bonusTypes=[]}},watch:{show:function(t){this.showWin=t,t&&(this.clearForm(),this.fillData())}},props:{show:{default:!1},params:Object,datalist:Object}}},580:function(t,n,e){var a=e(581);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(24)("3d62e338",a,!1)},581:function(t,n,e){n=t.exports=e(23)(!1),n.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},582:function(t,n,e){"use strict";function a(t){l||e(583)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(490),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);var r=e(585),d=e.n(r),l=!1,u=e(4),p=a,c=u(o.a,d.a,!1,p,null,null);c.options.__file="src/views/sysSettings/bonusAdd.vue",n.default=c.exports},583:function(t,n,e){var a=e(584);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(24)("542f5864",a,!1)},584:function(t,n,e){n=t.exports=e(23)(!1),n.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},585:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"addBonus"},[e("Modal",{attrs:{title:"新增提成",closable:!1,"mask-closable":!1},model:{value:t.showWin,callback:function(n){t.showWin=n},expression:"showWin"}},[e("Form",{ref:"addForm",attrs:{model:t.addForm,"label-width":80,"label-position":"left"}},[e("Row",[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"所属公司：",prop:"companyId"}},[e("div",{staticStyle:{display:"inline-block",width:"150px"}},[e("span",[t._v(t._s(t.companyName))])])])],1),t._v(" "),e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"主体类型：",prop:"type"}},[e("div",{staticStyle:{display:"inline-block",width:"150px"}},[e("span",[t._v(t._s(t.typeStr))])])])],1)],1),t._v(" "),t.showNum?e("Row",[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"业绩区间：",prop:"numStart"}},[e("div",{staticStyle:{display:"inline-block",width:"120px"}},[e("Input",{attrs:{disabled:t.disableStart,placeholder:"请输入开始业绩"},model:{value:t.addForm.numStart,callback:function(n){t.$set(t.addForm,"numStart",n)},expression:"addForm.numStart"}})],1),t._v(" "),t.maxInterVal?t._e():e("div",{staticStyle:{display:"inline-block"}},[t._v("\n            ~\n            "),e("div",{staticStyle:{display:"inline-block",width:"120px"}},[e("Input",{attrs:{placeholder:"请输入截止业绩"},model:{value:t.addForm.numEnd,callback:function(n){t.$set(t.addForm,"numEnd",n)},expression:"addForm.numEnd"}})],1)]),t._v(" "),t.maxInterVal?e("div",{staticStyle:{display:"inline-block","margin-left":"10px"}},[t._v("以上")]):t._e(),t._v(" "),e("div",{staticStyle:{display:"inline-block","margin-left":"20px"}},[e("Checkbox",{model:{value:t.maxInterVal,callback:function(n){t.maxInterVal=n},expression:"maxInterVal"}},[t._v("最大区间")])],1)])],1)],1):t._e(),t._v(" "),e("Row",[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"业绩类型:",prop:"bonusType"}},[e("RadioGroup",{model:{value:t.addForm.bonusType,callback:function(n){t.$set(t.addForm,"bonusType",n)},expression:"addForm.bonusType"}},t._l(t.bonusTypes,function(t){return e("Radio",{key:t,attrs:{label:t}})}))],1)],1)],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"业绩提成：",prop:"job"}},[e("div",{staticStyle:{display:"inline-block",width:"150px"}},[e("Input",{attrs:{placeholder:"请输入提成"},model:{value:t.addForm.tcvalue,callback:function(n){t.$set(t.addForm,"tcvalue",n)},expression:"addForm.tcvalue"}})],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.unit))])])],1)],1)],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"goast"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("Button",{attrs:{type:"primary",loading:t.modal_loading},on:{click:t.add}},[t._v("新增")])],1)],1)],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};n.default=o},586:function(t,n,e){"use strict";function a(t){l||e(587)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(491),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);var r=e(589),d=e.n(r),l=!1,u=e(4),p=a,c=u(o.a,d.a,!1,p,null,null);c.options.__file="src/views/sysSettings/bonusModify.vue",n.default=c.exports},587:function(t,n,e){var a=e(588);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(24)("9a8581a2",a,!1)},588:function(t,n,e){n=t.exports=e(23)(!1),n.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},589:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"addBonus"},[e("Modal",{attrs:{title:"修改提成",closable:!1,"mask-closable":!1},model:{value:t.showWin,callback:function(n){t.showWin=n},expression:"showWin"}},[e("Form",{ref:"addForm",attrs:{model:t.addForm,"label-width":80,"label-position":"left"}},[e("Row",[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"所属公司：",prop:"companyId"}},[e("div",{staticStyle:{display:"inline-block",width:"150px"}},[e("span",[t._v(t._s(t.companyName))])])])],1),t._v(" "),e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"主体类型：",prop:"type"}},[e("div",{staticStyle:{display:"inline-block",width:"150px"}},[e("span",[t._v(t._s(t.typeStr))])])])],1)],1),t._v(" "),t.showNum?e("Row",[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"业绩区间：",prop:"numStart"}},[e("div",{staticStyle:{display:"inline-block",width:"120px"}},[e("Input",{attrs:{disabled:"",placeholder:"请输入开始业绩"},model:{value:t.addForm.numStart,callback:function(n){t.$set(t.addForm,"numStart",n)},expression:"addForm.numStart"}})],1),t._v(" "),t.maxInterVal?t._e():e("div",{staticStyle:{display:"inline-block"}},[t._v("\n            ~\n            "),e("div",{staticStyle:{display:"inline-block",width:"120px"}},[e("Input",{attrs:{disabled:"",placeholder:"请输入截止业绩"},model:{value:t.addForm.numEnd,callback:function(n){t.$set(t.addForm,"numEnd",n)},expression:"addForm.numEnd"}})],1)]),t._v(" "),t.maxInterVal?e("div",{staticStyle:{display:"inline-block","margin-left":"10px"}},[t._v("以上")]):t._e()])],1)],1):t._e(),t._v(" "),e("Row",[e("Col",{attrs:{span:"12"}},[e("FormItem",{attrs:{label:"业绩类型:",prop:"bonusType"}},[e("RadioGroup",{model:{value:t.addForm.bonusType,callback:function(n){t.$set(t.addForm,"bonusType",n)},expression:"addForm.bonusType"}},t._l(t.bonusTypes,function(t){return e("Radio",{key:t,attrs:{label:t}})}))],1)],1)],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"业绩提成：",prop:"job"}},[e("div",{staticStyle:{display:"inline-block",width:"150px"}},[e("Input",{attrs:{placeholder:"请输入提成"},model:{value:t.addForm.tcvalue,callback:function(n){t.$set(t.addForm,"tcvalue",n)},expression:"addForm.tcvalue"}})],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.unit))])])],1)],1)],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"goast"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("Button",{attrs:{type:"primary",loading:t.modal_loading},on:{click:t.add}},[t._v("新增")])],1)],1)],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};n.default=o},590:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bonusManage"},[e("Card",[e("Row",{staticClass:"operate-btns"},[e("Select",{staticStyle:{width:"150px"},attrs:{"label-in-value":"true",placeholder:"请选择公司"},on:{"on-change":t.changeCompany},model:{value:t.choosenCompanyId,callback:function(n){t.choosenCompanyId=n},expression:"choosenCompanyId"}},t._l(t.companyList,function(n){return e("Option",{key:n.companyId,attrs:{value:n.companyId}},[t._v(t._s(n.companyName))])})),t._v(" "),e("Select",{staticStyle:{width:"150px"},attrs:{"label-in-value":"true",placeholder:"请选择类型"},on:{"on-change":t.changeType},model:{value:t.type,callback:function(n){t.type=n},expression:"type"}},[e("Option",{attrs:{value:"1"}},[t._v("业务员(无底薪)")]),t._v(" "),e("Option",{attrs:{value:"10"}},[t._v("业务员(有底薪)")]),t._v(" "),e("Option",{attrs:{value:"2"}},[t._v("主管个人")]),t._v(" "),e("Option",{attrs:{value:"3"}},[t._v("主管管理")]),t._v(" "),e("Option",{attrs:{value:"4"}},[t._v("总监")]),t._v(" "),e("Option",{attrs:{value:"5"}},[t._v("一手房")]),t._v(" "),e("Option",{attrs:{value:"6"}},[t._v("普通登记人")]),t._v(" "),e("Option",{attrs:{value:"7"}},[t._v("普通委托人")]),t._v(" "),e("Option",{attrs:{value:"8"}},[t._v("速销登记人")]),t._v(" "),e("Option",{attrs:{value:"9"}},[t._v("速销委托人")])],1),t._v(" "),e("Button",{attrs:{type:"primary",icon:"android-add"},on:{click:t.add}},[t._v("新增")]),t._v(" "),e("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:t.refresh}},[t._v("刷新")])],1),t._v(" "),e("Table",{ref:"selection",attrs:{height:400,loading:t.loading,stripe:t.stripeTable,width:"100%",border:"",columns:t.columns,data:t.datalist}})],1),t._v(" "),e("BonusModify",{attrs:{show:t.showModifyWin,datalist:t.datalist,params:t.bonusModifyData},on:{add:t.modfiyBonus,cancel:t.cancelModifyBonus}}),t._v(" "),e("BonusAdd",{attrs:{show:t.showAddWin,datalist:t.datalist,params:t.bonusData},on:{add:t.addBonus,cancel:t.cancelAddBonus}})],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};n.default=o}});