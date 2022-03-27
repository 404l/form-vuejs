(function(){"use strict";var t={2062:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var a=r(144),n=r(8620),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("PForm")],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[r("div",[r("div",{staticClass:"attributes"},[r("h1",[t._v("Личные данные")]),t.$v.form.$error?r("div",{staticClass:"errors"},[r("ul",[t.$v.form.last.$error?r("li",[t._v(" Ошибка в поле Фамилия (поле является обязательным и допустима лишь кириллица) ")]):t._e(),t.$v.form.first.$error?r("li",[t._v(" Ошибка в поле Имя (поле является обязательным и допустима лишь кириллица) ")]):t._e(),t.$v.form.patronimic.$error?r("li",[t._v(" Ошибка в поле Отчество (допустима лишь кириллица) ")]):t._e(),t.$v.form.date.$error?r("li",[t._v(" Ошибка в поле Дата рождения (поле является обязательным) ")]):t._e(),t.$v.form.number.$error?r("li",[t._v(" Ошибка в поле Номер телефона (поле является обязательным и номер должен начинаться с 7) ")]):t._e(),t.$v.form.group.$error?r("li",[t._v(" Ошибка в поле Группы клиента (поле является обязательным) ")]):t._e(),t.$v.form.index.$error?r("li",[t._v(" Ошибка в поле Индекс (допустимы лишь цифры) ")]):t._e(),t.$v.form.country.$error?r("li",[t._v(" Ошибка в поле Страна (допустима лишь кириллица) ")]):t._e(),t.$v.form.state.$error?r("li",[t._v(" Ошибка в поле Область (допустима лишь кириллица) ")]):t._e(),t.$v.form.city.$error?r("li",[t._v(" Ошибка в поле Город (поле является обязательным и допустима лишь кириллица) ")]):t._e(),t.$v.form.type.$error?r("li",[t._v(" Ошибка в поле Тип документа (поле является обязательным) ")]):t._e(),t.$v.form.serial.$error?r("li",[t._v(" Ошибка в поле Серия (допустимы лишь цифры) ")]):t._e(),t.$v.form.numberPass.$error?r("li",[t._v(" Ошибка в поле Номер (допустимы лишь цифры) ")]):t._e(),t.$v.form.dateTake.$error?r("li",[t._v(" Ошибка в поле Дата выдачи (поле является обязательным) ")]):t._e()])]):t._e(),r("label",{attrs:{for:"last"}},[t._v(" Фамилия "),r("span",[t._v("*")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last,expression:"form.last"}],staticClass:"input",attrs:{id:"last",type:"text"},domProps:{value:t.form.last},on:{input:function(e){e.target.composing||t.$set(t.form,"last",e.target.value)}}})]),r("label",{attrs:{for:"first"}},[t._v(" Имя "),r("span",[t._v("*")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first,expression:"form.first"}],staticClass:"input",attrs:{id:"first",type:"text"},domProps:{value:t.form.first},on:{input:function(e){e.target.composing||t.$set(t.form,"first",e.target.value)}}})]),r("label",{attrs:{for:"patronimic"}},[t._v(" Отчество "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.patronimic,expression:"form.patronimic"}],staticClass:"input",attrs:{id:"patronimic",type:"text"},domProps:{value:t.form.patronimic},on:{input:function(e){e.target.composing||t.$set(t.form,"patronimic",e.target.value)}}})]),r("label",{attrs:{for:"date"}},[t._v(" Дата рождения "),r("span",[t._v("*")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],staticClass:"input",attrs:{id:"date",type:"date"},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}})]),r("label",{attrs:{for:"number"}},[t._v(" Номер телефона "),r("span",[t._v("*")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.number,expression:"form.number"}],staticClass:"input",attrs:{id:"number",type:"text",placeholder:"7"},domProps:{value:t.form.number},on:{input:function(e){e.target.composing||t.$set(t.form,"number",e.target.value)}}})]),r("p",[t._v("Пол")]),t._m(0),r("label",{attrs:{for:"group"}},[t._v(" Группа клиента (можно выбрать несколько) "),r("span",[t._v("*")]),r("br"),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.group,expression:"form.group"}],attrs:{multiple:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"group",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"VIP"}},[t._v("VIP")]),r("option",{attrs:{value:"Проблемные"}},[t._v("Проблемные")]),r("option",{attrs:{value:"ОМС"}},[t._v("ОМС")])])]),r("p",[t._v("Лечащий врач")]),t._m(1),t._m(2)]),r("div",[r("h3",[t._v("Адрес")]),r("label",{attrs:{for:"index"}},[t._v(" Индекс "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.index,expression:"form.index"}],staticClass:"input",attrs:{id:"index",type:"text"},domProps:{value:t.form.index},on:{input:function(e){e.target.composing||t.$set(t.form,"index",e.target.value)}}})]),r("label",{attrs:{for:"country"}},[t._v(" Страна "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.country,expression:"form.country"}],staticClass:"input",attrs:{id:"country",type:"text"},domProps:{value:t.form.country},on:{input:function(e){e.target.composing||t.$set(t.form,"country",e.target.value)}}})]),r("label",{attrs:{for:"state"}},[t._v(" Область "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.state,expression:"form.state"}],staticClass:"input",attrs:{id:"state",type:"text"},domProps:{value:t.form.state},on:{input:function(e){e.target.composing||t.$set(t.form,"state",e.target.value)}}})]),r("label",{attrs:{for:"city"}},[t._v(" Город "),r("span",[t._v("*")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"input",attrs:{id:"city",type:"text"},domProps:{value:t.form.city},on:{input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value)}}})]),t._m(3),t._m(4)]),r("div",[r("h3",[t._v("Паспортные данные")]),r("label",{attrs:{for:"type"}},[t._v(" Тип документа "),r("span",[t._v("*")]),r("br"),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Паспорт"}},[t._v("Паспорт")]),r("option",{attrs:{value:"Свидетельство о рождении"}},[t._v("Свидетельство о рождении")]),r("option",{attrs:{value:"Вод. удостоверение"}},[t._v("Вод. удостоверение")])])]),r("label",{attrs:{for:"serial"}},[t._v(" Серия "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.serial,expression:"form.serial"}],staticClass:"input",attrs:{id:"serial",type:"text"},domProps:{value:t.form.serial},on:{input:function(e){e.target.composing||t.$set(t.form,"serial",e.target.value)}}})]),r("label",{attrs:{for:"number-pass"}},[t._v(" Номер "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.numberPass,expression:"form.numberPass"}],staticClass:"input",attrs:{id:"number-pass",type:"text"},domProps:{value:t.form.numberPass},on:{input:function(e){e.target.composing||t.$set(t.form,"numberPass",e.target.value)}}})]),t._m(5),r("label",{attrs:{for:"date-take"}},[t._v(" Дата выдачи "),r("span",[t._v("*")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dateTake,expression:"form.dateTake"}],staticClass:"input",attrs:{id:"date-take",type:"date"},domProps:{value:t.form.dateTake},on:{input:function(e){e.target.composing||t.$set(t.form,"dateTake",e.target.value)}}})])]),t._m(6),r("button",{attrs:{type:"submit"}},[t._v("Отправить")])])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("select",[r("option",{attrs:{selected:"",disabled:""}},[t._v("Выберите пол")]),r("option",{attrs:{value:"Мужской"}},[t._v("Мужской")]),r("option",{attrs:{value:"Женский"}},[t._v("Женский")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("select",[r("option",{attrs:{value:"Иванов"}},[t._v("Иванов")]),r("option",{attrs:{value:"Захаров"}},[t._v("Захаров")]),r("option",{attrs:{value:"Чернышева"}},[t._v("Чернышева")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Не отправлять СМС"),r("input",{staticClass:"check",attrs:{type:"checkbox"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"street"}},[t._v(" Улица "),r("br"),r("input",{staticClass:"input",attrs:{id:"street",type:"text"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"house"}},[t._v(" Дом "),r("br"),r("input",{staticClass:"input",attrs:{id:"house",type:"text"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"who"}},[t._v(" Кем выдан "),r("br"),r("input",{staticClass:"input",attrs:{id:"who",type:"text"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("span",[t._v("*")]),t._v("Поле обязательное для заполнения")])}],l=(r(4916),r(7601),r(379)),m={name:"PForm",data:function(){return{form:{last:null,first:null,patronimic:null,date:null,number:null,group:[],index:null,country:null,state:null,city:null,type:null,serial:null,numberPass:null,dateTake:null}}},validations:function(){return{form:{last:{required:l.C1,alpha:function(t){return/^[а-яё]*$/i.test(t)}},first:{required:l.C1,alpha:function(t){return/^[а-яё]*$/i.test(t)}},patronimic:{alpha:function(t){return/^[а-яё]*$/i.test(t)}},date:{required:l.C1},number:{required:l.C1,validNumber:function(t){return/^7\d/.test(t)}},group:{required:l.C1},index:{validIndex:function(t){return/\d/.test(t)}},country:{validCounty:function(t){return/^[а-яё]*$/i.test(t)}},state:{validState:function(t){return/^[а-яё]*$/i.test(t)}},city:{required:l.C1,validCity:function(t){return/^[а-яё]*$/i.test(t)}},type:{required:l.C1},serial:{validSerial:function(t){return/\d/.test(t)}},numberPass:{validNumberPass:function(t){return/\d/.test(t)}},dateTake:{required:l.C1}}}},methods:{submit:function(){this.$v.form.$touch(),this.$v.form.$error||alert("Form submitted")}}},v=m,f=r(1001),p=(0,f.Z)(v,s,u,!1,null,"b77e9be6",null),c=p.exports,d={name:"App",components:{PForm:c}},_=d,b=(0,f.Z)(_,o,i,!1,null,null,null),$=b.exports;a.Z.use(n.ZP),a.Z.config.productionTip=!1,a.Z.config.devtools=!0,new a.Z({render:function(t){return t($)}}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(m=0;m<t.length;m++){a=t[m][0],n=t[m][1],o=t[m][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[u])}))?a.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(m--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var m=t.length;m>0&&t[m-1][2]>o;m--)t[m]=t[m-1];t[m]=[a,n,o]}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],u=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(u)var m=u(r)}for(e&&e(a);l<i.length;l++)o=i[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(m)},a=self["webpackChunkform_vuejs"]=self["webpackChunkform_vuejs"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2062)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.cc649e88.js.map