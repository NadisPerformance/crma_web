_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"1Zr2":function(t,n,e){"use strict";var r=e("1OyB"),a=e("vuIU"),c=e("JX7q"),i=e("Ji7U"),u=e("md7G"),l=e("foSv"),o=e("q1tI"),s=e.n(o),d=e("cGyd"),f=e("vbcS"),h=e("2/Fh"),b=e("nOHt"),p=e.n(b),m=s.a.createElement;function v(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var a=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var y=function(t){Object(i.a)(e,t);var n=v(e);function e(t){var a;Object(r.a)(this,e);var i=(a=n.call(this,t)).props.router.query.rentalId;return a.state={rentalId:i,rental:null},a.fariane=[{title:"Acceuil",path:"/"},{title:"Locations",path:"/rentals/"}],a.onDelete=a.onDelete.bind(Object(c.a)(a)),a}return Object(a.a)(e,[{key:"onDelete",value:function(){window.flash("La location a bien \xe9t\xe9 supprim\xe9e.","success"),this.props.history.push("/rentals/list")}},{key:"render",value:function(){var t=this.props.rentalId;return m(f.a,{mutation:d.b,variables:{id:t}},(function(t){return m("a",{style:{margin:3},onClick:function(n){n.preventDefault(),t().then((function(t){1==t.data.deleteRental.statut_code&&(alert("La location a bien \xe9t\xe9 supprim\xe9e.","success"),p.a.push("/rentals/list"))}))},className:"btn btn-danger btn-sm"},m("i",{className:"fa fa-trash",style:{color:"white"}}))}))}}]),e}(s.a.Component);n.a=Object(h.a)(Object(b.withRouter)(y))},GaG9:function(t,n,e){"use strict";e.d(n,"e",(function(){return f})),e.d(n,"c",(function(){return h})),e.d(n,"d",(function(){return b})),e.d(n,"f",(function(){return p})),e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return v}));var r=e("h4VS"),a=e("lTCR"),c=e.n(a);function i(){var t=Object(r.a)(["\n  mutation delete_car($id: ID!)  {\n    deleteCar(id:$id){\n        statut_code\n        message\n    }\n  }\n\n"]);return i=function(){return t},t}function u(){var t=Object(r.a)(["\n  mutation update_car($data:CarInput!)  {\n    createCar(data:$data){\n        id\n    }\n  }\n\n"]);return u=function(){return t},t}function l(){var t=Object(r.a)(["\n  mutation update_car($id: ID!, $data:CarInput!)  {\n    updateCar(id:$id,data:$data){\n        id\n        plate_number\n        brandId\n        model\n        model_date\n        categoryId\n        price\n        colorId\n        chassis_number\n        statusId\n        brand{\n          id\n          name\n        }\n        category{\n          id\n          title\n        }\n        color{\n          id\n          name\n        }\n    }\n  }\n\n"]);return l=function(){return t},t}function o(){var t=Object(r.a)(["\nquery get_car_to_update($carId:ID!){\n    car(id:$carId){\n        id\n        plate_number\n        brandId\n        model\n        model_date\n        categoryId\n        price\n        colorId\n        chassis_number\n        statusId\n  }\n}\n"]);return o=function(){return t},t}function s(){var t=Object(r.a)(["\nquery get_car($carId:ID!){\n    car(id:$carId){\n        id\n        plate_number\n        brandId\n        model\n        model_date\n        categoryId\n        price\n        colorId\n        chassis_number\n        statusId\n        picture\n        picture_url\n        createdAt\n        updatedAt\n        brand{\n          id\n          name\n        }\n        category{\n          id\n          title\n        }\n        color{\n          id\n          name\n        }\n        status{\n          id\n          title\n        }\n        car_insurances{\n          id\n          date_begin\n          date_end\n          insurance{\n            id\n            name\n          }\n        }\n        technical_controls{\n          id\n          date_begin\n          date_end\n        }\n  }\n}\n"]);return s=function(){return t},t}function d(){var t=Object(r.a)(["\n{\n  cars {\n    edges{\n        node{\n            id\n            plate_number\n            brandId\n            model\n            model_date\n            categoryId\n            price\n            colorId\n            chassis_number\n            statusId\n            picture_url\n            picture\n            brand{\n              id\n              name\n            }\n            category{\n              id\n              title\n            }\n            color{\n              id\n              name\n            }\n            status{\n              id\n              title\n            }\n        }\n    }\n  }\n}\n"]);return d=function(){return t},t}var f=c()(d()),h=c()(s()),b=c()(o()),p=c()(l()),m=c()(u()),v=c()(i())},MBJH:function(t,n,e){"use strict";var r=e("wx14"),a=e("zLVn"),c=e("TSYQ"),i=e.n(c),u=e("q1tI"),l=e.n(u),o=e("vUet"),s=l.a.forwardRef((function(t,n){var e=t.bsPrefix,c=t.className,u=t.striped,s=t.bordered,d=t.borderless,f=t.hover,h=t.size,b=t.variant,p=t.responsive,m=Object(a.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(o.a)(e,"table"),y=i()(c,v,b&&v+"-"+b,h&&v+"-"+h,u&&v+"-striped",s&&v+"-bordered",d&&v+"-borderless",f&&v+"-hover"),_=l.a.createElement("table",Object(r.a)({},m,{className:y,ref:n}));if(p){var I=v+"-responsive";return"string"===typeof p&&(I=I+"-"+p),l.a.createElement("div",{className:I},_)}return _}));n.a=s},YccH:function(t,n,e){"use strict";e.r(n);var r=e("1OyB"),a=e("vuIU"),c=e("JX7q"),i=e("Ji7U"),u=e("md7G"),l=e("foSv"),o=(e("8Kt/"),e("YFqc")),s=e.n(o),d=e("q1tI"),f=e.n(d),h=e("hJmc"),b=e("GaG9"),p=e("vbcS"),m=e("2/Fh"),v=e("Jz+W"),y=e("KD6P"),_=e("F1wk"),I=e("3Mv1"),O=e("nOHt"),g=e("3Z9Z"),j=e("JI6e"),D=f.a.createElement;function R(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var a=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var w=function(t){Object(i.a)(e,t);var n=R(e);function e(t){return Object(r.a)(this,e),n.call(this,t)}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props.car;return t?D(g.a,{className:"col-sm-12"},D(j.a,{className:"col-sm-6 table-responsive"},D("table",{className:"table"},D("tbody",null,D("tr",null,D("td",{colspan:"2"},D("center",null,t.picture&&D("img",{src:t.picture_url,height:"150px"})))),D("tr",null,D("th",{style:{width:"50%"}},"Marque:"),D("td",null,t.brand&&t.brand.name)),D("tr",null,D("th",{style:{width:"50%"}},"Mod\xe8le:"),D("td",null,t.model)),D("tr",null,D("th",{style:{width:"50%"}},"Date du mod\xe8le:"),D("td",null,t.model_date)),D("tr",null,D("th",{style:{width:"50%"}},"Immatriculation:"),D("td",null,t.plate_number)),D("tr",null,D("th",{style:{width:"50%"}},"Num\xe9ro de chassis:"),D("td",null,t.chassis_number)),D("tr",null,D("th",{style:{width:"50%"}},"Cat\xe9gorie:"),D("td",null,t.category&&t.category.title))))),D(j.a,{className:"col-sm-6 table-responsive"},D("table",{className:"table"},D("tbody",null,D("tr",null,D("th",{style:{width:"50%"}},"Prix de location:"),D("td",null,t.price," Dhs")),D("tr",null,D("th",{style:{width:"50%"}},"Couleur:"),D("td",null,t.color&&t.color.name)),D("tr",null,D("th",{style:{width:"50%"}},"Statut:"),D("td",null,t.status&&t.status.title)),D("tr",null,D("th",{style:{width:"50%"}},"Date de cr\xe9ation:"),D("td",null,new Date(t.createdAt).toLocaleString())),D("tr",null,D("th",{style:{width:"50%"}},"Derni\xe8re modification:"),D("td",null,new Date(t.updatedAt).toLocaleString())))))):null}}]),e}(f.a.Component),N=Object(O.withRouter)(w),k=e("MBJH"),$=e("wd/R"),C=e.n($),Y=e("1Zr2"),q=f.a.createElement;function S(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var a=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var x=function(t){Object(i.a)(e,t);var n=S(e);function e(t){return Object(r.a)(this,e),n.call(this,t)}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props.car_insurances;return t?q(g.a,{className:"col-sm-12"},q(k.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},q("thead",null,q("tr",null,q("th",null,"#ID"),q("th",null,"Date de d\xe9but"),q("th",null,"Date de fin"),q("th",null,"Soci\xe9t\xe9 d'assurance"),q("th",null,"Actions"))),q("tbody",null,t.map((function(t,n){return q("tr",{key:t.id},q("td",null,t.id),q("td",null,C()(t.date_begin).format("DD/MM/YYYY")),q("td",null,C()(t.date_end).format("DD/MM/YYYY")," "),q("td",null,t.insurance&&t.insurance.name),q("td",null,q(s.a,{href:"/car_insurances/view?car_insuranceId="+t.id},q("a",{style:{margin:3},className:"btn btn-info btn-sm"},q("i",{className:"fa fa-eye"}))),q(s.a,{href:"/car_insurances/edit?car_insuranceId="+t.id},q("a",{style:{margin:3},className:"btn btn-success btn-sm"},q("i",{className:"fa fa-pen-alt"}))),q(Y.a,{car_insuranceId:t.id})))}))))):q("p",null,q("center",null,"Aucune assurance attach\xe9e au v\xe9hicule."))}}]),e}(f.a.Component),E=Object(O.withRouter)(x),M=f.a.createElement;function P(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var a=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var A=function(t){Object(i.a)(e,t);var n=P(e);function e(t){return Object(r.a)(this,e),n.call(this,t)}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props.technical_controls;return t?M(g.a,{className:"col-sm-12"},M(k.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},M("thead",null,M("tr",null,M("th",null,"#ID"),M("th",null,"Date de d\xe9but"),M("th",null,"Date de fin"),M("th",null,"Actions"))),M("tbody",null,t.map((function(t,n){return M("tr",{key:t.id},M("td",null,t.id),M("td",null,C()(t.date_begin).format("DD/MM/YYYY")),M("td",null,C()(t.date_end).format("DD/MM/YYYY")," "),M("td",null,M(s.a,{href:"/technical_controls/view?technical_controlId="+t.id},M("a",{style:{margin:3},className:"btn btn-info btn-sm"},M("i",{className:"fa fa-eye"}))),M(s.a,{href:"/technical_controls/edit?technical_controlId="+t.id},M("a",{style:{margin:3},className:"btn btn-success btn-sm"},M("i",{className:"fa fa-pen-alt"}))),M(Y.a,{technical_controlId:t.id})))}))))):M("p",null,M("center",null,"Aucune contr\xf4le technique attach\xe9 au v\xe9hicule."))}}]),e}(f.a.Component),J=Object(O.withRouter)(A),G=e("eKPR"),L=f.a.createElement;function K(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var a=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var V=function(t){Object(i.a)(e,t);var n=K(e);function e(t){var a;Object(r.a)(this,e);var i=(a=n.call(this,t)).props.router.query.carId;return a.state={carId:i},a.fariane=[{title:"Acceuil",path:"/"},{title:"V\xe9hicules",path:"/cars/"}],a.onDelete=a.onDelete.bind(Object(c.a)(a)),a}return Object(a.a)(e,[{key:"onDelete",value:function(){window.flash("Le v\xe9hicule a bien \xe9t\xe9 supprim\xe9e.","success"),this.props.history.push("/cars/")}},{key:"header",value:function(){var t=this.state.carId;return L(f.a.Fragment,null,L("h3",{className:"card-title"},"V\xe9hicule #"+t),L("div",{className:"card-tools"},L(s.a,{href:"/cars/edit?carId="+t},L("a",{className:"btn btn-success btn-sm","data-toggle":"tooltip",title:"","data-original-title":"Nouvelle"},L("i",{className:"fa fa-pen-alt"})," Modifier")),L(G.a,{carId:t})))}},{key:"render",value:function(){var t=this.state.carId;return L(h.a,null,L(_.a,{title:"V\xe9hicules",fariane:this.fariane},L(I.a,{header:this.header()},L(p.b,{query:b.c,variables:{carId:t},pollInterval:3e3},(function(t){var n=t.loading,e=t.error,r=t.data;return n?L("div",null,"Chargement en cours ..."):e?(console.log(e),L("div",null,"Error")):(console.log(r),r.car?L(v.a,{defaultActiveKey:"car",id:"uncontrolled-tab-example",style:{backgroundColor:"#f4f6f9",margin:"3px",paddingBottom:"2px"}},L(y.a,{eventKey:"car",title:"V\xe9hicule"},L(N,{car:r.car})),L(y.a,{eventKey:"car_insurance",title:"Assurance"},L(E,{car_insurances:r.car.car_insurances})),L(y.a,{eventKey:"technical_control",title:"Contr\xf4le technique"},L(J,{technical_controls:r.car.technical_controls}))):"Car not found")})))))}}]),e}(f.a.Component);n.default=Object(m.a)(Object(O.withRouter)(V))},cGyd:function(t,n,e){"use strict";e.d(n,"e",(function(){return f})),e.d(n,"c",(function(){return h})),e.d(n,"d",(function(){return b})),e.d(n,"f",(function(){return p})),e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return v}));var r=e("h4VS"),a=e("lTCR"),c=e.n(a);function i(){var t=Object(r.a)(["\n  mutation delete_rental($id: ID!)  {\n    deleteRental(id:$id){\n        statut_code\n        message\n    }\n  }\n\n"]);return i=function(){return t},t}function u(){var t=Object(r.a)(["\n  mutation update_rental($data:RentalInput!)  {\n    createRental(data:$data){\n        id\n    }\n  }\n\n"]);return u=function(){return t},t}function l(){var t=Object(r.a)(["\n  mutation update_rental($id: ID!, $data:RentalInput!)  {\n    updateRental(id:$id,data:$data){\n      id\n      bookingId\n      carId\n      customerId\n      second_driverId\n      date_begin\n      date_end\n    }\n  }\n\n"]);return l=function(){return t},t}function o(){var t=Object(r.a)(["\nquery get_rental($rentalId:ID!){\n  rental(id:$rentalId){\n    id\n    bookingId\n    carId\n    customerId\n    second_driverId\n    date_begin\n    date_end\n  }\n}\n"]);return o=function(){return t},t}function s(){var t=Object(r.a)(["\nquery get_rental($rentalId:ID!){\n  rental(id:$rentalId){\n    id\n    bookingId\n    carId\n    customerId\n    second_driverId\n    date_begin\n    date_end\n    customer{\n      id\n      firstname\n      lastname\n      gender\n      cni\n      phone\n      email\n      address\n      city\n    }\n    car{\n      id\n      plate_number\n      model\n      model_date\n      price\n      chassis_number\n      category{\n        id\n        title\n      }\n      brand{\n        id\n        name\n      }\n      color{\n        id\n        name\n      }\n    }\n  }\n}\n"]);return s=function(){return t},t}function d(){var t=Object(r.a)(["\n{\n  rentals {\n    edges{\n        node{\n            id\n            bookingId\n            carId\n            customerId\n            second_driverId\n            date_begin\n            date_end\n            customer{\n              id\n              firstname\n              lastname\n              gender\n            }\n            car{\n              id\n              plate_number\n            }\n\n        }\n    }\n  }\n}\n"]);return d=function(){return t},t}var f=c()(d()),h=c()(s()),b=c()(o()),p=c()(l()),m=c()(u()),v=c()(i())},eKPR:function(t,n,e){"use strict";var r=e("1OyB"),a=e("vuIU"),c=e("JX7q"),i=e("Ji7U"),u=e("md7G"),l=e("foSv"),o=e("q1tI"),s=e.n(o),d=e("GaG9"),f=e("vbcS"),h=e("2/Fh"),b=e("nOHt"),p=e.n(b),m=s.a.createElement;function v(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var a=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var y=function(t){Object(i.a)(e,t);var n=v(e);function e(t){var a;Object(r.a)(this,e);var i=(a=n.call(this,t)).props.router.query.carId;return a.state={carId:i,car:null},a.fariane=[{title:"Acceuil",path:"/"},{title:"V\xe9hicules",path:"/cars/"}],a.onDelete=a.onDelete.bind(Object(c.a)(a)),a}return Object(a.a)(e,[{key:"onDelete",value:function(){window.flash("Le v\xe9hicule a bien \xe9t\xe9 supprim\xe9e.","success"),this.props.history.push("/cars/")}},{key:"render",value:function(){var t=this.props.carId;return m(f.a,{mutation:d.b,variables:{id:t}},(function(t){return m("a",{style:{margin:3},onClick:function(n){n.preventDefault(),t().then((function(t){1==t.data.deleteCar.statut_code&&(alert("Le v\xe9hicule a bien \xe9t\xe9 supprim\xe9.","success"),p.a.push("/cars/list"))}))},className:"btn btn-danger btn-sm"},m("i",{className:"fa fa-trash",style:{color:"white"}}))}))}}]),e}(s.a.Component);n.a=Object(h.a)(Object(b.withRouter)(y))},r8kv:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cars/view",function(){return e("YccH")}])}},[["r8kv",0,2,7,1,3,4,5,8,12]]]);