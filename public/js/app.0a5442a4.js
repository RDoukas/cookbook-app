(function(e){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=i[0]))}return e}var s={},a={app:0},r=[];function n(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"3c61":function(e,t,i){"use strict";var s=i("eae3"),a=i.n(s);a.a},4678:function(e,t,i){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("header",{attrs:{id:"fh5co-header",role:"banner"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"header-inner"},[e._m(0),i("nav",{attrs:{role:"navigation"}},[i("ul",[i("li",[i("router-link",{attrs:{to:"/recipes"}},[e._v("All recipes")])],1),i("li",[i("router-link",{attrs:{to:"/recipes/new"}},[e._v("New Recipe")])],1),e.isLoggedIn()?i("li",[i("router-link",{attrs:{to:"/logout"}},[e._v("Logout")])],1):e._e(),e.isLoggedIn()?e._e():i("li",[i("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn()?e._e():i("li",{staticClass:"cta"},[i("router-link",{attrs:{to:"/signup"}},[e._v("Signup")])],1)])])])])]),i("div",{staticClass:"container"},[i("router-view")],1),e._m(1)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("a",{attrs:{href:"index.html"}},[e._v("Flew")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{attrs:{id:"fh5co-footer",role:"contentinfo"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[i("h3",[e._v("About Us")]),i("p",[e._v("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ")]),i("p",[i("a",{staticClass:"btn btn-primary btn-outline with-arrow btn-sm",attrs:{href:"#"}},[e._v("Join Us "),i("i",{staticClass:"icon-arrow-right"})])])]),i("div",{staticClass:"col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[i("h3",[e._v("Our Services")]),i("ul",{staticClass:"float"},[i("li",[i("a",{attrs:{href:"#"}},[e._v("Web Design")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Branding & Identity")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Free HTML5")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("HandCrafted Templates")])])]),i("ul",{staticClass:"float"},[i("li",[i("a",{attrs:{href:"#"}},[e._v("Free Bootstrap Template")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Free HTML5 Template")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("Free HTML5 & CSS3 Template")])]),i("li",[i("a",{attrs:{href:"#"}},[e._v("HandCrafted Templates")])])])]),i("div",{staticClass:"col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[i("h3",[e._v("Follow Us")]),i("ul",{staticClass:"fh5co-social"},[i("li",[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"icon-twitter"})])]),i("li",[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"icon-facebook"})])]),i("li",[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"icon-google-plus"})])]),i("li",[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"icon-instagram"})])])])])])])}],n={data:function(){return{flashMessage:""}},methods:{isLoggedIn:function(){return localStorage.getItem("jwt")}}},o=n,c=i("2877"),l=Object(c["a"])(o,a,r,!1,null,null,null),p=l.exports,u=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("h1",[e._v("New Recipe")]),i("ul",e._l(e.createErrors,(function(t){return i("li",[e._v(e._s(t))])})),0),i("div",[e._v(" Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeTitle,expression:"newRecipeTitle"}],attrs:{type:"text"},domProps:{value:e.newRecipeTitle},on:{input:function(t){t.target.composing||(e.newRecipeTitle=t.target.value)}}}),e._v(" "),i("br"),e._v(" Ingredients: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeIngredients,expression:"newRecipeIngredients"}],attrs:{type:"text"},domProps:{value:e.newRecipeIngredients},on:{input:function(t){t.target.composing||(e.newRecipeIngredients=t.target.value)}}}),e._v(" "),i("br"),e._v(" Directions: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeDirections,expression:"newRecipeDirections"}],attrs:{type:"text"},domProps:{value:e.newRecipeDirections},on:{input:function(t){t.target.composing||(e.newRecipeDirections=t.target.value)}}}),e._v(" "),i("br"),e._v(" Prep Time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipePrepTime,expression:"newRecipePrepTime"}],attrs:{type:"text"},domProps:{value:e.newRecipePrepTime},on:{input:function(t){t.target.composing||(e.newRecipePrepTime=t.target.value)}}}),e._v(" "),i("br"),e._v(" Image Url: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeImageUrl,expression:"newRecipeImageUrl"}],attrs:{type:"text"},domProps:{value:e.newRecipeImageUrl},on:{input:function(t){t.target.composing||(e.newRecipeImageUrl=t.target.value)}}}),e._v(" "),i("br"),i("button",{on:{click:function(t){return e.createRecipe()}}},[e._v("Create")])]),e._l(e.recipes,(function(t){return i("div",[i("h2",[e._v(e._s(t.title))]),i("img",{attrs:{src:t.image_url,alt:""}}),i("p",[e._v("Prep time: "+e._s(t.prep_time))]),i("button",{on:{click:function(i){return e.showRecipe(t)}}},[e._v("More Info")])])})),i("dialog",{attrs:{id:"recipe-details"}},[i("form",{attrs:{method:"dialog"}},[i("h1",[e._v("Recipe Info")]),i("p",[e._v("Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.title,expression:"currentRecipe.title"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"title",t.target.value)}}})]),i("p",[e._v(" Ingredients: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.ingredients,expression:"currentRecipe.ingredients"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"ingredients",t.target.value)}}})]),i("p",[e._v(" Directions: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.directions,expression:"currentRecipe.directions"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.directions},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"directions",t.target.value)}}})]),i("p",[e._v(" Prep Time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.prep_time,expression:"currentRecipe.prep_time"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"prep_time",t.target.value)}}})]),i("p",[e._v(" Image Url: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.image_url,expression:"currentRecipe.image_url"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"image_url",t.target.value)}}})]),i("button",{on:{click:function(t){return e.updateRecipe(e.currentRecipe)}}},[e._v("Update")]),i("button",{on:{click:function(t){return e.destroyRecipe(e.currentRecipe)}}},[e._v("Delete")]),i("button",[e._v("Close")])])])],2)},m=[],v=(i("c975"),i("a434"),i("bc3a")),f=i.n(v),g={data:function(){return{recipes:[],createErrors:[],newRecipeTitle:"",newRecipeIngredients:"",newRecipeDirections:"",newRecipePrepTime:"",newRecipeImageUrl:"",currentRecipe:{}}},created:function(){this.indexRecipes()},methods:{indexRecipes:function(){var e=this;f.a.get("/api/recipes").then((function(t){console.log("All Recipes:",t.data),e.recipes=t.data}))},createRecipe:function(){var e=this,t={title:this.newRecipeTitle,ingredients:this.newRecipeIngredients,directions:this.newRecipeDirections,prep_time:this.newRecipePrepTime,image_url:this.newRecipeImageUrl};f.a.post("/api/recipes",t).then((function(t){console.log("Success",t.data),e.recipes.push(t.data)})).catch((function(t){console.log(t.response.data.errors),e.createErrors=t.response.data.errors}))},showRecipe:function(e){console.log(e),this.currentRecipe=e,document.querySelector("#recipe-details").showModal()},updateRecipe:function(e){var t={title:e.title,ingredients:e.ingredients,directions:e.directions,prep_time:e.prep_time,image_url:e.image_url};f.a.patch("/api/recipes/".concat(e.id),t).then((function(e){console.log("Successfully Updated",e.data)})).catch((function(e){console.log(e.response.data.errors)}))},destroyRecipe:function(e){var t=this;f.a.delete("/api/recipes/".concat(e.id)).then((function(i){console.log("Successfully destroyed",i.data);var s=t.recipes.indexOf(e);t.recipes.splice(s,1)}))}}},h=g,b=(i("cccb"),Object(c["a"])(h,d,m,!1,null,null,null)),_=b.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v("This is an about page")])])}],C={},y=Object(c["a"])(C,j,w,!1,null,null,null),x=y.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"test"},[i("h1",[e._v("This is a test page")])])}],k={},T=Object(c["a"])(k,R,P,!1,null,null,null),N=T.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"signup"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("div",{staticClass:"text-center"},[i("h1",[e._v("Signup")]),e.status?i("img",{attrs:{src:"https://http.cat/"+e.status,alt:""}}):e._e()]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Name:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("small",[e._v(e._s(20-e.name.length)+" characters remaining")])]),i("div",{staticClass:"form-group"},[i("label",[e._v("Email:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.password.length>0&&e.password.length<6?i("small",{staticClass:"text-danger"},[e._v("Must be at least 6 characters")]):e._e(),e.password.length>20?i("small",{staticClass:"text-danger"},[e._v("Cannot exceed 20 characters")]):e._e()]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password confirmation:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}}),e.passwordConfirmation!==e.password?i("small",{staticClass:"text-danger"},[e._v("Must match password")]):e._e()]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},z=[],E=(i("b0c0"),{data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[],status:""}},methods:{submit:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};f.a.post("/api/users",t).then((function(t){e.$parent.flashMessage="Successfully signed up!",e.$router.push("/login")})).catch((function(t){e.status=t.response.status,e.errors=t.response.data.errors}))}}}),M=E,O=Object(c["a"])(M,I,z,!1,null,null,null),S=O.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[e.$parent.flashMessage?i("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[e._v(" "+e._s(e.$parent.flashMessage)+" "),e._m(0)]):e._e(),i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Login")]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Email:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},F=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],U={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};f.a.post("/api/sessions",t).then((function(t){f.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),e.$parent.flashMessage="Successfully logged in!",e.$router.push("/recipes")})).catch((function(t){e.errors=["Invalid email or password."],e.email="",e.password=""}))}}},L=U,A=Object(c["a"])(L,D,F,!1,null,null,null),J=A.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logout"})},H=[],q={created:function(){delete f.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},V=q,Y=Object(c["a"])(V,B,H,!1,null,null,null),W=Y.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-index"},[e.$parent.flashMessage?i("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[e._v(" "+e._s(e.$parent.flashMessage)+" "),e._m(0)]):e._e(),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.titleFilter,expression:"titleFilter"}],staticClass:"form-control",attrs:{list:"titles",type:"text",placeholder:"Search"},domProps:{value:e.titleFilter},on:{input:function(t){t.target.composing||(e.titleFilter=t.target.value)}}})]),i("datalist",{attrs:{id:"titles"}},e._l(e.recipes,(function(t){return i("option",[e._v(e._s(t.title))])})),0),i("div",[i("button",{on:{click:function(t){e.sortAttribute="title"}}},[e._v("Sort by title")]),i("button",{on:{click:function(t){e.sortAttribute="prep_time"}}},[e._v("Sort by prep time")])]),i("div",{attrs:{id:"fh5co-work-section"}},[i("div",{staticClass:"container"},[e._m(1),i("transition-group",{tag:"div",staticClass:"row",attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},e._l(e.orderBy(e.filterBy(e.recipes,e.titleFilter),e.sortAttribute),(function(t){return i("div",{key:t.id,staticClass:"col-md-4"},[i("router-link",{staticClass:"item-grid text-center",attrs:{to:"/recipes/"+t.id}},[i("div",{staticClass:"image",style:"background-image: url("+t.image_url+")"}),i("div",{staticClass:"v-align"},[i("div",{staticClass:"v-align-middle"},[i("h3",{staticClass:"title"},[e._v(e._s(t.title))]),i("h5",{staticClass:"category"},[e._v("Prep Time: "+e._s(t.prep_time))]),i("h5",{staticClass:"category"},[e._v("Created "+e._s(e.relativeDate(t.created_at)))])])])])],1)})),0)],1)])])},G=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 col-md-offset-3 text-center fh5co-heading"},[i("h2",[e._v("All Recipes")]),i("p",[e._v("Specially curated by demon cats for your taste buds")])])])}],Q=i("c1df"),X=i.n(Q),K=i("a7c6"),ee=i.n(K),te={mixins:[ee.a.mixin],data:function(){return{recipes:[],titleFilter:"",sortAttribute:"title"}},created:function(){var e=this;f.a.get("/api/recipes").then((function(t){console.log("All Recipes:",t.data),e.recipes=t.data}))},methods:{relativeDate:function(e){return X()(e).fromNow()}}},ie=te,se=Object(c["a"])(ie,Z,G,!1,null,null,null),ae=se.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-new"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.createRecipe()}}},[i("h1",[e._v("New Recipe")]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Title:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Ingredients:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Directions:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.directions,expression:"directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.directions},on:{input:function(t){t.target.composing||(e.directions=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Prep Time:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.prepTime,expression:"prepTime"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prepTime},on:{input:function(t){t.target.composing||(e.prepTime=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Image:")]),i("input",{ref:"fileInput",staticClass:"form-control",attrs:{type:"file"},on:{change:function(t){return e.setFile(t)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Create"}})])])},ne=[],oe={data:function(){return{errors:[],title:"",ingredients:"",directions:"",prepTime:"",imageFile:""}},created:function(){},methods:{setFile:function(e){e.target.files.length>0&&(this.imageFile=e.target.files[0])},createRecipe:function(){var e=this,t=new FormData;t.append("title",this.title),t.append("ingredients",this.ingredients),t.append("directions",this.directions),t.append("prep_time",this.prepTime),t.append("image_file",this.imageFile),f.a.post("/api/recipes",t).then((function(t){e.$router.push("/recipes/".concat(t.data.id))})).catch((function(t){e.errors=t.response.data.errors}))}}},ce=oe,le=Object(c["a"])(ce,re,ne,!1,null,null,null),pe=le.exports,ue=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-show"},[i("h2",[e._v(e._s(e.recipe.title))]),i("img",{attrs:{src:e.recipe.image_url,alt:""}}),i("p",[e._v("Ingredients: "+e._s(e.recipe.ingredients))]),i("p",[e._v("Directions: "+e._s(e.recipe.directions))]),i("p",[e._v("Prep Time: "+e._s(e.recipe.prep_time))]),i("p",[e._v("Author: "+e._s(e.recipe.user.name))]),i("br"),e.recipe.owner?i("div",[i("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#editRecipeModal"}},[e._v(" Edit ")]),i("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.destroyRecipe()}}},[e._v("Delete")])]):e._e(),i("div",{staticClass:"modal fade",attrs:{id:"editRecipeModal",tabindex:"-1",role:"dialog","aria-labelledby":"editRecipeModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[e._m(0),i("div",{staticClass:"modal-body"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.editRecipe()}}},[i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Title:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Ingredients:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Directions:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.directions,expression:"recipe.directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.directions},on:{input:function(t){t.target.composing||e.$set(e.recipe,"directions",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Prep Time:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Image Url:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.image_url,expression:"recipe.image_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.recipe,"image_url",t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Update"}})])])])])])])},de=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title",attrs:{id:"editRecipeModalLabel"}},[e._v("Edit Recipe")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],me={data:function(){return{errors:[],recipe:{}}},created:function(){var e=this;f.a.get("/api/recipes/".concat(this.$route.params.id)).then((function(t){console.log(t.data),e.recipe=t.data}))},methods:{destroyRecipe:function(){var e=this;confirm("Are you sure you want to delete this recipe?")&&f.a.delete("/api/recipes/".concat(this.recipe.id)).then((function(t){console.log("Successfully destroyed",t.data),e.$router.push("/recipes")}))},editRecipe:function(){var e=this,t={title:this.recipe.title,ingredients:this.recipe.ingredients,directions:this.recipe.directions,prep_time:this.recipe.prep_time,image_url:this.recipe.image_url};f.a.patch("/api/recipes/".concat(this.recipe.id),t).then((function(e){$("#editRecipeModal").modal("hide")})).catch((function(t){e.errors=t.response.data.errors}))}}},ve=me,fe=Object(c["a"])(ve,ue,de,!1,null,null,null),ge=fe.exports,he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-edit"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.editRecipe()}}},[i("h1",[e._v("Edit Recipe")]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Title:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Ingredients:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Directions:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.directions,expression:"recipe.directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.directions},on:{input:function(t){t.target.composing||e.$set(e.recipe,"directions",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Prep Time:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Image Url:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.image_url,expression:"recipe.image_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.recipe,"image_url",t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Update"}})])])},be=[],_e={data:function(){return{errors:[],recipe:{}}},created:function(){var e=this;f.a.get("/api/recipes/".concat(this.$route.params.id)).then((function(t){e.recipe=t.data,console.log(e.recipe)}))},methods:{editRecipe:function(){var e=this,t={title:this.recipe.title,ingredients:this.recipe.ingredients,directions:this.recipe.directions,prep_time:this.recipe.prep_time,image_url:this.recipe.image_url};f.a.patch("/api/recipes/".concat(this.recipe.id),t).then((function(t){e.$router.push("/recipes/".concat(t.data.id))})).catch((function(t){e.errors=t.response.data.errors}))}}},je=_e,we=Object(c["a"])(je,he,be,!1,null,null,null),Ce=we.exports,ye=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},xe=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"map"},[i("h1",[e._v("Mapbox Map")]),i("div",{attrs:{id:"map"}})])}],Re=(i("a4d3"),i("e01a"),i("4160"),i("159b"),{data:function(){return{places:[{long:-122.4211,lat:37.79193,description:"Bob's donuts!"},{long:-122.42497,lat:37.77858,description:"Johnny's Donuts!"},{long:-122.02575,lat:36.9738,description:"Marini's Downtown Santa Cruz"},{long:-122.03712,lat:37.97473,description:"Alpine bakery, Concord!"}]}},mounted:function(){mapboxgl.accessToken="pk.eyJ1IjoiZHphZ2hpYW4iLCJhIjoiY2pzbnF0NmV0MGY2czQzbXBpMjcwMzRmNiJ9.Jei4-17Vu7hJSerisjPCEg";var e=new mapboxgl.Map({container:"map",style:"mapbox://styles/dzaghian/cjxaqxm273umk1cqz0saddk4t",center:[-122.4194,37.7749],zoom:13});this.places.forEach((function(t){var i=new mapboxgl.Popup({offset:25}).setText(t.description);(new mapboxgl.Marker).setLngLat([t.long,t.lat]).setPopup(i).addTo(e)}))},methods:{}}),Pe=Re,ke=(i("3c61"),Object(c["a"])(Pe,ye,xe,!1,null,null,null)),$e=ke.exports;s["a"].use(u["a"]);var Te=[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:x},{path:"/test",name:"test",component:N},{path:"/signup",name:"signup",component:S},{path:"/login",name:"login",component:J},{path:"/logout",name:"logout",component:W},{path:"/recipes",name:"recipes-index",component:ae},{path:"/recipes/new",name:"recipes-new",component:pe},{path:"/recipes/:id",name:"recipes-show",component:ge},{path:"/recipes/:id/edit",name:"recipes-edit",component:Ce},{path:"/map",name:"map",component:$e}],Ne=new u["a"]({mode:"history",base:"/",routes:Te}),Ie=Ne;f.a.defaults.baseURL="/";var ze=localStorage.getItem("jwt");ze&&(f.a.defaults.headers.common["Authorization"]="Bearer "+ze),s["a"].config.productionTip=!1,new s["a"]({router:Ie,render:function(e){return e(p)}}).$mount("#app")},"5ced":function(e,t,i){},cccb:function(e,t,i){"use strict";var s=i("5ced"),a=i.n(s);a.a},eae3:function(e,t,i){}});
//# sourceMappingURL=app.0a5442a4.js.map