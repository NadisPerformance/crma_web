_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"+Lql":function(n,e,t){"use strict";t.r(e);var r=t("1OyB"),a=t("vuIU"),i=t("JX7q"),u=t("Ji7U"),s=t("md7G"),c=t("foSv"),d=(t("8Kt/"),t("YFqc")),o=t.n(d),l=t("q1tI"),f=t.n(l),b=t("hJmc"),v=t("lF6m"),m=t("vbcS"),p=t("2/Fh"),h=t("MBJH"),y=t("F1wk"),N=t("3Mv1"),O=(t("v8KW"),f.a.createElement);function w(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(c.a)(n);if(e){var a=Object(c.a)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return Object(s.a)(this,t)}}var I=function(n){Object(u.a)(t,n);var e=w(t);function t(n){var a;return Object(r.a)(this,t),(a=e.call(this,n)).fariane=[{title:"Acceuil",path:"/"},{title:"Brands",path:"/brands/"}],a.onDelete=a.onDelete.bind(Object(i.a)(a)),a}return Object(a.a)(t,[{key:"renderHeader",value:function(){}},{key:"header",value:function(){return console.log(this.props.brand),O(f.a.Fragment,null,O("h3",{className:"card-title"},"Marques"),O("div",{className:"card-tools"},O(o.a,{href:"/brands/add"},O("a",{className:"btn btn-success btn-xs"},O("i",{className:"fa fa-plus"})," Nouvelle marque"))))}},{key:"onDelete",value:function(){window.flash("L'utilisateur a bien \xe9t\xe9 supprim\xe9e.","success")}},{key:"render",value:function(){return O(b.a,null,O(y.a,{title:"Marques",fariane:this.fariane},O(N.a,{header:this.header()},O(m.b,{query:v.b,pollInterval:3e3},(function(n){var e=n.loading,t=n.error,r=n.data;return e?O("div",null,"Chargement en cours ..."):t?(console.log(t),O("div",null,"Error")):O(h.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},O("thead",null,O("tr",null,O("th",null,"#ID"),O("th",null,"Nom"),O("th",null,"Actions"))),O("tbody",null,r.brands.edges.map((function(n,e){var t=n.node;return O("tr",{key:t.id},O("td",null,t.id),O("td",null,t.name),O("td",null,O(o.a,{href:"/brands/view?brandId="+t.id},O("a",{style:{margin:3},className:"btn btn-info btn-sm"},O("i",{className:"fa fa-eye"}))),O(o.a,{href:"/brands/edit?brandId="+t.id},O("a",{style:{margin:3},className:"btn btn-success btn-sm"},O("i",{className:"fa fa-pen-alt"})))))}))))})))))}}]),t}(f.a.Component);e.default=Object(p.a)(I,!0)},MBJH:function(n,e,t){"use strict";var r=t("wx14"),a=t("zLVn"),i=t("TSYQ"),u=t.n(i),s=t("q1tI"),c=t.n(s),d=t("vUet"),o=c.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.className,s=n.striped,o=n.bordered,l=n.borderless,f=n.hover,b=n.size,v=n.variant,m=n.responsive,p=Object(a.a)(n,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(d.a)(t,"table"),y=u()(i,h,v&&h+"-"+v,b&&h+"-"+b,s&&h+"-striped",o&&h+"-bordered",l&&h+"-borderless",f&&h+"-hover"),N=c.a.createElement("table",Object(r.a)({},p,{className:y,ref:e}));if(m){var O=h+"-responsive";return"string"===typeof m&&(O=O+"-"+m),c.a.createElement("div",{className:O},N)}return N}));e.a=o},lF6m:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return l})),t.d(e,"c",(function(){return f}));var r=t("h4VS"),a=t("lTCR"),i=t.n(a);function u(){var n=Object(r.a)(["\n  mutation update_brand($data:BrandInput!)  {\n    createBrand(data:$data){\n        id\n    }\n  }\n\n"]);return u=function(){return n},n}function s(){var n=Object(r.a)(["\n  mutation update_brand($id: ID!, $data:BrandInput!)  {\n    updateBrand(id:$id,data:$data){\n        id\n        name\n    }\n  }\n\n"]);return s=function(){return n},n}function c(){var n=Object(r.a)(["\nquery get_brand($brandId:ID!){\n  brand(id:$brandId){\n    id\n    name\n  }\n}\n"]);return c=function(){return n},n}function d(){var n=Object(r.a)(["\n{\n    brands {\n    edges{\n        node{\n            id\n            name\n        }\n    }\n  }\n}\n"]);return d=function(){return n},n}var o=i()(d()),l=i()(c()),f=i()(s());i()(u())},nIyT:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brands/list",function(){return t("+Lql")}])},v8KW:function(n,e,t){"use strict";t("wx14"),t("o0o1"),t("rePB"),t("HaE+"),t("1OyB"),t("vuIU"),t("Ji7U"),t("md7G"),t("foSv");var r=t("q1tI"),a=t.n(r);t("nOHt"),t("E/DK"),a.a.createElement}},[["nIyT",0,2,1,3,4,5]]]);