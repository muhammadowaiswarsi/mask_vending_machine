(this.webpackJsonpmask_vending_machines_app=this.webpackJsonpmask_vending_machines_app||[]).push([[1],{172:function(e,t,a){e.exports=a(317)},177:function(e,t,a){},179:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},210:function(e,t,a){},233:function(e,t,a){var n={"./amplify-amazon-button_5.entry.js":[324,12],"./amplify-auth-fields_9.entry.js":[325,13],"./amplify-authenticator.entry.js":[326,6],"./amplify-button_3.entry.js":[327,14],"./amplify-chatbot.entry.js":[328,5],"./amplify-checkbox.entry.js":[329,15],"./amplify-confirm-sign-in_7.entry.js":[330,7],"./amplify-container.entry.js":[331,16],"./amplify-federated-buttons_2.entry.js":[332,17],"./amplify-federated-sign-in.entry.js":[333,18],"./amplify-form-field_4.entry.js":[334,19],"./amplify-greetings.entry.js":[335,20],"./amplify-icon-button.entry.js":[336,21],"./amplify-icon.entry.js":[337,8],"./amplify-link.entry.js":[338,22],"./amplify-nav_2.entry.js":[339,23],"./amplify-photo-picker.entry.js":[340,24],"./amplify-picker.entry.js":[341,25],"./amplify-radio-button_2.entry.js":[342,9],"./amplify-s3-album.entry.js":[343,0,26],"./amplify-s3-image-picker.entry.js":[344,0,27],"./amplify-s3-image.entry.js":[345,0,28],"./amplify-s3-text-picker.entry.js":[346,0,29],"./amplify-s3-text.entry.js":[347,0,30],"./amplify-select-mfa-type.entry.js":[348,31],"./amplify-sign-in-button.entry.js":[349,10],"./amplify-toast.entry.js":[350,32],"./amplify-tooltip.entry.js":[351,33]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=233,e.exports=l},234:function(e,t,a){},300:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n,l=a(1),i=a.n(l),r=a(49),o=a.n(r),c=(a(177),a(28)),s=a(35),d=a.n(s),u=a(50),m=a(8),v=(a(179),a(87)),p=a(147),f=a(318),h=a(57),b=a(380),E=a(381),y=a(159),g=a(72),N=(n={aws_project_region:"eu-central-1",aws_cognito_region:"eu-central-1",aws_user_pools_id:"eu-central-1_6RvKmb9iJ",aws_user_pools_web_client_id:"4h5jh988agb01se9t8ot3njjml",oauth:{},aws_appsync_graphqlEndpoint:"https://q2k7euxrszbf3aya7whkskxv6y.appsync-api.eu-central-1.amazonaws.com/graphql",aws_appsync_region:"eu-central-1",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_cloud_logic_custom:[{name:"orderlambda",endpoint:"https://7rbmaacwae.execute-api.eu-central-1.amazonaws.com/devenv",region:"eu-central-1"}],aws_appsync_apiKey:"da2-47lpnlyuozc6pmdxovktklyfli"},Object(g.a)(n,"aws_appsync_region","eu-central-1"),Object(g.a)(n,"oauth",{domain:"devmasquick-devenv.auth.eu-central-1.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:8100/",redirectSignOut:"http://localhost:8100/",responseType:"code"}),Object(g.a)(n,"aws_cognito_identity_pool_id","eu-central-1:e4091bf4-e1bb-404a-a385-517f590c81c5"),n);a(200);function j(e){var t=e.selectNav,a=Object(l.useState)("machine"),n=Object(m.a)(a,2),r=n[0],o=n[1];return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"navbar-upper-part"},i.a.createElement("div",{onClick:function(){o("machine"),t("machine")},className:"machine"},i.a.createElement("div",{className:"machine"===r?"active":""},i.a.createElement("p",{className:"machine-symbol"},"M")),i.a.createElement("p",{className:"machine-name"},"machines")),i.a.createElement("div",{onClick:function(){o("money"),t("money")},className:"money"},i.a.createElement("div",{className:"money"===r?"active":""},i.a.createElement("p",{className:"money-symbol"},"$")),i.a.createElement("p",null,"money"))))}a(201),a(202);var O=function(e){var t=e.size,a=e.rotateAngle,n=e.labelMarginTop,l=e.strokewidth,r=e.value,o=e.valuelabel,c=e.totalValue,s=e.nonCompleted,d=e.completed,u=e.txtColor;t=t||220,t=window.screen.width<400&&t>200?150:t,a=a||0,n=(n=window.screen.width<400&&n>200?150:n)||25;var m=.5*t,v=m-.5*(l=l||25),p=2*Math.PI*v,f={strokeWidth:l},h={strokeWidth:l,strokeDasharray:r/c*100*p/100+" "+p},b="rotate("+a+" "+m+","+m+")";return i.a.createElement("svg",{width:t,height:t,className:"donutchart"},i.a.createElement("circle",{r:v,cx:m,cy:m,stroke:s,transform:b,style:f,className:"donutchart-track"}),i.a.createElement("circle",{r:v,cx:m,cy:m,stroke:d,transform:b,style:h,className:"donutchart-indicator"}),i.a.createElement("text",{className:"donutchart-text",fill:u,x:m,y:m,style:{textAnchor:"middle"}},i.a.createElement("tspan",{className:"donutchart-text-val"},r,"/",c),i.a.createElement("tspan",{className:"donutchart-text-label",x:m,y:m+n},o)))},k=a(38),w=a.n(k);a(205);function x(e){var t=e.data,a=Object(l.useState)("offline"),n=Object(m.a)(a,2),r=n[0],o=n[1];return i.a.createElement("div",{className:"status"},i.a.createElement("p",{className:"heading"},"onlinestatus"),i.a.createElement("div",{className:"machine-card-data"},i.a.createElement(O,{nonCompleted:"#f56071",txtColor:t&&(null===t||void 0===t?void 0:t.filter((function(e){return"online"===(null===e||void 0===e?void 0:e.onlineStatus)})).length)?"#85d8ab":"#f56071",completed:"#85d8ab",value:t&&(null===t||void 0===t?void 0:t.filter((function(e){return"online"===(null===e||void 0===e?void 0:e.onlineStatus)})).length),totalValue:null===t||void 0===t?void 0:t.length,valuelabel:"machines online"}),i.a.createElement("div",{className:"status-right-body"},i.a.createElement("div",{className:"status-head-div"},i.a.createElement("p",{onClick:function(){return o("offline")},className:"offline "+("offline"===r?"active-tab":"")},"Offline"),i.a.createElement("p",{onClick:function(){return o("online")},className:"online "+("online"===r?"active-tab":"")},"Online")),i.a.createElement("div",{className:"status-body "+r+"-body"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"location"),i.a.createElement("th",null,"company"))),i.a.createElement("tbody",null,"offline"===r?t?null===t||void 0===t?void 0:t.filter((function(e){return"offline"===(null===e||void 0===e?void 0:e.onlineStatus)})).map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.id),i.a.createElement("td",null,e.location),i.a.createElement("td",null,e.company))})):i.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"3em"}},i.a.createElement(w.a,{size:60,color:"#f56071"})):t?null===t||void 0===t?void 0:t.filter((function(e){return"online"===(null===e||void 0===e?void 0:e.onlineStatus)})).map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.id),i.a.createElement("td",null,e.location),i.a.createElement("td",null,e.company))})):i.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"3em"}},i.a.createElement(w.a,{size:60,color:"#85d8ab"}))))),i.a.createElement("div",{className:"status-footer"}))))}var S=a(379);a(206);function _(e){var t=e.data,a=Object(l.useState)(!1),n=Object(m.a)(a,2),r=n[0],o=n[1],c=Object(l.useState)(!1),s=Object(m.a)(c,2),d=s[0],u=s[1],v=Object(l.useState)(!1),p=Object(m.a)(v,2),f=p[0],h=p[1],b=Object(l.useState)([]),E=Object(m.a)(b,2),y=E[0],g=E[1],N=Object(l.useState)([]),j=Object(m.a)(N,2),k=j[0],w=j[1],x=Object(l.useState)([]),_=Object(m.a)(x,2),q=_[0],M=_[1];return Object(l.useEffect)((function(){!function(e){for(var t=[],a=[],n=[],l=0;l<(null===e||void 0===e?void 0:e.length);l++){var i,r,o,c;if((null===(i=e[l])||void 0===i?void 0:i.availableMasks.split("/")[0])<10)t.push({price:null===(o=e[l])||void 0===o?void 0:o.id,availableMasks:null===(c=e[l])||void 0===c?void 0:c.availableMasks.split("/")[0]});else if((null===(r=e[l])||void 0===r?void 0:r.availableMasks.split("/")[0])<100){var s,d;a.push({price:null===(s=e[l])||void 0===s?void 0:s.id,availableMasks:null===(d=e[l])||void 0===d?void 0:d.availableMasks.split("/")[0]})}else{var u,m,v;n.push({price:null===(u=e[l])||void 0===u||null===(m=u.masqomats)||void 0===m?void 0:m.id,availableMasks:null===(v=e[l])||void 0===v?void 0:v.availableMasks.split("/")[0]})}}g(t),w(a),M(n)}(t)}),[t]),i.a.createElement("div",{className:"mask-inventory"},i.a.createElement("p",{className:"heading"},"mask inventory"),i.a.createElement("div",{className:"mask-inventory-body"},i.a.createElement("div",{className:"empty-state",onClick:function(){return o(!r)}},i.a.createElement("p",null,"empty (",y.length,"/208) "),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"svg-inline--fa fa-caret-right fa-w-6","data-icon":"caret-right","data-prefix":"fas",height:"1.5em",viewBox:"0 0 192 512",style:{verticalAlign:"-.125em",transition:"transform .2s",transform:"rotate(".concat(r?90:0,"deg)")}},i.a.createElement("path",{fill:"#f56071",d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"}))),i.a.createElement(S.a,{in:r},i.a.createElement("div",{className:"empty-collapse-text"},null===y||void 0===y?void 0:y.map((function(e,t){return i.a.createElement("div",{key:t,className:"empty-data"},i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{nonCompleted:"#dddddd",txtColor:"#f56071",completed:"#f56071",value:null===e||void 0===e?void 0:e.availableMasks,totalValue:208,valuelabel:"masks available",size:80,strokewidth:7,labelMarginTop:7,rotateAngle:-90}),i.a.createElement("p",{className:"chart-label"},null===e||void 0===e?void 0:e.price)))})))),i.a.createElement("div",{className:"warning-state",onClick:function(){return u(!d)}},i.a.createElement("p",null,"warning (",k.length,"/208) "),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"svg-inline--fa fa-caret-right fa-w-6","data-icon":"caret-right","data-prefix":"fas",height:"1.5em",viewBox:"0 0 192 512",style:{verticalAlign:"-.125em",transition:"transform .2s",transform:"rotate(".concat(d?90:0,"deg)")}},i.a.createElement("path",{fill:"#f5aa60",d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"}))),i.a.createElement(S.a,{in:d},i.a.createElement("div",{className:"warning-collapse-text"},null===k||void 0===k?void 0:k.map((function(e,t){return i.a.createElement("div",{key:t,className:"empty-data"},i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{nonCompleted:"#dddddd",txtColor:"#f5aa60",completed:"#f5aa60",value:null===e||void 0===e?void 0:e.availableMasks,totalValue:208,valuelabel:"masks available",size:80,strokewidth:7,labelMarginTop:7,rotateAngle:-90}),i.a.createElement("p",{className:"chart-label"},null===e||void 0===e?void 0:e.price)))})))),i.a.createElement("div",{className:"filled-state",onClick:function(){return h(!f)}},i.a.createElement("p",null,"filled (",q.length,"/208) "),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"svg-inline--fa fa-caret-right fa-w-6","data-icon":"caret-right","data-prefix":"fas",height:"1.5em",viewBox:"0 0 192 512",style:{verticalAlign:"-.125em",transition:"transform .2s",transform:"rotate(".concat(f?90:0,"deg)")}},i.a.createElement("path",{fill:"#85d8ab",d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"}))),i.a.createElement(S.a,{in:f},i.a.createElement("div",{className:"filled-collapse-text"},null===q||void 0===q?void 0:q.map((function(e,t){return i.a.createElement("div",{key:t,className:"empty-data"},i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{nonCompleted:"#dddddd",txtColor:"#85d8ab",completed:"#85d8ab",value:null===e||void 0===e?void 0:e.availableMasks,totalValue:208,valuelabel:"masks available",size:80,strokewidth:7,labelMarginTop:7,rotateAngle:-90}),i.a.createElement("p",{className:"chart-label"},null===e||void 0===e?void 0:e.price)))}))))))}a(210);var q=a(153);function M(e){e.ListOrder;var t=e.data;return i.a.createElement("div",{className:"vending-machines"},i.a.createElement("p",{className:"heading"},"vending machines"),i.a.createElement("div",{className:"vending-table"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"location"),i.a.createElement("th",null,"company"),i.a.createElement("th",null,"onlinestatus"),i.a.createElement("th",null,"availabe masks"),i.a.createElement("th",null,"monthly sales"))),t?i.a.createElement(i.a.Fragment,null,i.a.createElement("tbody",null,null===t||void 0===t?void 0:t.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.id),i.a.createElement("td",null,e.location),i.a.createElement("td",null,e.company),i.a.createElement("td",{className:"offline"===(null===e||void 0===e?void 0:e.onlineStatus)?"vending-status-offline":""},e.onlineStatus),i.a.createElement("td",{className:e.availableMasks.split("/")[0]<10?"low-vending":e.availableMasks.split("/")[0]<100?"moderate-vending":""},e.availableMasks),i.a.createElement("td",null,(null===e||void 0===e?void 0:e.monthlySales)?null===e||void 0===e?void 0:e.monthlySales:0,"\u20ac"))})))):i.a.createElement(i.a.Fragment,null)),!t&&i.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"1em"}},i.a.createElement(q.ClipLoader,{size:60,color:"#85d8ab"}))),i.a.createElement("div",{className:"vending-footer"}))}var C=function(e){var t=e.ListOrder,a=e.vending;e.onlineList,e.oflineList,e.temp;return i.a.createElement("div",{className:"machine-page-container"},i.a.createElement("div",{className:"sign-out"},i.a.createElement(b.d,null)),i.a.createElement("div",{className:"first-row"},i.a.createElement(x,{data:a}),i.a.createElement(_,{data:a})),i.a.createElement("div",{className:"second-row"},i.a.createElement(M,{ListOrder:t,data:a})))},I="\nquery listorders{\n  listOrders{\n    items{\n      id\n      sumPrice\n        masqomat{\n        id\n        products{\n          items{\n            priceNetto\n            profitShare\n          }\n        }\n        reseller{\n          name\n        }\n        }\n    }\n  }\n}";a(234);function U(e){var t,a,n=e.changeMoney,r=e.data,o=Object(l.useState)(!1),s=Object(m.a)(o,2),v=s[0],h=s[1],E=Object(l.useState)(!1),y=Object(m.a)(E,2),g=y[0],N=y[1],j=Object(l.useState)(!1),O=Object(m.a)(j,2),k=O[0],x=O[1],S=Object(l.useState)([]),_=Object(m.a)(S,2),q=_[0],M=_[1],C=Object(l.useState)([]),U=Object(m.a)(C,2),z=U[0],P=U[1],A=Object(l.useState)(""),L=Object(m.a)(A,2),F=L[0],D=L[1],T=Object(l.useState)(""),$=Object(m.a)(T,2),V=$[0],B=$[1],W=Object(l.useState)(""),J=Object(m.a)(W,2),K=J[0],R=J[1];Object(l.useEffect)((function(){p.a.graphql(Object(f.b)(I)).then((function(e){for(var t={profit:0,price:0},a=0,n=0;n<(null===z||void 0===z?void 0:z.length);n++)for(var l=0;l<(null===e||void 0===e||null===(i=e.data)||void 0===i||null===(r=i.listOrders)||void 0===r||null===(o=r.items)||void 0===o?void 0:o.length);l++){var i,r,o,c,s,d,u,m,v,p,f,h,b,E;console.log(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(s=c.listOrders)||void 0===s||null===(d=s.items[l])||void 0===d||null===(u=d.masqomat)||void 0===u?void 0:u.id,null===(m=z[n])||void 0===m?void 0:m.masqomatId),z[n].masqomatId===(null===e||void 0===e||null===(v=e.data)||void 0===v||null===(p=v.listOrders)||void 0===p||null===(f=p.items[l])||void 0===f||null===(h=f.masqomat)||void 0===h?void 0:h.id)&&(t.profit+=Number(null===(b=z[n])||void 0===b?void 0:b.profitShare),t.price+=Number(null===(E=z[n])||void 0===E?void 0:E.priceNetto),++a)}t.total=a,t.profit=Number(t.profit)/a,N(t)}))}),[z]),Object(l.useEffect)((function(){M(r)}),[r]);return i.a.createElement("div",{className:"money-page-container"},i.a.createElement("div",{className:"sign-out"},i.a.createElement(b.d,null)),i.a.createElement("div",{className:"sales-figure"},i.a.createElement("div",null,i.a.createElement("p",{className:"sales-headings"},"sales figures"),i.a.createElement("p",{className:"sales-values"},(new Date).toDateString().split(" ")[1],".",(new Date).toDateString().split(" ")[2])),i.a.createElement("div",null,i.a.createElement("p",{className:"sales-headings"},"total mask sold"),i.a.createElement("p",{className:"sales-values sales-num-values"},(null===g||void 0===g?void 0:g.total)?null===g||void 0===g?void 0:g.total:0)),i.a.createElement("div",null,i.a.createElement("p",{className:"sales-headings"},"total sales"),i.a.createElement("p",{className:"sales-values sales-num-values"},(null===g||void 0===g?void 0:g.price)?null===g||void 0===g||null===(t=g.price)||void 0===t?void 0:t.toFixed(2):0,"\u20ac")),i.a.createElement("div",null,i.a.createElement("p",{className:"sales-headings"},"total profit"),i.a.createElement("p",{className:"sales-values sales-num-values"},(null===g||void 0===g?void 0:g.profit)&&0!==(null===g||void 0===g?void 0:g.profit)?null===g||void 0===g||null===(a=g.profit)||void 0===a?void 0:a.toFixed(2):0,"%"))),i.a.createElement("div",{className:"tenant-option"},i.a.createElement("p",{className:"headings"},"tenant options"),i.a.createElement("div",{className:"tenant-body"},i.a.createElement("div",{className:"select-all"},i.a.createElement("div",{className:"round"},i.a.createElement("input",{onChange:function(){return function(){if(v){var e=Object(c.a)(q);e.forEach((function(e){e.checked=!1})),M(e),P([])}else P(q);h(!v),D(""),B(""),R("")}()},type:"checkbox",id:"checkbox"}),i.a.createElement("label",{htmlFor:"checkbox"})),i.a.createElement("p",{className:"points"},"All")),i.a.createElement("div",{className:"tenant-bottom-part"},i.a.createElement("div",{className:"tenant-list-body"},i.a.createElement("div",{className:"tenant-list-part"},i.a.createElement("table",{width:"100%"},i.a.createElement("thead",null,i.a.createElement("tr",{className:"tenant-list-headings"},i.a.createElement("td",{className:"roundPart"},i.a.createElement("p",null)),i.a.createElement("td",null,i.a.createElement("p",null,"name")),i.a.createElement("td",null,i.a.createElement("p",null,"profit share")),i.a.createElement("td",null,i.a.createElement("p",null,"mask price")))),null===q||void 0===q?void 0:q.map((function(e,t){return i.a.createElement("tr",{key:t,className:"tenant-lists"},i.a.createElement("td",{className:"roundPart"},i.a.createElement("div",{className:"round"},i.a.createElement("input",{onChange:function(){!function(e){if(!v&&(e||0===e)){if(q[e].checked)D(""),B(""),R(""),P([]);else{var t,a;if(0===z.length)D(q[e].priceNetto),B(null===(t=q[e])||void 0===t?void 0:t.profitShare),R(null===(a=q[e])||void 0===a?void 0:a.productId);else B(""),R(""),D("");var n=Object(c.a)(z);n.push(q[e]),P(n)}var l=Object(c.a)(q);l[e].checked=!l[e].checked,M(l)}}(t)},checked:v||(null===e||void 0===e?void 0:e.checked),value:v||(null===e||void 0===e?void 0:e.checked),type:"checkbox",id:"checkbox"+t+1}),i.a.createElement("label",{htmlFor:"checkbox"+t+1}))),i.a.createElement("td",null,null===e||void 0===e?void 0:e.location),i.a.createElement("td",null,null===e||void 0===e?void 0:e.profitShare,"%"),i.a.createElement("td",null,null===e||void 0===e?void 0:e.priceNetto,"\u20ac"))})))),i.a.createElement("div",{className:"tenant-list-footer"})),i.a.createElement("div",{className:"tenant-changing-part"},i.a.createElement("div",null,i.a.createElement("p",null,"mask price:"),i.a.createElement("input",{className:"inputs",value:F,onChange:function(e){return D(e.target.value)},type:"text"}),i.a.createElement("span",null,"\u20ac")),i.a.createElement("div",null,i.a.createElement("p",null,"profit share:"),i.a.createElement("input",{className:"inputs",value:V,onChange:function(e){return B(e.target.value)},type:"text"}),i.a.createElement("span",null,"%")),i.a.createElement("div",{className:"set-changes"},i.a.createElement("button",{onClick:Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=5;break}return x(!0),e.next=4,n(K,F,V);case 4:x(!1);case 5:case"end":return e.stop()}}),e)})))},k?i.a.createElement(w.a,{color:"white"}):"set changes")))))))}a(300);var z=function(e){var t=e.CreateUser,a=e.userId,n=e.username,r=(e.setverified,Object(l.useState)("")),o=Object(m.a)(r,2),c=o[0],s=o[1],d=Object(l.useState)(""),u=Object(m.a)(d,2),v=u[0],p=u[1];return i.a.createElement("div",{className:"form-main-Div"},i.a.createElement("div",{className:"form-div"},i.a.createElement("p",{className:"form-main-heading"},"Create Account"),i.a.createElement("form",{onSubmit:function(e){e.preventDefault();var l={user_id:a,userName:n,email:c,masqomats:[]};v&&(l.phoneNumber=v),t(l)},className:"form"},i.a.createElement("div",{className:"lines"},i.a.createElement("label",{className:"label",htmlFor:"first_name"},"Username"),i.a.createElement("input",{className:"input",disabled:!0,value:n,placeholder:"First Name",name:"first_name",type:"text"})),i.a.createElement("div",{className:"lines"},i.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),i.a.createElement("input",{className:"input",value:c,onChange:function(e){return s(e.target.value)},placeholder:"Email",name:"email",type:"email"})),i.a.createElement("div",{className:"lines"},i.a.createElement("label",{className:"label",htmlFor:"mobile_number"},"Mobile Number"),i.a.createElement("input",{className:"input",value:v,onChange:function(e){p(""===v?"+".concat(e.target.value):e.target.value)},placeholder:"Mobile Number",name:"mobile_number",type:"text"})),i.a.createElement("div",{className:"lines"},i.a.createElement("input",{className:"submit",value:"Submit",type:"submit"})))))},P=a(158),A=a.n(P);v.default.configure(N);var L=Object(E.a)((function(){var e,t=Object(l.useState)(),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(l.useState)("machine"),s=Object(m.a)(o,2),v=s[0],E=s[1],g=Object(l.useState)(!1),N=Object(m.a)(g,2),O=N[0],k=N[1],x=Object(l.useState)(!1),S=Object(m.a)(x,2),_=S[0],q=S[1],M=Object(l.useState)(!1),P=Object(m.a)(M,1)[0],L=Object(l.useState)(!1),F=Object(m.a)(L,2),D=F[0],T=F[1],$=Object(l.useState)(!1),V=Object(m.a)($,2),B=V[0],W=V[1],J=Object(l.useState)(!1),K=Object(m.a)(J,2),R=K[0],G=(K[1],Object(l.useState)("loading")),Z=Object(m.a)(G,2),H=Z[0],Q=Z[1],X=Object(l.useState)(!1),Y=Object(m.a)(X,2),ee=Y[0],te=Y[1],ae=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,l,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=a,e.next=4,A()({url:"https://cors-anywhere.herokuapp.com/https://arcane-plains-65295.herokuapp.com/status",method:"POST",data:{masqomatEasyId:t,clientId:l}});case 4:if("online"!==(null===(i=e.sent)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.toLowerCase())){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}(),ne=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:te(!0),p.a.graphql(Object(f.b)("\nquery listMasqomats($id: ID!) {\n  listMasqomats(filter: {id: {eq: $id}}) {\n    items {\n      id\n      easyId\n      description\n      position {\n        latitude\n        longitude\n      }\n      products {\n        items {\n          id\n          stock\n          profitShare\n          priceNetto\n          name\n        }\n      }\n      reseller {\n        companyName\n      }\n    }\n  }\n}\n",{id:t})).then((function(e){for(var t,a,n,l,i=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.listMasqomats)||void 0===a?void 0:a.items,r=function(e){var t,a;ae(null===(t=i[e])||void 0===t?void 0:t.easyId,null===(a=i[e])||void 0===a?void 0:a.id).then((function(t){console.log(t,"status"),k((function(a){var n=a?Object(c.a)(a):[];if(i[e].online=t,t){var l=D?Object(c.a)(D):[];l.push(i),T(l)}else{var r=B?Object(c.a)(B):[];r.push(i),W(r)}if(n.push.apply(n,Object(c.a)(i)),e===i.length-1)return n}))}))},o=0;o<i.length;o++)r(o);0===(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.listMasqomats)||void 0===l?void 0:l.items.length)&&(k([]),te(!1))})).catch((function(e){te(!1),k(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){if(O&&(null===O||void 0===O?void 0:O.length)>0){for(var e=[],t=0;t<(null===O||void 0===O?void 0:O.length);t++)for(var a=0;a<(null===(n=O[t])||void 0===n||null===(l=n.products)||void 0===l?void 0:l.items.length);a++){var n,l,i,r,o,c,s,d,u,m,v,p,f,h,b,E,y,g,N,j,k,w,x;e.push({id:null===(i=O[t])||void 0===i?void 0:i.easyId,masqomatId:null===(r=O[t])||void 0===r?void 0:r.id,location:null===(o=O[t])||void 0===o?void 0:o.description,company:null===(c=O[t])||void 0===c||null===(s=c.reseller)||void 0===s?void 0:s.companyName,onlineStatus:(null===(d=O[t])||void 0===d?void 0:d.online)?"online":"offline",availableMasks:"".concat(null===(u=O[t])||void 0===u||null===(m=u.products)||void 0===m||null===(v=m.items[a])||void 0===v?void 0:v.stock,"/208"),priceNetto:"".concat(null===(p=O[t])||void 0===p||null===(f=p.products)||void 0===f||null===(h=f.items[a])||void 0===h?void 0:h.priceNetto),profitShare:"".concat(null===(b=O[t])||void 0===b||null===(E=b.products)||void 0===E||null===(y=E.items[a])||void 0===y?void 0:y.profitShare),productId:"".concat(null===(g=O[t])||void 0===g||null===(N=g.products)||void 0===N||null===(j=N.items[a])||void 0===j?void 0:j.id),name:"".concat(null===(k=O[t])||void 0===k||null===(w=k.products)||void 0===w||null===(x=w.items[a])||void 0===x?void 0:x.name)})}te(!1),q(e),le()}}),[O,R]);var le=function(){p.a.graphql(Object(f.b)(I)).then((function(e){q((function(t){for(var a=t?Object(c.a)(t):[],n=function(t){var n,l;a[t].monthlySales=null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.listOrders)||void 0===l?void 0:l.items.filter((function(e){var n,l;return(null===(n=a[t])||void 0===n?void 0:n.masqomatId)===(null===e||void 0===e||null===(l=e.masqomat)||void 0===l?void 0:l.id)})).length},l=0;l<(null===a||void 0===a?void 0:a.length);l++)n(l);return a}))}))};Object(l.useEffect)((function(){h.a.currentAuthenticatedUser().then((function(e){r(e)})).catch((function(e){r(!1)}))}),[y.a]);var ie=function(){var e=Object(u.a)(d.a.mark((function e(t,a,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.graphql(Object(f.b)("\n  mutation updateProduct(\n      $input: UpdateProductInput!\n  ) {\n    updateProduct(input: $input) {\n        id\n        priceNetto\n        name\n        taxes\n        profitShare\n        masqomat {\n          id\n          easyId\n          description\n          position{\n            latitude\n            longitude\n          }\n            products{\n            items{\n              stock\n              profitShare\n              priceNetto\n              name\n            }\n          }\n          reseller{\n            companyName\n          }\n        }\n\n    }\n  }\n",{input:{id:t,priceNetto:a,profitShare:n}}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){p.a.graphql(Object(f.b)("\nsubscription Product{\n  onUpdateProduct{\n        id\n        priceNetto\n        description\n        name\n        taxes\n        profitShare\n        stock\n        masqomat{\n          id\n          easyId\n          description\n          position{\n            latitude\n            longitude\n          }\n            products{\n            items{\n              stock\n            }\n          }\n          reseller{\n            companyName\n          }\n        }\n    }\n  }")).subscribe({next:function(e){q((function(t){for(var a=Object(c.a)(t),n=0;n<t.length;n++){var l,i,r,o,s,d,u,m,v,p,f;if((null===(l=a[n])||void 0===l?void 0:l.masqomatId)===(null===e||void 0===e||null===(i=e.value)||void 0===i||null===(r=i.data)||void 0===r||null===(o=r.onUpdateProduct)||void 0===o||null===(s=o.masqomat)||void 0===s?void 0:s.id))return a[n].priceNetto=null===e||void 0===e||null===(d=e.value)||void 0===d||null===(u=d.data)||void 0===u||null===(m=u.onUpdateProduct)||void 0===m?void 0:m.priceNetto,a[n].profitShare=null===e||void 0===e||null===(v=e.value)||void 0===v||null===(p=v.data)||void 0===p||null===(f=p.onUpdateProduct)||void 0===f?void 0:f.profitShare,a}}))}})}),[]);var re;return Object(l.useEffect)((function(){var e;n&&(te(!0),p.a.graphql(Object(f.b)("\nquery getMasqomatUser($id: ID!) {\n  getMasqomatUser(user_id: $id) {\n    email\n    masqomats\n    userName\n    user_id\n  }\n}",{id:null===n||void 0===n||null===(e=n.attributes)||void 0===e?void 0:e.sub})).then((function(e){var t;Q(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.getMasqomatUser),te(!1);for(var a=0;a<(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.getMasqomatUser)||void 0===l||null===(i=l.masqomats)||void 0===i?void 0:i.length);a++){var n,l,i,r,o;ne(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(o=r.getMasqomatUser)||void 0===o?void 0:o.masqomats[a])}})).catch((function(e){te(!1)})))}),[n]),ee?i.a.createElement("div",{className:"loader"},i.a.createElement(w.a,null)):(null===n||void 0===n||null===(e=n.attributes)||void 0===e?void 0:e.sub)?"loading"!==H&&H?i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement(j,{selectNav:function(e){E(e)}}),"machine"===v?i.a.createElement(C,{vending:_,onlineList:D,oflineList:B,ListOrder:P}):i.a.createElement(U,{changeMoney:ie,data:_}))):i.a.createElement(z,{CreateUser:function(e){te(!0),p.a.graphql(Object(f.b)("\n  mutation createMasqomatUser(\n      $input: CreateMasqomatUser!\n  ){\n    createMasqomatUser(input: $input){\n      user_id\n      email\n      userName\n    }\n  }",{input:e})).then((function(e){var t;Q(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.createMasqomatUser),te(!1)})).catch((function(e){te(!1)}))},setverified:Q,userId:null===n||void 0===n||null===(re=n.attributes)||void 0===re?void 0:re.sub,username:null===n||void 0===n?void 0:n.username}):i.a.createElement("div",{className:"authentication-page"},i.a.createElement(b.a,null,i.a.createElement(b.c,{slot:"sign-in",usernameAlias:"email",hideSignUp:!0},i.a.createElement("div",{slot:"secondary-footer-content"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,3,4]]]);
//# sourceMappingURL=main.344e6732.chunk.js.map