_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[40],{"1Zr2":function(n,t,e){"use strict";var r=e("1OyB"),a=e("vuIU"),i=e("JX7q"),c=e("Ji7U"),u=e("md7G"),o=e("foSv"),l=e("q1tI"),s=e.n(l),d=e("cGyd"),f=e("vbcS"),m=e("2/Fh"),b=e("nOHt"),p=e.n(b),h=s.a.createElement;function v(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(o.a)(n);if(t){var a=Object(o.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var y=function(n){Object(c.a)(e,n);var t=v(e);function e(n){var a;Object(r.a)(this,e);var c=(a=t.call(this,n)).props.router.query.rentalId;return a.state={rentalId:c,rental:null},a.fariane=[{title:"Acceuil",path:"/"},{title:"Locations",path:"/rentals/"}],a.onDelete=a.onDelete.bind(Object(i.a)(a)),a}return Object(a.a)(e,[{key:"onDelete",value:function(){window.flash("La location a bien \xe9t\xe9 supprim\xe9e.","success"),this.props.history.push("/rentals/list")}},{key:"render",value:function(){var n=this.props.rentalId;return h(f.a,{mutation:d.b,variables:{id:n}},(function(n){return h("a",{style:{margin:3},onClick:function(t){t.preventDefault(),n().then((function(n){1==n.data.deleteRental.statut_code&&(alert("La location a bien \xe9t\xe9 supprim\xe9e.","success"),p.a.push("/rentals/list"))}))},className:"btn btn-danger btn-sm"},h("i",{className:"fa fa-trash",style:{color:"white"}}))}))}}]),e}(s.a.Component);t.a=Object(m.a)(Object(b.withRouter)(y))},MBJH:function(n,t,e){"use strict";var r=e("wx14"),a=e("zLVn"),i=e("TSYQ"),c=e.n(i),u=e("q1tI"),o=e.n(u),l=e("vUet"),s=o.a.forwardRef((function(n,t){var e=n.bsPrefix,i=n.className,u=n.striped,s=n.bordered,d=n.borderless,f=n.hover,m=n.size,b=n.variant,p=n.responsive,h=Object(a.a)(n,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(l.a)(e,"table"),y=c()(i,v,b&&v+"-"+b,m&&v+"-"+m,u&&v+"-striped",s&&v+"-bordered",d&&v+"-borderless",f&&v+"-hover"),g=o.a.createElement("table",Object(r.a)({},h,{className:y,ref:t}));if(p){var _=v+"-responsive";return"string"===typeof p&&(_=_+"-"+p),o.a.createElement("div",{className:_},g)}return g}));t.a=s},"O+Uc":function(n,t,e){"use strict";e.d(t,"d",(function(){return d})),e.d(t,"c",(function(){return f})),e.d(t,"e",(function(){return m})),e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return p}));var r=e("h4VS"),a=e("lTCR"),i=e.n(a);function c(){var n=Object(r.a)(["\n  mutation delete_booking($id: ID!)  {\n    deleteBooking(id:$id){\n        statut_code\n        message\n    }\n  }\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  mutation update_booking($data:BookingInput!)  {\n    createBooking(data:$data){\n        id\n    }\n  }\n\n"]);return u=function(){return n},n}function o(){var n=Object(r.a)(["\n  mutation update_booking($id: ID!, $data:BookingInput!)  {\n    updateBooking(id:$id,data:$data){\n      id\n      carId\n      customerId\n      date_begin\n      date_end\n      montant_avance\n    }\n  }\n\n"]);return o=function(){return n},n}function l(){var n=Object(r.a)(["\nquery booking($bookingId:ID!){\n  booking(id:$bookingId){\n    id\n\n    carId\n    customerId\n\n    date_begin\n    date_end\n    montant_avance\n    customer{\n      id\n      firstname\n      lastname\n      gender\n      cni\n      phone\n      email\n      address\n      city\n    }\n    car{\n      id\n      plate_number\n      model\n      model_date\n      price\n      chassis_number\n      category{\n        id\n        title\n      }\n      brand{\n        id\n        name\n      }\n      color{\n        id\n        name\n      }\n    }\n  }\n}\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n{\n  bookings {\n    edges{\n        node{\n            id\n            carId\n            customerId\n            date_begin\n            date_end\n            montant_avance\n            customer{\n              id\n              firstname\n              lastname\n              gender\n            }\n            car{\n              id\n              plate_number\n            }\n\n        }\n    }\n  }\n}\n"]);return s=function(){return n},n}var d=i()(s()),f=i()(l()),m=i()(o()),b=i()(u()),p=i()(c())},cGyd:function(n,t,e){"use strict";e.d(t,"e",(function(){return f})),e.d(t,"c",(function(){return m})),e.d(t,"d",(function(){return b})),e.d(t,"f",(function(){return p})),e.d(t,"a",(function(){return h})),e.d(t,"b",(function(){return v}));var r=e("h4VS"),a=e("lTCR"),i=e.n(a);function c(){var n=Object(r.a)(["\n  mutation delete_rental($id: ID!)  {\n    deleteRental(id:$id){\n        statut_code\n        message\n    }\n  }\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  mutation update_rental($data:RentalInput!)  {\n    createRental(data:$data){\n        id\n    }\n  }\n\n"]);return u=function(){return n},n}function o(){var n=Object(r.a)(["\n  mutation update_rental($id: ID!, $data:RentalInput!)  {\n    updateRental(id:$id,data:$data){\n      id\n      bookingId\n      carId\n      customerId\n      second_driverId\n      date_begin\n      date_end\n    }\n  }\n\n"]);return o=function(){return n},n}function l(){var n=Object(r.a)(["\nquery get_rental($rentalId:ID!){\n  rental(id:$rentalId){\n    id\n    bookingId\n    carId\n    customerId\n    second_driverId\n    date_begin\n    date_end\n  }\n}\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\nquery get_rental($rentalId:ID!){\n  rental(id:$rentalId){\n    id\n    bookingId\n    carId\n    customerId\n    second_driverId\n    date_begin\n    date_end\n    customer{\n      id\n      firstname\n      lastname\n      gender\n      cni\n      phone\n      email\n      address\n      city\n    }\n    car{\n      id\n      plate_number\n      model\n      model_date\n      price\n      chassis_number\n      category{\n        id\n        title\n      }\n      brand{\n        id\n        name\n      }\n      color{\n        id\n        name\n      }\n    }\n  }\n}\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n{\n  rentals {\n    edges{\n        node{\n            id\n            bookingId\n            carId\n            customerId\n            second_driverId\n            date_begin\n            date_end\n            customer{\n              id\n              firstname\n              lastname\n              gender\n            }\n            car{\n              id\n              plate_number\n            }\n\n        }\n    }\n  }\n}\n"]);return d=function(){return n},n}var f=i()(d()),m=i()(s()),b=i()(l()),p=i()(o()),h=i()(u()),v=i()(c())},eYRm:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers/view",function(){return e("xCBx")}])},xCBx:function(n,t,e){"use strict";e.r(t);var r=e("1OyB"),a=e("vuIU"),i=e("JX7q"),c=e("Ji7U"),u=e("md7G"),o=e("foSv"),l=(e("8Kt/"),e("YFqc")),s=e.n(l),d=e("q1tI"),f=e.n(d),m=e("hJmc"),b=e("xmSt"),p=e("vbcS"),h=e("2/Fh"),v=e("Jz+W"),y=e("KD6P"),g=e("F1wk"),_=e("3Mv1"),I=e("nOHt"),O=e("3Z9Z"),j=e("JI6e"),D=f.a.createElement;function k(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(o.a)(n);if(t){var a=Object(o.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var R=function(n){Object(c.a)(e,n);var t=k(e);function e(n){return Object(r.a)(this,e),t.call(this,n)}return Object(a.a)(e,[{key:"render",value:function(){var n=this.props.customer;return n?D(O.a,{className:"col-sm-12"},D(j.a,{className:"col-sm-6 table-responsive"},D("table",{className:"table"},D("tbody",null,D("tr",null,D("th",{style:{width:"50%"}},"Type du client:"),D("td",null,0==n.type?"Particulier":"Soci\xe9t\xe9")),1==n.type&&D("tr",null,D("th",{style:{width:"50%"}},"Nom de la soci\xe9t\xe9:"),D("td",null,n.company_name)),D("tr",null,D("th",{style:{width:"50%"}},"Civilit\xe9:"),D("td",null,n.gender)),D("tr",null,D("th",{style:{width:"50%"}},"Nom:"),D("td",null,n.lastname)),D("tr",null,D("th",{style:{width:"50%"}},"Pr\xe9nom:"),D("td",null,n.firstname)),D("tr",null,D("th",{style:{width:"50%"}},"Date de naissance:"),D("td",null,n.birthday)),D("tr",null,D("th",{style:{width:"50%"}},"CNI:"),D("td",null,n.cni)),D("tr",null,D("th",{style:{width:"50%"}},"Permis de conduite:"),D("td",null,n.driver_license)),D("tr",null,D("th",{style:{width:"50%"}},"Ville:"),D("td",null,n.city)),D("tr",null,D("th",{style:{width:"50%"}},"Adresse:"),D("td",null,n.address)),D("tr",null,D("th",{style:{width:"50%"}},"E-mail:"),D("td",null,n.email)),D("tr",null,D("th",{style:{width:"50%"}},"T\xe9l\xe9phone:"),D("td",null,n.phone))))),D(j.a,{className:"col-sm-6 table-responsive"},D("table",{className:"table"},D("tbody",null,D("tr",null,D("th",{style:{width:"50%"}},"Date de cr\xe9ation:"),D("td",null,new Date(n.createdAt).toLocaleString())),D("tr",null,D("th",{style:{width:"50%"}},"Derni\xe8re modification:"),D("td",null,new Date(n.updatedAt).toLocaleString())))))):null}}]),e}(f.a.Component),w=Object(I.withRouter)(R),N=e("MBJH"),$=e("wd/R"),C=e.n($),Y=e("1Zr2"),S=f.a.createElement;function x(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(o.a)(n);if(t){var a=Object(o.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var q=function(n){Object(c.a)(e,n);var t=x(e);function e(n){return Object(r.a)(this,e),t.call(this,n)}return Object(a.a)(e,[{key:"render",value:function(){var n=this.props.rentals;return n?S(O.a,{className:"col-sm-12"},n.length>0&&S(N.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},S("thead",null,S("tr",null,S("th",null,"#ID"),S("th",null,"Date de d\xe9but"),S("th",null,"Date de fin"),S("th",null,"V\xe9hicule"),S("th",null,"Actions"))),S("tbody",null,n.map((function(n,t){return S("tr",{key:n.id},S("td",null,n.id),S("td",null,C()(n.date_begin).format("DD/MM/YYYY")),S("td",null,C()(n.date_end).format("DD/MM/YYYY")," "),S("td",null,n.car&&n.car.plate_number),S("td",null,S(s.a,{href:"/rentals/view?rentalId="+n.id},S("a",{style:{margin:3},className:"btn btn-info btn-sm"},S("i",{className:"fa fa-eye"}))),S(s.a,{href:"/rentals/edit?rentalId="+n.id},S("a",{style:{margin:3},className:"btn btn-success btn-sm"},S("i",{className:"fa fa-pen-alt"}))),S(Y.a,{rentalId:n.id})))})))),0==n.length&&S("p",{style:{margin:"5px"}},"Aucune location effectu\xe9e par le client.")):S("p",null,S("center",null,"Aucune location effectu\xe9e par le client."))}}]),e}(f.a.Component),A=Object(I.withRouter)(q),B=(e("y/oY"),f.a.createElement);function E(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(o.a)(n);if(t){var a=Object(o.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var P=function(n){Object(c.a)(e,n);var t=E(e);function e(n){return Object(r.a)(this,e),t.call(this,n)}return Object(a.a)(e,[{key:"render",value:function(){var n=this.props.bookings;return n?B(O.a,{className:"col-sm-12"},n.length>0&&B(N.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},B("thead",null,B("tr",null,B("th",null,"#ID"),B("th",null,"Date de d\xe9but"),B("th",null,"Date de fin"),B("th",null,"V\xe9hicule"),B("th",null,"Actions"))),B("tbody",null,n.map((function(n,t){return B("tr",{key:n.id},B("td",null,n.id),B("td",null,C()(n.date_begin).format("DD/MM/YYYY")),B("td",null,C()(n.date_end).format("DD/MM/YYYY")," "),B("td",null,n.car&&n.car.plate_number),B("td",null,B(s.a,{href:"/bookings/view?bookingId="+n.id},B("a",{style:{margin:3},className:"btn btn-info btn-sm"},B("i",{className:"fa fa-eye"}))),B(s.a,{href:"/bookings/edit?bookingId="+n.id},B("a",{style:{margin:3},className:"btn btn-success btn-sm"},B("i",{className:"fa fa-pen-alt"}))),B("bookingDeleteButton",{bookingId:n.id})))})))),0==n.length&&B("p",{style:{margin:"5px"}},"Aucune r\xe9servation effectu\xe9e par le client.")):B("p",null,B("center",null,"Aucune r\xe9servation effectu\xe9e par le client."))}}]),e}(f.a.Component),J=Object(I.withRouter)(P),M=f.a.createElement;function L(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(o.a)(n);if(t){var a=Object(o.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var U=function(n){Object(c.a)(e,n);var t=L(e);function e(n){var a;Object(r.a)(this,e);var c=(a=t.call(this,n)).props.router.query.customerId;return a.state={customerId:c},a.fariane=[{title:"Acceuil",path:"/"},{title:"Clients",path:"/customers/list"}],a.onDelete=a.onDelete.bind(Object(i.a)(a)),a}return Object(a.a)(e,[{key:"onDelete",value:function(){window.flash("Le client a bien \xe9t\xe9 supprim\xe9.","success"),this.props.history.push("/customers/")}},{key:"header",value:function(){var n=this.state.customerId;return M(f.a.Fragment,null,M("h3",{className:"card-title"},"Client #"+n),M("div",{className:"card-tools"},M(s.a,{href:"/customers/edit?customerId="+n},M("a",{className:"btn btn-success btn-sm","data-toggle":"tooltip",title:"","data-original-title":"Nouveau"},M("i",{className:"fa fa-pen-alt"})," Modifier"))))}},{key:"render",value:function(){var n=this.state.customerId;return M(m.a,null,M(g.a,{title:"Clients ",fariane:this.fariane},M(_.a,{header:this.header()},M(p.b,{query:b.c,variables:{customerId:n},pollInterval:3e3},(function(n){var t=n.loading,e=n.error,r=n.data;return t?M("div",null," Chargement en cours ..."):e?(console.log(e),M("div",null,"Error")):(console.log(r),r.customer?M(v.a,{defaultActiveKey:"customer",id:"uncontrolled-tab-example",style:{backgroundColor:"#f4f6f9",margin:"3px",paddingBottom:"2px"}},M(y.a,{eventKey:"customer",title:"Client"},M(w,{customer:r.customer})),M(y.a,{eventKey:"rentals",title:"Locations"},M(A,{rentals:r.customer.rentals})),M(y.a,{eventKey:"bookings",title:"R\xe9servations"},M(J,{bookings:r.customer.bookings})),M(y.a,{eventKey:"bills",title:"Factures"},M(w,{customer:r.customer}))):" customer not found")})))))}}]),e}(f.a.Component);t.default=Object(h.a)(Object(I.withRouter)(U))},xmSt:function(n,t,e){"use strict";e.d(t,"e",(function(){return f})),e.d(t,"c",(function(){return m})),e.d(t,"d",(function(){return b})),e.d(t,"f",(function(){return p})),e.d(t,"a",(function(){return h})),e.d(t,"b",(function(){return v}));var r=e("h4VS"),a=e("lTCR"),i=e.n(a);function c(){var n=Object(r.a)(["\n  mutation delete_customer($id: ID!)  {\n    deleteCustomer(id:$id){\n        statut_code\n        message\n    }\n  }\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  mutation update_customer($data:CustomerInput!)  {\n    createCustomer(data:$data){\n        id\n    }\n  }\n\n"]);return u=function(){return n},n}function o(){var n=Object(r.a)(["\n  mutation update_customer($id: ID!, $data:CustomerInput!)  {\n    updateCustomer(id:$id,data:$data){\n        id\n        firstname\n        lastname\n        birthday\n        gender\n        cni\n        type\n        driver_license\n        city\n        address\n        email\n        phone\n        company_name\n    }\n  }\n\n"]);return o=function(){return n},n}function l(){var n=Object(r.a)(["\nquery get_customer_to_update($customerId:ID!){\n  customer(id:$customerId){\n    id\n    firstname\n    lastname\n    birthday\n    gender\n    cni\n    type\n    driver_license\n    city\n    address\n    email\n    phone\n    company_name\n  }\n}\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\nquery get_customer($customerId:ID!){\n  customer(id:$customerId){\n    id\n    firstname\n    lastname\n    birthday\n    gender\n    cni\n    type\n    driver_license\n    city\n    address\n    email\n    phone\n    company_name\n    createdAt\n    updatedAt\n    rentals{\n      id\n      date_begin\n      date_end\n      car{\n        id\n        plate_number\n      }\n    }\n    bookings{\n      id\n      date_begin\n      date_end\n      montant_avance\n      car{\n        id\n        plate_number\n      }\n    }\n  }\n}\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n{\n    customers {\n    edges{\n        node{\n            id\n            firstname\n            lastname\n            birthday\n            gender\n            cni\n            type\n            driver_license\n            city\n            address\n            email\n            phone\n            company_name\n        }\n    }\n  }\n}\n"]);return d=function(){return n},n}var f=i()(d()),m=i()(s()),b=i()(l()),p=i()(o()),h=i()(u()),v=i()(c())},"y/oY":function(n,t,e){"use strict";var r=e("1OyB"),a=e("vuIU"),i=e("JX7q"),c=e("Ji7U"),u=e("md7G"),o=e("foSv"),l=e("q1tI"),s=e.n(l),d=e("O+Uc"),f=e("vbcS"),m=e("2/Fh"),b=e("nOHt"),p=e.n(b),h=s.a.createElement;function v(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(o.a)(n);if(t){var a=Object(o.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(u.a)(this,e)}}var y=function(n){Object(c.a)(e,n);var t=v(e);function e(n){var a;Object(r.a)(this,e);var c=(a=t.call(this,n)).props.router.query.bookingId;return a.state={bookingId:c,booking:null},a.fariane=[{title:"Acceuil",path:"/"},{title:"R\xe9servations",path:"/bookings/"}],a.onDelete=a.onDelete.bind(Object(i.a)(a)),a}return Object(a.a)(e,[{key:"onDelete",value:function(){window.flash("La r\xe9servation a bien \xe9t\xe9 supprim\xe9e.","success"),this.props.history.push("/bookings/list")}},{key:"render",value:function(){var n=this.props.bookingId;return h(f.a,{mutation:d.b,variables:{id:n}},(function(n){return h("a",{style:{margin:3},onClick:function(t){t.preventDefault(),n().then((function(n){1==n.data.deleteBooking.statut_code&&(alert("La r\xe9servation a bien \xe9t\xe9 supprim\xe9e.","success"),p.a.push("/bookings/list"))}))},className:"btn btn-danger btn-sm"},h("i",{className:"fa fa-trash",style:{color:"white"}}))}))}}]),e}(s.a.Component);t.a=Object(m.a)(Object(b.withRouter)(y))}},[["eYRm",0,2,7,1,3,4,5,8,12]]]);