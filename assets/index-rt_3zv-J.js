(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ct={},Br=[],kn=()=>{},Jp=()=>!1,za=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),Lt=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qp=Object.prototype.hasOwnProperty,et=(t,e)=>Qp.call(t,e),Ne=Array.isArray,Hr=t=>Wa(t)==="[object Map]",vd=t=>Wa(t)==="[object Set]",ke=t=>typeof t=="function",Et=t=>typeof t=="string",Fi=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",Ed=t=>(ht(t)||ke(t))&&ke(t.then)&&ke(t.catch),xd=Object.prototype.toString,Wa=t=>xd.call(t),em=t=>Wa(t).slice(8,-1),Sd=t=>Wa(t)==="[object Object]",Wl=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hs=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tm=/-(\w)/g,Ii=Xa(t=>t.replace(tm,(e,n)=>n?n.toUpperCase():"")),nm=/\B([A-Z])/g,fr=Xa(t=>t.replace(nm,"-$1").toLowerCase()),Md=Xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ho=Xa(t=>t?`on${Md(t)}`:""),Ai=(t,e)=>!Object.is(t,e),po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},im=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rm=t=>{const e=Et(t)?Number(t):NaN;return isNaN(e)?t:e};let Ic;const Ya=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xl(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?lm(i):Xl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||ht(t))return t}const sm=/;(?![^(]*\))/g,am=/:([^]+)/,om=/\/\*[^]*?\*\//g;function lm(t){const e={};return t.replace(om,"").split(sm).forEach(n=>{if(n){const i=n.split(am);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Yl(t){let e="";if(Et(t))e=t;else if(Ne(t))for(let n=0;n<t.length;n++){const i=Yl(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",um=Gl(cm);function Td(t){return!!t||t===""}const bd=t=>!!(t&&t.__v_isRef===!0),yi=t=>Et(t)?t:t==null?"":Ne(t)||ht(t)&&(t.toString===xd||!ke(t.toString))?bd(t)?yi(t.value):JSON.stringify(t,Ad,2):String(t),Ad=(t,e)=>bd(e)?Ad(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[mo(i,s)+" =>"]=r,n),{})}:vd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mo(n))}:Fi(e)?mo(e):ht(e)&&!Ne(e)&&!Sd(e)?String(e):e,mo=(t,e="")=>{var n;return Fi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let en;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=en;try{return en=this,e()}finally{en=n}}}on(){++this._on===1&&(this.prevScope=en,en=this)}off(){this._on>0&&--this._on===0&&(en=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function fm(t){return new Rd(t)}function dm(){return en}let lt;const _o=new WeakSet;class Cd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&en.active&&en.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_o.has(this)&&(_o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ld(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dc(this),Pd(this);const e=lt,n=Ln;lt=this,Ln=!0;try{return this.fn()}finally{Id(this),lt=e,Ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jl(e);this.deps=this.depsTail=void 0,Dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let wd=0,ps,ms;function Ld(t,e=!1){if(t.flags|=8,e){t.next=ms,ms=t;return}t.next=ps,ps=t}function $l(){wd++}function ql(){if(--wd>0)return;if(ms){let e=ms;for(ms=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ps;){let e=ps;for(ps=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Pd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Id(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),jl(i),hm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function ol(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Dd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ss)||(t.globalVersion=Ss,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ol(t))))return;t.flags|=2;const e=t.dep,n=lt,i=Ln;lt=t,Ln=!0;try{Pd(t);const r=t.fn(t._value);(e.version===0||Ai(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=n,Ln=i,Id(t),t.flags&=-3}}function jl(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)jl(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function hm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ln=!0;const Nd=[];function oi(){Nd.push(Ln),Ln=!1}function li(){const t=Nd.pop();Ln=t===void 0?!0:t}function Dc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=lt;lt=void 0;try{e()}finally{lt=n}}}let Ss=0;class pm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!lt||!Ln||lt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==lt)n=this.activeLink=new pm(lt,this),lt.deps?(n.prevDep=lt.depsTail,lt.depsTail.nextDep=n,lt.depsTail=n):lt.deps=lt.depsTail=n,Ud(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=lt.depsTail,n.nextDep=void 0,lt.depsTail.nextDep=n,lt.depsTail=n,lt.deps===n&&(lt.deps=i)}return n}trigger(e){this.version++,Ss++,this.notify(e)}notify(e){$l();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ql()}}}function Ud(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ud(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ll=new WeakMap,sr=Symbol(""),cl=Symbol(""),Ms=Symbol("");function Gt(t,e,n){if(Ln&&lt){let i=ll.get(t);i||ll.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Kl),r.map=i,r.key=n),r.track()}}function ti(t,e,n,i,r,s){const a=ll.get(t);if(!a){Ss++;return}const o=l=>{l&&l.trigger()};if($l(),e==="clear")a.forEach(o);else{const l=Ne(t),c=l&&Wl(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Ms||!Fi(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(Ms)),e){case"add":l?c&&o(a.get("length")):(o(a.get(sr)),Hr(t)&&o(a.get(cl)));break;case"delete":l||(o(a.get(sr)),Hr(t)&&o(a.get(cl)));break;case"set":Hr(t)&&o(a.get(sr));break}}ql()}function dr(t){const e=Je(t);return e===t?e:(Gt(e,"iterate",Ms),En(t)?e:e.map(Dt))}function $a(t){return Gt(t=Je(t),"iterate",Ms),t}const mm={__proto__:null,[Symbol.iterator](){return go(this,Symbol.iterator,Dt)},concat(...t){return dr(this).concat(...t.map(e=>Ne(e)?dr(e):e))},entries(){return go(this,"entries",t=>(t[1]=Dt(t[1]),t))},every(t,e){return Wn(this,"every",t,e,void 0,arguments)},filter(t,e){return Wn(this,"filter",t,e,n=>n.map(Dt),arguments)},find(t,e){return Wn(this,"find",t,e,Dt,arguments)},findIndex(t,e){return Wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Wn(this,"findLast",t,e,Dt,arguments)},findLastIndex(t,e){return Wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return vo(this,"includes",t)},indexOf(...t){return vo(this,"indexOf",t)},join(t){return dr(this).join(t)},lastIndexOf(...t){return vo(this,"lastIndexOf",t)},map(t,e){return Wn(this,"map",t,e,void 0,arguments)},pop(){return ns(this,"pop")},push(...t){return ns(this,"push",t)},reduce(t,...e){return Nc(this,"reduce",t,e)},reduceRight(t,...e){return Nc(this,"reduceRight",t,e)},shift(){return ns(this,"shift")},some(t,e){return Wn(this,"some",t,e,void 0,arguments)},splice(...t){return ns(this,"splice",t)},toReversed(){return dr(this).toReversed()},toSorted(t){return dr(this).toSorted(t)},toSpliced(...t){return dr(this).toSpliced(...t)},unshift(...t){return ns(this,"unshift",t)},values(){return go(this,"values",Dt)}};function go(t,e,n){const i=$a(t),r=i[e]();return i!==t&&!En(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const _m=Array.prototype;function Wn(t,e,n,i,r,s){const a=$a(t),o=a!==t&&!En(t),l=a[e];if(l!==_m[e]){const f=l.apply(t,s);return o?Dt(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,Dt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Nc(t,e,n,i){const r=$a(t);let s=n;return r!==t&&(En(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Dt(o),l,t)}),r[e](s,...i)}function vo(t,e,n){const i=Je(t);Gt(i,"iterate",Ms);const r=i[e](...n);return(r===-1||r===!1)&&ec(n[0])?(n[0]=Je(n[0]),i[e](...n)):r}function ns(t,e,n=[]){oi(),$l();const i=Je(t)[e].apply(t,n);return ql(),li(),i}const gm=Gl("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fi));function vm(t){Fi(t)||(t=String(t));const e=Je(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class Fd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Cm:Gd:s?kd:Hd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ne(e);if(!r){let l;if(a&&(l=mm[n]))return l;if(n==="hasOwnProperty")return vm}const o=Reflect.get(e,n,Ot(e)?e:i);return(Fi(n)?Od.has(n):gm(n))||(r||Gt(e,"get",n),s)?o:Ot(o)?a&&Wl(n)?o:o.value:ht(o)?r?Vd(o):Jl(o):o}}class Bd extends Fd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Di(s);if(!En(i)&&!Di(i)&&(s=Je(s),i=Je(i)),!Ne(e)&&Ot(s)&&!Ot(i))return l?!1:(s.value=i,!0)}const a=Ne(e)&&Wl(n)?Number(n)<e.length:et(e,n),o=Reflect.set(e,n,i,Ot(e)?e:r);return e===Je(r)&&(a?Ai(i,s)&&ti(e,"set",n,i):ti(e,"add",n,i)),o}deleteProperty(e,n){const i=et(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ti(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Fi(n)||!Od.has(n))&&Gt(e,"has",n),i}ownKeys(e){return Gt(e,"iterate",Ne(e)?"length":sr),Reflect.ownKeys(e)}}class Em extends Fd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xm=new Bd,Sm=new Em,Mm=new Bd(!0);const ul=t=>t,Ws=t=>Reflect.getPrototypeOf(t);function ym(t,e,n){return function(...i){const r=this.__v_raw,s=Je(r),a=Hr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?ul:e?Aa:Dt;return!e&&Gt(s,"iterate",l?cl:sr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tm(t,e){const n={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);t||(Ai(r,o)&&Gt(a,"get",r),Gt(a,"get",o));const{has:l}=Ws(a),c=e?ul:t?Aa:Dt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Gt(Je(r),"iterate",sr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return t||(Ai(r,o)&&Gt(a,"has",r),Gt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?ul:t?Aa:Dt;return!t&&Gt(l,"iterate",sr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Lt(n,t?{add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear")}:{add(r){!e&&!En(r)&&!Di(r)&&(r=Je(r));const s=Je(this);return Ws(s).has.call(s,r)||(s.add(r),ti(s,"add",r,r)),this},set(r,s){!e&&!En(s)&&!Di(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=Ws(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ai(s,u)&&ti(a,"set",r,s):ti(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=Ws(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&ti(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&ti(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ym(r,t,e)}),n}function Zl(t,e){const n=Tm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(et(n,r)&&r in i?n:i,r,s)}const bm={get:Zl(!1,!1)},Am={get:Zl(!1,!0)},Rm={get:Zl(!0,!1)};const Hd=new WeakMap,kd=new WeakMap,Gd=new WeakMap,Cm=new WeakMap;function wm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lm(t){return t.__v_skip||!Object.isExtensible(t)?0:wm(em(t))}function Jl(t){return Di(t)?t:Ql(t,!1,xm,bm,Hd)}function Pm(t){return Ql(t,!1,Mm,Am,kd)}function Vd(t){return Ql(t,!0,Sm,Rm,Gd)}function Ql(t,e,n,i,r){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Lm(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function kr(t){return Di(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function En(t){return!!(t&&t.__v_isShallow)}function ec(t){return t?!!t.__v_raw:!1}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function Im(t){return!et(t,"__v_skip")&&Object.isExtensible(t)&&yd(t,"__v_skip",!0),t}const Dt=t=>ht(t)?Jl(t):t,Aa=t=>ht(t)?Vd(t):t;function Ot(t){return t?t.__v_isRef===!0:!1}function Pt(t){return Wd(t,!1)}function zd(t){return Wd(t,!0)}function Wd(t,e){return Ot(t)?t:new Dm(t,e)}class Dm{constructor(e,n){this.dep=new Kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Je(e),this._value=n?e:Dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||En(e)||Di(e);e=i?e:Je(e),Ai(e,n)&&(this._rawValue=e,this._value=i?e:Dt(e),this.dep.trigger())}}function Nm(t){return Ot(t)?t.value:t}const Um={get:(t,e,n)=>e==="__v_raw"?t:Nm(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ot(r)&&!Ot(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Xd(t){return kr(t)?t:new Proxy(t,Um)}class Om{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return Ld(this,!0),!0}get value(){const e=this.dep.track();return Dd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fm(t,e,n=!1){let i,r;return ke(t)?i=t:(i=t.get,r=t.set),new Om(i,r,n)}const Ys={},Ra=new WeakMap;let Qi;function Bm(t,e=!1,n=Qi){if(n){let i=Ra.get(n);i||Ra.set(n,i=[]),i.push(t)}}function Hm(t,e,n=ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=M=>r?M:En(M)||r===!1||r===0?Mi(M,1):Mi(M);let u,f,d,m,x=!1,v=!1;if(Ot(t)?(f=()=>t.value,x=En(t)):kr(t)?(f=()=>c(t),x=!0):Ne(t)?(v=!0,x=t.some(M=>kr(M)||En(M)),f=()=>t.map(M=>{if(Ot(M))return M.value;if(kr(M))return c(M);if(ke(M))return l?l(M,2):M()})):ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){oi();try{d()}finally{li()}}const M=Qi;Qi=u;try{return l?l(t,3,[m]):t(m)}finally{Qi=M}}:f=kn,e&&r){const M=f,L=r===!0?1/0:r;f=()=>Mi(M(),L)}const _=dm(),p=()=>{u.stop(),_&&_.active&&zl(_.effects,u)};if(s&&e){const M=e;e=(...L)=>{M(...L),p()}}let A=v?new Array(t.length).fill(Ys):Ys;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const L=u.run();if(r||x||(v?L.some((b,R)=>Ai(b,A[R])):Ai(L,A))){d&&d();const b=Qi;Qi=u;try{const R=[L,A===Ys?void 0:v&&A[0]===Ys?[]:A,m];A=L,l?l(e,3,R):e(...R)}finally{Qi=b}}}else u.run()};return o&&o(E),u=new Cd(f),u.scheduler=a?()=>a(E,!1):E,m=M=>Bm(M,!1,u),d=u.onStop=()=>{const M=Ra.get(u);if(M){if(l)l(M,4);else for(const L of M)L();Ra.delete(u)}},e?i?E(!0):A=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Mi(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ot(t))Mi(t.value,e,n);else if(Ne(t))for(let i=0;i<t.length;i++)Mi(t[i],e,n);else if(vd(t)||Hr(t))t.forEach(i=>{Mi(i,e,n)});else if(Sd(t)){for(const i in t)Mi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Mi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ns(t,e,n,i){try{return i?t(...i):t()}catch(r){qa(r,e,n)}}function In(t,e,n,i){if(ke(t)){const r=Ns(t,e,n,i);return r&&Ed(r)&&r.catch(s=>{qa(s,e,n)}),r}if(Ne(t)){const r=[];for(let s=0;s<t.length;s++)r.push(In(t[s],e,n,i));return r}}function qa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){oi(),Ns(s,null,10,[t,l,c]),li();return}}km(t,n,r,i,a)}function km(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Kt=[];let Un=-1;const Gr=[];let Ei=null,Dr=0;const Yd=Promise.resolve();let Ca=null;function Gm(t){const e=Ca||Yd;return t?e.then(this?t.bind(this):t):e}function Vm(t){let e=Un+1,n=Kt.length;for(;e<n;){const i=e+n>>>1,r=Kt[i],s=ys(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function tc(t){if(!(t.flags&1)){const e=ys(t),n=Kt[Kt.length-1];!n||!(t.flags&2)&&e>=ys(n)?Kt.push(t):Kt.splice(Vm(e),0,t),t.flags|=1,$d()}}function $d(){Ca||(Ca=Yd.then(jd))}function zm(t){Ne(t)?Gr.push(...t):Ei&&t.id===-1?Ei.splice(Dr+1,0,t):t.flags&1||(Gr.push(t),t.flags|=1),$d()}function Uc(t,e,n=Un+1){for(;n<Kt.length;n++){const i=Kt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Kt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qd(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,i)=>ys(n)-ys(i));if(Gr.length=0,Ei){Ei.push(...e);return}for(Ei=e,Dr=0;Dr<Ei.length;Dr++){const n=Ei[Dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ei=null,Dr=0}}const ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function jd(t){try{for(Un=0;Un<Kt.length;Un++){const e=Kt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ns(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<Kt.length;Un++){const e=Kt[Un];e&&(e.flags&=-2)}Un=-1,Kt.length=0,qd(),Ca=null,(Kt.length||Gr.length)&&jd()}}let Rn=null,Kd=null;function wa(t){const e=Rn;return Rn=t,Kd=t&&t.type.__scopeId||null,e}function nc(t,e=Rn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Xc(-1);const s=wa(e);let a;try{a=t(...r)}finally{wa(s),i._d&&Xc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function zi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(oi(),In(l,n,8,[t.el,o,t,e]),li())}}const Wm=Symbol("_vte"),Zd=t=>t.__isTeleport,xi=Symbol("_leaveCb"),$s=Symbol("_enterCb");function Xm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Za(()=>{t.isMounted=!0}),ah(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],Jd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},Qd=t=>{const e=t.subTree;return e.component?Qd(e.component):e},Ym={name:"BaseTransition",props:Jd,setup(t,{slots:e}){const n=Xr(),i=Xm();return()=>{const r=e.default&&nh(e.default(),!0);if(!r||!r.length)return;const s=eh(r),a=Je(t),{mode:o}=a;if(i.isLeaving)return Eo(s);const l=Oc(s);if(!l)return Eo(s);let c=fl(l,a,i,n,f=>c=f);l.type!==Zt&&Ts(l,c);let u=n.subTree&&Oc(n.subTree);if(u&&u.type!==Zt&&!nr(l,u)&&Qd(n).type!==Zt){let f=fl(u,a,i,n);if(Ts(u,f),o==="out-in"&&l.type!==Zt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Eo(s);o==="in-out"&&l.type!==Zt?f.delayLeave=(d,m,x)=>{const v=th(i,u);v[String(u.key)]=u,d[xi]=()=>{m(),d[xi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function eh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Zt){e=n;break}}return e}const $m=Ym;function th(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function fl(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:x,onLeaveCancelled:v,onBeforeAppear:_,onAppear:p,onAfterAppear:A,onAppearCancelled:E}=e,M=String(t.key),L=th(n,t),b=(S,C)=>{S&&In(S,i,9,C)},R=(S,C)=>{const X=C[1];b(S,C),Ne(S)?S.every(O=>O.length<=1)&&X():S.length<=1&&X()},k={mode:a,persisted:o,beforeEnter(S){let C=l;if(!n.isMounted)if(s)C=_||l;else return;S[xi]&&S[xi](!0);const X=L[M];X&&nr(t,X)&&X.el[xi]&&X.el[xi](),b(C,[S])},enter(S){let C=c,X=u,O=f;if(!n.isMounted)if(s)C=p||c,X=A||u,O=E||f;else return;let ie=!1;const B=S[$s]=$=>{ie||(ie=!0,$?b(O,[S]):b(X,[S]),k.delayedLeave&&k.delayedLeave(),S[$s]=void 0)};C?R(C,[S,B]):B()},leave(S,C){const X=String(t.key);if(S[$s]&&S[$s](!0),n.isUnmounting)return C();b(d,[S]);let O=!1;const ie=S[xi]=B=>{O||(O=!0,C(),B?b(v,[S]):b(x,[S]),S[xi]=void 0,L[X]===t&&delete L[X])};L[X]=t,m?R(m,[S,ie]):ie()},clone(S){const C=fl(S,e,n,i,r);return r&&r(C),C}};return k}function Eo(t){if(ja(t))return t=Ni(t),t.children=null,t}function Oc(t){if(!ja(t))return Zd(t.type)&&t.children?eh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ke(n.default))return n.default()}}function Ts(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ts(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===cn?(a.patchFlag&128&&r++,i=i.concat(nh(a.children,e,o))):(e||a.type!==Zt)&&i.push(o!=null?Ni(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ic(t,e){return ke(t)?Lt({name:t.name},e,{setup:t}):t}function ih(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function La(t,e,n,i,r=!1){if(Ne(t)){t.forEach((x,v)=>La(x,e&&(Ne(e)?e[v]:e),n,i,r));return}if(_s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&La(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?cc(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===ct?o.refs={}:o.refs,f=o.setupState,d=Je(f),m=f===ct?()=>!1:x=>et(d,x);if(c!=null&&c!==l&&(Et(c)?(u[c]=null,m(c)&&(f[c]=null)):Ot(c)&&(c.value=null)),ke(l))Ns(l,o,12,[a,u]);else{const x=Et(l),v=Ot(l);if(x||v){const _=()=>{if(t.f){const p=x?m(l)?f[l]:u[l]:l.value;r?Ne(p)&&zl(p,s):Ne(p)?p.includes(s)||p.push(s):x?(u[l]=[s],m(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else x?(u[l]=a,m(l)&&(f[l]=a)):v&&(l.value=a,t.k&&(u[t.k]=a))};a?(_.id=-1,ln(_,n)):_()}}}Ya().requestIdleCallback;Ya().cancelIdleCallback;const _s=t=>!!t.type.__asyncLoader,ja=t=>t.type.__isKeepAlive;function qm(t,e){rh(t,"a",e)}function jm(t,e){rh(t,"da",e)}function rh(t,e,n=Vt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ka(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ja(r.parent.vnode)&&Km(i,e,n,r),r=r.parent}}function Km(t,e,n,i){const r=Ka(e,t,i,!0);rc(()=>{zl(i[e],r)},n)}function Ka(t,e,n=Vt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{oi();const o=Os(n),l=In(e,n,t,a);return o(),li(),l});return i?r.unshift(s):r.push(s),s}}const ui=t=>(e,n=Vt)=>{(!As||t==="sp")&&Ka(t,(...i)=>e(...i),n)},sh=ui("bm"),Za=ui("m"),Zm=ui("bu"),Jm=ui("u"),ah=ui("bum"),rc=ui("um"),Qm=ui("sp"),e_=ui("rtg"),t_=ui("rtc");function n_(t,e=Vt){Ka("ec",t,e)}const i_=Symbol.for("v-ndc");function r_(t,e,n,i){let r;const s=n,a=Ne(t);if(a||Et(t)){const o=a&&kr(t);let l=!1,c=!1;o&&(l=!En(t),c=Di(t),t=$a(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Aa(Dt(t[u])):Dt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(ht(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const dl=t=>t?Ah(t)?cc(t):dl(t.parent):null,gs=Lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dl(t.parent),$root:t=>dl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lh(t),$forceUpdate:t=>t.f||(t.f=()=>{tc(t.update)}),$nextTick:t=>t.n||(t.n=Gm.bind(t.proxy)),$watch:t=>A_.bind(t)}),xo=(t,e)=>t!==ct&&!t.__isScriptSetup&&et(t,e),s_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(xo(i,e))return a[e]=1,i[e];if(r!==ct&&et(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&et(c,e))return a[e]=3,s[e];if(n!==ct&&et(n,e))return a[e]=4,n[e];hl&&(a[e]=0)}}const u=gs[e];let f,d;if(u)return e==="$attrs"&&Gt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==ct&&et(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,et(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return xo(r,e)?(r[e]=n,!0):i!==ct&&et(i,e)?(i[e]=n,!0):et(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==ct&&et(t,a)||xo(e,a)||(o=s[0])&&et(o,a)||et(i,a)||et(gs,a)||et(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:et(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fc(t){return Ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hl=!0;function a_(t){const e=lh(t),n=t.proxy,i=t.ctx;hl=!1,e.beforeCreate&&Bc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:_,beforeDestroy:p,beforeUnmount:A,destroyed:E,unmounted:M,render:L,renderTracked:b,renderTriggered:R,errorCaptured:k,serverPrefetch:S,expose:C,inheritAttrs:X,components:O,directives:ie,filters:B}=e;if(c&&o_(c,i,null),a)for(const te in a){const J=a[te];ke(J)&&(i[te]=J.bind(n))}if(r){const te=r.call(n,n);ht(te)&&(t.data=Jl(te))}if(hl=!0,s)for(const te in s){const J=s[te],ae=ke(J)?J.bind(n,n):ke(J.get)?J.get.bind(n,n):kn,oe=!ke(J)&&ke(J.set)?J.set.bind(n):kn,ue=Rt({get:ae,set:oe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>ue.value,set:fe=>ue.value=fe})}if(o)for(const te in o)oh(o[te],i,n,te);if(l){const te=ke(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{h_(J,te[J])})}u&&Bc(u,t,"c");function Y(te,J){Ne(J)?J.forEach(ae=>te(ae.bind(n))):J&&te(J.bind(n))}if(Y(sh,f),Y(Za,d),Y(Zm,m),Y(Jm,x),Y(qm,v),Y(jm,_),Y(n_,k),Y(t_,b),Y(e_,R),Y(ah,A),Y(rc,M),Y(Qm,S),Ne(C))if(C.length){const te=t.exposed||(t.exposed={});C.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:ae=>n[J]=ae})})}else t.exposed||(t.exposed={});L&&t.render===kn&&(t.render=L),X!=null&&(t.inheritAttrs=X),O&&(t.components=O),ie&&(t.directives=ie),S&&ih(t)}function o_(t,e,n=kn){Ne(t)&&(t=pl(t));for(const i in t){const r=t[i];let s;ht(r)?"default"in r?s=vs(r.from||i,r.default,!0):s=vs(r.from||i):s=vs(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Bc(t,e,n){In(Ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function oh(t,e,n,i){let r=i.includes(".")?Sh(n,i):()=>n[i];if(Et(t)){const s=e[t];ke(s)&&Ri(r,s)}else if(ke(t))Ri(r,t.bind(n));else if(ht(t))if(Ne(t))t.forEach(s=>oh(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&Ri(r,s,t)}}function lh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Pa(l,c,a,!0)),Pa(l,e,a)),ht(e)&&s.set(e,l),l}function Pa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Pa(t,s,n,!0),r&&r.forEach(a=>Pa(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=l_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const l_={data:Hc,props:kc,emits:kc,methods:ds,computed:ds,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:ds,directives:ds,watch:u_,provide:Hc,inject:c_};function Hc(t,e){return e?t?function(){return Lt(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function c_(t,e){return ds(pl(t),pl(e))}function pl(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?Lt(Object.create(null),t,e):e}function kc(t,e){return t?Ne(t)&&Ne(e)?[...new Set([...t,...e])]:Lt(Object.create(null),Fc(t),Fc(e??{})):e}function u_(t,e){if(!t)return e;if(!e)return t;const n=Lt(Object.create(null),t);for(const i in e)n[i]=Yt(t[i],e[i]);return n}function ch(){return{app:null,config:{isNativeTag:Jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let f_=0;function d_(t,e){return function(i,r=null){ke(i)||(i=Lt({},i)),r!=null&&!ht(r)&&(r=null);const s=ch(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:f_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Y_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ke(u.install)?(a.add(u),u.install(c,...f)):ke(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||Nt(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(m,u,d),l=!0,c._container=u,u.__vue_app__=c,cc(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(In(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Vr;Vr=c;try{return u()}finally{Vr=f}}};return c}}let Vr=null;function h_(t,e){if(Vt){let n=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===n&&(n=Vt.provides=Object.create(i)),n[t]=e}}function vs(t,e,n=!1){const i=Vt||Rn;if(i||Vr){let r=Vr?Vr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}const uh={},fh=()=>Object.create(uh),dh=t=>Object.getPrototypeOf(t)===uh;function p_(t,e,n,i=!1){const r={},s=fh();t.propsDefaults=Object.create(null),hh(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Pm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function m_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=Je(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ja(t.emitsOptions,d))continue;const m=e[d];if(l)if(et(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=Ii(d);r[x]=ml(l,o,x,m,t,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{hh(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!et(e,f)&&((u=fr(f))===f||!et(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ml(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&ti(t.attrs,"set","")}function hh(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(hs(l))continue;const c=e[l];let u;r&&et(r,u=Ii(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Ja(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(n),c=o||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=ml(r,l,f,c[f],t,!et(c,f))}}return a}function ml(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Os(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===fr(n))&&(i=!0))}return i}const __=new WeakMap;function ph(t,e,n=!1){const i=n?__:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!ke(t)){const u=f=>{l=!0;const[d,m]=ph(f,e,!0);Lt(a,d),m&&o.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ht(t)&&i.set(t,Br),Br;if(Ne(s))for(let u=0;u<s.length;u++){const f=Ii(s[u]);Gc(f)&&(a[f]=ct)}else if(s)for(const u in s){const f=Ii(u);if(Gc(f)){const d=s[u],m=a[f]=Ne(d)||ke(d)?{type:d}:Lt({},d),x=m.type;let v=!1,_=!0;if(Ne(x))for(let p=0;p<x.length;++p){const A=x[p],E=ke(A)&&A.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(_=!1)}else v=ke(x)&&x.name==="Boolean";m[0]=v,m[1]=_,(v||et(m,"default"))&&o.push(f)}}const c=[a,o];return ht(t)&&i.set(t,c),c}function Gc(t){return t[0]!=="$"&&!hs(t)}const sc=t=>t[0]==="_"||t==="$stable",ac=t=>Ne(t)?t.map(On):[On(t)],g_=(t,e,n)=>{if(e._n)return e;const i=nc((...r)=>ac(e(...r)),n);return i._c=!1,i},mh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(sc(r))continue;const s=t[r];if(ke(s))e[r]=g_(r,s,i);else if(s!=null){const a=ac(s);e[r]=()=>a}}},_h=(t,e)=>{const n=ac(e);t.slots.default=()=>n},gh=(t,e,n)=>{for(const i in e)(n||!sc(i))&&(t[i]=e[i])},v_=(t,e,n)=>{const i=t.slots=fh();if(t.vnode.shapeFlag&32){const r=e._;r?(gh(i,e,n),n&&yd(i,"_",r,!0)):mh(e,i)}else e&&_h(t,e)},E_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:gh(r,e,n):(s=!e.$stable,mh(e,r)),a=e}else e&&(_h(t,e),a={default:1});if(s)for(const o in r)!sc(o)&&a[o]==null&&delete r[o]},ln=D_;function x_(t){return S_(t)}function S_(t,e){const n=Ya();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=kn,insertStaticContent:x}=t,v=(y,U,P,V=null,z=null,ne=null,re=void 0,T=null,h=!!U.dynamicChildren)=>{if(y===U)return;y&&!nr(y,U)&&(V=Me(y),fe(y,z,ne,!0),y=null),U.patchFlag===-2&&(h=!1,U.dynamicChildren=null);const{type:g,ref:I,shapeFlag:N}=U;switch(g){case Us:_(y,U,P,V);break;case Zt:p(y,U,P,V);break;case Mo:y==null&&A(U,P,V,re);break;case cn:O(y,U,P,V,z,ne,re,T,h);break;default:N&1?L(y,U,P,V,z,ne,re,T,h):N&6?ie(y,U,P,V,z,ne,re,T,h):(N&64||N&128)&&g.process(y,U,P,V,z,ne,re,T,h,ye)}I!=null&&z&&La(I,y&&y.ref,ne,U||y,!U)},_=(y,U,P,V)=>{if(y==null)i(U.el=o(U.children),P,V);else{const z=U.el=y.el;U.children!==y.children&&c(z,U.children)}},p=(y,U,P,V)=>{y==null?i(U.el=l(U.children||""),P,V):U.el=y.el},A=(y,U,P,V)=>{[y.el,y.anchor]=x(y.children,U,P,V,y.el,y.anchor)},E=({el:y,anchor:U},P,V)=>{let z;for(;y&&y!==U;)z=d(y),i(y,P,V),y=z;i(U,P,V)},M=({el:y,anchor:U})=>{let P;for(;y&&y!==U;)P=d(y),r(y),y=P;r(U)},L=(y,U,P,V,z,ne,re,T,h)=>{U.type==="svg"?re="svg":U.type==="math"&&(re="mathml"),y==null?b(U,P,V,z,ne,re,T,h):S(y,U,z,ne,re,T,h)},b=(y,U,P,V,z,ne,re,T)=>{let h,g;const{props:I,shapeFlag:N,transition:G,dirs:q}=y;if(h=y.el=a(y.type,ne,I&&I.is,I),N&8?u(h,y.children):N&16&&k(y.children,h,null,V,z,So(y,ne),re,T),q&&zi(y,null,V,"created"),R(h,y,y.scopeId,re,V),I){for(const H in I)H!=="value"&&!hs(H)&&s(h,H,null,I[H],ne,V);"value"in I&&s(h,"value",null,I.value,ne),(g=I.onVnodeBeforeMount)&&Nn(g,V,y)}q&&zi(y,null,V,"beforeMount");const D=M_(z,G);D&&G.beforeEnter(h),i(h,U,P),((g=I&&I.onVnodeMounted)||D||q)&&ln(()=>{g&&Nn(g,V,y),D&&G.enter(h),q&&zi(y,null,V,"mounted")},z)},R=(y,U,P,V,z)=>{if(P&&m(y,P),V)for(let ne=0;ne<V.length;ne++)m(y,V[ne]);if(z){let ne=z.subTree;if(U===ne||yh(ne.type)&&(ne.ssContent===U||ne.ssFallback===U)){const re=z.vnode;R(y,re,re.scopeId,re.slotScopeIds,z.parent)}}},k=(y,U,P,V,z,ne,re,T,h=0)=>{for(let g=h;g<y.length;g++){const I=y[g]=T?Si(y[g]):On(y[g]);v(null,I,U,P,V,z,ne,re,T)}},S=(y,U,P,V,z,ne,re)=>{const T=U.el=y.el;let{patchFlag:h,dynamicChildren:g,dirs:I}=U;h|=y.patchFlag&16;const N=y.props||ct,G=U.props||ct;let q;if(P&&Wi(P,!1),(q=G.onVnodeBeforeUpdate)&&Nn(q,P,U,y),I&&zi(U,y,P,"beforeUpdate"),P&&Wi(P,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&u(T,""),g?C(y.dynamicChildren,g,T,P,V,So(U,z),ne):re||J(y,U,T,null,P,V,So(U,z),ne,!1),h>0){if(h&16)X(T,N,G,P,z);else if(h&2&&N.class!==G.class&&s(T,"class",null,G.class,z),h&4&&s(T,"style",N.style,G.style,z),h&8){const D=U.dynamicProps;for(let H=0;H<D.length;H++){const le=D[H],me=N[le],se=G[le];(se!==me||le==="value")&&s(T,le,me,se,z,P)}}h&1&&y.children!==U.children&&u(T,U.children)}else!re&&g==null&&X(T,N,G,P,z);((q=G.onVnodeUpdated)||I)&&ln(()=>{q&&Nn(q,P,U,y),I&&zi(U,y,P,"updated")},V)},C=(y,U,P,V,z,ne,re)=>{for(let T=0;T<U.length;T++){const h=y[T],g=U[T],I=h.el&&(h.type===cn||!nr(h,g)||h.shapeFlag&198)?f(h.el):P;v(h,g,I,null,V,z,ne,re,!0)}},X=(y,U,P,V,z)=>{if(U!==P){if(U!==ct)for(const ne in U)!hs(ne)&&!(ne in P)&&s(y,ne,U[ne],null,z,V);for(const ne in P){if(hs(ne))continue;const re=P[ne],T=U[ne];re!==T&&ne!=="value"&&s(y,ne,T,re,z,V)}"value"in P&&s(y,"value",U.value,P.value,z)}},O=(y,U,P,V,z,ne,re,T,h)=>{const g=U.el=y?y.el:o(""),I=U.anchor=y?y.anchor:o("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:q}=U;q&&(T=T?T.concat(q):q),y==null?(i(g,P,V),i(I,P,V),k(U.children||[],P,I,z,ne,re,T,h)):N>0&&N&64&&G&&y.dynamicChildren?(C(y.dynamicChildren,G,P,z,ne,re,T),(U.key!=null||z&&U===z.subTree)&&vh(y,U,!0)):J(y,U,P,I,z,ne,re,T,h)},ie=(y,U,P,V,z,ne,re,T,h)=>{U.slotScopeIds=T,y==null?U.shapeFlag&512?z.ctx.activate(U,P,V,re,h):B(U,P,V,z,ne,re,h):$(y,U,h)},B=(y,U,P,V,z,ne,re)=>{const T=y.component=k_(y,V,z);if(ja(y)&&(T.ctx.renderer=ye),G_(T,!1,re),T.asyncDep){if(z&&z.registerDep(T,Y,re),!y.el){const h=T.subTree=Nt(Zt);p(null,h,U,P)}}else Y(T,y,U,P,z,ne,re)},$=(y,U,P)=>{const V=U.component=y.component;if(P_(y,U,P))if(V.asyncDep&&!V.asyncResolved){te(V,U,P);return}else V.next=U,V.update();else U.el=y.el,V.vnode=U},Y=(y,U,P,V,z,ne,re)=>{const T=()=>{if(y.isMounted){let{next:N,bu:G,u:q,parent:D,vnode:H}=y;{const Te=Eh(y);if(Te){N&&(N.el=H.el,te(y,N,re)),Te.asyncDep.then(()=>{y.isUnmounted||T()});return}}let le=N,me;Wi(y,!1),N?(N.el=H.el,te(y,N,re)):N=H,G&&po(G),(me=N.props&&N.props.onVnodeBeforeUpdate)&&Nn(me,D,N,H),Wi(y,!0);const se=zc(y),Be=y.subTree;y.subTree=se,v(Be,se,f(Be.el),Me(Be),y,z,ne),N.el=se.el,le===null&&I_(y,se.el),q&&ln(q,z),(me=N.props&&N.props.onVnodeUpdated)&&ln(()=>Nn(me,D,N,H),z)}else{let N;const{el:G,props:q}=U,{bm:D,m:H,parent:le,root:me,type:se}=y,Be=_s(U);Wi(y,!1),D&&po(D),!Be&&(N=q&&q.onVnodeBeforeMount)&&Nn(N,le,U),Wi(y,!0);{me.ce&&me.ce._injectChildStyle(se);const Te=y.subTree=zc(y);v(null,Te,P,V,y,z,ne),U.el=Te.el}if(H&&ln(H,z),!Be&&(N=q&&q.onVnodeMounted)){const Te=U;ln(()=>Nn(N,le,Te),z)}(U.shapeFlag&256||le&&_s(le.vnode)&&le.vnode.shapeFlag&256)&&y.a&&ln(y.a,z),y.isMounted=!0,U=P=V=null}};y.scope.on();const h=y.effect=new Cd(T);y.scope.off();const g=y.update=h.run.bind(h),I=y.job=h.runIfDirty.bind(h);I.i=y,I.id=y.uid,h.scheduler=()=>tc(I),Wi(y,!0),g()},te=(y,U,P)=>{U.component=y;const V=y.vnode.props;y.vnode=U,y.next=null,m_(y,U.props,V,P),E_(y,U.children,P),oi(),Uc(y),li()},J=(y,U,P,V,z,ne,re,T,h=!1)=>{const g=y&&y.children,I=y?y.shapeFlag:0,N=U.children,{patchFlag:G,shapeFlag:q}=U;if(G>0){if(G&128){oe(g,N,P,V,z,ne,re,T,h);return}else if(G&256){ae(g,N,P,V,z,ne,re,T,h);return}}q&8?(I&16&&Se(g,z,ne),N!==g&&u(P,N)):I&16?q&16?oe(g,N,P,V,z,ne,re,T,h):Se(g,z,ne,!0):(I&8&&u(P,""),q&16&&k(N,P,V,z,ne,re,T,h))},ae=(y,U,P,V,z,ne,re,T,h)=>{y=y||Br,U=U||Br;const g=y.length,I=U.length,N=Math.min(g,I);let G;for(G=0;G<N;G++){const q=U[G]=h?Si(U[G]):On(U[G]);v(y[G],q,P,null,z,ne,re,T,h)}g>I?Se(y,z,ne,!0,!1,N):k(U,P,V,z,ne,re,T,h,N)},oe=(y,U,P,V,z,ne,re,T,h)=>{let g=0;const I=U.length;let N=y.length-1,G=I-1;for(;g<=N&&g<=G;){const q=y[g],D=U[g]=h?Si(U[g]):On(U[g]);if(nr(q,D))v(q,D,P,null,z,ne,re,T,h);else break;g++}for(;g<=N&&g<=G;){const q=y[N],D=U[G]=h?Si(U[G]):On(U[G]);if(nr(q,D))v(q,D,P,null,z,ne,re,T,h);else break;N--,G--}if(g>N){if(g<=G){const q=G+1,D=q<I?U[q].el:V;for(;g<=G;)v(null,U[g]=h?Si(U[g]):On(U[g]),P,D,z,ne,re,T,h),g++}}else if(g>G)for(;g<=N;)fe(y[g],z,ne,!0),g++;else{const q=g,D=g,H=new Map;for(g=D;g<=G;g++){const _e=U[g]=h?Si(U[g]):On(U[g]);_e.key!=null&&H.set(_e.key,g)}let le,me=0;const se=G-D+1;let Be=!1,Te=0;const Ce=new Array(se);for(g=0;g<se;g++)Ce[g]=0;for(g=q;g<=N;g++){const _e=y[g];if(me>=se){fe(_e,z,ne,!0);continue}let we;if(_e.key!=null)we=H.get(_e.key);else for(le=D;le<=G;le++)if(Ce[le-D]===0&&nr(_e,U[le])){we=le;break}we===void 0?fe(_e,z,ne,!0):(Ce[we-D]=g+1,we>=Te?Te=we:Be=!0,v(_e,U[we],P,null,z,ne,re,T,h),me++)}const be=Be?y_(Ce):Br;for(le=be.length-1,g=se-1;g>=0;g--){const _e=D+g,we=U[_e],Ke=_e+1<I?U[_e+1].el:V;Ce[g]===0?v(null,we,P,Ke,z,ne,re,T,h):Be&&(le<0||g!==be[le]?ue(we,P,Ke,2):le--)}}},ue=(y,U,P,V,z=null)=>{const{el:ne,type:re,transition:T,children:h,shapeFlag:g}=y;if(g&6){ue(y.component.subTree,U,P,V);return}if(g&128){y.suspense.move(U,P,V);return}if(g&64){re.move(y,U,P,ye);return}if(re===cn){i(ne,U,P);for(let N=0;N<h.length;N++)ue(h[N],U,P,V);i(y.anchor,U,P);return}if(re===Mo){E(y,U,P);return}if(V!==2&&g&1&&T)if(V===0)T.beforeEnter(ne),i(ne,U,P),ln(()=>T.enter(ne),z);else{const{leave:N,delayLeave:G,afterLeave:q}=T,D=()=>{y.ctx.isUnmounted?r(ne):i(ne,U,P)},H=()=>{N(ne,()=>{D(),q&&q()})};G?G(ne,D,H):H()}else i(ne,U,P)},fe=(y,U,P,V=!1,z=!1)=>{const{type:ne,props:re,ref:T,children:h,dynamicChildren:g,shapeFlag:I,patchFlag:N,dirs:G,cacheIndex:q}=y;if(N===-2&&(z=!1),T!=null&&(oi(),La(T,null,P,y,!0),li()),q!=null&&(U.renderCache[q]=void 0),I&256){U.ctx.deactivate(y);return}const D=I&1&&G,H=!_s(y);let le;if(H&&(le=re&&re.onVnodeBeforeUnmount)&&Nn(le,U,y),I&6)pe(y.component,P,V);else{if(I&128){y.suspense.unmount(P,V);return}D&&zi(y,null,U,"beforeUnmount"),I&64?y.type.remove(y,U,P,ye,V):g&&!g.hasOnce&&(ne!==cn||N>0&&N&64)?Se(g,U,P,!1,!0):(ne===cn&&N&384||!z&&I&16)&&Se(h,U,P),V&&ee(y)}(H&&(le=re&&re.onVnodeUnmounted)||D)&&ln(()=>{le&&Nn(le,U,y),D&&zi(y,null,U,"unmounted")},P)},ee=y=>{const{type:U,el:P,anchor:V,transition:z}=y;if(U===cn){ce(P,V);return}if(U===Mo){M(y);return}const ne=()=>{r(P),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(y.shapeFlag&1&&z&&!z.persisted){const{leave:re,delayLeave:T}=z,h=()=>re(P,ne);T?T(y.el,ne,h):h()}else ne()},ce=(y,U)=>{let P;for(;y!==U;)P=d(y),r(y),y=P;r(U)},pe=(y,U,P)=>{const{bum:V,scope:z,job:ne,subTree:re,um:T,m:h,a:g,parent:I,slots:{__:N}}=y;Vc(h),Vc(g),V&&po(V),I&&Ne(N)&&N.forEach(G=>{I.renderCache[G]=void 0}),z.stop(),ne&&(ne.flags|=8,fe(re,y,U,P)),T&&ln(T,U),ln(()=>{y.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Se=(y,U,P,V=!1,z=!1,ne=0)=>{for(let re=ne;re<y.length;re++)fe(y[re],U,P,V,z)},Me=y=>{if(y.shapeFlag&6)return Me(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const U=d(y.anchor||y.el),P=U&&U[Wm];return P?d(P):U};let Re=!1;const Le=(y,U,P)=>{y==null?U._vnode&&fe(U._vnode,null,null,!0):v(U._vnode||null,y,U,null,null,null,P),U._vnode=y,Re||(Re=!0,Uc(),qd(),Re=!1)},ye={p:v,um:fe,m:ue,r:ee,mt:B,mc:k,pc:J,pbc:C,n:Me,o:t};return{render:Le,hydrate:void 0,createApp:d_(Le)}}function So({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function M_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vh(t,e,n=!1){const i=t.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Si(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&vh(a,o)),o.type===Us&&(o.el=a.el),o.type===Zt&&!o.el&&(o.el=a.el)}}function y_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Eh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Eh(e)}function Vc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const T_=Symbol.for("v-scx"),b_=()=>vs(T_);function Ri(t,e,n){return xh(t,e,n)}function xh(t,e,n=ct){const{immediate:i,deep:r,flush:s,once:a}=n,o=Lt({},n),l=e&&i||!e&&s!=="post";let c;if(As){if(s==="sync"){const m=b_();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=kn,m.resume=kn,m.pause=kn,m}}const u=Vt;o.call=(m,x,v)=>In(m,u,x,v);let f=!1;s==="post"?o.scheduler=m=>{ln(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():tc(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Hm(t,e,o);return As&&(c?c.push(d):l&&d()),d}function A_(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?Sh(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const a=Os(this),o=xh(r,s.bind(i),n);return a(),o}function Sh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const R_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ii(e)}Modifiers`]||t[`${fr(e)}Modifiers`];function C_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),a=s&&R_(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Et(u)?u.trim():u)),a.number&&(r=n.map(im)));let o,l=i[o=ho(e)]||i[o=ho(Ii(e))];!l&&s&&(l=i[o=ho(fr(e))]),l&&In(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,In(c,t,6,r)}}function Mh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!ke(t)){const l=c=>{const u=Mh(c,e,!0);u&&(o=!0,Lt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(ht(t)&&i.set(t,null),null):(Ne(s)?s.forEach(l=>a[l]=null):Lt(a,s),ht(t)&&i.set(t,a),a)}function Ja(t,e){return!t||!za(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(t,e[0].toLowerCase()+e.slice(1))||et(t,fr(e))||et(t,e))}function zc(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:v}=t,_=wa(t);let p,A;try{if(n.shapeFlag&4){const M=r||i,L=M;p=On(c.call(L,M,u,f,m,d,x)),A=o}else{const M=e;p=On(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),A=e.props?o:w_(o)}}catch(M){Es.length=0,qa(M,t,1),p=Nt(Zt)}let E=p;if(A&&v!==!1){const M=Object.keys(A),{shapeFlag:L}=E;M.length&&L&7&&(s&&M.some(Vl)&&(A=L_(A,s)),E=Ni(E,A,!1,!0))}return n.dirs&&(E=Ni(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ts(E,n.transition),p=E,wa(_),p}const w_=t=>{let e;for(const n in t)(n==="class"||n==="style"||za(n))&&((e||(e={}))[n]=t[n]);return e},L_=(t,e)=>{const n={};for(const i in t)(!Vl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function P_(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Wc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Ja(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Wc(i,a,c):!0:!!a;return!1}function Wc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ja(n,s))return!0}return!1}function I_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const yh=t=>t.__isSuspense;function D_(t,e){e&&e.pendingBranch?Ne(t)?e.effects.push(...t):e.effects.push(t):zm(t)}const cn=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),Es=[];let un=null;function gn(t=!1){Es.push(un=t?null:[])}function N_(){Es.pop(),un=Es[Es.length-1]||null}let bs=1;function Xc(t,e=!1){bs+=t,t<0&&un&&e&&(un.hasOnce=!0)}function Th(t){return t.dynamicChildren=bs>0?un||Br:null,N_(),bs>0&&un&&un.push(t),t}function si(t,e,n,i,r,s){return Th(Qe(t,e,n,i,r,s,!0))}function oc(t,e,n,i,r){return Th(Nt(t,e,n,i,r,!0))}function Ia(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const bh=({key:t})=>t??null,Ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||Ot(t)||ke(t)?{i:Rn,r:t,k:e,f:!!n}:t:null);function Qe(t,e=null,n=null,i=0,r=null,s=t===cn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bh(e),ref:e&&Ma(e),scopeId:Kd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Rn};return o?(lc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),bs>0&&!a&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const Nt=U_;function U_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===i_)&&(t=Zt),Ia(t)){const o=Ni(t,e,!0);return n&&lc(o,n),bs>0&&!s&&un&&(o.shapeFlag&6?un[un.indexOf(t)]=o:un.push(o)),o.patchFlag=-2,o}if(X_(t)&&(t=t.__vccOpts),e){e=O_(e);let{class:o,style:l}=e;o&&!Et(o)&&(e.class=Yl(o)),ht(l)&&(ec(l)&&!Ne(l)&&(l=Lt({},l)),e.style=Xl(l))}const a=Et(t)?1:yh(t)?128:Zd(t)?64:ht(t)?4:ke(t)?2:0;return Qe(t,e,n,i,r,a,s,!0)}function O_(t){return t?ec(t)||dh(t)?Lt({},t):t:null}function Ni(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?F_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&bh(c),ref:e&&e.ref?n&&s?Ne(s)?s.concat(Ma(e)):[s,Ma(e)]:Ma(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==cn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ni(t.ssContent),ssFallback:t.ssFallback&&Ni(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ts(u,l.clone(u)),u}function _l(t=" ",e=0){return Nt(Us,null,t,e)}function gl(t="",e=!1){return e?(gn(),oc(Zt,null,t)):Nt(Zt,null,t)}function On(t){return t==null||typeof t=="boolean"?Nt(Zt):Ne(t)?Nt(cn,null,t.slice()):Ia(t)?Si(t):Nt(Us,null,String(t))}function Si(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ni(t)}function lc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ne(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),lc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!dh(e)?e._ctx=Rn:r===3&&Rn&&(Rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Rn},n=32):(e=String(e),i&64?(n=16,e=[_l(e)]):n=8);t.children=e,t.shapeFlag|=n}function F_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Yl([e.class,i.class]));else if(r==="style")e.style=Xl([e.style,i.style]);else if(za(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ne(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Nn(t,e,n,i=null){In(t,e,7,[n,i])}const B_=ch();let H_=0;function k_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||B_,s={uid:H_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ph(i,r),emitsOptions:Mh(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=C_.bind(null,s),t.ce&&t.ce(s),s}let Vt=null;const Xr=()=>Vt||Rn;let Da,vl;{const t=Ya(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>Vt=n),vl=e("__VUE_SSR_SETTERS__",n=>As=n)}const Os=t=>{const e=Vt;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},Yc=()=>{Vt&&Vt.scope.off(),Da(null)};function Ah(t){return t.vnode.shapeFlag&4}let As=!1;function G_(t,e=!1,n=!1){e&&vl(e);const{props:i,children:r}=t.vnode,s=Ah(t);p_(t,i,s,e),v_(t,r,n||e);const a=s?V_(t,e):void 0;return e&&vl(!1),a}function V_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,s_);const{setup:i}=n;if(i){oi();const r=t.setupContext=i.length>1?W_(t):null,s=Os(t),a=Ns(i,t,0,[t.props,r]),o=Ed(a);if(li(),s(),(o||t.sp)&&!_s(t)&&ih(t),o){if(a.then(Yc,Yc),e)return a.then(l=>{$c(t,l)}).catch(l=>{qa(l,t,0)});t.asyncDep=a}else $c(t,a)}else Rh(t)}function $c(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=Xd(e)),Rh(t)}function Rh(t,e,n){const i=t.type;t.render||(t.render=i.render||kn);{const r=Os(t);oi();try{a_(t)}finally{li(),r()}}}const z_={get(t,e){return Gt(t,"get",""),t[e]}};function W_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,z_),slots:t.slots,emit:t.emit,expose:e}}function cc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Xd(Im(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}})):t.proxy}function X_(t){return ke(t)&&"__vccOpts"in t}const Rt=(t,e)=>Fm(t,e,As);function uc(t,e,n){const i=arguments.length;return i===2?ht(e)&&!Ne(e)?Ia(e)?Nt(t,null,[e]):Nt(t,e):Nt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ia(n)&&(n=[n]),Nt(t,e,n))}const Y_="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let El;const qc=typeof window<"u"&&window.trustedTypes;if(qc)try{El=qc.createPolicy("vue",{createHTML:t=>t})}catch{}const Ch=El?t=>El.createHTML(t):t=>t,$_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,jc=ei&&ei.createElement("template"),j_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ei.createElementNS($_,t):e==="mathml"?ei.createElementNS(q_,t):n?ei.createElement(t,{is:n}):ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ei.createTextNode(t),createComment:t=>ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{jc.innerHTML=Ch(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=jc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},di="transition",is="animation",Rs=Symbol("_vtc"),wh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},K_=Lt({},Jd,wh),Z_=t=>(t.displayName="Transition",t.props=K_,t),Lh=Z_((t,{slots:e})=>uc($m,J_(t),e)),Xi=(t,e=[])=>{Ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},Kc=t=>t?Ne(t)?t.some(e=>e.length>1):t.length>1:!1;function J_(t){const e={};for(const O in t)O in wh||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,x=Q_(r),v=x&&x[0],_=x&&x[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:E,onLeave:M,onLeaveCancelled:L,onBeforeAppear:b=p,onAppear:R=A,onAppearCancelled:k=E}=e,S=(O,ie,B,$)=>{O._enterCancelled=$,Yi(O,ie?u:o),Yi(O,ie?c:a),B&&B()},C=(O,ie)=>{O._isLeaving=!1,Yi(O,f),Yi(O,m),Yi(O,d),ie&&ie()},X=O=>(ie,B)=>{const $=O?R:A,Y=()=>S(ie,O,B);Xi($,[ie,Y]),Zc(()=>{Yi(ie,O?l:s),Xn(ie,O?u:o),Kc($)||Jc(ie,i,v,Y)})};return Lt(e,{onBeforeEnter(O){Xi(p,[O]),Xn(O,s),Xn(O,a)},onBeforeAppear(O){Xi(b,[O]),Xn(O,l),Xn(O,c)},onEnter:X(!1),onAppear:X(!0),onLeave(O,ie){O._isLeaving=!0;const B=()=>C(O,ie);Xn(O,f),O._enterCancelled?(Xn(O,d),tu()):(tu(),Xn(O,d)),Zc(()=>{O._isLeaving&&(Yi(O,f),Xn(O,m),Kc(M)||Jc(O,i,_,B))}),Xi(M,[O,B])},onEnterCancelled(O){S(O,!1,void 0,!0),Xi(E,[O])},onAppearCancelled(O){S(O,!0,void 0,!0),Xi(k,[O])},onLeaveCancelled(O){C(O),Xi(L,[O])}})}function Q_(t){if(t==null)return null;if(ht(t))return[yo(t.enter),yo(t.leave)];{const e=yo(t);return[e,e]}}function yo(t){return rm(t)}function Xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Rs]||(t[Rs]=new Set)).add(e)}function Yi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Rs];n&&(n.delete(e),n.size||(t[Rs]=void 0))}function Zc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let eg=0;function Jc(t,e,n,i){const r=t._endId=++eg,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=tg(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=m=>{m.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function tg(t,e){const n=window.getComputedStyle(t),i=x=>(n[x]||"").split(", "),r=i(`${di}Delay`),s=i(`${di}Duration`),a=Qc(r,s),o=i(`${is}Delay`),l=i(`${is}Duration`),c=Qc(o,l);let u=null,f=0,d=0;e===di?a>0&&(u=di,f=a,d=s.length):e===is?c>0&&(u=is,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?di:is:null,d=u?u===di?s.length:l.length:0);const m=u===di&&/\b(transform|all)(,|$)/.test(i(`${di}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function Qc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>eu(n)+eu(t[i])))}function eu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tu(){return document.body.offsetHeight}function ng(t,e,n){const i=t[Rs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nu=Symbol("_vod"),ig=Symbol("_vsh"),rg=Symbol(""),sg=/(^|;)\s*display\s*:/;function ag(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&ya(i,o,"")}else for(const a in e)n[a]==null&&ya(i,a,"");for(const a in n)a==="display"&&(s=!0),ya(i,a,n[a])}else if(r){if(e!==n){const a=i[rg];a&&(n+=";"+a),i.cssText=n,s=sg.test(n)}}else e&&t.removeAttribute("style");nu in t&&(t[nu]=s?i.display:"",t[ig]&&(i.display="none"))}const iu=/\s*!important$/;function ya(t,e,n){if(Ne(n))n.forEach(i=>ya(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=og(t,e);iu.test(n)?t.setProperty(fr(i),n.replace(iu,""),"important"):t[i]=n}}const ru=["Webkit","Moz","ms"],To={};function og(t,e){const n=To[e];if(n)return n;let i=Ii(e);if(i!=="filter"&&i in t)return To[e]=i;i=Md(i);for(let r=0;r<ru.length;r++){const s=ru[r]+i;if(s in t)return To[e]=s}return e}const su="http://www.w3.org/1999/xlink";function au(t,e,n,i,r,s=um(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(su,e.slice(6,e.length)):t.setAttributeNS(su,e,n):n==null||s&&!Td(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Fi(n)?String(n):n)}function ou(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ch(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Td(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function lg(t,e,n,i){t.addEventListener(e,n,i)}function cg(t,e,n,i){t.removeEventListener(e,n,i)}const lu=Symbol("_vei");function ug(t,e,n,i,r=null){const s=t[lu]||(t[lu]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=fg(e);if(i){const c=s[e]=pg(i,r);lg(t,o,c,l)}else a&&(cg(t,o,a,l),s[e]=void 0)}}const cu=/(?:Once|Passive|Capture)$/;function fg(t){let e;if(cu.test(t)){e={};let i;for(;i=t.match(cu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fr(t.slice(2)),e]}let bo=0;const dg=Promise.resolve(),hg=()=>bo||(dg.then(()=>bo=0),bo=Date.now());function pg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;In(mg(i,n.value),e,5,[i])};return n.value=t,n.attached=hg(),n}function mg(t,e){if(Ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const uu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_g=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?ng(t,i,a):e==="style"?ag(t,n,i):za(e)?Vl(e)||ug(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gg(t,e,i,a))?(ou(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&au(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?ou(t,Ii(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),au(t,e,i,a))};function gg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&uu(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uu(e)&&Et(n)?!1:e in t}const vg=Lt({patchProp:_g},j_);let fu;function Eg(){return fu||(fu=x_(vg))}const xg=(...t)=>{const e=Eg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Mg(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Sg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Sg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mg(t){return Et(t)?document.querySelector(t):t}const yg="/worldmap-quiz/brand-logo-black.jpeg";/*!
  * shared v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Na=typeof window<"u",Bi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Tg=(t,e,n)=>bg({l:t,k:e,s:n}),bg=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),vt=t=>typeof t=="number"&&isFinite(t),Ag=t=>Ih(t)==="[object Date]",Ui=t=>Ih(t)==="[object RegExp]",Qa=t=>Fe(t)&&Object.keys(t).length===0,Ft=Object.assign,Rg=Object.create,it=(t=null)=>Rg(t);let du;const ni=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:it());function hu(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Cg=Object.prototype.hasOwnProperty;function Cn(t,e){return Cg.call(t,e)}const dt=Array.isArray,ut=t=>typeof t=="function",Ee=t=>typeof t=="string",qe=t=>typeof t=="boolean",Ze=t=>t!==null&&typeof t=="object",wg=t=>Ze(t)&&ut(t.then)&&ut(t.catch),Ph=Object.prototype.toString,Ih=t=>Ph.call(t),Fe=t=>{if(!Ze(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},Lg=t=>t==null?"":dt(t)||Fe(t)&&t.toString===Ph?JSON.stringify(t,null,2):String(t);function Pg(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function eo(t){let e=t;return()=>++e}function Ig(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const qs=t=>!Ze(t)||dt(t);function Ta(t,e){if(qs(t)||qs(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(Ze(i[s])&&!Ze(r[s])&&(r[s]=Array.isArray(i[s])?[]:it()),qs(r[s])||qs(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Dg(t,e,n){return{line:t,column:e,offset:n}}function Ua(t,e,n){return{start:t,end:e}}const Ng=/\{([0-9a-zA-Z]+)\}/g;function Dh(t,...e){return e.length===1&&Ug(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(Ng,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const Nh=Object.assign,pu=t=>typeof t=="string",Ug=t=>t!==null&&typeof t=="object";function Uh(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const fc={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Og={[fc.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Fg(t,e,...n){const i=Dh(Og[t],...n||[]),r={message:String(i),code:t};return e&&(r.location=e),r}const Ie={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Bg={[Ie.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ie.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ie.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ie.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ie.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ie.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ie.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ie.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ie.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ie.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ie.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ie.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ie.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Jr(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=Dh((r||Bg)[t]||"",...s||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function Hg(t){throw t}const Yn=" ",kg="\r",qt=`
`,Gg="\u2028",Vg="\u2029";function zg(t){const e=t;let n=0,i=1,r=1,s=0;const a=R=>e[R]===kg&&e[R+1]===qt,o=R=>e[R]===qt,l=R=>e[R]===Vg,c=R=>e[R]===Gg,u=R=>a(R)||o(R)||l(R)||c(R),f=()=>n,d=()=>i,m=()=>r,x=()=>s,v=R=>a(R)||l(R)||c(R)?qt:e[R],_=()=>v(n),p=()=>v(n+s);function A(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function E(){return a(n+s)&&s++,s++,e[n+s]}function M(){n=0,i=1,r=1,s=0}function L(R=0){s=R}function b(){const R=n+s;for(;R!==n;)A();s=0}return{index:f,line:d,column:m,peekOffset:x,charAt:v,currentChar:_,currentPeek:p,next:A,peek:E,reset:M,resetPeek:L,skipToPeek:b}}const hi=void 0,Wg=".",mu="'",Xg="tokenizer";function Yg(t,e={}){const n=e.location!==!1,i=zg(t),r=()=>i.index(),s=()=>Dg(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(h,g,I,...N){const G=c();if(g.column+=I,g.offset+=I,u){const q=n?Ua(G.startLoc,g):null,D=Jr(h,q,{domain:Xg,args:N});u(D)}}function d(h,g,I){h.endLoc=s(),h.currentType=g;const N={type:g};return n&&(N.loc=Ua(h.startLoc,h.endLoc)),I!=null&&(N.value=I),N}const m=h=>d(h,14);function x(h,g){return h.currentChar()===g?(h.next(),g):(f(Ie.EXPECTED_TOKEN,s(),0,g),"")}function v(h){let g="";for(;h.currentPeek()===Yn||h.currentPeek()===qt;)g+=h.currentPeek(),h.peek();return g}function _(h){const g=v(h);return h.skipToPeek(),g}function p(h){if(h===hi)return!1;const g=h.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function A(h){if(h===hi)return!1;const g=h.charCodeAt(0);return g>=48&&g<=57}function E(h,g){const{currentType:I}=g;if(I!==2)return!1;v(h);const N=p(h.currentPeek());return h.resetPeek(),N}function M(h,g){const{currentType:I}=g;if(I!==2)return!1;v(h);const N=h.currentPeek()==="-"?h.peek():h.currentPeek(),G=A(N);return h.resetPeek(),G}function L(h,g){const{currentType:I}=g;if(I!==2)return!1;v(h);const N=h.currentPeek()===mu;return h.resetPeek(),N}function b(h,g){const{currentType:I}=g;if(I!==8)return!1;v(h);const N=h.currentPeek()===".";return h.resetPeek(),N}function R(h,g){const{currentType:I}=g;if(I!==9)return!1;v(h);const N=p(h.currentPeek());return h.resetPeek(),N}function k(h,g){const{currentType:I}=g;if(!(I===8||I===12))return!1;v(h);const N=h.currentPeek()===":";return h.resetPeek(),N}function S(h,g){const{currentType:I}=g;if(I!==10)return!1;const N=()=>{const q=h.currentPeek();return q==="{"?p(h.peek()):q==="@"||q==="%"||q==="|"||q===":"||q==="."||q===Yn||!q?!1:q===qt?(h.peek(),N()):O(h,!1)},G=N();return h.resetPeek(),G}function C(h){v(h);const g=h.currentPeek()==="|";return h.resetPeek(),g}function X(h){const g=v(h),I=h.currentPeek()==="%"&&h.peek()==="{";return h.resetPeek(),{isModulo:I,hasSpace:g.length>0}}function O(h,g=!0){const I=(G=!1,q="",D=!1)=>{const H=h.currentPeek();return H==="{"?q==="%"?!1:G:H==="@"||!H?q==="%"?!0:G:H==="%"?(h.peek(),I(G,"%",!0)):H==="|"?q==="%"||D?!0:!(q===Yn||q===qt):H===Yn?(h.peek(),I(!0,Yn,D)):H===qt?(h.peek(),I(!0,qt,D)):!0},N=I();return g&&h.resetPeek(),N}function ie(h,g){const I=h.currentChar();return I===hi?hi:g(I)?(h.next(),I):null}function B(h){const g=h.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36}function $(h){return ie(h,B)}function Y(h){const g=h.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36||g===45}function te(h){return ie(h,Y)}function J(h){const g=h.charCodeAt(0);return g>=48&&g<=57}function ae(h){return ie(h,J)}function oe(h){const g=h.charCodeAt(0);return g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102}function ue(h){return ie(h,oe)}function fe(h){let g="",I="";for(;g=ae(h);)I+=g;return I}function ee(h){_(h);const g=h.currentChar();return g!=="%"&&f(Ie.EXPECTED_TOKEN,s(),0,g),h.next(),"%"}function ce(h){let g="";for(;;){const I=h.currentChar();if(I==="{"||I==="}"||I==="@"||I==="|"||!I)break;if(I==="%")if(O(h))g+=I,h.next();else break;else if(I===Yn||I===qt)if(O(h))g+=I,h.next();else{if(C(h))break;g+=I,h.next()}else g+=I,h.next()}return g}function pe(h){_(h);let g="",I="";for(;g=te(h);)I+=g;return h.currentChar()===hi&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),I}function Se(h){_(h);let g="";return h.currentChar()==="-"?(h.next(),g+=`-${fe(h)}`):g+=fe(h),h.currentChar()===hi&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g}function Me(h){return h!==mu&&h!==qt}function Re(h){_(h),x(h,"'");let g="",I="";for(;g=ie(h,Me);)g==="\\"?I+=Le(h):I+=g;const N=h.currentChar();return N===qt||N===hi?(f(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),N===qt&&(h.next(),x(h,"'")),I):(x(h,"'"),I)}function Le(h){const g=h.currentChar();switch(g){case"\\":case"'":return h.next(),`\\${g}`;case"u":return ye(h,g,4);case"U":return ye(h,g,6);default:return f(Ie.UNKNOWN_ESCAPE_SEQUENCE,s(),0,g),""}}function ye(h,g,I){x(h,g);let N="";for(let G=0;G<I;G++){const q=ue(h);if(!q){f(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${g}${N}${h.currentChar()}`);break}N+=q}return`\\${g}${N}`}function Ve(h){return h!=="{"&&h!=="}"&&h!==Yn&&h!==qt}function y(h){_(h);let g="",I="";for(;g=ie(h,Ve);)I+=g;return I}function U(h){let g="",I="";for(;g=$(h);)I+=g;return I}function P(h){const g=I=>{const N=h.currentChar();return N==="{"||N==="%"||N==="@"||N==="|"||N==="("||N===")"||!N||N===Yn?I:(I+=N,h.next(),g(I))};return g("")}function V(h){_(h);const g=x(h,"|");return _(h),g}function z(h,g){let I=null;switch(h.currentChar()){case"{":return g.braceNest>=1&&f(Ie.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),h.next(),I=d(g,2,"{"),_(h),g.braceNest++,I;case"}":return g.braceNest>0&&g.currentType===2&&f(Ie.EMPTY_PLACEHOLDER,s(),0),h.next(),I=d(g,3,"}"),g.braceNest--,g.braceNest>0&&_(h),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),I;case"@":return g.braceNest>0&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),I=ne(h,g)||m(g),g.braceNest=0,I;default:{let G=!0,q=!0,D=!0;if(C(h))return g.braceNest>0&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),I=d(g,1,V(h)),g.braceNest=0,g.inLinked=!1,I;if(g.braceNest>0&&(g.currentType===5||g.currentType===6||g.currentType===7))return f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g.braceNest=0,re(h,g);if(G=E(h,g))return I=d(g,5,pe(h)),_(h),I;if(q=M(h,g))return I=d(g,6,Se(h)),_(h),I;if(D=L(h,g))return I=d(g,7,Re(h)),_(h),I;if(!G&&!q&&!D)return I=d(g,13,y(h)),f(Ie.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,I.value),_(h),I;break}}return I}function ne(h,g){const{currentType:I}=g;let N=null;const G=h.currentChar();switch((I===8||I===9||I===12||I===10)&&(G===qt||G===Yn)&&f(Ie.INVALID_LINKED_FORMAT,s(),0),G){case"@":return h.next(),N=d(g,8,"@"),g.inLinked=!0,N;case".":return _(h),h.next(),d(g,9,".");case":":return _(h),h.next(),d(g,10,":");default:return C(h)?(N=d(g,1,V(h)),g.braceNest=0,g.inLinked=!1,N):b(h,g)||k(h,g)?(_(h),ne(h,g)):R(h,g)?(_(h),d(g,12,U(h))):S(h,g)?(_(h),G==="{"?z(h,g)||N:d(g,11,P(h))):(I===8&&f(Ie.INVALID_LINKED_FORMAT,s(),0),g.braceNest=0,g.inLinked=!1,re(h,g))}}function re(h,g){let I={type:14};if(g.braceNest>0)return z(h,g)||m(g);if(g.inLinked)return ne(h,g)||m(g);switch(h.currentChar()){case"{":return z(h,g)||m(g);case"}":return f(Ie.UNBALANCED_CLOSING_BRACE,s(),0),h.next(),d(g,3,"}");case"@":return ne(h,g)||m(g);default:{if(C(h))return I=d(g,1,V(h)),g.braceNest=0,g.inLinked=!1,I;const{isModulo:G,hasSpace:q}=X(h);if(G)return q?d(g,0,ce(h)):d(g,4,ee(h));if(O(h))return d(g,0,ce(h));break}}return I}function T(){const{currentType:h,offset:g,startLoc:I,endLoc:N}=l;return l.lastType=h,l.lastOffset=g,l.lastStartLoc=I,l.lastEndLoc=N,l.offset=r(),l.startLoc=s(),i.currentChar()===hi?d(l,14):re(i,l)}return{nextToken:T,currentOffset:r,currentPosition:s,context:c}}const $g="parser",qg=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function jg(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Kg(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function r(E,M,L,b,...R){const k=E.currentPosition();if(k.offset+=b,k.column+=b,n){const S=e?Ua(L,k):null,C=Jr(M,S,{domain:$g,args:R});n(C)}}function s(E,M,L,b,...R){const k=E.currentPosition();if(k.offset+=b,k.column+=b,i){const S=e?Ua(L,k):null;i(Fg(M,S,R))}}function a(E,M,L){const b={type:E};return e&&(b.start=M,b.end=M,b.loc={start:L,end:L}),b}function o(E,M,L,b){e&&(E.end=M,E.loc&&(E.loc.end=L))}function l(E,M){const L=E.context(),b=a(3,L.offset,L.startLoc);return b.value=M,o(b,E.currentOffset(),E.currentPosition()),b}function c(E,M){const L=E.context(),{lastOffset:b,lastStartLoc:R}=L,k=a(5,b,R);return k.index=parseInt(M,10),E.nextToken(),o(k,E.currentOffset(),E.currentPosition()),k}function u(E,M,L){const b=E.context(),{lastOffset:R,lastStartLoc:k}=b,S=a(4,R,k);return S.key=M,L===!0&&(S.modulo=!0),E.nextToken(),o(S,E.currentOffset(),E.currentPosition()),S}function f(E,M){const L=E.context(),{lastOffset:b,lastStartLoc:R}=L,k=a(9,b,R);return k.value=M.replace(qg,jg),E.nextToken(),o(k,E.currentOffset(),E.currentPosition()),k}function d(E){const M=E.nextToken(),L=E.context(),{lastOffset:b,lastStartLoc:R}=L,k=a(8,b,R);return M.type!==12?(r(E,Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER,L.lastStartLoc,0),k.value="",o(k,b,R),{nextConsumeToken:M,node:k}):(M.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,xn(M)),k.value=M.value||"",o(k,E.currentOffset(),E.currentPosition()),{node:k})}function m(E,M){const L=E.context(),b=a(7,L.offset,L.startLoc);return b.value=M,o(b,E.currentOffset(),E.currentPosition()),b}function x(E){const M=E.context(),L=a(6,M.offset,M.startLoc);let b=E.nextToken();if(b.type===9){const R=d(E);L.modifier=R.node,b=R.nextConsumeToken||E.nextToken()}switch(b.type!==10&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(b)),b=E.nextToken(),b.type===2&&(b=E.nextToken()),b.type){case 11:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(b)),L.key=m(E,b.value||"");break;case 5:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(b)),L.key=u(E,b.value||"");break;case 6:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(b)),L.key=c(E,b.value||"");break;case 7:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(b)),L.key=f(E,b.value||"");break;default:{r(E,Ie.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const R=E.context(),k=a(7,R.offset,R.startLoc);return k.value="",o(k,R.offset,R.startLoc),L.key=k,o(L,R.offset,R.startLoc),{nextConsumeToken:b,node:L}}}return o(L,E.currentOffset(),E.currentPosition()),{node:L}}function v(E){const M=E.context(),L=M.currentType===1?E.currentOffset():M.offset,b=M.currentType===1?M.endLoc:M.startLoc,R=a(2,L,b);R.items=[];let k=null,S=null;do{const O=k||E.nextToken();switch(k=null,O.type){case 0:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(O)),R.items.push(l(E,O.value||""));break;case 6:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(O)),R.items.push(c(E,O.value||""));break;case 4:S=!0;break;case 5:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(O)),R.items.push(u(E,O.value||"",!!S)),S&&(s(E,fc.USE_MODULO_SYNTAX,M.lastStartLoc,0,xn(O)),S=null);break;case 7:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,xn(O)),R.items.push(f(E,O.value||""));break;case 8:{const ie=x(E);R.items.push(ie.node),k=ie.nextConsumeToken||null;break}}}while(M.currentType!==14&&M.currentType!==1);const C=M.currentType===1?M.lastOffset:E.currentOffset(),X=M.currentType===1?M.lastEndLoc:E.currentPosition();return o(R,C,X),R}function _(E,M,L,b){const R=E.context();let k=b.items.length===0;const S=a(1,M,L);S.cases=[],S.cases.push(b);do{const C=v(E);k||(k=C.items.length===0),S.cases.push(C)}while(R.currentType!==14);return k&&r(E,Ie.MUST_HAVE_MESSAGES_IN_PLURAL,L,0),o(S,E.currentOffset(),E.currentPosition()),S}function p(E){const M=E.context(),{offset:L,startLoc:b}=M,R=v(E);return M.currentType===14?R:_(E,L,b,R)}function A(E){const M=Yg(E,Nh({},t)),L=M.context(),b=a(0,L.offset,L.startLoc);return e&&b.loc&&(b.loc.source=E),b.body=p(M),t.onCacheKey&&(b.cacheKey=t.onCacheKey(E)),L.currentType!==14&&r(M,Ie.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,E[L.offset]||""),o(b,M.currentOffset(),M.currentPosition()),b}return{parse:A}}function xn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Zg(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function _u(t,e){for(let n=0;n<t.length;n++)dc(t[n],e)}function dc(t,e){switch(t.type){case 1:_u(t.cases,e),e.helper("plural");break;case 2:_u(t.items,e);break;case 6:{dc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Jg(t,e={}){const n=Zg(t);n.helper("normalize"),t.body&&dc(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Qg(t){const e=t.body;return e.type===2?gu(e):e.cases.forEach(n=>gu(n)),t}function gu(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Uh(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const ev="minifier";function Nr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Nr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Nr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Nr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Nr(e.key),e.k=e.key,delete e.key,e.modifier&&(Nr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Jr(Ie.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:ev,args:[t.type]})}delete t.type}const tv="parser";function nv(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,a={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(a.source=t.loc.source);const o=()=>a;function l(v,_){a.code+=v}function c(v,_=!0){const p=_?i:"";l(r?p+"  ".repeat(v):p)}function u(v=!0){const _=++a.indentLevel;v&&c(_)}function f(v=!0){const _=--a.indentLevel;v&&c(_)}function d(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>a.needIndent}}function iv(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Yr(t,e.key),e.modifier?(t.push(", "),Yr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function rv(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(Yr(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function sv(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Yr(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function av(t,e){e.body?Yr(t,e.body):t.push("null")}function Yr(t,e){const{helper:n}=t;switch(e.type){case 0:av(t,e);break;case 1:sv(t,e);break;case 2:rv(t,e);break;case 6:iv(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Jr(Ie.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:tv,args:[e.type]})}}const ov=(t,e={})=>{const n=pu(e.mode)?e.mode:"normal",i=pu(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],o=nv(t,{filename:i,breakLineCode:r,needIndent:s});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(s),a.length>0&&(o.push(`const { ${Uh(a.map(u=>`${u}: _${u}`),", ")} } = ctx`),o.newline()),o.push("return "),Yr(o,t),o.deindent(s),o.push("}"),delete t.helpers;const{code:l,map:c}=o.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function lv(t,e={}){const n=Nh({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=Kg(n).parse(t);return i?(s&&Qg(o),r&&Nr(o),{ast:o,code:""}):(Jg(o,n),ov(o,n))}/*!
  * core-base v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function cv(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ni().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ni().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ni().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Gn(t){return Ze(t)&&hc(t)===0&&(Cn(t,"b")||Cn(t,"body"))}const Oh=["b","body"];function uv(t){return Hi(t,Oh)}const Fh=["c","cases"];function fv(t){return Hi(t,Fh,[])}const Bh=["s","static"];function dv(t){return Hi(t,Bh)}const Hh=["i","items"];function hv(t){return Hi(t,Hh,[])}const kh=["t","type"];function hc(t){return Hi(t,kh)}const Gh=["v","value"];function js(t,e){const n=Hi(t,Gh);if(n!=null)return n;throw Cs(e)}const Vh=["m","modifier"];function pv(t){return Hi(t,Vh)}const zh=["k","key"];function mv(t){const e=Hi(t,zh);if(e)return e;throw Cs(6)}function Hi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Cn(t,r)&&t[r]!=null)return t[r]}return n}const Wh=[...Oh,...Fh,...Bh,...Hh,...zh,...Vh,...Gh,...kh];function Cs(t){return new Error(`unhandled node type: ${t}`)}const ki=[];ki[0]={w:[0],i:[3,0],"[":[4],o:[7]};ki[1]={w:[1],".":[2],"[":[4],o:[7]};ki[2]={w:[2],i:[3,0],0:[3,0]};ki[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ki[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ki[5]={"'":[4,0],o:8,l:[5,0]};ki[6]={'"':[4,0],o:8,l:[6,0]};const _v=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function gv(t){return _v.test(t)}function vv(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Ev(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function xv(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:gv(e)?vv(e):"*"+e}function Sv(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,f;const d=[];d[0]=()=>{a===void 0?a=o:a+=o},d[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,a===void 0||(a=xv(a),a===!1))return!1;d[1]()}};function m(){const x=t[n+1];if(i===5&&x==="'"||i===6&&x==='"')return n++,o="\\"+x,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&m())){if(l=Ev(s),f=ki[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const vu=new Map;function Mv(t,e){return Ze(t)?t[e]:null}function yv(t,e){if(!Ze(t))return null;let n=vu.get(e);if(n||(n=Sv(e),n&&vu.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=n[s];if(Wh.includes(a)&&Gn(r))return null;const o=r[a];if(o===void 0||ut(r))return null;r=o,s++}return r}const Tv=t=>t,bv=t=>"",Av="text",Rv=t=>t.length===0?"":Pg(t),Cv=Lg;function Eu(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function wv(t){const e=vt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(vt(t.named.count)||vt(t.named.n))?vt(t.named.count)?t.named.count:vt(t.named.n)?t.named.n:e:e}function Lv(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Pv(t={}){const e=t.locale,n=wv(t),i=Ze(t.pluralRules)&&Ee(e)&&ut(t.pluralRules[e])?t.pluralRules[e]:Eu,r=Ze(t.pluralRules)&&Ee(e)&&ut(t.pluralRules[e])?Eu:void 0,s=p=>p[i(n,p.length,r)],a=t.list||[],o=p=>a[p],l=t.named||it();vt(t.pluralIndex)&&Lv(n,l);const c=p=>l[p];function u(p){const A=ut(t.messages)?t.messages(p):Ze(t.messages)?t.messages[p]:!1;return A||(t.parent?t.parent.message(p):bv)}const f=p=>t.modifiers?t.modifiers[p]:Tv,d=Fe(t.processor)&&ut(t.processor.normalize)?t.processor.normalize:Rv,m=Fe(t.processor)&&ut(t.processor.interpolate)?t.processor.interpolate:Cv,x=Fe(t.processor)&&Ee(t.processor.type)?t.processor.type:Av,_={list:o,named:c,plural:s,linked:(p,...A)=>{const[E,M]=A;let L="text",b="";A.length===1?Ze(E)?(b=E.modifier||b,L=E.type||L):Ee(E)&&(b=E||b):A.length===2&&(Ee(E)&&(b=E||b),Ee(M)&&(L=M||L));const R=u(p)(_),k=L==="vnode"&&dt(R)&&b?R[0]:R;return b?f(b)(k,L):k},message:u,type:x,interpolate:m,normalize:d,values:Ft(it(),a,l)};return _}let ws=null;function Iv(t){ws=t}function Dv(t,e,n){ws&&ws.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Nv=Uv("function:translate");function Uv(t){return e=>ws&&ws.emit(t,e)}const Ov=fc.__EXTEND_POINT__,$i=eo(Ov),Fv={FALLBACK_TO_TRANSLATE:$i(),CANNOT_FORMAT_NUMBER:$i(),FALLBACK_TO_NUMBER_FORMAT:$i(),CANNOT_FORMAT_DATE:$i(),FALLBACK_TO_DATE_FORMAT:$i(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:$i(),__EXTEND_POINT__:$i()},Xh=Ie.__EXTEND_POINT__,qi=eo(Xh),wn={INVALID_ARGUMENT:Xh,INVALID_DATE_ARGUMENT:qi(),INVALID_ISO_DATE_ARGUMENT:qi(),NOT_SUPPORT_NON_STRING_MESSAGE:qi(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:qi(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:qi(),NOT_SUPPORT_LOCALE_TYPE:qi(),__EXTEND_POINT__:qi()};function Bn(t){return Jr(t,null,void 0)}function pc(t,e){return e.locale!=null?xu(e.locale):xu(t.locale)}let Ao;function xu(t){if(Ee(t))return t;if(ut(t)){if(t.resolvedOnce&&Ao!=null)return Ao;if(t.constructor.name==="Function"){const e=t();if(wg(e))throw Bn(wn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ao=e}else throw Bn(wn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Bn(wn.NOT_SUPPORT_LOCALE_TYPE)}function Bv(t,e,n){return[...new Set([n,...dt(e)?e:Ze(e)?Object.keys(e):Ee(e)?[e]:[n]])]}function Yh(t,e,n){const i=Ee(n)?n:$r,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;dt(a);)a=Su(s,a,e);const o=dt(e)||!Fe(e)?e:e.default?e.default:null;a=Ee(o)?[o]:o,dt(a)&&Su(s,a,!1),r.__localeChainCache.set(i,s)}return s}function Su(t,e,n){let i=!0;for(let r=0;r<e.length&&qe(i);r++){const s=e[r];Ee(s)&&(i=Hv(t,e[r],n))}return i}function Hv(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=kv(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function kv(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(dt(n)||Fe(n))&&n[r]&&(i=n[r])}return i}const Gv="9.14.4",to=-1,$r="en-US",Mu="",yu=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Vv(){return{upper:(t,e)=>e==="text"&&Ee(t)?t.toUpperCase():e==="vnode"&&Ze(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ee(t)?t.toLowerCase():e==="vnode"&&Ze(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ee(t)?yu(t):e==="vnode"&&Ze(t)&&"__v_isVNode"in t?yu(t.children):t}}let $h;function Tu(t){$h=t}let qh;function zv(t){qh=t}let jh;function Wv(t){jh=t}let Kh=null;const Xv=t=>{Kh=t},Yv=()=>Kh;let Zh=null;const bu=t=>{Zh=t},$v=()=>Zh;let Au=0;function qv(t={}){const e=ut(t.onWarn)?t.onWarn:Ig,n=Ee(t.version)?t.version:Gv,i=Ee(t.locale)||ut(t.locale)?t.locale:$r,r=ut(i)?$r:i,s=dt(t.fallbackLocale)||Fe(t.fallbackLocale)||Ee(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Fe(t.messages)?t.messages:Ro(r),o=Fe(t.datetimeFormats)?t.datetimeFormats:Ro(r),l=Fe(t.numberFormats)?t.numberFormats:Ro(r),c=Ft(it(),t.modifiers,Vv()),u=t.pluralRules||it(),f=ut(t.missing)?t.missing:null,d=qe(t.missingWarn)||Ui(t.missingWarn)?t.missingWarn:!0,m=qe(t.fallbackWarn)||Ui(t.fallbackWarn)?t.fallbackWarn:!0,x=!!t.fallbackFormat,v=!!t.unresolving,_=ut(t.postTranslation)?t.postTranslation:null,p=Fe(t.processor)?t.processor:null,A=qe(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,M=ut(t.messageCompiler)?t.messageCompiler:$h,L=ut(t.messageResolver)?t.messageResolver:qh||Mv,b=ut(t.localeFallbacker)?t.localeFallbacker:jh||Bv,R=Ze(t.fallbackContext)?t.fallbackContext:void 0,k=t,S=Ze(k.__datetimeFormatters)?k.__datetimeFormatters:new Map,C=Ze(k.__numberFormatters)?k.__numberFormatters:new Map,X=Ze(k.__meta)?k.__meta:{};Au++;const O={version:n,cid:Au,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:m,fallbackFormat:x,unresolving:v,postTranslation:_,processor:p,warnHtmlMessage:A,escapeParameter:E,messageCompiler:M,messageResolver:L,localeFallbacker:b,fallbackContext:R,onWarn:e,__meta:X};return O.datetimeFormats=o,O.numberFormats=l,O.__datetimeFormatters=S,O.__numberFormatters=C,__INTLIFY_PROD_DEVTOOLS__&&Dv(O,n,X),O}const Ro=t=>({[t]:it()});function mc(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Ee(o)?o:e}else return e}function rs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function jv(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Kv(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(jv(t,e[i]))return!0;return!1}function Co(t){return n=>Zv(n,t)}function Zv(t,e){const n=uv(e);if(n==null)throw Cs(0);if(hc(n)===1){const s=fv(n);return t.plural(s.reduce((a,o)=>[...a,Ru(t,o)],[]))}else return Ru(t,n)}function Ru(t,e){const n=dv(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=hv(e).reduce((r,s)=>[...r,xl(t,s)],[]);return t.normalize(i)}}function xl(t,e){const n=hc(e);switch(n){case 3:return js(e,n);case 9:return js(e,n);case 4:{const i=e;if(Cn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Cn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Cs(n)}case 5:{const i=e;if(Cn(i,"i")&&vt(i.i))return t.interpolate(t.list(i.i));if(Cn(i,"index")&&vt(i.index))return t.interpolate(t.list(i.index));throw Cs(n)}case 6:{const i=e,r=pv(i),s=mv(i);return t.linked(xl(t,s),r?xl(t,r):void 0,t.type)}case 7:return js(e,n);case 8:return js(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Jh=t=>t;let Ur=it();function Qh(t,e={}){let n=!1;const i=e.onError||Hg;return e.onError=r=>{n=!0,i(r)},{...lv(t,e),detectError:n}}const Jv=(t,e)=>{if(!Ee(t))throw Bn(wn.NOT_SUPPORT_NON_STRING_MESSAGE);{qe(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||Jh)(t),r=Ur[i];if(r)return r;const{code:s,detectError:a}=Qh(t,e),o=new Function(`return ${s}`)();return a?o:Ur[i]=o}};function Qv(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ee(t)){qe(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||Jh)(t),r=Ur[i];if(r)return r;const{ast:s,detectError:a}=Qh(t,{...e,location:!1,jit:!0}),o=Co(s);return a?o:Ur[i]=o}else{const n=t.cacheKey;if(n){const i=Ur[n];return i||(Ur[n]=Co(t))}else return Co(t)}}const Cu=()=>"",pn=t=>ut(t);function wu(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=Sl(...e),u=qe(c.missingWarn)?c.missingWarn:t.missingWarn,f=qe(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=qe(c.escapeParameter)?c.escapeParameter:t.escapeParameter,m=!!c.resolvedMessage,x=Ee(c.default)||qe(c.default)?qe(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",v=n||x!=="",_=pc(t,c);d&&e0(c);let[p,A,E]=m?[l,_,o[_]||it()]:ep(t,l,_,a,f,u),M=p,L=l;if(!m&&!(Ee(M)||Gn(M)||pn(M))&&v&&(M=x,L=M),!m&&(!(Ee(M)||Gn(M)||pn(M))||!Ee(A)))return r?to:l;let b=!1;const R=()=>{b=!0},k=pn(M)?M:tp(t,l,A,M,L,R);if(b)return M;const S=i0(t,A,E,c),C=Pv(S),X=t0(t,k,C),O=i?i(X,l):X;if(__INTLIFY_PROD_DEVTOOLS__){const ie={timestamp:Date.now(),key:Ee(l)?l:pn(M)?M.key:"",locale:A||(pn(M)?M.locale:""),format:Ee(M)?M:pn(M)?M.source:"",message:O};ie.meta=Ft({},t.__meta,Yv()||{}),Nv(ie)}return O}function e0(t){dt(t.list)?t.list=t.list.map(e=>Ee(e)?hu(e):e):Ze(t.named)&&Object.keys(t.named).forEach(e=>{Ee(t.named[e])&&(t.named[e]=hu(t.named[e]))})}function ep(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=it(),d,m=null;const x="translate";for(let v=0;v<u.length&&(d=u[v],f=a[d]||it(),(m=l(f,e))===null&&(m=f[e]),!(Ee(m)||Gn(m)||pn(m)));v++)if(!Kv(d,u)){const _=mc(t,e,d,s,x);_!==e&&(m=_)}return[m,d,f]}function tp(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(pn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,n0(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function t0(t,e,n){return e(n)}function Sl(...t){const[e,n,i]=t,r=it();if(!Ee(e)&&!vt(e)&&!pn(e)&&!Gn(e))throw Bn(wn.INVALID_ARGUMENT);const s=vt(e)?String(e):(pn(e),e);return vt(n)?r.plural=n:Ee(n)?r.default=n:Fe(n)&&!Qa(n)?r.named=n:dt(n)&&(r.list=n),vt(i)?r.plural=i:Ee(i)?r.default=i:Fe(i)&&Ft(r,i),[s,r]}function n0(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>Tg(e,n,a)}}function i0(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:m=>{let x=a(n,m);if(x==null&&u){const[,,v]=ep(u,m,e,o,l,c);x=a(v,m)}if(Ee(x)||Gn(x)){let v=!1;const p=tp(t,m,e,x,m,()=>{v=!0});return v?Cu:p}else return pn(x)?x:Cu}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),vt(i.plural)&&(d.pluralIndex=i.plural),d}function Lu(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,f]=Ml(...e),d=qe(u.missingWarn)?u.missingWarn:t.missingWarn;qe(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const m=!!u.part,x=pc(t,u),v=a(t,r,x);if(!Ee(l)||l==="")return new Intl.DateTimeFormat(x,f).format(c);let _={},p,A=null;const E="datetime format";for(let b=0;b<v.length&&(p=v[b],_=n[p]||{},A=_[l],!Fe(A));b++)mc(t,l,p,d,E);if(!Fe(A)||!Ee(p))return i?to:l;let M=`${p}__${l}`;Qa(f)||(M=`${M}__${JSON.stringify(f)}`);let L=o.get(M);return L||(L=new Intl.DateTimeFormat(p,Ft({},A,f)),o.set(M,L)),m?L.formatToParts(c):L.format(c)}const np=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Ml(...t){const[e,n,i,r]=t,s=it();let a=it(),o;if(Ee(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Bn(wn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw Bn(wn.INVALID_ISO_DATE_ARGUMENT)}}else if(Ag(e)){if(isNaN(e.getTime()))throw Bn(wn.INVALID_DATE_ARGUMENT);o=e}else if(vt(e))o=e;else throw Bn(wn.INVALID_ARGUMENT);return Ee(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{np.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function Pu(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Iu(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,f]=yl(...e),d=qe(u.missingWarn)?u.missingWarn:t.missingWarn;qe(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const m=!!u.part,x=pc(t,u),v=a(t,r,x);if(!Ee(l)||l==="")return new Intl.NumberFormat(x,f).format(c);let _={},p,A=null;const E="number format";for(let b=0;b<v.length&&(p=v[b],_=n[p]||{},A=_[l],!Fe(A));b++)mc(t,l,p,d,E);if(!Fe(A)||!Ee(p))return i?to:l;let M=`${p}__${l}`;Qa(f)||(M=`${M}__${JSON.stringify(f)}`);let L=o.get(M);return L||(L=new Intl.NumberFormat(p,Ft({},A,f)),o.set(M,L)),m?L.formatToParts(c):L.format(c)}const ip=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function yl(...t){const[e,n,i,r]=t,s=it();let a=it();if(!vt(e))throw Bn(wn.INVALID_ARGUMENT);const o=e;return Ee(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{ip.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function Du(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}cv();/*!
  * vue-i18n v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const r0="9.14.4";function s0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ni().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ni().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ni().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ni().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ni().__INTLIFY_PROD_DEVTOOLS__=!1)}const a0=Fv.__EXTEND_POINT__,$n=eo(a0);$n(),$n(),$n(),$n(),$n(),$n(),$n(),$n(),$n();const rp=wn.__EXTEND_POINT__,Qt=eo(rp),St={UNEXPECTED_RETURN_TYPE:rp,INVALID_ARGUMENT:Qt(),MUST_BE_CALL_SETUP_TOP:Qt(),NOT_INSTALLED:Qt(),NOT_AVAILABLE_IN_LEGACY_MODE:Qt(),REQUIRED_VALUE:Qt(),INVALID_VALUE:Qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Qt(),NOT_INSTALLED_WITH_PROVIDE:Qt(),UNEXPECTED_ERROR:Qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Qt(),BRIDGE_SUPPORT_VUE_2_ONLY:Qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Qt(),__EXTEND_POINT__:Qt()};function Ct(t,...e){return Jr(t,null,void 0)}const Tl=Bi("__translateVNode"),bl=Bi("__datetimeParts"),Al=Bi("__numberParts"),sp=Bi("__setPluralRules"),ap=Bi("__injectWithOption"),Rl=Bi("__dispose");function Ls(t){if(!Ze(t)||Gn(t))return t;for(const e in t)if(Cn(t,e))if(!e.includes("."))Ze(t[e])&&Ls(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]==="__proto__")throw new Error(`unsafe key: ${n[a]}`);if(n[a]in r||(r[n[a]]=it()),!Ze(r[n[a]])){s=!0;break}r=r[n[a]]}if(s||(Gn(r)?Wh.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!Gn(r)){const a=r[n[i]];Ze(a)&&Ls(a)}}return t}function no(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Fe(n)?n:dt(i)?it():{[t]:it()};if(dt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||it(),Ta(c,a[l])):Ta(c,a)}else Ee(o)&&Ta(JSON.parse(o),a)}),r==null&&s)for(const o in a)Cn(a,o)&&Ls(a[o]);return a}function op(t){return t.type}function lp(t,e,n){let i=Ze(e.messages)?e.messages:it();"__i18nGlobal"in n&&(i=no(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(Ze(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(Ze(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Nu(t){return Nt(Us,null,t,0)}const Uu="__INTLIFY_META__",Ou=()=>[],o0=()=>!1;let Fu=0;function Bu(t){return(e,n,i,r)=>t(n,i,Xr()||void 0,r)}const l0=()=>{const t=Xr();let e=null;return t&&(e=op(t)[Uu])?{[Uu]:e}:null};function _c(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,s=t.flatJson,a=Na?Pt:zd,o=!!t.translateExistCompatible;let l=qe(t.inheritLocale)?t.inheritLocale:!0;const c=a(n&&l?n.locale.value:Ee(t.locale)?t.locale:$r),u=a(n&&l?n.fallbackLocale.value:Ee(t.fallbackLocale)||dt(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=a(no(c.value,t)),d=a(Fe(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),m=a(Fe(t.numberFormats)?t.numberFormats:{[c.value]:{}});let x=n?n.missingWarn:qe(t.missingWarn)||Ui(t.missingWarn)?t.missingWarn:!0,v=n?n.fallbackWarn:qe(t.fallbackWarn)||Ui(t.fallbackWarn)?t.fallbackWarn:!0,_=n?n.fallbackRoot:qe(t.fallbackRoot)?t.fallbackRoot:!0,p=!!t.fallbackFormat,A=ut(t.missing)?t.missing:null,E=ut(t.missing)?Bu(t.missing):null,M=ut(t.postTranslation)?t.postTranslation:null,L=n?n.warnHtmlMessage:qe(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter;const R=n?n.modifiers:Fe(t.modifiers)?t.modifiers:{};let k=t.pluralRules||n&&n.pluralRules,S;S=(()=>{r&&bu(null);const D={version:r0,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:R,pluralRules:k,missing:E===null?void 0:E,missingWarn:x,fallbackWarn:v,fallbackFormat:p,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:L,escapeParameter:b,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};D.datetimeFormats=d.value,D.numberFormats=m.value,D.__datetimeFormatters=Fe(S)?S.__datetimeFormatters:void 0,D.__numberFormatters=Fe(S)?S.__numberFormatters:void 0;const H=qv(D);return r&&bu(H),H})(),rs(S,c.value,u.value);function X(){return[c.value,u.value,f.value,d.value,m.value]}const O=Rt({get:()=>c.value,set:D=>{c.value=D,S.locale=c.value}}),ie=Rt({get:()=>u.value,set:D=>{u.value=D,S.fallbackLocale=u.value,rs(S,c.value,D)}}),B=Rt(()=>f.value),$=Rt(()=>d.value),Y=Rt(()=>m.value);function te(){return ut(M)?M:null}function J(D){M=D,S.postTranslation=D}function ae(){return A}function oe(D){D!==null&&(E=Bu(D)),A=D,S.missing=E}const ue=(D,H,le,me,se,Be)=>{X();let Te;try{__INTLIFY_PROD_DEVTOOLS__,r||(S.fallbackContext=n?$v():void 0),Te=D(S)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(S.fallbackContext=void 0)}if(le!=="translate exists"&&vt(Te)&&Te===to||le==="translate exists"&&!Te){const[Ce,be]=H();return n&&_?me(n):se(Ce)}else{if(Be(Te))return Te;throw Ct(St.UNEXPECTED_RETURN_TYPE)}};function fe(...D){return ue(H=>Reflect.apply(wu,null,[H,...D]),()=>Sl(...D),"translate",H=>Reflect.apply(H.t,H,[...D]),H=>H,H=>Ee(H))}function ee(...D){const[H,le,me]=D;if(me&&!Ze(me))throw Ct(St.INVALID_ARGUMENT);return fe(H,le,Ft({resolvedMessage:!0},me||{}))}function ce(...D){return ue(H=>Reflect.apply(Lu,null,[H,...D]),()=>Ml(...D),"datetime format",H=>Reflect.apply(H.d,H,[...D]),()=>Mu,H=>Ee(H))}function pe(...D){return ue(H=>Reflect.apply(Iu,null,[H,...D]),()=>yl(...D),"number format",H=>Reflect.apply(H.n,H,[...D]),()=>Mu,H=>Ee(H))}function Se(D){return D.map(H=>Ee(H)||vt(H)||qe(H)?Nu(String(H)):H)}const Re={normalize:Se,interpolate:D=>D,type:"vnode"};function Le(...D){return ue(H=>{let le;const me=H;try{me.processor=Re,le=Reflect.apply(wu,null,[me,...D])}finally{me.processor=null}return le},()=>Sl(...D),"translate",H=>H[Tl](...D),H=>[Nu(H)],H=>dt(H))}function ye(...D){return ue(H=>Reflect.apply(Iu,null,[H,...D]),()=>yl(...D),"number format",H=>H[Al](...D),Ou,H=>Ee(H)||dt(H))}function Ve(...D){return ue(H=>Reflect.apply(Lu,null,[H,...D]),()=>Ml(...D),"datetime format",H=>H[bl](...D),Ou,H=>Ee(H)||dt(H))}function y(D){k=D,S.pluralRules=k}function U(D,H){return ue(()=>{if(!D)return!1;const le=Ee(H)?H:c.value,me=z(le),se=S.messageResolver(me,D);return o?se!=null:Gn(se)||pn(se)||Ee(se)},()=>[D],"translate exists",le=>Reflect.apply(le.te,le,[D,H]),o0,le=>qe(le))}function P(D){let H=null;const le=Yh(S,u.value,c.value);for(let me=0;me<le.length;me++){const se=f.value[le[me]]||{},Be=S.messageResolver(se,D);if(Be!=null){H=Be;break}}return H}function V(D){const H=P(D);return H??(n?n.tm(D)||{}:{})}function z(D){return f.value[D]||{}}function ne(D,H){if(s){const le={[D]:H};for(const me in le)Cn(le,me)&&Ls(le[me]);H=le[D]}f.value[D]=H,S.messages=f.value}function re(D,H){f.value[D]=f.value[D]||{};const le={[D]:H};if(s)for(const me in le)Cn(le,me)&&Ls(le[me]);H=le[D],Ta(H,f.value[D]),S.messages=f.value}function T(D){return d.value[D]||{}}function h(D,H){d.value[D]=H,S.datetimeFormats=d.value,Pu(S,D,H)}function g(D,H){d.value[D]=Ft(d.value[D]||{},H),S.datetimeFormats=d.value,Pu(S,D,H)}function I(D){return m.value[D]||{}}function N(D,H){m.value[D]=H,S.numberFormats=m.value,Du(S,D,H)}function G(D,H){m.value[D]=Ft(m.value[D]||{},H),S.numberFormats=m.value,Du(S,D,H)}Fu++,n&&Na&&(Ri(n.locale,D=>{l&&(c.value=D,S.locale=D,rs(S,c.value,u.value))}),Ri(n.fallbackLocale,D=>{l&&(u.value=D,S.fallbackLocale=D,rs(S,c.value,u.value))}));const q={id:Fu,locale:O,fallbackLocale:ie,get inheritLocale(){return l},set inheritLocale(D){l=D,D&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,rs(S,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:B,get modifiers(){return R},get pluralRules(){return k||{}},get isGlobal(){return r},get missingWarn(){return x},set missingWarn(D){x=D,S.missingWarn=x},get fallbackWarn(){return v},set fallbackWarn(D){v=D,S.fallbackWarn=v},get fallbackRoot(){return _},set fallbackRoot(D){_=D},get fallbackFormat(){return p},set fallbackFormat(D){p=D,S.fallbackFormat=p},get warnHtmlMessage(){return L},set warnHtmlMessage(D){L=D,S.warnHtmlMessage=D},get escapeParameter(){return b},set escapeParameter(D){b=D,S.escapeParameter=D},t:fe,getLocaleMessage:z,setLocaleMessage:ne,mergeLocaleMessage:re,getPostTranslationHandler:te,setPostTranslationHandler:J,getMissingHandler:ae,setMissingHandler:oe,[sp]:y};return q.datetimeFormats=$,q.numberFormats=Y,q.rt=ee,q.te=U,q.tm=V,q.d=ce,q.n=pe,q.getDateTimeFormat=T,q.setDateTimeFormat=h,q.mergeDateTimeFormat=g,q.getNumberFormat=I,q.setNumberFormat=N,q.mergeNumberFormat=G,q[ap]=i,q[Tl]=Le,q[bl]=Ve,q[Al]=ye,q}function c0(t){const e=Ee(t.locale)?t.locale:$r,n=Ee(t.fallbackLocale)||dt(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ut(t.missing)?t.missing:void 0,r=qe(t.silentTranslationWarn)||Ui(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=qe(t.silentFallbackWarn)||Ui(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=qe(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Fe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=ut(t.postTranslation)?t.postTranslation:void 0,f=Ee(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,m=qe(t.sync)?t.sync:!0;let x=t.messages;if(Fe(t.sharedMessages)){const b=t.sharedMessages;x=Object.keys(b).reduce((k,S)=>{const C=k[S]||(k[S]={});return Ft(C,b[S]),k},x||{})}const{__i18n:v,__root:_,__injectWithOption:p}=t,A=t.datetimeFormats,E=t.numberFormats,M=t.flatJson,L=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:x,flatJson:M,datetimeFormats:A,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:m,translateExistCompatible:L,__i18n:v,__root:_,__injectWithOption:p}}function Cl(t={},e){{const n=_c(c0(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return qe(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=qe(s)?!s:s},get silentFallbackWarn(){return qe(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=qe(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[a,o,l]=s,c={};let u=null,f=null;if(!Ee(a))throw Ct(St.INVALID_ARGUMENT);const d=a;return Ee(o)?c.locale=o:dt(o)?u=o:Fe(o)&&(f=o),dt(l)?u=l:Fe(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,f=null;if(!Ee(a))throw Ct(St.INVALID_ARGUMENT);const d=a;return Ee(o)?c.locale=o:vt(o)?c.plural=o:dt(o)?u=o:Fe(o)&&(f=o),Ee(l)?c.locale=l:dt(l)?u=l:Fe(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},te(s,a){return n.te(s,a)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,a){n.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){n.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,a){n.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){n.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,a){n.setNumberFormat(s,a)},mergeNumberFormat(s,a){n.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=i,r}}const gc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function u0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===cn?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},it())}function cp(t){return cn}const f0=ic({name:"i18n-t",props:Ft({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>vt(t)||!isNaN(t)}},gc),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Fs({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),a=it();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Ee(t.plural)?+t.plural:t.plural);const o=u0(e,s),l=r[Tl](t.keypath,o,a),c=Ft(it(),i),u=Ee(t.tag)||Ze(t.tag)?t.tag:cp();return uc(u,c,l)}}}),Hu=f0;function d0(t){return dt(t)&&!Ee(t[0])}function up(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o=it();t.locale&&(a.locale=t.locale),Ee(t.format)?a.key=t.format:Ze(t.format)&&(Ee(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((d,m)=>n.includes(m)?Ft(it(),d,{[m]:t.format[m]}):d,it()));const l=i(t.value,a,o);let c=[a.key];dt(l)?c=l.map((d,m)=>{const x=r[d.type],v=x?x({[d.type]:d.value,index:m,parts:l}):[d.value];return d0(v)&&(v[0].key=`${d.type}-${m}`),v}):Ee(l)&&(c=[l]);const u=Ft(it(),s),f=Ee(t.tag)||Ze(t.tag)?t.tag:cp();return uc(f,u,c)}}const h0=ic({name:"i18n-n",props:Ft({value:{type:Number,required:!0},format:{type:[String,Object]}},gc),setup(t,e){const n=t.i18n||Fs({useScope:t.scope,__useComponent:!0});return up(t,e,ip,(...i)=>n[Al](...i))}}),ku=h0,p0=ic({name:"i18n-d",props:Ft({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},gc),setup(t,e){const n=t.i18n||Fs({useScope:t.scope,__useComponent:!0});return up(t,e,np,(...i)=>n[bl](...i))}}),Gu=p0;function m0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function _0(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw Ct(St.UNEXPECTED_ERROR);const u=m0(t,o.$),f=Vu(c);return[Reflect.apply(u.t,u,[...zu(f)]),u]};return{created:(a,o)=>{const[l,c]=e(o);Na&&t.global===c&&(a.__i18nWatcher=Ri(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Na&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Vu(o);a.textContent=Reflect.apply(l.t,l,[...zu(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Vu(t){if(Ee(t))return{path:t};if(Fe(t)){if(!("path"in t))throw Ct(St.REQUIRED_VALUE,"path");return t}else throw Ct(St.INVALID_VALUE)}function zu(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Ee(n)&&(a.locale=n),vt(r)&&(a.plural=r),vt(s)&&(a.plural=s),[e,o,a]}function g0(t,e,...n){const i=Fe(n[0])?n[0]:{},r=!!i.useI18nComponentName;(qe(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Hu.name,"I18nT"].forEach(a=>t.component(a,Hu)),[ku.name,"I18nN"].forEach(a=>t.component(a,ku)),[Gu.name,"I18nD"].forEach(a=>t.component(a,Gu))),t.directive("t",_0(e))}function v0(t,e,n){return{beforeCreate(){const i=Xr();if(!i)throw Ct(St.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Wu(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Cl(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Wu(t,r);else{this.$i18n=Cl({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&lp(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Xr();if(!i)throw Ct(St.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Wu(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[sp](e.pluralizationRules||t.pluralizationRules);const n=no(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const E0=Bi("global-vue-i18n");function x0(t={},e){const n=__VUE_I18N_LEGACY_API__&&qe(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=qe(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[a,o]=S0(t,n),l=Bi("");function c(d){return s.get(d)||null}function u(d,m){s.set(d,m)}function f(d){s.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(m,...x){if(m.__VUE_I18N_SYMBOL__=l,m.provide(m.__VUE_I18N_SYMBOL__,d),Fe(x[0])){const p=x[0];d.__composerExtend=p.__composerExtend,d.__vueI18nExtend=p.__vueI18nExtend}let v=null;!n&&i&&(v=L0(m,d.global)),__VUE_I18N_FULL_INSTALL__&&g0(m,d,...x),__VUE_I18N_LEGACY_API__&&n&&m.mixin(v0(o,o.__composer,d));const _=m.unmount;m.unmount=()=>{v&&v(),d.dispose(),_()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return d}}function Fs(t={}){const e=Xr();if(e==null)throw Ct(St.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ct(St.NOT_INSTALLED);const n=M0(e),i=T0(n),r=op(e),s=y0(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Ct(St.NOT_AVAILABLE_IN_LEGACY_MODE);return C0(e,s,i,t)}if(s==="global")return lp(i,t,r),i;if(s==="parent"){let l=b0(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Ft({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=_c(l),a.__composerExtend&&(o[Rl]=a.__composerExtend(o)),R0(a,e,o),a.__setInstance(e,o)}return o}function S0(t,e,n){const i=fm();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Cl(t)):i.run(()=>_c(t));if(r==null)throw Ct(St.UNEXPECTED_ERROR);return[i,r]}}function M0(t){{const e=vs(t.isCE?E0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ct(t.isCE?St.NOT_INSTALLED_WITH_PROVIDE:St.UNEXPECTED_ERROR);return e}}function y0(t,e){return Qa(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function T0(t){return t.mode==="composition"?t.global:t.global.__composer}function b0(t,e,n=!1){let i=null;const r=e.root;let s=A0(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[ap]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function A0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function R0(t,e,n){Za(()=>{},e),rc(()=>{const i=n;t.__deleteInstance(e);const r=i[Rl];r&&(r(),delete i[Rl])},e)}function C0(t,e,n,i={}){const r=e==="local",s=zd(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Ct(St.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=qe(i.inheritLocale)?i.inheritLocale:!Ee(i.locale),o=Pt(!r||a?n.locale.value:Ee(i.locale)?i.locale:$r),l=Pt(!r||a?n.fallbackLocale.value:Ee(i.fallbackLocale)||dt(i.fallbackLocale)||Fe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Pt(no(o.value,i)),u=Pt(Fe(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),f=Pt(Fe(i.numberFormats)?i.numberFormats:{[o.value]:{}}),d=r?n.missingWarn:qe(i.missingWarn)||Ui(i.missingWarn)?i.missingWarn:!0,m=r?n.fallbackWarn:qe(i.fallbackWarn)||Ui(i.fallbackWarn)?i.fallbackWarn:!0,x=r?n.fallbackRoot:qe(i.fallbackRoot)?i.fallbackRoot:!0,v=!!i.fallbackFormat,_=ut(i.missing)?i.missing:null,p=ut(i.postTranslation)?i.postTranslation:null,A=r?n.warnHtmlMessage:qe(i.warnHtmlMessage)?i.warnHtmlMessage:!0,E=!!i.escapeParameter,M=r?n.modifiers:Fe(i.modifiers)?i.modifiers:{},L=i.pluralRules||r&&n.pluralRules;function b(){return[o.value,l.value,c.value,u.value,f.value]}const R=Rt({get:()=>s.value?s.value.locale.value:o.value,set:P=>{s.value&&(s.value.locale.value=P),o.value=P}}),k=Rt({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:P=>{s.value&&(s.value.fallbackLocale.value=P),l.value=P}}),S=Rt(()=>s.value?s.value.messages.value:c.value),C=Rt(()=>u.value),X=Rt(()=>f.value);function O(){return s.value?s.value.getPostTranslationHandler():p}function ie(P){s.value&&s.value.setPostTranslationHandler(P)}function B(){return s.value?s.value.getMissingHandler():_}function $(P){s.value&&s.value.setMissingHandler(P)}function Y(P){return b(),P()}function te(...P){return s.value?Y(()=>Reflect.apply(s.value.t,null,[...P])):Y(()=>"")}function J(...P){return s.value?Reflect.apply(s.value.rt,null,[...P]):""}function ae(...P){return s.value?Y(()=>Reflect.apply(s.value.d,null,[...P])):Y(()=>"")}function oe(...P){return s.value?Y(()=>Reflect.apply(s.value.n,null,[...P])):Y(()=>"")}function ue(P){return s.value?s.value.tm(P):{}}function fe(P,V){return s.value?s.value.te(P,V):!1}function ee(P){return s.value?s.value.getLocaleMessage(P):{}}function ce(P,V){s.value&&(s.value.setLocaleMessage(P,V),c.value[P]=V)}function pe(P,V){s.value&&s.value.mergeLocaleMessage(P,V)}function Se(P){return s.value?s.value.getDateTimeFormat(P):{}}function Me(P,V){s.value&&(s.value.setDateTimeFormat(P,V),u.value[P]=V)}function Re(P,V){s.value&&s.value.mergeDateTimeFormat(P,V)}function Le(P){return s.value?s.value.getNumberFormat(P):{}}function ye(P,V){s.value&&(s.value.setNumberFormat(P,V),f.value[P]=V)}function Ve(P,V){s.value&&s.value.mergeNumberFormat(P,V)}const y={get id(){return s.value?s.value.id:-1},locale:R,fallbackLocale:k,messages:S,datetimeFormats:C,numberFormats:X,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(P){s.value&&(s.value.inheritLocale=P)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:M},get pluralRules(){return s.value?s.value.pluralRules:L},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:d},set missingWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackWarn(){return s.value?s.value.fallbackWarn:m},set fallbackWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackRoot(){return s.value?s.value.fallbackRoot:x},set fallbackRoot(P){s.value&&(s.value.fallbackRoot=P)},get fallbackFormat(){return s.value?s.value.fallbackFormat:v},set fallbackFormat(P){s.value&&(s.value.fallbackFormat=P)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:A},set warnHtmlMessage(P){s.value&&(s.value.warnHtmlMessage=P)},get escapeParameter(){return s.value?s.value.escapeParameter:E},set escapeParameter(P){s.value&&(s.value.escapeParameter=P)},t:te,getPostTranslationHandler:O,setPostTranslationHandler:ie,getMissingHandler:B,setMissingHandler:$,rt:J,d:ae,n:oe,tm:ue,te:fe,getLocaleMessage:ee,setLocaleMessage:ce,mergeLocaleMessage:pe,getDateTimeFormat:Se,setDateTimeFormat:Me,mergeDateTimeFormat:Re,getNumberFormat:Le,setNumberFormat:ye,mergeNumberFormat:Ve};function U(P){P.locale.value=o.value,P.fallbackLocale.value=l.value,Object.keys(c.value).forEach(V=>{P.mergeLocaleMessage(V,c.value[V])}),Object.keys(u.value).forEach(V=>{P.mergeDateTimeFormat(V,u.value[V])}),Object.keys(f.value).forEach(V=>{P.mergeNumberFormat(V,f.value[V])}),P.escapeParameter=E,P.fallbackFormat=v,P.fallbackRoot=x,P.fallbackWarn=m,P.missingWarn=d,P.warnHtmlMessage=A}return sh(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Ct(St.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const P=s.value=t.proxy.$i18n.__composer;e==="global"?(o.value=P.locale.value,l.value=P.fallbackLocale.value,c.value=P.messages.value,u.value=P.datetimeFormats.value,f.value=P.numberFormats.value):r&&U(P)}),y}const w0=["locale","fallbackLocale","availableLocales"],Xu=["t","rt","d","n","tm","te"];function L0(t,e){const n=Object.create(null);return w0.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Ct(St.UNEXPECTED_ERROR);const a=Ot(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,Xu.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Ct(St.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Xu.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}s0();__INTLIFY_JIT_COMPILATION__?Tu(Qv):Tu(Jv);zv(yv);Wv(Yh);if(__INTLIFY_PROD_DEVTOOLS__){const t=ni();t.__INTLIFY__=!0,Iv(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const P0="modulepreload",I0=function(t){return"/worldmap-quiz/"+t},Yu={},$u=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=I0(l),l in Yu)return;Yu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":P0,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},D0=(t,e,n)=>{const i=t[e];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="160",N0=0,qu=1,U0=2,fp=1,O0=2,Qn=3,Oi=0,nn=1,ii=2,Ci=0,zr=1,ju=2,Ku=3,Zu=4,F0=5,ir=100,B0=101,H0=102,Ju=103,Qu=104,k0=200,G0=201,V0=202,z0=203,wl=204,Ll=205,W0=206,X0=207,Y0=208,$0=209,q0=210,j0=211,K0=212,Z0=213,J0=214,Q0=0,eE=1,tE=2,Oa=3,nE=4,iE=5,rE=6,sE=7,dp=0,aE=1,oE=2,wi=0,lE=1,cE=2,uE=3,fE=4,dE=5,hE=6,hp=300,qr=301,jr=302,Pl=303,Il=304,io=306,Dl=1e3,bn=1001,Nl=1002,jt=1003,ef=1004,wo=1005,mn=1006,pE=1007,Ps=1008,Li=1009,mE=1010,_E=1011,Ec=1012,pp=1013,Ti=1014,bi=1015,Is=1016,mp=1017,_p=1018,ar=1020,gE=1021,An=1023,vE=1024,EE=1025,or=1026,Kr=1027,xE=1028,gp=1029,SE=1030,vp=1031,Ep=1033,Lo=33776,Po=33777,Io=33778,Do=33779,tf=35840,nf=35841,rf=35842,sf=35843,xp=36196,af=37492,of=37496,lf=37808,cf=37809,uf=37810,ff=37811,df=37812,hf=37813,pf=37814,mf=37815,_f=37816,gf=37817,vf=37818,Ef=37819,xf=37820,Sf=37821,No=36492,Mf=36494,yf=36495,ME=36283,Tf=36284,bf=36285,Af=36286,Sp=3e3,lr=3001,yE=3200,TE=3201,bE=0,AE=1,vn="",It="srgb",ci="srgb-linear",xc="display-p3",ro="display-p3-linear",Fa="linear",ft="srgb",Ba="rec709",Ha="p3",hr=7680,Rf=519,RE=512,CE=513,wE=514,Mp=515,LE=516,PE=517,IE=518,DE=519,Ul=35044,Cf="300 es",Ol=1035,ai=2e3,ka=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uo=Math.PI/180,Fl=180/Math.PI;function Pi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function NE(t,e){return(t%e+e)%e}function Oo(t,e,n){return(1-n)*t+n*e}function wf(t){return(t&t-1)===0&&t!==0}function Bl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ri(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],v=r[0],_=r[3],p=r[6],A=r[1],E=r[4],M=r[7],L=r[2],b=r[5],R=r[8];return s[0]=a*v+o*A+l*L,s[3]=a*_+o*E+l*b,s[6]=a*p+o*M+l*R,s[1]=c*v+u*A+f*L,s[4]=c*_+u*E+f*b,s[7]=c*p+u*M+f*R,s[2]=d*v+m*A+x*L,s[5]=d*_+m*E+x*b,s[8]=d*p+m*M+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=n*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Fo.makeScale(e,n)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new $e;function yp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ds(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UE(){const t=Ds("canvas");return t.style.display="block",t}const Lf={};function xs(t){t in Lf||(Lf[t]=!0,console.warn(t))}const Pf=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),If=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[ci]:{transfer:Fa,primaries:Ba,toReference:t=>t,fromReference:t=>t},[It]:{transfer:ft,primaries:Ba,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ro]:{transfer:Fa,primaries:Ha,toReference:t=>t.applyMatrix3(If),fromReference:t=>t.applyMatrix3(Pf)},[xc]:{transfer:ft,primaries:Ha,toReference:t=>t.convertSRGBToLinear().applyMatrix3(If),fromReference:t=>t.applyMatrix3(Pf).convertLinearToSRGB()}},OE=new Set([ci,ro]),nt={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!OE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===vn?Fa:Ks[t].transfer}};function Wr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pr;class Tp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=Ds("canvas")),pr.width=e.width,pr.height=e.height;const i=pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=pr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ds("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wr(n[i]/255)*255):n[i]=Wr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ho(r[a].image)):s.push(Ho(r[a]))}else s=Ho(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ho(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Tp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BE=0;class Jt extends Qr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=bn,r=bn,s=mn,a=Ps,o=An,l=Li,c=Jt.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Pi(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===lr?It:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?lr:Sp}set encoding(e){xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lr?It:vn}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=hp;Jt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,M=(m+1)/2,L=(p+1)/2,b=(u+d)/4,R=(f+v)/4,k=(x+_)/4;return E>M&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=b/i,s=R/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=k/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=k/s),this.set(i,r,s,n),this}let A=Math.sqrt((_-x)*(_-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(_-x)/A,this.y=(f-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HE extends Qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lr?It:vn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends HE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ap extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kE extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(f!==v||l!==d||c!==m||u!==x){let _=1-o;const p=l*d+c*m+u*x+f*v,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const L=Math.sqrt(E),b=Math.atan2(L,p*A);_=Math.sin(_*b)/L,o=Math.sin(o*b)/L}const M=o*A;if(l=l*_+d*M,c=c*_+m*M,u=u*_+x*M,f=f*_+v*M,_===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+u*f+l*m-c*d,e[n+1]=l*x+u*d+c*f-o*m,e[n+2]=c*x+u*m+o*d-l*f,e[n+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Df.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new j,Df=new Bs;class Hs{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Js.subVectors(this.max,ss),mr.subVectors(e.a,ss),_r.subVectors(e.b,ss),gr.subVectors(e.c,ss),pi.subVectors(_r,mr),mi.subVectors(gr,_r),ji.subVectors(mr,gr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ji.z,ji.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ji.z,0,-ji.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ji.y,ji.x,0];return!Go(n,mr,_r,gr,Js)||(n=[1,0,0,0,1,0,0,0,1],!Go(n,mr,_r,gr,Js))?!1:(Qs.crossVectors(pi,mi),n=[Qs.x,Qs.y,Qs.z],Go(n,mr,_r,gr,Js))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new j,new j,new j,new j,new j,new j,new j,new j],Sn=new j,Zs=new Hs,mr=new j,_r=new j,gr=new j,pi=new j,mi=new j,ji=new j,ss=new j,Js=new j,Qs=new j,Ki=new j;function Go(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ki.fromArray(t,s);const o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const GE=new Hs,as=new j,Vo=new j;class Sc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const n=as.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Vo)),this.expandByPoint(as.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new j,zo=new j,ea=new j,_i=new j,Wo=new j,ta=new j,Xo=new j;class Rp{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zo.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(zo);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ea),o=_i.dot(this.direction),l=-_i.dot(ea),c=_i.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zo).addScaledVector(ea,d),m}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,s){Wo.subVectors(n,e),ta.subVectors(i,e),Xo.crossVectors(Wo,ta);let a=this.direction.dot(Xo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(ta.crossVectors(_i,ta));if(l<0)return null;const c=o*this.direction.dot(Wo.cross(_i));if(c<0||l+c>a)return null;const u=-o*_i.dot(Xo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,a,o,l,c,u,f,d,m,x,v,_){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,m,x,v,_)}set(e,n,i,r,s,a,o,l,c,u,f,d,m,x,v,_){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=m,p[7]=x,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),a=1/vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,v=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,v=c*f;n[0]=d+v*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=m*o-x,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,v=c*f;n[0]=d-v*o,n[4]=-a*f,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*u,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,v=o*f;n[0]=l*u,n[4]=x*c-m,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;n[0]=l*u,n[4]=v-d*f,n[8]=x*f+m,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*f+x,n[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=a*u,n[9]=m*f-x,n[2]=x*f-m,n[6]=o*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,zE)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),gi.crossVectors(i,an),gi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),gi.crossVectors(i,an)),gi.normalize(),na.crossVectors(an,gi),r[0]=gi.x,r[4]=na.x,r[8]=an.x,r[1]=gi.y,r[5]=na.y,r[9]=an.y,r[2]=gi.z,r[6]=na.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],v=i[6],_=i[10],p=i[14],A=i[3],E=i[7],M=i[11],L=i[15],b=r[0],R=r[4],k=r[8],S=r[12],C=r[1],X=r[5],O=r[9],ie=r[13],B=r[2],$=r[6],Y=r[10],te=r[14],J=r[3],ae=r[7],oe=r[11],ue=r[15];return s[0]=a*b+o*C+l*B+c*J,s[4]=a*R+o*X+l*$+c*ae,s[8]=a*k+o*O+l*Y+c*oe,s[12]=a*S+o*ie+l*te+c*ue,s[1]=u*b+f*C+d*B+m*J,s[5]=u*R+f*X+d*$+m*ae,s[9]=u*k+f*O+d*Y+m*oe,s[13]=u*S+f*ie+d*te+m*ue,s[2]=x*b+v*C+_*B+p*J,s[6]=x*R+v*X+_*$+p*ae,s[10]=x*k+v*O+_*Y+p*oe,s[14]=x*S+v*ie+_*te+p*ue,s[3]=A*b+E*C+M*B+L*J,s[7]=A*R+E*X+M*$+L*ae,s[11]=A*k+E*O+M*Y+L*oe,s[15]=A*S+E*ie+M*te+L*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],_=e[11],p=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+n*l*m-n*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+_*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+p*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],_=e[14],p=e[15],A=f*_*c-v*d*c+v*l*m-o*_*m-f*l*p+o*d*p,E=x*d*c-u*_*c-x*l*m+a*_*m+u*l*p-a*d*p,M=u*v*c-x*f*c+x*o*m-a*v*m-u*o*p+a*f*p,L=x*f*l-u*v*l-x*o*d+a*v*d+u*o*_-a*f*_,b=n*A+i*E+r*M+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=A*R,e[1]=(v*d*s-f*_*s-v*r*m+i*_*m+f*r*p-i*d*p)*R,e[2]=(o*_*s-v*l*s+v*r*c-i*_*c-o*r*p+i*l*p)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=E*R,e[5]=(u*_*s-x*d*s+x*r*m-n*_*m-u*r*p+n*d*p)*R,e[6]=(x*l*s-a*_*s-x*r*c+n*_*c+a*r*p-n*l*p)*R,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*m+n*l*m)*R,e[8]=M*R,e[9]=(x*f*s-u*v*s-x*i*m+n*v*m+u*i*p-n*f*p)*R,e[10]=(a*v*s-x*o*s+x*i*c-n*v*c-a*i*p+n*o*p)*R,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*m-n*o*m)*R,e[12]=L*R,e[13]=(u*v*r-x*f*r+x*i*d-n*v*d-u*i*_+n*f*_)*R,e[14]=(x*o*r-a*v*r-x*i*l+n*v*l+a*i*_-n*o*_)*R,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,v=a*u,_=a*f,p=o*f,A=l*c,E=l*u,M=l*f,L=i.x,b=i.y,R=i.z;return r[0]=(1-(v+p))*L,r[1]=(m+M)*L,r[2]=(x-E)*L,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(d+p))*b,r[6]=(_+A)*b,r[7]=0,r[8]=(x+E)*R,r[9]=(_-A)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const a=vr.set(r[4],r[5],r[6]).length(),o=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/a,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(o===ai)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ka)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),d=(n+e)*c,m=(i+r)*u;let x,v;if(o===ai)x=(a+s)*f,v=-2*f;else if(o===ka)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vr=new j,Mn=new wt,VE=new j(0,0,0),zE=new j(1,1,1),gi=new j,na=new j,an=new j,Nf=new wt,Uf=new Bs;class so{constructor(e=0,n=0,i=0,r=so.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}so.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const Of=new j,Er=new Bs,Kn=new wt,ia=new j,os=new j,XE=new j,YE=new Bs,Ff=new j(1,0,0),Bf=new j(0,1,0),Hf=new j(0,0,1),$E={type:"added"},qE={type:"removed"};class rn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new j,n=new so,i=new Bs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new $e}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,n){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(os,ia,this.up):Kn.lookAt(ia,os,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Kn),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($E)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,XE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,YE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new j(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new j,Zn=new j,Yo=new j,Jn=new j,xr=new j,Sr=new j,kf=new j,$o=new j,qo=new j,jo=new j;let ra=!1;class _n{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yn.subVectors(e,n),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yn.subVectors(r,n),Zn.subVectors(i,n),Yo.subVectors(e,n);const a=yn.dot(yn),o=yn.dot(Zn),l=yn.dot(Yo),c=Zn.dot(Zn),u=Zn.dot(Yo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,n,i,r,s,a,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static isFrontFacing(e,n,i,r){return yn.subVectors(i,n),Zn.subVectors(e,n),yn.cross(Zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _n.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),_n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xr.subVectors(r,i),Sr.subVectors(s,i),$o.subVectors(e,i);const l=xr.dot($o),c=Sr.dot($o);if(l<=0&&c<=0)return n.copy(i);qo.subVectors(e,r);const u=xr.dot(qo),f=Sr.dot(qo);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(xr,a);jo.subVectors(e,s);const m=xr.dot(jo),x=Sr.dot(jo);if(x>=0&&m<=x)return n.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Sr,o);const _=u*x-m*f;if(_<=0&&f-u>=0&&m-x>=0)return kf.subVectors(s,r),o=(f-u)/(f-u+(m-x)),n.copy(r).addScaledVector(kf,o);const p=1/(_+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(xr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Ko(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=NE(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ko(a,s,e+1/3),this.g=Ko(a,s,e),this.b=Ko(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=It){const i=Cp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.fromWorkingColorSpace(kt.copy(this),e),Math.round(tn(kt.r*255,0,255))*65536+Math.round(tn(kt.g*255,0,255))*256+Math.round(tn(kt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=It){nt.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==It?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+n,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vi),e.getHSL(sa);const i=Oo(vi.h,sa.h,n),r=Oo(vi.s,sa.s,n),s=Oo(vi.l,sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new tt;tt.NAMES=Cp;let jE=0;class ks extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=zr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Ll,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ll&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ga extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new j,aa=new je;class Pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)aa.fromBufferAttribute(this,n),aa.applyMatrix3(e),this.setXY(n,aa.x,aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ri(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ri(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ri(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ri(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}}class wp extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lp extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vn extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KE=0;const hn=new wt,Zo=new rn,Mr=new j,on=new Hs,ls=new Hs,At=new j;class fi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yp(e)?Lp:wp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(on.min,ls.min),on.expandByPoint(At),At.addVectors(on.max,ls.max),on.expandByPoint(At)):(on.expandByPoint(ls.min),on.expandByPoint(ls.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),At.add(Mr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new j,u[C]=new j;const f=new j,d=new j,m=new j,x=new je,v=new je,_=new je,p=new j,A=new j;function E(C,X,O){f.fromArray(r,C*3),d.fromArray(r,X*3),m.fromArray(r,O*3),x.fromArray(a,C*2),v.fromArray(a,X*2),_.fromArray(a,O*2),d.sub(f),m.sub(f),v.sub(x),_.sub(x);const ie=1/(v.x*_.y-_.x*v.y);isFinite(ie)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(m,-v.y).multiplyScalar(ie),A.copy(m).multiplyScalar(v.x).addScaledVector(d,-_.x).multiplyScalar(ie),c[C].add(p),c[X].add(p),c[O].add(p),u[C].add(A),u[X].add(A),u[O].add(A))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let C=0,X=M.length;C<X;++C){const O=M[C],ie=O.start,B=O.count;for(let $=ie,Y=ie+B;$<Y;$+=3)E(i[$+0],i[$+1],i[$+2])}const L=new j,b=new j,R=new j,k=new j;function S(C){R.fromArray(s,C*3),k.copy(R);const X=c[C];L.copy(X),L.sub(R.multiplyScalar(R.dot(X))).normalize(),b.crossVectors(k,X);const ie=b.dot(u[C])<0?-1:1;l[C*4]=L.x,l[C*4+1]=L.y,l[C*4+2]=L.z,l[C*4+3]=ie}for(let C=0,X=M.length;C<X;++C){const O=M[C],ie=O.start,B=O.count;for(let $=ie,Y=ie+B;$<Y;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,_),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let p=0;p<u;p++)d[x++]=c[m++]}return new Pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gf=new wt,Zi=new Rp,oa=new Sc,Vf=new j,yr=new j,Tr=new j,br=new j,Jo=new j,la=new j,ca=new je,ua=new je,fa=new je,zf=new j,Wf=new j,Xf=new j,da=new j,ha=new j;class Hn extends rn{constructor(e=new fi,n=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){la.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Jo.fromBufferAttribute(f,e),a?la.addScaledVector(Jo,u):la.addScaledVector(Jo.sub(n),u))}n.add(la)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(oa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(oa,Vf)===null||Zi.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Gf.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const _=d[x],p=a[_.materialIndex],A=Math.max(_.start,m.start),E=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let M=A,L=E;M<L;M+=3){const b=o.getX(M),R=o.getX(M+1),k=o.getX(M+2);r=pa(this,p,e,i,c,u,f,b,R,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let _=x,p=v;_<p;_+=3){const A=o.getX(_),E=o.getX(_+1),M=o.getX(_+2);r=pa(this,a,e,i,c,u,f,A,E,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const _=d[x],p=a[_.materialIndex],A=Math.max(_.start,m.start),E=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let M=A,L=E;M<L;M+=3){const b=M,R=M+1,k=M+2;r=pa(this,p,e,i,c,u,f,b,R,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let _=x,p=v;_<p;_+=3){const A=_,E=_+1,M=_+2;r=pa(this,a,e,i,c,u,f,A,E,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function ZE(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Oi,o),l===null)return null;ha.copy(o),ha.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ha);return c<n.near||c>n.far?null:{distance:c,point:ha.clone(),object:t}}function pa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,yr),t.getVertexPosition(l,Tr),t.getVertexPosition(c,br);const u=ZE(t,e,n,i,yr,Tr,br,da);if(u){r&&(ca.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),fa.fromBufferAttribute(r,c),u.uv=_n.getInterpolation(da,yr,Tr,br,ca,ua,fa,new je)),s&&(ca.fromBufferAttribute(s,o),ua.fromBufferAttribute(s,l),fa.fromBufferAttribute(s,c),u.uv1=_n.getInterpolation(da,yr,Tr,br,ca,ua,fa,new je),u.uv2=u.uv1),a&&(zf.fromBufferAttribute(a,o),Wf.fromBufferAttribute(a,l),Xf.fromBufferAttribute(a,c),u.normal=_n.getInterpolation(da,yr,Tr,br,zf,Wf,Xf,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};_n.getNormal(yr,Tr,br,f.normal),u.face=f}return u}class Gs extends fi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(f,2));function x(v,_,p,A,E,M,L,b,R,k,S){const C=M/R,X=L/k,O=M/2,ie=L/2,B=b/2,$=R+1,Y=k+1;let te=0,J=0;const ae=new j;for(let oe=0;oe<Y;oe++){const ue=oe*X-ie;for(let fe=0;fe<$;fe++){const ee=fe*C-O;ae[v]=ee*A,ae[_]=ue*E,ae[p]=B,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[_]=0,ae[p]=b>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(fe/R),f.push(1-oe/k),te+=1}}for(let oe=0;oe<k;oe++)for(let ue=0;ue<R;ue++){const fe=d+ue+$*oe,ee=d+ue+$*(oe+1),ce=d+(ue+1)+$*(oe+1),pe=d+(ue+1)+$*oe;l.push(fe,ee,pe),l.push(ee,ce,pe),J+=6}o.addGroup(m,J,S),m+=J,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Zr(t[n]);for(const r in i)e[r]=i[r]}return e}function JE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Pp(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const QE={clone:Zr,merge:$t};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ip extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends Ip{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ar=-90,Rr=1;class nx extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Ar,Rr,e,n);r.layers=this.layers,this.add(r);const s=new Tn(Ar,Rr,e,n);s.layers=this.layers,this.add(s);const a=new Tn(Ar,Rr,e,n);a.layers=this.layers,this.add(a);const o=new Tn(Ar,Rr,e,n);o.layers=this.layers,this.add(o);const l=new Tn(Ar,Rr,e,n);l.layers=this.layers,this.add(l);const c=new Tn(Ar,Rr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Dp extends Jt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:qr,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ix extends cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lr?It:vn),this.texture=new Dp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gs(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ci});s.uniforms.tEquirect.value=n;const a=new Hn(r,s),o=n.minFilter;return n.minFilter===Ps&&(n.minFilter=mn),new nx(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Qo=new j,rx=new j,sx=new $e;class er{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qo.subVectors(i,n).cross(rx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sx.getNormalMatrix(e),r=this.coplanarPoint(Qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Sc,ma=new j;class Np{constructor(e=new er,n=new er,i=new er,r=new er,s=new er,a=new er){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],v=r[10],_=r[11],p=r[12],A=r[13],E=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,_-m,M-p).normalize(),i[1].setComponents(l+s,d+c,_+m,M+p).normalize(),i[2].setComponents(l+a,d+u,_+x,M+A).normalize(),i[3].setComponents(l-a,d-u,_-x,M-A).normalize(),i[4].setComponents(l-o,d-f,_-v,M-E).normalize(),n===ai)i[5].setComponents(l+o,d+f,_+v,M+E).normalize();else if(n===ka)i[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Up(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ax(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=f.byteLength,x=t.createBuffer();t.bindBuffer(u,x),t.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const d=u.array,m=u._updateRange,x=u.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&x.length===0&&t.bufferSubData(f,0,d),x.length!==0){for(let v=0,_=x.length;v<_;v++){const p=x[v];n?t.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):t.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class ao extends fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,m=[],x=[],v=[],_=[];for(let p=0;p<u;p++){const A=p*d-a;for(let E=0;E<c;E++){const M=E*f-s;x.push(M,-A,0),v.push(0,0,1),_.push(E/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const E=A+c*p,M=A+c*(p+1),L=A+1+c*(p+1),b=A+1+c*p;m.push(E,M,b),m.push(M,L,b)}this.setIndex(m),this.setAttribute("position",new Vn(x,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ES=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,US=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$S=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:ox,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:ux,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:hx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:_x,begin_vertex:gx,beginnormal_vertex:vx,bsdfs:Ex,iridescence_fragment:xx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:yx,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:bx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:wx,common:Lx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Dx,displacementmap_vertex:Nx,emissivemap_fragment:Ux,emissivemap_pars_fragment:Ox,colorspace_fragment:Fx,colorspace_pars_fragment:Bx,envmap_fragment:Hx,envmap_common_pars_fragment:kx,envmap_pars_fragment:Gx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:eS,envmap_vertex:zx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:Yx,fog_pars_fragment:$x,gradientmap_pars_fragment:qx,lightmap_fragment:jx,lightmap_pars_fragment:Kx,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:tS,lights_toon_pars_fragment:nS,lights_phong_fragment:iS,lights_phong_pars_fragment:rS,lights_physical_fragment:sS,lights_physical_pars_fragment:aS,lights_fragment_begin:oS,lights_fragment_maps:lS,lights_fragment_end:cS,logdepthbuf_fragment:uS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:hS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:_S,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:ES,morphcolor_vertex:xS,morphnormal_vertex:SS,morphtarget_pars_vertex:MS,morphtarget_vertex:yS,normal_fragment_begin:TS,normal_fragment_maps:bS,normal_pars_fragment:AS,normal_pars_vertex:RS,normal_vertex:CS,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:LS,clearcoat_normal_fragment_maps:PS,clearcoat_pars_fragment:IS,iridescence_pars_fragment:DS,opaque_fragment:NS,packing:US,premultiplied_alpha_fragment:OS,project_vertex:FS,dithering_fragment:BS,dithering_pars_fragment:HS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:zS,shadowmap_vertex:WS,shadowmask_pars_fragment:XS,skinbase_vertex:YS,skinning_pars_vertex:$S,skinning_vertex:qS,skinnormal_vertex:jS,specularmap_fragment:KS,specularmap_pars_fragment:ZS,tonemapping_fragment:JS,tonemapping_pars_fragment:QS,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:aM,background_frag:oM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:fM,depth_vert:dM,depth_frag:hM,distanceRGBA_vert:pM,distanceRGBA_frag:mM,equirect_vert:_M,equirect_frag:gM,linedashed_vert:vM,linedashed_frag:EM,meshbasic_vert:xM,meshbasic_frag:SM,meshlambert_vert:MM,meshlambert_frag:yM,meshmatcap_vert:TM,meshmatcap_frag:bM,meshnormal_vert:AM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:wM,meshphysical_vert:LM,meshphysical_frag:PM,meshtoon_vert:IM,meshtoon_frag:DM,points_vert:NM,points_frag:UM,shadow_vert:OM,shadow_frag:FM,sprite_vert:BM,sprite_frag:HM},he={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const _a={r:0,b:0,g:0};function kM(t,e,n,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(_,p){let A=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?n:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),A=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===io)?(u===void 0&&(u=new Hn(new Gs(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Zr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=nt.getTransfer(E.colorSpace)!==ft,(f!==E||d!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Hn(new ao(2,2),new ur({name:"BackgroundMaterial",uniforms:Zr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function v(_,p){_.getRGB(_a,Pp(t)),i.buffers.color.setClear(_a.r,_a.g,_a.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(_,p=1){o.set(_),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,v(o,l)},render:x}}function GM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=_(null);let c=l,u=!1;function f(B,$,Y,te,J){let ae=!1;if(a){const oe=v(te,Y,$);c!==oe&&(c=oe,m(c.object)),ae=p(B,te,Y,J),ae&&A(B,te,Y,J)}else{const oe=$.wireframe===!0;(c.geometry!==te.id||c.program!==Y.id||c.wireframe!==oe)&&(c.geometry=te.id,c.program=Y.id,c.wireframe=oe,ae=!0)}J!==null&&n.update(J,t.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,k(B,$,Y,te),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(J).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(B){return i.isWebGL2?t.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?t.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function v(B,$,Y){const te=Y.wireframe===!0;let J=o[B.id];J===void 0&&(J={},o[B.id]=J);let ae=J[$.id];ae===void 0&&(ae={},J[$.id]=ae);let oe=ae[te];return oe===void 0&&(oe=_(d()),ae[te]=oe),oe}function _(B){const $=[],Y=[],te=[];for(let J=0;J<r;J++)$[J]=0,Y[J]=0,te[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Y,attributeDivisors:te,object:B,attributes:{},index:null}}function p(B,$,Y,te){const J=c.attributes,ae=$.attributes;let oe=0;const ue=Y.getAttributes();for(const fe in ue)if(ue[fe].location>=0){const ce=J[fe];let pe=ae[fe];if(pe===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(pe=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(pe=B.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;oe++}return c.attributesNum!==oe||c.index!==te}function A(B,$,Y,te){const J={},ae=$.attributes;let oe=0;const ue=Y.getAttributes();for(const fe in ue)if(ue[fe].location>=0){let ce=ae[fe];ce===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),J[fe]=pe,oe++}c.attributes=J,c.attributesNum=oe,c.index=te}function E(){const B=c.newAttributes;for(let $=0,Y=B.length;$<Y;$++)B[$]=0}function M(B){L(B,0)}function L(B,$){const Y=c.newAttributes,te=c.enabledAttributes,J=c.attributeDivisors;Y[B]=1,te[B]===0&&(t.enableVertexAttribArray(B),te[B]=1),J[B]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,$),J[B]=$)}function b(){const B=c.newAttributes,$=c.enabledAttributes;for(let Y=0,te=$.length;Y<te;Y++)$[Y]!==B[Y]&&(t.disableVertexAttribArray(Y),$[Y]=0)}function R(B,$,Y,te,J,ae,oe){oe===!0?t.vertexAttribIPointer(B,$,Y,J,ae):t.vertexAttribPointer(B,$,Y,te,J,ae)}function k(B,$,Y,te){if(i.isWebGL2===!1&&(B.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const J=te.attributes,ae=Y.getAttributes(),oe=$.defaultAttributeValues;for(const ue in ae){const fe=ae[ue];if(fe.location>=0){let ee=J[ue];if(ee===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){const ce=ee.normalized,pe=ee.itemSize,Se=n.get(ee);if(Se===void 0)continue;const Me=Se.buffer,Re=Se.type,Le=Se.bytesPerElement,ye=i.isWebGL2===!0&&(Re===t.INT||Re===t.UNSIGNED_INT||ee.gpuType===pp);if(ee.isInterleavedBufferAttribute){const Ve=ee.data,y=Ve.stride,U=ee.offset;if(Ve.isInstancedInterleavedBuffer){for(let P=0;P<fe.locationSize;P++)L(fe.location+P,Ve.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let P=0;P<fe.locationSize;P++)M(fe.location+P);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let P=0;P<fe.locationSize;P++)R(fe.location+P,pe/fe.locationSize,Re,ce,y*Le,(U+pe/fe.locationSize*P)*Le,ye)}else{if(ee.isInstancedBufferAttribute){for(let Ve=0;Ve<fe.locationSize;Ve++)L(fe.location+Ve,ee.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ve=0;Ve<fe.locationSize;Ve++)M(fe.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ve=0;Ve<fe.locationSize;Ve++)R(fe.location+Ve,pe/fe.locationSize,Re,ce,pe*Le,pe/fe.locationSize*Ve*Le,ye)}}else if(oe!==void 0){const ce=oe[ue];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(fe.location,ce);break;case 3:t.vertexAttrib3fv(fe.location,ce);break;case 4:t.vertexAttrib4fv(fe.location,ce);break;default:t.vertexAttrib1fv(fe.location,ce)}}}}b()}function S(){O();for(const B in o){const $=o[B];for(const Y in $){const te=$[Y];for(const J in te)x(te[J].object),delete te[J];delete $[Y]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;const $=o[B.id];for(const Y in $){const te=$[Y];for(const J in te)x(te[J].object),delete te[J];delete $[Y]}delete o[B.id]}function X(B){for(const $ in o){const Y=o[$];if(Y[B.id]===void 0)continue;const te=Y[B.id];for(const J in te)x(te[J].object),delete te[J];delete Y[B.id]}}function O(){ie(),u=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:X,initAttributes:E,enableAttribute:M,disableUnusedAttributes:b}}function VM(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(u[x],f[x]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=f[v];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function zM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,M=a||e.has("OES_texture_float"),L=E&&M,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:E,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:b}}function WM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new er,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,p=t.get(f);if(!r||x===null||x.length===0||s&&!_)s?u(null):c();else{const A=s?0:i,E=A*4;let M=p.clippingState||null;l.value=M,M=u(x,d,E,m);for(let L=0;L!==E;++L)M[L]=n[L];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=l.value,x!==!0||_===null){const p=m+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(_===null||_.length<p)&&(_=new Float32Array(p));for(let E=0,M=m;E!==v;++E,M+=4)a.copy(f[E]).applyMatrix4(A,o),a.normal.toArray(_,M),_[M+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function XM(t){let e=new WeakMap;function n(a,o){return o===Pl?a.mapping=qr:o===Il&&(a.mapping=jr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pl||o===Il)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ix(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Op extends Ip{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Or=4,Yf=[.125,.215,.35,.446,.526,.582],rr=20,el=new Op,$f=new tt;let tl=null,nl=0,il=0;const tr=(1+Math.sqrt(5))/2,Cr=1/tr,qf=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,tr,Cr),new j(0,tr,-Cr),new j(Cr,0,tr),new j(-Cr,0,tr),new j(tr,Cr,0),new j(-tr,Cr,0)];class jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Is,format:An,colorSpace:ci,depthBuffer:!1},r=Kf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YM(s)),this._blurMaterial=$M(s,e,n)}return r}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,el)}_sceneToCubeUV(e,n,i,r){const o=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor($f),u.toneMapping=wi,u.autoClear=!1;const m=new Ga({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new Hn(new Gs,m);let v=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,v=!0):(m.color.copy($f),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;ga(r,A*E,p>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,el)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qf[(r-1)%qf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Hn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),v=s/x,_=isFinite(s)?1+Math.floor(u*v):rr;_>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rr}`);const p=[];let A=0;for(let R=0;R<rr;++R){const k=R/v,S=Math.exp(-k*k/2);p.push(S),R===0?A+=S:R<_&&(A+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const M=this._sizeLods[r],L=3*M*(r>E-Or?r-E+Or:0),b=4*(this._cubeSize-M);ga(n,L,b,3*M,2*M),l.setRenderTarget(n),l.render(f,el)}}function YM(t){const e=[],n=[],i=[];let r=t;const s=t-Or+1+Yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Or?l=Yf[a-t+Or-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,_=2,p=1,A=new Float32Array(v*x*m),E=new Float32Array(_*x*m),M=new Float32Array(p*x*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,k=b>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];A.set(S,v*x*b),E.set(d,_*x*b);const C=[b,b,b,b,b,b];M.set(C,p*x*b)}const L=new fi;L.setAttribute("position",new Pn(A,v)),L.setAttribute("uv",new Pn(E,_)),L.setAttribute("faceIndex",new Pn(M,p)),e.push(L),r>Or&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kf(t,e,n){const i=new cr(t,e,n);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $M(t,e,n){const i=new Float32Array(rr),r=new j(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Zf(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Jf(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qM(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pl||l===Il,u=l===qr||l===jr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new jf(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new jf(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function jM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KM(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let _=0,p=v.length;_<p;_++)e.remove(v[_])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let _=0,p=v.length;_<p;_++)e.update(v[_],t.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,M=A.length;E<M;E+=3){const L=A[E+0],b=A[E+1],R=A[E+2];d.push(L,b,b,R,R,L)}}else if(x!==void 0){const A=x.array;v=x.version;for(let E=0,M=A.length/3-1;E<M;E+=3){const L=E+0,b=E+1,R=E+2;d.push(L,b,b,R,R,L)}}else return;const _=new(yp(d)?Lp:wp)(d,1);_.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,_)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ZM(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,x){t.drawElements(s,x,o,m*l),n.update(x,s,1)}function f(m,x,v){if(v===0)return;let _,p;if(r)_=t,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,x,o,m*l,v),n.update(x,s,v)}function d(m,x,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<v;p++)this.render(m[p]/l,x[p]);else{_.multiDrawElementsWEBGL(s,x,0,o,m,0,v);let p=0;for(let A=0;A<v;A++)p+=x[A];n.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function JM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function QM(t,e){return t[0]-e[0]}function ey(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ty(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(u);if(_===void 0||_.count!==v){let $=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var m=$;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let S=0;E===!0&&(S=1),M===!0&&(S=2),L===!0&&(S=3);let C=u.attributes.position.count*S,X=1;C>e.maxTextureSize&&(X=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const O=new Float32Array(C*X*4*v),ie=new Ap(O,C,X,v);ie.type=bi,ie.needsUpdate=!0;const B=S*4;for(let Y=0;Y<v;Y++){const te=b[Y],J=R[Y],ae=k[Y],oe=C*X*4*Y;for(let ue=0;ue<te.count;ue++){const fe=ue*B;E===!0&&(a.fromBufferAttribute(te,ue),O[oe+fe+0]=a.x,O[oe+fe+1]=a.y,O[oe+fe+2]=a.z,O[oe+fe+3]=0),M===!0&&(a.fromBufferAttribute(J,ue),O[oe+fe+4]=a.x,O[oe+fe+5]=a.y,O[oe+fe+6]=a.z,O[oe+fe+7]=0),L===!0&&(a.fromBufferAttribute(ae,ue),O[oe+fe+8]=a.x,O[oe+fe+9]=a.y,O[oe+fe+10]=a.z,O[oe+fe+11]=ae.itemSize===4?a.w:1)}}_={count:v,texture:ie,size:new je(C,X)},s.set(u,_),u.addEventListener("dispose",$)}let p=0;for(let E=0;E<d.length;E++)p+=d[E];const A=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",A),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let M=0;M<x;M++)v[M]=[M,0];i[u.id]=v}for(let M=0;M<x;M++){const L=v[M];L[0]=M,L[1]=d[M]}v.sort(ey);for(let M=0;M<8;M++)M<x&&v[M][1]?(o[M][0]=v[M][0],o[M][1]=v[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(QM);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const L=o[M],b=L[0],R=L[1];b!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+M)!==_[b]&&u.setAttribute("morphTarget"+M,_[b]),p&&u.getAttribute("morphNormal"+M)!==p[b]&&u.setAttribute("morphNormal"+M,p[b]),r[M]=R,A+=R):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const E=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ny(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Fp extends Jt{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:or,u!==or&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===or&&(i=Ti),i===void 0&&u===Kr&&(i=ar),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Bp=new Jt,Hp=new Fp(1,1);Hp.compareFunction=Mp;const kp=new Ap,Gp=new kE,Vp=new Dp,Qf=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qf[r];if(s===void 0&&(s=new Float32Array(r),Qf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oo(t,e){let n=ed[e];n===void 0&&(n=new Int32Array(e),ed[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ry(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),yt(n,e)}}function sy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),yt(n,e)}}function ay(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),yt(n,e)}}function oy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yt(n,e)}else{if(Mt(n,i))return;id.set(i),t.uniformMatrix2fv(this.addr,!1,id),yt(n,i)}}function ly(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yt(n,e)}else{if(Mt(n,i))return;nd.set(i),t.uniformMatrix3fv(this.addr,!1,nd),yt(n,i)}}function cy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yt(n,e)}else{if(Mt(n,i))return;td.set(i),t.uniformMatrix4fv(this.addr,!1,td),yt(n,i)}}function uy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),yt(n,e)}}function dy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),yt(n,e)}}function hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),yt(n,e)}}function py(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function my(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),yt(n,e)}}function _y(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),yt(n,e)}}function gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),yt(n,e)}}function vy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Hp:Bp;n.setTexture2D(e||s,r)}function Ey(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gp,r)}function xy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vp,r)}function Sy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kp,r)}function My(t){switch(t){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return ay;case 35674:return oy;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return uy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return hy;case 5125:return py;case 36294:return my;case 36295:return _y;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return Sy}}function yy(t,e){t.uniform1fv(this.addr,e)}function Ty(t,e){const n=es(e,this.size,2);t.uniform2fv(this.addr,n)}function by(t,e){const n=es(e,this.size,3);t.uniform3fv(this.addr,n)}function Ay(t,e){const n=es(e,this.size,4);t.uniform4fv(this.addr,n)}function Ry(t,e){const n=es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cy(t,e){const n=es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wy(t,e){const n=es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ly(t,e){t.uniform1iv(this.addr,e)}function Py(t,e){t.uniform2iv(this.addr,e)}function Iy(t,e){t.uniform3iv(this.addr,e)}function Dy(t,e){t.uniform4iv(this.addr,e)}function Ny(t,e){t.uniform1uiv(this.addr,e)}function Uy(t,e){t.uniform2uiv(this.addr,e)}function Oy(t,e){t.uniform3uiv(this.addr,e)}function Fy(t,e){t.uniform4uiv(this.addr,e)}function By(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Bp,s[a])}function Hy(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Gp,s[a])}function ky(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Vp,s[a])}function Gy(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||kp,s[a])}function Vy(t){switch(t){case 5126:return yy;case 35664:return Ty;case 35665:return by;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return wy;case 5124:case 35670:return Ly;case 35667:case 35671:return Py;case 35668:case 35672:return Iy;case 35669:case 35673:return Dy;case 5125:return Ny;case 36294:return Uy;case 36295:return Oy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Gy}}class zy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=My(n.type)}}class Wy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vy(n.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function rd(t,e){t.seq.push(e),t.map[e.id]=e}function Yy(t,e,n){const i=t.name,r=i.length;for(rl.lastIndex=0;;){const s=rl.exec(i),a=rl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){rd(n,c===void 0?new zy(o,t,e):new Wy(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Xy(o),rd(n,f)),n=f}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Yy(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function sd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $y=37297;let qy=0;function jy(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Ky(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Ha&&n===Ba?i="LinearDisplayP3ToLinearSRGB":e===Ba&&n===Ha&&(i="LinearSRGBToLinearDisplayP3"),t){case ci:case ro:return[i,"LinearTransferOETF"];case It:case xc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ad(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jy(t.getShaderSource(e),a)}else return r}function Zy(t,e){const n=Ky(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Jy(t,e){let n;switch(e){case lE:n="Linear";break;case cE:n="Reinhard";break;case uE:n="OptimizedCineon";break;case fE:n="ACESFilmic";break;case hE:n="AgX";break;case dE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Qy(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function eT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fr).join(`
`)}function tT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fr(t){return t!==""}function od(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(t){return t.replace(iT,sT)}const rT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sT(t,e){let n=ze[e];if(n===void 0){const i=rT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hl(n)}const aT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(t){return t.replace(aT,oT)}function oT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ud(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function cT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qr:case jr:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function fT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case aE:e="ENVMAP_BLENDING_MIX";break;case oE:e="ENVMAP_BLENDING_ADD";break}return e}function dT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=lT(n),c=cT(n),u=uT(n),f=fT(n),d=dT(n),m=n.isWebGL2?"":Qy(n),x=eT(n),v=tT(s),_=r.createProgram();let p,A,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fr).join(`
`),p.length>0&&(p+=`
`),A=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fr).join(`
`),A.length>0&&(A+=`
`)):(p=[ud(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),A=[m,ud(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?ze.tonemapping_pars_fragment:"",n.toneMapping!==wi?Jy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Zy("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Hl(a),a=od(a,n),a=ld(a,n),o=Hl(o),o=od(o,n),o=ld(o,n),a=cd(a),o=cd(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const M=E+p+a,L=E+A+o,b=sd(r,r.VERTEX_SHADER,M),R=sd(r,r.FRAGMENT_SHADER,L);r.attachShader(_,b),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function k(O){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(b).trim(),$=r.getShaderInfoLog(R).trim();let Y=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,R);else{const J=ad(r,b,"vertex"),ae=ad(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+J+`
`+ae)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(B===""||$==="")&&(te=!1);te&&(O.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:B,prefix:p},fragmentShader:{log:$,prefix:A}})}r.deleteShader(b),r.deleteShader(R),S=new ba(r,_),C=nT(r,_)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(_,$y)),X},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _T(e),n.set(e,i)),i}}class _T{constructor(e){this.id=pT++,this.code=e,this.usedTimes=0}}function gT(t,e,n,i,r,s,a){const o=new Mc,l=new mT,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function _(S,C,X,O,ie){const B=O.fog,$=ie.geometry,Y=S.isMeshStandardMaterial?O.environment:null,te=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),J=te&&te.mapping===io?te.image.height:null,ae=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=oe!==void 0?oe.length:0;let fe=0;$.morphAttributes.position!==void 0&&(fe=1),$.morphAttributes.normal!==void 0&&(fe=2),$.morphAttributes.color!==void 0&&(fe=3);let ee,ce,pe,Se;if(ae){const zt=Fn[ae];ee=zt.vertexShader,ce=zt.fragmentShader}else ee=S.vertexShader,ce=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const Me=t.getRenderTarget(),Re=ie.isInstancedMesh===!0,Le=ie.isBatchedMesh===!0,ye=!!S.map,Ve=!!S.matcap,y=!!te,U=!!S.aoMap,P=!!S.lightMap,V=!!S.bumpMap,z=!!S.normalMap,ne=!!S.displacementMap,re=!!S.emissiveMap,T=!!S.metalnessMap,h=!!S.roughnessMap,g=S.anisotropy>0,I=S.clearcoat>0,N=S.iridescence>0,G=S.sheen>0,q=S.transmission>0,D=g&&!!S.anisotropyMap,H=I&&!!S.clearcoatMap,le=I&&!!S.clearcoatNormalMap,me=I&&!!S.clearcoatRoughnessMap,se=N&&!!S.iridescenceMap,Be=N&&!!S.iridescenceThicknessMap,Te=G&&!!S.sheenColorMap,Ce=G&&!!S.sheenRoughnessMap,be=!!S.specularMap,_e=!!S.specularColorMap,we=!!S.specularIntensityMap,Ke=q&&!!S.transmissionMap,mt=q&&!!S.thicknessMap,Xe=!!S.gradientMap,de=!!S.alphaMap,F=S.alphaTest>0,ge=!!S.alphaHash,ve=!!S.extensions,Ue=!!$.attributes.uv1,Pe=!!$.attributes.uv2,st=!!$.attributes.uv3;let at=wi;return S.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(at=t.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ce,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Le,instancing:Re,instancingColor:Re&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ci,map:ye,matcap:Ve,envMap:y,envMapMode:y&&te.mapping,envMapCubeUVHeight:J,aoMap:U,lightMap:P,bumpMap:V,normalMap:z,displacementMap:d&&ne,emissiveMap:re,normalMapObjectSpace:z&&S.normalMapType===AE,normalMapTangentSpace:z&&S.normalMapType===bE,metalnessMap:T,roughnessMap:h,anisotropy:g,anisotropyMap:D,clearcoat:I,clearcoatMap:H,clearcoatNormalMap:le,clearcoatRoughnessMap:me,iridescence:N,iridescenceMap:se,iridescenceThicknessMap:Be,sheen:G,sheenColorMap:Te,sheenRoughnessMap:Ce,specularMap:be,specularColorMap:_e,specularIntensityMap:we,transmission:q,transmissionMap:Ke,thicknessMap:mt,gradientMap:Xe,opaque:S.transparent===!1&&S.blending===zr,alphaMap:de,alphaTest:F,alphaHash:ge,combine:S.combine,mapUv:ye&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:P&&v(S.lightMap.channel),bumpMapUv:V&&v(S.bumpMap.channel),normalMapUv:z&&v(S.normalMap.channel),displacementMapUv:ne&&v(S.displacementMap.channel),emissiveMapUv:re&&v(S.emissiveMap.channel),metalnessMapUv:T&&v(S.metalnessMap.channel),roughnessMapUv:h&&v(S.roughnessMap.channel),anisotropyMapUv:D&&v(S.anisotropyMap.channel),clearcoatMapUv:H&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(S.sheenRoughnessMap.channel),specularMapUv:be&&v(S.specularMap.channel),specularColorMapUv:_e&&v(S.specularColorMap.channel),specularIntensityMapUv:we&&v(S.specularIntensityMap.channel),transmissionMapUv:Ke&&v(S.transmissionMap.channel),thicknessMapUv:mt&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(z||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Pe,vertexUv3s:st,pointsUvs:ie.isPoints===!0&&!!$.attributes.uv&&(ye||de),fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ii,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)C.push(X),C.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(A(C,S),E(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function A(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function E(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const C=x[S.type];let X;if(C){const O=Fn[C];X=QE.clone(O.uniforms)}else X=S.uniforms;return X}function L(S,C){let X;for(let O=0,ie=c.length;O<ie;O++){const B=c[O];if(B.cacheKey===C){X=B,++X.usedTimes;break}}return X===void 0&&(X=new hT(t,C,S,s),c.push(X)),X}function b(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function k(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:k}}function vT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ET(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,m,x,v,_){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:_},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=_),e++,p}function o(f,d,m,x,v,_){const p=a(f,d,m,x,v,_);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function l(f,d,m,x,v,_){const p=a(f,d,m,x,v,_);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||ET),i.length>1&&i.sort(d||fd),r.length>1&&r.sort(d||fd)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function xT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new dd,t.set(i,[a])):r>=s.length?(a=new dd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ST(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new tt};break;case"SpotLight":n={position:new j,direction:new j,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function MT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yT=0;function TT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bT(t,e){const n=new ST,i=MT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new j);const s=new j,a=new wt,o=new wt;function l(u,f){let d=0,m=0,x=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let v=0,_=0,p=0,A=0,E=0,M=0,L=0,b=0,R=0,k=0,S=0;u.sort(TT);const C=f===!0?Math.PI:1;for(let O=0,ie=u.length;O<ie;O++){const B=u[O],$=B.color,Y=B.intensity,te=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=$.r*Y*C,m+=$.g*Y*C,x+=$.b*Y*C;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(B.sh.coefficients[ae],Y);S++}else if(B.isDirectionalLight){const ae=n.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const oe=B.shadow,ue=i.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.directionalShadow[v]=ue,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=B.shadow.matrix,M++}r.directional[v]=ae,v++}else if(B.isSpotLight){const ae=n.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy($).multiplyScalar(Y*C),ae.distance=te,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,r.spot[p]=ae;const oe=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,oe.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[p]=oe.matrix,B.castShadow){const ue=i.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.spotShadow[p]=ue,r.spotShadowMap[p]=J,b++}p++}else if(B.isRectAreaLight){const ae=n.get(B);ae.color.copy($).multiplyScalar(Y),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),r.rectArea[A]=ae,A++}else if(B.isPointLight){const ae=n.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity*C),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const oe=B.shadow,ue=i.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,r.pointShadow[_]=ue,r.pointShadowMap[_]=J,r.pointShadowMatrix[_]=B.shadow.matrix,L++}r.point[_]=ae,_++}else if(B.isHemisphereLight){const ae=n.get(B);ae.skyColor.copy(B.color).multiplyScalar(Y*C),ae.groundColor.copy(B.groundColor).multiplyScalar(Y*C),r.hemi[E]=ae,E++}}A>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==v||X.pointLength!==_||X.spotLength!==p||X.rectAreaLength!==A||X.hemiLength!==E||X.numDirectionalShadows!==M||X.numPointShadows!==L||X.numSpotShadows!==b||X.numSpotMaps!==R||X.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=A,r.point.length=_,r.hemi.length=E,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+R-k,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=S,X.directionalLength=v,X.pointLength=_,X.spotLength=p,X.rectAreaLength=A,X.hemiLength=E,X.numDirectionalShadows=M,X.numPointShadows=L,X.numSpotShadows=b,X.numSpotMaps=R,X.numLightProbes=S,r.version=yT++)}function c(u,f){let d=0,m=0,x=0,v=0,_=0;const p=f.matrixWorldInverse;for(let A=0,E=u.length;A<E;A++){const M=u[A];if(M.isDirectionalLight){const L=r.directional[d];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),d++}else if(M.isSpotLight){const L=r.spot[x];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),x++}else if(M.isRectAreaLight){const L=r.rectArea[v];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const L=r.hemi[_];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(p),_++}}}return{setup:l,setupView:c,state:r}}function hd(t,e){const n=new bT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function AT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new hd(t,e),n.set(s,[l])):a>=o.length?(l=new hd(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class RT extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CT extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PT(t,e,n){let i=new Np;const r=new je,s=new je,a=new Ut,o=new RT({depthPacking:TE}),l=new CT,c={},u=n.maxTextureSize,f={[Oi]:nn,[nn]:Oi,[ii]:ii},d=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:wT,fragmentShader:LT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new fi;x.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Hn(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let p=this.type;this.render=function(b,R,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const S=t.getRenderTarget(),C=t.getActiveCubeFace(),X=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const ie=p!==Qn&&this.type===Qn,B=p===Qn&&this.type!==Qn;for(let $=0,Y=b.length;$<Y;$++){const te=b[$],J=te.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ae=J.getFrameExtents();if(r.multiply(ae),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,J.mapSize.y=s.y)),J.map===null||ie===!0||B===!0){const ue=this.type!==Qn?{minFilter:jt,magFilter:jt}:{};J.map!==null&&J.map.dispose(),J.map=new cr(r.x,r.y,ue),J.map.texture.name=te.name+".shadowMap",J.camera.updateProjectionMatrix()}t.setRenderTarget(J.map),t.clear();const oe=J.getViewportCount();for(let ue=0;ue<oe;ue++){const fe=J.getViewport(ue);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),O.viewport(a),J.updateMatrices(te,ue),i=J.getFrustum(),M(R,k,J.camera,te,this.type)}J.isPointLightShadow!==!0&&this.type===Qn&&A(J,k),J.needsUpdate=!1}p=this.type,_.needsUpdate=!1,t.setRenderTarget(S,C,X)};function A(b,R){const k=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,k,d,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,k,m,v,null)}function E(b,R,k,S){let C=null;const X=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(X!==void 0)C=X;else if(C=k.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=C.uuid,ie=R.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let $=B[ie];$===void 0&&($=C.clone(),B[ie]=$,R.addEventListener("dispose",L)),C=$}if(C.visible=R.visible,C.wireframe=R.wireframe,S===Qn?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=t.properties.get(C);O.light=k}return C}function M(b,R,k,S,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Qn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const ie=e.update(b),B=b.material;if(Array.isArray(B)){const $=ie.groups;for(let Y=0,te=$.length;Y<te;Y++){const J=$[Y],ae=B[J.materialIndex];if(ae&&ae.visible){const oe=E(b,ae,S,C);b.onBeforeShadow(t,b,R,k,ie,oe,J),t.renderBufferDirect(k,null,ie,oe,b,J),b.onAfterShadow(t,b,R,k,ie,oe,J)}}}else if(B.visible){const $=E(b,B,S,C);b.onBeforeShadow(t,b,R,k,ie,$,null),t.renderBufferDirect(k,null,ie,$,b,null),b.onAfterShadow(t,b,R,k,ie,$,null)}}const O=b.children;for(let ie=0,B=O.length;ie<B;ie++)M(O[ie],R,k,S,C)}function L(b){b.target.removeEventListener("dispose",L);for(const k in c){const S=c[k],C=b.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function IT(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const ge=new Ut;let ve=null;const Ue=new Ut(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!F&&(t.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){F=Pe},setClear:function(Pe,st,at,Tt,zt){zt===!0&&(Pe*=Tt,st*=Tt,at*=Tt),ge.set(Pe,st,at,Tt),Ue.equals(ge)===!1&&(t.clearColor(Pe,st,at,Tt),Ue.copy(ge))},reset:function(){F=!1,ve=null,Ue.set(-1,0,0,0)}}}function s(){let F=!1,ge=null,ve=null,Ue=null;return{setTest:function(Pe){Pe?Le(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Pe){ge!==Pe&&!F&&(t.depthMask(Pe),ge=Pe)},setFunc:function(Pe){if(ve!==Pe){switch(Pe){case Q0:t.depthFunc(t.NEVER);break;case eE:t.depthFunc(t.ALWAYS);break;case tE:t.depthFunc(t.LESS);break;case Oa:t.depthFunc(t.LEQUAL);break;case nE:t.depthFunc(t.EQUAL);break;case iE:t.depthFunc(t.GEQUAL);break;case rE:t.depthFunc(t.GREATER);break;case sE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Pe}},setLocked:function(Pe){F=Pe},setClear:function(Pe){Ue!==Pe&&(t.clearDepth(Pe),Ue=Pe)},reset:function(){F=!1,ge=null,ve=null,Ue=null}}}function a(){let F=!1,ge=null,ve=null,Ue=null,Pe=null,st=null,at=null,Tt=null,zt=null;return{setTest:function(ot){F||(ot?Le(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(ot){ge!==ot&&!F&&(t.stencilMask(ot),ge=ot)},setFunc:function(ot,Wt,Dn){(ve!==ot||Ue!==Wt||Pe!==Dn)&&(t.stencilFunc(ot,Wt,Dn),ve=ot,Ue=Wt,Pe=Dn)},setOp:function(ot,Wt,Dn){(st!==ot||at!==Wt||Tt!==Dn)&&(t.stencilOp(ot,Wt,Dn),st=ot,at=Wt,Tt=Dn)},setLocked:function(ot){F=ot},setClear:function(ot){zt!==ot&&(t.clearStencil(ot),zt=ot)},reset:function(){F=!1,ge=null,ve=null,Ue=null,Pe=null,st=null,at=null,Tt=null,zt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],_=null,p=!1,A=null,E=null,M=null,L=null,b=null,R=null,k=null,S=new tt(0,0,0),C=0,X=!1,O=null,ie=null,B=null,$=null,Y=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ae=0;const oe=t.getParameter(t.VERSION);oe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(oe)[1]),J=ae>=1):oe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),J=ae>=2);let ue=null,fe={};const ee=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),pe=new Ut().fromArray(ee),Se=new Ut().fromArray(ce);function Me(F,ge,ve,Ue){const Pe=new Uint8Array(4),st=t.createTexture();t.bindTexture(F,st),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<ve;at++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(ge+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return st}const Re={};Re[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(t.DEPTH_TEST),l.setFunc(Oa),re(!1),T(qu),Le(t.CULL_FACE),z(Ci);function Le(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function ye(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Ve(F,ge){return m[F]!==ge?(t.bindFramebuffer(F,ge),m[F]=ge,i&&(F===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ge),F===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function y(F,ge){let ve=v,Ue=!1;if(F)if(ve=x.get(ge),ve===void 0&&(ve=[],x.set(ge,ve)),F.isWebGLMultipleRenderTargets){const Pe=F.texture;if(ve.length!==Pe.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let st=0,at=Pe.length;st<at;st++)ve[st]=t.COLOR_ATTACHMENT0+st;ve.length=Pe.length,Ue=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,Ue=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function U(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const P={[ir]:t.FUNC_ADD,[B0]:t.FUNC_SUBTRACT,[H0]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Ju]=t.MIN,P[Qu]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(P[Ju]=F.MIN_EXT,P[Qu]=F.MAX_EXT)}const V={[k0]:t.ZERO,[G0]:t.ONE,[V0]:t.SRC_COLOR,[wl]:t.SRC_ALPHA,[q0]:t.SRC_ALPHA_SATURATE,[Y0]:t.DST_COLOR,[W0]:t.DST_ALPHA,[z0]:t.ONE_MINUS_SRC_COLOR,[Ll]:t.ONE_MINUS_SRC_ALPHA,[$0]:t.ONE_MINUS_DST_COLOR,[X0]:t.ONE_MINUS_DST_ALPHA,[j0]:t.CONSTANT_COLOR,[K0]:t.ONE_MINUS_CONSTANT_COLOR,[Z0]:t.CONSTANT_ALPHA,[J0]:t.ONE_MINUS_CONSTANT_ALPHA};function z(F,ge,ve,Ue,Pe,st,at,Tt,zt,ot){if(F===Ci){p===!0&&(ye(t.BLEND),p=!1);return}if(p===!1&&(Le(t.BLEND),p=!0),F!==F0){if(F!==A||ot!==X){if((E!==ir||b!==ir)&&(t.blendEquation(t.FUNC_ADD),E=ir,b=ir),ot)switch(F){case zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ju:t.blendFunc(t.ONE,t.ONE);break;case Ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ju:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,L=null,R=null,k=null,S.set(0,0,0),C=0,A=F,X=ot}return}Pe=Pe||ge,st=st||ve,at=at||Ue,(ge!==E||Pe!==b)&&(t.blendEquationSeparate(P[ge],P[Pe]),E=ge,b=Pe),(ve!==M||Ue!==L||st!==R||at!==k)&&(t.blendFuncSeparate(V[ve],V[Ue],V[st],V[at]),M=ve,L=Ue,R=st,k=at),(Tt.equals(S)===!1||zt!==C)&&(t.blendColor(Tt.r,Tt.g,Tt.b,zt),S.copy(Tt),C=zt),A=F,X=!1}function ne(F,ge){F.side===ii?ye(t.CULL_FACE):Le(t.CULL_FACE);let ve=F.side===nn;ge&&(ve=!ve),re(ve),F.blending===zr&&F.transparent===!1?z(Ci):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Ue=F.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),g(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Le(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){O!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),O=F)}function T(F){F!==N0?(Le(t.CULL_FACE),F!==ie&&(F===qu?t.cullFace(t.BACK):F===U0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),ie=F}function h(F){F!==B&&(J&&t.lineWidth(F),B=F)}function g(F,ge,ve){F?(Le(t.POLYGON_OFFSET_FILL),($!==ge||Y!==ve)&&(t.polygonOffset(ge,ve),$=ge,Y=ve)):ye(t.POLYGON_OFFSET_FILL)}function I(F){F?Le(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function N(F){F===void 0&&(F=t.TEXTURE0+te-1),ue!==F&&(t.activeTexture(F),ue=F)}function G(F,ge,ve){ve===void 0&&(ue===null?ve=t.TEXTURE0+te-1:ve=ue);let Ue=fe[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},fe[ve]=Ue),(Ue.type!==F||Ue.texture!==ge)&&(ue!==ve&&(t.activeTexture(ve),ue=ve),t.bindTexture(F,ge||Re[F]),Ue.type=F,Ue.texture=ge)}function q(){const F=fe[ue];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function D(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){pe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function Ke(F){Se.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Se.copy(F))}function mt(F,ge){let ve=f.get(ge);ve===void 0&&(ve=new WeakMap,f.set(ge,ve));let Ue=ve.get(F);Ue===void 0&&(Ue=t.getUniformBlockIndex(ge,F.name),ve.set(F,Ue))}function Xe(F,ge){const Ue=f.get(ge).get(F);u.get(ge)!==Ue&&(t.uniformBlockBinding(ge,Ue,F.__bindingPointIndex),u.set(ge,Ue))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ue=null,fe={},m={},x=new WeakMap,v=[],_=null,p=!1,A=null,E=null,M=null,L=null,b=null,R=null,k=null,S=new tt(0,0,0),C=0,X=!1,O=null,ie=null,B=null,$=null,Y=null,pe.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:ye,bindFramebuffer:Ve,drawBuffers:y,useProgram:U,setBlending:z,setMaterial:ne,setFlipSided:re,setCullFace:T,setLineWidth:h,setPolygonOffset:g,setScissorTest:I,activeTexture:N,bindTexture:G,unbindTexture:q,compressedTexImage2D:D,compressedTexImage3D:H,texImage2D:be,texImage3D:_e,updateUBOMapping:mt,uniformBlockBinding:Xe,texStorage2D:Te,texStorage3D:Ce,texSubImage2D:le,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:Be,scissor:we,viewport:Ke,reset:de}}function DT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,h){return m?new OffscreenCanvas(T,h):Ds("canvas")}function v(T,h,g,I){let N=1;if((T.width>I||T.height>I)&&(N=I/Math.max(T.width,T.height)),N<1||h===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const G=h?Bl:Math.floor,q=G(N*T.width),D=G(N*T.height);f===void 0&&(f=x(q,D));const H=g?x(q,D):f;return H.width=q,H.height=D,H.getContext("2d").drawImage(T,0,0,q,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+q+"x"+D+")."),H}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return wf(T.width)&&wf(T.height)}function p(T){return o?!1:T.wrapS!==bn||T.wrapT!==bn||T.minFilter!==jt&&T.minFilter!==mn}function A(T,h){return T.generateMipmaps&&h&&T.minFilter!==jt&&T.minFilter!==mn}function E(T){t.generateMipmap(T)}function M(T,h,g,I,N=!1){if(o===!1)return h;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=h;if(h===t.RED&&(g===t.FLOAT&&(G=t.R32F),g===t.HALF_FLOAT&&(G=t.R16F),g===t.UNSIGNED_BYTE&&(G=t.R8)),h===t.RED_INTEGER&&(g===t.UNSIGNED_BYTE&&(G=t.R8UI),g===t.UNSIGNED_SHORT&&(G=t.R16UI),g===t.UNSIGNED_INT&&(G=t.R32UI),g===t.BYTE&&(G=t.R8I),g===t.SHORT&&(G=t.R16I),g===t.INT&&(G=t.R32I)),h===t.RG&&(g===t.FLOAT&&(G=t.RG32F),g===t.HALF_FLOAT&&(G=t.RG16F),g===t.UNSIGNED_BYTE&&(G=t.RG8)),h===t.RGBA){const q=N?Fa:nt.getTransfer(I);g===t.FLOAT&&(G=t.RGBA32F),g===t.HALF_FLOAT&&(G=t.RGBA16F),g===t.UNSIGNED_BYTE&&(G=q===ft?t.SRGB8_ALPHA8:t.RGBA8),g===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),g===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function L(T,h,g){return A(T,g)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==mn?Math.log2(Math.max(h.width,h.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?h.mipmaps.length:1}function b(T){return T===jt||T===ef||T===wo?t.NEAREST:t.LINEAR}function R(T){const h=T.target;h.removeEventListener("dispose",R),S(h),h.isVideoTexture&&u.delete(h)}function k(T){const h=T.target;h.removeEventListener("dispose",k),X(h)}function S(T){const h=i.get(T);if(h.__webglInit===void 0)return;const g=T.source,I=d.get(g);if(I){const N=I[h.__cacheKey];N.usedTimes--,N.usedTimes===0&&C(T),Object.keys(I).length===0&&d.delete(g)}i.remove(T)}function C(T){const h=i.get(T);t.deleteTexture(h.__webglTexture);const g=T.source,I=d.get(g);delete I[h.__cacheKey],a.memory.textures--}function X(T){const h=T.texture,g=i.get(T),I=i.get(h);if(I.__webglTexture!==void 0&&(t.deleteTexture(I.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(g.__webglFramebuffer[N]))for(let G=0;G<g.__webglFramebuffer[N].length;G++)t.deleteFramebuffer(g.__webglFramebuffer[N][G]);else t.deleteFramebuffer(g.__webglFramebuffer[N]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[N])}else{if(Array.isArray(g.__webglFramebuffer))for(let N=0;N<g.__webglFramebuffer.length;N++)t.deleteFramebuffer(g.__webglFramebuffer[N]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let N=0;N<g.__webglColorRenderbuffer.length;N++)g.__webglColorRenderbuffer[N]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[N]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let N=0,G=h.length;N<G;N++){const q=i.get(h[N]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(h[N])}i.remove(h),i.remove(T)}let O=0;function ie(){O=0}function B(){const T=O;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),O+=1,T}function $(T){const h=[];return h.push(T.wrapS),h.push(T.wrapT),h.push(T.wrapR||0),h.push(T.magFilter),h.push(T.minFilter),h.push(T.anisotropy),h.push(T.internalFormat),h.push(T.format),h.push(T.type),h.push(T.generateMipmaps),h.push(T.premultiplyAlpha),h.push(T.flipY),h.push(T.unpackAlignment),h.push(T.colorSpace),h.join()}function Y(T,h){const g=i.get(T);if(T.isVideoTexture&&ne(T),T.isRenderTargetTexture===!1&&T.version>0&&g.__version!==T.version){const I=T.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(g,T,h);return}}n.bindTexture(t.TEXTURE_2D,g.__webglTexture,t.TEXTURE0+h)}function te(T,h){const g=i.get(T);if(T.version>0&&g.__version!==T.version){pe(g,T,h);return}n.bindTexture(t.TEXTURE_2D_ARRAY,g.__webglTexture,t.TEXTURE0+h)}function J(T,h){const g=i.get(T);if(T.version>0&&g.__version!==T.version){pe(g,T,h);return}n.bindTexture(t.TEXTURE_3D,g.__webglTexture,t.TEXTURE0+h)}function ae(T,h){const g=i.get(T);if(T.version>0&&g.__version!==T.version){Se(g,T,h);return}n.bindTexture(t.TEXTURE_CUBE_MAP,g.__webglTexture,t.TEXTURE0+h)}const oe={[Dl]:t.REPEAT,[bn]:t.CLAMP_TO_EDGE,[Nl]:t.MIRRORED_REPEAT},ue={[jt]:t.NEAREST,[ef]:t.NEAREST_MIPMAP_NEAREST,[wo]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[pE]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},fe={[RE]:t.NEVER,[DE]:t.ALWAYS,[CE]:t.LESS,[Mp]:t.LEQUAL,[wE]:t.EQUAL,[IE]:t.GEQUAL,[LE]:t.GREATER,[PE]:t.NOTEQUAL};function ee(T,h,g){if(g?(t.texParameteri(T,t.TEXTURE_WRAP_S,oe[h.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,oe[h.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,oe[h.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ue[h.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ue[h.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(h.wrapS!==bn||h.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,b(h.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,b(h.minFilter)),h.minFilter!==jt&&h.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),h.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,fe[h.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");if(h.magFilter===jt||h.minFilter!==wo&&h.minFilter!==Ps||h.type===bi&&e.has("OES_texture_float_linear")===!1||o===!1&&h.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(h.anisotropy>1||i.get(h).__currentAnisotropy)&&(t.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),i.get(h).__currentAnisotropy=h.anisotropy)}}function ce(T,h){let g=!1;T.__webglInit===void 0&&(T.__webglInit=!0,h.addEventListener("dispose",R));const I=h.source;let N=d.get(I);N===void 0&&(N={},d.set(I,N));const G=$(h);if(G!==T.__cacheKey){N[G]===void 0&&(N[G]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,g=!0),N[G].usedTimes++;const q=N[T.__cacheKey];q!==void 0&&(N[T.__cacheKey].usedTimes--,q.usedTimes===0&&C(h)),T.__cacheKey=G,T.__webglTexture=N[G].texture}return g}function pe(T,h,g){let I=t.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(I=t.TEXTURE_2D_ARRAY),h.isData3DTexture&&(I=t.TEXTURE_3D);const N=ce(T,h),G=h.source;n.bindTexture(I,T.__webglTexture,t.TEXTURE0+g);const q=i.get(G);if(G.version!==q.__version||N===!0){n.activeTexture(t.TEXTURE0+g);const D=nt.getPrimaries(nt.workingColorSpace),H=h.colorSpace===vn?null:nt.getPrimaries(h.colorSpace),le=h.colorSpace===vn||D===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const me=p(h)&&_(h.image)===!1;let se=v(h.image,me,!1,r.maxTextureSize);se=re(h,se);const Be=_(se)||o,Te=s.convert(h.format,h.colorSpace);let Ce=s.convert(h.type),be=M(h.internalFormat,Te,Ce,h.colorSpace,h.isVideoTexture);ee(I,h,Be);let _e;const we=h.mipmaps,Ke=o&&h.isVideoTexture!==!0&&be!==xp,mt=q.__version===void 0||N===!0,Xe=L(h,se,Be);if(h.isDepthTexture)be=t.DEPTH_COMPONENT,o?h.type===bi?be=t.DEPTH_COMPONENT32F:h.type===Ti?be=t.DEPTH_COMPONENT24:h.type===ar?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:h.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),h.format===or&&be===t.DEPTH_COMPONENT&&h.type!==Ec&&h.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),h.type=Ti,Ce=s.convert(h.type)),h.format===Kr&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,h.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),h.type=ar,Ce=s.convert(h.type))),mt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Te,Ce,null));else if(h.isDataTexture)if(we.length>0&&Be){Ke&&mt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,we[0].width,we[0].height);for(let de=0,F=we.length;de<F;de++)_e=we[de],Ke?n.texSubImage2D(t.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,de,be,_e.width,_e.height,0,Te,Ce,_e.data);h.generateMipmaps=!1}else Ke?(mt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Te,Ce,se.data)):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Te,Ce,se.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){Ke&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,be,we[0].width,we[0].height,se.depth);for(let de=0,F=we.length;de<F;de++)_e=we[de],h.format!==An?Te!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,se.depth,Te,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,be,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,se.depth,Te,Ce,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,be,_e.width,_e.height,se.depth,0,Te,Ce,_e.data)}else{Ke&&mt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,we[0].width,we[0].height);for(let de=0,F=we.length;de<F;de++)_e=we[de],h.format!==An?Te!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,de,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,de,be,_e.width,_e.height,0,Te,Ce,_e.data)}else if(h.isDataArrayTexture)Ke?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,be,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,Ce,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,Te,Ce,se.data);else if(h.isData3DTexture)Ke?(mt&&n.texStorage3D(t.TEXTURE_3D,Xe,be,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,Ce,se.data)):n.texImage3D(t.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,Te,Ce,se.data);else if(h.isFramebufferTexture){if(mt)if(Ke)n.texStorage2D(t.TEXTURE_2D,Xe,be,se.width,se.height);else{let de=se.width,F=se.height;for(let ge=0;ge<Xe;ge++)n.texImage2D(t.TEXTURE_2D,ge,be,de,F,0,Te,Ce,null),de>>=1,F>>=1}}else if(we.length>0&&Be){Ke&&mt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,we[0].width,we[0].height);for(let de=0,F=we.length;de<F;de++)_e=we[de],Ke?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Te,Ce,_e):n.texImage2D(t.TEXTURE_2D,de,be,Te,Ce,_e);h.generateMipmaps=!1}else Ke?(mt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ce,se)):n.texImage2D(t.TEXTURE_2D,0,be,Te,Ce,se);A(h,Be)&&E(I),q.__version=G.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function Se(T,h,g){if(h.image.length!==6)return;const I=ce(T,h),N=h.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+g);const G=i.get(N);if(N.version!==G.__version||I===!0){n.activeTexture(t.TEXTURE0+g);const q=nt.getPrimaries(nt.workingColorSpace),D=h.colorSpace===vn?null:nt.getPrimaries(h.colorSpace),H=h.colorSpace===vn||q===D?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const le=h.isCompressedTexture||h.image[0].isCompressedTexture,me=h.image[0]&&h.image[0].isDataTexture,se=[];for(let de=0;de<6;de++)!le&&!me?se[de]=v(h.image[de],!1,!0,r.maxCubemapSize):se[de]=me?h.image[de].image:h.image[de],se[de]=re(h,se[de]);const Be=se[0],Te=_(Be)||o,Ce=s.convert(h.format,h.colorSpace),be=s.convert(h.type),_e=M(h.internalFormat,Ce,be,h.colorSpace),we=o&&h.isVideoTexture!==!0,Ke=G.__version===void 0||I===!0;let mt=L(h,Be,Te);ee(t.TEXTURE_CUBE_MAP,h,Te);let Xe;if(le){we&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,_e,Be.width,Be.height);for(let de=0;de<6;de++){Xe=se[de].mipmaps;for(let F=0;F<Xe.length;F++){const ge=Xe[F];h.format!==An?Ce!==null?we?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,0,0,ge.width,ge.height,Ce,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,0,0,ge.width,ge.height,Ce,be,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,_e,ge.width,ge.height,0,Ce,be,ge.data)}}}else{Xe=h.mipmaps,we&&Ke&&(Xe.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,_e,se[0].width,se[0].height));for(let de=0;de<6;de++)if(me){we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,se[de].width,se[de].height,Ce,be,se[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_e,se[de].width,se[de].height,0,Ce,be,se[de].data);for(let F=0;F<Xe.length;F++){const ve=Xe[F].image[de].image;we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,0,0,ve.width,ve.height,Ce,be,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,_e,ve.width,ve.height,0,Ce,be,ve.data)}}else{we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ce,be,se[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_e,Ce,be,se[de]);for(let F=0;F<Xe.length;F++){const ge=Xe[F];we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,0,0,Ce,be,ge.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,_e,Ce,be,ge.image[de])}}}A(h,Te)&&E(t.TEXTURE_CUBE_MAP),G.__version=N.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function Me(T,h,g,I,N,G){const q=s.convert(g.format,g.colorSpace),D=s.convert(g.type),H=M(g.internalFormat,q,D,g.colorSpace);if(!i.get(h).__hasExternalTextures){const me=Math.max(1,h.width>>G),se=Math.max(1,h.height>>G);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,G,H,me,se,h.depth,0,q,D,null):n.texImage2D(N,G,H,me,se,0,q,D,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),z(h)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,I,N,i.get(g).__webglTexture,0,V(h)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,I,N,i.get(g).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(T,h,g){if(t.bindRenderbuffer(t.RENDERBUFFER,T),h.depthBuffer&&!h.stencilBuffer){let I=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(g||z(h)){const N=h.depthTexture;N&&N.isDepthTexture&&(N.type===bi?I=t.DEPTH_COMPONENT32F:N.type===Ti&&(I=t.DEPTH_COMPONENT24));const G=V(h);z(h)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,I,h.width,h.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,G,I,h.width,h.height)}else t.renderbufferStorage(t.RENDERBUFFER,I,h.width,h.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(h.depthBuffer&&h.stencilBuffer){const I=V(h);g&&z(h)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,I,t.DEPTH24_STENCIL8,h.width,h.height):z(h)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I,t.DEPTH24_STENCIL8,h.width,h.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,h.width,h.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const I=h.isWebGLMultipleRenderTargets===!0?h.texture:[h.texture];for(let N=0;N<I.length;N++){const G=I[N],q=s.convert(G.format,G.colorSpace),D=s.convert(G.type),H=M(G.internalFormat,q,D,G.colorSpace),le=V(h);g&&z(h)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,H,h.width,h.height):z(h)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,H,h.width,h.height):t.renderbufferStorage(t.RENDERBUFFER,H,h.width,h.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(T,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(h.depthTexture).__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),Y(h.depthTexture,0);const I=i.get(h.depthTexture).__webglTexture,N=V(h);if(h.depthTexture.format===or)z(h)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,I,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,I,0);else if(h.depthTexture.format===Kr)z(h)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,I,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function ye(T){const h=i.get(T),g=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!h.__autoAllocateDepthBuffer){if(g)throw new Error("target.depthTexture not supported in Cube render targets");Le(h.__webglFramebuffer,T)}else if(g){h.__webglDepthbuffer=[];for(let I=0;I<6;I++)n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer[I]),h.__webglDepthbuffer[I]=t.createRenderbuffer(),Re(h.__webglDepthbuffer[I],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer=t.createRenderbuffer(),Re(h.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(T,h,g){const I=i.get(T);h!==void 0&&Me(I.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),g!==void 0&&ye(T)}function y(T){const h=T.texture,g=i.get(T),I=i.get(h);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(I.__webglTexture===void 0&&(I.__webglTexture=t.createTexture()),I.__version=h.version,a.memory.textures++);const N=T.isWebGLCubeRenderTarget===!0,G=T.isWebGLMultipleRenderTargets===!0,q=_(T)||o;if(N){g.__webglFramebuffer=[];for(let D=0;D<6;D++)if(o&&h.mipmaps&&h.mipmaps.length>0){g.__webglFramebuffer[D]=[];for(let H=0;H<h.mipmaps.length;H++)g.__webglFramebuffer[D][H]=t.createFramebuffer()}else g.__webglFramebuffer[D]=t.createFramebuffer()}else{if(o&&h.mipmaps&&h.mipmaps.length>0){g.__webglFramebuffer=[];for(let D=0;D<h.mipmaps.length;D++)g.__webglFramebuffer[D]=t.createFramebuffer()}else g.__webglFramebuffer=t.createFramebuffer();if(G)if(r.drawBuffers){const D=T.texture;for(let H=0,le=D.length;H<le;H++){const me=i.get(D[H]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&z(T)===!1){const D=G?h:[h];g.__webglMultisampledFramebuffer=t.createFramebuffer(),g.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let H=0;H<D.length;H++){const le=D[H];g.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,g.__webglColorRenderbuffer[H]);const me=s.convert(le.format,le.colorSpace),se=s.convert(le.type),Be=M(le.internalFormat,me,se,le.colorSpace,T.isXRRenderTarget===!0),Te=V(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,Be,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,g.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(g.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(g.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture),ee(t.TEXTURE_CUBE_MAP,h,q);for(let D=0;D<6;D++)if(o&&h.mipmaps&&h.mipmaps.length>0)for(let H=0;H<h.mipmaps.length;H++)Me(g.__webglFramebuffer[D][H],T,h,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+D,H);else Me(g.__webglFramebuffer[D],T,h,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);A(h,q)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(G){const D=T.texture;for(let H=0,le=D.length;H<le;H++){const me=D[H],se=i.get(me);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ee(t.TEXTURE_2D,me,q),Me(g.__webglFramebuffer,T,me,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D,0),A(me,q)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let D=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?D=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(D,I.__webglTexture),ee(D,h,q),o&&h.mipmaps&&h.mipmaps.length>0)for(let H=0;H<h.mipmaps.length;H++)Me(g.__webglFramebuffer[H],T,h,t.COLOR_ATTACHMENT0,D,H);else Me(g.__webglFramebuffer,T,h,t.COLOR_ATTACHMENT0,D,0);A(h,q)&&E(D),n.unbindTexture()}T.depthBuffer&&ye(T)}function U(T){const h=_(T)||o,g=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let I=0,N=g.length;I<N;I++){const G=g[I];if(A(G,h)){const q=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,D=i.get(G).__webglTexture;n.bindTexture(q,D),E(q),n.unbindTexture()}}}function P(T){if(o&&T.samples>0&&z(T)===!1){const h=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],g=T.width,I=T.height;let N=t.COLOR_BUFFER_BIT;const G=[],q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=i.get(T),H=T.isWebGLMultipleRenderTargets===!0;if(H)for(let le=0;le<h.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let le=0;le<h.length;le++){G.push(t.COLOR_ATTACHMENT0+le),T.depthBuffer&&G.push(q);const me=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(me===!1&&(T.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),H&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,D.__webglColorRenderbuffer[le]),me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[q]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[q])),H){const se=i.get(h[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,g,I,0,0,g,I,N,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let le=0;le<h.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const me=i.get(h[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}}function V(T){return Math.min(r.maxSamples,T.samples)}function z(T){const h=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function ne(T){const h=a.render.frame;u.get(T)!==h&&(u.set(T,h),T.update())}function re(T,h){const g=T.colorSpace,I=T.format,N=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ol||g!==ci&&g!==vn&&(nt.getTransfer(g)===ft?o===!1?e.has("EXT_sRGB")===!0&&I===An?(T.format=Ol,T.minFilter=mn,T.generateMipmaps=!1):h=Tp.sRGBToLinear(h):(I!==An||N!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",g)),h}this.allocateTextureUnit=B,this.resetTextureUnits=ie,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=ae,this.rebindTextures=Ve,this.setupRenderTarget=y,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=z}function NT(t,e,n){const i=n.isWebGL2;function r(s,a=vn){let o;const l=nt.getTransfer(a);if(s===Li)return t.UNSIGNED_BYTE;if(s===mp)return t.UNSIGNED_SHORT_4_4_4_4;if(s===_p)return t.UNSIGNED_SHORT_5_5_5_1;if(s===mE)return t.BYTE;if(s===_E)return t.SHORT;if(s===Ec)return t.UNSIGNED_SHORT;if(s===pp)return t.INT;if(s===Ti)return t.UNSIGNED_INT;if(s===bi)return t.FLOAT;if(s===Is)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gE)return t.ALPHA;if(s===An)return t.RGBA;if(s===vE)return t.LUMINANCE;if(s===EE)return t.LUMINANCE_ALPHA;if(s===or)return t.DEPTH_COMPONENT;if(s===Kr)return t.DEPTH_STENCIL;if(s===Ol)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xE)return t.RED;if(s===gp)return t.RED_INTEGER;if(s===SE)return t.RG;if(s===vp)return t.RG_INTEGER;if(s===Ep)return t.RGBA_INTEGER;if(s===Lo||s===Po||s===Io||s===Do)if(l===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Lo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Do)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Lo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Io)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Do)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tf||s===nf||s===rf||s===sf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===tf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===af||s===of)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===af)return l===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===of)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lf||s===cf||s===uf||s===ff||s===df||s===hf||s===pf||s===mf||s===_f||s===gf||s===vf||s===Ef||s===xf||s===Sf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===lf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ff)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===df)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_f)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ef)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sf)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===No||s===Mf||s===yf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===No)return l===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ME||s===Tf||s===bf||s===Af)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===No)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Tf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Af)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ar?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class UT extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class va extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OT={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const _=n.getJointPose(v,i),p=this._getHandJoint(c,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class FT extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const v=n.getContextAttributes();let _=null,p=null;const A=[],E=[],M=new je;let L=null;const b=new Tn;b.layers.enable(1),b.viewport=new Ut;const R=new Tn;R.layers.enable(2),R.viewport=new Ut;const k=[b,R],S=new UT;S.layers.enable(1),S.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=A[ee];return ce===void 0&&(ce=new sl,A[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=A[ee];return ce===void 0&&(ce=new sl,A[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=A[ee];return ce===void 0&&(ce=new sl,A[ee]=ce),ce.getHandSpace()};function O(ee){const ce=E.indexOf(ee.inputSource);if(ce===-1)return;const pe=A[ce];pe!==void 0&&(pe.update(ee.inputSource,ee.frame,c||a),pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",B);for(let ee=0;ee<A.length;ee++){const ce=E[ee];ce!==null&&(E[ee]=null,A[ee].disconnect(ce))}C=null,X=null,e.setRenderTarget(_),m=null,d=null,f=null,r=null,p=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new cr(m.framebufferWidth,m.framebufferHeight,{format:An,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,pe=null,Se=null;v.depth&&(Se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=v.stencil?Kr:or,pe=v.stencil?ar:Ti);const Me={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new cr(d.textureWidth,d.textureHeight,{format:An,type:Li,depthTexture:new Fp(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(ee){for(let ce=0;ce<ee.removed.length;ce++){const pe=ee.removed[ce],Se=E.indexOf(pe);Se>=0&&(E[Se]=null,A[Se].disconnect(pe))}for(let ce=0;ce<ee.added.length;ce++){const pe=ee.added[ce];let Se=E.indexOf(pe);if(Se===-1){for(let Re=0;Re<A.length;Re++)if(Re>=E.length){E.push(pe),Se=Re;break}else if(E[Re]===null){E[Re]=pe,Se=Re;break}if(Se===-1)break}const Me=A[Se];Me&&Me.connect(pe)}}const $=new j,Y=new j;function te(ee,ce,pe){$.setFromMatrixPosition(ce.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const Se=$.distanceTo(Y),Me=ce.projectionMatrix.elements,Re=pe.projectionMatrix.elements,Le=Me[14]/(Me[10]-1),ye=Me[14]/(Me[10]+1),Ve=(Me[9]+1)/Me[5],y=(Me[9]-1)/Me[5],U=(Me[8]-1)/Me[0],P=(Re[8]+1)/Re[0],V=Le*U,z=Le*P,ne=Se/(-U+P),re=ne*-U;ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const T=Le+ne,h=ye+ne,g=V-re,I=z+(Se-re),N=Ve*ye/h*T,G=y*ye/h*T;ee.projectionMatrix.makePerspective(g,I,N,G,T,h),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function J(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;S.near=R.near=b.near=ee.near,S.far=R.far=b.far=ee.far,(C!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,X=S.far);const ce=ee.parent,pe=S.cameras;J(S,ce);for(let Se=0;Se<pe.length;Se++)J(pe[Se],ce);pe.length===2?te(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),ae(ee,S,ce)};function ae(ee,ce,pe){pe===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Fl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)};let oe=null;function ue(ee,ce){if(u=ce.getViewerPose(c||a),x=ce,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Se=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let Me=0;Me<pe.length;Me++){const Re=pe[Me];let Le=null;if(m!==null)Le=m.getViewport(Re);else{const Ve=f.getViewSubImage(d,Re);Le=Ve.viewport,Me===0&&(e.setRenderTargetTextures(p,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(p))}let ye=k[Me];ye===void 0&&(ye=new Tn,ye.layers.enable(Me),ye.viewport=new Ut,k[Me]=ye),ye.matrix.fromArray(Re.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Re.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Le.x,Le.y,Le.width,Le.height),Me===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(ye)}}for(let pe=0;pe<A.length;pe++){const Se=E[pe],Me=A[pe];Se!==null&&Me!==void 0&&Me.update(Se,ce,c||a)}oe&&oe(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),x=null}const fe=new Up;fe.setAnimationLoop(ue),this.setAnimationLoop=function(ee){oe=ee},this.dispose=function(){}}}function BT(t,e){function n(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,Pp(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,A,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&m(_,p,M)):p.isMeshMatcapMaterial?(s(_,p),x(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),v(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?l(_,p,A,E):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,n(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===nn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,n(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===nn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,n(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,n(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const A=e.get(p).envMap;if(A&&(_.envMap.value=A,_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const E=t._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*E,n(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,A,E){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*A,_.scale.value=E*.5,p.map&&(_.map.value=p.map,n(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,_.roughnessMapTransform)),e.get(p).envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,A){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){const A=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,E){const M=E.program;i.uniformBlockBinding(A,M)}function c(A,E){let M=r[A.id];M===void 0&&(x(A),M=u(A),r[A.id]=M,A.addEventListener("dispose",_));const L=E.program;i.updateUBOMapping(A,L);const b=e.render.frame;s[A.id]!==b&&(d(A),s[A.id]=b)}function u(A){const E=f();A.__bindingPointIndex=E;const M=t.createBuffer(),L=A.__size,b=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,M),M}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],M=A.uniforms,L=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let b=0,R=M.length;b<R;b++){const k=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,C=k.length;S<C;S++){const X=k[S];if(m(X,b,S,L)===!0){const O=X.__offset,ie=Array.isArray(X.value)?X.value:[X.value];let B=0;for(let $=0;$<ie.length;$++){const Y=ie[$],te=v(Y);typeof Y=="number"||typeof Y=="boolean"?(X.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,O+B,X.__data)):Y.isMatrix3?(X.__data[0]=Y.elements[0],X.__data[1]=Y.elements[1],X.__data[2]=Y.elements[2],X.__data[3]=0,X.__data[4]=Y.elements[3],X.__data[5]=Y.elements[4],X.__data[6]=Y.elements[5],X.__data[7]=0,X.__data[8]=Y.elements[6],X.__data[9]=Y.elements[7],X.__data[10]=Y.elements[8],X.__data[11]=0):(Y.toArray(X.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,X.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(A,E,M,L){const b=A.value,R=E+"_"+M;if(L[R]===void 0)return typeof b=="number"||typeof b=="boolean"?L[R]=b:L[R]=b.clone(),!0;{const k=L[R];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return L[R]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function x(A){const E=A.uniforms;let M=0;const L=16;for(let R=0,k=E.length;R<k;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let C=0,X=S.length;C<X;C++){const O=S[C],ie=Array.isArray(O.value)?O.value:[O.value];for(let B=0,$=ie.length;B<$;B++){const Y=ie[B],te=v(Y),J=M%L;J!==0&&L-J<te.boundary&&(M+=L-J),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=te.storage}}}const b=M%L;return b>0&&(M+=L-b),A.__size=M,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function _(A){const E=A.target;E.removeEventListener("dispose",_);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class zp{constructor(e={}){const{canvas:n=UE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,_=null;const p=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const E=this;let M=!1,L=0,b=0,R=null,k=-1,S=null;const C=new Ut,X=new Ut;let O=null;const ie=new tt(0);let B=0,$=n.width,Y=n.height,te=1,J=null,ae=null;const oe=new Ut(0,0,$,Y),ue=new Ut(0,0,$,Y);let fe=!1;const ee=new Np;let ce=!1,pe=!1,Se=null;const Me=new wt,Re=new je,Le=new j,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return R===null?te:1}let y=i;function U(w,W){for(let Z=0;Z<w.length;Z++){const Q=w[Z],K=n.getContext(Q,W);if(K!==null)return K}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vc}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",ge,!1),y===null){const W=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&W.shift(),y=U(W,w),y===null)throw U(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let P,V,z,ne,re,T,h,g,I,N,G,q,D,H,le,me,se,Be,Te,Ce,be,_e,we,Ke;function mt(){P=new jM(y),V=new zM(y,P,e),P.init(V),_e=new NT(y,P,V),z=new IT(y,P,V),ne=new JM(y),re=new vT,T=new DT(y,P,z,re,V,_e,ne),h=new XM(E),g=new qM(E),I=new ax(y,V),we=new GM(y,P,I,V),N=new KM(y,I,ne,we),G=new ny(y,N,I,ne),Te=new ty(y,V,T),me=new WM(re),q=new gT(E,h,g,P,V,we,me),D=new BT(E,re),H=new xT,le=new AT(P,V),Be=new kM(E,h,g,z,G,d,l),se=new PT(E,G,V),Ke=new HT(y,ne,V,z),Ce=new VM(y,P,ne,V),be=new ZM(y,P,ne,V),ne.programs=q.programs,E.capabilities=V,E.extensions=P,E.properties=re,E.renderLists=H,E.shadowMap=se,E.state=z,E.info=ne}mt();const Xe=new FT(E,y);this.xr=Xe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const w=P.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=P.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize($,Y,!1))},this.getSize=function(w){return w.set($,Y)},this.setSize=function(w,W,Z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,Y=W,n.width=Math.floor(w*te),n.height=Math.floor(W*te),Z===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set($*te,Y*te).floor()},this.setDrawingBufferSize=function(w,W,Z){$=w,Y=W,te=Z,n.width=Math.floor(w*Z),n.height=Math.floor(W*Z),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,W,Z,Q){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,W,Z,Q),z.viewport(C.copy(oe).multiplyScalar(te).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,W,Z,Q){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,W,Z,Q),z.scissor(X.copy(ue).multiplyScalar(te).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){z.setScissorTest(fe=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,W=!0,Z=!0){let Q=0;if(w){let K=!1;if(R!==null){const xe=R.texture.format;K=xe===Ep||xe===vp||xe===gp}if(K){const xe=R.texture.type,Ae=xe===Li||xe===Ti||xe===Ec||xe===ar||xe===mp||xe===_p,De=Be.getClearColor(),Oe=Be.getClearAlpha(),We=De.r,He=De.g,Ge=De.b;Ae?(m[0]=We,m[1]=He,m[2]=Ge,m[3]=Oe,y.clearBufferuiv(y.COLOR,0,m)):(x[0]=We,x[1]=He,x[2]=Ge,x[3]=Oe,y.clearBufferiv(y.COLOR,0,x))}else Q|=y.COLOR_BUFFER_BIT}W&&(Q|=y.DEPTH_BUFFER_BIT),Z&&(Q|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),H.dispose(),le.dispose(),re.dispose(),h.dispose(),g.dispose(),G.dispose(),we.dispose(),Ke.dispose(),q.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",zt),Xe.removeEventListener("sessionend",ot),Se&&(Se.dispose(),Se=null),Wt.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ne.autoReset,W=se.enabled,Z=se.autoUpdate,Q=se.needsUpdate,K=se.type;mt(),ne.autoReset=w,se.enabled=W,se.autoUpdate=Z,se.needsUpdate=Q,se.type=K}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ve(w){const W=w.target;W.removeEventListener("dispose",ve),Ue(W)}function Ue(w){Pe(w),re.remove(w)}function Pe(w){const W=re.get(w).programs;W!==void 0&&(W.forEach(function(Z){q.releaseProgram(Z)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Z,Q,K,xe){W===null&&(W=ye);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,De=qp(w,W,Z,Q,K);z.setMaterial(Q,Ae);let Oe=Z.index,We=1;if(Q.wireframe===!0){if(Oe=N.getWireframeAttribute(Z),Oe===void 0)return;We=2}const He=Z.drawRange,Ge=Z.attributes.position;let gt=He.start*We,sn=(He.start+He.count)*We;xe!==null&&(gt=Math.max(gt,xe.start*We),sn=Math.min(sn,(xe.start+xe.count)*We)),Oe!==null?(gt=Math.max(gt,0),sn=Math.min(sn,Oe.count)):Ge!=null&&(gt=Math.max(gt,0),sn=Math.min(sn,Ge.count));const bt=sn-gt;if(bt<0||bt===1/0)return;we.setup(K,Q,De,Z,Oe);let zn,pt=Ce;if(Oe!==null&&(zn=I.get(Oe),pt=be,pt.setIndex(zn)),K.isMesh)Q.wireframe===!0?(z.setLineWidth(Q.wireframeLinewidth*Ve()),pt.setMode(y.LINES)):pt.setMode(y.TRIANGLES);else if(K.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),z.setLineWidth(Ye*Ve()),K.isLineSegments?pt.setMode(y.LINES):K.isLineLoop?pt.setMode(y.LINE_LOOP):pt.setMode(y.LINE_STRIP)}else K.isPoints?pt.setMode(y.POINTS):K.isSprite&&pt.setMode(y.TRIANGLES);if(K.isBatchedMesh)pt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)pt.renderInstances(gt,bt,K.count);else if(Z.isInstancedBufferGeometry){const Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,lo=Math.min(Z.instanceCount,Ye);pt.renderInstances(gt,bt,lo)}else pt.render(gt,bt)};function st(w,W,Z){w.transparent===!0&&w.side===ii&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,zs(w,W,Z),w.side=Oi,w.needsUpdate=!0,zs(w,W,Z),w.side=ii):zs(w,W,Z)}this.compile=function(w,W,Z=null){Z===null&&(Z=w),_=le.get(Z),_.init(),A.push(_),Z.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),w!==Z&&w.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(E._useLegacyLights);const Q=new Set;return w.traverse(function(K){const xe=K.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const De=xe[Ae];st(De,Z,K),Q.add(De)}else st(xe,Z,K),Q.add(xe)}),A.pop(),_=null,Q},this.compileAsync=function(w,W,Z=null){const Q=this.compile(w,W,Z);return new Promise(K=>{function xe(){if(Q.forEach(function(Ae){re.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){K(w);return}setTimeout(xe,10)}P.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let at=null;function Tt(w){at&&at(w)}function zt(){Wt.stop()}function ot(){Wt.start()}const Wt=new Up;Wt.setAnimationLoop(Tt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){at=w,Xe.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},Xe.addEventListener("sessionstart",zt),Xe.addEventListener("sessionend",ot),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(W),W=Xe.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,W,R),_=le.get(w,A.length),_.init(),A.push(_),Me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,ce=me.init(this.clippingPlanes,pe),v=H.get(w,p.length),v.init(),p.push(v),Dn(w,W,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(J,ae),this.info.render.frame++,ce===!0&&me.beginShadows();const Z=_.state.shadowsArray;if(se.render(Z,w,W),ce===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(v,w),_.setupLights(E._useLegacyLights),W.isArrayCamera){const Q=W.cameras;for(let K=0,xe=Q.length;K<xe;K++){const Ae=Q[K];Ac(v,w,Ae,Ae.viewport)}}else Ac(v,w,W);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(E,w,W),we.resetDefaultState(),k=-1,S=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Dn(w,W,Z,Q){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){Q&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const Ae=G.update(w),De=w.material;De.visible&&v.push(w,Ae,De,Z,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const Ae=G.update(w),De=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Le.copy(Ae.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(De)){const Oe=Ae.groups;for(let We=0,He=Oe.length;We<He;We++){const Ge=Oe[We],gt=De[Ge.materialIndex];gt&&gt.visible&&v.push(w,Ae,gt,Z,Le.z,Ge)}}else De.visible&&v.push(w,Ae,De,Z,Le.z,null)}}const xe=w.children;for(let Ae=0,De=xe.length;Ae<De;Ae++)Dn(xe[Ae],W,Z,Q)}function Ac(w,W,Z,Q){const K=w.opaque,xe=w.transmissive,Ae=w.transparent;_.setupLightsView(Z),ce===!0&&me.setGlobalState(E.clippingPlanes,Z),xe.length>0&&$p(K,xe,W,Z),Q&&z.viewport(C.copy(Q)),K.length>0&&Vs(K,W,Z),xe.length>0&&Vs(xe,W,Z),Ae.length>0&&Vs(Ae,W,Z),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function $p(w,W,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const xe=V.isWebGL2;Se===null&&(Se=new cr(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Is:Li,minFilter:Ps,samples:xe?4:0})),E.getDrawingBufferSize(Re),xe?Se.setSize(Re.x,Re.y):Se.setSize(Bl(Re.x),Bl(Re.y));const Ae=E.getRenderTarget();E.setRenderTarget(Se),E.getClearColor(ie),B=E.getClearAlpha(),B<1&&E.setClearColor(16777215,.5),E.clear();const De=E.toneMapping;E.toneMapping=wi,Vs(w,Z,Q),T.updateMultisampleRenderTarget(Se),T.updateRenderTargetMipmap(Se);let Oe=!1;for(let We=0,He=W.length;We<He;We++){const Ge=W[We],gt=Ge.object,sn=Ge.geometry,bt=Ge.material,zn=Ge.group;if(bt.side===ii&&gt.layers.test(Q.layers)){const pt=bt.side;bt.side=nn,bt.needsUpdate=!0,Rc(gt,Z,Q,sn,bt,zn),bt.side=pt,bt.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(Se),T.updateRenderTargetMipmap(Se)),E.setRenderTarget(Ae),E.setClearColor(ie,B),E.toneMapping=De}function Vs(w,W,Z){const Q=W.isScene===!0?W.overrideMaterial:null;for(let K=0,xe=w.length;K<xe;K++){const Ae=w[K],De=Ae.object,Oe=Ae.geometry,We=Q===null?Ae.material:Q,He=Ae.group;De.layers.test(Z.layers)&&Rc(De,W,Z,Oe,We,He)}}function Rc(w,W,Z,Q,K,xe){w.onBeforeRender(E,W,Z,Q,K,xe),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(E,W,Z,Q,w,xe),K.transparent===!0&&K.side===ii&&K.forceSinglePass===!1?(K.side=nn,K.needsUpdate=!0,E.renderBufferDirect(Z,W,Q,K,w,xe),K.side=Oi,K.needsUpdate=!0,E.renderBufferDirect(Z,W,Q,K,w,xe),K.side=ii):E.renderBufferDirect(Z,W,Q,K,w,xe),w.onAfterRender(E,W,Z,Q,K,xe)}function zs(w,W,Z){W.isScene!==!0&&(W=ye);const Q=re.get(w),K=_.state.lights,xe=_.state.shadowsArray,Ae=K.state.version,De=q.getParameters(w,K.state,xe,W,Z),Oe=q.getProgramCacheKey(De);let We=Q.programs;Q.environment=w.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(w.isMeshStandardMaterial?g:h).get(w.envMap||Q.environment),We===void 0&&(w.addEventListener("dispose",ve),We=new Map,Q.programs=We);let He=We.get(Oe);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===Ae)return wc(w,De),He}else De.uniforms=q.getUniforms(w),w.onBuild(Z,De,E),w.onBeforeCompile(De,E),He=q.acquireProgram(De,Oe),We.set(Oe,He),Q.uniforms=De.uniforms;const Ge=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=me.uniform),wc(w,De),Q.needsLights=Kp(w),Q.lightsStateVersion=Ae,Q.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMap.value=K.state.directionalShadowMap,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotShadowMap.value=K.state.spotShadowMap,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMap.value=K.state.pointShadowMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Cc(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=ba.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function wc(w,W){const Z=re.get(w);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function qp(w,W,Z,Q,K){W.isScene!==!0&&(W=ye),T.resetTextureUnits();const xe=W.fog,Ae=Q.isMeshStandardMaterial?W.environment:null,De=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ci,Oe=(Q.isMeshStandardMaterial?g:h).get(Q.envMap||Ae),We=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,sn=!!Z.morphAttributes.color;let bt=wi;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=E.toneMapping);const zn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pt=zn!==void 0?zn.length:0,Ye=re.get(Q),lo=_.state.lights;if(ce===!0&&(pe===!0||w!==S)){const fn=w===S&&Q.id===k;me.setState(Q,w,fn)}let _t=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==lo.state.version||Ye.outputColorSpace!==De||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||Ye.envMap!==Oe||Q.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==me.numPlanes||Ye.numIntersection!==me.numIntersection)||Ye.vertexAlphas!==We||Ye.vertexTangents!==He||Ye.morphTargets!==Ge||Ye.morphNormals!==gt||Ye.morphColors!==sn||Ye.toneMapping!==bt||V.isWebGL2===!0&&Ye.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,Ye.__version=Q.version);let Gi=Ye.currentProgram;_t===!0&&(Gi=zs(Q,W,K));let Lc=!1,ts=!1,co=!1;const Bt=Gi.getUniforms(),Vi=Ye.uniforms;if(z.useProgram(Gi.program)&&(Lc=!0,ts=!0,co=!0),Q.id!==k&&(k=Q.id,ts=!0),Lc||S!==w){Bt.setValue(y,"projectionMatrix",w.projectionMatrix),Bt.setValue(y,"viewMatrix",w.matrixWorldInverse);const fn=Bt.map.cameraPosition;fn!==void 0&&fn.setValue(y,Le.setFromMatrixPosition(w.matrixWorld)),V.logarithmicDepthBuffer&&Bt.setValue(y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Bt.setValue(y,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,ts=!0,co=!0)}if(K.isSkinnedMesh){Bt.setOptional(y,K,"bindMatrix"),Bt.setOptional(y,K,"bindMatrixInverse");const fn=K.skeleton;fn&&(V.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Bt.setValue(y,"boneTexture",fn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Bt.setOptional(y,K,"batchingTexture"),Bt.setValue(y,"batchingTexture",K._matricesTexture,T));const uo=Z.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0&&V.isWebGL2===!0)&&Te.update(K,Z,Gi),(ts||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,Bt.setValue(y,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Vi.envMap.value=Oe,Vi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ts&&(Bt.setValue(y,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&jp(Vi,co),xe&&Q.fog===!0&&D.refreshFogUniforms(Vi,xe),D.refreshMaterialUniforms(Vi,Q,te,Y,Se),ba.upload(y,Cc(Ye),Vi,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ba.upload(y,Cc(Ye),Vi,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Bt.setValue(y,"center",K.center),Bt.setValue(y,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(y,"normalMatrix",K.normalMatrix),Bt.setValue(y,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const fn=Q.uniformsGroups;for(let fo=0,Zp=fn.length;fo<Zp;fo++)if(V.isWebGL2){const Pc=fn[fo];Ke.update(Pc,Gi),Ke.bind(Pc,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function jp(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Kp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,W,Z){re.get(w.texture).__webglTexture=W,re.get(w.depthTexture).__webglTexture=Z;const Q=re.get(w);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const Z=re.get(w);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Z=0){R=w,L=W,b=Z;let Q=!0,K=null,xe=!1,Ae=!1;if(w){const Oe=re.get(w);Oe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(y.FRAMEBUFFER,null),Q=!1):Oe.__webglFramebuffer===void 0?T.setupRenderTarget(w):Oe.__hasExternalTextures&&T.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const He=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[W])?K=He[W][Z]:K=He[W],xe=!0):V.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?K=re.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[Z]:K=He,C.copy(w.viewport),X.copy(w.scissor),O=w.scissorTest}else C.copy(oe).multiplyScalar(te).floor(),X.copy(ue).multiplyScalar(te).floor(),O=fe;if(z.bindFramebuffer(y.FRAMEBUFFER,K)&&V.drawBuffers&&Q&&z.drawBuffers(w,K),z.viewport(C),z.scissor(X),z.setScissorTest(O),xe){const Oe=re.get(w.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,Z)}else if(Ae){const Oe=re.get(w.texture),We=W||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,We)}k=-1},this.readRenderTargetPixels=function(w,W,Z,Q,K,xe,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){z.bindFramebuffer(y.FRAMEBUFFER,De);try{const Oe=w.texture,We=Oe.format,He=Oe.type;if(We!==An&&_e.convert(We)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===Is&&(P.has("EXT_color_buffer_half_float")||V.isWebGL2&&P.has("EXT_color_buffer_float"));if(He!==Li&&_e.convert(He)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===bi&&(V.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-Q&&Z>=0&&Z<=w.height-K&&y.readPixels(W,Z,Q,K,_e.convert(We),_e.convert(He),xe)}finally{const Oe=R!==null?re.get(R).__webglFramebuffer:null;z.bindFramebuffer(y.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,W,Z=0){const Q=Math.pow(2,-Z),K=Math.floor(W.image.width*Q),xe=Math.floor(W.image.height*Q);T.setTexture2D(W,0),y.copyTexSubImage2D(y.TEXTURE_2D,Z,0,0,w.x,w.y,K,xe),z.unbindTexture()},this.copyTextureToTexture=function(w,W,Z,Q=0){const K=W.image.width,xe=W.image.height,Ae=_e.convert(Z.format),De=_e.convert(Z.type);T.setTexture2D(Z,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Q,w.x,w.y,K,xe,Ae,De,W.image.data):W.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Q,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,Ae,W.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,Q,w.x,w.y,Ae,De,W.image),Q===0&&Z.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Z,Q,K=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,Ae=w.max.y-w.min.y+1,De=w.max.z-w.min.z+1,Oe=_e.convert(Q.format),We=_e.convert(Q.type);let He;if(Q.isData3DTexture)T.setTexture3D(Q,0),He=y.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)T.setTexture2DArray(Q,0),He=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Q.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ge=y.getParameter(y.UNPACK_ROW_LENGTH),gt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),sn=y.getParameter(y.UNPACK_SKIP_PIXELS),bt=y.getParameter(y.UNPACK_SKIP_ROWS),zn=y.getParameter(y.UNPACK_SKIP_IMAGES),pt=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,w.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,w.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?y.texSubImage3D(He,K,W.x,W.y,W.z,xe,Ae,De,Oe,We,pt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(He,K,W.x,W.y,W.z,xe,Ae,De,Oe,pt.data)):y.texSubImage3D(He,K,W.x,W.y,W.z,xe,Ae,De,Oe,We,pt),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ge),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,gt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,sn),y.pixelStorei(y.UNPACK_SKIP_ROWS,bt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,zn),K===0&&Q.generateMipmaps&&y.generateMipmap(He),z.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){L=0,b=0,R=null,z.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===xc?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===ro?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?lr:Sp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lr?It:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kT extends zp{}kT.prototype.isWebGL1Renderer=!0;class GT extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class VT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new j;class Va{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ri(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ri(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ri(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ri(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Pn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Va(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wp extends ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wr;const cs=new j,Lr=new j,Pr=new j,Ir=new je,us=new je,Xp=new wt,Ea=new j,fs=new j,xa=new j,pd=new je,al=new je,md=new je;class zT extends rn{constructor(e=new Wp){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new fi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new VT(n,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new Va(i,3,0,!1)),wr.setAttribute("uv",new Va(i,2,3,!1))}this.geometry=wr,this.material=e,this.center=new je(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),Xp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Pr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Sa(Ea.set(-.5,-.5,0),Pr,a,Lr,r,s),Sa(fs.set(.5,-.5,0),Pr,a,Lr,r,s),Sa(xa.set(.5,.5,0),Pr,a,Lr,r,s),pd.set(0,0),al.set(1,0),md.set(1,1);let o=e.ray.intersectTriangle(Ea,fs,xa,!1,cs);if(o===null&&(Sa(fs.set(-.5,.5,0),Pr,a,Lr,r,s),al.set(0,1),o=e.ray.intersectTriangle(Ea,xa,fs,!1,cs),o===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||n.push({distance:l,point:cs.clone(),uv:_n.getInterpolation(cs,Ea,fs,xa,pd,al,md,new je),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sa(t,e,n,i,r,s){Ir.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(us.x=s*Ir.x-r*Ir.y,us.y=r*Ir.x+s*Ir.y):us.copy(Ir),t.copy(e),t.x+=us.x,t.y+=us.y,t.applyMatrix4(Xp)}class WT extends Jt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tc extends fi{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new j,u=new je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const m=i+f/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Vn(a,3)),this.setAttribute("normal",new Vn(o,3)),this.setAttribute("uv",new Vn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const _d={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class XT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const YT=new XT;class bc{constructor(e){this.manager=e!==void 0?e:YT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class $T extends bc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=_d.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ds("img");function l(){u(),_d.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class qT extends bc{constructor(e){super(e)}load(e,n,i,r){const s=new Jt,a=new $T(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class jT{constructor(e,n,i=0,r=1/0){this.ray=new Rp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return kl(e,this,i,n),i.sort(gd),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)kl(e[r],this,i,n);return i.sort(gd),i}}function gd(t,e){return t.distance-e.distance}function kl(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)kl(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const Yp=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},KT={__name:"WorldMap",emits:["city-selected"],setup(t,{emit:e}){const n=e,i=Pt(),r=Pt([]),{locale:s}=Fs();let a,o,l,c,u=[];Za(()=>{d(),f(s.value)}),Ri(s,v=>{f(v)});async function f(v){try{const _=await D0(Object.assign({"../assets/de-projects.json":()=>$u(()=>import("./de-projects-q6RnUaUY.js"),[]),"../assets/en-projects.json":()=>$u(()=>import("./en-projects-DeNnv0OO.js"),[])}),`../assets/${v}-projects.json`,3);r.value=Object.entries(_.default).map(([p,A])=>({name:p,...A})),m()}catch(_){console.error(`Failed to load ${v}-projects.json`,_),r.value=[]}}function d(){const v=i.value.clientWidth,_=window.innerHeight*.8;a=new GT,o=new Op(v/-2,v/2,_/2,_/-2,.1,1e3),o.position.z=500,l=new zp({antialias:!0}),l.setSize(v,_),l.setClearColor(16777215,1),i.value.appendChild(l.domElement),new qT().load("/worldmap-quiz/world-map.jpg",E=>{const b=new ao(1250,700),R=new Ga({map:E,transparent:!0});c=new Hn(b,R),a.add(c),l.render(a,o)}),x()}function m(){var p;u.forEach(({mesh:A,tooltip:E})=>{a.remove(A),a.remove(E)}),u=[];const v=1250,_=700;for(const A of r.value){if(!A.title)continue;const E=(A.lon+180)/360,M=(90-A.lat)/180,L=(E-.5)*v,b=(.5-M)*_,R=new Tc(9,32),S={education:3049182,health:2667619,environment:15844367}[(p=A.program)==null?void 0:p.toLowerCase()]||14432031,C=new Ga({color:S}),X=new Hn(R,C);X.position.set(L,b,1),a.add(X);const O=document.createElement("canvas");O.width=300,O.height=80;const ie=O.getContext("2d");ie.fillStyle="rgba(0, 0, 0, 0.95)",ie.fillRect(0,0,O.width,O.height),ie.fillStyle="white",ie.font="50px Arial",ie.fillText(A.name,15,50);const B=new WT(O),$=new Wp({map:B}),Y=new zT($);Y.scale.set(120,30,1),Y.position.set(L,b+20,1.1),Y.visible=!1,a.add(Y),X.userData.tooltip=Y,u.push({mesh:X,tooltip:Y,name:A.name,coords:{lat:A.lat,lon:A.lon}})}l.render(a,o)}function x(){const v=new jT,_=new je;l.domElement.addEventListener("mousemove",p=>{const A=l.domElement.getBoundingClientRect();_.x=(p.clientX-A.left)/A.width*2-1,_.y=-((p.clientY-A.top)/A.height)*2+1,v.setFromCamera(_,o);const E=v.intersectObjects(u.map(M=>M.mesh));for(const M of u)M.tooltip.visible=!1;if(E.length>0){const M=E[0].object,L=u.find(b=>b.mesh===M);L&&(L.tooltip.visible=!0)}l.render(a,o)}),l.domElement.addEventListener("click",p=>{const A=l.domElement.getBoundingClientRect(),E=(p.clientX-A.left)/A.width*2-1,M=-((p.clientY-A.top)/A.height)*2+1,L=new je(E,M);v.setFromCamera(L,o);const b=v.intersectObjects([c,...u.map(R=>R.mesh)]);if(b.length>0){const R=b[0].object,k=u.find(S=>S.mesh===R);if(k){const S=r.value.find(C=>C.name===k.name);n("city-selected",{city:S.name,title:S.title,program:S.program,description:S.description,videoUrl:S.video,imageUrl:S.image})}}})}return(v,_)=>(gn(),si("div",{ref_key:"container",ref:i,class:"map-container"},null,512))}},ZT=Yp(KT,[["__scopeId","data-v-ec19cdf3"]]),JT={key:0,class:"modal"},QT={class:"modal-header"},eb={class:"title"},tb={class:"program"},nb={class:"content-wrapper"},ib={class:"description"},rb={class:"media"},sb=["src"],ab={key:1,controls:"",autoplay:"",muted:"",playsinline:"",width:"100%",height:"260"},ob=["src"],lb=["src"],cb={__name:"QuizModal",props:["city","title","program","description","videoUrl","imageUrl","visible"],setup(t){const e=t,n="/worldmap-quiz/",i=Rt(()=>e.city),r=Rt(()=>e.title),s=Rt(()=>e.program),a=Rt(()=>e.description),o=Pt(""),l=Rt(()=>e.videoUrl&&/(youtube\.com|youtu\.be)/.test(e.videoUrl));Ri(()=>e.visible,f=>{var d;if(f&&l.value){const m=((d=e.videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/))==null?void 0:d[1])??"";o.value=`https://www.youtube.com/embed/${m}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}else o.value=""});const c=Rt(()=>!e.videoUrl||l.value?"":e.videoUrl.startsWith("http")?e.videoUrl:n+"src/assets/img/"+e.videoUrl),u=Rt(()=>e.imageUrl?e.imageUrl.startsWith("http")?e.imageUrl:n+"src/assets/img/"+e.imageUrl:"");return(f,d)=>(gn(),oc(Lh,{name:"fade-slide"},{default:nc(()=>[t.visible?(gn(),si("div",JT,[Qe("div",QT,[Qe("h2",null,yi(i.value),1),Qe("button",{class:"close-button",onClick:d[0]||(d[0]=m=>f.$emit("close"))},"×")]),Qe("h1",eb,yi(r.value),1),Qe("h3",tb,yi(s.value),1),Qe("div",nb,[Qe("p",ib,yi(a.value),1),Qe("div",rb,[o.value?(gn(),si("iframe",{key:0,src:o.value,frameborder:"0",allow:"autoplay; encrypted-media; fullscreen",class:"youtube-iframe"},null,8,sb)):c.value?(gn(),si("video",ab,[Qe("source",{src:c.value,type:"video/mp4"},null,8,ob)])):u.value?(gn(),si("img",{key:2,src:u.value,alt:"City Image",width:"100%",height:"260"},null,8,lb)):gl("",!0)])])])):gl("",!0)]),_:1}))}},ub="/worldmap-quiz/assets/ethiopia-1-POitI-fV.png",fb="/worldmap-quiz/assets/ethiopia-2-bqSTNW7I.png",db="/worldmap-quiz/assets/ethiopia-3-CUYvURTn.png",hb="/worldmap-quiz/assets/ethiopia-4-BUw8L_66.png",pb={name:"EthiopiaSponsorship",props:{visible:{type:Boolean,required:!0}},data(){return{modalImage:ub,sections:[{title:"1 Child",content:`Your sponsorship primarily supports the basic needs of a child in Ethiopia.
            It is tailored to the needs of the sponsored child and improves nutrition, access to drinking water and medical care, as well as schooling.`,image:fb},{title:"2 Family",content:`The family of the sponsored child in Ethiopia benefits in three ways: through the support of their child,
            through the support of the project community, and through learning how to lead an independent life.
            This includes training on income generation or parenting skills.`,image:db},{title:"3 Project Community",content:`With your sponsorship contributions, you also support the entire project community in Ethiopia.
            For example, through the construction of new wells or with agricultural training.
            This allows the communities to gradually become independent of financial aid.
            Not only the child benefits from the sponsorship, but the entire village community.`,image:hb}]}},methods:{close(){this.$emit("update:visible",!1)}}},mb={key:0,class:"modal"},_b={class:"modal-header"},gb={class:"scrollable-content"},vb=["src"],Eb={class:"section-header"},xb={class:"section-title"},Sb={class:"section-content"},Mb=["src"];function yb(t,e,n,i,r,s){return gn(),oc(Lh,{name:"fade-slide"},{default:nc(()=>[n.visible?(gn(),si("div",mb,[Qe("div",_b,[e[1]||(e[1]=Qe("h2",{class:"title"},"Ethiopia",-1)),Qe("button",{class:"close-button",onClick:e[0]||(e[0]=a=>t.$emit("close"))},"×")]),e[4]||(e[4]=Qe("div",{class:"static-header"},[Qe("h1",null,"Sponsorships for children in Ethiopia")],-1)),Qe("div",gb,[Qe("img",{src:r.modalImage,alt:"",class:"section-image"},null,8,vb),e[2]||(e[2]=Qe("div",{class:"intro-text"},[_l(" With one Sponsorship you can help children in Ethiopia through investments in educational opportunities. Your help also aids in building wells, latrines and sanitation facilities, and diseases protection. Expectant mothers and toddlers are medically cared for. Poor families receive aid and nutrition is supported. This creates a beneficial environment for whole communities! "),Qe("br"),Qe("br"),_l(" An Ethiopian child benefits from their sponsorship, which enables them to attend school. ")],-1)),(gn(!0),si(cn,null,r_(r.sections,(a,o)=>(gn(),si("div",{class:"section",key:o},[Qe("div",Eb,[Qe("div",xb,yi(a.title),1)]),Qe("div",Sb,yi(a.content),1),Qe("img",{src:a.image,alt:"",class:"section-content-image"},null,8,Mb)]))),128)),e[3]||(e[3]=Qe("div",{class:"video-container"},[Qe("iframe",{class:"video-embed",src:"https://www.youtube.com/embed/C3tKCzOrde8?start=5",title:"Ethiopia Sponsorship Video",allowfullscreen:""})],-1))])])):gl("",!0)]),_:1})}const Tb=Yp(pb,[["render",yb],["__scopeId","data-v-394250c8"]]),bb={class:"menu"},Ab={__name:"App",setup(t){const e=Pt(null),n=Pt(""),i=Pt(""),r=Pt(""),s=Pt(""),a=Pt(""),o=Pt(null),{locale:l}=Fs(),c=Pt(l.value);function u(){l.value=l.value==="en"?"de":"en",c.value=l.value}function f({city:d,title:m,program:x,description:v,videoUrl:_,imageUrl:p}){console.log("Selected: ",d),d!=="Ethiopia"&&d!=="Äthiopien"?(e.value=d,n.value=m,i.value=x,r.value=v,s.value=_,a.value=p):o.value=d}return(d,m)=>(gn(),si("div",null,[Qe("header",bb,[m[2]||(m[2]=Qe("img",{src:yg,alt:"Brand Logo",class:"brand-logo"},null,-1)),Qe("button",{onClick:u},yi(c.value),1)]),Nt(ZT,{onCitySelected:f}),Nt(cb,{city:e.value,title:n.value,program:i.value,description:r.value,videoUrl:s.value,imageUrl:a.value,visible:!!e.value,onClose:m[0]||(m[0]=x=>e.value=null)},null,8,["city","title","program","description","videoUrl","imageUrl","visible"]),Nt(Tb,{visible:!!o.value,onClose:m[1]||(m[1]=x=>o.value=null)},null,8,["visible"])]))}},Rb={en:{question:"What country is this city in?"},de:{question:"In welchem Land liegt diese Stadt?"}},Cb=x0({legacy:!1,locale:"en",messages:Rb});xg(Ab).use(Cb).mount("#app");
