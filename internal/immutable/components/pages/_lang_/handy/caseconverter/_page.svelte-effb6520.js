import{S as M,i as R,s as X,k as v,q as F,l as C,m as L,r as H,h as p,n as i,b as y,G as d,_ as z,u as J,A as B,a as b,v as E,P as K,c as g,w as x,ah as G,x as T,f as A,t as q,y as I}from"../../../../../chunks/index-7183cb92.js";import{w as Q}from"../../../../../chunks/index-004cc95a.js";var m=(n=>(n[n.upper=0]="upper",n[n.lower=1]="lower",n[n.sentence=2]="sentence",n[n.proper=3]="proper",n))(m||{});const O=Q(1);function W(n){let a,l=n[1][n[0]]+" Case",t,s,u,o;return{c(){a=v("button"),t=F(l),this.h()},l(e){a=C(e,"BUTTON",{class:!0});var c=L(a);t=H(c,l),c.forEach(p),this.h()},h(){i(a,"class",s=n[0]==n[2]?"btn btn-primary":"btn btn-outline")},m(e,c){y(e,a,c),d(a,t),u||(o=z(a,"click",n[3]),u=!0)},p(e,[c]){c&3&&l!==(l=e[1][e[0]]+" Case")&&J(t,l),c&5&&s!==(s=e[0]==e[2]?"btn btn-primary":"btn btn-outline")&&i(a,"class",s)},i:B,o:B,d(e){e&&p(a),u=!1,o()}}}function Y(n,a,l){var t;(function(e){e[e.upper=0]="upper",e[e.lower=1]="lower",e[e.sentence=2]="sentence",e[e.proper=3]="proper"})(t||(t={}));let{state:s=t.lower}=a,u=s;O.subscribe(e=>{l(2,u=e)});const o=()=>{O.set(s)};return n.$$set=e=>{"state"in e&&l(0,s=e.state)},[s,t,u,o]}class U extends M{constructor(a){super(),R(this,a,Y,W,X,{state:0})}}function Z(n){let a,l,t,s,u,o,e,c,w,j,h,D,$,k,N,P;return e=new U({props:{state:m.lower}}),w=new U({props:{state:m.upper}}),h=new U({props:{state:m.sentence}}),$=new U({props:{state:m.proper}}),{c(){a=v("meta"),l=b(),t=v("div"),s=v("textarea"),u=b(),o=v("div"),E(e.$$.fragment),c=b(),E(w.$$.fragment),j=b(),E(h.$$.fragment),D=b(),E($.$$.fragment),this.h()},l(r){const f=K('[data-svelte="svelte-2km2xk"]',document.head);a=C(f,"META",{name:!0,content:!0}),f.forEach(p),l=g(r),t=C(r,"DIV",{class:!0});var V=L(t);s=C(V,"TEXTAREA",{placeholder:!0,cols:!0,rows:!0,class:!0}),L(s).forEach(p),V.forEach(p),u=g(r),o=C(r,"DIV",{class:!0});var _=L(o);x(e.$$.fragment,_),c=g(_),x(w.$$.fragment,_),j=g(_),x(h.$$.fragment,_),D=g(_),x($.$$.fragment,_),_.forEach(p),this.h()},h(){i(a,"name","ToolName"),i(a,"content","Case Converter"),i(s,"placeholder","Input / Output"),i(s,"cols","30"),i(s,"rows","7"),i(s,"class","w-full lg:w-96 svelte-5aq3b9"),i(t,"class","flex flex-col lg:flex-row justify-center gap-3 w-full"),i(o,"class","flex flex-col lg:flex-row justify-center gap-3 w-full")},m(r,f){d(document.head,a),y(r,l,f),y(r,t,f),d(t,s),G(s,n[0]),y(r,u,f),y(r,o,f),T(e,o,null),d(o,c),T(w,o,null),d(o,j),T(h,o,null),d(o,D),T($,o,null),k=!0,N||(P=z(s,"input",n[2]),N=!0)},p(r,[f]){f&1&&G(s,r[0])},i(r){k||(A(e.$$.fragment,r),A(w.$$.fragment,r),A(h.$$.fragment,r),A($.$$.fragment,r),k=!0)},o(r){q(e.$$.fragment,r),q(w.$$.fragment,r),q(h.$$.fragment,r),q($.$$.fragment,r),k=!1},d(r){p(a),r&&p(l),r&&p(t),r&&p(u),r&&p(o),I(e),I(w),I(h),I($),N=!1,P()}}}function S(n,a,l){let t="",s;O.subscribe(e=>{l(1,s=e)});function u(){switch(s){case m.upper:l(0,t=t.toUpperCase());break;case m.lower:l(0,t=t.toLowerCase());break;case m.sentence:l(0,t=t.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,e=>e.toUpperCase()));break;case m.proper:l(0,t=t.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}}function o(){t=this.value,l(0,t)}return n.$$.update=()=>{n.$$.dirty&3&&(t||s)&&u()},[t,s,o]}class se extends M{constructor(a){super(),R(this,a,S,Z,X,{})}}export{se as default};