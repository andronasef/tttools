import{S as C,i as D,s as H,v as q,a as v,k as b,q as I,w as E,c as w,l as y,m as S,r as P,h as _,n as k,x as G,b as d,G as Q,f as g,d as V,t as $,y as O,Q as z,g as A}from"../../../../chunks/index-7183cb92.js";import{T as F}from"../../../../chunks/toolview-9657e2fc.js";import{S as J}from"../../../../chunks/SvelteSeo-898ad9f4.js";function T(a,l,r){const t=a.slice();return t[4]=l[r].icon,t[5]=l[r].description,t[6]=l[r].name,t[8]=r,t}function j(a){let l,r;return l=new F({props:{icon:a[4],description:a[5],name:a[6],slug:a[3][a[8]],cat:a[0].slug}}),{c(){q(l.$$.fragment)},l(t){E(l.$$.fragment,t)},m(t,c){G(l,t,c),r=!0},p(t,c){const f={};c&1&&(f.cat=t[0].slug),l.$set(f)},i(t){r||(g(l.$$.fragment,t),r=!0)},o(t){$(l.$$.fragment,t),r=!1},d(t){O(l,t)}}}function K(a){let l,r,t,c=a[1].name+"",f,u,i,h;l=new J({props:{title:`${a[1].name} | tttools`,description:a[1].description,openGraph:{title:`${a[1].name} Tools | tttools`,description:a[1].description}}});let m=a[2],o=[];for(let e=0;e<m.length;e+=1)o[e]=j(T(a,m,e));const B=e=>$(o[e],1,1,()=>{o[e]=null});return{c(){q(l.$$.fragment),r=v(),t=b("h1"),f=I(c),u=v(),i=b("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){E(l.$$.fragment,e),r=w(e),t=y(e,"H1",{class:!0});var n=S(t);f=P(n,c),n.forEach(_),u=w(e),i=y(e,"DIV",{class:!0});var s=S(i);for(let p=0;p<o.length;p+=1)o[p].l(s);s.forEach(_),this.h()},h(){k(t,"class","text-2xl mb-5 font-bold"),k(i,"class","grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-5")},m(e,n){G(l,e,n),d(e,r,n),d(e,t,n),Q(t,f),d(e,u,n),d(e,i,n);for(let s=0;s<o.length;s+=1)o[s].m(i,null);h=!0},p(e,[n]){if(n&13){m=e[2];let s;for(s=0;s<m.length;s+=1){const p=T(e,m,s);o[s]?(o[s].p(p,n),g(o[s],1)):(o[s]=j(p),o[s].c(),g(o[s],1),o[s].m(i,null))}for(A(),s=m.length;s<o.length;s+=1)B(s);V()}},i(e){if(!h){g(l.$$.fragment,e);for(let n=0;n<m.length;n+=1)g(o[n]);h=!0}},o(e){$(l.$$.fragment,e),o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)$(o[n]);h=!1},d(e){O(l,e),e&&_(r),e&&_(t),e&&_(u),e&&_(i),z(o,e)}}}function L(a,l,r){let{data:t}=l,c=t.tools,f=Object.values(c.list),u=Object.keys(t.tools.list);return a.$$set=i=>{"data"in i&&r(0,t=i.data)},[t,c,f,u]}class U extends C{constructor(l){super(),D(this,l,L,K,H,{data:0})}}export{U as default};
