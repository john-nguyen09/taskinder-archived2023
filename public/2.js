(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"KHd+":function(e,t,r){"use strict";function s(e,t,r,s,a,n,o,i){var m,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=m):a&&(m=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),m)if(c.functional){c._injectStyles=m;var u=c.render;c.render=function(e,t){return m.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,m):[m]}return{exports:e,options:c}}r.d(t,"a",(function(){return s}))},PSuA:function(e,t,r){"use strict";r.r(t);var s={data:function(){return{username:"",password:"",remember:!1}},computed:{authErrors:function(){return this.$store.getters.authErrors}},methods:{login:function(){var e=this,t=this.username,r=this.password,s=this.remember;this.$store.dispatch("authRequest",{username:t,password:r,remember:s}).then((function(){e.$router.push("/")}))}}},a=r("KHd+"),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-form text-center"},[r("form",{attrs:{method:"POST"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("img",{staticClass:"mb-4",attrs:{src:"img/logo.svg",alt:"",width:"300",height:"72"}}),e._v(" "),e.authErrors.has("invalid_credentials")?r("p",{staticClass:"text-danger",domProps:{textContent:e._s(e.authErrors.get("invalid_credentials"))}}):e._e(),e._v(" "),r("label",{staticClass:"sr-only",attrs:{for:"username"}},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("div",{staticClass:"checkbox mt-2"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.remember,expression:"remember"}],attrs:{type:"checkbox",value:"remember"},domProps:{checked:Array.isArray(e.remember)?e._i(e.remember,"remember")>-1:e.remember},on:{change:function(t){var r=e.remember,s=t.target,a=!!s.checked;if(Array.isArray(r)){var n=e._i(r,"remember");s.checked?n<0&&(e.remember=r.concat(["remember"])):n>-1&&(e.remember=r.slice(0,n).concat(r.slice(n+1)))}else e.remember=a}}}),e._v(" Remember me\n            ")])]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary btn-block mt-2 mb-2",attrs:{type:"submit"}},[e._v("Sign in")]),e._v(" "),r("router-link",{attrs:{to:{name:"password-email"}}},[e._v("Forgot Password")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=2.js.map