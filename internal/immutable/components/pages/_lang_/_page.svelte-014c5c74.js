import{S as N,i as O,s as B,k as p,a as k,q as T,l as v,m as w,h,c as y,r as j,n as m,b as V,G as _,u as q,A,v as H,w as L,x as Q,f as E,d as F,t as S,y as z,Q as J,g as K}from"../../../chunks/index-7183cb92.js";import{S as M}from"../../../chunks/SvelteSeo-898ad9f4.js";function R(r){let t,s,e,i,c,a,f,n,o,l,g;return{c(){t=p("a"),s=p("div"),e=p("div"),i=p("span"),c=k(),a=p("h2"),f=T(r[0]),n=k(),o=p("p"),l=T(r[1]),this.h()},l(u){t=v(u,"A",{href:!0});var d=w(t);s=v(d,"DIV",{class:!0});var D=w(s);e=v(D,"DIV",{class:!0});var b=w(e);i=v(b,"SPAN",{class:!0,"data-icon":!0}),w(i).forEach(h),c=y(b),a=v(b,"H2",{class:!0});var I=w(a);f=j(I,r[0]),I.forEach(h),n=y(b),o=v(b,"P",{class:!0});var P=w(o);l=j(P,r[1]),P.forEach(h),b.forEach(h),D.forEach(h),d.forEach(h),this.h()},h(){m(i,"class","iconify-inline text-[5rem]"),m(i,"data-icon",r[2]),m(a,"class","card-title"),m(o,"class","text-center"),m(e,"class","card-body center"),m(s,"class","card w-49 lg:min-w-96 lg:min-h-full bg-neutral shadow-xl"),m(t,"href",g=`/tttools/${r[3]}`)},m(u,d){V(u,t,d),_(t,s),_(s,e),_(e,i),_(e,c),_(e,a),_(a,f),_(e,n),_(e,o),_(o,l)},p(u,[d]){d&4&&m(i,"data-icon",u[2]),d&1&&q(f,u[0]),d&2&&q(l,u[1]),d&8&&g!==(g=`/tttools/${u[3]}`)&&m(t,"href",g)},i:A,o:A,d(u){u&&h(t)}}}function U(r,t,s){let{name:e="Tool Name"}=t,{description:i="Lxorem, ipsum dolor sit amet consectetur adipisicing elit."}=t,{icon:c="mdi:emoticon-wink"}=t,{catslug:a=""}=t;return r.$$set=f=>{"name"in f&&s(0,e=f.name),"description"in f&&s(1,i=f.description),"icon"in f&&s(2,c=f.icon),"catslug"in f&&s(3,a=f.catslug)},[e,i,c,a]}class W extends N{constructor(t){super(),O(this,t,U,R,B,{name:0,description:1,icon:2,catslug:3})}}function C(r,t,s){const e=r.slice();return e[3]=t[s].name,e[4]=t[s].icon,e[5]=t[s].description,e[7]=s,e}function G(r){let t,s;return t=new W({props:{name:r[3],description:r[5],icon:r[4],catslug:r[1][r[7]]}}),{c(){H(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,i){Q(t,e,i),s=!0},p:A,i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){S(t.$$.fragment,e),s=!1},d(e){z(t,e)}}}function X(r){let t,s,e,i;t=new M({props:{title:"tttools",description:"Tools for everyone!",openGraph:{title:"tttools",description:"Tools for everyone!"}}});let c=r[0],a=[];for(let n=0;n<c.length;n+=1)a[n]=G(C(r,c,n));const f=n=>S(a[n],1,1,()=>{a[n]=null});return{c(){H(t.$$.fragment),s=k(),e=p("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){L(t.$$.fragment,n),s=y(n),e=v(n,"DIV",{class:!0});var o=w(e);for(let l=0;l<a.length;l+=1)a[l].l(o);o.forEach(h),this.h()},h(){m(e,"class","grid lg:grid-cols-3 gap-5")},m(n,o){Q(t,n,o),V(n,s,o),V(n,e,o);for(let l=0;l<a.length;l+=1)a[l].m(e,null);i=!0},p(n,[o]){if(o&3){c=n[0];let l;for(l=0;l<c.length;l+=1){const g=C(n,c,l);a[l]?(a[l].p(g,o),E(a[l],1)):(a[l]=G(g),a[l].c(),E(a[l],1),a[l].m(e,null))}for(K(),l=c.length;l<a.length;l+=1)f(l);F()}},i(n){if(!i){E(t.$$.fragment,n);for(let o=0;o<c.length;o+=1)E(a[o]);i=!0}},o(n){S(t.$$.fragment,n),a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)S(a[o]);i=!1},d(n){z(t,n),n&&h(s),n&&h(e),J(a,n)}}}function Y(r,t,s){let{data:e}=t,i=Object.values(e.cats),c=Object.keys(e.cats);return r.$$set=a=>{"data"in a&&s(2,e=a.data)},[i,c,e]}class $ extends N{constructor(t){super(),O(this,t,Y,X,B,{data:2})}}export{$ as default};