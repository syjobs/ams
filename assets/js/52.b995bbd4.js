(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1020:function(e,o,l){"use strict";l.r(o);var t=l(126),a={a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"},c={checkboxField1:{type:"form",resource:{fields:{checkboxFieldA:{type:"checkbox",label:"多选",props:{options:a}},checkboxFieldB:{type:"checkbox",label:"带默认值",default:"a,e",props:{options:a}},checkboxFieldC:{type:"checkbox",label:"纯展示",default:"b,c",props:{options:a},ctx:"view"},checkboxFieldD:{type:"checkbox",label:"超出隐藏",default:"b,c,d,e",props:{options:a},collapseLimit:2,ctx:"view"},checkboxDisable:{type:"checkbox",label:"多选禁用",props:{options:[{label:"黄金糕",value:"a",disabled:!0},{label:"双皮奶",value:"b",disabled:!0},{label:"蚵仔煎",value:"c"}]}},checkboxBorder:{type:"checkbox",label:"多选边框",props:{type:"border",options:[{label:"黄金糕",value:"a",disabled:!0},{label:"双皮奶",value:"b"},{label:"蚵仔煎",value:"c"}]}},checkboxButton:{type:"checkbox",label:"多选按钮",props:{type:"button",size:"mini","select-all":!0,options:[{label:"黄金糕",value:"a"},{label:"双皮奶",value:"b"},{label:"蚵仔煎",value:"c"}]}}}},ctx:"edit"},checkboxField2:{type:"form",resource:{fields:{checkboxFieldA:{type:"checkbox",label:"多选",props:{"select-all":!0,options:a}}}},ctx:"edit"}},i=l(138),s=l.n(i),n=l(137),d=l.n(n),b={mixins:[t.a],mounted:function(){var e=s()(c[this.blockName]);this.configCode=d()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,c[this.blockName]),this.init=!0)}},r=l(1),p=Object(r.a)(b,(function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?l("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),l("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[l("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),l("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[l("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?l("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=p.exports},125:function(e,o,l){"use strict";var t=l(0),a=(l(131),l(130)),c=l.n(a),i=l(128),s=l.n(i),n=l(136),d=l(132),b=l.n(d),r=(l(133),l(134)),p=l.n(r),u=l(135),h=l.n(u);t.default.use(c.a),t.default.use(s.a),console.log("ams init config"),t.default.use(p.a),t.default.use(h.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(n.a,{languages:{javascript:b.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,o,l){"use strict";l(125);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);