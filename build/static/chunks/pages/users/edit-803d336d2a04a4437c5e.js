_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{KogF:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),s=n("JX7q"),o=n("Ji7U"),u=n("md7G"),i=n("foSv"),l=(n("8Kt/"),n("YFqc")),c=n.n(l),d=n("q1tI"),f=n.n(d),p=n("hJmc"),h=n("M0L6"),m=n("vbcS"),v=n("2/Fh"),g=n("F1wk"),b=(n("3Mv1"),n("nOHt")),y=n.n(b),C=n("PYvZ"),I=f.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var O=function(e){Object(o.a)(n,e);var t=w(n);function n(e){var a;Object(r.a)(this,n);var o=(a=t.call(this,e)).props.router.query.userId;return a.state={userId:o,user:null},a.fariane=[{title:"Acceuil",path:"/"},{title:"Users",path:"/users/"}],a.onDelete=a.onDelete.bind(Object(s.a)(a)),a}return Object(a.a)(n,[{key:"onDelete",value:function(){window.flash("L'utilisateur a bien \xe9t\xe9 supprim\xe9e.","success"),this.props.history.push("/users/")}},{key:"header",value:function(){var e=this.state.userId;return I(f.a.Fragment,null,I("h3",{className:"card-title"},"Utilisateur #"+e),I("div",{className:"card-tools"},I(c.a,{href:"/users/edit/"+e},I("a",{className:"btn btn-success btn-sm","data-toggle":"tooltip",title:"","data-original-title":"Nouvelle"},I("i",{className:"fa fa-pen-alt"})," Modifier"))))}},{key:"render",value:function(){var e=this,t=this.state,n=t.userId,r=t.user;return r&&delete r.id,I(p.a,null,I(g.a,{title:"Utilisateurs",fariane:this.fariane},I(m.b,{query:h.e,variables:{userId:n},_pollInterval:3e3},(function(t){var a=t.loading,s=t.error,o=t.data;return a?I("div",null,"Chargement en cours ..."):s?(console.log(s),I("div",null,"Error")):(console.log(o),o.user?(null==e.state.user&&(delete o.user.__typename,r=e.state.user=o.user),I(m.a,{mutation:h.i,variables:{id:n,data:e.state.user}},(function(t){return I(C.a,{user:r,onSubmit:function(e){e.preventDefault(),t().then((function(e){alert("L'utilisateur a bien \xe9t\xe9 modifi\xe9.","success"),y.a.push("/users/view?userId="+e.data.updateUser.id)}))},onChange:function(t){return e.setState({user:t})}})}))):"User not found")}))))}}]),n}(f.a.Component);t.default=Object(v.a)(Object(b.withRouter)(O))},M0L6:function(e,t,n){"use strict";n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return I})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return O})),n.d(t,"c",(function(){return j}));var r=n("h4VS"),a=n("lTCR"),s=n.n(a);function o(){var e=Object(r.a)(["\n  mutation recoverPassword($id:ID!,$new_password:String!,$recover_code:String!)  {\n    recoverPassword(id:$id,new_password:$new_password,recover_code:$recover_code){\n    \tstatut_code\n    \tmessage\n    }\n  }\n\n"]);return o=function(){return e},e}function u(){var e=Object(r.a)(["\n  mutation login_user($email:String!)  {\n    signup(email:$email){\n    \tstatut_code\n    \tmessage\n    \ttoken\n    \tuser{\n    \t\tid\n    \t\tfirstname\n    \t\tlastname\n    \t\temail\n    \t}\n    }\n  }\n\n"]);return u=function(){return e},e}function i(){var e=Object(r.a)(["\n  mutation login_user($nom:String!,$prenom:String,$email:String!,$password:String!)  {\n    signup(nom:$nom,prenom:$prenom,email:$email, password:$password){\n    \tstatut_code\n    \tmessage\n    \ttoken\n    \tuser{\n    \t\tid\n    \t\tfirstname\n    \t\tlastname\n    \t\temail\n    \t}\n    }\n  }\n\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  mutation login_user($email:String!,$password:String!)  {\n    login(email:$email, password:$password){\n    \tstatut_code\n    \tmessage\n    \ttoken\n    \tuser{\n    \t\tid\n    \t\tfirstname\n    \t\tlastname\n    \t\temail\n    \t}\n    }\n  }\n\n"]);return l=function(){return e},e}function c(){var e=Object(r.a)(["\n  mutation delete_user($id: ID!)  {\n    deleteUser(id:$id){\n        statut_code\n        message\n    }\n  }\n\n"]);return c=function(){return e},e}function d(){var e=Object(r.a)(["\n  mutation update_user($data:UserInput!)  {\n    createUser(data:$data){\n        id\n    }\n  }\n\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  mutation update_user($id: ID!, $data:UserInput!)  {\n    updateUser(id:$id,data:$data){\n        id\n        firstname\n        lastname\n        email\n    }\n  }\n\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\nquery get_user_to_update($userId:ID!){\n  user(id:$userId){\n    id\n    firstname\n    lastname\n    gender\n    cni\n    address\n    email\n    phone\n    roleId\n    password\n  }\n}\n"]);return p=function(){return e},e}function h(){var e=Object(r.a)(["\nquery get_user($userId:ID!){\n  user(id:$userId){\n    id\n    firstname\n    lastname\n    gender\n    cni\n    address\n    email\n    phone\n    role{\n      id\n      title\n    }\n    password\n    createdAt\n    updatedAt\n  }\n}\n"]);return h=function(){return e},e}function m(){var e=Object(r.a)(["\n{\n  users {\n    edges{\n        node{\n            id\n            firstname\n            lastname\n            gender\n            cni\n            address\n            email\n            phone\n            role{\n              id\n              title\n            }\n            password\n        }\n    }\n  }\n}\n"]);return m=function(){return e},e}var v=s()(m()),g=s()(h()),b=s()(p()),y=s()(f()),C=s()(d()),I=s()(c()),w=s()(l()),O=s()(i()),j=s()(u());s()(o())},PYvZ:function(e,t,n){"use strict";var r=n("1OyB"),a=n("vuIU"),s=n("Ji7U"),o=n("md7G"),u=n("foSv"),i=n("q1tI"),l=n.n(i),c=n("QojX"),d=n("zLVn"),f=n("wx14"),p=n("TSYQ"),h=n.n(p),m=n("YdCC"),v=n("vUet"),g=Object(m.a)("input-group-append"),b=Object(m.a)("input-group-prepend"),y=Object(m.a)("input-group-text",{Component:"span"}),C=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.size,a=e.className,s=e.as,o=void 0===s?"div":s,u=Object(d.a)(e,["bsPrefix","size","className","as"]);return n=Object(v.a)(n,"input-group"),l.a.createElement(o,Object(f.a)({ref:t},u,{className:h()(a,n,r&&n+"-"+r)}))}));C.displayName="InputGroup";var I=Object(f.a)({},C,{Text:y,Radio:function(e){return l.a.createElement(y,null,l.a.createElement("input",Object(f.a)({type:"radio"},e)))},Checkbox:function(e){return l.a.createElement(y,null,l.a.createElement("input",Object(f.a)({type:"checkbox"},e)))},Append:g,Prepend:b}),w=n("cWnB"),O=n("JX7q"),j=n("Cs6D"),S=n("h4VS"),_=n("lTCR");function $(){var e=Object(S.a)(["\n{\n    roles {\n    edges{\n        node{\n            id\n            title\n        }\n    }\n  }\n}\n"]);return $=function(){return e},e}var E=n.n(_)()($()),k=n("vbcS"),N=l.a.createElement;function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var x=function(e){Object(s.a)(n,e);var t=R(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedId:0},a.setSelectedId=a.setSelectedId.bind(Object(O.a)(a)),a.onChange=a.onChange.bind(Object(O.a)(a)),a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.selectedId;e&&(this.state.selectedId=e,this.onChange(e))}},{key:"setSelectedId",value:function(e){this.setState({selectedId:e}),this.onChange(e)}},{key:"onChange",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.state.selectedId;return N(k.b,{query:E,pollInterval:3e3},(function(n){var r=n.loading,a=n.error,s=n.data;if(r)return N("div",null,"Chargement en cours ...");if(a)return console.log(a),N("div",null,"Error");for(var o,u=[],i=0;i<s.roles.edges.length;i++){var l=s.roles.edges[i].node;u.push({value:l.id,label:l.title}),l.id==t&&(o={value:l.id,label:l.title})}return!e.state.selectedId&&s.roles.edges[0]&&e.setSelectedId(s.roles.edges[0].node.id),N(j.a,{className:"basic-single",classNamePrefix:"select",defaultValue:o,isSearchable:!0,name:"role",options:u,onChange:function(t){var n=t.value;return e.setSelectedId(n)}})}))}}]),n}(l.a.Component),P=l.a.createElement;function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var G=function(e){Object(s.a)(n,e);var t=D(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={user:{firstname:"",lastname:"",email:"",password:"",phone:"",roleId:1},show_password:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.user;e&&(delete e.role,this.state.user=e),this.onChange()}},{key:"setLastname",value:function(e){this.state.user.lastname=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setFirstname",value:function(e){this.state.user.firstname=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setGender",value:function(e){this.state.user.gender=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setCNI",value:function(e){this.state.user.cni=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setAddress",value:function(e){this.state.user.address=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setEmail",value:function(e){this.state.user.email=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setPhone",value:function(e){this.state.user.phone=e,this.setState({user:this.state.user}),this.onChange()}},{key:"setRoleId",value:function(e){this.setState((function(t){return t.user.roleId=1*e,t})),this.onChange()}},{key:"setPassword",value:function(e){this.state.user.password=e,this.setState({user:this.state.user}),this.onChange()}},{key:"onChange",value:function(){this.props.onChange&&this.props.onChange(this.state.user)}},{key:"render",value:function(){var e=this,t=this.state,n=t.user,r=t.show_password;return P(c.a,{onSubmit:function(t){e.props.onSubmit&&e.props.onSubmit(t)}},P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"Nom:"),P(c.a.Control,{value:n.lastname,type:"text",onChange:function(t){return e.setLastname(t.target.value)},placeholder:"Nom"})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"Pr\xe9nom:"),P(c.a.Control,{value:n.firstname,type:"text",onChange:function(t){return e.setFirstname(t.target.value)},placeholder:"Pr\xe9nom"})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"Civilisation:"),P(c.a.Control,{value:n.gender,type:"text",onChange:function(t){return e.setGender(t.target.value)},placeholder:"Civilisation"})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"CNI:"),P(c.a.Control,{value:n.cni,type:"text",onChange:function(t){return e.setCNI(t.target.value)},placeholder:"CNI"})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"Adresse:"),P(c.a.Control,{value:n.address,type:"text",onChange:function(t){return e.setAddress(t.target.value)},placeholder:"Adresse "})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"Email:"),P(c.a.Control,{value:n.email,type:"text",onChange:function(t){return e.setEmail(t.target.value)},placeholder:"Adresse email"})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"T\xe9l\xe9phone:"),P(c.a.Control,{value:n.phone,type:"text",onChange:function(t){return e.setPhone(t.target.value)},placeholder:"T\xe9l\xe9phone"})),P(c.a.Group,{controlId:"formBasicRoleId"},P(c.a.Label,null,"R\xf4le:"),P(x,{selectedId:n.roleId,onChange:function(t){return e.setRoleId(t)}})),P(c.a.Group,{controlId:"formBasicEmail"},P(c.a.Label,null,"Mot de passe:"),P(I,{className:"mb-3"},P(c.a.Control,{value:n.password,type:r?"text":"password",onChange:function(t){return e.setPassword(t.target.value)},placeholder:"Mot de passe"}),P(I.Prepend,null,P(I.Text,{id:"basic-addon1"},P(w.a,{className:"btn btn-primary btn-xs",style:L.btnXs,onClick:function(){return e.setState({show_password:!r})}},!r&&P("i",{className:"fa fa-eye"}),r&&P("i",{className:"fa fa-eye-slash"})))))),P("div",{className:"text-right",style:{margin:10}},P(w.a,{variant:"primary",type:"submit"},"Enregistrer")))}}]),n}(l.a.Component),L={btnXs:{padding:".25rem .4rem",fontSize:".875rem",lineHeight:.5,borderRadius:".2rem"}};t.a=G},bEGS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/edit",function(){return n("KogF")}])}},[["bEGS",0,2,1,3,4,5,6,9]]]);