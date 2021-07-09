(()=>{"use strict";var e={645:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(879),a=n.n(o)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]),a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap);"]),a.push([e.id,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]),a.push([e.id,'*{box-sizing:border-box;margin:0;padding:0;font-family:"Montserrat",sans-serif;font-weight:300}a{padding:3px}h2{font-family:"Montserrat",sans-serif;font-weight:300;color:#edf0f1}html{scroll-behavior:smooth}.stxt{color:#edf0f1}.navbar{z-index:2;top:0;width:100vw;position:fixed}li,a,button{font-family:"Montserrat",sans-serif;font-weight:500;font-size:16px;color:#edf0f1;text-decoration:none}.logo{margin-right:auto;font-size:18px;cursor:pointer}.nav_links{list-style:none}.nav_links li{display:inline-block;padding:0 20px}.nav_links li a{transition:all .3s ease 0s}.nav_links li a:hover{color:#0088a9}button{margin-left:20px;padding:9px 25px;background-color:#0088a9;border:none;border-radius:50px;cursor:pointer;transition:all .3s ease 0s}button:hover{background-color:rgba(0,136,169,.8)}header{display:flex;justify-content:flex-end;align-items:center;padding:30px 10%}#m1{position:absolute;left:0px;top:0px;z-index:-1}#m2{position:absolute;left:0px;top:0px;z-index:-2}body{overflow-x:hidden;background:#000;height:5000px}#m3{position:absolute;left:0px;top:0px;z-index:-3}#sky{position:absolute;left:0px;top:-250px;z-index:-5}.slider{margin:auto;width:400px;height:250px;border-radius:10px;overflow:hidden}.slider-text{width:100%}.stxt{width:400px;height:85px;bottom:0;padding:10px;background:#00000078;border-radius:0 0 10px 10px;position:absolute}.slides-wrap{display:block}.slides{width:500%;height:250px;display:flex}.slides input{display:none}.slide{width:20%;transition:1s;position:relative}.slide img{object-fit:fill;width:400px;min-height:250px}.navigation-manual{position:absolute;width:400px;bottom:5px;display:flex;justify-content:center}.nav-wrap{margin-top:-15px;color:#edf0f1;position:absolute;width:400px;height:15px;border-radius:0 0 10px 10px}.manual-btn{border:2px solid #0088a9;padding:5px;border-radius:10px;cursor:pointer;transition:.3s}.manual-btn:not(:last-child){margin-right:40px}.manual-btn:hover{background:#0088a9}.slide input{display:none}.slider_choosed{background:#edf0f1}.scroll-down{height:50px;width:30px;border:2px solid #edf0f1;position:fixed;left:50%;bottom:20px;border-radius:50px;cursor:pointer}.scroll-down::before,.scroll-down::after{content:"";position:absolute;top:20%;left:50%;height:10px;width:10px;transform:translate(-50%, -100%) rotate(45deg);border:2px solid #edf0f1;border-top:transparent;border-left:transparent;animation:scroll-down 1s ease-in-out infinite}.scroll-down::before{top:30%;animation-delay:.3s}.slider_component{display:none}@keyframes scroll-down{0%{opacity:0}30%{opacity:1}60%{opacity:1}100%{top:90%;opacity:0}}.topnav{overflow:hidden}.icon{display:none}@media screen and (max-width: 652px){.topnav a{display:none}.topnav a.icon{float:right;display:block}}@media screen and (max-width: 652px){.topnav.responsive{position:relative}.topnav.responsive .icon{position:absolute;right:0;top:0}header{align-items:initial}.topnav.responsive a{float:none;display:block;text-align:left}}',""]);const i=a},879:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},r=[],s=0;s<e.length;s++){var l=e[s],d=o.base?l[0]+o.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(t[u].references++,t[u].updater(f)):t.push({identifier:p,updater:a(f,o),references:1}),r.push(p)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var s=n(i[r]);t[s].references--}for(var l=o(e,a),d=0;d<i.length;d++){var c=n(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,a=n.media,i=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},42:(e,t,n)=>{var o=n(379),a=n.n(o),i=n(795),r=n.n(i),s=n(695),l=n.n(s),d=n(216),c=n.n(d),p=n(645),u={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=l()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};u.domAPI=r(),u.insertStyleElement=c(),a()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;var f=n(91),m=n.n(f),h=new URL(n(533),n.b),v=new URL(n(357),n.b),g=new URL(n(316),n.b),b=new URL(n(692),n.b);const x='<section> <img src="'+m()(h)+'" class="translate" data-speed="-1.90" id="m1"/> <img src="'+m()(v)+'" class="translate" data-speed="-0.10" id="m2"/> <img src="'+m()(g)+'" class="translate" data-speed="1" id="m3"/> <img src="'+m()(b)+'" class="translate" data-speed="1.4" id="sky"/> </section> ',y=JSON.parse('[{"id":0,"text":" You can limit the size of your e.ensure","image":"https://cdn.pixabay.com/photo/2019/07/28/14/03/salento-4368775_960_720.jpg"},{"id":1,"text":"bundles by using import() or requir","image":"https://cdn.pixabay.com/photo/2018/04/01/08/45/off-road-3280241_960_720.jpg"},{"id":2,"text":"Bla Bla Bla Bla","image":"https://cdn.pixabay.com/photo/2018/05/13/19/54/off-road-3397640_960_720.jpg"}]');function w(e){document.querySelectorAll(".manual-btn").forEach((function(t,n){n===e?t.classList.add("slider_choosed"):t.classList.remove("slider_choosed")}))}var L;window.onload=function(){var e=document.querySelectorAll(".translate"),t=document.querySelectorAll(".manual-btn"),n=document.querySelectorAll(".scroll-down")[0],o=document.querySelectorAll(".slider_component")[0];document.getElementById("nav_show").addEventListener("click",(function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"})),w(0),console.log(typeof t);var a=document.querySelector(".slide img"),i=getComputedStyle(a).width;n.addEventListener("click",(function(){window.scrollTo(0,420);var e=.1;o.style.display="block";var t=setInterval((function(){e>=1&&clearInterval(t),o.style.opacity=""+e,o.style.filter="alpha(opacity="+100*e+")",e+=.1*e}),10)})),t.forEach((function(e,t){console.log(typeof e),console.log(t),e.addEventListener("click",(function(){var e=document.getElementById("first");w(t),e.animate({marginLeft:"-"+parseInt(i)*t+"px"},{duration:300,iterations:1,fill:"both"})}))}));var r=0;setInterval((function(){var e=document.getElementById("first");w(r),e.animate({marginLeft:"-"+parseInt(i)*r+"px"},{duration:300,iterations:1,fill:"both"}),++r>=t.length&&(r=0)}),3e3),t.forEach((function(e){console.log(typeof e)})),window.addEventListener("scroll",(function(){var t=window.pageYOffset;t<420&&e.forEach((function(e){var n=parseFloat(e.dataset.speed);console.log(t),e.style.transform="translateY("+t*n+"px)"}))}))},document.body.appendChild(((L=document.createElement("div")).classList.add("navbar"),L.innerHTML='<header> <a href="#" class="logo">PATRYKLEFIK</a> <nav> <div class="topnav" id="myTopnav"> <a href="#home" class="active">Home</a> <a href="#news">News</a> <a href="#contact">Contact</a> <a href="#about">About</a> <a class="cta" href="#"><button>Contact</button></a> <a href="javascript:void(0);" class="icon" id="nav_show"> <i class="fa fa-bars"></i> </a> </div> </nav> </header> ',L)),document.body.appendChild(function(){var e=document.createElement("div");return e.classList.add("parallax"),e.innerHTML=x,e}()),document.body.appendChild(function(){var e=document.createElement("div");e.classList.add("slider_component"),e.innerHTML='<div style="height:745px"></div> <div style="text-align:center"> <h2>SLIDER TASK:</h2> </div> <div id="sec2" class="slider"> <div id="first" class="slides"> <div class="navigation-auto"></div> </div> <div class="nav-wrap"> <div class="navigation-manual"></div> </div> </div> ';var t=e.querySelectorAll(".slides")[0],n=e.querySelectorAll(".navigation-auto")[0],o=e.querySelectorAll(".navigation-manual")[0];return y.forEach((function(e,a){t.innerHTML+='\n      <input type="radio" name="radio-btn" class="radio-btn">\n      <div class="slide">\n          <img src="'+e.image+'" alt="slide"> \n          <div class="stxt">\n            '+e.text+"\n          </div>\n      </div>",n.innerHTML+='<div class="auto-btn1"></div>',o.innerHTML+='<label for="radio'+a+'" class="manual-btn"></label>'})),e}()),document.body.appendChild(function(){var e=document.createElement("div");return e.classList.add("scroll_component"),e.innerHTML='<div class="scroll-down"></div> ',e}())},533:(e,t,n)=>{e.exports=n.p+"0ae1ece75ebc484681c4.png"},357:(e,t,n)=>{e.exports=n.p+"df42f910dfd3c22e85ef.png"},316:(e,t,n)=>{e.exports=n.p+"5f954232dfee8a56729c.png"},692:(e,t,n)=>{e.exports=n.p+"d06264d5d273f4592d79.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n(42)})();