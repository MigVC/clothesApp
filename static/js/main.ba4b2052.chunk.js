(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/react.9b9d25e7.png"},24:function(e,t,a){e.exports=a.p+"static/media/fakestore.d4f68bd8.png"},25:function(e,t,a){e.exports=a.p+"static/media/bootstrap.893c50cb.png"},26:function(e,t,a){e.exports=a(58)},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(20),o=a.n(c),i=a(21),l=a(5),s=a(22),m=a.n(s),u=a(4),d=a(0),f=function(e){var t=e.id,a=e.title,r=e.price,c=(e.description,e.category,e.image);e.rating;return n.a.createElement("div",{className:"animate__animated animate__fadeIn"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:c,alt:a,className:"card-img"})),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"}," ",a," "),n.a.createElement("p",{className:"card-text"},n.a.createElement("b",null,"Precio: "),"$ ",r)),n.a.createElement(u.b,{to:"/product/".concat(t),className:"link-info"},"Ver mas...")))))},p=function(e){var t=e.product,a=e.category,c=Object(r.useMemo)(function(){return function(e,t){return e.filter(function(e){return e.category===t})}(t,a)},[t,a]);return n.a.createElement("div",{className:"row rows-cols-1 row-cols-md-3 g-3 mt-2"},c.map(function(e){return n.a.createElement(f,Object.assign({key:e.id},e))}))},h=function(e){var t=e.product;return n.a.createElement(p,{product:t,category:"electronics"})},v=function(){return n.a.createElement("div",null,"Error404")},g=(a(56),a(23)),E=a.n(g),y=a(24),b=a.n(y),w=a(25),N=a.n(w),x=function(){return n.a.createElement("div",{className:"animate__animated animate__fadeIn"},n.a.createElement("div",null,n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"content text-center text-uppercase text-light"},n.a.createElement("h2",null," Welcome to my web page made with React "),n.a.createElement("span",{className:"fst-italic"},"front-end development using an API and ReactJS"),n.a.createElement("br",null),n.a.createElement("a",{className:"btn btn-outline-info py-2 mt-3",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/MigVC"},"My github"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-6 align-self-center"},n.a.createElement("p",{className:"p-2 ms-2"},"This website are made using an API called Fake - Store where you are able to find some products information in order to practice your frontend development knowledge.")),n.a.createElement("div",{className:"col-sm-12 col-md-3 pictures"},n.a.createElement("a",{href:"https://fakestoreapi.com/",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:b.a,alt:"fakeStoreAPI",className:"icon"}))),n.a.createElement("div",{className:"col-sm-12 col-md-3 align-self-center text-center"},n.a.createElement("p",{className:"text-muted me-2"},"Click the image if you wanna visit Fake Store API webpage and know more about this useful application."))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-6 align-self-center"},n.a.createElement("p",{className:"p-2 ms-2"},"Also, this website are building using ReactJS. We are using hooks, components, routes, etc in order to figured out all about new concepts in this amazing library.")),n.a.createElement("div",{className:"col-sm-12 col-md-3 pictures"},n.a.createElement("a",{href:"https://es.reactjs.org/",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:E.a,alt:"react",className:"icon"}))),n.a.createElement("div",{className:"col-sm-12 col-md-3 align-self-center text-center"},n.a.createElement("p",{className:"text-muted me-2"},"Click the image if you wanna visit ReactJS webpage and learn more about this useful library."))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-6 align-self-center"},n.a.createElement("p",{className:"p-2 ms-2"},"In order to customize our website we are using Bootstrap, a powerful, exxtensible, and feauture-packed frontend toolkit.")),n.a.createElement("div",{className:"col-sm-12 col-md-3 pictures"},n.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:N.a,alt:"bootstrap",className:"icon"}))),n.a.createElement("div",{className:"col-sm-12 col-md-3 align-self-center text-center"},n.a.createElement("p",{className:"text-muted me-2"},"Click the image if you wanna visit Boostrap webpage and learn more about this useful framework.")))),n.a.createElement("div",{className:"bg-dark p-1"},n.a.createElement("h6",{className:"text-light text-center"}," Made by Miguel 2022 ")))},k=function(e){var t=e.product;return n.a.createElement("div",null,n.a.createElement(p,{product:t,category:"jewelery"}))},_=function(e){var t=e.product;return n.a.createElement("div",null,n.a.createElement(p,{product:t,category:"men's clothing"}))},L=function(e){var t=e.product,a=Object(r.useState)(0),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(d.g)().id,m=Object(r.useMemo)(function(){return function(e,t){return e.find(function(e){return e.id===Number(t)})}(t,s)},[t,s]);console.log(m);var u=m.title,f=m.price,p=m.description,h=m.image,v=m.rating;return n.a.createElement("div",{className:"row mt-3"},n.a.createElement("div",{className:"pictures col-sm-12 col-md-4 animate__animated animate__fadeInLeft"},n.a.createElement("img",{src:h,alt:u,className:"img-thumbnail icon2"})),n.a.createElement("div",{className:"col-sm-12 col-md-8 animate__animated animate__fadeIn"},n.a.createElement("div",{className:"mx-3"},n.a.createElement("h3",null," ",u," ")),n.a.createElement("ul",{className:"list-group mx-2"},n.a.createElement("li",{className:"list-group-item"},p),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Price: "),"$ ",f),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Rate: "),v.rate)),n.a.createElement("div",{className:"row mt-3 "},n.a.createElement("div",{className:"col-sm-12 col-md-4 option"},n.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(){i(o<=0?0:o-1)}},"-"),n.a.createElement("span",{className:"mx-3"},o),n.a.createElement("button",{className:"btn btn-dark",onClick:function(){return i(o+1)}},"+")),n.a.createElement("div",{className:"col-sm-12 col-md-8 option py-2"},n.a.createElement("button",{className:"btn btn-success"},"Agregar al carrito")))))},j=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark px-2 sticky-top"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(u.b,{to:"/",className:"navbar-brand"},"Home"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#menu","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"menu"},n.a.createElement("ul",{className:"navbar-nav me-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.c,{className:"nav-link",to:"/Electronic"},"Electronic")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.c,{className:"nav-link",to:"Jewelery"},"Jewelery")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.c,{className:"nav-link",to:"Men"},"Men's clothing")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.c,{className:"nav-link",to:"Women"},"Women's clothing"))))))},O=function(e){var t=e.product;return n.a.createElement("div",null,n.a.createElement(p,{product:t,category:"women's clothing"}))},S=function(e){var t=e.product;return n.a.createElement(u.a,null,n.a.createElement(j,null),n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/*",element:n.a.createElement(x,null)}),n.a.createElement(d.a,{path:"/Electronic",element:n.a.createElement(h,{product:t})}),n.a.createElement(d.a,{path:"/Jewelery",element:n.a.createElement(k,{product:t})}),n.a.createElement(d.a,{path:"/Men",element:n.a.createElement(_,{product:t})}),n.a.createElement(d.a,{path:"/Women",element:n.a.createElement(O,{product:t})}),n.a.createElement(d.a,{path:"/product/:id",element:n.a.createElement(L,{product:t})}),n.a.createElement(d.a,{path:"*",element:n.a.createElement(v,null)})))};function I(){I=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,c=Object.create(n.prototype),o=new x(r||[]);return c._invoke=function(e,t,a){var r="suspendedStart";return function(n,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw c;return _()}for(a.method=n,a.arg=c;;){var o=a.delegate;if(o){var i=b(o,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=s(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,o),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var m={};function u(){}function d(){}function f(){}var p={};i(p,n,function(){return this});var h=Object.getPrototypeOf,v=h&&h(h(k([])));v&&v!==t&&a.call(v,n)&&(p=v);var g=f.prototype=u.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var r;this._invoke=function(n,c){function o(){return new t(function(r,o){!function r(n,c,o,i){var l=s(e[n],e,c);if("throw"!==l.type){var m=l.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,i)},function(e){r("throw",e,o,i)}):t.resolve(u).then(function(e){m.value=e,o(m)},function(e){return r("throw",e,o,i)})}i(l.arg)}(n,c,r,o)})}return r=r?r.then(o,o):o()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,c=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=f,i(g,"constructor",f),i(f,"constructor",d),d.displayName=i(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(y.prototype),i(y.prototype,c,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,r,n,c){void 0===c&&(c=Promise);var o=new y(l(t,a,r,n),c);return e.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(g),i(g,o,"Generator"),i(g,n,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n],o=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var P=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(i.a)(I().mark(function e(){var t;return I().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://fakestoreapi.com/products");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){o()},[]),n.a.createElement("div",null,n.a.createElement(S,{product:a}))};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)))}},[[26,2,1]]]);
//# sourceMappingURL=main.ba4b2052.chunk.js.map