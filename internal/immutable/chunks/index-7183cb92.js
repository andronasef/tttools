function k(){}const Y=t=>t;function Et(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t()}function rt(){return Object.create(null)}function A(t){t.forEach(ut)}function H(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function At(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t){let e;return ft(t,n=>e=n)(),e}function Yt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Zt(t,e,n,i){if(t){const r=dt(t,e,n,i);return t[0](r)}}function dt(t,e,n,i){return t[1]&&i?Et(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function ee(t,e,n,i,r,c){if(r){const s=dt(e,n,i,c);t.p(s,r)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t){return t==null?"":t}function re(t){return t&&H(t.destroy)?t.destroy:k}const _t=typeof window<"u";let Z=_t?()=>window.performance.now():()=>Date.now(),tt=_t?t=>requestAnimationFrame(t):k;const N=new Set;function ht(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&tt(ht)}function et(t){let e;return N.size===0&&tt(ht),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let I=!1;function Nt(){I=!0}function St(){I=!1}function Mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:Mt(1,r,u=>e[n[u]].claim_order,a))-1;i[o]=n[d]+1;const f=d+1;n[f]=o,r=Math.max(f,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<c.length&&s[o].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(s[o],d)}}function mt(t,e){t.appendChild(e)}function pt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=J("style");return jt(pt(t),e),e.sheet}function jt(t,e){return mt(t.head||t,e),e.sheet}function zt(t,e){if(I){for(Tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){I&&!n?zt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function S(t){t.parentNode.removeChild(t)}function oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function J(t){return document.createElement(t)}function yt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function ce(){return nt(" ")}function le(){return nt("")}function ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ae(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ue(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fe(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Dt(t,e,n)}function de(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function bt(t,e,n,i,r=!1){gt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function wt(t,e,n,i){return bt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function _e(t,e,n){return wt(t,e,n,J)}function he(t,e,n){return wt(t,e,n,yt)}function Ot(t,e){return bt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function me(t){return Ot(t," ")}function ct(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function pe(t,e){const n=ct(t,"HTML_TAG_START",0),i=ct(t,"HTML_TAG_END",n);if(n===i)return new lt(void 0,e);gt(t);const r=t.splice(n,i-n+1);S(r[0]),S(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new lt(c,e)}function ye(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e==null?"":e}function be(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let P;function Rt(){if(P===void 0){P=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{P=!0}}return P}function we(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=J("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Rt();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=ot(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=ot(i.contentWindow,"resize",e)}),mt(t,i),()=>{(r||c&&i.contentWindow)&&c(),S(i)}}function xe(t,e,n){t.classList[n?"add":"remove"](e)}function qt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function $e(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Bt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=yt(n.nodeName):this.e=J(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}class lt extends Bt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}const B=new Map;let W=0;function Wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ft(t,e){const n={stylesheet:Ct(e),rules:{}};return B.set(t,n),n}function F(t,e,n,i,r,c,s,l=0){const o=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*c(m);a+=m*100+`%{${s(g,1-g)}}
`}const d=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Wt(d)}_${l}`,u=pt(t),{stylesheet:_,rules:h}=B.get(u)||Ft(u,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,W+=1,f}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),W-=r,W||Gt())}function Gt(){tt(()=>{W||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&S(e)}),B.clear())})}let z;function j(t){z=t}function K(){if(!z)throw new Error("Function called outside component initialization");return z}function ve(t){K().$$.on_mount.push(t)}function ke(t){K().$$.after_update.push(t)}function Ee(t,e){return K().$$.context.set(t,e),e}function Ae(t){return K().$$.context.get(t)}function Ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],at=[],R=[],V=[],xt=Promise.resolve();let X=!1;function $t(){X||(X=!0,xt.then(vt))}function Se(){return $t(),xt}function M(t){R.push(t)}function Me(t){V.push(t)}const U=new Set;let O=0;function vt(){const t=z;do{for(;O<C.length;){const e=C[O];O++,j(e),It(e.$$)}for(j(null),C.length=0,O=0;at.length;)at.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];U.has(n)||(U.add(n),n())}R.length=0}while(C.length);for(;V.length;)V.pop()();X=!1,U.clear(),j(t)}function It(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let T;function it(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function E(t,e,n){t.dispatchEvent(qt(`${e?"intro":"outro"}${n}`))}const q=new Set;let v;function Te(){v={r:0,c:[],p:v}}function Ce(){v.r||A(v.c),v=v.p}function kt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),v.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const st={duration:0};function je(t,e,n){let i=e(t,n),r=!1,c,s,l=0;function o(){c&&G(t,c)}function a(){const{delay:f=0,duration:u=300,easing:_=Y,tick:h=k,css:y}=i||st;y&&(c=F(t,0,1,u,f,_,y,l++)),h(0,1);const m=Z()+f,g=m+u;s&&s.abort(),r=!0,M(()=>E(t,!0,"start")),s=et(b=>{if(r){if(b>=g)return h(1,0),E(t,!0,"end"),o(),r=!1;if(b>=m){const w=_((b-m)/u);h(w,1-w)}}return r})}let d=!1;return{start(){d||(d=!0,G(t),H(i)?(i=i(),it().then(a)):a())},invalidate(){d=!1},end(){r&&(o(),r=!1)}}}function ze(t,e,n){let i=e(t,n),r=!0,c;const s=v;s.r+=1;function l(){const{delay:o=0,duration:a=300,easing:d=Y,tick:f=k,css:u}=i||st;u&&(c=F(t,1,0,a,o,d,u));const _=Z()+o,h=_+a;M(()=>E(t,!1,"start")),et(y=>{if(r){if(y>=h)return f(0,1),E(t,!1,"end"),--s.r||A(s.c),!1;if(y>=_){const m=d((y-_)/a);f(1-m,m)}}return r})}return H(i)?it().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),r&&(c&&G(t,c),r=!1)}}}function He(t,e,n,i){let r=e(t,n),c=i?0:1,s=null,l=null,o=null;function a(){o&&G(t,o)}function d(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function f(u){const{delay:_=0,duration:h=300,easing:y=Y,tick:m=k,css:g}=r||st,b={start:Z()+_,b:u};u||(b.group=v,v.r+=1),s||l?l=b:(g&&(a(),o=F(t,c,u,h,_,y,g)),u&&m(0,1),s=d(b,h),M(()=>E(t,u,"start")),et(w=>{if(l&&w>l.start&&(s=d(l,h),l=null,E(t,s.b,"start"),g&&(a(),o=F(t,c,s.b,s.duration,0,y,r.css))),s){if(w>=s.end)m(c=s.b,1-c),E(t,s.b,"end"),l||(s.b?a():--s.group.r||A(s.group.c)),s=null;else if(w>=s.start){const L=w-s.start;c=s.a+s.d*y(L/s.duration),m(c,1-c)}}return!!(s||l)}))}return{run(u){H(r)?it().then(()=>{r=r(),f(u)}):f(u)},end(){a(),s=l=null}}}function Le(t,e){t.d(1),e.delete(t.key)}function De(t,e){Jt(t,1,1,()=>{e.delete(t.key)})}function Pe(t,e,n,i,r,c,s,l,o,a,d,f){let u=t.length,_=c.length,h=u;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=_;h--;){const p=f(r,c,h),x=n(p);let $=s.get(x);$?i&&$.p(p,e):($=a(x,p),$.c()),g.set(x,m[h]=$),x in y&&b.set(x,Math.abs(h-y[x]))}const w=new Set,L=new Set;function Q(p){kt(p,1),p.m(l,d),s.set(p.key,p),d=p.first,_--}for(;u&&_;){const p=m[_-1],x=t[u-1],$=p.key,D=x.key;p===x?(d=p.first,u--,_--):g.has(D)?!s.has($)||w.has($)?Q(p):L.has(D)?u--:b.get($)>b.get(D)?(L.add($),Q(p)):(w.add(D),u--):(o(x,s),u--)}for(;u--;){const p=t[u];g.has(p.key)||o(p,s)}for(;_;)Q(m[_-1]);return m}function Oe(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Re(t){return typeof t=="object"&&t!==null?t:{}}function qe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Be(t){t&&t.c()}function We(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||M(()=>{const o=c.map(ut).filter(H);s?s.push(...o):A(o),t.$$.on_mount=[]}),l.forEach(M)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(C.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fe(t,e,n,i,r,c,s,l=[-1]){const o=z;j(t);const a=t.$$={fragment:null,ctx:null,props:c,update:k,not_equal:r,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:rt(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,..._)=>{const h=_.length?_[0]:u;return a.ctx&&r(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&Ut(t,f)),u}):[],a.update(),d=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Nt();const f=Pt(e.target);a.fragment&&a.fragment.l(f),f.forEach(S)}else a.fragment&&a.fragment.c();e.intro&&kt(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),St(),vt()}j(o)}class Ge{$destroy(){Qt(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{at as $,k as A,ft as B,A as C,H as D,yt as E,he as F,zt as G,Yt as H,Zt as I,ee as J,ne as K,te as L,M,je as N,ze as O,$e as P,oe as Q,lt as R,Ge as S,pe as T,Y as U,Et as V,fe as W,Xt as X,Ee as Y,re as Z,ot as _,ce as a,we as a0,Ae as a1,ie as a2,Z as a3,et as a4,Pe as a5,De as a6,Oe as a7,Re as a8,qe as a9,Me as aa,Ne as ab,Le as ac,xe as ad,ae,se as af,He as ag,ge as ah,de as ai,ue as aj,Lt as b,me as c,Ce as d,le as e,kt as f,Te as g,S as h,Fe as i,ke as j,J as k,_e as l,Pt as m,Dt as n,ve as o,be as p,nt as q,Ot as r,Vt as s,Jt as t,ye as u,Be as v,We as w,Kt as x,Qt as y,Se as z};