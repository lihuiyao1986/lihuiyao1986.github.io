webpackJsonp([6],{446:function(e,t,n){"use strict";function a(e){s||n(628)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(503),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var u=n(634),l=n.n(u),s=!1,c=n(4),d=a,p=c(o.a,l.a,!1,d,null,null);p.options.__file="src/views/yejiManage/daquzongjianyejiManage.vue",t.default=p.exports},450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={login:function(e){return r.default.fetch("/user/login",e)},resetPwd:function(e){return r.default.fetch("/user/resetPwd",e)},queryAllUser:function(e){return r.default.fetch("/user/queryAllUser",e)},queryAllCommissionCal:function(e){return r.default.fetch("/config/queryAllCommissionCal",e)},updateAllCommissionCal:function(e){return r.default.fetch("/config/updateAllCommissionCal",e)},queryHouseRes:function(e){return r.default.fetch("/config/queryHouseRes",e)},updateHouseRes:function(e){return r.default.fetch("/config/updateHouseRes",e)},queryAllCompany:function(e){return r.default.fetch("/config/queryAllCompany",e)},queryAllArea:function(e){return r.default.fetch("/config/queryAllArea",e)},queryAllEmployee:function(e){return r.default.fetch("/config/queryAllEmployee",e)},updateEmployee:function(e){return r.default.fetch("/config/updateEmployee",e)},addEmployee:function(e){return r.default.fetch("/config/addEmployee",e)},addCompany:function(e){return r.default.fetch("/config/addCompany",e)},updateCompany:function(e){return r.default.fetch("/config/updateCompany",e)},addArea:function(e){return r.default.fetch("/config/addArea",e)},updateArea:function(e){return r.default.fetch("/config/updateArea",e)},queryAllShop:function(e){return r.default.fetch("/config/queryAllShop",e)},addShop:function(e){return r.default.fetch("/config/addShop",e)},updateShop:function(e){return r.default.fetch("/config/updateShop",e)},queryAllAgreement:function(e){return r.default.fetch("/business/queryAllAgreement",e)},insertAgreement:function(e){return r.default.fetch("/business/insertAgreement",e)},balanceAgreement:function(e){return r.default.fetch("/business/balanceAgreement",e)},transferAgreement:function(e){return r.default.fetch("/business/transferAgreement",e)},queryLeaderAchieve:function(e){return r.default.fetch("/business/queryLeaderAchieve",e)},querySalemanAchieve:function(e){return r.default.fetch("/business/querySalemanAchieve",e)},queryMajordomoAchieve:function(e){return r.default.fetch("/business/queryMajordomoAchieve",e)},querySalary:function(e){return r.default.fetch("/business/querySalary",e)},updateSalary:function(e){return r.default.fetch("/business/updateSalary",e)},updateEmployeeByIds:function(e){return r.default.fetch("/config/updateEmployeeByIds",e)},queryProfit:function(e){return r.default.fetch("/business/queryProfit",e)},updateProfit:function(e){return r.default.fetch("/business/updateProfit",e)},updateShopByIds:function(e){return r.default.fetch("/config/updateShopByIds",e)}}},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};a.info=function(e,t,n,a){e.$Notice.info({title:n||"温馨提示",desc:t,duration:a||"1.5"})},a.success=function(e,t,n,a){e.$Notice.success({title:n||"成功提示",desc:t,duration:a||"1.5"})},a.warning=function(e,t,n,a){e.$Notice.warning({title:n||"警告提示",desc:t,duration:a||"1.5"})},a.error=function(e,t,n,a){e.$Notice.error({title:n||"错误提示",desc:t,duration:a||"1.5"})},a.confirm=function(e,t,n,a,r,o){e.$Modal.confirm({title:n,loading:t,content:a,onOk:function(){r&&r()},onCancel:function(){o&&o()}})},t.default=a},457:function(e,t,n){"use strict";function a(e){return("00"+e).substr(e.length)}function r(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp("("+r+")").test(t)){var o=n[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?o:a(o))}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=r},458:function(e,t,n){"use strict";t.__esModule=!0;var a=n(459),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},459:function(e,t,n){e.exports={default:n(460),__esModule:!0}},460:function(e,t,n){n(461);var a=n(2).Object;e.exports=function(e,t,n){return a.defineProperty(e,t,n)}},461:function(e,t,n){var a=n(12);a(a.S+a.F*!n(13),"Object",{defineProperty:n(9).f})},503:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(458),i=a(o),u=n(630),l=a(u),s=n(451),c=a(s),d=n(450),p=a(d),f=n(457);t.default={name:"daquzongjianyejiManage",components:{QueryComponent:l.default},data:function(){return{total:0,pageSize:10,pageSizeOpts:[10,15,20,30],stripeTable:!0,companyList:[],pageNo:1,loading:!1,choosenCompanyId:"",showQueryWin:!1,datalist:[],queryForm:{startTime:null,endTime:null,shopId:null,employeeName:null,quarterName:null,areaId:null},columns:[{title:"序号",key:"id"},{title:"大区",key:"areaName"},{title:"总监",key:"employeeName"},{title:"业绩总量",key:"achievementNum"},{title:"提成",key:"commissionMoney"}]}},mounted:function(){this.queryCompany()},watch:{$route:"init"},methods:(r={init:function(){this.queryCompany()},add:function(){this.$router.push({name:"add_contract"})},changeDate:function(e){if(e.length<=0)return"";var t=new Date(e);return(0,f.formatDate)(t,"yyyy-MM-dd")}},(0,i.default)(r,"init",function(){this.queryCompany()}),(0,i.default)(r,"changeCompany",function(e){e&&e.length>0&&(this.choosenCompanyId=e,this.queryData())}),(0,i.default)(r,"queryCompany",function(){var e=this;p.default.queryAllCompany().then(function(t){e.companyList=t.result,e.companyList.length>0&&(e.choosenCompanyId=e.companyList[0].companyId,e.queryData())}).catch(function(t){c.default.error(e,t.message+"["+t.responseCode+"]")})}),(0,i.default)(r,"queryData",function(){var e=this;this.loading=!0,p.default.queryMajordomoAchieve({choosenCompanyId:this.choosenCompanyId,startTime:this.queryForm.startTime,endTime:this.queryForm.endTime,shopId:this.queryForm.shopId,employeeName:this.queryForm.employeeName,pageNum:this.pageNo,pageSize:this.pageSize,quarterName:this.queryForm.quarterName,areaId:this.queryForm.areaId}).then(function(t){e.loading=!1,e.datalist=t.result.list,e.total=t.result.total}).catch(function(t){e.loading=!1,c.default.error(e,t.message+"["+t.responseCode+"]")})}),(0,i.default)(r,"refresh",function(){this.pageNo=1,this.queryForm.shopId=null,this.queryForm.employeeName=null,this.queryForm.quarterName=null,this.queryData()}),(0,i.default)(r,"filter",function(){this.showQueryWin=!0}),(0,i.default)(r,"pageChanged",function(e){this.pageNo=e,this.queryData()}),(0,i.default)(r,"pageSizeChanged",function(e){this.pageSize=e,this.queryData()}),(0,i.default)(r,"cancelQueryWin",function(){this.showQueryWin=!1}),(0,i.default)(r,"sureQuery",function(e){this.showQueryWin=!1,e.startTime&&(e.startTime=this.changeDate(e.startTime)),e.endTime&&(e.endTime=this.changeDate(e.endTime)),this.queryForm.startTime=e.startTime,this.queryForm.endTime=e.endTime,this.queryForm.employeeName=e.employeeName,this.queryForm.areaId=e.areaId,this.queryData()}),(0,i.default)(r,"edit",function(e){}),(0,i.default)(r,"remove",function(e){c.default.confirm(this,!0,"删除提示","您确定需要删除该员工吗？",function(){})}),r)}},504:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(451),o=(a(r),n(450)),i=a(o);t.default={data:function(){return{showWin:!1,allShops:[],allAreas:[],queryForm:{startTime:"",endTime:"",areaId:null,employeeName:""}}},props:{show:{default:!1},choosenCompanyId:{default:""}},watch:{show:function(e){this.showWin=e,e&&(this.clearForm(),this.queryAllArea())}},methods:{cancel:function(){this.$emit("cancel")},sure:function(){this.$emit("sure",this.queryForm)},queryAllArea:function(){var e=this;this.allShops=[],this.allAreas=[],i.default.queryAllArea({choosenCompanyId:this.choosenCompanyId}).then(function(t){e.allAreas=t.result,e.allAreas.length>0&&(e.queryForm.areaId=e.allAreas[0].areaId)}).catch(function(e){})},clearForm:function(){this.allShops=[],this.allAreas=[],this.queryForm.startTime=null,this.queryForm.endTime=null,this.queryForm.areaId=null,this.queryForm.employeeName=null}}}},628:function(e,t,n){var a=n(629);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("032720d0",a,!1)},629:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},630:function(e,t,n){"use strict";function a(e){s||n(631)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(504),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var u=n(633),l=n.n(u),s=!1,c=n(4),d=a,p=c(o.a,l.a,!1,d,null,null);p.options.__file="src/views/yejiManage/daquzongjianyejiquery.vue",t.default=p.exports},631:function(e,t,n){var a=n(632);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(24)("773f1871",a,!1)},632:function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.page-component {\n  margin-top: 15px;\n}\n.operate-btns {\n  margin: 0px 0px 10px 0px;\n}\n",""])},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"queryYeji"},[n("Modal",{attrs:{title:"查询条件",closable:!1,"mask-closable":!1},model:{value:e.showWin,callback:function(t){e.showWin=t},expression:"showWin"}},[n("Form",{ref:"queryForm",attrs:{model:e.queryForm,"label-width":80,"label-position":"left"}},[n("Row",[n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"时间：",prop:"startTime"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("DatePicker",{staticStyle:{width:"150px"},attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"请选择开始时间"},model:{value:e.queryForm.startTime,callback:function(t){e.$set(e.queryForm,"startTime",t)},expression:"queryForm.startTime"}})],1),e._v("\n          ~\n          "),n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("DatePicker",{staticStyle:{width:"150px"},attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"请选择结束时间"},model:{value:e.queryForm.endTime,callback:function(t){e.$set(e.queryForm,"endTime",t)},expression:"queryForm.endTime"}})],1)])],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"大区：",prop:"areaId"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Select",{staticStyle:{width:"150px"},attrs:{clearable:"true"},model:{value:e.queryForm.areaId,callback:function(t){e.$set(e.queryForm,"areaId",t)},expression:"queryForm.areaId"}},e._l(e.allAreas,function(t){return n("Option",{key:t.areaId,attrs:{value:t.areaId}},[e._v(e._s(t.areaName))])}))],1)])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("FormItem",{attrs:{label:"姓名：",prop:"employeeName"}},[n("div",{staticStyle:{display:"inline-block",width:"150px"}},[n("Input",{attrs:{placeholder:"请输入姓名"},model:{value:e.queryForm.employeeName,callback:function(t){e.$set(e.queryForm,"employeeName",t)},expression:"queryForm.employeeName"}})],1)])],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"goast"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary"},on:{click:e.sure}},[e._v("确定")])],1)],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o},634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-page"},[n("Card",[n("Row",{staticClass:"operate-btns"},[n("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择公司"},on:{"on-change":e.changeCompany},model:{value:e.choosenCompanyId,callback:function(t){e.choosenCompanyId=t},expression:"choosenCompanyId"}},e._l(e.companyList,function(t){return n("Option",{key:t.companyId,attrs:{value:t.companyId}},[e._v(e._s(t.companyName))])})),e._v(" "),n("Button",{attrs:{type:"primary",icon:"android-bar"},on:{click:e.filter}},[e._v("筛选")]),e._v(" "),n("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:e.refresh}},[e._v("刷新")])],1),e._v(" "),n("Table",{ref:"selection",attrs:{height:400,loading:e.loading,stripe:e.stripeTable,size:"large",width:"100%",border:"",columns:e.columns,data:e.datalist}}),e._v(" "),n("Page",{staticClass:"page-component",attrs:{"show-total":"","page-size-opts":e.pageSizeOpts,current:e.pageNo,total:e.total,"page-size":e.pageSize,"show-sizer":""},on:{"on-change":e.pageChanged,"on-page-size-change":e.pageSizeChanged}}),e._v(" "),n("QueryComponent",{attrs:{show:e.showQueryWin,choosenCompanyId:e.choosenCompanyId},on:{cancel:e.cancelQueryWin,sure:e.sureQuery}})],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o}});