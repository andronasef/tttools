import{U as S,V as O,D as v}from"./index-7183cb92.js";function P(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function b(t){const o=t-1;return o*o*o+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function M(t,o){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,n=Object.getOwnPropertySymbols(t);e<n.length;e++)o.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(t,n[e])&&(s[n[e]]=t[n[e]]);return s}function q(t,{delay:o=0,duration:s=400,easing:n=S}={}){const e=+getComputedStyle(t).opacity;return{delay:o,duration:s,easing:n,css:y=>`opacity: ${y*e}`}}function B(t,{delay:o=0,duration:s=400,easing:n=b,x:e=0,y=0,opacity:f=0}={}){const c=getComputedStyle(t),a=+c.opacity,u=c.transform==="none"?"":c.transform,i=a*(1-f);return{delay:o,duration:s,easing:n,css:(r,l)=>`
			transform: ${u} translate(${(1-r)*e}px, ${(1-r)*y}px);
			opacity: ${a-i*l}`}}function I(t,{delay:o=0,duration:s=400,easing:n=b,start:e=0,opacity:y=0}={}){const f=getComputedStyle(t),c=+f.opacity,a=f.transform==="none"?"":f.transform,u=1-e,i=c*(1-y);return{delay:o,duration:s,easing:n,css:(r,l)=>`
			transform: ${a} scale(${1-u*l});
			opacity: ${c-i*l}
		`}}function R(t){var{fallback:o}=t,s=M(t,["fallback"]);const n=new Map,e=new Map;function y(c,a,u){const{delay:i=0,duration:r=p=>Math.sqrt(p)*30,easing:l=b}=O(O({},s),u),d=a.getBoundingClientRect(),g=c.left-d.left,$=c.top-d.top,w=c.width/d.width,x=c.height/d.height,k=Math.sqrt(g*g+$*$),h=getComputedStyle(a),_=h.transform==="none"?"":h.transform,C=+h.opacity;return{delay:i,duration:v(r)?r(k):r,easing:l,css:(p,m)=>`
				opacity: ${p*C};
				transform-origin: top left;
				transform: ${_} translate(${m*g}px,${m*$}px) scale(${p+(1-p)*w}, ${p+(1-p)*x});
			`}}function f(c,a,u){return(i,r)=>(c.set(r.key,{rect:i.getBoundingClientRect()}),()=>{if(a.has(r.key)){const{rect:l}=a.get(r.key);return a.delete(r.key),y(l,i,r)}return c.delete(r.key),o&&o(i,r,u)})}return[f(e,n,!1),f(n,e,!0)]}export{P as a,q as b,R as c,B as f,I as s};
