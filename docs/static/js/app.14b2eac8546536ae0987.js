webpackJsonp([1],{0:function(t,e){},"7WFO":function(t,e){},"9nRp":function(t,e){},EGUE:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("/ocq"),i=a("ESwS"),r=a.n(i),o=a("9VIl"),l=a.n(o),c=a("8+8L"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header clearfix"},[e("a",{attrs:{href:"/"}},[e("h3",{staticClass:"text-muted"},[this._v("Simulador")])])])}]};var u=a("VU/8")({name:"Header"},v,!1,function(t){a("EGUE")},"data-v-cc68cca2",null).exports,m=a("+cKO"),d={name:"LoanPreview",props:["loanValue","months","interestRate"],computed:{monthPayment:function(){var t=this.interestRate/100,e=Math.ceil(this.loanValue*t/(1-1/Math.pow(1+t,this.months))*100)/100;return isNaN(e)?0:e},total:function(){var t=Math.ceil(this.months*this.monthPayment*100)/100;return isNaN(t)?0:t}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loan-preview"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"w-50"},[t._v("Valor")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.loanValue.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Parcelas")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.months.toLocaleString("pt-BR")))])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Juros")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.interestRate.toLocaleString("pt-BR",{minimumFractionDigits:2}))+" %")])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Valor Parcelas")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.monthPayment.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Total")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.total.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])])])])])},staticRenderFns:[]};var _=a("VU/8")(d,p,!1,function(t){a("9nRp")},"data-v-0eb0d375",null).exports,f={name:"Loan",components:{Money:o.Money,LoanPreview:_},data:function(){return{loan:{value:0,format:{decimal:",",thousands:".",prefix:"R$ ",suffix:"",precision:2,masked:!1}},months:3,interestRate:{value:3,format:{decimal:",",thousands:".",prefix:"",suffix:" %",precision:2,masked:!1}}}},validations:{loan:{value:{between:Object(m.between)(0,1e5)}},interestRate:{value:{between:Object(m.between)(3,8)}}},methods:{submit:function(){this.$store.setLoan({months:this.months,value:this.loan.value,interestRate:this.interestRate.value}),this.$router.push("client")}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loan"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Valor Empréstimo")]),t._v(" "),a("money",t._b({staticClass:"form-control",class:{"is-invalid":t.$v.loan.value.$error},on:{input:function(e){t.$v.loan.value.$touch()}},model:{value:t.loan.value,callback:function(e){t.$set(t.loan,"value",e)},expression:"loan.value"}},"money",t.loan.format,!1)),t._v(" "),t.$v.loan.value.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.loan.value.between?t._e():a("span",[t._v("Error")])]):t._e()],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Parcelas")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.months,expression:"months"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.months=e.target.multiple?a:a[0]}}},[a("option",[t._v("3")]),t._v(" "),a("option",[t._v("4")]),t._v(" "),a("option",[t._v("5")]),t._v(" "),a("option",[t._v("6")]),t._v(" "),a("option",[t._v("7")]),t._v(" "),a("option",[t._v("8")]),t._v(" "),a("option",[t._v("9")]),t._v(" "),a("option",[t._v("10")]),t._v(" "),a("option",[t._v("11")]),t._v(" "),a("option",[t._v("12")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Juros")]),t._v(" "),a("money",t._b({staticClass:"form-control",class:{"is-invalid":t.$v.interestRate.value.$error},on:{input:function(e){t.$v.interestRate.value.$touch()}},model:{value:t.interestRate.value,callback:function(e){t.$set(t.interestRate,"value",e)},expression:"interestRate.value"}},"money",t.interestRate.format,!1)),t._v(" "),t.$v.interestRate.value.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.interestRate.value.between?t._e():a("span",[t._v("Error")])]):t._e()],1)]),t._v(" "),a("div",{staticClass:"card preview"},[a("div",{staticClass:"card-header"},[t._v("\n      Resultado\n    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("loan-preview",{attrs:{"loan-value":t.loan.value,months:t.months,"interest-rate":t.interestRate.value}})],1)]),t._v(" "),a("button",{staticClass:"btn btn-success submit-button",on:{click:t.submit}},[t._v("Enviar")])])},staticRenderFns:[]};var C=a("VU/8")(f,h,!1,function(t){a("YtwD")},"data-v-610f3fdd",null).exports,b={name:"App",components:{Loan:C,Header:u}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("Header"),this._v(" "),e("router-view")],1)])},staticRenderFns:[]};var R=a("VU/8")(b,$,!1,function(t){a("7WFO")},null,null).exports,w=a("hlPV"),y=a("d7EF"),g=a.n(y);function E(t){var e,a,n=(e=t.length,a=e-6,function(){return a=a<=2?9:a-1}),s=t.split("").reduce(function(t,e){return t+(e=parseInt(e))*n()},0);return s%11<2?0:11-s%11}var j=Object(i.withParams)({type:"cnpj"},function(t){return function(t){var e=t.replace(/\.|-|\//g,"");if(14!==e.length)return!1;if(/^(\d)\1*$/.test(e))return!1;var a=function(t,e){return[t.slice(0,e),t.slice(e)]}(e,12),n=g()(a,2),s=n[0],i=n[1],r=g()(i,2),o=r[0],l=r[1],c=E(s);return c.toString()===o&&E(s+c).toString()===l}(t)}),x={name:"ClientForm",components:{TheMask:w.TheMask},data:function(){return{email:"",cnpj:""}},validations:{email:{required:m.required,email:m.email},cnpj:{required:m.required,cnpj:j}},methods:{submit:function(){var t=this;this.$store.setClient({cnpj:this.cnpj,email:this.email}),this.$http.post("https://httpbin.org/post",this.$store.getState()).then(function(e){t.$router.push("/summary")},function(t){console.error(t)})}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"client-form"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("CNPJ")]),t._v(" "),a("the-mask",{staticClass:"form-control",class:{"is-invalid":t.$v.cnpj.$error},attrs:{mask:"##.###.###/####-##",masked:!0,type:"text"},on:{input:function(e){t.$v.cnpj.$touch()}},model:{value:t.cnpj,callback:function(e){t.cnpj=e},expression:"cnpj"}}),t._v(" "),t.$v.cnpj.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.cnpj.required?t._e():a("span",[t._v("Required")]),t._v(" "),t.$v.cnpj.cnpj?t._e():a("span",[t._v("CNPJ inválido")])]):t._e()],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.$v.email.$error},attrs:{type:"email"},domProps:{value:t.email},on:{input:[function(e){e.target.composing||(t.email=e.target.value)},function(e){t.$v.email.$touch()}]}}),t._v(" "),t.$v.email.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.email.required?t._e():a("span",[t._v("Required")]),t._v(" "),t.$v.email.email?t._e():a("span",[t._v("Invalid email")])]):t._e()])]),t._v(" "),a("button",{staticClass:"btn btn-success submit-button",on:{click:t.submit}},[t._v("Enviar")])])},staticRenderFns:[]};var L=a("VU/8")(x,k,!1,function(t){a("a7mv")},"data-v-39a8aa46",null).exports,P={name:"Summary",components:{LoanPreview:_},data:function(){var t=this.$store.getState();return{loan:t.loan,client:t.client}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary"},[t._m(0),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("\n      Resumo\n    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row client-info"},[a("div",{staticClass:"col-md-6"},[a("b",[t._v("CNPJ:")]),t._v(" "),a("span",[t._v(t._s(t.client.cnpj))])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("b",[t._v("Email:")]),t._v(" "),a("span",[t._v(t._s(t.client.email))])])]),t._v(" "),a("loan-preview",{attrs:{"loan-value":t.loan.value,months:t.loan.months,"interest-rate":t.loan.interestRate}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h2",{staticStyle:{color:"#0fad00"}},[this._v("Pedido realizado com sucesso")]),this._v(" "),e("p",{staticStyle:{"font-size":"20px"}},[this._v("Estamos analisando o pedido. Entraremos em contato por email com a resposta ao pedido. "),e("br"),this._v(" Veja abaixo um resumo do pedido")])])])}]};var F=a("VU/8")(P,S,!1,function(t){a("Q+tC")},"data-v-55ea0bd2",null).exports,V=new s.a({routes:[{path:"/",name:"Loan",component:C},{path:"/client",name:"ClientForm",component:L},{path:"/summary",name:"Summary",component:F}]});a("Jmt5");var N,q=(N={loan:{value:0,months:0,interestRate:0},client:{cnpj:"",email:""}},{getState:function(){return N},setLoan:function(t){N.loan=t},setClient:function(t){N.client=t}});n.a.config.productionTip=!1,n.a.use(s.a),n.a.use(r.a),n.a.use(c.a),n.a.use(l.a,{precision:4}),n.a.mixin({beforeCreate:function(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}),new n.a({el:"#app",router:V,store:q,components:{App:R},template:"<App/>"})},"Q+tC":function(t,e){},YtwD:function(t,e){},a7mv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.14b2eac8546536ae0987.js.map