(this.webpackJsonpmask_vending_machines_app=this.webpackJsonpmask_vending_machines_app||[]).push([[28],{345:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_s3_image",(function(){return l}));var r=n(14),i=n(22),o=n(93),a=(n(18),n(386)),c=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(e){o(e)}}function c(t){try{u(r.throw(t))}catch(e){o(e)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},s=new i.a("S3Image"),l=function(){function t(t){Object(r.k)(this,t),this.contentType="binary/octet-stream",this.level=o.a.Public}return t.prototype.watchHandler=function(){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillLoad=function(){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.load=function(){return c(this,void 0,void 0,(function(){var t,e,n,r,i,o,c,l,h,f,p;return u(this,(function(u){switch(u.label){case 0:if(e=(t=this).imgKey,n=t.path,r=t.body,i=t.contentType,o=t.level,c=t.track,l=t.identityId,!e&&!n)return s.debug("empty imgKey and path"),[2];h=e||n,s.debug("loading "+h+"..."),u.label=1;case 1:return u.trys.push([1,5,,6]),r?[4,Object(a.e)(e,r,o,c,i,s)]:[3,3];case 2:u.sent(),u.label=3;case 3:return f=this,[4,Object(a.c)(h,o,c,l,s)];case 4:return f.src=u.sent(),[3,6];case 5:throw p=u.sent(),s.debug(p),new Error(p);case 6:return[2]}}))}))},t.prototype.render=function(){return Object(r.i)(r.b,null,this.src&&Object(r.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))},Object.defineProperty(t,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:!1,configurable:!0}),t}();l.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"}}]);
//# sourceMappingURL=28.4d411a4f.chunk.js.map