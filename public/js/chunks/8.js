(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1O8S":function(t,e,s){"use strict";s.r(e);s("pNMO"),s("4Brf");var n=s("sWYD"),a={props:["placeholder","value","isInvalid","attributes"],computed:{formattedDate:function(){return this.value instanceof Date?Object(n.a)(this.value,"yyyy-MM-dd"):""}}},r=s("KHd+"),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-date-picker",{attrs:{placeholder:t.placeholder,value:t.value,popover:{visibility:"click"},attributes:t.attributes},on:{input:function(e){return t.$emit("input",e)}}},[s("input",{staticClass:"form-control",class:{"is-invalid":t.isInvalid},attrs:{type:"text",readonly:"",placeholder:t.placeholder},domProps:{value:t.formattedDate}})])}),[],!1,null,null,null).exports,o=s("q+rm"),c={computed:{formattedDuration:{get:function(){return this.$store.getters.taskLogForm.duration},set:function(t){this.$store.dispatch("setTaskLogFormDuration",t)}},description:{get:function(){return this.$store.getters.taskLogForm.description},set:function(t){this.$store.dispatch("setTaskLogFormDescription",t)}},date:{get:function(){return this.$store.getters.taskLogForm.date},set:function(t){this.$store.dispatch("setTaskLogFormDate",t)}},errors:function(){return this.$store.getters.taskLogErrors},cancelDisabled:function(){return""===this.formattedDuration&&""===this.description&&null===this.date}},data:function(){return{attrs:[{key:"today",highlight:"purple",dates:new Date}]}},methods:{saveTaskLogForm:function(){var t=this;this.$store.dispatch("saveTaskLogForm").then((function(e){t.$store.dispatch("fetchMonthResults"),t.$store.dispatch("fetchDateInfo",t.$store.getters.selectedDate)}))},cancel:function(){this.$store.dispatch("resetTaskLogForm")}},components:{DatePicker:i}},l=Object(r.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.saveTaskLogForm(e)}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-5"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("description")},attrs:{placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-auto"},[s("date-picker",{attrs:{placeholder:"Date",isInvalid:t.errors.has("date"),attributes:t.attrs},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),s("div",{staticClass:"col-auto"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formattedDuration,expression:"formattedDuration"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("duration")},attrs:{type:"text",placeholder:"Duration"},domProps:{value:t.formattedDuration},on:{input:function(e){e.target.composing||(t.formattedDuration=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-primary"},[t._v("Submit")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button",disabled:t.cancelDisabled},on:{click:t.cancel}},[t._v("Cancel")])])])])}),[],!1,null,null,null).exports,u=(s("0oug"),s("TeQF"),s("QWBl"),s("4mDm"),s("5DmW"),s("27RR"),s("tkto"),s("07d7"),s("5s+n"),s("PKPk"),s("FZtP"),s("3bBZ"),s("o0o1")),d=s.n(u),f=(s("ls82"),s("L2JU")),p={props:{links:{type:Array,default:[]}},methods:{isLinkDisabled:function(t){return!t.url},goToLink:function(t){this.$emit("link",t)}}};function h(t,e,s,n,a,r,i){try{var o=t[r](i),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){m(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function m(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var b,k,_,y={components:{pagination:Object(r.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("ul",{staticClass:"pagination"},t._l(t.links,(function(e,n){return s("li",{key:n,staticClass:"page-item",class:{disabled:t.isLinkDisabled(e),active:e.active}},[s("a",{staticClass:"page-link",attrs:{href:"#",tabindex:t.isLinkDisabled(e)?-1:null},on:{click:function(s){return s.preventDefault(),t.goToLink(e)}}},[s("span",{domProps:{innerHTML:t._s(e.label)}}),t._v("\n                "+t._s(" ")),e.active?s("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})),0)])}),[],!1,null,null,null).exports},data:function(){return{searchTaskKeywords:"",currentFetchUrl:null}},computed:g({taskLogs:function(){var t=[],e=!0,s=!1,n=void 0;try{for(var a,r=this.$store.getters.taskLogs[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var i=a.value;t.push(g({},i,{duration:Object(o.b)(i.duration)}))}}catch(t){s=!0,n=t}finally{try{e||null==r.return||r.return()}finally{if(s)throw n}}return t},toDeleteTaskLog:function(){return this.$store.getters.toDeleteTaskLog}},Object(f.b)(["taskLogLinks","isRequesting"])),methods:{editTaskLog:function(t){this.$store.dispatch("editTaskLog",t)},deleteTaskLog:function(t){var e,s=this;return(e=d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.$store.dispatch("deleteTaskLog",t);case 2:if(!e.sent){e.next=6;break}return e.next=6,Promise.all([s.$store.dispatch("fetchMonthResults"),s.$store.dispatch("fetchDateInfo",s.$store.getters.selectedDate)]);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(n,a){var r=e.apply(t,s);function i(t){h(r,n,a,i,o,"next",t)}function o(t){h(r,n,a,i,o,"throw",t)}i(void 0)}))})()},revokeDelete:function(t){this.$store.dispatch("revokeDeleteTaskLog",t)},isLinkDisabled:function(t){return!t.url},goToLink:function(t){t.url&&(this.currentFetchUrl=t.url,this.$store.dispatch("fetchTaskLogs",{url:t.url,search:this.searchTaskKeywords}))},searchTasks:(b=function(t){this.$store.dispatch("fetchTaskLogs",{url:this.currentFetchUrl,search:t})},k=300,_=null,function(){for(var t=this,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];var a=function(){_=null,b.apply(t,s)};clearTimeout(_),_=setTimeout(a,k)}),clearSearchTasks:function(){this.searchTaskKeywords=""}},mounted:function(){this.$store.dispatch("fetchTaskLogs")},watch:{searchTaskKeywords:function(t){this.searchTasks(t)}}},C=Object(r.a)(y,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mb-3"},[s("form",{staticClass:"form-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTaskKeywords,expression:"searchTaskKeywords"}],ref:"searchTasks",staticClass:"form-control",attrs:{type:"text",placeholder:"Search tasks"},domProps:{value:t.searchTaskKeywords},on:{input:function(e){e.target.composing||(t.searchTaskKeywords=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{type:"submit",disabled:""==t.searchTaskKeywords},on:{click:function(e){return e.preventDefault(),t.clearSearchTasks(e)}}},[t._v("Clear")])])]),t._v(" "),t.taskLogLinks?s("pagination",{staticClass:"mb-3",attrs:{"aria-label":"Task log navigation",links:t.taskLogLinks},on:{link:t.goToLink}}):t._e(),t._v(" "),t._m(0),t._v(" "),0===t.taskLogs.length?s("div",{staticClass:"row p-1 border-top"},[s("div",{staticClass:"col-12"},[t._v("No task logs")])]):t._e(),t._v(" "),t._l(t.taskLogs,(function(e,n){return s("div",{key:e.id,staticClass:"row p-1 border-top"},[s("div",{staticClass:"col-3"},[t._v(t._s(e.description))]),t._v(" "),s("div",{staticClass:"col-3"},[t._v(t._s(e.date))]),t._v(" "),s("div",{staticClass:"col-3"},[t._v(t._s(e.duration))]),t._v(" "),s("div",{staticClass:"col-3"},[s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.editTaskLog(n)}}},[s("i",{staticClass:"fa fa-pencil-alt"})]),t._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteTaskLog(n)},blur:function(e){return t.revokeDelete(n)}}},[t._m(1,!0),t._v(" "),s("transition",{attrs:{name:"slide-right"}},[t.toDeleteTaskLog&&t.toDeleteTaskLog.id==e.id?s("div",{staticClass:"float-left pl-1"},[s("span",[t._v("Delete")])]):t._e()])],1)])])})),t._v(" "),t.taskLogLinks?s("pagination",{staticClass:"mt-3",attrs:{"aria-label":"Task log navigation",links:t.taskLogLinks},on:{link:t.goToLink}}):t._e(),t._v(" "),t.isRequesting?s("div",{staticClass:"overlay-spinner"},[t._m(2)]):t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row border-bottom p-1 font-weight-bold"},[e("div",{staticClass:"col-3"},[this._v("Description")]),this._v(" "),e("div",{staticClass:"col-3"},[this._v("Date")]),this._v(" "),e("div",{staticClass:"col-3"},[this._v("Duration")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left"},[e("i",{staticClass:"fa fa-trash delete-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-border text-primary mx-auto",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],!1,null,null,null).exports;s("x0AG");function D(t,e,s,n,a,r,i){try{var o=t[r](i),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function L(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function T(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var w={computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?L(Object(s),!0).forEach((function(e){T(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(f.b)(["monthResultsWithSelected","monthSelectedDateInfo","toDeleteTaskLog"])),mounted:function(){this.$store.dispatch("fetchDateInfo",new Date)},methods:{selectDate:function(t){this.$store.dispatch("fetchDateInfo",t.date)},pageChange:function(t){this.$store.dispatch("changeMonth",t)},formatDate:function(t){return Object(n.a)(new Date(t),"dd/MM")},toText:function(t){return Object(o.b)(t)},editTaskLog:function(t){var e=this.$store.getters.taskLogs.findIndex((function(e){return e.id===t}));e>=0&&this.$store.dispatch("editTaskLog",e)},deleteTaskLog:function(t){var e=this;return function(t){return function(){var e=this,s=arguments;return new Promise((function(n,a){var r=t.apply(e,s);function i(t){D(r,n,a,i,o,"next",t)}function o(t){D(r,n,a,i,o,"throw",t)}i(void 0)}))}}(d.a.mark((function s(){var n;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!((n=e.$store.getters.taskLogs.findIndex((function(e){return e.id===t})))>=0)){s.next=10;break}return s.next=4,e.$store.dispatch("deleteTaskLog",n);case 4:if(!s.sent){s.next=10;break}return s.next=8,e.$store.dispatch("fetchMonthResults");case 8:return s.next=10,e.$store.dispatch("fetchDateInfo",e.$store.getters.selectedDate);case 10:case"end":return s.stop()}}),s)})))()},revokeDelete:function(t){var e=this.$store.getters.taskLogs.findIndex((function(e){return e.id===t}));e>=0&&this.$store.dispatch("revokeDeleteTaskLog",e)}}},$={components:{TaskLogForm:l,TaskLogList:C,TaskLogMonthCalendar:Object(r.a)(w,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("v-calendar",{attrs:{"is-expanded":"",attributes:t.monthResultsWithSelected},on:{dayclick:t.selectDate,"update:from-page":t.pageChange}})],1),t._v(" "),s("div",{staticClass:"col-auto pr-1"},t._l(t.monthSelectedDateInfo,(function(e,n){return s("div",{key:n,staticClass:"my-1 day-task"},[t._v("\n            "+t._s(t.formatDate(e.date))+": "+t._s(e.description)+" "+t._s(t.toText(e.duration))+" "),s("br")])})),0),t._v(" "),s("div",{staticClass:"col-auto pl-0"},t._l(t.monthSelectedDateInfo,(function(e){return s("div",{key:e.id,staticClass:"my-1"},[s("button",{staticClass:"btn btn-warning py-0 px-1",attrs:{type:"button"},on:{click:function(s){return t.editTaskLog(e.id)}}},[s("i",{staticClass:"fa fa-pencil-alt"})]),t._v(" "),s("button",{staticClass:"btn btn-danger btn-confirm-delete py-0 px-1",attrs:{type:"button"},on:{click:function(s){return t.deleteTaskLog(e.id)},blur:function(s){return t.revokeDelete(e.id)}}},[t._m(0,!0),t._v(" "),s("transition",{attrs:{name:"slide-right"}},[t.toDeleteTaskLog&&t.toDeleteTaskLog.id==e.id?s("div",{staticClass:"float-left pl-1"},[s("span",[t._v("Delete")])]):t._e()])],1),t._v(" "),s("br")])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left"},[e("i",{staticClass:"fa fa-trash"})])}],!1,null,null,null).exports}},O=Object(r.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid mt-3"},[e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-body"},[e("task-log-form")],1)]),this._v(" "),e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-body"},[e("task-log-month-calendar")],1)]),this._v(" "),e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-body"},[e("task-log-list")],1)])])}),[],!1,null,null,null);e.default=O.exports},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,a,r,i,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}s.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=8.js.map?id=85c4b9e9433e17222de1