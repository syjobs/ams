(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{125:function(e,t,o){"use strict";var n=o(0),s=(o(131),o(130)),i=o.n(s),a=o(128),r=o.n(a),c=o(136),l=o(132),d=o.n(l),u=(o(133),o(134)),g=o.n(u),p=o(135),m=o.n(p);n.default.use(i.a),n.default.use(r.a),console.log("ams init config"),n.default.use(g.a),n.default.use(m.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(c.a,{languages:{javascript:d.a}}),r.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,o){"use strict";o(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},995:function(e,t,o){"use strict";o.r(t);var n=o(126),s={defaultError:{type:"error"},buttonError:{type:"error",data:{title:"404",subtitle:"Page not found"},operations:{goIndex:{type:"button",label:"返回首页",props:{type:"danger",size:"medium",round:!0}}},actions:{goIndex:function(){this.$message("你点击了返回首页按钮")}}},slotTopError:{type:"error",data:{title:"404",subtitle:"Page not found"},operations:{goIndex:{type:"button",label:"返回首页",props:{type:"danger",size:"medium",round:!0}}},actions:{goIndex:function(){this.$message("你点击了返回首页按钮")}},blocks:{backButton:{slot:"top",type:"component",style:{textAlign:"center"},operations:{goIndex:{type:"button",label:"返回首页",props:{type:"danger",size:"medium",round:!0}}},actions:{goIndex:function(){this.$message("你点击了返回首页按钮")}}}}}},i=o(138),a=o.n(i),r=o(137),c=o.n(r),l={mixins:[n.a],mounted:function(){var e=a()(s[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,s[this.blockName]),this.init=!0)}},d=o(1),u=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?o("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=u.exports}}]);