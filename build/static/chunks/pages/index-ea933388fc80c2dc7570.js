_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"3niX":function(e,t,a){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var s,n=a("q1tI");var i=new(((s=a("SevZ"))&&s.__esModule?s:{default:s}).default),r=function(e){var t,a;function s(t){var a;return(a=e.call(this,t)||this).prevProps={},a}a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,s.dynamic=function(e){return e.map((function(e){var t=e[0],a=e[1];return i.computeId(t,a)})).join(" ")};var n=s.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){i.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},s}(n.Component);t.default=r},"9kyW":function(e,t,a){"use strict";e.exports=function(e){for(var t=5381,a=e.length;a;)t=33*t^e.charCodeAt(--a);return t>>>0}},MX0m:function(e,t,a){e.exports=a("3niX")},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var s=a("MX0m"),n=a.n(s),i=a("q1tI"),r=a.n(i),l=(a("8Kt/"),a("hJmc")),o=r.a.createElement;function c(){return o(l.a,{title:"Administration Compta"},o("h1",{id:"greeting",className:"jsx-1663591366"},"Welcome to the Crma Dashboard"),o(n.a,{id:"1663591366"},["h1#greeting.jsx-1663591366{padding:1rem;-webkit-letter-spacing:0.5rem;-moz-letter-spacing:0.5rem;-ms-letter-spacing:0.5rem;letter-spacing:0.5rem;}"]))}},SevZ:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var s=i(a("9kyW")),n=i(a("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e){var t=void 0===e?{}:e,a=t.styleSheet,s=void 0===a?null:a,i=t.optimizeForSpeed,r=void 0!==i&&i,l=t.isBrowser,o=void 0===l?"undefined"!==typeof window:l;this._sheet=s||new n.default({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),s&&"boolean"===typeof r&&(this._sheet.setOptimizeForSpeed(r),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=o,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var a=this.getIdAndRules(e),s=a.styleId,n=a.rules;if(s in this._instancesCounts)this._instancesCounts[s]+=1;else{var i=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[s]=i,this._instancesCounts[s]=1}},t.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var s=this._fromServer&&this._fromServer[a];s?(s.parentNode.removeChild(s),delete this._fromServer[a]):(this._indices[a].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[a]),delete this._instancesCounts[a]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return a[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,a){if(!a)return"jsx-"+t;var n=String(a),i=t+n;return e[i]||(e[i]="jsx-"+(0,s.default)(t+"-"+n)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(a,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var n=a+s;return t[n]||(t[n]=s.replace(e,a)),t[n]}},t.getIdAndRules=function(e){var t=this,a=e.children,s=e.dynamic,n=e.id;if(s){var i=this.computeId(n,s);return{styleId:i,rules:Array.isArray(a)?a.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,a)]}}return{styleId:this.computeId(n),rules:Array.isArray(a)?a:[a]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=r},bVZc:function(e,t,a){"use strict";(function(e){function a(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,a=t.name,i=void 0===a?"stylesheet":a,l=t.optimizeForSpeed,o=void 0===l?s:l,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;r(n(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",r("boolean"===typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var m=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=m?m.getAttribute("content"):null}var t,i,l,o=e.prototype;return o.setOptimizeForSpeed=function(e){r("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),r(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var e=this;if(r(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,a){return"number"===typeof a?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},o.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(e,t){if(r(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!==typeof t&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch(l){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},o.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var a=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];r(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},o.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];r(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},o.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},o.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},o.makeStyleTag=function(e,t,a){t&&r(n(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return a?i.insertBefore(s,a):i.appendChild(s),s},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&a(t.prototype,i),l&&a(t,l),e}();function r(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,a("8oxB"))},hJmc:function(e,t,a){"use strict";var s=a("1OyB"),n=a("vuIU"),i=a("Ji7U"),r=a("md7G"),l=a("foSv"),o=a("q1tI"),c=a.n(o),u=a("YFqc"),m=a.n(u),h=c.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(l.a)(e);if(t){var n=Object(l.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(r.a)(this,a)}}var f=function(e){Object(i.a)(a,e);var t=d(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={expanded:!0,user:{nom:"belabed",prenom:"mohammed"}},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.user;return h("aside",{className:"main-sidebar  elevation-4 sidebar-light-danger"},h(m.a,{href:"/"},h("a",{className:"brand-link"},h("img",{src:"/logo.png",alt:"CRMA Logo",className:"brand-image  elevation-3",style:{opacity:"1",width:"200px"}}),h("span",{className:"brand-text font-weight-light"},"\xa0"))),h("div",{className:"sidebar"},h("div",{className:"user-panel mt-3 pb-3 mb-3 d-flex"},h("div",{className:"image"},h("img",{src:"/adminlte/dist/img/user2-160x160.jpg",className:"img-circle elevation-2",alt:"User Image"})),h("div",{className:"info"},h("a",{href:"#",className:"d-block"},e.nom+" "+e.prenom))),h("nav",{className:"mt-2"},h("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false"},h("li",{className:"nav-item has-treeview"},h(m.a,{href:"/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"nav-icon fas fa-tachometer-alt"}),h("p",null,"Tableau de bord")))),h("li",{className:"/".startsWith("/bookings")?"nav-item has-treeview  menu-open":"nav-item has-treeview"},h(m.a,{href:"/bookings"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fas fa-history nav-icon"}),h("p",null,"R\xe9servations",h("i",{className:"right fas fa-angle-left"})))),h("ul",{className:"nav nav-treeview"},h("li",{className:"nav-item"},h(m.a,{href:"/bookings/list/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-indent nav-icon"}),h("p",null,"Liste des r\xe9servations")))),h("li",{className:"nav-item"},h(m.a,{href:"/bookings/add/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-plus nav-icon"}),h("p",null,"Nouvelle r\xe9servation ")))))),h("li",{className:"/".startsWith("/rentals")?"nav-item has-treeview  menu-open":"nav-item has-treeview"},h(m.a,{href:"/rentals"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"nav-icon fas fa-copy"}),h("p",null,"Locations",h("i",{className:"right fas fa-angle-left"})))),h("ul",{className:"nav nav-treeview"},h("li",{className:"nav-item"},h(m.a,{href:"/rentals/list/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"nav-icon fas fa-copy"}),h("p",null,"Liste des locations")))),h("li",{className:"nav-item"},h(m.a,{href:"/rentals/add/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-plus nav-icon"}),h("p",null,"Nouvelle location ")))))),h("li",{className:"/".startsWith("/bills")?"nav-item has-treeview  menu-open":"nav-item has-treeview"},h(m.a,{href:"/bills"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-file-invoice nav-icon"}),h("p",null,"Factures",h("i",{className:"right fas fa-angle-left"})))),h("ul",{className:"nav nav-treeview"},h("li",{className:"nav-item"},h(m.a,{href:"/bills/list/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-file-invoice nav-icon"}),h("p",null,"Liste des factures")))),h("li",{className:"nav-item"},h(m.a,{href:"/bills/add/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-plus nav-icon"}),h("p",null,"Nouvelle facture")))))),h("li",{className:"/".startsWith("/clients")?"nav-item has-treeview  menu-open":"nav-item has-treeview"},h(m.a,{href:"/clients"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"nav-icon fas fa-users"}),h("p",null,"Clients",h("i",{className:"right fas fa-angle-left"})))),h("ul",{className:"nav nav-treeview"},h("li",{className:"nav-item"},h(m.a,{href:"/customers/list"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-users nav-icon"}),h("p",null,"Clients")))),h("li",{className:"nav-item"},h(m.a,{href:"/customers/add/"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-user-plus nav-icon"}),h("p",null," Nouveau client")))))),h("li",{className:"/".startsWith("/cars")?"nav-item has-treeview  menu-open":"nav-item has-treeview"},h(m.a,{href:"/cars"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fas fa-car nav-icon"}),h("p",null,"V\xe9hicules",h("i",{className:"right fas fa-angle-left"})))),h("ul",{className:"nav nav-treeview"},h("li",{className:"nav-item"},h(m.a,{href:"/cars/list"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fas fa-car nav-icon"}),h("p",null," Liste")))),h("li",{className:"nav-item"},h(m.a,{href:"/cars/add"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-plus nav-icon"}),h("p",null,"Ajouter")))))),h("li",{className:"/".startsWith("/users")?"nav-item has-treeview  menu-open":"nav-item has-treeview"},h(m.a,{href:"/configuration"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"nav-icon fa fa-cogs"}),h("p",null,"Configuration",h("i",{className:"right fas fa-angle-left"})))),h("ul",{className:"nav nav-treeview"},h("li",{className:"nav-item"},h(m.a,{href:"/users/list"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fa fa-users nav-icon"}),h("p",null,"Utilisateurs")))),h("li",{className:"nav-item"},h(m.a,{href:"/brands/list"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fab fa-bandcamp nav-icon"}),h("p",null,"Marques")))),h("li",{className:"nav-item"},h(m.a,{href:"/colors/list"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fab fa-bandcamp nav-icon"}),h("p",null,"Couleurs")))),h("li",{className:"nav-item"},h(m.a,{href:"/categories/list"},h("a",{className:"nav-link",activeclassname:"active"},h("i",{className:"fab fa-bandcamp nav-icon"}),h("p",null,"Cat\xe9gories"))))))))))}}]),a}(c.a.Component),v=(a("nOHt"),c.a.createElement);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(l.a)(e);if(t){var n=Object(l.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(r.a)(this,a)}}var g=function(e){Object(i.a)(a,e);var t=p(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={expanded:!0,user:{nom:"BELABED",prenom:"Mohammed",email:"lazmlmlaz"}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"_logout",value:function(){window.location="/login"}},{key:"render",value:function(){var e=this,t=this.state.user;return t?v("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light"},v("ul",{className:"navbar-nav"},v("li",{className:"nav-item"},v("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},v("i",{className:"fas fa-bars"})))),v("ul",{className:"navbar-nav ml-auto"},v("li",{className:"nav-item dropdown"},v("a",{className:"nav-link","data-toggle":"dropdown",href:"#"},v("i",{className:"far fa-comments"}),v("span",{className:"badge badge-danger navbar-badge"},"3")),v("div",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-right"})),v("li",{className:"nav-item dropdown"},v("a",{className:"nav-link","data-toggle":"dropdown",href:"#"},v("i",{className:"far fa-bell"}),v("span",{className:"badge badge-warning navbar-badge"},"15")),v("div",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-right"})),v("li",{className:"nav-item dropdown user-menu"},v("a",{href:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},v("img",{src:"https://cloud.mabroka.ma/50_20200313_236671_avatar.png",className:"user-image img-circle elevation-2",alt:"BELABED Mohammed"}),v("span",{className:"d-none d-md-inline"},t.nom+" "+t.prenom)),v("ul",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},v("li",{className:"user-header bg-primary"},v("img",{src:"https://cloud.mabroka.ma/50_20200313_236671_avatar.png",className:"img-circle elevation-2",alt:"BELABED Mohammed"}),v("p",null,t.nom+" "+t.prenom," - Administrateur")),v("li",{className:"user-footer"},v(m.a,{href:"/my-profile"},v("a",{className:"btn btn-default btn-flat"},"Mon profil")),v("a",{onClick:function(){return e._logout()},className:"btn btn-default btn-flat float-right"},"Se d\xe9connecter")))))):null}}]),a}(c.a.Component),_=a("8Kt/"),N=a.n(_),y=(a("E/DK"),c.a.createElement);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=Object(l.a)(e);if(t){var n=Object(l.a)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return Object(r.a)(this,a)}}var S=function(e){Object(i.a)(a,e);var t=b(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.bodyClass}},{key:"render",value:function(){this.props.user;return y(c.a.Fragment,null,y(N.a,null,y("title",null,this.props.title||"Location des v\xe9hicules"),y("link",{rel:"stylesheet",href:"/adminlte/plugins/fontawesome-free/css/all.min.css"}),y("link",{rel:"stylesheet",href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"}),y("link",{rel:"stylesheet",href:"/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"}),y("link",{rel:"stylesheet",href:"/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css"}),y("link",{rel:"stylesheet",href:"/adminlte/plugins/jqvmap/jqvmap.min.css"}),y("link",{rel:"stylesheet",href:"/adminlte/dist/css/adminlte.min.css"}),y("link",{rel:"stylesheet",href:"/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"}),y("link",{href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700",rel:"stylesheet"})),y("div",{className:"hold-transition sidebar-mini layout-fixed"},y(g,null),y(f,null),y("div",{className:"content-wrapper"},this.props.children)),y("script",{src:"/adminlte/plugins/jquery/jquery.min.js"}),y("script",{src:"/adminlte/plugins/jquery-ui/jquery-ui.min.js"}),y("script",{src:"/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js"}),y("script",{src:"/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"}),y("script",{src:"/adminlte/dist/js/adminlte.js"}))}}]),a}(c.a.Component);t.a=S},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1,3]]]);