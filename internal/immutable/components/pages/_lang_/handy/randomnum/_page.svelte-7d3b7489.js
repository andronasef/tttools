import{S as z,i as F,s as J,k as d,q as T,a as I,l as c,m as w,r as V,h as s,c as D,n as i,b as U,H as l,ai as P,$ as j,u as K,aj as k,B as $,D as Q}from"../../../../../chunks/index-3c47727e.js";function W(o){let u,_,r,t,n,p,L,E,f,q,b,h,A,G,m,x,v,M,S,C;return{c(){u=d("div"),_=T(o[2]),r=I(),t=d("div"),n=d("div"),p=d("label"),L=T("Lower Limit"),E=I(),f=d("input"),q=I(),b=d("div"),h=d("label"),A=T("Upper Limit"),G=I(),m=d("input"),x=I(),v=d("button"),M=T("Generate!"),this.h()},l(e){u=c(e,"DIV",{class:!0});var a=w(u);_=V(a,o[2]),a.forEach(s),r=D(e),t=c(e,"DIV",{class:!0});var y=w(t);n=c(y,"DIV",{});var B=w(n);p=c(B,"LABEL",{class:!0,for:!0});var H=w(p);L=V(H,"Lower Limit"),H.forEach(s),E=D(B),f=c(B,"INPUT",{type:!0,class:!0}),B.forEach(s),q=D(y),b=c(y,"DIV",{});var N=w(b);h=c(N,"LABEL",{class:!0,for:!0});var O=w(h);A=V(O,"Upper Limit"),O.forEach(s),G=D(N),m=c(N,"INPUT",{type:!0,class:!0}),N.forEach(s),y.forEach(s),x=D(e),v=c(e,"BUTTON",{class:!0});var R=w(v);M=V(R,"Generate!"),R.forEach(s),this.h()},h(){i(u,"class","text-5xl"),i(p,"class","label"),i(p,"for",""),i(f,"type","number"),i(f,"class","input input-bordered w-full max-w-xs"),i(h,"class","label"),i(h,"for",""),i(m,"type","number"),i(m,"class","input input-bordered w-full max-w-xs"),i(t,"class","form-control w-full max-w-xs flex flex-row gap-5"),i(v,"class","btn ")},m(e,a){U(e,u,a),l(u,_),U(e,r,a),U(e,t,a),l(t,n),l(n,p),l(p,L),l(n,E),l(n,f),P(f,o[0]),l(t,q),l(t,b),l(b,h),l(h,A),l(b,G),l(b,m),P(m,o[1]),U(e,x,a),U(e,v,a),l(v,M),S||(C=[j(f,"input",o[4]),j(m,"input",o[5]),j(v,"click",o[3])],S=!0)},p(e,[a]){a&4&&K(_,e[2]),a&1&&k(f.value)!==e[0]&&P(f,e[0]),a&2&&k(m.value)!==e[1]&&P(m,e[1])},i:$,o:$,d(e){e&&s(u),e&&s(r),e&&s(t),e&&s(x),e&&s(v),S=!1,Q(C)}}}function X(o,u,_){let r=0,t=0,n=0;function p(){r>t?alert("Lower number must be less than upper number"):_(2,n=Math.floor(Math.random()*(t-r+1))+r)}function L(){r=k(this.value),_(0,r)}function E(){t=k(this.value),_(1,t)}return[r,t,n,p,L,E]}class Z extends z{constructor(u){super(),F(this,u,X,W,J,{})}}export{Z as default};
