(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(11),o=a.n(r),l=a(4),c=a(5),s=a(8),u=a(6),m=a(7),d=a(3),p=a(10),b=a(12),f=(a(43),"home"),h="register",v="signin",O="profile",g="logout",y="LOGGED_IN",j="LOGGED_OUT",E="http://localhost:3000/",S=[{text:"Home",route:f,accessibility:"".concat(y,",").concat(j)},{text:"Sign Up",route:h,accessibility:j},{text:"Log In",route:v,accessibility:j},{text:"My Account",type:"dropdown",accessibility:y,dropdownOpen:!1,dropdownItems:[{text:"Utkarsh",attr:{header:!0}},{text:"Edit Profile",route:O},{attr:{divider:!0}},{text:"Log Out",route:g}]}],w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.state={dropdownOpen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(e){e.dropdownOpen=!e.dropdownOpen,this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"getNavItems",value:function(e){var t=this;return e.map(function(e,a){var n=null;if("dropdown"===e.type)n=i.a.createElement(b.a,{key:"nav-items-".concat(e.text,"-").concat(a),nav:!0,isOpen:e.dropdownOpen,toggle:function(){return t.toggle(e)}},i.a.createElement(b.d,{nav:!0,caret:!0},e.text),i.a.createElement(b.c,null,e.dropdownItems.map(function(e,t){var a={};return e.route&&(a.onClick=function(){window.location.hash="#/".concat(e.route)}),i.a.createElement(b.b,Object.assign({key:"nav-drop-".concat(e.text,"-").concat(t)},e.attr,a),e.text)})));else{var r={href:"#/".concat(e.route===f?"":e.route)};r.active=t.props.route===e.route,n=i.a.createElement(b.f,{key:"nav-items-".concat(e.text,"-").concat(a)},i.a.createElement(b.g,r,e.text))}return n})}},{key:"render",value:function(){var e=this.props.isSignedIn?S.filter(function(e){return e.accessibility.includes(y)}):S.filter(function(e){return e.accessibility.includes(j)});return console.log(e),i.a.createElement("div",{className:"site-header"},i.a.createElement(b.e,{tabs:!0},this.getNavItems(e)))}}]),t}(n.Component),N=Object(p.b)(function(e){return{route:e.route,isSignedIn:e.isSignedIn}})(w),C=a(15),k={route:f,isSignedIn:!1,user:{id:"",name:"",email:"",mobile:""}},U=function(e){switch(e=e||f){case g:return{isSignedIn:!1,user:k.user,route:f};default:return{route:e}}};function V(){return i.a.createElement("div",{className:"not-found"},i.a.createElement("div",{className:"not-found-404"},"404"),i.a.createElement("div",null,"Not Found"))}function A(e){return i.a.createElement("div",{className:"under-construction"},i.a.createElement("div",null,"Under"),i.a.createElement("div",null,"Construction"))}var R=a(14),x=a.n(R);function I(e){var t=e.children,a=e.className,n=void 0===a?"":a;return i.a.createElement("div",{className:"white-card ".concat(n)},t)}var T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:e.initialValue||""},a.getValue=a.getValue.bind(Object(d.a)(Object(d.a)(a))),a.setValue=a.setValue.bind(Object(d.a)(Object(d.a)(a))),a.onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"onChange",value:function(e){this.setValue(e.target.value),"function"===typeof this.props.onChange&&this.props.onChange(e)}},{key:"filterProps",value:function(e){var t=Object(C.a)({},e);return delete t.initialValue,t}},{key:"render",value:function(){var e=this.filterProps(this.props);return i.a.createElement("input",Object.assign({},e,{value:this.state.value,onChange:this.onChange}))}}]),t}(n.PureComponent),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getFieldValues=a.getFieldValues.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getFieldValues",value:function(){var e=this,t={},a=this.props.fieldArray;return(void 0===a?[]:a).forEach(function(a){var n=e[a.name]||{};n.getValue&&(t[a.name]=n.getValue())}),t}},{key:"renderInputFields",value:function(){var e=this,t=this.props.fieldArray;return(void 0===t?[]:t).map(function(t,a){return i.a.createElement("div",{className:"field-container",key:"".concat(t.labelName,"-").concat(a)},i.a.createElement("label",{className:"field-label",htmlFor:t.name},t.labelName),i.a.createElement(T,{ref:function(a){e[t.name]=a},className:"input-reset ".concat(t.inputClass),type:t.inputType||"text",name:t.name,initialValue:t.initialValue}))})}},{key:"render",value:function(){return i.a.createElement("fieldset",{className:"field-wrapper"},i.a.createElement("legend",{className:"wrapper-name"},this.props.fieldSetName),this.renderInputFields())}}]),t}(n.Component);function _(e){var t=e.onSubmit,a=e.text;return i.a.createElement("div",{className:"submit-btn-wrapper"},i.a.createElement(T,{onClick:t,className:"submit-btn",type:"submit",initialValue:a}))}var P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fieldArray=[{name:"mobile",labelName:"Mobile",inputType:"tel",inputClass:"mobile-input"},{labelName:"Password",name:"password",inputType:"password",inputClass:"password-input"}],a.onSubmitSignIn=a.onSubmitSignIn.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onSubmitSignIn",value:function(){var e=this;if(this.fieldSetRef){var t=this.fieldSetRef.getFieldValues();x.a.post("".concat(E,"login"),t).then(function(t){(t=t.data).isSuccess&&(e.props.loadUser(t.data),window.location.hash="/")})}}},{key:"render",value:function(){var e=this;return i.a.createElement("article",{className:"center"},i.a.createElement("main",{className:""},i.a.createElement(I,{className:"sign-in"},i.a.createElement(F,{ref:function(t){e.fieldSetRef=t},fieldSetName:"Sign In",fieldArray:this.fieldArray}),i.a.createElement(_,{onSubmit:this.onSubmitSignIn,text:"Sign in"}))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fieldArray=[{name:"name",labelName:"Name",inputType:"text",inputClass:"name-input"},{name:"email",labelName:"Email",inputType:"email",inputClass:"email-address"},{name:"mobile",labelName:"Mobile",inputType:"tel",inputClass:"mobile-input"},{name:"password",labelName:"Password",inputType:"password",inputClass:"password-input"}],a.onSubmitSignUp=a.onSubmitSignUp.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onSubmitSignUp",value:function(){var e=this;if(this.fieldSetRef){var t=this.fieldSetRef.getFieldValues();x.a.post("".concat(E,"signup"),t).then(function(t){(t=t.data).isSuccess&&(e.props.loadUser(t.data),window.location.hash="/")})}}},{key:"render",value:function(){var e=this;return i.a.createElement("article",{className:"center"},i.a.createElement("main",{className:""},i.a.createElement(I,{className:"sign-up"},i.a.createElement(F,{ref:function(t){e.fieldSetRef=t},fieldSetName:"Register",fieldArray:this.fieldArray}),i.a.createElement(_,{onSubmit:this.onSubmitSignUp,text:"Register"}))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fieldArray=[{name:"name",labelName:"Name",inputType:"text",initialValue:e.user.name,inputClass:"name-input"},{name:"email",labelName:"Email",inputType:"email",initialValue:e.user.email,inputClass:"email-address"},{name:"mobile",labelName:"Mobile",inputType:"tel",initialValue:e.user.mobile,inputClass:"mobile-input"}],a.onSubmitSignUp=a.onSubmitSignUp.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onSubmitSignUp",value:function(){var e=this;if(this.fieldSetRef){var t=this.fieldSetRef.getFieldValues();x.a.post("".concat(E,"updateProfile"),t).then(function(t){var a=t.data;a.id&&(e.props.loadUser(a),window.location.hash="/")})}}},{key:"render",value:function(){var e=this;return i.a.createElement("article",{className:"center"},i.a.createElement("main",{className:""},i.a.createElement(I,{className:"sign-up"},i.a.createElement(F,{ref:function(t){e.fieldSetRef=t},fieldSetName:"Profile",fieldArray:this.fieldArray}),i.a.createElement(_,{onSubmit:this.onSubmitSignUp,text:"Update"}))))}}]),t}(n.Component),G=Object(p.b)(function(e){return{user:e.user}})(L),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getComponent",value:function(e){var t,a="";switch(e){case f:t=A,a="home";break;case h:t=D,a="signup";break;case v:t=P,a="login";break;case O:t=G,e="edit-profile";break;default:t=V,a="not-found"}return{Container:t,routeClass:a}}},{key:"render",value:function(){var e=this.props,t=e.route,a=e.loadUser,n=this.getComponent(t),r=n.Container,o=n.routeClass;return i.a.createElement("div",{className:"route-holder ".concat(o)},i.a.createElement(r,{loadUser:a}))}}]),t}(n.Component),B=Object(p.b)(function(e){return{route:e.route}},{loadUser:function(e){return{type:"LOAD_USER_DATA",payload:e}}})(M),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"site-footer"},"\xa9 Copyrights 2018 - 2019. Utkarsh Deep. All Rights Reserved.")}}]),t}(n.PureComponent),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if("undefined"!==typeof window){var e=this;window.onhashchange=function(t){var a=t.newURL.split("#")[1]||"";e.props.onRouteChange(a.replace("/",""))};var t=window.location.hash.split("#")[1]||"";e.props.onRouteChange(t.replace("/",""))}"undefined"!==typeof document&&(document.getElementsByTagName("body")[0].className="simple-login-app")}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,null),i.a.createElement(B,null),i.a.createElement(H,null),i.a.createElement("div",{className:"app-background"}))}}]),t}(n.Component),W=Object(p.b)(null,{onRouteChange:function(e){return{type:"ROUTE_CHANGE",payload:e}}})(J),$=(a(66),a(18));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);var q=Object($.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.payload;switch(t.type){case"ROUTE_CHANGE":var n=U(a);return Object(C.a)({},e,n);case"LOAD_USER_DATA":return Object(C.a)({},e,{user:Object(C.a)({},a),isSignedIn:!0});case"LOG_OUT_USER":return k;default:return e}});o.a.render(i.a.createElement(p.a,{store:q},i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.22e398cf.chunk.js.map