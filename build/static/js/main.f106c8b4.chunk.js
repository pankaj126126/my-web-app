(this["webpackJsonpquestion-frontend"]=this["webpackJsonpquestion-frontend"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(5),i=t.n(c),o=(t(12),t(3)),l=(t(13),t(1));var u=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("http://localhost:8080/api").then((function(e){return e.json()})).then((function(e){console.log(e.message),c(e.message)})).catch((function(e){c(e)}))}),[t]),r.a.createElement("div",null,t,r.a.createElement(l.a,{variant:"primary"},"Primary")," ",r.a.createElement(l.a,{variant:"secondary"},"Secondary")," ",r.a.createElement(l.a,{variant:"success"},"Success")," ",r.a.createElement(l.a,{variant:"warning"},"Warning")," ",r.a.createElement(l.a,{variant:"danger"},"Danger")," ",r.a.createElement(l.a,{variant:"info"},"Info")," ",r.a.createElement(l.a,{variant:"light"},"Light")," ",r.a.createElement(l.a,{variant:"dark"},"Dark")," ",r.a.createElement(l.a,{variant:"link"},"Link"))},s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),s()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.f106c8b4.chunk.js.map