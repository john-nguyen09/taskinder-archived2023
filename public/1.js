(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"KHd+":function(t,e,s){"use strict";function a(t,e,s,a,n,o,i,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},fzFT:function(t,e,s){"use strict";s.r(e);s("pNMO"),s("4Brf"),s("0oug"),s("4mDm"),s("sMBO"),s("07d7"),s("PKPk"),s("3bBZ");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n={data:function(){return{clients:[],createForm:{errors:[],name:"",redirect:""},editForm:{errors:[],name:"",redirect:""}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getClients(),$("#modal-create-client").on("shown.bs.modal",(function(){$("#create-client-name").focus()})),$("#modal-edit-client").on("shown.bs.modal",(function(){$("#edit-client-name").focus()}))},getClients:function(){var t=this;axios.get("/oauth/clients").then((function(e){t.clients=e.data}))},showCreateClientForm:function(){$("#modal-create-client").modal("show")},store:function(){this.persistClient("post","/oauth/clients",this.createForm,"#modal-create-client")},edit:function(t){this.editForm.id=t.id,this.editForm.name=t.name,this.editForm.redirect=t.redirect,$("#modal-edit-client").modal("show")},update:function(){this.persistClient("put","/oauth/clients/"+this.editForm.id,this.editForm,"#modal-edit-client")},persistClient:function(t,e,s,n){var o=this;s.errors=[],axios[t](e,s).then((function(t){o.getClients(),s.name="",s.redirect="",s.errors=[],$(n).modal("hide")})).catch((function(t){"object"===a(t.response.data)?s.errors=_.flatten(_.toArray(t.response.data.errors)):s.errors=["Something went wrong. Please try again."]}))},destroy:function(t){var e=this;axios.delete("/oauth/clients/"+t.id).then((function(t){e.getClients()}))}}},o=s("KHd+"),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("span",[t._v("OAuth Clients")]),t._v(" "),s("a",{staticClass:"btn btn-light",attrs:{tabindex:"-1"},on:{click:t.showCreateClientForm}},[t._v("Create New Client")])])]),t._v(" "),s("div",{staticClass:"card-body"},[0===t.clients.length?s("p",{staticClass:"mb-0"},[t._v("You have not created any OAuth clients.")]):t._e(),t._v(" "),t.clients.length>0?s("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),s("tbody",t._l(t.clients,(function(e){return s("tr",{key:e.id},[s("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.id))]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("code",[t._v(t._s(e.secret))])]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("button",{staticClass:"btn btn-warning",attrs:{tabindex:"-1"},on:{click:function(s){return t.edit(e)}}},[t._v("Edit")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.destroy(e)}}},[t._v("Delete")])])])})),0)]):t._e()])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"modal-create-client",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[t.createForm.errors.length>0?s("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),s("br"),t._v(" "),s("ul",t._l(t.createForm.errors,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),s("form",{attrs:{role:"form"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.name,expression:"createForm.name"}],staticClass:"form-control",attrs:{id:"create-client-name",type:"text"},domProps:{value:t.createForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.store(e)},input:function(e){e.target.composing||t.$set(t.createForm,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted"},[t._v("Something your users will recognize and trust.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Redirect URL")]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.redirect,expression:"createForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.createForm.redirect},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.store(e)},input:function(e){e.target.composing||t.$set(t.createForm,"redirect",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted"},[t._v("Your application's authorization callback URL.")])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.store}},[t._v("Create")])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"modal-edit-client",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),s("div",{staticClass:"modal-body"},[t.editForm.errors.length>0?s("div",{staticClass:"alert alert-danger"},[t._m(4),t._v(" "),s("br"),t._v(" "),s("ul",t._l(t.editForm.errors,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),s("form",{attrs:{role:"form"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.name,expression:"editForm.name"}],staticClass:"form-control",attrs:{id:"edit-client-name",type:"text"},domProps:{value:t.editForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update(e)},input:function(e){e.target.composing||t.$set(t.editForm,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted"},[t._v("Something your users will recognize and trust.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Redirect URL")]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.redirect,expression:"editForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.editForm.redirect},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update(e)},input:function(e){e.target.composing||t.$set(t.editForm,"redirect",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted"},[t._v("Your application's authorization callback URL.")])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.update}},[t._v("Save Changes")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Client ID")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Secret")]),this._v(" "),e("th"),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Create Client")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!\n                        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Edit Client")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!\n                        ")])}],!1,null,null,null).exports,r={data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var t=this;axios.get("/oauth/tokens").then((function(e){t.tokens=e.data}))},revoke:function(t){var e=this;axios.delete("/oauth/tokens/"+t.id).then((function(t){e.getTokens()}))}}},l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.tokens.length>0?s("div",[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[t._v("Authorized Applications")]),t._v(" "),s("div",{staticClass:"card-body"},[s("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),s("tbody",t._l(t.tokens,(function(e){return s("tr",{key:e.id},[s("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.client.name))]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[e.scopes.length>0?s("span",[t._v(t._s(e.scopes.join(", ")))]):t._e()]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.revoke(e)}}},[t._v("Revoke")])])])})),0)])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Scopes")]),this._v(" "),e("th")])])}],!1,null,null,null).exports;s("yXV3");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d={data:function(){return{accessToken:null,tokens:[],scopes:[],form:{name:"",scopes:[],errors:[]}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens(),this.getScopes(),$("#modal-create-token").on("shown.bs.modal",(function(){$("#create-token-name").focus()}))},getTokens:function(){var t=this;axios.get("/oauth/personal-access-tokens").then((function(e){t.tokens=e.data}))},getScopes:function(){var t=this;axios.get("/oauth/scopes").then((function(e){t.scopes=e.data}))},showCreateTokenForm:function(){$("#modal-create-token").modal("show")},store:function(){var t=this;this.accessToken=null,this.form.errors=[],axios.post("/oauth/personal-access-tokens",this.form).then((function(e){t.form.name="",t.form.scopes=[],t.form.errors=[],t.tokens.push(e.data.token),t.showAccessToken(e.data.accessToken)})).catch((function(e){"object"===c(e.response.data)?t.form.errors=_.flatten(_.toArray(e.response.data.errors)):t.form.errors=["Something went wrong. Please try again."]}))},toggleScope:function(t){this.scopeIsAssigned(t)?this.form.scopes=_.reject(this.form.scopes,(function(e){return e==t})):this.form.scopes.push(t)},scopeIsAssigned:function(t){return _.indexOf(this.form.scopes,t)>=0},showAccessToken:function(t){$("#modal-create-token").modal("hide"),this.accessToken=t,$("#modal-access-token").modal("show")},revoke:function(t){var e=this;axios.delete("/oauth/personal-access-tokens/"+t.id).then((function(t){e.getTokens()}))}}},m={data:function(){return{}},components:{Clients:i,AuthorizedClients:l,PersonalAccessTokens:Object(o.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("span",[t._v("Personal Access Tokens")]),t._v(" "),s("a",{staticClass:"btn btn-light",attrs:{tabindex:"-1"},on:{click:t.showCreateTokenForm}},[t._v("Create New Token")])])]),t._v(" "),s("div",{staticClass:"card-body"},[0===t.tokens.length?s("p",{staticClass:"mb-0"},[t._v("You have not created any personal access tokens.")]):t._e(),t._v(" "),t.tokens.length>0?s("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),s("tbody",t._l(t.tokens,(function(e){return s("tr",{key:e.id},[s("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.revoke(e)}}},[t._v("Delete")])])])})),0)]):t._e()])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"modal-create-token",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[t.form.errors.length>0?s("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),s("br"),t._v(" "),s("ul",t._l(t.form.errors,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),s("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.store(e)}}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"create-token-name",type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),t.scopes.length>0?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label"},[t._v("Scopes")]),t._v(" "),s("div",{staticClass:"col-md-6"},t._l(t.scopes,(function(e){return s("div",{key:e.id},[s("div",{staticClass:"checkbox"},[s("label",[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.scopeIsAssigned(e.id)},on:{click:function(s){return t.toggleScope(e.id)}}}),t._v("\n                                            "+t._s(e.id)+"\n                                        ")])])])})),0)]):t._e()])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.store}},[t._v("Create")])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"modal-access-token",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),s("div",{staticClass:"modal-body"},[s("p",[t._v("\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.accessToken,expression:"accessToken"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.accessToken},on:{input:function(e){e.target.composing||(t.accessToken=e.target.value)}}})]),t._v(" "),t._m(4)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Create Token")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!\n                        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("Personal Access Token")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,null,null).exports}},u=Object(o.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-3"},[this._m(0),this._v(" "),e("Clients",{staticClass:"mb-4"}),this._v(" "),e("AuthorizedClients",{staticClass:"mb-4"}),this._v(" "),e("PersonalAccessTokens",{staticClass:"mb-4"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title"},[this._v("Manage passport")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("You can manage OAuth Clients and Personal Access Tokens here")])])])}],!1,null,null,null);e.default=u.exports},yXV3:function(t,e,s){"use strict";var a=s("I+eb"),n=s("TWQb").indexOf,o=s("pkCn"),i=s("rkAj"),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),d=i("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(t){return l?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=1.js.map